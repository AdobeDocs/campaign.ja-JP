---
title: クエリエディターの操作
description: クエリエディターの操作方法を学ぶ
feature: Query Editor, Data Management
role: User
level: Beginner
version: Campaign v8, Campaign Classic v7
source-git-commit: 56d5628312ea3dedf9335dd0933811e4bf66eb97
workflow-type: tm+mt
source-wordcount: '157'
ht-degree: 5%

---

# Campaign データベースのクエリ

クエリツールはアプリケーションの様々なレベルで使用でき、ターゲット母集団の定義、顧客のセグメント化、トラッキングログの抽出とフィルタリング、フィルターの作成などに使用できます。

**[!UICONTROL ツール/汎用クエリエディター…」メニューからアクセスできる専用のアシスタントである汎用クエリエディターが用意されて]** ます。 このエディタを使用すると、データベース・クエリーで情報の抽出、整理、グループ化、ソートを行うことができます。 例えば、特定の期間中にニュースレターリンクで n 回を超えてクリックした受信者を取得できます。

汎用クエリエディターは、すべてのクエリ機能を一元化します。 これにより、制限フィルターを作成して保存し、そのフィルターをターゲティングワークフローのクエリボックスなどの他のコンテキストで再利用できます。

![&#x200B; クエリエディターにアクセスしてテーブルを選択する &#x200B;](assets/query_editor_nveau_21.png)


クエリの作成手順について詳しくは [&#x200B; このページ &#x200B;](design-queries.md) を参照してください。

<!--
Contexts to use the query editor iin Campaign are listed below:

|Usage|Example|
|  ---  |  ---  |
|**Define a Query activity in a workflow**: Define the criteria to query Campaign database in a workflow. [Learn how to configure the Query activity](../../automation/workflow/query.md)|![Image showing how to configure a query activity in a workflow](../../automation/workflow/assets/query-activity.png){width="200" align="center" zoomable="yes"}|
|**Define audiences**: Specify the population you want to target in your messages, and effortlessly create new audiences tailored to your needs. [Learn how to build audiences](../start/create-message.md#define-the-target-audience)|![Image showing how to access the audience creation interface](../send/sms/assets/audience_to.png){width="200" align="center" zoomable="yes"}|
|**Define audiences**: Specify the population you want to target in your messages or workflows, and effortlessly create new audiences tailored to your needs. [Learn how to build audiences](../audiences/create-audiences.md)|![Image showing how to access the audience creation interface](../audiences/assets/targeting-wf-age-filter.png){width="200" align="center" zoomable="yes"}|
|**Customize workflow activities**: Apply rules within workflow activities, such as **Split** and **Reconciliation**, to align with your specific requirements. [Learn more about workflow activities](../../automation/workflow/activities.md)|![Image showing how to access workflow customization options](assets/access-workflow.png){width="200" align="center" zoomable="yes"}|
|**Predefined filters**: Create predefined filters that serve as shortcuts during various filtering operations, whether you're working with data lists or forming the audience for a delivery. [Learn how to work with predefined filters](../get-started/predefined-filters.md)|![Image showing how to access predefined filters](assets/access-predefined-filter.png){width="200" align="center" zoomable="yes"}|
|**Filter reports data**: Add rules to filter the data displayed in reports. [Learn how to work with reports](../reporting/gs-reports.md)|![Image showing how to filter data in reports](assets/access-reports.png){width="200" align="center" zoomable="yes"}|
|**Customize lists**: Create custom rules to filter the data displayed in lists such as recipients or deliveries lists. [Learn how to filter lists](../get-started/list-filters.md#list-built-in-filters)|![Image showing how to customize list filters](assets/access-lists.png){width="200" align="center" zoomable="yes"}|
|**Build conditional content**: Make email content dynamic by creating conditions that define which content should be displayed to different recipients, ensuring personalized and relevant messaging. [Learn how to build conditional content](../personalization/conditions.md)|![Image showing how to create conditional content](assets/conditional-content.png){width="200" align="center" zoomable="yes"}|
-->

**関連トピック**

* [ワークフロークエリアクティビティ](../../automation/workflow/query.md)
* [受信者テーブルのクエリ](../../automation/workflow/querying-recipient-table.md)
* [フィルター条件](filter-conditions.md)