---
product: campaign
title: 開始および終了
description: 「開始および終了」ワークフローアクティビティの詳細を説明します
feature: Workflows
exl-id: 1de622bc-967b-403b-86e0-2ad32cb432e3
source-git-commit: 77ec01aaba1e50676bed57f503a9e4e8bb1fe54c
workflow-type: tm+mt
source-wordcount: '138'
ht-degree: 100%

---

# 開始と終了{#start-and-end}



「**[!UICONTROL 開始]**」アクティビティおよび「**[!UICONTROL 終了]**」アクティビティを使用して、ワークフローの開始と終了を視覚的に示します。これらのアクティビティは、機能上の影響はないので、省略可能です。

* **[!UICONTROL 開始]**

   ワークフローの実行は、インバウンドトランジションのないアクティビティと、「開始」タイプアクティビティから開始します。

   ![](assets/s_user_segmentation_start_stop.png)

* **[!UICONTROL 終了]**

   進行中のすべてのタスクを中断する「**[!UICONTROL 終了]**」アクティビティを設定できます。それには、アクティビティをダブルクリックしてプロパティを標示し、適切なオプションを選択します。

   ![](assets/s_user_segmentation_end.png)

   ワークテーブル内のデータは、「終了」アクティビティが有効になると自動的に削除されます。
データを削除する必要がなく、不要な負荷を避けたい場合は、最後のアクティビティ出力でトランジションを無効にすることもできます。例えば、配信出力でプロセスが何もスケジュールされていない場合、次に示す関連オプションのチェックを外します。

   ![](assets/s_advuser_delivery_option_no_output.png)
