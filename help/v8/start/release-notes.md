---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
role: User
level: Beginner
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 607ef2ab8f1f1c7400451019e188c70f8c7d6091
workflow-type: tm+mt
source-wordcount: '1178'
ht-degree: 74%

---

# 最新リリース{#latest-release}

Adobe Campaign は定期的にアップデートされています。この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。アドビでは、すべてのお客様に最新バージョンにアップグレードすることを強くお勧めします。

Managed Cloud Services ユーザーの場合は、新しいバージョンが出るたびにアドビがインスタンスをアップグレードします。アドビがお客様にご連絡し、環境をアップグレードします。Campaign クライアントコンソールは、Campaign サーバーと&#x200B;**同じバージョンにアップグレードする必要があります**。クライアントコンソールのアップグレード方法について詳しくは、こちらの[ページ](../start/connect.md#upgrade-ac-console)を参照してください。

また、[互換性マトリックス](compatibility-matrix.md)にリストされているシステムのサポートされている最新バージョンを使用していることも確認してください。

## リリース 8.5.3 {#release-8-5-3}

_2024年5月28日（PT）_

### OAuth サーバー間資格情報への移行 {#change-8-5-3}

* このバージョン以降、サービスアカウント（JWT）資格情報はAdobeーによって非推奨となり、Adobeソリューションやアプリとの Campaign アウトバウンド統合は、OAuth サーバー間資格情報に依存するようになりました。 Adobeは、Campaign と Analytics の統合やExperience Cloudトリガーの統合など、アウトバウンド統合の JWT から OAuth への移行を実行します。

  Campaign とのインバウンド統合を実装している場合は、以下に説明するようにテクニカルアカウントを移行する必要があります。 [このドキュメント](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/migration/){target="_blank"}. 既存のサービスアカウント（JWT）資格情報は、まで引き続き機能します **2025 年 1 月 27 日（Pt）**. さらに、Developer Console では、まで新しいサービスアカウント（JWT）資格情報の作成を引き続きサポートします **2024 年 6 月 3 日（Pt）**. この日付を過ぎると、新しいサービスアカウント （JWT）資格情報を作成したり、プロジェクトに追加したりできなくなります。


### 修正点 {#fixes-8-5-3}

NEO-70263、NEO-64984、NEO-63657、NEO-63387、NEO-62964、NEO-62750、NEO-62686、NEO-59544、NEO-52542

## リリース 8.7.1 {#release-8-7-1}

_2024年5月2日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/release-notes/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#new-8-7-1}

* **リッチプッシュ通知テンプレート** - Android を介してリッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。[詳細情報](../send/rich-push.md)

* **ブランディング** - Campaign Standard に移行したユーザーとして、技術管理者が 1 つまたは複数のブランドを定義して、ブランドの ID に影響を与えるパラメーターを一元化できるようになりました。ブランドのロゴ、ランディングページのアクセス URL のドメイン、メッセージトラッキングの設定などが含まれます。これらのブランドを作成して、メッセージやランディングページにリンクできます。こうした設定はテンプレートで管理されます。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/branding/branding-gs.html?lang=ja){target="_blank"}

* **Rest API** - Campaign Standard に移行したユーザーは、Rest API を使用して Adobe Campaign との統合を作成し、Adobe Campaign と使用するテクノロジーのパネルを連携させて独自のエコシステムを構築できます。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/apis/get-started-apis.html?lang=ja){target="_blank"}

* **動的レポート** - Campaign Standard に移行したユーザーは、完全にカスタマイズ可能なリアルタイムのレポートを提供する、動的レポートにアクセスして、マーケティングアクティビティの影響を測定できます。プロファイルデータへのアクセスが追加され、開封数やクリック数などの機能的なメールキャンペーンデータに加えて、性別、市区町村、年齢などのプロファイルディメンション別のデモグラフィック分析を可能にします。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/reporting/get-started-reporting.html?lang=ja){target="_blank"}

* **新しいセキュリティ強化アドオン**：ネットワーク接続のセキュリティを強化し、リソースのセキュリティを向上させるために、Adobe Campaignでは、新しい強化されたセキュリティアドオンを提供しています。このアドオンには、セキュア CMK 統合とセキュア VPN トンネリングの 2 つの機能が含まれています。 [詳細情報](../config/enhanced-security.md)


### 互換性のアップデート {#comp-8-7-1}

