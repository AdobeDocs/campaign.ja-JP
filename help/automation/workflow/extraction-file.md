---
product: campaign
title: データ抽出（ファイル）
description: データ抽出（ (ファイル）) ワークフローアクティビティの詳細を説明します
feature: Workflows, Data Management Activity
role: User
version: Campaign v8, Campaign Classic v7
exl-id: 8510e879-2862-491f-bc52-ca8f56105932
TQID: https://experienceleague.adobe.com/ZTuore2mgh5eLsp9YNJJ2Gzh2Np3KAPz57E-LEMGZU4
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 341
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

1. 必要に応じて、結果ファイルの出力用に、「計算結果」や「処理結果」などの新しい列を追加します。 それには、「**[!UICONTROL 追加]**」アイコンをクリックします。

   ![](assets/s_advuser_extract_file_add_col.png)

   追加した行で、「**[!UICONTROL 式を編集]**」アイコンをクリックして新しい列のコンテンツを定義します。

   ![](assets/s_advuser_extract_file_add_exp.png)

   次に、選択ウィンドウにアクセスします。 「**[!UICONTROL 詳細選択]**」をクリックし、データに適用するプロセスを選択します。

   ![](assets/s_advuser_extract_file_advanced_selection.png)

   リストから目的の式を選択します。

   ![](assets/s_advuser_extract_file_agregate_values.png)

データの抽出中に実行する後処理を定義して、ファイルを圧縮または暗号化できます。 これをおこなうには、アクティビティの「 **[!UICONTROL スクリプト]**」タブに目的のコマンドを追加する必要があります。

![](assets/postprocessing_dataextraction.png)

## 集計関数のリスト {#list-of-aggregate-functions}

使用可能な集計関数のリストは以下のとおりです。

* **[!UICONTROL カウント]**：集計フィールドの重複値など、集計するフィールドの null ではない値を計算します。

  **[!UICONTROL ユニーク]**：集計するフィールドの異なる非 null 値の合計値を計算します（重複する値は計算の前に除外されます）。

* **[!UICONTROL 合計]**：数値フィールドの値の合計を計算します。
* **[!UICONTROL 最小値]**：フィールド（数値その他）の最小値を計算します。
* **[!UICONTROL 最大値]**：フィールド（数値その他）の最大値を計算します。
* **[!UICONTROL 平均]**：数値フィールドの値の平均を計算します。
