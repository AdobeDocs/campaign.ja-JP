---
title: Adobe Campaign ワークフローを使用したプロセスの管理と自動化
description: ワークフローの概要
feature: Workflows
role: User, Admin
level: Beginner
exl-id: 0be1c5f5-f07d-46dc-bebc-5eb50f466547
source-git-commit: 2ce1ef1e935080a66452c31442f745891b9ab9b3
workflow-type: tm+mt
source-wordcount: '1629'
ht-degree: 100%

---

# プロセスの管理と自動化

Campaign を設定して、マーケティングキャンペーンの強力な自動処理機能を活用します。

次の設定をおこなうことができます。

* ワークフロー
* 繰り返しキャンペーン
* エンドツーエンドの検証サイクル
* アラート
* レポートの自動送信
* トリガーされるイベント

## ワークフローのデザインと使用{#gs-ac-wf}

Adobe Campaign ワークフローを使用すると、セグメントの作成やメッセージの準備から配信に至るまでの、マーケティングキャンペーンのあらゆる側面でスピードと規模を改善できます。

これらの[エンドツーエンドのユースケース](#end-to-end-uc)でワークフローをデザインする方法を説明します。

ワークフローのユーザーインターフェイスと実行について詳しくは、 以下のページを参照してください。

* [ワークフローの基本を学ぶ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/about-workflows.html?lang=ja)

* [ワークフローのベストプラクティス](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja)

* [ビルトインのテクニカルワークフロー](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/wf-type/technical-workflows.html?lang=ja)

* [ワークフロー実行の監視](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja)

* [マーケティングキャンペーンワークフローでのオーディエンスのビルド](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja)

## ワークフローアクティビティ {#wf-activities}

使用可能なワークフローアクティビティについて詳しくは、[この節](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/activities.html?lang=ja)を参照してください。

ワークフローアクティビティはカテゴリ別にグループ分けされます。次の 4 つのアクティビティカテゴリを使用できます。

* [ターゲティングアクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/targeting-activities.html?lang=ja)：クエリ、リスト読み込み、エンリッチメント、結合など
* [フロー制御アクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/flow-control-activities/flow-control-activities.html?lang=ja)：スケジューラー、分岐、警告、外部信号など
* [アクションアクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/action-activities.html?lang=ja)：クロスチャネル配信、JavaScript コード、CRM アクティビティ、アップデートの集計など
* [イベントアクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/event-activities/event-activities.html?lang=ja)：ファイル転送、Web ダウンロードなど

### 「データソースを変更」アクティビティ {#change-data-source-activity}

「**[!UICONTROL データソースを変更]**」アクティビティを使用すると、ワークフロー&#x200B;**[!UICONTROL 作業用テーブル]**&#x200B;のデータソースを変更できます。これにより、FDA、FFDA、ローカルデータベースなど、様々なデータソースにわたって、より柔軟にデータを管理できます。

**[!UICONTROL ワークテーブル]**を使用すると、Adobe Campaign ワークフローでデータを処理し、ワークフローアクティビティとデータを共有できます。
デフォルトでは、**[!UICONTROL ワークテーブル]**&#x200B;は、クエリ対象のデータのソースと同じデータベースに作成されます。

例えば、クラウドデータベースに格納された&#x200B;**[!UICONTROL プロファイル]**&#x200B;テーブルに対してクエリを実行する場合、同じクラウドデータベースに&#x200B;**[!UICONTROL 作業用テーブル]**を作成します。
これを変更するには、「**[!UICONTROL データソースを変更]**」アクティビティを追加して、**[!UICONTROL 作業用テーブル]**&#x200B;に別のデータソースを選択します。

なお、「**[!UICONTROL データソースを変更]**」アクティビティを使用する場合、ワークフローの実行を続行するには、クラウドデータベースに戻す必要があります。

「**[!UICONTROL データソースを変更]**」アクティビティを使用するには：

1. ワークフローを作成します。

1. 「**[!UICONTROL クエリ]**」アクティビティでターゲット受信者にクエリを実行します。

   **[!UICONTROL クエリ]**&#x200B;アクティビティについて詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja)を参照してください。

1. 「**[!UICONTROL ターゲティング]**」タブから、「**[!UICONTROL データソースを変更]**」アクティビティを追加し、ダブルクリックして「**[!UICONTROL デフォルトデータソース]**」を選択します。

   クエリの結果を含んだワークテーブルが、デフォルトの PostgreSQL データベースに移動されます。


1. 「**[!UICONTROL アクション]**」タブから、「**[!UICONTROL JavaScript コード]**」アクティビティをドラッグ＆ドロップして、作業用テーブルに対して単一の操作を実行します。

   **[!UICONTROL JavaScript コード]**&#x200B;アクティビティについて詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/sql-code-and-javascript-code.html?lang=ja)を参照してください。

1. 別の「**[!UICONTROL データソースを変更]**」アクティビティを追加して、クラウドデータベースに戻します。

   アクティビティをダブルクリックし、「**[!UICONTROL アクティブな FDA 外部アカウント]**」を選択してから、対応する外部アカウントを選択します。

1. これで、ワークフローを開始できます。

## 仮想ウェアハウスの管理 {#warehouse}

ワークフローを作成した後、「**[!UICONTROL プロパティ]**」ボタンを使用して追加のオプションにアクセスし、さらに詳細な設定を行うことができます。

**ワークフローのプロパティ**&#x200B;について詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/advanced-management/workflow-properties.html?lang=ja)を参照してください。

ワークフローの&#x200B;**[!UICONTROL プロパティ]**&#x200B;の「**[!UICONTROL 実行]**」タブで、ワークフローを様々なウェアハウスにリンクし、ワークロード管理を最適化することができます。**ウェアハウス**&#x200B;について詳しくは、[Snowflake ドキュメント](https://docs.snowflake.com/ja/user-guide/warehouses-overview.html)を参照してください。

![](assets/warehouse.png)

ワークフローの目的に応じて、「**[!UICONTROL ウェアハウス]**」ドロップダウンから次の 3 つのウェアハウスを選択できます。

* **[!UICONTROL デフォルト]**／**[!UICONTROL キャンペーン]**：ワークフローの新規作成時にデフォルトで設定されます。

* **[!UICONTROL インポート／エクスポート]**：アクティビティのパフォーマンスを最適化するために、インポートワークフローまたはエクスポートワークフローで設定する必要があります。

* **[!UICONTROL キャンペーンバースト]**：配信の処理時間を最適化するために、キャンペーンワークフローまたは配信ワークフローで設定する必要があります。

>[!NOTE]
>
>**[!UICONTROL システム]**&#x200B;ウェアハウスは組み込みワークフローの場合にのみ設定されます。

## 繰り返しキャンペーンの設定

繰り返しワークフローをデザインし、ワークフローを実行するたびに新しい配信インスタンスを作成します。 たとえば、ワークフローが週に 1 回実行されるよう設計されている場合、1 年後には 52 件の配信が存在することになります。つまり、ログは各配信インスタンスで区切られます。

繰り返しキャンペーンを作成する方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/recurring-periodic-campaigns.html?lang=ja)を参照してください。


