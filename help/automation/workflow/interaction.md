---
product: campaign
title: インタラクション
description: インタラクション
feature: Workflows, Interaction
source-git-commit: 72467caf94e652ede70c00f1ea413012fc4c7e1f
workflow-type: tm+mt
source-wordcount: '164'
ht-degree: 91%

---


# インタラクション{#interaction}



以下に説明するワークフローは、デフォルトで&#x200B;**オファーエンジン (インタラクション)**&#x200B;アドオンと共にインストールされます。

詳しくは、Campaign のバージョンに応じて、次の節を参照してください。

!

![](assets/do-not-localize/v8.png)[  Campaign v8 ドキュメント](https://experienceleague.adobe.com/docs/campaign/campaign-v8/send/interaction/interaction.html?lang=ja)


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
   <td> <strong>オファーの提案</strong>キューブのために<strong>完全</strong>な集計を更新します。デフォルトで、毎日午前 6 時にトリガーされます。この集計が取得するディメンションは、チャネル、配信、マーケティングオファーおよび日付です。<br /><strong>オファーの提案</strong>キューブは、オファーに基づいてレポートを生成するために使用します。キューブについて詳しくは、を参照してください。<br /> </td> 
  </tr> 
   <tr> 
   <td> <span class="uicontrol">MessageCenter における完全な集計の計算</span> <br /> </td> 
   <td> <span class="uicontrol">agg_messageCenter_full</span> <br /> </td> 
   <td> このワークフローは、<strong>メッセージセンター</strong>キューブのための<strong>完全な</strong>集計を更新します。デフォルトで、毎日午前 3 時にトリガーされます。この集計は、チャネル、日付、ステータス、イベントタイプの各ディメンションを取り込みます。<br />次に、<strong>メッセージセンター</strong>キューブを使用して、イベントに基づいてレポートを生成します。キューブについて詳しくは、を参照してください。<br /> </td> 
   <td> <br /> </td> 
  </tr> 
 </tbody> 
</table>

