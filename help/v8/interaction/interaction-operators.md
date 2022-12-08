---
title: オペレータープロファイル
description: オファー管理オペレーターの作成
feature: Interaction, Offers
role: Data Engineer
level: Beginner
exl-id: 865ddb84-3373-45e0-849d-9d3c92455d22
source-git-commit: eed3396584940f99a865eef2358887b6bf5c4936
workflow-type: tm+mt
source-wordcount: '262'
ht-degree: 100%

---

# オペレータープロファイル {#operator-profiles}

Campaign インタラクションを利用できるオペレーターには、**オファーマネージャー**&#x200B;と&#x200B;**配信マネージャー**&#x200B;の 2 つの種類があります。それぞれに固有の権限と制限があります。 Campaign オペレーターと権限の詳細については、[このページ](../start/gs-permissions.md)を参照してください。

* **[!UICONTROL オファーマネージャー]**&#x200B;は、オファーを作成および管理します。
* **[!UICONTROL 配信マネージャー]**&#x200B;は、オファーを承認および使用します。

## オファーマネージャーオペレーターの作成{#offer-manager}

1. オペレーターを作成します。[詳細情報](../start/manage-permissions.md#add-users)
1. **[!UICONTROL グループとネームド権限]**&#x200B;ウィンドウを参照して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL オファーマネージャー]**」グループを選択します。

オファーマネージャーに関連付けられている権限については、[こちら](../start/manage-permissions.md#ootb-productprofiles)を参照してください。

## 配信マネージャーオペレーターの作成 {#delivery-manager}

1. オペレーターを作成します。[詳細情報](../start/manage-permissions.md#add-users)
1. 「**[!UICONTROL グループとネームド権限]**」タブを参照して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL 配信マネージャー]**」グループを選択します。

配信マネージャーに割り当てられる権限で実行できるタスクは次のとおりです。

* **[!UICONTROL ライブ]**&#x200B;環境を表示する。
* オファーカテゴリを表示および修正する。
* オファーがレビュー担当者の場合は承認する。

   >[!NOTE]
   >
   >**配信マネージャー**&#x200B;がオファーを承認できるのは、オファーの設定時にレビュー担当者として指定されている場合に限られます。

## インタラクションオペレーターごとの権限マトリックス {#recap-of-rights-according-to-operator}

<table> 
 <tbody> 
  <tr> 
   <td> </td> 
   <td> <strong>オファーマネージャー（設計環境）</strong><br /> </td> 
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
