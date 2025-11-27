---
title: Campaign v8 に関するよくある質問
description: 設定、設定、メッセージング、ワークフローなどに関するAdobe Campaign v8 のよくある質問への回答を示します
feature: Overview
role: User
level: Beginner
keywords: FAQ, Campaign v8，質問，回答，ヘルプ，サポート，トラブルシューティング
hide: true
hidefromtoc: true
source-git-commit: 561893e593a6c6f85d4c469ac09dd2e35a9b37e1
workflow-type: tm+mt
source-wordcount: '10239'
ht-degree: 28%

---

# よくある質問 {#faq}

Adobe Campaign v8 に関するよくある質問への回答を簡単に示します。 使い始めたばかりの場合でも、高度な設定のヘルプを探している場合でも、以下のトピック別に回答が整理されています。

**Campaign を初めて使用する場合** 一般的 [ 質問 ](#general) および [ 主要概念 ](#key-concepts) から始めます。\
**技術的なサポートが必要な場合は、** 開発者 [ と ](#developers) キャンペーン設定 [ を ](#settings) 認します。\
**答えが見つからない場合は、** [ コミュニティフォーラム ](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"} または [ サポートへのお問い合わせ ](#get-help) をご覧ください。

>[!TIP]
>
>Ctrl + F （Macの場合は Cmd + F）を使用して、このページ上の特定のキーワードを検索します。 任意の質問をクリックして回答を展開します。


## 一般的な質問 {#general}

接続方法、アップグレード方法、サポートを受ける方法など、Adobe Campaign v8 に関するよくある質問への回答を示します。

+++ Campaign v8 に接続するにはどうすればよいですか？

Adobe Campaign に接続するには、Campaign クライアントコンソールをダウンロードしてインストールする必要があります。

詳しくは、[ここをクリック](connect.md)してください。

Campaign v8.6 リリース以降では、Adobe Experience Cloudの一元化された環境から使用できる **Campaign web ユーザーインターフェイス** にアクセスできます。 Experience Cloudは、Adobeのデジタルマーケティングアプリケーション、製品およびサービスの統合ファミリーです。

Adobe Experience Cloud に接続し、Adobe Campaign web インターフェイスにアクセスする方法については、[このページ](campaign-ui.md#ac-web-ui)を参照してください。

詳しくは、[Adobe Campaign web ユーザーインターフェイスドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}を参照してください。

>[!TIP]
>
>**接続の問題のトラブルシューティング：**
>
>* Adobe IDの資格情報が正しいことを確認します
>* クライアントコンソールのバージョンがサーバーのバージョンと一致していることを確認します
>* ネットワーク接続とファイアウォール設定の確認
>* 問題が発生した場合のクライアントコンソールキャッシュのクリア
>* ユーザー権限を確認するには、管理者にお問い合わせください

**関連トピック：**

* [クライアントコンソールのインストール](connect.md)
* [Campaign ユーザーインターフェイス](campaign-ui.md)
* [ユーザー権限](gs-permissions.md)

+++

+++ Campaign v8 をオンプレミス環境またはハイブリッド環境にインストールすることはできますか？

Campaign v8 は、アドビが完全にホストしている Managed Cloud Services でのみ使用できます。

+++

+++ Campaign を最新版にアップグレードするにはどうすればよいですか？

Adobe Campaign は定期的に更新されています。マイナーバージョンは、新機能、改善および修正が加えられ、毎年リリースされています。 さらに、累積的な修正のみを含むビルドを定期的にリリースしています。

この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。 だからこそ、最新バージョンの Adobe Campaign を実行することが重要であると考えているのです。

>[!NOTE]
>
>Managed Cloud Services ユーザーの場合は、Adobeが新しいリリースを提供することでインスタンスがアップグレードされます。

+++

+++ メールの配信品質を向上させるにはどうすればよいですか？

メール配信の品質は、すべての送信者がマーケティングプログラムを成功させるうえで重要なコンポーネントであり、条件とルールが常に変化し続けるという特徴があります。 デジタルの世界を効果的に進むには、主な配信品質の傾向を考慮して、メール戦略を定期的に調整し、最適な方法でオーディエンスにアプローチする必要があります。

詳しくは、配信品質のベストプラクティス [ のガイドを参照してください ](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}

Campaign に配信品質を実装する方法については、[このガイド](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/general-resources.html?lang=ja){target="_blank"}を参照してください

>[!TIP]
>
>**配信品質の主なヒント：**
>
>* クリーンな電子メールリストを維持し、非アクティブな購読者を定期的に削除します
>* ダブルオプトインを使用して、エンゲージメントのある受信者を確保します
>* 送信者の評価と IP の評価の監視
>* SPF、DKIMおよびDMARCを使用してメールを認証
>* 購読解除のリクエストに直ちに従う
>* 多数のオーディエンスに送信する前にメールをテストする

**関連トピック：**

* [配信品質について](../send/about-deliverability.md)
* [メッセージコンテンツの制御](../send/control-message-content.md)
* [配信品質の監視](../send/monitoring-deliverability.md)
* [SpamAssassin](../send/spamassassin.md)

+++

+++ エラーなしで配信されていることを確認するにはどうすればよいですか？

Adobe Campaign には、メール配信を監視するための一連のダッシュボードおよびツールが付属しています。

メッセージが送信されていることを確認し、実行を監視し、エラーが発生した場合にアクションを実行する方法については、[Campaign Classic v7 のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja){target="_blank"}を参照してください。

+++

+++ ワークフローの実行を監視できますか？

キャンペーンワークフローの実行を監視する方法については、[このページ](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution){target="_blank"}を参照してください。

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

Campaign クライアントコンソールの&#x200B;**ヘルプ／バージョン情報**&#x200B;メニューで、お使いの[バージョンおよびビルド番号](connect.md#ac-version)を確認できます。

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

* [権限の基本を学ぶ](gs-permissions.md)
* [ユーザー権限の管理](manage-permissions.md)
* [フォルダーに対する権限の追加](folder-permissions.md)

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

* [ワークフローの基本を学ぶ](../config/workflows.md)
* [ 最初のワークフローを作成 ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"}
* [ ワークフローのユースケース ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"}
* [ワークフロー実行の監視](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

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

* [ 最初の配信の作成 ](create-message.md) - ステップバイステップガイド
* [ 配信テンプレートの操作 ](../send/create-templates.md) - テンプレートを使用して時間を節約する
* [ 配信のベストプラクティス ](delivery-best-practices.md) – 成功のための推奨事項
* [ メールコンテンツの定義 ](../send/defining-the-email-content.md) - コンテンツ作成オプション
* [ プレビューと配達確認 ](../send/preview-and-proof.md) – 送信前のテスト
* [ 設定と送信 ](../send/configure-and-send.md) – 送信の最後の手順
* [ コンテンツのパーソナライズ ](../send/personalize.md) – 動的なパーソナライゼーションの追加

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

* [SMS の基本を学ぶ ](../send/sms/sms.md) – 完全な SMS ガイド
* [SMS 配信設定 ](../send/sms/sms-delivery-settings.md) – 設定オプション
* [SMPP 外部アカウント設定 ](../send/sms/smpp-external-account.md) - プロバイダー設定
* [SMS 配信の作成 ](../send/sms/create-sms.md) - ステップバイステップの作成
* [SMS コンテンツ ](../send/sms/sms-content.md) - コンテンツデザインのガイドライン
* [SMS 配達確認の送信 ](../send/sms/sms-proofs.md) - SMS のテスト
* [SMS の監視 ](../send/sms/sms-monitor.md) – 配信のトラッキングと分析

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

* [ プッシュ通知の作成と送信 ](../send/push.md) – 完全なプッシュガイド
* [ プッシュ通知チャネルの設定 ](../send/push-settings.md) - チャネル設定
* [Androidの豊富なプッシュのデザイン ](../send/rich-push-android.md) - Androidの豊富な通知
* [iOSの豊富なプッシュのデザイン ](../send/rich-push-ios.md) - iOSの豊富な通知
* [ データ収集を使用した設定 ](../send/push-data-collection.md) – 最新の改訂された統合方法
* [ 追跡と監視 ](tracking.md) - プッシュパフォーマンスの分析

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

* [メッセージのトラッキングと監視](tracking.md)
* [配信レポート](../reporting/delivery-reports.md)
* [配信失敗について](../send/delivery-failures.md)
* [ トラッキング対象リンクの設定 ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/how-to-configure-tracked-links.html){target="_blank"} （Campaign Classic v7 ドキュメント）

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

* [Campaign Classic v7 から v8 へ ](v7-to-v8.md) | [v7 から v8 への移行ガイド ](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/new/v7-to-v8){target="_blank"}
* [Campaign Standardから v8 へ ](acs-to-v8.md) | [Campaign Standardの移行 ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}
* [Campaign v8 導入ガイド ](https://experienceleague.adobe.com/ja/docs/campaign-web/acs-to-ac/home){target="_blank"}
* [Campaign v8 機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"}
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

**Campaign Classic v7 ユーザーの場合：**

* [Campaign Classic v7 から v8 へ](v7-to-v8.md)
* [v7 から v8 までの詳細ガイド ](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/new/v7-to-v8){target="_blank"}

**Campaign Standard ユーザーの場合：**

* [Campaign Standardの v8 への移行 ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}
* [Campaign v8 導入ガイド ](https://experienceleague.adobe.com/ja/docs/campaign-web/acs-to-ac/home){target="_blank"}
* [Campaign Standardから v8 への移行の概要 ](https://experienceleague.adobe.com/en/docs/campaign-web/acs-to-ac/overview){target="_blank"}
* [ マーケター向けの基礎知識 ](https://experienceleague.adobe.com/en/docs/campaign-web/acs-to-ac/marketers){target="_blank"}
* [ 管理者/開発者向けの基礎知識 ](https://experienceleague.adobe.com/en/docs/campaign-web/acs-to-ac/admin-developers){target="_blank"}

**一般リソース：**

* [Campaign v8 機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"}
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

* [ 機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"} - インターフェイス間での機能の比較
* [ 互換性マトリックス ](compatibility-matrix.md) - サポートされるシステムおよびコンポーネント
* [ガードレールと制限](ac-guardrails.md)
* [v7 から v8 への移行ガイド](v7-to-v8.md)
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

>[!TIP]
>
>定期的な更新が必要なリストや、1 回限りのセグメント化のための手動作成には、ワークフローを使用します。

[ オーディエンスの作成 ](../audiences/create-audiences.md) | [ リスト更新アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/list-update.html){target="_blank"}

+++

+++ メッセージを送信する前に母集団の重複を排除するにはどうすればよいですか？ 

ワークフローでの **[!UICONTROL 重複排除]** アクティビティを使用すると、配信前に重複する受信者を削除できます。 **[!UICONTROL クエリ]** アクティビティと **[!UICONTROL 配信]** アクティビティの間にクエリを配置し、重複排除条件（通常はメールアドレスまたは受信者 ID）と保持するレコードを選択します。

>[!TIP]
>
>送信する前に必ず重複排除を行い、各ユーザーがメッセージを 1 回だけ受信するようにします。

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

>[!TIP]
>
>最適なメールデザインエクスペリエンスを得るには、Campaign web UI で **メールDesigner** を使用します。これは、生のHTMLを読み込むのではなく、最新のドラッグ&amp;ドロップ機能と組み込みのレスポンシブテンプレートを提供します。

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

>[!NOTE]
>
>AI アシスタントは、Campaign web UI でのみ使用でき、現在は英語のみをサポートしています。 ユーザーは適切な権限が必要で、ユーザー使用許諾契約に同意する必要があります。

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


>[!TIP]
>
>最新のデザインツールを使用して、より迅速で直感的なメール作成に Campaign web UI を使用します。 複雑なターゲティングや高度なワークフローベースのキャンペーンには、クライアントコンソールを使用します。

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

>[!TIP]
>
>強制隔離リストを定期的に監視します。 強制隔離率の向上は、多くの場合、送信者のレピュテーションに影響を与える前に注意が必要なデータ品質の問題を示します。

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

* [ワークフローの作成](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"}
* [ ワークフローアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/about-activities.html){target="_blank"}
* [ワークフローのベストプラクティス](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"}
* [ ワークフローのユースケース ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"}

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

* [インポートのベストプラクティス](../start/import.md)
* [ データ読み込みアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"}
* [ 繰り返し読み込みワークフロー ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/recurring-import-workflow.html?lang=ja){target="_blank"}

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

* [ワークフロー実行の監視](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}
* [ワークフローのベストプラクティス](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"}
* [ワークフローの開始](https://experienceleague.adobe.com/docs/campaign/automation/workflows/executing-a-workflow/start-a-workflow.html?lang=ja){target="_blank"}

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

* [ データを更新アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/update-data.html?lang=ja){target="_blank"}
* [ データ管理アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/about-action-activities.html){target="_blank"}

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

* [ データ管理アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/about-targeting-activities.html){target="_blank"}
* [ ターゲティングワークフロー ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/wf-type/targeting-workflows.html?lang=ja){target="_blank"}
* [エンリッチメントアクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/enrichment.html?lang=ja){target="_blank"}

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

* [Personalization ガイド](../send/personalize.md)
* [ ワークフローのユースケース ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/send-a-birthday-email.html?lang=ja){target="_blank"}
* [エンリッチメントアクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/enrichment.html?lang=ja){target="_blank"}

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

* [ 分割アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/split.html?lang=ja){target="_blank"}
* [A/B テストガイド ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/a-b-testing.html){target="_blank"}

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

* [データインポートガイド](../start/import.md)
* [ データ読み込みアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"}
* [ データを更新アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/update-data.html?lang=ja){target="_blank"}

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

* [クエリアクティビティ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"}
* [集計の使用](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/using-aggregates.html?lang=ja){target="_blank"}
* [ ようこそプログラム ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/send-a-birthday-email.html?lang=ja){target="_blank"}

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

* [ ターゲティングアクティビティのリファレンス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/targeting-activities.html?lang=ja){target="_blank"}
* [ フロー制御アクティビティリファレンス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/flow-control-activities/flow-control-activities.html?lang=ja){target="_blank"}
* [ アクションアクティビティのリファレンス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/action-activities.html?lang=ja){target="_blank"}
* [ イベントアクティビティのリファレンス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/event-activities/event-activities.html?lang=ja){target="_blank"}

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

* [ ワークフローのベストプラクティスガイド ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"}
* [ワークフローの作成](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"}
* [ワークフローの監視](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

+++

## キャンペーン設定 {#settings}

適切な設定、統合および設定を使用して Campaign インスタンスを設定し、マーケティング運用を最適化します。

+++ Campaign インターフェイスの言語を変更できますか？ 

Campaign の言語はインスタンスを作成するときに選択します。後から変更することはできません。詳しくは、[この節](../start/connect.md)を参照してください。

Adobe Campaignのユーザーインターフェイスは、英語、フランス語、ドイツ語、日本語など、複数の言語で使用できます。 クライアントコンソールとサーバーは同一言語で設定する必要があるのでご注意ください。Campaign インスタンスはそれぞれ、1 つの言語でしか実行できません。

英語であれば、Campaign をインストールする際に米国英語か英国英語を選べます（それぞれ日時のフォーマットが異なります）。

+++

+++ Campaign v8 を他のAdobe ソリューションと一緒に使用できますか？

Adobe Campaign の配信機能と高度なキャンペーン管理機能を、一連のソリューションと組み合わせることで、顧客エクスペリエンスをパーソナライズできます。

[ 他のAdobe ソリューションとの連携方法 ](../connect/integration.md) および [Campaign で IMS を設定する方法 ](../start/connect.md) について説明します。

+++

+++ トラッキング機能を Campaign インスタンスに設定するにはどうすればよいですか？ 

経験豊富なユーザーは、Campaign インスタンスでトラッキング機能を設定できます。

[詳細情報](../start/tracking.md)。

+++

+++ メール配信品質の設定方法は？ 

[Adobe配信品質のベストプラクティスガイド ](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"} に加えて、配信品質の技術的な推奨事項を確認し、Campaign の配信機能を最大化するためにインスタンスを設定する方法を理解します。

[詳細情報](../send/about-deliverability.md)。

+++

+++ コンテンツの承認を実行するにはどうすればよいですか？

Campaign では、マーケティングキャンペーンのメインステップの承認プロセスを協調モードで設定できます。キャンペーンごとに、配信ターゲット、コンテンツ、およびコストを承認できます。Adobe Campaign を操作する承認者は、メールで通知を受け、コンソールまたは web 接続で承認を許可または却下できます。

[ 詳細情報 ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-approval.html?lang=ja){target="_blank"} と Campaign で配信コンテンツの承認を実装する手順について説明します。

+++

+++ 外部データベースに保存されているデータにアクセスするにはどうすればよいですか？

Adobe Campaign では、Federated Data Access（FDA）オプションを利用することができます。このオプションを使用すると、1 つ以上の外部データベースに格納されている情報を処理することが可能です。Adobe Campaign データの構造を変更しなくても、外部データにアクセスできます。

[詳細情報](../connect/fda.md)。

+++

+++ Campaign を接続できる外部データベースはどれですか？ 

Federated Data Access（FDA）を使用して Campaign との互換性を確保できる外部データベースの一覧については、[互換性マトリックス](compatibility-matrix.md)を参照してください。

+++

+++ Adobe Campaignを CRM システムと統合できますか？

Adobe Campaign では、Adobe Campaign プラットフォームをサードパーティのシステムにリンクするための様々な CRM コネクタが提供されています。これらの CRM コネクタにより、連絡先、アカウント、購入などを同期したり、アプリケーションを様々なサードパーティおよびビジネスアプリケーションと簡単に統合したりすることができます。

これらのコネクタを使用すると、データを迅速かつ容易に統合できます。Adobe Campaign には、CRM にあるテーブルを集めて選択する、専用のサポート機能が備わっています。これにより双方向の同期が確保され、システム全体でデータを常に最新に保つことができます。

CRM ツールをAdobe Campaignと同期する方法については、[ 詳細情報 ](../connect/crm.md) を参照してください。

+++

+++ クライアントコンソールのキャッシュをクリアするにはどうすればよいですか？

新しいロゴが正しく反映されないなどの問題がある場合や、データの書き出しに関する問題がある場合は、クライアントコンソールのキャッシュをクリアする必要がある場合があります。

ログアウトして、クライアントコンソールを閉じます。 オペレーティングシステムに応じて次の場所に移動します。

* Windows: `C:\Users\<Username>\AppData\Roaming\Neolane\NL_5\`
* Mac: `~/Library/Application Support/Neolane/NL_5/`

XML 設定ファイル（`nlclient_cnx.xml` を保持）を削除し、クライアントコンソールにログインし直します。

+++

+++ ユーザーインターフェイスを設定できますか？

はい。管理者は、ユーザーに合わせて Campaign UI 設定をカスタマイズできます。 [詳細情報](../config/ui-settings.md)。

+++

+++ カスタムフィールドとカスタムテーブルを作成できますか？

はい。Campaign v8 では、カスタムフィールドとテーブルを使用してデータモデルを拡張できます。 詳細情報 [ スキーマの拡張 ](../dev/extend-schema.md)。

+++

## レポート {#reporting}

ビルトインレポート、カスタムレポート、キューブなどのデータ分析ツールなど、Campaign のレポート機能に関するインサイトを取得します。

+++ 新しいレポートを作成するにはどうすればよいですか？

Adobe Campaign では、ビルトインレポートのほかにも、様々なコンテキストで様々なニーズに応えるレポートを生成できます。

Adobe Campaign は、レポート専用ツールではありません。Adobe Campaign で作成されたレポートでは主に集計データを確認できます。

Campaign のレポート機能について [ 詳細情報 ](../reporting/gs-reporting.md) します。

+++

+++ 母集団に関する統計レポートを設計して共有するにはどうすればよいですか？

Adobe Campaign[ 記述的分析レポート ](../reporting/built-in-reports.md) を使用すると、母集団に関する統計レポートを設計および共有できます。

[詳細情報](../reporting/built-in-reports.md)。

+++

+++ データに関する高度なレポートを設計するにはどうすればよいですか？

Campaign v8 では、[ 詳細レポートの作成 ](../reporting/custom-reports.md) を行うことができます。 エキスパートユーザーは、データに関するカスタムレポートを作成、更新、配布できるようになります。

また、Campaign web ユーザーインターフェイスを使用して、レポートとダッシュボードを作成することもできます。 [詳細情報](https://experienceleague.adobe.com/en/docs/campaign-web/v8/reports/gs-reports){target="_blank"}。

+++

+++ キューブとは何ですか？ また、そのようなレポートを作成するにはどうすればよいですか？

データベースの調査および分析機能を拡張できると同時に、最終ユーザーがレポートやテーブルを設定しやすくなります。計算、測定および統計を処理するレポートやテーブルを作成する際に、既存の（完全に設定された）キューブを選択するだけです。

キューブが作成および設定されると、レポートのクエリボックスや Web アプリケーションで使用されます。キューブをピボットテーブル内で使用して操作できます。

キューブを使用した[データの参照](../reporting/gs-cubes.md)方法を参照してください。

+++

+++ オンライン調査に対する回答からレポートを作成できますか？

Campaign v8 には、ビルトインの調査機能はありません。 調査を作成するには、Adobe Experience Managerまたはその他の web ソリューションを使用できます。

ただし、レポート機能を使用して、収集されたデータを分析し、カスタムレポートを作成することはできます。

+++

+++ Campaign インターフェイスでレポートへのアクセスを共有するにはどうすればよいですか？

Adobe Campaign UI でレポートが表示されるコンテキストを定義できます。レポートへのアクセスについて詳しくは、[この節](../reporting/custom-reports.md)を参照してください。

+++

+++ レポートを様々な形式で書き出すことはできますか？

はい。Excel、PDF、CSV など、様々な形式で Campaign レポートをエクスポートできます。 [詳細情報](../reporting/custom-reports.md)。

+++

## デベロッパー {#developers}

データモデルの詳細、スキーマ、API、カスタマイズ機能など、開発者向けの技術情報にアクセスできます。

+++ Campaign データモデルとは何ですか？

Adobe Campaign データベースの概念データモデルは、一連のビルトインテーブルとそのインタラクションで構成されます。アプリケーションに格納されるデータの物理的および論理的構造は、XML で記述されます。スキーマと呼ばれるAdobe Campaign特有の文法に従います。

[Campaign データモデルの詳細情報](../dev/datamodel.md)。

[ このページには、ベストプラクティスが一覧表示されています ](../dev/datamodel-best-practices.md)。

+++

+++ Campaign スキーマの操作方法は？

Adobe Campaign では、以下のためにデータスキーマが使用されます。

* アプリケーション内のデータオブジェクトが基盤となるデータベーステーブルにどのように関連付けられるかの定義
* Campaign アプリケーション内での異なるデータオブジェクト間リンクの定義
* 各オブジェクトに含まれている個々のフィールドの定義と記述

[ テーブルとスキーマの基本を学ぶ ](../dev/schemas.md) データスキーマの操作方法を理解し、Campaign を拡張およびカスタマイズしてニーズに対応します。

+++

+++ カスタム受信者テーブルの使用方法は？

Campaign でビルトイン以外の受信者テーブルを作成および実装してメッセージを送信することができます。

[詳細情報](../dev/custom-recipient.md)

+++

+++ Campaign でクエリを定義するためのベストプラクティスは？

Adobe Campaign クエリエディターは、データの調査やセグメントの作成をおこなうための強力なツールです。

Adobe Campaign のクエリツールは、ターゲット母集団の作成、顧客のセグメント化、トラッキングログの抽出とフィルター、フィルターの作成などのために、ソフトウェアの複数のレベルで使用できます。

汎用クエリエディターを使用して Campaign データベースに対するクエリを実行できます。汎用クエリエディターにアクセスするには、**ツール／汎用クエリエディター...** メニューを使用します。汎用クエリエディターでは、データベースに格納されている情報を抽出し、構成、グループ化、並べ替えなどをおこなうことができます。例えば、ユーザーは、特定の期間にニュースレター内のリンクを「n」回以上クリックした受信者を収集することができます。このツールでは、ニーズに応じて結果を収集、並べ替えおよび表示できます。

[詳細情報](../start/query-editor.md)。[Campaign 自動化ガイド ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"} も参照してください。

+++

+++ データパッケージをインポートするにはどうすればよいですか？

Adobe Campaign では、パッケージシステムを通じて、プラットフォーム設定とデータをエクスポートまたはインポートできます。データパッケージを使用すると、XML 形式のファイル経由で Adobe Campaign データベース内のエンティティを表示できます。パッケージに含まれる 1 つのエンティティは、それに該当するすべてのデータによって表現されます。

データパッケージの原則とは、データの設定をエクスポートして別の Adobe Campaign システム内に組み込むことです。

データパッケージを使用して Campaign 設定をインポートおよびエクスポートする方法について [ 詳細情報 ](../dev/packages.md) します。

+++

+++ Campaign v8 API のリストはどこで参照できますか？

すべての Campaign API とその詳細な説明については、この[専用ドキュメント](https://experienceleague.adobe.com/developer/campaign-api/api/index.html?lang=ja){target="_blank"}を参照してください。

+++

+++ Campaign REST API とは

Campaign v8 は、Adobe Campaignと使用するテクノロジーパネルをインターフェイスで接続することにより、Adobe Campaignとの統合を作成し、独自のエコシステムを構築できる、一連の REST API を公開します。

[詳細情報](../dev/api/get-started-apis.md)。

+++

+++ API からワークフローを監視するにはどうすればよいですか？

Campaign API を使用してワークフローを監視する方法については、[ この専用ページ ](../dev/api/controlling-a-workflow.md) を参照してください。

+++

+++ データベース構造を更新するにはどうすればよいですか？

Campaign データスキーマを変更する場合は、データベース構造を更新する必要があります。 詳しくは、[この節](../dev/update-database-structure.md)を参照してください。

+++

+++ Campaign v8 の制限事項

Campaign v8 には、Campaign Classic v7 と比較していくつかの制限があります。詳しくは、[ このページ ](../start/v7-to-v8.md#limitations) を参照してください。

+++

## プライバシー {#privacy}

GDPR や CCPA などのプライバシー規制の遵守や、データ主体からのリクエストの管理にAdobe Campaignがどのように役立つかを説明します。

+++ プライバシーに関するキーワードを教えてください。

以下のリンクでは、Adobe Campaign のプライバシーと同意に関する主要な用語や概念について説明しています。

* [プライバシー管理に関する規制](../start/privacy.md#privacy-regulations)
* [個人データとペルソナ](../start/privacy.md#personal-data)
* [アクセスする権限と忘れられる権利](../start/privacy.md#right-access-forgotten)
* [同意、保持、役割](../start/privacy.md#consent-retention-roles)

+++

+++ 最新のプライバシー規制に準拠するために Adobe Campaign ではどのような提案をおこなっていますか。

アドビでは、法律に関するアドバイスを行っていません。GDPR、CCPA、PDPA、LGPD、その他の適用される規制への対応に関して、必要なすべての手順を実行するように、自社の法務担当者と協力する必要があります。

**データのアクセス要求および削除要求に対する準備**

* プライバシー担当者の指定など、データ主体からの要求の受理や対応をおこなうためのプロセスを明確にしてください。

* Adobe Campaign に保存されている各種の顧客データを確認し、それぞれに一意の識別情報を設定してください（通常は複数あります）。

* データ主体の ID に関する検証や認証のポリシーおよびプロセスを決定してください。

* データ主体への回答は、必ずわかりやすい内容にしてください。

**同意についての考慮事項**

* GDPR に関連するデータ取得がおこなわれるすべてのタッチポイントの一覧を作成し、必要に応じて更新してください（例えば、言語、同意の方式、同意の記録などがあげられます）。

* すべてのマーケティング用メールに登録解除用のリンクが記載されていることを確認してください。

* メールマーケティングのグローバル戦略を評価し、地域ごとの実装方法を決定してください。

**データの取り扱いについて**

* Adobe Campaign に取り込まれるすべてのデータのインポート元や取得元を確認し、マーケティング対策にどのフィールドが使用されているかを記録してください。

* Adobe Campaign データベースから、使用されていないデータ属性をすべて削除してください。

* Adobe Campaign から取得可能なデータは、入手した目的に対して使用し、受信者に対して高度にパーソナライズされたエクスペリエンスを提供するために使用してください。

* データアクセス権を確認および更新して、Adobe Campaign のユーザーが自分のキャンペーンに必要なデータのみ利用でき、それ以外のデータは利用できないようにしてください。

* Adobe Campaign の各ユーザーについて、要求されるタスクの実行に必要なアクセス権限が設定され、それ以外のタスクをおこなう権限が設定されていないことを確認してください。

+++

+++ データ管理者がユーザーエンゲージメントへの影響を最小限に抑えながら同意を得るにはどうすればよいですか。

特定のマーケティング活動で同意が必要となる場合は、その同意が、消費者の意図を反映したものであり（意思を示さないことを同意としない、チェックボックスがあらかじめオンになっていない、など）、抱き合わせではなく、またサービス提供の条件となっていてはいけません。

また、データを継続利用するにあたって特定の同意を更新することが必要となる場合もあります。

マーケターは、これらの強化された同意要件を、ブランドエンゲージメントとロイヤルティおよび顧客満足度と信頼の真の指標として採用する必要があります。


+++

+++ データ管理者は Adobe Campaign で同意をどのように管理しますか。

Adobe Campaign には既に同意管理機能があり、カスタマイズされたデータフィールドや各種サービスを利用した場合よりも詳細に同意を管理できます。

各自社内の法務担当者に業務の進め方を確認の上、Adobe Campaign のビルトインの機能を活用してください。

例えば、Adobe Campaign のデータモデルを拡張することにより、ユーザーがオプトインしたかどうかを追跡するだけでなく、オプトインのタイムスタンプや、同意の正確な範囲を把握するための特定の指標を追跡することもできます。

+++

+++ データ管理者は自社の顧客（データ主体）の要求に応じて Adobe Campaign のどのデータを削除できますか。

標準テーブルやカスタムテーブルも含め、データ主体に関連するすべてのデータが削除されます。

技術的には、`integrity="own"` でデータ主体にリンクされているすべてのデータが削除されます。

データ管理者は、データスキーマで定義されているリンクの整合性を変更することにより、これをカスタマイズできます（例えば、業務上正当な理由から特定のデータを削除しないようにする場合）。

+++

+++ 配信ログとトラッキングログを削除した場合、レポートにはどのような影響がありますか。

Adobe Campaign のレポートは、配信ログとトラッキングログを集計したデータから計算された指標に基づいています。このため、個々のログを削除しても、レポートに表示される測定値には影響はありません。

+++

+++ 後日にデータを再インポートする必要性を考慮する必要はありますか？

Adobe Campaignでは、多くの場合、レコードは外部データソースからアップロードされます。

データ管理者は、削除要求を受け取ったら、当該データ主体に関する必要なすべてのデータをすべてのシステムから確実に削除する必要があります。

+++

+++ Adobe Campaign からデータが消去されたデータ主体が、後で再度オプトインすることはできますか。

データ主体のデータが Adobe Campaign から消去された後に、データ主体が再度オプトインしたり、データ主体を新しい受信者として追加したりすることは可能です。

監査記録を使用すると、前回の削除が実行された日時や、新しい受信者が作成された日時の詳細を確認できます。

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
* **[ベストプラクティス](delivery-best-practices.md)** – 一般的なタスクに推奨されるアプローチ

### テクニカルリソース

詳細な技術ドキュメントや開発者向けリソースをご覧ください。

* **[Campaign API](https://experienceleague.adobe.com/developer/campaign-api/api/index.html?lang=ja){target="_blank"}** – 完全な API リファレンスドキュメント
* **[Campaign GitHub](https://github.com/AdobeDocs/campaign.ja)** - ドキュメントへの投稿
* **[テクニカルノート ](https://experienceleague.adobe.com/ja/docs/campaign/technotes-ac/technotes-home){target="_blank"}** - テクニカル記事の詳細
* **[互換性マトリックス](compatibility-matrix.md)** - サポートされるシステムとバージョン

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

