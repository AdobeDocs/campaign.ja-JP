---
title: データソースを変更
description: 「データソースを変更」アクティビティの詳細を説明します
feature: Workflows, Data Management, Federated Data Access
role: User
version: Campaign v8, Campaign Classic v7
exl-id: ca7eca9d-9112-4ea1-9a0c-a24cf6a978e6
TQID: https://experienceleague.adobe.com/jpyolWAkavJVJeUJzIP9-vHt17Z20oGKZ6sG99ahQE0
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 355
ht-degree: 100%

---

# データソースを変更 {#change-data-source}

**[!UICONTROL データソースを変更]**&#x200B;アクティビティを使用すると、[ワークフローのワークテーブル](use-workflow-data.md#workflow-temporary-work-table)のデータソースを変更できます。 このアクティビティでは、Federated Data Access（FDA）、Campaign Cloud データベース（FFDA）、Campaign ローカルデータベースなどの様々なデータソースを対象に、より柔軟にデータを管理できます。

ワークフローの&#x200B;**[!UICONTROL ワークテーブル]**&#x200B;を使用すると、データを処理し、ワークフローアクティビティと共有することができます。

デフォルトでは、**[!UICONTROL ワークテーブル]**は、クエリ対象のデータのソースと同じデータベースに作成されます。
例えば、クラウドデータベースに格納された**[!UICONTROL 受信者]**&#x200B;テーブルに対してクエリを実行する場合、同じクラウドデータベースにワークフローの&#x200B;**[!UICONTROL ワークテーブル]**&#x200B;が作成されます。

**[!UICONTROL データソースを変更]**&#x200B;アクティビティを使用すると、**[!UICONTROL ワークテーブル]**&#x200B;に別のデータソースを使用できます。

なお、**[!UICONTROL データソースを変更]**&#x200B;アクティビティを使用する場合、ワークフローの実行を続行するには、クラウドデータベースに切り替える必要があります。

>[!IMPORTANT]
>
>「**[!UICONTROL ディメンションを変更]**」アクティビティと「**[!UICONTROL データソースを変更]**」アクティビティを 1 つの行に追加しないでください。 両方のアクティビティを連続して使用する必要がある場合は、これらの間に「**[!UICONTROL エンリッチメント]**」アクティビティを含める必要があります。 これにより、適切な実行を確保し、潜在的な競合やエラーを防ぎまます。

>[!NOTE]
>
>**データソースを変更**&#x200B;アクティビティは、1 回の実行で最大 100 万個のレコードを処理できます。 この制限を増やす必要がある場合は、アドビ担当者にお問い合わせください。

**[!UICONTROL データソースを変更]**&#x200B;アクティビティを使用するには、次の手順に従います。

1. ワークフローを作成します。

1. 「**[!UICONTROL クエリ]**」アクティビティでターゲット受信者にクエリを実行します。

   「**[!UICONTROL クエリ]**」アクティビティについて詳しくは、[このページ](query.md#create-a-query)を参照してください。

1. **[!UICONTROL データソースを変更]**&#x200B;アクティビティを追加します。

   ![](assets/change-data-source.png)

1. **[!UICONTROL データソースを変更]**&#x200B;アクティビティを編集して、「**[!UICONTROL デフォルトのデータソース]**」を選択します。

   クエリの結果を含んだワークテーブルが、デフォルトの Campaign ローカルデータベースに移動されます。

   ![](assets/change-data-source_2.png)

1. **[!UICONTROL JavaScript コード]**&#x200B;アクティビティを追加して、ワークテーブルに対して単一操作を実行します。

   **[!UICONTROL JavaScript コード]**&#x200B;アクティビティについて詳しくは、[このページ](sql-code-and-javascript-code.md#javascript-code)を参照してください。

1. 別の&#x200B;**[!UICONTROL データソースを変更]**&#x200B;アクティビティを追加して、クラウドデータベースに戻ります。

1. このアクティビティを編集し、「**[!UICONTROL アクティブ FDA 外部アカウント]**」および対応する&#x200B;**[!UICONTROL 外部データベース]**&#x200B;外部アカウントを選択します。

   ![](assets/change-data-source_3.png)

1. これで、ワークフローを開始できます。
