---
solution: Campaign
product: Adobe Campaign
title: インスタンスのカスタマイズ
description: インスタンスをカスタマイズする方法を学びます
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 18000763-5923-48bd-b62d-cccd3c11016d
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '555'
ht-degree: 14%

---

# インスタンスのカスタマイズ{#gs-ac-custom}

**キャンペーンインスタンスをカスタマイズする方法**

>[!CAUTION]
>
>Adobe Campaignのカスタマイズは、エキスパートユーザーのみが予約しています。

## 新しいデータフィールドとスキーマの作成

Adobe Campaignでは、次の目的でデータスキーマを使用しています。

* アプリケーション内のデータ・オブジェクトと基礎となるデータベース表との関連付け方法の定義
* キャンペーンアプリケーション内の様々なデータオブジェクト間のリンクの定義
* 各オブジェクトに含まれる個々のフィールドの定義と説明

受信者テーブル(nms:受信者)など、既存のテーブルにフィールドを追加するには、そのスキーマを拡張する必要があります。

次の2つのテーブル拡張モードを使用できます。

* インターフェースを通じて、**新しいフィールド**&#x200B;アシスタントを使用します。

   :arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/new-field-wizard.html?lang=en#configuring-campaign-classic)で、キャンペーンに新しいフィールドをすばやく追加する方法を説明します。

* スキーマを拡張することにより、プログラムによって

   :bulb:[このセクション](../dev/extend-schema.md)で、既存のスキーマを拡張する方法を説明します。


キャンペーンデータベース内に新しいテーブルを作成し、組み込みデータモデルを拡張できます。

Adobe Campaignにあらかじめ用意されているタイプのデータをまったく新しく追加するには（例えば契約表）、カスタムスキーマを直接作成します。 詳しくは、[この例](../dev/create-schema.md#example--creating-a-contract-table)を参照してください。

**関連トピック**

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=en#configuring-campaign-classic)のスキーマ版の例

:arrow_upper_right:使用例：[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=en#uc-link)の既存の参照テーブルにフィールドをリンクする


## 入力フォームの変更

キャンペーン入力フォームは、実装に合わせて調整できます。 XMLコンテンツを変更して、フィールドを追加または削除できます。

:bulb:既存の入力フォームを変更する方法、または新しいフォームを作成する方法については、[このセクション](../dev/forms.md)を参照してください。

## ダッシュボードのカスタマイズ{#gs-custom-dashboards}

Adobe Campaign インターフェイスは、受信者、配信、キャンペーン、在庫などのアクセス、管理、操作に、多くの Web アプリケーションを使用します。それらは、1 ページのみのダッシュボードの形のインターフェイスで表示されます。

標準の Web アプリケーションは、管理／設定／Web アプリケーションノードに格納されています。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/use-cases--creating-overviews.html?lang=en#creating-a-single-page-web-application)のキャンペーンで概要ページを作成する方法を説明します。


## リストのカスタマイズとフィルターの作成{#gs-lists-and-filters}

### ダッシュボードのデータへのアクセス

キャンペーンリストには、ナビゲーションやデータの視覚化を容易にする定義済みフィルターが付属しています。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/filtering-data/filtering-options.html?lang=en#about-filtering)のフィルターオプションの詳細


### エクスプローラからデータにアクセスする

Adobe Campaignエクスプローラのツリー内を移動すると、データベースに含まれるデータがリストに表示されます。 これらのリストのフィルタリング、検索の実行、情報の追加、データのフィルタリングと並べ替えを行うことができます。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-ui-lists.html?lang=en#getting-started)にリストを設定し、リストの設定を保存する方法を説明します。


これらのリストにフィルターを適用すると、演算子で必要なデータのみを表示できます。 その後、フィルタリングされたデータに対してアクションを実行できます。 フィルター設定を使用すると、リストから動的にデータを選択できます。データが変更されると、フィルターされたデータは更新されます。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/filtering-data/creating-filters.html?lang=en#typology-of-available-filters)でデータをフィルタリングする方法を学ぶ
