---
title: Adobe Campaign での SMS 送信
description: Adobe Campaign での SMS の基本を学ぶ
feature: SMS
role: Data Engineer
level: Beginner
exl-id: e2e2922a-2058-4588-b1b5-6997f29ee663
source-git-commit: 8eb92dd1cacc321fc79ac4480a791690fc18511c
workflow-type: ht
source-wordcount: '0'
ht-degree: 100%

---

# SMS の作成と送信

Adobe Campaign を使用すると、パーソナライズされた SMS メッセージを送信できます。

![](../assets/do-not-localize/book.png)SMS チャネルの使用を開始する方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-channel.html?lang=ja){target=&quot;_blank&quot;}を参照してください

>[!NOTE]
>
>また、Adobe Campaign では、**Adobe Campaign モバイルアプリチャネル（NMAC）**&#x200B;オプションを使用してモバイル端末に通知を送信することもできます。詳しくは、[この節](push.md)を参照してください。

## SMS チャネルの設定

携帯電話に送信するには、次が必要です。

* コネクタとメッセージのタイプを指定する外部アカウント。

* この外部アカウントの参照元となる配信テンプレート。

![](../assets/do-not-localize/book.png) SMS チャネルの設定方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up.html?lang=ja#sending-messages){target=&quot;_blank&quot;}を参照してください

SMS の送信を開始する前：

* 受信者プロファイルに少なくとも携帯電話番号が含まれていることを確認します。
* Adobe Campaign Classic の[配信のベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/delivery-best-practices.html?lang=ja#sending-messages){target=&quot;_blank&quot;}を参照してください。これは Campaign v8 にも当てはまります。

また、SMS のプロトコルと設定についても熟知している必要があります。Adobe Campaign と SMPP プロバイダーの間の接続設定については、[このドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-protocol.html?lang=ja#sending-messages){target=&quot;_blank&quot;}で確認します。

## 最初の SMS 配信の作成

1. 新しい配信を作成するには、「**[!UICONTROL Campaigns]**」タブで「**[!UICONTROL 配信]**」、既存の配信リストの上にある「**[!UICONTROL 作成]**」ボタンの順にクリックします。

   ![](assets/delivery_step_1.png)

   ![](../assets/do-not-localize/book.png) 配信の作成方法に関する全般的な情報については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-about-delivery-creation-steps.html?lang=ja#sending-messages){target=&quot;_blank&quot;}を参照してください。

1. SMS 配信を送信するための、関連する外部アカウントを参照する配信テンプレートを選択します。

   ![](assets/sms-template-list.png)

   ![](../assets/do-not-localize/book.png)SMPP 外部アカウントの作成方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up.html?lang=ja#creating-an-smpp-external-account){target=&quot;_blank&quot;}を参照してください

   ![](../assets/do-not-localize/book.png)モバイルに配信する配信テンプレートを作成する方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up.html?lang=ja#changing-the-delivery-template){target=&quot;_blank&quot;}を参照してください

1. ラベル、コードおよび説明を設定して配信を識別します。

1. 「**[!UICONTROL 続行]**」をクリックして確認すると、メッセージ設定ウィンドウが表示されます。

1. 必要に応じて、ウィザードの「**[!UICONTROL テキストコンテンツ]**」セクションに、パーソナライゼーションフィールドを含めたメッセージの内容を入力します。

   ![](assets/sms-content.png)

1. ターゲット母集団の選択.

SMS を作成およびデザインするための主な手順については、Campaign Classic v7 ドキュメントで詳しく説明しています。

* SMS の作成

   ![](../assets/do-not-localize/book.png) [SMS 配信の作成方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-create.html?lang=ja#sending-messages){target=&quot;_blank&quot;}

* SMS コンテンツのデザイン

   ![](../assets/do-not-localize/book.png) [SMS コンテンツのデザイン方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-create.html?lang=ja#defining-the-sms-content){target=&quot;_blank&quot;}

* メールのオーディエンスを選択

   ![](../assets/do-not-localize/book.png) [ターゲット母集団の定義方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-defining-the-target-population.html?lang=ja){target=&quot;_blank&quot;}

![](../assets/do-not-localize/glass.png)オーディエンスを定義する手順について詳しくは、[このページ](../start/audiences.md)を参照してください。

## SMS のテスト

パーソナライゼーションを使用したメッセージのレンダリングを表示するには、「**[!UICONTROL プレビュー]**」をクリックし、受信者を選択します。

![](assets/sms-preview.png)

配達確認を送信するには、次の Campaign Classic v7 ドキュメントの節を参照してください。

* 配信の検証と配達確認の送信
   ![](../assets/do-not-localize/book.png) [配信を検証するための主な手順を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-validating-the-delivery.html?lang=ja){target=&quot;_blank&quot;}
* シードアドレスの追加
   ![](../assets/do-not-localize/book.png) [シードアドレスについて学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-seed-addresses/about-seed-addresses.html?lang=ja){target=&quot;_blank&quot;}

## SMS 配信の送信および監視

SMS を送信および監視する主な手順については、Campaign Classic v7 ドキュメントで詳しく説明しています。

* SMS 配信の送信、監視、追跡

   ![](../assets/do-not-localize/book.png) [SMS を送信、監視、および追跡するツールについて学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-send.html?lang=ja#sending-messages){target=&quot;_blank&quot;}

* SMS 配信のトラブルシューティング

   ![](../assets/do-not-localize/book.png) [SMS のトラブルシューティングについて学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/troubleshooting-sms.html?lang=ja#sending-messages){target=&quot;_blank&quot;}
