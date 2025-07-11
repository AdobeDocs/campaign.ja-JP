---
title: 一般的なアーキテクチャ
description: ' Adobe Campaign のアーキテクチャとコンポーネントの詳細について説明します。クライアントコンソールと環境のパーソナライズの詳細を確認します。'
feature: Architecture, Deployment
role: Admin, Developer
level: Beginner
exl-id: 1d9ff6c5-974d-4a8a-a0d7-641685bbe26e
source-git-commit: 061197048885a30249bd18af7f8b24cb71def742
workflow-type: tm+mt
source-wordcount: '1136'
ht-degree: 89%

---

# 一般的なアーキテクチャ{#general-architecture}

一般的な Adobe Campaign ソリューションのデプロイメントは、次のコンポーネントで構成されます。

* **パーソナライズされたクライアント環境**

  直感的なグラフィカルユーザーインターフェイス。このインターフェイスでは、マーケティングオファーの連絡と追跡、キャンペーンの作成、すべてのマーケティングの活動、プログラム、および計画（メール、ワークフロー、ランディングページなど）のレビューと管理、顧客プロファイルの作成と管理、オーディエンスの作成などを実行できます。

* **開発環境**

  サーバーサイドのソフトウェア。ユーザーインターフェイスで定義するルールとワークフローに基づき、選択したコミュニケーションチャネル（メール、SMS、プッシュ通知、ダイレクトメール、Web、Social など）を通じてマーケティングキャンペーンを実施できます。

* **データベースコンテナ**

  リレーショナルデータベース技術を活用して、Adobe Campaign クラウドデータベースのデータベースコンテナに、すべての情報、キャンペーンのコンポーネント、オファー、ワークフロー、キャンペーンの結果などを格納します。

## パーソナライズされたクライアント環境 {#client-env}

アプリケーションには、web ユーザーインターフェイス、クライアントコンソール（リッチクライアント）、web アクセス（シンクライアント）、API 統合など、様々な方法でアクセスできます。

[詳しくは、Campaign ユーザーインターフェイスを参照してください](../start/campaign-ui.md)。

## 開発環境 {#dev-env}

Adobe Campaign は、オープンで拡張性の高いアーキテクチャを作成するための様々なアプリケーションを備えた単一のプラットフォームです。Adobe Campaign のプラットフォームは、柔軟なアプリケーションレイヤーで記述されており、ビジネスニーズに合わせて簡単に構成できます。分散型のアーキテクチャであるため、メッセージの処理件数を数千から数百万へ拡張するなど、システムを線形的に拡張できます。

Campaign のモジュールには、連続して稼働させるものと、一時的に起動するものがあります。一時的に起動するモジュールでは、管理タスク（データベース接続の設定など）や繰り返しタスク（トラッキング情報の整理など）を実行します。

Adobe Campaign モジュールには 3 つのタイプがあります。

* **マルチインスタンスモジュール**：すべてのインスタンスに対して 1 つのプロセスを実行します。対象となるモジュールは、web、syslogd、trackinglogd、watchdog などです。
* **モノインスタンスモジュール**：インスタンスごとに 1 つのプロセスを実行します。対象となるモジュールは、mta、wfserver、inMail、sms、stat などです。
* **ユーティリティモジュール**：一時的に起動するモジュールです。一時的な操作や繰り返しの操作（クリーンアップ、設定、トラッキングログのダウンロードなど）を実行するために使用します。

主なプロセスは次のとおりです。

* **アプリケーションサーバー**（nlserver web）- このプロセスは、web サービス API（SOAP／HTTP + XML）経由で Adobe Campaign の全機能を公開します。また、HTML ベースでアクセスできるよう、Web ページ（レポート、Web フォームなど）を動的に生成します。そのため、このプロセスには Apache Tomcat JSP サーバーが含まれています。コンソールは、このプロセスに接続します。

* **ワークフローエンジン**（nlserver wfserver）- このプロセスは、アプリケーションで定義したワークフローを実行します。次のような、定期的に実行するテクニカルワークフローも処理します。

   * **トラッキング**：トラッキングログを復元および統合し、リダイレクトサーバーからログを取得して、レポートモジュールで使用される集計指標を作成できるようにします。
   * **クリーンアップ**：データベースをクリーンアップし、古いレコードを削除して、データベースの急激な増加を回避します。
   * **請求**：プラットフォームのアクティビティレポートを送信します（データベースのサイズ、マーケティングアクションの数など）。

* **配信サーバー**（nlserver mta）- Adobe Campaign には、ネイティブのメールブロードキャスト機能があります。このプロセスは、SMTP のメール転送エージェント（MTA）として機能します。メッセージを「一対一」でパーソナライズし、物理的に配信します。配信ジョブを使用して実行し、自動再試行をおこないます。さらに、トラッキングを有効にすると、URL が自動的に置き換えられ、リダイレクトサーバーを指すようになります。このプロセスでは、SMS、FAX、ダイレクトメール用に、カスタマイズやサードパーティルータへの自動送信を処理できます。

