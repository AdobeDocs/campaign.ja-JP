---
solution: Campaign
product: Adobe Campaign
title: キャンペーン電子メールチャネルの設定
description: キャンペーン電子メールチャネルの設定
feature: 概要
role: Data Engineer
level: Beginner
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '221'
ht-degree: 53%

---

# キャンペーン電子メールチャネルの設定

## BCC で E メールを送信

プラットフォームから送信された電子メールのコピーを保持するようにAdobe Campaignを設定できます。

ただし、Adobe Campaign自体はアーカイブされたファイルを管理しません。 これにより、選択したメッセージを専用のアドレスに送信し、外部システムを使用して処理およびアーカイブできます。

これを行うには、送信された電子メールに対応する.emlファイルを、SMTP電子メールサーバーなどのリモートサーバーに転送します。 アーカイブ先は、指定する必要があるBCC電子メールアドレス(配信受信者には表示されません)です。

注意：

* BCC電子メールアドレスは1つだけ使用できます。

* 正常に送信された電子メールのみが考慮され、バウンスは考慮されません。

電子メールBCCを設定したら、配信テンプレートまたは配信で、**電子メールBCC**&#x200B;オプションを使用してこの機能が有効になっていることを確認します。

:arrow_upper_right:詳しくは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=en#email-bcc)を参照してください

**注意**:電子メールBCC機能はオプションです。使用許諾契約書を確認してください。

:speech_balloon:管理対象Cloud Servicesのユーザーとして、[Adobe](../start/support.md#support)に連絡して、キャンペーンの電子メールBCCをアクティブにします。 選択したBCC電子メールアドレスは、その設定を行うAdobeチームに提供する必要があります。