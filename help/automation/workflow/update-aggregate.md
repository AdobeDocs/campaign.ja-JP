---
product: campaign
title: 集計の更新
description: 「集計を更新」ワークフローアクティビティの詳細を説明します
feature: Workflows
source-git-commit: 2b1dec4b9c456df4dfcebfe10d18e0ab01599275
workflow-type: tm+mt
source-wordcount: '124'
ht-degree: 54%

---

# 集計の更新{#update-aggregate}

集計は、レポーティングの目的のためキューブレベルで定義できます。集計の設定は、「**[!UICONTROL ワークフロー]**」タブでおこないます。

キューブおよびAdobe Campaignでの集計の使用について詳しくは、 [Campaign Classicv7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/designing-reports-with-cubes/about-cubes.html?lang=ja){target=&quot;_blank&quot;}。


集計を更新するには、 **[!UICONTROL 集計を更新]** 「 」アクティビティを選択し、更新するキューブと集計を選択します。

次の操作を実行できます。 **完全更新** または&#x200B;**部分更新**.

デフォルトでは、各計算中に完全更新が実行されます。 部分的更新を有効にするには、該当するオプションを選択し、更新の条件を定義します。

**ベストプラクティス**：アクティビティを使用して、計算の更新頻度をスケジュール設定できる「**[!UICONTROL スケジューラー]**」アクティビティ。

![](assets/scheduler-and-cube-aggregate.png)
