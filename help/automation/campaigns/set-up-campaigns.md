---
product: campaign
title: マーケティングキャンペーンの基本を学ぶ
description: マーケティングキャンペーンの開始方法を説明します
feature: Campaigns, Cross Channel Orchestration, Programs
source-git-commit: 72467caf94e652ede70c00f1ea413012fc4c7e1f
workflow-type: tm+mt
source-wordcount: '443'
ht-degree: 26%

---

# マーケティングキャンペーンの基本を学ぶ{#gs-marketing-campaigns}

Adobe Campaign では、コミュニケーションおよびマーケティングキャンペーンを定義、最適化、実行および分析できます。Adobe Campaign により、マーケティング戦略の指示や実行を一元的におこなうことができます。複数のデータソースを管理し、オーディエンスセグメントを定義し、ドラッグ&amp;ドロップのビジュアルワークフローインターフェイスを使用して、複数手順のクロスチャネルキャンペーンを計画および実行します。


<!--In addition, the **Marketing Resource Management (MRM)** module lets you control marketing actions in a collaborative mode by providing complete management and real-time tracking of the tasks, budgets and marketing resources involved. The Marketing Resource Management lets you optimize and regulate the management of internal and external processes, resources and marketing campaigns, as well as third party relations (agencies, printers, etc.). For more on this, refer to [this section](about-marketing-resource-management.md).

>[!NOTE]
>
>Capabilities related to population targeting, message personalization and message delivery on the various channels are detailed in [this section](../../delivery/using/steps-about-delivery-creation-steps.md).-->


## キャンペーンを設計するための主な手順 {#key-steps-campaign}

キャンペーンには、アクション（配信）とプロセス（ファイルのインポートまたは抽出）だけでなく、マーケティングドキュメントや配信の概要といったリソースも含まれます。これらはマーケティングキャンペーンで使用されます。キャンペーンはプログラムの一部で、プログラムは 1 つのキャンペーンプランに含まれます。

Adobe Campaignでマーケティングキャンペーンを作成および実行する主な手順を次に示します。

1. **プランとプログラムの設定** スケジュール、キャンペーンを調整するロジックの設定 A プログラムとは、ある期間に定義されたマーケティングアクティビティのセットです。 各プログラムには、1 つのカレンダーにリンクされた複数のキャンペーンが含まれており、カレンダーが全体像を提供します。マーケティングプランには複数のプログラムを含めることができます。予算の割り当て、測定可能な目標、関連ドキュメントを使用して、一定期間の戦略目標を定義します。 プランとプログラムの作成方法を学ぶ [この節](marketing-campaign-create.md#create-plan-and-program).

1. **最初のキャンペーンを作成**
キャンペーンは、マーケティングキャンペーンに関連するすべての要素を一元管理します。配信、ターゲットルール、コスト、エクスポートファイル、関連ドキュメントなど 各キャンペーンは 1 つのプログラムに添付されます。キャンペーンの作成方法を説明します [この節](marketing-campaign-create.md#create-a-campaign).

1. **オーディエンスを選択**
オーディエンスは、リストからインポートすることも、クエリを使用してキャンペーンワークフローで作成することもできます。 キャンペーンのターゲットオーディエンスを定義する方法を説明します [この節](marketing-campaign-target.md#select-the-target-population).

1. **配信の作成**
キャンペーンでクロスチャネル配信を調整します。 パーソナライズされた E メール、SMS、プッシュ通知、アプリ内メッセージを通じて、Adobe Campaignとのコミュニケーションを効率化します。 また、ダイレクトメール配信を追加することもできます。 キャンペーンで配信を作成、検証、監視する方法を説明します [この節](marketing-campaign-deliveries.md).

1. **詳細フローの設定**
レビュー担当者を定義し、キャンペーンのプロセスを監視および制御するための承認フローを設定します。ターゲティング、コンテンツ、予算、抽出および配達確認の送信。 承認の設定方法を説明します [この節](marketing-campaign-approval.md).

1. **配信の監視**.
ダッシュボードからキャンペーンをトラッキングし、Campaign UI で配信ステータスと実行を確認します。 [詳細情報](marketing-campaign-monitoring.md)。

1. **予算、在庫、関連コストの追跡**.
Adobe Campaignを使用して、予算配分の管理、仕入先、在庫およびコストの管理を行います。 [詳細情報](providers--stocks-and-budgets.md#create-service-providers-and-their-cost-structures)。

これらの手順が完了したら、次の操作を実行できます。 [配信を開始](marketing-campaign-deliveries.md#start-a-delivery)、配信に関するデータ、プロセスおよび情報を確認し、必要に応じて [関連ドキュメントを管理](marketing-campaign-deliveries.md#manage-associated-documents). また、 [実行の追跡と監視](marketing-campaign-monitoring.md) キャンペーンおよび配信の


## ビデオの主な概念 {#key-concepts-video}

このビデオでは、マーケティングキャンペーンの主要概念を紹介します。

>[!VIDEO](https://video.tv.adobe.com/v/35131?quality=12)
