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
ht-degree: 64%

---

# メッセージの基本を学ぶ{#gs-ac-audiences}

Adobe Campaignでは、Eメール、SMS、プッシュ通知およびダイレクトメールを含むクロスチャネルキャンペーンを送信し、様々な専用レポートを使用してそれらの有効性を評価できます。 これらのメッセージは、デザインし、配信を介して送信します。また、受信者ごとにパーソナライズすることができます。

コア機能には、ターゲティング、メッセージの定義とパーソナライゼーション、通信の実行、関連する運用可能なレポートなどがあります。主な機能のアクセスポイントは、配信ウィザードです。このアクセスポイントから、Adobe Campaign で提供される複数の機能を使用できます。

[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-about-delivery-creation-steps.html?lang=ja)で配信を作成するための主な手順を説明します。

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

* メインターゲットへの手動でのメッセージの送信

   ![](assets/send-email.png)

   [!DNL :arrow_upper_right:] [メッセージの送信方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/sending-messages.html?lang=ja)
* [マーケティングキャンペーン](campaigns.md)に関連付けられたメッセージの送信

   ![](assets/deliveries-in-a-campaign.png)

   [!DNL :arrow_upper_right:] [キャンペーンのコンテキストでメッセージを送信する方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-deliveries.html?lang=ja)。
* [ワークフロー](../config/workflows.md)を介したメッセージの送信

   ![](assets/send-in-a-wf.png)

   [!DNL :arrow_upper_right:] [Eメール配信を自動化する方法を説明します。](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/delivery.html?lang=ja)
* [トリガー](../send/transactional.md) メッセージ
   [!DNL :arrow_upper_right:] [使用例：添付ファイルを含むトランザクションEメールの送信方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/transactional-email-with-attachments.html?lang=en)
* メッセージのスケジュール

   ![](assets/schedule-send.png)

   [!DNL :arrow_upper_right:] [使用例：誕生日のEメールのスケジュールと送信方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/deliveries/sending-a-birthday-email.html?lang=ja)


## パーソナライゼーションの追加

Adobe Campaign が配信するメッセージは、様々な方法でパーソナライズすることができます。

次の操作を行うことができます。

* 動的なパーソナライゼーションフィールドの挿入。

   [!DNL :arrow_upper_right:] パーソナライゼーションフィールドの使用方法について詳しくは、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/personalization-fields.html?lang=ja)
* 定義済みパーソナライゼーションブロックの挿入。

   [!DNL :arrow_upper_right:] パーソナライゼーションブロックとは何か、および [Campaign Classicv7ドキュメントでのパーソナライゼーションブロックの使用方法について説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/personalization-blocks.html?lang=ja)
* 条件付きコンテンツの作成。

   [!DNL :arrow_upper_right:] 条件付きコンテンツを [Campaign Classicv7ドキュメントに挿入する方法](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/conditional-content.html?lang=ja)

## トランザクションメッセージの送信

トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計された Campaign モジュールです。

[!DNL :bulb:] トランザクションメッセージ機能について詳しくは、この節を [参照してください](../dev/architecture.md#transac-msg-archi)

[!DNL :bulb:] トランザクションメッセージを設定して送信する手順について詳しくは、このページを [参照してください](../send/transactional.md)

[!DNL :arrow_upper_right:]  [Campaign Classicv7ドキュメントのエンドツーエンドの使用例でこの機能を確認する](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/transactional-email-with-attachments.html?lang=en)

## 配信とトラッキングログ

送信後に配信を監視することは、効率的で顧客に働きかけるマーケティングキャンペーンにするための重要なステップです。 配信の送信後に監視したり、配信の失敗や強制隔離がどのように管理されているかを把握したりできます。

[!DNL :arrow_upper_right:] [配信の監視方法については、この節を参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja#sending-messages)


**関連トピック**

[!DNL :arrow_upper_right:]  [配信のベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/delivery-best-practices.html?lang=ja)

[!DNL :arrow_upper_right:]  [Eメールのテストと送信](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/sending-messages.html)

[!DNL :arrow_upper_right:]  [配達確認の送信](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-validating-the-delivery.html?lang=ja)
