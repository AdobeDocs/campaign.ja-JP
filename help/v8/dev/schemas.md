---
solution: Campaign v8
product: Adobe Campaign
title: Campaignスキーマの使用
description: スキーマの概要
source-git-commit: 69d69c909e6b17ca3f5fb18d6680aa51d0d701cf
workflow-type: tm+mt
source-wordcount: '1253'
ht-degree: 7%

---

# スキーマの操作{#gs-ac-schemas}

アプリケーションに格納されるデータの物理的および論理的構造は、XML で記述されます。**スキーマ**&#x200B;と呼ばれる、Adobe Campaign固有の文法に従います。

スキーマとは、データベーステーブルに関連付けられたXMLドキュメントです。 データ構造を定義し、テーブルのSQL定義を説明します。

* テーブルの名前
* フィールド
* 他のテーブルとのリンク

また、データの格納に使用されるXML構造についても説明します。

* 要素と属性
* 要素の階層
* 要素と属性の種類
* デフォルト値
* ラベル、説明、およびその他のプロパティ。

スキーマを使用すると、データベース内にエンティティを定義できます。 各エンティティにスキーマがあります。

Adobe Campaignでは、データスキーマを使用して次のことをおこないます。

* アプリケーション内のデータオブジェクトを基になるデータベーステーブルに結び付ける方法を定義します。
* Campaign アプリケーション内での異なるデータオブジェクト間リンクの定義
* 各オブジェクトに含まれている個々のフィールドの定義と記述

Campaignの組み込みテーブルとそのインタラクションについての詳細は、[この節](datamodel.md)を参照してください。

>[!CAUTION]
>
>一部の組み込みCampaignスキーマは、Cloudデータベース上に関連付けられたスキーマを持ちます。 これらのスキーマは、**Xxl**&#x200B;名前空間で識別され、変更または拡張することはできません。

## スキーマの構文{#syntax-of-schemas}

スキーマのルート要素は&#x200B;**`<srcschema>`**&#x200B;です。 **`<element>`**&#x200B;サブ要素と&#x200B;**`<attribute>`**&#x200B;サブ要素が含まれます。

1つ目の&#x200B;**`<element>`**&#x200B;サブ要素は、エンティティのルートに一致します。

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
>エンティティのルート要素は、スキーマと同じ名前を持ちます。

![](assets/schema_and_entity.png)

**`<element>`**&#x200B;タグは、エンティティ要素の名前を定義します。 **`<attribute>`** スキーマのタグは、リンク先のタグの属 **`<element>`** 性の名前を定義します。

## スキーマ{#identification-of-a-schema}のID

データスキーマは、名前と名前空間で識別されます。

名前空間を使用すると、関心のある領域別に一連のスキーマをグループ化できます。 例えば、顧客固有の設定(**customers**)には、**cus**&#x200B;名前空間を使用します。

>[!CAUTION]
>
>標準として、名前空間の名前は簡潔で、XMLの命名規則に従って許可された文字のみを含める必要があります。
>
>識別子は、数字で始まることはできません。

## 予約済みの名前空間{#reserved-namespaces}

特定の名前空間は、Adobe Campaignアプリケーションの操作に必要なシステムエンティティの説明用に予約されています。 次の名前空間&#x200B;**は、大文字と小文字の組み合わせで、新しいスキーマを識別するために**&#x200B;使用しないでください。

* **xl**:クラウドデータベーススキーマに対して予約
* **xtk**:プラットフォームシステムデータに予約
* **nl**:アプリケーションの全体的な使用に対して確保される
* **nms**:配信（受信者、配信、トラッキングなど）に予約
* **ncm**:コンテンツ管理に予約
* **temp**:一時的なスキーマに予約
* **crm**:CRMコネクタ統合に対して予約

スキーマの識別キーは、コロンで区切られた名前空間と名前を使用して構築された文字列です。例：**nms:recipient**&#x200B;です。

## Campaignスキーマ{#create-or-extend-schemas}の作成または拡張

受信者テーブル(nms:recipient)など、Campaignのコアデータスキーマの1つにフィールドまたは他の要素を追加するには、そのスキーマを拡張する必要があります。

[!DNL :bulb:] 詳しくは、スキーマの拡張を [参照してください](extend-schema.md)。

Adobe Campaignに存在しないまったく新しいタイプのデータ（例えば契約のテーブル）を追加するには、カスタムスキーマを直接作成します。

[!DNL :bulb:] 詳しくは、新しいスキーマの作 [成を参照してください](create-schema.md)。

![](assets/schemaextension_1.png)


作業するスキーマを作成または拡張したら、ベストプラクティスは、次に示すのと同じ順序でXMLコンテンツ要素を定義することです。

## 列挙 {#enumerations}

列挙は、最初に、スキーマのメイン要素の前に定義されます。 リストに値を表示して、特定のフィールドに対するユーザーの選択肢を制限できます。

例：

```
<enumeration basetype="byte" name="exTransactionTypeEnum" default="store">
<value label="Website" name="web" value="0"/>
<value label="Call Center" name="phone" value="1"/>
<value label="In Store" name="store" value="2"/>
</enumeration>
```

フィールドを定義する際に、次のようにこの列挙を使用できます。

```
<attribute desc="Type of Transaction" label="Transaction Type" name="transactionType" 
type="string" enum="exTransactionTypeEnum"/>
```

>[!NOTE]
>
>また、ユーザー管理列挙（通常は&#x200B;**[!UICONTROL 管理]** / **[!UICONTROL プラットフォーム]**&#x200B;の下）を使用して、特定のフィールドの値を指定することもできます。 これらは事実上グローバルな列挙であり、作業中の特定のスキーマ以外で列挙を使用する場合は、より適切な選択が可能です。

