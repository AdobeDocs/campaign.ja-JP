---
product: campaign
title: Web 分析
description: Web 分析パッケージの詳細を説明します
feature: Workflows, Analytics Integration
source-git-commit: 72467caf94e652ede70c00f1ea413012fc4c7e1f
workflow-type: tm+mt
source-wordcount: '180'
ht-degree: 86%

---


# Web 分析{#web-analytics}



以下に説明するワークフローは、デフォルトで **Web 分析コネクタ**&#x200B;モジュールと共にインストールされます。このモジュールについて詳しくは、このを参照してください。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">指標とキャンペーン属性の送信</span> <br /> </td> 
   <td> <span class="uicontrol">webAnalyticsSendMetrics</span> <br /> </td> 
   <td> このワークフローを使用すると、Adobe® Analytics コネクタ経由で、Adobe Campaign から Adobe Experience Cloud スイートにメールキャンペーンの指標を送信できます。該当する指標は、<strong>送信済み</strong>（iSent）、<strong>オープン数合計</strong>（iTotalRecipientOpen）、<strong>クリックした受信者の合計数</strong>（iTotalRecipientClick）、<strong>エラー</strong>（iError）、<strong>オプトアウト</strong>（opt-out）（iOptOut）です。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">変換済み連絡先の特定</span> <br /> </td> 
   <td> <span class="uicontrol">webAnalyticsFindConverted</span> <br /> </td> 
   <td> リマーケティングキャンペーンの後で、購入を完了したサイトの訪問者をインデックス化します。このワークフローで復元されたデータは、 <span class="uicontrol">リマーケティングの効率レポート</span> （こちらを参照）。 <br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">イベントパージ</span> <br /> </td> 
   <td> <span class="uicontrol">webAnalyticsPurgeWebEvents</span> <br /> </td> 
   <td> 「<span class="uicontrol">存続期間</span>」フィールドで設定した期間に基づいてデータベースフィールドからすべてのイベントを削除できます。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">Web イベントの復元</span> <br /> </td> 
   <td> <span class="uicontrol">webAnalyticsGetWebEvents</span> <br /> </td> 
   <td> 指定したサイトでのインターネットユーザーの行動に関するセグメントを 1 時間に 1 回ダウンロードし、Adobe Campaign データベースに格納してリマーケティングワークフローを開始します。<br /> </td> 
  </tr> 
 </tbody> 
</table>

