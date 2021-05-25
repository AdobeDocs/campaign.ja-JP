---
solution: Campaign v8
product: Adobe Campaign
title: 実装のガイドライン
description: Campaign v8の実装方法を説明します
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 09562b6c-3d3d-4808-a70b-202172867f46
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '1221'
ht-degree: 4%

---

# Campaign実装のガイドライン

この節では、会社の要件に合わせてAdobe Campaignを調整する方法を学びます。 次のガイドラインに従って、実装を構造化し、整理します。

1. **設定の定義**:アクセス権の付与、クライアントコンソールの共有、チャネルの設定（eメール、プッシュ、sms）
1. **環境の準備**:プロファイルのインポート、オーディエンスの作成、ワークフローとキャンペーンテンプレートのデザイン、タイポロジルールの作成
1. **インスタンスのカスタマイズ**:新しいデータフィールドの作成、テーブル/スキーマの追加
1. **デプロイメントの拡張**:Adobeソリューション、その他の製品およびシステムへの接続 — コネクタ、マルチソリューション設定

>[!CAUTION]
>
>**キャンペーン管理Cloud Services**&#x200B;では、ライセンス契約の条件に従って、Adobeが環境と初期設定を設定しています。 インストール済みの組み込みパッケージ、組み込みスキーマまたはレポートを変更することはできません。
>
>Campaignアドオンまたはプロビジョニングされていない特定の機能を使用する必要がある場合は、**Adobeカスタマーケア**&#x200B;にお問い合わせください。

## 開始する前に

この節では、実際の実装を開始する前に確認し、考慮する必要がある、プライバシーとセキュリティに関する重要な情報について説明します。

### プライバシー

Adobe Campaignには、適用されるデータプライバシー法や受信者の好みに従ってCampaignを使用できるプロセスと設定が用意されています。 以下を管理できます。

