---
title: Campaign データベースにおけるキーの管理
description: Adobe Campaign スキーマでのキーの管理について
feature: Data Model, Configuration
role: Developer
level: Intermediate, Experienced
exl-id: cf1f5cfc-172f-44ec-ac97-804d15f9d628
source-git-commit: 0f5efba364ef924447324bdd806e15e6db8d799d
workflow-type: tm+mt
source-wordcount: '268'
ht-degree: 100%

---

# キーの管理 {#management-of-keys}

データスキーマに関連付けられた各テーブルには、テーブル内のレコードを識別するためのキーが少なくとも 1 つ必要です。

キーがデータスキーマのメイン要素から宣言されます。

```sql
<key name="name_of_key">
  <keyfield xpath="xpath_of_field1"/>
  <keyfield xpath="xpath_of_field2"/>
  ...
</key>
```

キーがスキーマ内で最初に入力される場合や、「true」に設定された `internal` 属性を含む場合、そのキーは「プライマリキー」と呼ばれます。

キーは、テーブル内の 1 つ以上のフィールドを参照できます。

**例**：

* メールアドレスと市区町村へのキーの追加：

  ```sql
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

  ```sql
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

  ```sql
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

  ```sql
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

## プライマリキー - 識別子{#primary-key}

[エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、Adobe Campaign テーブルのプライマリキーは、データベースエンジンによって自動生成される&#x200B;**ユニバーサル固有識別子（UUID）**&#x200B;です。キー値は、データベース全体で一意です。レコードの挿入時に、キーの内容が自動的に生成されます。

**例**

以下の例では、ソーススキーマで増分キーを宣言します。

```sql
<srcSchema name="recipient" namespace="cus">
  <element name="recipient"  autopk="true" autouuid="true">
  ...
  </element>
</srcSchema>
```

生成されたスキーマ：

```sql
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
>プライマリキーが 0 に設定されたレコードは、テーブルの作成時に自動的に挿入されます。このレコードは、外部結合を避けるために使用されます。外部結合はボリュームテーブルでは有効ではありません。デフォルトでは、外部キーはすべて値 0 で初期化されるので、データ項目が入力されていない場合でも常に、結合時に結果を返します。
