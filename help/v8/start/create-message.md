---
solution: Campaign v8
product: Adobe Campaign
title: メッセージの基本を学ぶ
description: メッセージの基本を学ぶ
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 6cf8a929-637e-4e51-9160-5980ca727efb
source-git-commit: c659c31c15916077e71c63f3b3f4ca135d4d7f7d
workflow-type: tm+mt
source-wordcount: '666'
ht-degree: 21%

---

# メッセージの概要{#gs-ac-audiences}

Adobe Campaignでは、Eメール、SMS、プッシュ通知およびダイレクトメールを含むクロスチャネルキャンペーンを送信し、様々な専用レポートを使用してそれらの有効性を評価できます。 これらのメッセージは、デザインし、配信を介して送信します。また、受信者ごとにパーソナライズすることができます。

コア機能には、ターゲティング、メッセージの定義とパーソナライゼーション、通信の実行、関連する運用可能なレポートなどがあります。主な機能アクセスポイントは、配信アシスタントです。 ここから、Adobe Campaign で提供される複数の機能にアクセスします。

[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-about-delivery-creation-steps.html)で配信を作成するための主な手順を説明します。

Adobe Campaign v8には、次の配信チャネルが付属しています。

* **E メールチャネル**：E メール配信によって、ターゲット母集団にパーソナライズされた E メールを送信できます。詳しくは、[このページ](../send/email.md)を参照してください。

* **ダイレクトメールチャネル**：ダイレクトメール配信によって、ターゲット母集団に関するデータを含む抽出ファイルを生成できます。詳しくは、[このページ](../send/direct-mail.md)を参照してください。

* **モバイルチャネル**:モバイルチャネルでの配信により、ターゲット母集団にパーソナライズされたSMSを送信できます。詳しくは、[このページ](../send/sms.md)を参照してください。

* **モバイルアプリケーションチャネル**：モバイルアプリ配信では通知を iOS システムおよび Android システムに送信できます。詳しくは、[このページ](../send/push.md)を参照してください。

<!--
* **LINE channel**: LINE deliveries let you send messages on LINE, an instant messaging application available on all smartphones. Learn more in [this page](../send/line.md)
-->

## メッセージの送信方法の選択

メッセージを作成し、そのコンテンツをデザインおよびテストしたら、メッセージの送信方法を選択できます。 Campaignには、次の一連の機能が用意されています。

* メインターゲットへの手動でのメッセージの送信
:arrow_upper_right:[メッセージの送信方法を説明します。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/sending-messages.html)
* [マーケティングキャンペーン](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/setting-up-marketing-campaigns.html)に関連付けられたメッセージの送信
:arrow_upper_right:[キャンペーン](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-deliveries.html)のコンテキストでメッセージを送信する方法を説明します。
* [ワークフロー](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html)を介したメッセージの送信
:arrow_upper_right:[Eメール配信を自動化する方法を説明します。](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/delivery.html)
* [トリガー](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/introduction/about-transactional-messaging.html) メッセージ：arrow_upper_right: [使用例：添付ファイルを含むトランザクションEメールの送信方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/use-case/transactional-email-with-attachments.html)
* メッセージのスケジュール
:arrow_upper_right:[使用例：スケジュールを設定して誕生日のeメールを送信する方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/deliveries/sending-a-birthday-email.html?)


## パーソナライゼーションを追加

Adobe Campaignが配信するメッセージは、様々な方法でパーソナライズできます。

次の操作をおこなうことができます。

* パーソナライゼーションフィールドの動的な挿入：:arrow_upper_right:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/personalization-fields.html)のパーソナライゼーションフィールドの使用方法を説明します
* 定義済みパーソナライゼーションブロックの挿入：:arrow_upper_right:パーソナライゼーションブロックとは何か、および[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/personalization-blocks.html)でパーソナライゼーションブロックを使用する方法を説明します
* 条件付きコンテンツの作成：:arrow_upper_right:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/conditional-content.html)に条件付きコンテンツを挿入する方法を説明します

## トランザクションメッセージの送信

トランザクションメッセージ(Message Center)は、トリガーメッセージを管理するために設計されたCampaignモジュールです。

:bulb:トランザクションメッセージ機能の詳細については、[この節](../dev/architecture.md#transac-msg-archi)を参照してください。

:bulb:トランザクションメッセージを設定して送信する手順について詳しくは、[このページ](../send/transactional.md)を参照してください。

:arrow_upper_right:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/use-case/transactional-email-with-attachments.html?lang=en#transactional-messaging)のエンドツーエンドの使用例で、この機能を確認します。

## 配信ログとトラッキングログ

送信後に配信を監視することは、マーケティングキャンペーンを効率的にし、お客様に連絡を取るための重要なステップです。配信の送信後に監視でき、配信の失敗と強制隔離の管理方法を理解できます。

:arrow_upper_right:[配信を監視する方法については、この節](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=en#sending-messages)を参照してください。


**関連トピック**

:arrow_upper_right: [配信のベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/delivery-best-practices.html)

:arrow_upper_right: [Eメールをテストして送信する](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/sending-messages.html)

:arrow_upper_right: [配達確認の送信](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-validating-the-delivery.html)
