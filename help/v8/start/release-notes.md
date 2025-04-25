---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 5ece3ca4ebf9f3973d9cbd1a00ea57b29c1f2e93
workflow-type: tm+mt
source-wordcount: '786'
ht-degree: 33%

---

# 最新リリース {#latest-release}

このページには、Campaign v8 （コンソール） **最新リリース** の新機能、改善点およびバグ修正が記載されています。 Campaign のリリース、バージョン、アップグレードについて詳しくは、[ このページ ](upgrades.md) を参照してください。 その他のリリースは、このドキュメントの以前のリリースの節に記載されています。

>[!BEGINSHADEBOX]

**このページ内**

* [リリース 8.6.5](#release-8-6-4)
* [リリース 8.7.4](#release-8-7-4)
* [リリース 8.6.4](#release-8-6-4)

>[!ENDSHADEBOX]

## リリース 8.6.5 {#release-8-6-5}

_2025年4月25日（PT）_

>[!AVAILABILITY]
>
>このリリースは **限定提供** （LA）です。

### 新機能 {#features-8-6-5}

**新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバモードの SMPP 接続と永続的な SMPP 接続が有効になり、Adobe Campaign Standard から移行する環境との互換性が向上しました。すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。既存の実装も引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。[詳細情報](../send/sms/sms.md)

### 一般的な改善点 {#improvements-8-6-5}

* 配信の配達確認の送信やデータベースのクリーンアップなど、エンタープライズ（FFDA）デプロイメントのコンテキストにおけるアプリケーションのグローバルパフォーマンスが向上しました。

* アプリケーション間のすべての通信のセキュリティを強化するために、外部 API 呼び出しで mTLS がサポートされるようになりました。

* メール転送エージェント（MTA）- 孤立した MTA の子が&#x200B;**[!UICONTROL 開始を保留中]**&#x200B;ステータスで停止する問題を修正しました。

### 修正点 {#fixes-8-6-5}

また、このリリースでは、次の問題も修正されています。

NEO-67620、NEO-71534、NEO-80245、NEO-81105、NEO-81758、NEO-81908、NEO-82351、NEO-82742、NEO-83044、NEO-83138、NEO-83350、NEO-83729、NEO-83793、NEO-83809、NEO-84038、NEO-84108、NEO-85269、NEO-86121、NEO-86556、NEO-86739

## リリース 8.7.4 {#release-8-7-4}

_2025年4月10日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行するCampaign Standard ユーザーとして、この移行について詳しくは [Campaign v8 web ユーザーインターフェイスのドキュメント ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"} を参照してください。

### 新機能 {#features-8-7-4}

* **SMS REST API のサポート** - トランザクションメッセージ REST API を SMS チャネルで使用できるようになりました。 ペイロードにメールと携帯電話の両方が存在する場合は、「wishedChannel」フィールドを使用してチャネルを指定できます。 指定しない場合、wishedChannel が SMS を明示的にリクエストしない限り、メールがデフォルトで使用されます。

* **多言語配信** - Campaign web ユーザーインターフェイスの開始 4 月リリースでは、様々な言語で複数のメール配信を送信し、関連する動的レポートにアクセスできるようになります。 この機能は、4 月末にAdobe Campaign web ユーザーインターフェイスでのみ使用できるようになり、Campaign v8.7.4 へのサーバーの更新が必要になります。

### 修正点 {#fixes-8-7-4}

このリリースでは、次の問題が修正されています。

NEO-80245、NEO-83559

## リリース 8.6.4 {#release-8-6-4}

_2025 年 1 月 15 日_

### 一般的な改善点 {#improvements-8-6-4}

* [ エンタープライズ（FFDA）デプロイメント ](../../v8/architecture/enterprise-deployment.md) のコンテキストで、配信の分析中に Campaign アプリケーションの安定性が向上しました。
* このリリースには、キー管理、ステージング、データレプリケーションなど、FFDA アーキテクチャメカニズムの改善および強化が含まれています。
* [ エンタープライズ（FFDA）デプロイメント ](../../v8/architecture/enterprise-deployment.md) に新しいテクニカルワークフローが導入されました。 これらのワークフローは、対応するテーブルで並列レプリケーションリクエストを一元化することで、配信および関連データをレプリケートします。 これらのワークフローは、`Replicate nms` から開始します。 [詳細情報](../architecture/replication.md)
* 新しい **ワークフローを永続的に実行するためのウォッチドッグスーパーバイザーを有効にする** オプションがワークフローのプロパティで使用できるようになりました。 このオプションを有効にすると、エラーが発生した後、ワークフローが自動的に再開されます。 ワークフローがまだエラーの場合、デフォルトでは、再起動は 30 秒ごとに行われます。 この間隔を調整するには、新しい `XtkWorkflow_WatchdogRestartTimerTimeout` オプションを作成し、新しい遅延を指定する整数データタイプを設定します。 このオプションは、テクニカルワークフローでのみ有効にしてください。 [詳細情報](../../automation/workflow/workflow-properties.md#execution)

### セキュリティの強化 {#security-8-6-4}

**[!UICONTROL Adobe Experience Cloud]** 外部アカウントを通じてアドビソリューションおよびアプリとの接続が更新され、セキュリティが強化されました。

<!--
### Connection to Campaign {#ims-8-6-4}

**(Limited availability)** For a restricted list of customers, Campaign v8.6.4 can allow native authentication mode instead of Adobe Identity Management System (IMS). Note that if you are using Campaign native authentication, you cannot access to [Campaign Web User Interface](../start/campaign-ui.md#campaign-web-user-interface).-->

### 互換性のアップデート {#comp-8-6-4}

次の FDA コネクタが追加されました。 この[ページ](compatibility-matrix.md#FederatedDataAccessFDA)を参照してください。

* Databricks が、Adobe Campaign Federated Data Access （FDA）の外部データベースとしてサポートされるようになりました。

* 新しいAmazon Redshift FDA ODBC コネクタが利用できるようになりました。 接続性の向上、メンテナンスの容易さ、互換性の向上を実現します。 この新しいバージョンでは、次の点が改善されています。

   * 新しいコネクタは、最新の FDA コネクタに準拠する ODBC インターフェイスに基づいています。 これにより、長期的なサポートが確保されます。
   * また、s3 バケットを使用した新しいデータ読み込みメカニズムを導入し、パフォーマンスを大幅に向上させます。

  従来のコネクタは、引き続き使用できます。 新しいバージョンを試す場合は、Adobeの担当者にお問い合わせください。

### 修正点 {#fixes-8-6-4}

このリリースでは、次の問題が修正されています。

NEO-48232、NEO-67814、NEO-71388、NEO-74855、NEO-75643、NEO-75962、NEO-76132、NEO-76958、NEO-76986 77162、NEO-77452 78946、NEO-79373、NEO-80243、NEO-80314、NEO-81127、NEO-81209、NEO-81223、NEO-81287、NEO-81290 81312 81512 81520 81566 81704 81908 82195 82591 82592 82640 82665 82781 82920 83081 83096 83137 83143、NEO-NEO-3、NEO-3、NEO-6、NEO-5 NEO-、NEO-、NEO-k、NEO-k、NEO-k、NEO-k、NEO-k、NEO-k、NEO-k、NEO-k、NEO-k

