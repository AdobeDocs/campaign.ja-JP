---
title: Campaign をお使いのソリューションと接続する
description: Campaign とお使いのソリューションを接続する方法を学ぶ
feature: Overview
role: Admin, User
level: Beginner, Intermediate
exl-id: d1d57aa8-b811-470f-a8a6-18da3a700f1a
source-git-commit: 6605a24cea536dbef5b1a7e909ff4d76b3d6c222
workflow-type: tm+mt
source-wordcount: '390'
ht-degree: 81%

---

# Campaign をお使いのソリューションと接続する{#gs-ac-connectors}

Campaign インスタンスを Adobe Experience Cloud ソリューションと接続して、それぞれの機能を組み合わせることができます。

Adobe Campaign にはいくつかのコネクタが付属しており、それらを使用して、外部アプリケーションとの通信、データベースエンジンへの接続、データの共有と同期などを行うことができます。

## Adobeソリューション {#gs-ac-integration}

Adobe Experience Cloudソリューションを組み合わせて実装を最新化する。

![](../assets/do-not-localize/speech.png) Managed Cloud Services ユーザーとして Campaign を Adobe Experience Cloud のサービスやソリューションと接続する場合は、[アドビにお問い合わせ](../start/campaign-faq.md#support)ください。

Campaign v8 は以下と接続できます。

* [Adobe Experience Platform](../connect/ac-aep.md)
* [Adobe Journey Optimizer](../connect/ac-ajo.md)
* [Adobe Analytics](../connect/ac-aa.md)
* [Adobe Experience Manager](../connect/ac-aem.md)
* [Adobe Experience Cloudトリガー](../connect/ac-triggers.md)
* [Adobe Target](../connect/ac-at.md)

アセット共有機能とオーディエンス共有機能を使用すると、Experience Cloud の複数のソリューションをまたいで&#x200B;**オーディエンス**&#x200B;と&#x200B;**アセット**&#x200B;を組み合わせることもできます。

![](../assets/do-not-localize/book.png) Campaign と Experience Cloud ソリューション間の&#x200B;**オーディエンス共有**&#x200B;については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/audience-sharing/sharing-audiences-with-adobe-experience-cloud.html?lang=ja#integrating-with-adobe-experience-cloud)を参照してください

![](../assets/do-not-localize/book.png) Campaign と Experience Cloud ソリューション間の&#x200B;**アセット共有** については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/asset-sharing/sharing-assets-with-adobe-experience-cloud.html?lang=ja#integrating-with-adobe-experience-cloud)を参照してください

## CRM コネクタとの統合{#gs-crm-connectors}

Adobe Campaign プラットフォームを&#x200B;**サードパーティの CRM システム**&#x200B;に接続して、連絡先、アカウント、購入などのデータを同期することができます。

CRM データをチャネル間通信でアクティブ化します。CRM システムから Adobe Campaign に連絡先を渡し、Adobe Campaign から CRM システムにキャンペーンデータを共有する方法について説明します。
CRM コネクタを使用すると、すばやく簡単にデータを統合できます。Adobe Campaign に用意されている専用のウィザードを使用すると、使用可能なテーブルを CRM で収集し、そこから選択することができます。これにより双方向の同期が確保され、システム全体でデータを常に最新に保つことができます。

![](../assets/do-not-localize/glass.png) Campaign を Microsoft Dynamics 365 および Salesforce.com に統合する方法については、[このページ](crm.md)を参照してください

## Federated Data Access を使用してサードパーティに接続{#gs-fda}

FDA（Federated Data Access）コネクタを使用すると、Campaign を 1 つ以上の&#x200B;**外部データベース**&#x200B;に接続して、Campaign Cloud データベースのデータに影響を与えることなく、外部データベースに格納された情報を処理できます。

![](../assets/do-not-localize/glass.png) 詳しくは、[このページ](fda.md)を参照してください

## ソーシャルメディアの操作{#gs-social}

Adobe Campaignを使用して、Twitterを介して顧客や見込み客とやり取りする。

以下を行うことができます。

* フォロワーへのダイレクトメッセージの送信
* Twitter アカウントにツイートを投稿
* 新しい連絡先を収集

![](../assets/do-not-localize/glass.png) でTwitter統合を設定して使用する方法を説明します。 [このページ](../connect/ac-tw.md).

![](../assets/do-not-localize/glass.png) twitterの投稿を作成し、フォロワーにダイレクトメッセージを送信する方法については、 [このページ](../send/twitter.md).
