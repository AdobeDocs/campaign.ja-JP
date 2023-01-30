---
product: campaign
title: キャンペーン
description: キャンペーン
feature: Workflows
topic-tags: technical-workflows
source-git-commit: 6464e1121b907f44db9c0c3add28b54486ecf834
workflow-type: tm+mt
source-wordcount: '155'
ht-degree: 100%

---


# キャンペーン{#campaign}

以下に説明するワークフローは、デフォルトで **Campaign** モジュールと共にインストールされます。

>[!CAUTION]
>
>キャンペーンプロセスをキャンペーンレベルで実行するには、これらのワークフローを開始する必要があります。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">コスト計算</span> <br /> </td> 
   <td> <span class="uicontrol">budgetMgt</span> <br /> </td> 
   <td> 予算、プラン、プログラム、キャンペーン、配信およびタスクに関する費用行とコスト行の計算を開始します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">在庫 : オーダーおよびアラート</span> <br /> </td> 
   <td> <span class="uicontrol">stockMgt</span> <br /> </td> 
   <td> このワークフローは、受注明細に対する在庫計算を開始し、警告アラートのしきい値を管理します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">キャンペーンの配信ジョブ</span> <br /> </td> 
   <td> <span class="uicontrol">deliveryMgt</span> <br /> </td> 
   <td> 承認された配信をトリガーし、外部配信のサービスプロバイダーの後処理を開始します。また、承認通知とリマインダーも送信します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">キャンペーンジョブ</span> <br /> </td> 
   <td> <span class="uicontrol">operationMgt</span> <br /> </td> 
   <td> マーケティングキャンペーンに関するジョブ（ターゲティングの開始、ファイル抽出など）を管理します。また、繰り返しキャンペーンと定期的キャンペーンに関連するワークフローも作成します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">サービスプロバイダーのジョブ</span> <br /> </td> 
   <td> <span class="uicontrol">supplierMgt</span> <br /> </td> 
   <td> 配信が承認されると、プロバイダーの処理（発送担当への E メール送信および後処理）を開始します。<br /> </td> 
  </tr> 
 </tbody> 
</table>

