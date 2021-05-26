---
solution: Campaign v8
product: Adobe Campaign
title: テクニカルワークフローとデータレプリケーション
description: テクニカルワークフローとデータレプリケーション
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 7b145193-d4ae-47d0-b694-398c1e35eee4,df76e7ff-3b97-41be-abc2-640748680ff3
source-git-commit: ab7e458db5ad5696d144c17f6e89e4437a476d11
workflow-type: tm+mt
source-wordcount: '382'
ht-degree: 71%

---

# テクニカルワークフローとデータレプリケーション

## テクニカルワークフロー{#tech-wf}

Adobe Campaign には、一連の組み込みテクニカルワークフローが付属しています。 テクニカルワークフローは、サーバーで定期的にスケジュールされたプロセスやジョブを実行します。

これらのワークフローでは、データベースに対する保守操作の実行、配信ログのトラッキング情報の利用、繰り返しキャンペーンの作成などを行います。

[!DNL :arrow_upper_right:] テクニカルワークフローの完全なリストについては、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/advanced-management/about-technical-workflows.html?lang=ja)


これらのテクニカルワークフローに加えて、キャンペーン v8 では、[データレプリケーション](#data-replication)を管理するための特定のテクニカルワークフローも利用します。

* **[!UICONTROL 参照テーブルをレプリケート]**
このワークフローは、キャンペーンのローカルデータベース（Postgres）とクラウドデータベース（[!DNL Snowflake]）に不可欠な組み込みテーブルの自動レプリケーションを実行します。毎日 1 時間ごとに実行するようにスケジュールされます。 **lastModified** フィールドが存在する場合、レプリケーションは増分的に行われます。存在しない場合はテーブル全体がレプリケートされます。 次の配列内のテーブルの順序は、レプリケーションワークフローで使用される順序です。
* **[!UICONTROL ステージングデータをレプリケート]**
このワークフローは、単一の呼び出し用にステージングデータを複製します。毎日 1 時間ごとに実行するようにスケジュールされます。
* **[!UICONTROL 直ちに FFDA をデプロイ]**\
   このワークフローは、Cloud データベースへの即時デプロイメントを実行します。
* **[!UICONTROL 直ちに FFDA データをレプリケート]**
このワークフローは、指定の外部アカウントの XS データをレプリケートします。

これらのテクニカルワークフローは、キャンペーンエクスプローラーの&#x200B;**[!UICONTROL 管理／本番環境／テクニカルワークフロー／完全な FFDA レプリケーション]**&#x200B;ノードから利用できます。 **これらは変更できません。**

必要に応じて、データの同期を手動で開始できます。 これを実行するには、**スケジューラー**&#x200B;アクティビティを右クリックし、「**保留中のタスクを今すぐ実行**」を選択します。

## データレプリケーション{#data-replication}

一部の組み込みテーブルは、前述の専用ワークフローを使用して、Campaignローカルデータベースから[!DNL Snowflake]クラウドデータベースにレプリケートされます。

レプリケーションポリシーはテーブルのサイズに基づいています。 リアルタイムでレプリケートされるテーブルもあれば、時間単位でレプリケートされるテーブルもあります。 増分的に更新されるテーブルもあれば、全体が置き換えられるテーブルもあります。

組み込みの&#x200B;**参照テーブルのレプリケート**&#x200B;テクニカルワークフローに加えて、ワークフローでデータレプリケーションを強制できます。

次の操作をおこなうことができます。

* 次のコードを含む特定の&#x200B;**JavaScriptコード**&#x200B;アクティビティを追加します。

```
nms.replicationStrategy.StartReplicateStagingData("dem:sampleTable")
```

![](assets/jscode.png)


* 次のコマンドを使用して、特定の&#x200B;**nlmodule**&#x200B;アクティビティを追加します。

```
nlserver ffdaReplicateStaging -stagingSchema -instance:acc1
```

![](assets/nlmodule.png)

**関連トピック**

[!DNL :arrow_upper_right:] ワークフローの使用を開始する方法については、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html?lang=ja#automating-with-workflows)

[!DNL :bulb:] この節のデータ保持期間にア [クセスする](../dev/datamodel-best-practices.md#data-retention)
