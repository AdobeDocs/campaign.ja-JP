---
title: Adobe Campaign スキーマの操作
description: スキーマの基本を学ぶ
feature: Schema Extension
role: Developer
level: Intermediate, Experienced
exl-id: 87af72fe-6c84-4d9a-afed-015900890cce
source-git-commit: 2ce1ef1e935080a66452c31442f745891b9ab9b3
workflow-type: tm+mt
source-wordcount: '1273'
ht-degree: 100%

---

# スキーマの操作{#gs-ac-schemas}

アプリケーションに格納されるデータの物理的および論理的構造は、XML で記述されます。**スキーマ**&#x200B;と呼ばれる Adobe Campaign 特有の文法に従います。

スキーマは、データベーステーブルに関連付けられた XML ドキュメントです。この中でデータ構造を定義し、表の SQL 定義を記述します。

* テーブルの名前
* フィールド
* 他のテーブルとのリンク

また、データの格納に使用する XML 構造についても説明します。

* 要素と属性
* 要素の階層
* 要素と属性の種類
* デフォルト値
* ラベル、説明およびその他のプロパティ。

スキーマを使用すると、データベース内にエンティティを定義できます。エンティティごとにスキーマがあります。

Adobe Campaign では、次の目的でデータスキーマを使用しています。

* アプリケーション内のデータオブジェクトが、基盤となるデータベーステーブルにどのように関連付けられるかを定義する。
* Campaign アプリケーション内での異なるデータオブジェクト間リンクの定義
* 各オブジェクトに含まれている個々のフィールドの定義と記述

Adobe Campaign キャンペーンのビルトインテーブルとそのやり取りについて詳しくは、[この節](datamodel.md)を参照してください。

>[!CAUTION]
>
>一部のビルトイン Adobe Campaign スキーマは、クラウドデータベースに関連スキーマがあります。これらのスキーマは、名前空間 **Xxl** で識別され、変更したり、延長することはできません。

## スキーマの構文 {#syntax-of-schemas}

スキーマのルート要素は **`<srcschema>`** です。**`<element>`** と **`<attribute>`** のサブ要素が含まれます。

最初の **`<element>`** サブ要素は、エンティティのルートに一致します。

```
<srcSchema name="recipient" namespace="cus">
  <element name="recipient">  
    <attribute name="lastName"/>
    <attribute name="email"/>
    <element name="location">
      <attribute name="city"/>
   </element>
  </element>
</srcSchema>
```

>[!NOTE]
>
>エンティティのルート要素はスキーマと同じ名前を持ちます。

![](assets/schema_and_entity.png)

**`<element>`** タグはエンティティ要素の名前を定義します。スキーマの **`<attribute>`** タグは、リンク先の **`<element>`** タグの属性の名前を定義します。

## スキーマの ID {#identification-of-a-schema}

データスキーマは、名前と名前空間で識別されます。

名前空間を使用すると、一連のスキーマを目標領域別にグループ化できます。例えば、**cus** 名前空間は、顧客固有の設定（**customers**）に使用します。

>[!CAUTION]
>
>基準としては、名前空間の名前は簡潔なものにし、XML 命名規則に従って許可された文字のみで構成する必要があります。
>
>識別子の先頭を数字にすることはできません。

## 予約済み名前空間 {#reserved-namespaces}

特定の名前空間は、Adobe Campaign アプリケーションの操作に必要なシステムエンティティの記述のために予約されています。次の名前空間は、大文字と小文字を任意に組み合わせて、新しいスキーマを識別するために&#x200B;**使用しないでください**。

* **xxl**：クラウドデータベーススキーマ用に予約済み
* **xtk**：プラットフォームシステムデータ用に予約済み
* **nl**：アプリケーション全般用に予約済み
* **nms**：配信（受信者、配信、トラッキングなど）用に予約済み 　
* **ncm**：コンテンツ管理用に予約済み
* **temp**：一時スキーマに予約済み
* **crm**：CRM コネクタ統合用に予約済み

スキーマの識別キーは、名前空間と名前をコロンで区切った文字列です（例：**nms:recipient**）。

## Campaign スキーマの作成または拡張 {#create-or-extend-schemas}

