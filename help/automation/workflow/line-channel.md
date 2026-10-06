---
product: campaign
title: LINE チャネル
description: LINE チャネル
feature: Workflows, Line App
role: User
version: Campaign v8, Campaign Classic v7
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
  - id: d5ef99fa-df0c-4153-bf94-105ad0724167
    internal-label: Integrations
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
  - id: d9d413df-4e9e-4906-bbbc-28c06c2ccf59
    internal-label: LINE App
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '95'
ht-degree: 100%
---

# LINE チャネル{#line-channel}

以下に説明するワークフローは、デフォルトで&#x200B;**LINE チャネル**&#x200B;モジュールと共にインストールされます。 このモジュールについて詳しくは、[このページ](../../v8/send/line/line.md)を参照してください。

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

