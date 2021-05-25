---
solution: Campaign v8
product: Adobe Campaign
title: Campaignデータベースマッピング
description: Campaignデータベースマッピング
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '1464'
ht-degree: 0%

---

# データベースマッピング{#database-mapping}

サンプルスキーマのSQLマッピングは、次のXMLドキュメントを提供します。

```
<schema mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:schema">
  <enumeration basetype="byte" name="gender">    
    <value label="Not specified" name="unknown" value="0"/>    
    <value label="Male" name="male" value="1"/>    
    <value label="Female" name="female" value="2"/> 
  </enumeration>  

  <element name="recipient" sqltable="CusRecipient">    
    <attribute desc="Recipient e-mail address" label="Email" length="80" name="email" sqlname="sEmail" type="string"/>    
    <attribute default="GetDate()" label="Date of creation" name="created" sqlname="tsCreated" type="datetime"/>    
    <attribute enum="gender" label="Gender" name="gender" sqlname="iGender" type="byte"/>    
    <element label="Location" name="location">      
      <attribute label="City" length="50" name="city" sqlname="sCity" type="string" userEnum="city"/>    
    </element>  
  </element>
</schema>
```

## 説明 {#description}

スキーマのルート要素は&#x200B;**`<srcschema>`**&#x200B;ではなく、**`<schema>`**&#x200B;です。

これにより、別のタイプのドキュメントが表示されます。このドキュメントは、ソーススキーマから自動的に生成され、単にスキーマと呼ばれます。 このスキーマは、Adobe Campaignアプリケーションで使用されます。

SQL名は、要素名とタイプに基づいて自動的に決定されます。

SQLの命名規則は次のとおりです。

* 表：スキーマの名前空間と名前の連結

   この例では、**sqltable**&#x200B;属性にスキーマのメイン要素を使用してテーブル名を入力します。

   ```
   <element name="recipient" sqltable="CusRecipient">
   ```

* フィールド：型に従って定義されたプレフィックスが付く要素の名前（整数の場合は「i」、倍精度の場合は「d」、文字列の場合は「s」、日付の場合は「ts」など）

   フィールド名は、型指定された各&#x200B;**`<attribute>`**&#x200B;と&#x200B;**`<element>`**&#x200B;の&#x200B;**sqlname**&#x200B;属性を使用して入力します。

   ```
   <attribute desc="E-mail address of recipient" label="Email" length="80" name="email" sqlname="sEmail" type="string"/> 
   ```

>[!NOTE]
>
>ソーススキーマからSQL名をオーバーロードできます。 これを行うには、関連する要素に「sqltable」または「sqlname」属性を設定します。

拡張スキーマから生成されるテーブルを作成するSQLスクリプトは、次のとおりです。

```
CREATE TABLE CusRecipient(
  iGender NUMERIC(3) NOT NULL Default 0,   
  sCity VARCHAR(50),   
  sEmail VARCHAR(80),
  tsCreated TIMESTAMP Default NULL);
```

SQLフィールドの制約は次のとおりです。

* 数値フィールドと日付フィールドにnull値は含まれません。
* 数値フィールドは0に初期化されます。

## XMLフィールド{#xml-fields}

デフォルトでは、型指定された&#x200B;**`<attribute>`**&#x200B;要素と&#x200B;**`<element>`**&#x200B;要素は、データスキーマテーブルのSQLフィールドにマッピングされます。 ただし、SQLではなくXMLでこのフィールドを参照することは可能です。つまり、データは、すべてのXMLフィールドの値を含むテーブルのメモ型フィールド(「mData」)に格納されます。 これらのデータのストレージは、スキーマ構造を監視するXMLドキュメントです。

XMLでフィールドに値を入力するには、**xml**&#x200B;属性に値「true」を追加する必要があります。

**例**:XMLフィールドの使用例を2つ示します。

* 複数行コメントフィールド：

   ```
   <element name="comment" xml="true" type="memo" label="Comment"/>
   ```

* HTML形式のデータの説明：

   ```
   <element name="description" xml="true" type="html" label="Description"/>
   ```

   「html」タイプを使用すると、HTMLコンテンツをCDATAタグに格納し、Adobe Campaignクライアントインターフェイスに特別なHTML編集チェックを表示できます。

XMLフィールドを使用すると、データベースの物理構造を変更する必要なく、フィールドを追加できます。 もう1つの利点は、使用するリソースが少ないこと（SQLフィールドに割り当てるサイズ、テーブルあたりのフィールド数の制限など）です。

## 鍵の管理 {#management-of-keys}

テーブルには、テーブル内のレコードを識別するキーが少なくとも1つ必要です。

