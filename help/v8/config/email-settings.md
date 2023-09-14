---
title: Campaign メールチャネルの設定
description: Campaign メールチャネルの設定
feature: Email
role: User
level: Intermediate, Experienced
exl-id: e4e3fb49-9942-4e2d-a020-557d1ac5dcdc
source-git-commit: 1baeb8827a0eab4f9487bb5e5afe4d779e00efe4
workflow-type: tm+mt
source-wordcount: '430'
ht-degree: 100%

---

# Campaign メールチャネルの設定

## BCC でメールを送信 {#email-bcc}

<!--
>[!NOTE]
>
>This capability is available starting Campaign v8.3. To check your version, refer to [this section](../start/compatibility-matrix.md#how-to-check-your-campaign-version-and-buildversion)-->

プラットフォームから送信された電子メールのコピーを保持するように Adobe Campaign を設定できます。

Adobe Campaign 自体はアーカイブされたファイルを管理しません。これにより、選択したメッセージを専用の BCC（ブラインドカーボンコピー）メールアドレスに送信し、外部システムを使用して処理およびアーカイブできます。送信された電子メールに対応する .eml ファイルは、SMTP 電子メールサーバーなどのリモートサーバーに転送できます。

>[!CAUTION]
>
>プライバシー上の理由から、BCC 電子メールは、個人の身元を特定できる情報（PII）を安全に保存できるアーカイブシステムで処理する必要があります。

アーカイブ先は選択した BCC メールアドレスです。配信の受信者には表示されません。

![](../assets/do-not-localize/speech.png) Managed Cloud Services のユーザーは、[アドビに連絡](../start/campaign-faq.md#support){target="_blank"}して、アーカイブに使用する BCC メールアドレスを伝えてください。

BCC メールアドレスを定義したら、配信レベルで専用オプションを有効にする必要があります。

>[!CAUTION]
>
>新しい配信または配信テンプレートを作成する場合、**[!UICONTROL BCC でメールを送信]**&#x200B;はデフォルトで有効になっていません。メール配信または配信テンプレートで手動で有効にする必要があります。


これを行うには、次の手順に従います。

1. **[!UICONTROL キャンペーン管理]**／**[!UICONTROL 配信]**&#x200B;または&#x200B;**[!UICONTROL リソース]**／**[!UICONTROL テンプレート]**／**[!UICONTROL 配信テンプレート]**&#x200B;に移動します。
1. **[!UICONTROL 目的の配信を選択します。または、標準のメール配信]**&#x200B;テンプレートを複製して、複製されたテンプレートを選択します。
1. 「**[!UICONTROL プロパティ]**」ボタンをクリックします。
1. 「**[!UICONTROL 配信]**」タブを選択します。
1. 「**[!UICONTROL BCC でメールを送信]**」オプションを選択します。

   ![](assets/email-bcc.png)

1. 「**[!UICONTROL OK]**」を選択します。

このテンプレートに基づく各配信に対するすべての送信済みメッセージのコピーが、設定された「BCC でメールを送信」アドレスに送信されます。

次の特性と推奨事項に注意してください。

* BCC に設定できるメールアドレスは 1 つだけです。

* BCC アドレスに、送信されるすべてのメールをアーカイブするだけの受信容量があることを確認します。

* BCC でメールを送信<!--with Enhanced MTA-->は、受信者に配信する前に BCC メールアドレスに配信することで、元の配信がバウンスした場合でも BCC メッセージが送信される可能性があります。バウンスについて詳しくは、[配信エラーについて](../send/delivery-failures.md)を参照してください。

* BCC アドレスに送信されたメールが開封され、クリックされた場合は、送信分析の&#x200B;**[!UICONTROL 合計開封数]**&#x200B;と&#x200B;**[!UICONTROL クリック数]**&#x200B;に含められるため、計算の誤りの原因となる可能性があります。

<!--Only successfully sent emails are taken in account, bounces are not.-->

**詳細情報**

次の節を参照してください。

* [メール配信テンプレートの使用](../send/create-templates.md)

* [配信の失敗について](../send/delivery-failures.md)


次の Campaign Classic v7 ドキュメントも参照してください。

* [メールフォーマットの選択](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#selecting-message-formats){target="_blank"}

* [文字エンコーディングの選択](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#character-encoding){target="_blank"}

* [バウンスメールアドレスの設定](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/email-parameters.html?lang=ja#managing-bounce-emails){target="_blank"}

