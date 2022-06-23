---
title: Campaign v8 の既知の問題
description: 最新の Campaign リリースの既知の問題
feature: Overview
role: Data Engineer
level: Beginner
hide: true
hidefromtoc: true
source-git-commit: c803c13c6d433d2c6730f32f43209c8effab1fde
workflow-type: tm+mt
source-wordcount: '401'
ht-degree: 3%

---

# 既知の問題{#known-issues}

このページでは、 **最新の Campaign v8 リリース**. また、Campaign v8 に伴う制限事項を示します [このページ](known-limitations.md).


>[!NOTE]
>
>Adobeは、この既知の問題のリストを独自に公開します。 顧客レポートの数、重大度、回避策の可用性に基づきます。 発生した問題がリストに表示されない場合は、このページの公開条件に適合しない可能性があります。

<!--
## Change Data Source activity issue #1 {#issue-1}

### Description{#issue-1-desc}

The **Change Data Source** activity is failing when transfering data from Campaign local database to Snowflake cloud database. When switching directions, the activity can generate issues.

### Reproduction steps{#issue-1-repro}

1. Connect to the client console and create a workflow.
1. Add a **Query** activity and a **Change Data Source** activity.
1. Define a query on the **email**, which is a string.
1. Run the workflow and right-click the transition to view the population: the email records are displayed replaced by `****`.
1. Check the workflow logs: the **Change Data Source** activity interprets these records as numeric values.

### Error message{#issue-1-error}

```sql
04/13/2022 10:00:18 AM              Executing change data source 'Ok' (step 'Change Data Source')
04/13/2022 10:00:18 AM              Starting 1 connection(s) on pool 'nms:extAccount:ffda tractorsupply_mkt_stage8' (Snowflake, server='adobe-acc_tractorsupply_us_west_2_aws.snowflakecomputing.com', login='tractorsupply_stage8_MKT:tractorsupply_stage8')
04/13/2022 10:00:26 AM              ODB-240000 ODBC error: {*}Numeric value '{*}******{*}{{*}}' is not recognized\{*}   File 'wkf1285541_13_1_0_47504750#458318uploadPart0.chunk.gz', line 1, character 10140   Row 279, column "WKF1285541_13_1_0"["BICUST_ID":1]   If you would like to continue loading when a
04/13/2022 10:00:26 AM              n error is encountered, use other values such as 'SKIP_FILE' or 'CONTINUE' for the ON_ERROR option. For more information on loading options, please run 'info loading_data' in a SQL client. SQLState: 22018
04/13/2022 10:00:26 AM              WDB-200001 SQL statement 'COPY INTO wkf1285541_13_1_0 (SACTIVE, SADDRESS1, SADDRESS2, BICUST_ID, SEMAIL) FROM ( SELECT $1, $2, $3, $4, $5 FROM $$@BULK_wkf1285541_13_1_0$$) FILE_FORMAT = ( TYPE = CSV RECORD_DELIMITER = '\x02' FIELD_DELIMITER = '\x01' FIEL
04/13/2022 10:00:26 AM              D_OPTIONALLY_ENCLOSED_BY = 'NONE') ON_ERROR = ABORT_STATEMENT PURGE = TRUE' could not be executed.
```

### Workaround{#issue-1-workaround}

To have the data transfered from Snowflake cloud database to Campaign local database and back to Snowflake, you must use two different **Change Data Source** activities.

### Internal reference{#issue-1-ref}

Reference: NEO-45549 
-->


## データソースアクティビティの問題を変更 {#issue-2}

### 説明{#issue-2-desc}

Campaign を使用してSnowflakeクラウドデータベースにデータをインジェクトする場合 **クエリ** および **データソースを変更** アクティビティの場合、データにバックスラッシュ文字が含まれていると、プロセスは失敗します。 ソース文字列はエスケープされず、Snowflake時にデータが正しく処理されません。

この問題は、次のように、文字列の末尾にバックスラッシュが付いている場合にのみ発生します。 `Barker\`.


### 再生手順{#issue-2-repro}

1. クライアントコンソールに接続し、ワークフローを作成します。
1. を追加します。 **クエリ** アクティビティを開き、設定します。
1. 上記の特性を持つデータを選択します。
1. を追加します。 **データソースを変更** 「 」アクティビティを開き、設定してSnowflakeクラウドデータベースを選択します。
1. ワークフローを実行し、ワークフローログでエラーを確認します。


### エラーメッセージ{#issue-2-error}

```sql
Error:
04/21/2022 4:01:58 PM     loading when an error is encountered, use other values such as 'SKIP_FILE' or 'CONTINUE' for the ON_ERROR option. For more information on loading options, please run 'info loading_data' in a SQL client. SQLState: 22000
04/21/2022 4:01:58 PM    ODB-240000 ODBC error: String '100110668547' is too long and would be truncated   File 'wkf1656797_21_1_3057430574#458516uploadPart0.chunk.gz', line 1, character 0   Row 90058, column "WKF1656797_21_1"["SCARRIER_ROUTE":13]   If you would like to continue
```

### 回避策{#issue-2-workaround}

回避策として、文字列の末尾にバックスラッシュ文字が含まれるデータを除外するか、ソースファイルから削除します。

<!--
As a workaround, export the files with double quotes around the problematic values (like `Barker\`) and include a file format option `FIELD_OPTIONALLY_ENCLOSED_BY = '"'`.
-->

### 内部参照{#issue-2-ref}

参照：NEO-45549


## データの読み込み（ファイル）アクティビティが、サーバー上のファイルをアップロードできませんでした {#issue-3}

### 説明{#issue-3-desc}

を使用して Campaign サーバーにファイルをアップロードする際 **データ読み込み（ファイル）** 「 」アクティビティの場合、プロセスは 100%で停止しますが、終了しません。

### 再生手順{#issue-3-repro}

1. クライアントコンソールに接続し、ワークフローを作成します。
1. を追加します。 **データ読み込み（ファイル）** アクティビティを開き、設定します。
1. を選択します。 **サーバーにアップロード** オプション。
1. ローカルマシン上のファイルを選択し、
1. クリック **アップロード**


### エラーメッセージ{#issue-3-error}

プロセスは終わりません。

### 回避策{#issue-3-workaround}

回避策は、古いクライアントコンソールを使用することです。 その後、サーバーにファイルをアップロードできます。

Campaign 管理者は、Campaign v8.3.1 クライアントコンソールを [Adobeソフトウェア配布](https://experience.adobe.com/#/downloads/content/software-distribution/en/campaign.html?1_group.propertyvalues.property=.%2Fjcr%3Acontent%2Fmetadata%2Fdc%3Aversion&amp;1_group.propertyvalues.operation=equals&amp;1_group.propertyvalues.0_values=target-version%3Acampaign%2F8&amp;orderby=%40jcr%3Acontent%2OrderModifiedBy.sort.=desc&amp;layout=list&amp;p.offset=0&amp;p.limit=4){target=&quot;_blank&quot;}。

ソフトウェア配布にアクセスするAdobe [このページ](https://experienceleague.adobe.com/docs/experience-cloud/software-distribution/home.html?lang=ja){target=&quot;_blank&quot;}。

クライアントコンソールのアップグレード方法を説明します [このページ](connect.md)

### 内部参照{#issue-3-ref}

参照：NEO-47269