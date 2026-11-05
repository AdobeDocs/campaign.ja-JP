---
product: campaign
title: ミッドソーシングプラットフォーム
description: ミッドソーシングプラットフォーム
feature: Workflows
role: User
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
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: 8a7bf8408d15e0bd9e1c3e72f7846bf9a79c6885
workflow-type: tm+mt
source-wordcount: '112'
ht-degree: 41%
---

# ミッドソーシングプラットフォーム{#mid-sourcing-platform}



以下に説明するワークフローは、デフォルトで&#x200B;**ミッドソーシングプラットフォーム**&#x200B;モジュールと共にインストールされます。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">配信指標</span> <br /> </td> 
   <td> <span class="uicontrol">deliveryIndicators</span> <br /> </td> 
   <td> 配達の配信トラッキング指標を更新します。 デフォルトでは、1 時間おきにトリガーされます。<br /> </td> 
  </tr> 
 </tbody> 
</table>

>[!NOTE]
>
>ミッドソーシングサーバーのログ保持期間は、配信の有効期間に&#x200B;**indicatorsDuration**&#x200B;値を加えた値よりも長くする必要があります。 それ以外の場合、古いログがパージされ、より低い値がマーケティングインスタンスに同期されると、配信インジケーターが減少します。 例えば、有効期間が5日で、**indicatorsDuration**&#x200B;が30日の場合、保持期間を少なくとも36日に設定します。
