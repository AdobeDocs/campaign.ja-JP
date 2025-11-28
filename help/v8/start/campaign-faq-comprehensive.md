---
title: Campaign v8 に関するよくある質問
description: 設定、設定、メッセージング、ワークフローなどに関するAdobe Campaign v8 のよくある質問への回答を示します
feature: Overview
role: User
level: Beginner
keywords: FAQ, Campaign v8，質問，回答，ヘルプ，サポート，トラブルシューティング
hide: true
hidefromtoc: true
source-git-commit: adaa37a43da1156ee1a84eb7ffe455ed4a30d9b1
workflow-type: tm+mt
source-wordcount: '12458'
ht-degree: 9%

---

# よくある質問 {#faq}

Adobe Campaign v8 に関するよくある質問への回答を簡単に示します。 使い始めたばかりの場合でも、高度な設定のヘルプを探している場合でも、以下のトピック別に回答が整理されています。

**Campaign を初めて使用する場合** 一般的 [ 質問 ](#general) および [ 主要概念 ](#key-concepts) から始めます。\
**技術的なサポートが必要な場合は、** 開発者 [ と ](#developers) キャンペーン設定 [ を ](#settings) 認します。\
**答えが見つからない場合は、** [ コミュニティフォーラム ](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"} または [ サポートへのお問い合わせ ](#get-help) をご覧ください。

**ヒント：** Ctrl + F （Macの場合は Cmd + F）を使用して、このページ上の特定のキーワードを検索します。 任意の質問をクリックして回答を展開します。


## 一般的な質問 {#general}

接続方法、アップグレード方法、サポートを受ける方法など、Adobe Campaign v8 に関するよくある質問への回答を示します。

+++ Campaign v8 に接続するにはどうすればよいですか？

Adobe Campaign に接続するには、Campaign クライアントコンソールをダウンロードしてインストールする必要があります。

詳しくは、[ここをクリック](connect.md)してください。

Campaign v8.6 リリース以降では、Adobe Experience Cloudの一元化された環境から使用できる **Campaign web ユーザーインターフェイス** にアクセスできます。 Experience Cloudは、Adobeのデジタルマーケティングアプリケーション、製品およびサービスの統合ファミリーです。

Adobe Experience Cloudに接続し、Adobe Campaign web インターフェイスにアクセスする方法については、このページ [ を参照し ](campaign-ui.md#ac-web-ui) ください。 詳しくは、[Adobe Campaign web ユーザーインターフェイスドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}を参照してください。


**関連トピック：**

[ クライアントコンソールのインストール ](connect.md) | [Campaign ユーザーインターフェイス ](campaign-ui.md) | [ ユーザー権限 ](gs-permissions.md)

+++

+++ Campaign v8 をオンプレミス環境またはハイブリッド環境にインストールすることはできますか？

いいえ。Campaign v8 は、Adobeで完全にホストされる **Managed Cloud Service** として排他的に使用できます。

**Managed Cloud Services の主なメリット：**

* 優れたパフォーマンスと拡張性
* 自動アップグレード – 常に最新バージョン
* 継続的な監視によるセキュリティの向上
* インフラストラクチャの管理や IT のオーバーヘッドがない
* 組み込み型の高可用性と災害復旧

[Campaign v8 アーキテクチャ ](../architecture/architecture.md) および [Campaign v8 と Classic v7 の違い ](../start/v7-to-v8.md) について説明します。

+++

+++ Campaign を最新版にアップグレードするにはどうすればよいですか？

Adobe Campaign は定期的に更新されています。マイナーバージョンは、新機能、改善および修正が加えられ、毎年リリースされています。 さらに、累積的な修正のみを含むビルドを定期的にリリースしています。

この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。 だからこそ、最新バージョンの Adobe Campaign を実行することが重要であると考えているのです。

**メモ：** Managed Cloud Services ユーザーの場合は、Adobeが新しいリリースを提供し、インスタンスをアップグレードします。

詳細情報 [Campaign のバージョンとアップグレード ](upgrades.md)。

+++

+++ メールの配信品質を向上させるにはどうすればよいですか？

メール配信の品質は、すべての送信者がマーケティングプログラムを成功させるうえで重要なコンポーネントであり、条件とルールが常に変化し続けるという特徴があります。 デジタルの世界を効果的に進むには、主な配信品質の傾向を考慮して、メール戦略を定期的に調整し、最適な方法でオーディエンスにアプローチする必要があります。

詳しくは、配信品質のベストプラクティス [ のガイドを参照してください ](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}

Campaign に配信品質を実装する方法については、[このガイド](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/general-resources.html?lang=ja){target="_blank"}を参照してください

**関連トピック：**

[ 配信品質について ](../send/about-deliverability.md) | [ メッセージコンテンツの制御 ](../send/control-message-content.md) | [ 配信品質の監視 ](../send/monitoring-deliverability.md) | [SpamAssassin](../send/spamassassin.md)

+++

+++ エラーなしで配信されていることを確認するにはどうすればよいですか？

配信を成功させるには、次の手順に従います。

**送信前：**

* 配信分析を実行してエラー（パーソナライゼーションの欠落、無効な受信者、コンテンツの問題）を検出します
* レンダリングとパーソナライゼーションを確認するためのテスト配達確認の送信
* 準備中に警告を確認
* ターゲット母集団数の検証

**送信中および送信後：**

* リアルタイム統計（送信、配信、バウンス、エラー）について配信ダッシュボードを監視
* 配信ログでメッセージレベルのステータスを確認する
* 成功率、バウンス率およびエラーメッセージの追跡
* 強制隔離アドレスを確認

**ベストプラクティス：**

* エラーしきい値に関するアラートの設定
* 大量のウェーブの使用（バッチ送信）
* 最初に少量でテストします。
* 受信者データベースを定期的にクリーンアップする
* 送信者の評価の監視

詳細情報 [ 配信の監視 ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja){target="_blank"} および [ 配信のベストプラクティス ](delivery-best-practices.md)。

+++

+++ ワークフローの実行を監視できますか？

はい。Campaign には、ワークフローの実行を監視するためのツールがいくつか用意されています。

* **ワークフローダッシュボード** – 各ワークフローアクティビティのステータス、進行状況およびエラーをリアルタイムで表示します
* **[ワークフローログ ](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution#displaying-logs){target="_blank"}** – 問題のトラブルシューティング用に詳細な実行ログにアクセスできます
* **[ヒートマップ ](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/monitoring-workflows/heatmap){target="_blank"}** - ワークフローアクティビティを視覚化し、パフォーマンスボトルネックを特定します
* **[監査記録](../reporting/audit-trail.md)** - ワークフローに加えられたすべての変更を追跡します
* **[アラート ](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/use-cases/monitoring/send-alerts-to-operators){target="_blank"}** - ワークフローの失敗または遅延の通知を設定します

ワークフローを監視するには、ワークフローを開いて「**ログ**」タブをクリックします。 失敗したアクティビティは赤でハイライト表示され、クリックするとエラーの詳細を表示できます。

詳しくは、[ ワークフロー実行の監視 ](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution){target="_blank"} および [ ワークフローのベストプラクティス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"} を参照してください。

+++

+++ Campaign v8 と互換性があるシステムやコンポーネントはどれですか？

[Adobe Campaign 互換性マトリックス](compatibility-matrix.md)で、Campaign の最新ビルドでサポートされているすべてのシステムとコンポーネントのリストを入手できます。

+++

+++ Campaign はどのようにしてダウンロードできますか？

インストールプログラムとクライアントコンソールは、Adobe ダウンロードセンターから入手できます。

管理者ユーザーの場合は、Adobe[ ソフトウェア配布 ](https://experience.adobe.com/#/downloads/content/software-distribution/jp/campaign.html){target="_blank"} にアクセスして、Adobe Campaignをダウンロードします。

Distribution Center については [ このページ ](https://experienceleague.adobe.com/docs/experience-cloud/software-distribution/home.html?lang=ja){target="_blank"} を参照してください。

+++

+++ 問題をログに記録するにはどうすればよいですか？

ケースを作成すると、アドビ製品に関する問題についてアドビカスタマーサポートチームに問い合わせることができます。 問題の解決やトラブルシューティングのヘルプとして、Adobe Admin Console を使用してアドビカスタマーサポートとチャットできるようになります。

新しいシステムで問題を記録したりチャットセッションを開始したりするには、 [Adobe Admin Console](https://adminconsole.adobe.com/overview){target="_blank"}に接続します。

このシステムでは、各ユーザーに対して、正しい権限を持つアカウントが個別に必要です。Adobe ID でログインできない場合は、Experience League 経由でアクセスをリクエストしてください。カスタマーケアチームが、できるだけ早く設定を行います。[詳細情報](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html){target="_blank"}

Campaign コミュニティに参加：既存の質問の回答を検索するか、エキスパートに質問します。 [会話への参加](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"}

+++


## 主要な概念 {#key-concepts}

認証、ユーザーインターフェイス、ワークフロー、コア機能など、Campaign の基本的な概念について説明し、効果的に使い始めます。

+++ Adobe IDを使用して Campaign v8 に接続できますか？

はい！ IMS （Adobe Identity Management System）との統合により、ユーザーはAdobe IDを使用してAdobe Campaign コンソールに接続できます。 統合には次のメリットがあります。

* Experience Cloud のすべてのソリューションに同じ ID を使用できます。
* Adobe Campaign で異なる統合を使用する場合にも、接続が記憶されます。
* パスワード管理ポリシーをよりセキュアにできます。
* Federated ID アカウント（外部の ID プロバイダー）を使用します。

Adobe IDを使用した Campaign v8 へのアクセスについては、[ 詳細情報 ](connect.md) を参照してください。

+++

+++ 使用している Campaign のバージョンを確認する方法はありますか？ 

Campaign クライアントコンソールの&#x200B;**ヘルプ／バージョン情報**&#x200B;メニューで、お使いの[バージョンおよびビルド番号](upgrades.md#version)を確認できます。

+++

+++ Campaign v7 とCampaign Classic v8 の違いは何ですか？

Campaign v8 は、Managed Cloud Services 向けに設計された次世代バージョンの Campaign です。 インフラストラクチャ、セキュリティ、配信品質、監視が大幅に向上します。

Adobe Campaign v8 は、**Managed Cloud Service** としてのみ使用でき、オンプレミス環境またはハイブリッド環境にデプロイすることはできません。

[Campaign Classic v7 から v8 への移行について詳しくは、こちらを参照してください ](v7-to-v8.md)。

+++

+++ ユーザー権限を設定するにはどうすればよいですか？

Campaign 管理者は、組織のユーザーに対して権限を設定できます。

以下は、各種の権限や制限によって承認または拒否できる操作です。

* 特定の機能へのアクセス
* 特定のデータへのアクセス
* データの作成、変更、削除

Campaign v8 のユーザー権限について [ 詳細情報 ](../start/gs-permissions.md) します。

**関連トピック：**

[ 権限の概要 ](gs-permissions.md) | [ ユーザー権限の管理 ](manage-permissions.md) | [ フォルダーに対する権限の追加 ](folder-permissions.md)

+++

+++ Campaign でプライバシーコンプライアンスを確保するにはどうすればよいですか？

Adobe Campaignには、GDPR、CCPA およびその他のプライバシー規制のプライバシーコンプライアンスに役立つ各種のツールが用意されています。

プライバシー管理、およびプライバシーコンプライアンスに役立つAdobe Campaignのツールと機能について [ 詳細情報 ](../start/privacy.md) します。

+++

+++ Campaign ユーザーインターフェイスについて知っておくべき概念は何ですか？

Adobe Campaignのユーザーインターフェイスの基本について詳しくは、[ この節 ](campaign-ui.md) を参照してください。

Campaign v8.6 リリース以降では、Adobe Experience Cloudの一元化された環境から使用できる新しい **Campaign web ユーザーインターフェイス** にもアクセスできるようになりました。

[ 詳しくは、Adobe Campaign Web ユーザーインターフェイスのドキュメントを参照してください ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}。

+++

+++ メッセージのオーディエンスを選択するにはどうすればよいですか？

Adobe Campaign では、各種の戦略を使用してオーディエンスの作成とターゲット受信者の選択を行うことができます。

Campaign v8 でオーディエンスを定義する方法については、[ 詳細情報 ](../audiences/gs-audiences.md) を参照してください。

+++

+++ ワークフローとは何ですか？

Adobe Campaign には、アプリケーションサーバーの様々なモジュール間でプロセスおよびタスク全体にわたる調整を行うワークフローが含まれています。総合的なグラフィカル環境により、セグメント化、キャンペーン実行、ファイル処理、手作業での処理などのプロセスをデザインできます。これらのプロセスは、ワークフローエンジンが実行し、トラッキングします。

例えば、ワークフローを使用して、サーバーからファイルをダウンロードしたり、ファイルを解凍したり、ファイルに含まれるレコードを Adobe Campaign データベースにインポートしたりできます。

またワークフローには、1 人または複数のオペレーターを関連付けて、通知の対象とすることや、プロセスの選択や承認に関与させることもできます。この方法により、配信アクションを作成して 1 人または複数のオペレーターにタスクを割り当て、コンテンツに対して作業する、ターゲットを指定する、配信開始前に配達確認を承認する、などが可能になります。

ワークフローについての [ 詳細情報 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/about-workflows.html?lang=ja){target="_blank"}。 「[ワークフローのベストプラクティス](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"}」も参照してください。

**関連トピック：**

[ ワークフローの概要 ](../config/workflows.md) | [ 最初のワークフローを作成 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"} | [ ワークフローのユースケース ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"} | [ ワークフロー実行の監視 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

+++

+++ 最初のメールを作成し送信するにはどうすればよいですか？

Campaign v8 で最初のメールを作成するには、次のいくつかの重要な手順を実行する必要があります。

1. **配信の作成** – まず、テンプレートから、またはゼロから新しいメール配信を作成します
1. **オーディエンスの定義** - クエリ、リストまたはワークフローを使用してターゲット受信者を選択します
1. **コンテンツのデザイン** - E メールデザイナーを使用して、パーソナライゼーションでメッセージを作成します
1. **配達確認を使用したテスト** - テストメールを送信して、コンテンツとパーソナライゼーションを検証します
1. **分析と送信** – 配信分析を実行してエラーを確認し、メールを送信します

Campaign v8 には、メール作成用の 2 つのインターフェイスがあります。

* **クライアントコンソール** – 高度な機能を備えたフル機能のデスクトップアプリケーション
* **Campaign web UI** - メール作成を高速化する、最新の直感的な web インターフェイス

Campaign v8 での [ メールのデザインと検証について詳しくは ](../send/email.md) こちら。

**関連トピック：**

[ 最初の配信を作成する ](create-message.md) | [ 配信テンプレートの操作 ](../send/create-templates.md) | [ 配信のベストプラクティス ](delivery-best-practices.md) | [ メールコンテンツを定義 ](../send/defining-the-email-content.md) | [ プレビューと配達確認 ](../send/preview-and-proof.md) | [ 設定と送信 ](../send/configure-and-send.md) | [ コンテンツのパーソナライズ ](../send/personalize.md)

+++

+++ SMS メッセージを送信するにはどうすればよいですか？

Campaign v8 での SMS メッセージの送信には、初期設定が必要で、簡単な配信プロセスに従います。

**初期設定（1 回限りの設定）:**

1. **SMS チャネルの設定** - SMS 配信設定と外部アカウントの設定します
1. **SMPP 接続の設定** - SMPP プロトコルを使用して SMS サービスプロバイダーに接続します
1. **接続のテスト** - SMS プロバイダーとの接続を検証します
1. **ルーティングの設定** - SMS メッセージがプロバイダーを通じてどのようにルーティングされるかを定義します

**SMS の作成および送信：**

1. **SMS 配信を作成** - テンプレートから新しい SMS 配信を開始します
1. **受信者の定義** – 電話番号フィールドを使用してモバイルオーディエンスを選択します
1. **SMS コンテンツの書き込み** - メッセージを作成します（標準で 160 文字、または連結を含めてそれ以上）
1. **パーソナライゼーションの追加** – 各受信者に固有の動的フィールドを含めます
1. **配達確認の送信** - SMS 配信をテストして、コンテンツと配信を検証します
1. **分析と送信** – 分析を実行し、オーディエンスに送信します。

**主な SMS 機能：**

* **複数の SMPP コネクタ** – 様々な SMS プロバイダーおよびプロトコルのサポート
* **配信レポート** – 送信、配信および失敗したメッセージを追跡します
* **文字エンコーディング** - GSM7、Unicode および特殊文字のサポート
* **長い SMS のサポート** – 長いテキストの自動メッセージ連結
* **双方向 SMS** - ワークフローでインバウンド SMS 応答を処理します

Campaign v8 での [SMS 設定と送信について詳しくは ](../send/sms/sms.md) こちら。

**関連トピック：**

[SMS の概要 ](../send/sms/sms.md) | [SMS 配信設定 ](../send/sms/sms-delivery-settings.md) | [SMPP 外部アカウント設定 ](../send/sms/smpp-external-account.md) | [SMS 配信を作成 ](../send/sms/create-sms.md) | [SMS コンテンツ ](../send/sms/sms-content.md) | [SMS 配達確認の送信 ](../send/sms/sms-proofs.md) | [SMS を監視 ](../send/sms/sms-monitor.md)

+++

+++ プッシュ通知を送信するにはどうすればよいですか？

Campaign v8 でプッシュ通知を送信するには、モバイルアプリ統合を設定し、魅力的な通知を作成する必要があります。

**初期設定（1 回限りの設定）:**

1. **プッシュチャネルの設定** - Campaign でプッシュ通知チャネルを設定します
1. **Campaign SDKの統合** - Adobe Campaign SDKをモバイルアプリに追加（またはデータ収集を使用）
1. **モバイルアプリの設定** - iOS アプリとAndroid アプリを Campaign に登録します
1. **証明書の設定** - APN 証明書（iOS）と FCM キー（Android）を設定します
1. **登録のテスト** - デバイスがトークンを登録および受信できることを確認します。

**プッシュ通知の作成と送信：**

1. **プッシュ配信を作成** - テンプレートから新しいプッシュ通知を開始します
1. **プラットフォームを選択** - iOS、Androidまたは両方のプラットフォームを選択します。
1. **オーディエンスの定義** - モバイルアプリの購読データを使用したターゲットアプリの購読者
1. **デザイン通知** - タイトル、メッセージ、リッチメディアコンテンツを作成します
1. **動作の設定** - クリックアクション、ディープリンクおよびカスタムデータを設定します
1. **テスト通知の送信** – 送信前に実際のデバイスで検証します
1. **分析と送信** - ターゲティングを確認し、モバイルオーディエンスに送信します

**プッシュ通知機能：**

* **リッチなプッシュ通知** – 画像、ビデオ、インタラクティブボタン（iOSおよびAndroid）を含みます
* **Personalization** - ユーザープロファイルと行動に基づく動的コンテンツ
* **ディープリンク** - ユーザーを特定のアプリ画面またはコンテンツに誘導する
* **スケジュール設定** - ユーザーのタイムゾーンに基づく最適な時間に送信
* **A/B テスト** – 様々なメッセージをテストし、エンゲージメントを最適化します
* **トラッキング** – 開封数、クリック数およびコンバージョンを監視します

**Platform 固有の機能：**

* **iOS** - サイレント通知、通知カテゴリ、サウンドのカスタマイズ
* **Android** - リッチなプッシュテンプレート、通知チャネル、カスタムレイアウト

Campaign v8 の [ プッシュ通知設定の詳細 ](../send/push-settings.md)。

**関連トピック：**

[ プッシュ通知の作成と送信 ](../send/push.md) | [ プッシュ通知チャネルの設定 ](../send/push-settings.md) | [Androidの豊富なプッシュのデザイン ](../send/rich-push-android.md) | [iOSの豊富なプッシュのデザイン ](../send/rich-push-ios.md) | [ データ収集を使用してを設定 ](../send/push-data-collection.md) | [ 追跡と監視 ](tracking.md)

+++

+++ ランディングページを作成するにはどうすればよいですか？

Adobe Campaign デジタルコンテンツエディターを使用してランディングページをデザインし、データベースフィールドとのマッピングを定義できます。

[ 詳細情報 ](../dev/landing-pages.md) については、Campaign v8 ドキュメントを参照してください。

また、Campaign web ユーザーインターフェイスを使用してランディングページの作成と公開を行うこともできます [ 詳細情報 ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/landing-pages/get-started-lp){target="_blank"}。

+++

+++ 配信をトラッキングするにはどうすればよいですか？

Campaign v8 で送信された配信を専用の [ 配信レポート ](../reporting/delivery-reports.md) を介してトラッキングし、配信を監視できます。

Campaign でのトラッキング管理について詳しくは [ このページ ](../start/tracking.md) を参照してください。

**関連トピック：**

[ メッセージのトラッキングと監視 ](tracking.md) | [ 配信レポート ](../reporting/delivery-reports.md) | [ 配信エラーについて ](../send/delivery-failures.md) | [ トラッキングするリンクを設定 ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/how-to-configure-tracked-links.html){target="_blank"}

+++

+++ エラーメッセージを翻訳するにはどうすればよいですか？

エラーメッセージが外国語で表示されましたか？すべてのエラーメッセージとその翻訳のリストは、[このページ](https://experienceleague.adobe.com/developer/campaign-errors/error_codes.html?lang=ja){target="_blank"}に掲載されています。

+++

+++ Campaign で web フォームを作成して回答を収集できますか？

はい。**Campaign web アプリケーションおよびForms** （クライアントコンソール）を使用して web フォームを作成し、フォームのロジックと検証を完全に制御するか、**Campaign ランディングページ** （web UI）を最新のドラッグ&amp;ドロップインターフェイスで使用して、購読やリードジェネレーションを行います。 どちらも、Campaign に直接データを収集したり、自動アクションのワークフローと統合したりします。

[Web アプリケーションと Web フォームの詳細 ](../dev/webapps.md) | [Campaign web UI ランディングページ ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/landing-pages/get-started-lp){target="_blank"}

+++



## Campaign v8 と以前のバージョンの比較 {#v7-differences}

アーキテクチャ、デプロイメント、移行パス、機能の変更など、Campaign v8 と以前のバージョン（Classic v7 および Standard）の主な違いについて説明します。 Campaign Classic v7 とCampaign Standardのどちらを使用している場合でも、新機能とスムーズな移行方法を説明します。

+++ Campaign v8 と以前のバージョンの主な違いは何ですか？

Campaign v8 は、Adobe Campaignの完全な再考であり、最新のクラウドネイティブアーキテクチャ向けに設計されており、Campaign Classic v7 とCampaign Standardを大幅に改善しています。

**デプロイメントモデル：**

* **v8:** Managed Cloud Services のみ – Adobeによって完全にホストおよび管理されます
* **v7/Standard:** オンプレミス、ハイブリッドまたはホスト型のオプションを使用可能
* **メリット：** インフラストラクチャ管理なし、自動拡張、エンタープライズクラスのセキュリティ、プロアクティブな監視

**アーキテクチャとパフォーマンス：**

* **v8:** PostgreSQL データベースを使用した拡張フル FDA （FFDA）アーキテクチャ
* **v8:** バッチ処理のスループットが 1 時間あたり最大 **2,000 万回に達する**
* **v8:** トランザクションメッセージのスループット （1 時間あたり **100 万）**
* **v8:** リアルタイムデータの探索と迅速なオーディエンス構築（分と時間）
* **メリット：** 大規模な運用および複雑なキャンペーンのパフォーマンスが向上

**ユーザーインターフェイス：**

* **v8:** クライアントコンソールと共に新しい **Campaign web ユーザーインターフェイス** – 直感的でアクセスしやすく、マーケターに最適
* **v8:** ドラッグ&amp;ドロップ機能を備えた最新のレスポンシブデザイン
* **v8:** キャンペーンの作成と管理のワークフローを簡素化
* **v8:** Campaign Standard インターフェイスとの多くの類似点を共有します
* **メリット：** オンボーディングの迅速化、キャンペーンの容易な実行、アクセシビリティの向上、学習曲線の最小化

**新機能：**

* 画像、ビデオ、インタラクティブボタン、カルーセル、タイマーを含む **リッチなプッシュ通知**
* ブランドの整合性スコアリングを使用したコンテンツ生成（メール、SMS、プッシュ）用 **AI アシスタント**
* **SMS インフラストラクチャ（SMS v2.0）をアップグレードし** 信頼性と互換性を向上
* シームレスなコンテンツ管理のための **0}Adobe Experience Manager as a Cloud Serviceの統合**
* **Campaign Standard ユーザー向けの動的レポートを含む、レポートの強化**

**アップグレードとメンテナンス：**

* **v8:** Adobeで管理される自動アップグレード – 常に最新の安定したバージョンで、連続配信モデルにより実行されます
* **v7/Standard:** 手動のアップグレードの計画と実行が必要
* **メリット：** メンテナンス負担の軽減、新機能への迅速なアクセス、ダウンタイムなし

**API と統合：**

* **v8:** パフォーマンスと信頼性が向上した最新の REST API
* **v8:** Adobe Experience CloudおよびAdobe Experience Platformとのシームレスな統合
* **メリット：** 統合の容易化、相互運用性の向上、最新の開発手法

[Campaign v8 の主な機能の詳細を説明します](whats-new.md)

**関連トピック：**

[Campaign Classic v7 から v8 へ ](v7-to-v8.md) | [v7 から v8 への移行ガイド ](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/new/v7-to-v8){target="_blank"} | [Campaign Standardから v8](acs-to-v8.md) | [Campaign Standardの移行 ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"} | [Campaign v8 導入ガイド ](https://experienceleague.adobe.com/ja/docs/campaign-web/acs-to-ac/home){target="_blank"} | [Campaign v8 機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"}
* [Campaign v8 のアーキテクチャ](../architecture/architecture.md)
* [ガードレールと制限](ac-guardrails.md)

+++

+++ Campaign Classicを v7 またはCampaign Standardから v8 に移行する必要がありますか？

**Campaign v8 は、次のことを必要とする組織に最適です。**

* **大量のキャンペーン** - パフォーマンスと信頼性が向上した数百万のメッセージを送信（1 時間あたり 2000 万件の操作）
* **エンタープライズ規模の拡張性** - パフォーマンスを気にすることなく、データベースとキャンペーンを拡張できます
* **最新の web ユーザーインターフェイス** – 直感的でレスポンシブなキャンペーン web UI で、キャンペーンの作成を迅速化し、ユーザーエクスペリエンスを向上させます
* **クラウドネイティブのメリット** – 自動更新、インフラストラクチャ管理、柔軟な拡張、プロアクティブな監視を活用します
* **長期的なサポート** - Campaign v8 は、Adobeの戦略的プラットフォームであり、拡張されたサポートを提供します。以前のバージョンは、今後数年間でサポートの終了に達する予定です
* **IT オーバーヘッドの削減** - インフラストラクチャの管理とアップグレードの計画を排除
* **高度な機能** - AI アシスタント、リッチプッシュ、強化された SMS、Adobe Experience Platform統合

**Campaign Standard ユーザーの場合：**

Campaign Standard ユーザーは、Campaign v8 Managed Cloud Services に移行できるようになりました。 主なメリットは次のとおりです。

* **使い慣れたインターフェイス** - Campaign Web UI は、Campaign Standardと多くの類似点を共有し、習得時間を最小限に抑えます
* **機能パリティ** - Campaign Standardの主な機能が v8 （動的レポート、一元化されたブランディング、REST API、ランディングページ、ビジュアルフラグメント）に追加されました
* **強化されたサポート** – スムーズな移行と継続的なプラットフォーム監視による一流の支援
* **データ移行** - Campaign Standardからのすべてのデータが、最小限の中断でインポートされます
* **一貫したユーザーエクスペリエンス** – 使い慣れたワークフローとインターフェイスで作業を続けます

**Campaign Classic v7 ユーザーの場合：**

Campaign v8 は、Campaign のコア機能を維持しながら、大幅な改善を実現します。

* **デュアルインターフェイス** – 強力なクライアントコンソールと最新の Campaign web UI の両方にアクセスできます
* **パフォーマンスの向上** - クエリのパフォーマンスとデータ処理が大幅に向上しました
* **クラウドのメリット** – 自動アップグレード、セキュリティパッチ、バックアップ/リカバリはAdobeで管理
* **最新のアーキテクチャ** - PostgreSQL を使用した拡張 FFDA アーキテクチャでスケーラビリティを向上

**移行を検討すべき状況：**

* 現在の Campaign インスタンスで大量のデータを処理する（数百万のプロファイル）
* ワークフローやターゲティングが複雑で、パフォーマンスの問題が発生しています
* インフラストラクチャの管理とメンテナンスのコストを削減したい
* Adobe Experience CloudやAdobe Experience Platformとのシームレスな統合が必要です
* 大規模なアップグレードまたはインフラストラクチャの更新を計画しているとします
* **将来性の高いテクノロジーが必要** – 以前のバージョンはサポート終了となります。
* **チームには最新のインターフェイスが必要です** - Campaign の web UI により、マーケターのアクセシビリティが向上します

**移行に関する考慮事項：**

* Adobeには、移行に関するサポート、ガイダンス、ツールが用意されています
* v8 は Managed Cloud Serviceのみです（オンプレミスデプロイメントまたはハイブリッドデプロイメントは不可）
* 一部の技術実装は異なる場合があります。[ 機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"} を確認してください。
* データの移行とテストには、計画とリソースが必要
* **Campaign Standard ユーザーの場合** - ワークフローの中断を最小限に抑えながらスムーズに移行できるように設計されています

**次の手順：**

Adobe担当者に連絡して、次の操作を行います。

* 移行に対する準備状況とタイムラインを評価
* ユースケースに固有のメリットを理解する
* 移行戦略とリソース割り当ての計画
* 移行ツールとサポートへのアクセス

**関連トピック：**

**Campaign Classic v7 ユーザーの場合：**[Campaign Classic v7 から v8 へ ](v7-to-v8.md) | [v7 から v8 までの詳細ガイド ](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/new/v7-to-v8){target="_blank"}

**Campaign Standard ユーザーの場合：** [Campaign Standardの v8 への移行 ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"} | [Campaign v8 導入ガイド ](https://experienceleague.adobe.com/ja/docs/campaign-web/acs-to-ac/home){target="_blank"} | [Campaign Standardから v8 への概要 ](https://experienceleague.adobe.com/en/docs/campaign-web/acs-to-ac/overview){target="_blank"} | [ マーケター向けの基礎知識 ](https://experienceleague.adobe.com/en/docs/campaign-web/acs-to-ac/marketers){target="_blank"} | [ 管理者/開発者向けの基礎知識 ](https://experienceleague.adobe.com/en/docs/campaign-web/acs-to-ac/admin-developers){target="_blank"}

**一般的なリソース：**[Campaign v8 機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"}
* [互換性マトリックス](compatibility-matrix.md)

+++

+++ Campaign v8 の主な用語と機能の違いは何ですか？

Campaign v8 では、Campaign Classic v7 およびCampaign Standardのほとんどの機能に機能強化が加えられましたが、クラウドネイティブアーキテクチャによって一部の機能が変わったり、バージョン間で一部の用語が異なったりします。

**用語の違い（Campaign Standardと v8）:**

* **カスタムリソース** は **スキーマ** になりました
* **メッセージ** は、**配信** と呼ばれます
* **製品ユーザー** が **オペレーター** になりました
* **役割** は **ネームド権限** で設定されます。
* **セキュリティグループ** は **オペレーターグループ** になりました
* **組織単位** は、**フォルダー権限** を通じて管理されます

**Campaign web UI の用語の更新：**

Campaign web UI で次の用語が更新されました（クライアントコンソールでは従来の用語を使用します）。

* **受信者** は **プロファイル** になりました
* **シードアドレス** は **テストプロファイル** になりました
* **配信分析** は **配信準備** になりました（「**準備** ボタンをクリック）
* **メールのプレビュー** は、「**コンテンツをシミュレート** ボタンから使用できます
* **リスト** は、**オーディエンス** になりました

**v8 では利用できません：**

* **オンプレミスデプロイメントとハイブリッドデプロイメント** - v8 は Managed Cloud Services のみ
* **直接データベースアクセス** – 代わりに、提供された API とツールを使用します
* **お客様が管理するインフラストラクチャ** - Adobeがすべてのインフラストラクチャを管理
* **手動のビルドアップグレード** – 自動になりました（Adobeで管理）

**v8 での様々な実装：**

* **テクニカルワークフロー** - クラウドアーキテクチャ用に最適化されたいくつかのワークフローは、動作が異なる場合があります
* **データベース構造** – 拡張 FFDA アーキテクチャでは、スキーマの適応が必要になる場合があります。
* **カスタム統合** - クラウドベースのアーキテクチャの更新が必要になる場合があります
* **低レベルのカスタマイズ** – 管理環境では異なるアプローチが必要なものもあります

**v8 で機能強化または置き換え：**

* **ビルドアップグレード** – 手動ではなく連続配信モデルで自動
* **パフォーマンスチューニング** - Adobe インフラストラクチャの最適化によって処理されます
* **セキュリティパッチ** - Adobeによって自動適用されます
* **バックアップと回復** - サービスの一部としてAdobeによって管理されます
* **ユーザーインターフェイス** - クライアントコンソールと共に新しい Campaign Web UI

**v8 に移行するCampaign Standard ユーザー向けに追加された機能：**

* **動的レポート** – 人口統計学的分析を使用したカスタマイズ可能なリアルタイムレポート
* **ブランディングの一元化** - ブランドのビジュアルおよび技術的ガイドラインを定義します。
* **REST API** – 統合を作成し、エコシステムを構築します
* **ランディングページの改善** - Campaign Standardとの機能強化
* **ビジュアルフラグメント** - メールおよびコンテンツテンプレート用の再利用可能なビジュアルコンポーネント

**重要：** v8 では、ほとんどのマーケティング機能と運用機能が利用可能で、改善されています。 技術レベルおよびインフラストラクチャレベルの機能は、クラウド環境でAdobeによって管理されます。

**関連トピック：**

[ 機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"} | [ 互換性マトリックス ](compatibility-matrix.md) | [ ガードレールと制限 ](ac-guardrails.md) | [v7 から v8 への移行ガイド ](v7-to-v8.md)
* [Campaign Standardから v8 への移行 ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}

+++

## プロファイルとオーディエンス {#audiences}

プロファイルの管理、オーディエンスの作成、データのインポートおよびキャンペーン受信者のターゲティングに関する質問への回答を示します。

+++ 受信者を作成するにはどうすればよいですか？

個々のプロファイルに対するクライアントコンソールでの手動による受信者の作成、ファイル（CSV/TXT）からの一括追加の読み込み、Web フォームを使用した自己登録、外部システムからの API を介した統合のいずれかを行います。 繰り返し発生するデータ読み込みにインポートワークフローを使用します。

[ プロファイルの手動作成 ](../audiences/create-profiles.md) | [ ファイルからのプロファイルのインポート ](../audiences/import-profiles.md) | [Web フォームでのプロファイルの収集 ](../audiences/collect-profiles.md)

+++

+++ プロファイルをインポートするにはどうすればよいですか？

Campaign では複数のインポート方法を使用できます。インポートウィザードを使用した単純なファイルインポート、複雑な変換を行うワークフローベースのインポート、SFTP からのスケジュールされたワークフローを使用した繰り返しインポート、プログラム統合を行う API インポートです。

ファイルの読み込みの場合は、データファイル（CSV/TXT、UTF-8 エンコーディング）を準備し、読み込みウィザードまたはワークフローを使用して、列を Campaign フィールドにマッピングし、更新/挿入ルールを定義してから、最初に小さなサンプルを使用してテストします。 繰り返し発生するインポートにワークフローを使用し、重複排除ルールを適用します。

[ データインポートガイド ](../start/import.md) | [ 繰り返しインポートワークフロー ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/recurring-import-workflow.html?lang=ja){target="_blank"} | [ データ読み込みアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"}

+++

+++ マーケティングキャンペーンのターゲット母集団を定義するにはどうすればよいですか？

Campaign では、視覚的な条件を使用したクエリの作成、既存のリストやセグメントのターゲティング、外部ファイル（CSV、TXT）からの受信者のインポート、定義済みフィルターの適用など、複数のターゲティング方法を提供します。 条件を AND/OR ロジックと組み合わせたり、特定の母集団を除外したり、コントロール母集団を使用したり、A/B テスト用に分割したりできます。 送信前に、常にターゲット母集団のサイズをプレビューします。

[ キャンペーンターゲットの定義 ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja){target="_blank"} | [ クエリアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"} | [ オーディエンスを作成 ](../audiences/create-audiences.md)

+++

+++ プロファイルのリストを作成するにはどうすればよいですか？

リストは、配信のターゲットとして設定し、キャンペーン間で再利用できる受信者の静的なセットです。

**3 つの作成方法：**

* **手動作成：** **[!UICONTROL プロファイルとターゲット/リスト]** に移動し、「**[!UICONTROL 作成]**」をクリックします。 クエリ、個別の選択、フォルダーのいずれかから受信者を追加します。

* **ワークフローの自動化：****[!UICONTROL リスト更新]** アクティビティを使用すると、クエリ結果またはインポートされたデータからリストを自動的に作成および管理できます。

* **読み込み時：** プロファイルを読み込む際にリストを作成して、再利用可能なグループとして保存します。

**ヒント：** 定期的な更新が必要なリストや、1 回限りのセグメント化のための手動作成にはワークフローを使用します。

[ オーディエンスの作成 ](../audiences/create-audiences.md) | [ リスト更新アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/list-update.html){target="_blank"}

+++

+++ メッセージを送信する前に母集団の重複を排除するにはどうすればよいですか？ 

ワークフローでの **[!UICONTROL 重複排除]** アクティビティを使用すると、配信前に重複する受信者を削除できます。 **[!UICONTROL クエリ]** アクティビティと **[!UICONTROL 配信]** アクティビティの間にクエリを配置し、重複排除条件（通常はメールアドレスまたは受信者 ID）と保持するレコードを選択します。

**ヒント：** 送信する前に常に重複排除を行い、各ユーザーがメッセージを 1 回だけ受信するようにします。

[ 「重複排除」アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/deduplication.html?lang=ja){target="_blank"}

+++

+++ ニュースレターの購読者を識別してターゲットにするにはどうすればよいですか？

Campaign は、情報サービスを通じてニュースレターの購読を自動的にトラッキングします。 サブスクライバをターゲットにするには：

* **[!UICONTROL クエリ]** アクティビティを使用し、**[!UICONTROL 購読]**/ニュースレターサービスを選択でフィルターします
* 情報サービスの **[!UICONTROL 宛先/購読者]** を選択して、配信から直接サブスクライバーをターゲットにします。
* **[!UICONTROL 購読サービス]** ワークフローアクティビティで購読者リストを作成

Campaign は購読/購読解除履歴を追跡し、オプトイン/オプトアウトを自動的に管理します。

[ 購読の管理 ](../start/subscriptions.md) | [ クエリアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"}

+++

+++ ターゲット母集団からプロファイルを除外するためのベストプラクティスは何ですか？ 

ワークフローで **[!UICONTROL 除外]** アクティビティを使用して、不要なプロファイルをターゲットから削除します。 ターゲティングアクティビティの後ろにドロップし、除外する母集団を定義します。

[ 除外アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/exclusion.html){target="_blank"}

+++

+++ Campaign に外部プロファイルを読み込まずに使用できますか？

はい、Campaign v8 では、外部データベースに保存された外部プロファイルをAdobe Campaignに読み込まずに操作できます。 [詳細情報](../audiences/external-profiles.md)。

+++

+++ 配信のテストプロファイルを作成するにはどうすればよいですか？

テストプロファイルは、実稼動データベースに影響を与えずに配達確認を送信し、配信を検証するために使用される特別な受信者です。 **[!UICONTROL プロファイルとターゲット/テストプロファイル]** で作成するか、**[!UICONTROL シードアドレス]** 機能を使用して、品質保証とインボックス監視のためにテスト受信者を配信に自動的に追加します。

[テストプロファイル](../audiences/test-profiles.md)

+++

## メッセージデザイン {#design}

メールテンプレート、パーソナライゼーション手法、多言語コンテンツなど、Campaign v8 で効果的なマーケティングメッセージをデザインする方法を説明します。 クライアントコンソールでメッセージをデザインしたり、Campaign Web UI で最新の **メールDesigner** を使用して、ビジュアル編集エクスペリエンスを強化したりできます。

+++ Campaign でメールをデザインするためのベストプラクティスは何ですか？

重要なガイドライン：モバイルレスポンシブデザインの確保、インライン CSS を使用したHTML 4.0/XHTML 互換コードの使用、代替テキストを使用した画像の最適化（100 KB 未満）、パーソナライゼーション結合フィールドの使用、送信前のメールクライアント間のテスト、プレーンテキストバージョンの組み込みを行います。 最適な配信品質を得るには、合計メールサイズを 500 KB 未満にすることを目指します。

[ メールデザインガイド ](../send/email.md) | [ 配信のベストプラクティス ](delivery-best-practices.md)

+++

+++ 配信テンプレートとは何ですか？

配信テンプレートは、複数のキャンペーンで再利用できるように、すべての設定とパラメーターを保存する事前設定済みの配信です。 テンプレートには、ターゲットルール、コンテンツデザイン、パーソナライゼーション、技術設定（送信者、返信先）、タイポロジルールなどが含まれます。 1 回作成してから再利用することで、一貫性を維持し、キャンペーンの作成を高速化します。

[配信テンプレートの作成](../send/create-templates.md)

+++

+++ Campaign で既存の HTML をインポートしてメールを簡単に作成できますか？

はい。HTMLのコンテンツをコンテンツエディターに直接コピー/貼り付けして読み込むか、コンピューターからファイルをアップロードするか、URL から読み込みます。 HTMLがインライン CSS を持つメール互換コード（HTML 4.0/XHTML）を使用し、パブリックサーバーで画像をホストしていることを確認します。 Campaign は、インポートされたHTMLにパーソナライゼーションとトラッキングを自動的に追加します。

**ヒント：** 最適なメールデザインエクスペリエンスを得るには、Campaign web UI で **メールDesigner** を使用します。これは、生のHTMLを読み込むのではなく、最新のドラッグ&amp;ドロップ機能と組み込みのレスポンシブテンプレートを提供します。

[HTML コンテンツのインポート](../send/defining-the-email-content.md)

+++

+++ 購読ベースのニュースレターを Campaign で作成するにはどうすればよいですか？

はい。Campaign の情報サービスを使用して、ニュースレターの購読を管理します。 主な機能には、自動オプトイン/オプトアウト処理、購読トラッキング、コンプライアンス管理（GDPR、CAN-SPAM）、マルチニュースレターのサポート、サインアップフォームの web 統合、購読者をターゲットにした配信などがあります。

[購読を管理](../start/subscriptions.md)

+++

+++ メッセージをパーソナライズするにはどうすればよいですか？

Campaign は、受信者のデータ、行動および環境設定に基づいて、関連性の高いターゲットメッセージを作成するためのパーソナライゼーション機能を提供します。

**Personalizationのオプション：**

* **パーソナライゼーションフィールド** – 受信者データを挿入する（例：`"Hello {{firstName}}")`
* **パーソナライゼーションブロック** – 定義済みコンテンツブロックまたはカスタムコンテンツブロックを使用します
* **条件付きコンテンツ** – 受信者の条件に基づいて異なるコンテンツを表示します
* **行動データ** – 閲覧履歴、購入パターン、エンゲージメント指標を活用します

送信前にパーソナライゼーションをテストして、結合フィールドと条件付きロジックが正しく動作することを確認します。

[Personalization ガイド ](../send/personalize.md) | [ パーソナライゼーションフィールド ](../send/personalization-fields.md) | [ 条件付きコンテンツ ](../send/conditions.md)

+++

+++ 多言語メッセージを送信できますか？

はい。Campaign v8 は、**Campaign Web UI** で最も簡単なアプローチにより、多言語機能を提供します。 Web UI は、言語のバリアントを使用してネイティブの多言語配信を提供します。配信に言語のバリアントを追加すると、Campaign は受信者の優先言語に基づいて適切なバージョンを自動的に送信します。 メール、プッシュ通知、SMS、トランザクションメッセージで使用できます。

主な機能：自動コンテンツ複製、自動言語ベース送信、デフォルト言語フォールバック、容易なバリアント管理。

クライアントコンソールでは、条件付きコンテンツとワークフローを使用して多言語コンテンツをサポートしていますが、より手動での設定が必要です。

[ 多言語配信（web UI） ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/msg/multilingual){target="_blank"} | [ 条件付きコンテンツ（クライアントコンソール） ](../send/conditions.md)

+++

+++ Web フォームをローカライズできますか？

はい。Campaign web アプリケーションは、多言語ローカライゼーションをサポートしています。 受信者のプロファイルやブラウザーの設定に基づいて自動的に言語を検出し、すべてのフォーム要素（ラベル、ボタン、メッセージ、エラーテキスト）の翻訳を定義します。 1 つの web アプリケーション内で複数の言語バージョンをサポートでき、必要に応じてデフォルト言語にフォールバックできます。

[Web アプリケーションのローカリゼーション](../dev/webapps.md)

+++

+++ メールで AI を活用したコンテンツを使用できますか？

はい。ただし **Campaign web UI を使用する場合のみ** です。 Microsoft Azure OpenAI とAdobe Fireflyを活用した AI アシスタントは、メール、SMS、プッシュ通知全体で、プロフェッショナルでブランドの一貫したコンテンツを作成するのに役立ちます。

**主な機能：**

* テキスト（メールコピー、件名行、SMS/プッシュコンテンツ）およびブランドに合わせた画像の生成
* 様々なオーディエンス向けに最適化されたコンテンツのバリエーションの作成
* コンテンツの絞り込み（精巧、要約、リフレーズ、簡略化）
* ブランドアセットをアップロードし、ブランドの整合性スコアリングを取得
* 既存のコンテンツを参照として使用し、スタイル参照画像をアップロードする

**注意：** AI アシスタントは、Campaign web UI でのみ使用でき、現在は英語のみをサポートしています。 ユーザーは適切な権限が必要で、ユーザー使用許諾契約に同意する必要があります。

[AI アシスタントの概要 ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/content/ai-assistant/generative-gs){target="_blank"} | [AI アシスタントのユースケース ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/content/ai-assistant/generative-uc){target="_blank"} | [ ブランドの連携 ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/content/ai-assistant/ai-assistant/brands-score){target="_blank"}

+++

## メッセージのテストと送信 {#send}

マーケティングメッセージのテスト、検証、送信およびトラッキングのベストプラクティスを学び、キャンペーン配信を成功に導きます。

+++ 配信分析とは何ですか？ 

配信分析は、キャンペーンが送信前に実行する検証フェーズです。 ターゲット母集団の計算、コンテンツの検証、エラーのチェック、タイポロジルールの適用、配信量の推定を行います。

Campaign は、警告とエラーを示すログを生成します。 エラーは配信をブロックし、修正する必要があります。警告は参考になります。 送信前に必ず分析ログを確認してください。

[配信分析ガイド](../send/delivery-analysis.md)

+++

+++ なぜ配達確認の作成が必要なのですか？ 

配達確認は、メインオーディエンスに送信する前に配信を検証するテストメッセージです。 配達確認を使用して、パーソナライゼーションの検証、E メールクライアント間でのコンテンツのレンダリングのテスト、リンクとトラッキング作業の確認、画像と添付ファイルの確認、モバイルの応答性の検証を行います。

配達確認は、何千人もの受信者に届く前にエラーを見つけ、関係者の承認を有効にし、インボックスの配置をテストするのに役立ちます。 複数のメールクライアントおよびデバイスに配達確認を送信し、実稼動環境が送信される前に必ず承認を取得します。

[配達確認とプレビューガイド](../send/preview-and-proof.md)

+++

+++ Adobe Campaign でのシードアドレスの使用方法は？ 

シードアドレスは、テスト、品質保証、監視のために、ターゲット条件に合わせることなく、すべての配信に自動的に追加される特別な受信者です。 継続的な監視、インボックス配置のテスト、ダイレクトメールの検証、関係者の可視性に役立ちます。

**プルーフとの主な違い：**

* **シードアドレス** – 実稼動配信に自動的に追加され、送信量にカウントされます
* **配達確認** – 実稼動環境の前に送信するテストで、ボリュームにカウントせず、検証に使用

**[!UICONTROL リソース/キャンペーン管理/シードアドレス]** でシードアドレスを管理します。 配信指標に影響を与えないように、リストを小さく保ちます。

[ シードアドレスガイド ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/delivery-control.html){target="_blank"}

+++

+++ メッセージ送信前の承認プロセスを設定するにはどうすればよいですか？

Campaign は、送信前にメッセージが品質基準を満たしていることを確認する承認ワークフローを提供します。 コンテンツ、ターゲット、抽出（ダイレクトメール）、予算の承認をキャンペーンレベルまたは配信レベルで設定します。

**設定：**

**[!UICONTROL 管理/アクセス管理/オペレーターグループ]** でオペレーターグループを作成し、キャンペーンまたは配信プロパティで承認グループを割り当てます。 Campaign は、変更を承認、却下またはリクエストできるレビュー担当者に通知メールを送信します。

**スタンドアロン配信の場合（キャンペーン以外）:**

**プルーフを承認プロセスとして** 使用します。 検証用に承認グループに配達確認を送信し、変更を加えた後は常に新しい配達確認を送信して、関係者が最新バージョンを確認できるようにします。

[ 配信の検証 ](../send/preview-and-proof.md) | [ キャンペーン承認 ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-approval.html?lang=ja){target="_blank"}

+++

+++ タイポロジルールとは何ですか？ 

タイポロジルールは、メッセージ送信を検証および最適化するために、配信分析中に適用される自動ビジネスロジックです。 マーケティングポリシーへのコンプライアンスを確保し、配信品質を保護し、顧客疲労を防ぎます。

**メインルールタイプ：**

* **フィルタリングルール** – 受信者を除外（ブロックリストに加える、購読解除、強制隔離）
* **頻度ルール** – 受信者が圧倒されるのを避けるためにメッセージ頻度を制御する
* **処理能力ルール** – 処理能力または ISP の制限に応じたメッセージ量の制限
* **制御ルール** - メッセージの有効性を確認する（件名行、登録解除リンク、送信者形式）

ルールはタイポロジにグループ化され、配信分析時に適用されます。 Campaign では、受信者の除外、配信のブロック、ルールに基づく警告の生成を行うことができます。

[ タイポロジルールガイド ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-optimization/campaign-typologies.html?lang=ja){target="_blank"}

+++

+++ メールをウェーブで送信するにはどうすればよいですか？

はい。ウェーブ送信は、スケジュールされた間隔で送信された複数のバッチに配信を分割します。 これは、大量のキャンペーンでサーバー負荷のバランスを取り、ISP のスロットリングを防ぎ、新しい IP で送信者の評判を構築し、ウェーブ間のオプトアウト/バウンスを管理するために不可欠です。

**設定：**

配信プロパティで、ウェーブ送信を有効にし、ウェーブの数（またはバッチサイズ）、ウェーブ間の間隔、ウェーブ分布（線形またはカスタムの割合）を定義します。 Campaign は、ターゲット母集団を自動的に分割し、各ウェーブをスケジュールに従って送信します。

大規模なキャンペーンにはウェーブを使用し、続行する前に最初のウェーブのパフォーマンスを監視し、ウェーブ間にバウンスおよびオプトアウトを処理するための十分な時間を確保します。

[ウェーブ送信の設定](../send/configure-and-send.md#sending-using-multiple-waves)

+++

+++ Campaign でメールを作成する主な手順は？ 

Campaign v8 でメールを作成するには、配信の作成、ターゲットオーディエンスの定義、コンテンツのデザイン、パーソナライゼーションの追加、設定（送信者、件名、返信先）の設定、配信分析の実行、テスト用の配達確認の送信などを行い、最後に送信またはスケジュールを設定する必要があります。

**主な手順：**

1. **配信を作成** - チャネルとして「メール」を選択し、オプションで配信テンプレートを選択します
1. **ターゲットの定義** - クエリ、リスト、またはインポートされたファイルを使用して受信者オーディエンスを選択します
1. **コンテンツのデザイン** - メールエディター（web UI メールDesignerまたはクライアントコンソールエディター）を使用してメッセージを作成します
1. **パーソナライゼーションの追加** – 動的フィールド、パーソナライゼーションブロック、条件付きコンテンツを挿入する
1. **設定** – 送信者アドレス、件名行、返信先および配信パラメーターを設定します
1. **配信分析の実行** - Campaign では、コンテンツの検証、ターゲットの計算およびエラーのチェックを行います
1. **配達確認の送信** – 承認グループを使用してメールをテストし、レンダリングとコンテンツを検証します
1. **送信またはスケジュール** – 後日、メインターゲットまたはスケジュールに直ちに送信します

**2 つのインターフェイスオプション：**

* **Campaign Web UI** - メールDesigner、AI アシスタント、多言語機能が強化された最新のインターフェイス
* **クライアントコンソール** – 高度なターゲティングとワークフロー機能を備えた従来のインターフェイス

**ヒント：** Campaign web UI を使用すると、最新のデザインツールで、より迅速で直感的なメール作成を行えます。 複雑なターゲティングや高度なワークフローベースのキャンペーンには、クライアントコンソールを使用します。

[ 最初のメールを作成 ](create-message.md) | [ メールデザインガイド ](../send/email.md)

+++

+++ 配信のスケジュール方法は？ 

Campaign では、今後の送信に備えて配信のスケジュールを設定し、送信時間を最適化してキャンペーンを調整できます。

**スケジュールオプション：**

* **配信プロパティ** – 即時に送信、特定の日時にスケジュールを設定、時間/日別に遅延
* **キャンペーンレベル** - キャンペーン内のすべての配信の調整
* **ワークフロースケジューラーアクティビティ** – 繰り返し配信、複雑なパターン、イベントトリガーキャンペーンの場合

Campaign は、コンタクト日の最適化（受信者ごとの最適な送信時間）とタイムゾーンの適応（すべての受信者に対して同じローカル時間）もサポートしています。

[配信送信のスケジュール設定](../send/configure-and-send.md#schedule-delivery-sending)

+++

+++ メールに添付ファイルを追加できますか？ 

はい。Campaign では、静的な添付ファイル（すべての受信者に対して同じファイル）と、パーソナライズされた添付ファイル（プロファイルデータに基づいて受信者ごとに異なるファイル）をサポートしています。 配信プロパティの **[!UICONTROL 添付ファイル]** セクションに添付ファイルを追加します。

**重要な考慮事項：**

* 最適な配信品質を得るために、添付ファイルを 1 MB 未満に保つ
* 添付ファイルはスパムフィルターのトリガーとなることがあります。送信前に十分にテストしてください。
* メールクライアント（.exe、.zip、.js）によって一般的にブロックされるファイルタイプを避ける
* 大きなファイルの場合は、代わりに、トラッキング対象のダウンロードリンクを使用することを検討します

実稼動環境で送信する前に、安全なファイル形式（PDF、JPEG、PNG、DOCX）を使用し、シードアドレスを使用してテストします。

[メール添付ファイルガイド](../send/email.md#attachments)

+++

+++ メール配信でトラッキング対象リンクを設定するにはどうすればよいですか？

Campaign は、受信者のエンゲージメントを監視するために、メール内のすべての URL をトラッキング対象リンクに自動的に変換します 配信の「**[!UICONTROL トラッキング]**」セクションにアクセスして、各リンクのトラッキング設定を指定します。

**設定オプション：**

* **トラッキングの有効化/無効化** - リンクごとのトラッキングの制御
* **リンクラベル** - レポートにわかりやすい名前を追加します（「今すぐ購入CTA」など）
* **リンクカテゴリ** - タイプ別にリンクをグループ化して集計分析に使用
* **トラッキングタイプ** - クリック数、開封数、またはその両方を追跡します

Campaign は、コンテンツリンク、ミラーページリンク、登録解除リンクを追跡し、メール開封数のオプションのトラッキングピクセルを含めることができます。 意味のあるラベルとカテゴリを使用して、レポートを簡素化し、パフォーマンスの高いコンテンツを迅速に特定します。

[ リンクトラッキングガイド ](../start/tracking.md) | [ トラッキングのベストプラクティス ](../send/send.md)

+++

+++ 配信およびトラッキングのログはどこで参照できますか？ 

各配信ダッシュボードから配信ログおよびトラッキングログに直接アクセスします。 クライアントコンソールで、下部にある「**[!UICONTROL 配信]**」タブをクリックします。 Campaign web UI で、「**[!UICONTROL ログ]** セクションに移動します。

**使用可能なログ：**

* **配信ログ** – 受信者の詳細とステータス（送信済み、保留中、失敗）を含む送信済みメッセージ
* **トラッキングログ** - タイムスタンプ付きの受信者インタラクション（開封数、クリック数）
* **除外ログ** – 理由（強制隔離、タイポロジルール、重複）のある除外された受信者
* **ブロードキャストログ** – 再試行とエラーを含む送信履歴の完了

これらのログを使用して、配信の問題のトラブルシューティング、エンゲージメントの分析、リストハイジーンの維持を行います。

[ 配信の監視 ](../send/send.md) | [ トラッキングガイド ](../start/tracking.md)

+++

+++ 配信レポートはどこで取得できますか？ 

Campaign には、配信パフォーマンス、受信者のエンゲージメント、キャンペーンの効果を分析する包括的なビルトインレポートが用意されています。 任意の配信の **[!UICONTROL レポート]** タブ、キャンペーンダッシュボード、またはキャンペーン間分析のグローバル **[!UICONTROL レポート]** メニューからレポートにアクセスします。

**主なレポートの内容：**

* **配信概要** – 統計、開封数、クリック数、バウンス数および購読解除数を送信します
* **ホットクリック数** - リンクパフォーマンスのビジュアルヒートマップ
* **トラッキング指標** - クリックスルー率とエンゲージメント指標
* **配信不能件数** – 失敗理由を含むバウンス分析

レポートは、クライアントコンソールと Campaign web UI の両方で、最新のビジュアライゼーションを使用して使用できます。

[ ビルトインの配信レポート ](../reporting/delivery-reports.md) | [ キャンペーンレポート ](../reporting/gs-reporting.md)

+++

+++ Adobe Campaign では強制隔離アドレスをどのように選定および管理していますか？ 

Campaign では、強制隔離リストを自動的に管理して、送信者のレピュテーションを保護し、配信品質を向上させます。 強制隔離されたアドレスは、検証されるか強制隔離から削除されるまで、今後の配信から自動的に除外されます。

**アドレスが強制隔離される理由：**

* **ハードバウンス** – 永続的な配信エラー（無効なメールアドレス、ドメインが存在しない、メールボックスが削除される）
* **ソフトバウンスしきい値** - エラーしきい値を超えた一時的なエラーの繰り返し（メールボックス容量超過、サーバーの一時的な使用不能）
* **スパムの苦情** - メールをスパムとしてマークする受信者
* **無効なアドレス** – 構文エラーが発生したアドレスまたは検証に失敗したアドレス
* ブロックリストに加える **** - オプトアウトした、または除外をリクエストした受信者

**強制隔離の仕組み：**

Campaign は、各アドレスの配信エラーを追跡します。 アドレスが設定されたエラーしきい値に達すると、自動的に強制隔離され、分析中に今後のすべての配信から除外されます。 ハードバウンス（永続的なエラー）は直ちに強制隔離されますが、ソフトバウンスでは、強制隔離の前に複数のエラーが必要です。

**強制隔離アドレスの管理：**

**[!UICONTROL 管理/キャンペーン管理/配信不能件数の管理]** で強制隔離管理にアクセスします。 強制隔離されたアドレスを表示したり、強制隔離から検証済みアドレスを手動で削除したり、自動クリーンアップルールを設定したりできます。

**ヒント：** 強制隔離リストを定期的に監視します。 強制隔離率の向上は、多くの場合、送信者のレピュテーションに影響を与える前に注意が必要なデータ品質の問題を示します。

[ 検疫管理ガイド ](../send/quarantines.md) | [ バウンス管理 ](../send/delivery-failures.md)

+++

## ワークフロー {#workflows}

ワークフローを使用して、Adobe Campaignでプロセスを自動化、データを管理、複雑なマーケティングキャンペーンを調整する方法について説明します。

+++ ワークフローを作成するための重要な手順は？

Campaign でマーケティングプロセスを自動化するワークフローを作成します。

1. **新しいワークフローの作成** - **[!UICONTROL プロファイルとターゲット/ジョブ/ターゲティングワークフロー]** または **[!UICONTROL 管理/プロダクション/テクニカルワークフロー]** に移動し、「**[!UICONTROL 作成]**」をクリックします。
1. **アクティビティの追加** - パレットからアクティビティ（ターゲティング、フロー制御、アクションアクティビティ）をドラッグ&amp;ドロップします
1. **アクティビティの設定** – 各アクティビティをダブルクリックしてパラメーターを設定し、ロジックを定義します
1. **アクティビティを接続** - アクティビティをトランジションとリンクして、実行フローを定義します
1. **テストと検証** - ワークフローダイアグラムを使用してロジックを確認し、小さなデータセットでテストします
1. **実行** - ワークフローを手動で開始するか、自動実行のスケジュールを設定します

一般的なワークフローパターン：データのインポート、オーディエンスのセグメント化、配信の送信、データのエンリッチメント、クロスチャネルオーケストレーション。

**関連トピック：**

[ ワークフローの作成 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"} | [ ワークフローアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/about-activities.html){target="_blank"} | [ ワークフローのベストプラクティス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"} | [ ワークフローのユースケース ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"}

+++

+++ Campaign でデータをインポートするにはどうすればよいですか？

必要に応じて複数の方法を使用して、Campaign にデータをインポートします。

**単純なファイルのインポート：**

* インポートウィザードを使用して、ガイド付きインターフェイスで CSV/TXT を 1 回限りインポートします
* 手動のアップロードと迅速なデータ読み込みに最適

**ワークフローベースの読み込み：**

* 複雑なインポート用の **[!UICONTROL データ読み込み（ファイル）]** アクティビティを含むワークフローの作成
* データ変換、エンリッチメント、重複排除を追加
* SFTP、ローカルディレクトリ、クラウドストレージからの繰り返し読み込みのスケジュール設定

**API 統合：**

* REST API を使用して、外部システムからプログラムでデータをインポートします
* CRM、e コマースなどのプラットフォームとのリアルタイム同期に最適

**ベストプラクティス：** 常に小さなサンプルを使用してテストし、UTF-8 エンコーディングを使用し、フィールドを正しくマッピングし、重複排除ルールを適用し、ピーク外の時間に大きな読み込みをスケジュールします。

**関連トピック：**

[ インポートのベストプラクティス ](../start/import.md) | [ データ読み込みアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"} | [ 繰り返しインポートワークフロー ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/recurring-import-workflow.html?lang=ja){target="_blank"}

+++

+++ ワークフローの実行を監視できますか？

はい。Campaign は、実行のトラッキング、問題の特定、パフォーマンスの最適化を行う包括的なワークフロー監視機能を提供します。

**監視オプション：**

* **ワークフローダッシュボード** - リアルタイムの実行ステータス、進行状況およびアクティビティ状態を表示します
* **実行ログ** – 各アクティビティとトランジションの詳細なログにアクセスできます
* **監査記録** - ワークフローの変更と実行履歴を追跡します
* **アラートと通知** – 失敗または特定の条件に関するメールアラートの設定

**主な監視機能：**

* 視覚的なステータスインジケーター（保留中、処理中、完了、失敗）
* パフォーマンス最適化のための実行時間のトラッキング
* トラブルシューティング用のアクティビティレベルのエラーメッセージ
* 必要に応じてワークフローを一時停止、停止、再開する

**[!UICONTROL 管理/プロダクション/自動作成されたオブジェクト/キャンペーンワークフロー]** またはワークフローダッシュボードから直接アクセス監視。

**関連トピック：**

[ ワークフロー実行の監視 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"} | [ ワークフローのベストプラクティス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"} | [ ワークフローの開始 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/executing-a-workflow/start-a-workflow.html?lang=ja){target="_blank"}

+++

+++ ワークフローで Campaign データを更新するにはどうすればよいですか？

ワークフローの **[!UICONTROL データを更新]** アクティビティを使用して、データベースに対して一括操作を実行します。

**サポートされる操作：**

* **挿入** - データベースに新しいレコードを追加します
* **更新** – 一致条件に基づいて既存のレコードを変更します
* **挿入または更新** – 新しいレコードを追加または既存のレコードを更新（アップサート）
* **削除** – 特定の条件に一致するレコードを削除します

**一般的なユースケース：**

* データエンリッチメント後のプロファイル属性の更新
* 外部システムとのデータの同期
* 行動に基づいてリストのメンバーシップを維持します
* データのクリーンアップと重複排除
* ステータスの一括変更（オプトアウト、強制隔離など）を適用

レコードを正確に照合するための紐付けキーを設定し、更新オプション（すべてのフィールドまたは空のフィールドのみを更新）を選択します。

**関連トピック：**

[ データを更新アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/update-data.html?lang=ja){target="_blank"} | [ データ管理アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/about-action-activities.html){target="_blank"}

+++

+++ データ管理機能を利用するにはどうすればよいですか？

Campaign のデータ管理アクティビティを使用すると、ワークフロー内で複雑なターゲティングやセグメント化のための高度なデータ操作が可能になります。

**主要なデータ管理アクティビティ：**

* **エンリッチメント** – 関連するテーブルまたは外部ソースから作業母集団にデータを追加します
* **分割** – 条件に基づいて母集団をセグメント化したり、ランダムに分布したりします
* **重複排除** – 指定したキーに基づいて重複レコードを削除します
* **データを更新** – 一括挿入、更新、または削除操作を実行します
* **ディメンションの変更** - ターゲティングディメンションを（受信者から購読に切り替えるなど）切り替えます
* **積集合/和集合/除外** – 複数の母集団を組み合わせるかフィルタリングします

**一般的なユースケース：**

* 購入履歴や行動データを使用したプロファイルのエンリッチメント
* 異なるメッセージ用にオーディエンスを複数のグループにセグメント化する
* 配信前に重複を削除
* 外部データベースからのデータの統合（FDA - Federated Data Access）
* 複雑な複数テーブルのクエリと結合の作成

これらのアクティビティを使用すると、メインの受信者テーブル内で直接データを操作したり、高度なデータベース操作を実行したりできます。

**関連トピック：**

[ データ管理アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/about-targeting-activities.html){target="_blank"} | [ ターゲティングワークフロー ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/wf-type/targeting-workflows.html?lang=ja){target="_blank"} | [ エンリッチメントアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/enrichment.html?lang=ja){target="_blank"}

+++

+++ パーソナライズされたメッセージの送信を自動化できますか？

はい。ワークフローにより、受信者のデータ、行動およびカスタム条件に基づいて、完全に自動化されたパーソナライズされたメッセージキャンペーンが可能になります。

**自動化ワークフローの構造：**

1. **クエリ** – 条件に基づいてターゲットオーディエンスを選択します
1. **エンリッチメント** – 関連テーブルからパーソナライゼーションデータを追加します
1. **分割** – 異なるメッセージバリアントのグループにセグメント化します（オプション）
1. **配信** – 結合フィールドを使用してパーソナライズされたメッセージを送信します
1. **スケジューラー** – 自動キャンペーンの繰り返し実行の設定

**Personalizationのオプション：**

* 受信者プロファイルデータ （名前、場所、環境設定）を使用
* 行動データ（購入履歴、エンゲージメントスコア）を含める
* セグメントまたは属性に基づく条件付きコンテンツの適用
* 動的な値（ロイヤルティポイント、有効期限）の計算

一般的なシナリオ：誕生日キャンペーン、買い物かごの放棄、ロイヤルティプログラム、勝利キャンペーン、イベントトリガーメッセージ。

**関連トピック：**

[Personalization ガイド ](../send/personalize.md) | [ ワークフローのユースケース ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/send-a-birthday-email.html?lang=ja){target="_blank"} | [ エンリッチメントアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/enrichment.html?lang=ja){target="_blank"}

+++

+++ ワークフローでオーディエンスをサブセットに分割するにはどうすればよいですか？

**[!UICONTROL 分割]** アクティビティを使用すると、条件または配分ルールに基づいて、1 つの母集団を複数のサブセットに分割します。

**分割メソッド：**

* **フィルター条件** – 条件（年齢グループ、場所、VIPステータスなど）に基づいてサブセットを作成
* **パーセンテージ配分** - A/B テスト用に等しい割合またはカスタムの割合にランダムに分割
* **レコードを制限** - サブセットのサイズを制限します（最初の N 件のレコード、上位 X%、ランダム選択）
* **データグループ化** – 個別の値ごとに 1 つのサブセットを作成します（例：国ごとに 1 つのサブセット）

**一般的なユースケース：**

* コントロール母集団を使用した A/B テスト
* チャネル設定ルーティング （メールと SMS）
* プログレッシブロールアウト（10% に送信、その後 90% に送信）
* セグメント固有のメッセージ（VIP、通常、新規のお客様）
* 複数の配信サーバーにわたるロードバランシング

分割された各サブセットは個別のトランジションに送られ、グループごとに異なる処理または配信が可能になります。

**関連トピック：**

[ 分割アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/split.html?lang=ja){target="_blank"} | [A/B テストガイド ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/a-b-testing.html){target="_blank"}

+++

+++ 外部ファイルの受信者データを更新するにはどうすればよいですか？

はい。ワークフローを使用し、外部ファイル（CSV、TXT）の値で Campaign データを更新します。

**ワークフロー構造：**

1. **データ読み込み（ファイル）** – 外部ファイルを読み込んで、列をマッピングします
1. **エンリッチメント** （任意） – 追加のデータまたは変換を追加します
1. **紐付け** - ファイルレコードをデータベースレコード（メールアドレス、受信者 ID など）と照合するためのキーを定義します
1. **データを更新** – 更新オプションを選択します。
   * 一致したレコードのみを更新
   * 既存のフィールドを更新するか、空のフィールドのみを更新する
   * 一致するレコードが見つからない場合に新しいレコードを挿入

**一般的なシナリオ：**

* CRM エクスポートからのプロファイル属性の更新
* 外部システムからの購読ステータスの更新
* ロイヤルティポイントまたは顧客スコアの同期
* オプトイン/オプトアウトの環境設定を更新
* 行動データによるプロファイルのエンリッチメント

**ベストプラクティス：** 紐付けには一意の識別子を使用し、更新前にデータを検証し、小さなサンプルを使用してテストし、継続的な同期のために定期的な更新をスケジュールします。

**関連トピック：**

[ データインポートガイド ](../start/import.md) | [ データ読み込みアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"} | [ データ更新アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/update-data.html?lang=ja){target="_blank"}

+++

+++ 新しい受信者を識別してターゲットにするにはどうすればよいですか？

クエリアクティビティでワークフローを使用すると、最近追加された受信者を特定し、自動ウェルカムキャンペーンをトリガー化できます。

**クエリアプローチ：**

「**[!UICONTROL 作成日]**」フィールドにクエリフィルターを作成して、特定の期間内（過去 24 時間、先週など）に追加された受信者を選択します。

**自動ウェルカムワークフローの構造：**

1. **スケジューラー** – 毎日または特定の間隔で実行します
1. **クエリ** – 前回の実行以降に作成された受信者を選択
1. **重複排除** （オプション） – 重複がないことを確認します
1. **配信** - ウェルカムメッセージの送信
1. **データを更新** （任意） – 受信者を「歓迎」としてマークします

**集計を使用した高度なテクニック：**

集計関数を使用して、最新の追加を動的に識別し、高度な新規受信者検出のために以前に処理した受信者と比較します。

**関連トピック：**

[ クエリアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"} | [ 集計の使用 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/using-aggregates.html?lang=ja){target="_blank"} | [ ようこそプログラム ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/send-a-birthday-email.html?lang=ja){target="_blank"}

+++

+++ ワークフローアクティビティの使用方法

キャンペーンワークフローは、アクティビティの 4 つの主なカテゴリを使用して作成され、それぞれが特定の目的を果たします。

**ターゲティングアクティビティ** - オーディエンスを定義し絞り込みます

* クエリ，分割，重複排除，エンリッチメント，積集合，和集合，除外
* これらを使用して、受信者の選択、セグメント母集団の選択、データソースの組み合わせを行います

**フロー制御アクティビティ** - ワークフローのロジックとタイミングの管理

* スケジューラ，待機，テスト，AND 結合，OR 結合，ジャンプ
* 実行フローの制御、条件の追加、並列パスの管理

**アクションアクティビティ** – 操作の実行とメッセージの送信

* 配信、データの更新、データの読み込み（ファイル）、データ抽出（ファイル）、JavaScript コード
* データベース操作、ファイル転送、およびメッセージ送信の実行

**イベントアクティビティ** – 外部トリガーへの反応

* 外部シグナル，ファイルコレクター，HTTP 転送，SMS, メール
* 受信データと外部システムインタラクションの処理

アクティビティを使用するには、パレットからワークフローキャンバスにアクティビティをドラッグし、ダブルクリックしてパラメーターを設定して、トランジションに接続します。

**関連トピック：**

[ ターゲティングアクティビティのリファレンス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/targeting-activities.html?lang=ja){target="_blank"} | [ フロー制御アクティビティリファレンス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/flow-control-activities/flow-control-activities.html?lang=ja){target="_blank"} | [ アクションアクティビティリファレンス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/action-activities.html?lang=ja){target="_blank"} | [ イベントアクティビティのリファレンス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/event-activities/event-activities.html?lang=ja){target="_blank"}

+++

+++ ワークフローのベストプラクティス

効率的で、維持可能で、信頼性の高いワークフローを構築するには、次のベストプラクティスに従います。

**設計と編成：**

* ワークフローとアクティビティにはわかりやすい名前を使用します。
* ドキュメントロジックへのラベルと説明の追加
* 読みやすくするために、関連するアクティビティを視覚的にグループ化します
* 複雑なプロセスを複数の小さなワークフローに分割

**パフォーマンスの最適化：**

* 適切なフィルターでクエリ結果のサイズを制限する
* 中間データストレージに一時テーブルを使用
* ピーク以外の時間帯にリソースを大量に消費するワークフローをスケジュールする
* 不要なループや過剰な繰り返しを避ける

**エラー処理と監視：**

* スーパーバイザーを使用したエラー処理パスの追加
* 失敗したワークフローに対するアラートの設定
* 完全に実行する前に、小さなデータサンプルを使用してテストします
* パフォーマンスの問題に関して実行ログを定期的に確認する

**維持・ガバナンス：**

* 古いワークフローのアーカイブまたは削除
* バージョン管理ワークフローの変更とドキュメントの変更
* ワークフローの複雑さを制限（20 個未満のアクティビティを目標）
* 繰り返しパターンに対するワークフローテンプレートの使用

**セキュリティとデータ管理：**

* 適切なオペレーター権限の適用
* ワークフロークリーンアップによる一時データのクリーンアップ
* 値をハードコーディングしない – 変数とオプションを使用
* パフォーマンスの低いワークフローを定期的に確認し、最適化する

**関連トピック：**

[ ワークフローのベストプラクティスガイド ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"} | [ ワークフローの作成 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"} | [ ワークフローの監視 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

+++

## キャンペーン設定 {#settings}

適切な設定、統合および設定を使用して Campaign インスタンスを設定し、マーケティング運用を最適化します。

+++ Campaign インターフェイスの言語を変更できますか？ 

使用しているインターフェイスによって異なります。 **クライアントコンソール** の言語は固定されていますが、**Campaign Web UI** を使用して、個々のユーザーが言語の環境設定を変更できます。

**クライアントコンソール（デスクトップアプリケーション）:**

* 言語はインスタンスの作成時に設定され、変更できません
* クライアントコンソールとサーバーは同じ言語を使用する必要があります
* 各 Campaign インスタンスは単一の言語で動作します
* 英語のインストールの場合は、米国英語または英国英語から選択できます（日付と時刻の形式が異なります）

**Campaign Web UI:**

* ユーザーは、プロファイル環境設定を通じて、インターフェイス言語を個別に変更できます
* 日付、時刻、および数値に対してロケール固有の形式で、複数の言語がサポートされています
* Web UI 言語の環境設定は、Campaign サーバーとクライアントコンソールの言語とは独立しています


[Campaign web UI での言語の変更 ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/connect-to-campaign#language-pref){target="_blank"} | [Campaign クライアントコンソールの概要 ](connect.md)

+++

+++ Campaign v8 を他のAdobe ソリューションと一緒に使用できますか？

はい。Campaign v8 は、Adobe Experience Cloud ソリューションとシームレスに統合して、強力で統合されたマーケティングエコシステムを構築します。 Managed Cloud Serviceの v8 は、Adobeのエンタープライズアプリケーションとネイティブに統合するように設計されています。

**利用可能な主な統合：**

* **Adobe Experience Platform** – 統合顧客プロファイルとリアルタイムデータを活用します
* **Adobe Analytics** - チャネルをまたいでキャンペーンのパフォーマンスと顧客行動を測定します
* **Adobe Target** – 顧客のセグメントと行動に基づいてコンテンツをパーソナライズします
* **Adobe Experience Manager** - コンテンツ作成とアセット管理を一元化します
* **Adobe Audience Manager** - プラットフォームをまたいでオーディエンスセグメントを作成し、アクティブ化します

**メリット：** 顧客データの統合、一貫性のあるユーザーエクスペリエンス、ワークフローの合理化、パーソナライゼーション機能の強化が実現します。

**設定：** Adobe ソリューションとの統合には、Adobe Identity Management System （IMS）認証が必要です。この認証は、Campaign v8 Managed Cloud Services 用に自動的に設定されます。

[Adobe Campaignの統合 ](../connect/integration.md) | [Adobe IDとつながる ](connect.md)

+++

+++ トラッキング機能を Campaign インスタンスに設定するにはどうすればよいですか？ 

Campaign v8 は、受信者によるメッセージの操作を監視する包括的なトラッキングを提供します。 トラッキングには、インスタンスとメッセージ設定の適切な設定が必要です。

**トラッキング可能な項目：**

* **メール開封数** - トラッキングピクセルを使用（1x1 の透明画像）
* **リンククリック数** – すべての URL がトラッキング対象リンクに自動変換されます
* **購読解除** - オプトアウトリンクトラッキング
* **ミラーページビュー** – 受信者が web バージョンを表示する場合
* **カスタムパラメーター** - URL へのトラッキングデータの追加により、アドバンス分析を実現

**主な設定手順：**

1. インスタンス設定でトラッキングサーバー URL を設定（v8 用のAdobeによって管理）
2. 配信プロパティでのトラッキングの有効化
3. 個々のリンクまたはすべてのリンクのトラッキングを自動的に設定
4. トラッキング有効期間とログ保持期間を定義

**ベストプラクティス：** 常にメインオーディエンスに送信する前に配達確認でトラッキングをテストし、リンクが正しく機能し、データが取り込まれていることを確認します。

[ 配信のトラッキングと監視 ](tracking.md) | [ トラッキングするリンクを設定 ](../send/email.md)

+++

+++ メール配信品質の設定方法は？ 

メールの配信品質は、技術的な設定、コンテンツの品質、送信者の評判に依存します。 Campaign v8 には、インボックスの配置を最適化するツールと設定が用意されています。

**設定の基本的な手順：**

* **ドメイン認証** - SPF、DKIM、DMARC レコードを設定して、送信ドメインを検証します
* **IP ウォーミング** – 新しい IP の送信量を徐々に増やして評判を構築します
* **送信者の設定** – 一貫性のある認識可能な送信者アドレスと名前を使用する
* **バウンス管理** - ハードバウンスおよびソフトバウンスを自動的に処理するための強制隔離ルールを設定します
* **フィードバックループ** - スパムレポートを管理するための苦情処理を設定します

**コンテンツのベストプラクティス：**

* SpamAssassin を使用した E メールのテストによるスパムスコアの確認
* テキストと画像の適切な比率を維持
* HTMLと共にプレーンテキストバージョンを含める
* 常に購読解除リンクを提供
* スパムトリガーの単語や過度の大文字への変換を回避する

**監視：** Campaign の配信品質レポートを使用して、バウンス率、苦情率、インボックスの配置を追跡します。 Campaign v8 の場合、Adobeはインフラストラクチャレベルの配信品質の最適化を提供します。

[Campaign の配信品質について ](../send/about-deliverability.md) | [ 配信品質のベストプラクティスガイド ](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}

+++

+++ Campaign を接続できる外部データベースはどれですか？ 

Campaign v8 では、主要なエンタープライズデータベースシステムへの Federated Data Access （FDA）接続をサポートしており、既存のデータインフラストラクチャを活用できます。

**サポートされているデータベース：**

* **クラウドデータベース：** Amazon Redshift、Google BigQuery、Snowflake、Azure Synapse Analytics
* **エンタープライズデータベース：** Oracle、Microsoft SQL Server、PostgreSQL、MySQL
* **データウェアハウス：** Teradata、Vertica、SAP HANA
* **ビッグデータ：Hive を介したHadoopの**

**プラットフォーム固有の考慮事項：** サポートされるデータベースのバージョンと接続要件は異なります。 Campaign v8 as a Managed Cloud Serviceには、外部データベースアクセスに関する特定のネットワークおよびセキュリティ要件がある場合があります。

**重要：** Campaign v8 バージョンの公式の互換性マトリックスを常に確認して、特定のデータベースバージョンのサポートを確認し、外部データベースコネクタの適切なライセンスを確認してください。

[ 互換性マトリックス ](compatibility-matrix.md) | [FDA 接続の設定 ](../connect/fda.md)

+++

+++ Adobe Campaignを CRM システムと統合できますか？

はい。Campaign は、Campaign と CRM システムの間のシームレスな双方向同期のためのネイティブ CRM コネクタを提供し、プラットフォーム間で顧客データの一貫性を確保します。

**サポートされている CRM システム：**

* **Salesforce** - リード、連絡先、アカウント、オポチュニティ、キャンペーン
* **Microsoft Dynamics 365** – 連絡先、アカウント、リード、カスタムエンティティ
* カスタム API 統合を介した他の CRM

**同期の概要：**

* **CRM から Campaign へ：** 連絡先レコード、アカウント情報、リード、カスタムフィールド、セグメント化データ
* **Campaign から CRM へ：** 配信ログ、トラッキングデータ、エンゲージメント指標、キャンペーン応答、購読ステータス

**同期モード：**

* **スケジュール済み** – 定義された間隔（毎時、毎日）で自動同期
* **手動** - オペレーターによってトリガーされるオンデマンド同期
* **リアルタイム** - API を使用してすぐに更新（カスタム開発）

**設定：** Campaign の組み込み CRM コネクタアシスタントを使用して、CRM フィールドを Campaign 属性にマッピングし、同期するテーブルを選択して、同期をスケジュールします。 コネクタは、競合の解決を処理し、データの一貫性を維持します。

**ベストプラクティス：** 読み取り専用同期でマッピングをテストしてから、双方向同期を有効にします。 同期ログでエラーを監視し、両方のシステムでクリーンなデータを維持します。

[CRM コネクタの設定 ](../connect/crm.md) | [ ワークフロー CRM アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/crm-connector.html){target="_blank"}

+++

+++ クライアントコンソールのキャッシュをクリアするにはどうすればよいですか？

クライアントコンソールキャッシュをクリアすると、表示と機能に関するよくある多くの問題が解決します。 キャッシュには、破損したり古くなったりする可能性のあるローカル設定ファイルが格納されます。

**キャッシュをクリアするタイミング：**

* 新しいブランディング要素（ロゴ、色）が正しく表示されない
* 書き出し/読み込み関数が予期せず失敗する
* 設定の変更後にインターフェイス要素が更新されない
* パフォーマンスの問題またはコンソールの応答が遅い
* 新しいクライアントコンソールバージョンにアップグレードした後

**キャッシュのクリア手順：**

1. Campaign クライアントコンソールを開きます
2. **[!UICONTROL ファイル]** メニューに移動
3. 「**[!UICONTROL ローカルキャッシュをクリア…]**」を選択します
4. プロンプトが表示されたらアクションを確認します
5. クライアントコンソールを再起動します



[クライアントコンソールのインストールと設定](connect.md)

+++

+++ ユーザーインターフェイスを設定できますか？

はい。Campaign 管理者は、組織のブランディングに合わせてユーザーインターフェイスをカスタマイズし、ユーザーエクスペリエンスを最適化できます。 インスタンスレベルまたはユーザーレベルで設定を指定します。

**カスタマイズ可能な項目：**

* **ブランディング** - ロゴ、色、視覚的 ID 要素
* **デフォルトビュー** - ホームページレイアウト、フォルダー構造の表示
* **リスト設定** - データリストのデフォルトの列、並べ替え順、フィルター
* **ナビゲーション** – 使用可能なメニュー項目とショートカット
* **地域設定** – 日付/時刻形式、数値形式、タイムゾーン
* **通知** - メールアラート、アプリ内通知、ワークフローアラート

**構成レベル：**

* **インスタンス全体** – すべてのユーザーに適用（管理者権限が必要）
* **ユーザー固有** – 個々の環境設定と個人設定
* **オペレーターグループ** – すべてのグループメンバーによって継承される設定


[UI 設定を指定 ](../config/ui-settings.md) | [ ユーザー権限 ](gs-permissions.md)

+++

+++ カスタムフィールドとカスタムテーブルを作成できますか？

はい。Campaign の柔軟なデータモデルを使用すると、組み込みスキーマをカスタムフィールドで拡張し、特定のビジネスニーズを満たすまったく新しいテーブルを作成できます。

**カスタマイズ可能な項目：**

* **既存のテーブルへのフィールドの追加** - ロイヤルティポイント、カスタム環境設定、外部 ID を使用して受信者テーブルを拡張する
* **新しいカスタムテーブルの作成** – 製品、トランザクション、ロイヤルティ層、カスタムエンティティを保存する
* **関係の定義** - カスタムテーブルを既存の Campaign テーブルにリンクします
* **フォームの拡張** - UI を更新してカスタムフィールドを表示および編集する

**一般的なユースケース：**

* 追加のプロファイル属性（顧客のライフタイム値、優先ストア、VIP ステータス）を保存する
* カスタム属性を持つ製品カタログの管理
* カスタムイベントとインタラクションのトラッキング
* データ同期のための外部システム ID の統合
* 業界固有のデータモデル（小売、金融、旅行）を構築する


[ データモデルの拡張 ](../dev/extend-schema.md) | [ スキーマ構造 ](../dev/schemas.md) | [ データモデルのベストプラクティス ](../dev/datamodel-best-practices.md)

+++

## レポート {#reporting}

ビルトインレポート、カスタムレポート、キューブなどのデータ分析ツールなど、Campaign のレポート機能に関するインサイトを取得します。

+++ 新しいレポートを作成するにはどうすればよいですか？

Campaign では、ニーズや技術的な専門知識に応じて、複数のレポートオプションを提供しています。 組み込みレポートを使用したり、クライアントコンソールでカスタムレポートを作成したり、Campaign web UI で視覚的なダッシュボードをデザインしたりできます。

**レポートオプション：**

* **ビルトインレポート** - 「レポート **[!UICONTROL タブからアクセスできる、すぐに使用できる配信、キャンペーン、トラッキングレポート]**
* **記述的分析** - ウィザード方式のインターフェイスを使用した、任意のデータに関するクイック統計レポート
* **カスタムレポート** - レポートエディターを使用して技術ユーザーが作成した高度なレポート
* **Web UI ダッシュボード** - ドラッグ&amp;ドロップインターフェイスを備えた最新のビジュアルレポートとダッシュボード
* **キューブ** – 多次元データの調査とピボットテーブル分析

**重要：** Campaign は、特別なビジネスインテリジェンスツールとしてではなく、マーケティング業務のレポート作成用に設計されています。 複雑な分析ニーズの場合は、Adobe Analyticsまたは専用の BI プラットフォームとの統合を検討してください。

[ レポートの概要 ](../reporting/gs-reporting.md) | [Campaign web UI レポート ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/reports/gs-reports){target="_blank"}

+++

+++ 母集団に関する統計レポートを設計して共有するにはどうすればよいですか？

Campaign の記述的分析ツールを使用すると、任意の母集団データに関する統計レポートをすばやく生成できます。 このウィザードによる機能を使用すると、技術的な専門知識がなくても分布、トレンド、パターンを分析できます。

**分析対象：**

* 受信者の人口統計とセグメント化の分類
* キャンペーンのパフォーマンス指標と応答率
* プロファイル属性（年齢、場所、環境設定）の配分
* 配信統計とエンゲージメントパターン
* カスタムフィールド値とデータ品質指標

**作成方法：** リストまたはクエリ結果を選択→ →を右クリック **[!UICONTROL アクション/分析]** →分析タイプ（定性または定量）を選択→表示オプションを設定→ レポートを生成。

**共有：** レポートを Excel またはPDFにエクスポートするか、**[!UICONTROL Reports]** フォルダーに保存して、適切な権限でチームアクセスできるようにします。

[記述的分析](../reporting/built-in-reports.md)

+++

+++ データに関する高度なレポートを設計するにはどうすればよいですか？

Campaign では、高度なカスタムレポートを作成できる方法が 2 つあります。複雑な分析を行うためのクライアントコンソールのテクニカルレポートと、レポート作成を容易にする視覚的なダッシュボードです。

クライアントコンソールでは、次の操作を実行できます。

* SQL クエリとカスタム計算を使用して複雑なレポートを作成する
* グラフ、テーブル、およびピボットテーブルを含む複数ページのレポートを作成する
* 条件付き書式と動的コンテンツのデザイン
* Campaign の完全なデータモデルと外部データベースへのアクセス（FDA）


[ カスタムレポートの作成（クライアントコンソール） ](../reporting/custom-reports.md)

+++

+++ キューブとは何ですか？また、キューブをレポートに使用するにはどうすればよいですか？

キューブは、ビジネスユーザーが技術的なスキルがなくてもピボットテーブルを通じて Campaign データを調査および分析できる多次元データ構造です。 複雑なレポートを簡素化する事前設定済みのデータモデルと考えることができます。


* 技術ユーザーは、ディメンション（時間、地域、チャネル）と測定（開封数、クリック数、売上高）を定義するキューブを作成および設定します
* ビジネスユーザーは、レポートの作成時にキューブを選択し、ディメンションをドラッグ&amp;ドロップしてデータを調べます
* データは、キューブ設定に基づいて自動的に集計および計算されます
* 結果は、ピボット・テーブル、チャート、または Excel にエクスポートして表示できます


[キューブでのデータの調査](../reporting/gs-cubes.md)

+++

+++ オンライン調査に対する回答からレポートを作成できますか？

はい！ Campaign に含まれている調査モジュールを使用すると、オンラインアンケートを作成し、調査への回答に関するビルトインレポートを生成できます。

**重要：** 調査管理は、Campaign v8 Enterprise （FFDA）デプロイメントでは使用できません。 [詳細情報](../architecture/enterprise-deployment.md)。

**調査の機能：**

* 複数のページと質問タイプを含むオンラインアンケートの作成
* データベース変数またはローカル変数で応答を収集
* 調査への回答のリアルタイムトラッキングの表示
* 調査の回答（質問による分類、一般的な統計）に関する専用レポートの生成
* 調査の回答を Excel、PDFまたは CSV に書き出して、さらに分析する
* ターゲティングワークフローでの調査データを使用したキャンペーンのパーソナライズ

**ビルトイン調査レポート：**

* **一般レポート** – 時系列の応答トレンド、接触チャネル別および言語別の分布
* **回答の分類** – 各質問の回答の詳細な分類
* **ドキュメントレポート** – 調査構造の視覚的表現

**アドバンス分析：**

* 「回答 **[!UICONTROL タブからアンケートの回答にアクセスし]** データを書き出す
* ワークフローでの **[!UICONTROL 調査の回答]** アクティビティの使用による受信者の回答へのターゲット設定
* セグメント化とパーソナライゼーションのために、調査データを他のキャンペーンデータと組み合わせます
* 多次元の調査分析用のカスタムレポートおよびキューブの作成


[ 調査の概要 ](https://experienceleague.adobe.com/en/docs/campaign-classic/using/online-surveys/about-surveys){target="_blank"} | [ 調査レポート ](https://experienceleague.adobe.com/en/docs/campaign-classic/using/online-surveys/publish-track-and-use-collected-data#reports-on-surveys){target="_blank"}

+++

+++ レポートへのアクセスを共有するにはどうすればよいですか？

Campaign には、様々なユーザーグループとレポートを共有し、役割と責任に基づいて表示とアクセス権限を制御する柔軟なオプションが用意されています。

**レポートのアクセス制御：**

* **フォルダー権限** - ユーザーグループに対する適切な読み取り/書き込みアクセス権を持つフォルダーにレポートを配置します
* **ネームド権限** - レポートを表示、作成または変更する特定の権限を割り当てます。
* **表示コンテキスト** - レポートの表示場所（**[!UICONTROL レポート]** フォルダー、キャンペーンタブ、配信画面など）を定義します
* **Web UI 共有** - Campaign web UI を使用してチームメンバーとダッシュボードリンクを共有します

**アクセスの設定方法：**

1. レポートをクライアントコンソールの特定のフォルダーに保存します
2. 関連するオペレーターグループのフォルダーアクセス権限の設定
3. レポートプロパティ（レポートタイプ、表示コンテキスト、可用性）を定義します。
4. 広範なロールアウトを行う前に、ターゲットグループのユーザーによるアクセスをテスト

**ベストプラクティス：** カスタマイズされたアクセス権限を使用して、様々なチーム（マーケティング、運営、管理）用の専用レポートフォルダーを作成します。 レポートの目的と更新スケジュールを文書化します。

[ カスタムレポート ](../reporting/custom-reports.md) | [ ユーザー権限 ](gs-permissions.md)

+++

+++ レポートを様々な形式で書き出すことはできますか？

はい。Campaign では、クライアントコンソールと web UI レポートの両方で複数の書き出し形式をサポートしており、関係者との共有や他のツールとの統合を容易にします。

**使用可能な書き出し形式：**

* **Excel （.xlsx）** - データ操作、さらなる分析、ピボットテーブルに最適
* **PDF** - プレゼンテーション、エグゼクティブ サマリー、印刷レポートに最適
* **CSV** – 他のシステムや BI ツールへのデータのインポートに最適です
* **OpenDocument （.ods）** - オープンソースのスプレッドシート形式
* **XML** - システム統合と自動処理の場合

**書き出し方法：**

* **クライアントコンソール：** レポートを開く→「**[!UICONTROL エクスポート]**」ボタンをクリック→フォーマットを選択→ファイルを保存
* **Web UI:** ダッシュボードを開く→ エクスポートアイコンをクリックする→ フォーマットを選択する→ ダウンロード
* **自動書き出し：** 書き出しアクティビティでワークフローを使用して定期的な書き出しをスケジュールします

**ベストプラクティス：**

* 関係者の分析と注釈が必要なレポートには Excel を使用
* エグゼクティブに送信される静的レポート、またはコンプライアンスのためにアーカイブされる静的レポートにPDFを使用
* CSV を使用したデータウェアハウスや外部分析ツールとの統合
* 書き出されたレポートをテストして、形式とデータの精度を確認します

[ カスタムレポート ](../reporting/custom-reports.md) | [Campaign web UI レポート ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/reports/gs-reports){target="_blank"}

+++

## デベロッパー {#developers}

データモデルの詳細、スキーマ、API、カスタマイズ機能など、開発者向けの技術情報にアクセスできます。

+++ Campaign データモデルとは何ですか？

Campaign のデータモデルは、マーケティングデータを整理し関連付ける方法を定義する、スキーマ駆動型のリレーショナルデータベース構造です。 主要なマーケティングオブジェクト（受信者、配信、キャンペーン）のビルトインテーブルで構成され、特定のビジネスニーズに合わせて拡張できます。

**主要なデータモデル概念：**

* **スキーマ** - テーブル構造、フィールドおよび関係を記述する XML 定義
* **ビルトインテーブル** - コアマーケティングエンティティ（受信者、配信、ワークフロー、キャンペーン）
* **リンク** - テーブル間の関係（1-1、1-N、N-N）
* **列挙** - ドロップダウンフィールド用の事前定義済みの値リスト
* **拡張機能** – 標準モデルに追加されたカスタムフィールドとテーブル

**主なビルトインスキーマ：**

* **受信者（nms:recipient）** – 顧客プロファイルと連絡先情報
* **配信（nms:delivery）** - メール、SMS およびプッシュキャンペーン
* **ワークフロー（xtk:workflow）** – 自動化プロセス
* **キャンペーン（nms:operation）** - マーケティングキャンペーンオーケストレーション
* **トラッキングログ** – 開封数、クリック数、エンゲージメントデータ

**重要な理由：** ワークフローの作成、クエリの作成、スキーマの拡張およびカスタム統合の開発には、データモデルの理解が不可欠です。 スキーマベースのアプローチにより、データの一貫性が確保され、強力なクエリ機能が有効になります。

[Campaign データモデル ](../dev/datamodel.md) | [ データモデルのベストプラクティス ](../dev/datamodel-best-practices.md)

+++

+++ Campaign スキーマの操作方法は？

スキーマは、Campaign のデータ構造の基盤であり、XML 形式でテーブル、フィールド、関係を定義します。 スキーマの理解は、カスタマイズ、統合および高度なワークフロー開発に不可欠です。

**定義するスキーマ：**

* **テーブル構造** - データベーステーブルおよび対応するアプリケーションオブジェクト
* **フィールドプロパティ** - データタイプ、ラベル、検証ルールおよびデフォルト値
* **関係** - テーブル（結合）とカーディナリティ間のリンク
* **インデックス** - クエリパフォーマンスのためのデータベースの最適化
* **アクセス制御** - ユーザーが表示および変更できるフィールド

**スキーマの操作：**

* **スキーマの表示：クライアントコンソールの** 管理/設定/データスキーマ **[!UICONTROL を使用して]** アクセスします
* **スキーマの拡張：** 拡張スキーマを作成（`cus:recipient` を拡張す `nms:recipient` など）して、コアスキーマを変更せずにカスタムフィールドを追加します
* **カスタムスキーマの作成：** ビジネス固有のデータ用にまったく新しいテーブルを作成
* **データベースを更新：** ツール/詳細/データベース構造を更新 **[!UICONTROL を使用してスキーマの変更を適用します]**

**一般的なユースケース：**

* 受信者テーブルへのカスタムフィールドの追加（会社 ID、ロイヤルティ層、環境設定）
* 製品、ストアまたはトランザクションのカスタムテーブルの作成
* カスタムテーブルとビルトインテーブル間の関係の定義
* ビジネス固有のデータモデルの実装

**重要：** ビルトインスキーマを直接変更しないでください。 アップグレードの互換性とAdobeのサポートを維持するために、常に拡張スキーマを使用します。

[ スキーマの概要 ](../dev/schemas.md) | [ スキーマの拡張 ](../dev/extend-schema.md)

+++

+++ カスタム受信者テーブルの使用方法は？

Campaign では、ターゲティングに異なるデータ構造（B2B アカウント、購読者、リード、外部連絡先など）が必要なビジネスで、組み込みの受信者テーブルではなくカスタムテーブルを使用することができます。

**カスタム受信者テーブルを使用する理由：**

* 個々の連絡先ではなく、B2B 会社または組織単位をターゲットにする
* メインの顧客データベースからサブスクライバーデータを分離
* 別のシステムの既存の顧客テーブルを使用する
* 個別の連絡先テーブルを使用したマルチブランドアーキテクチャの実装
* 特定のデータガバナンス要件への準拠

**実装手順：**

1. 受信者テーブル構造を定義するカスタムスキーマの作成
2. 必須フィールド （電子メール、プライマリキー、除外フラグ）を含める
3. ターゲットマッピングを設定して、テーブルを配信にリンクします
4. 新しいターゲットマッピングを使用するように配信テンプレートを更新する
5. カスタムテーブルを参照するようにワークフローとクエリを調整する

**主な考慮事項：**

* カスタム受信者テーブルには、配信（メール、除外、トラッキング）に必須のフィールドを含める必要があります
* カスタム構造を扱うには、ワークフローとフォームを調整する必要があります
* 一部の組み込み機能にはカスタマイズが必要な場合があります
* 実稼動キャンペーンを移行する前にテストを行うことが重要です

**ベストプラクティス：** カスタムテーブルを検討する前に、標準の受信者テーブルの拡張から始めます。 カスタム受信者テーブルは複雑さを増すため、本当に必要な場合にのみ使用してください。

[ カスタム受信者テーブル ](../dev/custom-recipient.md) | [ ターゲットマッピング ](../audiences/target-mappings.md)

+++

+++ Campaign でクエリを定義するためのベストプラクティスは？

Campaign のクエリエディターは、SQL に関する知識がなくてもデータベースクエリを作成できる強力なビジュアルツールです。 効果的なターゲティング、セグメント化およびデータ分析には、習得が不可欠です。

**クエリを使用する場所：**

* **ワークフローアクティビティ** - クエリ、分割、データの更新、エンリッチメントアクティビティ
* **配信ターゲティング** - キャンペーンの受信者母集団を定義します
* **リスト** – 動的または静的な受信者リストの作成
* **レポート** - カスタムデータ抽出および分析の作成
* **フィルター** – 再利用可能なターゲティング条件を作成します

**クエリのベストプラクティス：**

* **シンプルな開始** - クエリを増分的に作成し、各ステップでテストします
* **フィルタリングディメンションの使用** - テーブル間の関係を活用（受信者→配信→トラッキングログ）
* **パフォーマンスの最適化** – 頻繁にクエリされるフィールドのインデックスを作成し、複雑な計算フィールドを回避します
* **定義済みフィルターの活用** – 一貫性を保つために、既存のフィルターを再利用および組み合わせます
* **小さなサンプルを使用したテスト** – 完全なデータベースで実行する前にクエリロジックを検証します
* **複雑なクエリのドキュメント化** - メンテナンスと知識の移行についての説明を追加します

**一般的なクエリパターン：**

* 特定の配信を開いたターゲット受信者：受信者にリンクされたトラッキングログをフィルタリングします
* 非アクティブな連絡先の検索：最後の配信日またはトラッキングアクティビティをクエリします
* 行動別のセグメント：配信、トラッキングおよびプロファイルの条件を組み合わせます
* 以前の受信者を除外：設定操作（和集合、積集合、除外）を使用します

**汎用クエリエディターにアクセス：****[!UICONTROL ツール/汎用クエリエディター]** で、ワークフロー外でのアドホックデータベース探索とデータ抽出を行います。

[ クエリエディター ](../start/query-editor.md) | [ ワークフローでのクエリアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"}

+++

+++ データパッケージをインポートするにはどうすればよいですか？

データパッケージを使用すると、Campaign 設定（スキーマ、ワークフロー、タイポロジ、フィルター）とデータをインスタンス間でエクスポートおよびインポートできます。 これは、開発から実稼動への設定のデプロイや、組織間でのコンポーネントの共有に不可欠です。

**パッケージ化できるもの：**

* **設定オブジェクト** - スキーマ、ワークフロー、タイポロジルール、フォーム、フィルター
* **キャンペーンコンポーネント** – 配信テンプレート、キャンペーンテンプレート、コンテンツブロック
* **アプリケーション設定** - オペレーター、オペレーターグループ、フォルダー構造
* **データ** – 受信者リスト、シードアドレス、コンテンツフラグメント
* **カスタムの開発** - JavaScript コード、SQL スクリプト、web アプリケーション


**パッケージタイプ：**

* **ユーザーパッケージ** – 作成および書き出すカスタム設定
* **プラットフォームパッケージ** - Adobeが提供する機能とアップデート
* **データパッケージ** – 構造だけでなく、実際のデータレコードを含みます

**ベストプラクティス：**

* 常に同じまたは古いバージョンの Campaign からパッケージをエクスポートする
* 実稼動前に、開発環境でのパッケージインポートのテストを行います。
* ドキュメントパッケージのコンテンツと依存関係
* パッケージ XML ファイルにバージョン管理を使用する
* メジャーパッケージのインポート前にインスタンスをバックアップ

[データパッケージの使用](../dev/packages.md)

+++

+++ Campaign v8 API のリストはどこで参照できますか？

Campaign v8 では、SOAP API （クライアントコンソールのインタラクション用）と REST API （最新の統合用）の両方をカバーする包括的な API ドキュメントを提供しています。 API リファレンスには、使用可能なすべてのメソッド、パラメーター、応答形式が含まれています。

**Campaign API のタイプ：**

* **SOAP API** - Campaign クライアントコンソール操作、スキーマ操作、ワークフロー制御の従来の API
* **REST API** – 外部システム統合、プロファイル管理、イベントトリガーのための最新の HTTP API
* **JavaScript API** - ワークフローアクティビティおよびカスタムビジネスロジック用のサーバーサイドスクリプティング API

**API ドキュメントのリソース：**

* **完全な API リファレンス：** メソッドのシグネチャ、パラメーター、例を含む包括的なSOAP API ドキュメント
* **REST API ガイド：** プロファイル、イベントおよび組織単位の最新の REST エンドポイント
* **JavaScript API:** ワークフロースクリプトおよび web アプリケーションで使用できるサーバーサイド関数

**一般的な API のユースケース：**

* Campaign と CRM、ERP、またはカスタムアプリケーションの統合
* キャンペーン操作とワークフロー実行の自動化
* リアルタイムでのシステム間のデータ同期
* カスタム監視および警告ソリューションの構築
* Campaign のデータおよび操作用の外部インターフェイスの作成

**アクセス：** [Campaign v8 API ドキュメント ](https://experienceleague.adobe.com/developer/campaign-api/api/index.html?lang=ja){target="_blank"}

+++


+++ API からワークフローを監視するにはどうすればよいですか？

Campaign API を使用すると、ワークフローの実行をプログラムで制御および監視し、外部の監視システム、自動アラート、カスタムオーケストレーションソリューションを実現できます。

**API を使用して実行できること：**

* **ワークフローの開始** - トリガーワークフローをプログラムで実行
* **ワークフローの一時停止/再開** - ワークフローの実行フローの制御
* **ワークフローを停止** – 実行中のワークフローを終了します
* **ワークフローステータスのクエリ** - ワークフローが実行中、一時停止、または完了しているかどうかを確認します
* **ログを取得** - ワークフロー実行ログとエラーメッセージにアクセスできます
* **アクティビティの進行状況の監視** – 個々のワークフローアクティビティの完了を追跡する

**API メソッド：**

* `xtk:workflow#Start` - ワークフローインスタンスの開始
* `xtk:workflow#Pause` – 実行中のワークフローを一時停止
* `xtk:workflow#Stop` - ワークフローの実行を停止
* `xtk:workflow#GetState` – 現在のワークフローの状態の取得
* `xtk:workflow#GetLogs` – 実行ログの取得

**一般的なユースケース：**

* ワークフローの正常性を示すカスタム監視ダッシュボードを作成する
* ワークフローが失敗した場合や実行に時間がかかりすぎた場合に自動アラートを実装
* 外部スケジューラーまたはイベントシステムからのワークフローの調整
* 複数の Campaign インスタンス間でのワークフローの依存関係の作成
* カスタムワークフロー実行レポートの生成

**ベストプラクティス：** API 監視をワークフロー監査証跡と組み合わせて、包括的なワークフローガバナンスを実現します。 外部の監視ツールを使用して、ワークフローの SLA とパフォーマンス指標を追跡します。

[API を使用したワークフローの制御](../dev/api/controlling-a-workflow.md)

+++

+++ データベース構造を更新するにはどうすればよいですか？

Campaign スキーマを変更（フィールドの追加、テーブルの作成、データタイプの変更）したら、変更を適用するために物理データベース構造を更新する必要があります。 この同期により、データベースがスキーマ定義と一致するようになります。

**データベースの更新が必要な場合：**

* 既存スキーマへの新しいフィールドの追加
* カスタムテーブルの作成またはビルトインテーブルの拡張
* フィールドプロパティの変更（データタイプ、長さ、必須ステータス）
* テーブル間のリンクの追加または削除
* クエリ最適化のための新しいインデックスの作成


**重要な考慮事項：**

* **最初にバックアップ** – 構造的変更の前に、常にデータベースをバックアップします
* **開発環境でのテスト** – 実稼動環境に移行する前に、開発環境でのスキーマ変更を検証します
* **ダウンタイム計画** – 大規模な構造変更には、短いメンテナンスウィンドウが必要になる場合があります
* **Managed Cloud Services の場合** - Adobeのサポートにより、大きな変更を調整します
* **可逆性** – 一部の変更（フィールドの削除など）は、データが失われる可能性があります

**ベストプラクティス：** スキーマのバージョン管理と変更のトラッキングを使用します。 メンテナンスやトラブルシューティングのために、すべてのカスタムスキーマの変更を文書化します。

[ データベース構造を更新 ](../dev/update-database-structure.md) | [ スキーマを拡張 ](../dev/extend-schema.md)

+++

+++ Campaign v8 の制限事項

Campaign v8 では、パフォーマンスが大幅に向上するアーキテクチャの変更（特に FFDA デプロイメント）が導入されていますが、Campaign Classic v7 とはいくらかの違いもあります。 これらを理解することは、移行を計画し、適切な期待値を設定するのに役立ちます。

**v8 に関する主な考慮事項：**

* **FFDA アーキテクチャ** - エンタープライズデプロイメントでは、異なるデータアクセスパターンを持つクラウドデータベース（Snowflake）を使用します
* **ユニットの更新** - データ更新は、API や直接のデータベースアクセスではなく、ワークフローで行う必要があります
* **リアルタイムの書き込み** – 高頻度の個別アップデートではなく、バッチ操作に対して最適化される
* **データモデル** – 一部のスキーマをカスタマイズするには、異なるアプローチが必要です
* **外部データベースアクセス** - FDA （Federated Data Access）設定が v7 と異なる

**FFDA デプロイメントで使用できない機能：**

* 調査（標準 v8 デプロイメントで使用可能）
* マーケティングリソース管理（MRM）
* いくつかの特定のコネクタ設定

**移行に関する考慮事項：**

* ダイレクトデータベース書き込みを使用したカスタムコードには、リファクタリングが必要
* API 統合では、バッチ処理への適応が必要になる場合があります
* ワークフローは、データ操作の FFDA ベストプラクティスに従う必要があります
* カスタム開発を検証するには、テストが不可欠です

**重要：** Adobeが v8 の機能を引き続き強化する中で、これらの制限は進化しています。 現在のステータスとロードマップについては、最新のドキュメントを参照してください。

[Campaign v7 から v8 への移行 ](../start/v7-to-v8.md#limitations) | [FFDA アーキテクチャ ](../architecture/enterprise-deployment.md)

+++

## プライバシー {#privacy}

GDPR や CCPA などのプライバシー規制の遵守や、データ主体からのリクエストの管理にAdobe Campaignがどのように役立つかを説明します。

+++ Campaign のプライバシーに関する主要な概念は何ですか？

Campaign は、データ主体の権利、同意、データ保持を管理するツールを使用して、プライバシー規制（GDPR、CCPA、PDPA、LGPD）の遵守に役立ちます。 主要な概念には、プライバシー規制、個人データの識別、データ主体の権利（アクセス、削除、ポータビリティ）、同意管理、データ保持ポリシーが含まれます。

データ管理者は、データ主体のリクエストの処理、同意記録の維持および透過的なデータ使用の確保を担当します。

[プライバシー管理](../start/privacy.md)

+++

+++ Campaign でプライバシーコンプライアンスを確保するにはどうすればよいですか？

Campaign にはプライバシーコンプライアンス用のツールが用意されていますが、法的責任はユーザーが負います。 プライバシープログラムについては、法務担当者に相談してください。

**重要なアクション：**

* データ主体のリクエスト（アクセス、削除）を処理するプロセスを確立する
* タイムスタンプと範囲トラッキングを使用した同意管理の実装
* すべてのマーケティングメールに購読解除リンクを含める
* データソースの監査と未使用データの削除
* 最小権限のアクセス制御の適用

Campaign は、Privacy Core Service 統合、同意追跡、自動削除ワークフロー、コンプライアンスのための監査証跡を提供します。

[プライバシー管理](../start/privacy.md)

+++

+++ ユーザーの同意を収集および管理するにはどうすればよいですか？

有効な同意を得るには、活発で具体的かつ十分な情報に基づいた取消可能な合意が必要となる。 ユーザーは、事前にチェックボックスをオンにしたり、同意として沈黙させたりすることなく、明示的なアクションを実行する必要があります。 目的に応じて同意を分離し（バンドルしない）、明確な説明を提供し、タイムスタンプ付きのレコードを維持します。

**ベストプラクティス：** きめ細かいオプトインオプションを提供し、同意を定期的に更新し、環境設定センターにアクセスしやすくし、同意を信頼構築として組み立てます。

Campaign は、購読サービス、環境設定センター、タイムスタンプトラッキングを含むカスタム同意フィールド、ワークフローベースの同意更新を提供します。

[ 購読 ](../start/subscriptions.md) | [ プライバシーと同意 ](../start/privacy.md#consent-retention-roles)

+++

+++ Campaign で同意管理を実装するにはどうすればよいですか？

Campaign には、同意をトラッキングするための購読サービス、環境設定センター、オプトアウトフラグ、カスタム同意フィールドが用意されています。

**実装アプローチ：** 同意フィールド（日付、タイプ、ソース）の受信者スキーマの拡張、各同意タイプの購読サービスの作成、環境設定センターの web フォームの作成、ターゲティングでの同意の適用にワークフローを使用した管理および監査証跡の維持を行います。

法務担当者に相談して、実装が規制要件を満たしていることを確認します。

[ 定期購読サービス ](../start/subscriptions.md) | [ プライバシーの管理 ](../start/privacy.md)

+++

+++ 削除リクエストの処理時に削除されるデータは何ですか？

Campaign は、受信者プロファイル、配信とトラッキングログ、所有権関係を含むカスタムデータ、購読履歴、web トラッキングデータなど、データ主体にリンクされているすべてのデータを自動的に削除します。

**仕組み：** Campaign は、受信者へのリンクがスキーマ定義に `integrity="own"` まれているデータをすべて削除し、関連するテーブル間でカスケード削除を確実に行います。

スキーマのリンクの整合性を変更することで削除範囲をカスタマイズできますが、最初に法務担当者に相談してください。 削除は永続的で、元に戻すことはできません。

[ プライバシーの管理 ](../start/privacy.md) | [ スキーマリンク ](../dev/schemas.md)

+++

+++ プライバシーの削除は配信レポートに影響を与えますか？

いいえ。キャンペーンレポートは、個々のログのライブクエリではなく、事前に計算された集計指標（送信済み、開封数、クリック数の合計）に基づいています。 個々の受信者データを削除しても、集計統計の履歴は変更されません。

配信統計とパフォーマンス指標の全体は元の状態に戻り、個々のトラッキングログや個人の詳細情報は削除されます。 これにより、データ主体の権限を尊重しながらマーケティング分析を維持できます。

[ プライバシーの管理 ](../start/privacy.md) | [ レポート ](../reporting/gs-reporting.md)

+++

+++ 削除したデータの再インポートを防ぐ方法

Campaign だけでなく、すべてのソースシステムからデータを削除する必要があります。 多くの場合、データは外部システム（CRM、e コマース、データウェアハウス）からフローします。

**必要なアクション：** すべてのデータソースを特定し、ソースシステムから削除し、除外/抑制リストに追加し、削除フラグを尊重するようにインポートワークフローを更新して、プロセスを文書化します。

データ管理者は、テクノロジーエコシステム全体でデータを完全に削除する責任があります。

[ プライバシーの管理 ](../start/privacy.md) | [ ワークフローをインポート ](../config/workflows.md)

+++

+++ 削除したユーザーは再度オプトインできますか？

はい。データ主体は、削除後に再度オプトインできます。 Campaign は、以前に削除されたデータへのリンクを含まない、完全に新しい受信者レコードを作成します。プロファイルは新しい状態で開始します。

Campaign の監査記録は、削除イベントと新しいプロファイル作成の両方を記録し、コンプライアンスを示し、削除後に自由に付与された新しいオプトインを示します。

[ プライバシーの管理 ](../start/privacy.md) | [ 購読 ](../start/subscriptions.md)

+++

## まだサポートが必要ですか？ {#get-help}

お探しのものが見つからない場合は、 Adobe Campaign v8 を使用してうまく行くためのその他のリソースを以下に示します。

### コミュニティサポート

他の Campaign ユーザーやAdobeのエキスパートとつながり、知識を共有して回答を得ることができます。

* **[Adobe Campaign コミュニティ ](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"}** – 質問をする、ソリューションを共有する、Campaign コミュニティとつながる
* **[Experience League フォーラム ](https://experienceleaguecommunities.adobe.com/){target="_blank"}** – すべてのAdobe製品のディスカッションを参照できます
* **[Campaign コミュニティの営業時間 ](https://experienceleague.adobe.com/){target="_blank"}** - Adobeのエキスパートとのライブセッションに参加できます

### ドキュメントとラーニング

包括的なガイド、チュートリアル、トレーニング資料にアクセスできます。

* **[Campaign v8 ドキュメントのホーム](../campaign-home.md)** – 完全な製品ドキュメント
* **[Campaign チュートリアル ](https://experienceleague.adobe.com/docs/campaign-learn/tutorials/overview.html?lang=ja){target="_blank"}** – 段階的なビデオガイドと実践チュートリアル
* **[新機能](whats-new.md)** – 最新の機能と特徴
* **[リリースノート](release-notes.md)** – 現在および以前のリリース情報
* **[バージョンとアップグレード](upgrades.md)** - Campaign のバージョン、アップグレード、バージョンの確認方法について説明します。
* **[ベストプラクティス](delivery-best-practices.md)** – 一般的なタスクに推奨されるアプローチ

### テクニカルリソース

詳細な技術ドキュメントや開発者向けリソースをご覧ください。

* **[Campaign API](https://experienceleague.adobe.com/developer/campaign-api/api/index.html?lang=ja){target="_blank"}** – 完全な API リファレンスドキュメント
* **[Campaign GitHub](https://github.com/AdobeDocs/campaign.ja)** - ドキュメントへの投稿
* **[テクニカルノート ](https://experienceleague.adobe.com/ja/docs/campaign/technotes-ac/technotes-home){target="_blank"}** - テクニカル記事の詳細
* **[互換性マトリックス](compatibility-matrix.md)** - サポートされるシステムとバージョン
* **[バージョンとアップグレードに関する FAQ](upgrades.md#upgrades-faq)** - バージョンを確認し、アップグレードについて説明します

### サポートとサービス

Adobeのサポートチームにお問い合わせいただき、インスタンスを管理します。

* **[Adobe Admin Console](https://adminconsole.adobe.com/){target="_blank"}** - サポートケースを記録し、ユーザーを管理します
* **[Adobe カスタマーケア ](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html){target="_blank"}** - サポートチームにお問い合わせください
* **[Campaign コントロールパネル](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=ja){target="_blank"}** - Campaign インスタンス設定の管理
* **[システムステータス ](https://status.adobe.com/){target="_blank"}** - Adobe サービスステータスの確認

### トレーニングと資格認定

Adobeの公式トレーニングおよび認定プログラムを利用してスキルを向上させましょう。

* **[Adobe Digital Learning Services](https://learning.adobe.com/){target="_blank"}** - インストラクター主導および自習コース
* **[Adobe Campaign認定制度 ](https://experienceleague.adobe.com/docs/certification/program/overview.html){target="_blank"}** - プロフェッショナル認定制度で専門知識を検証します
* **[Experience Leagueの学習パス ](https://experienceleague.adobe.com/?lang=ja#dashboard/learning){target="_blank"}** - ガイド付き学習ジャーニー

### その他の役立つリソース

* **[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/campaign-classic-home.html?lang=ja){target="_blank"}** - Classic v7 ユーザーのリファレンス
* **[Campaign Web UI ドキュメント ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}** – 新しい web インターフェイスガイド
* **[配信品質のベストプラクティス ](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}** - メール配信の最適化
* **[製品アップデート ](https://experienceleague.adobe.com/en/docs/release-notes/experience-cloud/current){target="_blank"}** – 最新のAdobe Experience Cloudアップデート

**最終更新日：** 2025 年 11 月 | **適用先：** Campaign v8.6 以降

*エラーが見つかった場合、または改善を提案しますか？ [GitHub でこのページを編集 ](https://github.com/AdobeDocs/campaign.en/edit/main/help/v8/start/campaign-faq-comprehensive.md)*

