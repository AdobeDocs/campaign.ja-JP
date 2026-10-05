---
product: campaign
title: ミッドソーシング転送
description: ミッドソーシング転送ワークフローの詳細を説明します
feature: Workflows
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
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '103'
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
   <td> <p>ミッドソーシングサーバー上の配信のカウント情報を収集します。 カウント情報には、送信された配信の数など、一般的な配信達成度が含まれています。</p> <p>開封数などのトラッキング情報は含まれていません。</p> <p>デフォルトで、10 分おきにトリガーされます。</p> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">ミッドソーシング (配信ログ)</span> <br /> </td> 
   <td> <span class="uicontrol">defaultMidSourcingLog</span> <br /> </td> 
   <td> ミッドソーシングサーバー上の配信ログを収集します。 デフォルトで、1 時間おきにトリガーされます。<br /> </td> 
  </tr> 
 </tbody> 
</table>

