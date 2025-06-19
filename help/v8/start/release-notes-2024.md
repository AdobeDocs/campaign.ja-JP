---
title: Campaign v8（コンソール）2024 リリースノート
description: Campaign v8 2024 リリースで記載される機能と改善点のリスト
feature: Release Notes
exl-id: 6a0a9486-19a9-4ec3-9030-48dbf419f45f
source-git-commit: 57b18835b87be2a201ce23f5b6053266d13b9cb8
workflow-type: ht
source-wordcount: '1308'
ht-degree: 100%

---

# 2024 リリースノート {#2024-rn}

このページには、**Campaign v8 2024 リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。

>[!BEGINSHADEBOX]

**このページの内容**

* Campaign v8.7 - [リリース 8.7.1](#release-8-7-1)
* Campaign v8.6 - [リリース 8.6.1](#release-8-6-1) | [リリース 8.6.2](#release-8-6-2) | [リリース 8.6.3](#release-8-6-3)
* Campaign v8.5 - [リリース 8.5.3](#release-8-5-3)

>[!ENDSHADEBOX]



## リリース 8.7.1 {#release-8-7-1}

_2024年5月2日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#new-8-7-1}

* **リッチプッシュ通知テンプレート** - Android を介してリッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。[詳細情報](../send/rich-push-ios.md)

* **ブランディング** - Campaign Standard に移行したユーザーとして、技術管理者が 1 つまたは複数のブランドを定義して、ブランドの ID に影響を与えるパラメーターを一元化できるようになりました。ブランドのロゴ、ランディングページのアクセス URL のドメイン、メッセージトラッキングの設定などが含まれます。これらのブランドを作成して、メッセージやランディングページにリンクできます。こうした設定はテンプレートで管理されます。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/branding/branding-gs.html?lang=ja){target="_blank"}

* **Rest API** - Campaign Standard で移行したユーザーは、Rest API を使用して Adobe Campaign の統合を作成し、使用するテクノロジーのパネルと Adobe Campaign をインターフェイスで接続することで独自のエコシステムを作成できます。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/apis/get-started-apis.html?lang=ja){target="_blank"}

* **動的レポート** - Campaign Standard に移行したユーザーは、完全にカスタマイズ可能なリアルタイムのレポートを提供する、動的レポートにアクセスして、マーケティングアクティビティの影響を測定できます。プロファイルデータへのアクセスが追加され、開封数やクリック数などの機能的なメールキャンペーンデータに加えて、性別、市区町村、年齢などのプロファイルディメンション別のデモグラフィック分析を可能にします。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/reporting/get-started-reporting.html?lang=ja){target="_blank"}

### 互換性のアップデート {#comp-8-7-1}

次の FDA コネクタが追加されました。この[ページ](compatibility-matrix.md#FederatedDataAccessFDA)を参照してください。

* Databricks が、Adobe Campaign Federated Data Access（FDA）の外部データベースとしてサポートされるようになりました。

* 新しい Amazon Redshift FDA ODBC コネクタが使用できるようになりました。接続性が向上し、メンテナンスが容易になり、互換性も強化されます。この新しいバージョンには、次の機能強化が含まれています。

   * 新しいコネクタは、最新の FDA コネクタと一致する ODBC インターフェイスに基づいています。これにより、長期的なサポートが確保されます。
   * また、s3 バケットを使用した新しいデータ読み込みメカニズムを導入し、パフォーマンスを大幅に向上させます。

  従来のコネクタは、引き続き使用できます。新しいコネクタを試す場合は、アドビ担当者にお問い合わせください。

### OAuth サーバー間の資格情報への移行 {#change-8-7-1}

このバージョン以降、サービスアカウント（JWT）資格情報はアドビによって廃止され、アドビのソリューションおよびアプリとの Campaign アウトバウンド統合は OAuth サーバー間の資格情報に依存するようになりました。アドビでは、Campaign と Analytics 統合や Experience Cloud トリガー統合などのアウトバウンド統合に対して、JWT から OAuth への移行を実行します。

Campaign とのインバウンド統合を実装している場合は、[このドキュメント](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/migration/){target="_blank"}の説明に従ってテクニカルアカウントを移行する必要があります。既存のサービスアカウント（JWT）資格情報は、**2025年6月30日（PT）**&#x200B;まで引き続き機能します。

### 一般的な改善点 {#improvements-8-7-1}

* いくつかのスキーマが 32 ビットから 64 ビットに変更されました。これは、Campaign Standard から移行するお客様にのみ該当します。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/technotes/64-bit-tables.html?lang=ja){target="_blank"}

