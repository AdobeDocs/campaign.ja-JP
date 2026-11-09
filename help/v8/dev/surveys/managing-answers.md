---
product: campaign
title: 回答の管理
description: 調査の回答を管理する方法を説明します
feature: Surveys
version: Campaign v8, Campaign Classic v7
exl-id: 0b5dc602-e16f-4bf1-bd8f-352e0bc78996
TQID: 'https://experienceleague.adobe.com/-xjK3nxUc4Lz-mWyVoUbbIJ8HQvyLRInYk-w8zYLYE4'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
  - id: 71b1c383-45b9-57e0-b8cd-ea2e98a01a26
    internal-label: Surveys
subfeature_v2:
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
source-git-commit: aa436bfd174075f7ed3e144ea0b16832b6b811ff
workflow-type: tm+mt
source-wordcount: '922'
ht-degree: 99%
---
# 回答の管理{#managing-answers}

>[!AVAILABILITY]
>
>調査は、[Campaign FFDA デプロイメント ](../../architecture/enterprise-deployment.md)では利用できません。



## 収集した回答の保存 {#storing-collected-answers}

Adobe Campaign のすべての Web フォームで共通の標準ストレージモード（データベースフィールドおよびローカル変数）に加えて、調査では、アーカイブされたフィールドを使用したデータモデルの動的な拡張が可能です。

>[!CAUTION]
>
>このオプションは、**調査**&#x200B;タイプの Web アプリケーションでのみ使用できます。 他のタイプの Web フォームには提供されません。

### アーカイブされたフィールドへの保存 {#storing-in-an-archived-field}

調査で提供された回答を保存するための新しいストレージスペースを追加することで、データテンプレートを簡単に拡張できます。 これをおこなうには、入力フィールドを作成する際に、「**[!UICONTROL 質問に対する回答を保存]**」オプションを選択します。 「**[!UICONTROL 新しいフィールド]**」リンクをクリックして、プロパティを指定します。

![](assets/s_ncs_admin_survey_new_space.png)

フィールドのラベルと名前を入力し、フィールドのタイプ（テキスト、ブール値、整数または 10 進数、日付など）を選択します。

選択したフィールドのタイプは、回答がユーザーによって入力される際の、データの制御に作用します。 **テキスト**&#x200B;フィールドの場合、制約（大文字と小文字の区別、書式）を追加したり、既存の列挙にリンクを追加したりして、強制的に選択させることができます。

制約を追加するには、ドロップダウンリストから選択します。 2 つのタイプの制約があります。

1. 大文字と小文字

   入力された情報は、すべて大文字、すべて小文字、または先頭文字のみ大文字の形式でフィールドに格納できます。 この制約では、ユーザーは選択した形式でデータを入力する必要はありませんが、フィールドに入力されたコンテンツは、保存時に変換されます。

1. データフォーマット

このフィールドがリストで使用されると、列挙の値は、値のリストの上にある&#x200B;**[!UICONTROL データベースからの値のリストを初期化]**&#x200B;リンクを使用して、値のテーブルで自動的に取得できます。

例えば、ユーザーが母国語を選択するためのドロップダウンリストを作成することができます。 対応するアーカイブされたフィールドは、言語のリストを含む&#x200B;**言語**&#x200B;の列挙と関連付けることができます。

![](assets/s_ncs_admin_survey_database_values_2b.png)

フィールドの右側にある&#x200B;**[!UICONTROL リンクを編集]**&#x200B;アイコンを使用すると、この列挙のコンテンツを編集できます。

![](assets/s_ncs_admin_survey_database_values_2c.png)

フィールドの「**[!UICONTROL 一般]**」タブで、「**[!UICONTROL データベースからの値のリストを初期化]**」リンクを使用すると、提供されるラベルのリストを自動的に入力できます。

![](assets/s_ncs_admin_survey_database_values_2.png)

**例**：受信者の契約を 1 つのフィールドに格納します。

異なるタイプの契約を 1 つのフィールドに格納するには、**[!UICONTROL テキスト]**&#x200B;入力フィールドを作成し「**[!UICONTROL 質問に対する回答を保存]**」オプションを選択します。

「**[!UICONTROL 新しいフィールド]**」リンクをクリックして、フィールドプロパティを入力します。 「**[!UICONTROL 複数値]**」オプションを選択して、複数の値の格納を有効にします。

![](assets/s_ncs_admin_survey_storage_multi_ex1.png)

他の契約用の入力フィールドを作成し、同じアーカイブされたフィールドにデータを格納します。

![](assets/s_ncs_admin_survey_storage_multi_ex2.png)

