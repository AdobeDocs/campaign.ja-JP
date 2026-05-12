---
title: Adobe Campaign での SMS 送信
description: Adobe Campaign での SMS の基本を学ぶ
feature: SMS
role: User, Developer
level: Beginner
exl-id: e2e2922a-2058-4588-b1b5-6997f29ee663
TQID: https://experienceleague.adobe.com/7ChOYJmYScxaAoqnruyMv-8n0AkXgYAIlt1783hTjvY
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
level_v2: id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2: id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 176
ht-degree: 92%

---

# SMS の基本を学ぶ {#gs-sms-channel}

Adobe Campaign を使用して、顧客のモバイルデバイスにテキストメッセージを送信します。 SMS エディターからテキスト形式で、メッセージの作成、パーソナライズ、プレビューを行うことができます。

Adobe Campaign を使用してモバイルデバイスに SMS を配信するには、次が必要です。

* **[!UICONTROL モバイル（SMS）]**&#x200B;チャネルで設定された外部アカウント。 [ミッドソーシングインフラストラクチャ](sms-mid-sourcing.md)での SMS チャネルの設定方法について説明します。 この設定では、[SMPP 外部アカウントパラメーター](smpp-external-account.md)と [SMS チャネルの特性](sms-channel.md)を理解する必要があります。
この設定が完了したら、必要に応じて、SMPP 接続と、トラブルシューティングを行う方法を確認します。 [詳細情報](smpp-connection.md)。

* この外部アカウントに正しくリンクされている SMS 配信テンプレート。

Adobe Campaignでは、お客様にSMS メッセージを送信するために使用される2つのSMS コネクタをサポートしています。 [詳細情報](sms-connectors.md)。

>[!NOTE]
>
>また、Adobe Campaign を使用して、[プッシュ通知](../push.md)および [LINE](../line/line.md) メッセージをモバイルデバイスに送信することもできます。

<table style="table-layout:fixed"><tr style="border: 0;">
<td>
<a href="create-sms.md">
<img alt="SMS の作成" src="../../assets/do-not-localize/sms-sending.jpg">
</a>
<div><a href="create-sms.md"><strong>SMS 配信の作成</strong>
</div>
<p>
</td>
<td>
<a href="sms-content.md">
<img alt="SMS コンテンツ" src="../../assets/do-not-localize/sms-create.jpeg">
</a>
<div>
<a href="sms-content.md"><strong>SMS コンテンツの定義</strong></a>
</div>
<p></td>
<td>
<a href="sms-audience.md">
<img alt="SMS オーディエンス" src="../../assets/do-not-localize/sms-opt-out.jpg">
</a>
<div>
<a href="sms-audience.md"><strong>オーディエンスの選択</strong></a>
</div>
<p>
</td>
<td>
<a href="smpp-external-account.md">
<img alt="SMS 設定" src="../../assets/do-not-localize/sms-config.jpg">
</a>
<div>
<a href="smpp-external-account.md"><strong>SMS チャネルの設定</strong></a>
</div>
<p>
</td>
</tr></table>
