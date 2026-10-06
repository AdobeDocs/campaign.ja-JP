---
product: campaign
title: インタラクション
description: インタラクション
feature: Workflows, Interaction
role: User, Admin
version: Campaign v8, Campaign Classic v7
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: 65702805-0026-5ca1-843a-144fa79f0883
    internal-label: Interaction
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '132'
ht-degree: 80%
---

# インタラクション{#interaction}

以下に説明するワークフローは、デフォルトで&#x200B;**オファーエンジン (インタラクション)**&#x200B;アドオンと共にインストールされます。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">完全な集計 (propositionrcp キューブ)</span> <br /> </td> 
   <td> <span class="uicontrol">agg_nmspropositionrcp_full</span> <br /> </td> 
   <td> <strong>オファーの提案</strong>キューブのために<strong>完全</strong>な集計を更新します。 デフォルトで、毎日午前 6 時にトリガーされます。 この集計では、チャネル、配信、マーケティングオファーおよび日付の各ディメンションをキャプチャします。<br /> 次に、<strong> オファーの提案</strong> キューブを使用して、オファーに基づくレポートを生成します。<br /> </td> 
  </tr> 
   <tr> 
   <td> <span class="uicontrol">MessageCenter における完全な集計の計算</span> <br /> </td> 
   <td> <span class="uicontrol">agg_messageCenter_full</span> <br /> </td> 
   <td> このワークフローは、<strong>メッセージセンター</strong>キューブのための<strong>完全な</strong>集計を更新します。 デフォルトで、毎日午前 3 時にトリガーされます。 この集計では、チャネル、日付、ステータス、イベントタイプの各ディメンションをキャプチャします。<br /> 次に、<strong> メッセージセンター</strong> キューブを使用して、イベントに基づくレポートを生成します。<br /> </td> 
   <td> <br /> </td> 
  </tr> 
 </tbody> 
</table>

キューブと集計について詳しくは、[この節](../../v8/reporting/gs-cubes.md)を参照してください。