## トリガーイベントの活用

Campaign トランザクションメッセージを使用すると、情報システムからトリガーされるイベントに基づいて、メッセージを自動的に生成できます。 トランザクションメッセージの例としては、請求書送付、注文確認、配送確認、パスワード変更、商品の在庫切れ通知、取引明細書送付、Web サイトのアカウント作成などがあります。 これらのメッセージは、個別に送信することも、メール、SMS、またはプッシュ通知を介してバッチで送信することもできます。

![](../assets/do-not-localize/glass.png)トランザクションメッセージ機能について詳しくは、[この節](../send/transactional.md)を参照してください。

Adobe Campaign と Adobe Analytics を接続して、ユーザーのアクションを把握し、パーソナライズされたメッセージをほぼリアルタイムで送信できます。

![](../assets/do-not-localize/glass.png)Campaign を他のソリューションと統合する方法については、[この節](../start/connect.md)を参照してください


## ワークフローのエンドツーエンドのユースケース{#end-to-end-uc}

この節では、Campaign ワークフロー機能を活用する様々なユースケースを示します。

### 配信 {#deliveries}

<img src="assets/do-not-localize/icon_send.svg" width="60px">


* [誕生日メールの送信](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/send-a-birthday-email.html?lang=ja)

   この使用例では、受信者のリストに対して、誕生日に定期メールを送信する計画の策定方法を示します。

* [配信コンテンツの読み込み](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/load-delivery-content.html?lang=ja)
リモートサーバー上の HTML ファイルに配信コンテンツが格納されている場合、このコンテンツを Adobe Campaign 配信に容易に読み込むことができます。

* [クロスチャネル配信ワークフロー](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/cross-channel-delivery-workflow.html?lang=ja)
クロスチャネル配信ワークフローの作成方法を説明します。目的は、データベースの受信者から、オーディエンスを別のグループへとセグメント化し、最初のグループはメール、もう 1 つのグループに SMS を送信することです。

* [カスタム日付フィールドを使用したメールのエンリッチメント](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/email-enrichment-with-custom-date-fields.html?lang=ja)今月が誕生日のプロファイルに、カスタムデータフィールドを含むメールを送信する方法を説明します。 メールには、誕生日の前後 1 週間有効なクーポンが含まれます。

さらに、Campaign v7 ドキュメントの以下のページ：

* [コンテンツの作成、編集、公開の自動化](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/content-management/automating-via-workflows.html?lang=ja){target=&quot;_blank&quot;}
Campaign コンテンツ管理アドオンを使用して、コンテンツブロックの作成と配信を自動化する方法を説明します。

* [A/B テスト](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/a-b-testing/use-case/a-b-testing-use-case.html?lang=ja){target=&quot;_blank&quot;}
ターゲティングワークフローを使用して、2 つのメール配信コンテンツを比較する方法を説明します。 メッセージとテキストは両方の配信で同じものを使用し、レイアウトだけを変更します。ターゲットの母集団は、2 つのテストグループと、その他の母集団の 3 つに分割します。各テストグループに別々のバージョンを配信します。

