---
audience: end-user
user-guide-title: Campaign v8
description: Campaign v8 ドキュメント
breadcrumb-title: Campaign の概要
title: Campaign v8 ドキュメント
source-git-commit: edb099b3e882d857752af76798012ccd1c5a99be
workflow-type: tm+mt
source-wordcount: '496'
ht-degree: 98%

---


# Adobe Campaign v8 ドキュメント {#campaign-v8}

+ [Campaign v8 ドキュメント](campaign-home.md)
+ リリースと最新のアップデート {#releases}
   + [早期リリースノート](start/e-release-notes.md)
   + [リリースノート](start/release-notes.md)
   + 以前のリリースノート {#previous-rn}
      + [2022](start/release-notes-2022.md)
      + [2021](start/release-notes-2021.md)
   + [ガードレール](start/ac-guardrails.md)
   + [既知の問題](start/known-issues.md)
   + [互換性マトリックス](start/compatibility-matrix.md)
+ はじめに {#new}
   + [Adobe Campaign の概要](start/get-started.md)
   + [主な機能](start/whats-new.md)
   + [コンポーネントとプロセス](start/ac-components.md)
   + [Campaign への接続](start/connect.md)
   + Campaign UI {#ac-ui}
      + [Campaign インターフェイスの理解](start/campaign-ui.md)
      + [Campaign インターフェイスのカスタマイズ](start/customize-ui.md)
      + [フォルダーとビューの管理](audiences/folders-and-views.md)
   + [Classic v7 から v8 へ](start/v7-to-v8.md)
   + [FAQ](start/campaign-faq.md)
+ キャンペーン管理 {#campaigns}
   + [キャンペーンの基本を学ぶ](start/campaigns.md)
   + [キャンペーンオーケストレーション >](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/set-up-campaigns.html?lang=ja)
   + メッセージの送信{#send}
      + [メッセージの基本を学ぶ](start/create-message.md)
      + [配信テンプレートの操作](send/create-templates.md)
      + メール {#emails}
         + [メールのデザインと検証](send/email.md)
         + [ミラーページへのリンク](send/mirror-page.md)
         + [メールの送信と監視](send/send.md)
      + [SMS](send/sms.md)
      + [プッシュ通知](send/push.md)
      + [LINE メッセージ](send/line.md)
      + [ダイレクトメール](send/direct-mail.md)
      + [Twitter](send/twitter.md)
      + [トランザクションメッセージ](send/transactional.md)
      + 失敗、バウンス、強制隔離{#failures}
         + [強制隔離](send/quarantines.md)
         + [配信の失敗](send/delivery-failures.md)
      + [送信時間の最適化](send/predictive.md)
      + [購読の管理](start/subscriptions.md)
+ プロファイルと Audience Management {#audience}
   + [プロファイルとオーディエンスの基本を学ぶ](audiences/gs-audiences.md)
   + [オーディエンスの操作](start/audiences.md)
   + [プロファイルへのアクセス](audiences/view-profiles.md)
   + プロファイルの追加 {#add-profiles}
      + [プロファイルの手動作成](audiences/create-profiles.md)
      + [ファイルからのプロファイルのインポート](audiences/import-profiles.md)
      + [外部プロファイルの操作](audiences/external-profiles.md)
      + [Web フォームでのプロファイルデータの収集](audiences/collect-profiles.md)
      + [ターゲットマッピングの操作](audiences/target-mappings.md)
   + オーディエンスの作成 {#create-audiences}
      + [連絡先リストの作成](audiences/create-audiences.md)
      + [フィルターの作成と管理](audiences/create-filters.md)
   + [オーディエンスをアドビソリューションと共有](start/shared-audiences.md)
   + [ベストプラクティス](audiences/audiences-best-practices.md)
+ コンテンツ管理 {#content}
   + [Web アプリとフォームのデザイン](dev/webapps.md)
+ プライバシーとセキュリティの管理 {#privacy}
   + [プライバシーリクエストの管理](start/privacy.md)
   + [セキュリティガイドライン](config/security.md)
+ 意思決定管理 {#offers}
   + [リアルタイムインタラクションの概要](interaction/interaction.md)
   + [環境とアーキテクチャ](interaction/interaction-architecture.md)
   + [ベストプラクティス](interaction/interaction-best-practices.md)
   + 設定の定義{#interaction-settings}
      + [オペレーターの作成](interaction/interaction-operators.md)
      + [環境の作成](interaction/interaction-env.md)
      + [定義済みフィルターの作成](interaction/interaction-predefined-filters.md)
      + [オファースペースの作成](interaction/interaction-offer-spaces.md)
   + [オファーカタログの作成](interaction/interaction-offer-catalog.md)
   + [オファーの作成](interaction/interaction-offer.md)
   + [オファーの送信（アウトバウンド）](interaction/interaction-send-offers.md)
   + オファーの提示（インバウンド）{#inbound}
      + [コンテキスト](interaction/interaction-present-offers.md)
      + [Web ページでのオファーの呼び出し](interaction/interaction-integration.md)
      + [匿名インタラクションの管理](interaction/anonymous-interactions.md)
   + [レポートと履歴](interaction/interaction-tracking.md)
   + [ユースケース](interaction/interaction-use-cases.md)
+ レポートと分析 {#analytics}
   + [追跡と監視](start/tracking.md)
   + レポートの操作{#reports}
      + [レポートの基本を学ぶ](reporting/gs-reporting.md)
      + キューブの作成{#cubes}
         + [キューブの基本を学ぶ](reporting/gs-cubes.md)
         + [キューブの作成](reporting/cube-indicators.md)
         + [キューブを使用したレポートの作成](reporting/cube-tables.md)
         + [キューブのカスタマイズ](reporting/customize-cubes.md)
      + ビルトインレポート{#ac-reports}
         + [組み込みレポートのリスト](reporting/built-in-reports.md)
         + [グローバルレポート](reporting/global-reports.md)
         + [配信レポート](reporting/delivery-reports.md)
         + [組み込み指標の計算](reporting/metrics-calculation.md)
      + [カスタムレポート](reporting/custom-reports.md)
+ データ管理{#data}
   + [ワークフローの基本を学ぶ](config/workflows.md)
   + [データのインポート](start/import.md)
   + [ワークフロードキュメント](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/about-workflows.html?lang=ja)
+ 統合 {#connect}
   + [Campaign をその他のソリューションと接続する](connect/integration.md)
   + [Campaign + Experience Platform](connect/ac-aep.md)
   + [Campaign + Journey Optimizer](connect/ac-ajo.md)
   + [Campaign と Analytics の統合](connect/ac-aa.md)
   + [Campaign と Experience Manager の統合](connect/ac-aem.md)
   + [Campaign と Target の統合](connect/ac-at.md)
   + [Campaign と Experience Cloud トリガーの統合](connect/ac-triggers.md)
   + [Campaign と Twitter の統合](connect/ac-tw.md)
   + [Campaign と外部データベースの統合](connect/fda.md)
   + Campaign と CRM の統合 {#ac-crm}
      + [CRM コネクタの基本を学ぶ](connect/crm.md)
      + [Campaign と SFDC の連携](connect/ac-sfdc.md)
      + [Campaign と Microsoft Dynamics の連携](connect/ac-ms-dyn.md)
      + [データの同期](connect/crm-data-sync.md)
+ 管理 {#admin}
   + ユーザーと権限 {#permissions}
      + [権限の基本を学ぶ](start/gs-permissions.md)
      + [ユーザー権限の管理](start/manage-permissions.md)
      + [フォルダーに対する権限の追加](start/folder-permissions.md)
   + [コントロールパネル](config/self-service.md)
+ アーキテクチャと設定 {#config}
   + アーキテクチャ {#architecture}
      + [グローバル原則](architecture/general-architecture.md)
      + [アーキテクチャ](architecture/architecture.md)
      + FDA Snowflake のデプロイメント {#fda}
         + [FDA-Snowflake とは](architecture/fda-deployment.md)
      + エンタープライズ（FFDA）デプロイメント {#ffda}
         + [Campaign FFDA とは](architecture/enterprise-deployment.md)
         + 特性 {#ffda-characteristics}
            + [鍵の管理と単一性](architecture/keys.md)
            + [新しい API](architecture/new-apis.md)
            + [API のステージングメカニズム](architecture/staging.md)
            + [レプリケーションメカニズム](architecture/replication.md)
   + 実装 {#implement}
      + [実装手順](start/implement.md)
      + [インスタンスのカスタマイズ](dev/customize.md)
      + [データモデルのベストプラクティス](dev/datamodel-best-practices.md)
   + 設定 {#configuration}
      + [メールの設定](config/email-settings.md)
      + [トランザクションメッセージの設定](config/transactional-msg-settings.md)
      + [Campaign SDK とアプリの統合](config/push-config.md)
      + [外部アカウント](config/external-accounts.md)
+ 開発者向けリソース {#developer}
   + [Campaign データモデル](dev/datamodel.md)
   + スキーマとフォーム {#shemas-forms}
      + [スキーマの操作](dev/schemas.md)
      + [スキーマの作成](dev/create-schema.md)
      + [スキーマの拡張](dev/extend-schema.md)
      + [フィルタースキーマ](dev/filter-schema.md)
      + [スキーマの構造](dev/schema-structure.md)
      + [データベースマッピング](dev/database-mapping.md)
      + [PI ビューの制限](dev/restrict-pi-view.md)
      + [カスタム受信者テーブルの使用](dev/custom-recipient.md)
      + [データベースの更新](dev/update-database-structure.md)
      + [入力フォーム](dev/forms.md)
   + [Campaign API](dev/api.md)
+ [Campaign コントロールパネル >](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=ja)
+ [Campaign 自動化ガイド >](https://experienceleague.adobe.com/docs/campaign/automation/home.html?lang=ja)
