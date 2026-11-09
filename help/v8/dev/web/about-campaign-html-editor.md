---
product: campaign
title: Campaign の HTML エディターの基礎知識
description: Campaign DCE の基礎知識
feature: Web Apps, Web Forms, Landing Pages, Email Design
version: Campaign v8, Campaign Classic v7
exl-id: f5d65e89-6b18-482b-97d8-11ab94f6775e
TQID: 'https://experienceleague.adobe.com/X-hpH7G2DRGdimNZ-HRbRJpnhmP-QByWSIF5hSUQFG0'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
  - id: b631758a-142d-425f-b9aa-f756d85cb979
    internal-label: Campaign Email Designer
subfeature_v2:
  - id: f391046b-0cf3-4e76-bd3b-97fe06654506
    internal-label: Web Apps
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
  - id: d7be2b01-dc9c-40f7-aace-a151707504ed
    internal-label: Landing pages
  - id: c8da4fdd-eb94-4751-a43c-f82733fb2d6e
    internal-label: Email design
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
source-git-commit: 6db6c9152f6060b40596bd65a2ce705f916401be
workflow-type: tm+mt
source-wordcount: '352'
ht-degree: 84%
---
# Campaign の HTML エディターの基礎知識{#about-campaign-html-editor}

>[!NOTE]
>
>最も一般的なユースケースでは、Campaign Web ユーザーインターフェイスでランディングページを作成し、簡単にデザインして公開できます。 この節の説明に従って、クライアントコンソールで作成されたランディングページでは、より多くの設定を提供し、より高度なユースケースをカバーします。
>
>[Campaign Web ユーザーインターフェイスのランディングページについて詳しく見る](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/landing-pages/get-started-lp){target="_blank"}



**デジタルコンテンツエディター（DCE）**&#x200B;は、Adobe Campaign 内で HTML 形式のコンテンツやテンプレートを容易に作成できる HTML コンテンツエディターです。

DCE を使用すると、ページ要素の挿入や書式設定、HTML ページ要素とデータベースフィールドのマッピングなどをおこなえます。 このエディターは、Web アプリケーションのページを作成する場合や、DCE テンプレートに基づいて配信を作成する場合に使用できます。

>[!NOTE]
>
>サーバーサイド JavaScript コードを追加する必要がある場合は、パーソナライゼーションブロックを使用します。 [Campaign v8 ドキュメント](https://experienceleague.adobe.com/docs/campaign/campaign-v8/send/personalize/personalization-blocks.html?lang=ja){target="_blank"}を参照してください。

>[!CAUTION]
>
>すべての外部リソースは、HTTPS URL で参照する必要があります。

## デジタルコンテンツエディターを使用するための主要な手順 {#content-editor-general-operation}

この節では、DCE でのコンテンツの編集と編集したコンテンツのアップロードの主な手順を、Web アプリケーションや配信デザインのコンテキストで説明します。

一般的な操作は次のとおりです。

![](assets/dce_schema.png)

単純な **Web アプリケーション**&#x200B;を作成するには、次の操作が必要です。

1. Web アプリケーションを作成します（[詳細情報](creating-a-landing-page.md)）
1. 既存のコンテンツを選択するか、標準テンプレートからコンテンツを作成します（[詳細情報](template-management.md)）
1. コンテンツの編集と設定をおこないます（[詳細情報](editing-content.md)）
1. Web アプリケーションを公開します（[詳細情報](creating-a-landing-page.md#step-3---publishing-content)）

>[!NOTE]
>
>Web アプリケーションのコンテキストでの完全な実装例については、[こちらの節](creating-a-landing-page.md)を参照してください。

**メール配信**&#x200B;を作成するには、次の操作が必要です。

1. DCE テンプレートから配信を作成します（[詳細情報](use-case-creating-an-email-delivery.md)）
1. 既存のコンテンツを選択するか、[標準テンプレート](template-management.md)からコンテンツを作成します
1. オンラインコンテンツの編集と設定をおこないます
1. 配信を送信します（詳しくは、[Campaign v8 ドキュメント](https://experienceleague.adobe.com/docs/campaign/campaign-v8/send/create-message.html?lang=ja){target="_blank"}を参照してください）。

>[!NOTE]
>
>メール配信のコンテキストでの完全な実装例について詳しくは、[こちらのユースケース](use-case-creating-an-email-delivery.md)を参照してください。
