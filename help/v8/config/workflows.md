---
solution: Campaign
product: Adobe Campaign
title: キャンペーン自動化の概要
description: キャンペーン自動化の概要
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 0be1c5f5-f07d-46dc-bebc-5eb50f466547
translation-type: tm+mt
source-git-commit: 2ea953145b645d376d5ea88b89350b45f024ea7d
workflow-type: tm+mt
source-wordcount: '632'
ht-degree: 2%

---

# プロセスの管理と自動化

強力なマーケティングキャンペーン自動化機能を活用するようにキャンペーンを設定します。

次の設定を行うことができます。

* ワークフロー
* 定期的なキャンペーン
* エンドツーエンドの検証サイクル
* アラート
* レポートの自動送信
* トリガーされるイベント

## ワークフローの設計と使用{#gs-ac-wf}

Adobe Campaignワークフローを使用すると、セグメントの作成、配信の準備から、マーケティングキャンペーンのあらゆる側面の速度とスケールを改善できます。

ワークフローの詳細については、次の節を参照してください。

* [ワークフローの概要](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html?lang=en#automating-with-workflows)
* ワークフローアクティビティ
   * [ターゲットアクティビティ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/about-targeting-activities.html):クエリ、読み取りリスト、エンリッチメント、和集合など
   * [フロー制御アクティビティ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/flow-control-activities/about-flow-control-activities.html):スケジューラー、フォーク、警告、外部信号など
   * [アクションアクティビティ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/about-action-activities.html):チャネル間の配信、JavaScriptコード、CRMアクティビティ、更新集計など
   * [イベントアクティビティ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/about-action-activities.html):ファイル転送、Webダウンロード、その他
* [エンドツーエンドの使用例を通して学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/about-workflow-use-cases.html)
* [マーケティングキャンペーンワークフローでのオーディエンスの構築](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html?lang=en#building-the-main-target-in-a-workflow)
* [ワークフローのベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/workflow-best-practices.html)
* [組み込みのテクニカルワークフロー](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/advanced-management/about-technical-workflows.html)
* [ワークフローの実行の監視](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/monitoring-workflows/monitoring-workflow-execution.html)

## 定期キャンペーンの設定

定期的な設計を行い、実行のたびに新しい配信インスタンスを作成します。 例えば、ワークフローが週に1回実行するように設計されている場合、1年後には52配信になります。 つまり、ログは各配信インスタンスで区切られます。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/setting-up-marketing-campaigns.html?lang=en#recurring-and-periodic-campaigns)で定期的なキャンペーンを作成する方法を説明します。

## エンドツーエンドの検証サイクルの設定

配信の各ステップに対して承認プロセスを設定し、マーケティングキャンペーンの様々なプロセスを完全に監視および制御します。ターゲット設定、コンテンツ、予算、抽出、配達確認の送信を行います。

通知は、レビュー担当者に設定されたAdobe Campaignの操作者に送信され、承認要求を通知します。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-approval.html)で、承認プロセスの設定と管理方法を説明します。


## アラートの送信

キャンペーン演算子は、エラーが発生した場合にアラートを受け取ることができます。

一連のワークフローのステータスを監視し、定期的なメッセージをスーパーバイザーに送信できるワークフローを作成できます。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/monitoring/supervising-workflows.html?lang=en#step-1--creating-the-monitoring-workflow)で、他のワークフローの状態を監視するワークフローを作成する方法を説明します。

エラーが発生した場合にアラートを受け取ることもできます

## 自動レポートの送信

:arrow_upper_right:演算子[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/monitoring/sending-a-report-to-a-list.html?lang=en#step-1--creating-the-recipient-list)のリストにレポートを自動的に送信する方法を説明します。


## トリガーイベントの活用

キャンペーン・トランザクション・メッセージングを使用して、情報システムからトリガーされたイベントから生成されるメッセージを自動化します。 これらのトランザクションメッセージには、請求書、注文確認、送料確認、パスワードの変更、製品の利用不可通知、取引明細書、Webサイトアカウントの作成などがあります。 これらのメッセージは、個別に、または電子メール、SMS、またはプッシュ通知を介してバッチで送信できます)。

:arrow_upper_right:トランザクションメッセージング機能について詳しくは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/introduction/about-transactional-messaging.html?lang=en#transactional-messaging)を参照してください。


Adobe CampaignとAdobe Analyticsを接続して、ユーザーの行動を取得し、リアルタイムでパーソナライズされたメッセージを送信します。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/integrating-with-adobe-experience-cloud/experience-triggers/about-triggers.html?lang=en#integrating-with-adobe-experience-cloud)で、キャンペーンをAnalyticsトリガーと統合する方法を説明します。

:bulb:[このセクション](../start/connect.md)では、キャンペーンを他のソリューションと統合する方法を学びます。
