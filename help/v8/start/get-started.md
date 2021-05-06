---
solution: Campaign Classic
product: campaign
title: キャンペーンv8を使い始める
description: Discoverの主な機能、ユーザーインターフェイス、グローバルガイドライン
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 04b12907-3cb1-40f1-90b8-1524d84edf2d,e3e9b514-a69d-4650-b1b1-1b76b4f3d63f
translation-type: tm+mt
source-git-commit: 97cc2dd6f78fac2723306f06bea74e808c84b4ad
workflow-type: tm+mt
source-wordcount: '821'
ht-degree: 55%

---

# Adobe Campaignの使用を開始する{#gs-ac-v8}

Adobe Campaign は、クロスチャネルのカスタマーエクスペリエンスを構築するための基盤を提供し、視覚的なキャンペーンのオーケストレーションや、リアルタイムの対話管理、クロスチャネルのキャンペーン展開に必要な環境を提供します。

キャンペーンを使用して、次のことを行います。

* お客様がアクセス可能な表示を1つ使用してパーソナライズとエンゲージメントを推進
* 電子メール、モバイル、オンライン、オフラインの各チャネルを顧客ジャーニーに統合
* 意味のあるタイムリーなメッセージやオファーの配信を自動化

![](assets/ac-capabilities.png)

## 統合された顧客プロファイル {#integrated-customer-profile}

プロファイルは、強力なクラウドデータベースに集中化されています。 プロファイルを取得してこのデータベースを作成するために使用可能なメカニズムは多数あります。web フォームによるオンライン収集、テキストファイルの手動または自動インポート、会社のデータベースまたは他の情報システムによるレプリケーションなどです。Adobe Campaign を利用すれば、マーケティング履歴、購入情報、嗜好、CRM データおよび関連する PII データを包括的に集約し、分析をおこなって、行動に移すことができます。

Adobe Campaign では、受信者は配信（E メール、SMS など）の送信先となるデフォルトプロファイルです。データベースに格納された受信者データを活用して、任意の配信のターゲットを絞り込み、配信コンテンツにパーソナライゼーションデータを追加することができます。データベースには、他のタイプのプロファイルも含まれています。それらのプロファイルは用途が異なります。例えば、シードプロファイルは、配信を最終的なターゲットに送信する前のテスト用に作成されます。

:bulb:プロファイル管理の基本事項は、[この節](audiences.md)で説明します。

:bulb:[このセクション](import.md)で、キャンペーンにプロファイルを追加する方法を説明します。

## ターゲティングされたセグメント {#targeted-segmentation}

Adobe Campaign には、高度にターゲティングされた最適なオファーを作成できる、強力で使いやすいセグメント化機能とターゲティング機能が用意されています。記述的分析機能では、マーケティングキャンペーンのアップストリームおよびダウンストリームの情報を分析でき、フィルター管理およびグラフィカルクエリエディター機能を使用して、購読者の母集団やサンプルをフィルターしたり、無制限の数の基準を使用してターゲットグループを作成したりすることができます。

高度なデータ管理機能は、データ処理機能を強化します。データマートでモデル化されていないデータを含めることで、ターゲティングプロセスを簡素化し、最適化します。

:bulb:セグメント化、オーディエンスの作成、パーソナライゼーションについて詳しくは、[このセクション](audiences.md)を参照してください。

## クロスチャネルのキャンペーンオーケストレーション {#cross-channel-campaign-orchestration}

Adobe Campaign では、ターゲティングおよびパーソナライズされたキャンペーンの設計と編成を複数のチャネル（E メール、ダイレクトメール、SMS、プッシュ通知）でおこなうことができます。すべてのキャンペーンおよび通信をスケジュール、編成、設定、パーソナライズ、自動化、実行および測定するために必要なすべての機能が、単一のインターフェイスに用意されています。

:bulb:[このセクション](campaigns.md)でキャンペーンを設計、スケジュール、実行する方法を説明します。

## ワークフロー

Adobe Campaignオファーは、セグメント化、キャンペーン実行、ファイル処理などの複雑なプロセスを設計できる包括的なグラフィカル環境です。 例えば、ワークフローを使用して、サーバーからファイルをダウンロードし、圧縮を解除してから、そのレコードをAdobe Campaignデータベースにインポートできます。

ワークフローには、ユーザーを割り当てたり、実行されたタスクをタスクに承認させたりすることで、ユーザーを関与させることもできます。 つまり、1人または複数のタスクに対して、コンテンツの操作やターゲットの指定を行ったり、配達確認を承認した後でメッセージを送信したりできます。

ワークフローは、次のように異なるコンテキストで使用できます。

* オーディエンスの管理やメッセージの送信のターゲット設定です。
* データ管理(ETL)を使用してデータを操作します。
* キャンペーンデータベースにデータをインポートしています。
* データベースのクリーンアップ、追跡情報の回復などの技術的なプロセス

:bulb:[このセクション](../config/workflows.md)でワークフローを設計し、実行する方法を説明します。

## レポートと分析{#analysis-and-reporting}

Adobe Campaign では、顧客のデータおよびプロファイルを段階的にエンリッチメントすることによって、顧客の行動を監視および解釈できます。レポートおよび分析ツールを使用すると、各新規キャンペーンから利益を得たり、マーケティング戦略のターゲティングを向上させたり、投資への影響および投資利益率を最適化したりできます。

:bulb: レポート機能と追跡機能について詳しくは、[このセクション](reporting.md)を参照してください。

## Adobe Experience Cloud 統合 {#adobe-experience-cloud-integrations}

Adobe Campaign の配信機能と高度なキャンペーン管理機能を、ユーザーエクスペリエンスのパーソナライズを支援するために作成された一連のソリューション（Adobe Experience Manager、Adobe Analytics、Adobe Target または Adobe Experience Cloud Triggers など）と組み合わせることができます。Adobe IMS と統合し、Adobe ID を使用して Campaign にログインすることもできます。

:bulb:[このセクション](../connect/integration.md)では、Adobeサービスおよびソリューションとの統合方法を説明します。

## キャンペーン機能の詳細{#core-capabilities-and-add-ons}

Adobe Campaign は、ニーズやアーキテクチャに応じて対話型マーケティング機能を実装し、最適化するための一連の機能を備えています。これらの機能には、コア機能と、インストールしたパッケージおよび設定によって使える機能があります。製品の詳細については、以下を参照してください。[Adobe Campaignv8製品の説明](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-classic---product-description.html)。

:bulb:Campaign Classicに詳しい？ [このページ](capability-matrix.md)で、Campaign Classicとキャンペーンv8の主な違いを説明します。

## ワークスペースとカスタマイズ

キャンペーンワークスペースは、クライアントコンソールから使用できます。

:bulb: [このセクション](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-workspace.html)のキャンペーンワークスペースの使用方法を学びます

:bulb: [このセクション](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-ui-lists.html)でリストをカスタマイズする方法を説明します。

また、Webを介していくつかの機能にアクセスすることもできます。

