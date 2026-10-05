---
product: campaign
title: キャンペーン
description: キャンペーン
feature: Workflows
role: User, Admin
version: Campaign v8, Campaign Classic v7
topic-tags: technical-workflows
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
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '157'
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
   <td> <span class="uicontrol">在庫：オーダーおよびアラート</span> <br /> </td> 
   <td> <span class="uicontrol">stockMgt</span> <br /> </td> 
   <td> このワークフローは、受注明細に対する在庫計算を開始し、警告アラートのしきい値を管理します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">キャンペーンの配信ジョブ</span> <br /> </td> 
   <td> <span class="uicontrol">deliveryMgt</span> <br /> </td> 
   <td> 承認された配信をトリガーし、外部配信のサービスプロバイダーの後処理を開始します。 また、承認通知とリマインダーも送信します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">キャンペーンジョブ</span> <br /> </td> 
   <td> <span class="uicontrol">operationMgt</span> <br /> </td> 
   <td> マーケティングキャンペーンに関するジョブ（ターゲティングの開始、ファイル抽出など）を管理します。 また、繰り返しキャンペーンと定期的キャンペーンに関連するワークフローも作成します。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">サービスプロバイダーのジョブ</span> <br /> </td> 
   <td> <span class="uicontrol">supplierMgt</span> <br /> </td> 
   <td> 配信が承認されると、プロバイダーの処理（発送担当へのメール送信および後処理）を開始します。<br /> </td> 
  </tr> 
 </tbody> 
</table>