キーは、データスキーマのメイン要素から宣言します。

```
<key name="name_of_key">
  <keyfield xpath="xpath_of_field1"/>
  <keyfield xpath="xpath_of_field2"/>
  ...
</key>
```

キーは、次の規則に従います。

* キーは、テーブル内の1つ以上のフィールドを参照できます。
* キーは、入力されるスキーマ内で最初に出現する場合、または値が「true」の&#x200B;**internal**&#x200B;属性が含まれる場合に、「プライマリ」（または「優先度」）と呼ばれます。

**例**：

* 電子メールアドレスと市区町村にキーを追加する：

   ```
   <srcSchema name="recipient" namespace="cus">
     <element name="recipient">
       <key name="email">
         <keyfield xpath="@email"/> 
         <keyfield xpath="location/@city"/> 
       </key>
   
       <attribute name="email" type="string" length="80" label="Email" desc="E-mail address of recipient"/>
       <element name="location" label="Location">
         <attribute name="city" type="string" length="50" label="City" userEnum="city"/>
       </element>
     </element>
   </srcSchema>
   ```

   生成されるスキーマ：

   ```
   <schema mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:schema">  
     <element name="recipient" sqltable="CusRecipient">    
      <key name="email">      
       <keyfield xpath="@email"/>      
       <keyfield xpath="location/@city"/>    
      </key>    
   
      <attribute desc="E-mail address of recipient" label="Email" length="80" name="email" sqlname="sEmail" type="string"/>    
      <element label="Location" name="location">      
        <attribute label="City" length="50" name="city" sqlname="sCity" type="string" userEnum="city"/>    
      </element>  
     </element>
   </schema>
   ```

* 「id」名前フィールドにプライマリキーまたは内部キーを追加する：

   ```
   <srcSchema name="recipient" namespace="cus">
     <element name="recipient">
       <key name="id" internal="true">
         <keyfield xpath="@id"/> 
       </key>
   
       <key name="email">
         <keyfield xpath="@email"/> 
       </key>
   
       <attribute name="id" type="long" label="Identifier"/>
       <attribute name="email" type="string" length="80" label="Email" desc="E-mail address of recipient"/>
     </element>
   </srcSchema>
   ```

   生成されるスキーマ：

   ```
   <schema mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:schema">  
     <element name="recipient" sqltable="CusRecipient">    
       <key name="email">      
         <keyfield xpath="@email"/>    
       </key>  
   
       <key internal="true" name="id">      
        <keyfield xpath="@id"/>    
       </key>    
   
       <attribute label="Identifier" name="id" sqlname="iRecipientId" type="long"/>    
       <attribute desc="E-mail address of recipient" label="Email" length="80" name="email" sqlname="sEmail" type="string"/>  
     </element>
   </schema>
   ```

### プライマリキー — 識別子

Adobe Campaignテーブルのプライマリキーは、データベースエンジンによって自動生成される&#x200B;**ユニバーサル固有ID(UUID)**&#x200B;です。 キー値は、データベース全体で一意です。 レコードの挿入時に、キーのコンテンツが自動的に生成されます。

**例**

ソーススキーマでの増分キーの宣言：

```
<srcSchema name="recipient" namespace="cus">
  <element name="recipient" autouuid="true">
  ...
  </element>
</srcSchema>
```

生成されるスキーマ：

```
<schema mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:schema">  
  <element name="recipient" autouuid="true" sqltable="CusRecipient"> 

    <key internal="true" name="id">
      <keyfield xpath="@id"/>
    </key>

    <attribute desc="Internal primary key" label="Primary key" name="id" sqlname="iRecipientId" type="long"/>
  </element>
</schema>
```

キーの定義に加えて、自動生成されたプライマリキーを含めるために、拡張スキーマに「id」という数値フィールドが追加されました。

>[!CAUTION]
>
>プライマリキーが0に設定されたレコードは、テーブルの作成時に自動的に挿入されます。 このレコードは、ボリュームテーブルでは有効でない外部結合を避けるために使用されます。 デフォルトでは、すべての外部キーは値0で初期化され、データ項目が入力されていない場合、結合時に結果が常に返されるようになります。

## リンク：テーブル間の関係{#links--relation-between-tables}

リンクは、テーブル間の関連付けを示します。

様々な種類の関連付け（「基数」と呼ばれます）は次のとおりです。

* 基数1-1:ソーステーブルの1つの出現に対応するターゲットテーブルの出現を最大1つに制限します。
* 基数1 ～ N:ソーステーブルの1つの出現に対応するターゲットテーブルの複数の出現が可能ですが、ターゲットテーブルの1つの出現に対応するソーステーブルの出現は最大1つに制限されます。
* 基数N-N:ソーステーブルの1つの出現に対応するターゲットテーブルの複数の出現、またはその逆。