* **リダイレクトサーバー**（nlserver webmdl）- Adobe Campaign では、メールの開封とクリック追跡を自動的に処理できます（web サイトレベルでのトランザクショントラッキングについては、今後の課題です）。これを実現するため、メールメッセージに含まれる URL を書き換えて、このモジュールを指すようにします。このモジュールは、目的の URL にリダイレクトされる前に、そのインターネットユーザーが通過したことを登録します。

  高可用性を確保するため、このプロセスはデータベースから独立しています。他のサーバープロセスとの通信には、SOAP 呼び出し（HTTP、HTTP(S) および XML）のみを使用します。技術的には、この機能は HTTP サーバーの拡張モジュール（IIS の ISAPI 拡張、DSO Apache モジュールなど）に実装されており、Windows でのみ使用できます。

その他の技術的なプロセスも利用できます。

* **バウンスメールの管理**（nlserver inMail）- このプロセスは、配信エラーによって返されたバウンスメッセージを、バウンスメッセージ受信用のメールボックスから自動的に取得します。その後、これらのメッセージをルールベースで処理して配信エラーの原因（受信者不明、制限超過など）を特定し、データベースの配信ステータスを更新します。 これらの動作は事前に設定されており、すべて自動でおこなわれます。

* **SMS 配信ステータス**（nlserver sms）- このプロセスは、SMS ルータをポーリングして進行状況のステータスを収集し、データベースを更新します。

* **ログメッセージの書き込み**（nlserver syslogd）- この技術プロセスは、他のプロセスで生成されたログメッセージとトレースを取得して、ハードディスクに書き込みます。これにより、問題発生時の診断に使える十分な情報を取得します。

* **トラッキングログの書き込み**（nlserver trackinglogd）- このプロセスは、リダイレクトプロセスによって生成されたトラッキングログをディスクに保存します。

* **インバウンドイベントの書き込み**（nlserver interactiond）- このプロセスは、インバウンドイベントのディスクへの記録を、インタラクションのフレームワーク内で確実に行います。

* **モジュールの監視**（nlserver watchdog）- この技術的なプロセスは、他のプロセスを生成する主要なプロセスとして機能します。障害発生時には子プロセスの監視や再開を自動的に行うため、システムの稼働時間を最大限に維持できます。

* **統計サーバー**（nlserver stat）- このプロセスは、接続数、送信メッセージ数（送信先メールサーバー別）、接続や送信の制限値（同時接続数の上限、1 時間あたりや 1 接続あたりのメッセージ数の上限）などの統計情報を保持します。同じパブリック IP アドレスを共有している場合は、複数のインスタンスやマシンを統合することもできます。


## データベースコンテナ {#db-containers}

[Enterprise （FFDA）デプロイメント ](enterprise-deployment.md) において、Adobe Campaign Cloud データベースは、ソリューションの機能データ（プロファイル、サブスクリプション、コンテンツなど）、技術データ（配信ジョブ、配信ログ、トラッキングログなど）、作業データ（購入、リード）を含む [!DNL Snowflake] ータに依存し、すべてのAdobe Campaign コンポーネントは、固有のタスクを実行するためにデータベースと通信します。

事前定義されたデータベースとスキーマを使用して Adobe Campaign をデプロイできます。この事前定義された環境は、必要に応じて拡張できます。Adobe Campaign からデータマート内のすべてのデータへは、SQL 呼び出しを介してアクセスします。Adobe Campaign には、ETL（抽出、変換、ロード）ツールを補完する機能も備わっており、システムとの間でのデータの読み込みと書き出しを実行することができます。

![](assets/data-flow-diagram.png)


>[!CAUTION]
>
>**Campaign Managed Cloud Services** の環境と初期設定は、ライセンス契約の条件に従い、アドビによって策定されています。インストール済みのビルトインパッケージ、ビルトインのスキーマやレポートなどは変更できません。
>
>Campaign アドオンまたは提供されていない特定の機能を使用する必要がある場合は、**アドビカスタマーケア**&#x200B;にお問い合わせください。

## データベースストレージ {#db-storage}

合計ストレージ許容量は、メインデータベースと（オプション） Snowflake セカンダリデータベースに分割されます。データの保存場所は、お客様固有のユースケースに応じて、実装時またはアップグレード時に決定する必要があります。

データベースの使用状況を監視する方法については、[Campaign Campaign コントロールパネルドキュメント ](https://experienceleague.adobe.com/docs/control-panel/using/performance-monitoring/database-monitoring/database-monitoring.html?lang=ja){target="_blank"} を参照してください。