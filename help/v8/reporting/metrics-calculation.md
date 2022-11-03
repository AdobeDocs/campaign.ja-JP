---
title: 組み込みレポート指標の計算
description: 組み込みレポート指標の計算
feature: Reporting
source-git-commit: 80e5efc5998c67ce576e9f8208fab9543fc70d29
workflow-type: tm+mt
source-wordcount: '3027'
ht-degree: 99%

---

# 組み込みレポート指標の計算 {#metrics-calculation}

## ユーザーアクティビティ {#user-activities-1}

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 開封数<br /> </td> 
   <td> @opens<br /> </td> 
   <td> URL のプライマリキーが 1 に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> sum(Iif([@url-id] = 1, @totalClicks, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> クリック数<br /> </td> 
   <td> @clicks<br /> </td> 
   <td> URL タイプが「E メールのクリック」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> sum(Iif([url/@type] = 1, @totalClicks, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> トランザクション<br /> </td> 
   <td> @transactions<br /> </td> 
   <td> URL タイプが「トランザクション」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> sum(Iif([url/@type] = 5, @totalClicks, 0))<br /> </td> 
  </tr> 
 </tbody> 
</table>

このレポートは、**[!UICONTROL 統合されたトラッキング]**&#x200B;テーブル（nms:trackingStats）に基づいています。この集計テーブルは、**[!UICONTROL 受信者トラッキングログ]**&#x200B;テーブル（nms:trackingLogRcp）の代わりにレポートを表示する際のパフォーマンス上の理由で使用され、リアルタイムでは計算されません。テーブルは、トラッキングログを取得して数分後に生成されます。指標が最新である場合は、結果は&#x200B;**トラッキング指標**&#x200B;レポートの指標と同じになります。@totalclicks の指標は、5 分間のクリック総数を示しています。

## 配信不能件数とバウンス数 {#non-deliverables-and-bounces-1}

**エラータイプ別の分類**

このレポートは、**[!UICONTROL 配信およびトラッキング統計]**&#x200B;テーブル（nms:deliveryLogStats）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 処理されたメッセージの合計数<br /> </td> 
   <td> @totalProcessed<br /> </td> 
   <td> ステータスが「準備済み」、「送信済み」または「失敗」に等しいメッセージの合計。<br /> </td> 
   <td> @prepared + @error + @success<br /> </td> 
  </tr> 
  <tr> 
   <td> 不明なユーザー<br /> </td> 
   <td> @unknownUser<br /> </td> 
   <td> ステータスが「失敗」に等しく、理由が「不明なユーザー」に等しいすべてのメッセージの数。<br /> </td> 
   <td> Count(@status=2 and msg/@failureReason=1)<br /> </td> 
  </tr> 
  <tr> 
   <td> 未到達 <br /> </td> 
   <td> @未到達<br /> </td> 
   <td> ステータスが「失敗」に等しく、理由が「未到達」に等しいすべてのメッセージの数。<br /> </td> 
   <td> Count(@status=2 and msg/@failureReason=3)<br /> </td> 
  </tr> 
  <tr> 
   <td> 却下<br /> </td> 
   <td> @拒否<br /> </td> 
   <td> ステータスが「失敗」に等しく、理由が「却下」に等しいすべてのメッセージの数。<br /> </td> 
   <td> Count(@status=2 and msg/@failureReason=20)<br /> </td> 
  </tr> 
  <tr> 
   <td> 無効なドメイン<br /> </td> 
   <td> @invalidDomain<br /> </td> 
   <td> ステータスが「失敗」に等しく、理由が「無効なドメイン」に等しいすべてのメッセージの数。<br /> </td> 
   <td> Count(@status=2 and msg/@failureReason=2)<br /> </td> 
  </tr> 
  <tr> 
   <td> 無効なアカウント<br /> </td> 
   <td> @disabled<br /> </td> 
   <td> ステータスが「失敗」に等しく、理由が「無効なアカウント」に等しいすべてのメッセージの数。<br /> </td> 
   <td> Count(@status=2 and msg/@failureReason=4)<br /> </td> 
  </tr> 
  <tr> 
   <td> メールボックス容量超過<br /> </td> 
   <td> @mailBoxFull<br /> </td> 
   <td> ステータスが「失敗」に等しく、理由が「メールボックス容量超過」に等しいすべてのメッセージの数。<br /> </td> 
   <td> Count(@status=2 and msg/@failureReason=5)<br /> </td> 
  </tr> 
  <tr> 
   <td> エラー数<br /> </td> 
   <td> @value<br /> </td> 
   <td> このタイプのエラーで失敗したメッセージの数。<br /> </td> 
   <td> Count(@status=2 and msg/@failureReason="エラータイプの値")<br /> </td> 
  </tr> 
  <tr> 
   <td> 寄与率<br /> </td> 
   <td> -<br /> </td> 
   <td> エラーメッセージの合計数に対する、このタイプのエラーの割合。<br /> </td> 
   <td> percent(@value,@totalErrors)<br /> </td> 
  </tr> 
  <tr> 
   <td> 分類<br /> </td> 
   <td> -<br /> </td> 
   <td> 処理されたメッセージの合計数に対する、このタイプのエラーの割合。<br /> </td> 
   <td> percent(@value,@totalProcessed)<br /> </td> 
  </tr> 
 </tbody> 
</table>

**ドメインごとの分類**

レポートの 2 番目の部分では、エラータイプと対照的に、インターネットドメインごとの失敗したメッセージの分類について詳しく説明しています。この場合の、「**エラー**」の指標（@value）に関する式は、Count(@status=2 and @domain=&quot;ドメイン名の値&quot;) です。つまり、このドメインで失敗のステータスを持つすべてのメッセージの数です。

## ブラウザー {#browsers-1}

このレポートは、**[!UICONTROL インターネットブラウザーの統計]**&#x200B;テーブル（nms:userAgentsStats）に基づいています。

**グローバル統計**

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 訪問者<br /> </td> 
   <td> @totalVisitors<br /> </td> 
   <td> 配信で少なくとも 1 回クリックした、このブラウザーのターゲット受信者の合計数。<br /> </td> 
   <td> Sum(@visitors)<br /> </td> 
  </tr> 
  <tr> 
   <td> 閲覧されたページ数<br /> </td> 
   <td> @totalPages<br /> </td> 
   <td> すべての配信に対する、このブラウザーを使用する配信のリンクでのクリック総数。<br /> </td> 
   <td> Sum(@pages) <br /> </td> 
  </tr> 
  <tr> 
   <td> 使用率<br /> </td> 
   <td> -<br /> </td> 
   <td> 訪問者の合計数に対する、このブラウザーの訪問者の割合。<br /> </td> 
   <td> percent(@totalVisitors, sum(@totalVisitors)) <br /> </td> 
  </tr> 
 </tbody> 
</table>

**ブラウザーごとの統計**

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 使用率<br /> </td> 
   <td> @visitors<br /> </td> 
   <td> 最も高い訪問者数が測定された日の訪問者数に対する、このブラウザーを使用する 1 日あたりの訪問者数の割合。<br /> </td> 
   <td> percent(sum(@visitors), max(@visitorsOfTheDay))<br /> </td> 
  </tr> 
  <tr> 
   <td> グローバルレート<br /> </td> 
   <td> -<br /> </td> 
   <td> すべてのブラウザーを使用する訪問者の合計数に対する、このバージョンの訪問者の割合。<br /> </td> 
   <td> percent(@totalVisitors, @globalVisitors)<br /> </td> 
  </tr> 
  <tr> 
   <td> 相対的比率<br /> </td> 
   <td> -<br /> </td> 
   <td> このブラウザーを使用する訪問者の合計数に対する、このバージョンの訪問者の割合。<br /> </td> 
   <td> percent(@totalVisitors, sum(@totalVisitors)) <br /> </td> 
  </tr> 
 </tbody> 
</table>

## ソーシャルネットワークへの共有 {#sharing-to-social-networks-1}

このレポートは、**[!UICONTROL 配信]**&#x200B;テーブル（nms:delivery）、**[!UICONTROL 統合されたトラッキング]**&#x200B;テーブル（nms:trackingStats）および **[!UICONTROL Web トラッキング]**&#x200B;テーブル（nms:webTrackingLog）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 配信するメッセージ数<br /> </td> 
   <td> @totalTarget<br /> </td> 
   <td> 配信の分析中に処理されたメッセージの合計数。<br /> </td> 
   <td> sum([properties/@totalTarget])<br /> </td> 
  </tr> 
  <tr> 
   <td> 成功した送信数<br /> </td> 
   <td> @success<br /> </td> 
   <td> 正常に処理されたメッセージ数。<br /> </td> 
   <td> sum([indicators/@success])<br /> </td> 
  </tr> 
  <tr> 
   <td> E メール<br /> </td> 
   <td> @email<br /> </td> 
   <td> URL カテゴリが「email」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='email',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Facebook<br /> </td> 
   <td> @facebook<br /> </td> 
   <td> URL カテゴリが「facebook」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='facebook',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Twitter<br /> </td> 
   <td> @twitter<br /> </td> 
   <td> URL カテゴリが「twitter」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='twitter',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Delicious<br /> </td> 
   <td> @delicious<br /> </td> 
   <td> URL カテゴリが「delicious」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='delicious',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Digg<br /> </td> 
   <td> @digg<br /> </td> 
   <td> URL カテゴリが「digg」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='digg',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Google<br /> </td> 
   <td> @google<br /> </td> 
   <td> URL カテゴリが「google」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='google',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Linkedin<br /> </td> 
   <td> @linkedin<br /> </td> 
   <td> URL カテゴリが「linkedin」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='linkedin',@totalClicks,0))<br /> </td> 
  </tr> 
 </tbody> 
</table>

**共有**

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 共有アクティビティ数<br /> </td> 
   <td> @forward<br /> </td> 
   <td> このソーシャルネットワークで共有されたメッセージの合計数。<br /> </td> 
   <td> Sum(iIf([url/@category]="ソーシャルネットワークタイプの値",@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 分類<br /> </td> 
   <td> @percent<br /> </td> 
   <td> 共有の合計数に対する、このソーシャルネットワークでの共有の数の割合。<br /> </td> 
   <td> percent(@forward, sum(@forward))<br /> </td> 
  </tr> 
  <tr> 
   <td> 共有率<br /> </td> 
   <td> @rate<br /> </td> 
   <td> 配信するメッセージ数に対する、このネットワークでの共有の数。<br /> </td> 
   <td> @forward／@totalTarget<br /> </td> 
  </tr> 
 </tbody> 
</table>

**開封数**

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 開封数 <br /> </td> 
   <td> @open<br /> </td> 
   <td> Web トラッキングテーブルでのトラッキング行の合計数。<br /> </td> 
   <td> Count<br /> </td> 
  </tr> 
  <tr> 
   <td> 分類<br /> </td> 
   <td> @percentOpen<br /> </td> 
   <td> 開封の合計数に対する、このソーシャルネットワークでの開封数の割合。<br /> </td> 
   <td> percent(@open, sum(@open))<br /> </td> 
  </tr> 
  <tr> 
   <td> 開封率<br /> </td> 
   <td> @rateOpen<br /> </td> 
   <td> 配信するメッセージの合計数に対する、このソーシャルネットワークでの開封数。<br /> </td> 
   <td> @open／@totalTarget<br /> </td> 
  </tr> 
 </tbody> 
</table>

## 共有アクティビティの統計 {#statistics-on-sharing-activities-1}

このレポートは、**[!UICONTROL 配信]**&#x200B;テーブル（nms:delivery）、**[!UICONTROL 統合されたトラッキング]**&#x200B;テーブル（nms:trackingStats）および **[!UICONTROL Web トラッキング]**&#x200B;テーブル（nms:webTrackingLog）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 新しい連絡先<br /> </td> 
   <td> @newContacts<br /> </td> 
   <td> 受信者にリンクされている訪問者の数。<br /> </td> 
   <td> 式：count(@id)<br /> フィルター：@recipient-id ! = 0<br /> </td> 
  </tr> 
  <tr> 
   <td> 開封数<br /> </td> 
   <td> @opened<br /> </td> 
   <td> URL タイプが「開く」に等しいすべての @ids の数。<br /> </td> 
   <td> count(Iif([url/@type]=2, @id, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 共有<br /> </td> 
   <td> @shared<br /> </td> 
   <td> 「email」、「facebook」、「twitter」、「delicious」、「digg」、「google」、「linkedin」に含まれた URL カテゴリ。<br />「email」、「facebook」、「twitter」、「delicious」、「digg」、「google」または「linkedin」に等しい URL カテゴリを含むすべての @totalClicks の数。<br /> </td> 
   <td> count (Iif([url/@category] IN (email' , 'facebook' , 'twitter' , 'delicious' , 'digg' , 'google' , 'linkedin'), @totalClicks, 0))<br /> </td> 
  </tr> 
 </tbody> 
</table>

## オペレーティングシステム {#operating-systems-1}

このレポートは、**[!UICONTROL インターネットブラウザーの統計]**&#x200B;テーブル（nms:userAgentsStats）に基づいています。

**グローバル統計**

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 訪問者<br /> </td> 
   <td> @totalVisitors／@days<br /> </td> 
   <td> 配信で少なくとも 1 回クリックした、オペレーティングシステムごとのターゲット受信者の合計数の日平均。<br /> </td> 
   <td> Sum(@visitors)<br /> </td> 
  </tr> 
  <tr> 
   <td> 閲覧されたページ数<br /> </td> 
   <td> @totalPages／@days<br /> </td> 
   <td> すべての配信に対する、オペレーティングシステムごとの配信リンクでのクリック総数の日平均。<br /> </td> 
   <td> Sum(@pages)<br /> </td> 
  </tr> 
  <tr> 
   <td> 使用率<br /> </td> 
   <td> -<br /> </td> 
   <td> 訪問者の合計数に対する、オペレーティングシステムごとの訪問者の分類。<br /> </td> 
   <td> percent(@totalVisitors, sum(@totalVisitors))<br /> </td> 
  </tr> 
 </tbody> 
</table>

**オペレーティングシステムごとの統計**

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 使用率<br /> </td> 
   <td> @visitors<br /> </td> 
   <td> 最も高い訪問者数が測定された日の訪問者数に対する、このオペレーティングシステムでの 1 日あたりの訪問者数の割合。<br /> </td> 
   <td> percent(sum(@visitors), max(@visitorsOfTheDay))<br /> </td> 
  </tr> 
  <tr> 
   <td> グローバルレート<br /> </td> 
   <td> -<br /> </td> 
   <td> すべてのオペレーティングシステムでの訪問者の合計数に対する、バージョンごとの訪問者の割合。<br /> </td> 
   <td> percent(@totalVisitors, @globalVisitors)<br /> </td> 
  </tr> 
  <tr> 
   <td> 相対的比率<br /> </td> 
   <td> -<br /> </td> 
   <td> このオペレーティングシステムを使用する訪問者の合計数に対する、バージョンごとの訪問者の割合。<br /> </td> 
   <td> percent(@totalVisitors, sum(@totalVisitors))<br /> </td> 
  </tr> 
 </tbody> 
</table>

## 購読のトラッキング  {#subscription-tracking-1}

このレポートは、**[!UICONTROL サービス]**&#x200B;テーブル（nms:service）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 登録済み<br /> </td> 
   <td> @_subscriber<br /> </td> 
   <td> 前日に登録した人の数。<br /> </td> 
   <td> sum(Iif(@created &lt; addDays(getDate(), (-1)), 1, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 購読<br /> </td> 
   <td> @_subscription<br /> </td> 
   <td> 前日の購読の数（@action = 1）。<br /> </td> 
   <td> sum(Iif(@action = 1 and @date &gt; addDays(getDate(), (-1)), 1, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 購読解除<br /> </td> 
   <td> @_unsubscription<br /> </td> 
   <td> 前日の購読解除の数（@action = 0）。<br /> </td> 
   <td> sum(Iif(@action = 0 and @date &gt; addDays(getDate(), (-1)), 1, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 変更<br /> </td> 
   <td> -<br /> </td> 
   <td> 購読数から購読解除数を引いた数。この率は、購読者の合計数に基づいて計算されます。<br /> </td> 
   <td> Iif(number(@_subscription) &gt; number(@_unsubscription), '+', '')+format(@_subscription - @_unsubscription, 'number', '# ##0')+ Iif(@_subscriber&gt;0,' (' + format(100*percent(@_subscription - @_unsubscription, @_subscriber), 'number', '#,##0.00')+ '%)','')<br /> </td> 
  </tr> 
  <tr> 
   <td> ロイヤルティ<br />
 </td> 
   <td> -<br /> </td> 
   <td> 該当期間のサブスクライバーのロイヤルティ率。<br />
 </td> 
   <td> 1-percent(@_unsubscription,@_subscriber+@_subscription-@_unsubscription)<br /> </td> 
  </tr> 
 </tbody> 
</table>

## トラッキング指標 {#tracking-indicators-1}

このレポートは、**[!UICONTROL 配信およびトラッキング統計]**&#x200B;テーブル（nms:deliveryLogStats）および&#x200B;**[!UICONTROL 統合されたトラッキング]**&#x200B;テーブル（nms:trackingStats）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 配信するメッセージ<br /> </td> 
   <td> @toDeliver<br /> </td> 
   <td> ターゲット分析後の broadLogs の数。<br /> </td> 
   <td> sum([properties/@toDeliver])<br /> </td> 
  </tr> 
  <tr> 
   <td> 成功<br /> </td> 
   <td> @successWithoutSeeds<br /> </td> 
   <td> 「シードアドレス」フィールドが「いいえ」に等しく、ステータスが「サービスプロバイダーで受信済み」、「送信済み」または「モバイルで受信済み」に等しいメッセージの数。<br /> </td> 
   <td> sum([indicators/@success])<br /> </td> 
  </tr> 
  <tr> 
   <td> リーチした母集団のユニーク開封数<br /> </td> 
   <td> @estimatedRecipientOpen<br /> </td> 
   <td> HTML 形式の E メールのユニーク開封数を基に推定算出した、すべての E メールのユニーク開封数。<br /> </td> 
   <td> Iif(([@toDeliver] - [@text]) = 0, 0, round(toDouble(@recipientOpen) * [@toDeliver] / ([@toDeliver] - [@text]), 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> リーチした母集団の開封数の合計<br /> </td> 
   <td> @estimatedTotalRecipientOpen<br /> </td> 
   <td> HTML 形式の E メールの開封合計数を基に推定算出した、すべての E メールの開封合計数。<br /> </td> 
   <td> Iif(([@toDeliver] - [@text]) = 0, 0, round(toDouble(@totalRecipientOpen) * [@toDeliver] / ([@toDeliver] - [@text]), 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 購読解除リンクのクリック数<br /> </td> 
   <td> @optOut<br /> </td> 
   <td> URL カテゴリが「オプトアウト」に等しいすべての @ids の数。<br /> </td> 
   <td> count(Iif([url/@type]=3, @id, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> ミラーページへのリンクでのクリック数<br /> </td> 
   <td> @mirrorPage<br /> </td> 
   <td> URL カテゴリが「ミラーページ」に等しいすべての @ids の数。<br /> </td> 
   <td> count(Iif([url/@type]=6, @id, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 推定転送数<br /> </td> 
   <td> @forward<br /> </td> 
   <td> ユニークユーザーの数と E メールを少なくとも 1 回クリックしたユニーク受信者の数の差。<br /> </td> 
   <td> @personClick - @recipientClick<br /> </td> 
  </tr> 
  <tr> 
   <td> 送信数<br /> </td> 
   <td> @successWithoutSeeds<br /> </td> 
   <td> 「シードアドレス」フィールドが「いいえ」に等しく、ステータスが「受信者によって考慮されている」、「送信済み」または「モバイルで受信済み」に等しいメッセージの数。<br /> </td> 
   <td> sum([indicators/@success])<br /> </td> 
  </tr> 
  <tr> 
   <td> 苦情数<br /> </td> 
   <td> @complaints<br /> </td> 
   <td> ステータスが「失敗」に等しく、理由が「ブロックリストに登録されたアドレス」に等しいメッセージの数。<br /> </td> 
   <td> Count(@status=2 and msg/@failureReason=8)<br /> </td> 
  </tr> 
  <tr> 
   <td> 開封数<br /> </td> 
   <td> @recipientOpen<br /> </td> 
   <td> すべてのトラッキングログのすべての @broadLog-ids の数。<br /> </td> 
   <td> Countdistinct ([@broadLog-id])<br /> </td> 
  </tr> 
  <tr> 
   <td> クリック数<br /> </td> 
   <td> @recipientClick<br /> </td> 
   <td> URL タイプが「E メールのクリック」に等しい @broadLog-ids のユニークカウント数。<br /> </td> 
   <td> Countdistinct(Iif([url/@type]=1, @broadLog-id, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 反応率（生データ）<br /> </td> 
   <td> -<br /> </td> 
   <td> 配信を少なくとも 1 回開封した受信者数に対する、配信で少なくとも 1 回クリックした受信者数の割合。<br /> </td> 
   <td> percent(@recipientClick,@recipientOpen)<br /> </td> 
  </tr> 
  <tr> 
   <td> リーチした母集団のユニーククリック数<br /> </td> 
   <td> @personClick<br /> </td> 
   <td> URL カテゴリが「E メールのクリック」に等しいすべての @source-ids の数。<br /> </td> 
   <td> Countdistinct(Iif([url/@type]=1, @source-id, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 累積クリック数<br /> </td> 
   <td> @totalRecipientClick<br /> </td> 
   <td> URL カテゴリが「E メールのクリック」に等しいすべての @ids の数。<br /> </td> 
   <td> count(Iif([url/@type]=1, @id, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 受信者のクリック数<br /> </td> 
   <td> @recipientClick<br /> </td> 
   <td> URL タイプが「E メールのクリック」に等しい @broadLog-ids のユニークカウント数。<br /> </td> 
   <td> Countdistinct(Iif([url/@type]=1, @broadLog-id, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 推定受信者反応率<br /> </td> 
   <td> -<br /> </td> 
   <td> 配信を少なくとも 1 回開封した受信者の推定値に対する、配信で少なくとも 1 回クリックした受信者数の割合。<br /> </td> 
   <td> percent(@recipientClick, @estimatedRecipientOpen<br /> </td> 
  </tr> 
  <tr> 
   <td> 訪問ページ数<br /> </td> 
   <td> @totalWebPage<br /> </td> 
   <td> URL タイプが「Web」または「トランザクション」に等しいすべての @ids の数。<br /> </td> 
   <td> count(Iif([url/@type]=4 or [url/@type]=5, @id, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> トランザクション<br /> </td> 
   <td> @transaction<br /> </td> 
   <td> URL タイプが「トランザクション」に等しいすべての @ids の数。<br /> </td> 
   <td> count(Iif([url/@type]=5, @id, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 合計金額<br /> </td> 
   <td> @amount<br /> </td> 
   <td> URL タイプが「トランザクション」に等しい webTrackingLog/@amounts の合計。<br /> </td> 
   <td> Sum(Iif([url/@type]=5, webTrackingLog/@amount, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 平均トランザクション金額<br /> </td> 
   <td> -<br /> </td> 
   <td> トランザクションの数に対する、合計金額の割合。<br /> </td> 
   <td> div(@amount, @transaction)<br /> </td> 
  </tr> 
  <tr> 
   <td> 品目<br /> </td> 
   <td> @article<br /> </td> 
   <td> URL タイプが「トランザクション」に等しい webTrackingLog/@articles の合計。<br /> </td> 
   <td> Sum(Iif([url/@type]=5, webTrackingLog/@article, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> トランザクションごとの品目の平均数<br /> </td> 
   <td> -<br /> </td> 
   <td> トランザクションの数に対する、品目の数の割合。<br /> </td> 
   <td> div(@article, @transaction)<br /> </td> 
  </tr> 
  <tr> 
   <td> メッセージごとの平均金額<br /> </td> 
   <td> -<br /> </td> 
   <td> 配信するメッセージの数に対する、合計金額の割合。<br /> </td> 
   <td> div(@amount, @toDeliver)<br /> </td> 
  </tr> 
  <tr> 
   <td> E メール<br /> </td> 
   <td> @email<br /> </td> 
   <td> URL カテゴリが「email」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='email',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Facebook<br /> </td> 
   <td> @facebook<br /> </td> 
   <td> URL カテゴリが「facebook」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='facebook',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Twitter<br /> </td> 
   <td> @twitter<br /> </td> 
   <td> URL カテゴリが「twitter」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='twitter',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Delicious<br /> </td> 
   <td> @delicious<br /> </td> 
   <td> URL カテゴリが「delicious」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='delicious',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Digg<br /> </td> 
   <td> @digg<br /> </td> 
   <td> URL カテゴリが「digg」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='digg',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Google<br /> </td> 
   <td> @google<br /> </td> 
   <td> URL カテゴリが「google」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='google',@totalClicks,0))<br /> </td> 
  </tr> 
  <tr> 
   <td> Linkedin<br /> </td> 
   <td> @linkedin<br /> </td> 
   <td> URL カテゴリが「linkedin」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> Sum(iIf([url/@category]='linkedin',@totalClicks,0))<br /> </td> 
  </tr> 
 </tbody> 
</table>

## URL とクリックストリーム {#urls-and-click-streams-1}

このレポートは、**[!UICONTROL 配信]**&#x200B;テーブル（nms:delivery）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 反応率<br /> </td> 
   <td> @reactivity<br /> </td> 
   <td> 配信を少なくとも 1 回開封したターゲット受信者の推定値に対する、配信で少なくとも 1 回クリックしたターゲット受信者数の割合。<br /> </td> 
   <td> percent([indicators/@recipientClick], [indicators/@estimatedRecipientOpen])<br /> </td> 
  </tr> 
  <tr> 
   <td> ユニーククリック数<br /> </td> 
   <td> @distinctClicks<br /> </td> 
   <td> 正常に配信されたメッセージ数に対する、配信で少なくとも 1 回クリックしたユニークユーザー数の割合。<br /> </td> 
   <td> percent([indicators/@personClick], [indicators/@success])<br /> </td> 
  </tr> 
  <tr> 
   <td> 累積クリック数<br /> </td> 
   <td> @totalClicks<br /> </td> 
   <td> 正常に配信されたメッセージ数に対する、ターゲット受信者によるクリック総数の割合。<br /> </td> 
   <td> percent([indicators/@totalRecipientClick], [indicators/@success])<br /> </td> 
  </tr> 
  <tr> 
   <td> クリック数<br /> </td> 
   <td> @_click<br /> </td> 
   <td> URL のプライマリキーが 1 ではないすべての @totalClicks の数。<br /> </td> 
   <td> count(Iif([@url-id] != 1, @totalClicks, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> クリック（％）<br /> </td> 
   <td> -<br /> </td> 
   <td> 累積クリックの合計数に対する、クリック数の割合。<br /> </td> 
   <td> percent(@_click, @_total)<br /> </td> 
  </tr> 
 </tbody> 
</table>

## 配信の概要 {#delivery-summary-1}

このレポートは、**[!UICONTROL 配信]**&#x200B;テーブル（nms:delivery）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 初期母集団<br /> </td> 
   <td> @totalTarget<br /> </td> 
   <td> 配信アクションの対象となる受信者の合計数。<br /> </td> 
   <td> sum([properties/@totalTarget])<br /> </td> 
  </tr> 
  <tr> 
   <td> 除外ルールによって却下されたメッセージ<br /> </td> 
   <td> @reject<br /> </td> 
   <td> タイポロジルール（アドレスが未指定、強制隔離された、ブロックリストに登録されている、など）に従った分析中に無視されたアドレスの数。<br /> </td> 
   <td> sum([properties/@reject])<br /> </td> 
  </tr> 
  <tr> 
   <td> 配信するメッセージ<br /> </td> 
   <td> @toDeliver<br /> </td> 
   <td> 配信の分析後に配信するメッセージの合計数。<br /> </td> 
   <td> sum([properties/@toDeliver])<br /> </td> 
  </tr> 
  <tr> 
   <td> 成功<br /> </td> 
   <td> @success<br /> </td> 
   <td> 正常に処理されたメッセージ数。<br /> </td> 
   <td> sum([indicators/@success])<br /> </td> 
  </tr> 
  <tr> 
   <td> エラー数<br /> </td> 
   <td> @error<br /> </td> 
   <td> 配信と自動バウンス処理の間に累積したエラーの合計数。<br /> </td> 
   <td> sum([indicators/@error])<br /> </td> 
  </tr> 
  <tr> 
   <td> 新しい強制隔離<br /> </td> 
   <td> @newQuarantine<br /> </td> 
   <td> 配信の失敗後（不明なユーザー、無効なドメイン）、強制隔離されたアドレスの数。<br /> </td> 
   <td> sum([indicators/@newQuarantine])<br /> </td> 
  </tr> 
 </tbody> 
</table>

## ホットクリック {#hot-clicks-1}

このレポートは、配信テーブル（nms:delivery）および&#x200B;**[!UICONTROL 統合されたトラッキング]**&#x200B;テーブル（nms:trackingStats）に基づいています。

このレポートは、各リンクでのメッセージのコンテンツ（HTML および／またはテキスト）を、リンクでのクリック率と共に表示します。パーソナライゼーションブロックの購読解除リンクおよびミラーページリンクは、累積クリック数の合計では考慮されますが、レポートには表示されません。

## トラッキング統計 {#tracking-statistics-1}

このレポートは、**[!UICONTROL 配信]**&#x200B;テーブル（nms:delivery）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> トランザクション<br /> </td> 
   <td> @transactions<br /> </td> 
   <td> URL タイプが「トランザクション」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> sum(Iif([url/@type] = 5, @totalClicks, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> クリック数<br /> </td> 
   <td> @clicks<br /> </td> 
   <td> URL タイプが「E メールのクリック」に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> sum(Iif([url/@type] = 1, @totalClicks, 0))<br /> </td> 
  </tr> 
  <tr> 
   <td> 開封数<br /> </td> 
   <td> @opens<br /> </td> 
   <td> URL のプライマリキーが 1 に等しいすべての @totalClicks の合計。<br /> </td> 
   <td> sum(Iif([@url-id] = 1, @totalClicks, 0))<br /> </td> 
  </tr> 
 </tbody> 
</table>

## 配信統計 {#delivery-statistics-1}

このレポートは、**[!UICONTROL 配信およびトラッキング統計]**&#x200B;テーブル（nms:deliveryLogStats）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 処理済みの E メール<br /> </td> 
   <td> @processed<br /> </td> 
   <td> ステータスが「準備済み」、「送信済み」または「失敗」に等しいメッセージの合計数。<br /> </td> 
   <td> @prepared + @error + @success<br /> </td> 
  </tr> 
  <tr> 
   <td> 配信済み<br /> </td> 
   <td> @success<br /> </td> 
   <td> 正常に処理されたメッセージ数。<br /> </td> 
   <td> indicators/@success<br /> </td> 
  </tr> 
  <tr> 
   <td> ハードバウンス<br /> </td> 
   <td> @hardBounce<br /> </td> 
   <td> ステータスが「失敗」に等しく、理由が「不明なユーザー」に等しいメッセージの合計数。<br /> </td> 
   <td> @unknownUser<br /> </td> 
  </tr> 
  <tr> 
   <td> ソフトバウンス<br /> </td> 
   <td> @softBounce<br /> </td> 
   <td> ステータスが「失敗」に等しく、理由が「未到達」、「メールボックス容量超過」、「無効なドメイン」、「無効なアカウント」、「未接続」または「却下」に等しいすべてのメッセージの合計数。<br /> </td> 
   <td> @unreachable + @mailBoxFull + @invalidDomain + @disabled + @notConnected + @refused<br /> </td> 
  </tr> 
  <tr> 
   <td> 開封数<br /> </td> 
   <td> @recipientOpen<br /> </td> 
   <td> トラッキングログの @broadLog-ids の合計数。<br /> </td> 
   <td> Countdistinct ([@broadLog-id])<br /> </td> 
  </tr> 
  <tr> 
   <td> クリック数<br /> </td> 
   <td> @personClick<br /> </td> 
   <td> URL カテゴリが「E メールのクリック」に等しい @source-ids の合計数。<br /> </td> 
   <td> Countdistinct(Iif([url/@type]=1, @source-id, 0)) <br /> </td> 
  </tr> 
  <tr> 
   <td> 購読解除<br /> </td> 
   <td> @optOut<br /> </td> 
   <td> URL カテゴリが「オプトアウト」に等しい @ids の合計数。<br /> </td> 
   <td> count(Iif([url/@type]=3, @id, 0))<br /> </td> 
  </tr> 
 </tbody> 
</table>

## 開封数の分類 {#breakdown-of-opens-1}

このレポートは、**配信**&#x200B;テーブル（nms:delivery）および&#x200B;**トラッキングログ**&#x200B;テーブル（nms:trackingLogRcp）に基づいています。

<table> 
 <thead> 
  <tr> 
   <th> <strong>ラベル</strong> <br /> </th> 
   <th> <strong>フィールド名</strong> <br /> </th> 
   <th> <strong>指標の説明</strong> <br /> </th> 
   <th> <strong>指標の計算式</strong> <br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 開封数<br /> </td> 
   <td> @totalRecipientOpen<br /> </td> 
   <td> URL のプライマリキーが 1（open）に等しいすべての @id の合計。<br /> </td> 
   <td> count(Iif([@url-id] = 1, @id, 0))<br /> </td> 
  </tr> 
 </tbody> 
</table>

## その他の指標 {#other-indicators}

**配信（nms:delivery）／指標**&#x200B;ノード経由でアクセスできる「**送信済み**」の指標（@sent）は、サービスプロバイダーに送信された SMS の合計数に対応しています。この指標は SMS の配信にのみ使用され、他のタイプの配信には使用できません（**@success** 指標および **@processed** 指標と混同しないようにするため）。

## 指標の同期 {#indicator-synchronization}

特定の指標に対して非同期または不一致が発生する場合は、Adobe Campaign エクスプローラーで該当する配信を選択し、右クリックして&#x200B;**[!UICONTROL アクション／配信とトラッキング指標を再計算]**&#x200B;を選択してください。**[!UICONTROL 次へ]**／**[!UICONTROL 完了]**&#x200B;をクリックします。

## 開封数のトラッキング {#tracking-opens-}

Adobe Campaign でメッセージの開封を検出するためには、受信者が電子メールで画像をダウンロードする必要があります。HTML およびマルチパート／オルタナティブの E メールには 0 ピクセルの画像が含まれており、これによって開封されたメッセージを検出できるようになります。テキスト形式のメッセージは画像を含まないので、開封されたかどうかを検出することは不可能です。メッセージの開封数に基づいて計算される値は、画像表示にリンクされる誤差があるので、常に推定値です。

## ターゲットユーザー／ターゲット受信者 {#targeted-persons---recipients}

Adobe Campaign の一部のレポートでは、ターゲットユーザーとターゲット受信者を区別して表示しています。

ターゲット受信者とは、配信が送信されるすべての受信者を指します。

ユーザー数には、ターゲット受信者と、E メールが転送されたすべてのユーザーが含まれます。新しいブラウザー（まだメッセージが開封されていない）で開封またはクリックがおこなわれるたびに、もう 1 人のユーザーが統計に追加されます。

例えば、（Adobe Campaign によって送信された）E メールを職場で受信し、それを開封してクリックすると、1 人のターゲット受信者としてカウントされます（recipient=1、person=1）。この E メールを 2 人の友人に転送する場合、ターゲット受信者の数は 1 ですが、ユーザー数は 3 になります。3 という値は、新しいブラウザーでのそれぞれの開封数／クリック数と一致します。
