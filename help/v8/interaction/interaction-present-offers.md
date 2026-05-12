---
product: campaign
title: オファーの提示（インバウンドインタラクション）
description: Campaign インタラクションモジュールを使用して最適なオファーを提示する方法を説明します
feature: Interaction, Offers
role: User, Admin
exl-id: d0137fa7-3d04-4205-b49c-46973e45a5b8
TQID: https://experienceleague.adobe.com/aC-hN1JwwFkuGc6ZNV0M3uHpM7LcXTHpyC9wCbxKziQ
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 209
ht-degree: 100%

---

# 最適なオファーの提示{#interaction-present-offers}

オファーは、[インバウンドチャネルまたはアウトバウンドチャネル](interaction-architecture.md#interaction-types)を使用して、様々なオファースペースに提示できます。 この章では、インバウンドチャネルに特有の機能について詳しく説明します。

![](assets/inbound-interactions.png)

オファーがオファーエンジンで選択されるためには、オファーが承認されてライブ環境で使用可能でなければなりません。

詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/managing-offers/managing-an-offer-catalog/approving-and-activating-an-offer.html?lang=ja#approving-offer-content){target="_blank"}を参照してください。

インバウンドコンタクト先のコンテキストでは、コンタクト先つまりページを閲覧しているユーザーが web サイトで識別できるかどうかです。 オファーエンジンは、識別されたプロファイル用と匿名プロファイル用に、異なるオファーを提示します。

インバウンドチャネルでオファーを提示できるようにするには、まず、オファーを提示する場所にオファーエンジン呼び出しを設定する必要があります。 インバウンドインタラクションでは、ほとんどの場合、これは web ページです。

>[!NOTE]
>
>インバウンドインタラクションの場合は、1 つまたは複数のオファーを提示および更新するようにオファーエンジンを明確に設定する必要があります。
>
>また、オファースペースで単一モードを有効にする必要があります。 詳しくは、[このページ](interaction-offer-spaces.md)を参照してください。
