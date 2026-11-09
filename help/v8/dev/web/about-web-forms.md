---
product: campaign
title: Web フォームの基礎知識
description: Campaign の Web フォームの基礎知識
feature: Landing Pages, Web Forms
version: Campaign v8, Campaign Classic v7
exl-id: 63602bed-ace6-4632-a735-5d268a7d72d0
TQID: 'https://experienceleague.adobe.com/0pFZXTesqvdOPLrqbW4dRx2O0WR0RaoBnwVyQl9FZDQ'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
subfeature_v2:
  - id: f391046b-0cf3-4e76-bd3b-97fe06654506
    internal-label: Web Apps
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
  - id: d7be2b01-dc9c-40f7-aace-a151707504ed
    internal-label: Landing pages
topic_v2:
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
source-git-commit: 2ac66c0844ec361de9a1658f666c190fcfac8ffa
workflow-type: tm+mt
source-wordcount: '515'
ht-degree: 100%
---
# Web フォームの基本を学ぶ{#about-web-forms}



Adobe Campaign には、Web フォームを定義して公開するためのグラフィカルなモジュールが統合されており、入力および選択フィールドを含むページを作成して、データベースからのデータを含めることができます。 これにより、ユーザーがアクセスして情報を表示または入力できる Web ページをデザインおよび投稿できます。

この章では、Web フォームの作成と管理、フィールドとページの管理方法、およびストレージとモードの保存について詳しく説明します。

>[!CAUTION]
>
>プライバシー保護のために、すべての外部リソースに対して HTTPS を使用することをお勧めします。

## Web フォームを作成する手順 {#steps-for-creating-a-web-form}

ここでは、Adobe Campaign の **webForm** タイプをデザインするのに必要な手順と、利用可能なオプションおよび設定について説明します。 Adobe Campaign を使用して、作成した Web フォームをユーザーが利用できるようにし、回答を収集してデータベースにアーカイブします。

>[!CAUTION]
>
>Web アプリケーションおよび Web フォームを設定する場合、縦の解像度は 900 ピクセル以上必要です（例：1600 x 900）。

Web フォームには、「**キャンペーン**」タブの Web アプリケーションメニューからアクセスします。 Adobe Campaign ツリーで、**[!UICONTROL リソース／オンライン／Web アプリケーション]**&#x200B;ノードにグループ化されています。

Web フォームを作成するには、Web アプリケーションのリストの上の「**[!UICONTROL 作成]**」ボタンをクリックします。

![](assets/webapp_create_new.png)

Web フォームテンプレートを選択します（デフォルトは **[!UICONTROL newWebForm]**）。

![](assets/s_ncs_admin_survey_select_template.png)

これにより、フォームのダッシュボードが表示されます。

![](assets/webapp_empty_dashboard.png)

「**[!UICONTROL 編集]**」タブを使用すると、コンテンツを作成できます。

![](assets/webapp_edit_tab.png)

Web フォームの設定とコンテンツを定義するには、次の手順に従います。

* まず、必要なページとコントロール（入力フィールド、ドロップダウンリスト、HTML コンテンツなど）を作成します。

  この手順は、以下で詳しく説明します。

* ページの順番を定義し、表示を調節します。

  この手順について詳しくは、[Web フォームページの順番の定義](defining-web-forms-page-sequencing.md)を参照してください。

* 必要に応じて、コンテンツを翻訳します。

  この手順について詳しくは、[Web フォームの翻訳](translating-a-web-form.md)を参照してください。

## Web フォームの設計について {#about-web-forms-designing}

フォームのページは、入力ゾーン（テキスト）、選択フィールド（リスト、チェックボックスなど） および静的要素（画像、HTLM コンテンツなど）を定義および設定できる、専用のエディターで作成されます。 フォームのページは、コンテナにグループ化したり、ニーズに合わせてレイアウトを変更したりできます（詳しくは、[コンテナの作成](defining-web-forms-layout.md#creating-containers)を参照）。

以降の節では、フォーム画面のコンテンツとレイアウトの定義方法について説明します。

* [Web フォームへのフィールドの追加](adding-fields-to-a-web-form.md),
* [HTML コンテンツの挿入](static-elements-in-a-web-form.md#inserting-html-content),
* [Web フォームの静的要素](static-elements-in-a-web-form.md),
* [Web フォームレイアウトの定義](defining-web-forms-layout.md).

>[!NOTE]
>
>* ページデザイン中に、「**[!UICONTROL プレビュー]**」タブで最終的なレンダリングを表示できます。 変更を表示するには、最初にフォームを保存します。 すべてのエラーが「**[!UICONTROL ログ]**」タブに表示されます。
>* ページの表示と情報ストレージが適切な順序でおこなわれることを確認するには、Web フォームのデバッグモードを有効にします。 これをおこなうには、「**[!UICONTROL プレビュー]**」サブタブに移動し、「**[!UICONTROL デバッグモードを有効にする]**」チェックボックスをオンにして、すべての収集された情報と可能性のある実行エラーが各ページの下部に表示されるようにします。
>

### ツールバーのアイコンの使用 {#using-the-icons-in-the-toolbar}

ツールバーのアイコンまたは右クリックを使用して入力ゾーンを挿入することもできます。

![](assets/s_ncs_admin_webform_add_selection.png)

この場合、まず追加するフィールドのタイプを選択してから、回答ストレージモードを選択します。

![](assets/s_ncs_admin_webform_select_storage.png)

「**[!UICONTROL OK]**」をクリックして、選択を承認します。

![](assets/s_ncs_admin_webform_confirm_storage.png)
