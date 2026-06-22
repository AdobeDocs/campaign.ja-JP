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
source-git-commit: 6cf587ecc9cc1e4cf9b3de0d2067e0c4562afe01
workflow-type: tm+mt
source-wordcount: 2206
ht-degree: 6%

---

# キャンペーンモニタリングの概要 {#monitor-campaign}

Adobe Campaignは、個々のメッセージの送信の有無、ワークフローの失敗の理由、インスタンスのデータベース処理能力など、あらゆるレベルを可視化できます。 このページでは、あらゆるモニタリング機能がマッピングされているため、何かに注意が必要な場合に、どこで確認すればよいかがわかります。

>[!NOTE]
>
>Campaign管理者は、[ キャンペーンCampaign コントロールパネル](#control-panel)を使用して、インスタンスのモニタリング、パフォーマンスの管理、セルフサービス機能を使用した設定を行うこともできます。

>[!TIP]
>
>**どこから始めればよいかわからない？**
>
>- キャンペーンを確認するマーケター→[配信の監視](#monitor-deliveries)
>- ワークフロー→トラブルシューティング [ ワークフローの監視](#monitor-workflows)
>- 管理者がインスタンスの正常性を確認しています→ [ インスタンスを監視](#monitor-instance)

## 配信の監視 {#monitor-deliveries}

配信を送信後にモニタリングすることは、マーケティングキャンペーンを効率化し顧客に確実にリーチするための重要なステップです。 配信を送信した後、配信ダッシュボードでそのステータスを監視し、主要指標を追跡できます。 ダッシュボードでは、配信ログ、除外ログ、トラッキングログなどの監視機能にアクセスでき、あらゆるチャネルをまたいで配信パフォーマンスを分析するのに役立ちます。

>[!NOTE]
>
>**Campaignを初めて使用する場合** 配信ダッシュボードは日々の主な画面です。 送信された配信を開き、「**ログ**」タブをクリックすると、メッセージを受信した受信者、除外された受信者、その理由、およびクリックまたは開封した受信者が表示されます。

**メール配信** - メール配信のステータスを監視し、主要な指標を追跡し、詳細なログにアクセスします。 キャンペーン UI](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/send/monitor/delivery-dashboard)、[配信ステータス ](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/send/monitor/delivery-statuses)および[ メール配信モニタリング ](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/send/emails/send#email-monitoring)の[配信の監視について詳しく説明します。

**SMS配信** - SMS配信のステータスを追跡し、SMS配信ダッシュボードで主要な指標を監視します。 [SMS監視](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/send/sms/sms-monitor)の詳細をご覧ください。

**プッシュ通知** - プッシュ通知配信を監視して、モバイルアプリユーザーに効果的にリーチできるようにします。 [ プッシュ通知モニタリング ](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/send/push/push#push-test)の詳細をご覧ください。

**トランザクションメッセージ** - イベントによってトリガーされるメッセージの場合は、イベント処理ステータス、メッセージ実行および配信ステータスを監視します。 [ トランザクションメッセージ監視](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/send/real-time/event/delivery-execution#monitor-messages)の詳細をご覧ください。

**配信エラー** – 配信が失敗した理由を理解することは、クリーンなデータベースを維持し、配信品質を高めるために重要です。 配信の失敗は、次の3つのタイプに分類されます。違いを理解することで、どのアクションを実行すべきかを決定できます。

| エラータイプ | 意味 | Campaignの機能 |
| --- | --- | --- |
| **ハードバウンス** | アドレスが完全に無効です（存在しません、ドメインが不明） | 連絡先は自動的に強制隔離されます。今後の配信ではターゲットにされません |
| **ソフトバウンス** | 一時的な問題（完全なメールボックス、サーバーが一時的に利用できない） | キャンペーンは、設定された期間に自動的に再試行されます |
| **無視** | アドレスは送信前に既に強制隔離されているか、またはメールブロックリストに加える中です | 試行はありません。バウンスとは別にカウントされます |

[配信の失敗と強制隔離](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/send/monitor/delivery-failures)について詳しく説明します。

## 配信品質の監視 {#monitor-deliverability}

>[!NOTE]
>
>「配信」としてカウントされたメッセージは、受信サーバーによって受け入れられたことを意味します。受信トレイの配置を保証するものではありません。 配信品質モニタリングは、送信ドメイン認証、IP レピュテーション、メールコンテンツが受信トレイのプロバイダー基準を満たしているかどうかを示します。

配信品質の監視により、メッセージを受信者の受信トレイに確実に届け、スパムフィルターを避けることができます。 Adobe Campaignには、配信レポート、受信トレイのレンダリング、SpamAssassin テスト、ブロードキャスト統計情報など、配信を監視および向上させるための組み込みツールがいくつか用意されています。 クリーンなメールリストの維持、送信者のレピュテーションのモニタリング、送信ドメインの認証などの配信品質のベストプラクティスに従うことは、配信率を良好に保つために不可欠です。

[配信品質モニタリングツール ](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/send/deliverability-management/monitoring-deliverability)と[配信品質のベストプラクティス ](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/send/deliverability-management/about-deliverability)について詳しく説明します。

## ワークフローの監視 {#monitor-workflows}

マーケティング施策とデータ処理の自動化には、ワークフローが不可欠です。 ワークフロー実行を監視することで、次のことが可能になります。

- ワークフローが正常に完了したことを確認
- エラーの特定とトラブルシューティング
- ワークフローパフォーマンスの最適化

>[!TIP]
>
>ワークフローに&#x200B;**失敗** ステータスが表示されている場合は、それを開き、赤いアクティビティを右クリックして、**ログを表示**&#x200B;を選択します。 エラーメッセージは、何が問題だったのか、どのレコードで発生したのかを正確に特定します。

### ワークフロー監視機能 {#workflow-monitoring}

**次のワークフロー要素を監視します：**

**ワークフロー実行ステータス** - ワークフローが実行中、一時停止、失敗、または完了しているかどうかを追跡します。 [ ワークフロー実行の詳細](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution#_blank)

**アクティビティ実行ログ** – 各ワークフローアクティビティの詳細なログにアクセスして、問題のトラブルシューティングとパフォーマンスの最適化を行います。

**Workflow HeatMap** - インスタンス全体で同時に実行されているすべてのワークフローの視覚的な概要。 このツールを使用して、ピーク時の読み込み期間を特定し、不均衡なリソースを使用するワークフローを特定し、実行の競合を回避するためのスケジューリングを計画します。 Campaign管理者のみが使用できます。 [ ワークフローヒートマップの詳細](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/monitoring-workflows/heatmap#_blank)

**ワークフロー履歴** – すべてのワークフロー実行と変更を経時的に追跡して、ワークフローの動作とパフォーマンスを把握します。

## インスタンスの監視 {#monitor-instance}

インスタンスのモニタリングは、Adobe Campaign環境の健全性とパフォーマンスの確保に役立ちます。 Campaign v8 Managed Cloud Servicesでは、Adobeが代わりにインフラストラクチャを監視および管理します。 [Adobeが管理する監視](#adobe-cloud-monitoring)の詳細をご覧ください。

### 監査記録 {#audit-trail}

監査証跡のセルフサービスインターフェイスを使用すると、Adobe Campaign インスタンス内で行われた変更を監視できます。 監査記録は、インスタンス内で発生するアクションとイベントの包括的なリストをリアルタイムで取得します。

**監査記録を使用して次の操作を行います：**

- **コンポーネントの変更を追跡**：ワークフロー、スキーマ、オプション、その他のコンポーネントに対する処理を監視します
- **変更を加えたユーザーを特定**：特定の要素を最後に更新したユーザーと日時を確認します
- **ユーザーのアクションを理解**: ユーザーがインスタンスで実行した内容を確認して、トラブルシューティングまたは監査を行います
- **コンプライアンスの維持**: コンプライアンスとセキュリティの目的で、すべての設定変更を追跡します

監査証跡は、Campaign クライアントコンソールからアクセスでき、ユーザーが実行したアクションに関する詳細情報が提供されます。

[監査記録](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/analytics/audit-trail)の詳細

### パフォーマンス監視 {#performance-monitoring}

Campaign v8には、インスタンスのパフォーマンスを追跡し、最適な操作を確保するためのモニタリング機能がいくつか用意されています。

**データベースの監視** - Campaign コントロールパネルを通じてデータベースの使用状況と容量を監視し、最適なパフォーマンスとストレージ管理を実現します。 [ データベース監視の詳細](https://experienceleague.adobe.com/en/docs/control-panel/using/performance-monitoring/database-monitoring/database-monitoring#_blank)

**アクティブなプロファイルの監視** - アクティブなプロファイルの使用状況を契約上の制限に照らして追跡することで、コンプライアンスを維持し、リソースの割り当てを最適化します。 [ アクティブなプロファイルの詳細](https://experienceleague.adobe.com/en/docs/control-panel/using/performance-monitoring/active-profiles-monitoring#_blank)

**ワークフロー監視** - ワークフロー実行ステータスを監視して、長時間実行中のワークフローを特定し、すべてのテクニカルワークフローが正しく実行されていることを確認します。 [ テクニカルワークフローの詳細](#technical-workflows)

**配信スループットと待ち時間** - Campaign コントロールパネルを介したトランザクションコミュニケーションの配信スループット（1時間ごとに送信されるメッセージ）と待ち時間を追跡します。 [ スループット監視の詳細](https://experienceleague.adobe.com/en/docs/control-panel/using/performance-monitoring/throughputs-latencies#_blank)

>[!NOTE]
>
>Campaign v8 Managed Cloud Servicesの場合、サーバーインフラストラクチャ（CPU、メモリ、ディスク）はAdobeによって監視および管理されます。 [Adobeが管理する監視](#adobe-cloud-monitoring)の詳細をご覧ください。

### Adobe管理のモニタリング {#adobe-cloud-monitoring}

Adobe Campaign Cloud Servicesは、柔軟なクラウド基盤を通じて、要求の厳しい顧客体験を提供するための重要なサポートを提供します。 これにより、Adobe Campaignのインフラストラクチャを自社で管理または運用することなく、顧客体験を立ち上げ、監視、最適化することができます。

Adobeは、Campaign Cloud Services環境をモニタリングし、技術的な問題を検出して、パフォーマンスと進行中のプロジェクトに関する継続的なフィードバックを提供することで、さまざまな問題を管理し、混乱を最小限に抑えます。

**Adobeの対応方法**

Adobeは、Campaign ネットワーク上のすべてのクリティカルネットワーク機器を24時間年中無休で監視し、修正またはエスカレーションが必要な場合は、監視システムから通知を受け取ります。 問題を検出すると、システムは自動再起動メカニズムと自動起動メカニズムを使用して修復を試みます。 システムが自己修復しない場合、Adobe On-Call エンジニアリングは、事前に定義されたアラートランブックに基づいてトラブルシューティングを実行します。

>[!NOTE]
>
>Adobeによって実行された一部のモニタリングアクションは、**campaign-loginmonitor** ユーザーの下のCampaign ログに表示されます。

Adobeの内部モニタリングに加えて、Campaign クライアントコンソールまたは[Campaign Campaign コントロールパネル](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/permissions/self-service)からモニタリング機能に直接アクセスできます。 Campaign コントロールパネルを使用すると、インスタンスに関するリアルタイムアラートを購読し、特定されたインシデント（有効期限が近づいているSSL証明書など）に対する推奨される修復手順を受け取ることができます。

**分類の監視**

Adobeは、次の3つの階層で環境を監視します。

| 階層 | グループ | 潜在的なビジネスへの影響 |
| --- | --- | --- |
| **階層1: インフラストラクチャ** | データベース容量の消耗 | ログイン、バッチ配信の実行、クエリの実行ができないなどのパフォーマンスの問題 |
| **階層1: インフラストラクチャ** | データベースの可用性 | ユーザーやサービスがシステムを使用できない場合があります |
| **階層1: インフラストラクチャ** | データベースのオーバーロード（バーストバランス） | ログイン、バッチ配信の実行、クエリの実行ができないなどのパフォーマンスの問題 |
| **階層1: インフラストラクチャ** | データベース シーケンスとトランザクション IDの消耗 | 新しいワークフロー、配信、またはバッチメールを送信できない |
| **階層1: インフラストラクチャ** | SFTP ストレージ | SFTP サーバー上のデータを更新または取得できない |
| **階層2：プラットフォームとWeb** | ログイン | ユーザーはログインできない場合があります。スケジュールされたアクティビティとワークフローは実行できません |
| **階層2：プラットフォームとWeb** | API ロック | ユーザーまたはサービスは、操作を認証または実行できない場合があります |
| **階層2：プラットフォームとWeb** | Web | Campaignへの新しい接続を作成できません |
| **階層2：プラットフォームとWeb** | データセンターネットワーク | データセンター内のユーザーのパフォーマンスの問題または完全な使用不可 |
| **階層3: ソフトウェア** | 配信トラッキング | トラッキングログの処理が利用できません |
| **階層3: ソフトウェア** | inMail | メール配信のエラーとバウンスに関するフィードバックがない |
| **階層3: ソフトウェア** | Message Center ステータス | トランザクション配信を送信できません |
| **階層3: ソフトウェア** | MTA | スケジュールされたメール配信とアドホックなメール配信を送信できない |
| **階層3: ソフトウェア** | ワークフローサーバーのステータス | ワークフローを実行できません |
| **階層3: ソフトウェア** | Web APIの可用性 | HTTP リクエストを処理できないか、API呼び出しを実行できません |
| **階層3: ソフトウェア** | インバウンドインタラクション | インバウンドインタラクションを処理できない |

>[!NOTE]
>
>Adobe Campaign Cloud Servicesは、マルチクラウド戦略にもとづいて構築されており、AWSおよびAzureでのデプロイメントを提供します。 ベンダーの違いにより、モニタリング機能は、AWS、Azure、その他のデータセンターのデプロイメントによって異なります。 上記の表は、特に明記されていない限り、AWSでホストされているCampaign Cloud Servicesのお客様に適用されます。 また、Adobe Campaignでは、現在、オンコールエンジニアリングで使用されるすべてのモニタリングデータをお客様に公開しているわけではありません。

### テクニカルワークフロー {#technical-workflows}

テクニカルワークフローは、Campaign インスタンスを維持するためにバックグラウンドで実行される必須のプロセスです。

**技術的なワークフローを監視：**

- スケジュールに従って実行
- エラーなしで正常に完了
- データの正しい処理

**監視する主要なテクニカルワークフロー：**

| ワークフロー | 目的 | 失敗した場合 |
| --- | --- | --- |
| **トラッキング** | メール配信からのデータを追跡するプロセス | クリックして指標を開くレポートで更新を停止する |
| **クリーンアップ** | データベースのパフォーマンスを維持するために、古いデータとログを削除します | データベースがチェックされずに増加し、クエリと配信のパフォーマンスが低下する |
| **配信品質の更新** | 配信品質ルールとスパムフィルターパターンを更新します | ルールが古くなると、フィルタリングの精度が低下する場合があります |
| **データベースのクリーンアップ** | 古い配信ログとトラッキングログを消去します | ログの収集により、クエリやレポートの作成が時間の経過とともに遅くなる |

[ テクニカルワークフロー](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/introduction/wf-type/technical-workflows#_blank)の詳細

### Campaign コントロールパネル {#control-panel}

Campaign Campaign コントロールパネルは、管理者がCampaign インスタンスを監視および管理するためのセルフサービス機能を提供します。

| 監視タイプ | 能力 |
| --- | --- |
| **パフォーマンス** | アクティブなプロファイル使用状況の追跡、データベースの使用状況と容量の監視、ワークフロー実行ステータスの表示、配信スループットと待ち時間の監視 |
| **インフラストラクチャ** | SFTP ストレージ容量の監視、サブドメイン設定の追跡、SSL証明書の有効期限の監視、IP許可リストの管理 |
| **インスタンス** | ビルドバージョンとインストール済みパッケージの表示、システム設定の監視、承認済み外部ドメインの管理 |

[Campaign コントロールパネル](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/permissions/self-service)および[Campaign コントロールパネルパフォーマンスの監視](https://experienceleague.adobe.com/en/docs/control-panel/using/performance-monitoring/about-performance-monitoring#_blank)の詳細

>[!NOTE]
>
>Campaign v8 Managed Cloud Servicesの場合、Adobeは、サーバーインフラストラクチャ、オペレーティングシステム、アプリケーションレイヤーを監視および管理します。 [Adobeが管理する監視](#adobe-cloud-monitoring)の詳細をご覧ください。 このページとCampaign コントロールパネルで説明されているモニタリング機能を使用して、インスタンスのパフォーマンス、ワークフロー、配信をモニタリングできます。

## トラッキングとレポート {#tracking-reporting}

### メッセージトラッキング {#message-tracking}

受信者の行動を追跡し、キャンペーンの効果を測定します。

- **開封数**：受信者がメールを開封したタイミングを追跡します
- **クリック**：受信者がクリックするリンクを監視する
- **登録解除**: オプトアウト要求を追跡
- **ページビューをミラーリング**: ブラウザーでメールを表示している受信者の数を確認します

[ メッセージトラッキング ](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/analytics/tracking/tracking)の詳細

### 配信レポート {#delivery-reports}

Adobe Campaignには、配信のパフォーマンスを分析するための包括的なレポートセットが用意されています。

- **配信の概要**：送信、配信、および失敗の概要
- **トラッキング指標**：開封率、クリック率、クリックスルー率
- **URLとクリックストリーム**：配信内の最も人気のあるリンク
- **ホットクリック**：受信者がメール内でクリックした場所を視覚的に表します

[配信レポート ](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/analytics/reports/ac-reports/delivery-reports)の詳細

### グローバルレポート {#global-reports}

グローバルレポートにアクセスして、あらゆるキャンペーンと配信のパフォーマンスを分析できます。

- **配信スループット**：時間の経過に伴って送信されるメッセージ
- **配信不能件数とバウンス**：失敗した配信の分析
- **ユーザーアクティビティ**：すべてのキャンペーンで開封、クリック、登録解除

[ グローバルレポート ](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/analytics/reports/ac-reports/global-reports)の詳細

## 関連トピック {#related-topics}

- [配信のベストプラクティス](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/send/delivery-best-practices)
- [強制隔離の管理](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/send/monitor/quarantines)
- [配信の設定と送信](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/send/validate/configure-and-send)
- [レポートの基本を学ぶ](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/analytics/reports/gs-reporting)
