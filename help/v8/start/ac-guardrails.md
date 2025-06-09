---
title: Campaign v8 ガードレール
description: Campaign v8 ガードレール
feature: Configuration
role: User
level: Beginner
exl-id: 50c254ba-cc33-49b2-b7d5-12aa69883c07
source-git-commit: f577ee6d303bab9bb07350b60cf0fa6fc9d3a163
workflow-type: tm+mt
source-wordcount: '250'
ht-degree: 93%

---

# 製品ガードレール{#guardrails}

使用権限、製品の制限事項、パフォーマンスガードレールの一覧については、[Adobe Campaign Managed Cloud Services製品説明ページ ](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target="_blank"} を参照してください。

次に、[!DNL Adobe Campaign] を使用する際の追加のガードレールと制限を示します。

ガードレールと制限は、このリリースの製品ではサポートされていない、またはこのリリースの製品とは正しく相互運用できない機能、アーキテクチャ、プロセスを特定します。これらの制限事項は慎重に確認してください。

* Adobe Campaign v8 は、オンプレミスやハイブリッドのデプロイメントでは使用できません。Adobe Managed Cloud Service としてのみリリースされています。
* 既存のお客様は、Adobe Campaign v8 への自動移行は利用できません
* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、双方向のデータレプリケーションは行われません。レプリケーションは、Campaign ローカルデータベースから Cloud データベースにのみ発生します。
* [この節](v7-to-v8.md#gs-unavailable-features)で示す機能は、現在の Campaign v8 のビルドでは使用できません。
* 使用できない機能や削除された機能の中には、ユーザーインターフェイスに表示されたままになっているものもあります。
* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、購読（オプトイン）および購読解除（オプトアウト）のメカニズムと、モバイル登録は非同期プロセスです。リクエストは、特定のテクニカルワークフローを通じて 1 時間ごとに処理されます。[詳細情報](../architecture/replication.md#tech-wf)
* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、エンドユーザーが重複を手動で処理する必要があります。[詳細情報](../architecture/keys.md)
* Adobe Campaign v8 は、API および web アプリケーションでの拡張スループットをサポートしていません。特定のニーズがある場合は、アドビに問い合わせてガイダンスを求めてください。
* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、Adobe Campaign のキャンペーン最適化モジュールは、スケジュールされた配信を頻度タイポロジルールで考慮しません。詳しくは、[このページ](../../automation/campaign-opt/pressure-rules.md)を参照してください。