ユーザーが調査を承認すると、その回答が「**[!UICONTROL 契約]**」フィールドに格納されます。

この例では、次の回答が格納されます。

![](assets/s_ncs_admin_survey_storage_multi_ex3.png)

回答者のプロファイルには、入力された 4 つの契約が含まれます。

それらは、関連する列を表示することで、調査の「**[!UICONTROL 回答]**」タブで表示できます。

![](assets/s_ncs_admin_survey_storage_multi_ex4.png)

また、回答に基づいて受信者をフィルターして、関心のあるユーザーのみを表示できます。 これをおこなうには、ターゲティングワークフローを作成し、「**[!UICONTROL 調査の回答]**」ボックスを使用します。

![](assets/s_ncs_admin_survey_read_responses_wf.png)

復元するプロファイルに基づいてクエリを作成します。 次の例では、クエリによって、A タイプの契約を含む、少なくとも 2 つの契約のあるプロファイルを選択できます。

![](assets/s_ncs_admin_survey_read_responses_edit.png)

各フォームについて、提供された回答は、フィールドまたはラベルで利用できます。 アーカイブされたフィールドに格納された契約に対して、次の構文を使用します。

```
<%= ctx.webAppLogRcpData.name of the archived field %
```

>[!NOTE]
>
>別のタイプのフィールドの場合の構文について詳しくは、[この節](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/data/query/query-editor){target="_blank"}（Campaign v8 ドキュメント）を参照してください。

### ストレージ設定 {#storage-settings}

調査の回答を XML 形式でアーカイブできます。 これにより、収集した回答の生のコピーを保存でき、項目別リストのデータが過度に標準化される場合に役に立ちます。 [詳細情報](publish-track-and-use-collected-data.md#standardizing-data)

>[!CAUTION]
>
>生の回答をアーカイブすると、必要なストレージスペースに影響します。 このオプションは注意して使用してください。

手順は次のとおりです。

* 「**[!UICONTROL 編集]**」タブの「**[!UICONTROL プロパティ]**」ボタンをクリックして、調査プロパティを編集します。
* 「**[!UICONTROL 詳細設定パラメーター]**」リンクをクリックして、「**[!UICONTROL 生の回答のコピーを保存]**」オプションをチェックします。

![](assets/s_ncs_admin_survey_xml_archive_option.png)

すべての調査に対して、デフォルトで有効にできます（このオプションは、調査がパブリッシュされると適用されます）。 これをおこなうには、次に示すように、**[!UICONTROL NmsWebApp_XmlBackup]** オプションを作成して、それに値 &quot;**[!UICONTROL 1]**&quot; を割り当てます。

![](assets/s_ncs_admin_survey_xml_global_option.png)

## スコア管理 {#score-management}

フォームのページで提供されたオプションにスコアを割り当てることができます。 スコアは、非公開の質問（チェックボックス、ドロップダウンリストからの値、購読など）にのみリンクされていることがあります。

![](assets/s_ncs_admin_survey_score_create.png)

スコアは、ページが確認されると（つまり、ユーザーが「**[!UICONTROL 次へ]**」または「**[!UICONTROL 完了]**」ボタンをクリックすると）、サーバー側に蓄積および保存されます。

>[!NOTE]
>
>正または負、整数または非整数の値を使用できます。

スコアは、テストまたはスクリプトで使用できます。

>[!CAUTION]
>
>スコアは、同じページにあるフィールドの表示条件には使用できません。 ただし、後続のページでは使用できます。

* スコアをテストで使用するには、次に示すように、テストの計算式の「**[!UICONTROL スコア]**」フィールドを使用します。

  ![](assets/s_ncs_admin_survey_score_in_a_test.png)

* スコアをスクリプトで使用できます。

**例**：スコアを計算して、次のページの表示の条件として使用します。

* 調査で、次のページを使用すると、ドロップダウンリストで選択した値に応じて、異なるスコアをユーザーに割り当てることができます。

  ![](assets/s_ncs_admin_survey_score_exa.png)

* 選択したオプションに応じて、このスコアを 2 番目の値と組み合わせることができます。

  ![](assets/s_ncs_admin_survey_score_exb.png)

* ユーザーが「**[!UICONTROL 次へ]**」ボタンをクリックすると、2 つの値が加算されます。

  ![](assets/s_ncs_admin_survey_score_exe.png)

* 条件は、スコアに応じて、表示されるページに適用できます。 これは、次のように設定します。

  ![](assets/s_ncs_admin_survey_score_exd.png)

  ![](assets/s_ncs_admin_survey_score_exg.png)
