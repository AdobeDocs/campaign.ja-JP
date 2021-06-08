---
product: Adobe Campaign
title: Campaign v8 の概要
description: Campaignを初めてお使いの場合 使い始める方法を理解する
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 04b12907-3cb1-40f1-90b8-1524d84edf2d,e3e9b514-a69d-4650-b1b1-1b76b4f3d63f
source-git-commit: 8b31e24e0b6cfb699179e62366bc6706e9019382
workflow-type: tm+mt
source-wordcount: '894'
ht-degree: 78%

---

# Adobe Campaign の概要{#gs-ac-v8}

Adobe Campaign は、クロスチャネルのカスタマーエクスペリエンスを設計するためのプラットフォームと、視覚的なキャンペーンオーケストレーション、リアルタイムインタラクション管理、およびクロスチャネル実行のための環境を提供します。

Campaign を使用して、次のことを実行します。

* **顧客の単一のアクセス可能なビューを通じて、パーソナライズとエンゲージメントを推進**
* **メール、モバイル、オンライン、オフラインの各チャネルをカスタマージャーニーに統合**
* **意味のあるタイムリーなメッセージやオファーの配信を自動化**

![](assets/ac-capabilities.png)

## Integrated Customer Profile {#integrated-customer-profile}

プロファイルは強力なクラウドデータベースに一元化されています。 プロファイルを取得してこのデータベースを作成するために使用可能なメカニズムは多数あります。web フォームによるオンライン収集、テキストファイルの手動または自動インポート、会社のデータベースまたは他の情報システムによるレプリケーションなどです。Adobe Campaign を利用すれば、マーケティング履歴、購入情報、嗜好、CRM データおよび関連する PII データを包括的に集約し、分析をおこなって、行動に移すことができます。

Adobe Campaign では、受信者は配信（E メール、SMS など）の送信先となるデフォルトプロファイルです。データベースに格納された受信者データを活用して、任意の配信のターゲットを絞り込み、配信コンテンツにパーソナライゼーションデータを追加することができます。データベースには、他のタイプのプロファイルも含まれています。それらのプロファイルは用途が異なります。例えば、シードプロファイルは、配信を最終的なターゲットに送信する前のテスト用に作成されます。

[!DNL :bulb:] プロファイル管理の基本については、この節 [を参照してください](audiences.md)。

[!DNL :bulb:] Campaignにプロファイルを追加する方法については、この節 [を参照してください](import.md)。

## ターゲティングされたセグメント {#targeted-segmentation}

Adobe Campaign には、高度にターゲティングされた最適なオファーを作成できる、強力で使いやすいセグメント化機能とターゲティング機能が用意されています。記述的分析機能を使用すると、マーケティングキャンペーンのアップストリームおよびダウンストリームの情報を分析できます。また、フィルター管理およびグラフィカルクエリエディター機能を使用して、購読者の母集団やサンプルをフィルタリングしたり、無制限の数の基準に基づいてターゲットグループを作成したりできます。

高度なデータ管理機能は、データ処理機能を拡張します。 データマートにモデル化されていないデータを含めることで、ターゲティングプロセスを簡素化し、最適化します。

[!DNL :bulb:] セグメント化、オーディエンス作成、パーソナライゼーションについて詳しくは、この節 [を参照してください](audiences.md)。

## クロスチャネルのキャンペーンオーケストレーション {#cross-channel-campaign-orchestration}

Adobe Campaign を使用すると、メール、ダイレクトメール、SMS、プッシュ通知などの複数のチャネルで、ターゲットを絞りパーソナライズしたキャンペーンの設計とオーケストレーションを行えます。1 つのインターフェイスを通して、すべてのキャンペーンとコミュニケーションのスケジュール作成、オーケストレーション、設定、パーソナライズ、自動化、実施、測定などに必要なすべての機能を利用することができます。

[!DNL :bulb:] キャンペーンの設計、スケジュール、実行方法については、この節 [を参照してください](campaigns.md)。

## ワークフロー

Adobe Campaign は、セグメント化、キャンペーン実行、ファイル処理などの複雑なプロセスを設計できる包括的なグラフィカル環境を提供します。 例えば、ワークフローを使用して、サーバーからファイルをダウンロードした後、ファイルを解凍し、ファイル内のレコードを Adobe Campaign データベースに読み込むことができます。

ワークフローには、ユーザーにタスクを割り当てたり、実行されたタスクを承認させることによって、ユーザーの関与を促すこともできます。 つまり、1 人または複数のユーザーにタスクを割り当ててコンテンツで作業したり、ターゲットを指定したり、メッセージを送信する前に証明を承認したりできます。

ワークフローは、次のように異なるコンテキストで使用できます。

* オーディエンスを管理したり、メッセージを送信したりするためのターゲティング。
* データを操作するためのデータ管理（ETL）。
* Campaign データベースへのデータの読み込み。
* データベースのクリーンアップ、トラッキング情報の復元などの技術的プロセス。

[!DNL :bulb:] ワークフローの設計と実行の方法については、この節 [を参照してください](../config/workflows.md)。

## レポートと分析 {#analysis-and-reporting}

Adobe Campaign では、顧客のデータおよびプロファイルを段階的にエンリッチメントすることによって、顧客の行動を監視および解釈できます。 レポートおよび分析ツールを使用すると、各新規キャンペーンを収益化、マーケティング戦略のターゲティングを向上、および投資への影響や投資回収率を最適化できます。

[!DNL :bulb:] レポートおよびトラッキング機能について詳しくは、この節 [を参照してください](reporting.md)。

## Adobe Experience Cloud 統合 {#adobe-experience-cloud-integrations}

Adobe Campaign の配信機能と高度なキャンペーン管理機能を、ユーザーエクスペリエンスの支援をパーソナライズするために作成された一連のソリューション（Adobe Experience Manager、Adobe Analytics、Adobe Target、Adobe Experience Cloud トリガーなど）と組み合わせることができます。

[!DNL :bulb:] との統合方法については、この節を参照し [てください](../connect/integration.md)。

## Campaign 機能の詳細{#core-capabilities-and-add-ons}

Adobe Campaign は、ニーズとアーキテクチャに応じて対話型マーケティング機能を実装し、最適化するための一連の機能を提供します。 これらの機能には、コア機能と、インストールしたパッケージおよび設定によって使える機能があります。 詳細な製品説明については、[Adobe Campaign v8 の製品説明](https://helpx.adobe.com/legal/product-descriptions/adobe-campaign-managed-cloud-services.html)を参照してください。

[!DNL :bulb:] Campaign Classic?Campaign Classic と Campaign v8 の主な違いについては、[このページ](capability-matrix.md)を参照してください。

## Workspace とカスタマイズ

Campaignワークスペースは、[クライアントコンソール](../dev/general-architecture.md)で使用できます。

![](assets/home-page.png)

[!DNL :bulb:] [Campaignクライアントコンソールの詳細を説明します](../start/connect.md)。

Campaignのワークスペースは、ニーズに応じて調整できます。

[!DNL :arrow_upper_right:]  Campaignワークスペースの使用方法については、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-workspace.html?lang=ja)

[!DNL :arrow_upper_right:]   [Campaign Classicv7のドキュメントでリストをカスタマイズする方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-ui-lists.html?lang=ja)

Web からいくつかの機能にアクセスすることもできます。

[!DNL :bulb:] [Campaign Webアクセスの詳細情報](../start/connect.md#web-access)を参照してください。


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

**関連項目：**

* [Campaign v8互換性マトリックス](compatibility-matrix.md)
* [Campaign への接続](connect.md)
* [よくある質問（FAQ）](campaign-faq.md)