* Campaign テーブルでは、`lastModified` および `created` の属性がサーバーの日時によってデフォルトで入力されるようになりました。`createdBy-id` 属性値には、デフォルトで現在のログイン ID が入力されるようになりました。API 呼び出しでユーザーが指定した値は無視されます。<!--This configuration can be changed in the Campaign server configuration file. As a Managed Cloud Services customer, you must reach out to Adobe to change this default configuration.-->

* アプリケーション間のすべての通信のセキュリティを強化するために、外部 API 呼び出しで mTLS がサポートされるようになりました。

### 修正点 {#fixes-8-7-1}

このリリースでは、次の問題が修正されています。

NEO-72648、NEO-71534、NEO-71473、NEO-70263、NEO-70195、NEO-69651、NEO-68704、NEO-68192、NEO-67814、NEO-67702、NEO-67620、NEO-66022、NEO-65774、NEO-65633、NEO-64199、NEO-63706、NEO-63705、NEO-63287、NEO-63197、NEO-62575、NEO-60250、NEO-60192、NEO-58596、NEO-58314、NEO-58004、NEO-40054



## リリース 8.6.3 {#release-8-6-3}

_2024年7月30日（PT）_

### 新機能 {#new-8-6-3}

* **リッチプッシュ通知** - リッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、リッチプッシュ通知用のテンプレートセットが iOS および Android アプリで利用できるようになりました。[詳細情報](../send/rich-push-android.md)

