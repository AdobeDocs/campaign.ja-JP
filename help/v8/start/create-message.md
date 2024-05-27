---
title: メッセージの基本を学ぶ
description: メッセージの基本を学ぶ
feature: Email, Push, SMS, Direct Mail, Cross Channel Orchestration
role: User
level: Beginner
exl-id: 6cf8a929-637e-4e51-9160-5980ca727efb
source-git-commit: fb0b7dbeae1d083935da91bbe50a711ce5f47b7e
workflow-type: tm+mt
source-wordcount: '1320'
ht-degree: 72%

---

# メッセージの基本を学ぶ{#gs-ac-audiences}

Adobe Campaign を使用すると、メール、SMS、プッシュ通知、ダイレクトメールなどのクロスチャネルキャンペーンを送信し、各種の専用レポートを使用してキャンペーンの有効性を評価できます。これらのメッセージは、デザインし、配信を介して送信します。また、受信者ごとにパーソナライズすることができます。

コア機能には、ターゲティング、メッセージの定義とパーソナライゼーション、通信の実行、関連する運用可能なレポートなどがあります。主な機能のアクセスポイントは、配信ウィザードです。このアクセスポイントから、Adobe Campaign で提供される複数の機能を使用できます。

Adobe Campaign v8 には、次の配信チャネルが付属しています。

