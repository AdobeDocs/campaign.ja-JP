---
product: campaign
title: ランディングページの作成
description: ランディングページの作成
feature: Landing Pages
version: Campaign v8, Campaign Classic v7
exl-id: 71c737c2-b0d6-4ae8-a5df-28a08dff82d7
TQID: 'https://experienceleague.adobe.com/-IwRJsJKykm7pbLwdlXjLa1YP3TuJX2zvbrJGd2zLto'
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
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
source-git-commit: 6db6c9152f6060b40596bd65a2ce705f916401be
workflow-type: tm+mt
source-wordcount: '840'
ht-degree: 93%
---
# ランディングページの作成{#creating-a-landing-page}

>[!NOTE]
>
>最も一般的なユースケースでは、Campaign Web ユーザーインターフェイスでランディングページを作成し、簡単にデザインして公開できます。 この節の説明に従って、クライアントコンソールで作成されたランディングページでは、より多くの設定を提供し、より高度なユースケースをカバーします。
>
>[Campaign Web ユーザーインターフェイスのランディングページについて詳しく見る](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/landing-pages/get-started-lp){target="_blank"}



## ランディングページの作成について {#about-landing-pages-creation}

この使用例では、Adobe Campaign コンソールからランディングページを作成するためのデジタルコンテンツエディターの使用方法を示します。

Adobe Campaign でランディングページの設定を開始する前に、HTML ページに表示する **1 つ以上のテンプレート**&#x200B;があることを確認します。

この使用例の主な目的は、DCE の機能を使用して、ランディングページフォームフィールドを Adobe Campaign の内部フィールドに対応させることです。

## ランディングページの作成 {#creating-the-landing-page}

新しいランディングページタイプの Web アプリケーションを作成するには、次の手順を実行します。

1. 「**[!UICONTROL キャンペーン]**」タブに移動し、「**[!UICONTROL Web アプリケーション]**」リンクをクリックして、「**[!UICONTROL 作成]**」ボタンをクリックします。
1. **[!UICONTROL 新しいランディングページ]**&#x200B;テンプレートを選択して、ラベルを入力し、「**[!UICONTROL 保存]**」をクリックします。

   ![](assets/dce_uc1_newlandingpage.png)

1. 「**[!UICONTROL 編集]**」タブをクリックします。
1. **終了**&#x200B;アクティビティを削除します。
1. 「**[!UICONTROL ストレージ]**」アクティビティの後に「**[!UICONTROL ページ]**」アクティビティを追加します。
1. **ページ 2** アクティビティを編集してから、「**[!UICONTROL プロパティ]**」タブの「**[!UICONTROL アウトバウンドトランジションを有効にする]**」オプションのチェックをオフにします。

   ![](assets/dce_uc1_transition.png)

1. 変更を保存します。

その後は、次の順番になります。

![](assets/dce_uc1_edition_activity.png)

>[!NOTE]
>
>Web アプリケーションの作成について詳しくは、[この節](creating-a-new-web-application.md)を参照してください。

## 手順 1 - テンプレートの選択と読み込み {#step-1---selecting-and-loading-templates}

ここでは、Web アプリケーションの各ページの **HTML コンテンツのインポート**&#x200B;方法について見ていきます。

テンプレートには、次が含まれている必要があります。

* **HTML** ファイル（必須）
* 1 つ以上の **CSS** ファイル（オプション）
* 1 つ以上の&#x200B;**画像**（オプション）

テンプレートを最初のページに読み込むには、次の手順に従います。

1. Web アプリケーションの最初の&#x200B;**[!UICONTROL ページ]**&#x200B;アクティビティを開きます。
1. 「**[!UICONTROL ファイルから]**」を選択し、コンテンツテンプレートを取得します。

   ![](assets/dce_uc1_selectmodel.png)

1. 使用する HTML ファイルを選択します。
1. 「**開く**」をクリックしてインポートを開始します。

   読み込み中、共有ファイルのリストが表示されます。 インポートシステムは、選択した HTML にリンクされたすべてのファイル（CSS、画像など）があることを確認します。

   インポートが終了したら、「**[!UICONTROL 閉じる]**」ボタンをクリックします。

   ![](assets/dce_uc1_import.png)

   >[!CAUTION]
   >
   >閉じる前に、「**[!UICONTROL 外部リソースのパブリッシュに成功しました。]**」というメッセージが表示されるまで待たなければなりません。

