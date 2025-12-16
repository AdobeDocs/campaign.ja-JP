---
title: Campaign v8 に関するよくある質問
description: 設定、設定、メッセージング、ワークフローなどに関するAdobe Campaign v8 のよくある質問への回答を示します
feature: Overview
role: User
level: Beginner
keywords: FAQ, Campaign v8，質問，回答，ヘルプ，サポート，トラブルシューティング
version: Campaign v8
source-git-commit: 9c751429ac3da2a583990ba0d891744353bd65c8
workflow-type: tm+mt
source-wordcount: '10219'
ht-degree: 13%

---

# よくある質問 {#faq}

Adobe Campaign v8 に関するよくある質問への回答を簡単に示します。 使い始めたばかりの場合でも、高度な設定のヘルプを探している場合でも、以下のトピック別に回答が整理されています。

**Campaign を初めて使用する場合基本を学ぶには** はじめに [&#x200B; から &#x200B;](#getting-started) んでください。\
**バージョンに関するヘルプが必要ですか？** バージョン情報とアップグレードプロセスについては、[&#x200B; アップグレード &#x200B;](#upgrades) を確認してください。\
**v7 または Standard から移行しますか？違** と移行ガイダンスについては、[Campaign v8 と以前のバージョン &#x200B;](#v7-differences) を参照してください。\
**技術的なサポートが必要な場合は、** 開発者 [&#x200B; と &#x200B;](#developers) キャンペーン設定 [&#x200B; を &#x200B;](#settings) 認します。\
**答えが見つからない場合は、** [&#x200B; コミュニティフォーラム &#x200B;](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"} または [&#x200B; サポートへのお問い合わせ &#x200B;](#get-help) をご覧ください。

**ヒント：** Ctrl + F （Macの場合は Cmd + F）を使用して、このページ上の特定のキーワードを検索します。 任意の質問をクリックして回答を展開します。


## はじめに {#getting-started}

インストールと接続から最初のキャンペーンの作成まで、Adobe Campaign v8 の使用を開始するための基本事項を説明します。

+++ Adobe Campaign v8 とは

Adobe Campaign v8 は、メール、モバイル、ソーシャル、オフラインの各チャネルをまたいでパーソナライズされたキャンペーンを作成、調整、配信するのに役立つ、強力なクロスチャネルマーケティング自動処理プラットフォームです。 堅牢なマーケティングデータベース、キャンペーンオーケストレーションエンジン、リアルタイムインタラクション機能を組み合わせて、ジャーニー全体を通じて顧客を引き付けます。

**主な機能：** マルチチャネルキャンペーン管理、オーディエンスのセグメント化とターゲティング、ワークフローの自動化、大規模なパーソナライゼーション、リアルタイムおよびバッチメッセージング、レポートと分析、Adobe Experience Cloudとの統合。

**v8 の独自点：** クラウドネイティブアーキテクチャ（Managed Cloud Services のみ）、Snowflake データベースを活用した大規模法人のパフォーマンス、自動アップグレード、セキュリティの強化、Adobe Experience Platformとの双方向統合。

**次に最適：** 複数のチャネルと顧客タッチポイントにわたる複雑で大量のキャンペーンを管理するエンタープライズマーケティングチーム。

**関連トピック：**

[Campaign v8 製品の説明 &#x200B;](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target="_blank"} | [v8 の新機能 &#x200B;](whats-new.md) | [&#x200B; はじめる前に &#x200B;](get-started.md)

+++

+++ Campaign はどのようにしてダウンロードできますか？

インストールプログラムとクライアントコンソールは、Adobe ダウンロードセンターから入手できます。

管理者ユーザーの場合は、Adobe[&#x200B; ソフトウェア配布 &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/jp/campaign.html){target="_blank"} にアクセスして、Adobe Campaignをダウンロードします。

Distribution Center については [&#x200B; このページ &#x200B;](https://experienceleague.adobe.com/docs/experience-cloud/software-distribution/home.html?lang=ja){target="_blank"} を参照してください。

+++

+++ Campaign v8 に接続するにはどうすればよいですか？

Adobe Campaignに接続するには、Campaign クライアントコンソールをダウンロードしてインストールする必要があります。 [詳細情報](connect.md)。

Campaign v8.6 リリース以降では、Adobe Experience Cloudの一元化された環境から使用できる **Campaign web ユーザーインターフェイス** にアクセスできます。 Experience Cloudは、Adobeのデジタルマーケティングアプリケーション、製品およびサービスの統合ファミリーです。

Adobe Experience Cloudに接続し、Adobe Campaign web インターフェイスにアクセスする方法については、このページ [&#x200B; を参照し &#x200B;](campaign-ui.md#ac-web-ui) ください。 詳しくは、[Adobe Campaign web ユーザーインターフェイスドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}を参照してください。


**関連トピック：**

[&#x200B; クライアントコンソールのインストール &#x200B;](connect.md) | [Campaign ユーザーインターフェイス &#x200B;](campaign-ui.md) | [&#x200B; ユーザー権限 &#x200B;](gs-permissions.md)

+++

+++ Adobe IDを使用して Campaign v8 に接続できますか？

はい！ IMS （Adobe Identity Management System）との統合により、ユーザーはAdobe IDを使用してAdobe Campaign コンソールに接続できます。 統合には次のメリットがあります。

* Experience Cloud のすべてのソリューションに同じ ID を使用できます。
* Adobe Campaign で異なる統合を使用する場合にも、接続が記憶されます。
* パスワード管理ポリシーをよりセキュアにできます。
* Federated ID アカウント（外部の ID プロバイダー）を使用します。

Adobe IDを使用した Campaign v8 へのアクセスについては、[&#x200B; 詳細情報 &#x200B;](connect.md) を参照してください。

+++

+++ Campaign ユーザーインターフェイスについて知っておくべき概念は何ですか？

Adobe Campaignのユーザーインターフェイスの基本について詳しくは、[&#x200B; この節 &#x200B;](campaign-ui.md) を参照してください。

Campaign v8.6 リリース以降では、Adobe Experience Cloudの一元化された環境から使用できる新しい **Campaign web ユーザーインターフェイス** にもアクセスできるようになりました。

[&#x200B; 詳しくは、Adobe Campaign Web ユーザーインターフェイスのドキュメントを参照してください &#x200B;](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}。

+++

+++ ユーザー権限を設定するにはどうすればよいですか？

Campaign 管理者は、組織のユーザーに対して権限を設定できます。

以下は、各種の権限や制限によって承認または拒否できる操作です。

* 特定の機能へのアクセス
* 特定のデータへのアクセス
* データの作成、変更、削除

**関連トピック：**

[&#x200B; 権限の概要 &#x200B;](gs-permissions.md) | [&#x200B; ユーザー権限の管理 &#x200B;](manage-permissions.md) | [&#x200B; フォルダーに対する権限の追加 &#x200B;](folder-permissions.md)

+++

+++ メッセージのオーディエンスを選択するにはどうすればよいですか？

Campaign では、メッセージに適したオーディエンスを選択するための複数のターゲティング方法を提供しています。

**ターゲティングメソッド：**

* **クエリエディター** – 受信者の属性、行動または人口統計に対する視覚的なフィルターを使用して、オーディエンスを作成します
* **リスト** – 事前定義済みの静的または動的な受信者リストを使用します
* **ファイルインポート** - 1 回限りのキャンペーン用の外部受信者ファイルをアップロードします
* **ワークフロー** - クエリ、分割、エンリッチメントアクティビティを使用して、複雑なターゲティングロジックを作成します
* **定義済みフィルター** – すぐに使用できるフィルター（アクティブな顧客、購読者、VIP）を適用します
* **Adobe Experience Platformのセグメント** – 統合プロファイルとリアルタイムセグメントを活用します

複数の条件（場所、購入履歴、エンゲージメント）を組み合わせ、除外、交点、結合を使用して、オーディエンスを絞り込むことができます。

**関連トピック：**

[Campaign v8 でのオーディエンスの定義 &#x200B;](../audiences/gs-audiences.md) | [&#x200B; クエリエディター &#x200B;](query-editor.md) | [&#x200B; ターゲットマッピング &#x200B;](../audiences/target-mappings.md)

+++

+++ 最初のメールを作成し送信するにはどうすればよいですか？

Campaign v8 で最初のメールを作成するのは簡単です。 テンプレートから開始し、ターゲットオーディエンスを選択し、パーソナライゼーションを使用してコンテンツをデザインし、配達確認を使用してテストしてから、送信します。 Campaign には、メール作成用の 2 つのインターフェイスがあります。高度なユーザー向けのフル機能の **クライアントコンソール** と、メールをより迅速かつ直感的に作成するための最新の **Campaign web UI** です。

**5 の主な手順：**

1. **配信を作成** - メールテンプレートから開始するか、最初から作成します
2. **オーディエンスを定義** - クエリ、リストまたはワークフローを使用して受信者を選択します
3. **コンテンツのデザイン** - E メールデザイナーを使用して、パーソナライゼーションフィールドを使用したメッセージを作成します
4. **テスト配達確認の送信** - デバイスやメールクライアントをまたいでレンダリングとコンテンツを検証します
5. **分析と送信** – 配信分析を実行してエラーを確認し、メールを送信します

**関連トピック：**

[&#x200B; メールの設計と検証 &#x200B;](../send/email.md) | [&#x200B; 最初の配信を作成 &#x200B;](create-message.md) | [&#x200B; 配信テンプレート &#x200B;](../send/create-templates.md) | [&#x200B; コンテンツのパーソナライズ &#x200B;](../send/personalize.md)

+++

+++ エラーメッセージを翻訳するにはどうすればよいですか？

エラーメッセージが外国語で表示されましたか？すべてのエラーメッセージとその翻訳のリストは、[このページ](https://experienceleague.adobe.com/developer/campaign-errors/error_codes.html?lang=ja){target="_blank"}に掲載されています。

+++

+++ 問題をログに記録するにはどうすればよいですか？

Adobe カスタマーサポートに連絡するには、[Adobe Admin Console](https://adminconsole.adobe.com/overview){target="_blank"} に接続して、ケースを作成するか、チャットセッションを開始します。

正しい権限を持つ個々のアカウントが必要です。 ログインできない場合は、Experience Leagueからアクセスをリクエストします。 [詳細情報](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html){target="_blank"}

または、[&#x200B; キャンペーンコミュニティ &#x200B;](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"} に参加して回答を検索したり、エキスパートに質問したりできます。

+++

+++ Campaign v8 と互換性があるシステムやコンポーネントはどれですか？

[Adobe Campaign 互換性マトリックス](compatibility-matrix.md)で、Campaign の最新ビルドでサポートされているすべてのシステムとコンポーネントのリストを入手できます。

+++

+++ Campaign v8 を他のAdobe ソリューションと一緒に使用できますか？

はい。Campaign v8 は、Adobe Experience Cloud ソリューションとシームレスに統合され、統合されたマーケティングエコシステムを実現します。

**主な統合：** Adobe Experience Platform（統合プロファイル、リアルタイムデータ）、Adobe Analytics（パフォーマンス測定）、Adobe Target（パーソナライゼーション）、Adobe Experience Manager（コンテンツ管理）、Adobe Audience Manager（オーディエンスセグメント）。

**設定：** Adobe IMS認証が必要で、Campaign v8 Managed Cloud Services 用に自動的に設定されます。

**関連トピック：**

[Adobe Campaignの統合 &#x200B;](../connect/integration.md) | [Adobe IDとつながる &#x200B;](connect.md)

+++

+++ Campaign v8 の制限事項

Campaign v8 ではパフォーマンスが大幅に向上しますが、Campaign Classic v7 とはアーキテクチャ上の違いがいくつかあります（特に FFDA デプロイメントの場合）。

**主な考慮事項：**

* **FFDA アーキテクチャ** – 異なるデータアクセスパターンを持つクラウドデータベース（Snowflake）を使用します。
* **データ更新** - データベースへの直接アクセスではなく、ワークフローで実行する必要があります
* **バッチ最適化** – 頻繁な個別アップデートではなく、バッチ操作に最適化されます。
* **FFDA では使用できません** – 調査、マーケティングリソース管理（MRM）、いくつかの特定のコネクタ

**移行への影響：** ダイレクトデータベースの書き込みを使用したカスタムコードにはリファクタリングが必要です。API 統合には、バッチ処理への適応が必要になる場合があります。

Adobeが v8 を強化するにつれて、これらの制限は進化しています。 現在のステータスについては、最新のドキュメントを参照してください。

**関連トピック：**

[Campaign v7 から v8 への移行 &#x200B;](../start/v7-to-v8.md#limitations) | [FFDA アーキテクチャ &#x200B;](../architecture/enterprise-deployment.md)

+++

+++ Campaign Classic v7 ユーザーは、Campaign v8 に移行できますか？

既存の Campaign Classic v7 環境からの自動移行はまだ利用できません。

Campaign v8 は、現在 Managed Cloud Service として&#x200B;**のみ**&#x200B;利用できます。オンプレミス環境またはハイブリッド環境にデプロイすることはできません。

移行プロセスについて詳しくは、アドビ担当者にお問い合わせください。

詳しくは、[Campaign v8 と以前のバージョン &#x200B;](#v7-differences) の節を参照してください。

+++


## アップグレード回数 {#upgrades}

Campaign のバージョンを確認する方法、アップグレードプロセスを理解する方法、新しいリリースについて常に情報を得る方法について説明します。 Campaign v8 Managed Cloud Services は、中断を最小限に抑えながら自動的にアップグレードを処理します。

+++ 使用している Campaign のバージョンを確認する方法はありますか？ 

Campaign クライアントコンソールの&#x200B;**ヘルプ／バージョン情報**&#x200B;メニューで、お使いの[バージョンおよびビルド番号](upgrades.md#version)を確認できます。

+++

+++ Campaign を最新版にアップグレードするにはどうすればよいですか？

Adobe Campaign は定期的に更新されています。マイナーバージョンは、新機能、改善および修正が加えられ、毎年リリースされています。 さらに、累積的な修正のみを含むビルドを定期的にリリースしています。

この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。 だからこそ、最新バージョンの Adobe Campaign を実行することが重要であると考えているのです。

**メモ：** Managed Cloud Services ユーザーの場合は、Adobeが新しいリリースを提供し、インスタンスをアップグレードします。

詳細情報 [Campaign のバージョンとアップグレード &#x200B;](upgrades.md)。

+++

+++ 新しいバージョンのリリースの通知の受信方法

次のチャネルを通じて、新しい Campaign リリースに関する情報を入手します。

* **Adobe担当者** – 新しいバージョンが利用可能になった場合に直接連絡します
* **リリースノート** - [Campaign リリースノート &#x200B;](release-notes.md) に記載されているすべてのバージョンおよび変更
* **Adobeの優先製品アップデート** - メール通知用に [&#x200B; 購読 &#x200B;](https://www.adobe.com/jp/subscription/priority-product-update.html){target="_blank"}
* **Campaign コミュニティ** – 参加 [&#x200B; ディスカッション &#x200B;](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"} による早期更新

Managed Cloud Services ユーザーの場合、Adobeはアップグレードを処理し、ユーザーとのタイミングを調整します。

**関連トピック：**

[&#x200B; リリースノート &#x200B;](release-notes.md) | [&#x200B; 新機能 &#x200B;](whats-new.md) | [Campaign のバージョンとアップグレード &#x200B;](upgrades.md)

+++

+++ 組織がアップグレードを必要とする理由

セキュリティ、パフォーマンス、サポートの品質を確保するには、最新バージョンの Campaign にアップグレードすることが重要です。

**主なメリット：**

* **セキュリティの向上** – 脆弱性に対する保護、最新のパッチ、強化されたデータ保護
* **サポートの向上** – 問題の迅速な解決、バグ修正へのアクセス、最新バージョンへの優先サポート
* **パフォーマンスの向上** - データベースとワークフローの最適化、スケーラビリティの向上、操作の信頼性の向上
* **新機能** – 最新機能、改善されたAdobe Experience Cloud統合、最新の UI 機能強化

Adobeでは、最新バージョンを実行することを強くお勧めします。 Managed Cloud Services のお客様は、中断を最小限に抑えながら、Adobeによってアップグレードが行われます。

**関連トピック：**

[Campaign のバージョンとアップグレード &#x200B;](upgrades.md) | [&#x200B; 新機能 &#x200B;](whats-new.md) | [&#x200B; 互換性マトリックス &#x200B;](compatibility-matrix.md)

+++

+++ アップグレードのプロセスとタイムライン

Managed Cloud Services のお客様は、Adobeが運用への影響を最小限に抑えながらアップグレードプロセス全体を管理します。

**プロセス：**

1. **通知** - Adobeから数週間前に通知が届きます。
2. **計画** - Adobe担当者と共に最適なタイミングでアップグレードをスケジュールします
3. **準備** - Adobeは環境を準備し、検証します
4. **実行** - Adobeでは、最小限のダウンタイムでインフラストラクチャをアップグレードします
5. **検証** - Adobeによるアップグレード後のテスト
6. **クライアントコンソールのアップグレード** - クライアントコンソールをアップグレードして、サーバーバージョンと一致させます

**ユーザーの責任：**

* 社内関係者とのタイミング調整
* [&#x200B; クライアントコンソールのアップグレード &#x200B;](connect.md#upgrade-ac-console) を新しいバージョンに
* アップグレード後のキャンペーンとワークフローのテスト
* Adobe サポートへの問題の報告

Adobeはインフラストラクチャのアップグレードを実行します。 サーバーに対して技術的なアクションを実行する必要はありません。

**関連トピック：**

[Campaign のバージョンとアップグレード &#x200B;](upgrades.md) | [&#x200B; クライアントコンソールのアップグレード &#x200B;](connect.md#upgrade-ac-console) | [&#x200B; リリースノート &#x200B;](release-notes.md)

+++


## Campaign v8 と以前のバージョンの比較 {#v7-differences}

アーキテクチャ、デプロイメント、移行パス、機能の変更など、Campaign v8 と以前のバージョン（Classic v7 および Standard）の主な違いについて説明します。 Campaign Classic v7 とCampaign Standardのどちらを使用している場合でも、新機能とスムーズな移行方法を説明します。


+++ Campaign v8 と以前のバージョンの主な違いは何ですか？

Campaign v8 は、最新のクラウドネイティブアーキテクチャに基づいて構築され、大幅に改善されています。

* **Managed Cloud Services のみ** - Adobeによって完全にホストされます（オンプレミス/ハイブリッドオプションなし）
* **優れたパフォーマンス** – 完全な Federated Data Access （FFDA）アーキテクチャを備え、1 時間あたり最大 2,000 万操作
* **新しい Campaign web UI** - クラシックコンソールと並んだ最新の直感的なインターフェイス
* **自動アップグレード** – 常に最新バージョンを使用し、ダウンタイムは発生しない
* **機能強化** - AI アシスタント、リッチなプッシュ通知、アップグレードされた SMS、Adobe Experience Cloudとの統合の向上

**Campaign Classic v7 ユーザーの場合：** アーキテクチャの変更、使用できない機能、移行に関する考慮事項など [v7 から v8 への移行 &#x200B;](v7-to-v8.md) について説明します。

**Campaign Standard ユーザーの場合：** v8 への移行パス [&#x200B; および &#x200B;](acs-to-v8.md)4&rbrace;Campaign Standard移行ガイド [&#x200B; を確認してください。](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}

**関連トピック：**

[Campaign v8 の主な機能 &#x200B;](whats-new.md) | [Campaign v8 アーキテクチャ &#x200B;](../architecture/architecture.md) | [&#x200B; 機能マトリックス &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"} | [&#x200B; ガードレールと制限 &#x200B;](ac-guardrails.md)

+++

+++ Campaign Classicを v7 またはCampaign Standardから v8 に移行する必要がありますか？

Campaign v8 は、Adobeのプラットフォームで、大量のキャンペーン（1 時間あたり 2000 万件）、最新の web UI、クラウドネイティブのメリット、長期的なサポートを必要とする組織に最適です。

**主なメリット：**

* **Campaign Standard ユーザー向け** – 使い慣れた Web UI、同等の機能（動的レポート、REST API、ランディングページ）、スムーズなデータ移行
* **Campaign Classic v7 ユーザーの場合** - デュアルインターフェイス（コンソール + web UI）、パフォーマンスの向上、自動アップグレード、拡張 FFDA アーキテクチャ

**次の場合は、移行を検討してください。**

* 大量のデータを処理しているか、パフォーマンスに問題が発生している
* IT のオーバーヘッドとインフラストラクチャ管理を削減したい
* Adobe Experience Cloudと Platform の統合が必要
* 自動更新機能を備えた今後の配達確認テクノロジーが必要

**次の手順：**&#x200B;アドビ担当者に連絡して移行の準備状況を評価し、移行ツールにアクセスしてください。

**関連トピック：**

[Campaign Classic v7 から v8 へ &#x200B;](v7-to-v8.md) | [Campaign Standard移行ガイド &#x200B;](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"} | [&#x200B; 機能マトリックス &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"}

+++

+++ Campaign v8 をオンプレミス環境またはハイブリッド環境にインストールすることはできますか？

いいえ。Campaign v8 は、Adobeで完全にホストされる **Managed Cloud Service** として排他的に使用できます。

**Managed Cloud Services の主なメリット：**

* 優れたパフォーマンスと拡張性
* 自動アップグレード – 常に最新バージョン
* 継続的な監視によるセキュリティの向上
* インフラストラクチャの管理や IT のオーバーヘッドがない
* 組み込み型の高可用性と災害復旧

[Campaign v8 アーキテクチャ &#x200B;](../architecture/architecture.md) および [Campaign v8 と Classic v7 の違い &#x200B;](../start/v7-to-v8.md) について説明します。

+++

+++ Campaign Classic v7 オンプレミスまたはハイブリッド環境をAdobe Managed Servicesに移行するにはどうすればよいですか？

Adobe Managed Servicesへの移行は、オンプレミス/ハイブリッド v7 からクラウドへの戦略的な道筋を提供し、スケーラビリティの向上、セキュリティの強化、IT オーバーヘッドの削減を実現します。 多くの場合、これは Campaign v8 に移行する前の足がかりとなります。

**主なポイント：**

* 自動移行ツールは使用できません。手動での計画と実行が必要です
* Adobe Professional Services サポートを強くお勧めします
* メリットには、クラウドインフラストラクチャー、自動セキュリティパッチ、エキスパートによるサポート、v8 への簡単なパスが含まれます
* 移行には、デューデリジェンス、環境監査、データクリーンアップ、ステージ移行、実稼動環境へのカットオーバーが含まれます

**はじめに：**&#x200B;アドビ担当者に連絡して環境を評価し、Adobe Professional Services で詳細な移行プランを作成してください。

課題、ベストプラクティス、詳細な移行ロードマップなど、[Managed Servicesへの移行 &#x200B;](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic-blogs/migrate-your-adobe-campaign-v7-onprem-hybrid-environment-to/ba-p/681605){target="_blank"} に関する詳細情報を説明します。

+++

+++ Campaign v8 の主な用語と機能の違いは何ですか？

Campaign v8 では、v7/Standard のほとんどの機能に機能強化が加わっていますが、一部の用語や機能は異なります。 主な変更点の概要は以下のとおりです。

**主な用語の変更点（Campaign Standard → v8）:**

* カスタムリソース → **スキーマ** | メッセージ→**配信** |製品ユーザー→ **オペレーター**
* セキュリティグループ→**オペレーターグループ** |組織単位→**フォルダー権限**

**Campaign web UI の更新：**

* 受信者→**プロファイル** | シードアドレス → **テストプロファイル** |配信分析→**配信準備**
* リスト→**オーディエンス** | メールのプレビュー→**コンテンツをシミュレート**

**v8 では利用できません：**

* オンプレミス/ハイブリッドデプロイメント（Managed Cloud Services のみ）
* 直接データベースアクセス（API を使用）
* 手動のインフラストラクチャ管理（Adobe管理）

**Campaign Standard ユーザー向けの新機能：**

* 動的レポート、ブランディングの一元化、REST API、ランディングページの改善、ビジュアルフラグメント

**関連トピック：**

[&#x200B; 機能マトリックス &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/capability-matrix){target="_blank"} | [v7 から v8 への移行ガイド &#x200B;](v7-to-v8.md) | [Campaign Standardから v8 への移行 &#x200B;](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}

+++


## プロファイルとオーディエンス {#audiences}

プロファイルの管理、オーディエンスの作成、データのインポートおよびキャンペーン受信者のターゲティングに関する質問への回答を示します。

+++ 受信者を作成するにはどうすればよいですか？

個々のプロファイルに対するクライアントコンソールでの手動による受信者の作成、ファイル（CSV/TXT）からの一括追加の読み込み、Web フォームを使用した自己登録、外部システムからの API を介した統合のいずれかを行います。 繰り返し発生するデータ読み込みにインポートワークフローを使用します。

**関連トピック：**

[&#x200B; プロファイルの手動作成 &#x200B;](../audiences/create-profiles.md) | [&#x200B; ファイルからのプロファイルのインポート &#x200B;](../audiences/import-profiles.md) | [Web フォームでのプロファイルの収集 &#x200B;](../audiences/collect-profiles.md)

+++

+++ プロファイルをインポートするにはどうすればよいですか？

Campaign では複数のインポート方法を使用できます。インポートウィザードを使用した単純なファイルインポート、複雑な変換を行うワークフローベースのインポート、SFTP からのスケジュールされたワークフローを使用した繰り返しインポート、プログラム統合を行う API インポートです。

ファイルの読み込みの場合は、データファイル（CSV/TXT、UTF-8 エンコーディング）を準備し、読み込みウィザードまたはワークフローを使用して、列を Campaign フィールドにマッピングし、更新/挿入ルールを定義してから、最初に小さなサンプルを使用してテストします。 繰り返し発生するインポートにワークフローを使用し、重複排除ルールを適用します。

**関連トピック：**

[&#x200B; データインポートガイド &#x200B;](../start/import.md) | [&#x200B; 繰り返しインポートワークフロー &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/recurring-import-workflow.html?lang=ja){target="_blank"} | [&#x200B; データ読み込みアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"}

+++

+++ 配信のテストプロファイルを作成するにはどうすればよいですか？

テストプロファイル（シードアドレス）を使用すると、定義したターゲティング条件に一致しない受信者をターゲットに設定できるので、メインオーディエンスに送信する前に配信をテストできます。 **[!UICONTROL シードアドレス]** を使用して配信プロパティに追加するか、**[!UICONTROL シードアドレス]** フォルダーを使用します。

詳しくは、[&#x200B; テストプロファイル &#x200B;](../audiences/test-profiles.md) を参照してください。

+++

+++ マーケティングキャンペーンのターゲット母集団を定義するにはどうすればよいですか？

Campaign では、視覚的な条件を使用したクエリの作成、既存のリストやセグメントのターゲティング、外部ファイル（CSV、TXT）からの受信者のインポート、定義済みフィルターの適用など、複数のターゲティング方法を提供します。 条件を AND/OR ロジックと組み合わせたり、特定の母集団を除外したり、コントロール母集団を使用したり、A/B テスト用に分割したりできます。 送信前に、常にターゲット母集団のサイズをプレビューします。

**関連トピック：**

[&#x200B; キャンペーンターゲットの定義 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja){target="_blank"} | [&#x200B; クエリアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"} | [&#x200B; オーディエンスを作成 &#x200B;](../audiences/create-audiences.md)

+++

+++ プロファイルのリストを作成するにはどうすればよいですか？

リストは、配信のターゲットとして設定し、キャンペーン間で再利用できる受信者の静的なセットです。

**3 つの作成方法：**

* **手動作成：** **[!UICONTROL プロファイルとターゲット/リスト]** に移動し、「**[!UICONTROL 作成]**」をクリックします。 クエリ、個別の選択、フォルダーのいずれかから受信者を追加します。

* **ワークフローの自動化：**&#x200B;**[!UICONTROL リスト更新]** アクティビティを使用すると、クエリ結果またはインポートされたデータからリストを自動的に作成および管理できます。

* **読み込み時：** プロファイルを読み込む際にリストを作成して、再利用可能なグループとして保存します。

**ヒント：** 定期的な更新が必要なリストや、1 回限りのセグメント化のための手動作成にはワークフローを使用します。

**関連トピック：**

[&#x200B; オーディエンスの作成 &#x200B;](../audiences/create-audiences.md) | [&#x200B; リスト更新アクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/list-update.html){target="_blank"}

+++

+++ メッセージを送信する前に母集団の重複を排除するにはどうすればよいですか？ 

ワークフローでの **[!UICONTROL 重複排除]** アクティビティを使用すると、配信前に重複する受信者を削除できます。 **[!UICONTROL クエリ]** アクティビティと **[!UICONTROL 配信]** アクティビティの間にクエリを配置し、重複排除条件（通常はメールアドレスまたは受信者 ID）と保持するレコードを選択します。

**ヒント：** 送信する前に常に重複排除を行い、各ユーザーがメッセージを 1 回だけ受信するようにします。

[&#x200B; 重複排除 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/deduplication.html?lang=ja){target="_blank"} アクティビティの詳細を説明します

+++

+++ ニュースレターの購読者を識別してターゲットにするにはどうすればよいですか？

Campaign は、情報サービスを通じてニュースレターの購読を自動的にトラッキングします。 サブスクライバをターゲットにするには：

* **[!UICONTROL クエリ]** アクティビティを使用し、**[!UICONTROL 購読]**/ニュースレターサービスを選択でフィルターします
* 情報サービスの **[!UICONTROL 宛先/購読者]** を選択して、配信から直接サブスクライバーをターゲットにします。
* **[!UICONTROL 購読サービス]** ワークフローアクティビティで購読者リストを作成

Campaign は購読/購読解除履歴を追跡し、オプトイン/オプトアウトを自動的に管理します。

**関連トピック：**

[&#x200B; 購読の管理 &#x200B;](../start/subscriptions.md) | [&#x200B; クエリアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"}

+++

+++ ターゲット母集団からプロファイルを除外するためのベストプラクティスは何ですか？ 

ワークフローで **[!UICONTROL 除外]** アクティビティを使用して、不要なプロファイルをターゲットから削除します。 ターゲティングアクティビティの後ろにドロップし、除外する母集団を定義します。

[&#x200B; 除外アクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/exclusion.html){target="_blank"} の詳細情報

+++


## メッセージデザイン {#design}

メールテンプレート、パーソナライゼーション手法、多言語コンテンツなど、Campaign v8 で効果的なマーケティングメッセージをデザインする方法を説明します。 クライアントコンソールでメッセージをデザインしたり、Campaign Web UI で最新の **メールDesigner** を使用して、ビジュアル編集エクスペリエンスを強化したりできます。

+++ Campaign でメールをデザインするためのベストプラクティスは何ですか？

重要なガイドライン：モバイルレスポンシブデザインの確保、インライン CSS を使用したHTML 4.0/XHTML 互換コードの使用、代替テキストを使用した画像の最適化（100 KB 未満）、パーソナライゼーション結合フィールドの使用、送信前のメールクライアント間のテスト、プレーンテキストバージョンの組み込みを行います。 最適な配信品質を得るには、合計メールサイズを 500 KB 未満にすることを目指します。

**関連トピック：**

[&#x200B; メールデザインガイド &#x200B;](../send/email.md) | [&#x200B; 配信のベストプラクティス &#x200B;](delivery-best-practices.md)

+++

+++ 配信テンプレートとは何ですか？

配信テンプレートは、複数のキャンペーンで再利用できるように、すべての設定とパラメーターを保存する事前設定済みの配信です。 テンプレートには、ターゲットルール、コンテンツデザイン、パーソナライゼーション、技術設定（送信者、返信先）、タイポロジルールなどが含まれます。 1 回作成してから再利用することで、一貫性を維持し、キャンペーンの作成を高速化します。

詳細情報 [&#x200B; 配信テンプレートの作成 &#x200B;](../send/create-templates.md)

+++

+++ Campaign で既存の HTML をインポートしてメールを簡単に作成できますか？

はい。HTMLのコンテンツをコンテンツエディターに直接コピー/貼り付けして読み込むか、コンピューターからファイルをアップロードするか、URL から読み込みます。 HTMLがインライン CSS を持つメール互換コード（HTML 4.0/XHTML）を使用し、パブリックサーバーで画像をホストしていることを確認します。 Campaign は、インポートされたHTMLにパーソナライゼーションとトラッキングを自動的に追加します。

**ヒント：** 最適なメールデザインエクスペリエンスを得るには、Campaign web UI で **メールDesigner** を使用します。これは、生のHTMLを読み込むのではなく、最新のドラッグ&amp;ドロップ機能と組み込みのレスポンシブテンプレートを提供します。

詳細情報 [HTML コンテンツの読み込み &#x200B;](../send/defining-the-email-content.md)

+++

+++ 購読ベースのニュースレターを Campaign で作成するにはどうすればよいですか？

はい。Campaign の情報サービスを使用して、ニュースレターの購読を管理します。 主な機能には、自動オプトイン/オプトアウト処理、購読トラッキング、コンプライアンス管理（GDPR、CAN-SPAM）、マルチニュースレターのサポート、サインアップフォームの web 統合、購読者をターゲットにした配信などがあります。

詳細情報 [&#x200B; 購読の管理 &#x200B;](../start/subscriptions.md)

+++

+++ メッセージをパーソナライズするにはどうすればよいですか？

Campaign は、受信者のデータ、行動および環境設定に基づいて、関連性の高いターゲットメッセージを作成するためのパーソナライゼーション機能を提供します。

**Personalizationのオプション：**

* **パーソナライゼーションフィールド** – 受信者データを挿入する（例：`"Hello {{firstName}}")`
* **パーソナライゼーションブロック** – 定義済みコンテンツブロックまたはカスタムコンテンツブロックを使用します
* **条件付きコンテンツ** – 受信者の条件に基づいて異なるコンテンツを表示します
* **行動データ** – 閲覧履歴、購入パターン、エンゲージメント指標を活用します

送信前にパーソナライゼーションをテストして、結合フィールドと条件付きロジックが正しく動作することを確認します。

**関連トピック：**

[Personalization ガイド &#x200B;](../send/personalize.md) | [&#x200B; パーソナライゼーションフィールド &#x200B;](../send/personalization-fields.md) | [&#x200B; 条件付きコンテンツ &#x200B;](../send/conditions.md)

+++

+++ メールの件名をパーソナライズするにはどうすればよいですか？

パーソナライズされた件名により、開封率が大幅に向上します。 Campaign では、受信者データの動的な挿入、条件付きロジックの適用、バリエーションのテストを行ってエンゲージメントを最適化できます。

**Personalizationのテクニック：**

* **基本フィールド** - firstname、lastname、location:`"<%@ firstName %>, exclusive offer for you"` の挿入
* **条件付きコンテンツ** - セグメント別の様々な件名：`"<% if (recipient.gender == 'F') { %>Special offer just for you<% } else { %>Exclusive deal inside<% } %>"`
* **動的データ** – 購入履歴、ロイヤルティポイント、アカウント情報を含みます
* **絵文字** – 視覚的な魅力を追加（最初にメールクライアント間でテスト）

**ベストプラクティス：** 50 文字未満に抑え、送信前にパーソナライゼーショントークンをテストし、A/B テストを使用して最適化し、スパムトリガーの言葉を避け、価値提案や緊急度を含めます。

**関連トピック：**

[&#x200B; パーソナライゼーションフィールド &#x200B;](../send/personalization-fields.md) | [&#x200B; 条件付きコンテンツ &#x200B;](../send/conditions.md)

+++

+++ 多言語メッセージを送信できますか？

はい。Campaign v8 は、**Campaign Web UI** で最も簡単なアプローチにより、多言語機能を提供します。 Web UI は、言語のバリアントを使用してネイティブの多言語配信を提供します。配信に言語のバリアントを追加すると、Campaign は受信者の優先言語に基づいて適切なバージョンを自動的に送信します。 メール、プッシュ通知、SMS、トランザクションメッセージで使用できます。

主な機能：自動コンテンツ複製、自動言語ベース送信、デフォルト言語フォールバック、容易なバリアント管理。

クライアントコンソールでは、条件付きコンテンツとワークフローを使用して多言語コンテンツをサポートしていますが、より手動での設定が必要です。

**関連トピック：**

[&#x200B; 多言語配信（web UI） &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/msg/multilingual){target="_blank"} | [&#x200B; 条件付きコンテンツ（クライアントコンソール） &#x200B;](../send/conditions.md)

+++

+++ Web フォームをローカライズできますか？

はい。Campaign web アプリケーションは、多言語ローカライゼーションをサポートしています。 受信者のプロファイルやブラウザーの設定に基づいて自動的に言語を検出し、すべてのフォーム要素（ラベル、ボタン、メッセージ、エラーテキスト）の翻訳を定義します。 1 つの web アプリケーション内で複数の言語バージョンをサポートでき、必要に応じてデフォルト言語にフォールバックできます。

詳細情報 [Web アプリケーションのローカライゼーション &#x200B;](../dev/webapps.md)

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

**関連トピック：**

[AI アシスタントの概要 &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/content/ai-assistant/generative-gs){target="_blank"} | [AI アシスタントのユースケース &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/content/ai-assistant/generative-uc){target="_blank"} | [&#x200B; ブランドの連携 &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/content/ai-assistant/ai-assistant/brands-score){target="_blank"}

+++

## メッセージのテストと送信 {#send}

マーケティングメッセージのテスト、検証、送信およびトラッキングのベストプラクティスを学び、キャンペーン配信を成功に導きます。

+++ メールの配信品質を向上させるにはどうすればよいですか？

メール配信の品質は、すべての送信者がマーケティングプログラムを成功させるうえで重要なコンポーネントであり、条件とルールが常に変化し続けるという特徴があります。 デジタルの世界を効果的に進むには、主な配信品質の傾向を考慮して、メール戦略を定期的に調整し、最適な方法でオーディエンスにアプローチする必要があります。

詳しくは、配信品質のベストプラクティス [&#x200B; のガイドを参照してください &#x200B;](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}

Campaign に配信品質を実装する方法については、[このガイド](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/general-resources.html?lang=ja){target="_blank"}を参照してください

**関連トピック：**

[&#x200B; 配信品質の概要 &#x200B;](../send/about-deliverability.md) | [&#x200B; メッセージコンテンツの制御 &#x200B;](../send/control-message-content.md) | [&#x200B; 配信品質の監視 &#x200B;](../send/monitoring-deliverability.md) | [SpamAssassin](../send/spamassassin.md)

+++

+++ エラーなしで配信されていることを確認するにはどうすればよいですか？

**送信前：** 配信分析を実行し、テスト配達確認を送信し、警告を確認して、ターゲット数を検証します。

**送信中/送信後：** 配信ダッシュボード（送信済み、配信済み、バウンス、エラー）の監視、配信ログの確認、成功/バウンス率の追跡、強制隔離されたアドレスの確認をおこないます。

**ベストプラクティス：** アラートの設定、大量のウェーブの使用、少量のテストから先に、受信者データベースの定期的なクリーンアップ、送信者の評価の監視を行います。

**関連トピック：**

[&#x200B; 配信のトラッキングと監視 &#x200B;](../send/tracking.md) | [&#x200B; 配信のベストプラクティス &#x200B;](delivery-best-practices.md)

+++

+++ 配信分析とは何ですか？ 

配信分析は、キャンペーンが送信前に実行する検証フェーズです。 ターゲット母集団の計算、コンテンツの検証、エラーのチェック、タイポロジルールの適用、配信量の推定を行います。

Campaign は、警告とエラーを示すログを生成します。 エラーは配信をブロックし、修正する必要があります。警告は参考になります。 送信前に必ず分析ログを確認してください。

詳しくは、[&#x200B; 配信分析ガイド &#x200B;](../send/delivery-analysis.md) を参照してください

+++

+++ なぜ配達確認の作成が必要なのですか？ 

配達確認は、メインオーディエンスに送信する前に配信を検証するテストメッセージです。 配達確認を使用して、パーソナライゼーションの検証、E メールクライアント間でのコンテンツのレンダリングのテスト、リンクとトラッキング作業の確認、画像と添付ファイルの確認、モバイルの応答性の検証を行います。

配達確認は、何千人もの受信者に届く前にエラーを見つけ、関係者の承認を有効にし、インボックスの配置をテストするのに役立ちます。 複数のメールクライアントおよびデバイスに配達確認を送信し、実稼動環境が送信される前に必ず承認を取得します。

詳しくは、[&#x200B; 配達確認とプレビューガイド &#x200B;](../send/preview-and-proof.md) を参照してください

+++

+++ Adobe Campaign でのシードアドレスの使用方法は？ 

シードアドレスは、テスト、品質保証、監視のために、ターゲット条件に合わせることなく、すべての配信に自動的に追加される特別な受信者です。 継続的な監視、インボックス配置のテスト、ダイレクトメールの検証、関係者の可視性に役立ちます。

**プルーフとの主な違い：**

* **シードアドレス** – 実稼動配信に自動的に追加され、送信量にカウントされます
* **配達確認** – 実稼動環境の前に送信するテストで、ボリュームにカウントせず、検証に使用

**[!UICONTROL リソース/キャンペーン管理/シードアドレス]** でシードアドレスを管理します。 配信指標に影響を与えないように、リストを小さく保ちます。

詳しくは、[&#x200B; シードアドレスガイド &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/delivery-control.html){target="_blank"} を参照してください

+++

+++ メッセージ送信前の承認プロセスを設定するにはどうすればよいですか？

Campaign は、送信前にメッセージが品質基準を満たしていることを確認する承認ワークフローを提供します。 コンテンツ、ターゲット、抽出（ダイレクトメール）、予算の承認をキャンペーンレベルまたは配信レベルで設定します。

**設定：**

**[!UICONTROL 管理/アクセス管理/オペレーターグループ]** でオペレーターグループを作成し、キャンペーンまたは配信プロパティで承認グループを割り当てます。 Campaign は、変更を承認、却下またはリクエストできるレビュー担当者に通知メールを送信します。

**スタンドアロン配信の場合（キャンペーン以外）:**

**プルーフを承認プロセスとして** 使用します。 検証用に承認グループに配達確認を送信し、変更を加えた後は常に新しい配達確認を送信して、関係者が最新バージョンを確認できるようにします。

**関連トピック：**

[&#x200B; 配信の検証 &#x200B;](../send/preview-and-proof.md) | [&#x200B; キャンペーン承認 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-approval.html?lang=ja){target="_blank"}

+++

+++ 配信に対して A/B テストを実行できますか？

はい！ Campaign では、A/B テスト（分割テストとも呼ばれます）を実行して、異なるバリアント間でパフォーマンスを比較することで、件名行、コンテンツ、送信者名、送信時間などを最適化できます。

**テストできる項目：**

* **件名** – 様々な件名の開封率を比較する
* **コンテンツのバリエーション** – 様々なレイアウト、コールトゥアクション（CTA）または画像のテスト
* **送信者情報** – 送信者名または送信元アドレスの影響をテストします
* **送信時間** – 最適な配信期間の特定
* **Personalization戦略** - パーソナライズされたコンテンツと一般的なコンテンツの比較

**仕組み：**

1. 配信を作成し、テストのバリアント（最大 3 つ）を定義します
2. オーディエンスを分割（通常、テストセグメントの場合は 10～20%）
3. Campaign は、テストセグメントにバリアントを送信し、パフォーマンスを追跡します
4. 勝者バリアントは、残りのオーディエンスに自動的に送信します（または手動で勝者を選択します）

**で使用可能：** Campaign web UI とクライアントコンソールの両方。 Web UI を使用すると、視覚的な比較によりシンプルに設定できます。

**関連トピック：**

[&#x200B; 配信分析 &#x200B;](../send/delivery-analysis.md) | [&#x200B; 配信の送信とトラッキング &#x200B;](../send/send.md)

+++

+++ タイポロジルールとは何ですか？ 

タイポロジルールは、メッセージ送信を検証および最適化するために、配信分析中に適用される自動ビジネスロジックです。 マーケティングポリシーへのコンプライアンスを確保し、配信品質を保護し、顧客疲労を防ぎます。

**メインルールタイプ：**

* **フィルタリングルール** – 受信者を除外（ブロックリストに加える、購読解除、強制隔離）
* **頻度ルール** – 受信者が圧倒されるのを避けるためにメッセージ頻度を制御する
* **処理能力ルール** – 処理能力または ISP の制限に応じたメッセージ量の制限
* **制御ルール** - メッセージの有効性を確認する（件名行、登録解除リンク、送信者形式）

ルールはタイポロジにグループ化され、配信分析時に適用されます。 Campaign では、受信者の除外、配信のブロック、ルールに基づく警告の生成を行うことができます。

詳しくは、[&#x200B; タイポロジルールガイド &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/campaign-optimization/campaign-typologies.html?lang=ja){target="_blank"} を参照してください

+++

+++ メールをウェーブで送信するにはどうすればよいですか？

はい。ウェーブ送信は、スケジュールされた間隔で送信された複数のバッチに配信を分割します。 これは、大量のキャンペーンでサーバー負荷のバランスを取り、ISP のスロットリングを防ぎ、新しい IP で送信者の評判を構築し、ウェーブ間のオプトアウト/バウンスを管理するために不可欠です。

**設定：**

配信プロパティで、ウェーブ送信を有効にし、ウェーブの数（またはバッチサイズ）、ウェーブ間の間隔、ウェーブ分布（線形またはカスタムの割合）を定義します。 Campaign は、ターゲット母集団を自動的に分割し、各ウェーブをスケジュールに従って送信します。

大規模なキャンペーンにはウェーブを使用し、続行する前に最初のウェーブのパフォーマンスを監視し、ウェーブ間にバウンスおよびオプトアウトを処理するための十分な時間を確保します。

詳細情報 [&#x200B; ウェーブ送信の設定 &#x200B;](../send/configure-and-send.md#sending-using-multiple-waves)

+++

+++ 配信のスケジュール方法は？ 

Campaign では、今後の送信に備えて配信のスケジュールを設定し、送信時間を最適化してキャンペーンを調整できます。

**スケジュールオプション：**

* **配信プロパティ** – 即時に送信、特定の日時にスケジュールを設定、時間/日別に遅延
* **キャンペーンレベル** - キャンペーン内のすべての配信の調整
* **ワークフロースケジューラーアクティビティ** – 繰り返し配信、複雑なパターン、イベントトリガーキャンペーンの場合

Campaign は、コンタクト日の最適化（受信者ごとの最適な送信時間）とタイムゾーンの適応（すべての受信者に対して同じローカル時間）もサポートしています。

詳細情報 [&#x200B; 配信送信をスケジュール設定 &#x200B;](../send/configure-and-send.md#schedule-delivery-sending)

+++

+++ メールに添付ファイルを追加できますか？ 

はい。Campaign では、静的な添付ファイル（すべての受信者に対して同じファイル）と、パーソナライズされた添付ファイル（プロファイルデータに基づいて受信者ごとに異なるファイル）をサポートしています。 配信プロパティの **[!UICONTROL 添付ファイル]** セクションに添付ファイルを追加します。

**重要な考慮事項：**

* 最適な配信品質を得るために、添付ファイルを 1 MB 未満に保つ
* 添付ファイルはスパムフィルターのトリガーとなることがあります。送信前に十分にテストしてください。
* メールクライアント（.exe、.zip、.js）によって一般的にブロックされるファイルタイプを避ける
* 大きなファイルの場合は、代わりに、トラッキング対象のダウンロードリンクを使用することを検討します

実稼動環境で送信する前に、安全なファイル形式（PDF、JPEG、PNG、DOCX）を使用し、シードアドレスを使用してテストします。

詳しくは、[&#x200B; メール添付ファイルガイド &#x200B;](../send/email.md#attachments) を参照してください

+++

+++ メール配信でトラッキング対象リンクを設定するにはどうすればよいですか？

Campaign は、受信者のエンゲージメントを監視するために、メール内のすべての URL をトラッキング対象リンクに自動的に変換します 配信の「**[!UICONTROL トラッキング]**」セクションにアクセスして、各リンクのトラッキング設定を指定します。

**設定オプション：**

* **トラッキングの有効化/無効化** - リンクごとのトラッキングの制御
* **リンクラベル** - レポートにわかりやすい名前を追加します（「今すぐ購入CTA」など）
* **リンクカテゴリ** - タイプ別にリンクをグループ化して集計分析に使用
* **トラッキングタイプ** - クリック数、開封数、またはその両方を追跡します

Campaign は、コンテンツリンク、ミラーページリンク、登録解除リンクを追跡し、メール開封数のオプションのトラッキングピクセルを含めることができます。 意味のあるラベルとカテゴリを使用して、レポートを簡素化し、パフォーマンスの高いコンテンツを迅速に特定します。

**関連トピック：**

[&#x200B; リンクトラッキングガイド &#x200B;](../send/tracking.md) | [&#x200B; トラッキングのベストプラクティス &#x200B;](../send/send.md)

+++

+++ 配信およびトラッキングのログはどこで参照できますか？ 

各配信ダッシュボードから配信ログおよびトラッキングログに直接アクセスします。 クライアントコンソールで、下部にある「**[!UICONTROL 配信]**」タブをクリックします。 Campaign web UI で、「**[!UICONTROL ログ]** セクションに移動します。

**使用可能なログ：**

* **配信ログ** – 受信者の詳細とステータス（送信済み、保留中、失敗）を含む送信済みメッセージ
* **トラッキングログ** - タイムスタンプ付きの受信者インタラクション（開封数、クリック数）
* **除外ログ** – 理由（強制隔離、タイポロジルール、重複）のある除外された受信者
* **ブロードキャストログ** – 再試行とエラーを含む送信履歴の完了

これらのログを使用して、配信の問題のトラブルシューティング、エンゲージメントの分析、リストハイジーンの維持を行います。

**関連トピック：**

[&#x200B; 配信の監視 &#x200B;](../send/send.md) | [&#x200B; トラッキングガイド &#x200B;](../send/tracking.md)

+++

+++ 配信レポートはどこで取得できますか？ 

Campaign には、配信パフォーマンス、受信者のエンゲージメント、キャンペーンの効果を分析する包括的なビルトインレポートが用意されています。 任意の配信の **[!UICONTROL レポート]** タブ、キャンペーンダッシュボード、またはキャンペーン間分析のグローバル **[!UICONTROL レポート]** メニューからレポートにアクセスします。

**主なレポートの内容：**

* **配信概要** – 統計、開封数、クリック数、バウンス数および購読解除数を送信します
* **ホットクリック数** - リンクパフォーマンスのビジュアルヒートマップ
* **トラッキング指標** - クリックスルー率とエンゲージメント指標
* **配信不能件数** – 失敗理由を含むバウンス分析

レポートは、クライアントコンソールと Campaign web UI の両方で、最新のビジュアライゼーションを使用して使用できます。

**関連トピック：**

[&#x200B; ビルトインの配信レポート &#x200B;](../reporting/delivery-reports.md) | [&#x200B; キャンペーンレポート &#x200B;](../reporting/gs-reporting.md)

+++

+++ Adobe Campaign では強制隔離アドレスをどのように選定および管理していますか？ 

Campaign では、強制隔離リストを自動的に管理して、送信者のレピュテーションを保護し、配信品質を向上させます。 強制隔離されたアドレスは、検証されるか強制隔離から削除されるまで、今後の配信から自動的に除外されます。

**アドレスが強制隔離される理由：**

* **ハードバウンス** – 永続的な配信エラー（無効なメールアドレス、ドメインが存在しない、メールボックスが削除される）
* **ソフトバウンスしきい値** - エラーしきい値を超えた一時的なエラーの繰り返し（メールボックス容量超過、サーバーの一時的な使用不能）
* **スパムの苦情** - メールをスパムとしてマークする受信者
* **無効なアドレス** – 構文エラーが発生したアドレスまたは検証に失敗したアドレス
* ブロックリストに加える **&#x200B;**&#x200B;- オプトアウトした、または除外をリクエストした受信者

**強制隔離の仕組み：**

Campaign は、各アドレスの配信エラーを追跡します。 アドレスが設定されたエラーしきい値に達すると、自動的に強制隔離され、分析中に今後のすべての配信から除外されます。 ハードバウンス（永続的なエラー）は直ちに強制隔離されますが、ソフトバウンスでは、強制隔離の前に複数のエラーが必要です。

**強制隔離アドレスの管理：**

**[!UICONTROL 管理/キャンペーン管理/配信不能件数の管理]** で強制隔離管理にアクセスします。 強制隔離されたアドレスを表示したり、強制隔離から検証済みアドレスを手動で削除したり、自動クリーンアップルールを設定したりできます。

**ヒント：** 強制隔離リストを定期的に監視します。 強制隔離率の向上は、多くの場合、送信者のレピュテーションに影響を与える前に注意が必要なデータ品質の問題を示します。

**関連トピック：**

[&#x200B; 検疫管理ガイド &#x200B;](../send/quarantines.md) | [&#x200B; バウンス管理 &#x200B;](../send/delivery-failures.md)

+++

## ワークフロー {#workflows}

ワークフローを使用して、Adobe Campaignでプロセスを自動化、データを管理、複雑なマーケティングキャンペーンを調整する方法について説明します。

+++ ワークフローとは何ですか？

Adobe Campaign には、アプリケーションサーバーの様々なモジュール間でプロセスおよびタスク全体にわたる調整を行うワークフローが含まれています。総合的なグラフィカル環境により、セグメント化、キャンペーン実行、ファイル処理、手作業での処理などのプロセスをデザインできます。これらのプロセスは、ワークフローエンジンが実行し、トラッキングします。

例えば、ワークフローを使用して、サーバーからファイルをダウンロードしたり、ファイルを解凍したり、ファイルに含まれるレコードを Adobe Campaign データベースにインポートしたりできます。

またワークフローには、1 人または複数のオペレーターを関連付けて、通知の対象とすることや、プロセスの選択や承認に関与させることもできます。この方法により、配信アクションを作成して 1 人または複数のオペレーターにタスクを割り当て、コンテンツに対して作業する、ターゲットを指定する、配信開始前に配達確認を承認する、などが可能になります。

ワークフローについての [&#x200B; 詳細情報 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/about-workflows.html?lang=ja){target="_blank"}。 「[ワークフローのベストプラクティス](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"}」も参照してください。

**関連トピック：**

[&#x200B; ワークフローの概要 &#x200B;](../config/workflows.md) | [&#x200B; 最初のワークフローを作成 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"} | [&#x200B; ワークフローのユースケース &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"} | [&#x200B; ワークフロー実行の監視 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

+++

+++ ワークフローの実行を監視できますか？

はい。Campaign は複数の監視ツールを提供します。ワークフローダッシュボード（リアルタイムステータスとエラー）、ワークフローログ（詳細な実行ログ）、ヒートマップ（アクティビティとボトルネックの視覚化）、監査記録（変更の追跡）、アラート（失敗の通知）です。

監視するには、ワークフローを開いて「**ログ**」タブをクリックします。 失敗したアクティビティは赤で表示されます。

**関連トピック：**

[&#x200B; ワークフロー実行の監視 &#x200B;](https://experienceleague.adobe.com/en/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution){target="_blank"} | [&#x200B; ワークフローのベストプラクティス &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"}

+++

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

[&#x200B; ワークフローの作成 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"} | [&#x200B; ワークフローアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/about-activities.html){target="_blank"} | [&#x200B; ワークフローのベストプラクティス &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"} | [&#x200B; ワークフローのユースケース &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"}

+++

+++ 繰り返しキャンペーンを自動化するにはどうすればよいですか？

**スケジューラー** アクティビティと共にワークフローを使用して、毎日、毎週、毎月、カスタム間隔など、一定のスケジュールで実行するキャンペーンを自動化します。 ウェルカムメール、誕生日メッセージ、ニュースレターの送信、放棄された買い物かごのリマインダー、定期的なレポートに最適です。

**設定パターン：**

1. **スケジューラー** – 頻度を定義する（例：「毎週月曜日の午前 9 時」）
2. **クエリ** – 動的条件でターゲットオーディエンスを選択します
3. **エンリッチメント** （任意） – パーソナライゼーションデータの追加
4. **配信** - メッセージを設定する（メール、SMS、プッシュ）
5. **終了** - ワークフローは完了し、次にスケジュールされた実行を待機します

**一般的な自動キャンペーン：**

* **ようこそシリーズ** – 新規購読者にオンボーディングメールを送信する毎日のワークフロー
* **誕生日メール** – 誕生日の受信者を毎日チェックし、パーソナライズされたメッセージを送信する
* **再エンゲージメント** – 週別ターゲティング機能により、非アクティブユーザーに勝利のオファーを提供
* **ニュースレター** – 毎週または毎月のスケジュールされたコンテンツ配信
* **買い物かごの放棄** – 買い物かごの放棄を識別してメッセージを表示する時間別ワークフロー

**ヒント：** ワークフロー **繰り返し配信** を使用して、各実行を個別に追跡し、履歴レポートを維持します。

**関連トピック：**

[&#x200B; スケジューラーアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/flow-control-activities/scheduler.html?lang=ja){target="_blank"} | [&#x200B; 繰り返し配信 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/sending-a-birthday-email.html){target="_blank"} | [&#x200B; キャンペーン自動処理 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/home.html?lang=ja){target="_blank"}

+++

+++ Campaign でデータをインポートするにはどうすればよいですか？

**メソッド：** インポートウィザード（1 回限りの CSV/TXT）、ワークフローベースのインポート（**[!UICONTROL データ読み込み（ファイル）]** 変換を伴う複雑なインポートや繰り返しのインポートのアクティビティ）、REST API （プログラム/リアルタイム同期）。

**ベストプラクティス：** 小さなサンプルを使用したテスト、UTF-8 エンコーディングの使用、フィールドの正しいマッピング、重複排除の適用、大きな読み込みのスケジュール設定をピーク外で行います。

**関連トピック：**

[&#x200B; インポートのベストプラクティス &#x200B;](../start/import.md) | [&#x200B; データ読み込みアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"} | [&#x200B; 繰り返しインポートワークフロー &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/recurring-import-workflow.html?lang=ja){target="_blank"}

+++

+++ 読み込み時にデータ品質を確保するにはどうすればよいですか？

キャンペーンを正常に実行するには、データ品質が重要です。 データが不足すると、配信エラー、リソースの浪費、コンプライアンスリスクにつながります。 Campaign には、インポートプロセス中にデータを検証、クリーンアップ、エンリッチメントするためのツールが用意されています。

**データ検証手順：**

1. **インポート前の検証** - ファイル形式、エンコーディング（UTF-8）、列マッピング、必須フィールドが存在することを確認します
2. **重複排除** - **[!UICONTROL 重複排除]** アクティビティを使用して、メール、ID またはカスタムキー別に重複を識別して処理します
3. **データエンリッチメント** - **[!UICONTROL エンリッチメント]** アクティビティを使用して、既存の Campaign テーブルから欠落しているデータを追加します
4. **フォーマットの標準化** - JavaScriptまたはエンリッチメントを使用して、電話番号、メールアドレス、日付、国コードを標準化します
5. **検証ルール** – 制約（有効なメールフォーマット、必須フィールド、値範囲）を適用する

**一般的な問題と修正点：**

* **文字エンコーディングエラー** →常に UTF-8 エンコーディングを使用します
* **日付形式の不一致** → YYYY-MM-DD 形式に標準化
* **無効なメールアドレス** →検証ルールまたはJavaScriptを使用してフィルタリングする
* **重複レコード** →更新前に常に重複排除アクティビティを含める
* **必須フィールドがありません** → デフォルト値を設定するか、不完全なレコードを却下します

**ベストプラクティス：** すべての読み込みに適用できる標準の検証とクリーニングのアクティビティを使用して、再利用可能な「データ品質」ワークフローテンプレートを作成します。

**関連トピック：**

[&#x200B; データ品質ガイド &#x200B;](../start/import.md) | [&#x200B; 重複排除アクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/deduplication.html?lang=ja){target="_blank"} | [&#x200B; エンリッチメントアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/enrichment.html?lang=ja){target="_blank"}

+++

+++ Campaign の一般的なワークフローユースケースを教えてください。

ワークフローは、次のようなマーケティングプロセスを自動化します。

**データ管理：** データのインポート/ロード、クレンジング、エンリッチメント、リスト管理\
**キャンペーン自動化：** ようこそシリーズ、誕生日キャンペーン、再エンゲージメント、買い物かごの放棄\
**高度なターゲティング：** A/B テスト、動的セグメント化、リードスコアリング、クロスチャネルオーケストレーション\
**監視：** ワークフロー/配信の監視、アラート、データベースのメンテナンス\
**統合：** CRM 同期、API 統合、イベントトリガーワークフロー

**関連トピック：**

[&#x200B; ワークフローのユースケースライブラリ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/about-workflow-use-cases.html){target="_blank"} | [&#x200B; ワークフローの作成 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/build-a-workflow.html?lang=ja){target="_blank"} | [&#x200B; ワークフローのベストプラクティス &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"}

+++

+++ ワークフローで Campaign データを更新するにはどうすればよいですか？

一括データベース操作に **[!UICONTROL データを更新]** アクティビティを使用：挿入（新しいレコードを追加）、更新（既存を変更）、挿入または更新（アップサート）、削除（一致するレコードを削除）。

**一般的な用途：** プロファイル属性の更新、外部システムとの同期、リストのメンバーシップの維持、データのクリーンアップ/重複排除、一括ステータス変更の適用。

正確な照合を行うために紐付けキーを設定し、更新オプションを選択します。

**関連トピック：**

[&#x200B; データを更新アクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/update-data.html?lang=ja){target="_blank"} | [&#x200B; データ管理アクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/about-action-activities.html){target="_blank"}

+++

+++ データ管理機能を利用するにはどうすればよいですか？

データ管理アクティビティを使用すると、エンリッチメント（関連するテーブルからデータを追加）、分割（セグメント母集団）、重複排除（重複を削除）、データの更新（一括操作）、ディメンションの変更（ターゲティングディメンションの切り替え）、積集合/和集合/除外（母集団の結合/フィルター）などの高度な操作が可能になります。

**一般的な用途：** 購入/行動データのエンリッチメント、オーディエンスのセグメント化、重複の削除、外部データベースの統合（FDA）、複雑な複数テーブルのクエリの作成をおこないます。

**関連トピック：**

[&#x200B; データ管理アクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/about-targeting-activities.html){target="_blank"} | [&#x200B; エンリッチメントアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/enrichment.html?lang=ja){target="_blank"}

+++

+++ パーソナライズされたメッセージの送信を自動化できますか？

はい。自動ワークフローの作成：クエリ（ターゲットオーディエンス）→エンリッチメント（パーソナライゼーションデータの追加）→分割（任意セグメント）→配信（パーソナライズされたメッセージ）→スケジューラー（繰り返し実行）。

**Personalization:** プロファイルデータ、行動データ、条件付きコンテンツ、動的な値を使用します。 一般的なシナリオ：誕生日キャンペーン、買い物かごの放棄、ロイヤルティプログラム、取り戻し、イベントトリガーメッセージ。

**関連トピック：**

[Personalization ガイド &#x200B;](../send/personalize.md) | [&#x200B; ワークフローのユースケース &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/send-a-birthday-email.html?lang=ja){target="_blank"}

+++

+++ ワークフローでオーディエンスをサブセットに分割するにはどうすればよいですか？

**[!UICONTROL 分割]** アクティビティを使用して母集団を分割します。フィルタリング条件（年齢、場所、VIPのステータス）、割合の分布（A/B テスト）、レコードの制限（最初の N、上位 X%）、データグループ（値ごとに 1 つのサブセット）。

**一般的な用途：** A/B テスト、チャネル環境設定ルーティング、プログレッシブロールアウト、セグメント固有のメッセージ、ロードバランシング 各サブセットは、異なる処理に対して別々のトランジションを生成します。

**関連トピック：**

[&#x200B; 分割アクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/split.html?lang=ja){target="_blank"} | [A/B テストガイド &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/a-b-testing.html){target="_blank"}

+++

+++ 外部ファイルの受信者データを更新するにはどうすればよいですか？

はい。ワークフロー：データ読み込み（ファイル） → エンリッチメント （任意） →紐付け（メール/ID などの一致するキー） → データを更新（一致したレコードを更新、一致しない場合は新しく挿入）。

**一般的な用途：** CRM からのプロファイル属性の更新、購読ステータスの更新、ロイヤルティポイントの同期、オプトイン/オプトアウト環境設定の更新。

**ベストプラクティス：** 一意の識別子を使用し、最初にデータを検証、サンプルを使用したテスト、定期的な更新のスケジュールを設定します。

**関連トピック：**

[&#x200B; データインポートガイド &#x200B;](../start/import.md) | [&#x200B; データ読み込みアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/data-loading-file.html?lang=ja){target="_blank"} | [&#x200B; データ更新アクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/update-data.html?lang=ja){target="_blank"}

+++

+++ 新しい受信者を識別してターゲットにするにはどうすればよいですか？

**[!UICONTROL 作成日]** フィールドをクエリして、特定の期間内に追加された受信者を選択します。

**自動ウェルカムワークフロー：** スケジューラー（毎日実行） → クエリ （新しい受信者を選択） →重複排除（オプション） →配信（ウェルカムメッセージ） → データを更新（「歓迎」とマーク）

**詳細：** 集計関数を使用して、最近の追加を動的に識別します。

**関連トピック：**

[&#x200B; クエリアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"} | [&#x200B; 集計の使用 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/data-management/using-aggregates.html?lang=ja){target="_blank"}

+++

+++ ワークフローアクティビティの使用方法

4 つのアクティビティカテゴリ：

**ターゲティング：** クエリ、分割、重複排除、エンリッチメント、積集合、和集合、除外（オーディエンスの定義/絞り込み）\
**フロー制御：** スケジューラー、待機、テスト、分岐、AND 結合、OR 結合、ジャンプ （ロジック/タイミングの管理）\
**アクション：** 配信、データの更新、データの読み込み/抽出、JavaScript コード （操作の実行）\
**イベント：** 外部シグナル、ファイルコレクター、HTTP 転送（トリガーへの React）

パレットからドラッグし、ダブルクリックして設定し、トランジションと接続します。

**関連トピック：**

[&#x200B; ターゲティングアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/targeting-activities.html?lang=ja){target="_blank"} | [&#x200B; フロー制御 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/flow-control-activities/flow-control-activities.html?lang=ja){target="_blank"} | [&#x200B; アクションアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/action-activities/action-activities.html?lang=ja){target="_blank"}

+++

+++ ワークフローのベストプラクティス

**デザイン：** 名前のクリア、ラベルや説明の追加、関連アクティビティのグループ化、複雑なプロセスの小さなワークフローへの分割\
**パフォーマンス：** クエリサイズの制限、一時テーブルの使用、ピーク外のスケジュール、過剰なループの回避\
**エラー処理：** エラーパスの追加、アラートの設定、サンプルを使用したテスト、ログの確認\
**メンテナンス：** 古くなったワークフロー、バージョン管理、複雑さの制限（&lt;20 個のアクティビティ）、テンプレートの使用をアーカイブする\
**セキュリティ：** 権限を適用し、一時データをクリーンアップし、値をハードコードしていない変数を使用します

**関連トピック：**

[&#x200B; ワークフローのベストプラクティスガイド &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/workflow-best-practices.html?lang=ja){target="_blank"} | [&#x200B; ワークフローの監視 &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/monitoring-workflows/monitor-workflow-execution.html?lang=ja){target="_blank"}

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


**関連トピック：**

[Campaign web UI での言語の変更 &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/start/connect-to-campaign#language-pref){target="_blank"} | [Campaign クライアントコンソールの概要 &#x200B;](connect.md)

+++

+++ Campaign Campaign コントロールパネルとは何ですか？また、アクセス方法を教えてください。

CampaignCampaign コントロールパネルは、Campaign インスタンス全体の設定を管理して使用状況を監視することで Campaign 管理者の効率を向上させる、web ベースの管理インターフェイスです。 Adobe サポートに問い合わせなくても重要なインスタンス設定を管理できるセルフサービス機能を提供します。

**主な機能：**

* **サブドメイン管理** - サブドメインのデリゲートと管理、SSL 証明書の監視
* **ストレージ監視** - データベースの使用状況を追跡し、ストレージの問題を防ぐ
* **SFTP 管理** - SFTP ストレージの監視、IP 許可リストおよび SSH キーの管理
* 許可リストに加える **インスタンス設定** - IP 設定、URL 権限の管理、インスタンスの詳細の確認を行います
* **アクティブなプロファイルの監視** – 資格に対するアクティブなプロファイルの使用状況を追跡します
* **パフォーマンス監視** - データベースとワークフローのパフォーマンスを監視します
* **メール配信品質** - DMARC、BIMI およびその他の認証レコードを設定します

**アクセス要件：**

* **管理者ユーザーのみ** - Campaign コントロールパネルは、管理者権限を持つユーザーに制限されます
* **Adobe IMS認証** - Adobe IDでAdobe Experience Cloudを通じてアクセスします
* **Campaign v8 Managed Cloud Services** - ホストされたインスタンスでのみ使用できます

**その他のリソース：**

[Campaign コントロールパネルドキュメント &#x200B;](https://experienceleague.adobe.com/ja/docs/control-panel/using/control-panel-home){target="_blank"} | [Campaign コントロールパネルチュートリアルビデオ &#x200B;](https://experienceleague.adobe.com/ja/docs/control-panel-learn/tutorials/control-panel-overview){target="_blank"}

+++

+++ ドメインの委任はどのような手順でおこないますか？

サブドメインとは、ブランドや様々なタイプのトラフィック（トランザクションメッセージ、マーケティング情報など）を分離するために使用できるドメインの区分です。

>[!NOTE]
>
>Managed Cloud Services のユーザーとしてサブドメインをアドビに委任する場合は、アドビにお問い合わせください。

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

**関連トピック：**

[&#x200B; 配信のトラッキングと監視 &#x200B;](../send/tracking.md) | [&#x200B; トラッキングするリンクを設定 &#x200B;](../send/tracked-links.md) | [&#x200B; トラッキングをテスト &#x200B;](../send/testing-tracking.md)

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

**関連トピック：**

[Campaign の配信品質について &#x200B;](../send/about-deliverability.md) | [&#x200B; 配信品質のベストプラクティスガイド &#x200B;](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}

+++

+++ Campaign を接続できる外部データベースはどれですか？ 

Campaign v8 は、主要なエンタープライズデータベースシステム（クラウドデータベース、エンタープライズデータベース、データウェアハウス、ビッグデータプラットフォーム）への Federated Data Access （FDA）接続をサポートしています。

サポートされるデータベースのバージョンと接続要件は異なります。 Campaign v8 バージョンの [&#x200B; 互換性マトリックス &#x200B;](compatibility-matrix.md) を確認して、特定のデータベースのサポートを確認し、FDA コネクタの適切なライセンスを確認します。

詳しくは [FDA 接続の設定 &#x200B;](../connect/fda.md) を参照してください。

+++

+++ Adobe Campaignを CRM システムと統合できますか？

はい。Campaign には、主要な CRM システムとの双方向同期用のネイティブ CRM コネクタが用意されています。 連絡先データ、リード、アカウント、配信ログ、トラッキングデータおよびエンゲージメント指標を同期します。 （API を使用して）スケジュールされた同期、手動の同期、リアルタイムの同期モードをサポートします。

Campaign の CRM コネクタアシスタントを使用して、フィールドのマッピング、テーブルの選択、同期のスケジュール設定を行います。 [&#x200B; 互換性マトリックス &#x200B;](compatibility-matrix.md) でサポートされている CRM バージョンを確認してください。

**関連トピック：**

[CRM コネクタの設定 &#x200B;](../connect/crm.md) | [&#x200B; ワークフロー CRM アクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/crm-connector.html){target="_blank"}

+++

+++ クライアントコンソールのキャッシュをクリアするにはどうすればよいですか？

クライアントコンソールキャッシュをクリアすると、表示と機能に関するよくある多くの問題が解決します。 キャッシュには、破損したり古くなったりする場合があるローカル設定ファイルが格納されます。

**キャッシュをクリアするタイミング：**

* 新しいブランディング要素（ロゴ、色）が正しく表示されない
* エクスポート／インポート機能に予期せずエラーが発生する
* 設定の変更後にインターフェイス要素が更新されない
* パフォーマンスの問題またはコンソールの応答が遅い
* 新しいクライアントコンソールバージョンにアップグレードした後

**キャッシュのクリア手順：**

1. Campaign クライアントコンソールを開きます
2. **[!UICONTROL ファイル]**&#x200B;メニューに移動します
3. 「**[!UICONTROL ローカルキャッシュをクリア…]**」を選択します
4. プロンプトが表示されたら、アクションを確認します
5. クライアントコンソールを再起動します

詳しくは、[&#x200B; クライアントコンソールのインストールと設定 &#x200B;](connect.md) を参照してください

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

**関連トピック：**

[UI 設定を指定 &#x200B;](../config/ui-settings.md) | [&#x200B; ユーザー権限 &#x200B;](gs-permissions.md)

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

**関連トピック：**

[&#x200B; データモデルの拡張 &#x200B;](../dev/extend-schema.md) | [&#x200B; スキーマ構造 &#x200B;](../dev/schemas.md) | [&#x200B; データモデルのベストプラクティス &#x200B;](../dev/datamodel-best-practices.md)

+++

## レポート {#reporting}

ビルトインレポート、カスタムレポート、キューブなどのデータ分析ツールなど、Campaign のレポート機能に関するインサイトを取得します。

+++ 新しいレポートを作成するにはどうすればよいですか？

Campaign では、ニーズや技術的な専門知識に応じて、複数のレポートオプション（ビルトインレポート、記述的分析、クライアントコンソールのカスタムレポートおよびキューブ）を提供します。

**レポートオプション：**

* **ビルトインレポート** - 「レポート **[!UICONTROL タブからアクセスできる、すぐに使用できる配信、キャンペーン、トラッキングレポート]**
* **記述的分析** - ウィザード方式のインターフェイスを使用した、任意のデータに関するクイック統計レポート
* **カスタムレポート** - レポートエディターを使用して技術ユーザーが作成した高度なレポート
* **キューブ** – 多次元データの調査とピボットテーブル分析

**重要：** Campaign は、特別なビジネスインテリジェンスツールとしてではなく、マーケティング業務のレポート作成用に設計されています。 複雑な分析ニーズの場合は、Adobe Analyticsまたは専用の BI プラットフォームとの統合を検討してください。

**関連トピック：**

[&#x200B; レポートの概要 &#x200B;](../reporting/gs-reporting.md) | [Campaign web UI レポート &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/reports/gs-reports){target="_blank"}

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

詳細情報 [&#x200B; 記述的分析 &#x200B;](../reporting/built-in-reports.md)

+++

+++ データに関する高度なレポートを設計するにはどうすればよいですか？

クライアントコンソールを使用して、複雑な分析機能を備えた高度なカスタムレポートを作成します。

クライアントコンソールでは、次の操作を実行できます。

* SQL クエリとカスタム計算を使用して複雑なレポートを作成する
* グラフ、テーブル、およびピボットテーブルを含む複数ページのレポートを作成する
* 条件付き書式と動的コンテンツのデザイン
* Campaign の完全なデータモデルと外部データベースへのアクセス（FDA）

方法について説明します [&#x200B; カスタムレポートの作成（クライアントコンソール） &#x200B;](../reporting/custom-reports.md)

+++

+++ キューブとは何ですか？また、キューブをレポートに使用するにはどうすればよいですか？

キューブは、ビジネスユーザーが技術的なスキルがなくてもピボットテーブルを通じて Campaign データを調査および分析できる多次元データ構造です。 複雑なレポートを簡素化する事前設定済みのデータモデルと考えることができます。 このレポートツールは、クライアントコンソールと Campaign web UI の両方で使用できます。

* 技術ユーザーは、ディメンション（時間、地域、チャネル）と測定（開封数、クリック数、売上高）を定義するキューブを作成および設定します
* ビジネスユーザーは、レポートの作成時にキューブを選択し、ディメンションをドラッグ&amp;ドロップしてデータを調べます
* データは、キューブ設定に基づいて自動的に集計および計算されます
* 結果は、ピボット・テーブル、チャート、または Excel にエクスポートして表示できます

方法を学ぶ [&#x200B; キューブを使用してデータを調べる &#x200B;](../reporting/gs-cubes.md)

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

**アドバンス分析：**

* 「回答 **[!UICONTROL タブからアンケートの回答にアクセスし]** データを書き出す
* ワークフローでの **[!UICONTROL 調査の回答]** アクティビティの使用による受信者の回答へのターゲット設定
* セグメント化とパーソナライゼーションのために、調査データを他のキャンペーンデータと組み合わせます
* 多次元の調査分析用のカスタムレポートおよびキューブの作成

**関連トピック：**

[&#x200B; 調査の概要 &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-classic/using/online-surveys/about-surveys){target="_blank"} | [&#x200B; 調査レポート &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-classic/using/online-surveys/publish-track-and-use-collected-data#reports-on-surveys){target="_blank"}

+++

+++ レポートへのアクセスを共有するにはどうすればよいですか？

Campaign のフォルダー権限とネームド権限を使用して、レポートの表示を制御します。

**アクセス制御方法：**

* **フォルダー権限** - ユーザーグループに対する適切なアクセス権を持つフォルダーにレポートを配置します
* **ネームド権限** - レポートを表示、作成または変更する権限を割り当てます。
* **表示コンテキスト** - レポートの表示場所（レポートフォルダー、キャンペーンタブ、配信画面）を定義します。

**設定：** 特定のフォルダーにレポートを保存→ オペレーターグループのフォルダーアクセスを設定→、レポートのプロパティと表示コンテキストを定義します。

**関連トピック：**

[&#x200B; カスタムレポート &#x200B;](../reporting/custom-reports.md) | [&#x200B; ユーザー権限 &#x200B;](gs-permissions.md)

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

**関連トピック：**

[&#x200B; カスタムレポート &#x200B;](../reporting/custom-reports.md) | [Campaign web UI レポート &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-web/v8/reports/gs-reports){target="_blank"}

+++

## デベロッパー {#developers}

データモデルの詳細、スキーマ、API、カスタマイズ機能など、開発者向けの技術情報にアクセスできます。

+++ Campaign データモデルとは何ですか？

Campaign のデータモデルは、ビジネスニーズに合わせて拡張できるビルトインテーブル（受信者、配信、キャンペーン）で構成される、スキーマ駆動型のリレーショナルデータベース構造です。

**主要な概念：** スキーマ（XML 定義）、組み込みテーブル、リンク（関係）、列挙（値リスト）、拡張機能（カスタムフィールド/テーブル）。

**メインスキーマ：** 受信者（`nms:recipient`）、配信（`nms:delivery`）、ワークフロー（`xtk:workflow`）、キャンペーン（`nms:operation`）、トラッキングログ。

データモデルの理解は、ワークフロー、クエリ、スキーマ拡張および統合に不可欠です。

**関連トピック：**

[Campaign データモデル &#x200B;](../dev/datamodel.md) | [&#x200B; データモデルのベストプラクティス &#x200B;](../dev/datamodel-best-practices.md)

+++

+++ Campaign スキーマの操作方法は？

スキーマは、テーブル構造、フィールドプロパティ、関係、インデックス、アクセス制御を指定して、Campaign のデータ構造を XML 形式で定義します。

**スキーマの操作：**

* **表示：** 管理/設定/データスキーマ **[!UICONTROL を使用してアクセス]**
* **拡張：** 拡張スキーマ（`cus:recipient` など）を作成し、コアスキーマを変更せずにカスタムフィールドを追加します
* **作成：** ビジネス固有のデータ用に新しいテーブルを作成する
* **更新：** ツール/詳細/データベース構造を更新 **[!UICONTROL を使用して変更を適用します]**

**一般的な用途：** 受信者テーブルへのカスタムフィールドの追加、カスタムテーブルの作成、関係の定義、ビジネス固有のモデルの実装をおこないます。

**重要：** ビルトインスキーマを直接変更しないでください。 アップグレードの互換性を高めるには、常に拡張スキーマを使用します。

**関連トピック：**

[&#x200B; スキーマの概要 &#x200B;](../dev/schemas.md) | [&#x200B; スキーマの拡張 &#x200B;](../dev/extend-schema.md)

+++

+++ カスタム受信者テーブルの使用方法は？

B2B アカウントのターゲティング、個別の購読者データ、外部システム、または標準の受信者テーブルではなくマルチブランドアーキテクチャを使用する場合は、カスタム受信者テーブルを使用します。

**実装：** 必須フィールド（メール、プライマリキー、除外）を含むカスタムスキーマの作成→ ターゲットマッピングの設定→配信テンプレートの更新→ ワークフロー/クエリの調整。

**主な考慮事項：** 必須の配信フィールドを含める必要があります。ワークフローやフォームを適応させる必要があり、実稼動環境の移行前に重要なテストを行います。

**ベストプラクティス：** 最初に標準の受信者テーブルを拡張します。 複雑さが増すので、本当に必要な場合にのみ、カスタムテーブルを使用してください。

**関連トピック：**

[&#x200B; カスタム受信者テーブル &#x200B;](../dev/custom-recipient.md) | [&#x200B; ターゲットマッピング &#x200B;](../audiences/target-mappings.md)

+++

+++ Campaign でクエリを定義するためのベストプラクティスは？

Campaign のクエリエディターでは、ワークフローアクティビティ、配信のターゲティング、リスト、レポート、フィルターに使用されるデータベースクエリを、SQL を使用せずに視覚的に作成します。

**ベストプラクティス：**

* シンプルな構成で開始 – 段階的に構築し、各ステップでテストを実施
* ディメンションのフィルタリングの使用 – テーブルの関係の活用
* パフォーマンスの最適化 – クエリされたフィールドのインデックスを作成し、複雑な計算を回避します
* 一貫性を保つために定義済みフィルターを再利用
* 最初に小さなサンプルでテスト
* 複雑なクエリのドキュメント化

**共通パターン：** ターゲット配信オープナー、非アクティブな連絡先の検索、行動別のセグメント化、以前の受信者の除外。

アドホック探索の **アクセス：**&#x200B;**[!UICONTROL ツール/汎用クエリエディター]**。

**関連トピック：**

[&#x200B; クエリエディター &#x200B;](../start/query-editor.md) | [&#x200B; クエリアクティビティ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/query.html?lang=ja){target="_blank"}

+++

+++ データパッケージをインポートするにはどうすればよいですか？

クライアントコンソールの **[!UICONTROL ツール/詳細設定/パッケージをインポート]** を使用して、パッケージをインポートします。 パッケージには、Campaign 設定（スキーマ、ワークフロー、タイポロジ）と、インスタンス間でデプロイするためのデータが含まれています。

**パッケージタイプ：** ユーザーパッケージ（カスタム設定）、プラットフォームパッケージ（Adobeが提供）、データパッケージ（実際のデータ）。

**ベストプラクティス：** 最初に開発環境でテストし、同じ/古いバージョンから読み込み、書き出す前にバックアップします。

詳しくは、[&#x200B; データパッケージの操作 &#x200B;](../dev/packages.md) を参照してください

+++

+++ Campaign v8 API のリストはどこで参照できますか？

Campaign v8 は、SOAP API （クライアントコンソール操作）、REST API （最新の統合）、JavaScript API （ワークフロースクリプティング）を提供します。

**一般的な用途：** CRM/ERP との統合、キャンペーンの自動化、データの同期、監視ソリューションの構築、外部インターフェイスの作成。

**アクセス：** [Campaign v8 API ドキュメント &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/index.html?lang=ja){target="_blank"}

+++


+++ API からワークフローを監視するにはどうすればよいですか？

Campaign API を使用すると、ワークフローをプログラムによって制御できます（開始、一時停止/再開、停止、ステータスのクエリ、ログの取得、アクティビティの進行状況の監視）。

**API エンドポイント：** `POST https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<workflowID>/commands`

**コマンド：** `{"method":"start"}`、`{"method":"pause"}`、`{"method":"resume"}`、`{"method":"stop"}`

**ユースケース：** 監視ダッシュボードの構築、自動アラートの実装、外部スケジューラーからのオーケストレーション、インスタンス間の依存関係の作成、カスタムレポートの生成。

**ベストプラクティス：** API 監視を監査証跡と組み合わせて、包括的なガバナンスを実現します。

[API を使用したワークフローの制御 &#x200B;](../dev/api/controlling-a-workflow.md) を参照してください。

+++

+++ データベース構造を更新するにはどうすればよいですか？

スキーマを変更（フィールドの追加、テーブルの作成、データタイプの変更）したら、**[!UICONTROL ツール/詳細/データベース構造を更新]** を使用して物理データベース構造を更新し、変更を適用します。

**必要な場合：** フィールドの追加、テーブルの作成または拡張、フィールドプロパティの変更、リンクの追加または削除、インデックスの作成。

**重要：** 最初にバックアップを実行し、開発でテストを実施し、大規模な変更のダウンタイムを計画し、Adobe サポート（Managed Cloud Services）と連携します。一部の変更によってデータが失われる可能性があることに注意してください。


**関連トピック：**

[&#x200B; データベース構造を更新 &#x200B;](../dev/update-database-structure.md) | [&#x200B; スキーマを拡張 &#x200B;](../dev/extend-schema.md)

+++

## プライバシー {#privacy}

GDPR や CCPA などのプライバシー規制の遵守や、データ主体からのリクエストの管理にAdobe Campaignがどのように役立つかを説明します。

+++ Campaign のプライバシーに関する主要な概念は何ですか？

Campaign は、データ主体の権利、同意、データ保持を管理するツールを使用して、プライバシー規制（GDPR、CCPA、PDPA、LGPD）の遵守に役立ちます。 主要な概念には、プライバシー規制、個人データの識別、データ主体の権利（アクセス、削除、ポータビリティ）、同意管理、データ保持ポリシーが含まれます。

データ管理者は、データ主体のリクエストの処理、同意記録の維持および透過的なデータ使用の確保を担当します。

詳細情報 [&#x200B; プライバシー管理 &#x200B;](../start/privacy.md)

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

詳細情報 [&#x200B; プライバシー管理 &#x200B;](../start/privacy.md)

+++

+++ Campaign でユーザーの同意を収集および管理する方法？

有効な同意を得るには、活発で具体的かつ十分な情報に基づいた取消可能な合意が必要となる。 ユーザーは、事前にチェックボックスをオンにしたり、同意として沈黙させたりすることなく、明示的なアクションを実行する必要があります。 目的に応じて同意を分離し（バンドルしない）、明確な説明を提供し、タイムスタンプ付きのレコードを維持します。

**ベストプラクティス：** きめ細かいオプトインオプションを提供し、同意を定期的に更新し、環境設定センターにアクセスしやすくし、同意を信頼構築として組み立てます。

**Campaign の技術的実装：**

Campaign には、同意をトラッキングするための購読サービス、環境設定センター、オプトアウトフラグ、カスタム同意フィールドが用意されています。

* 同意フィールド（日付、タイプ、ソース）用に受信者スキーマを拡張
* 同意タイプごとに購読サービスを作成する
* 環境設定センターの Web フォームの作成
* ワークフローを使用したターゲティングでの同意の実施
* 監査証跡の管理

法務担当者に相談して、実装が規制要件を満たしていることを確認します。

**関連トピック：**

[&#x200B; 定期購読サービス &#x200B;](../start/subscriptions.md) | [&#x200B; プライバシーと同意 &#x200B;](../start/privacy.md#consent-retention-roles) | [&#x200B; プライバシーの管理 &#x200B;](../start/privacy.md)

+++

+++ 削除リクエストの処理時に削除されるデータは何ですか？

Campaign は、受信者プロファイル、配信とトラッキングログ、所有関係を含むカスタムデータ、購読履歴など、データ主体にリンクされているすべてのデータを自動的に削除します。

**仕組み：** Campaign は、受信者へのリンクがスキーマ定義に `integrity="own"` まれているデータをすべて削除し、関連するテーブル間でカスケード削除を確実に行います。

スキーマのリンクの整合性を変更することで削除範囲をカスタマイズできますが、最初に法務担当者に相談してください。 削除は永続的で、元に戻すことはできません。

**関連トピック：**

[&#x200B; プライバシーの管理 &#x200B;](../start/privacy.md) | [&#x200B; スキーマリンク &#x200B;](../dev/schemas.md)

+++

+++ プライバシーの削除は配信レポートに影響を与えますか？

いいえ。キャンペーンレポートは、個々のログのライブクエリではなく、事前に計算された集計指標（送信済み、開封数、クリック数の合計）に基づいています。 個々の受信者データを削除しても、集計統計の履歴は変更されません。

配信統計とパフォーマンス指標の全体は元の状態に戻り、個々のトラッキングログや個人の詳細情報は削除されます。 これにより、データ主体の権限を尊重しながらマーケティング分析を維持できます。

**関連トピック：**

[&#x200B; プライバシーの管理 &#x200B;](../start/privacy.md) | [&#x200B; レポート &#x200B;](../reporting/gs-reporting.md)

+++

+++ 削除したデータの再インポートを防ぐ方法

Campaign だけでなく、すべてのソースシステムからデータを削除する必要があります。 多くの場合、データは外部システム（CRM、e コマース、データウェアハウス）からフローします。

**必要なアクション：** すべてのデータソースを特定し、ソースシステムから削除し、除外/抑制リストに追加し、削除フラグを尊重するようにインポートワークフローを更新して、プロセスを文書化します。

データ管理者は、テクノロジーエコシステム全体でデータを完全に削除する責任があります。

**関連トピック：**

[&#x200B; プライバシーの管理 &#x200B;](../start/privacy.md) | [&#x200B; ワークフローをインポート &#x200B;](../config/workflows.md)

+++

+++ 削除したユーザーは再度オプトインできますか？

はい。データ主体は、削除後に再度オプトインできます。 Campaign は、以前に削除されたデータへのリンクを含まない、完全に新しい受信者レコードを作成します。プロファイルは新しい状態で開始します。

Campaign の監査記録は、削除イベントと新しいプロファイル作成の両方を記録し、コンプライアンスを示し、削除後に自由に付与された新しいオプトインを示します。

**関連トピック：**

[&#x200B; プライバシーの管理 &#x200B;](../start/privacy.md) | [&#x200B; 購読 &#x200B;](../start/subscriptions.md)

+++

## まだサポートが必要ですか？ {#get-help}

お探しのものが見つからない場合は、 Adobe Campaign v8 を使用してうまく行くためのその他のリソースを以下に示します。

### コミュニティサポート

他の Campaign ユーザーやAdobeのエキスパートとつながり、知識を共有して回答を得ることができます。

* **[Adobe Campaign コミュニティ &#x200B;](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-classic/ct-p/adobe-campaign-classic-community){target="_blank"}** – 質問をする、ソリューションを共有する、Campaign コミュニティとつながる
* **[Experience League フォーラム &#x200B;](https://experienceleaguecommunities.adobe.com/){target="_blank"}** – すべてのAdobe製品のディスカッションを参照できます
* **[Campaign コミュニティの営業時間 &#x200B;](https://experienceleague.adobe.com/){target="_blank"}** - Adobeのエキスパートとのライブセッションに参加できます

### ドキュメントとラーニング

包括的なガイド、チュートリアル、トレーニング資料にアクセスできます。

* **[Campaign チュートリアル &#x200B;](https://experienceleague.adobe.com/docs/campaign-learn/tutorials/overview.html?lang=ja){target="_blank"}** – 段階的なビデオガイドと実践チュートリアル
* **[新機能](whats-new.md)** – 最新の機能と特徴
* **[リリースノート](release-notes.md)** – 現在および以前のリリース情報
* **[バージョンとアップグレード](upgrades.md)** - Campaign のバージョン、アップグレード、バージョンの確認方法について説明します。

### テクニカルリソース

詳細な技術ドキュメントや開発者向けリソースをご覧ください。

* **[Campaign API](https://experienceleague.adobe.com/developer/campaign-api/api/index.html?lang=ja){target="_blank"}** – 完全な API リファレンスドキュメント
* **[互換性マトリックス](compatibility-matrix.md)** - サポートされるシステムとバージョン
* **[バージョンとアップグレードに関する FAQ](upgrades.md)** - バージョンを確認し、アップグレードについて説明します

### サポートとサービス

Adobeのサポートチームにお問い合わせいただき、インスタンスを管理します。

* **[Adobe Admin Console](https://adminconsole.adobe.com/){target="_blank"}** - サポートケースを記録し、ユーザーを管理します
* **[Adobe カスタマーケア &#x200B;](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html){target="_blank"}** - サポートチームにお問い合わせください
* **[Campaign コントロールパネル](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=ja){target="_blank"}** - Campaign インスタンス設定の管理
* **[システムステータス &#x200B;](https://status.adobe.com/){target="_blank"}** - Adobe サービスステータスの確認

### トレーニングと資格認定

Adobeの公式トレーニングおよび認定プログラムを利用してスキルを向上させましょう。

* **[Experience League ヘルプ &#x200B;](https://experienceleague.adobe.com/en/browse/campaign/campaign-v8){target="_blank"}** - Campaign v8 のヘルプリソース（web UI およびクライアントコンソール）
* **[Adobe Digital Learning Services](https://learning.adobe.com/){target="_blank"}** - インストラクター主導および自習コース
* **[Adobe Campaign認定制度 &#x200B;](https://experienceleague.adobe.com/docs/certification/program/overview.html){target="_blank"}** - プロフェッショナル認定制度で専門知識を検証します
* **[Experience Leagueの学習パス &#x200B;](https://experienceleague.adobe.com/?lang=ja#dashboard/learning){target="_blank"}** - ガイド付き学習ジャーニー

### その他の役立つリソース

* **[Campaign Classic v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-classic/using/campaign-classic-home.html?lang=ja){target="_blank"}** - Classic v7 ユーザーのリファレンス
* **[Campaign Web UI ドキュメント &#x200B;](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}** – 新しい web インターフェイスガイド
* **[配信品質のベストプラクティス &#x200B;](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/introduction.html?lang=ja){target="_blank"}** - メール配信の最適化

