---
title: Campaign のプロセスとコンポーネントについて
description: Campaign のプロセスとコンポーネントについて
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 7db32bd8-a088-405f-9633-2968c28b13b0
source-git-commit: b54a39ee6d106d68446878815c068571e310aaa3
workflow-type: tm+mt
source-wordcount: '709'
ht-degree: 2%

---

# Campaign のプロセスとコンポーネントについて {#components-and-processes}

Adobe Campaignは、電子メール、モバイル、ソーシャル、オフラインのキャンペーンを自動化するクロスチャネルマーケティングソリューションです。 Adobe Campaignは、顧客データや顧客プロファイルにアクセスするための一元的な場所を提供します。 Adobe Campaignを使用して、顧客に対して一貫したエクスペリエンスを調整し、複数のチャネルをまたいでマーケティングを設計、実行およびパーソナライズし、各デバイスおよびタッチポイントでの顧客体験を向上させます。 Adobe Campaignでは、ドラッグ&amp;ドロップのビジュアルワークフローインターフェイスを使用して、複数のデータソースの管理、オーディエンスセグメントの定義、複数手順のクロスチャネルキャンペーンの計画と実行が可能です。

Campaign の主な機能について詳しくは、 [このページ](../start/get-started.md).

## Campaign コンポーネント {#ac-components}

Adobe Campaignのコンポーネントとグローバルアーキテクチャについては、以下で説明します。

![](assets/ac-components.png)

### プレゼンテーションレイヤー{#presentation-layer}

Adobe Campaignには、リッチクライアント、シンクライアント、API 統合を通じてアクセスできます。

* リッチクライアント

   Campaign Rich クライアントは、SOAP や HTTP などの標準のインターネットプロトコルを通じてAdobe Campaignアプリケーションサーバーと通信するネイティブアプリケーションです。

   Campaign クライアントコンソールは、すべての機能と設定を一元化し、ローカルキャッシュに依存するので、必要最小限の帯域幅です。 Campaign クライアントコンソールは、簡単にデプロイできるように設計され、インターネットブラウザーからデプロイし、自動的に更新されるので、HTTP(S) トラフィックのみを生成するので、特定のネットワーク設定は不要です。

   ![](../assets/do-not-localize/glass.png) [ Campaign クライアントコンソールの詳細情報](../start/connect.md)。

* シンクライアント

   Adobe Campaignの Web アクセス機能を使用すると、Web ブラウザーを使用して、Campaign の機能のサブセットにアクセスできます。HTMLユーザーインターフェイスが使用されます。 この Web インターフェイスを使用して、レポートへのアクセス、メッセージの制御と検証、監視ダッシュボードへのアクセスなどを行います。

   ![](../assets/do-not-localize/glass.png) [Campaign への Web でのアクセスの詳細情報](../start/connect.md)。

* API を使用した外部アプリケーション

   場合によっては、SOAP プロトコルで公開された Web Services API を使用して、外部アプリケーションからシステムを呼び出すことができます。

   ![](../assets/do-not-localize/glass.png) [Campaign API の詳細情報](../dev/api.md)。

### 永続性レイヤー{#persistance-layer}

Campaign データベースは永続性レイヤーとして使用され、Adobe Campaignが管理するほとんどすべての情報とデータが含まれています。 これには以下が含まれます。プロファイル、購読、コンテンツなどの機能データ配信ジョブやログ、トラッキングログなどの技術データおよび作業データ（購入、リード）

タスクを実行するには（リダイレクトモジュールを除く）Adobe Campaignのコンポーネントの大部分がデータベースへのアクセスを必要とするので、データベースの信頼性が最も重要です。

### 論理アプリケーションレイヤー{#logical-app-layer}

Campaign の論理アプリケーション・レイヤーは、複雑なビジネス・ニーズに合わせて容易に設定できます。 Campaign を、様々なアプリケーションと組み合わせて、オープンで拡張性の高いアーキテクチャを作成する単一のプラットフォームとして使用できます。 各 Campaign インスタンスは、アプリケーションレイヤー内のプロセスの集まりで、一部は共有され、一部は専用です。

## Campaign Managed Services{#ac-managed-services}

Adobe Campaign v8 はas a Managed Service的にデプロイされます。ユーザーインターフェイス、実行管理エンジン、Campaign データベースを含むAdobe Campaignのすべてのコンポーネントは、電子メールの実行、ミラーページ、トラッキングサーバー、配信停止ページ/環境設定センターやランディングページなど、外部に配置される Web コンポーネントでAdobeで完全にホストされます。

## キャンペーンプロセス

Campaign Web サーバーは、Campaign Web プロセスへのアクセスを制御します。 JavaScript は、コア製品の機能やカスタマイズに使用されるサーバー側の言語です。 Tomcat はバックエンドエンジンで、Web プロセスの一部として Campaign 製品に埋め込まれます。 例えば、JSP ページや JSSP ページで動的コンテンツをレンダリングするために JavaScript を使用します。

![](assets/ac-processes.png)

Campaign クライアントコンソールは、SOAP XML over HTTP を使用して Web サーバーに接続します。 Web サーバーはセキュリティレイヤーを提供し、JavaScript を使用してアプリケーションレイヤーにリクエストを渡し、Campaign の内部プロセスは SQL を使用してデータベースにアクセスします。

Campaign プロセス間の全体的な通信について、以下のスタンドアロンデプロイメントダイアグラムで説明します。すべての Campaign コンポーネントが同じマシンにインストールされている。

![](assets/ac-standalone.png)

ユーザーは、HTTP を使用して Campaign アプリケーションサーバーに接続します。 すべてのデータと情報は、Campaign データベースで管理されます。 Campaign 開発者が設定の変更をおこなうと、データベースに取り込まれます。 マーケターが新しいキャンペーンを作成すると、この新しいキャンペーンに関連するすべての情報とデータもデータベースで管理されます。 マーケターがキャンペーンを実行すると、E メール配信が SMTP サーバーを通じて Campaign サーバーからプロファイルに送信されます。 プロファイルが E メールの開封などの E メール配信とやり取りすると、そのトラッキングデータがトラッキングサーバーに送り返されます。

![](../assets/do-not-localize/glass.png) [Campaign プロセスの詳細を説明します](../dev/general-architecture.md#dev-env).
