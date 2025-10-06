---
title: Adobe Campaign ワークフローを使用したプロセスの管理と自動化
description: ワークフローの基本を学ぶ
feature: Workflows
role: User, Admin
level: Beginner
exl-id: 0be1c5f5-f07d-46dc-bebc-5eb50f466547
source-git-commit: 95c944963feee746a2bb83a85f075134c91059d1
workflow-type: tm+mt
source-wordcount: '512'
ht-degree: 93%

---

# ワークフローの基本を学ぶ{#gs-with-workflows}

Campaign を設定して、マーケティングキャンペーンの強力な自動処理機能を活用します。

次の設定をおこなうことができます。

* ワークフロー
* 繰り返しキャンペーン
* エンドツーエンドの検証サイクル
* アラート
* レポートの自動送信
* トリガーされるイベント

>[!NOTE]
>
>Adobe Campaign web ユーザーインターフェイスには、ワークフローのキャンバスが再考されて付属しており、より動的でパーソナライズされたカスタマージャーニーを作成できます。 Web UI のワークフローについて詳しくは、[Adobe Campaign web UI ドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/wf/gs-workflows){target=_blank}を参照してください。


## ワークフローのデザインと使用 {#gs-ac-wf}

Adobe Campaign ワークフローを使用すると、セグメントの作成やメッセージの準備から配信に至るまでの、マーケティングキャンペーンのあらゆる側面でスピードと規模を改善できます。

ワークフローのユーザーインターフェイスと実行について詳しくは、 以下のページを参照してください。

* [ワークフローの基本を学ぶ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/about-workflows.html?lang=ja){target="_blank"}

