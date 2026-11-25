---
product: campaign
title: 集計の更新
description: 「集計を更新」ワークフローアクティビティの詳細を説明します
feature: Workflows
role: Developer
level: Beginner
version: Campaign v8, Campaign Classic v7
exl-id: 9a213522-bacf-44f9-98a6-caaaf037a0f9
TQID: 'https://experienceleague.adobe.com/k0rl6aa1U0pK2z1dP7aGkDYk15ML3o8I0y-VwspH4mw'
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
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
source-git-commit: e13b3537d149f2bdad7e9dd66768837e5c4b595b
workflow-type: tm+mt
source-wordcount: '147'
ht-degree: 70%
---
# 集計の更新{#update-aggregate}

レポート目的で[キューブ](../../v8/reporting/gs-cubes.md)に定義された集計は、特定のアクティビティで更新できます。 集計の設定は、「**[!UICONTROL ワークフロー]**」タブで行います。

キューブと集計の詳細については、[ キューブ内の集計](../../v8/reporting/customize-cubes.md#calculate-and-use-aggregates)を参照してください。

集計を更新するには、**[!UICONTROL 集計を更新]**&#x200B;アクティビティを編集し、キューブと更新する集計を選択します。

**完全更新**&#x200B;または&#x200B;**部分更新**&#x200B;を設定できます。

![ キューブおよび集計フィールドと完全更新または部分更新オプションを使用して、集計アクティビティを更新します。](assets/update-aggregate-details.png)

デフォルトでは、各計算時に完全更新が実行されます。 部分更新を有効にするには、オプションを選択し、更新の条件を定義します。

![現在の日付から1か月を差し引いた後の作成日にフィルターを使用して、更新条件ウィンドウを編集しています。](assets/update-aggregate-partial.png)

**[!UICONTROL スケジューラー]**&#x200B;アクティビティを追加して、計算の更新頻度を設定することをお勧めします。
