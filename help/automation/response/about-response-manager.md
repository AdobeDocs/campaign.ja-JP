---
product: campaign
title: Response Manager について
description: Response Manager について
feature: Campaigns
version: Campaign v8, Campaign Classic v7
exl-id: b5c0e960-2afe-4a98-b82c-d47a74659703
TQID: 'https://experienceleague.adobe.com/ScwRjZlHoAjXQBxig5Mt3HuNkpPiZ9J-FQTm9FuCY4g'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
  - id: c309ee4e-82e4-4f7e-b608-ef345678c34e
    internal-label: Dynamic reporting
subfeature_v2:
  - id: d72afaa0-c842-48c8-9a3c-51b7911edc1b
    internal-label: Response Management
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
source-git-commit: c8cb0f8a3f752a46fae533c8fd0608aa4545d37c
workflow-type: tm+mt
source-wordcount: '409'
ht-degree: 100%
---
# Campaign Response Manager の基本を学ぶ{#about-response-manager}



Adobe Campaign では、マーケティングキャンペーンの成功や収益性を測定したり、メール、モバイル、ダイレクトメールなどのあらゆる通信チャネルでオファーを提案したりできる、応答管理アドオンを提供しています。

## 仮説 {#hypothesis-concept}

配信受信後のターゲットの行動を推測するために、連絡日から指定の期間に仮説を設定できます。 仮説は、購入と購入の詳細情報を保存する「**トランザクション**」テーブルに基づいて作成されます。

仮説は時間で制限されます。また、コントロール母集団に適用してターゲット母集団と比較することができます。 仮説の結果は&#x200B;**指標**&#x200B;で表示されます。指標は、計算完了時に自動的に更新されます。 キャンペーンレポートでは、仮説にリンクされた ROI が考慮されます。

また、Response Manager で提供される&#x200B;**レポート**&#x200B;により、売上増加率、利益計算、さらに配信またはオファーの ROI にリンクされた情報を集約できます。

加えて、購入の詳細ラインにより、例として 1 つの特定の製品のみに注目するように仮説を指定できます。

例えば、あるアイテムの宣伝の配信後に、発生する売上高を評価したいとします。 配信の翌月にアイテムを少なくとも 1 つ購入したすべての受信者は、このアクションに反応したという仮説を適用します。 この仮説に基づいて、どの購入リクエストラインを関連付けるべきかが決定されます。 この後、関連付けられた購入リクエストラインを合計し、生じる売上高を計算できます。

>[!CAUTION]
>
>Response Manager は&#x200B;**[!UICONTROL キャンペーン]**&#x200B;のオプションです。 使用許諾契約書を確認してください。

配信またはオファーを受け取った受信者全世帯のすべての反応を計算することもできます。

各仮説は単一のトランザクションテーブルにリンクされます。 1 つの配信またはオファーを、複数の仮説にリンクすることができます。

## 実装の手順 {#method}

Response Manager の使用を開始する前に、[設定](configure-response-manager.md)を参照して必要な設定を実行してください。

配信またはオファーで仮説を開始するには、作成する各仮説に使用するテンプレートでコンテキストを定義する必要があります。

測定の仮説を定義および作成するには、以下の手順に従います。

1. 仮説モデルを定義します。 [詳細情報](hypothesis-templates.md#creating-a-hypothesis-model)
1. 既存の配信に 1 つまたは複数の仮説を作成します。 [詳細情報](creating-hypotheses.md#referencing-a-hypothesis-in-a-campaign-delivery)

   または

   オファーで 1 つまたは複数の仮説を作成します。 [詳細情報](creating-hypotheses.md#creating-a-hypothesis-on-an-offer)

1. 仮説の結果を確認します。 [詳細情報](hypothesis-tracking.md)
1. 必要に応じて仮説を再度開始します。 [詳細情報](creating-hypotheses.md#creating-a-hypothesis-on-the-fly-on-a-delivery)
