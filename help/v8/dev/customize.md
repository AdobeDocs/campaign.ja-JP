---
solution: Campaign v8
product: Adobe Campaign
title: インスタンスのカスタマイズ
description: インスタンスのカスタマイズ方法の詳細
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 18000763-5923-48bd-b62d-cccd3c11016d
source-git-commit: 167730cc3e81ee47f02bcdbc2c39fe793a99c534
workflow-type: tm+mt
source-wordcount: '546'
ht-degree: 15%

---

# インスタンスのカスタマイズ{#gs-ac-custom}

**Campaignインスタンスのカスタマイズ**&#x200B;方法を説明します。

>[!CAUTION]
>
>Adobe Campaignのカスタマイズは、エキスパートユーザーのみが利用できます。

## 新しいデータフィールドとスキーマの作成

Adobe Campaignは、データスキーマを使用して次のことをおこないます。

* アプリケーション内のデータ・オブジェクトが基盤となるデータベース・テーブルにどのように結び付けられるかの定義
* Campaignアプリケーション内での様々なデータオブジェクト間のリンクの定義
* 各オブジェクトに含まれる個々のフィールドの定義と説明

例えば、受信者テーブル(nms:recipient)などの既存のテーブルにフィールドを追加するには、そのスキーマを拡張する必要があります。

次の2つのテーブル拡張モードを使用できます。

* インターフェイスを介して、**新しいフィールド**&#x200B;アシスタントを使用します。

   [!DNL :arrow_upper_right:]  [Campaign Classicv7のドキュメントで、Campaignに新しいフィールドをすばやく追加する方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/new-field-wizard.html?lang=en#configuring-campaign-classic)

* プログラムによる、スキーマの拡張

   [!DNL :bulb:] 既存のスキーマを拡張する方法については、この節 [を参照してください](../dev/extend-schema.md)。


また、Campaignデータベースに新しいテーブルを作成し、組み込みデータモデルを拡張することもできます。

既製で存在しないまったく新しいタイプのデータをAdobe Campaignに追加する（例えば契約のテーブル）には、カスタムスキーマを直接作成できます。 詳しくは、[この例](../dev/create-schema.md#example--creating-a-contract-table)を参照してください。

**関連トピック**

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=en#configuring-campaign-classic)のスキーマエディションの例

:[!DNL :arrow_upper_right:]:使用例：[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=en#uc-link)の既存の参照テーブルにフィールドをリンクする


## 入力フォームの変更

Campaignの入力フォームは、実装に合わせて調整できます。 XMLコンテンツを変更して、フォームフィールドを追加または削除できます。

[!DNL :bulb:] 既存の入力フォームを変更する方法、または新しいフォームを作成する方法については、この節 [を参照してください](../dev/forms.md)。

## ダッシュボードのカスタマイズ{#gs-custom-dashboards}

Adobe Campaign インターフェイスは、受信者、配信、キャンペーン、在庫などのアクセス、管理、操作に、多くの Web アプリケーションを使用します。それらは、1 ページのみのダッシュボードの形のインターフェイスで表示されます。

標準の Web アプリケーションは、管理／設定／Web アプリケーションノードに格納されています。

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/use-cases--creating-overviews.html?lang=en#creating-a-single-page-web-application)のCampaignで概要ページを作成する方法を説明します


## リストのカスタマイズとフィルターの作成{#gs-lists-and-filters}

### ダッシュボードからのデータへのアクセス

キャンペーンリストには、ナビゲーションやデータの視覚化を容易にする定義済みフィルターが含まれています。

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/filtering-data/filtering-options.html?lang=en#about-filtering)のフィルターオプションについての詳細


### エクスプローラーからのデータへのアクセス

Adobe Campaign Explorerツリー内を移動すると、データベースに含まれているデータがリストに表示されます。 これらのリストのフィルタリング、検索の実行、情報の追加、データのフィルタリングと並べ替えを行うことができます。

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-ui-lists.html?lang=en#getting-started)でリストを設定し、リスト設定を保存する方法を説明します。


これらのリストにフィルターを適用して、オペレーターが必要とするデータのみを表示できます。 その後、フィルターされたデータに対してアクションを実行できます。 フィルター設定を使用すると、リストから動的にデータを選択できます。データが変更されると、フィルターされたデータは更新されます。

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/filtering-data/creating-filters.html?lang=en#typology-of-available-filters)のデータをフィルターする方法を説明します
