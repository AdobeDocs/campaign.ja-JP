---
product: campaign
title: 待機
description: 待機ワークフローアクティビティの詳細を説明します
feature: Workflows
version: Campaign v8, Campaign Classic v7
exl-id: a9bcb214-5c87-4b26-804a-22b868905022
TQID: 'https://experienceleague.adobe.com/pCmFiYzA61DTXdDZCO14diygPbfuvZkXIbKVgbtXmQQ'
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
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '193'
ht-degree: 100%
---
# 待機{#wait}



「**待機**」アクティビティは、数秒から数ヶ月間の任意の遅延時間が経過した後で、トランジションを有効化します。 待機は、ほかのタスクの実行をブロックしません。ワークフローは、このタスクが保留になっている間に並行してタスクを実行できます。

下例の図に示すように、エディターを使用してラベルと待機時間を入力できます。

![](assets/edit_wait.png)

「**[!UICONTROL 期間]**」フィールドの値は、選択した単位（オペレーターの地域設定）で表すことができます。

* 地域設定が指定されていない場合は、**s**（秒）、**m**（分）、**h**（時間）、**d**（日）、**y**（年）になります。 承認時に、値は最も読みやすい単位に自動的に変換されます。

  デフォルトの単位は日（**d**）です。

* 一方、例えば、地域設定が「Français」に設定されている場合は、**s**（秒）、**mn**（分）、**h**（時間）、**j**（日）、**m**（月）、**a**（年）のようになります。 承認時に、値は最も読みやすい単位に自動的に変換されます。上の例では、「**90s**」は「**1mn 30s**」のように変換されます。

  デフォルトの単位は日（**d**）です。
