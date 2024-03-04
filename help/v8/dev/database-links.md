---
title: Campaign スキーマでのリンク管理
description: Adobe Campaignスキーマでのリンク管理について
feature: Data Model, Configuration
role: Developer
level: Intermediate, Experienced
source-git-commit: 6db351c8b5d30f722ddc4b0261af93cd8e3b72cd
workflow-type: tm+mt
source-wordcount: '919'
ht-degree: 56%

---


# リンク管理 {#links--relation-between-tables}

リンクは、テーブル間の関連付けを示しています。

関連付けのタイプ（カーディナリティとも呼ばれます）を次に示します。

* カーディナリティ（一対一）1：ソーステーブルの発生件数 1 回を、ターゲットテーブルの発生件数最大 1 回に対応させることができます。
* カーディナリティ（一対多）：ソーステーブルの 1 つのオカレンスを、ターゲットテーブルの複数のオカレンスに対応させることができますが、ターゲットテーブルの 1 つのオカレンスは、最大でソーステーブルの 1 つのオカレンスに対応させることができます。
* カーディナリティ（多対多）：ソーステーブルの 1 つのオカレンスを、ターゲットテーブルの複数のオカレンスに対応させることができます。逆の場合も同様です。

ユースインターフェイスでは、カーディナリティは特定のアイコンで表されます。

キャンペーンテーブル / データベースとの結合関係の場合：

* ![](assets/do-not-localize/join_with_campaign11.png)：一対一のカーディナリティ。例えば、受信者と現在の注文。受信者は一度につき、現在の注文テーブルの発生件数 1 回に関連付けることができます
* ![](assets/do-not-localize/externaljoin11.png)：一対一のカーディナリティ、外部結合。例えば、受信者と、受信者の居住国。受信者は、国テーブルの 1 つにのみ関連付けることができます。国テーブルの内容は保存されません。
* ![](assets/do-not-localize/join_with_campaign1n.png)：一対多のカーディナリティ。例えば、受信者と購読テーブルなどがあります。1 人の受信者は、購読テーブル上の複数の発生に関連付けることができます。

Federated Database Access(FDA) を使用した関係の結合の場合：

* ![](assets/do-not-localize/join_fda_11.png)：一対一のカーディナリティ
* ![](assets/do-not-localize/join_fda_1m.png)：一対多のカーディナリティ

FDA テーブルについて詳しくは、 [外部データベースへのアクセス](../connect/fda.md).

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

   * **名前**：ソーステーブルから取得したリンクの名前
   * **ターゲット**：ターゲットスキーマ名
   * **ラベル**：リンクのラベル
   * **revLink** （オプション）：ターゲットスキーマからの逆リンクの名前（デフォルトで自動的に推測されます）
   * **完全性** （オプション）：ターゲットテーブルの発生に対するソーステーブルの発生の参照整合性。
次のような値を選択できます。

      * **定義**：ターゲットオカレンスで参照されなくなったソースオカレンスは削除できます
      * **標準**：ソースオカレンスを削除すると、ターゲットオカレンス（デフォルトモード）へのリンクのキーが初期化されます。このタイプの整合性は、すべての外部キーを初期化します
      * **own**：ソースオカレンスを削除すると、ターゲットオカレンスが削除されます
      * **owncopy**：と同じ **own** （削除の場合）、または（重複の場合）発生した場合は複製
      * **中性**：特定の動作がありません

   * **revIntegrity** （オプション）：ターゲットスキーマの整合性（オプション、デフォルトは「通常」）
   * **revCardinality** （オプション）：値が「single」の場合は、タイプ 1-1 の基数が入力されます（デフォルトは 1-N）。
   * **externalJoin** （オプション）：外部結合を強制します
   * **revExternalJoin** （オプション）：外部結合を逆リンクで強制的に設定します

* リンクはソーステーブルから宛先のテーブルへ、1 つ以上のフィールドを参照します。結合（`<join>`要素）を構成するフィールドは、デフォルトでターゲットスキーマの内部キーを使用して、自動で推定されるので、入力する必要はありません。
* インデックスは、拡張スキーマ内のリンクの外部キーに自動的に追加されます。
* リンクは 2 つのハーフリンクで構成されます。1 つ目はソーススキーマで宣言され、2 つ目はターゲットスキーマの拡張スキーマに、自動的に作成されます。
* **externalJoin** 属性が追加され、値が「true」の場合、結合は外部結合になることがあります（PostgreSQL でサポートされています）。

>[!NOTE]
>
>標準として、リンクは、スキーマの末尾で宣言される要素です。

## 例：逆リンク {#example-1}

次の例では、「cus:company」スキーマテーブルに対して 1 対多の関係を宣言します。

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

この例では、「nms:address」スキーマテーブルへのリンクを宣言します。 結合は外部結合で、受信者の電子メールアドレスと、リンクされたテーブルの「@address」フィールド (「nms:address」) が明示的に設定されます。

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

## 例：一意の基数 {#example-3}

この例では、「cus:extension」スキーマテーブルに対して 1 対 1 のリレーションを作成します。

```sql
<element integrity="own" label="Extension" name="extension" revCardinality="single" revLink="recipient" target="cus:extension" type="link"/>
```

## 例：フォルダーへのリンク {#example-4}

この例では、フォルダー（「xtk:folder」スキーマ）へのリンクを宣言します。

```sql
<element default="DefaultFolder('nmsFolder')" label="Folder" name="folder" revDesc="Recipients in the folder" revIntegrity="own" revLabel="Recipients" target="xtk:folder" type="link"/>
```

デフォルト値は、「DefaultFolder(&#39;nmsFolder&#39;)」関数で入力された最初の適格なパラメータータイプファイルの識別子を返します。

## 例：リンクにキーを作成する {#example-5}

この例では、を使用してリンク（「company」から「cus:company」スキーマ）にキーを作成します。 **xlink** 属性と (「email」) テーブルのフィールド：

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

「companyEmail」名前キーの定義が「company」リンクの外部キーで拡張されました。 このキーは、両方のフィールドで一意のインデックスを生成します。