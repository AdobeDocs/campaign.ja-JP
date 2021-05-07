---
solution: Campaign
product: Adobe Campaign
title: 導入のガイドライン
description: キャンペーンv8の実装方法
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 09562b6c-3d3d-4808-a70b-202172867f46
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '1153'
ht-degree: 4%

---

# キャンペーン導入のガイドライン

この節では、会社の要件に合わせてAdobe Campaignを調整する方法を学びます。 次のガイドラインに従って、実装を構成し、整理します。

1. **設定の定義**:アクセスの許可，クライアントコンソールの共有，チャネルの設定（電子メール、プッシュ、sms）
1. **環境の準備**:プロファイルの読み込み，オーディエンスの作成，デザインワークフローとキャンペーンテンプレート,タイポロジルールの作成
1. **インスタンスのカスタマイズ**:新しいデータフィールドの作成、テーブル/スキーマの追加
1. **展開の拡張**:Adobeソリューション、その他の製品およびシステムへの接続 — コネクタ、マルチソリューション設定

## 開始する前に

この節では、開発を開始する前にプライバシーとセキュリティに関する注意が必要となる、導入に特有の開発者向けの情報について説明します。

### プライバシー

Adobe Campaignには、該当するデータプライバシー保護法や受信者の好みに応じてキャンペーンを使用できるプロセスと設定が付属しています。 以下を管理できます。

