---
product: campaign
title: データ抽出（ファイル）
description: データ抽出（ (ファイル）) ワークフローアクティビティの詳細を説明します
feature: Workflows, Data Management Activity
source-git-commit: 2b1dec4b9c456df4dfcebfe10d18e0ab01599275
workflow-type: tm+mt
source-wordcount: '350'
ht-degree: 100%

---

# データ抽出（ファイル）{#extraction-file}



「**[!UICONTROL データ抽出 (ファイル)]**」アクティビティを使用して、ワークフローテーブルから外部ファイルにデータを抽出できます。

>[!CAUTION]
>
>このアクティビティには、抽出されるデータを含めるインバウンドトランジションが必ず必要です。

データ抽出を設定するには、次の手順に従います。

1. 出力ファイルの名前を指定します。この名前には、フィールドの右側にあるパーソナライゼーションボタン経由で挿入される変数を含めることができます。
1. 「**[!UICONTROL ファイルフォーマットを編集...]**」をクリックして、抽出するデータを選択します。

   ![](assets/s_advuser_extract_file_param.png)

   「**[!UICONTROL グループを処理（GROUP BY + HAVING）]**」オプションでは、集計の最終結果をフィルターする手順が追加されます。例えば、所定の注文タイプについて、10 回以上注文した顧客などをフィルターできます。

1. 必要に応じて、結果ファイルの出力用に、「計算結果」や「処理結果」などの新しい列を追加します。それには、「**[!UICONTROL 追加]**」ボタンをクリックします。。

   ![](assets/s_advuser_extract_file_add_col.png)

   追加した行で、「**[!UICONTROL 式を編集]**」アイコンをクリックして新しい列のコンテンツを定義します。

   ![](assets/s_advuser_extract_file_add_exp.png)

   次に、選択ウィンドウにアクセスします。「**[!UICONTROL 詳細選択]**」をクリックし、データに適用するプロセスを選択します。

   ![](assets/s_advuser_extract_file_advanced_selection.png)

   リストから目的の式を選択します。

   ![](assets/s_advuser_extract_file_agregate_values.png)

データの抽出中に実行する後処理を定義して、ファイルを圧縮または暗号化できます。これをおこなうには、アクティビティの「 **[!UICONTROL スクリプト]**」タブに目的のコマンドを追加する必要があります。

この点について詳しくは、「[ファイルの圧縮または暗号化](use-workflow-data.md#zipping-or-encrypting-a-file)」の節を参照してください。

![](assets/postprocessing_dataextraction.png)

## 集計関数のリスト {#list-of-aggregate-functions}

使用可能な集計関数のリストは以下のとおりです。

* **[!UICONTROL カウント]**：集計フィールドの重複値など、集計するフィールドの null ではない値を計算します。

   **[!UICONTROL ユニーク]**：集計するフィールドの異なる非 null 値の合計値を計算します（重複する値は計算の前に除外されます）。

* **[!UICONTROL 合計]**：数値フィールドの値の合計を計算します。
* **[!UICONTROL 最小値]**：フィールド（数値その他）の最小値を計算します。
* **[!UICONTROL 最大値]**：フィールド（数値その他）の最大値を計算します。
* **[!UICONTROL 平均]**：数値フィールドの値の平均を計算します。