1. 「**[!UICONTROL プロパティ]**」タブをクリックします。
1. 各ページの&#x200B;**ラベル**&#x200B;を入力します（例：1 ページ目 = 収集、2 ページ目 = ありがとうございます）。

   ![](assets/dce_uc1_pagelabel.png)

Web アプリケーションに挿入された各ページについて、これらの手順を適用します。

>[!CAUTION]
>
>**DCE は、読み込んだ HTML ページの JavaScript コードを実行します。** HTML テンプレートの JavaScript エラーは、Adobe Campaign インターフェイスに表示されることがあります。 これらのエラーは、エディターとは関係ありません。 インポートしたファイルにエラーがないことを確認するには、ファイルを DCE にインポートする前に web ブラウザーでテストすることをお勧めします。

## 手順 2 - コンテンツの設定 {#step-2---configuring-the-content}

ここでは、インポートしたコンテンツを調整し、データベースのフィールドを Web ページのフォームにリンクします。 前に作成した Web アプリケーションを次に示します。

![](assets/dce_uc1_lp_enchainement.png)

### コンテンツの変更 {#modifying-content}

最初に、ページの色を変更します。 手順は次のとおりです。

1. **[!UICONTROL Collection]** ページを開きます。
1. 背景をクリックします。
1. 右側で「**背景色**」をクリックします。
1. 新しい背景色を選択します。
1. 「**OK**」をクリックして、変更を確定します。

   ![](assets/dce_uc1_changecolor.png)

1. 同じ処理を適用して、ボタンの色を変更します。

   ![](assets/dce_uc1_finalcolor.png)

### フォームフィールドのリンク {#linking-form-fields}

提供された情報を保存するために、ページのフィールドをデータベースのフィールドにリンクします。

1. フォームフィールドを選択します。
1. エディターの右側で「**[!UICONTROL フィールド]**」セクションを編集します。
1. 選択したフィールドにリンクするデータベースフィールドを選択します。

   ![](assets/dce_uc1_mapping.png)

1. ページの各フィールドについて、この処理を繰り返します。

フィールドを必須にできます。例えば、「**[!UICONTROL メール]**」フィールドをクリックして、「**必須**」オプションを有効にします。

![](assets/dce_uc1_fieldmandatory.png)

### 次のページへのリンクの作成 {#creating-a-link-to-the-next-page}

この手順は必須です。これは、web アプリケーションが次の手順の順序を決定できるためです。収集したデータをデータベースに保存し、次のページ（**お礼**&#x200B;のページ）を表示します。

1. コレクションページの「**[!UICONTROL 送信]**」ボタンを選択します ****。
1. **[!UICONTROL アクション]**&#x200B;ドロップダウンメニューをクリックします。
1. **[!UICONTROL 次のページ]**&#x200B;アクションを選択します。

   ![](assets/dce_uc1_actionbouton.png)

### パーソナライゼーションフィールドの挿入 {#inserting-a-personalization-field}

このステップでは、Thank you ページをパーソナライズします。 手順は次のとおりです。

1. **[!UICONTROL Thank you]** ページを開きます。
1. テキスト領域の受信者の名を挿入する場所にマウスポインターを置きます。
1. ツールバーの&#x200B;**[!UICONTROL 挿入]**&#x200B;メニューで、「**[!UICONTROL パーソナライゼーションフィールド]**」を選択します。
1. 名を選択します。

   ![](assets/dce_uc1_persochamp.png)

パーソナライゼーションフィールドは、エディターで黄色い背景で示されます。

![](assets/dce_uc1_edit_champperso.png)

## 手順 3 - コンテンツの公開 {#step-3---publishing-content}

コンテンツは、Web アプリケーションダッシュボードからパブリッシュされます。 「**[!UICONTROL パブリッシュ]**」ボタンをクリックして、実行します。

![](assets/dce_uc1_pub_dashboard.png)

パブリッシュ中に、ログが表示されます。 パブリッシュシステムは、Web アプリケーションで見つかったすべてのコンテンツを分析します。

![](assets/dce_uc1_pub_dashboard_journal.png)

>[!NOTE]
>
>パブリッシュログでは、警告およびエラーがアクティビティごとに並べ替えられます。

これで、フォームが使用できます。フォームの URL は、アプリケーションダッシュボードでアクセスでき、受信者に送信できます。