* **データの取得**:Adobe Campaignでは、個人情報や機密情報などのデータを収集できます。したがって、受信者から同意を受け取り、管理する必要があります。 詳しくは、[Campaign Classicv7ドキュメント](https://experienceleague.corp.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=en#data-acquisition)を参照してください。

* **ユーザーの同意とデータ保持**:ユーザーの同意を得る方法、二重のオプトインサブスクリプションメカニズムを設定する方法、オプトアウトを容易にする方法、および [Campaign Classicプライバシーに関するドキュメントでのデータ保持の設定方法を説明します](https://experienceleague.corp.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=en#consent)

* **プライバシーとデータ保護規制**:欧州連合 [の一般データ保護規則(GDPR)、カリフォルニア州消費者プライバシー法(CCPA)およびその他の国際的なプライバシー要件、およびこれらの規制が組織およびAdobe Campaignに与える影響について詳しく](https://experienceleague.corp.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html) は、Campaign Classicのプライバシーに関するドキュメントを参照してください。

### セキュリティ

Adobe Campaignのセキュリティガイドラインと原則については、Campaignセキュリティチェックリスト](../config/security.md)を参照してください。[

## キャンペーン設定の定義

### ユーザーの追加と権限の付与

Campaignに手動でユーザーを追加し、ロール階層に合わせてグループに関連付けることができます。 その後、ユーザーはログインし、適切なデータと権限にアクセスできます。

:arrow_upper_right:[この節](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management.html?lang=en#getting-started)で、Adobe Campaignにユーザーを追加する方法を説明します。

### Campaignクライアントコンソールのインストール

アプリケーションのメインユーザーインターフェイスは、リッチクライアント、つまり、Adobe Campaignアプリケーションサーバーと標準のインターネットプロトコル（SOAP、HTTPなど）でのみ通信するネイティブアプリケーション(Windows)です。 Adobe Campaign Client Consoleは、生産性を高める優れたユーザーフレンドリー性を備え、（ローカルキャッシュを使用して）帯域幅をほとんど使用せず、簡単にデプロイできるように設計されています。 このコンソールは、インターネットブラウザーから導入でき、自動的に更新でき、HTTP(S)トラフィックのみを生成するので、特定のネットワーク設定は不要です。

:bulb:[Campaignクライアントコンソール](connect.md)の詳細をご覧ください。

## 環境の準備

メッセージの送信とマーケティングキャンペーンの作成を開始する前に、次の操作が必要です。

1. プロファイルのインポートとオーディエンスの作成

   Campaignは、連絡先をCloudデータベースに追加する際に役立ちます。 ファイルの読み込み、複数の連絡先の更新のスケジュール設定と自動化、Webでのデータの収集、受信者テーブルへのプロファイル情報の直接入力を行うことができます。

   :bulb:[プロファイルをインポートする方法を説明します](import.md)。

   オーディエンスはリストにグループ化され、ワークフロー全体で作成できます。 その後、クロスチャネル配信でターゲットに設定できます。

   :bulb:[オーディエンスの定義方法](audiences.md)を説明します。

1. テンプレートの作成

   キャンペーン、配信、ジョブ、ワークフローはすべて、主要な設定と機能を格納するテンプレートに基づいています。 各コンポーネントには組み込みのテンプレートが提供され、特定の設定が定義されていません。 テンプレートをニーズに合わせて設定および調整し、エンドユーザーが使用できるようにする必要があります。

   :arrow_upper_right:[電子メールテンプレートの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-delivery-templates/about-templates.html)

   :arrow_upper_right:キャンペーンテンプレートの使用方法については、[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-templates.html?lang=en#orchestrating-campaigns)を参照してください。

   :arrow_upper_right:[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/building-a-workflow.html?lang=en#workflow-templates)でワークフローテンプレートを設定する方法を説明します。

1. タイポロジルールの設定

   キャンペーンタイポロジルールを活用して、配信の送信をフィルター、制御および監視します。 例えば、疲労ルールは、受信者の過剰勧誘を避けるために、メッセージの頻度と数量を制御します。 実装すると、タイポロジルールが配信で参照されます。

   :arrow_upper_right:[タイポロジと疲労管理の詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/campaign-optimization/about-campaign-typologies.html?lang=en#orchestrating-campaigns)

1. Campaignの組み込みデータモデルの概要

   Adobe Campaign には、事前定義済みのデータモデルが付属します。環境を実装およびカスタマイズするには、Adobe Campaignデータモデルの組み込みのテーブルと、それらの相互関係について理解している必要があります。

   :bulb:[Campaignデータモデル](../dev/datamodel.md)の詳細をご覧ください。

## インスタンスのカスタマイズ

様々なCampaign領域および機能をカスタマイズできます。 ほとんどのお客様は、次の3つをカスタマイズします。

1. **テーブルとスキーマ**

   Adobe Campaignには、データを識別する次のような一般的なスキーマが用意されています。受信者、配信ログ、購読などが含まれます。

   :bulb:[Campaignの組み込みデータモデル](../dev/datamodel.md)について詳しくは、この節を参照してください。

   :bulb:既存のスキーマを拡張したり、新しいスキーマを一から作成したりできます。 詳しくは、[このページ](../dev/customize.md)を参照してください。

1. **ダッシュボードとリスト**

   リストの設定、フィールドの追加と削除、列のカスタマイズを簡単に行うことができます。

   :bulb:Campaignでフィルターとリストを管理する方法については、[このページ](../dev/customize.md#gs-lists-and-filters)を参照してください。

   また、必要に応じてCampaignデータを表示する新しいダッシュボードを作成することもできます。

   :bulb:詳しくは、[このページ](../dev/customize.md#gs-custom-dashboards)を参照してください。

1. **レポート**

   Campaignには、配信の監視、URLとクリックストリーム、トラッキング、配信品質の指標などに関する組み込みレポートが用意されています。

   Adobe Campaign では、組み込みレポートのほかにも、様々なコンテキストで様々なニーズに応えるレポートを生成できます。このドキュメントでは、使用モードと実装モードの基本事項について詳しく説明します。

   :bulb:Campaignのレポート機能について詳しくは、[このページ](reporting.md)を参照してください。


## キャンペーンの自動化の設定

複数のチャネルをまたいで複雑なマーケティングキャンペーンを様々なオーディエンスに調整するには、キャンペーンの自動化機能を利用します。

* ワークフロー：プロセスとデータの管理

* 購読とランディングページ

* タイポロジルール：疲労および制御管理

## デプロイメントの拡張

### マルチソリューションの実装

他のAdobeソリューションを使用している場合は、Campaign環境に接続し、機能を組み合わせることができます。

* Campaign -Journey Orchestration
* キャンペーン — リアルタイムCDP
* Campaign -Experience Cloudトリガー
* Campaign -Experience Manager
* Campaign - Target
* Campaign -Audience Manager/Peopleコアサービス
* キャンペーン — アセット
* Campaign - Analytics Dataコネクタ


シングルサインオン(SSO)を使用してCampaignに接続することもできます。 詳しくは、[このページ](connect.md)を参照してください。

:bulb:Adobe Campaign [と統合できるAdobeソリューションの完全なリストについては、このページ](../connect/integration.md)を参照してください。

### コネクタ

Campaignをサードパーティのシステムと接続して、幅広い機能を組み合わせ、プロセスを自動化します。

:bulb:利用可能なコネクタについて詳しくは、[この節](../connect/integration.md)を参照してください。

**CRMをCampaignに接続**

Adobe CampaignプラットフォームをCRMサードパーティシステムに接続し、データを同期できます。連絡先、アカウント、購入など

:bulb:CRMシステムをCampaignに接続する方法については、[この節](../connect/integration.md#gs-crm-connectors)を参照してください。

**外部データベースへの接続**

Federated Data Access(FDA)モジュールを使用して、Campaign Cloudデータベースを外部システムに接続できます。

:bulb:Campaign FDAモジュールを設定して、[この節](../connect/integration.md#gs-fda)でアクセスパラメーターを定義する方法を説明します。
