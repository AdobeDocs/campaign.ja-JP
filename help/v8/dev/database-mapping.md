---
product: Adobe Campaign
title: Campaign データベースのマッピング
description: Campaign データベースのマッピング
source-git-commit: c61d8aa8e0a68ccc81a6141782f860daf061bc61
workflow-type: ht
source-wordcount: '1463'
ht-degree: 100%

---

# データベースマッピング{#database-mapping}

サンプルスキーマの SQL マッピングでは、次の XML ドキュメントを入手できます。

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

スキーマのルート要素は **`<srcschema>`** ではなく **`<schema>`** になりました。

これにより、ソーススキーマ（単にスキーマと呼ばれる）から自動的に生成される別のタイプのドキュメントに移動します。 このスキーマは、Adobe Campaign アプリケーションで使用されます。

SQL 名は、要素名と型に基づいて自動的に決定されます。

SQL の命名規則は次のとおりです。

* テーブル：スキーマの名前空間と名前を連結したもの

   この例では、テーブルの名前は、スキーマのメイン要素を使用して **sqltable** 属性に入力されます。

   ```
   <element name="recipient" sqltable="CusRecipient">
   ```

* フィールド：型に従って定義されたプレフィックス（整数の場合は「i」、倍精度数の場合は「d」、文字列の場合は「s」、日付の場合は「ts」など）が先頭に付く要素名

   フィールド名は、型指定された **`<attribute>`** および **`<element>`** ごとに **sqlname** 属性を使用し入力されます。

   ```
   <attribute desc="E-mail address of recipient" label="Email" length="80" name="email" sqlname="sEmail" type="string"/> 
   ```

>[!NOTE]
>
>SQL 名は、ソーススキーマからオーバーロードできます。 それには、関係する要素の「sqltable」または「sqlname」属性を設定します。

拡張スキーマから生成されるテーブルを作成する SQL スクリプトは、次のとおりです。

```
CREATE TABLE CusRecipient(
  iGender NUMERIC(3) NOT NULL Default 0,   
  sCity VARCHAR(50),   
  sEmail VARCHAR(80),
  tsCreated TIMESTAMP Default NULL);
```

SQL フィールドの制約は次のとおりです。

* 数値フィールドと日付フィールドに null 値はありません、
* 数値フィールドは 0 に初期化されます。

## XML フィールド {#xml-fields}

デフォルトでは、型指定された **`<attribute>`** および **`<element>`** 要素は、データスキーマテーブルの SQL フィールドにマッピングされます。 ただし、このフィールドを SQL ではなく XML で参照することができます。つまり、データは、すべての XML フィールドの値を含んだテーブルのメモフィールド（「mData」）に格納されます。 これらのデータのストレージは、スキーマ構造に準拠する XML ドキュメントです。

XML のフィールドにデータを入力するには、値「true」の **xml** 属性を、該当する要素に追加する必要があります。

**例**：XML フィールドの使用例を 2 つ示します。

* 複数行コメントフィールド：

   ```
   <element name="comment" xml="true" type="memo" label="Comment"/>
   ```

* HTML 形式でのデータの説明：

   ```
   <element name="description" xml="true" type="html" label="Description"/>
   ```

   「html」タイプを使用すると、HTML コンテンツを CDATA タグに格納し、Adobe Campaign クライアントインターフェイスに特別な HTML 編集チェックを表示できます。

XML フィールドを使用すると、データベースの物理構造を変更することなく、フィールドを追加できます。 もう 1 つの利点は、使用するリソースが少ないことです（SQL フィールドに割り当てるサイズ、テーブルあたりのフィールド数の制限など）。

## キーの管理 {#management-of-keys}

テーブルには、テーブル内のレコードを識別するためのキーが少なくとも 1 つ必要です。

キーがデータスキーマのメイン要素から宣言されます。

```
<key name="name_of_key">
  <keyfield xpath="xpath_of_field1"/>
  <keyfield xpath="xpath_of_field2"/>
  ...
</key>
```

キーは次のルールに従います。

* キーは、テーブル内の 1 つ以上のフィールドを参照できます。
* キーがスキーマ内で最初に入力される場合、または値が「true」の&#x200B;**internal** 属性を含む場合、キーは「プライマリ」（または「優先」）キーと呼ばれます。

**例**：

* メールアドレスと市区町村へのキーの追加：

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

   生成されたスキーマ：

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

* 「id」名フィールドへのプライマリキーまたは内部キーの追加：

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

   生成されたスキーマ：

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

