---
title: インスタンスのカスタマイズ
description: インスタンスをカスタマイズする方法について説明します
feature: Configuration, Application Settings
role: Developer
level: Intermediate, Experienced
exl-id: 18000763-5923-48bd-b62d-cccd3c11016d
source-git-commit: be085eaf7e1e7ded5986fdb6100045daba4d88fe
workflow-type: tm+mt
source-wordcount: '452'
ht-degree: 88%

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

例えば、受信者テーブル（nms:受信者）などの既存のテーブルにフィールドを追加するには、そのスキーマを拡張する必要があります。

次の 2 つのテーブル拡張モードを使用できます。

* インターフェースで&#x200B;**新しいフィールド**&#x200B;ウィザードを使用する

  Campaign に新しいフィールドをすぐに追加する方法については、[Campaign Classic v7 ドキュメントを参照してください ](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/new-field-wizard.html?lang=ja#configuring-campaign-classic){target="_blank"}

* スキーマを拡張することにより、プログラミングで行います。既存のスキーマを拡張する方法については、[この節](../dev/extend-schema.md)を参照してください。

また、Campaign データベース内に新しいテーブルを作成し、組み込みデータモデルを拡張することもできます。

Adobe Campaign にあらかじめ用意されていないまったく新しい型のデータ（例：契約表）を追加するには、カスタムスキーマを直接作成します。 詳しくは、 [こちらの例](../dev/create-schema.md#example--creating-a-contract-table)を参照してください。

**関連トピック**

スキーマエディションの例については、[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=ja#configuring-campaign-classic){target="_blank"} 参照してください。

ユースケース「既存の参照テーブルにフィールドをリンクする」については、[Campaign Classic v7 ドキュメントを参照してください ](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=ja#uc-link){target="_blank"}


## 入力フォームの変更

Adobe Campaign 入力フォームは、実装に合わせて調整できます。 XML コンテンツを変更して、フォームフィールドを追加または削除できます。

既存の入力フォームを変更する方法や新しいフォームを作成する方法については、[この節](../dev/forms.md)を参照してください。

## ダッシュボードのカスタマイズ{#gs-custom-dashboards}

Adobe Campaign インターフェイスでは、受信者、配信、キャンペーンおよび在庫などのアクセス、管理および操作に、多くの web アプリケーションを使用します。これらの情報は 1 ページのみのダッシュボード形式でインターフェイスに表示されます。

組み込みの web アプリケーションは、エクスプローラーの&#x200B;**管理／設定／Web アプリケーション**&#x200B;フォルダーに格納されています。

Campaign で概要ページを作成する方法については、[Campaign Classic v7 ドキュメントを参照してください ](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/use-cases--creating-overviews.html?lang=ja#creating-a-single-page-web-application){target="_blank"}


## リストのカスタマイズとフィルターの作成 {#gs-lists-and-filters}

キャンペーンリストには、ナビゲーションやデータのビジュアライゼーションを容易にする定義済みフィルターが備わっています。

Adobe Campaign エクスプローラーのツリー内を移動すると、データベースに含まれているデータがリストに表示されます。 これらのリストのフィルタリング、検索の実行、情報の追加、データのフィルタリングと並べ替えなどを行うことができます。

リストの設定方法およびリスト設定の保存方法については、[このページ](../start/campaign-ui.md)を参照してください。

これらのリストにフィルターを適用すると、演算子で必要なデータのみを表示できます。 これにより、フィルターされたデータに対してアクションを実行できます。フィルター設定を使用すると、リストから動的にデータを選択できます。データが変更されると、フィルターされたデータは更新されます。

フィルタリングオプションについて詳しくは、[このページ](../audiences/create-filters.md)を参照してください。
