---
solution: Campaign v8
product: Adobe Campaign
title: Campaign 自動処理の概要
description: Campaign 自動処理の概要
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 0be1c5f5-f07d-46dc-bebc-5eb50f466547
source-git-commit: 8ede6bc1bc08a27e74dde6a427561c33f154a883
workflow-type: tm+mt
source-wordcount: '1187'
ht-degree: 45%

---

# プロセスの管理と自動化

Campaign を設定して、マーケティングキャンペーンの強力な自動処理機能を活用します。

次の設定をおこなうことができます。

* ワークフロー
* 繰り返しキャンペーン
* エンドツーエンドの検証サイクル
* アラート
* レポートの自動送信
* トリガーされるイベント

## ワークフローのデザインと使用{#gs-ac-wf}

Adobe Campaign ワークフローを使用すると、セグメントの作成とメッセージの準備から配信に至るまでの、マーケティングキャンペーンのあらゆる側面でスピードとスケールを改善できます。

これらの[エンドツーエンドの使用例](#end-to-end-uc)でワークフローを設計する方法を説明します。

ワークフローユーザーインターフェイスと実行について詳しくは、Campaign Classicv7のドキュメントを参照してください。

[!DNL :arrow_upper_right:]  [ワークフローの基本を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html?lang=ja#automating-with-workflows)
* ワークフローアクティビティ:
   * [ターゲティングアクティビティ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/about-targeting-activities.html?lang=ja)：クエリ、リスト読み込み、エンリッチメント、和集合など
   * [フロー制御アクティビティ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/flow-control-activities/about-flow-control-activities.html?lang=ja)：スケジューラー、フォーク、警告、外部信号など
   * [アクションアクティビティ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/about-action-activities.html?lang=ja)：チャネル間の配信、JavaScript コード、CRM アクティビティ、集計の更新など
   * [イベントアクティビティ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/action-activities/about-action-activities.html)：ファイル転送、Web ダウンロードなど
      [!DNL :arrow_upper_right:]  [マーケティングキャンペーンワークフローでのオーディエンスのビルド](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html?lang=ja#building-the-main-target-in-a-workflow)

      [!DNL :arrow_upper_right:]  [ワークフローのベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/workflow-best-practices.html?lang=ja)
      [!DNL :arrow_upper_right:] [組み込みのテクニカルワークフロー](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/advanced-management/about-technical-workflows.html?lang=ja)
      [!DNL :arrow_upper_right:] [ワークフロー実行の監視](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/monitoring-workflows/monitoring-workflow-execution.html?lang=ja)


## 繰り返しキャンペーンの設定

繰り返しワークフローをデザインし、ワークフローを実行するたびに新しい配信インスタンスを作成します。 たとえば、ワークフローが週に 1 回実行されるよう設計されている場合、1 年後には 52 件の配信が存在することになります。つまり、ログは各配信インスタンスで区切られます。

[!DNL :arrow_upper_right:] 繰り返しキャンペーンの作成方法については、 [Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/setting-up-marketing-campaigns.html?lang=ja#recurring-and-periodic-campaigns)を参照してください。


## トリガーイベントの活用

Campaign トランザクションメッセージを使用すると、情報システムからトリガーされるイベントに基づいて、メッセージを自動的に生成できます。 トランザクションメッセージの例としては、請求書送付、注文確認、配送確認、パスワード変更、商品の在庫切れ通知、取引明細書送付、Web サイトのアカウント作成などがあります。 これらのメッセージは、個別に、またはバッチで、Eメール、SMS、プッシュ通知経由で送信できます。

[!DNL :bulb:] トランザクションメッセージ機能について詳しくは、この節 [を参照してください](../send/transactional.md)。

Adobe Campaign と Adobe Analytics を接続すると、ユーザーの行動を把握し、パーソナライズされたメッセージをリアルタイムに送信できます。

[!DNL :bulb:] Campaignを他のソリューションと統合する方法については、この節を [参照してください](../start/connect.md)


## ワークフローのエンドツーエンドの使用例{#end-to-end-uc}

この節では、Campaign ワークフロー機能を活用する様々なユースケースを示します。これらの使用例は、Adobe Campaign Classic v7で構築され、Adobe Campaign v8に適用されます。

### 配信 {#deliveries}

<img src="assets/do-not-localize/icon_send.svg" width="60px">

* [A/B テスト](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/a-b-testing/use-case/a-b-testing-use-case.html)

   ターゲティングワークフローを使用して、2つのEメール配信コンテンツを比較する方法を説明します。 どちらの配信でも、メッセージとテキストは同一とし、レイアウトのみを変更します。ターゲットの母集団は 3 つに分割します。2 つのテストグループと、その他の母集団です。各テストグループに別々のバージョンを配信します。

* [誕生日の E メールの送信](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/deliveries/sending-a-birthday-email.html)

   この使用例では、リスト内の受信者に対し誕生日に繰り返し E メールを送信する方法を説明します。

* [配信コンテンツの読み込み](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/deliveries/loading-delivery-content.html)

   リモートサーバー上のHTMLファイルに配信コンテンツが格納されている場合、このコンテンツをAdobe Campaign配信に容易に読み込むことができます。

* [クロスチャネル配信ワークフロー](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/deliveries/cross-channel-delivery-workflow.html)

   クロスチャネル配信ワークフローの作成方法を説明します。 目的は、データベースの受信者からオーディエンスを別々のグループにセグメント化し、最初のグループにEメールを送信し、もう1つのグループにSMSを送信することです。

* [カスタム日付フィールドを使用した E メールエンリッチメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/deliveries/email-enrichment-with-custom-date-fields.html)

   今月の誕生日を祝うプロファイルに、カスタムデータフィールドを含むEメールを送信する方法を説明します。 Eメールには、誕生日の前後1週間有効なクーポンが含まれます。

* [コンテンツの作成、編集、公開の自動化](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/content-management/automating-via-workflows.html)

   Campaignコンテンツ管理アドオンを使用して、コンテンツブロックの作成と配信を自動化する方法を説明します。


### 監視 {#monitoring}

<img src="assets/do-not-localize/icon_monitoring.svg" width="60px">

* [リストへのレポートの送信](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/monitoring/sending-a-report-to-a-list.html)

   PDF形式の月別組み込みのトラッキング指標レポートを生成し、Campaignオペレーターのリストに送信する方法を説明します。

* [ワークフローの監視](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/monitoring/supervising-workflows.html)

   一連のワークフローの状態（「一時停止」、「停止」、「エラーあり」）を監視するワークフローを作成する方法を説明します。

* [オペレーターへのパーソナライズされたアラートの送信](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/monitoring/sending-personalized-alerts-to-operators.html)

   ニュースレターを開封したが、そのニュースレターに含まれるリンクをクリックしなかったプロファイルの名前を含むアラートをオペレーターに送信する方法を説明します。

### データ管理 {#management}

<img src="assets/do-not-localize/icon_manage.svg" width="60px">

* [データ更新の調整](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/coordinating-data-updates.html)

   別の更新操作を実行する前に、更新プロセスが終了したことを確認する方法を説明します。 そのためには、インスタンス変数を設定し、インスタンスが実行中かどうかワークフローに確認させて、ワークフローの実行を継続し、更新をおこなうべきか決定します。

* [概要リストの作成](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/creating-a-summary-list.html)

   ファイルや以下に示す複数のエンリッチメントを収集した後にサマリーリストを作成できるワークフローを作成する方法を説明します。 この例では、店舗で購入をおこなった顧客の連絡先のリストをベースにします。

* [データのエンリッチメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/enriching-data.html)

   スコアに応じて、最新の競争に参加したプロファイルに、パーソナライズされた配信を送信する方法を説明します。

* [集計の使用](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/using-aggregates.html)

   データベースに追加された最新の受信者を特定する方法を説明します。

* [増分クエリを使用した四半期ごとのリスト更新](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/designing-queries/quarterly-list-update.html)

   増分処理クエリを使用して受信者リストを自動的に更新する方法を説明します。

* [繰り返しインポートワークフローの設定](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/recurring-import-workflow.html)

   Adobe CampaignデータベースのCRMからのプロファイルのインポートに再利用できるワークフローを設計する方法を説明します。

### ターゲティング {#designing-queries}

<img src="assets/do-not-localize/icon_filter.svg" width="60px">

* [受信者テーブルのクエリ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/designing-queries/querying-recipient-table.html)

   Eメールドメインが「orange.co.uk」で、横浜市に住んでいない受信者の名前とEメールを復元する方法を説明します。

* [配信情報のクエリ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/designing-queries/querying-delivery-information.html)

   配信情報に関するクエリを定義して、プロファイルの動作を取得する方法について説明します。

* [集計の計算](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/designing-queries/performing-aggregate-computing.html)

   横浜市に住むプロファイルの数を性別に基づいてカウントする方法を説明します。

* [多対多関係を使用したクエリ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/designing-queries/querying-using-many-to-many-relationship.html)

   過去7日間連絡されていないプロファイルを見つける方法を説明します。

* [クエリでのインスタンス変数の呼び出し](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/advanced-management/javascript-scripts-and-templates.html?lang=en#example)

   インスタンス変数を使用して、母集団に適用する分割率を動的に計算する方法を説明します。

