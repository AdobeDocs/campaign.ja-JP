---
title: Campaign スキーマでのリンク管理
description: Adobe Campaign スキーマでのリンク管理について
feature: Data Model, Configuration
role: Developer
level: Intermediate, Experienced
exl-id: f7047c6e-f045-4534-b117-311dd90dd92b
source-git-commit: 69ff08567f3a0ab827a118a089495fc75bb550c5
workflow-type: tm+mt
source-wordcount: '919'
ht-degree: 97%

---

# リンク管理 {#links--relation-between-tables}

リンクは、テーブル間の関連付けを示しています。

関連付けのタイプ（カーディナリティとも呼ばれます）を次に示します。

* カーディナリティ（一対一）1：ソーステーブルの発生件数 1 回を、ターゲットテーブルの発生件数最大 1 回に対応させることができます。
* カーディナリティ（一対多）：ソーステーブルの 1 つのオカレンスを、ターゲットテーブルの複数のオカレンスに対応させることができますが、ターゲットテーブルの 1 つのオカレンスは、最大でソーステーブルの 1 つのオカレンスに対応させることができます。
* カーディナリティ（多対多）：ソーステーブルの 1 つのオカレンスを、ターゲットテーブルの複数のオカレンスに対応させることができます。逆の場合も同様です。

ユーザーインターフェイスでは、カーディナリティは特定のアイコンで表されます。

キャンペーンテーブル / データベースとの結合関係の場合：

* ![](assets/do-not-localize/join_with_campaign11.png)：一対一のカーディナリティ。 例えば、受信者と現在の注文。受信者は一度につき、現在の注文テーブルの発生件数 1 回に関連付けることができます
* ![](assets/do-not-localize/externaljoin11.png)：一対一のカーディナリティ、外部結合。 例えば、受信者と、受信者の居住国。受信者は、国テーブルの 1 つにのみ関連付けることができます。国テーブルの内容は保存されません。
* ![](assets/do-not-localize/join_with_campaign1n.png)：一対多のカーディナリティ。例えば、受信者と購読テーブルなどです。 受信者は、購読テーブルの複数のオカレンスに関連付けることができます。

連合データベースアクセス（FDA）を使用した結合関係の場合：

* ![](assets/do-not-localize/join_fda_11.png)：一対一のカーディナリティ
* ![](assets/do-not-localize/join_fda_1m.png)：一対多のカーディナリティ

FDA テーブルについて詳しくは、[外部データベースへのアクセス](../connect/fda.md)を参照してください。

メインの要素を介してリンクされたテーブルの、外部キーを含むスキーマで、リンクを宣言する必要があります。

```sql
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
   * **revLink**（オプション）：ターゲットスキーマからの逆リンクの名前（デフォルトで自動的に推定されます）
   * **integrity**（オプション）：ターゲットテーブルのオカレンスに対するソーステーブルのオカレンスの参照整合性。
次のような値を選択できます。

      * **define**：ソースオカレンスがターゲットオカレンスから参照されなくなった場合は、ソースオカレンスを削除できます。
      * **normal**：ソースオカレンスを削除すると、リンクのキーがターゲットオカレンス（デフォルトモード）に初期化され、このタイプの整合性によってすべての外部キーが初期化されます。
      * **own**：ソースオカレンスを削除すると、ターゲットオカレンスが削除されます。
      * **owncopy**：**own**&#x200B;と同じ（削除の場合）またはオカレンスを複製する（複製の場合）
      * **neutral**：特定の動作がありません

   * **revIntegrity**（オプション）：ターゲットスキーマの整合性（オプション。デフォルトでは「normal」）
   * **revCardinality**（オプション）：値「single」を指定すると、一対一のタイプ（デフォルトでは一対多）のカーディナリティが入力されます
   * **externalJoin** （オプション）：外部結合を強制します
   * **revExternalJoin** （オプション）：外部結合を逆リンクで強制的に設定します

* リンクはソーステーブルから宛先のテーブルへ、1 つ以上のフィールドを参照します。結合（`<join>`要素）を構成するフィールドは、デフォルトでターゲットスキーマの内部キーを使用して、自動で推定されるので、入力する必要はありません。
* インデックスは、拡張スキーマ内のリンクの外部キーに自動的に追加されます。
* リンクは 2 つのハーフリンクで構成されます。1 つ目はソーススキーマで宣言され、2 つ目はターゲットスキーマの拡張スキーマに、自動的に作成されます。
* **externalJoin** 属性が追加され、値が「true」の場合、結合は外部結合になることがあります（PostgreSQL でサポートされています）。

>[!NOTE]
>
>標準として、リンクは、スキーマの最後に宣言される要素です。

## 例：逆リンク {#example-1}

次の例では、「cus:company」スキーマテーブルに対して一対多の関係を宣言します。

```sql
<srcSchema name="recipient" namespace="cus">
  <element name="recipient">
    ...
    <element label="Company" name="company" revIntegrity="define" revLabel="Contact" target="cus:company" type="link"/>
  </element>
