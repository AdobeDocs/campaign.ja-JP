---
product: Adobe Campaign
title: メッセージの基本を学ぶ
description: メッセージの基本を学ぶ
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 6cf8a929-637e-4e51-9160-5980ca727efb
source-git-commit: 9cb1b38456601bce21d458fea42a5c112d9fafb4
workflow-type: tm+mt
source-wordcount: '600'
ht-degree: 97%

---

# メッセージの基本を学ぶ{#gs-ac-audiences}

Adobe Campaign を使用すると、メール、SMS、プッシュ通知、ダイレクトメールなどのクロスチャネルキャンペーンを送信し、各種の専用レポートを使用してキャンペーンの有効性を評価できます。これらのメッセージは、デザインし、配信を介して送信します。また、受信者ごとにパーソナライズすることができます。

コア機能には、ターゲティング、メッセージの定義とパーソナライゼーション、通信の実行、関連する運用可能なレポートなどがあります。主な機能のアクセスポイントは、配信ウィザードです。このアクセスポイントから、Adobe Campaign で提供される複数の機能を使用できます。

配信を作成するための主な手順については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-about-delivery-creation-steps.html?lang=ja)を参照してください。

Adobe Campaign v8 には、次の配信チャネルが付属しています。

* **E メールチャネル**：E メール配信では、パーソナライズされた E メールをターゲット母集団に送信できます。詳しくは、[このページ](../send/email.md)を参照してください。

* **ダイレクトメールチャネル**：ダイレクトメール配信では、ターゲット母集団に関するデータを含んだ抽出ファイルを生成できます。詳しくは、[このページ](../send/direct-mail.md)を参照してください。

* **モバイルチャネル**：モバイルチャネル経由の配信では、パーソナライズされた SMS または LINE メッセージをターゲット母集団に送信できます。詳しくは、[このページ](../send/sms.md)を参照してください。

* **モバイルアプリケーションチャネル**：モバイルアプリ配信では、通知を iOS システムおよび Android システムに送信できます。詳しくは、[このページ](../send/push.md)を参照してください。

<!--
* **LINE channel**: LINE deliveries let you send messages on LINE, an instant messaging application available on all smartphones. Learn more in [this page](../send/line.md)
-->

## メッセージの送信方法の選択

メッセージを作成し、体裁を整えてテストしたら、送信方法を選択できます。 Campaign は、次の一連の機能を備えています。

* メインターゲットへの手動によるメッセージ送信

   ![](assets/send-email.png)

   [!DNL :arrow_upper_right:] [メッセージの送信方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/sending-messages.html?lang=ja)
* [マーケティングキャンペーン](campaigns.md)に関連付けられたメッセージの送信

   ![](assets/deliveries-in-a-campaign.png)

   [!DNL :arrow_upper_right:] [キャンペーンの状況に応じてメッセージを送信する方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-deliveries.html?lang=ja)。
* [ワークフロー](../config/workflows.md)を介したメッセージの送信

   ![](assets/send-in-a-wf.png)

   [!DNL :arrow_upper_right:] [メール配信を自動化する方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/delivery.html?lang=ja)
* イベントからの[メッセージのトリガー](../send/transactional.md)
   [!DNL :arrow_upper_right:] [ユースケース：ファイルが添付されたトランザクションメールの送信方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/transactional-email-with-attachments.html?lang=en)
* メッセージのスケジュール設定

   ![](assets/schedule-send.png)

   [!DNL :arrow_upper_right:] [ユースケース：誕生日メールのスケジュール設定と送信方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/deliveries/sending-a-birthday-email.html?lang=ja)


## パーソナライゼーションの追加

Adobe Campaign が配信するメッセージは、様々な方法でパーソナライズすることができます。

次の操作を行うことができます。

* 動的なパーソナライゼーションフィールドを挿入する。
   [!DNL :arrow_upper_right:] パーソナライゼーションフィールドの使用方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/personalization-fields.html?lang=ja)を参照してください
* 事前に定義されたパーソナライゼーションブロックを挿入する。
   [!DNL :arrow_upper_right:] パーソナライゼーションブロックの詳細と使用方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/personalization-blocks.html?lang=ja)を参照してください
* 条件付きコンテンツを作成する。
   [!DNL :arrow_upper_right:] 条件付きコンテンツの挿入方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/conditional-content.html?lang=ja)を参照してください

## トランザクションメッセージの送信

トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計された Campaign モジュールです。

[!DNL :bulb:] トランザクションメッセージ機能の詳細については、[この節](../dev/architecture.md#transac-msg-archi)を参照してください

[!DNL :bulb:] トランザクションメッセージの設定と送信の手順については、[このページ](../send/transactional.md)を参照してください

[!DNL :arrow_upper_right:] [Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/transactional-email-with-attachments.html?lang=en)でこの機能のエンドツーエンドのユースケースを確認する

## 配信とトラッキングログ

送信後に配信を監視することは、効率的で顧客に働きかけるマーケティングキャンペーンにするための重要なステップです。 配信の送信後に監視したり、配信の失敗や強制隔離がどのように管理されているかを把握したりできます。

[!DNL :arrow_upper_right:] 配信の監視方法については、[この節](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja#sending-messages)を参照してください


**関連トピック**

[!DNL :arrow_upper_right:] [配信のベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/delivery-best-practices.html?lang=ja)

[!DNL :arrow_upper_right:] [メールのテストと送信](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/sending-messages.html)

[!DNL :arrow_upper_right:] [配達確認の送信](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-validating-the-delivery.html?lang=ja)
