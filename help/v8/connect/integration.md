---
title: Campaign をお使いのソリューションと接続する
description: Adobe Campaign インスタンスを Experience Cloud ソリューションに接続する方法について説明します。
feature: Overview
role: Admin, User
level: Beginner
exl-id: d1d57aa8-b811-470f-a8a6-18da3a700f1a
source-git-commit: 5ab598d904bf900bcb4c01680e1b4730881ff8a5
workflow-type: tm+mt
source-wordcount: '410'
ht-degree: 92%

---

# Campaign をお使いのソリューションと接続する{#gs-ac-connectors}

Campaign インスタンスを Adobe Experience Cloud ソリューションと接続して、それぞれの機能を組み合わせることができます。

Adobe Campaign にはいくつかのコネクタが付属しており、それらを使用して、外部アプリケーションとの通信、データベースエンジンへの接続、データの共有と同期などを行うことができます。

## アドビソリューションの組み合わせ {#gs-ac-integration}

Adobe Experience Cloud ソリューションを組み合わせて実装を最新化します。

Campaign v8 では、次のアドビソリューションと接続できます。ユースケース、設定、ガイドラインについて詳しくは、リンクを参照してください。

* Adobe Analytics。[詳細情報](../connect/ac-aa.md)
* Adobe Experience Cloud トリガー。[詳細情報](../connect/ac-triggers.md)
* Adobe Experience Manager。[詳細情報](../connect/ac-aem.md)
* Adobe Experience Platform。[詳細情報](../connect/ac-aep.md)
* Adobe Journey Optimizer。[詳細情報](../connect/ac-ajo.md)
* Adobe Target。[詳細情報](../connect/ac-at.md)
* Adobe Workfront。[詳細情報](../connect/ac-workfront.md)

また、アセット共有機能とオーディエンス共有機能を使用すると、Experience Cloud の複数のソリューションをまたいで&#x200B;**オーディエンス**&#x200B;と&#x200B;**アセット**&#x200B;を組み合わせることもできます。

Campaign とExperience Cloud ソリューションの **オーディエンスの共有** について詳しくは、[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/audience-sharing/sharing-audiences-with-adobe-experience-cloud.html?lang=ja#integrating-with-adobe-experience-cloud){target="_blank"} を参照してください。

Campaign とExperience Cloud ソリューションの **アセット共有** について詳しくは、[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/asset-sharing/sharing-assets-with-adobe-experience-cloud.html?lang=ja#integrating-with-adobe-experience-cloud){target="_blank"} を参照してください。

>[!NOTE]
>
>Managed Cloud Services ユーザーとして Campaign を Adobe Experience Cloud のサービスやソリューションと接続する場合は、[アドビにお問い合わせ](../start/campaign-faq.md#support)ください。


## CRM コネクタとの統合{#gs-crm-connectors}

Adobe Campaign プラットフォームを&#x200B;**サードパーティの CRM システム**&#x200B;に接続して、連絡先、アカウント、購入などのデータを同期することができます。

CRM データをチャネル間通信でアクティブ化します。CRM システムから Adobe Campaign に連絡先を渡し、Adobe Campaign から CRM システムにキャンペーンデータを共有する方法について説明します。
CRM コネクタを使用すると、すばやく簡単にデータを統合できます。Adobe Campaign に用意されている専用のウィザードを使用すると、使用可能なテーブルを CRM で収集し、そこから選択することができます。これにより双方向の同期が確保され、システム全体でデータを常に最新に保つことができます。

Campaign を Microsoft Dynamics 365 および Salesforce.com に統合する方法については、[このページ](crm.md)を参照してください

## Federated Data Access を使用してサードパーティに接続{#gs-fda}

FDA（Federated Data Access）コネクタを使用すると、Campaign を 1 つ以上の&#x200B;**外部データベース**&#x200B;に接続して、Campaign Cloud データベースのデータに影響を与えることなく、外部データベースに格納された情報を処理できます。

詳しくは、[このページ](fda.md)を参照してください。

## ソーシャルメディアの操作{#gs-social}

Adobe Campaign を使用して、X（旧 Twitter）経由で顧客や見込み客とやり取りします。

以下を行うことができます。

* フォロワーへのダイレクトメッセージの送信
* X アカウントへの投稿
* 新しい連絡先の収集

X 統合の設定と使用の方法については、[このページ](../connect/ac-tw.md)を参照してください。

X の投稿を作成し、フォロワーにダイレクトメッセージを送信する方法については、[このページ](../send/twitter.md)を参照してください。
