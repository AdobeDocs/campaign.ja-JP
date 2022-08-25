---
product: campaign
title: グループ管理を使用したクエリ
description: グループ管理を使用したクエリの実行方法を学ぶ
feature: Query Editor
source-git-commit: 2b1dec4b9c456df4dfcebfe10d18e0ab01599275
workflow-type: tm+mt
source-wordcount: '307'
ht-degree: 100%

---

# グループ管理を使用したクエリ {#querying-using-grouping-management}



この例では、クエリを実行して、以前の配信でターゲットとされた回数が 30 回を超えるすべての E メールドメインを検索します。

* どのテーブルを選択する必要がありますか。

   受信者テーブル（nms:recipient）

* 出力列に選択するフィールドは何ですか。

   「E メールドメイン」と「プライマリキー」（カウントあり）

* データをグループ化する基準は何ですか。

   プライマリキーのカウントが 30 を超える E メールドメインを基準にします。この操作は、「**[!UICONTROL Group by + Having]**」オプションで実行されます。「**[!UICONTROL Group by + Having]**」では、データをグループ化し（「group by」）、グループ化した対象を選択（「having」）できます。

この例を作成するには、次の手順に従います。

1. **[!UICONTROL 汎用クエリエディター]**&#x200B;を開き、受信者テーブル（**nms:recipient**）を選択します。

   ![](assets/query_editor_02.png)

1. **[!UICONTROL 抽出するデータ]**&#x200B;ウィンドウで、「**[!UICONTROL E メールドメイン]**」フィールドおよび「**[!UICONTROL プライマリキー]**」フィールドを選択します。「**[!UICONTROL プライマリキー]**」フィールドでカウントを実行します。

   プライマリキーカウントについて詳しくは、こちらを参照してください。

1. 「**[!UICONTROL グループを処理（GROUP BY + HAVING）]**」ボックスをオンにします。

   ![](assets/query_editor_nveau_29.png)

1. **[!UICONTROL 並べ替え]**&#x200B;ウィンドウで、E メールドメインを降順で並べ替えます。そのためには、「**[!UICONTROL 降順ソート]**」列で「**[!UICONTROL はい]**」をオンにします。「**[!UICONTROL 次へ]**」をクリックします。

   ![](assets/query_editor_nveau_70.png)

1. **[!UICONTROL データのフィルター]**&#x200B;で、「**[!UICONTROL フィルター条件]**」を選択します。**[!UICONTROL ターゲット要素]**&#x200B;ウィンドウに移動し、「**[!UICONTROL 次へ]**」をクリックします。
1. **[!UICONTROL データのグループ化]**&#x200B;ウィンドウで、「**[!UICONTROL 追加]**」をクリックして「**[!UICONTROL E メールドメイン]**」を選択します。

   このデータのグループ化ウィンドウは、「**[!UICONTROL グループを処理（GROUP BY + HAVING）]**」ボックスをオンにした場合にのみ表示されます。

   ![](assets/query_editor_blocklist_04.png)

1. 結果で 30 回より多くターゲットとされた E メールドメインのみが返される必要があるので、**[!UICONTROL グループ化条件]**&#x200B;ウィンドウで 30 より大きいプライマリキーカウントを指定します。

   このウィンドウは、「**[!UICONTROL グループを管理（GROUP BY + HAVING）]**」ボックスをオンにした場合に表示されます。このボックスでは、グループの結果をフィルターします（HAVING）。

   ![](assets/query_editor_blocklist_05.png)

1. **[!UICONTROL データフォーマット]**&#x200B;ウィンドウで、「**[!UICONTROL 次へ]**」をクリックします。ここでは書式設定は必要ありません。
1. データのプレビューウィンドウで、「**[!UICONTROL データのプレビューを開始]**」をクリックします。ここでは、ターゲットとされた回数が 30 回を超える 3 つの異なる E メールドメインが返されます。

   ![](assets/query_editor_blocklist_06.png)