* このバージョン以降、サービスアカウント（JWT）資格情報はアドビによって廃止され、アドビのソリューションおよびアプリとの Campaign アウトバウンド統合は OAuth サーバー間の資格情報に依存するようになりました。[詳細情報](release-notes-2024.md#change-8-7-1)

### 一般的な改善点 {#improvements-8-6-3}

* アプリケーション間のすべての通信のセキュリティを強化するために、外部 API 呼び出しで mTLS がサポートされるようになりました。

### 修正点 {#fixes-8-6-3}

このリリースでは、次の問題が修正されています。

NEO-79328、NEO-78843、NEO-77795、NEO-77014、NEO-76958、NEO-76097、NEO-75898、NEO-72504、NEO-70263、NEO-67620、NEO-63197、NEO-58596、NEO-56832。

<!--
https://jira.corp.adobe.com/issues/?filter=585288&jql=fixVersion%20%3D%208.6.3%20AND%20type%20not%20in%20(epic%2C%20test%2C%20sub-task%2C%20Roadmap)%20AND%20resolution%20!%3D%20unresolved%20AND%20%22Fixed%20in%20Build%22%20is%20not%20EMPTY%20and%20type%20in%20(%22customer%20request%22)
-->


## 2024年5月の更新 {#may-updates}

次の変更は 5月にリリースされ、Campaign v8 ユーザーが使用できるようになりました。

* **新しいセキュリティ強化アドオン**：ネットワーク接続をより安全にし、リソースのセキュリティを強化するために、Adobe Campaign では、セキュア CMK 統合とセキュア VPN トンネリングという 2 つの機能を含む新しいセキュリティ強化アドオンを提供しています。[詳細情報](../config/enhanced-security.md)

## リリース 8.6.2 {#release-8-6-2}

_2024年2月23日（PT）_

### 修正点 {#fixes-8-6-2}

このリリースでは次の問題が修正されています。

* ミッドソーシングインスタンスで発生するパフォーマンスの問題を修正しました（NEO-72595）。

## リリース 8.6.1 {#release-8-6-1}

_2024年2月14日（PT）_

### 新機能 {#new-8-6-1}

* このリリース以降、中央の Adobe Experience Cloud 環境を通じて、新しい **Campaign web ユーザーインターフェイス**&#x200B;にアクセスできるようになります。Experience Cloud は、アドビのデジタルマーケティングアプリケーション、製品、サービスの統合ファミリーです。直感的なインターフェイスから、クラウドアプリケーション、製品機能、サービスにすばやくアクセスできます。Adobe Experience Cloud に接続し、Adobe Campaign web インターフェイスにアクセスする方法については、[このページ](campaign-ui.md#ac-web-ui)を参照してください。

  >[!AVAILABILITY]
  >
  >Campaign web ユーザーインターフェイスは、Adobe ID を使用して Adobe Campaign に接続しているユーザーのみが使用できます。詳しくは、[Adobe Identity Management System（IMS）](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"}を参照してください。
  >

* Adobe Campaign v8 は、**Adobe Experience Manager as a Cloud Service** と統合され、オーサリングは Adobe Campaign web ユーザーインターフェイス経由でのみ利用可能になります。[詳細情報](../connect/ac-aem.md)

* これで、Adobe Experience Cloud との統合パッケージが Adobe Campaign インスタンスにインストールされている場合でも、**Adobe Experience Manager Assets ライブラリ**&#x200B;を Experience Cloud Assets と共に使用できます。[詳細情報](../connect/ac-aem.md#assets-library)

### 一般的な改善点 {#improvements-8-6-1}

* Campaign v8.6 では、**メール配信トラッキング指標**&#x200B;のスループットが向上しました。最適化されたプロセスにより、取り込みのトラッキングと計算時間が短縮され、配信の主要な指標をより迅速に確認できるようになります。


### 配信品質のアップデート {#deliverability-8-6-1}

* 2024年2月までに、Google または Yahoo! を通じて 5,000 件を超えるメールメッセージを送信する会社は、DMARC（Domain-based Message Authentication Reporting and Conformance）と呼ばれる認証テクノロジーの使用を開始する必要があります。Adobe Campaign で使用しているすべてのサブドメインに対して DMARC レコードが設定されていることを確認してください。[詳細情報](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/technotes/implement-dmarc.html?lang=ja){target="_blank"}

* 2024年6月1日（PT）以降、Google と Yahoo! は、送信者に対して、ワンクリックでの List-Unsubscribe への準拠を義務付ける予定です。Adobe Campaign では、このオプションをサポートするようになりました。[詳細情報](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/campaign/acc-technical-recommendations.html?lang=ja#list-unsubscribe){target="_blank"}


### 修正点 {#fixes-8-6-1}

このリリースでは、次の問題が修正されています。

NEO-67892、NEO-67235、NEO-66797、NEO-66462、NEO-65091、NEO-65036、NEO-64984、NEO-64680、NEO-63973、NEO-63879、NEO-63815、NEO-63657、NEO-63539、NEO-63387、NEO-63294、NEO-63174、NEO-62964、NEO-62750、NEO-62686、NEO-62455、NEO-62406、NEO-61580、NEO-61199、NEO-60786、NEO-59544、NEO-59198、NEO-59059、NEO-58637、NEO-55197、NEO-52542、NEO-50488、NEO-47789



## リリース 8.5.3 {#release-8-5-3}

_2024年5月28日（PT）_

### OAuth サーバー間の資格情報への移行 {#change-8-5-3}

このバージョン以降、サービスアカウント（JWT）資格情報はアドビによって廃止され、アドビのソリューションおよびアプリとの Campaign アウトバウンド統合は OAuth サーバー間の資格情報に依存するようになりました。[詳細情報](#change-8-7-1)

### 修正点 {#fixes-8-5-3}

このリリースでは、次の問題が修正されています。

NEO-70263、NEO-64984、NEO-63657、NEO-63387、NEO-62964、NEO-62750、NEO-62686、NEO-59544、NEO-52542