---
title: メッセージトラッキングの基本を学ぶ
description: Adobe Campaignのトラッキング機能の詳細情報
feature: Monitoring, Email
role: User
level: Beginner
exl-id: f3de901f-519f-42ae-846c-f20c7cb560df
source-git-commit: 90ed82673b893b62a185227dd8cdfe80cc8f1455
workflow-type: tm+mt
source-wordcount: '462'
ht-degree: 72%

---

# メッセージトラッキングの基本を学ぶ {#get-started-tracking}

Adobe Campaignのトラッキング機能により、送信されたメッセージをトラッキングし、開封、リンクのクリック、購読解除などの受信者の動作を確認できます。

この情報は、配信の各受信者のプロファイルの「**[!UICONTROL トラッキング]**」タブで取得されます。このタブには、リストから選択した受信者がトラッキングおよびクリックしたすべての URL が表示されます。これは、配信画面に現在も表示されている配信内でトラッキングされたすべての URL の累積です。このリストは設定可能で、一般的には、クリックされた URL、クリックの日時、URL が含まれていたドキュメントが表示されます。

**配信ダッシュボード** は、配信とメッセージ送信中の潜在的な問題を監視するための重要なツールでもあります。

次の図に、ユーザーと様々なサーバー間のダイアログのステージを示します。

<img src="assets/tracking-diagram.png" width="70%">

>[!NOTE]
>
>トラッキング設定は、Managed Cloud Services デプロイメント用にAdobeによって実行されます。

## メッセージトラッキング {#message-tracking}

**トラッキングされたリンク**

メッセージの受信とメッセージコンテンツに挿入されたリンクのアクティベーションをトラッキングし、受信者の動作を詳しく把握できます。

[トラッキングされるリンクの詳細情報](tracked-links.md)

**URL トラッキング**

トラッキングオプションは、トラッキングされる URL をアクティブ化または非アクティブ化することで設定できます。

[URL トラッキングオプションの詳細情報](url-tracking.md)

**トラッキングされたリンクのパーソナライゼーション**

Campaign のトラッキング機能を使用すると、パーソナライズ可能なメールにリンクを追加し、それによってトラッキングをサポートできます。

[パーソナライズされたリンクのトラッキングの詳細情報](personalized-links.md)

**トラッキングログ**

配信が送信され、トラッキングがアクティブ化されると、**トラッキング**&#x200B;テクニカルワークフローがトラッキングデータを取得します。 このデータは、配信の「トラッキング」タブに表示されます。

[トラッキングログの詳細情報](tracking-logs.md)

**トラッキングのテスト**

トラッキングが有効なメッセージを送信する前に、ミラーページ、メールログ、およびリンクでトラッキングをテストできます。

[トラッキングのテストの詳細情報](testing-tracking.md)

## トラッキングレポート {#tracking-reports}

**トラッキング統計**

このレポートを使用すると、開封数、クリック数、トランザクション数などに関する統計が得られ、配信のマーケティング効果をトラッキングできます。

[トラッキングレポートの詳細情報](../reporting/delivery-reports.md#tracking-indicators)

**URL とクリックストリーム**

このレポートでは、配信後に訪問されたページのリストを表示します。

[URL とクリックストリームの詳細](../reporting/delivery-reports.md#urls-and-click-streams)

**「人」と「受信者」**

Adobe Campaign における「人」と「受信者」のトラッキングの違いについて、この例でより深く理解します。

人と受信者について詳しくは、[Campaign Classic v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/reports-on-deliveries/person-people-recipients.html?lang=ja#reporting){target="_blank"} を参照してください

**トラッキング指標**

このレポートでは、開封率、クリックスルー率、クリックストリームなど、配信を受け取ったときの受信者の行動をトラッキングする主要な指標を組み合わせます。

[トラッキング指標の詳細](../reporting/delivery-reports.md#tracking-indicators)

**指標の計算**

各テーブルでは、様々なレポートで使用する指標のリストと、配信タイプに応じた計算式を示しています。

[インジケーターの計算に関する詳細情報](../reporting/metrics-calculation.md)


