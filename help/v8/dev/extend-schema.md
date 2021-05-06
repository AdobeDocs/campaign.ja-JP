---
solution: Campaign Classic
product: campaign
title: キャンペーンスキーマの拡張
description: キャンペーンスキーマを拡張する方法を学ぶ
translation-type: tm+mt
source-git-commit: 779542ab70f0bf3812358884c698203bab98d1ce
workflow-type: tm+mt
source-wordcount: '364'
ht-degree: 6%

---

# スキーマの拡張{#extend-schemas}

この記事では、Adobe Campaignデータベースの概念的データモデルを拡張するための拡張スキーマの設定方法について説明します。

:bulb:キャンペーンの組み込みテーブルとそのやり取りについての詳細は、[このページ](datamodel.md)を参照してください。

アプリケーションに格納されるデータの物理的および論理的構造は、XML で記述されます。**スキーマ**&#x200B;と呼ばれるAdobe Campaign固有の文法に従います。

スキーマは、データベーステーブルに関連付けられたXMLドキュメントです。 データ構造を定義し、表のSQL定義を説明します。

* テーブルの名前
* フィールド
* 他のテーブルとのリンク

また、データの格納に使用するXML構造についても説明します。

* 要素と属性
* 要素の階層
* 要素と属性の種類
* デフォルト値
* ラベル、説明、およびその他のプロパティ。

スキーマを使用すると、データベース内にエンティティを定義できます。 エンティティごとにスキーマがあります。

## スキーマの構文{#syntax-of-schemas}

スキーマのルート要素は&#x200B;**`<srcschema>`**&#x200B;です。 **`<element>`**&#x200B;と&#x200B;**`<attribute>`**&#x200B;のサブ要素が含まれます。

最初の&#x200B;**`<element>`**&#x200B;サブ要素は、エンティティのルートに一致します。

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
>エンティティのルートスキーマは、要素と同じ名前を持ちます。

![](assets/schema_and_entity.png)

**`<element>`**&#x200B;タグはエンティティ要素の名前を定義します。 **`<attribute>`** スキーマのタグは、リンク先の **`<element>`** タグの属性の名前を定義します。

## スキーマのID {#identification-of-a-schema}

データスキーマは、名前と名前空間で識別されます。

名前空間を使用すると、スキーマのセットを目標領域別にグループ化できます。 例えば、**cus**&#x200B;名前空間は、顧客固有の設定(**customers**)に使用します。

>[!CAUTION]
>
>標準として、名前空間名は簡潔にし、XML命名規則に従って、許可された文字のみを含める必要があります。
>
>識別子の先頭を数字にすることはできません。

特定の名前空間は、Adobe Campaignアプリケーションの操作に必要なシステムエンティティの説明のために予約されています。

* **xl**:Cloudデータベーススキーマに関する、
* **xtk**:プラットフォームシステムデータについて
* **nl**:出願の全体的な使用に関して
* **nms**:配信(受信者、配信、追跡等)に関する
* **ncm**:コンテンツ管理に関して
* **temp**:一時スキーマ用に予約。

スキーマのIDキーは、名前空間と名前をコロンで区切った文字列です。例：**nms:受信者**。
