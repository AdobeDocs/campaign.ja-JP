---
solution: Campaign v8
product: Adobe Campaign
title: Adobe Campaign での SMS 送信
description: Adobe Campaign での SMS の基本を学ぶ
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: ab7e458db5ad5696d144c17f6e89e4437a476d11
workflow-type: tm+mt
source-wordcount: '313'
ht-degree: 73%

---

# SMS の作成と送信

Adobe Campaign を使用すると、パーソナライズされた SMS メッセージを送信できます。

SMS を送信するための主な手順については、次の節で説明します。

* [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up.html?lang=ja#sending-messages)でSMSチャネルを設定する方法を説明します
* [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-create.html?lang=ja#sending-messages)でSMS配信を作成する方法を説明します
* オーディエンスを定義する手順の詳細については、[このページ](../start/audiences.md)を参照してください。
* [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-create.html?lang=ja#defining-the-sms-content)でSMSコンテンツを定義する方法を説明します
* SMSを送信、監視、および追跡するツールについては、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-send.html?lang=ja#sending-messages)を参照してください。
* [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/troubleshooting-sms.html?lang=ja#sending-messages)でSMS配信のトラブルシューティング方法を説明します

SMS の送信を開始する前：

* 受信者プロファイルに少なくとも携帯電話番号が含まれていることを確認します。
* Adobe Campaign Classic の[配信のベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/delivery-best-practices.html?lang=ja#sending-messages)を参照してください。これはキャンペーン v8 にも当てはまります。

また、SMS のプロトコルと設定についても熟知している必要があります。Adobe Campaign と SMPP プロバイダーの間の接続設定については、[このドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-protocol.html?lang=ja#sending-messages)を参照してください。

配信の作成方法に関する全体的な情報については、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-about-delivery-creation-steps.html?lang=ja#sending-messages)を参照してください。

>[!NOTE]
>
>また、Adobe Campaign では、**Adobe Campaign モバイルアプリチャネル（NMAC）**&#x200B;オプションを使用してモバイル端末に通知を送信することもできます。
> 
>詳しくは、[この節](push.md)を参照してください。

[!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-channel.html?lang=ja)
