---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: b83222774b026348ae70f41a8193f88856af99a9
workflow-type: tm+mt
source-wordcount: '515'
ht-degree: 55%

---

# 最新リリース {#latest-release}

このページには、Campaign v8 （コンソール） **最新リリース** の新機能、改善点およびバグ修正が記載されています。 Campaign のリリース、バージョン、アップグレードについて詳しくは、[ このページ ](upgrades.md) を参照してください。 その他のリリースは、このドキュメントの以前のリリースの節に記載されています。

## リリース 8.6.4 {#release-8-6-4}

_2025 年 1 月 15 日_

### 一般的な改善点 {#improvements-8-6-4}

* [ エンタープライズ（FFDA）デプロイメント ](../../v8/architecture/enterprise-deployment.md) のコンテキストで、配信の分析中に Campaign アプリケーションの安定性が向上しました。
* このリリースには、キー管理、ステージング、データレプリケーションなど、FFDA アーキテクチャメカニズムの改善および強化が含まれています。
* [ エンタープライズ（FFDA）デプロイメント ](../../v8/architecture/enterprise-deployment.md) に新しいテクニカルワークフローが導入されました。 これらのワークフローは、対応するテーブルで並列レプリケーションリクエストを一元化することで、配信および関連データをレプリケートします。 これらのワークフローは、`Replicate nms` から開始します。
* 新しい **ワークフローを永続的に実行するためのウォッチドッグスーパーバイザーを有効にする** オプションがワークフローのプロパティで使用できるようになりました。 このオプションを有効にすると、エラーが発生した後、ワークフローが自動的に再開されます。 ワークフローがまだエラーの場合、デフォルトでは、再起動は 30 秒ごとに行われます。 この間隔を調整するには、新しい `XtkWorkflow_WatchdogTimerTimeout` オプションを作成し、新しい遅延を指定する整数データタイプを設定します。 このオプションは、テクニカルワークフローでのみ有効にしてください。 [詳細情報](../../automation/workflow/workflow-properties.md#execution)

### セキュリティの強化 {#security-8-6-4}

**[!UICONTROL Adobe Experience Cloud]** 外部アカウントを通じたAdobeソリューションおよびアプリとの接続が、セキュリティを強化するために更新されました。

<!--
### Connection to Campaign {#ims-8-6-4}

**(Limited availability)** For a restricted list of customers, Campaign v8.6.4 can allow native authentication mode instead of Adobe Identity Management System (IMS). Note that if you are using Campaign native authentication, you cannot access to [Campaign Web User Interface](../start/campaign-ui.md#campaign-web-user-interface).-->

### 互換性のアップデート {#comp-8-6-4}

Databricks が、Adobe Campaign Federated Data Access（FDA）の外部データベースとしてサポートされるようになりました。詳しくは、[このページ](compatibility-matrix.md#FederatedDataAccessFDA)を参照してください。

### 修正点 {#fixes-8-6-4}

このリリースでは、次の問題が修正されています。

NEO-77452、NEO-81127、NEO-81209、NEO-80243、NEO-80314、NEO-81223、NEO-81287、NEO-81290、NEO-81312、NEO-81512、NEO-81520 81566、NEO-81704、NEO-83096、NEO-83081。

## リリース 8.7.2 {#release-8-7-2}

_2024年9月3日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#new-8-7-2}

* **新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバモードの SMPP 接続と永続的な SMPP 接続が有効になり、Adobe Campaign Standard から移行する環境との互換性が向上しました。すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。既存の実装も引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。[詳細情報](../send/sms/sms.md)

* **リッチプッシュ通知（GA）** - リッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、リッチプッシュ通知用のテンプレートセットが iOS および Android アプリで利用できるようになりました。[詳細情報](../send/rich-push-android.md)

* **ブランディング** - ブランディングオプションは、SMS やダイレクトメールを含むすべてのチャネルで利用できるようになりました。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/branding/branding-gs.html?lang=ja){target="_blank"}

### 修正点 {#fixes-8-7-2}

このリリースでは、次の問題が修正されています。

NEO-48232、NEO-56832、NEO-72504、NEO-74855、NEO-75898、NEO-76097、NEO-76958、NEO-77014、NEO-77795、NEO-78843、NEO-79328。