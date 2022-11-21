---
product: campaign
title: オファーエンジン
description: オファーエンジン
feature: Workflows, Interaction
exl-id: d77858e1-3cd5-4372-b1bc-ea4b518c958d
source-git-commit: 77ec01aaba1e50676bed57f503a9e4e8bb1fe54c
workflow-type: tm+mt
source-wordcount: '140'
ht-degree: 100%

---

# オファーエンジン{#offer-engine}

**[!UICONTROL オファーエンジン]**&#x200B;アクティビティを使用して、配信に先立つオファーエンジンの呼び出しを定義できます。

このアクティビティは、エンリッチメントアクティビティと同じ原則でエンジン呼び出しによって作動します。つまり、配信の前に、インバウンド母集団のデータを、エンジンによって自動生成されたオファーでエンリッチメントします。

![](assets/int_offerengine_activity2.png)

クエリを設定した後におこなう作業（この[節](query.md)を参照）：

1. 「**[!UICONTROL オファーエンジン]**」アクティビティを追加し、開きます。
1. 使用可能な各種フィールドに入力して、オファーエンジンパラメーター（オファースペース、カテゴリまたはテーマ、コンタクト日、保持するオファー数）への呼び出しを指定します。エンジンは、これらのパラメーターに基づいて、追加するオファーを自動的に計算します。

   >[!CAUTION]
   >
   >このアクティビティを使用する場合、配信に使用されたオファーの提案のみが格納されます。

   ![](assets/int_offerengine_activity1.png)

1. 次に、選択したチャネルに対応する配信アクティビティを設定します。[クロスチャネル配信](cross-channel-deliveries.md)を参照してください。
