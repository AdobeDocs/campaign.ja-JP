---
solution: Campaign
product: Adobe Campaign
title: Adobe CampaignでSMSを送信
description: キャンペーンでのSMSの使用を開始する
feature: 概要
role: Data Engineer
level: Beginner
translation-type: tm+mt
source-git-commit: bbaa603e73d4c1618f326624600ea3d357b265e6
workflow-type: tm+mt
source-wordcount: '309'
ht-degree: 22%

---

# SMSの作成と送信

Adobe Campaign を使用すると、パーソナライズされた SMS メッセージを送信できます。

SMSを送信するための主な手順は、次のセクションで説明します。

* [Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up.html?lang=en#sending-messages)でSMSチャネルを構成する方法を説明します。
* [Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-create.html?lang=en#sending-messages)でSMS配信の作成方法を学ぶ
* オーディエンスを定義する手順の詳細は、このページ](../start/audiences.md)[に記載されています
* [Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-create.html?lang=en#defining-the-sms-content)でSMSコンテンツを定義する方法を学ぶ
* SMSの送信、監視、追跡を行うツールについては、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-send.html?lang=en#sending-messages)で説明しています
* [Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/troubleshooting-sms.html?lang=en#sending-messages)でSMS配信のトラブルシューティング方法を説明します。

SMS の送信を開始する前：

* 受信者プロファイルに少なくとも携帯電話番号が含まれていることを確認します。
* キャンペーンv8にも当てはまるAdobe Campaign Classic[配信のベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/delivery-best-practices.html?lang=en#sending-messages)を確認します。

また、SMSのプロトコルと設定についても詳しくなければなりません。 Adobe Campaign と SMPP プロバイダーの間の接続設定については、[このドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-protocol.html?lang=en#sending-messages)で確認します。

配信の作成方法のグローバル情報については、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-about-delivery-creation-steps.html?lang=en#sending-messages)を参照してください。

>[!NOTE]
>
>また、Adobe Campaign では、**Adobe Campaign モバイルアプリチャネル（NMAC）**&#x200B;オプションを使用してモバイル端末に通知を送信することもできます。
> 
>詳しくは、[この節](push.md)を参照してください。

:arrow_upper_right:詳細については、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-channel.html)を参照してください
