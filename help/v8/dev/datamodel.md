---
title: Campaign データモデルの基本を学ぶ
description: Campaign データモデルの基本を学び、ソースのデータを活用して、コミュニケーションやマーケティングの成果に役立てます。
feature: Data Model
role: Data Engineer
level: Beginner
exl-id: 200b60f1-04ae-4c3e-892f-3dd2bd22b896
source-git-commit: 507f30d16eecf5400ee88a4d29913e4cdaca9cba
workflow-type: tm+mt
source-wordcount: '669'
ht-degree: 100%

---

# Campaign データモデルの基本を学ぶ{#gs-ac-datamodel}

Adobe Campaign には、事前定義済みのデータモデルが付属しています。ここでは、Adobe Campaign データモデルのビルトインテーブルとそのインタラクションについて詳しく説明します。Adobe Campaign は、相互にリンクされたテーブルを含んだクラウドデータベースに基づいています。

Adobe Campaign データモデルの基本構造は、次のように説明できます。

* **受信者テーブル**：データモデルは、デフォルトで受信者テーブル（nmsRecipient）であるメインテーブルに基づいています。このテーブルには、すべてのマーケティングプロファイルが格納されています。

   ![](../assets/do-not-localize/glass.png) 受信者テーブルの詳細については、[この節](#ootb-profiles)を参照してください。

* **配信テーブル**：データモデルには、すべてのマーケティングアクティビティを格納するための専用部分も含まれています。通常、これは配信テーブル（NmsDelivery）です。このテーブルの各レコードは、配信アクションまたは配信テンプレートを表します。ターゲットやコンテンツなどの配信を実行するために必要なすべてのパラメーターが含まれています。

* **ログテーブル**：このテーブルには、キャンペーンの実行に関連するすべてのログが格納されます。

   配信ログとは、すべてのチャネルの受信者またはデバイスに送信されるすべてのメッセージです。メイン配信ログテーブル（NmsBroadLogRcp）には、すべての受信者の配信ログが格納されています。
メイントラッキングログテーブル（NmsTrackingLogRcp）には、すべての受信者のトラッキングログが格納されています。トラッキングログは、E メールの開封数やクリック数など、受信者の反応を指します。各反応はトラッキングログに対応します。
配信ログとトラッキングログは、一定期間の後に削除されます。 この期間は Adobe Campaign で指定され、変更可能です。したがって、ログを定期的にエクスポートすることを強くお勧めします。

* **テクニカルテーブル**&#x200B;は、オペレーターやユーザーの権限（xtkGroup）、フォルダー（XtkFolder）など、アプリケーションプロセスに使用される技術データを収集したものです。

>[!NOTE]
>
>各テーブルの説明にアクセスするには、管理／設定／データスキーマに移動し、リストからリソースを選択して、「**ドキュメント**」タブをクリックします。

Adobe Campaign の使用を開始する場合は、デフォルトのデータモデルを評価して、マーケティングデータの保存に最適なテーブルを確認する必要があります。

デフォルトの受信者テーブルは、そのまま使用できるフィールド（[この節](#ootb-profiles)を参照）と共に使用できます。必要に応じて、次の 2 つのメカニズムで拡張できます。

* 新しいフィールドで[既存のテーブルを拡張](extend-schema.md)する。例えば、受信者テーブルに新しい「ロイヤルティ」フィールドを追加できます。
* [新しいテーブルの作成](create-schema.md)。例えば、データベースの各プロファイルが行った購入をすべてリストする「購入」テーブルを作成して、受信者テーブルにリンクします。

![](../assets/do-not-localize/glass.png) Campaign データモデルを使用する際のベストプラクティスについては、[この節](datamodel-best-practices.md)を参照してください。

## ビルトインプロファイルテーブル {#ootb-profiles}

Adobe Campaign に組み込まれている受信者テーブル（nmsrecipient）は、データモデルを構築するための良い出発点となります。拡張が容易な定義済みのフィールドとテーブルリンクが多数あります。これは、受信者中心の単純なデータモデルに適合するので、主に受信者をターゲットにする場合に特に便利です。

標準の受信者テーブルを使用する利点は次のとおりです。

* 購読、シードリストなどの主要機能をすぐに使用できる
* マーケティングデータベースに受信者中心のデータモデルを提供する
* 実装の迅速化
* サポートおよびパートナーによる保守が容易

受信者テーブルは拡張できますが、テーブル内のフィールドやリンクの数を減らすことはできません。

![](../assets/do-not-localize/glass.png) 既存のスキーマを拡張する方法については、[この節](extend-schema.md)を参照してください。

![](../assets/do-not-localize/book.png) 組み込み受信者テーブルの拡張例については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/editing-schemas/examples-of-schemas-edition.html?lang=ja#extending-a-table)を参照してください。{target=&quot;_blank&quot;}

別の受信者テーブルを使用して、ビジネス要件や機能要件に、より適合させることもできます。この方法には制限があり、[この節](custom-recipient.md)で説明します。

## Campaign テーブルとクラウドデータベース

Campaign v8 のテーブル管理に関してより深く理解するには、[エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、テーブルは Campaign とその Snowflake Cloud データベースの間で複製されます。

![](../assets/do-not-localize/glass.png) レプリケーションの戦略とメカニズムの詳細については、[この節](../architecture/replication.md)を参照してください。

**関連トピック**

![](../assets/do-not-localize/glass.png) プロファイルをインポートする方法については、[この節](../start/import.md)を参照してください。
![](../assets/do-not-localize/glass.png) Campaign オーディエンスの詳細については、[この節](../start/audiences.md)を参照してください。
