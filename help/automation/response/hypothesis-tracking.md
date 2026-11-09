---
product: campaign
title: 仮説のトラッキング
description: Campaign Response Manager で仮説をトラッキングする方法について説明します。
feature: Campaigns, Monitoring, Reporting
version: Campaign v8, Campaign Classic v7
audience: campaign
content-type: reference
topic-tags: response-manager
exl-id: 1dc6d03b-698c-4750-9563-0676fcd185df
TQID: 'https://experienceleague.adobe.com/MKJg0M0gWR9XvgsRkXvZqAkNx2IzLg24l9c4nG26r20'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
  - id: c309ee4e-82e4-4f7e-b608-ef345678c34e
    internal-label: Dynamic reporting
subfeature_v2:
  - id: d72afaa0-c842-48c8-9a3c-51b7911edc1b
    internal-label: Response Management
  - id: e519a22f-a06a-42fc-9d09-d78a3ab2c434
    internal-label: Monitoring guidelines
  - id: b3a4149f-2b3a-44d1-894e-e3ac4c77fb47
    internal-label: Reporting interface
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
source-git-commit: c8cb0f8a3f752a46fae533c8fd0608aa4545d37c
workflow-type: tm+mt
source-wordcount: '478'
ht-degree: 100%
---
# 仮説のトラッキング{#hypothesis-tracking}



仮説の計算結果は、Adobe Campaign プラットフォームの様々なレベルで確認できます。仮説によって計算された指標およびターゲット母集団の反応は、実際の仮説でもキャンペーンと配信の仮説レポートでも確認できます。

## 仮説の結果 {#hypothesis-results}

### 指標 {#indicators}

仮説が計算されると、いくつかの測定指標が自動的に更新されます。 これらの指標は、仮説の「**[!UICONTROL 一般]**」タブで確認できます。

![](assets/response_hypothesis_delivery_example_010.png)

以下の指標を確認できます。

* **反応者数**：仮説に一致するコンタクト先個人の数。
* **連絡済み反応率**：反応者数÷配信中のコンタクト先の総数。
* **回答者コントロール母集団のコンタクト先の数**：仮説に一致するコントロール母集団の数。
* **コントロール母集団の反応率**：回答者コントロール母集団のコンタクト先の数÷配信コントロール母集団の総数。
* **反応数**：個人、仮説およびトランザクションテーブル間の関係を含むテーブル内のレコード数。

すべての指標のリストについては、「**[!UICONTROL リストを表示]**」リンクをクリックします。

![](assets/response_hypothesis_indicators_002.png)

指標により次の情報が提供されます。

* **コンタクト済み母集団の合計売上高**：合計金額÷コンタクトした個人数。
* **コントロール母集団の合計売上高**：合計金額÷コントロール母集団数。
* **コンタクト先ごとの平均売上高**：合計金額÷コンタクト先。
* **コントロール母集団の平均売上高**：合計金額÷コントロール母集団。
* **コンタクト先あたりの利益合計**：合計利益÷コンタクト先。
* **コントロール母集団の合計利益**：合計利益÷コントロール母集団。
* **コンタクト先ごとの平均利益**：合計利益÷コンタクト先。
* **コントロール母集団の平均利益**：合計利益÷コントロール母集団。
* **追加の売上高**：（コンタクト先の平均売上高 - コントロール母集団の平均売上高）&#42; コンタクト先数
* **追加のマージン**：（コンタクト先の平均利益 - コントロール母集団の平均利益）÷ コンタクト先数
* **コンタクト先あたり平均コスト**：計算済み配信コスト÷コンタクト先数。
* **ROI**：配信の計算されたコスト÷コンタクト先ごとの合計利益
* **効果的な ROI**：計算済み配信コスト÷追加利益。
* **重要度**：キャンペーンの重要度に応じて 0 ～ 3 の値。

### 反応 {#reactions}

仮説に対する受信者の反応は、「**[!UICONTROL 反応]**」タブで確認できます。

1. 仮説の計算が完了したら、Adobe Campaign ツリーの&#x200B;**[!UICONTROL キャンペーン管理／測定の仮説]**&#x200B;ノードに移動します。
1. 仮説を選択し、「**[!UICONTROL 反応]**」タブをクリックして、マーケティングキャンペーン後に何かを購入する可能性がある受信者のリストを確認します。

   ![](assets/response_hypothesis_reactions_001.png)

## レポート {#reports}

「**[!UICONTROL 仮説レポート]**」では、キャンペーンおよび配信で実行した仮説の結果を確認できます。 このレポートには、仮説によって計算された指標が含まれます（詳しくは、[指標](#indicators)を参照）。

* **キャンペーンレベルで確認する場合**：キャンペーンの「**[!UICONTROL レポート]**」リンクをクリックし、「**[!UICONTROL 仮説レポート]**」を選択します。 このレポートには、キャンペーン配信と、各配信に計算された仮説のリストが含まれます。

  ![](assets/response_hypothesis_campaign_report_001.png)

* **配信レベルで確認する場合**：レポートにアクセスするには、配信を開き、「**[!UICONTROL 概要]**」タブの「**[!UICONTROL レポート]**」をクリックし、「**[!UICONTROL 仮説レポート]**」を選択します。 同一の配信に複数の仮説が計算された場合は、すべての仮説がレポートに表示されます。

  ![](assets/response_hypothesis_delivery_report_001.png)
