---
product: Adobe Campaign
title: 実装のガイドライン
description: Campaign v8 の実装方法を説明します
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 09562b6c-3d3d-4808-a70b-202172867f46
source-git-commit: c61d8aa8e0a68ccc81a6141782f860daf061bc61
workflow-type: tm+mt
source-wordcount: '1214'
ht-degree: 84%

---

# Campaign 実装のガイドライン

この節では、会社の要件に合わせて Adobe Campaign を調整する方法を説明します。次のガイドラインに従って、実装を構成し整理します。

1. **設定の定義**：アクセスの許可、クライアントコンソールの共有、チャネルの設定（E メール、プッシュ、SMS）
1. **環境の準備**：プロファイルのインポート，オーディエンスの作成，ワークフローとキャンペーンテンプレートの設計、タイポロジルールの作成
1. **インスタンスのカスタマイズ**：新しいデータフィールドの作成、テーブル／スキーマの追加
1. **デプロイメントの拡張**：Adobe ソリューションや、コネクタ、マルチソリューション設定などのその他の製品およびシステムへの接続

>[!CAUTION]
>
>**Campaign Managed Cloud Services** の環境と初期設定は、ライセンス契約の条件に従い、アドビによって設定されています。インストール済みの組み込みパッケージ、組み込みのスキーマやレポートなどは変更できません。
>
>Campaign アドオンまたは提供されていない特定の機能を使用する必要がある場合は、**アドビのカスタマーサポート**&#x200B;にお問い合わせください。

## 開始する前に

この節には、実際に実装を始める前に確認し考慮する必要があるプライバシーとセキュリティに関する重要な情報が含まれています。

### プライバシー

Adobe Campaign には、該当するデータプライバシー保護法や受信者の環境設定に応じて Campaign を使用できるプロセスと設定が用意されています。以下を管理できます。

* **データ獲得**：Adobe Campaign を使用すると、個人情報や機密情報を含め、データを収集できます。したがって、受信者の同意を得て、管理する必要があります。詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=ja#data-acquisition)を参照してください

