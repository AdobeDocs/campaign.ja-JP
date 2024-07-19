---
product: campaign
title: インタラクション
description: インタラクション
feature: Workflows, Interaction
role: User, Admin
source-git-commit: 567c2e84433caab708ddb9026dda6f9cb717d032
workflow-type: tm+mt
source-wordcount: '131'
ht-degree: 100%

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
   <td> <strong>オファーの提案</strong>キューブのために<strong>完全</strong>な集計を更新します。デフォルトで、毎日午前 6 時にトリガーされます。この集計が取得するディメンションは、チャネル、配信、マーケティングオファーおよび日付です。<br /><strong>オファーの提案</strong>キューブは、オファーに基づいてレポートを生成するために使用します。<br /> </td> 
  </tr> 
   <tr> 
   <td> <span class="uicontrol">MessageCenter における完全な集計の計算</span> <br /> </td> 
   <td> <span class="uicontrol">agg_messageCenter_full</span> <br /> </td> 
   <td> このワークフローは、<strong>メッセージセンター</strong>キューブのための<strong>完全な</strong>集計を更新します。デフォルトで、毎日午前 3 時にトリガーされます。この集計は、チャネル、日付、ステータス、イベントタイプの各ディメンションを取り込みます。<br />次に、<strong>メッセージセンター</strong>キューブを使用して、イベントに基づいてレポートを生成します。<br /> </td> 
   <td> <br /> </td> 
  </tr> 
 </tbody> 
</table>

キューブと集計について詳しくは、[この節](../../v8/reporting/gs-cubes.md)を参照してください。

