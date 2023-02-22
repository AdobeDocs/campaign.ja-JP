---
product: campaign
title: ミッドソーシング転送
description: ミッドソーシング転送ワークフローの詳細を説明します
feature: Workflows
source-git-commit: 6464e1121b907f44db9c0c3add28b54486ecf834
workflow-type: tm+mt
source-wordcount: '95'
ht-degree: 100%

---


# ミッドソーシング転送{#transfer-to-mid-sourcing}

以下に説明するワークフローは、デフォルトで&#x200B;**ミッドソーシング転送**&#x200B;モジュールと共にインストールされます。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">ミッドソーシング (配信カウンター)</span> <br /> </td> 
   <td> <span class="uicontrol">defaultMidSourcingDlv</span> <br /> </td> 
   <td> <p>ミッドソーシングサーバー上の配信のカウント情報を収集します。カウント情報には、送信された配信の数など、一般的な配信指標が含まれています。</p> <p>開封数などのトラッキング情報は含まれていません。</p> <p>デフォルトで、10 分おきにトリガーされます。</p> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">ミッドソーシング (配信ログ)</span> <br /> </td> 
   <td> <span class="uicontrol">defaultMidSourcingLog</span> <br /> </td> 
   <td> ミッドソーシングサーバー上の配信ログを収集します。デフォルトで、1 時間おきにトリガーされます。<br /> </td> 
  </tr> 
 </tbody> 
</table>

