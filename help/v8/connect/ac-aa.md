---
solution: Campaign Classic
product: campaign
title: キャンペーンとAdobe Analyticsの使用
description: キャンペーンとAdobe Analyticsの使い方を学ぶ
feature: 概要
role: Data Engineer
level: Beginner
exl-id: d1d57aa8-b811-470f-a8a6-18da3a700f1a
translation-type: tm+mt
source-git-commit: c2d066ca2f935455861c3d6747c9805c847f2e0d
workflow-type: tm+mt
source-wordcount: '337'
ht-degree: 38%

---

# キャンペーンとAdobe Analyticsの使用

## Experience Cloud Triggers

Experience Cloudトリガーを使用して、パイプラインを使用してAdobe CampaignとAdobe Analyticsの間でデータを接続できます。 パイプラインは、Webサイトからユーザーのアクションまたはトリガーを取得します。 買い物かごの放棄は、トリガーの一例です。トリガーが Adobe Campaign で処理されて、ほぼリアルタイムで E メールが送信されます。

:speech_balloon:管理対象Cloud Servicesのユーザーとして、[Adobe](../start/support.md#support)に連絡し、Experience Cloudトリガーをキャンペーンに実装します。

## Adobe Analytics Data コネクタ

新しい統合で更新するには

また、Adobe AnalyticsのData Connectorsを設定して、キャンペーンとAnalyticsを統合することもできます。

Data Connector(旧称Adobe Genesis)を使用すると、Adobe CampaignとAdobe Analyticsが&#x200B;**Web Analytics connectors**&#x200B;パッケージを介してやり取りを行うことができます。 この統合は、電子メールの後のユーザーの行動に関連するセグメントとして、Analyticsからキャンペーンにデータを共有します。 反対に、Adobe Campaign から配信された E メールキャンペーンの指標と属性を Adobe Analytics - Data コネクタに送信します。

このような統合を通じて、Adobe Campaign では 1 つ以上のサイトでマーケティングキャンペーン後の訪問者の行動に関するデータを収集し、（分析後に）訪問者を購入者に変換できるようリマーケティングキャンペーンを実行できます。また反対に、Adobe Campaign では、Web 分析ツールを使用して指標およびキャンペーン属性をプラットフォームに転送できます。

各ツールのアクションフィールドは次のとおりです。

* Adobe Analytics:

   * Adobe Campaignで起動された電子メールキャンペーンを示します
   * 受信者がキャンペーン E メールのクリック後に参照したサイトでの行動をセグメントの形式で保存します。セグメントは、放棄された商品（閲覧されたが買い物かごに追加されなかったもの）、購入、買い物かごの放棄に関連しています。

* Adobe Campaign:

   * インジケータとキャンペーン属性をコネクタに送信し、コネクタはこれらをウェブ解析ツールに転送します。
   * セグメントのリカバリと分析
   * 再マーケティングキャンペーンのトリガー

https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/adobe-analytics-data-connector.html?lang=en#technical-workflows-of-web-analytics-processesを参照してください。

:speech_balloon:管理対象Cloud Servicesのユーザーは、[Adobe](../start/support.md#support)に連絡して、Adobe AnalyticsData Connectorをキャンペーンと統合します。

