---
product: campaign
title: オファー（セル別）
description: オファー（セル別）
feature: Workflows, Targeting Activity, Interaction
role: User
version: Campaign v8, Campaign Classic v7
exl-id: e2216dfd-1ef8-4747-b716-576fd6498fa6
TQID: 'https://experienceleague.adobe.com/rcPG-VXEtEll374z7DpQTQOcZ3MXauiZwPTwByTUSEk'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: 65702805-0026-5ca1-843a-144fa79f0883
    internal-label: Interaction
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
  - id: ff84ab2f-a7c2-4ced-a3c8-5113f4348d99
    internal-label: Targeting Activity
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '163'
ht-degree: 100%
---
# オファー（セル別）{#offers-by-cell}



「**[!UICONTROL オファー（セル別）]**」アクティビティでは、インバウンド母集団（例：クエリから）を複数のセグメントに分散させ、それらの各セグメントに提示するオファーを指定できます。

このアクティビティは、「**インタラクション**」と一緒の場合のみ使用できます。 オファー管理について詳しくは、[この節](../../v8/interaction/interaction.md)を参照してください。

手順は次のとおりです。

1. ターゲットの母集団を指定したら、「**[!UICONTROL オファー（セル別）]**」アクティビティを追加して、それを開きます。
1. 「**[!UICONTROL 一般]**」タブで、オファーを提示するオファースペースを選択します。
1. 「**[!UICONTROL セル]**」タブで「**[!UICONTROL 追加]**」ボタンをクリックして、別のサブセットを指定します。

   * 適用可能なフィルタリングおよび制限ルールを使用して、サブセットの母集団を指定します。
   * 次に、サブセットに提案するオファーを選択します。 選択できるオファーは、前の手順で選択したオファースペースに適合するオファーです。

     ![](assets/int_offer_per_cell1.png)

1. 次に、選択したチャネルに対応する配信アクティビティを設定します。 [クロスチャネル配信](cross-channel-deliveries.md)を参照してください。
