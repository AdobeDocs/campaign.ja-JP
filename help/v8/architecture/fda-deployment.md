---
title: Campaign FDASnowflakeのデプロイの概要
description: Campaign FDASnowflakeのデプロイの概要
feature: Overview
role: Data Engineer
level: Beginner
hide: true
hidefromtoc: true
source-git-commit: 355b9219ffd9d481d15d2d0982d49923842cc27b
workflow-type: tm+mt
source-wordcount: '297'
ht-degree: 5%

---

# [!DNL Campaign] FDA [!DNL Snowflake] デプロイメント{#gs-fda-snowflake}

内 [!DNL Snowflake] FDA（デフォルト）デプロイメント [!DNL Adobe Campaign] v8 は、 [!DNL Snowflake] を通じてデータにアクセスする [Federated Data Access](../connect/fda.md) 機能：に保存された外部データおよび情報にアクセスして処理できます [!DNL Snowflake] データベースに反映されます。Adobe Campaignデータの構造は変更されません。

## 利点{#fda-benefits}

このデプロイメントモデルには、次のような利点があります。

* **ストレージとパフォーマンス**
履歴データは、 [!DNL Snowflake] を追加し、依存関係をAdobe Campaign ID 制限に減らします。 また、このアーキテクチャは、PostgreSQL のストレージとパフォーマンスの制限への依存を減らします。 Campaign データベースに保存されるデータ量が少なくなるので、パフォーマンスが向上し、メンテナンスタスクの実行が高速化します。

* **データモデル拡張機能とデータ管理**
テーブルは、 [!DNL Snowflake] 保存期間中にアーカイブされたデータを使用したり、優れたパフォーマンスでセグメント化プロセスを実行したりするなど、Adobe Campaignにリンクします。

   また、このアーキテクチャを使用すると、 [!DNL Snowflake]. パーソナライゼーションおよび配信の目的で、集計および一時テーブルのみが Campaign に移動されます。


## アーキテクチャ{#fda-archi}

このデプロイメントモデルを使用すると、Adobe Campaignのユーザーは、データを [!DNL Snowflake] また、統合された単一のデータプラットフォームのメリットを活用して、強力なマーケティングキャンペーンデータインサイトをリアルタイムで得ることができます。 データ分析用の単一の統合された使いやすいプラットフォームを提供することで、データから深い価値を引き出すことができます。 クラウドデータプラットフォームは、Adobe Campaignのあらゆる量のマーケティングデータをサポートするように無限に拡大できるので、管理する必要はありません。

サーバーとプロセス間の一般的な通信は、次のスキーマに従って実行されます。

![](assets/fda-architecture.png)

PostgreSQL はプライマリデータベースで、Snowflakeはセカンダリデータベースです。 データモデルを拡張し、データをSnowflakeに保存できます。 その後、優れたパフォーマンスを持つ大規模なデータセットに対して ETL、セグメント化、レポートを実行できます。
