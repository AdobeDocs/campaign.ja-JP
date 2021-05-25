---
solution: Campaign v8
product: Adobe Campaign
title: CampaignとAdobe Analyticsの使用
description: CampaignとAdobe Analyticsの使用方法を説明します
feature: 概要
role: Data Engineer
level: Beginner
exl-id: d1d57aa8-b811-470f-a8a6-18da3a700f1a
source-git-commit: 556cd7727c7c2bf0158d59d71ae0131b4c1013ee
workflow-type: tm+mt
source-wordcount: '368'
ht-degree: 34%

---

# CampaignとAdobe Analyticsの使用


## Adobe Analytics Connector

Adobe Analyticsコネクタを設定して、CampaignとAnalyticsを統合できます。

Adobe Analyticsコネクタを使用すると、Adobe CampaignとAdobe Analyticsは、**Web分析コネクタ**&#x200B;アドオンを介してやり取りできます。 この統合により、AnalyticsからCampaignへのデータが、Eメール後のユーザー行動に関連するセグメントとして共有されます。 反対に、Adobe Campaign から配信された E メールキャンペーンの指標と属性を Adobe Analytics - Data コネクタに送信します。

Adobe Campaignでは、Adobe Analyticsコネクタを使用してインターネットオーディエンスを測定できます（Web分析）。 このような統合を通じて、Adobe Campaign では 1 つ以上のサイトでマーケティングキャンペーン後の訪問者の行動に関するデータを収集し、（分析後に）訪問者を購入者に変換できるようリマーケティングキャンペーンを実行できます。また反対に、Adobe Campaign では、Web 分析ツールを使用して指標およびキャンペーン属性をプラットフォームに転送できます。

各ツールのアクションフィールドは次のとおりです。

* **Adobe Analytics**

   * Adobe Campaign
   * 受信者がキャンペーン E メールのクリック後に参照したサイトでの行動をセグメントの形式で保存します。セグメントは、放棄された製品（閲覧されたが買い物かごに追加されなかった、または購入された）、購入または買い物かご放棄に関連します。

* **Adobe Campaign**

   * 指標とキャンペーン属性をコネクタに送信し、コネクタはそれらをWeb分析ツールに転送します。
   * セグメントの収集と分析
   * トリガーリマーケティングキャンペーン

[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/adobe-analytics-data-connector.html)でAdobe CampaignとAdobe Analyticsについて詳しく知る

:speech_balloon: 管理対象Cloud Servicesユーザーの場合、[連絡先Adobe](../start/campaign-faq.md#support)に連絡して、Adobe Analytics Data ConnectorをCampaignと統合します。


## Experience Cloud Triggers

Experience Cloudトリガーを使用して、パイプラインを使用してAdobe CampaignとAdobe Analyticsの間でデータを接続できます。 パイプラインは、Webサイトからユーザーのアクションまたはトリガーを取得します。 買い物かごの放棄は、トリガーの一例です。トリガーが Adobe Campaign で処理されて、ほぼリアルタイムで E メールが送信されます。

Adobe CampaignとExperience Cloudのトリガーについて詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/experience-triggers/about-triggers.html?lang=en)を参照してください。

:speech_balloon: 管理対象Cloud Servicesユーザーの場合は、[Adobe](../start/campaign-faq.md#support)に連絡して、CampaignでExperience Cloudトリガーを実装します。
