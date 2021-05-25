---
solution: Campaign v8
product: Adobe Campaign
title: トラッキングおよび監視機能の概要
description: トラッキングおよび監視機能の概要
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 95ed0369-7215-496b-8e11-fe264c436488,e7931de5-83ce-431d-ae81-83793d257550
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '924'
ht-degree: 35%

---

# メッセージのトラッキングと監視{#gs-ac-reports}

## Campaignのトラッキング機能

キャンペーントラッキング機能は、送信されたメッセージをトラッキングし、受信者の行動を分析するのに役立ちます。開く、リンクのクリック、購読/購読解除など。 専用のログ、レポートおよび指標にアクセスし、データベースに対してクエリを実行して、収集したデータを確認することができます。

:arrow_upper_right: 詳しくは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=en#tracking-tab)を参照してください。

配信ダッシュボードは、配信と、メッセージの送信中に発生する可能性のある問題を監視するための重要なツールです。

:arrow_upper_right:詳しくは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/delivery-dashboard.html?lang=en#sending-messages)を参照してください。

Campaignで使用できる主なトラッキング機能を以下に示します。

### メッセージトラッキング {#message-tracking}

<img src="assets/do-not-localize/icon-message-tracking.svg" width="60px">

**トラッキングされたリンク**

メッセージの受信、およびメッセージコンテンツに挿入されたリンクのアクティベーションをトラッキングし、受信者の動作を詳しく把握できます。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/how-to-configure-tracked-links.html?lang=en#sending-messages)の詳細

**URL トラッキング**

トラッキングオプションは、トラッキングされる URL をアクティブ化または非アクティブ化することで設定できます。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/personalizing-url-tracking.html?lang=en#sending-messages)の詳細


**トラッキングされたリンクのパーソナライゼーション**

Campaign のトラッキング機能を使用すると、パーソナライズ可能な E メールにリンクを追加し、トラッキングをサポートできます。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/tracking-personalized-links/tracking-personalized-links.html?lang=en#sending-messages)の詳細

**トラッキングログ**

配信が送信され、トラッキングが有効化されると、**トラッキング**&#x200B;テクニカルワークフローがトラッキングデータを取得します。 このデータは、配信の「トラッキング」タブに表示されます。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/accessing-the-tracking-logs.html?lang=en#sending-messages)の詳細

**トラッキングのテスト**

トラッキング用のメッセージを送信する前に、ミラーページ、E メールログ、リンクでトラッキングをテストできます。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/testing-tracking.html?lang=en#sending-messages)の詳細

### web アプリケーショントラッキング {#web-application-tracking}

<img src="assets/do-not-localize/icon-web-app.svg" width="60px">

**web アプリケーションのトラッキング**

また、トラッキングタグを含む web アプリケーションページの訪問をトラッキングおよび測定できます。この機能は、フォームやオンライン調査など、すべての種類の web アプリケーションで使用できます。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/tracking-a-web-application.html?lang=en#designing-content)の詳細

**web アプリケーショントラッキングのオプトアウト**

web アプリケーショントラッキングのオプトアウトを使用すると、行動トラッキングをオプトアウトしたエンドユーザーの web 行動のトラッキングを停止できます。web アプリケーションやランディングページにバナーを表示して、ユーザーがオプトアウトできるようにする機能を追加できます。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/web-application-tracking-opt-out.html?lang=en#designing-content)の詳細

### トラッキングレポート{#tracking-reports}

<img src="assets/do-not-localize/icon_monitor.svg" width="60px">

**トラッキング統計**

このレポートは、開封数、クリック数、トランザクション数に関する統計を提供し、配信のマーケティング効果をトラッキングできます。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/about-message-tracking.html?lang=en#tracking-reports)の詳細

**URL とクリックストリーム**

このレポートは、配信後に訪問されたページのリストを表示します。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/delivery-reports.html?lang=en#urls-and-click-streams)の詳細

**「人」と「受信者」**

この例で、Adobe Campaign においての「人」と「受信者」のトラッキングの違いをより深く理解します。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/person-people-recipients.html?lang=en#reporting)の詳細

**トラッキング指標**

このレポートは、開封、クリックスルー率、クリックストリームなど、配信を受け取ったときの受信者の行動をトラッキングする主要指標を組み合わせたものです。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/delivery-reports.html?lang=en#reporting)の詳細

**指標の計算**

各テーブルには、様々なレポートで使用される指標のリストと、配信タイプに応じた計算式が示されます。

:arrow_upper_right:[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/indicator-calculation.html?lang=en#reporting)の詳細

## 監視のガイドライン

Adobe Campaignは、プロセスと環境を監視する一連の機能を提供します。

### 配信の監視

送信後に配信を監視することは、マーケティングキャンペーンを効率的にし、お客様に連絡を取るための重要なステップです。

:arrow_upper_right:配信の送信後に監視できる情報、配信の失敗と強制隔離の管理方法について詳しくは、[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=en#sending-messages)を参照してください。

### ワークフローの監視

:arrow_upper_right:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/monitoring-workflows/monitoring-workflow-execution.html?lang=en#automating-with-workflows)でワークフローの実行を監視する方法を説明します

### インスタンスの監視

:arrow_upper_right:インスタンス監視のガイドラインは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/monitoring-campaign-classic/introduction/monitoring-guidelines.html?lang=en#monitoring-campaign-classic)で参照できます。

監査記録のセルフサービスインターフェイスを使用して、インスタンス内でおこなわれた変更を監視します。 監査記録は、Adobe Campaignインスタンス内で発生するアクションとイベントの包括的なリストをリアルタイムで記録します。 データの履歴にアクセスして、次のような質問に回答できます。ワークフローへの影響、最後にワークフローを更新したユーザー、またはインスタンスでユーザーがおこなった操作。

:arrow_upper_right:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/monitoring-campaign-classic/production-procedures/audit-trail.html?lang=en#accessing-audit-trail)の監査証跡の詳細
