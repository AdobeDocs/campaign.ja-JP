---
solution: Campaign v8
product: Adobe Campaign
title: マーケティングキャンペーンの基本を学ぶ
description: マーケティングキャンペーンの基本を学ぶ
feature: Audiences
role: Data Engineer
level: Beginner
exl-id: b5a6c845-13a7-4746-b856-a08a3cf80b66,c4798c8f-619e-4a60-80d7-29b9e4c61168
source-git-commit: ab7e458db5ad5696d144c17f6e89e4437a476d11
workflow-type: tm+mt
source-wordcount: '730'
ht-degree: 22%

---

# マーケティングキャンペーンの概要{#gs-ac-campaigns}

Adobe Campaignは、オンラインおよびオフラインのすべてのチャネルにわたってキャンペーンをパーソナライズし、実施するのに役立つソリューションセットを提供します。 マーケティングキャンペーンは、作成、設定、実行および分析できます。 すべてのマーケティングキャンペーンを統合コントロールセンターから管理できます。マーケティングキャンペーンの参照方法と作成方法については、この節を参照してください。

キャンペーンには、アクション（配信）とプロセス（ファイルのインポートまたは抽出）だけでなく、マーケティングドキュメントや配信の概要といったリソースも含まれます。これらはマーケティングキャンペーンで使用されます。キャンペーンはプログラムの一部で、プログラムは 1 つのキャンペーンプランに含まれます。

## クロスチャネルのキャンペーンオーケストレーション

Adobe Campaign では、ターゲティングおよびパーソナライズされたキャンペーンの設計と編成を複数のチャネル（E メール、ダイレクトメール、SMS、プッシュ通知）でおこなうことができます。すべてのキャンペーンおよび通信をスケジュール、編成、設定、パーソナライズ、自動化、実行および測定するために必要なすべての機能が、単一のインターフェイスに用意されています。

### 主な概念

マーケティングキャンペーンの実装を開始する前に、次の概念を理解しておく必要があります。

* **マーケティングキャンペーン**:キャンペーンは、マーケティングキャンペーンに関連するすべての要素を一元管理します。配信、ターゲットルール、コスト、エクスポートファイル、関連ドキュメントなど各キャンペーンは、プログラムに添付されます。

* **プログラム**:プログラムを使用して、カレンダー期間のマーケティングアクションを定義できます。ローンチ、キャンバス、忠誠度など。各プログラムには、カレンダーにリンクされたキャンペーンが含まれ、全体像が表示されます。

* **プラン**:マーケティングプランには複数のプログラムを含めることができます。マーケティングプランは 1 つのカレンダー期間にリンクされ、予算が割り当てられています。また、ドキュメントや目標にリンクすることもできます。

* **キャンペーンワークフロー**:キャンペーンワークフローには、キャンペーンロジックを作成するアクティビティが含まれます。キャンペーンワークフローを使用して、オーディエンスを定義し、使用可能なすべてのチャネル用の配信を作成します。

* **繰り返しキャンペーン**:繰り返しキャンペーンは、実行するワークフローテンプレートと実行スケジュールを定義する特定のテンプレートから作成します。

* **定期的なキャンペーン**:定期的なキャンペーンは、キャンペーンのテンプレートの実行スケジュールに従って自動的に作成されるキャンペーンです。

## Marketing campaignワークスペース

Adobe Campaignでは、統合コントロールセンターから、すべてのマーケティングキャンペーンを作成、設定、実行および分析できます。

[!DNL :arrow_upper_right:] マーケティングキャンペーンへのアクセス方法と実装方法については、 [Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/about-marketing-campaigns/accessing-marketing-campaigns.html?lang=en#orchestrating-campaigns)


## 開始するための主な手順

クロスチャネルマーケティングキャンペーンを作成する主な手順は次のとおりです。

1. **マーケティングプログラムとキャンペーンの計画と設計**

   階層とスケジュールの定義、予算の設定、リソースの追加、演算子の選択を行います。

   [!DNL :arrow_upper_right:] マーケティングプランの作成方法とキャンペーンの設定方法については、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/setting-up-marketing-campaigns.html?lang=en#creating-plan-and-program-hierarchy)

   すべてのマーケティングキャンペーンは、メイン設定と機能を保存するテンプレートに基づいています。 特定の設定が定義されていないキャンペーンを作成するために、組み込みのテンプレートが用意されています。 キャンペーンテンプレートを作成および設定して、そのテンプレートからキャンペーンを作成することができます。

   [!DNL :arrow_upper_right:] キャンペーンテンプレートの使用方法については、 [Campaign Classicv7のドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-templates.html?lang=en#orchestrating-campaigns)

   [!DNL :arrow_upper_right:] 繰り返しキャンペーンの確認と [Campaign Classicv7ドキュメントでの設定方法](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/setting-up-marketing-campaigns.html?lang=en#recurring-and-periodic-campaigns)

1. **オーディエンスの定義**

   ワークフローでオーディエンスを構築したり、既存のグループ（受信者リスト、ニュースレターの購読者、前回の配信の受信者、フィルター条件など）を選択したりできます。

   [!DNL :arrow_upper_right:]  [Campaign Classicv7ドキュメントでメッセージのオーディエンスを定義する方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html?lang=en#orchestrating-campaigns)

1. **配信の作成**

   チャネルを選択し、メッセージコンテンツを定義して、配信を開始します。

   [!DNL :arrow_upper_right:]  [Campaign Classicv7のドキュメントで、マーケティングキャンペーン配信を作成して開始する方法を説明しています。](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-deliveries.html?lang=en#creating-deliveries)

   様々なドキュメントをキャンペーンに関連付けることができます。レポート、写真、Webページ、図など。

   [!DNL :arrow_upper_right:] 関連ドキュメントについて詳しくは、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-assets.html?lang=en#adding-documents)

1. **承認プロセスの設定**

   Adobe Campaignでは、マーケティングキャンペーンのメインステージの協調承認プロセスを設定できます。 キャンペーンごとに、配信ターゲット、コンテンツおよびコストを承認できます。 承認を担当するAdobe Campaignオペレーターは、Eメールで通知を受け、コンソールから、またはWeb接続を介して、承認を許可または却下できます。

   [!DNL :arrow_upper_right:]  [Campaign Classicv7ドキュメントで承認を設定および管理する方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-approval.html?lang=en#orchestrating-campaigns)