インターフェイスでは、アイコンを使用して、様々なタイプの関係を簡単に区別できます。

キャンペーンテーブル/データベースとの結合関係の場合：

* ![](assets/do-not-localize/join_with_campaign11.png) :基数1-1例えば、受信者と現在の注文の間などです。 1人の受信者は、一度に1つの現在の注文テーブルにのみ関連付けることができます。
* ![](assets/do-not-localize/externaljoin11.png) :基数1-1、外部結合。例えば、受信者とその国の間で使用します。 1人の受信者は、1つのテーブルの国にのみ関連付けることができます。 国テーブルの内容は保存されません。
* ![](assets/do-not-localize/join_with_campaign1n.png) :基数1-N例えば、受信者と購読テーブルの間などです。受信者は、購読テーブルでの複数の出現に関連付けることができます。

Federated Database Accessを使用した結合リレーションの場合：

* ![](assets/do-not-localize/join_fda_11.png) :基数1-1
* ![](assets/do-not-localize/join_fda_1m.png) :基数1-N

:bulb:FDAテーブルについて詳しくは、[Federated Data Access](../connect/fda.md)を参照してください。

リンクは、メイン要素を介してリンクされたテーブルの外部キーを含むスキーマ内で宣言する必要があります。

```
<element name="name_of_link" type="link" target="key_of_destination_schema">
  <join xpath-dst="xpath_of_field1_destination_table" xpath-src="xpath_of_field1_source_table"/>
  <join xpath-dst="xpath_of_field2_destination_table" xpath-src="xpath_of_field2_source_table"/>
  ...
</element>
```

リンクは次の規則に従います。

* リンクの定義は、次の属性を持つ&#x200B;**link**-type **`<element>`**&#x200B;に入力されます。

   * **名前**:ソーステーブルからのリンク名
   * **ターゲット**:ターゲットスキーマ名
   * **ラベル**:リンクラベル
   * **revLink** （オプション）:ターゲットスキーマからのリバースリンクの名前（デフォルトで自動的に推定）
   * **整合性** （オプション）:ターゲット・テーブルの出現に対するソース・テーブルの出現の参照整合性。次の値を指定できます。

      * **定義**:ターゲットオカレンスで参照されなくなったソースオカレンスは、削除できます。
      * **通常**:ソースオカレンスを削除すると、ターゲットオカレンス（デフォルトモード）へのリンクのキーが初期化され、このタイプの整合性は、すべての外部キーを初期化します。
      * **own**:ソースオカレンスを削除すると、ターゲットオカレンスが削除されます。
      * **owncopy**: **own** （削除の場合）と同じ、または発生した項目を複製（複製の場合）
      * **neutral**:は何もしません。
   * **revIntegrity** （オプション）:ターゲット・スキーマの整合性（オプション、デフォルトは「通常」）
   * **revCardinality** （オプション）:値が「single」の場合は、タイプ1-1の基数が設定されます（デフォルトは1-N）。
   * **externalJoin** （オプション）:外部結合を強制する
   * **revExternalJoin** （オプション）:外側の結合をリバースリンクに強制します。


* リンクは、ソーステーブルから宛先テーブルへ1つ以上のフィールドを参照します。 結合（`<join>`要素）を構成するフィールドは、デフォルトでターゲットスキーマの内部キーを使用して自動的に推測されるので、入力する必要はありません。
* リンクは2つのハーフリンクで構成されます。最初のリンクはソーススキーマから宣言され、2番目のリンクはターゲットスキーマの拡張スキーマに自動的に作成されます。
* **externalJoin**&#x200B;属性が追加され、値が「true」（PostgreSQLでサポート）の場合、結合は外部結合にできます。

>[!NOTE]
>
>リンクは、スキーマの最後に宣言された要素です。

### 例1 {#example-1}

「cus:company」スキーマテーブルに対する1対Nの関係：

```
<srcSchema name="recipient" namespace="cus">
  <element name="recipient">
    ...
    <element label="Company" name="company" revIntegrity="define" revLabel="Contact" target="cus:company" type="link"/>
  </element>
</srcSchema>
```

生成されるスキーマ：

```
<schema mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:schema">  
  <element name="recipient" sqltable="CusRecipient"> 
    ...
    <element label="Company" name="company" revLink="recipient" target="cus:company" type="link">      
      <join xpath-dst="@id" xpath-src="@company-id"/>    
    </element>    
    <attribute advanced="true" label="Foreign key of 'Company' link (field 'id')" name="company-id" sqlname="iCompanyId" type="long"/>
  </element>
</schema>
```

