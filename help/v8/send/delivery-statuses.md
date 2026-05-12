---
title: 配信ステータス
description: 配信ダッシュボードで使用できるステータスについて説明します。
feature: Monitoring, Deliverability
role: User
level: Beginner
version: Campaign v8, Campaign Classic v7
exl-id: 90f2b7b2-db9e-42aa-aef2-e90aee5d208e
TQID: https://experienceleague.adobe.com/raVVeGP6V9mukXOtwg84UsZWpPpQsP3v9jpluSpQ6ZY
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
  - id: b82389f8-9b5e-4083-8e3b-3cef299fb8b9
subfeature_v2:
  - id: cfc95e9b-b035-4403-a6a9-b27a8a053a37
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2:
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 561
ht-degree: 68%

---

# 配信ステータス {#delivery-statuses}

配信の送信が完了すると、配信ダッシュボードにステータスが表示され、送信が成功したかどうかを監視できます。 可能なステータスについては、次の節で詳しく説明します。

![](assets/delivery-status.png)

様々な配信エラーの詳細と解決方法については、[配信エラーについて](delivery-failures.md)を参照してください。

**関連トピック：**

* [メールの送信と監視](send.md)
* [配信失敗について](delivery-failures.md)
* [配信品質の概要](about-deliverability.md)

## 配信ステータスのリスト {#list-delivery-statuses}

<table> 
 <thead> 
  <tr> 
   <th> ステータス<br /> </th> 
   <th> 定義と解決策<br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 送信済み<br /> </td> 
   <td> 配信は、メッセージプロバイダーに正しく送信されました（ただし、受信者が受信しているとは限りません）。<br /> </td> 
  </tr> 
  <tr> 
   <td> 無視<br /> </td> 
   <td> 配信は、アドレスにエラーがあるので受信者に送信されませんでした。 ブロックリストへの登録、強制隔離、未指定または重複の可能性があります。<br /> </td> 
  </tr> 
  <tr> 
   <td> 失敗<br /> </td> 
   <td> 無効なアドレスやインボックスが満杯であることが原因で、配信は受信者に到達できませんでした。 パーソナライゼーションブロックの問題に関係していることもあり、その場合、スキーマが配信マッピングと一致しないとエラーが生成されます。 <a href="delivery-failures.md" target="_blank">配信エラーの理解</a><br />を参照してください。 </td> 
  </tr>
  <tr> 
   <td> 保留中<br /> </td> 
   <td> 配信の送信の準備が完了し、配信サーバー（MTA）によって処理されます。 <a href="#pending-status" target="_blank">保留中ステータス</a>を参照してください。<br /> </td> 
  </tr> 
  <tr> 
   <td> 該当なし<br /> </td> 
   <td> メッセージはサーバー（MTA）に取り込まれましたが、まだ処理されていません。<br /> </td> 
  </tr>  
  <tr> 
   <td> 配信がキャンセル済み<br /> </td> 
   <td> 操作がオペレーターによってキャンセルされました。<br /> </td> 
  </tr> 
  <tr> 
   <td> サービスプロバイダーで受信済み<br /> </td> 
   <td> SMS配信の場合、SMS サービス プロバイダーは配信を受信しました。<br /> メール配信の場合、メッセージはCampaignからMTA （メール転送エージェント）に正常に中継されました。</td> 
  </tr> 
  <tr> 
   <td> モバイルで受信済み<br /> </td> 
   <td> 受信者がモバイルデバイスで SMS を受信しました。<br /> </td> 
  </tr>
  <tr> 
   <td> サービスプロバイダーに送信済み<br /> </td> 
   <td> 配信はSMS サービスプロバイダーに送信されましたが、まだ受信されていません。<br />
   </td> 
  </tr> 
  <tr> 
   <td> 準備済み<br /> </td> 
   <td> 外部コネクタ（モバイルチャネルなど）でのみ使用される中間ステータス。 「保留中」ステータスの次に遷移するステータスであり、後続のステータスは外部コネクタが決定します。<br /> </td> 
  </tr> 
 </tbody> 
</table>

Adobe Campaign のメールの配信品質を最適化する方法について、[この節](about-deliverability.md)を参照してください。 配信品質の詳細については、[アドビの配信品質のベストプラクティスガイド](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja)を参照してください。

## 保留中ステータス {#pending-status}

配信を確認した後に、配信のステータスが&#x200B;**[!UICONTROL 保留中]**&#x200B;である場合があります。 このステータスは、一部のリソースが使用可能になるのを実行プロセスが待機していることを意味します。

**[!UICONTROL 保留中]**&#x200B;ステータスは、配信はスケジュールされたが特定の日付まで保留されることを意味している可能性があります。 詳しくは、[配信の送信スケジュール &#x200B;](configure-and-send.md#schedule-delivery-sending)の節を参照してください。

配信が送信されず、ステータスが&#x200B;**[!UICONTROL 保留中]**&#x200B;のままである場合は、次のことが原因である可能性があります。

* **同時に実行しているキャンペーンが多すぎます**

  同時キャンペーンの制限は、**[!UICONTROL NmsOperation_LimitConcurrency]** オプションで定義されています。 デフォルト値は 10 です。

  Managed Cloud Services ユーザーは、Adobeと連携して、必要に応じてこの制限を調整できます。 オプションについて詳しくは、[Campaign Classic v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/appendices/configuring-campaign-options.html?lang=ja){target="_blank"}を参照してください。

* **リソースの可用性に関する問題**

  MTA （Message Transfer Agent）は、配信を処理する前にリソースが利用可能になるのを待っている可能性があります。

>[!NOTE]
>
>Campaign v8 Managed Cloud Services ユーザーの場合、MTA インフラストラクチャはAdobeによって監視および管理されます。 保留中の配信に関して永続的な問題が発生した場合は、Adobe カスタマーケアにお問い合わせください。

**関連トピック：**

* [メールの送信と監視](send.md#email-monitoring)
* [配信失敗について](delivery-failures.md)
* [Campaign環境のモニタリング](../start/monitor.md#monitor-deliveries)
