---
product: campaign
title: Message Center（実行）
description: Message Center（実行）
feature: Workflows
source-git-commit: 72467caf94e652ede70c00f1ea413012fc4c7e1f
workflow-type: tm+mt
source-wordcount: '226'
ht-degree: 100%

---


# Message Center（実行）{#message-center-execution}



以下に説明するワークフローは、デフォルトで **Message Center - 実行**&#x200B;アドオンと共にインストールされます。

詳しくは、Campaign のバージョンに応じて、次の節を参照してください。

!

![](assets/do-not-localize/v8.png)[  Campaign v8 ドキュメント](https://experienceleague.adobe.com/docs/campaign/campaign-v8/send/transactional.html?lang=ja)

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
   <td> イベントにステータスを割り当てます。イベントのステータスには次のものがあります。<br /> 
    <ul> 
     <li> <p><strong>保留中</strong>：イベントはキューで待機中です。イベントはまだメッセージテンプレートと関連付けられていません。</p> </li> 
     <li> <p><strong>配信待ち</strong>：イベントはキューに入っており、メッセージテンプレートが関連付けられ、現在配信処理中です。</p> </li> 
     <li> <p><strong>送信済み</strong>：このステータスは配信ログからコピーされます。配信が送信されたことを示します。</p> </li> 
     <li> <p><strong>配信で無視</strong>：このステータスは配信ログからコピーされます。配信が無視されたことを示します。</p> </li> 
     <li> <p><strong>配信エラー</strong>：このステータスは配信ログからコピーされます。配信に失敗したことを示します。</p> </li> 
     <li> <p><strong>対象外のイベント</strong>：イベントを、メッセージテンプレートに関連付けられませんでした。イベントは再処理されません。</p> </li> 
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