Campaign の中核となるデータスキーマ（受信者テーブル nms:recipient など）にフィールドなどの要素を追加する場合は、スキーマを拡張する必要があります。

![](../assets/do-not-localize/glass.png) 詳しくは、[スキーマの拡張](extend-schema.md)を参照してください。

Adobe Campaign に存在しないまったく新しいタイプのデータ（契約書のテーブルなど）を追加する場合は、カスタムスキーマを直接作成することができます。

![](../assets/do-not-localize/glass.png) 詳しくは、[スキーマの新規作成](create-schema.md)を参照してください。

![](assets/schemaextension_1.png)


作業するスキーマを作成または拡張したら、その XML コンテンツ要素を以下に示すのと同じ順序で定義することをお勧めします。

## 列挙 {#enumerations}

定義済みリストは、スキーマのメイン要素より先に定義します。これにより、特定のフィールドに使用できる値のリストを表示して、ユーザーによる選択肢を制限することができます。

例：

```
<enumeration basetype="byte" name="exTransactionTypeEnum" default="store">
<value label="Website" name="web" value="0"/>
<value label="Call Center" name="phone" value="1"/>
<value label="In Store" name="store" value="2"/>
</enumeration>
```

フィールドを定義する際は、次のような定義済みリストを使用できます。

```
<attribute desc="Type of Transaction" label="Transaction Type" name="transactionType" 
type="string" enum="exTransactionTypeEnum"/>
```

>[!NOTE]
>
>ユーザーが管理する定義済みリスト（通常は&#x200B;**[!UICONTROL 管理]**／**[!UICONTROL プラットフォーム]**&#x200B;の下にあり）を使用して、特定のフィールドの値を指定することもできます。これらは事実上グローバルな定義済みリストであり、作業している特定のスキーマ以外で使用する場合にも役立ちます。

<!--
## Index {#index} 

In the context of a [FDA Snowflake deployment](../architecture/fda-deployment.md), you need to declare indexes. Indexes are the first elements declared in the main element of the schema. 

They can be unique or not, and reference one or more fields.

Examples:

```
<dbindex name="email" unique="true">
  <keyfield xpath="@email"/>
</dbindex>
```

```
<dbindex name="lastNameAndZip">
  <keyfield xpath="@lastName"/>
  <keyfield xpath="location/@zipCode"/>
</dbindex>
```

The **xpath** attribute points to the field in your schema that you wish to index.

>[!IMPORTANT]
>
>It is important to remember that the SQL query read performance gains provided by indexes also come with a performance hit on writing records. The indexes should therefore be used with precaution.

