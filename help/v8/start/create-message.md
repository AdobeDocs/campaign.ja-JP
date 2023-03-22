---
title: メッセージの基本を学ぶ
description: メッセージの基本を学ぶ
feature: Email, Push, SMS, Direct Mail, Cross Channel Orchestration
role: User
level: Beginner
exl-id: 6cf8a929-637e-4e51-9160-5980ca727efb
source-git-commit: 4c79078e32c77499f15906fc81f31ce2b26559d7
workflow-type: tm+mt
source-wordcount: '469'
ht-degree: 95%

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

## メッセージの送信方法の選択{#gs-send-msg}

メッセージを作成し、体裁を整えてテストしたら、送信方法を選択できます。 Campaign は、次の一連の機能を備えています。

* メインターゲットへの手動によるメッセージ送信

   ![](assets/send-email.png)

   でのメッセージの送信方法を説明します。 [この節](../send/send.md)

* [マーケティングキャンペーン](campaigns.md)に関連付けられたメッセージの送信

   ![](assets/deliveries-in-a-campaign.png)

   キャンペーンの状況に応じてメッセージを送信する方法については、[この節](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-deliveries.html?lang=ja)を参照してください。

* [ワークフロー](../config/workflows.md)を介したメッセージの送信

   ![](assets/send-in-a-wf.png)

    メール配信を自動化する方法については、[このページ](../../automation/workflow/delivery.md)を参照してください。

* イベントからの[メッセージのトリガー](../send/transactional.md)

* メッセージのスケジュール設定

   ![](assets/schedule-send.png)

[ユースケース：誕生日メールのスケジュール設定と送信方法を学ぶ](../../automation/workflow/send-a-birthday-email.md)


## パーソナライゼーションの追加{#personalization}

Adobe Campaign が配信するメッセージは、様々な方法でパーソナライズすることができます。[パーソナライゼーション機能の詳細を説明します](../send/personalize.md)

以下を行うことができます。

* パーソナライゼーションフィールドの動的な挿入：[詳細情報](../send/personalization-fields.md)
* 事前定義済みのパーソナライゼーションブロックの挿入[詳細情報](../send/personalization-blocks.md)
* 条件付きコンテンツの作成：[詳細情報](../send/conditions.md)

## トランザクションメッセージの送信{#gs-transac-messages}

トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計された Campaign モジュールです。

![](../assets/do-not-localize/glass.png) トランザクションメッセージ機能の詳細については、[この節](../architecture/architecture.md#transac-msg-archi)を参照してください

![](../assets/do-not-localize/glass.png) トランザクションメッセージの設定と送信の手順については、[このページ](../send/transactional.md)を参照してください

![](../assets/do-not-localize/book.png) [Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/transactional-email-with-attachments.html?lang=ja)でこの機能のエンドツーエンドのユースケースを確認する{target="_blank"}

## 配信とトラッキングログ{#gs-tracking-logs}

送信後に配信を監視することは、マーケティングキャンペーンを効率的に実施し、顧客に働きかけるうえで重要なステップになります。 配信の送信後に監視したり、配信の失敗や強制隔離がどのように管理されているかを把握したりできます。

![](../assets/do-not-localize/book.png) 配信を監視する方法については、 [Campaign Classicv7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja#sending-messages){target="_blank"}

