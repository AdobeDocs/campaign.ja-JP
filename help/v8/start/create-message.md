---
solution: Campaign
product: Adobe Campaign
title: メッセージの基本を学ぶ
description: メッセージの基本を学ぶ
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 6cf8a929-637e-4e51-9160-5980ca727efb
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '663'
ht-degree: 25%

---

# メッセージで始める{#gs-ac-audiences}

Adobe Campaign では、E メール、SMS、LINE メッセージ、プッシュ通知およびダイレクトメールを含むクロスチャネルキャンペーンを送信し、各種の専用レポートを使用してそれらの有効性を評価できます。これらのメッセージは、デザインし、配信を介して送信します。また、受信者ごとにパーソナライズすることができます。

コア機能には、ターゲティング、メッセージの定義とパーソナライゼーション、通信の実行、関連する運用可能なレポートなどがあります。主な機能アクセスポイントは、配信アシスタントです。 ここから、Adobe Campaign で提供される複数の機能にアクセスします。

[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-about-delivery-creation-steps.html)で配信を作成するための主な手順を説明します。

Adobe Campaignv8には次の配信チャネルが付属しています。

* **E メールチャネル**：E メール配信によって、ターゲット母集団にパーソナライズされた E メールを送信できます。詳しくは、[このページ](../send/email.md)を参照してください。

* **ダイレクトメールチャネル**：ダイレクトメール配信によって、ターゲット母集団に関するデータを含む抽出ファイルを生成できます。詳細は[このページ](../send/direct-mail.md)を参照

* **モバイルチャネル**:モバイルチャネルの配信を使用すると、パーソナライズされたSMSをターゲットの人口に送信できます。詳細は[このページ](../send/sms.md)を参照

* **モバイルアプリケーションチャネル**：モバイルアプリ配信では通知を iOS システムおよび Android システムに送信できます。詳細は[このページ](../send/push.md)を参照

## メッセージの送信方法を選択する

メッセージを作成し、その内容をデザインおよびテストしたら、送信方法を選択できます。 キャンペーンオファーは、次のような一連の機能を備えています。

* メインターゲットに手動でメッセージを送信する
:arrow_upper_right:[メッセージの送信方法](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/sending-messages.html)
* [マーケティングキャンペーン](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/setting-up-marketing-campaigns.html)に関連付けられたメッセージを送信
:arrow_upper_right:[キャンペーン](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-deliveries.html)のコンテキストでメッセージを送信する方法を学びます。
* [ワークフロー](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html)を介したメッセージの送信
:arrow_upper_right:[電子メール配信の自動化方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/delivery.html)
* [イベントからのトリガー](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/introduction/about-transactional-messaging.html) メッセージ：arrow_upper_right: [使用例：添付ファイル付きのトランザクション電子メールの送信方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/use-case/transactional-email-with-attachments.html)
* メッセージのスケジュール
:arrow_upper_right:[使用例：スケジュールと誕生日の電子メールの送信方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/deliveries/sending-a-birthday-email.html?)


## 追加パーソナライズ

Adobe Campaignが配信するメッセージは、様々な方法でパーソナライズできます。

次の操作をおこなうことができます。

* パーソナライゼーションフィールドの動的な挿入：:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/personalization-fields.html)のパーソナライゼーションフィールドの使い方を学ぶ
* 定義済みパーソナライゼーションブロックの挿入：:arrow_upper_right:パーソナライゼーションブロックとは何かと、それを[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/personalization-blocks.html)で使用する方法を学びます。
* 条件付きコンテンツの作成：:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/conditional-content.html)に条件付きコンテンツを挿入する方法を学びます。

## トランザクションメッセージの送信

トランザクションメッセージング(Message Center)は、トリガーメッセージの管理を目的としたキャンペーンモジュールです。

:bulb:[このセクション](../dev/architecture.md#transac-msg-archi)のトランザクションメッセージ機能の詳細

:bulb:トランザクションメッセージの設定と送信の手順については、[このページ](../send/transactional.md)を参照してください。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/use-case/transactional-email-with-attachments.html?lang=en#transactional-messaging)のエンドツーエンドの使用例で、この機能を見つけ出す

## 配信とトラッキングログ

送信後に配信を監視することは、マーケティングキャンペーンを効率的にし、お客様に連絡を取るための重要なステップです。配信の送信後に監視を行うことができ、配信の障害や強制隔離の管理方法を理解することもできます。

:arrow_upper_right:[このセクション](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=en#sending-messages)で配信を監視する方法を学びます


**関連トピック**

:arrow_upper_right: [配信のベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/delivery-best-practices.html)

:arrow_upper_right: [電子メール](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/sending-an-email/sending-messages.html)をテストして送信する

:arrow_upper_right: [配達確認を送信](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-validating-the-delivery.html)
