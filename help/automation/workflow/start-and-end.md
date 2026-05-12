---
product: campaign
title: 開始および終了
description: 「開始および終了」ワークフローアクティビティの詳細を説明します
feature: Workflows
version: Campaign v8, Campaign Classic v7
exl-id: 1de622bc-967b-403b-86e0-2ad32cb432e3
TQID: https://experienceleague.adobe.com/Y6nuELN3qjtuXhruC9MgmyqxzptNTJgfZ0XLGleQ3A4
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 140
ht-degree: 100%

---

# 開始と終了{#start-and-end}



「**[!UICONTROL 開始]**」アクティビティおよび「**[!UICONTROL 終了]**」アクティビティを使用して、ワークフローの開始と終了を視覚的に示します。 これらのアクティビティは、機能上の影響はないので、省略可能です。

* **[!UICONTROL 開始]**

  ワークフローの実行は、インバウンドトランジションのないアクティビティと、「開始」タイプアクティビティから開始します。

  ![](assets/s_user_segmentation_start_stop.png)

* **[!UICONTROL 終了]**

  進行中のすべてのタスクを中断する「**[!UICONTROL 終了]**」アクティビティを設定できます。 それには、アクティビティをダブルクリックしてプロパティを表示し、適切なオプションを選択します。

  ![](assets/s_user_segmentation_end.png)

  ワークテーブル内のデータは、「終了」アクティビティが有効になると自動的に削除されます。 データを削除する必要がなく、不要な負荷を避けたい場合は、最後のアクティビティ出力でトランジションを無効にすることもできます。 例えば、配信出力でプロセスが何もスケジュールされていない場合、次に示す関連オプションのチェックを外します。

  ![](assets/s_advuser_delivery_option_no_output.png)
