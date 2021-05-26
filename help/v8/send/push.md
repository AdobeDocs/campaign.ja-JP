---
solution: Campaign v8
product: Adobe Campaign
title: Adobe Campaignでのプッシュ通知の送信
description: Campaignでのプッシュ通知の概要
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: 69d69c909e6b17ca3f5fb18d6680aa51d0d701cf
workflow-type: tm+mt
source-wordcount: '277'
ht-degree: 22%

---

# プッシュ通知の作成と送信

モバイルアプリ配信では通知をiOSシステムおよびAndroidシステムに送信できます。

Adobe Campaign でプッシュ通知を送信するには、次の操作が必要です。

1. Campaign環境の設定
1. モバイルアプリケーション用に、モバイルアプリケーションタイプの情報サービスを作成します。
1. このサービスに、iOS バージョンと Android バージョンのアプリケーションを追加します。
1. iOS と Android の両方用に配信を作成します。

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/about-mobile-app-channel.html?lang=ja)でモバイルアプリの使用を開始する方法を説明します

## AdobeSDKとの統合

### Campaign SDK の統合

Campaign SDKは、モバイルアプリケーションのAdobe Campaignプラットフォームへの統合を容易にします。

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/integrating-campaign-sdk-into-the-mobile-application.html?lang=en#loading-campaign-sdk)でCampaign SDKをアプリと統合する方法を説明します

### LaunchでのCampaign拡張機能の設定

Campaign Classic拡張機能を利用して、Adobe Experience Platform Launch SDKをCampaignと統合できます。

:[!DNL :arrow_upper_right:]:詳しくは、[AdobeモバイルSDKドキュメント](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-campaignclassic)を参照してください。

## Campaignでのアプリ設定

iOSおよびAndroidアプリの設定は、Adobe Campaignで定義する必要があります。

:[!DNL :arrow_upper_right:]:iOSの設定ガイドラインについて詳しくは、[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application.html?lang=en#sending-messages)を参照してください。

:[!DNL :arrow_upper_right:]:Androidの設定のガイドラインについて詳しくは、[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application-android.html?lang=en#sending-messages)を参照してください。

## 最初のプッシュ通知の作成

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/creating-notifications.html?lang=en#sending-notifications-on-ios)で最初のプッシュ通知を作成する方法を説明します


>[!CAUTION]
>
>Campaign v8モバイル登録では、**非同期**&#x200B;になりました。 [詳細情報](../dev/staging.md)。
