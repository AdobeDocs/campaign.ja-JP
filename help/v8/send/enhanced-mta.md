---
title: Adobe Campaignの Enhanced MTA について
description: Adobe Campaign Enhanced MTA を使用したメール送信の範囲と特異性について説明します。
feature: Email
role: Data Engineer
level: Beginner
exl-id: f2c26351-8ed7-498a-ac83-d4c583fb98f3
source-git-commit: 0fa0db62f45097755bebcbf434614c4c835d886a
workflow-type: tm+mt
source-wordcount: '1011'
ht-degree: 68%

---

# Enhanced MTA について {#sending-with-enhanced-mta}

この **Adobe Campaign Enhanced MTA** （メール転送エージェント）送信インフラストラクチャがアップグレードされ、最適な配信品質、レピュテーション、スループット、レポート、バウンス処理、IP ランプアップ、接続設定管理が可能になります。

拡張性の向上、配信スループットの向上、より多くの E メールをより速く送信できるように、すべての Campaign v8 ユーザーに対して実装されています。 これは、インターネットサービスプロバイダーからのフィードバックに基づいて E メール送信設定をリアルタイムに変更する、新しいアダプティブ配信のテクニックを活用して達成されます。

## 使用法とメリット

**Enhanced MTA とは何ですか？**

Adobe Campaignは、SparkPost の商用 E メール MTA(Mail Transfer Agent) を使用します。この MTA は、 **Momentum**.

Momentum は、インボックスの最適な配信率を達成し維持するための高度なバウンス処理と自動配信品質最適化機能を含む、革新的で高パフォーマンスな MTA テクノロジーを提供します。

**メリットは何ですか？**

* Enhanced MTA を使用すると、全体的なスループット速度が大幅に向上し、ソフトバウンスが大幅に減少します。
* 最新の MTA テクノロジーを使用して、E メール配信の最適なスループット速度を提供します。
* 受け取ったフィードバックに即時に自動的に適応させることで、リアルタイムの配信データを使用した、より正確でインテリジェントな E メール配信も実現します。

## Enhanced MTA の特異性 {#enhanced-mta-impacts}

### バウンスの選定

の場合 **同期** 配信失敗のエラーメッセージに対しては、Enhanced MTA がバウンスのタイプと選定を決定し、その情報を Campaign に返します。

Enhanced MTA は SMTP バウンスを選定し、その選定を Campaign バウンスの理由と選定にマッピングしたバウンスコードの形式で Campaign に返します。

