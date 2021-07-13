---
product: Adobe Campaign
title: Campaign メールチャネルの設定
description: Campaign メールチャネルの設定
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: c61d8aa8e0a68ccc81a6141782f860daf061bc61
workflow-type: tm+mt
source-wordcount: '290'
ht-degree: 93%

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

??管理対象Cloud Servicesのユーザーとして、[Adobe](../start/campaign-faq.md#support)に連絡し、CampaignでEメールのBCCを有効にします。 BCC に設定するメールアドレスをアドビ システムズにご提供いただく必要があります。

「BCC でメールを送信」を設定したら、配信テンプレートまたは「**BCC でメールを送信**」オプション経由の配信で、その機能が有効になっていることを確認します。

![](assets/email-bcc.png)


Campaign Classic v7 ドキュメントの&#x200B;**関連トピック**：


↗️ [ミラーページ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#generating-mirror-page){target=&quot;_blank&quot;}を生成します

↗️ [メールフォーマットの選択](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#selecting-message-formats){target=&quot;_blank&quot;}

↗️ [文字エンコーディングの選択](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#character-encoding){target=&quot;_blank&quot;}

↗️ [バウンスメールアドレスの設定](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#managing-bounce-emails){target=&quot;_blank&quot;}

↗️ [メール配信テンプレートの使用](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-delivery-templates/about-templates.html?lang=ja){target=&quot;_blank&quot;}

↗️ [配信エラーについて](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/understanding-delivery-failures.html?lang=ja){target=&quot;_blank&quot;}
