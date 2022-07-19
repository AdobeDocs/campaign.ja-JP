---
title: データソースを変更
description: 「データソースを変更」アクティビティの詳細を説明します
feature: Workflows, Data Management, Federated Data Access
source-git-commit: 2b1dec4b9c456df4dfcebfe10d18e0ab01599275
workflow-type: tm+mt
source-wordcount: '283'
ht-degree: 19%

---

# データソースを変更 {#change-data-source}

以下を使用： **[!UICONTROL データソースを変更]** アクティビティを使用して [ワークフロー作業用テーブル](use-workflow-data.md#workflow-temporary-work-table). このアクティビティでは、Federated Data Access(FDA)、Campaign Cloud データベース (FFDA)、Campaign Local データベースなど、様々なデータソースをまたいで、より柔軟にデータを管理できます。

ワークフロー **[!UICONTROL 作業用テーブル]** は、データを処理し、ワークフローアクティビティと共有するために使用されます。

デフォルトでは、 **[!UICONTROL 作業用テーブル]** が、クエリ対象のデータのソースと同じデータベース内に作成されている。
例えば、 **[!UICONTROL 受信者]** Cloud データベースに格納されたテーブルを使用して、ワークフローによって **[!UICONTROL 作業用テーブル]** を同じ Cloud データベース上に置きます。

の使用 **[!UICONTROL データソースを変更]** アクティビティを使用して、 **[!UICONTROL 作業用テーブル]**.

なお、 **[!UICONTROL データソースを変更]** アクティビティの実行を続行するには、クラウドデータベースに戻す必要があります。

次の手順で **[!UICONTROL データソースを変更]** アクティビティには、次の要件を満たす必要があります。

1. ワークフローを作成します。

1. 「**[!UICONTROL クエリ]**」アクティビティでターゲット受信者にクエリを実行します。

   「**[!UICONTROL クエリ]**」アクティビティについて詳しくは、[このページ](query.md#create-a-query)を参照してください。

1. を追加します。 **[!UICONTROL データソースを変更]** アクティビティ。

   ![](assets/change-data-source.png)

1. の **[!UICONTROL データソースを変更]** 選択するアクティビティ **[!UICONTROL デフォルトのデータソース]**.

   クエリの結果が格納される作業用テーブルが、デフォルトの Campaign ローカルデータベースに移動されます。

   ![](assets/change-data-source_2.png)

1. を追加します。 **[!UICONTROL JavaScript コード]** 「 」アクティビティを使用して、作業用テーブルに対して単一の操作を実行します。

   詳しくは、 **[!UICONTROL JavaScript コード]** アクティビティについては、 [このページ](sql-code-and-javascript-code.md#javascript-code).

1. 別の「**[!UICONTROL データソースを変更]**」アクティビティを追加して、クラウドデータベースに戻ります。

1. このアクティビティを編集し、 **[!UICONTROL アクティブな FDA 外部アカウント]**、および **[!UICONTROL 外部データベース]** 外部アカウント。

   ![](assets/change-data-source_3.png)

1. これで、ワークフローを開始できます。
