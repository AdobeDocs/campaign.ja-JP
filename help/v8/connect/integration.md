---
solution: Campaign
product: Adobe Campaign
title: マーケティングキャンペーンの基本を学ぶ
description: マーケティングキャンペーンの基本を学ぶ
feature: 概要
role: Data Engineer
level: Beginner
exl-id: d1d57aa8-b811-470f-a8a6-18da3a700f1a
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '348'
ht-degree: 11%

---

# キャンペーンと他のソリューションを接続{#gs-ac-connectors}

キャンペーンインスタンスをAdobe Experience Cloudソリューションと接続して、機能を組み合わせることができます。

Adobe Campaignには、外部アプリケーションとの通信、データベースエンジンへの接続、データの共有と同期を行うためのコネクタがいくつか用意されています。

## Adobeソリューションの活用{#gs-ac-integration}

実装を最新化し、すべてのAdobe Experience Cloudの機能を活用します。

:speech_balloon:管理対象Cloud Servicesのユーザーとして、[Adobe](../start/support.md#support)に連絡し、キャンペーンをAdobe Experience Cloudのサービスおよびソリューションと接続します。 AdobeIdentity Managementサービス(IMS)を実装する必要があります。 [詳細情報](../start/connect.md#connect-ims)

キャンペーンv8は次の方法で接続できます。

* [AdobeJourney Orchestration](https://experienceleague.adobe.com/docs/journeys/using/action-journeys/acc-action.html?lang=en)

* [リアルタイムCDP](../connect/ac-rtcdp.md)

* [Adobe Analyticsデータコネクタ](../connect/ac-aa.md)

* [Adobe Experience Manager](../connect/ac-aem.md)

* [Adobe Target](../connect/ac-at.md)

また、アセット共有機能とオーディエンス共有機能を使用して、複数のExperience Cloudソリューションにわたって&#x200B;**オーディエンス**&#x200B;と&#x200B;**アセット**&#x200B;を組み合わせることもできます。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/audience-sharing/sharing-audiences-with-adobe-experience-cloud.html?lang=en#integrating-with-adobe-experience-cloud)の&#x200B;**オーディエンス共有**&#x200B;をキャンペーンとExperience Cloudソリューション間で共有する方法の詳細

:arrow_upper_right:**Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/asset-sharing/sharing-assets-with-adobe-experience-cloud.html?lang=en#integrating-with-adobe-experience-cloud)のキャンペーンとExperience Cloudソリューション間でのアセットの共有**&#x200B;に関する詳細[

## CRM コネクタ{#gs-crm-connectors}

Adobe Campaignプラットフォームを&#x200B;**CRMサードパーティ製システム**&#x200B;に接続し、データを同期できます。連絡先、アカウント、購入など

チャネル間の通信に関するCRMデータをアクティブにします。CRMシステムからAdobe Campaignに連絡先を渡し、Adobe CampaignからCRMシステムにキャンペーンデータを共有する方法を説明します。
CRMコネクターにより、データを素早く簡単に統合できます。Adobe Campaignには、CRMで使用できる表を収集して選択するための専用のアシスタントが用意されています。 これにより、システム全体でデータを常に最新にするための双方向の同期が保証されます。

:bulb:[このページ](crm.md)のMicrosoft Dynamics 365およびSalesforce.comとキャンペーンを統合する方法を説明します。


## Federated Data Access（FDA）{#gs-fda}

FDAコネクタ(Federated Data Access)を使用して、1つ以上の&#x200B;**外部データベース**&#x200B;にキャンペーンを接続し、キャンペーンクラウドデータベースのデータに影響を与えることなく、それらに保存されている情報を処理します。

:bulb:詳細は[このページ](fda.md)を参照


<!-- 
 ## Integrate with social media

Use the **Managing social networks (Social Marketing)** option to interact with customers and prospects via Twitter.

* Send messages - Use Adobe Campaign Social Marketing to send messages on Twitter. Adobe Campaign lets you post messages directly to your twitter account. You can also send direct messages to all your followers.

* Collect new contacts - Adobe Campaign Social Marketing also makes it easy to acquire new contacts via Facebook: contact users and ask them if they want to share their profile information. If they accept, Adobe Campaign automatically recovers the data, which enables you to carry out targeting campaigns and, when possible, to implement cross-channel strategies.

:bulb: Learn how to set up and use Campaign Social Marketing in [this section](../connect/ac-tw.md) -->