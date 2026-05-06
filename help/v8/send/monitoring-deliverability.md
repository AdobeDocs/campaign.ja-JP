---
product: campaign
title: Adobe Campaign の配信品質の監視
description: Adobe Campaign の配信品質の監視に関するツールおよびガイドラインについて学ぶ
feature: Deliverability
role: User, Admin
version: Campaign v8, Campaign Classic v7
exl-id: e4caa316-242f-46cd-a20b-a5eee5a0c456
source-git-commit: 3dd4f6041ef193a0d7ea74a0b2c06183861c2797
workflow-type: tm+mt
source-wordcount: '582'
ht-degree: 57%

---

# 配信品質の監視{#monitoring-deliverability}

以下に、Adobe Campaign に用意されている様々な監視ツールの詳細と、Adobe Campaign で提供される機能を活用してプラットフォームの配信品質を監視する方法に関するその他のガイドラインを示します。

## 監視ツール {#monitoring-tools}

Adobe Campaignでは、次の配信品質ツールにアクセスできます。

### 受信ボックスレンダリング {#inbox-rendering-tool}

[受信トレイ レンダリング レポート &#x200B;](inbox-rendering.md)を使用すると、コンテンツとレピュテーションをスキャンするために、主要な電子メールクライアントでメッセージをプレビューできます。

### 配信スループット {#throughput-reports}

**[!UICONTROL 配信スループット]**&#x200B;レポートは、一定期間にわたるプラットフォーム全体のスループットの概要を示します。 詳しくは、[この節](../reporting/global-reports.md#delivery-throughput)を参照してください。

### ブロードキャスト統計 {#broadcast-statistics}

各配信は、異なるインターネットサービスプロバイダー（ISP）に関するブロードキャスト統計情報レポートを生成します。 配信品質に影響を与える可能性のあるデータ品質と評価の指標がいくつか表示されます。次の数値が含まれます。

**[!UICONTROL ハードバウンス]**&#x200B;はデータの質を示します。 この数は 2％未満にする必要があります。

**[!UICONTROL ソフトバウンス]**&#x200B;は評判を示します。 任意の ISP に対して、この値を 10％以下にする必要があります。

<!--For more on this, see the [Delivery statistics](../reporting/global-reports.md#delivery-statistics) section.-->

### 配信ダッシュボード {#delivery-dashboard-monitoring}

より一般的に、[配信ダッシュボード](delivery-dashboard.md)は次の項目のアクセスを提供します。

配信の概要。送信の詳細と、成功して送信、処理、送信するメッセージの数を示します。

配信ログと履歴。除外されたターゲットとその理由が表示されます。

開封数やクリック数などの追跡情報を表示するトラッキングログ。

### SpamAssassin テスト {#spam-testing}

[SpamAssassin](spamassassin.md)を使用してメールの内容をテストし、スコアを付けて、メッセージが受信時に使用される迷惑メール対策ツールによって迷惑メールと見なされるリスクを実行するかどうかを判断します。

### コントロールパネル {#control-panel-monitoring}

>[!NOTE]
>
>Campaign コントロールパネルは、Campaign v8 Managed Cloud Services ユーザーが利用できます。 詳しくは、[コントロールパネル](../config/self-service.md)を参照してください。

キャンペーン [Campaign コントロールパネル](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=ja){target="_blank"}は、サブドメインと証明書の管理、アクティブなプロファイルのモニタリング、配信スループットと待ち時間の指標など、配信品質のモニタリング機能を提供します。

## 監視のガイドライン {#monitoring-guidelines}

配信品質の監視に関する追加のガイドラインを示します。

### プラットフォームスループット監視

プラットフォーム全体で[配信スループット](../reporting/global-reports.md#delivery-throughput)を定期的にチェックして、元のセットアップと整合性が取れているかどうかを検証します。

### 設定を再試行

配信テンプレートで[再試行](delivery-failures.md#retries)が適切に設定されていることを確認します（再試行期間が 30 分、再試行回数が 21 回以上）。

### バウンスメールボックスの検証

[バウンス](delivery-failures.md#bounce-mail-qualification)メールボックスがアクセス可能で、アカウントの有効期限が近づいていないかを定期的に検証します。

### 配信のパフォーマンスチェック

[配信ダッシュボード](delivery-dashboard.md)で各配信スループットをチェックして、配信コンテンツの効力（例：「フラッシュセール」の配信期間は数日ではなく数分にする必要がある）と合致していることを確認します。

### ウェーブタイミング検証

[ウェーブ](configure-and-send.md#sending-using-multiple-waves)を使用する場合、次のものがトリガーされる前に各ウェーブが完了するための十分な時間があることを検証します。

### 強制隔離の監視

エラーの数と新しい[強制隔離](quarantines.md)が他の配信と整合性が取れていることをチェックします。

### 配信ログ分析

[配信ログ](delivery-dashboard.md#delivery-logs-and-history)の詳細を慎重に調べて、ハイライト表示されたエラーの種類をチェックします（ブロックリスト、DNS の問題、スパム対策ルールなど）。

## 関連トピック

[Adobe配信品質のベストプラクティスガイド &#x200B;](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}では、配信品質の戦略、定義、指標、ベストプラクティスに関する包括的なガイダンスを提供しています。

[配信品質とは](about-deliverability.md)では、主要な配信品質の概念と、Campaignで配信品質を向上させる方法について説明します。

[配信エラーとバウンス &#x200B;](delivery-failures.md)は、様々な種類の配信エラーについて説明し、Campaignでの対処方法を説明します。また、一般的な問題に対するトラブルシューティングのガイダンスも含まれます。

[強制隔離の管理](quarantines.md)では、Campaignが強制隔離されたアドレスを管理して、送信レピュテーションを保護する方法について説明します。

[&#x200B; メッセージのコンテンツを制御](control-message-content.md)は、コンテンツが配信品質に最適化されていることを確認する方法に関するガイダンスを提供します。
