---
title: Campaign アーキテクチャの基本を学ぶ
description: 環境とデプロイメントの基本を確認する
feature: Overview
role: Data Engineer
level: Beginner
source-git-commit: 355b9219ffd9d481d15d2d0982d49923842cc27b
workflow-type: tm+mt
source-wordcount: '606'
ht-degree: 81%

---

# Campaign アーキテクチャの基本を学ぶ{#gs-ac-archi}

## 環境 {#environments}

Campaign は、完全な Campaign 環境を表す各インスタンスを持つ個々のインスタンスとして使用可能になります。

Campaign 環境で使用できる環境には、次の 2 種類がCloud Serviceされます。

* **実稼動環境**：業務担当者用のアプリケーションをホストします。

* **実稼動環境以外**:アプリケーションに対する変更が実稼動環境にプッシュされる前に、様々なパフォーマンステストや品質テストに使用されます。

ある環境から別の環境へ、パッケージを書き出したり読み込んだりできます。

![](../assets/do-not-localize/book.png) パッケージの詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/administration-basics/working-with-data-packages.html?lang=ja)を参照してください

## デプロイメントモデル{#ac-deployment}

その中に [エンタープライズ (FFDA) デプロイメント](enterprise-deployment.md), [!DNL Adobe Campaign] v8 は、2 つのデータベースで動作します。地元の人 [!DNL Campaign] データベースを使用して、リアルタイムのメッセージングと単一のクエリを作成し、API を介して書き込み、およびクラウドを利用できます。 [!DNL Snowflake] キャンペーン実行、バッチクエリおよびワークフロー実行用のデータベース。

Campaign v8 Enterprise は、 **Federated Data Access** (FFDA):すべてのデータがクラウドデータベース上でリモートになりました。 この新しいアーキテクチャにより、Campaign v8 Enterprise(FFDA) のデプロイメントはデータ管理をシンプル化します。クラウドデータベースにインデックスは必要ありません。 テーブルを作成して、データをコピーし、利用を開始するだけです。クラウドデータベーステクノロジーでは、パフォーマンスレベルを保証するために特別なメンテナンスを行う必要はありません。



<!--Two deployment models are available:

* **Campaign FDA [!DNL Snowflake] deployment**

In its [[!DNL Snowflake] FDA deployment](fda-deployment.md), [!DNL Adobe Campaign] v8 is connected to [!DNL Snowflake] to access data through Federated Data Access capability: you can access and process external data and information stored in your [!DNL Snowflake] database without changing the structure of Adobe Campaign data. PostgreSQL is the primary database, and Snowflake is the secondary database. You can extend your data model and store your data on Snowflake. Subsequently, you can run ETL, segmentation and reports on a large data set with outstanding performances.

* **Campaign Enterprise (FFDA) deployment**

-->

## Message Center のアーキテクチャ{#transac-msg-archi}

トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計された Campaign モジュールです。

![](../assets/do-not-localize/glass.png) トランザクションメッセージの送信方法については、[この節](../send/transactional.md)を参照してください

web サイトでの顧客のアクションに応じて、REST API を介してイベントがキャンペーンに送信され、API 呼び出しを介して提供された情報またはデータがメッセージテンプレートに入力され、トランザクションメッセージがリアルタイムで顧客に送信されます。 これらのメッセージは、個別に送信することも、E メール、SMS またはプッシュ通知を介してまとめて送信することもできます。

この特定のアーキテクチャでは、実行セルがコントロールインスタンスから分離されているため、高い可用性と優れた負荷管理が保証されます。

* **コントロールインスタンス**（またはマーケティングインスタンス）は、マーケターや IT チームがメッセージテンプレートの作成、設定および公開に使用します。 このインスタンスは、イベントの監視と履歴も一元化します。

   ![](../assets/do-not-localize/glass.png) メッセージテンプレートの作成と公開の方法については、[この節](../send/transactional.md)を参照してください。

* **実行インスタンス**&#x200B;は、受信イベント（パスワードのリセットや web サイトからの注文など）を取得し、パーソナライズされたメッセージを送信します。 ロードバランサーを介してメッセージを処理し処理対象のイベントの数をスケーリングして可用性を最大限に高めるため、複数の実行インスタンスを配置することができます。

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
ロードバランサーの背後に複数の実行インスタンスがある複数セル実行アーキテクチャでは、外部アプリケーションが呼び出すログオンメソッドはロードバランサーを経由します。そのため、トークンベースの認証は使用できません。 ユーザー／パスワードベースの認証が必要です。

![](../assets/do-not-localize/book.png) トランザクションメッセージのイベントについて詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/processing/event-description.html?lang=ja#about-transactional-messaging-datamodel)を参照してください