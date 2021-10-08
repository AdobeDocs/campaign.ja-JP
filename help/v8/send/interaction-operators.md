---
title: Campaign インタラクションオペレーター
description: オファー管理オペレーターの作成
feature: Overview
role: Data Engineer
level: Beginner
source-git-commit: 391eac2f5e4d4c8c5d4dadd3394798361640e1d8
workflow-type: tm+mt
source-wordcount: '383'
ht-degree: 74%

---

# オペレータープロファイル {#operator-profiles}

Campaign インタラクションを利用できるオペレーターには、**オファーマネージャー**&#x200B;と&#x200B;**配信マネージャー**&#x200B;の 2 つの種類があります。それぞれに固有の権限と制限があります。 Campaign オペレーターと権限の詳細については、[このページ](../start/permissions.md)を参照してください。

* **[!UICONTROL オファーマネージャー]**&#x200B;は、オファーを作成および管理します。
* **[!UICONTROL 配信マネージャー]**&#x200B;は、オファーを承認および使用します。

## オファーマネージャーオペレーターの作成{#offer-manager}

1. オペレーターの作成.

   ![](../assets/do-not-localize/book.png) Campaignでオペレーターを作成する詳細な手順については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-operators.html?lang=ja)を参照してください。

1. 「**[!UICONTROL グループとネームド権限]**」ウィンドウに移動して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL オファーマネージャー]**」グループを選択します。

オファーマネージャーに割り当てられる権限で実行できるタスクは次のとおりです。

* **[!UICONTROL デザイン]**&#x200B;環境を修正する。
* **[!UICONTROL ライブ]**&#x200B;環境を表示する。
* 管理機能（定義済みスペースおよびフィルター）を設定する。
* カテゴリを作成および変更する。
* オファーを作成する。
* オファーの実施要件を設定する。
* オファーを承認する。

ワークフローでオファーを使用する場合は、そのワークフローを実行するために、オペレーターを **[!UICONTROL 管理者]** または **[!UICONTROL オファーマネージャー]** オペレーターグループに追加する必要があります。

>[!NOTE]
>
>**オファ** ーマネージャーは、レビュー担当者が指定されていない場合、またはオファーテンプレートでレビュー担当者として宣言されている場合にのみ、オファーを承認します。

## 配信マネージャーオペレーターの作成 {#delivery-manager}

1. オペレーターの作成.

   ![](../assets/do-not-localize/book.png) Campaign でオペレーターを作成する詳しい手順については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-operators.html)を参照してください。

1. 「**[!UICONTROL グループとネームド権限]**」ウィンドウに移動して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL 配信マネージャー]**」グループを選択します。

配信責任者に割り当てられる権限によって、次のタスクを実行できます。

* **[!UICONTROL ライブ]**&#x200B;環境を表示する。
* オファーカテゴリを表示および修正する。
* オファーがレビュー担当者の場合は承認します。

   >[!NOTE]
   >
   >**配信マ** ネージャーは、オファー設定でレビュー担当者として宣言されている場合にのみ、オファーを承認できます。

## インタラクションオペレーターごとの権限マトリックス {#recap-of-rights-according-to-operator}

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
   <td> <strong>配信マネージャー（デザイン環境）</strong><br /> </td> 
   <td> <strong>配信マネージャー（ライブ環境）</strong><br /> </td> 
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
