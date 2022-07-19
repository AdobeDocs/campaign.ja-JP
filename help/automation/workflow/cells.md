---
product: campaign
title: セル
description: セル
feature: Workflows, Targeting Activity
source-git-commit: 2b1dec4b9c456df4dfcebfe10d18e0ab01599275
workflow-type: tm+mt
source-wordcount: '131'
ht-degree: 17%

---

# セル{#cells}

この **[!UICONTROL セル]** 「 」アクティビティは、様々なサブセットのビューをデータ列として提供します。 サブセットの操作を容易にし、パーソナライゼーション機能を活用するように設計されています。

![](assets/wf_split_cells.png)

ユーザーのニーズに基づく特定のパラメーターを入力することで設定できます。デフォルトでは、各サブセットの詳細は、 **[!UICONTROL セル]** および **[!UICONTROL 詳細]** タブ

![](assets/wf_split_cells_with_customization.png)

以下の例では、入力フォームが変更されています。a **[!UICONTROL データ]** 各サブセットに対するオファーと優先度レベルの関連付けを有効にするタブが追加されました。

![](assets/cells-activity-sample.png)

この設定では、次の情報がワークフローフォームの **[!UICONTROL 管理/設定/入力フォーム]** Adobe Campaign explorer のノード：

```
<container img="nms:miniatures/mini-enrich.png" label="Data">
                <input xpath="@code"/>
                <container xpath="select/node[@alias='@numTest']">
                  <input alwaysActive="true" expr="'long'" type="expr" xpath="@type"/>
                  <input alwaysActive="true" expr="'Priority'" type="expr" xpath="@label"/>
                  <input label="Priority" maxValue="12" minValue="0" type="number"
                         xpath="@value" xpathEditFromType="@type"/>
                </container>
                <container xpath="select/node[@alias='@test']">
                  <input alwaysActive="true" expr="'string'" type="expr" xpath="@type"/>
                  <input alwaysActive="true" expr="'Identifier'" type="expr" xpath="@label"/>
                  <input label="Cell identifier" xpath="@value"/>
                </container>
                <container xpath="select/node[@alias='linkTest']">
                  <input alwaysActive="true" expr="'link'" type="expr" xpath="@type"/>
                  <input alwaysActive="true" expr="'nms:offer'" type="expr" xpath="@dataType"/>
                  <input alwaysActive="true" expr="'Offre'" type="expr" xpath="@label"/>
                  <input computeStringAlias="@valueLabel" label="Offers" notifyPathList="@_cs|@valueLabel"
                         schema="nms:offer" type="linkEdit" xpath="@value"/>
                </container>
```

Adobe Campaignでの入力フォームのパーソナライゼーションは、エキスパートユーザー向け機能として予約されています。 詳しくは、このを参照してください。
