---
product: campaign
title: 収集したデータの公開、トラッキングおよび使用
description: 調査で収集されたデータを公開、トラッキング、使用する方法を説明します
feature: Surveys
version: Campaign v8, Campaign Classic v7
exl-id: 3cf3c486-6640-4d67-95cf-50d5767deb60
TQID: 'https://experienceleague.adobe.com/5faTMQayKA-bxeGrKlNlk7fxZUV2-TO-eVCSe3iRrgA'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
  - id: 71b1c383-45b9-57e0-b8cd-ea2e98a01a26
    internal-label: Surveys
subfeature_v2:
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
source-git-commit: d3b34546c1b08190772154efe6f818b98cc1094c
workflow-type: tm+mt
source-wordcount: '1198'
ht-degree: 71%
---
# 収集したデータの公開、トラッキングおよび使用{#publish-track-and-use-collected-data}

>[!AVAILABILITY]
>
>調査は、[Campaign FFDA デプロイメント &#x200B;](../../architecture/enterprise-deployment.md)では利用できません。



フォームを作成、設定、公開したら、オーディエンスとリンクを共有し、回答を追跡できます。

>[!NOTE]
>
>Adobe Campaignのアンケートのライフサイクルと、その公開モードと配信モードは、Web フォームと似ています。詳しくは、[web フォームの概要](../web/about-web-forms.md)を参照してください。

## 調査ダッシュボード {#survey-dashboard}

各調査には、ステータス、説明、パブリック URL および利用スケジュールを表示できる独自のダッシュボードがあります。 また、利用可能なレポートを表示できます。 [詳細情報](#reports-on-surveys)。

調査の公開 URL は、ダッシュボードに表示されます。

![&#x200B; オンライン状態と、アンケートへのアクセスに使用したパブリック URLを指す矢印を示す調査ダッシュボード &#x200B;](assets/survey_public_url.png)

## 回答のトラッキング {#response-tracking}

調査の回答をログおよびレポートでトラッキングできます。

### 調査ログ {#survey-logs}

配信された各調査について、「**[!UICONTROL ログ]**」タブで回答をトラッキングできます。 このタブには、調査を完了したユーザーとその接触チャネルのリストが表示されます。

![各回答の日付、受信者および送信元を一覧表示するアンケートの「回答」タブ &#x200B;](assets/s_ncs_admin_survey_logs.png)

行をダブルクリックして、回答者が入力した調査フォームを表示します。 すべての調査を参照して、すべての回答にアクセスできます。 これらは、外部ファイルにエクスポートできます。 詳しくは、[回答のエクスポート](#exporting-answers)を参照してください。

接触チャネルは、次の文字を追加することで、調査 URL に示されます。

```text
?origin=xxx
```

調査が編集されている間、その URL にはパラメーター **[!UICONTROL __uuid]** が含まれます。これは、テストフェーズにあり、まだオンラインでないことを示しています。 この URL で調査にアクセスする場合、作成されたレコードは、トラッキング（レポート）で考慮されません。 origin の値は、強制的に **[!UICONTROL Adobe Campaign]** になります。

URL パラメーターについて詳しくは、[&#x200B; フォーム URL パラメーター](../web/defining-web-forms-properties.md#form-url-parameters)を参照してください。

### 調査のレポート {#reports-on-surveys}

「ダッシュボード」タブを使用すると、調査レポートにアクセスできます。 レポート名をクリックすると、表示されます。

![回答、一般、ドキュメント、マイクロサイトの分析レポートの内訳が表示された調査ダッシュボードのレポートビュー](assets/s_ncs_admin_survey_report_doc.png)

調査の構造は、**[!UICONTROL ドキュメント]**&#x200B;レポートに表示されます。

調査の「**[!UICONTROL レポート]**」タブでは Web 調査に関するレポートがほかにも 2 つ利用できます。**[!UICONTROL 一般]**&#x200B;および&#x200B;**[!UICONTROL 回答の分類]**&#x200B;です。

* 一般

  このレポートには、調査に関する一般的な情報（時間の経過に伴う回答数の変化、接触チャネルおよび言語による配分）が含まれます。

  一般レポートの例：

  ![開始日、回答数、時間の経過に伴う回答数を示す一般的なレポート &#x200B;](assets/s_ncs_admin_survey_report_0.png)

* 回答の分類

  このレポートには、各質問に関する回答の分類が表示されます。 この分類は、**[!UICONTROL 質問]**&#x200B;タイプのコンテナに格納されたフィールドに提供された回答でのみ利用できます。 選択コントロールに対してのみ有効です（例えば、テキストフィールドは分類されません）。

  ![回答数の内訳レポート。質問に対する各回答の数と割合](assets/s_ncs_admin_survey_report_2.png)

## 回答のエクスポート {#exporting-answers}

調査の回答は、後で処理するために、外部ファイルにエクスポートできます。 それには、次の 2 つの方法があります。

1. レポートデータのエクスポート

   レポートデータをエクスポートするには、「**[!UICONTROL エクスポート]**」ボタンをクリックして、エクスポート形式を選択します。

   レポートデータのエクスポートについて詳しくは、[この節](https://experienceleague.adobe.com/ja/docs/campaign-classic/using/reporting/creating-new-reports/about-reports-creation-in-campaign){target="_blank"}を参照してください。

1. 回答のエクスポート

   回答をエクスポートするには、調査の「**[!UICONTROL 回答]**」タブをクリックして、右クリックします。 「**[!UICONTROL エクスポート]**」をクリックします。

   ![すべての回答を選択した状態で応答タブを開き、右クリックメニューに「書き出し」オプションが表示されている](assets/s_ncs_admin_survey_logs_export_menu.png)

   次に、エクスポートする情報およびストレージファイルを入力します。

   エクスポートアシスタントで、出力ファイルのコンテンツおよび形式を設定できます。

   次のことが可能です。

   * 出力ファイルに列を追加し、（データベースに格納された）受信者の情報を復元する
   * エクスポートしたデータの形式を設定する
   * ファイルの情報のエンコード形式を選択する

   エクスポートする調査にいくつかの「**[!UICONTROL 複数ラインテキスト]**」または「**[!UICONTROL HTML テキスト]**」フィールドが含まれている場合、**[!UICONTROL XML]** 形式でエクスポートする必要があります。 これをおこなうには、次に示すように、**[!UICONTROL 出力フォーマット]**&#x200B;ドロップダウンリストで、この形式を選択します。

   ![出力フォーマット ドロップダウンを開き、XMLを選択したリストの書き出しウィザード &#x200B;](assets/s_ncs_admin_survey_logs_export_xml.png)

   「**[!UICONTROL 開始]**」をクリックして、エクスポートを実行します。

   >[!NOTE]
   >
   >データのエクスポートおよびその設定のステージについて詳しくは、[この節](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/data/import){target="_blank"}（Campaign v8 ドキュメント）を参照してください。

## 収集したデータの使用 {#using-the-collected-data}

オンライン調査で収集された情報は、ターゲティングワークフローのフレームワーク内で復元できます。 これをおこなうには、**[!UICONTROL 調査の回答]**&#x200B;ボックスを使用します。

次の例では、少なくとも 2 人の子供を含む、オンライン調査で最高スコアを獲得した 5 人の受信者に特別に Web オファーを実行します。 この回答の調査は、次のようになります。

![&#x200B; スコア、子どもの数、連絡先のタイプが記載された各回答者を一覧表示するアンケートの回答タブ &#x200B;](assets/s_ncs_admin_survey_responses_wf_box_4.png)

ターゲティングワークフローで、**[!UICONTROL 調査の回答]**&#x200B;は、次のように設定されます。

ターゲティングワークフローの![&#x200B; アンケート回答ボックス。アンケートが選択され、抽出する列を選択するリンクが表示されている](assets/s_ncs_admin_survey_responses_wf_box_1.png)

最初に、関連する調査を選択してから、ウィンドウの中央のセクションで、抽出するデータを選択します。 この場合、5 つの最高スコアを復元するために分割ボックスで使用するので、少なくともスコア列を抽出する必要があります。

「**[!UICONTROL クエリを編集]**」リンクをクリックして、回答のフィルター条件を示します。

![子の数とスコアが50](assets/s_ncs_admin_survey_responses_wf_box_2.png)を超えるクエリ フィルター応答を含むアンケート応答ボックス

ターゲティングワークフローを開始します。 このクエリは、8 人の受信者を復元します。

「ターゲットを表示」オプションがハイライト表示された![&#x200B; ワークフロー結果の移行ショートカットメニュー](assets/s_ncs_admin_survey_responses_wf_box_5.png)

コレクションボックスのアウトバウンドトランジションを右クリックして、表示します。

![&#x200B; アンケート回答クエリから返された8人の受信者とそのスコアを一覧表示する母集団ウィンドウ &#x200B;](assets/s_ncs_admin_survey_responses_wf_box_6.png)

次に、分割ボックスをワークフローに配置して、最高スコアの 5 人の受信者を復元します。

分割ボックスを編集して、次のように設定します。

* 最初に、「**[!UICONTROL 一般]**」タブで適切なスキーマを選択して、次にサブセットを設定します。

  ![&#x200B; アンケート回答ボックス &#x200B;](assets/s_ncs_admin_survey_responses_wf_box_6b.png)の後に、「追加データのみを使用」を選択したボックス「一般」タブを分割する

* 「**[!UICONTROL サブセット]**」タブに移動して、「**[!UICONTROL 選択レコード数の制限]**」オプションを選択し、「**[!UICONTROL 編集]**」リンクをクリックします。

  ![選択したレコードの制限オプションと編集リンクを含む「サブセットを分割」タブ &#x200B;](assets/s_ncs_admin_survey_responses_wf_box_7.png)

* 「**[!UICONTROL 並べ替えの後に最初のレコードのみ保持]**」オプションを選択して、並べ替える列を選択します。 「**[!UICONTROL 降順で並べ替え]**」オプションをチェックします。

  ![並べ替え後の最初のレコードのみを保持し、スコア &#x200B;](assets/s_ncs_admin_survey_responses_wf_box_8.png)で降順の並べ替えを行うレコード数制限ウィザード

* 「**[!UICONTROL 次へ]**」ボタンをクリックして、レコードの数を 5 に制限します。

  ![最大サイズが5に設定され、終了ボタンが設定されているレコード数の制限ステップ &#x200B;](assets/s_ncs_admin_survey_responses_wf_box_9.png)

* 「**[!UICONTROL 完了]**」をクリックしてから、ワークフローを再起動してターゲティングを承認します。

## データの標準化 {#standardizing-data}

エイリアスを使用して収集したデータに対して、Adobe Campaign で標準化プロセスを設定できます。 これにより、データベースに保存されているデータを標準化できます。それには、関連情報を含んだ項目別リストでエイリアスを定義します。 **定義済みリストの操作**&#x200B;方法について詳しくは、[Adobe Campaign v8 （コンソール）ドキュメント](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/config/settings/enumerations){target=_blank}を参照してください。