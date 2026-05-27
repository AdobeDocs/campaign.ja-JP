---
title: キャンペーンモニタリングの概要
description: 配信、ワークフロー、Campaign インスタンスを監視する方法について説明します
feature: Monitoring
role: User
level: Beginner
exl-id: 2ad585f2-19bc-4391-8a19-9e892dbe01a3
TQID: https://experienceleague.adobe.com/PjU1EFX5x4iB3yRsShGBWoR0k1D2-EI90-ss0FTcexE
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: a075b2c1-7748-4328-b7f6-343aa314616a
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
level_v2: id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2: id: aa2f3246-cb95-4b30-8899-fdf7d73550ccid: c1579802-ddd4-4214-8a91-97b2066abe11id: d095671a-1355-40aa-8b5f-06c33c68080b
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 1141
ht-degree: 10%

---

# キャンペーンモニタリングの概要 {#monitor-campaign}

Adobe Campaignには、プロセス、配信、環境を監視して、パフォーマンスを最適化し、問題をプロアクティブにトラブルシューティングするための包括的な機能が用意されています。

>[!NOTE]
>
>Campaign管理者は、[ キャンペーンCampaign コントロールパネル](#control-panel)を使用して、インスタンスのモニタリング、パフォーマンスの管理、セルフサービス機能を使用した設定を行うこともできます。

## 配信の監視 {#monitor-deliveries}

配信を送信後にモニタリングすることは、マーケティングキャンペーンを効率化し顧客に確実にリーチするための重要なステップです。 配信を送信した後、配信ダッシュボードでそのステータスを監視し、主要指標を追跡できます。 ダッシュボードでは、配信ログ、除外ログ、トラッキングログなどの監視機能にアクセスでき、あらゆるチャネルをまたいで配信パフォーマンスを分析するのに役立ちます。

**メール配信** - メール配信のステータスを監視し、主要な指標を追跡し、詳細なログにアクセスします。 キャンペーン UI](../send/delivery-dashboard.md)、[配信ステータス ](../send/delivery-statuses.md)および[ メール配信モニタリング ](../send/send.md#email-monitoring)の[配信の監視について詳しく説明します。

**SMS配信** - SMS配信のステータスを追跡し、SMS配信ダッシュボードで主要な指標を監視します。 [SMS監視](../send/sms/sms-monitor.md)の詳細をご覧ください。

**プッシュ通知** - プッシュ通知配信を監視して、モバイルアプリユーザーに効果的にリーチできるようにします。 [ プッシュ通知モニタリング ](../send/push.md#push-test)の詳細をご覧ください。

**トランザクションメッセージ** - イベントによってトリガーされるメッセージの場合は、イベント処理ステータス、メッセージ実行および配信ステータスを監視します。 [ トランザクションメッセージ監視](../send/delivery-execution.md#monitor-messages)の詳細をご覧ください。

**配信エラー** – 配信が失敗した理由を理解することは、クリーンなデータベースを維持し、配信品質を高めるために重要です。 配信エラーは、ハードバウンス、ソフトバウンス、無視メッセージに分類されます。 [配信の失敗と強制隔離](../send/delivery-failures.md)について詳しく説明します。

## 配信品質の監視 {#monitor-deliverability}

配信品質の監視により、メッセージを受信者の受信トレイに確実に届け、スパムフィルターを避けることができます。 Adobe Campaignには、配信レポート、受信トレイのレンダリング、SpamAssassin テスト、ブロードキャスト統計情報など、配信を監視および向上させるための組み込みツールがいくつか用意されています。 クリーンなメールリストの維持、送信者のレピュテーションのモニタリング、送信ドメインの認証などの配信品質のベストプラクティスに従うことは、配信率を良好に保つために不可欠です。

[配信品質モニタリングツール ](../send/monitoring-deliverability.md)と[配信品質のベストプラクティス ](../send/about-deliverability.md)について詳しく説明します。

## ワークフローの監視 {#monitor-workflows}

マーケティング施策とデータ処理の自動化には、ワークフローが不可欠です。 ワークフロー実行を監視することで、次のことが可能になります。

* ワークフローが正常に完了したことを確認
* エラーの特定とトラブルシューティング
* ワークフローパフォーマンスの最適化

### ワークフロー監視機能 {#workflow-monitoring}

**次のワークフロー要素を監視します：**

**ワークフロー実行ステータス** - ワークフローが実行中、一時停止、失敗、または完了しているかどうかを追跡します。 [ ワークフロー実行の詳細](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

**アクティビティ実行ログ** – 各ワークフローアクティビティの詳細なログにアクセスして、問題のトラブルシューティングとパフォーマンスの最適化を行います。

**ワークフローのヒートマップ** - ワークフローの実行パターンを可視化し、ボトルネックを特定して、同時ワークフローを監視します。 ワークフローヒートマップは、キャンペーン管理者が利用できます。 [ ワークフローヒートマップの詳細](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/heatmap.html?lang=ja){target="_blank"}

**ワークフロー履歴** – すべてのワークフロー実行と変更を経時的に追跡して、ワークフローの動作とパフォーマンスを把握します。

## インスタンスの監視 {#monitor-instance}

インスタンスのモニタリングは、Adobe Campaign環境の健全性とパフォーマンスの確保に役立ちます。

### 監査記録 {#audit-trail}

監査証跡のセルフサービスインターフェイスを使用すると、Adobe Campaign インスタンス内で行われた変更を監視できます。 監査記録は、インスタンス内で発生するアクションとイベントの包括的なリストをリアルタイムで取得します。

**監査記録を使用して次の操作を行います：**

* **コンポーネントの変更を追跡**：ワークフロー、スキーマ、オプション、その他のコンポーネントに対する処理を監視します
* **変更を加えたユーザーを特定**：特定の要素を最後に更新したユーザーと日時を確認します
* **ユーザーのアクションを理解**: ユーザーがインスタンスで実行した内容を確認して、トラブルシューティングまたは監査を行います
* **コンプライアンスの維持**: コンプライアンスとセキュリティの目的で、すべての設定変更を追跡します

監査証跡は、Campaign クライアントコンソールからアクセスでき、ユーザーが実行したアクションに関する詳細情報が提供されます。

[監査記録](../reporting/audit-trail.md)の詳細

### パフォーマンス監視 {#performance-monitoring}

Campaign v8には、インスタンスのパフォーマンスを追跡し、最適な操作を確保するためのモニタリング機能がいくつか用意されています。

**データベースの監視** - Campaign コントロールパネルを通じてデータベースの使用状況と容量を監視し、最適なパフォーマンスとストレージ管理を実現します。 [ データベース監視の詳細](https://experienceleague.adobe.com/docs/control-panel/using/performance-monitoring/database-monitoring.html){target="_blank"}

**アクティブなプロファイルの監視** - アクティブなプロファイルの使用状況を契約上の制限に照らして追跡することで、コンプライアンスを維持し、リソースの割り当てを最適化します。 [ アクティブなプロファイルの詳細](https://experienceleague.adobe.com/docs/control-panel/using/performance-monitoring/active-profiles-monitoring.html?lang=ja){target="_blank"}

**ワークフロー監視** - ワークフロー実行ステータスを監視して、長時間実行中のワークフローを特定し、すべてのテクニカルワークフローが正しく実行されていることを確認します。 [ テクニカルワークフローの詳細](#technical-workflows)

**配信スループットと待ち時間** - Campaign コントロールパネルを介したトランザクションコミュニケーションの配信スループット（1時間ごとに送信されるメッセージ）と待ち時間を追跡します。 [ スループット監視の詳細](https://experienceleague.adobe.com/docs/control-panel/using/performance-monitoring/throughputs-latencies.html){target="_blank"}

>[!NOTE]
>
>Campaign v8 Managed Cloud Servicesの場合、サーバーインフラストラクチャ（CPU、メモリ、ディスク）はAdobeによって監視および管理されます。

### テクニカルワークフロー {#technical-workflows}

テクニカルワークフローは、Campaign インスタンスを維持するためにバックグラウンドで実行される必須のプロセスです。

**技術的なワークフローを監視：**

* スケジュールに従って実行
* エラーなしで正常に完了
* データの正しい処理

**監視する主要なテクニカルワークフロー：**

| ワークフロー | 目的 |
|----------|---------|
| **トラッキング** | メール配信からのデータを追跡するプロセス |
| **クリーンアップ** | データベースのパフォーマンスを維持するために、古いデータとログを削除します |
| **配信品質の更新** | 配信品質ルールとスパムフィルターパターンを更新します |
| **データベースのクリーンアップ** | 古い配信ログとトラッキングログを消去します |

[ テクニカルワークフロー](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/wf-type/technical-workflows.html?lang=ja){target="_blank"}の詳細

### Campaign コントロールパネル {#control-panel}

Campaign Campaign コントロールパネルは、管理者がCampaign インスタンスを監視および管理するためのセルフサービス機能を提供します。

| 監視タイプ | 能力 |
|-----------------|--------------|
| **パフォーマンス** | アクティブなプロファイル使用状況の追跡、データベースの使用状況と容量の監視、ワークフロー実行ステータスの表示、配信スループットと待ち時間の監視 |
| **インフラストラクチャ** | SFTP ストレージ容量の監視、サブドメイン設定の追跡、SSL証明書の有効期限の監視、IP許可リストの管理 |
| **インスタンス** | ビルドバージョンとインストール済みパッケージの表示、システム設定の監視、承認済み外部ドメインの管理 |

[Campaign コントロールパネル](../config/self-service.md)および[Campaign コントロールパネルパフォーマンスの監視](https://experienceleague.adobe.com/docs/control-panel/using/performance-monitoring/about-performance-monitoring.html?lang=ja){target="_blank"}の詳細

>[!NOTE]
>
>Campaign v8 Managed Cloud Servicesの場合、Adobeは、サーバーインフラストラクチャ、オペレーティングシステム、アプリケーションレイヤーを監視および管理します。 このページとCampaign コントロールパネルで説明されているモニタリング機能を使用して、インスタンスのパフォーマンス、ワークフロー、配信をモニタリングできます。

## トラッキングとレポート {#tracking-reporting}

### メッセージトラッキング {#message-tracking}

受信者の行動を追跡し、キャンペーンの効果を測定します。

* **開封数**：受信者がメールを開封したタイミングを追跡します
* **クリック**：受信者がクリックするリンクを監視する
* **登録解除**: オプトアウト要求を追跡
* **ページビューをミラーリング**: ブラウザーでメールを表示している受信者の数を確認します

[ メッセージトラッキング ](../send/tracking.md)の詳細

### 配信レポート {#delivery-reports}

Adobe Campaignには、配信のパフォーマンスを分析するための包括的なレポートセットが用意されています。

* **配信の概要**：送信、配信、および失敗の概要
* **トラッキング指標**：開封率、クリック率、クリックスルー率
* **URLとクリックストリーム**：配信内の最も人気のあるリンク
* **ホットクリック**：受信者がメール内でクリックした場所を視覚的に表します

[配信レポート ](../reporting/delivery-reports.md)の詳細

### グローバルレポート {#global-reports}

グローバルレポートにアクセスして、あらゆるキャンペーンと配信のパフォーマンスを分析できます。

* **配信スループット**：時間の経過に伴って送信されるメッセージ
* **配信不能件数とバウンス**：失敗した配信の分析
* **ユーザーアクティビティ**：すべてのキャンペーンで開封、クリック、登録解除

[ グローバルレポート ](../reporting/global-reports.md)の詳細

## 関連トピック {#related-topics}

* [配信のベストプラクティス](delivery-best-practices.md)
* [強制隔離の管理](../send/quarantines.md)
* [配信の設定と送信](../send/configure-and-send.md)
* [レポートの基本を学ぶ](../reporting/gs-reporting.md)
