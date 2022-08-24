---
product: campaign
title: データの読み込み（RDBMS）
description: データ読み込み（RDBMS）ワークフローアクティビティの詳細を説明します
feature: Workflows, Data Management Activity
source-git-commit: 2b1dec4b9c456df4dfcebfe10d18e0ab01599275
workflow-type: ht
source-wordcount: '0'
ht-degree: 100%

---

# データの読み込み（RDBMS）{#data-loading-rdbms}



「**[!UICONTROL データの読み込み（RDBMS）]**」アクティビティでは、外部データベースに直接アクセスし、ターゲティングに必要なデータを収集できます。

パフォーマンスを向上させるには、外部データベースのデータを使用できるクエリアクティビティの使用をお勧めします。詳しくは、[外部データベースへのアクセス（FDA）](accessing-an-external-database--fda-.md)を参照してください。

手順は以下のようになります。

1. リストからデータソースを選択し、抽出するデータが含まれるテーブル名を入力します。

   ![](assets/s_advuser_wf_sgbd_sample_1.png)

   対応するフィールドに入力したテーブル名は、外部テンプレート内のデータを収集するテンプレートとして使用されます。ワークフローによって処理されるテーブル名は、データの読み取りアクティビティのインバウンドトランジションによって自動生成または伝達されます。使用するテーブルを選択するには、「**[!UICONTROL 詳細..]**.」リンクをクリックし、「**[!UICONTROL トランジションで指定]**」または「**[!UICONTROL 手動で指定]**」オプションを選択します。

   ![](assets/s_advuser_wf_sgbd_sample_5.png)

1. 「**[!UICONTROL 抽出する列を選択...]**」リンクをクリックして、収集するデータをデータベース内で選択します。

   ![](assets/s_advuser_wf_sgbd_sample_2.png)

1. このデータに対してフィルターを定義できます。それには、「**[!UICONTROL クエリを編集...]**」リンクをクリックします。

   このように収集されたデータは、ワークフローのライフサイクルを通じて使用できます。
