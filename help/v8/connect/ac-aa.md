---
solution: Campaign v8
product: Adobe Campaign
title: Adobe Campaign と Adobe Analytics の連携
description: Adobe Campaign と Adobe Analytics の連携方法について説明します
feature: 概要
role: Data Engineer
level: Beginner
exl-id: d1d57aa8-b811-470f-a8a6-18da3a700f1a
source-git-commit: 4ae0c968bd68d76d7ceffb91023d5426d6a810ea
workflow-type: tm+mt
source-wordcount: '364'
ht-degree: 64%

---

# Adobe Campaign と Adobe Analytics の連携


## Adobe Analytics Connector

Adobe Analyticsコネクタを設定して、CampaignとAnalyticsを統合できます。

Adobe Analyticsコネクタを使用すると、Adobe CampaignとAdobe Analyticsは、**Web分析コネクタ**&#x200B;アドオンを介してやり取りできます。 この統合では、E メールの後のユーザーの行動に関連するセグメントとして、Analytics から Adobe Campaign に向けてデータを共有します。 逆に、Adobe Campaign から配信された メールキャンペーンの指標と属性を Adobe Analytics Data Connector に送信します。

Adobe Campaignでは、Adobe Analyticsコネクタを使用してインターネットオーディエンスを測定できます（Web分析）。 このような統合を通じて、Adobe Campaign では 1 つ以上のサイトでマーケティングキャンペーン後の訪問者の行動に関するデータを収集し、（分析後に）訪問者を購入者に変換できるようリマーケティングキャンペーンを実行できます。また反対に、Adobe Campaign では、Web 分析ツールを使用して指標およびキャンペーン属性をプラットフォームに転送できます。

各ツールのアクションフィールドは次のとおりです。

* **Adobe Analytics**

   * Adobe Campaign で開始された E メールキャンペーンにマークを付けます。
   * 受信者がキャンペーンメールのクリック後に参照したサイトでの行動をセグメントの形式で保存します。セグメントは、離脱した製品（閲覧されたが、カートへの追加や購入は行われなかった）、購入またはカート放棄を対象とします。

* **Adobe Campaign**

   * 指標およびキャンペーン属性をコネクタに送信します。コネクタはそれを web 分析ツールに転送します。
   * セグメントを復元し分析します。
   * リマーケティングキャンペーンをトリガーします。

[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/adobe-analytics-data-connector.html)でAdobe CampaignとAdobe Analyticsについて詳しく知る

[!DNL :speech_balloon:]  管理対象Cloud Servicesのユーザーは、アドビに [連絡](../start/campaign-faq.md#support) して、Adobe Analytics Data ConnectorをCampaignと統合してください。


## Experience Cloud トリガー

Experience Cloudトリガーを使用すると、パイプラインを使用して Adobe Campaign と Adobe Analytics の間でデータを接続できます。 パイプラインは、Webサイトからユーザーのアクションまたはトリガーを取得します。 買い物かごの放棄は、トリガーの一例です。トリガーが Adobe Campaign で処理されて、ほぼリアルタイムで E メールが送信されます。

Adobe CampaignとExperience Cloudのトリガーについて詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/experience-triggers/about-triggers.html?lang=en)を参照してください。

[!DNL :speech_balloon:]  管理対象Cloud Servicesのユーザーは、アドビに連絡 [し](../start/campaign-faq.md#support) て、CampaignのExperience Cloudトリガーを実装します。
