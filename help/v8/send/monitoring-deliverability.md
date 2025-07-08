---
product: campaign
title: Adobe Campaign の配信品質の監視
description: Adobe Campaign の配信品質の監視に関するツールおよびガイドラインについて学ぶ
feature: Deliverability
role: User, Admin
version: Campaign v8, Campaign Classic v7
exl-id: e4caa316-242f-46cd-a20b-a5eee5a0c456
source-git-commit: 11c8c4c51c7901ba0d119323c564a64b940428b7
workflow-type: tm+mt
source-wordcount: '397'
ht-degree: 67%

---

# 配信品質の監視{#monitoring-deliverability}

以下に、Adobe Campaign に用意されている様々な監視ツールの詳細と、Adobe Campaign で提供される機能を活用してプラットフォームの配信品質を監視する方法に関するその他のガイドラインを示します。

## 監視ツール {#monitoring-tools}

Adobe Campaignでは、以下に示すすべての配信品質ツールにアクセスできます。

* [ 受信ボックスレンダリングレポート ](inbox-rendering.md) を使用すると、コンテンツとレピュテーションをスキャンするために、主要なメールクライアントでのメッセージをプレビューできます。

* **[!UICONTROL 配信スループット]**&#x200B;レポートは、一定期間にわたるプラットフォーム全体のスループットの概要を示します。詳しくは、[この節](../reporting/global-reports.md#delivery-throughput)を参照してください。
* 各配信は、異なるインターネットサービスプロバイダー（ISP）に関するブロードキャスト統計情報レポートを生成します。配信品質に影響を与える可能性のあるデータ品質と評価の指標がいくつか表示されます。次の数値が含まれます。
   * **[!UICONTROL ハードバウンス]**&#x200B;はデータの質を示します。この数は 2％未満にする必要があります。
   * **[!UICONTROL ソフトバウンス]**&#x200B;は評判を示します。任意の ISP に対して、この値を 10％以下にする必要があります。

  <!--For more on this, see the [Delivery statistics](../reporting/global-reports.md#delivery-statistics) section.-->

* より一般的に、[配信ダッシュボード](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/delivery-dashboard.html?lang=ja#sending-messages){target="_blank"}は次の項目のアクセスを提供します。
   * 送信の詳細と、正常に送信、処理、送信されたメッセージの数を示す配信概要。
   * 配信ログと履歴。除外されたターゲットとその理由が示されます。
   * トラッキングログ：開封数やクリック数などのトラッキング情報を表示します。

## 監視のガイドライン {#monitoring-guidelines}

配信品質の監視に関する追加のガイドラインを示します。

* プラットフォーム全体で[配信スループット](../reporting/global-reports.md#delivery-throughput)を定期的にチェックして、元のセットアップと整合性が取れているかどうかを検証します。
* 配信テンプレートで[再試行](delivery-failures.md#retries)が適切に設定されていることを確認します（再試行期間が 30 分、再試行回数が 21 回以上）。
* [バウンス](delivery-failures.md#bounce-mail-qualification)メールボックスがアクセス可能で、アカウントの有効期限が近づいていないかを定期的に検証します。
* [ 配信ダッシュボード ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/delivery-dashboard.html?lang=ja#sending-messages){target="_blank"} からアクセスできる各配信スループットをチェックして、配信コンテンツの有効性（「フラッシュの販売」は数日ではなく数分で配信する、など）と一致していることを確認します。 は、メッセージの送信中に配信と潜在的な問題を監視するための重要なツールです。
* [ウェーブ](configure-and-send.md#sending-using-multiple-waves)を使用する場合、次のものがトリガーされる前に各ウェーブが完了するための十分な時間があることを検証します。
* エラーの数と新しい[強制隔離](quarantines.md)が他の配信と整合性が取れていることをチェックします。
* [配信ログ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/delivery-dashboard.html?lang=ja#delivery-logs-and-history){target="_blank"}の詳細を慎重に調べて、ハイライト表示されたエラーの種類をチェックします（ブロックリスト、DNS の問題、スパム対策ルールなど）。
