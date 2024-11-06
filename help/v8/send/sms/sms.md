---
title: Adobe Campaign での SMS 送信
description: Adobe Campaign での SMS の基本を学ぶ
feature: SMS
role: User, Data Engineer
level: Beginner
exl-id: e2e2922a-2058-4588-b1b5-6997f29ee663
source-git-commit: 5b2638927e39b6f839fb3a8639fe106d2c519fbf
workflow-type: tm+mt
source-wordcount: '251'
ht-degree: 79%

---

# SMS の基本を学ぶ {#gs-sms-channel}

Adobe Campaignでは、パーソナライズされた [SMS](../send/sms/sms.md) をモバイルで配信できます。

SMS メッセージの場合、テキスト形式のメッセージのみを作成、変更およびパーソナライズできます。SMS メッセージは、送信前にプレビューすることもできます。

>[!NOTE]
>
>また、Adobe Campaignを使用して、テキストや画像およびリンクを含む [LINE](../send/line.md) メッセージを送信することもできます。

Adobe Campaignで携帯電話に SMS を配信するには、次が必要です。

* **[!UICONTROL モバイル（SMS）]**&#x200B;チャネルまたは **[!UICONTROL LINE]** チャネルに設定された外部アカウント。
* この外部アカウントに正しくリンクされている SMS 配信テンプレート。

このドキュメントでは、SMS 配信を設定、送信、監視する次の手順を確認できます。

* **SMS チャネルの設定**

まず、[ミッドソーシングインフラストラクチャ](sms-mid-sourcing.md)で SMS チャネルを設定する必要があります。

<!--The steps depend on the platform: either you have [a standalone instance](sms-standalone-instance.md) or you are in [a mid-sourcing infrastructure](sms-mid-sourcing.md).-->

この設定では、[SMPP 外部アカウントパラメーター](smpp-external-account.md)と [SMS チャネルの特性](sms-channel.md)を理解する必要があります。

この設定が完了したら、[必要に応じて、SMPP 接続と、トラブルシューティングを行う方法](smpp-connection.md)を確認します。

* **最初の SMS 配信の作成**

SMS 配信の設定を開始するには：

1. 配信を作成し、[SMS 配信設定](sms-delivery-settings.md)を入力します。

1. 配信の[コンテンツを定義します](sms-content.md)。

1. [オーディエンスを選択します](sms-audience.md)。

オーディエンスを定義する手順について詳しくは、[こちらのページ](../../audiences/create-audiences.md)を参照してください。

* **SMS の検証と送信**

配信を作成したら、次の手順に従います。

1. レンダリングとコンテンツを検証するための[配達確認を送信します](sms-proofs.md)。

1. 次に、[最終的なオーディエンスに送信します](sms-send.md)。

* **SMS の監視と追跡**

送信後、[SMS の監視および追跡方法についてはこちらを参照してください](sms-monitor.md)。