## キー {#keys}

各テーブルには少なくとも1つのキーが必要で、多くの場合、**@autouuid=true**&#x200B;属性を「true」に設定することで、スキーマのメイン要素に自動的にキーが確立されます。

プライマリキーは、**internal**&#x200B;属性を使用して定義することもできます。

例：

```
<key name="householdId" internal="true">
  <keyfield xpath="@householdId"/>
</key>
```

この例では、**@autouuid**&#x200B;属性で「id」という名前のデフォルトのプライマリキーを作成する代わりに、独自の「householdId」プライマリキーを指定します。

>[!CAUTION]
>
>新しいスキーマを作成するときや、スキーマ拡張の際には、スキーマ全体で同じプライマリキーシーケンス値（@pkSequence）を維持する必要があります。

[!DNL :bulb:] キーについて詳しくは、この節 [を参照してください](database-mapping.md#management-of-keys)。

## 属性（フィールド） {#attributes--fields-}

属性を使用すると、データオブジェクトを構成するフィールドを定義できます。 スキーマ編集ツールバーの「**[!UICONTROL 挿入]**」ボタンを使用して、空の属性テンプレートをXMLのカーソル位置にドロップできます。 詳しくは、 [この節](create-schema.md)を参照してください。

![](assets/schemaextension_2.png)

属性の完全なリストは、[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/schema-reference/elements-attributes/attribute.html?lang=en#content-model)の`<attribute>`要素の節で参照できます。 よく使用される属性の一部を次に示します。**@advanced**、**@dataPolicy**、**@default**、**@desc**、**@enum**、**@expr**、**@label**、**@length**, **@name**, **@notNull**, **@required**, **@ref**, **&lt;a2@xml/>5/>、**@type **。**

:[!DNL :arrow_upper_right:]:各属性について詳しくは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/schema-reference/elements-attributes/schema-introduction.html?lang=en#configuring-campaign-classic)の属性の説明を参照してください。

### 例 {#examples}

デフォルト値の定義例：

```
<attribute name="transactionDate" label="Transaction Date" type="datetime" default="GetDate()"/>
```

共通の属性をフィールドのテンプレートとして使用する例と、必須としてもマークする例：

```
<attribute name="mobile" label="Mobile" template="nms:common:phone" required="true" />
```

**@advanced**&#x200B;属性を使用して非表示にする計算済みフィールドの例：

```
<attribute name="domain" label="Email domain" desc="Domain of recipient email address" expr="GetEmailDomain([@email])" advanced="true" />
```

XMLフィールドの例は、SQLフィールドにも格納され、**@dataPolicy**&#x200B;属性を持ちます。

```
<attribute name="secondaryEmail" label="Secondary email address" length="100" xml="true" sql="true" dataPolicy="email" />
```

>[!CAUTION]
>
>ほとんどの属性は、1-1の基数に従ってデータベースの物理フィールドにリンクされますが、XMLフィールドや計算済みフィールドではこのようにはなりません。\
>XMLフィールドは、テーブルのメモ型フィールド(「mData」)に格納されます。\
>ただし、計算済みフィールドは、クエリが開始されるたびに動的に作成されるので、アプリケーションレイヤーにのみ存在します。

## リンク {#links}

リンクは、スキーマのメイン要素の最後の要素の一部です。 インスタンス内の様々なスキーマの相互関係を定義します。

リンクは、リンク先のテーブルの&#x200B;**外部キー**&#x200B;を含むスキーマ内で宣言されます。

基数には次の3つのタイプがあります。1-1、1-N、N-N。これは、デフォルトで使用される1対多のタイプです。

### 例 {#examples-1}

受信者テーブル（標準スキーマ）とカスタムトランザクションのテーブル間の1対多リンクの例を次に示します。

```
<element label="Recipient" name="lnkRecipient" revLink="lnkTransactions" target="nms:recipient" type="link"/>
```

（「cus」名前空間内の）カスタムスキーマ「Car」と受信者テーブル間の1対1リンクの例を次に示します。

```
<element label="Car" name="lnkCar" revCardinality="single" revLink="recipient" target="cus:car" type="link"/>
```

プライマリキーではなくEメールアドレスに基づいた、受信者テーブルとアドレステーブル間の外部結合の例：

```
<element name="emailInfo" label="Email Info" revLink="recipient" target="nms:address" type="link" externalJoin="true">
  <join xpath-dst="@address" xpath-src="@email"/>
</element>
```

ここで、「xpath-dst」はターゲットスキーマのプライマリキーに対応し、「xpath-src」はソーススキーマの外部キーに対応します。

## 監査記録 {#audit-trail}

スキーマの最下部に含めるとよい便利な要素の1つに、トラッキング要素（監査記録）があります。

以下の例を使用して、作成日、データを作成したユーザー、日付、およびテーブル内のすべてのデータの最終変更の作成者に関するフィールドを含めます。

```
<element aggregate="xtk:common:auditTrail" name="auditTrail"/>
```

## データベース構造の更新 {#updating-the-database-structure}

変更が完了して保存されたら、SQL構造に影響を与える可能性のある変更をデータベースに適用する必要があります。 これをおこなうには、データベース更新アシスタントを使用します。

![](assets/schemaextension_3.png)

詳しくは、[この節](update-database-structure.md)を参照してください。

>[!NOTE]
>
>変更がデータベース構造に影響を与えない場合は、スキーマを再生成するだけで済みます。 それには、更新するスキーマを選択し、右クリックして&#x200B;**[!UICONTROL アクション/選択したスキーマを再生成…を選択します。]**&#x200B;を参照してください。

