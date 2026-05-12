---
product: campaign
title: SQL データ管理
description: SQL データ管理ワークフローアクティビティの詳細を説明します
feature: Workflows
Role: User
level: Experienced
version: Campaign v8, Campaign Classic v7
exl-id: a1e08d57-0387-4802-b447-f6d9ad87072a
TQID: https://experienceleague.adobe.com/aQKYDkFnBDT-N-fFTRg8ggvxfjKOKBgE9dcuuh7L28k
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: a658c786-869b-4194-a780-2594d663adda
topic_v2: id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 450
ht-degree: 81%

---

# SQL データ管理{#sql-data-management}

「**SQL データ管理**」アクティビティでは、独自の SQL スクリプトを記述して、ワークテーブルを作成および設定する独自の SQL クエリを記述できます。

## 前提条件 {#prerequisites}

アクティビティを設定する前に、以下の前提条件を満たしていることを確認してください。

* このアクティビティは、リモートデータソースに対してのみ使用できます。
* アウトバウンドスキーマがデータベースに存在し、FDA データベースにリンクされている必要があります。

## 重要な注意事項 {#important-notes}

8.9.1以降、**[!UICONTROL SQL コード]**&#x200B;および&#x200B;**[!UICONTROL SQL データ管理]**&#x200B;のワークフローアクティビティが改善され、Campaignからカスタム SQLを実行する際に、PostgreSQL データベースをより適切に保護し、ワークフローをスムーズに実行できるようになりました。

エラーが発生した場合は、次の2つの解決策を使用できます。

* 解決策1 - `XtkSecurity_FeatureFlag_SqlSensitive`
* 解決策2 - `XtkSecurity_SqlSensitive_Methods`

詳細とベストプラクティスについては、[SQL コード ](sql-code-and-javascript-code.md#important-notes)を参照してください。

## 「SQL データ管理」アクティビティの設定 {#configuring-the-sql-data-management-activity}

1. アクティビティの「**[!UICONTROL ラベル]**」を指定します。
1. 使用する&#x200B;**[!UICONTROL 外部アカウント]**&#x200B;を選択し、この外部アカウントにリンクする&#x200B;**[!UICONTROL アウトバウンドスキーマ]**&#x200B;を選択します。

   >[!CAUTION]
   >
   >アウトバウンドスキーマは固定されており、編集することはできません。

1. SQL スクリプトを追加します。

   >[!CAUTION]
   >
   >SQL スクリプトが機能し、その参照（フィールド名など）が正しいかどうかを確認するのは、SQL スクリプトライターの責任です。 Outbound スキーマに従います。

   既存の SQL コードを読み込む場合は、「**[!UICONTROL データベースに格納されているエンティティに SQL スクリプトを含める]**」オプションを選択します。 **[!UICONTROL 管理]**／**[!UICONTROL 設定]**／**[!UICONTROL SQL スクリプト]**&#x200B;メニューで SQL スクリプトを作成し、格納する必要があります。

   または、専用の領域に SQL スクリプトを入力するか、コピーして貼り付けます。

   ![](assets/sql_datamanagement.png)

   このアクティビティでは、スクリプト内で次の変数を使用できます。

   * **activity.tableName**：アウトバウンドワークテーブルの SQL 名
   * **task.incomingTransitionByName(&#39;name&#39;).tableName**：使用する受信トランジションによって実行されるワークテーブルの SQL 名（トランジションは名前で識別されます）

     >[!NOTE]
     >
     >(&#39;name&#39;) 値は、トランジションプロパティの「**[!UICONTROL 名前]**」フィールドに対応しています。

1. アウトバウンドワークテーブルを作成するコマンドが SQL スクリプトに既に含まれている場合は、「**[!UICONTROL ワークテーブルを自動作成]**」オプションの選択を解除します。 選択を解除しない場合、ワークフローが実行されるとワークテーブルが自動的に作成されます。
1. 「**[!UICONTROL OK]**」をクリックして、アクティビティの設定を確定します。

これでアクティビティが設定され、 ワークフローで実行する準備が整いました。

>[!CAUTION]
>
>アクティビティ実行後のアウトバウンドトランジションレコード数は単なる目安です。 SQL スクリプトの複雑さのレベルによって異なる場合があります。
>  
>アクティビティを再開すると、実行ステータスに関係なく、スクリプト全体が最初から実行されます。

## SQL スクリプトのサンプル {#sql-script-samples}

>[!NOTE]
>
>この節にあるスクリプトのサンプルは、PostgreSQL で実行することを想定しています。

以下のスクリプトは、ワークテーブルを作成し、この同じワークテーブルにデータを挿入します。

```
CREATE UNLOGGED TABLE <%= activity.tableName %> (
  iRecipientId INTEGER DEFAULT 0,
  sFirstName VARCHAR(100),
  sMiddleName VARCHAR(100),
  sLastName VARCHAR(100),
  sEmail VARCHAR(100)
);

INSERT INTO <%= activity.tableName %>
SELECT iRecipientId, sFirstName, sMiddleName, sLastName, sEmail
FROM nmsRecipient
GROUP BY iRecipientId, sFirstName, sMiddleName, sLastName, sEmail;
```

以下のスクリプトは、CTAS 操作（CREATE TABLE AS SELECT）を実行し、ワークテーブルのインデックスを作成します。

```
CREATE TABLE <%= activity.tableName %>
AS SELECT iRecipientId, sEmail, sFirstName, sLastName, sMiddleName
FROM nmsRecipient
WHERE sEmail IS NOT NULL
GROUP BY iRecipientId, sEmail, sFirstName, sLastName, sMiddleName;

CREATE INDEX ON <%= activity.tableName %> (sEmail);

ANALYZE <%= activity.tableName %> (sEmail);
```

以下のスクリプトは、2 つのワークテーブルを結合します。

```
CREATE TABLE <%= activity.tableName %>
AS SELECT i1.sFirstName, i1.sLastName, i2.sEmail
FROM <%= task.incomingTransitionByName('input1').tableName %> i1
JOIN <%= task.incomingTransitionByName('input2').tableName %> i2 ON (i1.id = i2.id)
```
