---
product: campaign
title: スキーマを編集
description: スキーマを編集ワークフローアクティビティの詳細を説明します
feature: Workflows, Targeting Activity
role: User, Developer
version: Campaign v8, Campaign Classic v7
exl-id: 16fb1aa5-cf99-4461-a1a4-7a68d97e2a74
TQID: 'https://experienceleague.adobe.com/uHsIfXEPlhLjwbGdRaUagbAhFhZb5JFxGurpSH4c0fI'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
  - id: ff84ab2f-a7c2-4ced-a3c8-5113f4348d99
    internal-label: Targeting Activity
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
source-git-commit: e13b3537d149f2bdad7e9dd66768837e5c4b595b
workflow-type: tm+mt
source-wordcount: '152'
ht-degree: 77%
---
# スキーマの編集{#edit-schema}



「**[!UICONTROL スキーマを編集]**」アクティビティを使用して、データをワークフロー内で変換、正規化および必要に応じてエンリッチメントできます。 このアクティビティは通常はデータ構造の正規化に使用されます。例えば、フィールドまたは集計の平均値を算出することで、出力列の名前を変更するか、出力列のコンテンツを変更できます。

このアクティビティはワークテーブルのデータを変更せずに、スキーマのみ（データの論理ビューなど）を変更します。

![出力列と式を含むスキーマアクティビティを編集します。平均注文列は平均](assets/wf_manipulation_box.png)で計算されます

また、「**[!UICONTROL リンク]**」タブを使用して、他のワークテーブルとの結合を作成できます。

ターゲットスキーマと結合条件を表示するリンク定義ダイアログを含むスキーマを編集の![ リンクタブ ](assets/wf_manipulation_box_link_tab.png)

下部のセクションでは、2 つのテーブルからのデータを紐付けするのに使用する条件など、結合条件のリストを設定できます。
