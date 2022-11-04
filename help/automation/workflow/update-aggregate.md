---
product: campaign
title: 集計の更新
description: 「集計を更新」ワークフローアクティビティの詳細を説明します
feature: Workflows
role: Data Engineer
level: Beginner
source-git-commit: 8d9b8d3e31362c2d69ec0fc6f16ab375538d7f10
workflow-type: tm+mt
source-wordcount: '112'
ht-degree: 20%

---

# 集計の更新{#update-aggregate}

で定義された集計 [キューブ](../../v8/reporting/gs-cubes.md) レポートの目的では、を特定のアクティビティで更新できます。 A **[!UICONTROL ワークフロー]** 「 」タブは、集計を設定する際に使用できます。

キューブと集計の詳細を説明します [この節](../../v8/reporting/customize-cubes.md#calculate-and-use-aggregates).

集計を更新するには、 **[!UICONTROL 集計を更新]** 「 」アクティビティを選択し、更新するキューブと集計を選択します。

次の項目を設定できます。 **完全更新** または **部分更新**.

![](assets/update-aggregate-details.png)

デフォルトでは、各計算時に完全更新が実行されます。部分的な更新を有効にするには、「 」オプションを選択し、更新条件を定義します。

![](assets/update-aggregate-partial.png)

ベストプラクティスは、 **[!UICONTROL スケジューラ]** 「 」アクティビティを使用して、計算の更新頻度を設定します。
