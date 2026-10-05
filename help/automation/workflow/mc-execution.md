---
product: campaign
title: Message Center（実行）
description: Message Center（実行）
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
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '205'
ht-degree: 100%
---

# Message Center（実行）{#message-center-execution}

以下に説明するワークフローは、デフォルトで **Message Center - 実行**&#x200B;アドオンと共にインストールされます。

<table> 
 <tbody> 
  <tr> 
   <td> <strong>ラベル</strong><br /> </td> 
   <td> <strong>内部名</strong><br /> </td> 
   <td> <strong>説明</strong><br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">イベントステータスを更新</span> <br /> </td> 
   <td> <span class="uicontrol">updateEventsStatus</span> <br /> </td> 
   <td> イベントにステータスを割り当てます。 イベントのステータスには次のものがあります。<br /> 
    <ul> 
     <li> <p><strong>保留中</strong>：イベントはキューで待機中です。 イベントはまだメッセージテンプレートと関連付けられていません。</p> </li> 
     <li> <p><strong>配信保留</strong>：イベントはキューに入っており、メッセージテンプレートが関連付けられ、現在配信処理中です。</p> </li> 
     <li> <p><strong>送信済み</strong>：このステータスは配信ログからコピーされます。 配信が送信されたことを示します。</p> </li> 
     <li> <p><strong>配信で無視</strong>：このステータスは配信ログからコピーされます。 配信が無視されたことを示します。</p> </li> 
     <li> <p><strong>配信エラー</strong>：このステータスは配信ログからコピーされます。 配信に失敗したことを示します。</p> </li> 
     <li> <p><strong>対象外のイベント</strong>：イベントを、メッセージテンプレートに関連付けられませんでした。 イベントは再処理されません。</p> </li> 
    </ul> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">バッチイベントを処理中</span> <br /> </td> 
   <td> <span class="uicontrol">batchEventsProcessing</span> <br /> </td> 
   <td> メッセージテンプレートに関連付ける前に、バッチイベントをキューに入れます。<br /> </td> 
  </tr> 
  <tr> 
   <td> <span class="uicontrol">リアルタイムイベントの処理</span> <br /> </td> 
   <td> <span class="uicontrol">rtEventsProcessing</span> <br /> </td> 
   <td> メッセージテンプレートに関連付ける前に、リアルタイムイベントをキューに入れます。<br /> </td> 
  </tr> 
 </tbody> 
</table>