### プライマリキー - 識別子

Adobe Campaign テーブルのプライマリキーは、データベースエンジンによって自動生成される **Universally Unique ID（UUID）**&#x200B;です。 キー値は、データベース全体で一意です。 レコードの挿入時に、キーの内容が自動的に生成されます。

**例**

ソーススキーマでの増分キーの宣言：

```
<srcSchema name="recipient" namespace="cus">
  <element name="recipient"  autopk="true" autouuid="true">
  ...
  </element>
</srcSchema>
```

生成されたスキーマ：

```
<schema mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:schema">  
  <element name="recipient"  autopk="true" autouuid="true" sqltable="CusRecipient"> 

    <key internal="true" name="id">
      <keyfield xpath="@id"/>
    </key>

    <attribute desc="Internal primary key" label="Primary key" name="id" sqlname="iRecipientId" type="long"/>
  </element>
</schema>
```

キーの定義に加えて、自動生成されたプライマリキーを格納するために、「id」と呼ばれる数値フィールドが拡張スキーマに追加されました。

>[!CAUTION]
>
>プライマリキーが 0 に設定されたレコードは、テーブルの作成時に自動的に挿入されます。 このレコードは、外部結合を避けるために使用されます。外部結合はボリュームテーブルでは有効ではありません。 デフォルトでは、外部キーはすべて値 0 で初期化されるので、データ項目が入力されていない場合でも常に、結合時に結果を返します。

## リンク：テーブル間の関係 {#links--relation-between-tables}

リンクは、テーブル間の関連付けを示しています。

各関連付け（基数）は、次の通りです。

* カーディナリティ（一対一）1：ソーステーブルの発生件数 1 回を、ターゲットテーブルの発生件数最大 1 回に対応させることができます。
* カーディナリティ（一対多）：ソーステーブルの 1 つのオカレンスを、ターゲットテーブルの複数のオカレンスに対応させることができますが、ターゲットテーブルの 1 つのオカレンスは、最大でソーステーブルの 1 つのオカレンスに対応させることができます。
* カーディナリティ（多対多）：ソーステーブルの 1 つのオカレンスを、ターゲットテーブルの複数のオカレンスに対応させることができます。逆の場合も同様です。

インターフェイスでは、異なるタイプの関係をアイコンで簡単に区別できます。

キャンペーンテーブル / データベースとの結合関係の場合：

* ![](assets/do-not-localize/join_with_campaign11.png)：一対一のカーディナリティ。例えば、受信者と現在の注文。受信者は一度につき、現在の注文テーブルの発生件数 1 回に関連付けることができます
* ![](assets/do-not-localize/externaljoin11.png)：一対一のカーディナリティ、外部結合。例えば、受信者と、受信者の居住国。受信者は、国テーブルの 1 つにのみ関連付けることができます。 国テーブルの内容は保存されません。
* ![](assets/do-not-localize/join_with_campaign1n.png)：一対多のカーディナリティ。例えば、受信者と購読テーブルなどがあります。受信者は、購読テーブルの複数のオカレンスに関連付けることができます。

連合データベースアクセスを使用した結合関係の場合：

* ![](assets/do-not-localize/join_fda_11.png)：一対一のカーディナリティ
* ![](assets/do-not-localize/join_fda_1m.png)：一対多のカーディナリティ

FDA テーブルの詳細については、[Federated Data Access](../connect/fda.md) を参照してください。

メインの要素を介してリンクされたテーブルの、外部キーを含むスキーマで、リンクを宣言する必要があります。

```
<element name="name_of_link" type="link" target="key_of_destination_schema">
  <join xpath-dst="xpath_of_field1_destination_table" xpath-src="xpath_of_field1_source_table"/>
  <join xpath-dst="xpath_of_field2_destination_table" xpath-src="xpath_of_field2_source_table"/>
  ...
</element>
```

リンクは次のルールに従います。

