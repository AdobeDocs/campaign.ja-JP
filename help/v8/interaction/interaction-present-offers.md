---
product: campaign
title: オファーの提示（インバウンドインタラクション）
description: Campaign インタラクションモジュールを使用して最適なオファーを提示する方法を説明します
feature: Interaction, Offers
role: User, Admin
exl-id: d0137fa7-3d04-4205-b49c-46973e45a5b8
TQID: 'https://experienceleague.adobe.com/aC-hN1JwwFkuGc6ZNV0M3uHpM7LcXTHpyC9wCbxKziQ'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: 65702805-0026-5ca1-843a-144fa79f0883
    internal-label: Interaction
  - id: ea08db70-4682-59a2-9408-9aedd9548e07
    internal-label: Offers
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
source-git-commit: ba520da057d2568b2ef65042342301f5ad5eacd8
workflow-type: tm+mt
source-wordcount: '185'
ht-degree: 88%
---
# 最適なオファーの提示{#interaction-present-offers}

オファーは、[インバウンドチャネルまたはアウトバウンドチャネル](interaction-architecture.md#interaction-types)を使用して、様々なオファースペースに提示できます。 この章では、インバウンドチャネルに特有の機能について詳しく説明します。

![](assets/inbound-interactions.png)

オファーがオファーエンジンで選択されるためには、オファーが承認されてライブ環境で使用可能でなければなりません。

詳しくは、[この節](approving-and-activating-an-offer.md#approving-offer-content)を参照してください。

インバウンドコンタクトのコンテキストでは、ページを閲覧しているユーザーをweb サイトで識別できます。 オファーエンジンは、識別されたプロファイル用と匿名プロファイル用に、異なるオファーを提示します。

インバウンドチャネルでオファーを提示できるようにするには、まず、オファーを提示する場所にオファーエンジン呼び出しを設定する必要があります。 インバウンドインタラクションでは、ほとんどの場合、これは web ページです。

>[!NOTE]
>
>インバウンドインタラクションの場合は、1 つまたは複数のオファーを提示および更新するようにオファーエンジンを明確に設定する必要があります。
>
>また、オファースペースで単一モードを有効にする必要があります。 詳しくは、[このページ](interaction-offer-spaces.md)を参照してください。
