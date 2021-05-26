---
solution: Campaign v8
product: Adobe Campaign
title: Campaignインタラクション演算子
description: オファー管理オペレーターの作成
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: 167730cc3e81ee47f02bcdbc2c39fe793a99c534
workflow-type: tm+mt
source-wordcount: '408'
ht-degree: 40%

---


# オペレータープロファイル{#operator-profiles}

キャンペーンのインタラクションは、次の2種類のオペレーターが使用できます。**オファーマネージャー**&#x200B;および&#x200B;**配信責任者**。 それぞれに固有の権限と制限があります。 Campaignのオペレーターと権限について詳しくは、[このページ](../start/permissions.md)を参照してください。

* **[!UICONTROL オファーマネージャー]**&#x200B;がオファーを作成し、管理します。
* **[!UICONTROL 配信責任者]**&#x200B;がオファーを承認し、使用します

## オファーマネージャーのオペレーター{#offer-manager}の作成

1. 新しいオペレーターを作成します。

   [!DNL :arrow_upper_right:] Campaignでのオペレーターの作成手順について詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-operators.html)

1. **[!UICONTROL グループとネームド権限]**&#x200B;ウィンドウに移動して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL オファーマネージャー]**」グループを選択します。

オファーマネージャーに割り当てられる権限によって、オファー管理者は次のタスクを実行できます。

* **[!UICONTROL デザイン]**&#x200B;環境を修正する。
* **[!UICONTROL ライブ]**&#x200B;環境を表示する。
* 管理機能（定義済みスペースおよびフィルター）を設定する。
* カテゴリを作成および変更する。
* オファーを作成する。
* オファーの実施要件を設定する。
* オファーを承認する。

ワークフローでオファーを使用する場合は、そのオペレーターを&#x200B;**[!UICONTROL 管理者]**&#x200B;または&#x200B;**[!UICONTROL オファーマネージャー]**&#x200B;オペレーターグループに追加して、ワークフローを実行する必要があります。

>[!NOTE]
>
>**オファーマネージャー**&#x200B;は、レビュー担当者が指定されていない場合、またはオファーの基となったオファーテンプレートでレビュー担当者として宣言されている場合にのみ、オファーを承認できます。

## 配信責任者オペレーター{#delivery-manager}の作成

1. 新しいオペレーターを作成します。

   [!DNL :arrow_upper_right:] Campaignでのオペレーターの作成手順について詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-operators.html)

1. **[!UICONTROL グループとネームド権限]**&#x200B;ウィンドウに移動して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL 配信責任者]**」グループを選択します。

配信責任者に割り当てられる権限で実行できるタスクは次のとおりです。

* **[!UICONTROL ライブ]**&#x200B;環境を表示する。
* オファーカテゴリを表示および修正する。
* 自分がレビュー担当者として割り当てられている場合、オファーを承認する。

   >[!NOTE]
   >
   >**配信責任者**&#x200B;は、オファーの設定時にレビュー担当者として宣言された場合にのみ、オファーを承認できます。

## インタラクション演算子{#recap-of-rights-according-to-operator}ごとの権限マトリックス

<table> 
 <tbody> 
  <tr> 
   <td> </td> 
   <td> <strong>オファーマネージャー（デザイン環境）</strong><br /> </td> 
   <td> <strong>オファーマネージャー（ライブ環境）</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>ツリー構造のレベル</strong><br /> </td> 
   <td> </td> 
   <td> </td> 
  </tr> 
  <tr> 
   <td> 編集対象のオファー／ライブオファー<br /> </td> 
   <td> 読み取り／書き込み<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> 受信者 - 環境<br /> </td> 
   <td> 読み取り／書き込み<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> 管理<br /> </td> 
   <td> 読み取り／書き込み<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> スペース<br /> </td> 
   <td> 読み取り／書き込み<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> 定義済みオファーフィルター<br /> </td> 
   <td> 読み取り／書き込み<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> タイポロジ<br /> </td> 
   <td> 読み取り／書き込み<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> タイポロジルール<br /> </td> 
   <td> 読み取り／書き込み<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> オファーカタログ<br /> </td> 
   <td> 読み取り／書き込み<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> オファーカテゴリ<br /> </td> 
   <td> 読み取り／書き込み<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
 </tbody> 
</table>

<table> 
 <tbody> 
  <tr> 
   <td> </td> 
   <td> <strong>配信責任者（デザイン環境）</strong><br /> </td> 
   <td> <strong>配信責任者（ライブ環境）</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <strong>ツリー構造のレベル</strong><br /> </td> 
   <td> </td> 
   <td> </td> 
  </tr> 
  <tr> 
   <td> 編集対象のオファー／ライブオファー<br /> </td> 
   <td> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> 受信者 - 環境<br /> </td> 
   <td> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> 管理<br /> </td> 
   <td> </td> 
   <td> </td> 
  </tr> 
  <tr> 
   <td> スペース<br /> </td> 
   <td> </td> 
   <td> </td> 
  </tr> 
  <tr> 
   <td> 定義済みオファーフィルター<br /> </td> 
   <td> 読み取り<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> タイポロジ<br /> </td> 
   <td> 読み取り<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> タイポロジルール<br /> </td> 
   <td> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> オファーカタログ<br /> </td> 
   <td> 読み取り<br /> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
  <tr> 
   <td> オファーカテゴリ<br /> </td> 
   <td> </td> 
   <td> 読み取り<br /> </td> 
  </tr> 
 </tbody> 
</table>
