---
title: キャンペーンの基本を学ぶ
description: キャンペーンの基本を学ぶ
feature: Audiences
role: User
level: Beginner
exl-id: b5a6c845-13a7-4746-b856-a08a3cf80b66,c4798c8f-619e-4a60-80d7-29b9e4c61168
source-git-commit: 2ce1ef1e935080a66452c31442f745891b9ab9b3
workflow-type: ht
source-wordcount: '841'
ht-degree: 100%

---

# キャンペーンの基本を学ぶ{#gs-ac-campaigns}

Adobe Campaign が提供する一連のソリューションを使用すると、オンラインとオフラインのすべてのチャネルで、キャンペーンをパーソナライズして配信することができます。マーケティングキャンペーンの作成、設定、実施、分析などを行うことができます。すべてのマーケティングキャンペーンは、統合コントロールセンターで管理できます。この節では、マーケティングキャンペーンの参照および作成方法について説明します。

キャンペーンには、アクション（配信）とプロセス（ファイルのインポートまたは抽出）だけでなく、マーケティングドキュメントや配信の概要といったリソースも含まれます。これらはマーケティングキャンペーンで使用されます。キャンペーンはプログラムの一部で、プログラムは 1 つのキャンペーンプランに含まれます。

## クロスチャネルキャンペーンのオーケストレーション{#cross-channel-orchestration}

Adobe Campaign を使用すると、メール、ダイレクトメール、SMS、プッシュ通知などの複数のチャネルで、ターゲットを絞りパーソナライズしたキャンペーンの設計とオーケストレーションを行えます。1 つのインターフェイスを通して、すべてのキャンペーンとコミュニケーションのスケジュール作成、オーケストレーション、設定、パーソナライズ、自動化、実施、測定などに必要なすべての機能を利用することができます。

![](assets/campaign-tab.png)

### 主要コンセプト{#ac-core-concepts}

マーケティングキャンペーンの実装を始める前に、次の概念を理解しておく必要があります。

* **マーケティングキャンペーン**：キャンペーンは、配信、ターゲティングルール、費用、出力ファイル、関連ドキュメントなど、マーケティングキャンペーンに関連するすべての要素を 1 つにまとめたものです。各キャンペーンは 1 つのプログラムに添付されます。

* **プログラム**：プログラムでは、特定のカレンダー期間におけるローンチ、勧誘、ロイヤルティなどのマーケティングアクションを定義します。
各プログラムには、1 つのカレンダーにリンクされた複数のキャンペーンが含まれており、カレンダーが全体像を提供します。

* **プラン**：マーケティングプランには複数のプログラムを含めることができます。マーケティングプランは 1 つのカレンダー期間にリンクし、予算が割り当てられています。また、ドキュメントや目標にリンクすることもできます。

* **キャンペーンワークフロー**：キャンペーンワークフローには、キャンペーンロジックを組み立てるためのアクティビティが含まれています。キャンペーンワークフローを使用すると、オーディエンスを定義し、使用可能なすべてのチャネルの配信を作成できます。

* **繰り返しキャンペーン**：繰り返しキャンペーンは、実行するワークフローテンプレートと実行スケジュールを定義する特定のテンプレートから作成します。

* **定期的なキャンペーン**：定期的なキャンペーンは、キャンペーンテンプレートの実行スケジュールに従って自動的に作成されるキャンペーンです。

## マーケティングキャンペーンのワークスペース{#ac-workspace}

Adobe Campaign を使用すると、すべてのマーケティングキャンペーンの作成、設定、実施、分析を統合コントロールセンターで行うことができます。

![](assets/calendar.png)

![](../assets/do-not-localize/book.png) マーケティングキャンペーンへのアクセスおよび実装方法については、[この節](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/set-up-campaigns.html?lang=ja)を参照してください。

## 開始する主な手順{#gs-ac-start}

クロスチャネルのマーケティングキャンペーンを作成する主な手順は次のとおりです。

