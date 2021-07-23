---
product: Adobe Campaign
title: Campaign インタラクションオペレーター
description: オファー管理オペレーターの作成
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: c61d8aa8e0a68ccc81a6141782f860daf061bc61
workflow-type: ht
source-wordcount: '408'
ht-degree: 100%

---


# オペレータープロファイル {#operator-profiles}

Campaign インタラクションを利用できるオペレーターには、**オファーマネージャー**&#x200B;と&#x200B;**配信マネージャー**&#x200B;の 2 つの種類があります。それぞれに固有の権限と制限があります。 Campaign オペレーターと権限の詳細については、[このページ](../start/permissions.md)を参照してください。

* **[!UICONTROL オファーマネージャー]**&#x200B;は、オファーを作成および管理します。
* **[!UICONTROL 配信マネージャー]**&#x200B;は、オファーを承認および使用します。

## オファーマネージャーオペレーターの作成{#offer-manager}

1. 新しいオペレーターを作成します。

   ↗️ Campaignでオペレーターを作成する手順について詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-operators.html?lang=ja)を参照してください

1. 「**[!UICONTROL グループとネームド権限]**」ウィンドウに移動して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL オファーマネージャー]**」グループを選択します。

オファーマネージャーに割り当てられる権限で実行できるタスクは次のとおりです。

* **[!UICONTROL デザイン]**&#x200B;環境を修正する。
* **[!UICONTROL ライブ]**&#x200B;環境を表示する。
* 管理機能（定義済みスペースおよびフィルター）を設定する。
* カテゴリを作成および変更する。
* オファーを作成する。
* オファーの実施要件を設定する。
* オファーを承認する。

ワークフローでオファーを使用する場合は、ワークフローを実行するオペレーターを&#x200B;**[!UICONTROL 管理者]**&#x200B;または&#x200B;**[!UICONTROL オファーマネージャー]**&#x200B;のオペレーターグループに追加する必要があります。

>[!NOTE]
>
>**オファーマネージャー**&#x200B;がオファーを承認できるのは、レビュー担当者が指定されていない場合、またはオファーの基となるオファーテンプレートでレビュー担当者として宣言されている場合に限られます。

## 配信マネージャーオペレーターの作成 {#delivery-manager}

1. 新しいオペレーターを作成します。

   ↗️ Campaignでオペレーターを作成する手順について詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-operators.html?lang=ja)を参照してください。

1. 「**[!UICONTROL グループとネームド権限]**」ウィンドウに移動して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL 配信マネージャー]**」グループを選択します。

配信マネージャーに割り当てられる権限で実行できるタスクは次のとおりです。

* **[!UICONTROL ライブ]**&#x200B;環境を表示する。
* オファーカテゴリを表示および修正する。
* 自分がレビュー担当者として割り当てられている場合、オファーを承認する。

   >[!NOTE]
   >
   >**配信マネージャー**&#x200B;がオファーを承認できるのは、オファーの設定時に、自分がレビュー担当者として定義されている場合に限られます。

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
