---
solution: Campaign Classic
product: campaign
title: キャンペーンスキーマの操作
description: スキーマを使い始める
translation-type: tm+mt
source-git-commit: 779542ab70f0bf3812358884c698203bab98d1ce
workflow-type: tm+mt
source-wordcount: '885'
ht-degree: 9%

---

# スキーマの操作{#gs-ac-schemas}

Adobe Campaignでは、次の目的でデータスキーマを使用しています。

* アプリケーション内のデータオブジェクトが基盤となるデータベーステーブルにどのように関連付けられるかの定義
* Campaign アプリケーション内での異なるデータオブジェクト間リンクの定義
* 各オブジェクトに含まれている個々のフィールドの定義と記述

キャンペーンの組み込みテーブルとそのやり取りについての詳細は、[このセクション](datamodel.md)を参照してください。

## キャンペーンスキーマの作成または拡張{#create-or-extend-schemas}

受信者テーブル(nms:受信者)など、キャンペーンのコアデータスキーマの1つにフィールドやその他の要素を追加するには、そのスキーマを拡張する必要があります。

:bulb:詳しくは、[スキーマの拡張](extend-schema.md)を参照してください。

Adobe Campaignに存在しない全く新しいタイプのデータを追加する（例えば契約表）には、カスタムスキーマを直接作成します。

:bulb:詳しくは、[新しいスキーマの作成](create-schema.md)を参照してください。

![](assets/schemaextension_1.png)

作業対象のスキーマを作成または拡張した後は、XMLコンテンツ要素を次に示すのと同じ順序で定義することをお勧めします。

## 列挙 {#enumerations}

定義済みリストは、最初に、スキーマのメイン要素の前に定義されます。 特定のフィールドに対してリストが持つ選択肢を制限するために、ユーザーに値を表示できます。

例：

```
<enumeration basetype="byte" name="exTransactionTypeEnum" default="store">
<value label="Website" name="web" value="0"/>
<value label="Call Center" name="phone" value="1"/>
<value label="In Store" name="store" value="2"/>
</enumeration>
```

フィールドを定義する際、次のように定義済みリストを使用できます。

```
<attribute desc="Type of Transaction" label="Transaction Type" name="transactionType" 
type="string" enum="exTransactionTypeEnum"/>
```

>[!NOTE]
>
>また、ユーザーが管理する定義済みリスト（通常は&#x200B;**[!UICONTROL 管理]** > **[!UICONTROL プラットフォーム]**&#x200B;の下）を使用して、特定のフィールドの値を指定することもできます。 これらは効果的にグローバルな定義済みリストであり、作業対象の特定のスキーマ以外で定義済みリストを使用する場合は、より良い選択肢となります。

## キー{#keys}

各テーブルには少なくとも1つのキーが必要で、多くの場合、**@autouuid=true**&#x200B;属性を&quot;true&quot;に設定すると、スキーマのメイン要素にキーが自動的に設定されます。

主キーは、**internal**&#x200B;属性を使用して定義することもできます。

例：

```
<key name="householdId" internal="true">
  <keyfield xpath="@householdId"/>
</key>
```

この例では、**@autouuid**&#x200B;属性で作成する代わりに、独自の「householdId」プライマリキーを指定する「id」という名前のデフォルトのプライマリキーを作成します。

>[!CAUTION]
>
>新しいスキーマを作成するときや、スキーマ拡張の際には、スキーマ全体で同じプライマリキーシーケンス値（@pkSequence）を維持する必要があります。

:bulb:[このセクション](database-mapping.md#management-of-keys)のキーについての詳細。

## 属性（フィールド） {#attributes--fields-}

属性を使用すると、データオブジェクトを構成するフィールドを定義できます。 スキーマ版ツールバーの「**[!UICONTROL 挿入]**」ボタンを使用して、空の属性テンプレートをカーソルのあるXMLにドロップできます。 詳しくは、 [この節](create-schema.md)を参照してください。

![](assets/schemaextension_2.png)

属性の完全なリストは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/schema-reference/elements-attributes/attribute.html?lang=en#content-model)の`<attribute>`要素セクションで確認できます。 最も一般的に使用される属性の一部を以下に示します。**@advanced**、**@dataPolicy**、**@default**、**@desc**、**@enum**、**@expr**、**@label13/>,**@length **,**@name **,**@notNull **,**@required **,**@ref **、**@xml **、**@type **。**

:arrow_upper_right:各属性について詳しくは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/schema-reference/elements-attributes/schema-introduction.html?lang=en#configuring-campaign-classic)の「属性の説明」を参照してください。

### 例 {#examples}

デフォルト値の定義例：

```
<attribute name="transactionDate" label="Transaction Date" type="datetime" default="GetDate()"/>
```

共通属性をフィールドのテンプレートとして使用する場合の例で、必須ともマークされます。

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
>ほとんどの属性はデータベースの物理フィールドに対して1 ～ 1の基数に基づいてリンクされますが、XMLフィールドや計算済みフィールドには該当しません。\
>XMLフィールドは、テーブルのメモ型フィールド(「mData」)に格納されます。\
>ただし、計算済みフィールドは、クエリを起動するたびに動的に作成されるので、アプリケーションレイヤーにのみ存在します。

## リンク {#links}

リンクは、スキーマのメイン要素の最後の要素の一部です。 インスタンス内のすべての様々なスキーマが相互にどのように関連付けられるかを定義します。

リンク先のテーブルの&#x200B;**外部キー**&#x200B;を含むスキーマでリンクが宣言されます。

基数には次の3種類があります。1-1、1-N、N-N。デフォルトで使用される1-N型です。

### 例 {#examples-1}

受信者テーブル(標準搭載のスキーマ)とカスタムトランザクションのテーブル間の1-Nリンクの例を次に示します。

```
<element label="Recipient" name="lnkRecipient" revLink="lnkTransactions" target="nms:recipient" type="link"/>
```

カスタムスキーマ「Car」(「cus」名前空間内)と受信者テーブル間の1-1リンクの例を次に示します。

```
<element label="Car" name="lnkCar" revCardinality="single" revLink="recipient" target="cus:car" type="link"/>
```

受信者テーブルと、主キーではなく、電子メールアドレスに基づくアドレスのテーブルとの外部結合の例：

```
<element name="emailInfo" label="Email Info" revLink="recipient" target="nms:address" type="link" externalJoin="true">
  <join xpath-dst="@address" xpath-src="@email"/>
</element>
```

ここで、「xpath-dst」はターゲットスキーマの主キーに対応し、「xpath-src」はソーススキーマの外部キーに対応します。

## 監査記録 {#audit-trail}

スキーマの下部に含めると便利な要素の1つに、トラッキング要素（監査証跡）があります。

次の例を使用して、テーブル内のすべてのデータの作成日、データを作成したユーザー、日付、および最終変更の作成者に関するフィールドを含めます。

```
<element aggregate="xtk:common:auditTrail" name="auditTrail"/>
```

## データベース構造の更新 {#updating-the-database-structure}

変更が完了し、保存されたら、SQL構造に影響を与える可能性のある変更をデータベースに適用する必要があります。 これを行うには、データベース更新アシスタントを使用します。

![](assets/schemaextension_3.png)

詳しくは、[この節](update-database-structure.md)を参照してください。

>[!NOTE]
>
>変更がデータベース構造に影響を与えない場合は、スキーマを再生成する必要があります。 これを行うには、更新するスキーマを選択し、右クリックして&#x200B;**[!UICONTROL Actions/Regenerate selectedスキーマ...を選択します。]**.

