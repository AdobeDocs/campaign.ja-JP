---
product: Adobe Campaign
title: トラッキング機能と監視機能の基本を学ぶ
description: トラッキング機能と監視機能の基本を学ぶ
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 95ed0369-7215-496b-8e11-fe264c436488,e7931de5-83ce-431d-ae81-83793d257550
source-git-commit: 5363950db5092bc7e0a72a0823db1132a17dda33
workflow-type: tm+mt
source-wordcount: '870'
ht-degree: 81%

---

# メッセージのトラッキングと監視{#gs-ac-reports}

## Campaign のトラッキング機能

Campaign のトラッキング機能は、送信されたメッセージをトラッキングし、受信者の動作（開く、リンクのクリック、購読／購読解除など）を分析するのに役立ちます。 専用のログ、レポート、指標にアクセスしたり、データベースにクエリを実行して収集データを確認したりできます。

[!DNL :arrow_upper_right:]  詳しくは、 [Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=ja#tracking-tab)を参照してください。

配信ダッシュボードは、メッセージの送信中に配信と潜在的な問題を監視するための重要なツールです。

[!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/delivery-dashboard.html?lang=ja#sending-messages)を参照してください。

Campaign で利用可能な主要なトラッキング機能は以下のとおりです。

### メッセージトラッキング {#message-tracking}

<img src="assets/do-not-localize/icon-message-tracking.svg" width="60px">

**トラッキングされたリンク**

メッセージの受信とメッセージコンテンツに挿入されたリンクのアクティベーションをトラッキングし、受信者の動作を詳しく把握できます。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/how-to-configure-tracked-links.html?lang=ja#sending-messages)

**URL トラッキング**

トラッキングオプションは、トラッキングされる URL をアクティブ化または非アクティブ化することで設定できます。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/personalizing-url-tracking.html?lang=ja#sending-messages)


**トラッキングされたリンクのパーソナライゼーション**

Campaign のトラッキング機能を使用すると、パーソナライズ可能な E メールにリンクを追加し、それによってトラッキングをサポートできます。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/tracking-personalized-links/tracking-personalized-links.html?lang=ja#sending-messages)

**トラッキングログ**

配信が送信され、トラッキングがアクティブ化されると、**トラッキング**&#x200B;テクニカルワークフローがトラッキングデータを取得します。 このデータは、配信の「トラッキング」タブに表示されます。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/accessing-the-tracking-logs.html?lang=ja#sending-messages)

**トラッキングのテスト**

トラッキングが有効なメッセージを送信する前に、ミラーページ、E メールログ、およびリンクでトラッキングをテストできます。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/testing-tracking.html?lang=ja#sending-messages)

### web アプリケーショントラッキング {#web-application-tracking}

<img src="assets/do-not-localize/icon-web-app.svg" width="60px">

**web アプリケーションのトラッキング**

また、トラッキングタグを含む web アプリケーションページの訪問をトラッキングおよび測定できます。この機能は、フォームやオンライン調査など、あらゆるタイプの web アプリケーションに使用できます。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/tracking-a-web-application.html?lang=ja#designing-content)

**web アプリケーショントラッキングのオプトアウト**

web アプリケーショントラッキングのオプトアウトを使用すると、行動トラッキングをオプトアウトしたエンドユーザーの web 行動のトラッキングを停止できます。web アプリケーションやランディングページにバナーを表示して、ユーザーがオプトアウトできる機能を追加できます。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/web-application-tracking-opt-out.html?lang=ja#designing-content)

### トラッキングレポート{#tracking-reports}

<img src="assets/do-not-localize/icon_monitor.svg" width="60px">

**トラッキング統計**

このレポートを使用すると、開封数、クリック数、トランザクション数などに関する統計が得られ、配信のマーケティング効果をトラッキングできます。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/about-message-tracking.html?lang=ja#tracking-reports)

**URL とクリックストリーム**

このレポートでは、配信後に訪問されたページのリストを表示します。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/delivery-reports.html?lang=ja#urls-and-click-streams)

**「人」と「受信者」**

Adobe Campaign における「人」と「受信者」のトラッキングの違いについて、この例でより深く理解します。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/person-people-recipients.html?lang=ja#reporting)

**トラッキング指標**

このレポートでは、開封率、クリックスルー率、クリックストリームなど、配信を受け取ったときの受信者の行動をトラッキングする主要な指標を組み合わせます。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/delivery-reports.html?lang=ja#reporting)

**指標の計算**

各テーブルでは、様々なレポートで使用する指標のリストと、配信タイプに応じた計算式を示しています。

[!DNL :arrow_upper_right:] [詳しくは、Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/indicator-calculation.html?lang=ja#reporting)

## 監視ガイドライン

Adobe Campaign では、プロセスと環境を監視できる一連の機能を提供します。

### 配信の監視

送信後に配信を監視することは、マーケティングキャンペーンを効率的に実施し、顧客に働きかけるうえで重要なステップになります。

[!DNL :arrow_upper_right:] 配信の送信後に監視できる情報、配信の失敗と強制隔離の管理方法について詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja#sending-messages)

### ワークフローの監視

[!DNL :arrow_upper_right:] ワークフローの実行を監視する方法については、  [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/monitoring-workflows/monitoring-workflow-execution.html?lang=ja#automating-with-workflows)

### インスタンスの監視

[!DNL :arrow_upper_right:] インスタンス監視のガイドラインは、 [Campaign Classicv7ドキュメントに記載されています](https://experienceleague.adobe.com/docs/campaign-classic/using/monitoring-campaign-classic/introduction/monitoring-guidelines.html?lang=ja#monitoring-campaign-classic)

監査記録のセルフサービスインターフェイスを使用すると、インスタンス内で行われた変更を監視できます。監査記録を使用すると、Adobe Campaign のインスタンス内で発生するアクションとイベントの包括的なリストをリアルタイムで記録できます。データの履歴を確認することにより、ワークフローで発生した事象、ワークフローの最終更新者、インスタンス内でユーザーが行った操作などを知ることができます。

[!DNL :arrow_upper_right:] 監査記録の詳細については、  [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/monitoring-campaign-classic/production-procedures/audit-trail.html?lang=ja#accessing-audit-trail)