* Databricks が、Adobe Campaign Federated Data Access（FDA）の外部データベースとしてサポートされるようになりました。詳しくは、[このページ](compatibility-matrix.md#FederatedDataAccessFDA)を参照してください。

* このバージョン以降、サービスアカウント（JWT）資格情報はAdobeーによって非推奨となり、Adobeソリューションやアプリとの Campaign アウトバウンド統合は、OAuth サーバー間資格情報に依存するようになりました。 Adobeは、Campaign と Analytics の統合やExperience Cloudトリガーの統合など、アウトバウンド統合の JWT から OAuth への移行を実行します。

  Campaign とのインバウンド統合を実装している場合は、以下に説明するようにテクニカルアカウントを移行する必要があります。 [このドキュメント](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/migration/){target="_blank"}. 既存のサービスアカウント（JWT）資格情報は、まで引き続き機能します **2025 年 1 月 27 日（Pt）**. さらに、Developer Console では、まで新しいサービスアカウント（JWT）資格情報の作成を引き続きサポートします **2024 年 6 月 3 日（Pt）**. この日付を過ぎると、新しいサービスアカウント （JWT）資格情報を作成したり、プロジェクトに追加したりできなくなります。


### 一般的な改善点 {#improvements-8-7-1}

* いくつかのスキーマが 32 ビットから 64 ビットに変更されました。これは、Campaign Standard から移行するお客様にのみ該当します。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/technotes/64-bit-tables.html?lang=ja){target="_blank"}

* Campaign テーブルでは、`lastModified` および `created` の属性がサーバーの日時によってデフォルトで入力されるようになりました。この `createdBy-id` デフォルトで属性値に現在のログイン ID が入力されるようになりました。 API 呼び出しでユーザーが指定した値は無視されます。<!--This configuration can be changed in the Campaign server configuration file. As a Managed Cloud Services customer, you must reach out to Adobe to change this default configuration.-->

### 修正点 {#fixes-8-7-1}

このリリースでは、次の問題が修正されています：
NEO-72648、NEO-71534、NEO-71473、NEO-70263、NEO-70195、NEO-69651、NEO-68704、NEO-68192、NEO-67814、NEO-67702、NEO-67620、NEO-66022、NEO-65774、NEO-65633、NEO-64199、NEO-63706、NEO-63705、NEO-63287、NEO-63197、NEO-62575、NEO-60250、NEO-60192、NEO-58596、NEO-58314、NEO-58004、NEO-40054

## リリース 8.6.2 {#release-8-6-2}

_2024年2月23日（PT）_

### 修正点 {#fixes-8-6-2}

このリリースでは次の問題が修正されています。

* ミッドソーシングインスタンスで発生するパフォーマンスの問題を修正しました（NEO-72595）。

## リリース 8.6.1 {#release-8-6-1}

_2024年2月14日（PT）_

### 新機能 {#new-8-6-1}

* このリリース以降、中央の Adobe Experience Cloud 環境を通じて、新しい **Campaign web ユーザーインターフェイス**&#x200B;にアクセスできるようになります。Experience Cloud は、アドビのデジタルマーケティングアプリケーション、製品、サービスの統合ファミリーです。直感的なインターフェイスから、クラウドアプリケーション、製品機能、サービスにすばやくアクセスできます。Adobe Experience Cloud に接続し、Adobe Campaign web インターフェイスにアクセスする方法については、[このページ](campaign-ui.md#ac-web-ui)を参照してください。


* Adobe Campaign v8 は、**Adobe Experience Manager as a Cloud Service** と統合され、オーサリングは Adobe Campaign web ユーザーインターフェイス経由でのみ利用可能になります。[詳細情報](../connect/ac-aem.md)

* これで、Adobe Experience Cloud との統合パッケージが Adobe Campaign インスタンスにインストールされている場合でも、**Adobe Experience Manager Assets ライブラリ**&#x200B;を Experience Cloud Assets と共に使用できます。[詳細情報](../connect/ac-aem.md#assets-library)

### 一般的な改善点 {#improvements-8-6-1}

* Campaign v8.6 では、**メール配信トラッキング指標**&#x200B;のスループットが向上しました。最適化されたプロセスにより、取り込みのトラッキングと計算時間が短縮され、配信の主要な指標をより迅速に確認できるようになります。


### 配信品質のアップデート {#deliverability-8-6-1}

* 2024年2月までに、Google または Yahoo! を通じて 5,000 件を超えるメールメッセージを送信する会社は、DMARC（Domain-based Message Authentication Reporting and Conformance）と呼ばれる認証テクノロジーの使用を開始する必要があります。Adobe Campaign で使用しているすべてのサブドメインに対して DMARC レコードが設定されていることを確認してください。[詳細情報](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/technotes/implement-dmarc.html?lang=ja){target="_blank"}

* 2024年6月1日（PT）以降、Google と Yahoo! は、送信者に対して、ワンクリックでの List-Unsubscribe への準拠を義務付ける予定です。Adobe Campaign では、このオプションをサポートするようになりました。[詳細情報](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/campaign/acc-technical-recommendations.html?lang=ja#one-click-list-unsubscribe){target="_blank"}


### 修正点 {#fixes-8-6-1}

このリリースでは、次の問題が修正されています：
NEO-67892、NEO-67235、NEO-66797、NEO-66462、NEO-65091、NEO-65036、NEO-64984、NEO-64680、NEO-63973、NEO-63879、NEO-63815、NEO-63657、NEO-63539、NEO-63387、NEO-63294、NEO-63174、NEO-62964、NEO-62750、NEO-62686、NEO-62455、NEO-62406、NEO-61580、NEO-61199、NEO-60786、NEO-59544、NEO-59198、NEO-59059、NEO-58637、NEO-55197、NEO-52542、NEO-50488、NEO-47789