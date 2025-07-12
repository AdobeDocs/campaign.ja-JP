---
title: Campaign v8（コンソール）2025 リリースノート
description: Campaign v8 2025 リリースで記載される機能および改善点のリスト
feature: Release Notes
exl-id: 3f91d83e-594e-49ee-a898-606e3de00bf3
source-git-commit: b52308bcbe68a7c382918fe28f8166e3bfcb6cde
workflow-type: tm+mt
source-wordcount: '936'
ht-degree: 96%

---

# 2025 リリースノート {#2025-rn}

このページには、**Campaign v8 2025 リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。最新リリースについては、[ このページ ](release-notes.md) を参照してください。

新規の実装または既存の環境へのアップグレードについては、[ 最新リリース ](release-notes.md) をインストールします。

>[!BEGINSHADEBOX]

**このページの内容**

* [リリース 8.6.5](#release-8-6-5)
* [リリース 8.6.4](#release-8-6-4)
* [リリース 8.7.4](#release-8-7-4)
* [リリース 8.7.3](#release-8-7-3)


>[!ENDSHADEBOX]

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

* **トランザクションメッセージの動的レポート** - 動的レポートのユーザーインターフェイスでトランザクションメッセージを監視できるようになりました。これらのレポートにより、マーケターはトランザクションメッセージのすべてのレポート指標とディメンション、テンプレート経由で送信された配信の分類をリアルタイムで確認できます。[詳細情報](https://experienceleague.adobe.com/docs/campaign-web/v8/reports/dynamic-reporting/get-started-reporting.html?lang=ja){target="_blank"}

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

