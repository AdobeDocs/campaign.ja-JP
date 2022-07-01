---
title: Campaign v8 の既知の問題
description: Campaign の最新リリースの既知の問題
feature: Overview
role: Data Engineer
level: Beginner
hide: true
hidefromtoc: true
exl-id: 89a4ab6c-de8e-4408-97d2-8b8e574227f9
source-git-commit: cda523168525c24ec1c976850bc336f273276ac9
workflow-type: ht
source-wordcount: '401'
ht-degree: 100%

---

# 既知の問題{#known-issues}

このページでは、**最新のリリースである Campaign v8** で確認された既知の問題を一覧表示しています。また、Campaign v8 に伴う制限事項を[こちらのページ](ac-guardrails.md)に示しています。


>[!NOTE]
>
>アドビは、この既知の問題のリストを独自に公開します。これは、顧客からの報告数、重大度、利用可能な回避策の有無に基づいています。発生した問題が一覧にない場合は、その問題が、このページに公開する基準を満たしていないと考えられます。

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


## 「データソースを変更」アクティビティに関する問題 {#issue-2}

### 説明{#issue-2-desc}

Campaign **クエリ**&#x200B;および「**データソースを変更**」アクティビティを使用して Snowflake クラウドデータベースにデータを挿入する場合、データにバックスラッシュ文字が含まれているとプロセスが失敗します。ソース文字列はエスケープされず、データが Snowflake で正しく処理されません。

この問題は、文字列の末尾にバックスラッシュ文字が付いている場合にのみ発生します。例：`Barker\`。


### 再現手順{#issue-2-repro}

1. クライアントコンソールに接続し、ワークフローを作成します。
1. **クエリ**&#x200B;アクティビティを追加し、設定します。
1. 上記の特徴を持つデータを選択します。
1. 「**データソースを変更**」アクティビティを追加し、Snowflake クラウドデータベースを選択するよう設定します。
1. ワークフローを実行し、ワークフローのログでエラーを確認します。


### エラーメッセージ{#issue-2-error}

```sql
Error:
04/21/2022 4:01:58 PM     loading when an error is encountered, use other values such as 'SKIP_FILE' or 'CONTINUE' for the ON_ERROR option. For more information on loading options, please run 'info loading_data' in a SQL client. SQLState: 22000
04/21/2022 4:01:58 PM    ODB-240000 ODBC error: String '100110668547' is too long and would be truncated   File 'wkf1656797_21_1_3057430574#458516uploadPart0.chunk.gz', line 1, character 0   Row 90058, column "WKF1656797_21_1"["SCARRIER_ROUTE":13]   If you would like to continue
```

### 回避策{#issue-2-workaround}

回避策は、文字列の末尾にバックスラッシュ文字があるデータを除外するか、ソースファイルから削除することです。

<!--
As a workaround, export the files with double quotes around the problematic values (like `Barker\`) and include a file format option `FIELD_OPTIONALLY_ENCLOSED_BY = '"'`.
-->

### 内部参照{#issue-2-ref}

参照：NEO-45549


## データ読み込み（ファイル）アクティビティで、サーバーにファイルをアップロードできませんでした {#issue-3}

### 説明{#issue-3-desc}

**データ読み込み（ファイル）**&#x200B;アクティビティを使用して Campaign サーバーにファイルをアップロードする際、プロセスが 100％の状態で停止したまま終了しません。

### 再現手順{#issue-3-repro}

1. クライアントコンソールに接続し、ワークフローを作成します。
1. **データ読み込み（ファイル）**&#x200B;アクティビティを追加し、設定します。
1. 「**サーバーにアップロード**」オプションを選択します。
1. ローカルマシン上のファイルを選択し、
1. 「**アップロード**」をクリックします


### エラーメッセージ{#issue-3-error}

プロセスが終了しません。

### 回避策{#issue-3-workaround}

回避策は、古いクライアントコンソールを使用することです。これにより、サーバーにファイルをアップロードできるようになります。

Campaign の管理者は、Campaign v8.3.1 クライアントコンソールを[アドビのソフトウェア配布](https://experience.adobe.com/#/downloads/content/software-distribution/ja/campaign.html?1_group.propertyvalues.property=.%2Fjcr%3Acontent%2Fmetadata%2Fdc%3Aversion&amp;1_group.propertyvalues.operation=equals&amp;1_group.propertyvalues.0_values=target-version%3Acampaign%2F8&amp;orderby=%40jcr%3Acontent%2Fjcr%3AlastModified&amp;orderby.sort=desc&amp;layout=list&amp;p.offset=0&amp;p.limit=4){target=&quot;_blank&quot;}からダウンロードできます。

アドビのソフトウェア配布へのアクセス方法について詳しくは、[こちらのページ](https://experienceleague.adobe.com/docs/experience-cloud/software-distribution/home.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

クライアントコンソールのアップグレード方法について詳しくは、[こちらのページ](connect.md)を参照してください

### 内部参照{#issue-3-ref}

参照：NEO-47269
