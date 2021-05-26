---
solution: Campaign v8
product: Adobe Campaign
title: マーケティングキャンペーンの基本を学ぶ
description: マーケティングキャンペーンの基本を学ぶ
feature: 概要
role: Data Engineer
level: Beginner
exl-id: d1d57aa8-b811-470f-a8a6-18da3a700f1a
source-git-commit: 4ae0c968bd68d76d7ceffb91023d5426d6a810ea
workflow-type: tm+mt
source-wordcount: '340'
ht-degree: 11%

---

# Campaignをソリューションと接続する{#gs-ac-connectors}

CampaignインスタンスをAdobe Experience Cloudソリューションと接続して、機能を組み合わせることができます。

Adobe Campaignには、外部アプリケーションとの通信、データベースエンジンへの接続、データの共有、同期を可能にするコネクタがいくつか用意されています。

## Adobe・ソリューションの活用{#gs-ac-integration}

実装を最新化し、すべてのAdobe Experience Cloud機能を活用します。

[!DNL :speech_balloon:] 管理対象Cloud Servicesのユーザーは、Adobeに問い合わせ [て、](../start/campaign-faq.md#support) CampaignをAdobe Experience Cloudのサービスおよびソリューションと接続します。AdobeIdentity Managementサービス(IMS)を実装する必要があります。 [詳細情報](../start/connect.md#connect-ims)

Campaign v8は、次のものと接続できます。

* [AdobeJourney Orchestration](https://experienceleague.adobe.com/docs/journeys/using/action-journeys/acc-action.html?lang=en)

* [リアルタイムCDP](../connect/ac-rtcdp.md)

* [Adobe Analytics Data Connector](../connect/ac-aa.md)

* [Adobe Experience Manager](../connect/ac-aem.md)

* [Adobe Target](../connect/ac-at.md)

また、Experience Cloudソリューション全体で&#x200B;**オーディエンス**&#x200B;と&#x200B;**アセット**&#x200B;を、アセット共有およびオーディエンス共有機能と組み合わせることもできます。

[!DNL :arrow_upper_right:] CampaignとExperience Cloudソリ **ューシ** ョン間でのオーディエンスの共有について詳しくは、 [Campaign Classicv7ドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/audience-sharing/sharing-audiences-with-adobe-experience-cloud.html?lang=en#integrating-with-adobe-experience-cloud)

[!DNL :arrow_upper_right:] CampaignとExperience Cloudソリ **ュー** ション間でのアセットの共有について詳しくは、 [Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/asset-sharing/sharing-assets-with-adobe-experience-cloud.html?lang=en#integrating-with-adobe-experience-cloud)

## CRM コネクタ{#gs-crm-connectors}

Adobe Campaignプラットフォームを&#x200B;**CRMサードパーティシステム**&#x200B;に接続し、データを同期できます。連絡先、アカウント、購入など

クロスチャネル通信でCRMデータをアクティブ化します。CRMシステムからAdobe Campaignに連絡先を渡し、Adobe CampaignからCRMシステムにキャンペーンデータを共有する方法を説明します。
CRMコネクタを使用すると、データをすばやく簡単に統合できます。Adobe Campaignは、CRMで使用できるテーブルを収集および選択するための専用のアシスタントを提供します。 これにより、システム全体でデータを常に最新にするための双方向の同期が保証されます。

[!DNL :bulb:] CampaignをMicrosoft Dynamics 365およびSalesforce.comと統合する方法については、このページを参照し [てください](crm.md)

## Federated Data Access（FDA）{#gs-fda}

FDAコネクタ(Federated Data Access)を使用して、Campaignを1つ以上の&#x200B;**外部データベース**&#x200B;に接続し、Campaign Cloudデータベースデータに影響を与えることなく、それらに保存された情報を処理します。

[!DNL :bulb:] 詳しくは、このページを [参照してください。](fda.md)


<!-- 
 ## Integrate with social media

Use the **Managing social networks (Social Marketing)** option to interact with customers and prospects via Twitter.

* Send messages - Use Adobe Campaign Social Marketing to send messages on Twitter. Adobe Campaign lets you post messages directly to your twitter account. You can also send direct messages to all your followers.

* Collect new contacts - Adobe Campaign Social Marketing also makes it easy to acquire new contacts via Facebook: contact users and ask them if they want to share their profile information. If they accept, Adobe Campaign automatically recovers the data, which enables you to carry out targeting campaigns and, when possible, to implement cross-channel strategies.

[!DNL :bulb:] Learn how to set up and use Campaign Social Marketing in [this section](../connect/ac-tw.md) -->