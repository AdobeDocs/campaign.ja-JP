---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
TQID: https://experienceleague.adobe.com/Zdo52RLQFbxlRNgE54yLDn3yAMmmOqxKyRhnCJa0Xwg
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: a075b2c1-7748-4328-b7f6-343aa314616aid: d5ef99fa-df0c-4153-bf94-105ad0724167
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dcid: cdd65e7e-8839-44a2-bc21-0e03623b5dd1id: d095671a-1355-40aa-8b5f-06c33c68080b
source-git-commit: ffeb9430b382b598af412555b1b0a6ff42bc68d0
workflow-type: tm+mt
source-wordcount: 1754
ht-degree: 6%

---

# 最新リリース {#latest-release}

このページには、Campaign v8（コンソール）**最新リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。 Campaign のリリース、バージョン、アップグレードについて詳しくは、[このページ](upgrades.md)を参照してください。 その他のリリースは、このドキュメントの以前のリリースの節に記載されています。

## リリース 8.9.2 {#release-8-9-2}

>[!CAUTION]
>
> コンソールのアップグレードは必須です。 クライアントコンソールのアップグレード方法について詳しくは、こちらの[ページ](../start/connect.md#upgrade-ac-console)を参照してください。

_2026年5月3日_

### セキュリティの強化 {#security-8-9-2}

* 最適なセキュリティ、安定性、およびコンプライアンスを維持するために、すべてのインスタンスがDebian 13およびPostgreSQL 17にアップグレードされました。

### 修正点 {#fixes-8-9-2}

>[!NOTE]
>
> 以下に示す修正は、連続する8.9.2 ビルドで段階的にロールアウトされています。 **[!UICONTROL ヘルプ/バージョン情報]** [ メニュー](upgrades.md#version)に移動して、最新の8.9.2 （11d1c68）ビルドがインストールされていることを確認します。 詳細については、Adobe担当者にお問い合わせください。

* データタイプの変換の問題により、トランザクションイベントのイベント日付が誤って設定され、動的レポートで日付が正しく設定されない問題を修正しました。 （NEO-93923）
* タイトルと本文のフィールドが空の場合、配信準備中にAndroidとiOSのサイレントプッシュ通知が失敗する問題を修正しました。 （NEO-93739）
* 紐付けキーが正しくないため、Android アプリ登録トークンの言語フィールドがキャプチャされない問題を修正しました。 （NEO-93100）
* プレッシャルールでカスタムタイポロジルールを適用する際に配信の準備が失敗する問題を修正しました。 （NEO-94457）
* クライアントコンソールでHTTP リクエスト処理エラーが発生する可能性がある問題を修正しました。 （NEO-94071）

<!-- BUILD 8.9.2.9829.9669833 -->

* 接続ログの挿入エラーを防ぐために、FDA監視がデフォルトで無効になりました。 （NEO-94841）
* オファーの引き換えに使用されるInteraction SOAP呼び出しが名前空間解決エラーで失敗する問題を修正しました。 （NEO-94787）
<!-- infra * Fixed an issue where Snowflake connections using private key authentication could fail on ARM64 architectures. (NEO-94350) -->
* 長さが1の文字列フィールドがPostgreSQL 17のワークフロー一時テーブルでSQL エラーを引き起こす可能性がある問題を修正しました。 （NEO-94487）
<!-- linked to previous build * Fixed an issue where the server could fail to restart after a Debian 13 build upgrade due to a missing dependency. (NEO-94598) -->

<!-- BUILD 8.9.2.9829.c90aa36 -->

* クライアントコンソールおよびWeb UIの「**ミラーページを表示**」オプションで「不正なミラーページ」エラーが返される問題を修正しました。 （NEO-93303）

<!-- BUILD 8.9.2.9830.4a6f868 -->

* FFDAのデプロイメントで多変量パッケージをインストールすると、標準の&#x200B;**トラッキング**&#x200B;技術ワークフローが失敗する問題を修正しました。 （NEO-94972）
* 配信テンプレートが現在の配信を参照する重み付け式を使用している場合に、配信準備でターゲットに受信者を追加できない問題を修正しました。 （NEO-94892）
<!-- hotfix -->
* アップグレード後にSQL エラーが発生して、2つの連続する1-N リンク間の結合を使用したワークフローの強化が失敗する問題を修正しました。 （NEO-94893）

<!-- BUILD 8.9.2.9831.f53d3d2 -->

* 時間の経過に伴ってメモリが過剰に消費される可能性がある、メールパイプラインの問題を修正しました。 （NEO-95088）
* シードアドレスまたはプルーフアドレスを使用した場合、競合するメールタイポロジルールが重複しない受信者を配信ターゲットから誤って除外する可能性がある問題を修正しました。 （NEO-95026）
* アップグレード後に、標準の&#x200B;**オファー通知** テクニカルワークフローが失敗する問題を修正しました。 （NEO-95064）
* 多変量パッケージのインストールプロセスが改善され、ビルドアップグレード中にワークフローのエラーを追跡できるようになりました。 （NEO-95018）

<!-- BUILD 8.9.2.9831.11d1c68 -->

* サーバーが繰り返しクラッシュし、インスタンスの停止につながる可能性がある問題を修正しました。 （NEO-95304）
* トラッキングとミラーページのリンクが配信の読み込みに失敗する問題を修正しました。 （NEO-95239）
* IMS シングルサインオンで保護されたCampaign web アプリケーションにログインする際にリダイレクトループが発生する可能性がある問題を修正しました。 （NEO-95188）
* 配信を保存した後、配信抽出ファイルに配信作成日が表示されない問題を修正しました。 （NEO-95010）
* 大量に生成された子ワークフローが&#x200B;**編集中**&#x200B;状態のままになり、トランザクションワークフローの容量が減少する問題を修正しました。 （NEO-95131）
* **リストの読み取り** アクティビティで、ワークフローが生成したリスト構造を使用して定義済みリストテンプレートが上書きされ、ダウンストリームワークフローでエラーが発生する問題を修正しました。 （NEO-95103）
* プッシュ通知のフィードバック処理で、大量の配信を処理する際にサーバーがクラッシュする問題を修正しました。 （NEO-95150）
* スキーマエクスプローラーで`xtk:workflow` スキーマの&#x200B;**Data** タブを開くと、エラーメッセージがトリガーする問題を修正しました。 （NEO-94923）
<!-- hotfixes -->
* **エンリッチメント** アクティビティで、アップストリーム **サブワークフロー** アクティビティから出力属性を取得できなくなり、ワークフローが失敗する問題を修正しました。 （NEO-95151）
* 配信ステータスの更新を防ぎ、下流のメッセージ処理をブロックする可能性があるトラッキングデータ取り込みの問題を修正しました。 （NEO-94666）
* オファーの提案に関連する特定のクライアントコンソールのアクションで、Snowflake データベースで長時間実行されるクエリがトリガーされ、ロックと遅延が発生する問題を修正しました。 （NEO-92936）
* 暗号化されたキーを保存するためのカスタムオプションをSnowflake外部アカウントに設定できない問題を修正しました。 （NEO-93302）

<!-- 
Internal/non-customer-facing:
* Internal test automation task added to cover NEO-94893. (NEO-94990) — autotest only
Customer-specific hotfixes:
* Fixed an issue affecting WhatsApp delivery preparation. (NEO-92480) — HeroMotoCorp only
* Added a feature-flagged optimization to use dynamic shared memory in Customer Targeting Audience (CTA) processing. (NEO-93542) — DerTour only
* Fixed an issue where the delivery alerting workflow could fire incorrect "long start pending" notifications even when deliveries were sent within the configured threshold. (NEO-93434) — non-ZDT hotfix, NORC only
* Added a new parameter in the mobile SDK to allow identification of the source instance for push notifications. (NEO-94650) — ICICI only
* Fixed an issue with the custom send time feature on the Web UI where deliveries waited until the contact date and time to execute instead of executing at the equivalent local time per recipient timezone, breaking parity with Campaign Standard behavior. (NEO-94762) — H&M only (in progress at time of writing)
-->

## リリース 8.9.1 {#release-8-9-1}

_2026年1月27日（PT）_

>[!CAUTION]
>
> コンソールのアップグレードは必須です。 クライアントコンソールのアップグレード方法について詳しくは、こちらの[ページ](../start/connect.md#upgrade-ac-console)を参照してください。

### 新機能 {#new-8-9-1}

**新しいSMS送信コネクタ**&#x200B;がすべての顧客（GA）で利用できるようになりました。 [詳細ドキュメント](../send/sms/sms.md)を参照してください。

このリリースには、Campaign Web ユーザーインターフェイスで使用できる一連の機能が付属しています。

* [多言語配信機能（GA）](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/multilingual.html){target="_blank"}
* [ トランザクションメッセージのプロファイルエンリッチメント（GA） ](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/transactional-messages/profile-enrichment.html){target="_blank"}
* [Adobe Experience Managerのライブおよび言語コピー](https://experienceleague.adobe.com/docs/campaign-web/v8/integrations/aem-multilingual.html){target="_blank"}
* [ コンテンツ実験 – A/B テスト ](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/email/ab-testing.html){target="_blank"}
* [継続的な配信アクティビティ ](https://experienceleague.adobe.com/docs/campaign-web/v8/wf/design-workflows/continuous-delivery.html){target="_blank"}
* [ キャンペーン承認管理](https://experienceleague.adobe.com/docs/campaign-web/v8/campaigns/campaign-approvals.html){target="_blank"}

Campaign Web UI [ リリースノート ](https://experienceleague.adobe.com/docs/campaign-web/v8/release-notes/release-notes.html?lang=ja){target="_blank"}を参照してください

### セキュリティの強化 {#security-8-9-1}

* Snowflakeの外部アカウントは、OAuth2認証をサポートするようになり、連合データアクセス接続に最新かつ安全な認証方法を提供します。 （NEO-87013） [詳細情報](../config/external-accounts.md#snowflake-external-accounts)
* Databricks外部アカウントは、サービスプリンシパル（非インタラクティブなクライアント資格情報フロー）を介したOAuth2認証をサポートするようになり、連合データアクセス接続に安全な認証方法を提供します。 インタラクティブ OAuth2認証は、今後のリリースで利用できるようになります。 （NEO-87422） [詳細情報](../config/external-accounts.md#databricks-external-accounts)
* 承認されたディレクトリへの操作を制限し、不正アクセスや潜在的なリモートコード実行を防止することで、ワークフローファイルアクセスの脆弱性を修正しました。 （NEO-88460）
* ワークフローのJavaScript コードアクティビティにFTP URLの許可リストに加える制御を追加し、承認済みアドレスに対してのみ送信FTP接続を制限しました。 （NEO-89083）

### その他の変更 {#changes-8-9-1}

* インテリジェントなワークフロー再起動機能と重要ではないプロセス用のメモリガードレールにより、高いメモリ環境下での自動ワークフロースロットリングを実装することで、コンテナメモリ管理を改善しました。 （NEO-89041）
* Campaign ワークフローでの非対称暗号化および復号化機能のサポートを追加しました。 （NEO-80257）
* FFDA デプロイメントでの大規模なデータアップロードに対するレプリケーションエージェントのパフォーマンスとメモリの回復力の強化。 （NEO-88430）
* **[!UICONTROL SQL コード]**&#x200B;と&#x200B;**[!UICONTROL SQL データ管理]**&#x200B;のワークフローアクティビティが改善され、Campaignからカスタム SQLが実行される際に、PostgreSQL データベースをより適切に保護し、ワークフローをスムーズに実行できるようになりました。 詳細とベストプラクティスについては、[SQL データ管理](../../automation/workflow/sql-data-management.md#important-notes)および[SQL コード ](../../automation/workflow/sql-code-and-javascript-code.md#important-notes)を参照してください。 （NEO-86540）


### 修正点 {#fixes-8-9-1}

* sysFilterの変更後にデータベース構造を更新できない問題を修正しました。 （NEO-93306）
* 移行後に動的レポートデータが見つからない問題を修正しました。 （NEO-92962）
* 配信ステータスが正しく更新されない問題を修正しました。 （NEO-92908）
* Databricks FDAのカタログ使用制限に関する問題を修正しました。 （NEO-92900）
* Outlook Windows デスクトップでHTML レイアウト エラーが発生する可能性がある問題を修正しました。 （NEO-92611）
* アップグレード後にミッドインスタンスで配信プライマリキーが複製されたデータ整合性の問題を修正しました。 （NEO-92424）
* 配信のトラッキングと画像ダイアログボックスでリンクを無効にできない問題を修正しました。 （NEO-92381）
* nms.subscribtion.RecipientSubscribe （）関数が一括サブスクリプションで機能しない問題を修正しました。 （NEO-92308）
* アップグレード後に配信部分が欠落したことにより、配信エラーが発生する問題を修正しました。 （NEO-92278）
* トラッキングワークフローで、重複ステータスエラーとSQL構文エラーによりトラッキングインジケーターが更新されない問題を修正しました。 （NEO-92239）
* dbEnum フィールドを使用する際に、ワークフローを介して作成されたリストに列挙フィールドラベルが見つからないか、誤って表示される問題を修正しました。 （NEO-91158）
* RTの公開/非公開ダイアログが閉じず、フリーズする問題を修正しました。 （NEO-91038）
* 「サービスプロバイダーが考慮する」ステータスの受信者に発生した問題を修正しました。 （NEO-90927）
* オプトアウトリンクに（非）購読元が見つからない問題を修正しました。 （NEO-90714）
* クーポンの追加が配信準備に失敗する問題を修正しました。 （NEO-90547）
* 「監査」タブに挿入の拒否カウントが正確に反映されない問題を修正しました。 （NEO-90318）
* アプリケーションのサービス拒否を引き起こす可能性があるセキュリティの問題を修正しました。 （NEO-89984）
* ダウンロードしたHotclick レポートのPDFが破損する問題を修正しました。 （NEO-89954）
* アップグレード後に発生したSSL エラーを解決し、エラーの読み取り中に予期しないEOFが発生しました。 （NEO-89108）
* アップグレード後にデータスキーマでデータをクエリできない問題を修正しました。 （NEO-88663）
* PostgreSQL 15で「char」フィールドを連結する際に発生するエラーを修正しました。 （NEO-88028）
* テンプレートを保存または複製する際に、配信テンプレート変数の順序が変更される問題を修正しました。 （NEO-87845）
* 新しいデータライブラリスキーマを作成すると、Web インターフェイスがクラッシュする問題を修正しました。 （NEO-87816）
* 重複排除アクティビティの補集合セットに関する問題を修正しました。 （NEO-87711）
* X11依存関係のないインストールパッケージのリクエストを修正しました。 （NEO-87471）
* 動的レポートでセグメントコードを使用できない問題を修正しました。 （NEO-87276）
* ワークフローが「データを更新」アクティビティで停止する問題を修正しました。 （NEO-87252）
* BigQueryで誤ったタイムゾーンが使用されていた問題を修正しました。 （NEO-86622）
* 「mcSynch_mcExec1/jsReplicateUrl」スクリプトの評価中に発生したJavaScript エラーを修正しました。 （NEO-86553）
* 識別子の計算方法が正しくないため、eventHisto テーブルに重複するイベントが表示される問題を修正しました。 （NEO-86544）
* コピー時にiOS プッシュに「詳細」タブが表示されない問題を修正しました。 （NEO-86231）
* 参照テーブルのレプリケート ワークフローでnms:delivery スキーマのレプリケートに失敗する問題を修正しました。 （NEO-85884）
* 配信の送信中に、MXIP アドレスに対応するnull ドメインエラーがエラーログに表示される問題を修正しました。 （NEO-85238）
* オプションに変更を加えた後に技術配信テンプレートが更新されない問題を修正しました。 （NEO-84149）
* すぐに使用できる請求ワークフローのエラーを修正しました。 （NEO-83624）
* ターゲットレコードのプライマリキーのみに基づいて重複を除外する問題を修正しました。 （NEO-82910）
* トラッキング統計がコンソールと異なる値を表示するCampaign Web UI レポートの不一致を修正しました。 （NEO-82339）
* 「データを更新」アクティビティでレコードを更新しない場合でも、最終変更日が変更される問題を修正しました。 （NEO-82002）
* リストに新しい属性を追加すると、リストを読み取るワークフローが失敗する問題を修正しました。 （NEO-80258）
* トラッキングインジケーターレポートで、個別の開封数に誤った値が表示される問題を修正しました。 （NEO-79466）