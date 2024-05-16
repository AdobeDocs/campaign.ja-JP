---
title: メッセージの基本を学ぶ
description: メッセージの基本を学ぶ
feature: Email, Push, SMS, Direct Mail, Cross Channel Orchestration
role: User
level: Beginner
exl-id: 6cf8a929-637e-4e51-9160-5980ca727efb
source-git-commit: 5ab598d904bf900bcb4c01680e1b4730881ff8a5
workflow-type: tm+mt
source-wordcount: '415'
ht-degree: 100%

---

# メッセージの基本を学ぶ{#gs-ac-audiences}

Adobe Campaign を使用すると、メール、SMS、プッシュ通知、ダイレクトメールなどのクロスチャネルキャンペーンを送信し、各種の専用レポートを使用してキャンペーンの有効性を評価できます。これらのメッセージは、デザインし、配信を介して送信します。また、受信者ごとにパーソナライズすることができます。

コア機能には、ターゲティング、メッセージの定義とパーソナライゼーション、通信の実行、関連する運用可能なレポートなどがあります。主な機能のアクセスポイントは、配信ウィザードです。このアクセスポイントから、Adobe Campaign で提供される複数の機能を使用できます。

Adobe Campaign v8 には、次の配信チャネルが付属しています。

* **メールチャネル**：メール配信では、パーソナライズされたメールをターゲット母集団に送信できます。詳しくは、[このページ](../send/email.md)を参照してください。

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

  メッセージの送信方法については、[この節](../send/send.md)を参照してください

* [マーケティングキャンペーン](campaigns.md)に関連付けられたメッセージの送信

  ![](assets/deliveries-in-a-campaign.png)

  キャンペーンの状況に応じてメッセージを送信する方法については、[この節](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-deliveries.html?lang=ja){target="_blank"}を参照してください

* [ワークフロー](../config/workflows.md)を介したメッセージの送信

  ![](assets/send-in-a-wf.png)

  メール配信を自動化する方法については、[このページ](../../automation/workflow/delivery.md)を参照してください。

* イベントからの[メッセージのトリガー](../send/transactional.md)

* メッセージのスケジュール設定

  ![](assets/schedule-send.png)

[ユースケース：誕生日メールのスケジュール設定と送信方法](../../automation/workflow/send-a-birthday-email.md)


## パーソナライゼーションの追加{#personalization}

Adobe Campaign が配信するメッセージは、様々な方法でパーソナライズすることができます。[パーソナライゼーション機能の詳細を説明します](../send/personalize.md)

以下を行うことができます。

* 動的パーソナライゼーションフィールドの挿入[詳細情報](../send/personalization-fields.md)
* 事前定義済みパーソナライゼーションブロックの挿入[詳細情報](../send/personalization-blocks.md)
* 条件付きコンテンツの作成[詳細情報](../send/conditions.md)

## トランザクションメッセージの送信{#gs-transac-messages}

トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計された Campaign モジュールです。

トランザクションメッセージ機能の詳細については、[この節](../architecture/architecture.md#transac-msg-archi)を参照してください

トランザクションメッセージの設定と送信の手順については、[このページ](../send/transactional.md)を参照してください


## 配信とトラッキングログ{#gs-tracking-logs}

送信後に配信を監視することは、マーケティングキャンペーンを効率的に実施し、顧客に働きかけるうえで重要なステップになります。 配信の送信後に監視したり、配信の失敗や強制隔離がどのように管理されているかを把握したりできます。

配信を監視する方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja#sending-messages){target="_blank"}を参照してください

