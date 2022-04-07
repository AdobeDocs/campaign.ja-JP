---
audience: end-user
user-guide-title: Campaign v8
description: Campaign v8 ドキュメント
breadcrumb-title: Campaign v8
title: Campaign v8 ドキュメント
source-git-commit: c3beb735f54606537bcc977f2f0539767d15b2d9
workflow-type: tm+mt
source-wordcount: '307'
ht-degree: 81%

---


# Adobe Campaign v8 ドキュメント {#campaign-v8}

+ [Campaign v8 ドキュメント](campaign-home.md)
+ 新機能{#new}
   + [主な機能](start/whats-new.md)
   + [リリースノート](start/release-notes.md)
   + [既知の制限事項](start/known-limitations.md)
   + [Classic v7 から v8](start/capability-matrix.md)
+ 開始 {#start}
   + [基本を学ぶ](start/get-started.md)
   + [コンポーネントとプロセス](start/ac-components.md)
   + Campaign UI {#ac-ui}
      + [Campaign のインターフェイスを確認する](start/campaign-ui.md)
      + [Campaign インターフェイスのカスタマイズ](start/customize-ui.md)
   + [オーディエンスの操作](start/audiences.md)
   + [データの読み込み](start/import.md)
   + [キャンペーンの作成](start/campaigns.md)
   + [メッセージの送信](start/create-message.md)
   + [購読の管理](start/subscriptions.md)
   + [追跡と監視](start/tracking.md)
   + [指標とレポート](start/reporting.md)
   + [よくある質問](start/campaign-faq.md)
+ 実装 {#implement}
   + [実装手順](start/implement.md)
   + [インスタンスのカスタマイズ](dev/customize.md)
   + [セキュリティガイドライン](config/security.md)
   + [Web アプリとフォームのデザイン](dev/webapps.md)
   + [データモデルのベストプラクティス](dev/datamodel-best-practices.md)
+ デプロイ {#deploy}
   + [互換性マトリックス](start/compatibility-matrix.md)
   + [Campaign への接続](start/connect.md)
   + [権限](start/permissions.md)
   + [Campaign コントロールパネル](config/self-service.md)
+ プロファイルとオーディエンス {#profiles-and-audiences}
   + [概要](audiences/gs-audiences.md)
   + [プロファイルへのアクセス](audiences/view-profiles.md)
   + プロファイルの追加 {#add-profiles}
      + [手動でのプロファイルの作成](audiences/create-profiles.md)
      + [ファイルからのプロファイルのインポート](audiences/import-profiles.md)
      + [外部プロファイルの操作](audiences/external-profiles.md)
      + [Web フォームでのプロファイルデータの収集](audiences/collect-profiles.md)
   + オーディエンスの作成 {#create-audiences}
      + [連絡先のリストを作成](audiences/create-audiences.md)
      + [フィルターの作成と管理](audiences/create-filters.md)
   + [フォルダーとビューの管理](audiences/folders-and-views.md)
   + [ベストプラクティス](audiences/audiences-best-practices.md)
+ メッセージの送信{#send}
   + [メール](send/email.md)
   + [SMS](send/sms.md)
   + [プッシュ通知](send/push.md)
   + [LINE メッセージ](send/line.md)
   + [ダイレクトメール](send/direct-mail.md)
   + [ソーシャルマーケティング](send/twitter.md)
   + [トランザクションメッセージ](send/transactional.md)
   + 失敗、バウンス、強制隔離{#failures}
      + [強制隔離](send/quarantines.md)
      + [配信エラー](send/delivery-failures.md)
+ リアルタイムインタラクション{#interaction}
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
+ 設定 {#config}
   + [ワークフローを使用した自動化](config/workflows.md)
   + [データの管理](config/replication.md)
   + [メールの設定](config/email-settings.md)
   + [トランザクションメッセージの設定](config/transactional-msg-settings.md)
   + [Campaign SDK とアプリの統合](config/push-config.md)
   + [外部アカウント](config/external-accounts.md)
+ 接続 {#connect}
   + [他のソリューションとの連携](connect/integration.md)
   + [Campaign と Analytics の統合](connect/ac-aa.md)
   + [Campaign と Experience Manager の統合](connect/ac-aem.md)
   + [Campaign と Target の統合](connect/ac-at.md)
   + [Campaign と Experience Cloud トリガーの統合](connect/ac-triggers.md)
   + [Campaign と RTCDP の統合](connect/ac-rtcdp.md)
   + [Campaign と Twitter の統合](connect/ac-tw.md)
   + [Campaign と外部データベースの統合](connect/fda.md)
   + [Campaign と CRM の統合](connect/crm.md)
+ 開発者向けリソース {#architecture}
   + [グローバル原則](dev/general-architecture.md)
   + [アーキテクチャ](dev/architecture.md)
   + [データモデル](dev/datamodel.md)
   + スキーマとフォーム {#shemas-forms}
      + [スキーマの操作](dev/schemas.md)
      + [鍵の管理と単一性](dev/keys.md)
      + [スキーマの作成](dev/create-schema.md)
      + [スキーマの拡張](dev/extend-schema.md)
      + [フィルタースキーマ](dev/filter-schema.md)
      + [スキーマの構造](dev/schema-structure.md)
      + [データベースマッピング](dev/database-mapping.md)
      + [PI ビューの制限](dev/restrict-pi-view.md)
      + [カスタム受信者テーブルの使用](dev/custom-recipient.md)
      + [データベースの更新](dev/update-database-structure.md)
      + [入力フォーム](dev/forms.md)
   + API {#api}
      + [基本を学ぶ](dev/api.md)
      + [新しい API](dev/new-apis.md)
      + [API のステージングメカニズム](dev/staging.md)
+ [Campaign コントロールパネル](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=ja)
