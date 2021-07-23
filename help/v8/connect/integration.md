---
product: Adobe Campaign
title: Campaign をお使いのソリューションと接続する
description: Campaign とお使いのソリューションを接続する方法を学ぶ
feature: 概要
role: Data Engineer
level: Beginner
exl-id: d1d57aa8-b811-470f-a8a6-18da3a700f1a
source-git-commit: c61d8aa8e0a68ccc81a6141782f860daf061bc61
workflow-type: ht
source-wordcount: '350'
ht-degree: 100%

---

# Campaign をお使いのソリューションと接続する{#gs-ac-connectors}

Campaign インスタンスを Adobe Experience Cloud ソリューションと接続して、それぞれの機能を組み合わせることができます。

Adobe Campaign にはいくつかのコネクタが付属しており、それらを使用して、外部アプリケーションとの通信、データベースエンジンへの接続、データの共有と同期などを行うことができます。

## Adobe ソリューションの活用 {#gs-ac-integration}

実装を最新化し、Adobe Experience Cloud のすべての機能を活用します。

Managed Cloud Services ユーザーの場合、Campaign を Adobe Experience Cloud のサービスやソリューションと接続するには、[アドビにお問い合わせ](../start/campaign-faq.md#support)ください。

キャンペーン v8 は以下と接続できます。


* [Adobe Experience Cloud のリアルタイム CDP](../connect/ac-rtcdp.md)
* [Adobe Journey Orchestration](https://experienceleague.adobe.com/docs/journeys/using/action-journeys/acc-action.html?lang=ja).

   [こちら](https://experienceleague.adobe.com/docs/journeys/using/use-cases-journeys/campaign-classic-use-case.html?lang=ja)でエンドツーエンドの使用例を参照してください。

* [Adobe Analytics](../connect/ac-aa.md)
* [Adobe Experience Manager](../connect/ac-aem.md)
* [Adobe Experience Cloudトリガー](../connect/ac-triggers.md)
* [Adobe Target](../connect/ac-at.md)

アセット共有機能とオーディエンス共有機能を使用すると、Experience Cloud の複数のソリューションをまたいで&#x200B;**オーディエンス**&#x200B;と&#x200B;**アセット**&#x200B;を組み合わせることもできます。

↗️ Campaign と Experience Cloud ソリューションとの&#x200B;**オーディエンス共有**&#x200B;の詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/audience-sharing/sharing-audiences-with-adobe-experience-cloud.html?lang=ja#integrating-with-adobe-experience-cloud)を参照してください

↗️ Campaign と Experience Cloud ソリューションとの&#x200B;**アセット共有**&#x200B;の詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/asset-sharing/sharing-assets-with-adobe-experience-cloud.html?lang=ja#integrating-with-adobe-experience-cloud)を参照してください

## CRM コネクタ{#gs-crm-connectors}

Adobe Campaign プラットフォームを&#x200B;**サードパーティの CRM システム**&#x200B;に接続して、連絡先、アカウント、購入などのデータを同期することができます。

CRM データをチャネル間通信でアクティブ化します。CRM システムから Adobe Campaign に連絡先を渡し、Adobe Campaign から CRM システムにキャンペーンデータを共有する方法について説明します。
CRM コネクタを使用すると、すばやく簡単にデータを統合できます。Adobe Campaign に用意されている専用のウィザードを使用すると、使用可能なテーブルを CRM で収集し、そこから選択することができます。これにより双方向の同期が確保され、システム全体でデータを常に最新に保つことができます。

Campaign を Microsoft Dynamics 365 および Salesforce.com に統合する方法については、[このページ](crm.md)を参照してください

## Federated Data Access（FDA）{#gs-fda}

FDA（Federated Data Access）コネクタを使用すると、Campaign を 1 つ以上の&#x200B;**外部データベース**&#x200B;に接続して、Campaign Cloud データベースのデータに影響を与えることなく、外部データベースに格納された情報を処理できます。

詳細については、[このページ](fda.md)を参照してください


<!-- 
 ## Integrate with social media

Use the **Managing social networks (Social Marketing)** option to interact with customers and prospects via Twitter.

* Send messages - Use Adobe Campaign Social Marketing to send messages on Twitter. Adobe Campaign lets you post messages directly to your twitter account. You can also send direct messages to all your followers.

* Collect new contacts - Adobe Campaign Social Marketing also makes it easy to acquire new contacts via Facebook: contact users and ask them if they want to share their profile information. If they accept, Adobe Campaign automatically recovers the data, which enables you to carry out targeting campaigns and, when possible, to implement cross-channel strategies.

💡 Learn how to set up and use Campaign Social Marketing in [this section](../connect/ac-tw.md) -->