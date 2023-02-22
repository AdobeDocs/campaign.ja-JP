---
product: campaign
title: LINE チャネル
description: LINE チャネル
feature: Workflows
source-git-commit: 6464e1121b907f44db9c0c3add28b54486ecf834
workflow-type: tm+mt
source-wordcount: '95'
ht-degree: 100%

---


# LINE チャネル{#line-channel}

以下に説明するワークフローは、デフォルトで&#x200B;**LINE チャネル**&#x200B;モジュールと共にインストールされます。このモジュールについて詳しくは、[このページ](../../v8/send/line.md)を参照してください。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">LINE V2 アクセストークンの更新</span> <br /> </td> 
   <td> <span class="uicontrol">updateLineV2AccessToken</span> <br /> </td> 
   <td> このワークフローは、アクセストークンを LINE V2 に更新します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">ブロックした LINE ユーザーを削除</span> <br /> </td> 
   <td> <span class="uicontrol">deleteBlockedLineUsersV2</span> <br /> </td> 
   <td> このワークフローは、LINE 公式アカウントにブロックされてから 180 日が経過した後に LINE V2 ユーザーのデータを削除するようにします。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">MID から LINE ユーザー ID への移行</span> <br /> </td> 
   <td> <span class="uicontrol">MIDToUserIDMigration</span> <br /> </td> 
   <td> このワークフローは、LINE V1 から LINE V2 へ移行用に、LINE V2 ユーザーの ID を生成します。<br /> </td> 
  </tr> 
 </tbody> 
</table>

