---
product: campaign
title: オファーの提示（インバウンドインタラクション）
description: Campaign インタラクションモジュールを使用して最適なオファーを提示する方法を説明します
exl-id: d0137fa7-3d04-4205-b49c-46973e45a5b8
source-git-commit: 6de5c93453ffa7761cf185dcbb9f1210abd26a0c
workflow-type: ht
source-wordcount: '200'
ht-degree: 100%

---

# 最適なオファーの提示{#interaction-present-offers}

オファーは、[インバウンドチャネルまたはアウトバウンドチャネル](interaction-architecture.md#interaction-types)を使用して、様々なオファースペースに提示できます。この章では、インバウンドチャネルに特有の機能について詳しく説明します。

![](assets/inbound-interactions.png)

オファーがオファーエンジンで選択されるためには、オファーが承認されてライブ環境で使用可能でなければなりません。

![](../assets/do-not-localize/book.png) 詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/managing-offers/managing-an-offer-catalog/approving-and-activating-an-offer.html?lang=ja#approving-offer-content)を参照してください。

インバウンドコンタクト先のコンテキストでは、コンタクト先つまりページを閲覧しているユーザーが web サイトで識別できるかどうかです。オファーエンジンは、識別されたプロファイル用と匿名プロファイル用に、異なるオファーを提示します。

インバウンドチャネルでオファーを提示できるようにするには、まず、オファーを提示する場所にオファーエンジン呼び出しを設定する必要があります。インバウンドインタラクションでは、ほとんどの場合、これは web ページです。

>[!NOTE]
>
>インバウンドインタラクションの場合は、1 つまたは複数のオファーを提示および更新するようにオファーエンジンを明確に設定する必要があります。
>
>また、オファースペースで単一モードを有効にする必要があります。詳しくは、[このページ](interaction-offer-spaces.md)を参照してください。
