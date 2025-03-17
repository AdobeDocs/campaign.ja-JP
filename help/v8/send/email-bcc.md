---
title: BCC アドレスに対するメッセージのコピーの送信
description: Adobe Campaign で「BCC でメールを送信」をアクティブ化する方法について説明します
feature: Email
role: User
level: Beginner
exl-id: 35702b81-1984-4a62-8f00-c2bc32ab2b42
source-git-commit: 286af4739c33b79c74b3cb7fa90ad167670a4b4c
workflow-type: tm+mt
source-wordcount: '385'
ht-degree: 89%

---

# BCC アドレスに対するメッセージのコピーの送信 {#bcc}

<!--
>[!NOTE]
>
>This capability is available starting Campaign v8.3. To check your version, refer to [this section](../start/compatibility-matrix.md#how-to-check-your-campaign-version-and-buildversion)-->

## 「BCC でメールを送信」について {#gs-bcc}

プラットフォームから送信されたメールのコピーを保持するように Adobe Campaign を設定できます。このオプションを使用すると、専用の BCC （ブラインドカーボンコピー）メールアドレスをメッセージに送信でき、外部システムを使用してメッセージを処理およびアーカイブできます。

>[!CAUTION]
>
>プライバシー上の理由から、BCC メールは、個人の身元を特定できる情報（PII）を安全に保存できるアーカイブシステムで処理する必要があります。

Adobe Campaign 自体はアーカイブされたファイルを管理しません。送信された電子メールに対応する .eml ファイルは、SMTP 電子メールサーバーなどのリモートサーバーに転送できます。

アーカイブ先は選択した BCC メールアドレスです。配信の受信者には表示されません。BCC メールアドレスを定義したら、[配信テンプレート](create-templates.md)レベルで専用オプションを有効にする必要があります。

>[!NOTE]
>
>Managed Cloud Services のユーザーは、[アドビに連絡](../start/campaign-faq.md#support){target="_blank"}して、アーカイブに使用する BCC メールアドレスを伝えてください。

## 「BCC でメールを送信」を有効にする {#enable-bcc}

特定の[配信テンプレート](create-templates.md)に対して BCC を有効にするには、次の手順に従います。

1. Campaign エクスプローラーから、配信テンプレートフォルダーを参照します。デフォルトでは、配信テンプレートは&#x200B;**[!UICONTROL リソース]**／**[!UICONTROL テンプレート]**／**[!UICONTROL 配信テンプレート]**&#x200B;フォルダーに保存されます。
1. 配信テンプレートを編集して BCC で更新します。
1. 「**[!UICONTROL プロパティ]**」ボタンをクリックします。
1. 「**[!UICONTROL 配信]**」タブで、「**[!UICONTROL Momentum 強化機能を使用して BCC でメールを送信]**」オプションをオンにします。

   ![](assets/email-bcc.png)

1. 「**[!UICONTROL OK]**」をクリックして確定します。

このテンプレートに基づく各配信に対するすべての送信済みメッセージのコピーが、プラットフォームに設定済みの「BCC でメールを送信」アドレスに送信されます。

## ガードレールとレコメンデーション {#recommendations-bcc}

Adobe Campaign で「BCC でメールを送信」を使用する場合、次のガードレールとレコメンデーションが適用されます。

* BCC に設定できるメールアドレスは 1 つだけです。

* BCC アドレスに、送信されるすべてのメールをアーカイブするだけの受信容量があることを確認します。

* BCC でメールを送信<!--with Enhanced MTA-->は、受信者に配信する前に BCC メールアドレスに配信することで、元の配信がバウンスした場合でも BCC メッセージが送信される可能性があります。バウンスについて詳しくは、[配信エラーについて](delivery-failures.md)を参照してください。

* BCC アドレスに送信されたメールは、開封やクリックスルーしないでください。これらのアクティビティは、送信分析の&#x200B;**[!UICONTROL 合計開封数]**&#x200B;と&#x200B;**[!UICONTROL クリック数]**&#x200B;に含められるので、計算の誤りの原因となる可能性があります。

<!--Only successfully sent emails are taken in account, bounces are not.-->
