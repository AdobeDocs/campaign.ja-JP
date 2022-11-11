---
audience: user
user-guide-title: Campaign 自動化ガイド
user-guide-description: Campaign 自動化ガイド
source-git-commit: 2b1dec4b9c456df4dfcebfe10d18e0ab01599275
workflow-type: tm+mt
source-wordcount: '424'
ht-degree: 100%

---


# Campaign 自動化ガイド {#automation}

+ [Campaign 自動化ガイド](home.md)
+ ワークフローを使用した自動化 {#workflows}
   + ワークフローの基本を学ぶ {#introduction}
      + [ワークフローについて](workflow/about-workflows.md)
      + ワークフローのタイプ {#wf-type}
         + [ターゲティングワークフロー](workflow/targeting-workflows.md)
         + [キャンペーンワークフロー](workflow/campaign-workflows.md)
         + [テクニカルワークフロー](workflow/technical-workflows.md)
      + [ワークフローの作成](workflow/build-a-workflow.md)
      + [ベストプラクティス](workflow/workflow-best-practices.md)
      + [ワークフローデータの使用](workflow/use-workflow-data.md)
   + ワークフローの実行 {#executing-a-workflow}
      + [ワークフローの開始](workflow/start-a-workflow.md)
      + [ワークフローのライフサイクル](workflow/workflow-life-cycle.md)
      + [承認の設定](workflow/define-approvals.md)
   + ワークフローの監視 {#monitoring-workflows}
      + [ワークフロー実行の監視](workflow/monitor-workflow-execution.md)
      + [テクニカルワークフローの監視](workflow/monitor-technical-workflows.md)
      + [ワークフローヒートマップ](workflow/heatmap.md)
   + ワークフローアクティビティ {#wf-activities}
      + [アクティビティの概要](workflow/activities.md)
      + ターゲティングアクティビティ {#targeting-activities}
         + [ターゲティングアクティビティのリスト](workflow/targeting-activities.md)
         + [セル](workflow/cells.md)
         + [データソースを変更](workflow/change-data-source.md)
         + [ディメンションを変更](workflow/change-dimension.md)
         + [CRM コネクタ](workflow/crm-connector.md)
         + [重複の除外](workflow/deduplication.md)
         + [配信の概要](workflow/delivery-outline.md)
         + [スキーマの編集](workflow/edit-schema.md)
         + [エンリッチメント](workflow/enrichment.md)
         + [除外](workflow/exclusion.md)
         + [増分クエリ](workflow/incremental-query.md)
         + [積集合](workflow/intersection.md)
         + [リスト更新](workflow/list-update.md)
         + [オファー（セル別）](workflow/offers-by-cell.md)
         + [オファーエンジン](workflow/offer-engine.md)
         + [クエリ](workflow/query.md)
         + [リスト読み込み](workflow/read-list.md)
         + [分割](workflow/split.md)
         + [購読サービス](workflow/subscription-services.md)
         + [和集合](workflow/union.md)
         + [データの更新](workflow/update-data.md)
      + フロー制御アクティビティ {#flow-control-activities}
         + [フロー制御アクティビティのリスト](workflow/flow-control-activities.md)
         + [アラート](workflow/alert.md)
         + [AND 結合](workflow/and-join.md)
         + [承認](workflow/approval.md)
         + [外部シグナル](workflow/external-signal.md)
         + [分岐](workflow/fork.md)
         + [ジャンプ（開始点と終了点）](workflow/jump--start-point-and-end-point-.md)
         + [開始と終了](workflow/start-and-end.md)
         + [スケジューラー](workflow/scheduler.md)
         + [サブワークフロー](workflow/sub-workflow.md)
         + [テスト](workflow/test.md)
         + [時間制限](workflow/time-constraint.md)
         + [待機](workflow/wait.md)
      + アクションアクティビティ {#action-activities}
         + [アクションアクティビティのリスト](workflow/action-activities.md)
         + [コンテンツ管理](workflow/content-management.md)
         + [連続配信](workflow/continuous-delivery.md)
         + [クロスチャネル配信](workflow/cross-channel-deliveries.md)
         + [データ抽出（ファイル）](workflow/extraction--file-.md)
         + [データ読み込み (ファイル)](workflow/data-loading--file-.md)
         + [データの読み込み（RDBMS）](workflow/data-loading--rdbms-.md)
         + [配信](workflow/delivery.md)
         + [配信コントロール](workflow/delivery-control.md)
         + [ローカルの承認](workflow/local-approval.md)
         + [読み込み（SOAP）](workflow/loading-soap.md)
         + [nlserver モジュール](workflow/nlserver-module.md)
         + [繰り返し配信](workflow/recurring-delivery.md)
         + [SQL コードと JavaScript コード](workflow/sql-code-and-javascript-code.md)
         + [SQL データ管理](workflow/sql-data-management.md)
         + [集計の更新](workflow/update-aggregate.md)
      + イベントアクティビティ {#event-activities}
         + [イベントアクティビティのリスト](workflow/event-activities.md)
         + [ファイルコレクター](workflow/file-collector.md)
         + [ファイル転送](workflow/file-transfer.md)
         + [インバウンド E メール](workflow/inbound-emails.md)
         + [インバウンド SMS](workflow/inbound-sms.md)
         + [Web ダウンロード](workflow/web-download.md)
   + ユースケース {#use-cases}
      + [ワークフローのユースケースについて](workflow/workflow-use-cases.md)
      + 配信 {#deliveries}
         + [「ローカルの承認」アクティビティの使用](workflow/local-approval-activity.md)
         + [誕生日メールの送信](workflow/send-a-birthday-email.md)
         + [配信コンテンツの読み込み](workflow/load-delivery-content.md)
         + [クロスチャネル配信ワークフロー](workflow/cross-channel-delivery-workflow.md)
         + [カスタム日付フィールドを使用した E メールエンリッチメント](workflow/email-enrichment-with-custom-date-fields.md)
      + 監視 {#monitoring}
         + [リストへのレポートの送信](workflow/send-a-report-to-a-list.md)
         + [ワークフローの監視](workflow/workflow-supervision.md)
         + [オペレーターへのパーソナライズされたアラートの送信](workflow/send-alerts-to-operators.md)
      + データ管理 {#data-management}
         + [データ更新の調整](workflow/coordinate-data-updates.md)
         + [概要リストの作成](workflow/create-a-summary-list.md)
         + [データのエンリッチメント](workflow/enrich-data.md)
         + [集計の使用](workflow/using-aggregates.md)
         + [重複排除アクティビティの結合機能の使用](workflow/deduplication-merge.md)
         + [繰り返しインポートワークフローの設定](workflow/recurring-import-workflow.md)
      + クエリの設計 {#designing-queries}
         + [増分クエリを使用した四半期ごとのリストの更新](workflow/quarterly-list-update.md)
      + クエリとフィルター {#designing-queries}
         + [受信者テーブルのクエリ](workflow/querying-recipient-table.md)
         + [配信情報のクエリ](workflow/query-delivery-info.md)
         + [集計の計算](workflow/compute-aggregates.md)
         + [グループ管理を使用したクエリ](workflow/query-grouping-management.md)
         + [多対多関係を使用したクエリ](workflow/query-many-to-many-relationship.md)
         + [列挙タイプ計算フィールドの追加](workflow/adding-enumeration-type-calculated-field.md)
         + [フィルターの作成](workflow/create-a-filter.md)
         + [重複した受信者のフィルタリング](workflow/filter-duplicated-recipients.md)
   + 詳細設定 {#advanced-management}
      + [ワークフローのプロパティ](workflow/workflow-properties.md)
      + [詳細設定パラメーター](workflow/advanced-parameters.md)
      + [JavaScript のスクリプトとテンプレート](workflow/javascript-scripts-and-templates.md)
      + [ワークフローでの JavaScript コードの例](workflow/javascript-in-workflows.md)
      + [外部データベースへのアクセス](workflow/accessing-an-external-database--fda-.md)
      + [権限の管理](workflow/managing-rights.md)
      + [アクティビティ画像の変更](workflow/change-activity-images.md)
      + [タイムゾーンの管理](workflow/managing-time-zones.md)
+ キャンペーンのオーケストレーション {#campaign-orchestration}
   + [マーケティングキャンペーンの基本を学ぶ](campaigns/set-up-campaigns.md)
   + [プログラムとキャンペーンを作成](campaigns/marketing-campaign-create.md)
   + [テンプレートの作成と設定](campaigns/marketing-campaign-templates.md)
   + [配信の追加](campaigns/marketing-campaign-deliveries.md)
   + [オーディエンスの選択](campaigns/marketing-campaign-target.md)
   + [ドキュメントとアセットの管理](campaigns/marketing-campaign-assets.md)
   + [承認の設定と管理](campaigns/marketing-campaign-approval.md)
   + [繰り返しキャンペーンと定期的なキャンペーン](campaigns/recurring-periodic-campaigns.md)
   + [キャンペーンの監視](campaigns/marketing-campaign-monitoring.md)
   + [プロバイダー、在庫、予算](campaigns/providers--stocks-and-budgets.md)
+ キャンペーンの最適化（アドオン）{#campaign-optimization}
   + [キャンペーンタイポロジの概要](campaign-opt/campaign-typologies.md)
   + [頻度ルール](campaign-opt/pressure-rules.md)
   + [一貫性ルール](campaign-opt/consistency-rules.md)
   + [コントロールルール](campaign-opt/control-rules.md)
   + [フィルタリングルール](campaign-opt/filtering-rules.md)
   + [ルールの適用](campaign-opt/apply-rules.md)
   + [キャンペーンシミュレーション](campaign-opt/campaign-simulations.md)
+ 分散型マーケティング（アドオン）{#distributed-marketing}
   + [分散型マーケティングについて](distributed-marketing/about-distributed-marketing.md)
   + [ローカルキャンペーンの作成](distributed-marketing/creating-a-local-campaign.md)
   + [協調キャンペーンの作成](distributed-marketing/creating-a-collaborative-campaign.md)
   + [キャンペーンパッケージの公開](distributed-marketing/publishing-the-campaign-package.md)
   + [キャンペーンへのアクセス](distributed-marketing/accessing-campaigns.md)
   + [キャンペーンのトラッキング](distributed-marketing/tracking-a-campaign.md)
   + [ユースケース](distributed-marketing/examples.md)
+ [Campaign v8 ドキュメント](https://experienceleague.adobe.com/docs/campaign/campaign-v8/campaign-home.html?lang=ja)