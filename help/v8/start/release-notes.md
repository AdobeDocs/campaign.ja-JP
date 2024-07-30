---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 4e52e596d4eb2a8e1a1799fcd7104dcd894b6c2d
workflow-type: tm+mt
source-wordcount: '931'
ht-degree: 97%

---

# 最新リリース {#latest-release}

Adobe Campaign は定期的にアップデートされています。この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。アドビでは、すべてのお客様に最新バージョンにアップグレードすることを強くお勧めします。このページには、Campaign v8（コンソール）最新リリースの新機能、改善点およびバグ修正が記載されています。Campaign のバージョンと推奨事項について詳しくは、[このページ](upgrades.md)を参照してください。

Managed Cloud Services ユーザーの場合は、新しいバージョンが出るたびにアドビがインスタンスをアップグレードします。アドビがお客様にご連絡し、環境をアップグレードします。Campaign クライアントコンソールは、Campaign サーバーと&#x200B;**同じバージョンにアップグレードする必要があります**。クライアントコンソールのアップグレード方法について詳しくは、[このページ](../start/connect.md#upgrade-ac-console)を参照してください。

また、[互換性マトリックス](compatibility-matrix.md)にリストされているシステムのサポートされている最新バージョンを使用していることも確認してください。

## リリース 8.6.3 {#release-8-6-3}

_2024年7月30日（PT）_

### 新機能 {#new-8-6-3}

* **リッチプッシュ通知** - リッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、リッチプッシュ通知用のテンプレートセットが iOS および Android アプリで利用できるようになりました。[詳細情報](../send/rich-push-android.md)

* このバージョン以降、サービスアカウント（JWT）資格情報はアドビによって廃止され、アドビのソリューションおよびアプリとの Campaign アウトバウンド統合は OAuth サーバー間の資格情報に依存するようになりました。[詳細情報](release-notes.md#change-8-7-1)

### 一般的な改善点 {#improvements-8-6-3}

* アプリケーション間のすべての通信のセキュリティを強化するために、外部 API 呼び出しで mTLS がサポートされるようになりました。

### 修正点 {#fixes-8-6-3}

このリリースでは、次の問題が修正されています。

NEO-79328、NEO-78843、NEO-77795、NEO-77014、NEO-76958、NEO-76097、NEO-75898、NEO-72504、NEO-70263、NEO-67620、NEO-63197、NEO-58596、NEO-56832。

<!--
https://jira.corp.adobe.com/issues/?filter=585288&jql=fixVersion%20%3D%208.6.3%20AND%20type%20not%20in%20(epic%2C%20test%2C%20sub-task%2C%20Roadmap)%20AND%20resolution%20!%3D%20unresolved%20AND%20%22Fixed%20in%20Build%22%20is%20not%20EMPTY%20and%20type%20in%20(%22customer%20request%22)
-->


## リリース 8.5.3 {#release-8-5-3}

_2024年5月28日（PT）_

### OAuth サーバー間の資格情報への移行 {#change-8-5-3}

このバージョン以降、サービスアカウント（JWT）資格情報はアドビによって廃止され、アドビのソリューションおよびアプリとの Campaign アウトバウンド統合は OAuth サーバー間の資格情報に依存するようになりました。[詳細情報](#change-8-7-1)

### 修正点 {#fixes-8-5-3}

このリリースでは、次の問題が修正されています。

NEO-70263、NEO-64984、NEO-63657、NEO-63387、NEO-62964、NEO-62750、NEO-62686、NEO-59544、NEO-52542


## 5月のアップデート {#may-updates}

次の変更は 5月にリリースされ、Campaign v8 ユーザーが使用できるようになりました。

* **新しいセキュリティ強化アドオン**：ネットワーク接続をより安全にし、リソースのセキュリティを強化するために、Adobe Campaign では、セキュア CMK 統合とセキュア VPN トンネリングという 2 つの機能を含む新しいセキュリティ強化アドオンを提供しています。[詳細情報](../config/enhanced-security.md)


## リリース 8.7.1 {#release-8-7-1}

_2024年5月2日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/release-notes/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#new-8-7-1}

* **リッチプッシュ通知テンプレート** - Android を介してリッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。[詳細情報](../send/rich-push-ios.md)

* **ブランディング** - Campaign Standard に移行したユーザーとして、技術管理者が 1 つまたは複数のブランドを定義して、ブランドの ID に影響を与えるパラメーターを一元化できるようになりました。ブランドのロゴ、ランディングページのアクセス URL のドメイン、メッセージトラッキングの設定などが含まれます。これらのブランドを作成して、メッセージやランディングページにリンクできます。こうした設定はテンプレートで管理されます。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/branding/branding-gs.html?lang=ja){target="_blank"}

* **Rest API** - Campaign Standard に移行したユーザーは、Rest API を使用して Adobe Campaign との統合を作成し、Adobe Campaign と使用するテクノロジーのパネルを連携させて独自のエコシステムを構築できます。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/apis/get-started-apis.html?lang=ja){target="_blank"}

