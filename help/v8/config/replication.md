---
solution: Campaign
product: Adobe Campaign
title: テクニカルワークフローとデータ・レプリケーション
description: テクニカルワークフローとデータ・レプリケーション
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 7b145193-d4ae-47d0-b694-398c1e35eee4,df76e7ff-3b97-41be-abc2-640748680ff3
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '327'
ht-degree: 4%

---

# テクニカルワークフローとデータ・レプリケーション

## テクニカルワークフロー

Adobe Campaignには組み込みテクニカルワークフローが付属しています。 テクニカルワークフローは、サーバーに基づいて定期的にスケジュールされたプロセスまたはジョブを実行します。

これらのワークフローは、データベースに対する保守操作を実行し、配信ログの追跡情報を利用し、定期的なキャンペーンを作成します。

:arrow_upper_right:テクニカルワークフローの完全なリストについては、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/advanced-management/about-technical-workflows.html?lang=en#overview)で詳しく説明しています

これらのテクニカルワークフローに加えて、キャンペーンv8は[データ複製](#data-replication)を管理するために、特定のテクニカルワークフローに依存しています。

* **[!UICONTROL 参照]**
テーブルの複製このワークフローは、キャンペーンのローカルデータベース(Postgres)とクラウドデータベース([!DNL Snowflake])に存在する必要がある組み込みテーブルの自動レプリケーションを実行します。1時間ごとに1日1回実行するようにスケジュールされます。 **lastModified**&#x200B;フィールドが存在する場合、レプリケーションは増分的に行われます。そうでない場合は、テーブル全体がレプリケートされます。 次のアレイ内のテーブルの順序は、レプリケーション・ワークフローで使用される順序です。
* **[!UICONTROL ステージング]**
データの複製このワークフローは、一元呼び出し用にステージングデータを複製します。1時間ごとに1日1回実行するようにスケジュールされます。
* **[!UICONTROL 直ちに FFDA をデプロイ]**\
   このワークフローは、Cloudデータベースへの即時のデプロイメントを実行します。
* **[!UICONTROL FFDAデータを]**
すぐに複製このワークフローは、特定の外部アカウントのXSデータを複製します。

これらのテクニカルワークフローは、キャンペーンエクスプローラーの&#x200B;**[!UICONTROL 管理/本番環境/テクニカルワークフロー/完全なFFDAレプリケーション]**&#x200B;ノードから利用できます。 **これらは変更できません。**

## データレプリケーション{#data-replication}

一部の組み込みテーブルは、上述の専用ワークフローを介してキャンペーンデータベースから[!DNL Snowflake] Cloudデータベースに複製されます。

レプリケーション・ポリシーは、テーブルのサイズに基づいています。 一部のテーブルはリアルタイムでレプリケートされ、別のテーブルは時間単位でレプリケートされます。 一部のテーブルは、他のテーブルが置き換えられると、増分更新を持ちます。

**関連トピック**

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html?lang=en#automating-with-workflows)で、ワークフローの使い始め方を学ぶ

:bulb:[このセクション](../dev/datamodel-best-practices.md#data-retention)のデータ保持期間へのアクセス