### 監視 {#monitoring}

<img src="assets/do-not-localize/icon_monitoring.svg" width="60px">

* [リストへのレポートの送信](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/monitoring/send-a-report-to-a-list.html?lang=ja)月次のビルトイントラッキング指標レポートを PDF 形式で生成し、Campaign オペレーターのリストに送信する方法を説明します。

* [ワークフローの監視](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/monitoring/workflow-supervision.html?lang=ja)
一連の（「一時停止」、「停止」、「エラーあり」）を監視できる、ワークフローの作成方法を説明します。

* [パーソナライズされたアラートをオペレーターへ送信](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/monitoring/send-alerts-to-operators.html?lang=ja)
ニュースレターを開封したものの、そこに含まれているリンクをはクリックしなかったプロファイルの名前を記載したアラートをオペレーターに送信する方法について説明します。

### データ管理 {#management}

<img src="assets/do-not-localize/icon_manage.svg" width="60px">

* [データ更新の調整](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/coordinate-data-updates.html?lang=ja)
別の更新操作を実行する前に、更新プロセスが終了していることを確認する方法について説明します。そのためには、インスタンス変数を設定し、ワークフローの実行を継続して更新を行うべきかを判断するため、インスタンスが実行中かどうかをワークフローでテストします。

* [概要リストの作成](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/create-a-summary-list.html?lang=ja)
ファイルを収集していくつかのエンリッチメントを加えてから概要リストを作成できるワークフローの作成方法を説明します。 この例では、店舗で購入をおこなった顧客の連絡先のリストをベースにします。

* [データのエンリッチメント](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/enrich-data.html?lang=ja)最近競争に参加したプロファイルに、スコアに応じてパーソナライズされた配信を送信する方法を説明します。

* [集計の使用](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/using-aggregates.html?lang=ja)
データベースに最後に追加された受信者を特定する方法を説明します。

* [増分処理クエリを使用した四半期ごとのリスト更新](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/designing-queries/quarterly-list-update.html?lang=ja)
増分処理クエリを使用して受信者リストを自動的に更新する方法を説明します。

* [繰り返し発生するインポートワークフローの設定](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/recurring-import-workflow.html?lang=ja)
Adobe Campaign データベースの CRM からプロファイルを読み込むために再利用できるワークフローの設計方法を説明します。

### ターゲティング {#designing-queries}

<img src="assets/do-not-localize/icon_filter.svg" width="60px">

* [受信者テーブルのクエリ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/designing-queries/querying-recipient-table.html?lang=ja)
メールドメインが「orange.co.uk」で、かつロンドンに居住していない受信者について、名前とメールを復元する方法を説明します。

* [配信情報のクエリ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/designing-queries/query-delivery-info.html?lang=ja)
配信情報に関するクエリを定義して、プロファイルの動作を取得する方法について説明します。

* [集計の計算](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/designing-queries/compute-aggregates.html?lang=ja)
ロンドン在住のプロファイルの数を性別に基づいてカウントする方法を説明します。

* [多対多の関係を使用したクエリ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/designing-queries/query-many-to-many-relationship.html?lang=ja)
過去 7 日間に連絡していないプロファイルを検索する方法を説明します。

* [クエリでのインスタンス変数の呼び出し](https://experienceleague.adobe.com/docs/campaign/automation/workflows/advanced-management/javascript-scripts-and-templates.html?lang=ja)
インスタンス変数を使用して、母集団に適用する分割率を動的に計算する方法を説明します。

<!--
### Change data source activity {#data-source-uc}

The **[!UICONTROL Change data source]** activity allows you to change the data source of a workflow **[!UICONTROL Working table]**. 

In this use case, learn how to use the **[!UICONTROL Change data source]** activity to perform unitary operations to insert or update information to the recipient table.

![](assets/wf_data_source_uc.png)

1. Create a workflow and add a **[!UICONTROL Start]** activity.

1. Query your targeted recipients from the NmsRecipient table with a **[!UICONTROL Query]** activity. 

    For more information on the **[!UICONTROL Query]** activity, refer to the [Query](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/query.html#creating-a-query) page in Campaign Classic V7 documentation.

1. 

1. From the **[!UICONTROL Targeting]** tab, add a **[!UICONTROL Change data source]** activity and double-click it to select **[!UICONTROL Default data source]**.
    
    The working table, which contains the result of your query, is then moved to the default PostgreSQL database.

1. From the **[!UICONTROL Actions]** tab, drag and drop a **[!UICONTROL JavaScript code]** activity to perform unitary operations on the working table.

1. Add another **[!UICONTROL Change data source]** activity to revert back to the Cloud database. 
    
    Double-click your activity and select **[!UICONTROL Active FDA external account]** then the corresponding external account.

1. Add an **[!UICONTROL End]** activity and start your workflow.
-->