* **動的レポート** - Campaign Standard に移行したユーザーは、完全にカスタマイズ可能なリアルタイムのレポートを提供する、動的レポートにアクセスして、マーケティングアクティビティの影響を測定できます。プロファイルデータへのアクセスが追加され、開封数やクリック数などの機能的なメールキャンペーンデータに加えて、性別、市区町村、年齢などのプロファイルディメンション別のデモグラフィック分析を可能にします。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/reporting/get-started-reporting.html?lang=ja){target="_blank"}

### 互換性のアップデート {#comp-8-7-1}

* Databricks が、Adobe Campaign Federated Data Access（FDA）の外部データベースとしてサポートされるようになりました。詳しくは、[このページ](compatibility-matrix.md#FederatedDataAccessFDA)を参照してください。

### OAuth サーバー間の資格情報への移行 {#change-8-7-1}

このバージョン以降、サービスアカウント（JWT）資格情報はアドビによって廃止され、アドビのソリューションおよびアプリとの Campaign アウトバウンド統合は OAuth サーバー間の資格情報に依存するようになりました。アドビでは、Campaign と Analytics 統合や Experience Cloud トリガー統合などのアウトバウンド統合に対して、JWT から OAuth への移行を実行します。

Campaign とのインバウンド統合を実装している場合は、[このドキュメント](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/migration/){target="_blank"}の詳細な説明に従ってテクニカルアカウントを移行する必要があります。既存のサービスアカウント（JWT）資格情報は、**2025年1月27日（PT）**&#x200B;まで引き続き機能します。

### 一般的な改善点 {#improvements-8-7-1}

* いくつかのスキーマが 32 ビットから 64 ビットに変更されました。これは、Campaign Standard から移行するお客様にのみ該当します。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/technotes/64-bit-tables.html?lang=ja){target="_blank"}

* Campaign テーブルでは、`lastModified` および `created` の属性がサーバーの日時によってデフォルトで入力されるようになりました。`createdBy-id` 属性値には、デフォルトで現在のログイン ID が入力されるようになりました。API 呼び出しでユーザーが指定した値は無視されます。<!--This configuration can be changed in the Campaign server configuration file. As a Managed Cloud Services customer, you must reach out to Adobe to change this default configuration.-->

* アプリケーション間のすべての通信のセキュリティを強化するために、外部 API 呼び出しで mTLS がサポートされるようになりました。

### 修正点 {#fixes-8-7-1}

このリリースでは、次の問題が修正されています。

NEO-72648、NEO-71534、NEO-71473、NEO-70263、NEO-70195、NEO-69651、NEO-68704、NEO-68192、NEO-67814、NEO-67702、NEO-67620、NEO-66022、NEO-65774、NEO-65633、NEO-64199、NEO-63706、NEO-63705、NEO-63287、NEO-63197、NEO-62575、NEO-60250、NEO-60192、NEO-58596、NEO-58314、NEO-58004、NEO-40054
