---
product: campaign
title: シミュレーションの範囲
description: シミュレーションの範囲
feature: Interaction, Offers
version: Campaign v8, Campaign Classic v7
audience: interaction
content-type: reference
topic-tags: simulating-offers
exl-id: 4f6b3de2-3fdf-441d-925d-476e20e75c6f
TQID: 'https://experienceleague.adobe.com/mZ618bV3lzbXS09MXBXJxM5RizvMWl6lEgw0Bwb2bGI'
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
source-git-commit: 8bfb312d62f56f19899a83de6b0dd58c56e04ab2
workflow-type: tm+mt
source-wordcount: '274'
ht-degree: 87%
---
# シミュレーションの範囲{#simulation-scope}



## スコープの定義 {#definition-of-the-scope}

「**[!UICONTROL スコープ]**」タブを表示し、必要な設定を選択します。

次の項目は必須です。

* 環境またはオファーカテゴリ。
* オファースペース。
* 連絡日。 連絡日に実施要件を満たしていないオファーは、考慮されません。
* ターゲット母集団。

  ターゲットにフィルターを設定しない場合、受信者テーブル全体が考慮されます。

* ターゲットごとにシミュレートされる提案数。

  受信者は、この多くの提案を受け取ります。 例えば、5 と入力すると、各受信者が受け取るオファーの提案の数は最大 5 件になります。

  ![連絡先の日付、提案数、および素晴らしい旅行者のターゲットクエリを含む「シミュレーション範囲」タブ &#x200B;](assets/offer_simulation_009.png)

シミュレーションについて考慮に入れるようにオファーを調整するために、1 つまたは複数のテーマ（事前にカテゴリで指定されたもの）を追加できます。

また、シミュレーションをすべてのオファーについて実行するか、オンライン状態のオファーについてのみ実行するかを選択することもできます。 一部のフィルターは、必要に応じて選択を変更できます。

>[!NOTE]
>
>連絡日の指定は必須です。 これによって、インタラクションエンジンは選択した環境またはカテゴリのオファーを並べ替えることができます。 日付を設定していない場合、シミュレーションを実行するとエラーが発生します。

## レポートの軸の追加 {#adding-reporting-axes}

「**[!UICONTROL 計算]**」タブで、ターゲットやオファー自体に対してレポートの軸を追加すると、シミュレーション分析をより充実させることができます。

それには、「**[!UICONTROL 追加]**」ボタンをクリックし、適切なフィールドを選択します。 軸は、シミュレーションの計算に使用され、分析レポートに表示されます。 詳しくは、[シミュレーションのトラッキング](simulation-tracking.md)を参照してください。

![&#x200B; オファーのレポート軸を追加する終了日を選択する式を選択ダイアログを含む「計算」タブ &#x200B;](assets/offer_simulation_011.png)
