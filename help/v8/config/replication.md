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
ht-degree: 6%

---

# テクニカルワークフローとデータレプリケーション

## テクニカルワークフロー{#tech-wf}

Adobe Campaignには、組み込みのテクニカルワークフローが用意されています。 テクニカルワークフローは、サーバー上で定期的にスケジュールされた、プロセスまたはジョブを実行します。

これらのワークフローは、データベースのメンテナンス操作を実行し、配信ログのトラッキング情報を活用し、繰り返しキャンペーンを作成します。

[!DNL :arrow_upper_right:] テクニカルワークフローの完全なリストについては、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/advanced-management/about-technical-workflows.html?lang=ja)


Campaign v8では、これらのテクニカルワークフローに加えて、[データレプリケーション](#data-replication)を管理するための固有のテクニカルワークフローを利用します。

* **[!UICONTROL 参照テーブ]**
ルのレプリケートこのワークフローは、Campaignローカルデータベース(Postgres)およびCloudデータベース([!DNL Snowflake])に存在する必要がある組み込みテーブルの自動レプリケーションを実行します。毎時、毎日実行されるようにスケジュールされます。 **lastModified**&#x200B;フィールドが存在する場合、レプリケーションは増分的に行われます。それ以外の場合は、テーブル全体がレプリケートされます。 以下の配列内のテーブルの順序は、レプリケーションワークフローで使用される順序です。
* **[!UICONTROL ステージングデータのレ]**
プリケートこのワークフローは、単一の呼び出し用にステージングデータをレプリケートします。毎時、毎日実行されるようにスケジュールされます。
* **[!UICONTROL 直ちに FFDA をデプロイ]**\
   このワークフローは、Cloudデータベースへの即時デプロイメントを実行します。
* **[!UICONTROL FFDAデータを直ち]**
にレプリケートこのワークフローは、特定の外部アカウントのXSデータをレプリケートします。

これらのテクニカルワークフローは、Campaignエクスプローラーの&#x200B;**[!UICONTROL 管理/プロダクション/テクニカルワークフロー/完全なFFDAレプリケーション]**&#x200B;ノードから使用できます。 **これらは変更できません。**

必要に応じて、データの同期を手動で開始できます。 これを実行するには、**スケジューラー**&#x200B;アクティビティを右クリックし、「**保留中のタスクを今すぐ実行**」を選択します。

## データレプリケーション{#data-replication}

一部の組み込みテーブルは、前述の専用ワークフローを使用して、Campaignローカルデータベースから[!DNL Snowflake]クラウドデータベースにレプリケートされます。

レプリケーションポリシーは、テーブルのサイズに基づいています。 一部のテーブルはリアルタイムでレプリケートされ、他のテーブルは時間単位でレプリケートされます。 一部のテーブルは、置き換えられる際に増分更新がおこなわれます。

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

[!DNL :arrow_upper_right:] ワークフローの使用を開始する方法については、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html?lang=en#automating-with-workflows)

[!DNL :bulb:] この節のデータ保持期間にア [クセスする](../dev/datamodel-best-practices.md#data-retention)
