---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 66e4b59915eae595b28076622f7bcfb5b5a0ffa4
workflow-type: tm+mt
source-wordcount: '597'
ht-degree: 17%

---

# 最新リリース {#latest-release}

このページでは、キャンペーン v8 (コンソール) **最新リリース** に付属する新機能、改善点、修正点の一覧を示します。 Campaign のリリース、バージョン、アップグレードについて詳しくは、[ このページ ](upgrades.md) を参照してください。 その他のリリースは、このドキュメントの以前のリリースの節に記載されています。

>[!BEGINSHADEBOX]

**このページ内**

* [リリース 8.7.4](#release-8-7-4)
* [リリース 8.6.4](#release-8-6-4)

>[!ENDSHADEBOX]

## リリース 8.7.4 {#release-8-7-4}

_2025年4月10日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行するCampaign Standard ユーザーとして、この移行について詳しくは [Campaign v8 web ユーザーインターフェイスのドキュメント ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"} を参照してください。

### 新機能 {#features-8-7-4}

* **SMS REST API のサポート** - SMS チャネルトランザクションメッセージ REST API が使用できるようになりました。 E メールと携帯電話の両方がペイロードにある場合は、「wishedChannel」フィールドを使用してチャネルを指定できます。 指定しない場合、wishedChannel が SMS を明示的にリクエストしない限り、メールがデフォルトで使用されます。

* **多言語配信** - Campaign web ユーザーインターフェイスの開始 4 月リリースでは、様々な言語で複数のメール配信を送信し、関連する動的レポートにアクセスできるようになります。 この機能は、4 月末にAdobe Campaign web ユーザーインターフェイスでのみ使用できるようになり、Campaign v8.7.4 へのサーバーの更新が必要になります。

### 修正点 {#fixes-8-7-4}

このリリースでは、次の問題が修正されています。

NEO-80245、NEO-83559

## リリース 8.6.4 {#release-8-6-4}

_2025 年 1 月 15 日_

### 一般的な改善点 {#improvements-8-6-4}

* [ エンタープライズ（FFDA）デプロイメント ](../../v8/architecture/enterprise-deployment.md) のコンテキストで、配信の分析中に Campaign アプリケーションの安定性が向上しました。
* このリリースには、鍵管理、ステージング、およびデータ複製を含む、改善および強化された FFDA アーキテクチャー・メカニズムが付属しています。
* [大規模法人(FFDA)デプロイメント](../../v8/architecture/enterprise-deployment.md)では新規テクニカルワークフローが導入されています。これらのワークフローは、対応するテーブルで並列レプリケーションリクエストを一元化することで、配信および関連データをレプリケートします。 これらのワークフローは、`Replicate nms` から開始します。 [詳細情報](../architecture/replication.md)
* 新しい **ワークフローを永続的に実行するためのウォッチドッグスーパーバイザーを有効にする** オプションがワークフローのプロパティで使用できるようになりました。 このオプションを有効にすると、エラーが発生した後、ワークフローが自動的に再開されます。 ワークフローがまだエラーの場合、デフォルトでは、再起動は 30 秒ごとに行われます。 この間隔を調整するには、新しい `XtkWorkflow_WatchdogRestartTimerTimeout` オプションを作成し、新しい遅延を指定する整数データタイプを設定します。 このオプションは、テクニカルワークフローでのみ有効にしてください。 [詳細情報](../../automation/workflow/workflow-properties.md#execution)

### セキュリティの強化 {#security-8-6-4}

**[!UICONTROL Adobe Experience Cloud]** 外部アカウントを通じてアドビソリューションおよびアプリとの接続が更新され、セキュリティが強化されました。

<!--
### Connection to Campaign {#ims-8-6-4}

**(Limited availability)** For a restricted list of customers, Campaign v8.6.4 can allow native authentication mode instead of Adobe Identity Management System (IMS). Note that if you are using Campaign native authentication, you cannot access to [Campaign Web User Interface](../start/campaign-ui.md#campaign-web-user-interface).-->

### 互換性のアップデート {#comp-8-6-4}

次のFDAコネクタが追加されました。 この[ページ](compatibility-matrix.md#FederatedDataAccessFDA)を参照してください。

* Databricks は、Adobe Campaign Federated Data Access (FDA) を持つ外部データベースとしてサポートされるようになりました。

* 新しいAmazon Redshift FDA ODBC コネクタが利用できるようになりました。 接続性の向上、メンテナンスの容易さ、互換性の向上を実現します。 この新しいバージョンでは、次の点が改善されています。

   * 新しいコネクタは、最新の FDA コネクタに準拠する ODBC インターフェイスに基づいています。 これにより、長期的なサポートが確保されます。
   * また、s3 バケットを使用した新しいデータ読み込みメカニズムを導入し、パフォーマンスを大幅に向上させます。

  従来のコネクタは、引き続き使用できます。 新しいバージョンを試す場合は、Adobeの担当者にお問い合わせください。

### 修正点 {#fixes-8-6-4}

このリリースでは、次の問題が修正されています。

NEO-48232、NEO-67814、NEO-71388、NEO-74855、NEO-75643、NEO-75962、NEO-76132、NEO-76958、NEO-76986、NEO-77162、NEO-77452、NEO-78946、NEO-79373、NEO-80243、NEO-80314、NEO-81127、NEO-81209、NEO-81223、NEO-81 287、NEO-81290、NEO-81312、NEO-81512、NEO-81520、NEO-81566、NEO-81704、NEO-81908、NEO-82195、NEO-82591、NEO-82592、NEO-82640、NEO-82665、NEO-82781、NEO-82920、NEO-83081、NEO-83096、NEO-83137、NEO-83143。

