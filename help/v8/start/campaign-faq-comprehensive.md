---
title: Campaign v8 に関するよくある質問
description: 設定、設定、メッセージ、ワークフローなどに関するAdobe Campaign v8の一般的な質問に対する回答を提供します
feature: Overview
role: User
level: Beginner
keywords: FAQ、Campaign v8、質問、回答、ヘルプ、サポート、トラブルシューティング
version: Campaign v8
exl-id: 8b4f6343-5dc5-4401-ad6f-9c1ddbb23168
source-git-commit: da2274cfd19bb067fcc1e990360093f161d5638a
workflow-type: tm+mt
source-wordcount: '11689'
ht-degree: 17%

---

# よくある質問 {#faq}

Adobe Campaign v8に関するよくある質問に簡単に回答します。 まだ始めたばかりでも、高度な設定のヘルプをお探しでも、以下のトピック別に回答が整理されています。

**Campaignを初めて使用する場合** 基本を学ぶには、[はじめに](#getting-started)から始めます。\
**バージョンに関するサポートが必要ですか？** バージョン情報とアップグレードプロセスについては、[Upgrades](#upgrades)を確認してください。\
**v7またはStandardから移行しますか？** 相違点と移行ガイダンスについては、[Campaign v8と以前のバージョン ](#v7-differences)を参照してください。\
**技術的なサポートが必要ですか？** [開発者](#developers)および[ キャンペーン設定](#settings)を確認してください。\
**回答が見つかりませんか？** [ コミュニティフォーラム ](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"}または[ サポートへのお問い合わせ](#get-help)をご覧ください。

**ヒント：** Ctrl+F （Macの場合はCmd+F）を使用して、このページの特定のキーワードを検索します。 任意の質問をクリックすると、回答が展開されます。


## はじめに {#getting-started}

インストールや接続から最初のキャンペーンの作成まで、Adobe Campaign v8の操作を開始するための基本を説明します。

+++ Adobe Campaign v8とは何ですか？

Adobe Campaign v8は、メール、モバイル、ソーシャル、オフラインチャネルをまたいでパーソナライズされたキャンペーンを作成、調整、配信するのに役立つ、強力なクロスチャネルマーケティングオートメーションプラットフォームです。 堅牢なマーケティングデータベース、キャンペーンオーケストレーションエンジン、リアルタイムのインタラクション機能を組み合わせて、ジャーニー全体を通じて顧客を惹きつけることができます。

**主な機能：** マルチチャネルのキャンペーン管理、オーディエンスのセグメンテーションとターゲティング、ワークフローの自動化、大規模なパーソナライゼーション、リアルタイムおよびバッチメッセージ、レポートと分析、Adobe Experience Cloudとの統合。

**v8の特徴：** クラウドネイティブ アーキテクチャ （Managed Cloud Servicesのみ）、Snowflake データベースを活用したエンタープライズ規模のパフォーマンス、自動アップグレード、セキュリティ強化、Adobe Experience Platformとの双方向統合。

**複数のチャネルと顧客接点をまたいで、複雑で大規模なキャンペーンを管理する**&#x200B;のエンタープライズマーケティングチームに最適です。

**関連トピック：**

[Campaign v8製品の説明](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target="_blank"} | [v8](whats-new.md)の新機能| [開始ガイド ](get-started.md)

+++

+++ Campaignをダウンロードするにはどうすればよいですか？

インストールプログラムとクライアントコンソールは、Adobe ダウンロードセンターから入手できます。

管理者ユーザーとして、Adobe [ ソフトウェア配布](https://experience.adobe.com/#/downloads/content/software-distribution/jp/campaign.html){target="_blank"}にアクセスしてAdobe Campaignをダウンロードします。

配布センター[について詳しくは、このページ ](https://experienceleague.adobe.com/docs/experience-cloud/software-distribution/home.html?lang=ja){target="_blank"}を参照してください。

+++

+++ Campaign v8 に接続するにはどうすればよいですか？

Adobe Campaign に接続するには、Campaign クライアントコンソールをダウンロードしてインストールする必要があります。 [詳細情報](connect.md)。

Campaign v8.6 リリース以降では、中央のAdobe Experience Cloud環境から利用可能な&#x200B;**Campaign Web ユーザーインターフェイス**&#x200B;にアクセスできます。 Experience Cloud は、アドビのデジタルマーケティングアプリケーション、製品、サービスの統合ファミリーです。

Adobe Experience Cloud に接続し、Adobe Campaign web インターフェイスにアクセスする方法については、[このページ](campaign-ui.md#ac-web-ui)を参照してください。 詳しくは、[Adobe Campaign web ユーザーインターフェイスドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}を参照してください。


**関連トピック：**

[ クライアントコンソールのインストール ](connect.md) | [Campaign ユーザーインターフェイス ](campaign-ui.md) | [ ユーザー権限](gs-permissions.md)

+++

+++ Adobe IDを使用してCampaign v8に接続できますか？

はい！ IMS （Adobe Identity Management System）との統合により、Adobe IDを使用してAdobe Campaign コンソールに接続できます。 統合には次のメリットがあります。

* Experience Cloud のすべてのソリューションに同じ ID を使用できます。
* Adobe Campaign で異なる統合を使用する場合にも、接続が記憶されます。
* パスワード管理ポリシーをよりセキュアにできます。
* Federated ID アカウント（外部の ID プロバイダー）を使用します。

Adobe IDを使用したCampaign v8へのアクセスについて[詳細](connect.md)を確認します。

+++

+++ Campaign ユーザーインターフェイスについて知っておくべき概念は何ですか？

Adobe Campaign ユーザーインターフェイスの基本について詳しくは、[この節](campaign-ui.md)を参照してください。

Campaign v8.6 リリース以降では、中央のAdobe Experience Cloudから新しい&#x200B;**Campaign Web ユーザーインターフェイス**&#x200B;にアクセスすることもできます。

[詳しくは、Adobe Campaign Web ユーザーインターフェイスのドキュメント ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}を参照してください。

+++

+++ ユーザー権限を設定するにはどうすればよいですか？

Campaign 管理者は、組織のユーザーに対して権限を設定できます。

以下は、各種の権限や制限によって承認または拒否できる操作です。

* 特定の機能へのアクセス
* 特定のデータへのアクセス
* データの作成、変更、削除

**関連トピック：**

[権限の概要](gs-permissions.md) | [ ユーザー権限の管理](manage-permissions.md) | [ フォルダーに対する権限の追加](folder-permissions.md)

+++

+++ メッセージのオーディエンスを選択するにはどうすればよいですか？

Adobe Campaignでは、メッセージに適したオーディエンスを選択するための複数のターゲティング方法が用意されています。

**ターゲティング方法：**

* **クエリエディター** – 受信者の属性、行動、デモグラフィックに関するビジュアルフィルターを使用してオーディエンスを構築します
* **Lists** – 定義済みの静的または動的な受信者リストを使用
* **ファイルの読み込み** - 1回限りのキャンペーン用の外部受信者ファイルのアップロード
* **ワークフロー** - クエリ、分割、およびエンリッチメントアクティビティを使用して、複雑なターゲティングロジックを作成します
* **定義済みフィルター** – すぐに使用できるフィルターを適用（アクティブな顧客、サブスクライバー、VIP）
* **Adobe Experience Platformのセグメント** – 統合プロファイルとリアルタイムセグメントを活用

複数の基準（場所、購入履歴、エンゲージメント）を組み合わせて、除外条件、積集合、和集合を使用して、オーディエンスを絞り込むことができます。

**関連トピック：**

[Campaign v8](../audiences/gs-audiences.md)でオーディエンスを定義| [ クエリエディター](query-editor.md) | [ ターゲットマッピング ](../audiences/target-mappings.md)

+++

+++ 最初のメールを作成し送信するにはどうすればよいですか？

Campaign v8での最初のメール作成は簡単です。 テンプレートから始め、ターゲットオーディエンスを選択し、パーソナライゼーションを活用してコンテンツをデザインし、それをプルーフでテストしてから送信します。 Campaignでは、電子メール作成用の2つのインターフェイスを提供しています。高度なユーザー向けのフル機能の&#x200B;**クライアントコンソール**&#x200B;と、より迅速で直感的な電子メール作成を実現する最新の&#x200B;**Campaign Web UI**&#x200B;です。

**5つの主要ステップ：**

1. **配信を作成** - メールテンプレートから開始するか、ゼロから作成します
2. **オーディエンスの定義** - クエリ、リスト、またはワークフローを使用して受信者を選択します
3. **コンテンツをデザイン** - メールデザイナーを使用して、パーソナライゼーションフィールドでメッセージを作成します
4. **テストプルーフを送信** - デバイスと電子メールクライアントをまたいでレンダリングとコンテンツを検証します
5. **分析して送信** – 配信分析を実行してエラーを確認し、電子メールを送信します

**関連トピック：**

[電子メールのデザインと検証](../send/email.md) | [最初の配信を作成](create-message.md) | [配信テンプレート ](../send/create-templates.md) | [ コンテンツのパーソナライズ ](../send/personalize.md)

+++

+++ エラーメッセージを翻訳するにはどうすればよいですか？

エラーメッセージが外国語で表示されましたか？ すべてのエラーメッセージとその翻訳のリストは、[このページ](https://experienceleague.adobe.com/developer/campaign-errors/error_codes.html?lang=ja){target="_blank"}に掲載されています。

+++

+++ 問題をログに記録するにはどうすればよいですか？

Adobe カスタマーサポートに連絡するには、[Adobe Admin Console](https://adminconsole.adobe.com/overview){target="_blank"}に接続してケースを作成するか、チャットセッションを開始します。

正しい権限を持つ個々のアカウントが必要です。 ログインできない場合は、Experience League経由でアクセスをリクエストしてください。 [詳細情報](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html){target="_blank"}

または、[Campaign コミュニティ ](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"}に参加して、回答を検索したり、専門家に質問したりすることもできます。

+++

+++ Campaign v8 と互換性があるシステムやコンポーネントはどれですか？

[Adobe Campaign 互換性マトリックス](compatibility-matrix.md)で、Campaign の最新ビルドでサポートされているすべてのシステムとコンポーネントのリストを入手できます。

+++

+++ Campaign v8を他のAdobe ソリューションと一緒に使用できますか？

はい。 Campaign v8は、Adobe Experience Cloud ソリューションとシームレスに統合され、統一されたマーケティングエコシステムを実現します。

**主要な統合機能：** Adobe Experience Platform（統合プロファイル、リアルタイムデータ）、Adobe Analytics（performance measurement）、Adobe Target（パーソナライゼーション）、Adobe Experience Manager（content management）、Adobe Audience Manager（オーディエンスセグメント）。

**セットアップ：**&#x200B;にはAdobe IMS認証が必要で、Campaign v8 Managed Cloud Services用に自動的に設定されます。

**関連トピック：**

[Adobe Campaignとの連携](../connect/integration.md) | [Adobe IDとの連携](connect.md)

+++

+++ Campaign v8にはどのような制限がありますか？

Campaign v8では、パフォーマンスが大幅に向上しますが、特にFFDA デプロイメントでは、Campaign Classic v7とのアーキテクチャ上の違いがあります。

**重要な考慮事項：**

* **FFDA アーキテクチャ** – 異なるデータ アクセス パターンでクラウド データベース （Snowflake）を使用します
* **データ更新** – 直接データベースアクセスではなく、ワークフローで実行する必要があります
* **バッチ最適化** – 高頻度の個別アップデートではなく、バッチ操作に最適化
* **FFDAでは利用できません** – 調査、マーケティングリソース管理（MRM）、一部の特定のコネクタ

**移行の影響：** ダイレクトデータベース書き込みを使用するカスタムコードにはリファクタリングが必要です。API統合では、バッチ処理に適応が必要になる場合があります。

これらの制限は、Adobeがv8を強化するにつれて進化しています。 現在の状況については、最新のドキュメントを参照してください。

**関連トピック：**

[Campaign v7からv8への移行](../start/v7-to-v8.md#limitations) | [FFDA アーキテクチャ ](../architecture/enterprise-deployment.md)

+++

+++ Campaign Classic v7 ユーザーとして、Campaign v8に移行できますか？

既存の Campaign Classic v7 環境からの自動移行はまだ利用できません。

Campaign v8 は、現在 Managed Cloud Service として&#x200B;**のみ**&#x200B;利用できます。オンプレミス環境またはハイブリッド環境にデプロイすることはできません。

移行プロセスについて詳しくは、アドビ担当者にお問い合わせください。

詳しくは、[Campaign v8と以前のバージョン ](#v7-differences)の節を参照してください。

+++


## アップグレード回数 {#upgrades}

Campaign バージョンを確認し、アップグレードプロセスを理解し、新しいリリースについて情報を得る方法について説明します。 Campaign v8 Managed Cloud Servicesは、中断を最小限に抑えながらアップグレードを自動的に処理します。

+++ 使用している Campaign のバージョンを確認する方法はありますか？

Campaign クライアントコンソールの&#x200B;**ヘルプ／バージョン情報**&#x200B;メニューで、お使いの[バージョンおよびビルド番号](upgrades.md#version)を確認できます。

+++

+++ Campaign を最新版にアップグレードするにはどうすればよいですか？

Adobe Campaign は定期的に更新されています。 マイナーバージョンは、新機能、改善および修正が加えられ、毎年リリースされています。 さらに、累積的な修正のみを含むビルドを定期的にリリースしています。

この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。 だからこそ、最新バージョンの Adobe Campaign を実行することが重要であると考えているのです。

**注：** Managed Cloud Services ユーザーとして、インスタンスは新しいリリースでAdobeによってアップグレードされます。

[ キャンペーンのバージョンとアップグレード ](upgrades.md)の詳細を確認します。

+++

+++ 新しいバージョンのリリースの通知の受信方法

次のチャネルを通じて、Campaignの新しいリリースに関する情報を入手できます。

* **Adobe担当者** – 新しいバージョンが利用可能になったときに直接連絡します
* **リリースノート** - [Campaign リリースノート ](release-notes.md)に記載されているすべてのバージョンと変更点
* **Adobe優先度製品の更新** - [ メール通知の購読](https://www.adobe.com/jp/subscription/priority-product-update.html){target="_blank"}
* **キャンペーンコミュニティ** – 早期更新のために[ ディスカッション ](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"}に参加

Managed Cloud Services ユーザーとして、Adobeはアップグレードを処理し、タイミングを調整します。

**関連トピック：**

[ リリースノート ](release-notes.md) | [新機能](whats-new.md) | [ キャンペーンのバージョンとアップグレード ](upgrades.md)

+++

+++ 組織がアップグレードを必要とする理由

最新のCampaign バージョンにアップグレードすることは、セキュリティ、パフォーマンス、サポート品質にとって重要です。

**主なメリット：**

* **セキュリティの向上** – 脆弱性、最新パッチ、強化されたデータ保護に対する保護
* **より優れたサポート** – 問題解決の高速化、バグ修正へのアクセス、最近のバージョンの優先サポート
* **パフォーマンスの向上** - データベースとワークフローの最適化、より優れた拡張性、より信頼性の高い操作
* **新機能** – 最新機能、Adobe Experience Cloud統合の改善、最新のUIの機能強化

Adobeでは、最新バージョンを実行することを強くお勧めします。 Managed Cloud Servicesをご利用のお客様は、Adobeによってアップグレードが最小限の混乱で実行されます。

**関連トピック：**

[ キャンペーンのバージョンとアップグレード ](upgrades.md) | [新機能](whats-new.md) | [互換性マトリックス ](compatibility-matrix.md)

+++

+++ アップグレードのプロセスとタイムライン

Managed Cloud Servicesをご利用のお客様は、Adobeでアップグレードプロセス全体を管理し、運用への影響を最小限に抑えることができます。

**プロセス：**

1. **通知** - Adobeは数週間前に通知します
2. **計画** - Adobe担当者との最適なタイミングでのアップグレードのスケジュール
3. **準備** - Adobeが環境を準備し、検証します
4. **実行** - Adobeは、最小限のダウンタイムでインフラストラクチャをアップグレードします
5. **検証** - Adobeによるアップグレード後のテスト
6. **クライアントコンソールのアップグレード** - クライアントコンソールをサーバーバージョンに合わせてアップグレードします

**あなたの責任：**

* 社内の関係者とタイミングを調整する
* [ クライアントコンソール ](connect.md#upgrade-ac-console)を新しいバージョンにアップグレードする
* アップグレード後にキャンペーンとワークフローをテストする
* Adobe サポートに問題を報告する

Adobeは、インフラストラクチャのアップグレードを実行します。 サーバーに対して技術的な操作を実行する必要はありません。

**関連トピック：**

[ キャンペーンのバージョンとアップグレード ](upgrades.md) | [ クライアントコンソールのアップグレード ](connect.md#upgrade-ac-console) | [ リリースノート ](release-notes.md)

+++


## Campaign v8と以前のバージョン {#v7-differences}

アーキテクチャ、デプロイメント、移行パス、機能の変更など、Campaign v8と以前のバージョン（Classic v7およびStandard）の主な違いについて説明します。 Campaign Classic v7またはCampaign Standardのいずれからでも、新機能とスムーズに移行する方法について説明します。


+++ Campaign v8と以前のバージョンの主な違いは何ですか？

Campaign v8は、モダンなクラウドネイティブアーキテクチャ上に構築されており、大幅に改善されています。

* **Managed Cloud Servicesのみ** - Adobeによって完全にホストされます（オンプレミス/ハイブリッドオプションはありません）
* **優れたパフォーマンス** – 最大2,000万回/時間、完全なフェデレーテッド データ アクセス （FFDA） アーキテクチャ
* **新しいCampaign Web UI** - クラシック コンソールと並んだモダンで直感的なインターフェイス
* **自動アップグレード** – ダウンタイムがゼロの最新バージョンを常に使用
* **強化機能** - AI アシスタント、リッチ プッシュ通知、アップグレードされたSMS、Adobe Experience Cloudとの統合機能の向上

**Campaign Classic v7 ユーザーの場合：** アーキテクチャの変更、使用できない機能、移行に関する考慮事項など、[v7からv8](v7-to-v8.md)への移行について説明します。

**Campaign Standard ユーザーの場合：** [v8](acs-to-v8.md)への移行パスと[Campaign Standard移行ガイド ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}をご覧ください。

**関連トピック：**

[Campaign v8の主な機能](whats-new.md) | [Campaign v8 アーキテクチャ ](../architecture/architecture.md) | [機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"} | [ ガードレールと制限](ac-guardrails.md)

+++

+++ Campaign Classic v7またはCampaign Standardからv8に移行する必要がありますか？

Campaign v8は、Adobeのプラットフォームで、大規模なキャンペーン（2,000万回/時間）、最新のweb UI、クラウドネイティブのメリット、長期的なサポートを必要とする企業に最適です。

**主なメリット：**

* **Campaign Standard ユーザー向け** – 使い慣れたWeb UI、機能パリティ （Dynamic Reporting、REST API、ランディングページ）、スムーズなデータ移行
* **Campaign Classic v7 ユーザー向け** - デュアルインターフェイス （コンソール + Web UI）、パフォーマンスの向上、自動アップグレード、拡張FFDA アーキテクチャ

**次の場合は移行を検討してください：**

* 大量のデータを処理しているか、パフォーマンスに問題が発生している
* ITのオーバーヘッドとインフラストラクチャの管理を減らしたい
* Adobe Experience CloudとAdobe Experience Platformの連携が必要
* 自動更新機能を備えた今後の配達確認テクノロジーが必要

**次の手順：**&#x200B;アドビ担当者に連絡して移行の準備状況を評価し、移行ツールにアクセスしてください。

**関連トピック：**

[Campaign Classic v7からv8](v7-to-v8.md)へ| [Campaign Standard移行ガイド ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"} | [機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"}

+++

+++ Campaign v8は、オンプレミス環境またはハイブリッド環境にインストールできますか？

いいえ。 Campaign v8は、Adobeによって完全にホストされる&#x200B;**Managed Cloud Service**&#x200B;としてのみ利用できます。

**Managed Cloud Servicesの主な利点：**

* 優れたパフォーマンスと拡張性
* 自動アップグレード – 常に最新バージョンを使用
* 継続的なモニタリングによるセキュリティの向上
* インフラ管理やITのオーバーヘッドが発生しない
* 組み込みの高可用性と災害復旧

[Campaign v8 アーキテクチャ ](../architecture/architecture.md)と、Campaign v8とClassic v7](../start/v7-to-v8.md)の[の違いについて詳しく説明します。

+++

+++ Campaign Classic v7 オンプレミスまたはハイブリッド環境をAdobe Managed Servicesに移行するにはどうすればよいですか？

Adobe Managed Servicesへの移行により、オンプレミス/ハイブリッド v7からクラウドへの戦略的な移行が可能になり、拡張性とセキュリティが向上し、ITのオーバーヘッドが削減されます。 多くの場合、これは Campaign v8 に移行する前の足がかりとなります。

**主なポイント：**

* 自動移行ツールは使用できません。手動での計画と実行が必要です
* Adobe Professional Services サポートを強くお勧めします
* メリットには、クラウドインフラストラクチャー、自動セキュリティパッチ、エキスパートによるサポート、v8 への簡単なパスが含まれます
* 移行には、デューデリジェンス、環境監査、データクリーンアップ、ステージ移行、実稼動環境へのカットオーバーが含まれます

**はじめに：**&#x200B;アドビ担当者に連絡して環境を評価し、Adobe Professional Services で詳細な移行プランを作成してください。

課題、ベストプラクティス、詳細な移行ロードマップなど、[Managed Servicesへの移行について詳しく説明します。](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic-blogs/migrate-your-adobe-campaign-v7-onprem-hybrid-environment-to/ba-p/681605){target="_blank"}

+++

+++ Campaign v8の主な用語と機能の違いは何ですか？

Campaign v8では、v7/Standardのほとんどの機能に機能強化が加えられますが、一部の用語と機能は異なります。 主な変更点の概要は次のとおりです。

**重要な用語の変更（Campaign Standard → v8）:**

* カスタムリソース → **スキーマ** | メッセージ → **配信** |製品ユーザー→ **オペレーター**
* セキュリティグループ → **オペレーターグループ** |組織単位→ **フォルダー権限**

**Campaign Web UIの更新：**

* 受信者→ **プロファイル** | シードアドレス → **テストプロファイル** |配信分析→ **配信準備**
* リスト → **オーディエンス** | メールプレビュー→ **コンテンツのシミュレーション**

**v8では利用できません：**

* オンプレミス/ハイブリッドデプロイメント（Managed Cloud Servicesのみ）
* 直接データベースアクセス（APIを使用）
* 手作業によるインフラ管理（Adobe管理）

**Campaign Standard ユーザー向けの新機能：**

* 動的レポート、一元化されたブランディング、REST API、ランディングページの改善、ビジュアルフラグメント

**関連トピック：**

[機能マトリックス ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"} | [v7からv8への移行ガイド ](v7-to-v8.md) | [Campaign Standardからv8への移行](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}

+++


## プロファイルとオーディエンス {#audiences}

プロファイルの管理、オーディエンスの作成、データの読み込み、キャンペーンの受信者のターゲティングに関する質問への回答を見つけます。

+++ 受信者を作成するにはどうすればよいですか？

個々のプロファイルのクライアントコンソールで受信者を手動で作成したり、ファイル（CSV/TXT）から一括追加のために読み込んだり、自己登録にweb フォームを使用したり、外部システムからAPI経由で統合したりできます。 繰り返しデータの読み込みにインポートワークフローを使用します。

**関連トピック：**

[ プロファイルを手動で作成](../audiences/create-profiles.md) | [ ファイルからプロファイルをインポート ](../audiences/import-profiles.md) | [Web フォームを使用してプロファイルを収集](../audiences/collect-profiles.md)

+++

+++ プロファイルをインポートするにはどうすればよいですか？

Adobe Campaignには、インポートウィザードを使用したシンプルなファイル読み込み、複雑な変換のためのワークフローベースの読み込み、SFTPからスケジュールされたワークフローを使用した定期的な読み込み、プログラマティック統合のためのAPI読み込みなど、複数の読み込み方法が用意されています。

ファイルの読み込みの場合は、データファイル（CSV/TXT、UTF-8 エンコーディング）を準備し、読み込みウィザードまたはワークフローを使用して、Campaign フィールドに列をマッピングし、ルールを更新/挿入し、最初に小さなサンプルを使用してテストします。 定期的なインポートにワークフローを使用し、重複排除ルールを適用します。

**関連トピック：**

[読み込みデータガイド ](../start/import.md) | [繰り返し読み込みワークフロー](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/recurring-import-workflow.html?lang=ja){target="_blank"} | [ データ読み込みアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"}

+++

+++ 配信用のテストプロファイルを作成するにはどうすればよいですか？

テストプロファイル（シードアドレス）を使用すると、定義されたターゲティング条件に一致しない受信者をターゲットにすることができ、メインのオーディエンスに送信する前に配信をテストすることができます。 配信プロパティの&#x200B;**[!UICONTROL シードアドレス]**&#x200B;経由で追加するか、**[!UICONTROL シードアドレス]** フォルダーを使用します。

[ テストプロファイル ](../audiences/test-profiles.md)の詳細をご覧ください。

+++

+++ マーケティングキャンペーンのターゲット母集団を定義するにはどうすればよいですか？

Adobe Campaignでは、視覚的な条件を使用してクエリを作成したり、既存のリストやセグメントをターゲットにしたり、外部ファイル（CSV、TXT）から受信者を読み込んだり、定義済みのフィルターを適用したりするなど、複数のターゲティング方法が用意されています。 条件をAND/OR ロジックと組み合わせ、特定の母集団を除外し、コントロールグループを使用し、A/B テスト用に分割できます。 送信前に必ずターゲット母集団サイズをプレビューしてください。

**関連トピック：**

[ キャンペーン目標の定義](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja){target="_blank"} | [ クエリアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"} | [ オーディエンスの作成](../audiences/create-audiences.md)

+++

+++ プロファイルのリストを作成するにはどうすればよいですか？

リストは、配信でターゲットを設定し、キャンペーンをまたいで再利用できる静的な受信者セットです。

**3つの作成方法：**

* **手動作成：** **[!UICONTROL プロファイルとターゲット > リスト]**&#x200B;に移動し、**[!UICONTROL 作成]**&#x200B;をクリックします。 クエリ、個別の選択、またはフォルダーから受信者を追加します。

* **ワークフローの自動化：** **[!UICONTROL リスト更新]** アクティビティを使用して、クエリ結果またはインポートされたデータからリストを自動的に作成および管理します。

* **読み込み中：** プロファイルを読み込む際にリストを作成して、再利用可能なグループとして保存します。

**ヒント：**&#x200B;定期的な更新が必要なリストにはワークフローを使用し、1回限りのセグメント化には手動で作成します。

**関連トピック：**

[ オーディエンスの作成](../audiences/create-audiences.md) | [更新アクティビティのリスト ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/list-update.html){target="_blank"}

+++

+++ メッセージを送信する前に母集団の重複を排除するにはどうすればよいですか？

ワークフローで&#x200B;**[!UICONTROL 重複排除]** アクティビティを使用して、配信前に重複する受信者を削除します。 **[!UICONTROL クエリ]**&#x200B;と&#x200B;**[!UICONTROL 配信]** アクティビティの間に配置し、重複除外条件（通常は電子メールアドレスまたは受信者ID）と保持するレコードを選択します。

**ヒント：**&#x200B;送信前に必ず重複を解除して、各送信者がメッセージを1回だけ受信するようにします。

[重複排除アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/deduplication.html?lang=ja){target="_blank"}の詳細

+++

+++ ニュースレターの購読者を識別してターゲットにするにはどうすればよいですか？

Campaignは、情報サービスを通じてニュースレター購読を自動的に追跡します。 オーディエンスをターゲティングする：

* **[!UICONTROL クエリ]** アクティビティを使用し、**[!UICONTROL サブスクリプション]**&#x200B;でフィルターを実行して、ニュースレターサービスを選択します
* **[!UICONTROL 宛先/情報サービスのサブスクライバー]**&#x200B;を選択して、配信からサブスクライバーを直接ターゲティングします
* **[!UICONTROL サブスクリプションサービス]** ワークフローアクティビティを使用して購読者リストを作成する

Adobe Campaignは、購読/購読解除の履歴を追跡し、オプトイン/オプトアウトを自動的に管理します。

**関連トピック：**

[購読の管理](../start/subscriptions.md) | [ クエリアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"}

+++

+++ ターゲット母集団からプロファイルを除外するためのベストプラクティスは何ですか？

ワークフローで&#x200B;**[!UICONTROL 除外]** アクティビティを使用して、ターゲットから不要なプロファイルを削除します。 ターゲティングアクティビティの後に配置し、除外する母集団を定義します。

[除外アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/exclusion.html){target="_blank"}の詳細

+++


## メッセージデザイン {#design}

メールテンプレート、パーソナライゼーション手法、多言語コンテンツなど、Campaign v8で効果的なマーケティングメッセージをデザインする方法について説明します。 クライアントコンソールでメッセージをデザインするか、Campaign Web UIの最新の&#x200B;**電子メール Designer**&#x200B;を使用して、ビジュアル編集エクスペリエンスを強化します。

+++ Campaignで電子メールをデザインするためのベストプラクティスは何ですか？

主なガイドライン：モバイル対応のデザインを確保し、インライン CSSでHTML 4.0/XHTML互換コードを使用し、alt テキストで画像を最適化し（100 KB未満）、パーソナライズ結合フィールドを使用し、送信前にメールクライアントをまたいでテストし、プレーンテキストバージョンを含めます。 最適な配信品質を実現するために、総メールサイズを500 KB未満に抑える。

**関連トピック：**

[ メールデザインガイド ](../send/email.md) | [配信のベストプラクティス ](delivery-best-practices.md)

+++

+++ 配信テンプレートとは何ですか？

配信テンプレートとは、複数のキャンペーンで再利用できるように、あらゆる設定とパラメーターを保存する、事前設定済みの配信のことです。 テンプレートには、ターゲットルール、コンテンツデザイン、パーソナライゼーション、技術設定（送信者、返信先）、タイポロジルールなどがあります。 一度作成したコンテンツを再利用して、一貫性を維持し、キャンペーン作成を高速化。

[配信テンプレートを作成する方法](../send/create-templates.md)について説明します

+++

+++ Campaign で既存の HTML をインポートしてメールを簡単に作成できますか？

はい。 HTML コンテンツの読み込み直接コピー/ペーストをコンテンツエディターに読み込むか、コンピューターからファイルをアップロードするか、URLから読み込みます。 HTMLで、インライン CSSを含むメール互換コード（HTML 4.0/XHTML）と、パブリックサーバー上のホストイメージを使用していることを確認します。 Campaignは、読み込まれたHTMLにパーソナライゼーションとトラッキングを自動的に追加します。

**ヒント：**&#x200B;最高の電子メールデザイン体験を実現するには、Campaign Web UIの&#x200B;**電子メールDesigner**&#x200B;を使用します。この機能では、生のHTMLを読み込むのではなく、最新のドラッグ&amp;ドロップ機能と組み込みのレスポンシブテンプレートを提供します。

[HTML コンテンツを読み込む](../send/defining-the-email-content.md)方法について説明します

+++

+++ 購読ベースのニュースレターを Campaign で作成するにはどうすればよいですか？

はい。 Campaignの情報サービスを使用して、ニュースレター購読を管理します。 主な機能には、自動オプトイン/オプトアウト処理、サブスクリプション追跡、コンプライアンス管理（GDPR、CAN-SPAM）、マルチニュースレターのサポート、サインアップフォームのweb統合、購読者へのターゲティング配信などがあります。

[ サブスクリプションの管理方法](../start/subscriptions.md)について説明します

+++

+++ メッセージをパーソナライズするにはどうすればよいですか？

Adobe Campaignは、受信者のデータ、行動、嗜好にもとづいて、関連性の高いターゲットを絞ったメッセージを作成できるパーソナライゼーション機能を提供しています。

**Personalization オプション：**

* **パーソナライゼーションフィールド** – 受信者データの挿入（例：`"Hello {{firstName}}")`）
* **パーソナライゼーションブロック** – 定義済みまたはカスタムコンテンツブロックを使用
* **条件付きコンテンツ** – 受信者の条件に基づいて異なるコンテンツを表示
* **行動データ** – 閲覧履歴、購入パターン、エンゲージメント指標を活用する

送信前にパーソナライゼーションをテストして、結合フィールドと条件付きロジックが正しく機能することを確認します。

**関連トピック：**

[Personalization ガイド ](../send/personalize.md) | [ パーソナライゼーションフィールド ](../send/personalization-fields.md) | [条件付きコンテンツ ](../send/conditions.md)

+++

+++ メールの件名をパーソナライズするにはどうすればよいですか？

パーソナライズされた件名は、開封率を大幅に高めます。 Adobe Campaignでは、受信者データを動的に挿入し、条件付きロジックを適用して、バリエーションをテストすることで、エンゲージメントを最適化できます。

**Personalizationのテクニック：**

* **基本フィールド** - firstname、lastname、location: `"<%@ firstName %>, exclusive offer for you"`を挿入
* **条件付きコンテンツ** - セグメント別の異なる被写体：`"<% if (recipient.gender == 'F') { %>Special offer just for you<% } else { %>Exclusive deal inside<% } %>"`
* **動的データ** – 購入履歴、ロイヤルティポイント、アカウント情報を含める
* **絵文字** – 視覚的なアピールを追加（最初に電子メールクライアントをテスト）

**ベストプラクティス：** 50文字未満に抑え、送信する前にパーソナライゼーショントークンをテストします。A/B テストを使用して、最適化、迷惑メールトリガーの単語の回避、価値提案または緊急性を含めます。

**関連トピック：**

[ パーソナライゼーションフィールド ](../send/personalization-fields.md) | [条件付きコンテンツ ](../send/conditions.md)

+++

+++ 多言語メッセージを送信できますか？

はい。 Campaign v8は多言語機能を提供し、**Campaign Web UI**&#x200B;が最も簡単な方法です。 Web UIでは、言語のバリエーションを含むネイティブ多言語配信を提供し、言語のバリエーションを配信に追加すると、受信者が好む言語に基づいてCampaignが適切なバージョンを自動的に送信します。 電子メール、プッシュ通知、SMS、トランザクションメッセージで利用できます。

主な機能：コンテンツの自動複製、言語ベースの自動送信、デフォルトの言語フォールバック、簡単なバリエーション管理。

クライアントコンソールは、コンディショナルコンテンツとワークフローを使用した多言語コンテンツもサポートしていますが、より多くの手動設定が必要です。

**関連トピック：**

[多言語配信（Web UI） ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/msg/multilingual){target="_blank"} | [条件付きコンテンツ（クライアントコンソール） ](../send/conditions.md)

+++

+++ Web フォームをローカライズできますか？

はい。 Campaign web アプリケーションは、多言語ローカライゼーションをサポートします。 受信者のプロファイルやブラウザーの設定にもとづいて言語を自動検出し、あらゆるフォーム要素（ラベル、ボタン、メッセージ、エラーテキスト）に翻訳を定義できます。 単一のweb アプリケーションでは、複数の言語バージョンがサポートされており、必要に応じてデフォルト言語にフォールバックします。

[Web アプリケーションのローカライズ ](../dev/webapps.md)について詳しく見る

+++

+++ AIを活用したコンテンツをメールで使用できますか？

はい。ただし&#x200B;**Campaign Web UI**&#x200B;を使用する場合のみ。 MICROSOFT Azure OpenAIとAdobe FireflyのAI アシスタントを利用すれば、電子メール、SMS、プッシュ通知をまたいで、一貫性のあるプロフェッショナルなコンテンツを制作できます。

**主な機能：**

* テキスト（メールのコピー、件名、SMS/プッシュコンテンツ）とブランドに即した画像を生成
* 様々なオーディエンスに最適化されたコンテンツバリエーションの制作
* コンテンツの調整（詳細な説明、要約、言い換え、簡素化）
* ブランドアセットをアップロードして、ブランドとの整合性をスコア化できます
* 既存のコンテンツを参照として使用し、スタイル参照画像をアップロードする

**注：** AI アシスタントは、Campaign Web UIでのみ使用でき、現在は英語のみをサポートしています。 ユーザーには適切な権限が必要で、ユーザー契約書に同意する必要があります。

**関連トピック：**

[AI アシスタントの概要](https://experienceleague.adobe.com/en/docs/campaign-web/v8/content/ai-assistant/generative-gs){target="_blank"} | [AI アシスタントの使用例](https://experienceleague.adobe.com/en/docs/campaign-web/v8/content/ai-assistant/generative-uc){target="_blank"} | [ ブランドの調整](https://experienceleague.adobe.com/en/docs/campaign-web/v8/content/ai-assistant/ai-assistant/brands-score){target="_blank"}

+++

## メッセージのテストと送信 {#send}

マーケティングメッセージをテスト、検証、送信、追跡して、キャンペーンの配信を成功させるためのベストプラクティスを説明します。

+++ メールの配信品質を向上させるにはどうすればよいですか？

メール配信の品質は、すべての送信者がマーケティングプログラムを成功させるうえで重要なコンポーネントであり、条件とルールが常に変化し続けるという特徴があります。 デジタルの世界を効果的に進むには、主な配信品質の傾向を考慮して、メール戦略を定期的に調整し、最適な方法でオーディエンスにアプローチする必要があります。

このガイドでは、[配信品質のベストプラクティス ](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}について説明します

Campaign に配信品質を実装する方法については、[このガイド](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/general-resources.html?lang=ja){target="_blank"}を参照してください

**関連トピック：**

[配信品質の基本を学ぶ](../send/about-deliverability.md) | [ メッセージコンテンツの管理](../send/control-message-content.md) | [配信品質の監視](../send/monitoring-deliverability.md) | [SpamAssassin](../send/spamassassin.md)

+++

+++ エラーなしで配信されていることを確認するにはどうすればよいですか？

**配信分析を送信する前に、テスト プルーフを送信し、警告を確認し、ターゲット数を確認してください。**

**送信中/送信後：**&#x200B;配信ダッシュボード（送信、配信、バウンス、エラー）の監視、配信ログの確認、成功/バウンス率の追跡、強制隔離されたアドレスの確認。

**ベストプラクティス：** アラートを設定し、大量のウェーブを使用し、最初に小さいボリュームでテストし、受信者データベースを定期的にクリーニングし、送信者のレピュテーションを監視します。

**関連トピック：**

[配信の追跡と監視](../send/tracking.md) | [配信のベストプラクティス ](delivery-best-practices.md)

+++

+++ 配信分析とは何ですか？

配信分析は、送信前にキャンペーンが実行される検証段階です。 ターゲット母集団の計算、コンテンツの検証、エラーのチェック、タイポロジルールの適用、配信量の推定を行います。

Campaignは、警告とエラーを示すログを生成します。 エラーは配信をブロックし、修正する必要があります。警告はアドバイザリーです。 送信前に分析ログを必ず確認してください。

詳しくは、[配信分析ガイド ](../send/delivery-analysis.md)を参照してください

+++

+++ なぜ配達確認の作成が必要なのですか？

プルーフとは、メインのオーディエンスに送信する前に配信を検証するテストメッセージです。 プルーフを使用して、パーソナライゼーションの検証、メールクライアントをまたいだコンテンツレンダリングのテスト、リンクやトラッキング作業の確認、画像と添付ファイルのチェック、モバイル応答の検証を行います。

プルーフは、何千人もの受信者にリーチする前にエラーを発見し、関係者の承認を得て、受信トレイの到達率をテストするのに役立ちます。 複数のメールクライアントやデバイスに校正を送信し、本番環境への送信前に必ず承認を得るようにします。

詳しくは、[ プルーフとプレビューガイド ](../send/preview-and-proof.md)を参照してください

+++

+++ Adobe Campaign でのシードアドレスの使用方法は？

シードアドレスは、テスト、品質保証、モニタリングのために、ターゲット基準に一致することなく、あらゆる配信に自動的に追加される特別な受信者です。 継続的なモニタリング、受信トレイ到達率のテスト、ダイレクトメールの検証、関係者の可視化に役立ちます。

**プルーフとの主な違い：**

* **シードアドレス** – 実稼動配信に自動的に追加され、送信量にカウントされます
* **プルーフ** – 実稼働前に送信をテストします。ボリュームにカウントされません。検証に使用されます

**[!UICONTROL リソース/キャンペーン管理/シードアドレス]**&#x200B;でシードアドレスを管理します。 配信の指標に影響を与えないように、リストを小さく保ちます。

詳しくは、[ シードアドレスガイド ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/delivery-control.html){target="_blank"}を参照してください

+++

+++ メッセージ送信前の承認プロセスを設定するにはどうすればよいですか？

Adobe Campaignでは、メッセージが送信前に品質基準を満たしていることを確認するための承認ワークフローを提供します。 キャンペーンや配信レベルで、コンテンツ、ターゲット、抽出（ダイレクトメール）、予算の承認を設定できます。

**セットアップ：**

**[!UICONTROL 管理/アクセス管理/オペレーターグループ]**&#x200B;でオペレーターグループを作成し、キャンペーンまたは配信プロパティで承認グループを割り当てます。 Adobe Campaignは、変更を承認、却下、または要求できるレビュー担当者に通知メールを送信します。

**スタンドアロン配信の場合（キャンペーンにありません）:**

承認プロセスとして&#x200B;**プルーフを使用**。 承認グループにプルーフを送信して検証し、変更後は常に新しいプルーフを送信して、関係者が最新バージョンをレビューできるようにします。

**関連トピック：**

[配信の検証](../send/preview-and-proof.md) | [ キャンペーンの承認](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-approval.html?lang=ja){target="_blank"}

+++

+++ 配信に対してA/B テストを実行できますか？

はい！ Adobe Campaignでは、A/B テスト（スプリットテストとも呼ばれます）を実施して、件名、コンテンツ、送信者の名前、送信時間などを最適化し、様々なバリエーションでパフォーマンスを比較できます。

**テスト可能な項目：**

* **件名** – 様々なテーマでの開封率の比較
* **コンテンツのバリエーション** – 様々なレイアウト、コールトゥアクション、または画像をテストします
* **送信者情報** – 送信者名または送信元アドレスの影響をテストします
* **送信時間** – 最適な配信期間を特定
* **Personalization戦略** - パーソナライズされたコンテンツと汎用コンテンツの比較

**仕組み：**

1. 配信を作成し、テストのバリエーションを定義（最大3つ）
2. オーディエンスの分割（テストセグメントでは通常10～20%）
3. Campaignは、セグメントをテストし、パフォーマンスを追跡するためにバリエーションを送信します
4. 勝利したバリエーションは、残りのオーディエンスに自動的に送信されます（または手動で勝者を選択します）

**Campaign Web UIとクライアントコンソールの両方で使用できます。** Web UIでは、視覚的な比較によるシンプルな設定が可能です。

**関連トピック：**

[配信分析](../send/delivery-analysis.md) | [配信の送信と追跡](../send/send.md)

+++

+++ タイポロジルールとは何ですか？

タイポロジルールは、メッセージ送信を検証および最適化するために、配信分析中に適用される自動ビジネスロジックです。 マーケティングポリシーの遵守、配信品質の保護、顧客疲労の防止に役立ちます。

**主なルールの種類：**

* **ルールのフィルタリング** – 受信者の除外（ブロックリストに加える、登録解除、強制隔離）
* **プレッシャールール** – 受信者に負担をかけないようにメッセージの頻度を制御します
* **キャパシティルール** – 処理能力またはISP制限のメッセージボリュームを制限
* **ルールを制御** - メッセージの有効性を確認します（件名、購読解除リンク、送信者の形式）

ルールはタイポロジにグループ化され、配信分析中に適用されます。 Campaignでは、受信者を除外したり、配信をブロックしたり、ルールに基づいて警告を生成したりできます。

詳しくは、[Typology ルールガイド ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-optimization/campaign-typologies.html?lang=ja){target="_blank"}を参照してください

+++

+++ メールをウェーブで送信するにはどうすればよいですか？

はい。 ウェーブ送信では、配信をスケジュールされた間隔で送信される複数のバッチに分割します。 これは、大規模なキャンペーンがサーバー負荷のバランス、ISPのスロットリングの防止、新しいIPでの送信者のレピュテーションの構築、波及間のオプトアウト/バウンスの管理を行うために不可欠です。

**設定：**

配信プロパティで、ウェーブ送信を有効にし、ウェーブの数（またはバッチサイズ）、ウェーブ間の間隔、ウェーブ分布（線形またはカスタムのパーセンテージ）を定義します。 Adobe Campaignでは、ターゲット母集団が自動的に分割され、スケジュールどおりに各波が送信されます。

大規模なキャンペーンにウェーブを使用し、続行する前に最初のウェーブのパフォーマンスを監視し、ウェーブ間でバウンスとオプトアウトを処理するのに十分な時間を確保します。

[ ウェーブ送信](../send/configure-and-send.md#sending-using-multiple-waves)の設定方法について説明します

+++

+++ 配信のスケジュール方法は？

Adobe Campaignでは、今後の送信のために配信をスケジュールし、送信時間を最適化してキャンペーンを調整することができます。

**スケジュール設定オプション：**

* **配信プロパティ** – 即座に送信、特定の日時にスケジュール、または時間/日単位で延期
* **キャンペーンレベル** - キャンペーン内のすべての配信を調整する
* **ワークフロースケジューラーアクティビティ** – 繰り返し配信、複雑なパターン、イベントをトリガーにしたキャンペーンの場合

Campaignは、連絡先日の最適化（受信者ごとに最適な送信時間）とタイムゾーンの適応（すべての受信者に同じ現地時間）もサポートしています。

[配信送信をスケジュール ](../send/configure-and-send.md#schedule-delivery-sending)する方法について説明します

+++

+++ メールに添付ファイルを追加できますか？

はい。 Campaignでは、静的添付ファイル（すべての受信者に同じファイル）とパーソナライズされた添付ファイル（プロファイルデータに基づいて受信者ごとに異なるファイル）がサポートされています。 配信プロパティの&#x200B;**[!UICONTROL 添付ファイル]** セクションに添付ファイルを追加します。

**重要な考慮事項：**

* 最適な配信品質を実現するために、添付ファイルを1 MB未満に抑える
* 添付ファイルはスパムフィルターをトリガーできます。送信する前に徹底的にテストしてください
* メールクライアント（.exe、.zip、.js）によって一般的にブロックされるファイルタイプを避ける
* 大きなファイルの場合は、代わりにトラッキングされたダウンロードリンクを使用することを検討してください

安全なファイル形式（PDF、JPEG、PNG、DOCX）を使用し、本番環境への送信前にシードアドレスを使用してテストします。

詳しくは、[電子メール添付ファイル ガイド ](../send/email.md#attachments)を参照してください

+++

+++ メール配信でトラッキング対象リンクを設定するにはどうすればよいですか？

Adobe Campaignは、メール内のあらゆるURLを自動的に追跡リンクに変換し、受信者のエンゲージメントを監視します。 配信の「**[!UICONTROL トラッキング]**」セクションにアクセスして、各リンクのトラッキング設定を設定します。

**設定オプション：**

* **トラッキングの有効化/無効化** - リンクごとのトラッキングの制御
* **リンクラベル** - レポート用にわかりやすい名前を追加します（例：「今すぐ購入CTA」）
* **リンクカテゴリ** – 集計分析の種類ごとにリンクをグループ化
* **トラッキングタイプ** - クリック、開封、またはその両方を追跡

Campaignは、コンテンツリンク、ミラーページリンク、購読解除リンクを追跡し、メール開封用にオプションのトラッキングピクセルを含めることができます。 有意義なラベルやカテゴリーを使用して、レポートを簡素化し、パフォーマンスの高いコンテンツをすばやく特定できます。

**関連トピック：**

[ リンクトラッキングガイド ](../send/tracking.md) | [ トラッキングベストプラクティス ](../send/send.md)

+++

+++ 配信およびトラッキングのログはどこで参照できますか？

各配信ダッシュボードから配信ログとトラッキングログに直接アクセスできます。 クライアントコンソールで、下部の「**[!UICONTROL 配信]**」タブをクリックします。 Campaign Web UIで、**[!UICONTROL ログ]** セクションに移動します。

**使用可能なログ：**

* **配信ログ** – 受信者の詳細とステータスを含むメッセージを送信しました（送信、保留中、失敗）
* **トラッキングログ** - タイムスタンプを使用した受信者のインタラクション（開封数、クリック数）
* **除外ログ** – 理由（強制隔離、タイポロジルール、重複）を持つ受信者を除外しました
* **ブロードキャストログ** – 再試行とエラーを含む送信履歴を完了します

これらのログを使用して、配信の問題をトラブルシューティングし、エンゲージメントを分析し、リストの健全性を維持します。

**関連トピック：**

[配信の監視](../send/send.md) | [ トラッキングガイド ](../send/tracking.md)

+++

+++ 配信レポートはどこで取得できますか？

Adobe Campaignには、配信のパフォーマンス、受信者のエンゲージメント、キャンペーンの効果を分析するための包括的なレポートが組み込まれています。 任意の配信の「**[!UICONTROL レポート]**」タブ、キャンペーンダッシュボード、またはクロスキャンペーン分析用のグローバル「**[!UICONTROL レポート]**」メニューからレポートにアクセスします。

**主なレポート：**

* **配信の概要** – 統計情報の送信、開封数、クリック数、バウンス数、配信停止数
* **ホットクリック** - リンクパフォーマンスの視覚的ヒートマップ
* **トラッキングインジケーター** - クリックスルー率とエンゲージメント指標
* **配信不能件数** – 失敗の理由によるバウンス分析

レポートは、クライアントコンソールとCampaign Web UIの両方で、最新のビジュアライゼーションを使用して使用できます。

**関連トピック：**

[ ビルトイン配信レポート ](../reporting/delivery-reports.md) | [ キャンペーンレポート ](../reporting/gs-reporting.md)

+++

+++ Adobe Campaign では強制隔離アドレスをどのように選定および管理していますか？

Campaignは、強制隔離リストを自動的に管理し、送信者のレピュテーションを保護して配信品質を向上させます。 強制隔離されたアドレスは、検証または強制隔離から削除されるまで、今後の配信から自動的に除外されます。

**アドレスが強制隔離される理由：**

* **ハードバウンス** – 永続的な配信エラー（無効な電子メールアドレス、ドメインが存在しない、メールボックスが削除された）
* **ソフトバウンスのしきい値** - エラーのしきい値を超える一時的なエラー（メールボックスがいっぱいになっている、サーバーが一時的に利用できない）が繰り返されます
* **迷惑メールの苦情** – 電子メールを迷惑メールとしてマークする受信者
* **無効なアドレス** – 構文エラーがあるアドレス、または検証に失敗するアドレス
* **ブロックリストに加える** - オプトアウトした受信者または除外を要求した受信者

**強制隔離の仕組み：**

Campaignは、各アドレスの配信エラーを追跡します。 アドレスが設定されたエラーのしきい値に達すると、分析中に自動的に強制隔離され、今後のすべての配信から除外されます。 ハードバウンス（永続的なエラー）は直ちに強制隔離され、ソフトバウンスは強制隔離の前に複数のエラーが必要になります。

**強制隔離されたアドレスの管理：**

**[!UICONTROL 管理/ キャンペーン管理/配信不能管理]**&#x200B;で強制隔離の管理にアクセスします。 強制隔離されたアドレスの表示、強制隔離から検証済みのアドレスの手動による削除、自動クリーンアップルールの設定を行うことができます。

**ヒント：**&#x200B;強制隔離リストを定期的に監視します。 検疫率が高まると、送信者のレピュテーションに影響を与える前に、注意を必要とするデータ品質の問題を示す場合があります。

**関連トピック：**

[強制隔離の管理ガイド ](../send/quarantines.md) | [ バウンス管理](../send/delivery-failures.md)

+++

## ワークフロー {#workflows}

ワークフローを使用して、Adobe Campaignでプロセスを自動化し、データを管理して、複雑なマーケティングキャンペーンを調整する方法を説明します。

+++ ワークフローとは何ですか？

Adobe Campaign には、アプリケーションサーバーの様々なモジュール間でプロセスおよびタスク全体にわたる調整を行うワークフローが含まれています。 この包括的なグラフィック環境では、セグメンテーション、キャンペーンの実行、ファイル処理、人間の参加などのプロセスを設計できます。ワークフローエンジンは、これらのプロセスを実行および追跡します。

例えば、ワークフローを使用して、サーバーからファイルをダウンロードしたり、ファイルを解凍したり、ファイルに含まれるレコードを Adobe Campaign データベースにインポートしたりできます。

またワークフローには、1 人または複数のオペレーターを関連付けて、通知の対象とすることや、プロセスの選択や承認に関与させることもできます。 この方法により、配信アクションを作成して 1 人または複数のオペレーターにタスクを割り当て、コンテンツに対して作業する、ターゲットを指定する、配信開始前に配達確認を承認する、などが可能になります。

ワークフローについて[詳細情報](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/about-workflows.html?lang=ja){target="_blank"}を表示します。 「[ワークフローのベストプラクティス](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"}」も参照してください。

**関連トピック：**

[ ワークフローの基本を学ぶ](../config/workflows.md) | [最初のワークフローを作成する](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"} | [ ワークフローのユースケース ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"} | [ ワークフローの実行を監視](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

+++

+++ ワークフローの実行を監視できますか？

はい。 Adobe Campaignには、ワークフローダッシュボード（リアルタイムのステータスとエラー）、ワークフローログ（詳細な実行ログ）、ヒートマップ（アクティビティとボトルネックを可視化）、監査証跡（変更を追跡）、アラート（失敗の通知）など、複数の監視ツールが用意されています。

監視するには、ワークフローを開き、「**ログ**」タブをクリックします。 失敗したアクティビティは赤色で表示されます。

**関連トピック：**

[ ワークフロー実行の監視](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution){target="_blank"} | [ ワークフローのベストプラクティス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"}

+++

+++ ワークフローを作成するための重要な手順は？

Campaignでマーケティングプロセスを自動化するワークフローを作成します。

1. **新しいワークフローを作成** - **[!UICONTROL プロファイルとターゲット/ジョブ/ターゲティングワークフロー]**&#x200B;または&#x200B;**[!UICONTROL 管理/プロダクション/テクニカルワークフロー]**&#x200B;に移動し、**[!UICONTROL 作成]**&#x200B;をクリックします
1. **アクティビティを追加** - アクティビティをパレットからドラッグ&amp;ドロップします（ターゲティング、フロー制御、アクションアクティビティ）
1. **アクティビティの設定** – 各アクティビティをダブルクリックして、パラメーターを設定し、ロジックを定義します
1. **アクティビティを接続** - トランジションとアクティビティをリンクして、実行フローを定義します
1. **テストと検証** - ワークフロー図を使用してロジックを確認し、小さなデータセットでテストします
1. **実行** - ワークフローを手動で開始するか、自動実行のためにスケジュールします

一般的なワークフローパターン：データのインポート、オーディエンスセグメンテーション、配信の送信、データエンリッチメント、クロスチャネルのオーケストレーション

**関連トピック：**

[ ワークフローの作成](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"} | [ ワークフローアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/about-activities.html){target="_blank"} | [ ワークフローのベストプラクティス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"} | [ ワークフローのユースケース ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"}

+++

+++ 定期的なキャンペーンを自動化するにはどうすればよいですか？

**Scheduler** アクティビティでワークフローを使用すると、日単位、週単位、月単位、またはカスタムの間隔で定期的に実行されるキャンペーンを自動化できます。 ウェルカムメール、誕生日メッセージ、ニュースレター送信、カート放棄リマインダー、定期的なレポートに最適です。

**設定パターン：**

1. **スケジューラー** – 頻度の定義（例：「毎週月曜日の午前9時」）
2. **クエリ** – 動的な条件を持つターゲットオーディエンスを選択
3. **エンリッチメント** （オプション） – パーソナライゼーションデータを追加
4. **配信** - メッセージの設定（電子メール、SMS、プッシュ通知）
5. **終了** - ワークフローが完了し、次のスケジュールされた実行を待ちます

**一般的な自動キャンペーン：**

* **ウェルカムシリーズ** – 新規購読者にオンボーディングメールを送信する毎日のワークフロー
* **誕生日メール** – 誕生日を持つ受信者を毎日チェックし、パーソナライズされたメッセージを送信します
* **リエンゲージメント** - ウィンバック オファーを使用した非アクティブ ユーザーの週別ターゲティング
* **ニュースレター** – 毎週または毎月配信されるコンテンツのスケジュール
* **買い物かごの放棄** – 買い物かごの放棄を特定してメッセージを送信するための時間別ワークフロー

**ヒント：** ワークフローで&#x200B;**繰り返し配信** タイプを使用して、各実行を個別に追跡し、履歴レポートを維持します。

**関連トピック：**

[ スケジューラーアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/flow-control-activities/scheduler.html?lang=ja){target="_blank"} | [定期的な配信](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/sending-a-birthday-email.html){target="_blank"} | [ キャンペーンオートメーション ](https://experienceleague.adobe.com/docs/campaign/automation/home.html?lang=ja){target="_blank"}

+++

+++ Campaign でデータをインポートするにはどうすればよいですか？

**方法：**&#x200B;読み込みウィザード（1回限りのCSV/TXT）、ワークフローベースの読み込み（**[!UICONTROL データ読み込み（ファイル）]** アクティビティ、変換を伴う複雑/定期的な読み込み）、REST API （プログラマティック/リアルタイム同期）。

**ベストプラクティス：**&#x200B;小さなサンプルを使用してテストを行い、UTF-8 エンコーディングを使用し、フィールドを正しくマッピングし、重複排除を適用し、オフピークで大規模なインポートをスケジュールします。

**関連トピック：**

[ インポートのベストプラクティス ](../start/import.md) | [ データ読み込みアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"} | [繰り返しインポート ワークフロー](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/recurring-import-workflow.html?lang=ja){target="_blank"}

+++

+++ インポート中にデータ品質を確保するにはどうすればよいですか？

データ品質は、キャンペーンの成功に不可欠です。 データが不十分な場合、配信の失敗、リソースの浪費、コンプライアンスのリスクにつながります。 Campaignには、インポートプロセス中にデータを検証、クリーニング、および強化するツールが用意されています。

**データ検証手順：**

1. **インポート前の検証** - ファイル形式、エンコード （UTF-8）、列マッピング、必須フィールドの存在を確認します
2. **重複排除** - **[!UICONTROL 重複排除]** アクティビティを使用して、電子メール、ID、またはカスタムキーで重複を識別して処理します
3. **データエンリッチメント** - **[!UICONTROL エンリッチメント]** アクティビティを使用して、既存のCampaign テーブルから欠落しているデータを追加します
4. **形式の標準化** - JavaScriptまたはエンリッチメントを使用して、電話番号、電子メールアドレス、日付、国コードを標準化します
5. **検証ルール** – 制約の適用（有効な電子メール形式、必須フィールド、値範囲）

**一般的な問題と修正：**

* **文字エンコーディングエラー** →常にUTF-8 エンコーディングを使用する
* **日付形式が一致しません** → YYY-MM-DD形式に標準化
* **無効な電子メールアドレス** →検証ルールまたはJavaScriptを使用してフィルターを実行
* **レコードを複製** →更新前に常に重複排除アクティビティを含める
* **必須フィールドがありません** → デフォルト値を設定するか、不完全なレコードを却下します

**ベストプラクティス：**&#x200B;すべての読み込みに適用できる標準の検証およびクリーニング アクティビティを使用して、再利用可能な「データ品質」ワークフローテンプレートを作成します。

**関連トピック：**

[ データ品質ガイド ](../start/import.md) | [重複排除アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/deduplication.html?lang=ja){target="_blank"} | [ エンリッチメントアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/enrichment.html?lang=ja){target="_blank"}

+++

+++ Campaignの一般的なワークフローの使用例を教えてください。

ワークフローは、次のようなマーケティングプロセスを自動化します。

**データ管理：** データのインポート/読み込み、クレンジング、エンリッチメント、リスト管理\
**キャンペーンの自動化：** ウェルカムシリーズ、誕生日キャンペーン、リエンゲージメント、カート放棄\
**高度なターゲティング：** A/B テスト、動的セグメンテーション、リードスコアリング、クロスチャネルオーケストレーション\
**監視：** ワークフロー/配信の監視、アラート、データベースのメンテナンス\
**統合：** CRM同期、API統合、イベントトリガーワークフロー

**関連トピック：**

[ ワークフローのユースケースライブラリ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"} | [ ワークフローの作成](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"} | [ ワークフローのベストプラクティス ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"}

+++

+++ ワークフローで Campaign データを更新するにはどうすればよいですか？

一括データベース操作に&#x200B;**[!UICONTROL データの更新]** アクティビティを使用します。挿入（新しいレコードを追加）、更新（既存のレコードを変更）、挿入または更新（アップサート）、削除（一致するレコードを削除）。

**一般的な用途：** プロファイル属性の更新、外部システムとの同期、リストメンバーシップの維持、データのクリーニング/重複排除、一括ステータス変更の適用。

正確に一致するように紐付けキーを設定し、更新オプションを選択します。

**関連トピック：**

[ データアクティビティの更新](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/update-data.html?lang=ja){target="_blank"} | [ データ管理アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/about-action-activities.html){target="_blank"}

+++

+++ データ管理機能を利用するにはどうすればよいですか？

データ管理アクティビティにより、高度な操作が可能になります。エンリッチメント（関連テーブルからデータを追加）、分割（セグメント母集団）、重複排除（重複の削除）、データの更新（一括操作）、ディメンションの変更（ターゲティングディメンションの切り替え）、積集合/結合/除外（母集団の結合/フィルター）。

**一般的な用途：**&#x200B;購入/行動データのエンリッチメント、オーディエンスのセグメント化、重複の削除、外部データベース （FDA）の統合、複雑なマルチテーブルクエリの作成を行います。

**関連トピック：**

[ データ管理アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/about-targeting-activities.html){target="_blank"} | [ エンリッチメントアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/enrichment.html?lang=ja){target="_blank"}

+++

+++ パーソナライズされたメッセージの送信を自動化できますか？

はい。 自動化されたワークフローの構築：クエリ（ターゲットオーディエンス）→エンリッチメント（パーソナライゼーションデータを追加）→分割（オプションのセグメント）→配信（パーソナライズされたメッセージ）→スケジューラー（繰り返し実行）。

**Personalization:** プロファイルデータ、行動データ、条件付きコンテンツ、動的な値を使用します。 一般的なシナリオ：誕生日キャンペーン、カート放棄、ロイヤルティプログラム、ウィンバック、イベントをトリガーとしたメッセージ

**関連トピック：**

[Personalization ガイド ](../send/personalize.md) | [ ワークフローのユースケース ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/send-a-birthday-email.html?lang=ja){target="_blank"}

+++

+++ ワークフローでオーディエンスをサブセットに分割するにはどうすればよいですか？

**[!UICONTROL Split]** アクティビティを使用して母集団を分割します。フィルター条件（年齢、場所、VIPのステータス）、パーセント分布（A/B テスト）、制限レコード（最初のN、上位X%）、データグループ化（値ごとに1つのサブセット）。

**一般的な用途：** A/B テスト、チャネル環境設定ルーティング、プログレッシブロールアウト、セグメント固有メッセージ、負荷分散。 各サブセットは、異なる処理のために個別の遷移に流れます。

**関連トピック：**

[ アクティビティの分割](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/split.html?lang=ja){target="_blank"} | [A/B テストガイド ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/a-b-testing.html){target="_blank"}

+++

+++ 外部ファイルの受信者データを更新するにはどうすればよいですか？

はい。 ワークフロー：データの読み込み（ファイル）→エンリッチメント（オプション） →紐付け（電子メール/IDなどの一致キー） → データの更新（一致したレコードの更新、一致しない場合は新規挿入）。

**一般的な用途：** CRMからプロファイル属性を更新し、サブスクリプションのステータスを更新し、ロイヤルティポイントを同期し、オプトイン/オプトアウト設定を更新します。

**ベストプラクティス：**&#x200B;一意のIDを使用し、最初にデータを検証し、サンプルを使用してテストし、定期的な更新をスケジュールします。

**関連トピック：**

[ データガイドの読み込み](../start/import.md) | [ データ読み込みアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"} | [ データアクティビティの更新](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/update-data.html?lang=ja){target="_blank"}

+++

+++ 新しい受信者を識別してターゲットにするにはどうすればよいですか？

**[!UICONTROL 作成日]** フィールドにクエリを実行して、特定の時間枠内に追加された受信者を選択します。

**自動化されたウェルカムワークフロー：** スケジューラー（毎日実行） → クエリ（新しい受信者を選択） →重複排除（オプション） →配信（ウェルカムメッセージ） → データの更新（ウェルカムメッセージとしてマーク）。

**詳細：**&#x200B;集計関数を使用して、最近の追加を動的に識別します。

**関連トピック：**

[ クエリアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"} | [集計の使用](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/using-aggregates.html?lang=ja){target="_blank"}

+++

+++ ワークフローアクティビティの使用方法

4つのアクティビティカテゴリ：

**ターゲティング：** クエリ、分割、重複排除、エンリッチメント、積集合、結合、除外（オーディエンスの定義/調整）\
**フロー制御：** スケジューラー、待機、テスト、フォーク、および結合、または結合、ジャンプ（ロジック/タイミングの管理）\
**アクション：**&#x200B;配信、データの更新、データの読み込み/抽出、JavaScript コード （操作の実行）\
**Event:**&#x200B;外部シグナル、ファイルコレクター、HTTP転送（トリガーに反応）

パレットからドラッグし、ダブルクリックして設定し、トランジションに接続します。

**関連トピック：**

[ アクティビティのターゲティング ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/targeting-activities.html?lang=ja){target="_blank"} | [ フロー制御](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/flow-control-activities/flow-control-activities.html?lang=ja){target="_blank"} | [ アクションアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/action-activities.html?lang=ja){target="_blank"}

+++

+++ ワークフローのベストプラクティス？

**デザイン：**&#x200B;名前をクリアする、ラベルや説明を追加する、関連するアクティビティをグループ化する、複雑なプロセスを小さなワークフローに分割する\
**パフォーマンス：** クエリサイズの制限、一時テーブルの使用、オフピークのスケジュール、過剰なループの回避\
**エラー処理：** エラーパスの追加、アラートの設定、サンプルを使用したテスト、レビューログ\
**メンテナンス：**&#x200B;古いワークフローのアーカイブ、バージョン管理、複雑さの制限（&lt;20 アクティビティ）、テンプレートの使用\
**セキュリティ：**&#x200B;権限の適用、一時データのクリーニング、ハードコードされていない値の変数の使用

**関連トピック：**

[ ワークフローのベストプラクティスガイド ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"} | [ ワークフローの監視](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

+++

## キャンペーン設定 {#settings}

マーケティングオペレーションを最適化するために、適切な設定、統合、設定を使用してCampaign インスタンスを設定します。

+++ Campaign インターフェイスの言語を変更できますか？

使用するインターフェイスによって異なります。 **クライアントコンソール**&#x200B;の言語は修正されていますが、**Campaign Web UI**&#x200B;では、個々のユーザーが言語設定を変更できます。

**クライアントコンソール （デスクトップアプリケーション）:**

* インスタンスが作成され、変更できないときに言語が設定されます
* クライアントコンソールとサーバーは同じ言語を使用する必要があります
* 各Campaign インスタンスは、1つの言語で動作します
* 英語版の場合、米国英語または英国英語のいずれかを選択できます（日付と時刻の形式が異なります）

**Campaign Web UI:**

* ユーザーは、プロファイル設定を通じて、インターフェイスの言語を個別に変更できます
* 日付、時刻、数字のロケール固有の書式設定では、複数の言語がサポートされています
* Web UIの言語設定は、Campaign サーバーとクライアントコンソールの言語とは独立しています


**関連トピック：**

[Campaign Web UIでの言語の変更](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/connect-to-campaign#language-pref){target="_blank"} | [Campaign クライアントコンソールの基本を学ぶ](connect.md)

+++

+++ キャンペーンCampaign コントロールパネルとは何か、どのようにアクセスすればよいか？

Campaign Campaign コントロールパネルは、Campaign管理者がCampaign インスタンス全体の設定と使用状況のモニタリングを行うことで、効率を向上させるのに役立つweb ベースの管理インターフェイスです。 Adobeサポートに連絡することなく、重要なインスタンス設定を管理するセルフサービス機能を提供します。

**主な機能：**

* **サブドメイン管理** - サブドメインのデリゲートと管理、SSL証明書の監視
* **ストレージ監視** - データベースの使用状況を追跡し、ストレージの問題を回避します
* **SFTP管理** - SFTP ストレージの監視、IP ストアの管理、およびSSH キー
* **インスタンス設定** - IP設定の設定、URL権限の管理、インスタンスの詳細の確認
* **アクティブなプロファイルの監視** – 使用権限に対するアクティブなプロファイル使用状況の追跡
* **パフォーマンス監視** - データベースとワークフローのパフォーマンスを監視します
* **電子メールの配信品質** - DMARC、BIMI、その他の認証レコードを設定します

**アクセス要件：**

* **管理者ユーザーのみ** - Campaign コントロールパネルは管理者権限を持つユーザーに制限されています
* **Adobe IMS認証** - Adobe IDを使用したAdobe Experience Cloud経由のアクセス
* **Campaign v8 Managed Cloud Services** - ホストされたインスタンスでのみ使用できます

**追加リソース：**

[Campaign コントロールパネルドキュメント ](https://experienceleague.adobe.com/ja/docs/control-panel/using/control-panel-home){target="_blank"} | [Campaign コントロールパネルチュートリアルビデオ ](https://experienceleague.adobe.com/ja/docs/control-panel-learn/tutorials/control-panel-overview){target="_blank"}

+++

+++ オペレーターと権限がセキュリティのベストプラクティスに従っていることを確認するにはどうすればよいですか？

Adobe Campaign v8では、トップレベルの管理アカウントと特権アカウントのすべての現在の設定を、推奨されるセキュアデフォルトと比較できます。

* **現在の設定（完全な表示）:**&#x200B;管理アカウントと特権アカウントのすべての設定は、**[!UICONTROL 管理]** > **[!UICONTROL アクセス管理]** （クライアントコンソールまたはCampaign Web UI）: **[!UICONTROL オペレーター]**、**[!UICONTROL オペレーターグループ]**、**[!UICONTROL 名前付き権限]** （管理、承認管理など）およびフォルダーレベルの権限で確認できます。 製品管理者は、[Campaign Campaign コントロールパネル](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=ja){target="_blank"}のインスタンスレベルの設定（IP設定、URL権限、インスタンスの詳細など）を確認することもできます。
* **推奨されるセキュアなデフォルト：** [ セキュリティガイドライン ](../config/security.md)は、管理アカウントと特権アカウントに対して推奨されるセキュアベースラインを定義します。これには、十分なセキュリティグループの作成、オペレーターごとの適切なアクセス権の割り当て、管理者オペレーターと管理者グループの使用の制限が含まれます。 該当する場合は、ネットワークおよび暗号化の強化に関する[強化セキュリティアドオン ](../config/enhanced-security.md)も参照してください。
* **比較：**&#x200B;管理者は、現在の設定と、これらの文書化された推奨事項を比較して、ギャップを特定し、安全なデフォルトに一致させます。

**関連トピック：**

[権限の基本を学ぶ](gs-permissions.md) | [ セキュリティガイドライン ](../config/security.md) | [強化セキュリティアドオン ](../config/enhanced-security.md)

+++

+++ ドメインの委任はどのような手順でおこないますか？

サブドメインとは、ブランドや様々なタイプのトラフィック（トランザクションメッセージ、マーケティング情報など）を分離するために使用できるドメインの区分です。

>[!NOTE]
>
>Managed Cloud Services のユーザーとしてサブドメインをアドビに委任する場合は、アドビにお問い合わせください。

+++

+++ トラッキング機能を Campaign インスタンスに設定するにはどうすればよいですか？

Campaign v8は、メッセージとの受信者のインタラクションを監視するための包括的なトラッキング機能を提供します。 トラッキングには、インスタンスとメッセージ設定の適切な設定が必要です。

**追跡できるもの：**

* **電子メールが開く** - トラッキングピクセル経由（1x1透明画像）
* **リンククリック** – すべてのURLが自動的にトラッキング対象のリンクに変換されます
* **登録解除** - オプトアウトリンクの追跡
* **ページビューをミラーリング** – 受信者がWeb バージョンを表示する場合
* **カスタムパラメーター** – 高度な分析のためにURLにトラッキングデータを追加する

**主要な設定手順：**

1. インスタンス設定でトラッキングサーバーのURLを設定する（v8用のAdobeで管理）
2. 配信プロパティのトラッキングを有効にする
3. 個々のリンクまたはすべてのリンクのトラッキングを自動的に設定します
4. トラッキングの有効期間とログ保持の定義

**ベストプラクティス：** メインオーディエンスに送信する前に、必ずプルーフを使用してトラッキングをテストし、リンクが正しく機能し、データがキャプチャされていることを確認します。

**関連トピック：**

[配信の追跡と監視](../send/tracking.md) | [追跡リンクの設定](../send/tracked-links.md) | [ トラッキングのテスト ](../send/testing-tracking.md)

+++

+++ メール配信品質の設定方法は？

電子メールの配信品質は、技術的な設定、コンテンツの品質、送信者のレピュテーションによって異なります。 Campaign v8には、受信トレイの配置を最適化するためのツールと設定が用意されています。

**必須の設定手順：**

* **ドメイン認証** - SPF、DKIM、DMARC レコードを設定して、送信ドメインを検証します
* **IP ウォーミング** – 新しいIPでの送信ボリュームを徐々に増やしてレピュテーションを構築します
* **送信者の設定** – 一貫した認識可能な送信者アドレスと名前を使用する
* **バウンス管理** - ハードバウンスとソフトバウンスを自動的に処理するように強制隔離ルールを設定します
* **フィードバックループ** - スパムレポートを管理するための苦情処理の設定

**コンテンツのベストプラクティス：**

* SpamAssassinでメールをテストして、迷惑メールのスコアを確認する
* 適切なテキストと画像の比率を維持
* HTMLとプレーンテキストバージョンの併用
* 購読解除リンクを常に提供する
* スパムトリガーの単語や大文字の過剰な使用を避ける

**監視：** Campaignの配信品質レポートを使用して、直帰率、苦情率、受信トレイの到達率を追跡します。 Campaign v8の場合、Adobeはインフラストラクチャレベルの配信品質の最適化を提供します。

**関連トピック：**

[Campaignでの配信品質について](../send/about-deliverability.md) | [配信品質のベストプラクティスガイド ](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}

+++

+++ 外部データベースに保存されているデータにアクセスするにはどうすればよいですか？

Campaign v8は、Campaign データモデルを変更することなく、外部データベースに保存されているデータをクエリして使用するためのFederated Data Access （FDA）を提供します。 外部アカウントを設定し、ワークフロー、クエリ、ターゲティングでFDAを使用して、外部データとCampaign プロファイルを組み合わせます。

FDAの可用性と接続要件は、デプロイメントとライセンスによって異なります。 サポートされているデータベースと必要なバージョンを互換性マトリックスで確認します。

**関連トピック：**

[FDA接続の設定](../connect/fda.md) | [互換性マトリックス ](compatibility-matrix.md)

+++

+++ Campaign を接続できる外部データベースはどれですか？

Campaign v8は、主要なエンタープライズデータベースシステム（クラウドデータベース、エンタープライズデータベース、データウェアハウス、ビッグデータプラットフォーム）へのFederated Data Access （FDA）接続をサポートしています。

サポートされるデータベースのバージョンと接続要件は異なります。 Campaign v8 バージョンの[互換性マトリックス ](compatibility-matrix.md)を確認して、特定のデータベースのサポートを確認し、FDA コネクタの適切なライセンスを確認してください。

[FDA接続の設定](../connect/fda.md)を参照してください

+++

+++ Adobe Campaignは、CRM システムと連携できますか？

はい。 Adobe Campaignでは、主要なCRM システムとの双方向同期のためにネイティブのCRM コネクタを提供しています。 連絡先データ、リード、アカウント、配信ログ、トラッキングデータ、エンゲージメント指標を同期できます。 スケジュール、手動、リアルタイム（API経由）の同期モードをサポートします。

CampaignのCRM コネクタアシスタントを使用して、フィールドのマッピング、テーブルの選択、同期のスケジュールを行います。 サポートされているCRM バージョンについては、[互換性マトリックス ](compatibility-matrix.md)を確認してください。

**関連トピック：**

[CRM コネクタ設定](../connect/crm.md) | [ ワークフローCRM アクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/crm-connector.html){target="_blank"}

+++

+++ クライアントコンソールのキャッシュをクリアするにはどうすればよいですか？

クライアントコンソールのキャッシュをクリアすると、表示と機能に関する多くの一般的な問題が解決されます。 キャッシュには、破損したり古くなったりする場合があるローカル設定ファイルが格納されます。

**キャッシュをクリアするタイミング：**

* 新しいブランディング要素（ロゴ、カラー）が正しく表示されない
* エクスポート／インポート機能に予期せずエラーが発生する
* 設定の変更後にインターフェイス要素が更新されない
* パフォーマンスの問題またはコンソールの応答が遅い
* 新しいクライアントコンソールバージョンにアップグレードした後

**キャッシュをクリアする手順：**

1. Campaign クライアントコンソールを開きます
2. **[!UICONTROL ファイル]**&#x200B;メニューに移動します
3. 「**[!UICONTROL ローカルキャッシュをクリア…]**」を選択します
4. プロンプトが表示されたら、アクションを確認します
5. クライアントコンソールを再起動します

**問題が解決しない場合（詳細）:**

クライアントコンソールを閉じてから、ユーザープロファイルからローカルキャッシュファイルを手動で削除します。

**手動キャッシュ クリーンアップ （Windows）:**

1. クライアントコンソールで、**[!UICONTROL ファイル]** > **[!UICONTROL ローカルキャッシュをクリアする…]**&#x200B;を選択します。
2. ログアウトして、クライアントコンソールを閉じます。
3. Windowsのバージョンに基づいてキャッシュの場所に移動します。 Windows 10の場合：`C:\Users\<Username>\AppData\Roaming\Neolane\NL_5\`
4. `nlclient-config-<alphanumerical>.xml` ファイルと関連するフォルダーを削除します。

>[!IMPORTANT]
>
>`nlclient_cnx.xml`を削除しないでください。

Adobe サポートでは、お使いのバージョンとOSの適切なキャッシュの場所を確認し、安全な手動クリーンアップを実施できます。

詳しくは、[ クライアントコンソールのインストールと設定](connect.md)を参照してください

+++

+++ Adobe CampaignはLDAPと統合できますか？

いいえ。 Campaign v8はLDAP統合をサポートしていません。 Adobe IMSは、認証（Adobe IDまたはFederated ID）を使用します。 Campaign Classic v7から移行する場合は、サポートされていない機能と認証の変更を確認してください。

**関連トピック：**

[Campaign v8](connect.md)への接続| [v8](v7-to-v8.md#gs-removed)でサポートされていない機能

+++

+++ ユーザーインターフェイスの設定はできますか？

はい。 キャンペーン管理者は、組織のブランディングに合わせてユーザーインターフェイスをカスタマイズし、ユーザーエクスペリエンスを最適化できます。 インスタンスまたはユーザーレベルで設定を行います。

**カスタマイズできること：**

* **ブランディング** - ロゴ、カラー、ビジュアル ID要素
* **既定のビュー** - ホームページ レイアウト、フォルダー構造の表示
* **設定を一覧表示** - デフォルトの列、並べ替え順序、データリスト内のフィルター
* **ナビゲーション** – 使用可能なメニュー項目とショートカット
* **地域の設定** – 日付/時刻の形式、数値の形式、タイムゾーン
* **通知** - メールアラート、アプリ内通知、ワークフローアラート

**設定レベル：**

* **インスタンス全体** – すべてのユーザーに適用（管理者権限が必要）
* **ユーザー固有** – 個人設定と個人設定

**関連トピック：**

[UI設定の設定](../config/ui-settings.md) | [ ユーザー権限](gs-permissions.md)

+++

+++ カスタムフィールドとカスタムテーブルを作成できますか？

はい。 Adobe Campaignの柔軟なデータモデルを利用すれば、組み込みのスキーマをカスタムフィールドで拡張し、まったく新しいテーブルを作成して特定のビジネスニーズに対応できます。

**カスタマイズできること：**

* **既存のテーブルにフィールドを追加** - ロイヤルティポイント、カスタム設定、外部IDを使用して受信者テーブルを拡張
* **新しいカスタムテーブルを作成** – 商品、トランザクション、ロイヤルティ層、カスタムエンティティを保存する
* **関係を定義** - カスタムテーブルを既存のCampaign テーブルにリンクする
* **フォームを拡張** - UIを更新してカスタムフィールドを表示および編集する

**一般的な使用例：**

* 追加のプロファイル属性（顧客生涯価値、優先ストア、VIPステータス）を保存
* カスタム属性で商品カタログを管理する
* カスタムイベントとインタラクションの追跡
* データ同期用の外部システム IDの統合
* 業界固有のデータモデルを構築（小売、金融、旅行）

**関連トピック：**

[ データモデルの拡張](../dev/extend-schema.md) | [ スキーマ構造](../dev/schemas.md) | [ データモデルのベストプラクティス ](../dev/datamodel-best-practices.md)

+++

## レポート {#reporting}

組み込みレポート、カスタムレポート、キューブなどのデータ分析ツールなど、Adobe Campaignのレポート機能に関するインサイトを獲得できます。

+++ 新しいレポートを作成するにはどうすればよいですか？

Adobe Campaignでは、組み込みレポート、記述分析、クライアントコンソールでのカスタムレポート、キューブなど、ニーズや技術的な専門知識に応じて、複数のレポートオプションが用意されています。

**レポートのオプション：**

* **組み込みレポート** - **[!UICONTROL レポート]** タブからアクセス可能な、すぐに使用できる配信、キャンペーン、追跡レポート
* **記述分析** - ウィザード駆動型のインターフェイスを使用して、任意のデータに関するクイック統計レポート
* **カスタムレポート** - レポートエディターを使用して、技術ユーザーが作成した高度なレポート
* **キューブ** – 多次元データ探索とピボットテーブル分析

**重要：** Campaignは、専用のビジネスインテリジェンスツールではなく、マーケティングオペレーションレポート用に設計されています。 複雑な分析ニーズに対応するには、Adobe Analyticsや専用のBI ツールとの統合を検討しましょう。

**関連トピック：**

[ レポートの基本を学ぶ](../reporting/gs-reporting.md) | [Campaign Web UI レポート ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/reports/gs-reports){target="_blank"}

+++

+++ 母集団に関する統計レポートを設計して共有するにはどうすればよいですか？

Campaignの記述的分析ツールを使用すれば、あらゆる母集団データに関する統計レポートを迅速に生成できます。 このウィザード駆動機能は、技術的な専門知識がなくても、分布、傾向、パターンを分析するのに役立ちます。

**分析できる項目：**

* 受信者のデモグラフィック情報とセグメンテーションの分類
* キャンペーンのパフォーマンス指標と応答率
* プロファイル属性の分布（年齢、場所、嗜好）
* 配信の統計およびエンゲージメントパターン
* カスタムフィールド値とデータ品質指標

**作成方法：**&#x200B;任意のリストまたはクエリ結果を選択する→ **[!UICONTROL アクション/分析]**&#x200B;を右クリック→る→分析タイプ（定性または定量的）を選択する→ レポートを生成する表示オプションを設定→ます。

**共有：** レポートをExcel/PDFに書き出すか、**[!UICONTROL Reports]** フォルダーに保存して、適切な権限を持つチームアクセス用に保存します。

[記述分析](../reporting/built-in-reports.md)の詳細

+++

+++ データに関する高度なレポートを設計するにはどうすればよいですか？

クライアントコンソールを使用して、複雑な分析機能を備えた高度なカスタムレポートを作成できます。

クライアントコンソールでは、次のことができます。

* SQL クエリとカスタム計算を使用して、複雑なレポートを作成します
* チャート、テーブル、ピボットテーブルを使用したマルチページレポートの作成
* 条件付きフォーマットと動的コンテンツのデザイン
* Campaign データモデルと外部データベース（FDA）へのアクセス

[ カスタムレポートの作成方法（クライアントコンソール） ](../reporting/custom-reports.md)について説明します

+++

+++ キューブとは何か？また、レポートにどのように使用できますか？

キューブは、ビジネスユーザーが技術スキルを持たずにピボットテーブルを通じてCampaign データを探索および分析できる多次元データ構造です。 複雑なレポートを簡素化するための、事前設定済みのデータモデルだと考えてください。 このレポートツールは、クライアントコンソールとCampaign Web UIの両方で使用できます。

* テクニカルユーザーは、ディメンション（時間、地域、チャネル）と測定（開封数、クリック数、収益）を定義するキューブを作成し、設定します
* ビジネスユーザーは、レポートの作成時にキューブを選択し、ディメンションをドラッグ&amp;ドロップしてデータを調査します
* データは自動的に集計され、キューブ設定にもとづいて計算されます
* 結果は、ピボットテーブル、グラフとして表示したり、Excelに書き出したりできます

[ キューブを使用してデータを探索する方法](../reporting/gs-cubes.md)を学ぶ

+++

+++ オンライン調査に対する回答からレポートを作成できますか？

はい！ Campaignには、オンラインアンケートを作成したり、アンケート回答に関する組み込みのレポートを生成したりできるアンケートモジュールが含まれています。

**重要：**&#x200B;調査の管理は、Campaign v8 Enterprise （FFDA）のデプロイメントでは使用できません。 [詳細情報](../architecture/enterprise-deployment.md)。

**調査機能：**

* 複数のページと質問タイプを使用して、オンラインアンケートを作成できます
* データベースまたはローカル変数での応答の収集
* アンケートへの回答をリアルタイムで確認
* アンケートの回答（質問ごとの内訳、一般的な統計）に関する専用レポートを生成します
* アンケート回答をExcel、PDF、CSVにエクスポートして詳細な分析を行うことができます
* ターゲティングワークフローで調査データを使用して、キャンペーンをパーソナライズする

**高度な分析：**

* **[!UICONTROL 回答]** タブからアンケート回答にアクセスし、データを書き出します
* ワークフローの&#x200B;**[!UICONTROL アンケート回答]** アクティビティを使用して、受信者の回答に基づいて受信者をターゲティングします
* 調査データを他のキャンペーンデータと組み合わせて、セグメンテーションとパーソナライゼーションを実施できます
* 多次元調査分析用のカスタムレポートとキューブの作成

**関連トピック：**

[調査の開始](https://experienceleague.adobe.com/en/docs/campaign-classic/using/online-surveys/about-surveys){target="_blank"} | [調査レポート ](https://experienceleague.adobe.com/en/docs/campaign-classic/using/online-surveys/publish-track-and-use-collected-data#reports-on-surveys){target="_blank"}

+++

+++ レポートへのアクセスを共有するにはどうすればよいですか？

Campaignのフォルダー権限と名前付き権限を使用して、レポートの表示を制御します。

**アクセス制御方式：**

* **フォルダー権限** - ユーザーグループに適切なアクセス権を持つフォルダーにレポートを配置します
* **名前付き権限** - レポートの表示、作成、変更を行う権限を割り当てます
* **表示コンテキスト** - レポートの表示場所を定義（レポートフォルダー、キャンペーンタブ、配信画面）

**設定：** レポートを特定のフォルダーに保存→、オペレーターグループのフォルダーアクセスを設定→、レポートのプロパティと表示コンテキストを定義します。

**関連トピック：**

[ カスタムレポート ](../reporting/custom-reports.md) | [ ユーザー権限](gs-permissions.md)

+++

+++ レポートを異なる形式で書き出すことはできますか？

はい。Campaignは、クライアントコンソールとWeb UI レポートの両方で複数の書き出し形式をサポートしており、関係者と簡単に共有したり、他のツールと統合したりできます。

**使用可能な書き出し形式：**

* **Excel （.xlsx）** - データ操作、詳細分析、ピボットテーブルに最適
* **PDF** - プレゼンテーション、エグゼクティブ サマリー、印刷されたレポートに最適
* **CSV** – 他のシステムやBI ツールへのデータのインポートに最適
* **OpenDocument （.ods）** - オープンソース スプレッドシート形式
* **XML** - システム統合と自動処理の場合

**書き出し方法：**

* **クライアントコンソール：** レポートを開く→ **[!UICONTROL 書き出し]** ボタンをクリック → ファイルを保存する形式→選択
* **Web UI:** ダッシュボードを開く→書き出しアイコンをクリック →形式を選択→ ダウンロード
* **自動書き出し：**&#x200B;書き出しアクティビティを持つワークフローを使用して、定期的な書き出しをスケジュールします

**ベストプラクティス：**

* 関係者の分析と注釈が必要なレポートにExcelを使用する
* 経営陣に送信したり、コンプライアンスのためにアーカイブ化した静的レポートにPDFを使用する
* データウェアハウスや外部分析ツールとの統合にCSVを使用する
* 書き出されたレポートをテストして、フォーマットとデータの正確性を確保

**関連トピック：**

[ カスタムレポート ](../reporting/custom-reports.md) | [Campaign Web UI レポート ](https://experienceleague.adobe.com/en/docs/campaign-web/v8/reports/gs-reports){target="_blank"}

+++

## デベロッパー {#developers}

データモデルの詳細、スキーマ、API、カスタマイズ機能など、開発者向けの技術情報にアクセスできます。

+++ Campaign データモデルとは何ですか？

Campaignのデータモデルは、ビジネスニーズに合わせて拡張できるビルトインテーブル（受信者、配信、キャンペーン）で構成される、スキーマ駆動型のリレーショナルデータベース構造です。

**主要な概念：** スキーマ （XML定義）、組み込みテーブル、リンク （関係）、列挙（値リスト）、拡張機能（カスタムフィールド/テーブル）。

**メインスキーマ：**&#x200B;受信者（`nms:recipient`）、配信（`nms:delivery`）、ワークフロー（`xtk:workflow`）、キャンペーン（`nms:operation`）、トラッキングログ。

データモデルを理解することは、ワークフロー、クエリ、スキーマ拡張機能、統合に不可欠です。

**関連トピック：**

[ キャンペーンデータモデル ](../dev/datamodel.md) | [ データモデルのベストプラクティス ](../dev/datamodel-best-practices.md)

+++

+++ Campaign スキーマの操作方法は？

スキーマは、Campaignのデータ構造をXML形式で定義し、テーブル構造、フィールドプロパティ、関係、インデックス、アクセス制御を指定します。

**スキーマの操作：**

* **表示：** **[!UICONTROL 管理/設定/データスキーマ]**&#x200B;経由のアクセス
* **拡張：**&#x200B;拡張スキーマ （例：`cus:recipient`）を作成して、コアスキーマを変更せずにカスタムフィールドを追加します
* **作成：** ビジネス固有のデータ用に新しいテーブルを作成します
* **更新：** **[!UICONTROL ツール/詳細/データベース構造を更新]**&#x200B;を介して変更を適用します

**一般的な用途：**&#x200B;受信者テーブルにカスタムフィールドを追加する、カスタムテーブルを作成する、関係を定義する、ビジネス固有のモデルを実装する。

**重要：**&#x200B;組み込みスキーマを直接変更しないでください。 アップグレードの互換性を保つために、拡張スキーマを常に使用する。

**関連トピック：**

[ スキーマの基本を学ぶ](../dev/schemas.md) | [ スキーマを拡張](../dev/extend-schema.md)

+++

+++ カスタム受信者テーブルの使用方法は？

B2B アカウント、個別の加入者データ、外部システム、マルチブランドアーキテクチャをターゲットにする場合は、標準の受信者テーブルの代わりにカスタム受信者テーブルを使用します。

**実装：**&#x200B;必須フィールド（電子メール、プライマリキー、除外）を使用してカスタムスキーマを作成→、ターゲットマッピングを設定→配信テンプレートを更新→ ワークフロー/クエリを適応させます。

**重要な考慮事項：**&#x200B;必要な配信フィールド、ワークフロー/フォームの適応、実稼動移行の前に重要なテストを含める必要があります。

**ベストプラクティス：**&#x200B;最初に標準の受信者テーブルを拡張します。 複雑さが増すため、本当に必要な場合にのみカスタムテーブルを使用してください。

**関連トピック：**

[ カスタム受信者テーブル ](../dev/custom-recipient.md) | [ ターゲットマッピング ](../audiences/target-mappings.md)

+++

+++ Campaign でクエリを定義するためのベストプラクティスは？

Campaignのクエリエディターは、ワークフローアクティビティ、配信ターゲティング、リスト、レポート、フィルターなどで使用される、SQLを使用せずにデータベースクエリを視覚的に構築します。

**ベストプラクティス：**

* シンプルなスタート – 段階的に構築し、各ステップをテストする
* フィルタリングディメンションの使用 – テーブルの関係を活用
* パフォーマンスの最適化 – クエリされたフィールドをインデックス化し、複雑な計算を回避します
* 定義済みフィルターを再利用して一貫性を維持
* 最初に小さなサンプルでテストします
* 複雑なクエリのドキュメント化

**共通パターン：** ターゲット配信の開封者、非アクティブな連絡先の検索、行動によるセグメント化、以前の受信者の除外。

**アクセス：** **[!UICONTROL ツール/汎用クエリエディター]**&#x200B;で、高度な探索を実行できます。

**関連トピック：**

[ クエリエディター](../start/query-editor.md) | [ クエリアクティビティ ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"}

+++

+++ データパッケージをインポートするにはどうすればよいですか？

**[!UICONTROL ツール/詳細/パッケージを読み込み]**&#x200B;経由でパッケージをクライアントコンソールに読み込みます。 パッケージには、インスタンス間でデプロイするためのCampaign設定（スキーマ、ワークフロー、タイポロジ）とデータが含まれています。

**パッケージタイプ：** ユーザーパッケージ （カスタム設定）、Platform パッケージ （Adobe提供）、データパッケージ （実際のデータ）。

**ベストプラクティス：**&#x200B;開発環境でテストを行い、インポート前にバックアップし、同じバージョンまたは古いバージョンからエクスポートします。

詳細については、[ データパッケージの操作](../dev/packages.md)を参照してください。

+++

+++ Campaign v8 APIのリストはどこで確認できますか？

Campaign v8には、SOAP API （クライアントコンソール操作）、REST API （最新の統合）、JavaScript API （ワークフロースクリプト）が用意されています。

**一般的な用途：** CRM/ERPとの統合、キャンペーンの自動化、データの同期、監視ソリューションの構築、外部インターフェイスの作成。

**アクセス：** [Campaign v8 API ドキュメント ](https://experienceleague.adobe.com/developer/campaign-api/api/index.html?lang=ja){target="_blank"}

+++


+++ APIからワークフローを監視するにはどうすればよいですか？

Campaign APIを使用すると、開始、一時停止/再開、停止、クエリステータス、ログの取得、アクティビティの進行状況の監視などのワークフローをプログラムで制御できます。

**API エンドポイント：** `POST https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<workflowID>/commands`

**コマンド：** `{"method":"start"}`、`{"method":"pause"}`、`{"method":"resume"}`、`{"method":"stop"}`

**ユースケース：**&#x200B;監視ダッシュボードの構築、自動アラートの実装、外部スケジューラーからのオーケストレーション、インスタンス間での依存関係の作成、カスタムレポートの生成。

**ベストプラクティス：** API モニタリングと監査証跡を組み合わせて、包括的なガバナンスを実現します。

API経由で[ ワークフローを制御](../dev/api/controlling-a-workflow.md)を参照してください

+++

+++ データベース構造を更新するにはどうすればよいですか？

スキーマの変更（フィールドの追加、テーブルの作成、データタイプの変更）後、**[!UICONTROL ツール/詳細/データベース構造の更新]**&#x200B;を使用して物理データベース構造を更新し、変更を適用します。

**必要な場合：** フィールドの追加、テーブルの作成/拡張、フィールドプロパティの変更、リンクの追加/削除、インデックスの作成。

**重要：**&#x200B;最初にバックアップ、開発中テスト、大規模な変更のダウンタイムの計画、Adobe サポート（Managed Cloud Services）との調整、いくつかの変更がデータ損失の原因となる可能性があることに注意してください。


**関連トピック：**

[ データベース構造の更新](../dev/update-database-structure.md) | [ スキーマの拡張](../dev/extend-schema.md)

+++

## プライバシー {#privacy}

Adobe Campaignで、GDPRやCCPAなどのプライバシー規制への準拠やデータ主体の要求の管理をどのように支援するのかをご確認ください。

+++ Campaignの主要なプライバシー概念は何ですか？

Adobe Campaignは、データ主体の権利、同意、データ保持を管理するツールにより、プライバシー規制（GDPR、CCPA、PDPA、LGPD）への準拠を支援します。 主な概念には、プライバシー規制、個人データの識別、データ主体の権利（アクセス、削除、ポータビリティ）、同意管理、データ保持ポリシーなどがあります。

データ管理者は、データ主体の要求を処理し、同意記録を維持し、透明性のあるデータ使用を保証する責任があります。

[ プライバシー管理](../start/privacy.md)の詳細

+++

+++ Campaignでプライバシーコンプライアンスを確保するにはどうすればよいですか？

Campaignはプライバシーコンプライアンスのためのツールを提供しますが、法的責任を負うのは利用者です。 法務担当者と連携し、プライバシープログラムを管理できます。

**必須アクション：**

* データ主体の要求（アクセス、削除）を処理するプロセスを確立する
* タイムスタンプとスコープ追跡による同意管理の導入
* すべてのマーケティングメールに登録解除リンクを含める
* データソースの監査と未使用データの削除
* 最小権限アクセス制御の適用

Adobe Campaignは、Privacy Core Serviceとの統合、同意の追跡、自動削除ワークフロー、コンプライアンスを確保するための監査証跡などを提供します。

[ プライバシー管理](../start/privacy.md)の詳細

+++

+++ Campaignでユーザーの同意を収集および管理するにはどうすればよいですか？

有効な同意を得るには、有効かつ具体的で、情報を得た上で取り消し可能な契約を締結する必要があります。 利用者は、事前にオンになっているチェックボックスをオンにしたり、同意として黙ったりするなど、明示的な行動を取る必要があります。 異なる目的のために同意を個別に行い（バンドル解除）、明確な説明を提供し、タイムスタンプ付きのレコードを管理します。

**ベストプラクティス：**&#x200B;詳細なオプトインオプションを提供し、同意を定期的に更新し、プリファレンスセンターに簡単にアクセスできるようにし、信頼を構築する目的で同意をフレーム化します。

**Campaignでの技術的な実装：**

Campaignは、同意を追跡するためのサブスクリプションサービス、プリファレンスセンター、オプトアウトフラグ、カスタム同意フィールドを提供します。

* 同意フィールド（日付、タイプ、ソース）の受信者スキーマの拡張
* 同意タイプごとにサブスクリプションサービスを作成する
* プリファレンスセンターweb フォームの作成
* ワークフローを使用してターゲティングにおける同意を強制する
* 監査記録の管理

法務担当者に相談して、CDPの導入が規制要件を満たしていることを確認します。

**関連トピック：**

[ サブスクリプションサービス ](../start/subscriptions.md) | [ プライバシーと同意](../start/privacy.md#consent-retention-roles) | [ プライバシー管理](../start/privacy.md)

+++

+++ 削除リクエストを処理すると、どのデータが削除されますか？

Campaignは、データ主体にリンクされたすべてのデータ（受信者プロファイル、配信およびトラッキングログ、所有権に関するカスタムデータ、サブスクリプション履歴）を自動的に削除します。

**仕組み：** Campaignは、受信者へのリンクがスキーマ定義の`integrity="own"`を持つすべてのデータを削除し、関連するテーブル間でカスケーディング削除を確実にします。

スキーマのリンクの整合性を変更することで、削除範囲をカスタマイズできますが、最初に法務担当者に相談してください。 削除は永続的であり、元に戻すことはできません。

**関連トピック：**

[ プライバシー管理](../start/privacy.md) | [ スキーマリンク ](../dev/schemas.md)

+++

+++ プライバシーの削除は配信レポートに影響しますか？

いいえ。 キャンペーンレポートは、個々のログに対するライブクエリではなく、事前に計算された集計指標（送信数、開封数、クリック数）にもとづいて作成されます。 個々の受信者データを削除しても、過去の集計統計は変更されません。

全体的な配信統計とパフォーマンス指標は維持され、個々のトラッキングログと個人情報は削除されます。 これにより、データ主体の権利を尊重しながら、マーケティング分析を維持することができます。

**関連トピック：**

[ プライバシー管理](../start/privacy.md) | [ レポート ](../reporting/gs-reporting.md)

+++

+++ 削除したデータの再インポートを防ぐにはどうすればよいですか？

Campaignだけでなく、すべてのソースシステムからデータを削除する必要があります。 データは多くの場合、外部システム（CRM、e コマース、データウェアハウス）から転送されます。

**必要なアクション：**&#x200B;すべてのデータソースを識別し、ソースシステムから削除し、除外/抑制リストに追加し、削除フラグを尊重するようにインポートワークフローを更新し、プロセスを文書化します。

データコントローラーは、テクノロジーエコシステム全体での完全なデータ削除を担当します。

**関連トピック：**

[ プライバシー管理](../start/privacy.md) | [ ワークフローの読み込み](../config/workflows.md)

+++

+++ 削除されたユーザーは再びオプトインできますか？

はい。 データ主体は、削除後に再度オプトインできます。 Adobe Campaignでは、以前に削除されたデータへのリンクがないまったく新しい受信者レコードが作成されます。プロファイルはクリーンなスレートから始まります。

Campaignの監査証跡は、削除イベントと新しいプロファイル作成の両方を記録し、コンプライアンスを示し、削除後に新しいオプトインが自由に提供されたことを示しています。

**関連トピック：**

[ プライバシー管理](../start/privacy.md) | [ サブスクリプション ](../start/subscriptions.md)

+++

## 引き続きサポートが必要ですか？ {#get-help}

お探しのものが見つかりませんか？ Adobe Campaign v8を効果的に活用するための関連資料をご紹介します。

### コミュニティサポート

Adobe CampaignのユーザーやAdobeのエキスパートと交流することで、知識を共有し、疑問の答えを見つけることができます。

* **[Adobe Campaign コミュニティ ](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"}** – 質問し、解決策を共有し、Campaign コミュニティとつながる
* **[Experience League フォーラム ](https://experienceleaguecommunities.adobe.com/){target="_blank"}** – すべてのAdobe製品のディスカッションを参照する
* **[Campaign コミュニティオフィスアワー](https://experienceleague.adobe.com/){target="_blank"}** - Adobeのエキスパートとのライブセッションに参加

### ドキュメントと学習

包括的なガイド、チュートリアル、トレーニング資料にアクセスできます。

* **[キャンペーンチュートリアル ](https://experienceleague.adobe.com/docs/campaign-learn/tutorials/overview.html?lang=ja){target="_blank"}** - ステップバイステップのビデオガイドと実践的なチュートリアル
* **[新機能](whats-new.md)** – 最新の機能と機能
* **[リリースノート](release-notes.md)** – 現在および以前のリリース情報
* **[バージョンとアップグレード](upgrades.md)** - Campaignのバージョン、アップグレード、バージョンの確認方法について説明します

### 技術リソース

詳細な技術ドキュメントと開発者リソースをご覧ください。

* **[Campaign API](https://experienceleague.adobe.com/developer/campaign-api/api/index.html?lang=ja){target="_blank"}** - API参照に関する完全なドキュメント
* **[互換性マトリックス](compatibility-matrix.md)** - サポートされているシステムとバージョン
* **[バージョンとアップグレードに関するFAQ](upgrades.md)** - バージョンを確認し、アップグレードについて確認します

### サポート&amp;サービス

Adobe サポートチームのサポートを受けて、インスタンスを管理します。

* **[Adobe Admin Console](https://adminconsole.adobe.com/){target="_blank"}** - サポートケースのログ記録とユーザーの管理
* **[Adobe カスタマーケア ](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html){target="_blank"}** - サポート チームにお問い合わせください
* **[Campaign コントロールパネル](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=ja){target="_blank"}** - Campaign インスタンスの設定を管理します
* **[システムの状態](https://status.adobe.com/){target="_blank"}** - Adobe サービスの状態を確認

### トレーニングと認定制度

Adobeの公式トレーニングや認定プログラムを利用して、スキルを向上させましょう。

* **[Experience League ヘルプ ](https://experienceleague.adobe.com/en/browse/campaign/campaign-v8){target="_blank"}** - Campaign v8 （Web UIおよびクライアントコンソール）のヘルプリソース
* **[Adobe デジタルラーニングサービス ](https://learning.adobe.com/){target="_blank"}** – 公式インストラクター主導の自習型コース
* **[Adobe Campaign認定](https://experienceleague.adobe.com/docs/certification/program/overview.html){target="_blank"}** - プロフェッショナル認定で専門知識を検証する
* **[Experience League ラーニングパス ](https://experienceleague.adobe.com/?lang=ja#dashboard/learning){target="_blank"}** - ガイド付きラーニングジャーニー

### その他の役立つリソース

* **[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/campaign-classic-home.html?lang=ja){target="_blank"}** - Classic v7 ユーザー向けリファレンス
* **[Campaign Web UI ドキュメント ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}** – 新しいweb インターフェイスガイド
* **[配信品質のベストプラクティス ](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}** - メール配信の最適化
