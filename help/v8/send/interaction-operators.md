---
solution: Campaign
product: Adobe Campaign
title: キャンペーンインタラクション演算子
description: オファー管理演算子の作成
feature: 概要
role: Data Engineer
level: Beginner
translation-type: tm+mt
source-git-commit: b9de052de5aaeee4b089feb70bf20723be5c9cfa
workflow-type: tm+mt
source-wordcount: '412'
ht-degree: 40%

---


# 演算子プロファイル{#operator-profiles}

2種類の演算子でキャンペーンのインタラクションを使用できます。**オファーマネージャ**&#x200B;と&#x200B;**配信マネージャ**。 それぞれに、特定の権限と制限があります。 キャンペーン演算子と権限について詳しくは、[このページ](../start/permissions.md)を参照してください。

* **[!UICONTROL オファーマネージャ]**&#x200B;は、オファーを作成し管理します。
* **[!UICONTROL 配信マネージャー]**&#x200B;がオファーを承認し、使用します

## オファーマネージャの演算子{#offer-manager}を作成します

1. 新しいオペレーターを作成します。

:arrow_upper_right:キャンペーンで演算子を作成する手順については、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-operators.html)を参照してください

1. **[!UICONTROL グループとネームド権限]**&#x200B;ウィンドウに移動して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL オファーマネージャー]**」グループを選択します。

オファーマネージャーに割り当てられた権限により、ユーザーは次のタスクを実行できます。

* **[!UICONTROL デザイン]**&#x200B;環境を修正する。
* **[!UICONTROL ライブ]**&#x200B;環境を表示する。
* 管理機能（定義済みスペースおよびフィルター）を設定する。
* カテゴリを作成および変更する。
* オファーを作成する。
* オファーの実施要件を設定する。
* オファーを承認する。

ワークフローでオファーを使用する場合、ワークフローを実行するには、演算子を&#x200B;**[!UICONTROL 管理者]**&#x200B;または&#x200B;**[!UICONTROL オファーマネージャー]**&#x200B;演算子グループに追加する必要があります。

>[!NOTE]
>
>**オファーマネージャ**&#x200B;は、レビューアが指定されていない場合、またはオファーの基になるオファーテンプレートでレビューアとして宣言されている場合にのみ、オファーを承認できます。

## 配信マネージャの演算子{#delivery-manager}を作成します

1. 新しいオペレーターを作成します。

:arrow_upper_right:キャンペーンで演算子を作成する手順については、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-operators.html)を参照してください

1. **[!UICONTROL グループとネームド権限]**&#x200B;ウィンドウに移動して、「**[!UICONTROL 追加]**」をクリックし、「**[!UICONTROL 配信責任者]**」グループを選択します。

配信マネージャに割り当てられた権限は、ユーザが次のタスクを実行できるようにします。

* **[!UICONTROL ライブ]**&#x200B;環境を表示する。
* オファーカテゴリを表示および修正する。
* 自分がレビュー担当者として割り当てられている場合、オファーを承認する。

   >[!NOTE]
   >
   >**配信マネージャ**&#x200B;は、オファーの設定中にレビュー担当者として宣言された場合にのみオファーを承認できます。

## 操作演算子ごとの権限行列{#recap-of-rights-according-to-operator}

<table> 
 <tbody> 
  <tr> 
   <td> </td> 
   <td> <strong>オファーマネージャ（デザイン環境）</strong><br /> </td> 
   <td> <strong>オファーマネージャ（ライブ環境）</strong><br /> </td> 
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
   <td> <strong>配信マネージャ（デザイン環境）</strong><br /> </td> 
   <td> <strong>配信マネージャ（ライブ環境）</strong><br /> </td> 
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