For more on indexes, refer to the [Indexed fields](database-mapping.md#indexed-fields) section.

-->

## キー {#keys}

各テーブルには少なくとも 1 つのキーが必要です。通常、**autopk** 属性を **true** に設定すると、スキーマのメイン要素にキーが自動的に設定されます。

さらに、[エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、**@autouuid** を使用し、**true** に設定します。

プライマリキーは、**internal** 属性を使用して定義することもできます。

例：

```
<key name="householdId" internal="true">
  <keyfield xpath="@householdId"/>
</key>
```

この例では、**@autopk** 属性もしくは **@autouuid** 属性で「id」という名前のデフォルトのプライマリキーを作成する代わりに、独自の「householdId」というプライマリキーを指定します。

>[!CAUTION]
>
>スキーマを新しく作成するときや、スキーマを拡張するときは、スキーマ全体で同じプライマリキーのシーケンス値（@pkSequence）を保持する必要があります。

![](../assets/do-not-localize/glass.png) キーの詳細については、[この節](database-mapping.md#management-of-keys)を参照してください。

## 属性（フィールド） {#attributes--fields-}

属性を使用すると、データオブジェクトを構成するフィールドを定義できます。スキーマエディションのツールバーの「**[!UICONTROL 挿入]**」ボタンを使用すると、カーソルのある XML に空の属性テンプレートをドロップできます。詳細については、[この節](create-schema.md)を参照してください。

![](assets/schemaextension_2.png)

すべての属性のリストについては、 [Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/schema-reference/elements-attributes/attribute.html?lang=ja#content-model)の `<attribute>` 要素の節を参照してください。よく使用される属性には、**@advanced**、**@dataPolicy**、**@default**、**@desc**、**@enum**、**@expr**、**@label**、**@length**、**@name**、**@notNull**、**@required**、**@ref**、**@xml**、**@type** などがあります。

![](../assets/do-not-localize/book.png) 各属性の詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/schema-reference/elements-attributes/schema-introduction.html?lang=ja#configuring-campaign-classic)の属性に関する説明を参照してください。

### 例 {#examples}

デフォルト値の定義例：

```
<attribute name="transactionDate" label="Transaction Date" type="datetime" default="GetDate()"/>
```

必須のマークも付けるフィールドのテンプレートとして共通属性を使用する例：

```
<attribute name="mobile" label="Mobile" template="nms:common:phone" required="true" />
```

“”**@advanced** 属性を使用して非表示にする計算フィールドの例。

```
<attribute name="domain" label="Email domain" desc="Domain of recipient email address" expr="GetEmailDomain([@email])" advanced="true" />
```

**@dataPolicy** 属性を持ち、SQL フィールドにも格納される XML フィールドの例。

```
<attribute name="secondaryEmail" label="Secondary email address" length="100" xml="true" sql="true" dataPolicy="email" />
```

>[!CAUTION]
>
>ほとんどの属性はデータベースの物理フィールドに 1-1 カーディナリティに従ってリンクされますが、これは XML フィールドや計算フィールドには該当しません。\
>XML フィールドは、テーブルのメモ型フィールド（mData）に格納されます。\
>ただし、計算フィールドはクエリを起動するたびに動的に作成されるので、作用するレイヤーにのみ存在します。

## リンク {#links}

スキーマのメイン要素の中で最後の要素のいくつかはリンクです。リンクは、インスタンス内の様々なスキーマを相互にどのように関連付けるかを定義します。

リンクは、リンク先のテーブルの&#x200B;**外部キー**&#x200B;を含んだスキーマで宣言します。

カーディナリティには、1-1、1-N、N-N の 3 つのタイプがあります。デフォルトで使用するのは 1-N タイプです。

### 例 {#examples-1}

受信者テーブル（標準提供のスキーマ）とカスタムトランザクションテーブルの間の 1 - N リンクの例：

```
<element label="Recipient" name="lnkRecipient" revLink="lnkTransactions" target="nms:recipient" type="link"/>
```

カスタムスキーマ「Car」（「cus」名前空間内）と受信者テーブルの間の 1 - 1 リンクの例：

```
<element label="Car" name="lnkCar" revCardinality="single" revLink="recipient" target="cus:car" type="link"/>
```

受信者テーブルと、プライマリキーでないメールアドレスで構成されるアドレステーブルとの外部結合の例：

```
<element name="emailInfo" label="Email Info" revLink="recipient" target="nms:address" type="link" externalJoin="true">
  <join xpath-dst="@address" xpath-src="@email"/>
</element>
```

「xpath-dst」はターゲットスキーマのプライマリキーに対応し、「xpath-src」はソーススキーマの外部キーに対応します。

## 監査記録 {#audit-trail}

スキーマの最後に含めると便利な要素の 1 つは、トラッキング要素（監査記録）です。

次の例を使用すると、テーブル内のすべてのデータの作成日、作成者、最終更新日、最終更新者に関するフィールドを含めることができます。

```
<element aggregate="xtk:common:auditTrail" name="auditTrail"/>
```

## データベース構造の更新 {#updating-the-database-structure}

変更を完了して保存したらデータベースに適用する必要がありますが、この変更は SQL 構造に影響を与える可能性があります。データベースに適用するには、データベース更新ウィザードを使用します。

![](assets/schemaextension_3.png)

詳しくは、[この節](update-database-structure.md)を参照してください。

>[!NOTE]
>
>変更がデータベース構造に影響を与えない場合は、スキーマを再生成するだけです。それには、更新するスキーマを選択し、右クリックして&#x200B;**[!UICONTROL アクション／選択したスキーマを再生成...]**&#x200B;を選択します。
