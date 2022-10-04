---
title: Campaign v8 の既知の問題
description: Campaign の最新リリースの既知の問題
feature: Overview
role: Data Engineer
level: Beginner
hide: true
hidefromtoc: true
exl-id: 89a4ab6c-de8e-4408-97d2-8b8e574227f9
source-git-commit: b9dd9e76be14067740426b6cddfa2c5fcddf3158
workflow-type: tm+mt
source-wordcount: '403'
ht-degree: 97%

---

# 既知の問題{#known-issues}

このページでは、 **最新の Campaign v8 リリース**. また、Campaign v8 に伴う制限事項を[こちらのページ](ac-guardrails.md)に示しています。


>[!NOTE]
>
>アドビは、この既知の問題のリストを独自に公開します。これは、顧客からの報告数、重大度、利用可能な回避策の有無に基づいています。発生した問題が一覧にない場合は、その問題が、このページに公開する基準を満たしていないと考えられます。

## Campaign v8.3.8{#8.3-issues}

### 「データソースを変更」アクティビティに関する問題 {#issue-2}

#### 説明{#issue-2-desc}

Campaign **クエリ**&#x200B;および「**データソースを変更**」アクティビティを使用して Snowflake クラウドデータベースにデータを挿入する場合、データにバックスラッシュ文字が含まれているとプロセスが失敗します。ソース文字列はエスケープされず、データが Snowflake で正しく処理されません。

この問題は、文字列の末尾にバックスラッシュ文字が付いている場合にのみ発生します。例：`Barker\`。


#### 再現手順{#issue-2-repro}

1. クライアントコンソールに接続し、ワークフローを作成します。
1. **クエリ**&#x200B;アクティビティを追加し、設定します。
1. 上記の特徴を持つデータを選択します。
1. 「**データソースを変更**」アクティビティを追加し、Snowflake クラウドデータベースを選択するよう設定します。
1. ワークフローを実行し、ワークフローのログでエラーを確認します。


#### エラーメッセージ{#issue-2-error}

```sql
Error:
04/21/2022 4:01:58 PM     loading when an error is encountered, use other values such as 'SKIP_FILE' or 'CONTINUE' for the ON_ERROR option. For more information on loading options, please run 'info loading_data' in a SQL client. SQLState: 22000
04/21/2022 4:01:58 PM    ODB-240000 ODBC error: String '100110668547' is too long and would be truncated   File 'wkf1656797_21_1_3057430574#458516uploadPart0.chunk.gz', line 1, character 0   Row 90058, column "WKF1656797_21_1"["SCARRIER_ROUTE":13]   If you would like to continue
```

#### 回避策{#issue-2-workaround}

回避策は、文字列の末尾にバックスラッシュ文字があるデータを除外するか、ソースファイルから削除することです。


#### 内部参照{#issue-2-ref}

参照：NEO-45549


### データ読み込み（ファイル）アクティビティで、サーバーにファイルをアップロードできませんでした {#issue-3}

#### 説明{#issue-3-desc}

**データ読み込み（ファイル）**&#x200B;アクティビティを使用して Campaign サーバーにファイルをアップロードする際、プロセスが 100％の状態で停止したまま終了しません。

#### 再現手順{#issue-3-repro}

1. クライアントコンソールに接続し、ワークフローを作成します。
1. **データ読み込み（ファイル）**&#x200B;アクティビティを追加し、設定します。
1. 「**サーバーにアップロード**」オプションを選択します。
1. ローカルマシン上のファイルを選択し、
1. 「**アップロード**」をクリックします


#### エラーメッセージ{#issue-3-error}

プロセスが終了しません。

#### 回避策{#issue-3-workaround}

回避策は、古いクライアントコンソールを使用することです。これにより、サーバーにファイルをアップロードできるようになります。

Campaign の管理者は、Campaign v8.3.1 クライアントコンソールを[アドビのソフトウェア配布](https://experience.adobe.com/#/downloads/content/software-distribution/ja/campaign.html?1_group.propertyvalues.property=.%2Fjcr%3Acontent%2Fmetadata%2Fdc%3Aversion&amp;1_group.propertyvalues.operation=equals&amp;1_group.propertyvalues.0_values=target-version%3Acampaign%2F8&amp;orderby=%40jcr%3Acontent%2Fjcr%3AlastModified&amp;orderby.sort=desc&amp;layout=list&amp;p.offset=0&amp;p.limit=4){target=&quot;_blank&quot;}からダウンロードできます。

アドビのソフトウェア配布へのアクセス方法について詳しくは、[こちらのページ](https://experienceleague.adobe.com/docs/experience-cloud/software-distribution/home.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

クライアントコンソールのアップグレード方法について詳しくは、[こちらのページ](connect.md)を参照してください

#### 内部参照{#issue-3-ref}

参照：NEO-47269