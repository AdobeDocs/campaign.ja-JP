---
title: Campaign v8 の既知の問題
description: 最新の Campaign リリースの既知の問題
feature: Overview
role: Data Engineer
level: Beginner
hide: true
hidefromtoc: true
source-git-commit: 0d1d20f9692ffa7b7ea7a8fb1161ebd19f533bab
workflow-type: tm+mt
source-wordcount: '449'
ht-degree: 3%

---

# 既知の問題{#known-issues}

このページでは、 **最新の Campaign v8 リリース**. また、Campaign v8 に伴う制限事項を示します [このページ](known-limitations.md).


>[!NOTE]
>
>Adobeは、この既知の問題のリストを独自に公開します。 顧客レポートの数、重大度、回避策の可用性に基づきます。 発生した問題がリストに表示されない場合は、このページの公開条件に適合しない可能性があります。

## データソースアクティビティの変更の問題#1 {#issue-1}

### 説明{#issue-1-desc}

この **データソースを変更** Campaign ローカルデータベースから Campaign クラウドデータベースにデータを転送すると、Snowflakeが失敗する。 方向を切り替えると、アクティビティで問題が発生する場合があります。

### 再生手順{#issue-1-repro}

1. クライアントコンソールに接続し、ワークフローを作成します。
1. を追加します。 **クエリ** アクティビティと **データソースを変更** アクティビティ。
1. クエリを **電子メール**：文字列です。
1. ワークフローを実行し、トランジションを右クリックして、母集団を表示します。電子メールレコードは、 `****`.
1. ワークフローログを確認します。の **データソースを変更** アクティビティは、これらのレコードを数値として解釈します。

### エラーメッセージ{#issue-1-error}

```sql
04/13/2022 10:00:18 AM              Executing change data source 'Ok' (step 'Change Data Source')
04/13/2022 10:00:18 AM              Starting 1 connection(s) on pool 'nms:extAccount:ffda tractorsupply_mkt_stage8' (Snowflake, server='adobe-acc_tractorsupply_us_west_2_aws.snowflakecomputing.com', login='tractorsupply_stage8_MKT:tractorsupply_stage8')
04/13/2022 10:00:26 AM              ODB-240000 ODBC error: {*}Numeric value '{*}******{*}{{*}}' is not recognized\{*}   File 'wkf1285541_13_1_0_47504750#458318uploadPart0.chunk.gz', line 1, character 10140   Row 279, column "WKF1285541_13_1_0"["BICUST_ID":1]   If you would like to continue loading when a
04/13/2022 10:00:26 AM              n error is encountered, use other values such as 'SKIP_FILE' or 'CONTINUE' for the ON_ERROR option. For more information on loading options, please run 'info loading_data' in a SQL client. SQLState: 22018
04/13/2022 10:00:26 AM              WDB-200001 SQL statement 'COPY INTO wkf1285541_13_1_0 (SACTIVE, SADDRESS1, SADDRESS2, BICUST_ID, SEMAIL) FROM ( SELECT $1, $2, $3, $4, $5 FROM $$@BULK_wkf1285541_13_1_0$$) FILE_FORMAT = ( TYPE = CSV RECORD_DELIMITER = '\x02' FIELD_DELIMITER = '\x01' FIEL
04/13/2022 10:00:26 AM              D_OPTIONALLY_ENCLOSED_BY = 'NONE') ON_ERROR = ABORT_STATEMENT PURGE = TRUE' could not be executed.
```

### 回避策{#issue-1-workaround}

データをSnowflakeクラウドデータベースから Campaign ローカルSnowflakeに転送し、データをデータベースに戻すには、2 つの異なる **データソースを変更** アクティビティ。

### 内部参照{#issue-1-ref}

参照：NEO-45549



## データソースアクティビティの変更の問題#2 {#issue-2}

### 説明{#issue-2-desc}

Campaign を使用してSnowflakeクラウドデータベースにデータをインジェクトする場合 **クエリ** および **データソースを変更** アクティビティの場合、データにバックスラッシュ文字が含まれていると、プロセスは失敗します。 ソース文字列はエスケープされず、Snowflake時にデータが正しく処理されません。

この問題は、文字列の末尾にバックスラッシュが付いている場合にのみ発生します。例： `Barker\`.


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

回避策として、問題のある値 ( `Barker\`) および「ファイル形式を含める」オプション `FIELD_OPTIONALLY_ENCLOSED_BY = '"'`.

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

サーバーにファイルをアップロードするには、古いクライアントコンソールを使用する必要があります。

### 内部参照{#issue-3-ref}

参照：NEO-47269