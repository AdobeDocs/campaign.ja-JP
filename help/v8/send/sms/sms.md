---
title: Adobe Campaign での SMS 送信
description: Adobe Campaign での SMS の基本を学ぶ
feature: SMS
role: User, Data Engineer
level: Beginner
badge: label="限定提供（LA）" type="Informative"
exl-id: e2e2922a-2058-4588-b1b5-6997f29ee663
source-git-commit: af1d453179c2d739eca243b435dec90a4b8e2dd5
workflow-type: ht
source-wordcount: '303'
ht-degree: 100%

---

# SMS の基本を学ぶ {#gs-sms-channel}

Adobe Campaign を使用すると、パーソナライズされた SMS メッセージを送信できます。

>[!IMPORTANT]
>
>このドキュメントは、Adobe Campaign v8.7.2 以降を対象としています。
>
>以前のバージョンについて詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up/sms-set-up)を参照してください。

>[!NOTE]
>
>また、Adobe Campaign では、**Adobe Campaign モバイルアプリチャネル（NMAC）**&#x200B;オプションを使用してモバイル端末にプッシュ通知を送信することもできます。詳しくは、[この節](../push.md)を参照してください。

SMS は、その堅牢性と数十億台の端末にわたる比類のない互換性に加え、そのシンプルさと使いやすさにより、非常に価値のある通信チャネルとなっています。

SMS を送信するには、主に次の 2 つの方法があります。

* 電話から手動で送信する。人と人との間で直接通信する通常の方法です。
* インターネットから送信する。Adobe Campaign がメッセージ送信に使用する方法です。この方法では、インターネットからモバイル ネットワークへの橋渡しとなる SMS サービスプロバイダーが必要です。

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
