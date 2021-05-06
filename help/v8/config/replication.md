---
solution: Campaign Classic
product: campaign
title: テクニカルワークフローとデータ・レプリケーション
description: テクニカルワークフローとデータ・レプリケーション
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 7b145193-d4ae-47d0-b694-398c1e35eee4,df76e7ff-3b97-41be-abc2-640748680ff3
translation-type: tm+mt
source-git-commit: 369ddafcc64fa418a479ab03092d3475f1c811b2
workflow-type: tm+mt
source-wordcount: '559'
ht-degree: 3%

---

# テクニカルワークフローとデータ・レプリケーション

## テクニカルワークフロー

Adobe Campaignには組み込みテクニカルワークフローが付属しています。 テクニカルワークフローは、サーバーに基づいて定期的にスケジュールされたプロセスまたはジョブを実行します。

これらのワークフローは、データベースに対する保守操作を実行し、配信ログの追跡情報を利用し、定期的なキャンペーンを作成します。

:arrow_upper_right:テクニカルワークフローの完全なリストについては、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/advanced-management/about-technical-workflows.html?lang=en#overview)で詳しく説明しています

これらのテクニカルワークフローに加えて、キャンペーンv8は[データ複製](#data-replication)を管理するために、特定のテクニカルワークフローに依存しています。

* **[!UICONTROL 参照]**
テーブルの複製このワークフローは、キャンペーンのローカルデータベース(Postgres)およびクラウドデータベース([!DNL Snowflake])に存在する必要がある参照テーブルの自動レプリケーションを実行します。1時間ごとに1日1回実行するようにスケジュールされます。 **lastModified**&#x200B;フィールドが存在する場合、レプリケーションは増分的に行われます。そうでない場合は、テーブル全体がレプリケートされます。 次のアレイ内のテーブルの順序は、レプリケーション・ワークフローで使用される順序です。
* **[!UICONTROL ステージング]**
データの複製このワークフローは、一元呼び出し用にステージングデータを複製します。1時間ごとに1日1回実行するようにスケジュールされます。
* **[!UICONTROL 直ちに FFDA をデプロイ]**\
   このワークフローは、Cloudデータベースへの即時のデプロイメントを実行します。
* **[!UICONTROL FFDAデータを]**
すぐに複製このワークフローは、特定の外部アカウントのXSデータを複製します。

これらのテクニカルワークフローは、キャンペーンエクスプローラーの&#x200B;**[!UICONTROL 管理/本番環境/テクニカルワークフロー/完全なFFDAレプリケーション]**&#x200B;ノードから利用できます。

**こ追加れ？https://wiki.corp.adobe.com/display/neolane/Full+FDA+%3A%3A+Replication+strategy**


**関連トピック**

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html?lang=en#automating-with-workflows)で、ワークフローの使い始め方を学ぶ

:bulb:[このセクション](../dev/datamodel-best-practices.md#data-retention)のデータ保持期間へのアクセス


## データレプリケーション{#data-replication}

テーブルは、上述の専用ワークフローを介してキャンペーンデータベースから[!DNL Snowflake] Cloudデータベースに複製されます。

レプリケーション・ポリシーは、テーブルのサイズに基づいています。 一部のテーブルがレプリケートされます。 一部のテーブルはリアルタイムでレプリケートされ、別のテーブルは時間単位でレプリケートされます。 一部のテーブルは、他のテーブルが置き換えられると、増分更新を持ちます。

| 名前空間 | テーブル | ワークフロー複製 | リアルタイム・レプリケーション |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------- |
| **XTK** | xtk:enum<br>xtk:enumValue<br>xtk:enumAlias<br>xtk:folder<br>xtk:formRendering<br>xtk:operator<br>xtk:group<br>xtk:report<br>olap8/>xdimenop<br>xtk:olapMeasure<br>xtk:dictionaryString<br><br> | ○（増分） | はい |
| **XTK** | xtk:opsecurity<br>xtk:rights<br>xtk:operatorGroup<br>xtk:reportHistory<br>xtk:reportRights | はい（フル） | はい |
| **NMS** | nms:budget<br>nms:operation<br>nms:operation<br>nms:plan<br>nms:typology<br>nms:typology<br>nms:extAccount<br>nms:deliveryMapping<br>配信（即時レプリケーション）<br>:seedMember<br>nms:webApp<br>nms:trackingUrl （即時レプリケーション）<br>nms:service<br>nms:offerEnv<br>nms:offerCategory<br>nms:offerSpace<br>nms:オファー<br>nms:offerView<br>nms:受信者（増分？）<br>nms:<br>groupnms:<br>dlvExclusionnms:stock | ○（増分） | はい |
| **NMS** | nms:country<br>nms:localOrgUnit<br>nms:state<br>nms:suppressionAddress<br>nms:suppressionDomain<br>nms:design<br>nms:trackingUrlInfo<br>nms:webTrackingLog<br>nmsmobileApp<br>nms:budgetCategory<br>nms:costType<br>nms:costCenter<br>nms:costStructure<br>nms:stockLine<br>nms:expenseLine<br>cost:ms行 | はい（フル） | はい |
| **NMS** | nms:address<br>nms:userAgent<br>nms:userAgentReject<br>nms:userAgentStats<br>nms:broadLogMsg<br>nms:broadLog<br>nms:trackingLog<br>nms:deleliveryLog<br>nms:appSubscription<br>nms:proposition<br>nms:rcpGrpRel<br>nms:broadLogRcp<br>nms:excludeLogRcp<br>nms:trackingLogRcp<br>nms:propositionRcp<br>nms:localValidationRcp<br>nms:訪問者<br>nms:broadLogVisitor<br>nms:trackingLogVisitor<br>nms:propositiona19/>nms:webAppLogRcp<br>nms:appSubscriptionRcp<br>nms:broadLogAppSubRcp<br>nms:excludeLogAppSubRcp<br>nms:trackingLogAppSubRcp<br>nms:eventHisto<br>nms:broadLogEventHisto<br>nms:trackingLogEventHisto<br>nms:購読<br>nms:subHisto29/>nms:trackingStats (Snowflakeの使用のみ)<br>nms:tmpBroadcast (Snowflakeの使用のみ)<br>nms:tmpBroadcastExclusion (Snowflakeの使用のみ)<br>nms:tmpBroadcastPaper (Snowflakeの使用のみ)<br><br> | いいえ | いいえ |

