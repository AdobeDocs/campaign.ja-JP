---
title: Campaign でのプロファイルオーディエンスの作成
description: リストを作成し、オーディエンスを構築する方法を説明します
feature: Audiences, Profiles
role: Data Engineer
level: Beginner
exl-id: 6fbe5616-7b8b-4504-988b-2bbbfd062548
source-git-commit: 67d08660431f02d2a18f39b3270cc7c7b62ed40e
workflow-type: tm+mt
source-wordcount: '888'
ht-degree: 33%

---

# リスト内のオーディエンスの作成{#create-segments}

キャンペーンリストを使用して、オーディエンスを作成および整理します。

リストは、配信アクションのターゲットにしたり、インポートまたは別のワークフローアクションの実行中に更新したりできる、連絡先の静的なセットです。 例えば、クエリを使用してデータベースから抽出した母集団をリストとして保存できます。

リストの作成と管理は、「**[!UICONTROL プロファイルとターゲット]**」タブの&#x200B;**[!UICONTROL リスト]**&#x200B;リンクを使用して実行します。これらのリストは、デフォルトのAdobe Campaignプロファイルテーブル (nms:recipient) に基づいています。 [詳細情報](../dev/datamodel.md#ootb-profiles.md)

![](assets/list-dashboard.png)

リストを作成するには、 **リストを更新** 」アクティビティを追加します。 このアクティビティは、結果の母集団をリストに保存します。 新しいリストを作成したり、既存のリストを更新したりする場合に使用します。 組み込みのプロファイルテーブル以外のタイプのデータを含むリストを作成するには、ワークフローを実行する必要があります。 例えば、訪問者テーブルでクエリを使用してからリストを更新することによって、訪問者リストを作成できます。[詳細情報](#create-a-list-wf)。

Adobe Campaignでのリスト管理について詳しくは、このビデオをご覧ください。

>[!VIDEO](https://video.tv.adobe.com/v/334909?quality=12)


## 連絡先のリストを作成 {#create-a-list-of-contacts}

連絡先のリストを作成するには、次の手順に従います。

1. 「**[!UICONTROL 作成]**」ボタンをクリックし、「**[!UICONTROL 新しいリスト]**」を選択します。

   ![](assets/new-list.png)

1. リスト作成ウィンドウの「**[!UICONTROL 編集]**」タブで情報を入力します。

   ![](assets/list-details.png)

   * 「**[!UICONTROL ラベル]**」フィールドにリスト名を入力し、必要に応じて内部名を変更します。
   * このリストの説明を入力します。
   * 有効期限を指定できます。この日付に達すると、リストはパージされ自動的に削除されます。


1. 「**[!UICONTROL コンテンツ]**」タブで「**[!UICONTROL 追加]**」をクリックし、リストに属するプロファイルを選択します。

   ![](assets/add-profiles-to-a-list.png)

   新しいプロファイルを作成し、このウィンドウから直接リストに追加するには、 **[!UICONTROL 作成]** アイコン プロファイルはデータベースに追加されます。

1. 「**[!UICONTROL 保存]**」をクリックしてリストを保存します。リストの概要にリストが追加されます。


## フィルター済み連絡先をリストに変換 {#convert-data-to-a-list}

プロファイルを選択し、リストに追加できます。 手順は次のとおりです。

1. Campaign エクスプローラーから、プロファイルを選択して右クリックします。

   これらのプロファイルは、特定の条件を満たすようにフィルタリングできます。

1. **[!UICONTROL アクション／リストに選択項目を関連付け...]** を選択します。

   ![](assets/add-selection-to-a-list.png)

1. 既存のリストを選択するか、新しいリストを作成して、 **[!UICONTROL 次へ]**.

   ![](assets/select-the-list.png)

1. 「**[!UICONTROL 開始]**」ボタンをクリックします。

   ![](assets/record-a-list.png)

を選択します。 **[!UICONTROL リストを再作成]** 」オプションを使用します。

「**[!UICONTROL データベースにこのジョブのトレースを保存しない]**」オプションをオフにした場合、このプロセスにリンクされた情報を保存する実行フォルダーを選択（または作成）できます。

ウィンドウの上部セクションで実行を監視できます。「**[!UICONTROL 停止]**」ボタンを使用してプロセスを停止できます。既に処理された連絡先がリストにリンクされます。

実行が完了したら、 **[!UICONTROL プロファイルとターゲット/リスト]** メニューで、リストを選択します。の **[!UICONTROL コンテンツ]** 「 」タブには、このリストにリンクされているプロファイルが表示されます。


## ワークフローでのリストの作成  {#create-a-list-wf}

以下を使用して、 **[!UICONTROL リスト更新]** 「 」アクティビティを使用して、リストを作成するか、母集団を受信者のリストに追加します。

次の例では、25 ～ 40 のすべての受信者のリストを作成します。

1. 選択 **[!UICONTROL プロファイルとターゲット]**、および **[!UICONTROL ターゲティングワークフロー]**&#x200B;をクリックし、 **[!UICONTROL 作成]** 」ボタンをクリックします。
1. このワークフローのラベル（例： 「25-40 連絡先」）を入力し、説明を追加して、 **[!UICONTROL 次へ]**.

   ![](assets/targeting-wf-sample.png)

1. 挿入 **[!UICONTROL クエリ]** 「 」アクティビティを使用してターゲット母集団を定義し、クエリを編集します。

   ![](assets/targeting-wf-edit-query.png)

1. 次のように、フィルター条件を定義します。

   ![](assets/targeting-wf-age-filter.png)

   ワークフローでクエリを作成する方法については、 [Campaign Classicv7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/query.html?lang=ja#creating-a-query){target=&quot;_blank&quot;}

1. このクエリのラベルを追加し、変更を保存します。
1. を追加します。 **[!UICONTROL リスト更新]** アクティビティを編集します。

   ![](assets/list-update-activity.png)

1. アクティビティのラベルを入力します。
1. を選択します。 **[!UICONTROL 必要に応じてリストを作成（名前を自動生成）]** オプションを使用します。
1. フォルダーを選択し、リストのラベルを入力します。
1. を選択します。 **[!UICONTROL ターゲティングディメンションのデータベース]** を使用してテーブルを保存します。
1. を **[!UICONTROL 存在する場合はリストをパージします（存在しない場合はリストに追加します）]** オプションをオンにすると、ターゲット条件に一致しない受信者が削除され、新しい受信者がリストに挿入されます。
1. また、「**[!UICONTROL 独自のテーブルを持つリストを作成または使用]**」オプションも選択した状態にしておきます。
1. 「**[!UICONTROL アウトバウンドトランジションを生成]**」オプションは選択を解除します。
1. クリック **[!UICONTROL Ok]**&#x200B;をクリックし、ワークフローを保存します。
1. ワークフローを開始します。

   一致する受信者のリストが作成されます。 このリストには、 **[!UICONTROL リスト]** ホームページのエントリ。

   ![](assets/access-new-list.png)

   ワークフローにスケジューラーを追加することで、このワークフローを繰り返しワークフローに設定できます。 詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/flow-control-activities/scheduler.html){target=&quot;_blank&quot;}を参照してください。

## リストからのプロファイルの削除 {#remove-a-profile-from-a-list}

リストからプロファイルを削除するには、リストを編集し、 **[!UICONTROL コンテンツ]** 「 」タブで、 **[!UICONTROL 削除]** アイコン

## プロファイルリストの削除 {#delete-a-list-of-profiles}

リストを削除するには、Campaign エクスプローラーからリストを参照し、選択して右クリックします。 選択 **[!UICONTROL 削除]**. 削除を確定するよう求める警告メッセージが表示されます。

>[!NOTE]
>
>リストを削除した場合、リストのプロファイルは影響を受けませんが、プロファイルのデータは更新されます。
