---
title: Campaign v8（コンソール）2025 リリースノート
description: Campaign v8 2025 リリースで記載される機能および改善点のリスト
feature: Release Notes
exl-id: 3f91d83e-594e-49ee-a898-606e3de00bf3
source-git-commit: 3bc247ba81de3de56c26bdf8fa9b8aa5ea91fb2a
workflow-type: tm+mt
source-wordcount: '3056'
ht-degree: 37%

---

# 2025 リリースノート {#2025-rn}

このページには、**Campaign v8 2025 リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。最新リリースについては、[&#x200B; このページ &#x200B;](release-notes.md) を参照してください。

新規の実装または既存の環境へのアップグレードについては、[&#x200B; 最新リリース &#x200B;](release-notes.md) をインストールします。

>[!BEGINSHADEBOX]

**このページの内容**

* [リリース 8.6.5](#release-8-6-5)
* [リリース 8.6.4](#release-8-6-4)
* [リリース 8.7.4](#release-8-7-4)
* [リリース 8.7.3](#release-8-7-3)


>[!ENDSHADEBOX]

## リリース 8.8.1 {#release-8-8-1}

_2025年7月9日（PT）_

### 新機能 {#features-8-8-1}

以前は、一部のお客様に対してリリースされていましたが、現在は、すべての Campaign FDA 環境で次の機能を使用できます。

* **新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバーモードの SMPP 接続の有効化、永続的な SMPP 接続の有効化、さらに互換性の向上が図られています。 すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。既存の実装も引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。[詳細情報](../send/sms/sms.md)

  >[!NOTE]
  >
  >この機能は **Campaign FFDA デプロイメント** では使用できません [&#128279;](../architecture/enterprise-deployment.md)。

<!-- (from ACC rn, aleady in the product, to remove?) -->

<!-- * **Enrichment in transactional messages** (to remove?) -->

<!--
* **Multilingual delivery creation** in the Web UI - You can now send multiple email deliveries in different languages in Adobe Campaign Web User Interface. The Multilingual delivery feature allows you to choose the default language of your delivery as well as the different languages in which the delivery can be sent. You can also preview these deliveries in the languages you have chosen. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/email/edit-content.html)

ACC - Multilingual deliveries - Starting Campaign Web User interface April release, you will be able to send multiple email deliveries in different languages, and access the related dynamic reports. This capability will only be available in Adobe Campaign Web User Interface at the end of April, and require a server update to Campaign v8.7.4.
-->

<!--
*  **Visual fragments** in the Web UI - You can now create, use and archive content fragments. Visual fragments are pre-defined visual blocks that you can reuse across multiple email deliveries, or in content templates. [Learn more](https://experienceleague.adobe.com/docs/campaign-web/v8/content/manage-reusable-content/fragments/fragments.html){target="_blank"}

(already available in console and web, to remove?) 
web - * Visual fragments - You can now archive visual content fragments. Learn more
-->

<!--
* **Delivery alerting** in the Web UI - The Delivery alerting feature is an alert management system that enables a group of users to automatically receive notifications containing information on the execution of their deliveries. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/delivery-alerting/delivery-alerting.html){target="_blank"}
-->

<!--
* **Landing pages improvements**  in the Web UI- The following improvements to landing pages are now available:

    * You can now reference a default subscription/unsubscription landing page when configuring a service. When designing an email, if you define a link to that landing page, users submitting the landing page form are automatically subscribed to or unsubscribed from this service. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/audiences/work-with-services/manage-services.html#create-service){target="_blank"}
    * A new option in the landing page configuration allows anonymous visitors to access the landing page. If you unselect this option, only identified users can access and submit the form. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/create-lp.html#create-landing-page){target="_blank"}
    * A new option in the landing page configuration allows to store additional internal data when the landing page is being submitted. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/create-lp.html#create-landing-page){target="_blank"}
    * A new option enables to use a landing page for several services, making it dynamic. When adding a link to an email, if you select a dynamic landing page, you can select any service. If you select a landing page that has a specific service associated, this service will be automatically used (you cannot select another one). [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/create-lp.html#define-actions-on-form-submission){target="_blank"}
    * Conditional content is now supported in landing pages. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/lp-content.html){target="_blank"}
    * You can link a landing page to a service, and send a confirmation message when users validate it. [Learn more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/lp-content.html#lp-message){target="_blank"}
    * You can add captcha to protect your landing page from spam and abuse caused by bots. This is non-intrusive for your customers since it does not require any interaction from them and is based on interactions with your site. [Learn more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/create-lp.html#captcha){target="_blank"}

web - * **Subscriptions with Landing pages** - You can now link a landing page to a service, and send a confirmation message when users validate it. [Learn more](../landing-pages/lp-content.md#lp-message){target="_blank"}.
Web - * **Captcha in landing pages** - You can now add captcha to protect your landing page from spam and abuse caused by bots. This is non-intrusive for your customers since it does not require any interaction from them and is based on interactions with your site. [Learn more](../landing-pages/create-lp.md#captcha)
-->

<!--
* (from ACC rn, already in product, to remove?) **Rich Push Notification (GA)** - You can now send rich push notifications. Rich push notification is an enhanced form of mobile notification that goes beyond simple text messages by incorporating multimedia elements such as images, interactive buttons, or other rich media content. With this version, a set of templates for rich push notifications are now available for your iOS and Android apps. [Read more](../send/rich-push-android.md). 
ACC * Rich Push Notification templates - You can now send rich push notifications via Android. Rich push notification is an enhanced form of mobile notification that goes beyond simple text messages by incorporating multimedia elements such as images, interactive buttons, or other rich media content. Read more.
-->

以前は限定提供（LA）でリリースされていましたが、現在は次の機能が利用可能です **オンデマンド**。

<!--
* **Dynamic Reporting** - You can now access Dynamic Reporting which provides fully customizable and real-time reports to measure the impact of your marketing activities. It adds access to profile data, enabling demographic analysis by profile dimensions such as gender, city and age in addition to functional email campaign data like opens and clicks. Dynamic reporting is also available for multilingual email deliveries and transactional messages. [Read more](https://experienceleague.adobe.com/docs/experience-cloud/campaign/reporting/get-started-reporting.html){target="_blank"}

ACC **Dynamic Reporting for Transactional messages** - You can now monitor your transactional messages in the Dynamic Reporting user interface. These reports provide the ability to the marketer to view the all the reporting metrics and dimensions of transactional messages, breakdown of deliveries sent through a template in real time. [Read more](https://experienceleague.adobe.com/en/docs/experience-cloud/campaign/reporting/get-started-reporting){target="_blank"}
ACC - Dynamic Reporting - As a Campaign Standard migrated user, you can access Dynamic Reporting which provides fully customizable and real-time reports to measure the impact of your marketing activities. It adds access to profile data, enabling demographic analysis by profile dimensions such as gender, city and age in addition to functional email campaign data like opens and clicks. Read more
* **Dynamic Reporting for Multilingual** - Dynamic reporting is now available for multilingual email deliveries. For more information, refer to the [detailed documentation](../reporting/global-reports.md).
-->

* **Rest API** - Rest API を使用して、Adobe Campaignと使用するテクノロジーのパネルをインターフェイスで接続することで、Adobe Campaignの統合を作成し、独自のエコシステムを構築できるようになりました。 トランザクションメッセージ REST API は、SMS チャネルでも使用できます。 ペイロードにメールと mobilePhone の両方が存在する場合は、「wishedChannel」フィールドを使用してチャネルを指定できます。指定しない場合は、wishedChannel で明示的に SMS をリクエストしない限り、デフォルトでメールが使用されます。イベントベースのトランザクション API は、メールでも使用できます。 [詳細情報](../dev/api/get-started-apis.md)

  >[!NOTE]
  >
  >この機能は **Campaign FFDA デプロイメント** では使用できません [&#128279;](../architecture/enterprise-deployment.md)。

<!--
ACC - Rest APIs - As a Campaign Standard migrated user, you can use Rest APIs to create integrations for Adobe Campaign and build your own ecosystem by interfacing Adobe Campaign with the panel of technologies that you use. Read more
* **SMS REST API support (LA)** - The Transactional Messaging REST API is now available for the SMS channel. When both email and mobilePhone are present in the payload, you can use the "wishedChannel" field to specify the channel. If not provided, email will be used by default unless wishedChannel explicitly requests SMS. For more information, refer to the [detailed documentation](https://experienceleague.adobe.com/en/docs/experience-cloud/campaign/apis/managing-transactional-messages){target=_blank}.
ACC - SMS REST API support - The Transactional Messaging REST API is now available for the SMS channel. When both email and mobilePhone are present in the payload, you can use the "wishedChannel" field to specify the channel. If not provided, email will be used by default unless wishedChannel explicitly requests SMS.
ACC * **Transactional messaging REST APIs** - Event-based Transactional APIs are now available for Emails. [Read more](https://experienceleague.adobe.com/en/docs/experience-cloud/campaign/apis/managing-transactional-messages){target="_blank"}
-->

このリリースには、上記の機能に加えて、Campaign Web ユーザーインターフェイスで使用できる一連の機能も付属しています。

* [&#x200B; 多言語配信の作成 &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/email/edit-content.html#multilingual-delivery){target="_blank"}
* [配信アラート](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/delivery-alerting/delivery-alerting.html){target="_blank"}
* [&#x200B; ランディングページの改善 &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/get-started-lp.html){target="_blank"}
* [&#x200B; 動的レポート &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/reports/dynamic-reporting/get-started-reporting.html){target="_blank"} （オンデマンド）
* [&#x200B; ブランディングの一元化 &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/conf/branding/branding-gs.html){target="_blank"} （オンデマンド、新規実装）

Campaign web UI[&#x200B; リリースノート &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/release-notes/release-notes.html?lang=ja){target="_blank"} を参照してください。

### 一般的な改善点 {#improvements-8-8-1}

* Microsoft ファブリックは、Adobe Campaign Federated Data Access （FDA）の外部データベースとしてサポートされるようになりました。 [詳細情報](../config/external-accounts.md#transfer-data-external-accounts)
* Campaign v8 では、プッシュ通知用にAndroid 15 およびiOS 18 がサポートされるようになりました。 [詳細情報](../start/compatibility-matrix.md#MobileSDK)
* セキュアな仮想プライベートネットワークトンネリング用に、オンプレミスデータベースに加えて、クラウドデータベースがサポートされるようになりました。 [詳細情報](../config/enhanced-security.md#vpn-databases)
* SMS 2.0 コネクタの「受信トラフィック」セクションに、新しい「プロバイダー ID」フィールドのセットが追加されました。 [詳細情報](../send/sms/smpp-external-account.md#incoming-traffic)
* 「mailto」 List-Unsubscribe メソッドを使用して購読解除した受信者は、強制隔離に送信されなくなりました。 配信に関連付けられたサービスの購読を解除するか、配信にサービスが定義されていない場合は、ブロックリスト（プロファイルの「連絡なし」セクション）に送信されます。 [詳細情報](../send/quarantines.md)
* 受信ボックスレンダリングレポートの改訂バージョンが、Adobe Campaign クライアントコンソールで使用できるようになりました。
* `setup-client.exe` ファイルは `ac-client.msi` ファイルに置き換えられました。これにより、管理者はユーザーの操作を必要とせずに大量アップグレードを簡単に実行できます。

### 修正点 {#fixes-8-8-1}

* SMS 2.0 の有効期間が無効なために自動返信が受信されない問題を修正しました。これにより、移行後に適切なメッセージ配信が行われます。 （NEO-88088）
* SMS 2.0 で、`inSms` テーブルの特定のフィールドが正しく更新されず、SMS 機能の正確なデータ挿入が確保されない問題を解決しました。 （NEO-87906）
<!--
* NOOOO Addressed delivery preparation failures for IndiGo Aviation after upgrading to v7.4.2. This fix resolves personalization and deduplication-related errors, enabling smooth delivery workflows. (NEO-87693)
* NOOOO Corrected Redshift database function definitions in version 8.6.4, ensuring proper execution of functions like `AddDays`, `AddHours`, `AddMinutes`, and `AddSeconds`. (NEO-87305)
* Provided a silent installation mechanism for the client console to facilitate mass upgrades without user intervention. This resolves challenges with manual installations. (NEO-69772)
-->
* SQL クエリで、列参照が見つからないか間違っていることが原因で発生する、データベースクリーンアップワークフローのエラーを修正しました。 これにより、ログと訪問者データが適切にパージされるようになります。 （NEO-86813）
* 配信ログにイベント日付が表示されない問題を解決しました。 この修正により、イベントの日付の母集団が正確に設定されるので、スケジュールされたトリガーやワークフローにとって重要です。 （NEO-86708）
* SMS 2.0 での SMS 配信ログの挿入の問題を修正し、`nmsBroadLogMid` テーブルに適切に記録されるようにしました。 （NEO-86556）
* ダイレクトメールテンプレートの外部配信モードのファイル抽出の問題を修正し、互換性と機能を確保しました。 （NEO-86520）
* 複数の MID インスタンス間の分割ルーティングに関する配信処理の問題を解決し、配信ステータスの正確な更新とスループットを確保しました。 （NEO-86500）
* Campaign Standardから Campaign v8 への移行後に、動的レポートに欠落していたトラッキングデータを修正し、配信トラッキングログの正確なレポートを確保しました。 （NEO-86419）
* ワークフローが 2 回実行され、キー違反が重複していたワークフロートリガーの問題を解決しました。 この修正により、適切なイベントの処理と実行が保証されます。 （NEO-86154）
* デプロイメント後の Redshift OOTB SQL 関数の互換性の問題を修正し、ワークフローで `GetDate()` などの関数を適切に実行できるようにしました。 （NEO-85834）
* URL が添付されると画像が消えるメールビルドのレンダリングの問題を修正しました。 この修正により、インボックスプレビューでの適切な画像表示が確保されます。 （NEO-85716）
* WebUI での閉じる引用符の巻き毛のレンダリングを修正し、メール配信で正確な文字表示を確保しました。 （NEO-85687）
* ミラーページのリンク機能を修正し、ミラーページ内の言語バリアント間の適切なナビゲーションを確保しました。 （NEO-85625）
* Web アプリの日付選択で日付形式の問題を解決し、日本語の日付形式（`yyyy-mm-dd`）との互換性を確保しました。 （NEO-85234）
* ミッドソーシングでの代替ルーティング設定を使用したワークフローの後処理の問題を修正し、ワークフローが適切に実行されるようにします。 （NEO-85111）
* ウェーブを使用する際のAndroid配信スループットが向上し、スケジュールに基づいて配信部分が正しい順序で処理されるようになりました。 （NEO-84324）
* 関数の null 処理エラーが原因で配信の準備に失敗する問題 `to_varchar` 修正し、キャンペーンのスムーズな開始を確保しました。 （NEO-84108）
* 古い `libcurl` および `libssh2` バージョンが原因で発生した SFTP 接続の問題を解決し、Azure がホストする SFTP サーバーとの互換性を確保しました。 （NEO-84038）
* キーペア認証エラーに関するSnowflake FDA コネクタの問題を修正して、データベース接続が成功するようにしました。 （NEO-84024）
* タイポロジルール機能の問題を修正し、プッシュ配信で頻度ルールが適切に適用されるようにしました。 （NEO-84010）
* アップグレード後に、日付とタイムスタンプの比較が一致しなかったことが原因で発生した BigQuery クエリエラーを解決し、フィルタリング条件との互換性を確保しました。 （NEO-83826）
* パーソナライゼーションエラーが原因で一時停止した配信を再開すると、配信アクティビティが失敗する問題を修正しました。 この修正により、配信ワークフローがスムーズになり、一時停止されたアクティビティに関連するエラーを防ぐことができます。 （NEO-83809）
* 「ターゲットレコード読み込みクエリ」オプションを使用する場合の、FFDA の問題を修正しました。 「order by」句と「where」句のサポートを追加しました。 （NEO-83793）
* broadLogRcp テーブルの nullable でない列に null 値が書き込まれることで発生する、繰り返し配信エラーを修正しました。 この修正により、配信の信頼性が向上し、ライブキャンペーン中のエラーを防ぐことができます。 （NEO-83729）
* 配信の準備中にシードアドレスが重複し、メッセージ数に不一致が生じる問題を修正しました。 この修正により、正確なターゲティングが保証され、重複エラーが防止されます。 （NEO-83703）
* 実稼動配信が有効期間後に送信され、法的な問題が発生する可能性がある重大な問題を修正しました。 配信は、定義された有効期間に厳密に従うようになりました。 （NEO-83350）
* 大きなデータ量をTeradata テーブルに読み込む際に発生するスペースの問題を修正しました。 この修正により、データ処理が最適化され、実稼動環境での断続的なエラーが解決されます。 （NEO-83252）
* SendMetricsToNewRelic エラーに関連するテクニカルワークフローエラー（RT イベント処理の遅延の原因となった）を解決しました。 この修正により、ワークフローをよりスムーズに実行し、イベントのバックログを防ぐことができます。 （NEO-83143）
* FFDA インタラクションインスタンスでの ID から UUID への変換の問題が原因で発生する、データベースクリーンアップワークフローのエラーを修正しました。 この更新により、適切なクリーンアップ操作が確実に実行され、システムの負荷が軽減されます。 （NEO-83138）
* シードメンバーの内部名の長さに対する制約によって発生する配信エラーを解決しました。 この修正により、配信のパーソナライゼーションに影響を与えることなく、より長い内部名を使用できます。 （NEO-83044）
* ランダムエラーが原因で、配信がパーソナライゼーションの保留のままになる問題を修正しました。 この更新により、パーソナライゼーションプロセスがスムーズになり、配信が確実に実行されるようになります。 （NEO-82781）
* API エラーと速度の低下が原因で、コンソールでオファーの提案をレビューできない問題を修正しました。 この修正により、UI の応答性が向上し、適切なオファー機能が確実に使用できるようになります。 （NEO-82742）
* カスタム配信オブジェクトを使用する際のAdobe Campaign コンソールの断続的なクラッシュを解決しました。 この修正により、カスタムワークフローを使用する際の安定性と信頼性が確保されます。 （NEO-82675）
* v7 から v8 への移行後に報告された、処理の遅さとワークフローのエラーを修正しました。 この更新により、キャンペーンワークフローが最適化され、タイムリーに実行されるようになります。 （NEO-82665）

<!--
* Resolved an issue where sysfilters were generating incorrect SQL queries after upgrading to v8.6.3. This fix ensures proper query generation and restores sysfilter functionality. (NEO-82591)
-->

* MTA の子プロセスが停止し、プッシュと WhatsApp の配信がブロックされていた重大な問題を修正しました。 この更新により、よりスムーズな通信ワークフローが保証され、配信のボトルネックを回避できます。 （NEO-82351）
* GCP テーブルの文字列フィールドが原因で、Teradataの更新中にエラーが発生するデータ移行の問題を修正しました。 この修正により、回避策が不要になり、ワークフローの効率が向上します。 （NEO-82260）
* FFDA インスタンスのプライマリデータベースを考慮してデータベースのクリーンアップロジックを更新し、存在しないテーブルの不要なパージを防ぎました。 この修正により、クリーンアップ操作が最適化されます。 （NEO-81879）
* サブワークフローを列挙フィールドと組み合わせて使用することで発生するコンソールのクラッシュを解決しました。 この修正により、エンリッチメントされたワークフローを使用する際の安定性が確保されます。 （NEO-81864）
* ターゲットマッピングのサブアフィニティフィールドが配信の複製後に誤って変更され、ワークフローでエラーが発生していた問題を修正しました。 この更新により、一貫したサブアフィニティ値が保証されます。 （NEO-81809）
* Adobe Campaign Classic v8 のファイル転送アクティビティでワイルドカード文字がサポートされるようになり、ワークフローで動的名前（`abc_*` など）の付いたファイルをアップロードできるようになりました。 （NEO-81758）
* Adobe Campaign Classic v8 のiOS プッシュ通知で `content-available` フラグを有効にするオプションが導入されました。 この機能強化により、モバイルアプリは通知をインボックスに保存できるようになり、バックグラウンド更新がサポートされるようになり、APNS 制限に起因する配信の破棄の問題に対処しています。 （NEO-81721）

<!--
* Updated the Campaign 7.4.1 release upgrade process to require manual installation of dependencies. Documentation has been provided to guide users on installing required libraries such as `epel-release`, `java-11-openjdk-headless`, and others. (NEO-81433)
-->

* Adobe Campaign Classic v8 で BigQuery 接続のタイムアウト設定オプションを追加しました。 この機能強化により、ユーザーはクエリのタイムアウト期間を調整して、デフォルトのタイムアウト制限が原因で発生するクエリのエラーの問題を解決できます。 （NEO-81222）
* v8 への移行後、分割および代替ルーティングの外部アカウントを介して送信される配信のミラーページ URL が失敗するという断続的な問題を修正しました。 基になる配信部分が `mirrorPageInfo` に正しくコピーされるようになりました。 （NEO-81105）

<!--
* Resolved an authentication failure issue with inMail caused by token expiration. Restarting the `nlserver` process now resolves the error. (NEO-80683)
-->

* クライアントコンソールの「新しい Web UI にアクセス」ボタンが実稼動インスタンスの正しい URL （`https://experience.adobe.com`）を指すように修正されました。 これにより、実稼動環境での無効な URL に関する問題が解決されます。 （NEO-80673）
* 分割アクティビティで、並べ替えとサイズの両方を（セグメントのパーセンテージとして）使用すると SQL エラーが発生する問題を修正しました。 機能が正しく動作するようになりました。 （NEO-80432）
* `CCurlAzureBlobStorage::UploadStream` を使用したワークフローでのクラッシュの問題を修正しました。 Azure Blob Storage のアップロード中に、ワークフローがセグメント化フォールトなしで実行されるようになりました。 （NEO-79598）
* 実稼動環境で、ミラーページがクライアントコンソールから表示されない問題を解決しました。 ミラーページのリンクが、メールビューとコンソールビューの両方で正しく機能するようになりました。 （NEO-78946）
* メッセージ配信が成功したにもかかわらず、一部のログが誤って「配信がキャンセルされました」とマークされていた配信ログの問題を修正しました。 連絡日とイベント日の不一致に関連する根本原因は対処されました。 （NEO-78933）
* セキュリティを向上させるために `com.google.code.gson:gson` ライブラリを更新しました。 （NEO-78299）
* ワークフローのエラーの原因となった FDA 接続ログ （`nmsconnectionlogs`）の重複キー制約エラーを解決しました。 ID の重複を防ぐために、挿入ロジックを調整しました。 （NEO-78050）
* 強制隔離されたメールアドレスがアドレステーブルで誤ってモバイルとしてフラグ付けされ、配信分析エラーが発生する問題を修正しました。 配信オブジェクト間の紐付けロジックが修正されました。 （NEO-76986）
* Oracle データベースでコントロール母集団を使用する際の配信準備エラーを修正しました。 SQL クエリの生成が修正され、Oracle データベースとの互換性が確保されました。 （NEO-76947）
* 新しい月の移行中にフォルダーを同時に作成することによる配信エラーを解決しました。 配信フォルダー作成ロジックが調整され、キー違反の重複が防止されました。 （NEO-76824）
* Teradata外部アカウントのタイムゾーンコンバージョンに関する一貫性のない問題を修正しました。 表示されるタイムスタンプが、設定されたタイムゾーン設定に正しく合うようになりました。 （NEO-76716）
* データベースクリーンアップワークフローが改善され、大きなデータセットを効率的に処理できるようになりました。 削除パフォーマンスを最適化するために、行 ID とバインド変数を使用する新しいアプローチが実装されました。 （NEO-76439）
* 「その他」チャネルの外部配信で出力ファイルが生成されない問題を修正しました。 生成されたファイルのファイルパスが配信プロパティに正しく含まれるようになりました。 （NEO-75962）
* 大きなデータ更新による `ffdaReplicateStagingData` ワークフローのエラーを修正しました。 ワークフローのエラーを防ぐために、タイムアウト設定とテーブルサイズ管理が最適化されました。 （NEO-75643）
* ダイレクトメールの出力ファイルをプレビューすると、ダッシュボードが空白になる問題を修正しました。 ファイルのプレビュー後にダッシュボードが正しく表示されるようになりました。 （NEO-75359）
* クリック数と開封数を含むプッシュ通知のトラッキング指標を強化しました。 `@recipientClick`、`@personClick`、`@totalRecipientClick` などの指標で、モバイル通知のクリックが考慮されるようになりました。 （NEO-75240）
* 外部のキャンセル保留ステータスを持つ配信のクリーンアップワークフローのエラーを修正しました。 データベースレコード取得ロジックが修正されました。 （NEO-74833）
* 出力時間が正しくないロシア（UTC+3:00 モスクワ）のタイムゾーン `nlserver` 不一致の問題を解決しました。 時間同期のロジックが更新されました。 （NEO-74754）
* MSSQL データベースの SQL 構文が正しくないことが原因で発生する `defaultMidSourcingDlvStat` ワークフローのエラーを修正しました。 クエリ生成ロジックが互換性のために調整されました。 （NEO-74156）
* Web プロセスでの複数のクラッシュを対処しました。 （NEO-73174）
* 条件にアポストロフィが存在する場合に BigQuery クエリが失敗する問題を修正しました。 クエリ処理ロジックが更新され、特殊文字が正しく解釈されるようになりました。 （NEO-72547）
* 除外フィルターを含むタイポロジルールが正しく機能しない問題を修正しました。 配信準備のための SQL クエリ生成が修正されました。 （NEO-72292）
* バウンス管理のイベント日と連絡日の不一致を修正しました。 タイムゾーン処理ロジックが改善されました。 （NEO-72277）
* ダイレクトメール配信で誤って変換された UTF-8 文字の処理を強化しました。 配信エラーを防ぐために、非表示の文字が正しく処理されるようになりました。 （NEO-72148）
* フィルターが原因で保存の問題が発生していたインバウンド SMS アクティビティのエラーを修正しました。 ワークフローは、エラーを生成せずに正しく保存されるようになりました。 （NEO-70427）
* オファースペース内のグループ化された実施要件条件に対する SQL クエリ生成を修正しました。 適切なフィルタリングを確実に行うために、SQL 条件に括弧が追加されました。 （NEO-70425）

<!--
* Updated the public documentation link in the `ffdaUnicity` workflow email template to point to the correct page for key management in v8. (NEO-67996)
-->

* HTTP コンテンツまたは転送エンコーディングの問題が原因で発生する、BigQuery データ読み込みワークフローの断続的なエラーを修正しました。 接続処理ロジックが改善されました。 （NEO-66989）

## リリース 8.6.5 {#release-8-6-5}

_2025年4月25日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。

### 新機能 {#features-8-6-5}

**新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバモードの SMPP 接続と永続的な SMPP 接続が有効になり、Adobe Campaign Standard から移行する環境との互換性が向上しました。すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。既存の実装も引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。[詳細情報](../send/sms/sms.md)

### 一般的な改善点 {#improvements-8-6-5}

* 配信の配達確認の送信やデータベースのクリーンアップなど、エンタープライズ（FFDA）デプロイメントのコンテキストにおけるアプリケーションのグローバルパフォーマンスが向上しました。

* アプリケーション間のすべての通信のセキュリティを強化するために、外部 API 呼び出しで mTLS がサポートされるようになりました。

* メール転送エージェント（MTA）- 孤立した MTA の子が「**[!UICONTROL 開始保留中]**」ステータスで停止する問題を修正しました。

### 修正点 {#fixes-8-6-5}

また、このリリースでは、次の問題も修正されています。

NEO-67620、NEO-71534、NEO-80245、NEO-81105、NEO-81758、NEO-81908、NEO-82351、NEO-82742、NEO-83044、NEO-83138、NEO-83350、NEO-83729、NEO-83793、NEO-83809、NEO-84038、NEO-84108、NEO-85269、NEO-86121、NEO-86556、NEO-86739

## リリース 8.7.4 {#release-8-7-4}

_2025年4月10日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#features-8-7-4}

* **SMS REST API サポート（LA）** - トランザクションメッセージング REST API が SMS チャネルで使用できるようになりました。ペイロードにメールと mobilePhone の両方が存在する場合は、「wishedChannel」フィールドを使用してチャネルを指定できます。指定しない場合は、wishedChannel で明示的に SMS をリクエストしない限り、デフォルトでメールが使用されます。

* **多言語配信** - Campaign web ユーザーインターフェイスの 4 月リリース以降、複数のメール配信を異なる言語で送信し、関連する動的レポートにアクセスできます。この機能は、4 月末に Adobe Campaign web ユーザーインターフェイスでのみ使用可能になり、Campaign v8.7.4 へのサーバーアップデートが必要になります。

### 修正点 {#fixes-8-7-4}

このリリースでは、次の問題が修正されています。

NEO-80245、NEO-83559

## リリース 8.7.3 {#release-8-7-3}

_2025年2月14日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#features-8-7-3}

* **トランザクションメッセージの動的レポート** - 動的レポートのユーザーインターフェイスでトランザクションメッセージを監視できるようになりました。これらのレポートにより、マーケターはトランザクションメッセージのすべてのレポート指標とディメンション、テンプレート経由で送信された配信の分類をリアルタイムで確認できます。[詳細情報](https://experienceleague.adobe.com/docs/campaign-web/v8/reports/dynamic-reporting/get-started-reporting.html){target="_blank"}

* **トランザクションメッセージ REST API** - イベントベースのトランザクション API がメールで使用できるようになりました。[詳細情報](../dev/api/get-started-apis.md)

### 修正点 {#fixes-8-7-3}

このリリースでは、次の問題が修正されています。

NEO-79373、NEO-81908、NEO-83081

## リリース 8.6.4 {#release-8-6-4}

_2025年1月15日（PT）_

### 一般的な改善点 {#improvements-8-6-4}

* [エンタープライズ（FFDA）デプロイメント](../../v8/architecture/enterprise-deployment.md)のコンテキストにおける配信分析中の Campaign アプリケーションの安定性が向上しました。
* このリリースには、キー管理、ステージング、データレプリケーションなどの改善および強化された FFDA アーキテクチャメカニズムが付属しています。
* [エンタープライズ（FFDA）デプロイメント](../../v8/architecture/enterprise-deployment.md)に新しいテクニカルワークフローが導入されました。これらのワークフローでは、対応するテーブルで並列レプリケーションリクエストを一元化することで、配信と関連データをレプリケートします。これらのワークフローは、`Replicate nms` から開始します。[詳細情報](../architecture/replication.md)
* ワークフロープロパティで、新しい「**監視スーパーバイザーを有効にしてワークフローを永続的に引き続き実行します**」オプションが使用できるようになりました。このオプションが有効になっている場合、エラーが発生した後にワークフローが自動的に再開されます。ワークフローが引き続きエラー状態になっている場合、デフォルトでは 30 秒ごとに再開が行われます。この間隔を調整するには、新しい `XtkWorkflow_WatchdogRestartTimerTimeout` オプションを作成し、整数データタイプを設定して新しい遅延を指定します。このオプションは、テクニカルワークフローでのみ有効にする必要があります。[詳細情報](../../automation/workflow/workflow-properties.md#execution)

### セキュリティの強化 {#security-8-6-4}

**[!UICONTROL Adobe Experience Cloud]** 外部アカウントを通じてアドビソリューションおよびアプリとの接続が更新され、セキュリティが強化されました。

<!--
### Connection to Campaign {#ims-8-6-4}

**(Limited availability)** For a restricted list of customers, Campaign v8.6.4 can allow native authentication mode instead of Adobe Identity Management System (IMS). Note that if you are using Campaign native authentication, you cannot access to [Campaign Web User Interface](../start/campaign-ui.md#campaign-web-user-interface).-->

### 互換性のアップデート {#comp-8-6-4}

次の FDA コネクタが追加されました。この[ページ](compatibility-matrix.md#FederatedDataAccessFDA)を参照してください。

* Databricks が、Adobe Campaign Federated Data Access（FDA）の外部データベースとしてサポートされるようになりました。

* 新しい Amazon Redshift FDA ODBC コネクタが使用できるようになりました。接続性が向上し、メンテナンスが容易になり、互換性も強化されます。この新しいバージョンには、次の機能強化が含まれています。

   * 新しいコネクタは、最新の FDA コネクタと一致する ODBC インターフェイスに基づいています。これにより、長期的なサポートが確保されます。
   * また、s3 バケットを使用した新しいデータ読み込みメカニズムを導入し、パフォーマンスを大幅に向上させます。

  従来のコネクタは、引き続き使用できます。新しいコネクタを試す場合は、アドビ担当者にお問い合わせください。

### 修正点 {#fixes-8-6-4}

このリリースでは、次の問題が修正されています。

NEO-48232、NEO-67814、NEO-71388、NEO-74855、NEO-75643、NEO-75962、NEO-76132、NEO-76958、NEO-76986、NEO-77162、NEO-77452、NEO-78946、NEO-79373、NEO-80243、NEO-80314、NEO-81127、NEO-81209、NEO-81223、NEO-81287、NEO-81290、NEO-81312、NEO-81512、NEO-81520、NEO-81566、NEO-81704、NEO-81908、NEO-82195、NEO-82591、NEO-82592、NEO-82640、NEO-82665、NEO-82781、NEO-82920、NEO-83081、NEO-83096、NEO-83137、NEO-83143。