</srcSchema>
```

生成されたスキーマ：

```sql
<schema mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:schema">  
  <element name="recipient" sqltable="CusRecipient"> 
    <dbindex name="companyId">      
      <keyfield xpath="@company-id"/>    
    </dbindex>
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

```sql
<schema mappingType="sql" name="company" namespace="cus" xtkschema="xtk:schema">  
  <element name="company" sqltable="CusCompany" autopk="true"> 
    <dbindex name="id" unique="true">     
      <keyfield xpath="@id"/>    
    </dbindex>   
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

## 例：シンプルリンク {#example-2}

この例では、「nms:address」スキーマテーブルへのリンクを宣言します。結合は外部結合であり、受信者のメールアドレスとリンクテーブルの「@address」フィールド（「nms:address」）が明示的に入力されます。

```sql
<srcSchema name="recipient" namespace="cus">
  <element name="recipient"> 
    ...
    <element integrity="neutral" label="Info about email" name="emailInfo" revIntegrity="neutral" revLink="recipient" target="nms:address" type="link" externalJoin="true">      
      <join xpath-dst="@address" xpath-src="@email"/>
    </element>
  </element>
</srcSchema>
```

## 例：一意のカーディナリティ {#example-3}

この例では、「cus:extension」スキーマテーブルとの一対一の関係を作成します。

```sql
<element integrity="own" label="Extension" name="extension" revCardinality="single" revLink="recipient" target="cus:extension" type="link"/>
```

## 例：フォルダーへのリンク {#example-4}

この例では、フォルダー（「xtk:folder」スキーマ）へのリンクを宣言します。

```sql
<element default="DefaultFolder('nmsFolder')" label="Folder" name="folder" revDesc="Recipients in the folder" revIntegrity="own" revLabel="Recipients" target="xtk:folder" type="link"/>
```

デフォルト値は、「DefaultFolder(&#39;nmsFolder&#39;)」関数で入力された最初の適格なパラメータータイプファイルの識別子を返します。

## 例：リンクへのキーの作成 {#example-5}

この例では、**xlink** 属性と（「email」）テーブルのフィールドを持つリンク（「company」から「cus:company」スキーマ）にキーを作成します。

```sql
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

```sql
<schema mappingType="sql" name="recipient" namespace="cus" xtkschema="xtk:schema">  
  <element name="recipient" sqltable="CusRecipient"> 
    <dbindex name="companyId">      
      <keyfield xpath="@company-id"/>    
    </dbindex>

    <dbindex name="companyEmail" unique="true">
      <keyfield xpath="@email"/>      
      <keyfield xpath="@company-id"/>    
    </dbindex>    

    <key name="companyEmail">      
      <keyfield xpath="@email"/>      
      <keyfield xpath="@company-id"/>    
    </key>

    <attribute desc="Email address of recipient" label="Email" length="80" name="email" sqlname="sEmail" type="string"/>
    <element label="Company" name="company" revLink="recipient" target="sfa:company" type="link">      
      <join xpath-dst="@id" xpath-src="@company-id"/>    
    </element>    
    <attribute advanced="true" label="Foreign key of link 'Company' (field 'id')" name="company-id" sqlname="iCompanyId" type="long"/>
  </element>
</schema>
```

「companyEmail」名キーの定義は、「company」リンクの外部キーで拡張されました。このキーは、両方のフィールドで一意のインデックスを生成します。
