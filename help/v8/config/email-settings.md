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
ht-degree: 100%

---

# Campaign メールチャネルの設定

## BCC でメールを送信

プラットフォームから送信された電子メールのコピーを保持するように Adobe Campaign を設定できます。

>[!NOTE]
>「BCC でメールを送信」はオプションの機能です。ライセンス契約をご確認ください。

Adobe Campaign 自体はアーカイブされたファイルを管理しません。 これにより、選択したメッセージを専用のアドレスに送信し、外部システムを使用して処理およびアーカイブできます。

これを行うには、送信された電子メールに対応する.emlファイルを、SMTP電子メールサーバーなどのリモートサーバーに転送します。 アーカイブ先は、指定する必要があるBCC電子メールアドレス(配信受信者には表示されません)です。

注意：

* BCC に設定できるメールアドレスは&#x200B;**1 つ**&#x200B;だけです。

* 正常に送信されたメールのみが対象となり、バウンスメールは含まれません。

[!DNL :speech_balloon:]Managed Cloud Services のユーザーとして「BCC でメールを送信」を Campaign で有効化する場合は、[アドビにお問い合わせ](../start/campaign-faq.md#support)ください。BCC に設定するメールアドレスをアドビ システムズにご提供いただく必要があります。

「BCC でメールを送信」を設定したら、配信テンプレートまたは「**BCC でメールを送信**」オプション経由の配信で、その機能が有効になっていることを確認します。

![](assets/email-bcc.png)


Campaign Classic v7 ドキュメントの&#x200B;**関連トピック**：


[!DNL :arrow_upper_right:] [ミラーページの生成](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#generating-mirror-page)

[!DNL :arrow_upper_right:] [メールフォーマットの選択](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#selecting-message-formats)

[!DNL :arrow_upper_right:] [文字エンコーディングの選択](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#character-encoding)

[!DNL :arrow_upper_right:] [バウンスメールアドレスの設定](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#managing-bounce-emails)

[!DNL :arrow_upper_right:] [メール配信テンプレートの使用](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-delivery-templates/about-templates.html?lang=ja)

[!DNL :arrow_upper_right:] [配信の失敗について](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/understanding-delivery-failures.html?lang=ja)
