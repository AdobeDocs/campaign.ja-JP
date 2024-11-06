---
title: Adobe Campaign での SMS 送信
description: Adobe Campaign での SMS の基本を学ぶ
feature: SMS
role: User, Data Engineer
level: Beginner
exl-id: e2e2922a-2058-4588-b1b5-6997f29ee663
source-git-commit: c95bdc13237e67b885b6f9aa495a4753ca72a90e
workflow-type: tm+mt
source-wordcount: '160'
ht-degree: 19%

---

# SMS の基本を学ぶ {#gs-sms-channel}

Adobe Campaignを使用すると、顧客のモバイルデバイスにテキストメッセージを送信できます。 SMS エディターで、テキスト形式のメッセージの作成、パーソナライズおよびプレビューを行うことができます。

Adobe Campaignを使用してモバイルデバイスに SMS を配信するには、次のものが必要です。

* **[!UICONTROL モバイル （SMS）]** チャネルで設定された外部アカウント。 [ ミッドソーシングインフラストラクチャ ](sms-mid-sourcing.md) で SMS チャネルを設定する方法を説明します。 この設定では、[SMPP 外部アカウントパラメーター ](smpp-external-account.md) および [SMS チャネル特性 ](sms-channel.md) を理解する必要があります。
この設定が完了したら、SMPP 接続を確認し、必要に応じてトラブルシューティングを行う方法を把握します。 [詳細情報](smpp-connection.md)。

* この外部アカウントに正しくリンクされている SMS 配信テンプレート。


>[!NOTE]
>
>また、Adobe Campaignを使用して、テキストや画像およびリンクを含む [LINE](../../send/line.md) メッセージを送信することもできます。


<table style="table-layout:fixed"><tr style="border: 0;">
<td>
<a href="create-sms.md">
<img alt="SMS を作成" src="../../assets/do-not-localize/sms-sending.jpg">
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
<a href="sms-content.md"><strong>SMS コンテンツの定義 </strong></a>
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
