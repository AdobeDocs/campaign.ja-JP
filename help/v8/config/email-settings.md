---
product: Adobe Campaign
title: Campaign メールチャネルの設定
description: Campaign メールチャネルの設定
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: 5363950db5092bc7e0a72a0823db1132a17dda33
workflow-type: tm+mt
source-wordcount: '278'
ht-degree: 60%

---

# Campaign メールチャネルの設定

## BCC でメールを送信

プラットフォームから送信された電子メールのコピーを保持するようにAdobe Campaignを設定できます。

>[!NOTE]
>「BCCでEメールを送信」機能はオプションです。 ライセンス契約をご確認ください。

Adobe Campaign自体は、アーカイブされたファイルを管理しません。 これにより、選択したメッセージを専用のアドレスに送信し、外部システムを使用して処理およびアーカイブできます。

これを行うには、送信された電子メールに対応する.emlファイルを、SMTP電子メールサーバーなどのリモートサーバーに転送します。 アーカイブ先は、指定する必要があるBCC電子メールアドレス(配信受信者には表示されません)です。

注意：

* **1つの** BCC電子メールアドレスのみを使用できます。

* 正常に送信されたメールのみが対象であり、バウンスメールは含まれません。

[!DNL :speech_balloon:] 管理対象Cloud Servicesユーザーとして、Adobeに連絡 [し、Campaign](../start/campaign-faq.md#support) でEメールのBCCを有効化してもらいます。BCC に設定するメールアドレスをアドビ システムズにご提供いただく必要があります。

「BCC で E メールを送信」を設定したら、配信テンプレートまたは「**BCC で E メールを送信**」オプションの配信で、その機能が有効になっていることを確認します。

![](assets/email-bcc.png)


**関連するト** ピックCampaign Classicv7ドキュメント：


[!DNL :arrow_upper_right:] [ミラーページの生成](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html#generating-mirror-page)

[!DNL :arrow_upper_right:] [Eメール形式の選択](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html#selecting-message-formats)

[!DNL :arrow_upper_right:] [文字エンコーディングの選択](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html#character-encoding)

[!DNL :arrow_upper_right:] [バウンスの電子メールアドレスの設定](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html#managing-bounce-emails)

[!DNL :arrow_upper_right:] [Eメール配信テンプレートの使用](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-delivery-templates/about-templates.html?lang=ja)

[!DNL :arrow_upper_right:] [配信失敗について](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/understanding-delivery-failures.html)
