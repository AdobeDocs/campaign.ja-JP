---
title: Campaign のコンポーネントとプロセスについて
description: Campaign のコンポーネントとプロセスについて
feature: Overview, Architecture, Configuration
role: User
level: Beginner
exl-id: 7db32bd8-a088-405f-9633-2968c28b13b0
TQID: 'https://experienceleague.adobe.com/idHaE95v6L555qBtrbXNzpop003jU8zRAqMEBQ-W-SU'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: b12f6872-9271-4369-85e5-86969a0b99a2
    internal-label: APIs
  - id: bae31391-3416-5fbd-bc4b-2cdcae2922db
    internal-label: Architecture
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
subfeature_v2:
  - id: e8d937ec-9046-41b5-834b-d22a624e0d37
    internal-label: Campaign overview
  - id: a14877cc-63b1-41d9-bf0b-5f97cadd0417
    internal-label: Configuration guidelines
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
source-git-commit: 8ab3ced33b95f977032d9f0ffccd1dc50c7a59e8
workflow-type: tm+mt
source-wordcount: '675'
ht-degree: 73%
---
# Campaign のコンポーネントとプロセスについて {#components-and-processes}

Adobe Campaign は、メール、モバイル、ソーシャル、オフラインのキャンペーンを自動化するクロスチャネルマーケティングソリューションです。 Adobe Campaign では、顧客データとプロファイルに一箇所でアクセスできます。 Adobe Campaign を使用して、顧客に対して一貫したエクスペリエンスを調整し、複数のチャネルをまたいでマーケティングを設計、実行およびパーソナライズし、各デバイスおよびタッチポイントでの顧客体験を向上させます。 Adobe Campaign では、ドラッグ＆ドロップのビジュアルワークフローインターフェイスを使用して、複数のデータソースの管理、オーディエンスセグメントの定義、複数手順のクロスチャネルキャンペーンの計画と実行が可能です。

Campaign キー機能の詳細については、[Campaign v8](../start/get-started.md)の概要を参照してください。

## Campaign コンポーネント {#ac-components}

Adobe Campaign のコンポーネントとグローバルアーキテクチャは次のとおりです。

![ アーキテクチャ：統合、プレゼンテーション、論理アプリケーションおよび永続性レイヤーに加えて、電子メール、メールおよびSMSの実行](assets/do-not-localize//ac-components.png)

### プレゼンテーションレイヤー{#presentation-layer}

Adobe Campaignには、リッチクライアント、シンクライアント、またはAPI統合を通じてアクセスできます。

* リッチクライアント

  Campaign リッチクライアントは、SOAP や HTTP などの標準のインターネットプロトコルを通じて Adobe Campaign アプリケーションサーバーと通信するネイティブアプリケーションです。 [Campaign クライアントコンソールの詳細情報](../start/connect.md)。

* シンクライアント

  Adobe Campaign web アクセス機能を使用すると、HTML ユーザーインターフェイスを使用して、Web ブラウザーでCampaign機能のサブセットにアクセスできます。 この web インターフェイスを使用して、レポートへのアクセス、メッセージの制御と検証、監視ダッシュボードへのアクセスなどを行います。  [Campaign への web でのアクセスの詳細情報](../start/connect.md)。

* API を使用した外部アプリケーション

  SOAP プロトコルで公開されている web サービス API を使用して、外部のアプリケーションからシステムを呼び出すこともできます。 [Campaign API の詳細情報](../dev/api.md)。

### 永続性レイヤー{#persistance-layer}

Campaign データベースは永続性レイヤーとして使用され、Adobe Campaignで管理されるほぼすべての情報とデータが含まれます。 これには、プロファイル、購読、コンテンツなどの機能データ、配信ジョブやログ、トラッキングログなどの技術データおよび作業データ（購入、リード）が含まれます。

タスクを実行するには（リダイレクトモジュールを除く）Adobe Campaign のコンポーネントの大部分がデータベースへのアクセスを必要とするので、データベースの信頼性が最も重要です。

### 論理アプリケーションレイヤー{#logical-app-layer}

Campaign の論理アプリケーションレイヤーは、複雑なビジネスニーズに合わせて簡単に設定できます。 Campaignは、様々なアプリケーションを組み合わせた単一のプラットフォームとして使用して、オープンでスケーラブルなアーキテクチャを作成できます。 各Campaign インスタンスは、アプリケーション層のプロセスのコレクションで、一部は共有され、一部は専用です。

## Campaign Managed Cloud Services{#ac-managed-services}

Adobe Campaign v8 はマネージドサービスとしてデプロイされます。Adobe Campaign のすべてのコンポーネント（ユーザーインターフェイス、実行管理エンジン、Campaign データベースなど）は、アドビで完全にホストされます。これには、メールの実行、ミラーページ、トラッキングサーバー、外部に配置される web コンポーネント（登録解除ページ／環境設定センターやランディングページなど）が含まれます。

## Campaign のプロセス

Campaign web サーバーは、Campaign web プロセスへのアクセスを制御します。 JavaScript は、コア製品の機能やカスタマイズに使用されるサーバーサイドの言語です。 Tomcat はバックエンドエンジンで、web プロセスの一部として Campaign 製品に埋め込まれます。 JavaScript は、JSP ページや JSSP ページなどで、動的コンテンツをレンダリングするために使用されます。

![ クライアントコンソールおよびその他のアプリケーションは、SQL](assets/do-not-localize/ac-processes.png)を介してデータベースにアクセスするweb サーバーおよびweb プロセスを呼び出します

Campaign クライアントコンソールは、SOAP XML over HTTP を使用して web サーバーに接続します。 Web サーバーはセキュリティ層を提供し、Javascriptを使用してリクエストをアプリケーション層に渡し、Campaignの内部プロセスはSQLを使用してデータベースにアクセスします。

<!--
The overall communication between Campaign processes are described in the following standalone deployment diagram: all Campaign components are installed in the same machine.

![](assets/do-not-localize//ac-standalone.png)
-->

ユーザーは、HTTPを使用してCampaign アプリケーションサーバーに接続します。 すべてのデータと情報は、Campaign データベースで管理されます。 Campaign 開発者が設定の変更を行うと、その変更はデータベースに取り込まれます。 マーケターが新しいキャンペーンを作成すると、この新しいキャンペーンに関連するすべての情報とデータもデータベースで管理されます。 マーケターがキャンペーンを実行すると、メール配信が SMTP サーバーを通じて Campaign サーバーからプロファイルに送信されます。 プロファイルがメール配信でインタラクションを行う（メールの開封など）すると、そのトラッキングデータがトラッキングサーバーに送り返されます。

[詳しくは、Campaign のプロセスを参照してください](../architecture/general-architecture.md#dev-env)。
