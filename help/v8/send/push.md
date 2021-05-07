---
solution: Campaign
product: Adobe Campaign
title: Adobe Campaign付きプッシュ通知の送信
description: キャンペーンでのプッシュ通知の使用を開始する
feature: 概要
role: Data Engineer
level: Beginner
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '280'
ht-degree: 21%

---

# プッシュ通知の作成と送信

モバイルアプリ配信を使用すると、iOSおよびAndroidシステムに通知を送信できます。

Adobe Campaign でプッシュ通知を送信するには、次の操作が必要です。

1. キャンペーン環境の設定
1. モバイルアプリ用のモバイルアプリタイプ情報サービスを作成します。
1. このサービスに、iOS バージョンと Android バージョンのアプリケーションを追加します。
1. iOS と Android の両方用に配信を作成します。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/about-mobile-app-channel.html?lang=ja)でモバイルアプリの使い方を学ぶ

## AdobeSDKとの統合

### Campaign SDK の統合

キャンペーンSDKは、モバイルアプリケーションをAdobe Campaignプラットフォームに統合しやすくします。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/integrating-campaign-sdk-into-the-mobile-application.html?lang=en#loading-campaign-sdk)で、キャンペーンSDKをアプリと統合する方法を学びます。

### 起動時のキャンペーン拡張の設定

Campaign Classicの拡張機能を利用して、Adobe Experience Platform Launch SDKをキャンペーンと統合できます。

:arrow_upper_right:詳しくは、[AdobeモバイルSDKドキュメント](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-campaignclassic)を参照してください

## キャンペーンでのアプリ設定

iOSアプリとAndroidアプリの設定は、Adobe Campaignで定義する必要があります。

:arrow_upper_right:iOSの設定のガイドラインは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application.html?lang=en#sending-messages)に詳しく記載されています

:arrow_upper_right:Androidの設定のガイドラインは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application-android.html?lang=en#sending-messages)に詳しく記載されています

## 最初のプッシュ通知の作成

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/creating-notifications.html?lang=en#sending-notifications-on-ios)で最初のプッシュ通知を作成する方法を説明します。
