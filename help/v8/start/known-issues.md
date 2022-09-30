---
title: Campaign v8 の既知の問題
description: Campaign の最新リリースの既知の問題
feature: Overview
role: Data Engineer
level: Beginner
hide: true
hidefromtoc: true
exl-id: 89a4ab6c-de8e-4408-97d2-8b8e574227f9
source-git-commit: 2ce1ef1e935080a66452c31442f745891b9ab9b3
workflow-type: tm+mt
source-wordcount: '84'
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



## Change Data Source activity issue {#issue-2}

### Description{#issue-2-desc}

When injecting data into Snowflake cloud database with a Campaign **Query** and a **Change Data Source** activity, the process fails when a backslash character is present in the data. The source string is not escaped, and data is not processed correctly on Snowflake.

This issue only happens if the backslash character is at the end of string, for example: `Barker\`.


### Reproduction steps{#issue-2-repro}

1. Connect to the client console and create a workflow.
1. Add a **Query** activity and configure it.
1. Select data with the characteristics described above.
1. Add a **Change Data Source** activity and configure it to select Snowflake cloud database.
1. Run the workflow and check the workflow logs to see the error.


### Error message{#issue-2-error}

```sql
Error:
04/21/2022 4:01:58 PM     loading when an error is encountered, use other values such as 'SKIP_FILE' or 'CONTINUE' for the ON_ERROR option. For more information on loading options, please run 'info loading_data' in a SQL client. SQLState: 22000
04/21/2022 4:01:58 PM    ODB-240000 ODBC error: String '100110668547' is too long and would be truncated   File 'wkf1656797_21_1_3057430574#458516uploadPart0.chunk.gz', line 1, character 0   Row 90058, column "WKF1656797_21_1"["SCARRIER_ROUTE":13]   If you would like to continue
```

### Workaround{#issue-2-workaround}

Workaround is to exclude data containing backslash character at the end of string, or remove it from the source file.


### Internal reference{#issue-2-ref}

Reference: NEO-45549


## Data loading (file) activity failed to Upload file on server {#issue-3}

### Description{#issue-3-desc}

When uploading a file on Campaign server with a **Data loading (file)** activity, the process stops at 100% but never ends.

### Reproduction steps{#issue-3-repro}

1. Connect to the client console and create a workflow.
1. Add a **Data loading (file)** activity and configure it.
1. Select the **Upload on server** option.
1. Select the file on your local machine,
1. Click **Upload**


### Error message{#issue-3-error}

The process never ends.

### Workaround{#issue-3-workaround}

The workaround is to use an older client console. You will then be able to upload the file on the server.

As a Campaign administrator, you can download Campaign v8.3.1 client console in [Adobe Software Distribution](https://experience.adobe.com/#/downloads/content/software-distribution/en/campaign.html?1_group.propertyvalues.property=.%2Fjcr%3Acontent%2Fmetadata%2Fdc%3Aversion&1_group.propertyvalues.operation=equals&1_group.propertyvalues.0_values=target-version%3Acampaign%2F8&orderby=%40jcr%3Acontent%2Fjcr%3AlastModified&orderby.sort=desc&layout=list&p.offset=0&p.limit=4){target="_blank"}.

Learn how to access Adobe Software Distribution [in this page](https://experienceleague.adobe.com/docs/experience-cloud/software-distribution/home.html){target="_blank"}.

Learn how to upgrade your client console [in this page](connect.md)

### Internal reference{#issue-3-ref}

Reference: NEO-47269
-->
