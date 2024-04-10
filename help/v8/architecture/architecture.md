---
title: Campaign アーキテクチャの基本を学ぶ
description: キャンペーン環境のレポート方法など、環境とデプロイメントの基本を確認します。
feature: Architecture, Deployment
role: Data Engineer
level: Beginner
exl-id: 562b24c3-6bea-447f-b74c-187ab77ae78f
source-git-commit: 061197048885a30249bd18af7f8b24cb71def742
workflow-type: tm+mt
source-wordcount: '1049'
ht-degree: 97%

---

# Campaign アーキテクチャの基本を学ぶ{#gs-ac-archi}

## 環境 {#environments}

Campaign は、完全な Campaign 環境を表す各インスタンスを持つ個々のインスタンスとして使用可能になります。

次の 2 種類の環境を使用できます。

* **実稼動環境**：業務担当者用のアプリケーションをホストします。

* **ステージング環境**：アプリケーションに対する変更を実稼動環境にプッシュする前の様々なパフォーマンスと品質のテストに使用します。

ある環境から別の環境へパッケージを書き出したり読み込んだりできます。

パッケージの詳細については、を参照してください。 [Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/administration-basics/working-with-data-packages.html?lang=ja){target="_blank"}

## デプロイメントモデル {#ac-deployment}

**Campaign FDA デプロイメント**（P1～P3）と **Campaign Enterprise（FFDA）デプロイメント**（P4）の 2 つのデプロイメントモデルが使用可能です。

### Campaign FDA デプロイメント {#ac-deployment-fda}

[FDA デプロイメント](fda-deployment.md)では、[!DNL Adobe Campaign] v8 は Federated Data Access 機能を通じて [!DNL Snowflake] に接続し、データにアクセスできます。Adobe Campaign データの構造を変更することなく、[!DNL Snowflake] データベースに保存された外部データおよび情報にアクセスし、処理することができます。PostgreSQL はプライマリデータベースで、Snowflake はセカンダリデータベースとして使用して、データモデルを拡張し、データを Snowflake に保存できます。その後、優れたパフォーマンスを持つ大規模なデータセットに対して ETL、セグメント化、レポートを実行できます。


![](assets/P1-P3-architecture.png){zoomable=&quot;yes&quot;}

>[!NOTE]
>
>このデプロイメントモデルでは、[!DNL Snowflake] セカンダリデータベースはリクエストに応じてのみ使用可能です。[!DNL Snowflake] を使用してデプロイメントを更新するには、アドビトランジションマネージャーにお問い合わせください。
>

### Campaign Enterprise（FFDA）デプロイメント {#ac-deployment-ffda}

[エンタープライズ（FFDA）デプロイメント](enterprise-deployment.md)のコンテキストで、[!DNL Adobe Campaign] v8 は 2 つのデータベースと連携します。1 つ目はユーザーインターフェイスのリアルタイムメッセージングや単一クエリ、API 経由での書き込みを行うローカル [!DNL Campaign] データベース、もう 1 つはキャンペーンの実行や、バッチクエリ、ワークフローの実行を行う Cloud [!DNL Snowflake] データベースです。

Campaign v8 Enterprise では、**Full Federated Data Access**（FFDA）の概念が導入されており、すべてのデータがリモートのクラウドデータベース上にあります。この新しいアーキテクチャにより、Campaign v8 Enterprise（FFDA）デプロイメントではデータ管理を簡素化できます。クラウドデータベースではインデックスは必要ありません。テーブルを作成して、データをコピーし、利用を開始するだけです。クラウドデータベーステクノロジーでは、パフォーマンスレベルを保証するために特別なメンテナンスを行う必要はありません。

![](assets/P4-architecture.png){zoomable=&quot;yes&quot;}


## 分割配信の実行 {#split}

>[!AVAILABILITY]
>
>この機能は、複数の MID インスタンス設定を持つお客様のみが使用できます。

