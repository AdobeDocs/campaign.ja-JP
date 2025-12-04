---
title: Adobe Campaign での SMS 送信
description: Adobe Campaign での SMS の基本を学ぶ
feature: SMS
role: User, Developer
level: Beginner
exl-id: e2e2922a-2058-4588-b1b5-6997f29ee663
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
workflow-type: tm+mt
source-wordcount: '187'
ht-degree: 85%

---

# SMS の基本を学ぶ {#gs-sms-channel}

Adobe Campaign を使用して、顧客のモバイルデバイスにテキストメッセージを送信します。SMS エディターからテキスト形式で、メッセージの作成、パーソナライズ、プレビューを行うことができます。

Adobe Campaign を使用してモバイルデバイスに SMS を配信するには、次が必要です。

* **[!UICONTROL モバイル（SMS）]**&#x200B;チャネルで設定された外部アカウント。[ミッドソーシングインフラストラクチャ](sms-mid-sourcing.md)での SMS チャネルの設定方法について説明します。この設定では、[SMPP 外部アカウントパラメーター](smpp-external-account.md)と [SMS チャネルの特性](sms-channel.md)を理解する必要があります。
この設定が完了したら、必要に応じて、SMPP 接続と、トラブルシューティングを行う方法を確認します。[詳細情報](smpp-connection.md)。

* この外部アカウントに正しくリンクされている SMS 配信テンプレート。


>[!NOTE]
>
>また、Adobe Campaign を使用して、[プッシュ通知](../push.md)および [LINE](../line/line.md) メッセージをモバイルデバイスに送信することもできます。
>
> 従来の SMS コネクタを使用している顧客の場合、既存の実装は引き続きサポートされます。 ただし、新しいコネクタに移動することをお勧めします。 移行をご希望の場合は、Adobeにお問い合わせください。

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