>[!NOTE]
>
>現在 **非同期** バウンスは、Enhanced MTA ではなく、 **[!UICONTROL インバウンド E メール]** ルール。 詳しくは、 [Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/understanding-delivery-failures.html#bounce-mail-qualification){target=&quot;_blank&quot;}。 <!--Refer to [bounce mail qualification](delivery-failures.md#bounce-mail-qualification)-->

配信エラーの詳細については、 [この節](delivery-failures.md).

### 有効期間

キャンペーン配信の有効期間設定は、Enhanced MTA で **3.5 日以下**&#x200B;に設定されている場合にのみ使用されます。Campaign で 3.5 日を超える値を定義した場合、その値は考慮されません。

例えば、Campaign で有効期間がデフォルト値の 5 日間に設定されている場合、ソフトバウンスメッセージは Enhanced MTA の再試行キューに入り、そのメッセージが Enhanced MTA に到達してから最大 3.5 日間再試行されます。この場合、Campaign に設定された値は使用されません。

メッセージが Enhanced MTA キューに置かれた日数が 3.5 日に達しても配信に失敗した場合は、タイムアウトになり、配信ログでのステータスは、**[!UICONTROL 送信済み]**&#x200B;から&#x200B;**[!UICONTROL 失敗]**&#x200B;に更新されます。

有効期間について詳しくは、 [Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-sending-the-delivery.html#defining-validity-period){target=&quot;_blank&quot;}。

### 再試行

ソフトバウンスの再試行とその間隔は、メッセージの E メールドメインから返されるバウンス応答のタイプと重大度に基づいて、Enhanced MTA が決定します。

>[!NOTE]
>
>配信プロパティの再試行設定は、Campaign では使用されません。

再試行に関する詳細情報： [この節](delivery-failures.md#retries).

### 特定の MX ルール

MX（Mail eXchanger）ルールは、送信サーバーと受信サーバーの間の通信を管理するルールです。

Enhanced MTA には独自の MX ルールがあります。これにより、独自の E メールレピュテーション履歴および E メールを送信しているドメインから送信されるリアルタイムのフィードバックに基づいて、スループットをドメインごとにカスタマイズできます。

### DKIM 署名

Domain Keys Identified Mail(DKIM) は、偽造された送信者アドレス（一般的にスプーフィングと呼ばれます）の検出に使用される認証方法です。

Adobe Campaignでは、DKIM の E メール認証の署名は Enhanced MTA が実行します。

DKIM の詳細は、 [Adobe配信品質のベストプラクティスガイド](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/transition-process/infrastructure.html?lang=ja#authentication){target=&quot;_blank&quot;}。

## E メールフィードバックサービス {#email-feedback-service}

E メールフィードバックサービス（EFS）機能を使用すると、フィードバックが Enhanced MTA（メッセージ転送エージェント）から直接取り込まれるので、各 E メールのステータスが正確にレポートされます。

配信の開始後、Campaign から Enhanced MTA にメッセージが正常に中継されると、**[!UICONTROL 成功]**&#x200B;のパーセンテージは変更されません。

配信ログには、対象アドレスごとに&#x200B;**[!UICONTROL サービスプロバイダーで受信済み]**&#x200B;ステータスが表示されます。

メッセージが対象プロファイルに実際に配信され、この情報が Enhanced MTA からリアルタイムでレポートされると、配信ログは、メッセージを受信した各アドレスの&#x200B;**[!UICONTROL 送信済み]**&#x200B;ステータスを示します。**[!UICONTROL 成功]**&#x200B;のパーセンテージは、成功した各配信に応じて増加します。

Enhanced MTA からハードバウンスメッセージが報告されると、ログのステータスが&#x200B;**[!UICONTROL サービスプロバイダーで受信済み]**&#x200B;から&#x200B;**[!UICONTROL 失敗]**<!-- and the **[!UICONTROL Bounces + errors]** percentage is increased accordingly-->に変更されます。

ソフトバウンスメッセージが Enhanced MTA から返されても、ログのステータスは変更されません（**[!UICONTROL サービスプロバイダーで受信済み]**）。[エラー理由](delivery-failures.md#delivery-failure-reasons)のみが更新されます<!-- and the **[!UICONTROL Bounces + errors]** percentage is increased accordingly-->。**[!UICONTROL 成功]**&#x200B;のパーセンテージは変更されません。その後、ソフトバウンスメッセージは、配信全体を通して再試行されます [有効期間](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-sending-the-delivery.html#defining-validity-period){target=&quot;_blank&quot;}:

* 有効期間の終了前に再試行が成功した場合、メッセージのステータスは&#x200B;**[!UICONTROL 送信済み]**&#x200B;に変わり、それに応じて&#x200B;**[!UICONTROL 成功]**&#x200B;のパーセンテージが増えます。

* それ以外の場合は、ステータスが&#x200B;**[!UICONTROL 失敗]**&#x200B;に変わります。**[!UICONTROL 成功]**<!--and **[!UICONTROL Bounces + errors]** -->のパーセンテージは変更されません。

>[!NOTE]
>
>ハードバウンスとソフトバウンスについて詳しくは、[この節](delivery-failures.md#delivery-failure-reasons)を参照してください。
>
>一時的な配信エラー後の再試行について詳しくは、[この節](delivery-failures.md#retries)を参照してください。

次の表に、EFS 機能を使用した送信プロセスの各ステップで KPI と送信ログのステータスが更新される方法を示します。

| 送信プロセスの手順 | KPI 概要 | 送信ログのステータス |
|--- |--- |--- |
| Campaign から Enhanced MTA にメッセージが正常に転送される | **[!UICONTROL 成功]**&#x200B;パーセンテージが表示されない（0%から開始） | サービスプロバイダーで受信済み |
| Enhanced MTA からハードバウンスメッセージが返される | **[!UICONTROL 成功]**&#x200B;のパーセンテージに変更はない | 失敗 |
| ソフトバウンスメッセージが Enhanced MTA から返される | **[!UICONTROL 成功]**&#x200B;のパーセンテージに変更はない | サービスプロバイダーで受信済み |
| ソフトバウンスメッセージの再試行が成功する | それに応じて&#x200B;**[!UICONTROL 成功]**&#x200B;のパーセンテージが増加する | 送信済み |
| ソフトバウンスメッセージの再試行に失敗する | **[!UICONTROL 成功]**&#x200B;のパーセンテージに変更はない | 失敗 |