1. **マーケティングプログラムおよびキャンペーンの計画と設計**

   階層とスケジュールを定義し、予算を設定し、リソースを追加して、オペレーターを選択します。

   ![](../assets/do-not-localize/book.png) マーケティングプランを作成しキャンペーンを設定する方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-create.html?lang=ja)を参照してください。

   すべてのマーケティングキャンペーンは、主な設定と機能を定義したテンプレートに基づいています。特定の設定が定義されていないキャンペーンを作成するために、ビルトインのテンプレートが用意されています。キャンペーンテンプレートを作成および設定して、そのテンプレートからキャンペーンを作成することができます。

   キャンペーンテンプレートの使用方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-templates.html?lang=ja)を参照してください。

   繰り返しキャンペーンとその設定方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/recurring-periodic-campaigns.html?lang=ja)を参照してください。

1. **オーディエンスの定義**

   ワークフロー内にオーディエンスを作成したり、既存のグループを選択したりできます。例えば、受信者の一覧、ニュースレターの購読者、以前の配信の受信者、任意のフィルタリング条件などのオーディエンスグループです。

   ![](assets/campaign-wf.png)

   メッセージのオーディエンスを定義する方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja)を参照してください。

1. **配信の作成**

   チャネルを選択し、メッセージの内容を定義して、配信を開始します。

   ![](assets/campaign-dashboard.png)

   ![](../assets/do-not-localize/book.png) マーケティングキャンペーン配信を作成し開始する方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-deliveries.html?lang=ja)を参照してください。

   レポート、写真、web ページ、図などの様々なドキュメントをキャンペーンに関連付けることができます。

   ![](../assets/do-not-localize/book.png) 関連付けられるドキュメントについて詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-assets.html?lang=ja)を参照してください。

1. **承認プロセスの設定**

   Adobe Campaign を使用すると、マーケティングキャンペーンの主要な段階で協調して行う承認プロセスを設定できます。キャンペーンごとに、配信ターゲット、コンテンツ、費用などを承認できます。Adobe Campaign を操作する承認者は、メールで通知を受け、コンソールまたはweb 接続で承認を許可または却下できます。 

   承認の設定と管理の方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-approval.html?lang=ja#campaign-orchestration)を参照してください。


## 分散型マーケティングアドオン{#distributed-marketing-add-on}

Adobe Campaign が提供する&#x200B;**分散型マーケティング**&#x200B;アドオンにより、セントラルエンティティ（本社、マーケティング部門など）とローカルエンティティ（店舗、地域機関など）で連携したキャンペーンを実施できます。この連携のベースとなるのは、**[!UICONTROL キャンペーンパッケージのリスト]**&#x200B;と呼ばれる共有ワークスペースです。セントラルエンティティで作成されたキャンペーンのテンプレートが、ローカルエンティティに提供されます。

>[!NOTE]
>
>この機能は、Campaign v8.3 以降で使用できます。お使いのバージョンを確認するには、[この節](compatibility-matrix.md#how-to-check-your-campaign-version-and-buildversion)を参照してください。

Campaign 分散型マーケティング機能の設定および使用方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/distributed-marketing/about-distributed-marketing.html?lang=ja)を参照してください。

## 応答管理アドオン{#response-manager-add-on}

Adobe Campaign では、マーケティングキャンペーンの成功や収益性を測定したり、メール、モバイル、ダイレクトメールなどのあらゆる通信チャネルでオファーを提案したりできる、**応答管理**&#x200B;アドオンを提供しています。

>[!NOTE]
>
>この機能は、Campaign v8.3 以降で使用できます。お使いのバージョンを確認するには、[この節](compatibility-matrix.md#how-to-check-your-campaign-version-and-buildversion)を参照してください。

[](../assets/do-not-localize/book.png) Campaign Response Manager の設定方法と使用方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/response-manager/about-response-manager.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

