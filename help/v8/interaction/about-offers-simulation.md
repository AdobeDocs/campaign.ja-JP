---
product: campaign
title: オファーのシミュレーションについて
description: オファーのシミュレーションについて
feature: Interaction, Offers
version: Campaign v8, Campaign Classic v7
exl-id: facaa88e-1fa2-4189-9d8f-348aaef3e235
TQID: 'https://experienceleague.adobe.com/034-CFbQIFVm9QiSpDyRHlVsIrF46NSqKMwp-Gm3-mc'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: b6fcaf36-3bc4-4604-94f3-81b5d3f41ecf
    internal-label: Offer Management
  - id: 65702805-0026-5ca1-843a-144fa79f0883
    internal-label: Interaction
  - id: ea08db70-4682-59a2-9408-9aedd9548e07
    internal-label: Offers
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
source-git-commit: 936b7519d13ab54d94df9305ef05d4ceb6d6742d
workflow-type: tm+mt
source-wordcount: '289'
ht-degree: 100%
---
# オファーのシミュレーションについて{#about-offers-simulation}



**シミュレーション**&#x200B;モジュールを使用すると、提案を受信者に送信する前に、1 つのカテゴリまたは環境に属するオファーの配分をテストできます。

シミュレーションには、オファーにあらかじめ適用されているコンテキストおよび実施要件ルール（[オファーカタログの概要](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/offers/interaction-offer-catalog){target="_blank"}（キャンペーン v8 ドキュメント）を参照）と、オファーのプレゼンテーションルール（[オファー表示域の管理](managing-offer-presentation.md)を参照）が考慮されます。 ターゲットの受信者はシミュレーションの影響を受けないので、これにより、実際にオファーを使用したり、ターゲットを拡大または縮小したりしなくても、オファーの提案の様々なバージョンをテストして調整できます。

オファーをシミュレートする方法については、以下の手順を参照してください。

![](assets/how-to-video.png) [このビデオ](https://helpx.adobe.com/jp/campaign/classic/how-to/simulate-offer-in-acv6.html?playlist=/ccx/v1/collection/product/campaign/classic/segment/digital-marketers/explevel/intermediate/applaunch/introduction/collection.ccx.js&ref=helpx.adobe.com)もご覧ください。

## シミュレーション作成の主な手順 {#main-steps-for-creating-a-simulation}

オファーのシミュレーションを実行するには、次の手順に従います。

1. 「**[!UICONTROL プロファイルとターゲット]**」タブで、「**[!UICONTROL シミュレーション]**」リンクをクリックしたあと、「**[!UICONTROL 作成]**」ボタンをクリックします。

   ![](assets/offer_simulation_001.png)

1. 作成したシミュレーションを保存し、編集します。
1. 「**[!UICONTROL 編集]**」タブに移動し、実行設定を指定します。

   詳しくは、[実行設定](execution-settings.md)を参照してください。

   ![](assets/offer_simulation_003.png)

   >[!NOTE]
   >
   >実行設定は、Campaign でインタラクションを使用する場合にのみ使用できます。

1. シミュレーションのスコープを指定します。

   詳しくは、[スコープの定義](simulation-scope.md#definition-of-the-scope)を参照してください。

   ![](assets/offer_simulation_004.png)

1. レポートの軸を追加して、**[!UICONTROL オファーの配分（ランキング別）]**&#x200B;レポートの内容をより充実させます（オプション）。

   詳しくは、[レポートの軸の追加](simulation-scope.md#adding-reporting-axes)を参照してください。

   ![](assets/offer_simulation_005.png)

1. 「**[!UICONTROL 保存]**」をクリックして、シミュレーションの設定を保存します。
1. ダッシュボードからシミュレーションを開始します。

   ![](assets/offer_simulation_006.png)

1. シミュレーション結果をチェックし、分析レポートを表示します。

   詳しくは、[シミュレーションのトラッキング](simulation-tracking.md)を参照してください。

   ![](assets/offer_simulation_007.png)
