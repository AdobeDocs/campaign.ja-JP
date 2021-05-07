---
solution: Campaign
product: Adobe Campaign
title: マーケティングキャンペーンの基本を学ぶ
description: マーケティングキャンペーンの基本を学ぶ
feature: オーディエンス
role: Data Engineer
level: Beginner
exl-id: b5a6c845-13a7-4746-b856-a08a3cf80b66,c4798c8f-619e-4a60-80d7-29b9e4c61168
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '747'
ht-degree: 21%

---

# マーケティングキャンペーンの使い始めに{#gs-ac-campaigns}

Adobe Campaignオファーは、オンラインおよびオフラインのすべてのチャネルにわたってキャンペーンをパーソナライズし、提供するのに役立つ一連のソリューションです。 マーケティングキャンペーンは、作成、設定、実行および分析が可能です。 すべてのマーケティングキャンペーンを統合コントロールセンターから管理できます。この節では、マーケティングキャンペーンを参照して作成する方法を見つけます。

キャンペーンには、アクション（配信）とプロセス（ファイルのインポートまたは抽出）だけでなく、マーケティングドキュメントや配信の概要といったリソースも含まれます。これらはマーケティングキャンペーンで使用されます。キャンペーンはプログラムの一部で、プログラムは 1 つのキャンペーンプランに含まれます。

## クロスチャネルのキャンペーンオーケストレーション

Adobe Campaign では、ターゲティングおよびパーソナライズされたキャンペーンの設計と編成を複数のチャネル（E メール、ダイレクトメール、SMS、プッシュ通知）でおこなうことができます。すべてのキャンペーンおよび通信をスケジュール、編成、設定、パーソナライズ、自動化、実行および測定するために必要なすべての機能が、単一のインターフェイスに用意されています。

### 主な概念

マーケティングキャンペーンの実装を開始する前に、次の概念を理解しておく必要があります。

* **マーケティングキャンペーン**:キャンペーンは、マーケティングキャンペーンに関連するすべての要素を集中化します。配信、ターゲットルール、コスト、エクスポートファイル、関連ドキュメントなど各キャンペーンはプログラムに接続されます。

* **プログラム**:プログラムを使用すると、カレンダー期間のマーケティングアクションを定義できます。打ち上げ、キャンバス、忠誠度など各プログラムには、カレンダーにリンクされたキャンペーンが含まれており、このカレンダーは全体的な表示を提供します。

* **プラン**:マーケティングプランには複数のプログラムを含めることができます。マーケティングプランは 1 つのカレンダー期間にリンクされ、予算が割り当てられています。また、ドキュメントや目標にリンクすることもできます。

* **キャンペーンワークフロー**:キャンペーンワークフローには、キャンペーンロジックを作成するアクティビティが含まれています。「キャンペーンワークフローの使用」を使用すると、では、オーディエンスを定義し、使用可能なすべてのチャネルの配信を作成できます。

* **定期キャンペーン**:反復キャンペーンは、実行するワークフローテンプレートと実行スケジュールを定義する特定のテンプレートから作成される。

* **定期的なキャンペーン**:定期的なキャンペーンとは、テンプレートの実行スケジュールに従って自動的に作成されるキャンペーンです。

## マーケティングキャンペーンワークスペース

Adobe Campaignを使用すると、統合コントロールセンターからすべてのマーケティングキャンペーンを作成、構成、実行、分析できます。

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/about-marketing-campaigns/accessing-marketing-campaigns.html?lang=en#orchestrating-campaigns)で、マーケティングキャンペーンにアクセスして導入する方法を発見します。


## 開始の主な手順

クロスチャネルマーケティングキャンペーンを作成する主な手順は次のとおりです。

1. **マーケティングプログラムとキャンペーンの計画と設計**

   階層とスケジュールの定義、予算の設定、リソースの追加、演算子の選択を行います。

   :arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/setting-up-marketing-campaigns.html?lang=en#creating-plan-and-program-hierarchy)でマーケティングプランの作成とキャンペーンの設定の方法を説明します。

   すべてのマーケティングキャンペーンはテンプレートに基づいており、テンプレートには主な設定と機能が保存されています。 特定の設定が定義されていないキャンペーンを作成するために、組み込みのテンプレートが用意されています。 キャンペーンテンプレートを作成および設定して、そのテンプレートからキャンペーンを作成することができます。

   :arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-templates.html?lang=en#orchestrating-campaigns)のキャンペーンテンプレートの使い方を学ぶ

   :arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/setting-up-marketing-campaigns.html?lang=en#recurring-and-periodic-campaigns)で定期的なキャンペーンを検出し、その設定方法を確認します。

1. **オーディエンスの定義**

   ワークフロー内にオーディエンスを構築したり、受信者リスト、ニュースレターの購読者、以前の配信の受信者、任意のフィルタリング条件などの既存のグループを選択したりできます。

   :arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html?lang=en#orchestrating-campaigns)でメッセージのオーディエンスを定義する方法を説明します。

1. **配信の作成**

   「チャネル」を選択し、メッセージの内容と開始配信を定義します。

   :arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-deliveries.html?lang=en#creating-deliveries)でマーケティングキャンペーン配信の作成および開始方法を説明します。

   キャンペーンには、次の様々なドキュメントを関連付けることができます。レポート、写真、Webページ、図など

   :arrow_upper_right:関連するドキュメントについて詳しくは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-assets.html?lang=en#adding-documents)を参照してください

1. **承認プロセスの設定**

   Adobe Campaignを使用すると、マーケティングキャンペーンのメインステージに対する共同承認プロセスを設定できます。 キャンペーンごとに、配信のターゲット、コンテンツおよびコストを承認できます。 承認担当のAdobe Campaignオペレーターは、電子メールで通知し、コンソールまたはWeb接続を介して承認を受け取ったり拒否したりできます。

   :arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-approval.html?lang=en#orchestrating-campaigns)で承認の設定と管理の方法を説明します。

