---
solution: Campaign v8
product: Adobe Campaign
title: Campaign v8の概要
description: 主な機能、ユーザーインターフェイス、およびグローバルガイドラインの確認
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 04b12907-3cb1-40f1-90b8-1524d84edf2d,e3e9b514-a69d-4650-b1b1-1b76b4f3d63f
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '898'
ht-degree: 43%

---

# Adobe Campaignの概要{#gs-ac-v8}

Adobe Campaignは、クロスチャネルの顧客体験と、視覚的なキャンペーン編成、リアルタイムのインタラクション管理、クロスチャネルの実行のための環境を設計するためのプラットフォームを提供します。

Campaignを使用して、次のことができます。

* **** 顧客に対する単一のアクセス可能な表示で、パーソナライゼーションとエンゲージメントを促進
* **** Eメール、モバイル、オンライン、オフラインの各チャネルをカスタマージャーニーに統合
* **** 意味のあるタイムリーなメッセージとオファーの自動配信

![](assets/ac-capabilities.png)

## 統合された顧客プロファイル {#integrated-customer-profile}

プロファイルは、強力なクラウドデータベースで一元管理されます。 プロファイルを取得してこのデータベースを作成するために使用可能なメカニズムは多数あります。web フォームによるオンライン収集、テキストファイルの手動または自動インポート、会社のデータベースまたは他の情報システムによるレプリケーションなどです。Adobe Campaign を利用すれば、マーケティング履歴、購入情報、嗜好、CRM データおよび関連する PII データを包括的に集約し、分析をおこなって、行動に移すことができます。

Adobe Campaign では、受信者は配信（E メール、SMS など）の送信先となるデフォルトプロファイルです。データベースに格納された受信者データを活用して、任意の配信のターゲットを絞り込み、配信コンテンツにパーソナライゼーションデータを追加することができます。データベースには、他のタイプのプロファイルも含まれています。それらのプロファイルは用途が異なります。例えば、シードプロファイルは、配信を最終的なターゲットに送信する前のテスト用に作成されます。

:bulb:プロファイル管理の基本については、[この節](audiences.md)で説明します。

:bulb:Campaignにプロファイルを追加する方法については、[この節](import.md)を参照してください。

## ターゲティングされたセグメント {#targeted-segmentation}

Adobe Campaign には、高度にターゲティングされた最適なオファーを作成できる、強力で使いやすいセグメント化機能とターゲティング機能が用意されています。記述的分析機能では、マーケティングキャンペーンのアップストリームおよびダウンストリームの情報を分析でき、フィルター管理およびグラフィカルクエリエディター機能を使用して、購読者の母集団やサンプルをフィルターしたり、無制限の数の基準を使用してターゲットグループを作成したりすることができます。

高度なデータ管理機能は、データ処理機能を強化します。データマートでモデル化されていないデータを含めることで、ターゲティングプロセスを簡素化し、最適化します。

:bulb:セグメント化、オーディエンス作成、パーソナライゼーションについて詳しくは、[この節](audiences.md)を参照してください。

## クロスチャネルのキャンペーンオーケストレーション {#cross-channel-campaign-orchestration}

Adobe Campaign では、ターゲティングおよびパーソナライズされたキャンペーンの設計と編成を複数のチャネル（E メール、ダイレクトメール、SMS、プッシュ通知）でおこなうことができます。すべてのキャンペーンおよび通信をスケジュール、編成、設定、パーソナライズ、自動化、実行および測定するために必要なすべての機能が、単一のインターフェイスに用意されています。

:bulb:キャンペーンの設計、スケジュール、実行方法については、[この節](campaigns.md)を参照してください。

## ワークフロー

Adobe Campaignは、セグメント化、キャンペーン実行、ファイル処理などの複雑なプロセスを設計できる、包括的なグラフィカル環境を提供します。 例えば、ワークフローを使用して、サーバーからファイルをダウンロードし、解凍して、そのレコードをAdobe Campaignデータベースにインポートできます。

ワークフローには、ユーザーにタスクを割り当てたり、実行されたタスクを承認させたりすることで、ユーザーを関与させることもできます。 つまり、1人または複数のユーザーにタスクを割り当てて、コンテンツの操作やターゲットの指定を行ったり、メッセージを送信する前に配達確認を承認したりできます。

ワークフローは、例えば、次のように、様々なコンテキストで使用できます。

* オーディエンスの管理やメッセージの送信のターゲティング。
* データ管理(ETL)を使用して、データを操作します。
* Campaignデータベースにデータをインポートします。
* データベースのクリーンアップ、トラッキング情報のリカバリなどの技術的なプロセス

:bulb:[この節](../config/workflows.md)では、ワークフローの設計と実行の方法について説明します。

## レポートと分析{#analysis-and-reporting}

Adobe Campaign では、顧客のデータおよびプロファイルを段階的にエンリッチメントすることによって、顧客の行動を監視および解釈できます。レポートおよび分析ツールを使用すると、各新規キャンペーンから利益を得たり、マーケティング戦略のターゲティングを向上させたり、投資への影響および投資利益率を最適化したりできます。

:bulb:レポートおよびトラッキング機能について詳しくは、[この節](reporting.md)を参照してください。

## Adobe Experience Cloud 統合 {#adobe-experience-cloud-integrations}

Adobe Campaign の配信機能と高度なキャンペーン管理機能を、ユーザーエクスペリエンスのパーソナライズを支援するために作成された一連のソリューション（Adobe Experience Manager、Adobe Analytics、Adobe Target または Adobe Experience Cloud Triggers など）と組み合わせることができます。

:bulb:[この節](../connect/integration.md)で、Adobeサービスやソリューションとの統合方法を説明します。

## Campaign機能の詳細{#core-capabilities-and-add-ons}

Adobe Campaignは、ニーズやアーキテクチャに応じて対話型マーケティング機能を実装し、最適化するための一連の機能を備えています。 コア機能と、設定にパッケージをインストールすることに依存する機能があります。 詳しい製品説明は、以下を参照してください。[Adobe Campaign v8の製品説明](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-classic---product-description.html)。

:bulb:Campaign Classic? [このページ](capability-matrix.md)では、Campaign ClassicとCampaign v8の主な違いを説明します。

## Workspaceとカスタマイズ

Campaignワークスペースは、[クライアントコンソール](../dev/general-architecture.md)で使用できます。

:bulb:[Campaignクライアントコンソール](../start/connect.md)の詳細をご覧ください。

Campaignのワークスペースは、ニーズに応じて調整できます。

:arrow_upper_right: [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-workspace.html)のCampaignワークスペースの使用方法を説明します

:arrow_upper_right: [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-ui-lists.html)でリストをカスタマイズする方法を説明します

一部の機能には、Web経由でアクセスすることもできます。

:bulb:[Campaign Webアクセスの詳細](../start/connect.md#web-access)。


## 言語

Campaign v8ユーザーインターフェイスは、次の言語で使用できます。

* 英語（英国）
* 英語（米国）
* フランス語
* ドイツ語
* 日本語

言語は、インストールプロセス中に選択されます。

>[!CAUTION]
>
>インスタンスの作成後は、言語を変更できません。

言語が影響を受ける日付および時間の形式。 詳しくは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-workspace.html?lang=en#date-and-time)を参照してください。

