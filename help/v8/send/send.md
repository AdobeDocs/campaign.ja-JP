---
title: メールの送信と監視
description: Adobe Campaign でのメール送信の範囲と特異性について説明します。
feature: Email
role: Data Engineer
level: Beginner
exl-id: f2c26351-8ed7-498a-ac83-d4c583fb98f3
source-git-commit: 9fa6666532a6943c438268d7ea832f0908588208
workflow-type: ht
source-wordcount: '920'
ht-degree: 100%

---


# メールの送信と監視

配信の設定が終わり、送信準備が整ったら、必ず配信分析を実行してください。

![](../assets/do-not-localize/book.png) [詳しくは Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-sending-the-delivery.html?lang=ja#confirming-delivery){target=&quot;_blank&quot;}

完了したら、配信を確定して、メッセージの配信を開始します。

また、次のこともできます。

* [「配信を延期」オプション](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-sending-the-delivery.html?lang=ja#scheduling-the-delivery-sending){target=&quot;_blank&quot;}を使用して配信を後日にスケジュール設定
* [複数のウェーブ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-sending-the-delivery.html?lang=ja#sending-using-multiple-waves){target =&quot;_blank&quot;}を使用して複数のバッチに送信

「**配信**」タブから配信の実行を追跡します。このタブには、この配信の詳細または配信のリストからアクセスできます。

## メールの監視

送信されたメッセージは、配信ダッシュボードで配信のステータスを確認し、配信ログとレポートで正しく送信されたことを確認します。

![](../assets/do-not-localize/book.png) [詳細は、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/track-and-monitor.html?lang=ja){target=&quot;_blank&quot;}


## Campaign MTA {#mta}

Campaign v8 メール転送エージェント（MTA）は、クラス最高の送信インフラストラクチャを提供し、最高の配信品質、レピュテーション、スループット、レポート、バウンス処理、IP ランプアップおよび接続設定管理を可能にします。

すべての Campaign v8 ユーザーが利用できるもので、スケーラビリティと高い配信スループットを保証し、より多くのメールをより迅速に送信するのに役立ちます。これは、インターネットサービスプロバイダーからのフィードバックに基づいてメール送信設定をリアルタイムに変更する、新しいアダプティブ配信のテクニックを活用して達成されます。

### 利点

Adobe Campaign は、SparkPost の商用メール MTA（メール転送エージェント）を実行する MTA を使用します。この MTA は、**Momentum** ともいいます。

Momentum は、インボックスの最適な配信率を達成し維持するための高度なバウンス処理と自動配信品質最適化機能を含む、革新的で高パフォーマンスな MTA テクノロジーを提供します。

*  MTA を使用すると、全体的なスループット速度が劇的に向上し、ソフトバウンスが大幅に減少します。
* Enhanced MTA は最新の MTA テクノロジーを使用して、メール配信の最適なスループット速度を提供します。
* 受け取ったフィードバックに即時に自動的に適応させることで、リアルタイムの配信データを使用した、より正確でインテリジェントなメール配信も実現します。

### バウンスの検証

**同期**&#x200B;配信失敗のエラーメッセージについては、 MTA がバウンスのタイプと検証を判断し、その情報を Campaign に返します。

MTA は SMTP バウンスを検証し、その検証結果を Campaign バウンスの理由と検証結果にマッピングしたバウンスコードの形式で Campaign に返します。

>[!NOTE]
>
>現在、**非同期**&#x200B;バウンスは、**[!UICONTROL 受信メール]**&#x200B;ルールを通じて inMail プロセスによって検証されています。詳しくは、[Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/understanding-delivery-failures.html?lang=ja#bounce-mail-qualification){target=&quot;_blank&quot;}を参照してください。<!--Refer to [bounce mail qualification](delivery-failures.md#bounce-mail-qualification)-->

配信エラーの詳細については、[この節](delivery-failures.md)を参照してください。


### 特定の MX ルール

MX（Mail eXchanger）ルールは、送信サーバーと受信サーバーの間の通信を管理するルールです。

MTA には独自の MX ルールがあります。これにより、独自のメールレピュテーション履歴およびメールを送信しているドメインから送信されるリアルタイムのフィードバックに基づいて、スループットをドメインごとにカスタマイズできます。

### DKIM 署名

Domain Keys Identified Mail（DKIM）は、偽造された送信者アドレス（一般的にスプーフィングと呼ばれます）の検出に使用される認証方法です。

Adobe Campaign では、DKIM のメール認証の署名は MTA が実行します。

DKIM の詳細については、[アドビ配信品質のベストプラクティスガイド](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/transition-process/infrastructure.html?lang=ja#authentication){target=&quot;_blank&quot;}を参照してください。

## メールフィードバックサービス {#email-feedback-service}

メールフィードバックサービス（EFS）機能を使用すると、フィードバックが MTA から直接取り込まれるので、各メールのステータスが正確にレポートされます。

配信の開始後、Campaign から MTA にメッセージが正常に中継されると、**[!UICONTROL 成功]**&#x200B;のパーセンテージは変更されません。

配信ログには、対象アドレスごとに&#x200B;**[!UICONTROL サービスプロバイダーで受信済み]**&#x200B;ステータスが表示されます。

メッセージが対象プロファイルに実際に配信され、この情報が MTA からリアルタイムでレポートされると、配信ログは、メッセージを正常に受信したアドレスごとに&#x200B;**[!UICONTROL 送信済み]**&#x200B;ステータスを示します。**[!UICONTROL 成功]**&#x200B;のパーセンテージは、配信が成功するたびに増加します。

MTA からハードバウンスメッセージが報告されると、ログのステータスが&#x200B;**[!UICONTROL サービスプロバイダーで受信済み]**&#x200B;から&#x200B;**[!UICONTROL 失敗]**<!-- and the **[!UICONTROL Bounces + errors]** percentage is increased accordingly-->に変わります。

ソフトバウンスメッセージが MTA から返されても、ログのステータスは変わりません（**[!UICONTROL サービスプロバイダーで受信済み]**&#x200B;のまま）。[エラー理由](delivery-failures.md#delivery-failure-reasons)のみが更新されます<!-- and the **[!UICONTROL Bounces + errors]** percentage is increased accordingly-->。**[!UICONTROL 成功]**&#x200B;のパーセンテージは変わりません。その後、ソフトバウンスメッセージが配信[有効期間](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-sending-the-delivery.html?lang=ja#defining-validity-period){target=&quot;_blank&quot;}中再試行され続けます。

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
| Campaign から MTA にメッセージが正常に中継される | **[!UICONTROL 成功]**&#x200B;パーセンテージが表示されない（0%から開始） | サービスプロバイダーで受信済み |
| MTA からハードバウンスメッセージが返される | **[!UICONTROL 成功]**&#x200B;のパーセンテージに変更はない | 失敗 |
| ソフトバウンスメッセージが MTA から返される | **[!UICONTROL 成功]**&#x200B;のパーセンテージに変更はない | サービスプロバイダーで受信済み |
| ソフトバウンスメッセージの再試行が成功する | それに応じて&#x200B;**[!UICONTROL 成功]**&#x200B;のパーセンテージが増加する | 送信済み |
| ソフトバウンスメッセージの再試行に失敗する | **[!UICONTROL 成功]**&#x200B;のパーセンテージに変更はない | 失敗 |