* **データの取得**:Adobe Campaignを使用すると、個人情報や機密情報などのデータを収集できます。したがって、受信者の同意を受け取り、管理する必要があります。 詳細については、[Campaign Classicドキュメント](https://experienceleague.corp.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=en#data-acquisition)を参照してください

* **ユーザーの同意とデータ保持**:ユーザーの同意を得る方法、重複のオプトイン購読メカニズムを設定する方法、 [Campaign Classicのプライバシーに関するドキュメントでのデータ保持率のオプトアウトを容易にする方法について説明します。](https://experienceleague.corp.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=en#consent)

* **プライバシーとデータ保護に関する規制**:欧州和集合のGDPR(General Data Protection Regulation)、California Consumer Privacy Act(CCPA)、その他の国際的なプライバシー要件、およびこれらの規制が貴社やAdobe Campaignに与える影響については、 [Campaign Classicのプライバシーに関する](https://experienceleague.corp.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html) ドキュメントを参照してください。

### セキュリティ

[キャンペーンセキュリティチェックリスト](../config/security.md)のAdobe Campaignを使用したセキュリティガイドラインと原則について説明します)。

## キャンペーン設定の定義

### 追加ユーザーと権限の付与

手動でキャンペーンにユーザーを追加し、ロール階層に合わせてグループに関連付けることができます。 その後、ユーザーはログインし、適切なデータと権限にアクセスできます。

:arrow_upper_right:[このセクション](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management.html?lang=en#getting-started)で、Adobe Campaignにユーザーを追加する方法を説明します。

### キャンペーンクライアントコンソールのインストール

アプリケーションのメインユーザーインターフェイスは、リッチクライアント、つまり、標準のインターネットプロトコル（SOAP、HTTPなど）とのみAdobe Campaignアプリケーションサーバーと通信するネイティブアプリケーション(Windows)です。 Adobe Campaignクライアントコンソールは、生産性を高める優れた使い勝手を備え、（ローカルキャッシュを使用して）帯域幅が非常に少なく、容易に導入できるように設計されています。 このコンソールは、インターネットブラウザから導入でき、自動的に更新でき、HTTPトラフィックのみを生成するので、特定のネットワーク構成は不要です。

:bulb:[キャンペーンクライアントコンソール](connect.md)の詳細を表示します。

## 環境の準備

メッセージの送信を開始し、マーケティングキャンペーンを作成する前に、次の操作を行う必要があります。

1. プロファイルの読み込みとオーディエンスの作成

   キャンペーンを使用すると、Cloudデータベースに連絡先を追加できます。 ファイルの読み込み、複数の連絡先の更新のスケジュール設定と自動化、Web上でのデータの収集、プロファイル情報の受信者テーブルへの直接入力を行うことができます。

   :bulb:[プロファイルを読み込む方法](import.md)を学びます。

   オーディエンスはリストにグループ化され、ワークフローを通じて作成できます。 その後、チャネル間の配信でターゲットを設定できます。

   :bulb:[オーディエンスの定義方法](audiences.md)を学びます。

1. テンプレートの作成

   キャンペーン、配信、ジョブ、またはワークフローはすべてテンプレートに基づいており、テンプレートには主な設定と機能が格納されています。 コンポーネントごとに組み込みテンプレートが提供され、特定の設定が定義されていません。 テンプレートを設定してニーズに合わせ、エンドユーザーが利用できるようにする必要があります。

   :arrow_upper_right:[電子メールテンプレートの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-delivery-templates/about-templates.html)

   :arrow_upper_right:[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-templates.html?lang=en#orchestrating-campaigns)のキャンペーンテンプレートの使い方を学ぶ

   :arrow_upper_right:[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/building-a-workflow.html?lang=en#workflow-templates)でワークフローテンプレートを構成する方法を学びます

1. タイポロジルールの設定

   キャンペーンタイポロジルールを活用して、配信送信をフィルタ、制御、監視します。 例えば、疲労ルールは、受信者の過剰勧誘を避けるために、メッセージの頻度と数量を制御します。 実装が完了すると、タイポロジルールは配信で参照されます。

   :arrow_upper_right:[類型性と疲労管理に関する詳細情報](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/campaign-optimization/about-campaign-typologies.html?lang=en#orchestrating-campaigns)

1. キャンペーンの組み込みデータモデルを理解する

   Adobe Campaign には、事前定義済みのデータモデルが付属します。環境を実装およびカスタマイズするには、Adobe Campaignデータモデルの組み込みテーブルとその操作に関する知識が必要です。

   :bulb:[キャンペーンデータモデル](../dev/datamodel.md)の詳細を表示します。

## インスタンスのカスタマイズ

様々なキャンペーン領域や機能をカスタマイズできます。 ほとんどのお客様は、次の3つをカスタマイズしています。

1. **テーブルとスキーマ**

   Adobe Campaignには、データを識別する次のような一般的なスキーマが用意されています。受信者、配信ログ、購読など。

   :bulb:[キャンペーン組み込みのdatamodel](../dev/datamodel.md)の詳細については、この節を参照してください。

   :bulb:既存のスキーマを拡張したり、新規スキーマを新規に作成したりできます。 詳しくは、[このページ](../dev/customize.md)を参照してください。

1. **ダッシュボードとリスト**

   リストの設定、フィールドの追加と削除、および列のカスタマイズが簡単に行えます。

   :bulb:[このページ](../dev/customize.md#gs-lists-and-filters)のキャンペーンでフィルターとリストを管理する方法を説明します。

   また、必要に応じてキャンペーンデータを表示する新しいダッシュボードを作成することもできます。

   :bulb:詳しくは、[このページ](../dev/customize.md#gs-custom-dashboards)を参照してください。

1. **レポート**

   キャンペーンは、配信の監視、URLおよびクリックストリーム、追跡、配信品質インジケーターなどに関する組み込みのレポートを提供します。

   Adobe Campaign では、組み込みレポートのほかにも、様々なコンテキストで様々なニーズに応えるレポートを生成できます。このドキュメントでは、使用モードと実装モードの基本事項について詳しく説明します。

   :bulb:キャンペーンのレポート機能について詳しくは、[このページ](reporting.md)を参照してください。


## キャンペーン自動化の設定

複数のチャネル間で複雑なマーケティングキャンペーンを異なるオーディエンスに調整するには、キャンペーン自動化機能を利用します。

* ワークフロー:プロセスとデータの管理

* 購読とランディングページ

* タイポロジルール:疲労管理

## 展開の拡張

### 複数のソリューションの実装

他のAdobeソリューションを使用している場合は、キャンペーン環境に接続して機能を組み合わせることができます。

* キャンペーン-Journey Orchestration
* キャンペーン：リアルタイムCDP
* キャンペーン-Experience Cloudトリガー
* キャンペーン-Experience Manager
* キャンペーン-ターゲット
* キャンペーン-Audience Manager/Peopleコアサービス
* キャンペーン — アセット
* キャンペーン- Analytics Data Connectors


シングルサインオン(SSO)を使用してキャンペーンに接続することもできます。 詳しくは、[このページ](connect.md)を参照してください。

:bulb:このページ](../connect/integration.md)内のAdobe Campaign[と統合できるAdobeソリューションの完全なリストを見つけてください。

### コネクタ

キャンペーンをサードパーティ製システムと接続して、幅広い機能を組み合わせ、プロセスを自動化します。

:bulb:使用可能なコネクタの詳細については、[このセクション](../connect/integration.md)を参照してください。

**CRMのキャンペーンへの接続**

Adobe CampaignプラットフォームをCRMサードパーティ製システムに接続し、次のデータを同期できます。連絡先、アカウント、購入など

:bulb:[このセクション](../connect/integration.md#gs-crm-connectors)のキャンペーンにCRMシステムを接続する方法を説明します。

**外部データベースに接続**

キャンペーン(FDA)モジュールを使用して、Federated Data Accessクラウドデータベースを外部システムに接続できます。

:bulb:[このセクション](../connect/integration.md#gs-fda)で、キャンペーンFDAモジュールを設定してアクセスパラメータを定義する方法を学びます