リンク定義は、結合を構成するフィールド(宛先スキーマのXPath(「@id」)を持つプライマリキーと、スキーマのXPath(「@company-id」)を持つ外部キー)で補足されます。

外部キーは、次の命名規則に従って、宛先テーブルの関連フィールドと同じ特性を使用する要素に自動的に追加されます。ターゲットスキーマの名前に、関連するフィールドの名前（この例では「company-id」）を付けます。

ターゲットの拡張スキーマ(「cus:company」):

```
<schema mappingType="sql" name="company" namespace="cus" xtkschema="xtk:schema">  
  <element name="company" sqltable="CusCompany" autouuid="true"> 
    <key internal="true" name="id">      
      <keyfield xpath="@id"/>    
    </key>
    ...
    <attribute desc="Internal primary key" label="Primary key" name="id" sqlname="iCompanyId" type="long"/>
    ...
    <element belongsTo="cus:recipient" integrity="define" label="Contact" name="recipient" revLink="company" target="nms:recipient" type="link" unbound="true">      
      <join xpath-dst="@company-id" xpath-src="@id"/>    
    </element>
  </element>
</schema>
```

次のパラメーターを使用して、「cus:recipient」テーブルへのリバースリンクを追加しました。

* **名前**:ソーススキーマの名前から自動的に推測されます（ソーススキーマのリンク定義の「revLink」属性を使用して強制できます）。
* **revLink**:逆リンク名
* **ターゲット**:リンクされたスキーマのキー（「cus:recipient」スキーマ）
* **unbound**:リンクは、1-N基数のコレクション要素として宣言されます（デフォルトでは）。
* **整合性**:デフォルトでは「定義」（ソーススキーマのリンク定義の「revIntegrity」属性を使用して強制できます）。

### 例2 {#example-2}

この例では、「nms:address」スキーマテーブルへのリンクを宣言します。 結合は外部結合で、受信者の電子メールアドレスと、リンクされたテーブルの「@address」フィールド(「nms:address」)が明示的に設定されます。

```
<srcSchema name="recipient" namespace="cus">
  <element name="recipient"> 
    ...
    <element integrity="neutral" label="Info about email" name="emailInfo" revIntegrity="neutral" revLink="recipient" target="nms:address" type="link" externalJoin="true">      
      <join xpath-dst="@address" xpath-src="@email"/>
    </element>
  </element>
</srcSchema>
```

### 例3 {#example-3}

「cus:extension」スキーマテーブルに対する1-1の関係：

```
<element integrity="own" label="Extension" name="extension" revCardinality="single" revLink="recipient" target="cus:extension" type="link"/>
```

### 例4 {#example-4}

フォルダーへのリンク（「xtk:folder」スキーマ）:

```
<element default="DefaultFolder('nmsFolder')" label="Folder" name="folder" revDesc="Recipients in the folder" revIntegrity="own" revLabel="Recipients" target="xtk:folder" type="link"/>
```

デフォルト値は、「DefaultFolder(&#39;nmsFolder&#39;)」関数で入力された、最初の有効なパラメータータイプファイルの識別子を返します。

### 例5 {#example-5}

この例では、**xlink**&#x200B;属性と(&quot;email&quot;)テーブルのフィールドを持つリンク（&quot;company&quot; to &quot;cus:company&quot;スキーマ）のキーを作成します。

```
<srcSchema name="recipient" namespace="cus">
  <element name="recipient">
    <key name="companyEmail"> 
      <keyfield xpath="@email"/>
      <keyfield xlink="company"/>
    </key>
    
    <attribute name="email" type="string" length="80" label="Email" desc="Recipient email"/>
    <element label="Company" name="company" revIntegrity="define" revLabel="Contact" target="cus:company" type="link"/>
  </element>
</srcSchema>
```

生成されるスキーマ：

```
<schema mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:schema">  
  <element name="recipient" sqltable="CusRecipient"> 
    <key name="companyEmail">      
      <keyfield xpath="@email"/>      
      <keyfield xpath="@company-id"/>    
    </key>

    <attribute desc="E-mail address of recipient" label="Email" length="80" name="email" sqlname="sEmail" type="string"/>
    <element label="Company" name="company" revLink="recipient" target="sfa:company" type="link">      
      <join xpath-dst="@id" xpath-src="@company-id"/>    
    </element>    
    <attribute advanced="true" label="Foreign key of link 'Company' (field 'id')" name="company-id" sqlname="iCompanyId" type="long"/>
  </element>
</schema>
```

「companyEmail」ネームキーの定義が「company」リンクの外部キーで拡張されました。
