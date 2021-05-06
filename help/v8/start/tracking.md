---
solution: Campaign Classic
product: campaign
title: 追跡機能と監視機能の概要
description: 追跡機能と監視機能の概要
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 95ed0369-7215-496b-8e11-fe264c436488,e7931de5-83ce-431d-ae81-83793d257550
translation-type: tm+mt
source-git-commit: 2fd86324b34b7a7d1e1cb36d1073b5adc24ebda7
workflow-type: tm+mt
source-wordcount: '907'
ht-degree: 35%

---

# メッセージのトラッキングと監視{#gs-ac-reports}

## キャンペーンの追跡機能

キャンペーントラッキング機能は、送信されたメッセージを追跡し、受信者の動作を分析するのに役立ちます。を開く、リンクのクリック、購読/購読解除など。 専用のログ、レポートと指標、データベースのクエリ、収集したデータの確認などにアクセスできます。

:arrow_upper_right: 詳しくは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=en#tracking-tab)を参照してください。

配信ダッシュボードは、メッセージの送信中に配信や発生する可能性のある問題を監視するための主要なツールです。

:arrow_upper_right:詳しくは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/delivery-dashboard.html?lang=en#sending-messages)を参照してください。

キャンペーンで使用できる主なトラッキング機能を以下に示します。

### メッセージトラッキング {#message-tracking}

<img src="assets/do-not-localize/icon-message-tracking.svg" width="60px">

**トラッキングされたリンク**

メッセージの受信、およびメッセージコンテンツに挿入されたリンクのアクティベーションをトラッキングし、受信者の動作を詳しく把握できます。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/how-to-configure-tracked-links.html?lang=en#sending-messages)

**URL トラッキング**

トラッキングオプションは、トラッキングされる URL をアクティブ化または非アクティブ化することで設定できます。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/personalizing-url-tracking.html?lang=en#sending-messages)


**トラッキングされたリンクのパーソナライゼーション**

Campaign のトラッキング機能を使用すると、パーソナライズ可能な E メールにリンクを追加し、トラッキングをサポートできます。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/tracking-personalized-links/tracking-personalized-links.html?lang=en#sending-messages)

**トラッキングログ**

**トラッキング**&#x200B;テクニカルワークフローは、配信が送信され、トラッキングがアクティブ化されると、トラッキングデータを取得します。 このデータは、配信の「トラッキング」タブに表示されます。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/accessing-the-tracking-logs.html?lang=en#sending-messages)

**トラッキングのテスト**

トラッキング用のメッセージを送信する前に、ミラーページ、E メールログ、リンクでトラッキングをテストできます。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/testing-tracking.html?lang=en#sending-messages)

### web アプリケーショントラッキング {#web-application-tracking}

<img src="assets/do-not-localize/icon-web-app.svg" width="60px">

**web アプリケーションのトラッキング**

また、トラッキングタグを含む web アプリケーションページの訪問をトラッキングおよび測定できます。この機能は、フォームやオンライン調査など、すべての種類の web アプリケーションで使用できます。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/tracking-a-web-application.html?lang=en#designing-content)

**web アプリケーショントラッキングのオプトアウト**

web アプリケーショントラッキングのオプトアウトを使用すると、行動トラッキングをオプトアウトしたエンドユーザーの web 行動のトラッキングを停止できます。web アプリケーションやランディングページにバナーを表示して、ユーザーがオプトアウトできるようにする機能を追加できます。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/web-application-tracking-opt-out.html?lang=en#designing-content)

### トラッキングレポート{#tracking-reports}

<img src="assets/do-not-localize/icon_monitor.svg" width="60px">

**トラッキング統計**

このレポートは、開封数、クリック数、トランザクション数に関する統計を提供し、配信のマーケティング効果をトラッキングできます。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/about-message-tracking.html?lang=en#tracking-reports)

**URL とクリックストリーム**

このレポートは、配信後に訪問されたページのリストを表示します。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/delivery-reports.html?lang=en#urls-and-click-streams)

**「人」と「受信者」**

この例で、Adobe Campaign においての「人」と「受信者」のトラッキングの違いをより深く理解します。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/person-people-recipients.html?lang=en#reporting)

**トラッキング指標**

このレポートは、開封、クリックスルー率、クリックストリームなど、配信を受け取ったときの受信者の行動をトラッキングする主要指標を組み合わせたものです。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/delivery-reports.html?lang=en#reporting)

**指標の計算**

各テーブルには、様々なレポートで使用される指標のリストと、配信タイプに応じた計算式が示されます。

:arrow_upper_right:[Campaign Classicドキュメントの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/indicator-calculation.html?lang=en#reporting)

## 監視のガイドライン

Adobe Campaignオファーは、プロセスと環境を監視する機能のセットです。

### 配信の監視

送信後に配信を監視することは、マーケティングキャンペーンを効率的にし、お客様に連絡を取るための重要なステップです。

:arrow_upper_right:配信を送信した後に監視できる情報の詳細、配信の障害や強制隔離の管理方法については、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=en#sending-messages)を参照してください

### ワークフローの監視

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/monitoring-workflows/monitoring-workflow-execution.html?lang=en#automating-with-workflows)でワークフローの実行を監視する方法を学びます

### インスタンスの監視

:arrow_upper_right:インスタンス監視のガイドラインは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/monitoring-campaign-classic/introduction/monitoring-guidelines.html?lang=en#monitoring-campaign-classic)で参照できます

監査証跡セルフサービスインターフェイスを使用して、インスタンス内で行われた変更を監視します。 監査証跡は、Adobe Campaign・インスタンス内で発生するアクションとイベントの包括的なリストをリアルタイムでキャプチャします。 データの履歴にアクセスして、次のような質問に答えることができます。ワークフローに対する変更、および最後に更新したユーザー、またはインスタンス内でユーザーが行った操作。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/monitoring-campaign-classic/production-procedures/audit-trail.html?lang=en#accessing-audit-trail)の監査証跡の詳細
