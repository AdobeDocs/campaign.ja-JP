---
title: Campaign v8 ガードレール
description: Campaign v8 ガードレール
feature: Configuration
role: User
level: Beginner
exl-id: 50c254ba-cc33-49b2-b7d5-12aa69883c07
TQID: 'https://experienceleague.adobe.com/4FF81xd4CiMT3fusDRU32n0-ap16O1RVUEhGIbz33Os'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
subfeature_v2:
  - id: a14877cc-63b1-41d9-bf0b-5f97cadd0417
    internal-label: Configuration guidelines
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '265'
ht-degree: 93%
---
# 製品ガードレール{#guardrails}

使用権限、製品の制限、およびパフォーマンスガードレールは、[Adobe Campaign Managed Cloud Services製品の説明ページ &#x200B;](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target="_blank"}に記載されています。

次に、[!DNL Adobe Campaign] を使用する際の追加のガードレールと制限を示します。

ガードレールと制限は、このリリースの製品ではサポートされていない、またはこのリリースの製品とは正しく相互運用できない機能、アーキテクチャ、プロセスを特定します。 これらの制限事項は慎重に確認してください。

* Adobe Campaign v8 は、オンプレミスやハイブリッドのデプロイメントでは使用できません。Adobe Managed Cloud Service としてのみリリースされています。
* 既存のお客様は、Adobe Campaign v8 への自動移行は利用できません
* [エンタープライズ（FFDA）デプロイメント](../../v8/architecture/enterprise-deployment.md)のコンテキストでは、双方向のデータレプリケーションは行われません。レプリケーションは、Campaign ローカルデータベースから Cloud データベースにのみ発生します。
* [この節](v7-to-v8.md#gs-unavailable-features)で示す機能は、現在の Campaign v8 のビルドでは使用できません。
* 使用できない機能や削除された機能の中には、ユーザーインターフェイスに表示されたままになっているものもあります。
* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、購読（オプトイン）および購読解除（オプトアウト）のメカニズムと、モバイル登録は非同期プロセスです。 リクエストは、特定のテクニカルワークフローを通じて 1 時間ごとに処理されます。 [詳細情報](../architecture/replication.md#tech-wf)
* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、エンドユーザーが重複を手動で処理する必要があります。 [詳細情報](../architecture/keys.md)
* Adobe Campaign v8 は、API および web アプリケーションでの拡張スループットをサポートしていません。特定のニーズがある場合は、アドビに問い合わせてガイダンスを求めてください。
* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、Adobe Campaign のキャンペーン最適化モジュールは、スケジュールされた配信を頻度タイポロジルールで考慮しません。 詳しくは、[このページ](../../automation/campaign-opt/pressure-rules.md)を参照してください。