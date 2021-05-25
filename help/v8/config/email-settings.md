---
solution: Campaign v8
product: Adobe Campaign
title: CampaignのEメールチャネル設定
description: CampaignのEメールチャネル設定
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '237'
ht-degree: 44%

---

# CampaignのEメールチャネル設定

## BCC で E メールを送信

プラットフォームから送信された電子メールのコピーを保持するようにAdobe Campaignを設定できます。

>[!NOTE]
>「BCCでEメールを送信」機能はオプションです。 使用許諾契約書を確認してください。

Adobe Campaign自体は、アーカイブされたファイルを管理しません。 これにより、選択したメッセージを専用のアドレスに送信し、外部システムを使用して処理およびアーカイブできます。

これを行うには、送信された電子メールに対応する.emlファイルを、SMTP電子メールサーバーなどのリモートサーバーに転送します。 アーカイブ先は、指定する必要があるBCC電子メールアドレス(配信受信者には表示されません)です。

注意：

* **1つの** BCC電子メールアドレスのみを使用できます。

* 正常に送信された電子メールのみが考慮され、バウンスは考慮されません。

:speech_balloon:管理対象Cloud Servicesのユーザーとして、[Adobe](../start/campaign-faq.md#support)に連絡し、CampaignでEメールのBCCを有効にします。 選択したBCC電子メールアドレスは、ユーザーに設定を依頼するAdobeチームに提供する必要があります。

EメールBCCを設定したら、配信テンプレートまたは配信で、「**BCCでEメールを送信**」オプションを使用してこの機能が有効になっていることを確認します。

![](assets/email-bcc.png)


**関連するト** ピックCampaign Classicv7ドキュメント：

* [Eメール配信テンプレートの使用](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-delivery-templates/about-templates.html)
* [Eメールパラメーターの確認](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html)
* [配信失敗について](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/understanding-delivery-failures.html)
