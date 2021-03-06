---
title: Campaign v8 ガードレール
description: Campaign v8 ガードレール
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 50c254ba-cc33-49b2-b7d5-12aa69883c07
source-git-commit: 0a55d947a7646aab64ab2f9d0d09a6f930db576e
workflow-type: tm+mt
source-wordcount: '249'
ht-degree: 97%

---

# 製品ガードレール{#guardrails}

エンタイトルメント、製品の制限、パフォーマンスガードレールの一覧については、 [Adobe Campaign Managed Cloud Services 製品説明ページ](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target=&quot;_blank&quot;}を参照してください。

次に、[!DNL Adobe Campaign] を使用する際の追加のガードレールと制限を示します。

ガードレールと制限は、このリリースの製品ではサポートされていない、またはこのリリースの製品とは正しく相互運用できない機能、アーキテクチャ、プロセスを特定します。これらの制限事項は慎重に確認してください。

* Adobe Campaign v8 は、オンプレミスやハイブリッドのデプロイメントでは使用できません。Adobe Managed Cloud Service としてのみリリースされています。
* 既存のお客様は、既存の Adobe Campaign 環境から Adobe Campaign v8 に移行することはできません。
* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、双方向のデータレプリケーションは行われません。レプリケーションは、Campaign ローカルデータベースから Cloud データベースにのみ発生します。
* [この節](v7-to-v8.md#gs-unavailable-features)で示す機能は、現在の Campaign v8 のビルドでは使用できません。
* 使用できない機能や削除された機能の中には、ユーザーインターフェイスに表示されたままになっているものもあります。
* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、購読（オプトイン）および購読解除（オプトアウト）のメカニズムと、モバイル登録は非同期プロセスです。リクエストは、特定のテクニカルワークフローを通じて 1 時間ごとに処理されます。[詳細情報](../architecture/replication.md#tech-wf)
* 重複は、エンドユーザーが手動で処理する必要があります。[詳細情報](../architecture/keys.md)
* Adobe Campaign v8 は、API および web アプリケーションでの拡張スループットをサポートしていません。特定のニーズがある場合は、アドビに問い合わせてガイダンスを求めてください。
* Adobe Campaign のキャンペーン最適化モジュールでは、頻度タイポロジルールでスケジュールされた配信は考慮されません。詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-optimization/pressure-rules.html)を参照してください。