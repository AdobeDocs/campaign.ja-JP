---
title: Campaign v8（コンソール）2025 リリースノート
description: 2025 Campaign v8 リリースに付属する機能と改善点の一覧
feature: Release Notes
exl-id: 3f91d83e-594e-49ee-a898-606e3de00bf3
TQID: https://experienceleague.adobe.com/OJjLadHvAgwmaelChtIjHv-xYlTV8syMi7IMIrkMvjs
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
  - id: b12f6872-9271-4369-85e5-86969a0b99a2
  - id: c309ee4e-82e4-4f7e-b608-ef345678c34e
  - id: d5ef99fa-df0c-4153-bf94-105ad0724167
subfeature_v2:
  - id: bf97c196-a4d1-4fa3-a151-e68a114c8ac0
  - id: c3bf7e1e-1db5-4c72-9293-e2f0b1ab73d0
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 3613
ht-degree: 33%

---

# 2025 リリースノート {#2025-rn}

このページには、**Campaign v8 2025 リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。 最新リリースについては、[このページ &#x200B;](release-notes.md)を参照してください。

新しい実装または既存の環境へのアップグレードを行う場合は、[最新リリース &#x200B;](release-notes.md)をインストールします。

>[!BEGINSHADEBOX]

**このページの内容**

* [リリース 8.8.2](#release-8-8-2)
* [リリース 8.6.5](#release-8-6-5)
* [リリース 8.6.4](#release-8-6-4)
* [リリース 8.7.4](#release-8-7-4)
* [リリース 8.7.3](#release-8-7-3)


>[!ENDSHADEBOX]

## リリース 8.8.2 {#release-8-8-2}

_2025年10月9日_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。

### 新機能 {#features-8-8-2}

**新しいSMS送信コネクタ**&#x200B;が、[Campaign FFDA デプロイメント &#x200B;](../architecture/enterprise-deployment.md)で利用できるようになりました。 [詳細ドキュメント](../send/sms/sms.md)を参照してください。

このリリースには、Campaign Web ユーザーインターフェイスで使用できる一連の機能も搭載されています。

* [&#x200B; トランザクションメッセージのプロファイルエンリッチメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/transactional-messages/profile-enrichment.html?lang=ja){target="_blank"}
* [トランザクションメッセージ、プッシュ通知、SMS用の多言語機能](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/multilingual.html?lang=ja){target="_blank"}

Campaign Web UI [&#x200B; リリースノート &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/release-notes/release-notes.html?lang=ja){target="_blank"}を参照してください

### 修正点 {#fixes-8-8-2}

<!--
* Fixed an issue which prevented dynamic reporting from being available for transactional messages.
-->
* データベースのクリーンアップワークフローが失敗する可能性がある問題を修正しました。 （NEO-87949）
* 協調キャンペーン配信のトラッキングデータが記録されない分散マーケティングの問題を修正しました。 （NEO-86836）
<!--
* Issue SMS2.0 with FFDA Continuous Deliveries (NEO-88785)
-->
* フラグメントのパーソナライゼーションが正しく機能しない可能性がある問題を修正しました。 （NEO-88161）
* 新しいRedshift ODBC コネクタに移行した後、分割ワークフローアクティビティがSQL エラーで失敗する可能性がある問題を修正しました。 （NEO-87466）
* ワークフローで不正確な除外数が発生する可能性がある問題を修正しました。 （NEO-89207）
* プッシュ通知のクリックインジケーターが不正確になる可能性がある問題を修正しました。 （NEO-89503）
* Adobe CampaignでSMS配信ログが正しく更新されず、正確なステータスレポートが表示されない問題を修正しました。 （NEO-88479）
* 配信コンテンツでフランス語の引用符が誤って英語の引用符に変換される問題を修正しました。 （NEO-89631）
* Real-Time Serverが無効なIMS トークンに対して誤った応答コードを返す問題を修正しました。 （NEO-87428）
* 電子メールとSMSの配信統計が完全に再計算されず、不正確な成功指標が発生する問題を修正しました。 （NEO-88106）
* 新しいSMS送信コネクタで、配信ログがメッセージの小さなサブセットに対して配信ステータスを誤って割り当てていた問題を修正しました。 （NEO-89581）
* 新しいSMS送信コネクタで、マーケティングサーバーとミッドサーバーの両方で成功指標の配信が正しく更新されない問題を修正しました。 （NEO-89850）
* トラッキングログの欠落や誤ったレポートの原因となる、Real-Time インスタンスとマーケティングインスタンス間の同期の問題を修正しました。 （NEO-90247）
* カスタムスキーマで2つの連続する1-N リンク間でフィールドを選択する際にエラーが発生する可能性があるワークフローの強化の問題を修正しました。 （NEO-87682）

## リリース 8.8.1 {#release-8-8-1}

_2025年7月9日（PT）_

### 新機能 {#features-8-8-1}

以前は一部のユーザー向けにリリースされていましたが、すべてのCampaign FDA環境で次の機能を利用できるようになりました。

* **新しいSMS送信コネクタ** - SMS送信コネクタが近代化および改善され、トランシーバーモード SMPP接続を有効にし、永続的なSMPP接続を有効にし、より優れた互換性を確保できるようになりました。 すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。 既存の実装は引き続きサポートされますが、この新しい最新および拡張コネクタに移行することをお勧めします。 新しいコネクタに移行する場合は、Adobeにお問い合わせください。 [詳細情報](../send/sms/sms.md)

  >[!NOTE]
  >
  >この機能は、[Campaign FFDA デプロイメント &#x200B;](../architecture/enterprise-deployment.md)で利用できる&#x200B;**not**&#x200B;です。

<!-- (from ACC rn, aleady in the product, to remove?) -->

<!-- * **Enrichment in transactional messages** (to remove?) -->

<!--
* **Multilingual delivery creation** in the Web UI - You can now send multiple email deliveries in different languages in Adobe Campaign Web User Interface. The Multilingual delivery feature allows you to choose the default language of your delivery as well as the different languages in which the delivery can be sent. You can also preview these deliveries in the languages you have chosen. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/email/edit-content.html?lang=ja)

ACC - Multilingual deliveries - Starting Campaign Web User interface April release, you will be able to send multiple email deliveries in different languages, and access the related dynamic reports. This capability will only be available in Adobe Campaign Web User Interface at the end of April, and require a server update to Campaign v8.7.4.
-->

<!--
*  **Visual fragments** in the Web UI - You can now create, use and archive content fragments. Visual fragments are pre-defined visual blocks that you can reuse across multiple email deliveries, or in content templates. [Learn more](https://experienceleague.adobe.com/docs/campaign-web/v8/content/manage-reusable-content/fragments/fragments.html?lang=ja){target="_blank"}

(already available in console and web, to remove?)
web - * Visual fragments - You can now archive visual content fragments. Learn more
-->

<!--
* **Delivery alerting** in the Web UI - The Delivery alerting feature is an alert management system that enables a group of users to automatically receive notifications containing information on the execution of their deliveries. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/delivery-alerting/delivery-alerting.html?lang=ja){target="_blank"}
-->

<!--
* **Landing pages improvements**  in the Web UI- The following improvements to landing pages are now available:

    * You can now reference a default subscription/unsubscription landing page when configuring a service. When designing an email, if you define a link to that landing page, users submitting the landing page form are automatically subscribed to or unsubscribed from this service. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/audiences/work-with-services/manage-services.html?lang=ja#create-service){target="_blank"}
    * A new option in the landing page configuration allows anonymous visitors to access the landing page. If you unselect this option, only identified users can access and submit the form. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/create-lp.html?lang=ja#create-landing-page){target="_blank"}
    * A new option in the landing page configuration allows to store additional internal data when the landing page is being submitted. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/create-lp.html?lang=ja#create-landing-page){target="_blank"}
    * A new option enables to use a landing page for several services, making it dynamic. When adding a link to an email, if you select a dynamic landing page, you can select any service. If you select a landing page that has a specific service associated, this service will be automatically used (you cannot select another one). [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/create-lp.html?lang=ja#define-actions-on-form-submission){target="_blank"}
    * Conditional content is now supported in landing pages. [Read more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/lp-content.html?lang=ja){target="_blank"}
    * You can link a landing page to a service, and send a confirmation message when users validate it. [Learn more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/lp-content.html?lang=ja#lp-message){target="_blank"}
    * You can add captcha to protect your landing page from spam and abuse caused by bots. This is non-intrusive for your customers since it does not require any interaction from them and is based on interactions with your site. [Learn more](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/create-lp.html?lang=ja#captcha){target="_blank"}

web - * **Subscriptions with Landing pages** - You can now link a landing page to a service, and send a confirmation message when users validate it. [Learn more](../landing-pages/lp-content.md#lp-message){target="_blank"}.
Web - * **Captcha in landing pages** - You can now add captcha to protect your landing page from spam and abuse caused by bots. This is non-intrusive for your customers since it does not require any interaction from them and is based on interactions with your site. [Learn more](../landing-pages/create-lp.md#captcha)
-->

<!--
* (from ACC rn, already in product, to remove?) **Rich Push Notification (GA)** - You can now send rich push notifications. Rich push notification is an enhanced form of mobile notification that goes beyond simple text messages by incorporating multimedia elements such as images, interactive buttons, or other rich media content. With this version, a set of templates for rich push notifications are now available for your iOS and Android apps. [Read more](../send/rich-push-android.md).
ACC * Rich Push Notification templates - You can now send rich push notifications via Android. Rich push notification is an enhanced form of mobile notification that goes beyond simple text messages by incorporating multimedia elements such as images, interactive buttons, or other rich media content. Read more.
-->

以前は制限付き可用性でリリースされていましたが、次の機能がオンデマンド **で利用できるようになりました**:

<!--
* **Dynamic Reporting** - You can now access Dynamic Reporting which provides fully customizable and real-time reports to measure the impact of your marketing activities. It adds access to profile data, enabling demographic analysis by profile dimensions such as gender, city and age in addition to functional email campaign data like opens and clicks. Dynamic reporting is also available for multilingual email deliveries and transactional messages. [Read more](https://experienceleague.adobe.com/docs/experience-cloud/campaign/reporting/get-started-reporting.html){target="_blank"}

ACC **Dynamic Reporting for Transactional messages** - You can now monitor your transactional messages in the Dynamic Reporting user interface. These reports provide the ability to the marketer to view the all the reporting metrics and dimensions of transactional messages, breakdown of deliveries sent through a template in real time. [Read more](https://experienceleague.adobe.com/en/docs/experience-cloud/campaign/reporting/get-started-reporting){target="_blank"}
ACC - Dynamic Reporting - As a Campaign Standard migrated user, you can access Dynamic Reporting which provides fully customizable and real-time reports to measure the impact of your marketing activities. It adds access to profile data, enabling demographic analysis by profile dimensions such as gender, city and age in addition to functional email campaign data like opens and clicks. Read more
* **Dynamic Reporting for Multilingual** - Dynamic reporting is now available for multilingual email deliveries. For more information, refer to the [detailed documentation](../reporting/global-reports.md).
-->

* **Rest API** - Rest APIを使用してAdobe Campaignの統合を作成し、Adobe Campaignと使用するテクノロジーパネルをインターフェイスして独自のエコシステムを構築できるようになりました。 Transactional Messaging REST APIは、SMS チャネルでも使用できます。 ペイロードにメールと mobilePhone の両方が存在する場合は、「wishedChannel」フィールドを使用してチャネルを指定できます。 指定しない場合は、wishedChannel で明示的に SMS をリクエストしない限り、デフォルトでメールが使用されます。 イベントベースのトランザクション APIもメールで利用できます。 [詳細情報](../dev/api/get-started-apis.md)

  >[!NOTE]
  >
  >この機能は、[Campaign FFDA デプロイメント &#x200B;](../architecture/enterprise-deployment.md)で利用できる&#x200B;**not**&#x200B;です。

* **ワンクリックリスト – 登録解除** – 送信者がワンクリックですばやくオプトアウトできる状態を送信者に求める主要ISPでは、メールテンプレートまたは配信プロパティから直接、ユーザーインターフェイスでワンクリックリスト – 登録解除ヘッダーを有効にできるようになりました。 このオプションは、デフォルトでは有効になっています。 [詳細情報](../send/email-parameters.md#one-click-list-unsubscribe)

<!--
ACC - Rest APIs - As a Campaign Standard migrated user, you can use Rest APIs to create integrations for Adobe Campaign and build your own ecosystem by interfacing Adobe Campaign with the panel of technologies that you use. Read more
* **SMS REST API support (LA)** - The Transactional Messaging REST API is now available for the SMS channel. When both email and mobilePhone are present in the payload, you can use the "wishedChannel" field to specify the channel. If not provided, email will be used by default unless wishedChannel explicitly requests SMS. For more information, refer to the [detailed documentation](https://experienceleague.adobe.com/en/docs/experience-cloud/campaign/apis/managing-transactional-messages){target=_blank}.
ACC - SMS REST API support - The Transactional Messaging REST API is now available for the SMS channel. When both email and mobilePhone are present in the payload, you can use the "wishedChannel" field to specify the channel. If not provided, email will be used by default unless wishedChannel explicitly requests SMS.
ACC * **Transactional messaging REST APIs** - Event-based Transactional APIs are now available for Emails. [Read more](https://experienceleague.adobe.com/en/docs/experience-cloud/campaign/apis/managing-transactional-messages){target="_blank"}
-->

上記の機能に加えて、このリリースには、Campaign Web ユーザーインターフェイスで使用できる一連の機能も搭載されています。

* [多言語配信の作成](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/email/edit-content.html?lang=ja#multilingual-delivery){target="_blank"}
* [配信アラート](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/delivery-alerting/delivery-alerting.html?lang=ja){target="_blank"}
* [ランディングページの改善](https://experienceleague.adobe.com/docs/campaign-web/v8/landing-pages/get-started-lp.html?lang=ja){target="_blank"}
* [Dynamic Reporting](https://experienceleague.adobe.com/docs/campaign-web/v8/reports/dynamic-reporting/get-started-reporting.html?lang=ja){target="_blank"} （オンデマンド）
* [一元化されたブランディング &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/conf/branding/branding-gs.html?lang=ja){target="_blank"} （オンデマンド、新しい実装）

Campaign Web UI [&#x200B; リリースノート &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/release-notes/release-notes.html?lang=ja){target="_blank"}を参照してください

### 一般的な改善点 {#improvements-8-8-1}

* Microsoft Fabricsは、Adobe Campaign Federated Data Access （FDA）を使用した外部データベースとしてサポートされるようになりました。 [詳細情報](../config/external-accounts.md#transfer-data-external-accounts)
* Campaign v8では、プッシュ通知でAndroid 15とiOS 18がサポートされるようになりました。 [詳細情報](../start/compatibility-matrix.md#MobileSDK)
* セキュアな仮想プライベート ネットワーク トンネリング用のオンプレミス データベースに加えて、クラウドデータベースもサポートされるようになりました。 [詳細情報](../config/enhanced-security.md#vpn-databases)
* SMS 2.0 コネクタの「受信トラフィック」セクションに、新しい「プロバイダーID」フィールドのセットが追加されました。 [詳細情報](../send/sms/smpp-external-account.md#incoming-traffic)
* 「mailto」リストの購読解除メソッドを使用して購読解除した受信者は、強制隔離に送信されなくなりました。 配信に関連付けられたサービスの購読を解除するか、配信にサービスが定義されていない場合は、配信ブロックリスト（プロファイルの「もう連絡なし」セクション）に送信されます。 [詳細情報](../send/quarantines.md)
* 新しいバージョンのインボックスレンダリングレポートが、Adobe Campaign クライアントコンソールで使用できるようになりました。
* `setup-client.exe` ファイルは`ac-client.msi` ファイルに置き換えられました。管理者がユーザーの介入なしに一括アップグレードを実行する簡単な方法を提供します。

### 修正点 {#fixes-8-8-1}

* SMS 2.0の有効期限が無効なため、自動返信を受信できない問題を修正しました。 これにより、移行後の適切なメッセージ配信が保証されます。 （NEO-88088）
* SMS 2.0で、`inSms` テーブルの特定のフィールドが正しく更新されず、SMS機能の正確なデータ挿入が確保される問題を解決しました。 （NEO-87906）
<!--
* NOOOO Addressed delivery preparation failures for IndiGo Aviation after upgrading to v7.4.2. This fix resolves personalization and deduplication-related errors, enabling smooth delivery workflows. (NEO-87693)
* NOOOO Corrected Redshift database function definitions in version 8.6.4, ensuring proper execution of functions like `AddDays`, `AddHours`, `AddMinutes`, and `AddSeconds`. (NEO-87305)
* Provided a silent installation mechanism for the client console to facilitate mass upgrades without user intervention. This resolves challenges with manual installations. (NEO-69772)
-->
* SQL クエリで列参照が見つからないか正しくない場合に発生する、データベースのクリーンアップ ワークフローのエラーを修正しました。 これにより、ログと訪問者データを適切にパージできます。 （NEO-86813）
* 配信ログにイベント日が欠落していた問題を解決しました。 この修正により、スケジュールされたトリガーとワークフローに不可欠な、正確なイベント日付設定が保証されます。 （NEO-86708）
* SMS 2.0でのSMS配信ログ挿入の問題を修正し、`nmsBroadLogMid` テーブルで適切にログを記録するようにしました。 （NEO-86556）
* ダイレクトメールテンプレートの外部配信モードに関するファイル抽出の問題を修正し、互換性と機能を確保しました。 （NEO-86520）
* 複数のMID インスタンスをまたいだ分割ルーティングに関する配信処理の問題を解決し、正確な配信ステータスの更新とスループットを確保しました。 （NEO-86500）
* Campaign StandardからCampaign v8への移行後に動的レポートにトラッキングデータが欠落するのを修正し、配信トラッキングログの正確なレポートを確保しました。 （NEO-86419）
* ワークフローが2回実行され、重複したキー違反が発生する問題をトリガーするワークフローを解決しました。 この修正により、適切なイベントの処理と実行が保証されます。 （NEO-86154）
* デプロイメント後のRedshift OOTB SQL関数の互換性に関する問題を修正し、ワークフローで`GetDate()`のような関数を適切に実行できるようにしました。 （NEO-85834）
* URLが添付されたときに画像が消えたメール作成のレンダリングの問題を修正しました。 この修正により、受信トレイのプレビューで画像が適切に表示されるようになります。 （NEO-85716）
* WebUIでカーリーに閉じた引用符のレンダリングが修正され、メール配信で正確な文字表示が保証されました。 （NEO-85687）
* ミラーページのリンク機能を修正し、ミラーページ内の言語バリアント間の適切なナビゲーションを確保しました。 （NEO-85625）
* Web アプリの日付選択の日付形式の問題を解決し、日本の日付形式（`yyyy-mm-dd`）との互換性を確保しました。 （NEO-85234）
* ミッドソーシングでの代替ルーティング設定に関する後処理ワークフローの問題を修正し、適切なワークフロー実行を確保しました。 （NEO-85111）
* ウェーブを使用する際のAndroid配信スループットを改善し、配信パーツがスケジュールに基づいて正しい順序で処理されるようにしました。 （NEO-84324）
* `to_varchar`関数のnull処理エラーによる配信の準備エラーを修正しました。これにより、キャンペーンのスムーズな起動が保証されます。 （NEO-84108）
* 古い`libcurl`および`libssh2` バージョンが原因で発生するSFTP接続の問題を解決し、AzureでホストされているSFTP サーバーとの互換性を確保しました。 （NEO-84038）
* Snowflake FDA コネクタでキーペア認証エラーが発生し、データベース接続が正常に行われることを確認する問題を修正しました。 （NEO-84024）
* プッシュ配信でのプレッシングルールの適切な適用を確保しながら、タイポロジルール機能の問題を解決しました。 （NEO-84010）
* アップグレード後に日付とタイムスタンプの比較が一致しないために発生するBigQuery クエリエラーを解決し、フィルター条件との互換性を確保しました。 （NEO-83826）
* パーソナライゼーションエラーが原因で一時停止した配信を再開すると、配信アクティビティが失敗する問題を解決しました。 この修正により、配信ワークフローがよりスムーズになり、一時停止したアクティビティに関連するエラーを防ぐことができます。 （NEO-83809）
* 「ターゲットレコード読み込みクエリ」オプションを使用する場合のFFDAの問題を修正します。 「order by」および「where」句のサポートが追加されました。 （NEO-83793）
* broadLogRcp テーブルのnull以外の列に書き込まれるnull値によって引き起こされる繰り返し配信エラーを修正しました。 この修正により、配信の信頼性が向上し、ライブキャンペーン中のエラーを防ぐことができます。 （NEO-83729）
* 配信の準備中にシードアドレスが重複し、メッセージ数の不一致が発生する問題を解決しました。 この修正により、正確なターゲティングが保証され、重複エラーを防ぐことができます。 （NEO-83703）
* 実稼動配信が有効期間の後に送信され、法的な懸念が生じる可能性がある重大な問題を修正しました。 配信は、定義された有効期限に厳密に従うようになりました。 （NEO-83350）
* 大きなデータボリュームをTeradata テーブルに読み込む際に発生したスペースの問題を修正しました。 この修正プログラムは、データ処理を最適化し、本番環境での断続的なエラーを解決します。 （NEO-83252）
* SendMetricsToNewRelic エラーに関連するテクニカルワークフローのエラーを解決し、RT イベント処理で遅延が発生しました。 この修正により、ワークフローの実行がよりスムーズになり、イベントバックログが回避されます。 （NEO-83143）
* FFDA インタラクションインスタンスでIDからUUIDへの変換の問題が原因で発生するデータベースクリーンアップワークフローのエラーを修正しました。 このアップデートにより、適切なクリーンアップ操作が保証され、システム負荷が軽減されます。 （NEO-83138）
* シードメンバーの内部名の長さに対する制約によって発生する配信エラーを解決しました。 この修正により、配信のパーソナライゼーションに影響を与えることなく、より長い内部名を使用できます。 （NEO-83044）
* ランダムエラーが原因で、配信がパーソナライゼーションの保留中に停止する問題を修正しました。 このアップデートにより、よりスムーズなパーソナライゼーションプロセスと信頼性の高い配信の実行が保証されます。 （NEO-82781）
* APIのエラーと速度が遅いため、コンソールでオファーの提案を確認できない問題を修正しました。 この修正により、UIの応答性が向上し、適切なオファー機能が保証されます。 （NEO-82742）
* カスタム配信オブジェクトを使用すると、Adobe Campaign コンソールで断続的にクラッシュする問題を解決しました。 この修正により、カスタムワークフローを使用する際の安定性と信頼性が確保されます。 （NEO-82675）
* v7からv8への移行後に報告された処理速度の低下とワークフローのエラーを修正しました。 このアップデートにより、キャンペーンワークフローが最適化され、タイムリーな実行が保証されます。 （NEO-82665）

<!--
* Resolved an issue where sysfilters were generating incorrect SQL queries after upgrading to v8.6.3. This fix ensures proper query generation and restores sysfilter functionality. (NEO-82591)
-->

* MTA子プロセスが停止し、プッシュおよびWhatsApp配信がブロックされる重大な問題を修正しました。 このアップデートにより、コミュニケーションワークフローがよりスムーズになり、配信のボトルネックを防ぐことができます。 （NEO-82351）
* Teradataの更新中にGCP テーブルの文字列フィールドがエラーを引き起こすデータ移行の問題を修正しました。 この修正により、回避策が不要になり、ワークフローの効率が向上します。 （NEO-82260）
* FFDA インスタンスのプライマリデータベースを考慮するようにデータベースクリーンアップロジックを更新し、存在しないテーブルをパージする不必要な試みを防ぎました。 この修正により、クリーンアップ操作が最適化されます。 （NEO-81879）
* サブワークフローと列挙フィールドを組み合わせて使用すると、コンソールがクラッシュする問題を解決しました。 この修正により、強化されたワークフローを使用する際の安定性が確保されます。 （NEO-81864）
* 配信の複製の後、ターゲットマッピングのサブアフィニティフィールドが誤って変更され、ワークフローのエラーが発生する問題を修正しました。 このアップデートにより、一貫したサブアフィニティ値が保証されます。 （NEO-81809）
* Adobe Campaign Classic v8でのファイル転送アクティビティでワイルドカード文字のサポートが追加され、ユーザーがワークフローに動的名前（`abc_*`など）を持つファイルをアップロードできるようになりました。 （NEO-81758）
* Adobe Campaign Classic v8のiOS プッシュ通知で`content-available` フラグを有効にするオプションを導入しました。 この機能強化により、モバイルアプリは通知を受信トレイに保存でき、バックグラウンド更新をサポートして、APNSの制限に起因する配信の破棄の問題に対処できます。 （NEO-81721）

<!--
* Updated the Campaign 7.4.1 release upgrade process to require manual installation of dependencies. Documentation has been provided to guide users on installing required libraries such as `epel-release`, `java-11-openjdk-headless`, and others. (NEO-81433)
-->

* Adobe Campaign Classic v8で、BigQuery接続のタイムアウト設定オプションを追加しました。 この機能強化により、ユーザーはクエリのタイムアウト期間を調整し、デフォルトのタイムアウト制限によるクエリエラーの問題を解決できます。 （NEO-81222）
* v8移行後に分割および代替ルーティング外部アカウントを介して送信された配信でミラーページ URLが失敗する断続的な問題を修正しました。 基になる配信部分が`mirrorPageInfo`に正しくコピーされるようになりました。 （NEO-81105）

<!--
* Resolved an authentication failure issue with inMail caused by token expiration. Restarting the `nlserver` process now resolves the error. (NEO-80683)
-->

* クライアントコンソールの「新しいWeb UIにアクセス」ボタンを修正し、実稼動インスタンスの正しいURL （`https://experience.adobe.com`）を指すようにしました。 これにより、実稼動環境の無効なURLに関する問題を解決できます。 （NEO-80673）
* 分割アクティビティで、並べ替えとサイズ（セグメントの割合）の両方を使用するとSQL エラーが発生する問題を修正しました。 機能が正しく動作するようになりました。 （NEO-80432）
* `CCurlAzureBlobStorage::UploadStream`を使用したワークフローのクラッシュの問題を修正しました。 Azure Blob Storageのアップロード中に、ワークフローがセグメント化エラーなしで実行されるようになりました。 （NEO-79598）
* 実稼動環境でクライアントコンソールからミラーページを表示できない問題を解決しました。 ミラーページリンクが、電子メールビューとコンソールビューの両方で正しく機能するようになりました。 （NEO-78946）
* メッセージの配信に成功したにもかかわらず、一部のログに「配信がキャンセルされました」と誤ってマークされる配信ログの問題を修正しました。 連絡先日とイベント日の不一致に関連する根本原因に対処しました。 （NEO-78933）
* セキュリティを強化するために`com.google.code.gson:gson` ライブラリを更新しました。 （NEO-78299）
* ワークフロー失敗の原因となったFDA接続ログ （`nmsconnectionlogs`）の重複キー制約エラーを解決しました。 IDが重複しないように、挿入ロジックが調整されました。 （NEO-78050）
* 強制隔離されたメールアドレスがアドレステーブルでモバイルとして誤ってフラグ付けされ、配信分析エラーが発生する問題を修正しました。 配信オブジェクト間の紐付けロジックが修正されました。 （NEO-76986）
* Oracle データベースでコントロールグループを使用する場合の配信の準備エラーを修正しました。 Oracle データベースとの互換性を確保するために、SQL クエリの生成を修正しました。 （NEO-76947）
* 新しい月の移行時に同時にフォルダーを作成することで発生する配信エラーを解決しました。 配信フォルダーの作成ロジックが調整され、キー違反が重複するのを防ぐことができます。 （NEO-76824）
* Teradata外部アカウントのタイムゾーン変換の一貫性のない問題を修正しました。 表示されるタイムスタンプが、設定されたタイムゾーン設定と正しく一致するようになりました。 （NEO-76716）
* 大規模なデータセットを効率的に処理するためのデータベースのクリーンアップワークフローが改善されました。 行IDとバインド変数を使用した新しいアプローチが実装され、削除パフォーマンスが最適化されました。 （NEO-76439）
* 「その他」チャネルを持つ外部配信で出力ファイルが生成されない問題を解決しました。 配信プロパティに、生成されたファイルのファイルパスが正しく含まれるようになりました。 （NEO-75962）
* 大規模なデータ更新による`ffdaReplicateStagingData` ワークフローのエラーを修正しました。 ワークフローエラーを防ぐために、タイムアウト設定とテーブルサイズ管理が最適化されました。 （NEO-75643）
* ダイレクトメール出力ファイルをプレビューすると、ダッシュボードが空白になる問題を修正しました。 ファイルのプレビュー後に、ダッシュボードが正しく表示されるようになりました。 （NEO-75359）
* プッシュ通知の追跡インジケーターを強化して、クリック数と開封数を追加しました。 `@recipientClick`、`@personClick`、`@totalRecipientClick`などの指標は、モバイル通知のクリック数を考慮するようになりました。 （NEO-75240）
* 外部のキャンセル保留中ステータスを持つ配信のクリーンアップワークフローのエラーを修正しました。 データベースレコード取得ロジックが修正されました。 （NEO-74833）
* ロシア （UTC+3:00 モスクワ）で、`nlserver`の出力時間が正しくないタイムゾーンの不一致の問題を解決しました。 時間同期ロジックが更新されました。 （NEO-74754）
* MSSQL データベースのSQL構文が正しくないことが原因で、`defaultMidSourcingDlvStat` ワークフローのエラーが修正されました。 クエリ生成ロジックが互換性を保つように調整されました。 （NEO-74156）
* Web プロセスでの複数のクラッシュを修正しました。 （NEO-73174）
* 条件にアポストロフィが存在する場合にBigQuery クエリが失敗する問題を修正しました。 クエリ処理ロジックが更新され、特殊文字が正しく解釈されるようになりました。 （NEO-72547）
* 除外フィルターを含むタイポロジルールが正しく機能しない問題を解決しました。 配信の準備のためのSQL クエリ生成が修正されました。 （NEO-72292）
* バウンス管理のためのイベント日と連絡日の不一致に対処しました。 タイムゾーン処理ロジックが改善されました。 （NEO-72277）
* ダイレクトメール配信で誤って変換されたUTF-8文字の処理を強化しました。 配信エラーを防ぐために、非表示の文字が正しく処理されるようになりました。 （NEO-72148）
* フィルターが保存の問題を引き起こしたインバウンド SMS アクティビティのエラーを修正しました。 ワークフローがエラーを生成せずに正しく保存されるようになりました。 （NEO-70427）
* オファースペース内のグループ化された適格性基準に対するSQL クエリの生成を修正しました。 適切なフィルタリングを確実に行うために、SQL条件に括弧が含まれていない問題が追加されました。 （NEO-70425）

<!--
* Updated the public documentation link in the `ffdaUnicity` workflow email template to point to the correct page for key management in v8. (NEO-67996)
-->

* HTTP コンテンツまたは転送エンコーディングの問題によって引き起こされるBigQuery データ読み込みワークフローの断続的エラーを修正しました。 接続処理ロジックが改善されました。 （NEO-66989）

## リリース 8.6.5 {#release-8-6-5}

_2025年4月25日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。

### 新機能 {#features-8-6-5}

**新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバモードの SMPP 接続と永続的な SMPP 接続が有効になり、Adobe Campaign Standard から移行する環境との互換性が向上しました。 すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。 既存の実装も引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。 [詳細情報](../send/sms/sms.md)

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
>このリリースは&#x200B;**限定提供**（LA）中です。 **Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#features-8-7-4}

* **SMS REST API サポート（LA）** - トランザクションメッセージング REST API が SMS チャネルで使用できるようになりました。 ペイロードにメールと mobilePhone の両方が存在する場合は、「wishedChannel」フィールドを使用してチャネルを指定できます。 指定しない場合は、wishedChannel で明示的に SMS をリクエストしない限り、デフォルトでメールが使用されます。

* **多言語配信** - Campaign web ユーザーインターフェイスの 4 月リリース以降、複数のメール配信を異なる言語で送信し、関連する動的レポートにアクセスできます。 この機能は、4 月末に Adobe Campaign web ユーザーインターフェイスでのみ使用可能になり、Campaign v8.7.4 へのサーバーアップデートが必要になります。

### 修正点 {#fixes-8-7-4}

このリリースでは、次の問題が修正されています。

NEO-80245、NEO-83559

## リリース 8.7.3 {#release-8-7-3}

_2025年2月14日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。 **Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#features-8-7-3}

* **トランザクションメッセージの動的レポート** - 動的レポートのユーザーインターフェイスでトランザクションメッセージを監視できるようになりました。 これらのレポートにより、マーケターはトランザクションメッセージのすべてのレポート指標とディメンション、テンプレート経由で送信された配信の分類をリアルタイムで確認できます。 [詳細情報](https://experienceleague.adobe.com/docs/campaign-web/v8/reports/dynamic-reporting/get-started-reporting.html?lang=ja){target="_blank"}

* **トランザクションメッセージ REST API** - イベントベースのトランザクション API がメールで使用できるようになりました。 [詳細情報](../dev/api/get-started-apis.md)

### 修正点 {#fixes-8-7-3}

このリリースでは、次の問題が修正されています。

NEO-79373、NEO-81908、NEO-83081

## リリース 8.6.4 {#release-8-6-4}

_2025年1月15日（PT）_

### 一般的な改善点 {#improvements-8-6-4}

* [エンタープライズ（FFDA）デプロイメント](../../v8/architecture/enterprise-deployment.md)のコンテキストにおける配信分析中の Campaign アプリケーションの安定性が向上しました。
* このリリースには、キー管理、ステージング、データレプリケーションなどの改善および強化された FFDA アーキテクチャメカニズムが付属しています。
* [エンタープライズ（FFDA）デプロイメント](../../v8/architecture/enterprise-deployment.md)に新しいテクニカルワークフローが導入されました。 これらのワークフローでは、対応するテーブルで並列レプリケーションリクエストを一元化することで、配信と関連データをレプリケートします。 これらのワークフローは、`Replicate nms` から開始します。 [詳細情報](../architecture/replication.md)
* ワークフロープロパティで、新しい「**監視スーパーバイザーを有効にしてワークフローを永続的に引き続き実行します**」オプションが使用できるようになりました。 このオプションが有効になっている場合、エラーが発生した後にワークフローが自動的に再開されます。 ワークフローが引き続きエラー状態になっている場合、デフォルトでは 30 秒ごとに再開が行われます。 この間隔を調整するには、新しい `XtkWorkflow_WatchdogRestartTimerTimeout` オプションを作成し、整数データタイプを設定して新しい遅延を指定します。 このオプションは、テクニカルワークフローでのみ有効にする必要があります。 [詳細情報](../../automation/workflow/workflow-properties.md#execution)

### セキュリティの強化 {#security-8-6-4}

Apache web モジュールでのHTTP リクエスト処理を強化して、セキュリティを強化し、潜在的なリクエスト処理の脆弱性を防ぎました。 （NEO-85824）

**[!UICONTROL Adobe Experience Cloud]** 外部アカウントを通じてアドビソリューションおよびアプリとの接続が更新され、セキュリティが強化されました。

<!--
### Connection to Campaign {#ims-8-6-4}

**(Limited availability)** For a restricted list of customers, Campaign v8.6.4 can allow native authentication mode instead of Adobe Identity Management System (IMS). Note that if you are using Campaign native authentication, you cannot access to [Campaign Web User Interface](../start/campaign-ui.md#campaign-web-user-interface).
-->

### 互換性のアップデート {#comp-8-6-4}

次の FDA コネクタが追加されました。 この[ページ](compatibility-matrix.md#FederatedDataAccessFDA)を参照してください。

* Databricks が、Adobe Campaign Federated Data Access（FDA）の外部データベースとしてサポートされるようになりました。

* 新しい Amazon Redshift FDA ODBC コネクタが使用できるようになりました。 接続性が向上し、メンテナンスが容易になり、互換性も強化されます。 この新しいバージョンには、次の機能強化が含まれています。

   * 新しいコネクタは、最新の FDA コネクタと一致する ODBC インターフェイスに基づいています。 これにより、長期的なサポートが確保されます。
   * また、s3 バケットを使用した新しいデータ読み込みメカニズムを導入し、パフォーマンスを大幅に向上させます。

  従来のコネクタは、引き続き使用できます。 新しいコネクタを試す場合は、アドビ担当者にお問い合わせください。

### 修正点 {#fixes-8-6-4}

このリリースでは、次の問題が修正されています。

NEO-48232、NEO-67814、NEO-71388、NEO-74855、NEO-75643、NEO-75962、NEO-76132、NEO-76958、NEO-76986、NEO-77162、NEO-77452、NEO-78946、NEO-79373、NEO-80243、NEO-80314、NEO-81127、NEO-81209、NEO-81223、NEO-81287、NEO-81290、NEO-81312、NEO-81512、NEO-81520、NEO-81566、NEO-81704、NEO-81908、NEO-82195、NEO-82591、NEO-82592、NEO-82640、NEO-82665、NEO-82781、NEO-82920、NEO-83081、NEO-83096、NEO-83137、NEO-83143。