* [ワークフローのベストプラクティス](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"}

* [ビルトインのテクニカルワークフロー](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/wf-type/technical-workflows.html?lang=ja){target="_blank"}

* [ワークフロー実行の監視](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

* [マーケティングキャンペーンワークフローでのオーディエンスのビルド](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja){target="_blank"}

## ワークフローアクティビティ {#wf-activities}

使用可能なワークフローアクティビティについて詳しくは、[この節](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/activities.html?lang=ja){target="_blank"}を参照してください。

ワークフローアクティビティはカテゴリ別にグループ分けされます。次の 4 つのアクティビティカテゴリを使用できます。

* [ターゲティングアクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/targeting-activities.html?lang=ja){target="_blank"}：クエリ、リスト読み込み、エンリッチメント、和集合など
* [フロー制御アクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/flow-control-activities/flow-control-activities.html?lang=ja){target="_blank"}：スケジューラー、分岐、警告、外部信号など
* [アクションアクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/action-activities.html?lang=ja){target="_blank"}：クロスチャネル配信、JavaScript コード、CRM アクティビティ、アップデートの集計など
* [イベントアクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/event-activities/event-activities.html?lang=ja){target="_blank"}：ファイル転送、Web ダウンロードなど

<!--
### Change data source activity {#change-data-source-activity}

The **[!UICONTROL Change data source]** activity allows you to change the data source of a workflow **[!UICONTROL Working table]**. This provides more flexibility to manage data across different data sources such as FDA, FFDA and local database.

The **[!UICONTROL Working table]** allows Adobe Campaign workflow to handle data and share data with the workflow activities.
By default, the **[!UICONTROL Working table]** is created in the same database as the source of the data we query on.

For example, when querying the **[!UICONTROL Profiles]** table, stored on the Cloud database, you will create a **[!UICONTROL Working table]** on the same Cloud database.
To change this, you can add the **[!UICONTROL Change Data Source]** activity to choose a different data source for your **[!UICONTROL Working table]**.

Note that when using the **[!UICONTROL Change Data Source]** activity, you will need to switch back to the Cloud database to continue the workflow execution.

To use the **[!UICONTROL Change Data Source]** activity:

1. Create a workflow.

1. Query your targeted recipients with a **[!UICONTROL Query]** activity. 

    For more information on the **[!UICONTROL Query]** activity, refer to [this page](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html){target="_blank"}.

1. From the **[!UICONTROL Targeting]** tab, add a **[!UICONTROL Change data source]** activity and double-click it to select **[!UICONTROL Default data source]**.
    
    The working table, which contains the result of your query, is then moved to the default PostgreSQL database.

1. From the **[!UICONTROL Actions]** tab, drag and drop a **[!UICONTROL JavaScript code]** activity to perform unitary operations on the working table.

    For more information on the **[!UICONTROL JavaScript code]** activity, refer to [this page](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/sql-code-and-javascript-code.html){target="_blank"}.

1. Add another **[!UICONTROL Change data source]** activity to switch back to the Cloud database. 
    
    Double-click your activity and select **[!UICONTROL Active FDA external account]** then the corresponding external account.

1. You can now start your workflow.
-->

## 仮想ウェアハウスの管理 {#warehouse}

ワークフローを作成した後、「**[!UICONTROL プロパティ]**」ボタンを使用して追加のオプションにアクセスし、さらに詳細な設定を行うことができます。

**ワークフローのプロパティ**&#x200B;について詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/advanced-management/workflow-properties.html?lang=ja){target="_blank"}を参照してください。

ワークフローの&#x200B;**[!UICONTROL プロパティ]**&#x200B;の「**[!UICONTROL 実行]**」タブで、ワークフローをさまざまなウェアハウスにリンクし、ワークロード管理を最適化することができます。**ウェアハウス**&#x200B;について詳しくは、[Snowflake ドキュメント](https://docs.snowflake.com/ja/user-guide/warehouses-overview.html){target="_blank"}を参照してください。

![](assets/warehouse.png)

ワークフローの目的に応じて、「**[!UICONTROL ウェアハウス]**」ドロップダウンから次の 3 つのウェアハウスを選択できます。

* **[!UICONTROL デフォルト]**／**[!UICONTROL キャンペーン]**：ワークフローの新規作成時にデフォルトで設定されます。

* **[!UICONTROL インポート／エクスポート]**：アクティビティのパフォーマンスを最適化するために、インポートワークフローまたはエクスポートワークフローで設定する必要があります。

* **[!UICONTROL キャンペーンバースト]**：配信の処理時間を最適化するために、キャンペーンワークフローまたは配信ワークフローで設定する必要があります。

>[!NOTE]
>
>**[!UICONTROL システム]**&#x200B;ウェアハウスはビルトインのワークフローの場合にのみ設定されます。

## 繰り返しキャンペーンの設定

繰り返しワークフローをデザインし、ワークフローを実行するたびに新しい配信インスタンスを作成します。 たとえば、ワークフローが週に 1 回実行されるよう設計されている場合、1 年後には 52 件の配信が存在することになります。つまり、ログは各配信インスタンスで区切られます。

繰り返しキャンペーンを作成する方法について詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/recurring-periodic-campaigns.html?lang=ja){target="_blank"}を参照してください。


## トリガーイベントの活用

Campaign トランザクションメッセージを使用すると、情報システムからトリガーされるイベントに基づいて、メッセージを自動的に生成できます。 トランザクションメッセージの例としては、請求書送付、注文確認、発送確認、パスワード変更、商品の在庫切れ通知、取引明細書送付、web サイトのアカウント作成などがあります。これらのメッセージは、個別に送信することも、メール、SMS、またはプッシュ通知を介してバッチで送信することもできます。

トランザクションメッセージ機能について詳しくは、[この節](../send/transactional.md)を参照してください。

Adobe Campaign と Adobe Analytics を接続すると、ユーザーのアクションを取得し、パーソナライズされたメッセージをほぼリアルタイムで送信することができます。

Campaign を他のソリューションと統合する方法については、[この節](../start/connect.md)を参照してください


## ワークフローのエンドツーエンドのユースケース{#end-to-end-uc}

Campaign ワークフロー機能を活用したユースケースについて説明します [ この節 ](../../automation/workflow/workflow-use-cases.md)。
