---
product: campaign
title: SQL コードと JavaScript コード
description: SQLとJavaScriptのコードワークフローアクティビティについて詳しく見る
feature: Workflows
Role: User
level: Experienced
version: Campaign v8, Campaign Classic v7
exl-id: 8c385847-a320-4cd9-9048-2bf9daf2ee07
TQID: 'https://experienceleague.adobe.com/J1oZUE7vCyJvodf0-09QoG24gWY9P9sSgqsH7rXibgk'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '423'
ht-degree: 69%
---
# SQL コードと JavaScript コード{#sql-code-and-javascript-code}

## SQL コード {#sql-code}

「**[!UICONTROL SQL コード]**」アクティビティは、SQL スクリプトを実行します。 スクリプトは、JST テンプレートです。

![](assets/sql_code.png)

* **[!UICONTROL スクリプト]**

  エディターの中央部に、実行されるスクリプトが含まれています。 このスクリプトは、JST テンプレートであり、ワークフローのコンテキストに応じて設定できます。

* **[!UICONTROL エラーを処理]**

  [エラーを処理](monitor-workflow-execution.md#processing-errors)を参照してください。

### 重要な注意事項 {#important-notes}

8.9.1以降、**[!UICONTROL SQL コード]**&#x200B;および&#x200B;**[!UICONTROL SQL データ管理]**&#x200B;のワークフローアクティビティが改善され、Campaignからカスタム SQLを実行する際に、PostgreSQL データベースをより適切に保護し、ワークフローをスムーズに実行できるようになりました。 ミスが発生した場合に従うべきベストプラクティスを以下に示します。

オプションは、**[!UICONTROL 管理]** > **[!UICONTROL プラットフォーム]** > **[!UICONTROL オプション]**&#x200B;で利用できます。 エラーが発生した場合は、次の2つのソリューションを利用できます。

**解決策1**

`XtkSecurity_FeatureFlag_SqlSensitive`を`0`に設定します。 この機能は無効になっています。

**解決策2**

`XtkSecurity_SqlSensitive_Methods`を変更します。 `<method name="TRUNCATE" action="block"/>`を`<method name="TRUNCATE" action="warn"/>`に変更できます

データベースの整合性を保護するために、VACUUM FULL、REINDEX、CREATE INDEX、DROP INDEXなどの他のメソッドもデフォルトでブロックされます。 ブロックではなく警告に設定する場合は注意してください。 これらの方法は、実行時にデータベースのパフォーマンスに深刻な影響を与える可能性があります。

## JavaScript コードと高度な JavaScript コード {#javascript-code}

**[!UICONTROL JavaScript コード]**&#x200B;と&#x200B;**[!UICONTROL 高度な JavaScript コード]**&#x200B;アクティビティは、ワークフローのコンテキストで JavaScript スクリプトを実行します。 スクリプトについて詳しくは、以下の節を参照してください。

* [JavaScript のスクリプトとテンプレート](javascript-scripts-and-templates.md)
* [ワークフローでの JavaScript コードの例](javascript-in-workflows.md)

### 実行遅延 {#exec-delay}

20.2 リリース以降、**[!UICONTROL JavaScript コード]**&#x200B;と&#x200B;**[!UICONTROL 高度な JavaScript コード]**&#x200B;のアクティビティに実行遅延が追加されました。 デフォルトでは、実行フェーズは 1 時間を超えることはできません。 この遅延の後、エラーメッセージが表示されてプロセスが中止され、アクティビティの実行が失敗します。

この遅延は、アクティビティの「**[!UICONTROL 次の時間後に実行を停止]**」フィールドで変更できます。

この制限を無視するには、値を **0** に設定する必要があります。

### JavaScript コード {#js-code-desc}

![](assets/javascript_code.png)

* **[!UICONTROL スクリプト]**：実行されるスクリプトがエディターの中央部に記述されています。

* **[!UICONTROL エラーを処理]**：[エラーの処理](monitor-workflow-execution.md#processing-errors)を参照してください。

### 高度な JavaScript コード {#adv-js-code-desc}

![](assets/advanced_javascript_code.png)

* **[!UICONTROL 最初の呼び出し]**：エディターの最初のゾーンには、最初の呼び出し時に実行するスクリプトが含まれます。
* **[!UICONTROL 次の呼び出し]**：エディターの 2 番目のゾーンには、2 回目以降の呼び出し時に実行するスクリプトが含まれます。
* **[!UICONTROL トランジション]**：アクティビティの出力トランジションを複数定義できます。
* **[!UICONTROL スケジュール]**：「**[!UICONTROL スケジュール]**」タブでは、アクティビティをトリガーするタイミングをスケジュール設定できます。

高度な JavaScript は永続的なタスクであり、完了とマークされていない限り定期的に呼び出されます。 タスクを終了し、今後の再呼び出しを防ぐには、「**[!UICONTROL 次の呼び出し]**」セクションで **task.setCompleted()** メソッドを使用する必要があります。

```
task.postEvent(task.transitionByName("ok")); // to transition to Ok branch
task.setCompleted();

return 0;
```
