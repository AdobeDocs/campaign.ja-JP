---
title: Campaign データベースのマッピング
description: Campaign データベースのマッピング
feature: Data Model, Configuration
role: Developer
level: Intermediate, Experienced
exl-id: a804d164-58bf-4b15-a48e-8cf75d793668
TQID: 'https://experienceleague.adobe.com/mkPCZigiyLWLYV7orT1B2jFQKBf0FOYSDE8IqCa1i1o'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
subfeature_v2:
  - id: a1681cd8-6b2e-4955-9113-33b5f7a22b8c
    internal-label: Data model architecture
  - id: a14877cc-63b1-41d9-bf0b-5f97cadd0417
    internal-label: Configuration guidelines
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '372'
ht-degree: 100%
---
# データベースマッピング{#database-mapping}

サンプルスキーマの SQL マッピングでは、次の XML ドキュメントを入手できます。

```sql
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

  ```sql
  <element name="recipient" sqltable="CusRecipient">
  ```

* フィールド：型に従って定義された接頭辞（整数の場合は「i」、倍精度数の場合は「d」、文字列の場合は「s」、日付の場合は「ts」など）が先頭に付く要素名

  フィールド名は、型指定された **`<attribute>`** および **`<element>`** ごとに **sqlname** 属性を使用し入力されます。

  ```sql
  <attribute desc="E-mail address of recipient" label="Email" length="80" name="email" sqlname="sEmail" type="string"/> 
  ```

>[!NOTE]
>
>SQL 名は、ソーススキーマからオーバーロードできます。 それには、関係する要素の「sqltable」または「sqlname」属性を設定します。

拡張スキーマから生成されるテーブルを作成する SQL スクリプトは、次のとおりです。

```sql
CREATE TABLE CusRecipient(
  iGender NUMERIC(3) NOT NULL Default 0,   
  sCity VARCHAR(50),   
  sEmail VARCHAR(80),
  tsCreated TIMESTAMP Default NULL);
```

SQL フィールドの制約は次のとおりです。

* 数値フィールドと日付フィールドに null 値はありません
* 数値フィールドは 0 に初期化されます

## XML フィールド {#xml-fields}

デフォルトでは、型指定された **`<attribute>`** および **`<element>`** 要素は、データスキーマテーブルの SQL フィールドにマッピングされます。 ただし、このフィールドを SQL ではなく XML で参照することができます。つまり、データは、すべての XML フィールドの値を含んだテーブルのメモフィールド（「mData」）に格納されます。 これらのデータのストレージは、スキーマ構造に準拠する XML ドキュメントです。

XML のフィールドにデータを入力するには、値「true」の **xml** 属性を、該当する要素に追加する必要があります。

**例**

* 複数行コメントフィールド：

  ```sql
  <element name="comment" xml="true" type="memo" label="Comment"/>
  ```

* HTML 形式でのデータの説明：

  ```sql
  <element name="description" xml="true" type="html" label="Description"/>
  ```

  「html」タイプを使用すると、HTML コンテンツを CDATA タグに格納し、Adobe Campaign クライアントインターフェイスに特別な HTML 編集チェックを表示できます。

XML フィールドを使用すると、データベースの物理構造を変更することなく、フィールドを追加できます。 もう 1 つの利点は、使用するリソースが少ないことです（SQL フィールドに割り当てるサイズ、テーブルあたりのフィールド数の制限など）。