* **メールチャネル**：メール配信では、パーソナライズされたメールをターゲット母集団に送信できます。[詳細情報](#gs-channel-email)

* **モバイルチャネル**：モバイルチャネル配信では、パーソナライズされたメッセージをモバイルデバイスからターゲット母集団に送信できます。 [詳細情報](#gs-channel-sms)

* **モバイルアプリケーションチャネル**：モバイルアプリ配信では、通知をiOS デバイスおよび Android デバイスに送信できます。 [詳細情報](#gs-channel-push)

* **ダイレクトメールチャネル**：ダイレクトメール配信によって、ターゲット母集団に関するデータを含む抽出ファイルを生成できます。[詳細情報](#gs-channel-direct)


  その他のチャネルについては、を参照してください。 [この節](#other-channels).

  >[!NOTE]
  >
  >使用可能なチャネルの数は、契約によって異なります。使用許諾契約書を確認してください。

## チャネルを選択{#gs-channel}

### メールチャネル {#gs-channel-email}

[メールチャネル](../send/direct-mail.md)は、Adobe Campaign のコアチャネルの 1 つで、パーソナライズされたメールをスケジュールし、特定のターゲットに送信できます。

異なるタイプのメールを送信できます。

* 単一送信メール：定義したターゲットに 1 回送信できるメール。これらは、通常、1 回だけ準備されて送信される特定のコンテンツ（ニュースレター、プロモーションメールなど）をプロモーションするために使用します。
* 繰り返しメール：キャンペーンで、同じメールを定期的に送信し、各送信とそのレポートを定期的に集計します。同じメールが送信されますが、通常は、送信日の適格なターゲットに基づいて、異なるターゲットに送信されます。一般的な例に誕生日のメールがあります。詳しくは、[繰り返し配信](../../automation/workflow/recurring-delivery.md)を参照してください。
* トランザクションメール：顧客の行動に基づいてトリガーされる単一のメール。[トランザクションメッセージ](../send/transactional.md)を参照してください。

配信の使用方法と推奨事項については、Adobe Campaign Classicを参照してください [配信のベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/delivery-best-practices.html?lang=ja#sending-messages){target="_blank"}

配信のタイプについて詳しくは、[この節](#types-of-deliveries)を参照してください。

### モバイルチャネル {#gs-channel-sms}

Adobe Campaign では、モバイルデバイスに [SMS](../send/sms.md) および [LINE](../send/line.md) メッセージを配信できます。

SMS メッセージの場合、テキスト形式のメッセージのみを作成、変更およびパーソナライズできます。SMS メッセージは、送信前にプレビューすることもできます。

LINE メッセージの場合は、テキストまたは画像とリンクを送信できます。

SMS または LINE メッセージを携帯電話に配信するには、以下が必要です。

* **[!UICONTROL モバイル（SMS）]**&#x200B;チャネルまたは **[!UICONTROL LINE]** チャネルに設定された外部アカウント。
* この外部アカウントに適切にリンクされた SMS または LINE 配信テンプレート。


### プッシュ通知チャネル {#gs-channel-push}

Adobe Campaignを使用して、パーソナライズされたセグメント化されたものを送信できます [プッシュ通知](../send/push.md) 専用アプリを使用して、iOSおよび Android モバイルデバイスで実行します。 設定と統合の手順が実行されたら、iOSと Android の配信を作成し、Adobe Campaignと一緒に送信できます。 また、画像やビデオを含むリッチな通知をデザインして Android デバイスに送信することもできます。

### ダイレクトメールチャネル {#gs-channel-direct}

[ダイレクトメール](../send/direct-mail.md) は、ダイレクトメールプロバイダーと共有する外部ファイルの作成、パーソナライズ、生成を可能にするオフラインチャネルです。 このチャネルを使用すると、カスタマージャーニーでオンラインチャネルとオフラインチャネルを調整できます。

ダイレクトメール配信を準備すると、Adobe Campaign により、すべてのターゲットプロファイルと選択した連絡先情報（例えば、郵便の宛先）を含むファイルが生成されます。その後、このファイルをダイレクトメールプロバイダーに送信できます。このプロバイダーは、実際の送信処理を行います。


### その他のチャネル {#other-channels}

Adobe Campaignには、外部配信の作成に使用される電話配信テンプレートも付属しています。 このチャネルを使用することは、出力ファイルを処理するための専用の方法論を実装することを意味します。 設定の手順は、[ダイレクトメールチャネル](../send/direct-mail.md)の場合と同じです。

>[!NOTE]
>
>電話チャネルは組み込みのチャネルではありません。 実装には、Adobe コンサルティングまたは Adobe パートナーの関与が必要です。 詳しくは、アドビ担当者にお問い合わせください。

「その他」タイプの配信では、プロセスを実行しない特定のテクニカルテンプレートが使用されます。これにより、Adobe Campaign プラットフォーム外で実行されるマーケティングアクションを管理できます。

このチャネルには特定のメカニズムはありません。これは、Adobe Campaignで使用可能な他の通信チャネルと同様に、独自の外部アカウントルーティングオプション、配信テンプレートタイプ、キャンペーンワークフローアクティビティを持つ汎用チャネルです。 このチャネルは、説明のためにのみ設計されています。例えば、Adobe Campaign 以外のツールで実行されたキャンペーンのターゲットをトレースするための配信を定義する場合などです。

## 配信のタイプを選択 {#types-of-deliveries}

Campaign には 3 つのタイプの配信オブジェクトがあります。

### 単一の配信 {#single-delivery}

**配信**&#x200B;は、一度だけ実行されるスタンドアロン配信オブジェクトです。レプリケートし、再度準備済みにすることはできますが、最終状態（キャンセル、停止、完了）になっている場合は再利用できません。

配信は、配信リストから作成したり、ワークフロー内で[配信](../../automation/workflow/delivery.md)アクティビティを介して作成したりできます。

ワークフローには、使用するチャネルのタイプに応じた特定の配信アクティビティも用意されています。これらのアクティビティについて詳しくは、[この節](../../automation/workflow/cross-channel-deliveries.md)を参照してください。

### 繰り返し配信 {#recurring-delivery}

A **繰り返し配信** は、ワークフローのコンテキストで使用できます。 アクティビティを実行するたびに新しい配信を作成できます。 これにより、繰り返しタスク用に新しい配信を作成する必要がなくなります。 例えば、このタイプのアクティビティを月に 1 回実行した場合、1 年後の配信の数は 12 個です。

繰り返し配信は、ワークフロー内で[繰り返し配信アクティビティ](../../automation/workflow/recurring-delivery.md)を介して作成されます。このアクティビティの使用例については、[ターゲティングワークフローでの繰り返し配信の作成](../../automation/workflow/send-a-birthday-email.md)の節で説明しています。

### 連続配信 {#continuous-delivery}

A **連続配信** は、ワークフローのコンテキストで使用できます。 これにより、新しい受信者を既存の配信に追加できるので、配信を実行するたびに新しい配信を作成する必要がなくなります。

配信の情報（コンテンツ、名前など）を変更すると、配信の実行時に新しい配信オブジェクトが作成されます。情報を変更しなかった場合は、同じ配信オブジェクトが再利用され、同じオブジェクトに配信ログとトラッキングログが追加されます。

例えば、このタイプのアクティビティを月に 1 回実行した場合、1 年後の配信数は 1 個です（ただし、配信に変更を加えなかった場合）。

連続配信は、ワークフロー内で[連続配信アクティビティ](../../automation/workflow/continuous-delivery.md)を介して作成されます。


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

  トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計された Campaign モジュールです。

  トランザクションメッセージ機能の詳細については、[この節](../architecture/architecture.md#transac-msg-archi)を参照してください

  トランザクションメッセージの設定と送信の手順については、[このページ](../send/transactional.md)を参照してください

* メッセージのスケジュール設定

  ![](assets/schedule-send.png)

  で配信の送信をスケジュールする方法を説明します [このページ](../send/configure-and-send.md)

  参照： [ユースケース：誕生日メールのスケジュール設定と送信方法を学ぶ](../../automation/workflow/send-a-birthday-email.md)


## パーソナライゼーションを追加{#personalization}

Adobe Campaign が配信するメッセージは、様々な方法でパーソナライズすることができます。[パーソナライゼーション機能の詳細を説明します](../send/personalize.md)

以下を行うことができます。

* 動的パーソナライゼーションフィールドの挿入[詳細情報](../send/personalization-fields.md)
* 事前定義済みパーソナライゼーションブロックの挿入[詳細情報](../send/personalization-blocks.md)
* 条件付きコンテンツの作成[詳細情報](../send/conditions.md)


## 配信とトラッキングログ{#gs-tracking-logs}

送信後に配信を監視することは、マーケティングキャンペーンを効率的に実施し、顧客に働きかけるうえで重要なステップになります。 配信の送信後に監視したり、配信の失敗や強制隔離がどのように管理されているかを把握したりできます。

配信を監視する方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja#sending-messages){target="_blank"}を参照してください

