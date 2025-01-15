---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: d4b172bc6b874d542dc9f2725e3bc35679fc7635
workflow-type: tm+mt
source-wordcount: '258'
ht-degree: 28%

---

# 最新リリース {#latest-release}

このページには、Campaign v8（コンソール）最新リリースの新機能、改善点およびバグ修正が記載されています。Campaign のリリース、バージョン、アップグレードについて詳しくは、[このページ](upgrades.md)を参照してください。

## リリース 8.6.4 {#release-8-6-4}

_2025 年 1 月 15 日_


### 一般的な改善点 {#improvements-8-6-4}

* [ エンタープライズ（FFDA）デプロイメント ](../../v8/architecture/enterprise-deployment.md) のコンテキストで、配信の分析中に Campaign アプリケーションの安定性が向上しました。
* このリリースには、キー管理、ステージング、データレプリケーションなど、FFDA アーキテクチャメカニズムの改善および強化が含まれています。
* [ エンタープライズ（FFDA）デプロイメント ](../../v8/architecture/enterprise-deployment.md) に新しいテクニカルワークフローが導入されました。 これらのワークフローは、対応するテーブルで並列レプリケーションリクエストを一元化することで、配信および関連データをレプリケートします。 これらのワークフローは、`Replicate nms` から開始します。
* 新しい **ワークフローを永続的に実行するためのウォッチドッグスーパーバイザーを有効にする** オプションがワークフローのプロパティで使用できるようになりました。 このオプションを有効にすると、エラーが発生した後、ワークフローが自動的に再開されます。 デフォルトでは、再起動は 30 秒ごとに行われます。 この間隔を調整するには、新しい `XtkWorkflow_WatchdogTimerTimeout` オプションを作成し、新しい遅延を指定する整数データタイプを設定します。 このオプションは、テクニカルワークフローでのみ有効にしてください。

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