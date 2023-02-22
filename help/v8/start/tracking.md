---
title: トラッキング機能と監視機能の基本を学ぶ
description: トラッキング機能と監視機能の基本を学ぶ
feature: Monitoring
role: User
level: Beginner, Intermediate
exl-id: f3de901f-519f-42ae-846c-f20c7cb560df
source-git-commit: 9bea7904ea4507083d2cf45193877e7a2539d0c7
workflow-type: tm+mt
source-wordcount: '848'
ht-degree: 97%

---

# メッセージのトラッキングと監視{#gs-ac-reports}

## Campaign のトラッキング機能

Campaign のトラッキング機能は、送信されたメッセージをトラッキングし、受信者の動作（開く、リンクのクリック、購読／購読解除など）を分析するのに役立ちます。 専用のログ、レポート、指標にアクセスしたり、データベースにクエリを実行して収集データを確認したりできます。

詳しくは、 [Campaign Classicv7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=ja#tracking-tab){target="_blank"}.

配信ダッシュボードは、メッセージの送信中に配信状況と潜在的な問題を監視するための重要なツールです。

詳しくは、 [Campaign Classicv7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/delivery-dashboard.html?lang=ja#sending-messages){target="_blank"}.

Campaign で利用可能な主要なトラッキング機能は以下のとおりです。

### メッセージトラッキング {#message-tracking}

<img src="assets/do-not-localize/icon-message-tracking.svg" width="60px">

**トラッキングされたリンク**

メッセージの受信とメッセージコンテンツに挿入されたリンクのアクティベーションをトラッキングし、受信者の動作を詳しく把握できます。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/how-to-configure-tracked-links.html?lang=ja#sending-messages){target="_blank"}

**URL トラッキング**

トラッキングオプションは、トラッキングされる URL をアクティブ化または非アクティブ化することで設定できます。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/personalizing-url-tracking.html?lang=ja#sending-messages){target="_blank"}


**トラッキングされたリンクのパーソナライゼーション**

Campaign のトラッキング機能を使用すると、パーソナライズ可能な E メールにリンクを追加し、それによってトラッキングをサポートできます。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/tracking-personalized-links/tracking-personalized-links.html?lang=ja#sending-messages){target="_blank"}

**トラッキングログ**

配信が送信され、トラッキングがアクティブ化されると、**トラッキング**&#x200B;テクニカルワークフローがトラッキングデータを取得します。 このデータは、配信の「トラッキング」タブに表示されます。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/accessing-the-tracking-logs.html?lang=ja#sending-messages){target="_blank"}

**トラッキングのテスト**

トラッキングが有効なメッセージを送信する前に、ミラーページ、E メールログ、およびリンクでトラッキングをテストできます。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/testing-tracking.html?lang=ja#sending-messages){target="_blank"}

### Web アプリケーショントラッキング {#web-application-tracking}

<img src="assets/do-not-localize/icon-web-app.svg" width="60px">

**web アプリケーションのトラッキング**

また、トラッキングタグを含む web アプリケーションページの訪問をトラッキングおよび測定できます。この機能は、フォームやオンライン調査など、あらゆるタイプの web アプリケーションに使用できます。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/tracking-a-web-application.html?lang=ja#designing-content){target="_blank"}

**web アプリケーショントラッキングのオプトアウト**

web アプリケーショントラッキングのオプトアウトを使用すると、行動トラッキングをオプトアウトしたエンドユーザーの web 行動のトラッキングを停止できます。web アプリケーションやランディングページにバナーを表示して、ユーザーがオプトアウトできる機能を追加できます。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-applications/web-application-tracking-opt-out.html?lang=ja#designing-content){target="_blank"}

### トラッキングレポート {#tracking-reports}

<img src="assets/do-not-localize/icon_monitor.svg" width="60px">

**トラッキング統計**

このレポートを使用すると、開封数、クリック数、トランザクション数などに関する統計が得られ、配信のマーケティング効果をトラッキングできます。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/about-message-tracking.html?lang=ja#tracking-reports){target="_blank"}

**URL とクリックストリーム**

このレポートでは、配信後に訪問されたページのリストを表示します。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/delivery-reports.html?lang=ja#urls-and-click-streams){target="_blank"}

**「人」と「受信者」**

Adobe Campaign における「人」と「受信者」のトラッキングの違いについて、この例でより深く理解します。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/person-people-recipients.html?lang=ja#reporting){target="_blank"}

**トラッキング指標**

このレポートでは、開封率、クリックスルー率、クリックストリームなど、配信を受け取ったときの受信者の行動をトラッキングする主要な指標を組み合わせます。

[詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/delivery-reports.html?lang=ja#reporting){target="_blank"}

**指標の計算**

各テーブルでは、様々なレポートで使用する指標のリストと、配信タイプに応じた計算式を示しています。

[詳細情報](../reporting/metrics-calculation.md)

## 監視ガイドライン

Adobe Campaign では、プロセスと環境を監視できる一連の機能を提供します。

### 配信の監視

送信後に配信を監視することは、マーケティングキャンペーンを効率的に実施し、顧客に働きかけるうえで重要なステップになります。

 配信を送信した後に監視できる情報の詳細、配信の障害や強制隔離の管理方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja#sending-messages)を参照してください。{target="_blank"}

### ワークフローの監視

ワークフローの実行を監視する方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja)を参照してください。

### インスタンスの監視

インスタンス監視のガイドラインについては、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/monitoring-campaign-classic/introduction/monitoring-guidelines.html?lang=ja#monitoring-campaign-classic)を参照してください{target="_blank"}

監査記録のセルフサービスインターフェイスを使用すると、インスタンス内で行われた変更を監視できます。監査記録を使用すると、Adobe Campaign のインスタンス内で発生するアクションとイベントの包括的なリストをリアルタイムで記録できます。データの履歴を確認することにより、ワークフローで発生した事象、ワークフローの最終更新者、インスタンス内でユーザーが行った操作などを知ることができます。

監査証跡の詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/monitoring-campaign-classic/production-procedures/audit-trail.html?lang=ja#accessing-audit-trail)を参照してください{target="_blank"}