* リンクの定義は **link** に、**`<element>`** と以下の属性で入力します。

   * **name**：ソーステーブルからのリンク名
   * **target**：ターゲットスキーマの名前
   * **label**：リンクのラベル
   * **revLink** （オプション）：ターゲットスキーマからの逆リンクの名前（デフォルトで自動的に推定されます）
   * **integrity** （オプション）：ターゲットテーブルのオカレンスに対するソーステーブルのオカレンスの参照整合性。有効な値は次の通りです。

      * **define**：ソースオカレンスがターゲットオカレンスから参照されなくなった場合は、ソースオカレンスを削除できます。
      * **normal**：ソースオカレンスを削除すると、リンクのキーがターゲットオカレンス（デフォルトモード）に初期化され、このタイプの整合性によってすべての外部キーが初期化されます。
      * **own**：ソースオカレンスを削除すると、ターゲットオカレンスが削除されます。
      * **owncopy**：**own**&#x200B;と同じ（削除の場合）。もしくは、オカレンスを複製する（複製の場合）、
      * **neutral**：特に何もしません。
   * **revIntegrity** （オプション）：ターゲットスキーマの整合性（オプション。デフォルトでは「normal」）
   * **revCardinality** （オプション）：値「single」を指定すると、一対一のタイプ（デフォルトでは一対多）のカーディナリティが入力されます。
   * **externalJoin** （オプション）：外部結合を強制します
   * **revExternalJoin** （オプション）：外部結合を逆リンクで強制的に設定します


* リンクはソーステーブルから宛先のテーブルへ、1 つ以上のフィールドを参照します。結合（`<join>`要素）を構成するフィールドは、デフォルトでターゲットスキーマの内部キーを使用して、自動で推定されるので、入力する必要はありません。
* リンクは 2 つのハーフリンクで構成されます。1 つ目はソーススキーマで宣言され、2 つ目はターゲットスキーマの拡張スキーマに、自動的に作成されます。
* **externalJoin** 属性が追加され、値が「true」の場合、結合は外部結合になることがあります（PostgreSQL でサポートされています）。

>[!NOTE]
>
>リンクは、スキーマの最後に宣言される要素です。

### 例 1 {#example-1}

「cus:company」スキーマテーブルとの一対多の関係：

```
<srcSchema name="recipient" namespace="cus">
  <element name="recipient">
    ...
    <element label="Company" name="company" revIntegrity="define" revLabel="Contact" target="cus:company" type="link"/>
  </element>
</srcSchema>
```

生成されたスキーマ：

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

リンクの定義は、結合を構成するフィールド、つまり、宛先スキーマに XPath（「@ id」）が含まれるプライマリキーと、スキーマに XPath（「@ company-id」）が含まれる外部キーによって補完されます。

外部キーは、次の命名規則に従って、宛先テーブルの関連フィールドと同じ特性を使用する要素に自動的に追加されます。ターゲットスキーマの名前の後に関連フィールドの名前（この例では「company-id」）が続きます。

ターゲットの拡張スキーマ（「cus:company」）：

```
<schema mappingType="sql" name="company" namespace="cus" xtkschema="xtk:schema">  
  <element name="company" sqltable="CusCompany"  autopk="true" autouuid="true"> 
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

「cus:recipient」テーブルへの逆リンクが、次のパラメータで追加されました。

* **name**：ソーススキーマの名前から自動的に推定されます（ソーススキーマのリンク定義の「revLink」属性を使用して強制できます)
* **revLink**：逆リンク名
* **target**：リンクスキーマのキー（「cus:recipient」スキーマ）
* **unbound**：リンクは、一対多のカーディナリティのコレクション要素として宣言されます（デフォルト）
* **integrity**：デフォルトは「define」です（ソーススキーマのリンク定義の「revIntegrity」属性を使用して強制できます)。

### 例 2 {#example-2}

この例では、「nms:address」スキーマテーブルへのリンクを宣言します。 結合は外部結合であり、受信者の電子メールアドレスとリンクテーブルの「@address」フィールド（「nms:address」）が明示的に入力されます。

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

### 例 3 {#example-3}

「cus:extension」スキーマテーブルとの一対一の関係：

```
<element integrity="own" label="Extension" name="extension" revCardinality="single" revLink="recipient" target="cus:extension" type="link"/>
```

### 例 4 {#example-4}

フォルダーへのリンク（「xtk:folder」スキーマ）：

```
<element default="DefaultFolder('nmsFolder')" label="Folder" name="folder" revDesc="Recipients in the folder" revIntegrity="own" revLabel="Recipients" target="xtk:folder" type="link"/>
```

デフォルト値は、「DefaultFolder(&#39;nmsFolder&#39;)」関数で入力された最初の適格なパラメータータイプファイルの識別子を返します。

### 例 5 {#example-5}

この例では、**xlink** 属性と（「email」）テーブルのフィールドを持つリンク（ 「company」から 「cus:company」スキーマ）にキーを作成します。

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

生成されたスキーマ：

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

「companyEmail」名キーの定義は、「company」リンクの外部キーで拡張されました。
