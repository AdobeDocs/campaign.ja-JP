---
title: インスタンスのカスタマイズ
description: インスタンスをカスタマイズする方法について説明します
feature: Configuration, Application Settings
role: Developer
level: Intermediate, Experienced
exl-id: 18000763-5923-48bd-b62d-cccd3c11016d
TQID: https://experienceleague.adobe.com/HPOVcNhDJCNRMwYiEsXUCQ-p-63qM6T-Yz0BDVp4P-8
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: a075b2c1-7748-4328-b7f6-343aa314616aid: b82389f8-9b5e-4083-8e3b-3cef299fb8b9id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
subfeature_v2: id: cfc95e9b-b035-4403-a6a9-b27a8a053a37
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
level_v2: id: b5a62a22-46f7-4f0d-b151-3fc640bef588
topic_v2: id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87cid: eddd9b14-83bd-4ff4-9072-54a4a484abb7
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 525
ht-degree: 79%

---

# インスタンスのカスタマイズ {#gs-ac-custom}

**Campaign インスタンスをカスタマイズする方法**&#x200B;について説明します。

>[!CAUTION]
>
>Adobe Campaign のカスタマイズは、エキスパートユーザーのみ行えます。

## 新しいデータフィールドとスキーマの作成

Adobe Campaign はデータスキーマを利用して次のことを行います。

* アプリケーション内のデータオブジェクトが基盤となるデータベーステーブルにどのように関連付けられるかを定義する
* Adobe Campaign アプリケーション内で異なるデータオブジェクト間のリンクを定義する
* 各オブジェクトに含まれている個々のフィールドを定義および記述する

例えば、受信者テーブル （nms:recipient）などの既存のテーブルにフィールドを追加するには、そのスキーマを拡張する必要があります。

次の 2 つのテーブル拡張モードを使用できます。

* インターフェースで&#x200B;**新しいフィールド**&#x200B;アシスタントを使用する

  Campaignで新しいフィールドをすばやく追加する方法については、[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/new-field-wizard.html?lang=ja#configuring-campaign-classic){target="_blank"}を参照してください

* スキーマを拡張することにより、プログラミングで行います。 既存のスキーマを拡張する方法については、[この節](../dev/extend-schema.md)を参照してください。

また、Campaign データベース内に新しいテーブルを作成し、ビルトインのデータモデルを拡張することもできます。

Adobe Campaign にあらかじめ用意されていないまったく新しい型のデータ（例：契約表）を追加するには、カスタムスキーマを直接作成します。 詳しくは、 [こちらの例](../dev/create-schema.md#example--creating-a-contract-table)を参照してください。

**関連トピック**

[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=ja#configuring-campaign-classic){target="_blank"}のスキーマ編集の例

ユースケース：[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=ja#uc-link){target="_blank"}の既存の参照テーブルにフィールドをリンクする


## 入力フォームの変更

Adobe Campaign 入力フォームは、実装に合わせて調整できます。 XML コンテンツを変更して、フォームフィールドを追加または削除できます。

既存の入力フォームを変更する方法や新しいフォームを作成する方法については、[この節](../dev/forms.md)を参照してください。

## ダッシュボードのカスタマイズ{#gs-custom-dashboards}

Adobe Campaign インターフェイスでは、多数のWeb アプリケーションを使用して、受信者、配信、キャンペーン、ストックなどにアクセス、管理、操作できます。これらは、1 ページだけのダッシュボードの形式でインターフェイスに表示されます。

ビルトインの web アプリケーションは、エクスプローラーの&#x200B;**管理／設定／Web アプリケーション**&#x200B;フォルダーに格納されています。

Campaignで概要ページを作成する方法については、[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/use-cases--creating-overviews.html?lang=ja#creating-a-single-page-web-application){target="_blank"}を参照してください


## リストのカスタマイズとフィルターの作成 {#gs-lists-and-filters}

キャンペーンリストには、ナビゲーションやデータのビジュアライゼーションを容易にする定義済みフィルターが備わっています。

Adobe Campaign エクスプローラーのツリー内を移動すると、データベースに含まれているデータがリストに表示されます。 これらのリストのフィルタリング、検索の実行、情報の追加、データのフィルタリングと並べ替えなどを行うことができます。

リストの設定方法およびリスト設定の保存方法については、[このページ](../start/campaign-ui.md)を参照してください。

これらのリストにフィルターを適用すると、演算子で必要なデータのみを表示できます。 これにより、フィルターされたデータに対してアクションを実行できます。 フィルター設定を使用すると、リストから動的にデータを選択できます。 データが変更されると、フィルターされたデータは更新されます。

フィルタリングオプションについて詳しくは、[このページ](../audiences/create-filters.md)を参照してください。
