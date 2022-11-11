---
product: campaign
title: 最初のキャンペーンを作成
description: マーケティングキャンペーンの開始方法を学ぶ
feature: Campaigns, Cross Channel Orchestration, Programs
exl-id: eb1a0e52-14d9-4ad2-8bf2-ea955c6fd0f5
source-git-commit: 2ce1ef1e935080a66452c31442f745891b9ab9b3
workflow-type: tm+mt
source-wordcount: '443'
ht-degree: 100%

---

# 最初のキャンペーンを作成{#gs-marketing-campaigns}

Adobe Campaign では、コミュニケーションおよびマーケティングキャンペーンを定義、最適化、実行および分析できます。Adobe Campaign により、マーケティング戦略の指示や実行を一元的におこなうことができます。ドラッグ＆ドロップのビジュアルワークフローインターフェイスを使用して、複数のデータソースの管理、オーディエンスセグメントの定義、複数手順のクロスチャネルキャンペーンの計画と実行が可能です。


<!--In addition, the **Marketing Resource Management (MRM)** module lets you control marketing actions in a collaborative mode by providing complete management and real-time tracking of the tasks, budgets and marketing resources involved. The Marketing Resource Management lets you optimize and regulate the management of internal and external processes, resources and marketing campaigns, as well as third party relations (agencies, printers, etc.). For more on this, refer to [this section](about-marketing-resource-management.md).

>[!NOTE]
>
>Capabilities related to population targeting, message personalization and message delivery on the various channels are detailed in [this section](../../delivery/using/steps-about-delivery-creation-steps.md).-->


## キャンペーンを設計するための主な手順 {#key-steps-campaign}

キャンペーンには、アクション（配信）とプロセス（ファイルのインポートまたは抽出）だけでなく、マーケティングドキュメントや配信の概要といったリソースも含まれます。これらはマーケティングキャンペーンで使用されます。キャンペーンはプログラムの一部で、プログラムは 1 つのキャンペーンプランに含まれます。

Adobe Campaign でマーケティングキャンペーンを作成および実行する主な手順を次に示します。

1. **プランとプログラムのスケジュール設定**、キャンペーンを調整するロジックの設定
プログラムは、ある期間に定義された一連のマーケティングアクティビティです。各プログラムには、1 つのカレンダーにリンクされた複数のキャンペーンが含まれており、カレンダーが全体像を提供します。マーケティングプランには複数のプログラムを含めることができます。予算の割り当て、測定可能な目標、関連ドキュメントを使用して、一定期間の戦略目標を定義します。プランとプログラムの作成方法について詳しくは、[この節](marketing-campaign-create.md#create-plan-and-program)を参照してください。

1. **最初のキャンペーンの作成**
キャンペーンは、配信、ターゲティングルール、費用、出力ファイル、関連ドキュメントなど、マーケティングキャンペーンに関連するすべての要素を 1 つにまとめたものです。各キャンペーンは 1 つのプログラムに添付されます。キャンペーンの作成方法について詳しくは、[この節](marketing-campaign-create.md#create-a-campaign)を参照してください。

1. **オーディエンスの選択**
オーディエンスは、リストからインポートすることも、クエリを使用してキャンペーンワークフローで作成することもできます。キャンペーンのターゲットオーディエンスを定義する方法について詳しくは、[この節](marketing-campaign-target.md#select-the-target-population)を参照してください。

1. **配信の作成**
キャンペーンでクロスチャネル配信を調整します。 パーソナライズされたメール、SMS、プッシュ通知、アプリ内メッセージを通じて、Adobe Campaign でのコミュニケーションを効率化します。ダイレクトメール配信を追加することもできます。キャンペーンで配信を作成、検証、モニタリングする方法について詳しくは、[この節](marketing-campaign-deliveries.md)を参照してください。

1. **承認フローの設定**
レビュー担当者を定義し、ターゲティング、コンテンツ、予算、抽出および配達確認の送信など、キャンペーンのプロセスを監視および制御するための承認フローを設定します。承認の設定方法について詳しくは、[この節](marketing-campaign-approval.md)を参照してください。

1. **配信の監視**。
キャンペーンをダッシュボードでトラッキングし、Campaign UI で配信のステータスと実行を確認します。[詳細情報](marketing-campaign-monitoring.md)。

1. **予算、在庫、関連コストのトラッキング**
Adobe Campaign を使用して、予算配分の管理、サプライヤー、在庫およびコストの管理を行います。[詳細情報](providers--stocks-and-budgets.md#create-service-providers-and-their-cost-structures)。

これらの手順が完了したら、[配信を開始](marketing-campaign-deliveries.md#start-a-delivery)し、データ、プロセスおよび配信に関連する情報を確認し、必要に応じて[関連ドキュメントを管理](marketing-campaign-deliveries.md#manage-associated-documents)することができます。また、キャンペーンと配信の[実行のトラッキングとモニタリング](marketing-campaign-monitoring.md)を行うこともできます。


## ビデオ内の重要な概念 {#key-concepts-video}

このビデオでは、マーケティングキャンペーンの主要概念を紹介します。

>[!VIDEO](https://video.tv.adobe.com/v/35131?quality=12)