* **ユーザーの同意とデータ保持**：ユーザーの同意を得る方法、ダブルオプトインの購読メカニズムを設定する方法、オプトアウトを促進する方法、データ保持を設定する方法については、[Campaign Classic のプライバシーに関するドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=ja#consent)を参照してください。

* **プライバシーとデータ保護に関する規制**：EU 一般データ保護規則（GDPR）、カリフォルニア州消費者プライバシー法（CCPA）、その他の国際的なプライバシー要件、およびこれらの規制がご自身の企業や Adobe Campaign に与える影響については、[Campaign Classic のプライバシーに関するドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

### セキュリティ

Adobe Campaign のセキュリティガイドラインと原則については、[Campaign セキュリティチェックリスト](../config/security.md)を参照してください。

## Campaign 設定の定義

### ユーザーの追加と権限の付与

Campaign にユーザーを手動で追加し、それらのユーザーを、役割の階層に合わせてグループに関連付けることができます。 その後、ユーザーはログインし、適切なデータと権限にアクセスできます。

↗️[この節](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management.html?lang=ja#getting-started){target=&quot;_blank&quot;}でAdobe Campaignにユーザーを追加する方法を説明します。

### Campaign クライアントコンソールのインストール

アプリケーションのメインユーザーインターフェイスはリッチクライアントです。つまり、標準のインターネットプロトコル（SOAP、HTTP など）でのみ Adobe Campaign アプリケーションサーバーを通信するネイティブアプリケーション（Windows）です。Adobe Campaign クライアントコンソールは、生産性に優れた使いやすさを備え、帯域幅をほとんど使用せず（ローカルキャッシュを使用）、デプロイメントが容易になるよう設計されています。 このコンソールはインターネットブラウザーからデプロイし、自動的に更新できます。発生するトラフィックは HTTP(S) のみであり、特別なネットワーク構成は不要です。

??[Campaignクライアントコンソール](connect.md)の詳細をご覧ください。

## 環境の準備

メッセージの送信とマーケティングキャンペーンの作成を開始する前に、以下を行う必要があります。

1. プロファイルのインポートとオーディエンスの作成

   Campaign を使用すると、クラウドデータベースに連絡先を追加できます。 ファイルを読み込んだり、複数の連絡先の更新をスケジュールして自動化したり、web でデータを収集したり、プロファイル情報を受信者テーブルに直接入力したりできます。

   ??[プロファイルをインポートする方法を説明します](import.md)。

   オーディエンスはリストにグループ化され、ワークフローを通じて作成できます。その後、クロスチャネル配信でターゲットに設定できます。

   ??[オーディエンスの定義方法](audiences.md)を説明します。

1. テンプレートの作成

   キャンペーン、配信、ジョブまたはワークフローはすべてテンプレートに基づいています。テンプレートには主要な設定と機能が含まれています。組み込みテンプレートはコンポーネントごとに提供されていますが、具体的な設定は何も定義されていません。 ニーズに合わせてテンプレートを設定および調整して、エンドユーザーから利用できるようにする必要があります。

   ↗️ [電子メールテンプレートの詳細](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-delivery-templates/about-templates.html?lang=ja){target=&quot;_blank&quot;}

   ↗️ [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-templates.html?lang=ja#orchestrating-campaigns){target=&quot;_blank&quot;}でキャンペーンテンプレートを使用する方法を説明します

   ↗️ [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/building-a-workflow.html?lang=ja#workflow-templates){target=&quot;_blank&quot;}でワークフローテンプレートを設定する方法を説明します

1. タイポロジルールの設定

   Campaign タイポロジルールを活用して、配信送信をフィルタリング、制御、監視します。例えば、疲労ルールでは、受信者の過剰勧誘を避けるために、メッセージの頻度と数量を制御します。実装が完了すると、タイポロジルールが配信で参照されます。

   ↗️ [Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/campaign-optimization/about-campaign-typologies.html?lang=ja#orchestrating-campaigns){target=&quot;_blank&quot;}でタイポロジと疲労管理について詳しく説明します

1. Campaign の組み込みデータモデルの理解

   Adobe Campaign には、事前定義済みのデータモデルが付属しています。環境を実装およびカスタマイズするには、Adobe Campaign データモデルの組み込みテーブルとそれらの関係を理解しておく必要があります。

   ??[Campaignデータモデル](../dev/datamodel.md)の詳細をご覧ください。

## インスタンスのカスタマイズ

Campaign の様々な領域や機能をカスタマイズできます。ほとんどの顧客がカスタマイズしているのは、次の 3 つです。

1. **テーブルとスキーマ**

   Adobe Campaign には、受信者、配信ログ、購読などのデータを識別するための一般的なスキーマが用意されています。

   ??[Campaignの組み込みデータモデル](../dev/datamodel.md)について詳しくは、この節を参照してください。

   ??既存のスキーマを拡張したり、新しいスキーマを一から作成したりできます。 詳しくは、[このページ](../dev/customize.md)を参照してください。

1. **ダッシュボードとリスト**

   リストの設定、フィールドの追加と削除、列のカスタマイズなどを簡単に行えます。

   ??Campaignでフィルターとリストを管理する方法については、[このページ](../dev/customize.md#gs-lists-and-filters)を参照してください。

   新しいダッシュボードを作成して、要件に応じた Campaign データを表示することもできます。

   ??詳しくは、[このページ](../dev/customize.md#gs-custom-dashboards)を参照してください。

1. **レポート**

   Campaign には、配信の監視、URL およびクリックストリーム、トラッキング、配信品質インジケーターなどに関する一連の組み込みレポートが用意されています。

   組み込みレポートに加えて、Adobe Campaign では、様々なコンテキストで様々なニーズに応えるレポートを生成できます。このドキュメントでは、使用モードと実装モードの原則について詳しく説明します。

   ??Campaignのレポート機能について詳しくは、[このページ](reporting.md)を参照してください。


## キャンペーン自動処理の設定

複数のチャネルにわたって複雑なマーケティングキャンペーンを様々なオーディエンスに合わせて調整するには、Campaign 自動処理機能を利用します。

* ワークフロー：プロセスとデータの管理

* 購読とランディングページ

* タイポロジルール：疲労と制御の管理

## デプロイメントの拡張

### 複数のソリューションの実装

他のアドビのソリューションを使用している場合は、それらを Campaign 環境に接続して機能を組み合わせることができます。

* Campaign - Journey Orchestration
* Campaign - リアルタイム CDP
* Campaign - Experience Cloud トリガー
* Campaign - Experience Manager
* Campaign - Target
* Campaign - Audience Manager／People コアサービス
* Campaign - Asset
* Campaign - Analytics Data Connector


シングルサインオン（SSO）を使用して Campaign に接続することもできます。詳しくは、[このページ](connect.md)を参照してください。

??Adobe Campaign [と統合できるAdobeソリューションの完全なリストについては、このページ](../connect/integration.md)を参照してください。

### コネクタ

Campaign をサードパーティシステムに接続して、幅広い機能を組み合わせ、プロセスを自動化します。

??利用可能なコネクタについて詳しくは、[この節](../connect/integration.md)を参照してください。

**Campaign への CRM の接続**

Adobe Campaign プラットフォームを CRM サードパーティシステムに接続し、連絡先、アカウント、購入などのデータを同期できます。

??CRMシステムをCampaignに接続する方法については、[この節](../connect/integration.md#gs-crm-connectors)を参照してください。

**外部データベースへの接続**

Federated Data Access（FDA）モジュールを通じて、Campaign クラウドデータベースを外部システムに接続できます。

??Campaign FDAモジュールを設定して、[この節](../connect/integration.md#gs-fda)でアクセスパラメーターを定義する方法を説明します。
