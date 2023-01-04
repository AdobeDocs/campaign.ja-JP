---
title: Campaign アーキテクチャの基本を学ぶ
description: 環境とデプロイメントの基本を確認する（キャンペーン環境のレポート方法を含む）。
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 562b24c3-6bea-447f-b74c-187ab77ae78f
source-git-commit: 507f30d16eecf5400ee88a4d29913e4cdaca9cba
workflow-type: ht
source-wordcount: '706'
ht-degree: 100%

---

# Campaign アーキテクチャの基本を学ぶ{#gs-ac-archi}

## 環境 {#environments}

Campaign は、完全な Campaign 環境を表す各インスタンスを持つ個々のインスタンスとして使用可能になります。

次の 2 種類の環境を使用できます。

* **実稼動環境**：業務担当者用のアプリケーションをホストします。

* **ステージング環境**：アプリケーションに対する変更を実稼動環境にプッシュする前の様々なパフォーマンスと品質のテストに使用します。

ある環境から別の環境へ、パッケージを書き出したり読み込んだりできます。

![](../assets/do-not-localize/book.png) パッケージの詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/administration-basics/working-with-data-packages.html?lang=ja)を参照してください{target=&quot;_blank&quot;}

## デプロイメントモデル{#ac-deployment}

次の 2 種類のデプロイメントモデルを使用できます。

* **Campaign FDA [!DNL Snowflake]デプロイメント**

   [[!DNL Snowflake]  FDA デプロイメント](fda-deployment.md)では、[!DNL Adobe Campaign] v8 は Federated Data Access 機能を通じて [!DNL Snowflake] に接続し、データにアクセスします。Adobe Campaign データの構造を変更することなく、[!DNL Snowflake] データベースに保存された外部データおよび情報にアクセスし、処理することができます。PostgreSQL はプライマリデータベースで、Snowflake はセカンダリデータベースです。データモデルを拡張し、データを Snowflake に保存できます。その後、優れたパフォーマンスを持つ大規模なデータセットに対して ETL、セグメント化、レポートを実行できます。

* **Campaign Enterprise（FFDA）デプロイメント**

   [エンタープライズ（FFDA）デプロイメント](enterprise-deployment.md)のコンテキストで、[!DNL Adobe Campaign] v8 は 2 つのデータベースと連携します。1 つ目はユーザーインターフェイスのリアルタイムメッセージングや単一クエリ、API 経由での書き込みを行うローカル [!DNL Campaign] データベース、もう 1 つはキャンペーンの実行や、バッチクエリ、ワークフローの実行を行う Cloud [!DNL Snowflake] データベースです。

   Campaign v8 Enterprise では、**Full Federated Data Access**（FFDA）の概念が導入されており、すべてのデータがリモートのクラウドデータベース上にあります。この新しいアーキテクチャにより、Campaign v8 Enterprise（FFDA）デプロイメントではデータ管理を簡素化できます。クラウドデータベースではインデックスは必要ありません。テーブルを作成して、データをコピーし、利用を開始するだけです。クラウドデータベーステクノロジーでは、パフォーマンスレベルを保証するために特別なメンテナンスを行う必要はありません。


## Message Center のアーキテクチャ{#transac-msg-archi}

トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計された Campaign モジュールです。

![](../assets/do-not-localize/glass.png) トランザクションメッセージの送信方法については、[この節](../send/transactional.md)を参照してください

web サイトでの顧客のアクションに応じて、REST API を介してイベントがキャンペーンに送信され、API 呼び出しを介して提供された情報またはデータがメッセージテンプレートに入力され、トランザクションメッセージがリアルタイムで顧客に送信されます。これらのメッセージはメール、SMS、プッシュ通知などを介して、個別に送信することも、まとめて送信することもできます。

この特定のアーキテクチャでは、実行セルがコントロールインスタンスから分離されているため、高い可用性と優れた負荷管理が保証されます。

* **コントロールインスタンス**（またはマーケティングインスタンス）は、マーケターや IT チームがメッセージテンプレートの作成、設定および公開に使用します。このインスタンスは、イベントの監視と履歴も一元化します。

   ![](../assets/do-not-localize/glass.png) メッセージテンプレートの作成と公開の方法については、[この節](../send/transactional.md)を参照してください。

* **実行インスタンス**&#x200B;は、受信イベント（パスワードのリセットや web サイトからの注文など）を取得し、パーソナライズされたメッセージを送信します。ロードバランサーを介してメッセージを処理し処理対象のイベントの数をスケーリングして可用性を最大限に高めるため、複数の実行インスタンスを配置することができます。

>[!CAUTION]
>
>コントロールインスタンスおよび実行インスタンスは、異なるマシンにインストールする必要があります。同じ Campaign インスタンスを共有できなくなります。

![](assets/messagecenter_diagram.png)

### 認証

これらの機能を使用するため、Adobe Campaign のユーザーはコントロールインスタンスにログオンして、トランザクションメッセージテンプレートの作成、シードリストを使用したメッセージプレビューの生成、レポートの表示、実行インスタンスの監視をおこないます。

* 単一の実行インスタンス
アドビがホストする Message Center 実行インスタンスとやり取りする場合、外部システムは、提供されたアカウントのログインとパスワードを使用して、セッションログオンメソッドへの API 呼び出しを行うことで、最初にセッショントークン（デフォルトでは 24 時間で期限切れ）を取得できます。
次に、上記の呼び出しに応答して実行インスタンスが提供する sessionToken を使用して、外部アプリケーションは SOAP API 呼び出し（rtEvents または batchEvents）を行って通信を送信できます。各 SOAP 呼び出しにアカウントのログインとパスワードを含める必要はありません。

* 複数の実行インスタンス
ロードバランサーの背後に複数の実行インスタンスがある複数セル実行アーキテクチャでは、外部アプリケーションが呼び出すログオンメソッドはロードバランサーを経由します。そのため、トークンベースの認証は使用できません。ユーザー／パスワードベースの認証が必要です。

![](../assets/do-not-localize/book.png) トランザクションメッセージのイベントについて詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/processing/event-description.html?lang=ja#about-transactional-messaging-datamodel)を参照してください{target=&quot;_blank&quot;}
