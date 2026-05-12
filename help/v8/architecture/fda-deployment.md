---
title: Campaign FDA デプロイメントの基本を学ぶ
description: Campaign FDA デプロイメントの基本を学ぶ
feature: Architecture, Federated Data Access, Deployment
role: Admin, Developer
level: Beginner
exl-id: b3df0336-f40e-4ac1-b6a4-068b8827dca2
TQID: https://experienceleague.adobe.com/PfXTlEYfwkN9YRDIx44TdtZLjNZJkHqN73sJGxA0c-E
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: a658c786-869b-4194-a780-2594d663adda
subfeature_v2: id: ee3dfd63-9a21-4961-9f24-ea3385284a21
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bdid: ff6a42d2-313e-452e-93a6-792e4fad9ff8
level_v2: id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2: id: e0eb8757-182f-49f3-94a4-1587d16f5094id: e1e0219c-f879-479f-8427-888ed2a6e9c2id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 329
ht-degree: 84%

---

# [!DNL Campaign] FDA デプロイメント{#gs-fda}

Campaign FDA デプロイメント（デフォルト）では、[!DNL Adobe Campaign] v8 は [Federated Data Access](../connect/fda.md) 機能を通じて [!DNL Snowflake] に接続し、データにアクセスできます。Adobe Campaign データの構造を変更することなく、[!DNL Snowflake] データベースに保存された外部データおよび情報にアクセスし、処理することができます。

>[!NOTE]
>
>このデプロイメントモデルでは、[!DNL Snowflake] セカンダリデータベースはリクエストに応じてのみ使用可能です。 [!DNL Snowflake] を使用してデプロイメントを更新するには、アドビトランジションマネージャーにお問い合わせください。
>

## 利点{#fda-benefits}

このデプロイメントモデルには、次のような利点があります。

* **ストレージとパフォーマンス**
履歴データを[!DNL Snowflake]に移動し、依存関係をAdobe Campaign IDの制限に減らすことができます。 また、このアーキテクチャは、PostgreSQL のストレージとパフォーマンスの制限への依存を減らします。 Campaign データベースに保存されるデータ量が少なくなるので、パフォーマンスが向上し、メンテナンスタスクを速く実行できます。

* **データモデル拡張機能とデータ管理**
[!DNL Snowflake]でテーブルを作成し、それらをAdobe Campaignにリンクできます。例えば、アーカイブされたデータを保存期間にわたって使用したり、優れたパフォーマンスを示すセグメンテーションプロセスを実行したりできます。

  また、このアーキテクチャを使用すると、[!DNL Snowflake] でデータ管理ワークフロー機能を使用することができます。 パーソナライゼーションおよび配信の目的で、集計および一時テーブルのみが Campaign に移動されます。


## アーキテクチャ{#fda-archi}

このデプロイメントモデルを使用すると、Adobe Campaign のユーザーは、データを [!DNL Snowflake] に拡張し、統合された単一のデータプラットフォームの利点を活用して、強力なマーケティングキャンペーンのデータインサイトをリアルタイムで得ることができます。 統合され、単一で使いやすいデータ分析用プラットフォームを提供することで、ユーザーはデータから重要な価値を引き出すことができます。 クラウドデータプラットフォームは、Adobe Campaign のあらゆる量のマーケティングデータをサポートするように広範囲でスケーリングできるので、管理の必要はありません。

サーバーとプロセス間の一般的な通信は、次のスキーマに従って実行されます。

![](assets/fda-architecture.png)

PostgreSQL はプライマリデータベースで、Snowflake はセカンダリデータベースとして使用できます。 データモデルを拡張し、データを Snowflake に保存できます。 その後、優れたパフォーマンスを持つ大規模なデータセットに対して ETL、セグメント化、レポートを実行できます。
