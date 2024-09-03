---
title: Adobe Campaign での SMS 送信
description: Adobe Campaign での SMS の基本を学ぶ
feature: SMS
role: User, Data Engineer
level: Beginner
badge: label="限定提供（LA）" type="Informative"
exl-id: e2e2922a-2058-4588-b1b5-6997f29ee663
source-git-commit: af1d453179c2d739eca243b435dec90a4b8e2dd5
workflow-type: tm+mt
source-wordcount: '303'
ht-degree: 20%

---

# SMS の基本を学ぶ {#gs-sms-channel}

Adobe Campaign を使用すると、パーソナライズされた SMS メッセージを送信できます。

>[!IMPORTANT]
>
>このドキュメントは、Adobe Campaign v8.7.2 以降を対象としています。
>
>古いバージョンについては、[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/en/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up/sms-set-up) を参照してください。

>[!NOTE]
>
>また、Adobe Campaign では、**Adobe Campaign モバイルアプリチャネル（NMAC）**&#x200B;オプションを使用してモバイル端末にプッシュ通知を送信することもできます。詳しくは、[この節](../push.md)を参照してください。

SMS のシンプルさと使いやすさは、数十億の端末に対する堅牢性と比類のない互換性に加えて、非常に貴重な通信チャネルになります。

SMS を送信する主な方法には、次の 2 つがあります。

* 電話から手動で送信します。 これを使えば、人と人との間で直接コミュニケーションをとることができます。
* インターネットから送信します。 Adobe Campaignはこのような方法でメッセージを送信します。 その場合、インターネットからモバイルネットワークへのブリッジを作成する SMS サービスプロバイダーが必要です。

このドキュメントでは、SMS 配信を設定、送信、監視する手順を確認できます。

* **SMS チャネルの設定**

まず、[ ミッドソーシングインフラストラクチャ ](sms-mid-sourcing.md) で SMS チャネルを設定する必要があります。

<!--The steps depend on the platform: either you have [a standalone instance](sms-standalone-instance.md) or you are in [a mid-sourcing infrastructure](sms-mid-sourcing.md).-->

この設定では、[SMPP 外部アカウントパラメーター ](smpp-external-account.md) および [SMS チャネル特性 ](sms-channel.md) を理解する必要があります。

この設定が完了したら、[SMPP 接続を確認し、必要に応じてトラブルシューティングを行う方法を理解します ](smpp-connection.md)。

* **最初の SMS 配信を作成**

SMS 配信の設定を開始するには、次の手順を実行します。

1. 配信を作成し、[SMS 配信設定 ](sms-delivery-settings.md),

1. 配信の [ コンテンツを定義 ](sms-content.md)、

1. [ オーディエンスを選択 ](sms-audience.md) します。

オーディエンスを定義する手順について詳しくは、[こちらのページ](../../audiences/create-audiences.md)を参照してください。

* **SMS の検証と送信**

配信の作成後：

1. [ 配達確認の送信 ](sms-proofs.md)：レンダリングとコンテンツを検証します。

1. 次に、[ 最終的なオーディエンスに送信 ](sms-send.md) します。

* **SMS の監視と追跡**

送信後、[SMS の監視および追跡方法を学ぶ ](sms-monitor.md) を行います。
