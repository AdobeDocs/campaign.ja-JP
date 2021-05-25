---
solution: Campaign v8
product: Adobe Campaign
title: Campaign v8の新機能
description: 主な機能の詳細
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 7771a02c-ebd4-48b6-b25e-6b6e420ad493
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '434'
ht-degree: 0%

---

# Adobe Campaign v8の新機能{#ac-gs-what-is-new}

Adobe Campaign v8では、インフラストラクチャ、セキュリティ、配信品質、監視に関する大幅な機能強化がおこなわれています。 Adobe Campaignは、クラウドデータベーステクノロジーである[[!DNL Snowflake]](https://www.snowflake.com/)を活用して、より多くの顧客プロファイルを管理し、1時間あたりの配信率とトランザクション数を大幅に増やし、その規模と速度を大幅に向上させます。

主な機能は次のとおりです。

* **速度とスケール**&#x200B;を参照してください。Adobe Campaign v8はCloud Database Managerを活用し、クエリのパフォーマンスを最大200倍高速化し、マルチペタバイト規模、1時間あたりのメッセージ数を増やし、トランザクションメッセージに最大20M/時または1.5M/時で、最大200Mのアクティブなプロファイルを1Bに到達できます。

* **Adobe Experience Platformへの接続**&#x200B;を参照してください。Adobe Campaign v8は、Adobe Experience Platform/RT-CDPとのData Connectors、統合顧客プロファイル、Journey Orchestrationとのネイティブ統合をサポートします。 これらの投資は、Adobe Campaignの顧客体験を最適化し、個別のリアルタイムカスタマージャーニーをキャンペーンに追加する機能など、新しい使用例のロックを解除します。

* **管理Cloud Services**。Adobe Campaign v8は、クラス最高の管理Cloud Servicesとして利用でき、プロアクティブな監視、タイムリーな警告、サービスガバナンスを提供します。 マーケターの価値は、より機敏で拡張性の高いクロスチャネルキャンペーン管理です。

>[!CAUTION]
>
>現時点では、Campaign v8は管理対象Cloud Serviceとして&#x200B;**のみ**&#x200B;使用でき、オンプレミス環境またはハイブリッド環境にデプロイすることはできません。
>
>既存のCampaign Classicv7環境からの移行は、まだ使用できません。


## サイズ

Campaign v8は、ターゲティングから最終的なレポートまで、プロセスのあらゆる段階でエンドツーエンドのスケールを実現します。

* 処理可能なデータ量の拡張（8 TBまで）
* セグメント化とターゲティングに関するクエリのパフォーマンスの拡大とデータの取り込みと取り出し
* 配信準備を（時間から分まで）拡大/縮小する

## シンプル化とパフォーマンスの向上

Campaign v8では、**Full Federated Data Access**(FDA)の概念を導入します。すべてのデータがクラウドデータベース上でリモートになりました。

この新しいアーキテクチャにより、Campaign v8はデータ管理をシンプル化します。クラウドデータベースにインデックスは必要ありません。 必要なのは、テーブルを作成し、データをコピーして、開始するだけです。

[!DNL Snowflake] はCampaign Cloudデータベースで、スピードと耐久性を実現します。システムアクティビティのピーク時に過負荷が発生しない。

Cloudデータベーステクノロジーでは、パフォーマンスレベルを保証するために特定のメンテナンスは必要ありません。

## 統合エコシステム

Campaignは、次のような強力なAdobeソリューションと統合できます。Adobe Analytics、Workfront、Journey Orchestration、リアルタイムCDPなど。

また、ジャーニーAIを使用して、予測送信時間の最適化と予測エンゲージメントスコアリングを設定し、開封率、クリック数、売上高を増やすこともできます。

:bulb:[Campaign統合の詳細](../connect/integration.md)

