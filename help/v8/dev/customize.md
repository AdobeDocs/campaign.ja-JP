---
product: Adobe Campaign
title: インスタンスのカスタマイズ
description: インスタンスをカスタマイズする方法について説明します
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 18000763-5923-48bd-b62d-cccd3c11016d
source-git-commit: c61d8aa8e0a68ccc81a6141782f860daf061bc61
workflow-type: tm+mt
source-wordcount: '546'
ht-degree: 80%

---

# インスタンスのカスタマイズ{#gs-ac-custom}

**Campaign インスタンスをカスタマイズする方法**&#x200B;について説明します。

>[!CAUTION]
>
>Adobe Campaign のカスタマイズは、エキスパートユーザーのみ行えます。

## 新しいデータフィールドとスキーマの作成

Adobe Campaign はデータスキーマを利用して次のことを行います。

* アプリケーション内のデータオブジェクトが基盤となるデータベーステーブルにどのように関連付けられるかを定義する
* Adobe Campaign アプリケーション内で異なるデータオブジェクト間のリンクを定義する
* 各オブジェクトに含まれている個々のフィールドを定義および記述する

例えば、受信者テーブル（nms:受信者）などの既存のテーブルにフィールドを追加するには、そのスキーマを拡張する必要があります。

次の 2 つのテーブル拡張モードを使用できます。

* インターフェースで&#x200B;**新しいフィールド**&#x200B;ウィザードを使用する

   ↗️[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/new-field-wizard.html?lang=ja#configuring-campaign-classic)でCampaignに新しいフィールドをすばやく追加する方法を説明します

* プログラムによってスキーマを拡張する

   ??[この節](../dev/extend-schema.md)で既存のスキーマを拡張する方法を説明します。


また、Adobe Campaign データベース内に新しいテーブルを作成し、組み込みデータモデルを拡張することもできます。

Adobe Campaign にあらかじめ用意されていないまったく新しい型のデータ（例：契約表）を追加するには、カスタムスキーマを直接作成します。 詳しくは、 [こちらの例](../dev/create-schema.md#example--creating-a-contract-table)を参照してください。

**関連トピック**

↗️[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=ja#configuring-campaign-classic)のスキーマエディションの例

↗️使用例：[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=ja#uc-link)の既存の参照テーブルにフィールドをリンクする


## 入力フォームの変更

Adobe Campaign 入力フォームは、実装に合わせて調整できます。 XML コンテンツを変更して、フォームフィールドを追加または削除できます。

??既存の入力フォームを変更する方法、または[新しいフォームを作成する方法については、この節](../dev/forms.md)を参照してください。

## ダッシュボードのカスタマイズ{#gs-custom-dashboards}

Adobe Campaign インターフェイスでは、受信者、配信、キャンペーンおよび在庫などのアクセス、管理および操作に、多くの web アプリケーションを使用します。これらの情報は 1 ページのみのダッシュボード形式でインターフェイスに表示されます。

標準提供の web アプリケーションは、管理／設定／Web アプリケーションノードに格納されています。

↗️ [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/use-cases—creating-overviews.html?lang=ja#creating-a-single-page-web-application)のCampaignで概要ページを作成する方法を説明します


## リストのカスタマイズとフィルターの作成 {#gs-lists-and-filters}

### ダッシュボードからのデータへのアクセス

キャンペーンリストには、ナビゲーションやデータの視覚化を容易にする定義済みフィルターが付属しています。

↗️ フィルターオプションの詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/filtering-data/filtering-options.html?lang=ja#about-filtering)を参照してください


### エクスプローラーからのデータへのアクセス

Adobe Campaign エクスプローラーのツリー内を移動すると、データベースに含まれているデータがリストに表示されます。 これらのリストのフィルタリング、検索の実行、情報の追加、データのフィルタリングと並べ替えなどを行うことができます。

↗️[Campaign Classicv7ドキュメント](hhttps://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-ui-lists.html?lang=ja#getting-started)でリストを設定し、リスト設定を保存する方法を説明します。


これらのリストにフィルターを適用すると、演算子で必要なデータのみを表示できます。 これにより、フィルターされたデータに対してアクションを実行できます。フィルター設定を使用すると、リストから動的にデータを選択できます。データが変更されると、フィルターされたデータは更新されます。

↗️[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/filtering-data/creating-filters.html?lang=ja#typology-of-available-filters)のデータをフィルタリングする方法を説明します