Campaign v8 パッケージに応じて、配信の実行を担当する特定の数のミッドソーシングインスタンスがプロビジョニングされます。

デフォルトでは、すべてのチャネルの外部アカウントが&#x200B;**[!UICONTROL 代替]**&#x200B;ルーティングモードを使用するため、各 MID インスタンスから 1 回に 1 つの配信が交互に送信されます。

速度と規模の両方でパフォーマンスを向上させるには、配信をミッドソーシングインスタンス間で自動的に分割すると、受信者により速く配信できます。 マーケティングインスタンスから配信を実行する場合、この操作は透過的です。配信が送信されると、すべてのログが統合されてから、1 つの配信オブジェクトとしてマーケティングインスタンスに送り返されます。

これを行うには、**[!UICONTROL 分割]**&#x200B;ルーティングモードの追加外部アカウントが、各チャネルのプロビジョニング時に作成されます。

* 分割配信 - メール（splitDeliveryEmail）
* 分割配信 - SMS（splitDeliverySMS）
* 分割配信 - iOS（splitDeliveryIOS）
* 分割配信 - Android（splitDeliveryAndroid）

![](assets/splitted-delivery.png)

>[!IMPORTANT]
>
>「分割配信 - メール」アカウントの場合、分割ルーティングモードはデフォルトで有効になっています。 その他すべてのチャネルの外部アカウントについては、アドビトランジションマネージャーに問い合わせて、オプションを有効にしてもらってください。
>
>デフォルトでは、配信を複数のミッドに分割する際のしきい値のサイズは 100 K です。 この値は、**[!UICONTROL 管理]**／**[!UICONTROL プラットフォーム]**／**[!UICONTROL オプション]**&#x200B;メニューの「NmsDelivery_MultiMidSplitThreshold」オプションで変更することができます。

配信を送信するデフォルトのアカウントとして、分割した外部アカウントを作成するには、配信テンプレートでルーティングプロバイダーを変更する必要があります。 これを行うには、次の手順に従います。

1. **[!UICONTROL リソース]**／**[!UICONTROL テンプレート]**／**[!UICONTROL 配信テンプレート]**&#x200B;フォルダーに移動して、目的の配信テンプレートを開きます。 この例では、メール配信テンプレートを編集します。

   ![](assets/split-default-list.png)

1. 「**[!UICONTROL プロパティ]**」ボタンをクリックして、ルーティングプロバイダーを対応する分割配信外部アカウントに変更します。

   ![](assets/split-default-delivery.png)

1. 変更内容を保存します。テンプレートを使用して送信されるすべての配信は、デフォルトで分割ルーティングモードを使用するようになりました。

<!--In addition, you can select split external accounts as the default routing provider for all future delivery templates. To do this, change the value of the **[!UICONTROL xtkoption NmsBroadcast_DefaultProvider]** option to the name of the split account.

![](assets/split-default-options.png) -->

## Message Center のアーキテクチャ{#transac-msg-archi}

トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計された Campaign モジュールです。

でトランザクションメッセージを送信する方法を説明します [この節](../send/transactional.md).

web サイトでの顧客のアクションに応じて、REST API を介してイベントがキャンペーンに送信され、API 呼び出しを介して提供された情報またはデータがメッセージテンプレートに入力され、トランザクションメッセージがリアルタイムで顧客に送信されます。これらのメッセージはメール、SMS、プッシュ通知などを介して、個別に送信することも、まとめて送信することもできます。

この特定のアーキテクチャでは、実行セルがコントロールインスタンスから分離されているため、高い可用性と優れた負荷管理が保証されます。

* **コントロールインスタンス**（またはマーケティングインスタンス）は、マーケターや IT チームがメッセージテンプレートの作成、設定および公開に使用します。このインスタンスは、イベントの監視と履歴も一元化します。

  でメッセージテンプレートを作成および公開する方法について説明します。 [この節](../send/transactional.md).

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

トランザクションメッセージのイベントについて詳しくは、[このページ](../send/event-processing.md)を参照してください。
