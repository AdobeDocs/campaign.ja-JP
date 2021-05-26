---
solution: Campaign v8
product: Adobe Campaign
title: Campaign v8 の新機能
description: 主な機能の詳細
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 7771a02c-ebd4-48b6-b25e-6b6e420ad493
source-git-commit: 69d69c909e6b17ca3f5fb18d6680aa51d0d701cf
workflow-type: tm+mt
source-wordcount: '433'
ht-degree: 64%

---

# Adobe Campaign v8 の新機能{#ac-gs-what-is-new}

Adobe Campaign v8 では、インフラストラクチャ、セキュリティ、配信品質、監視機能が大幅に強化されました。 Adobe Campaignは、クラウドデータベーステクノロジーである[[!DNL Snowflake]](https://www.snowflake.com/)を活用して、より多くの顧客プロファイルを管理し、1時間あたりの配信率とトランザクション数を大幅に増やし、その規模と速度を大幅に向上させます。

主な機能は次のとおりです。

* **速度と拡張性**。Adobe Campaign v8 は、Cloud Database Manager を活用して、クエリの実行速度を最大 200 倍、数ペタバイト規模に向上し、1 時間あたりのメッセージ数を最大 2,000 万ないし 150 万トランザクションメッセージに増やし、最大 2 億件のアクティブなプロファイル数を管理できます（10 億件まで増やせる余裕があります）。

* **Adobe Experience Platform への接続**。Adobe Campaign v8 は、Adobe Experience Platform／RT-CDP との Data Connector、統合カスタマープロファイル、Journey Orchestration とのネイティブ統合をサポートしています。これらの投資により、Adobe Campaign の顧客体験が最適化され、パーソナライズされたリアルタイムのカスタマージャーニーをキャンペーンに追加できるなど、新しいユースケースが可能になります。

* **Managed Cloud Services**. Adobe Campaign v8 使用すると、クラス最高の Managed Cloud Services として利用でき、先を見越した監視、タイムリーな警告、サービスのガバナンスを実現できます。 マーケターの価値は、より機敏で拡張性の高いクロスチャネルキャンペーン管理です。

>[!CAUTION]
>
>現時点では、Campaign v8は管理対象Cloud Serviceとして&#x200B;**のみ**&#x200B;使用でき、オンプレミス環境またはハイブリッド環境にデプロイすることはできません。
>
>既存のCampaign Classicv7環境からの移行は、まだ使用できません。


## 規模の拡張と縮小

Campaign v8は、ターゲティングから最終的なレポートまで、プロセスのあらゆる段階でエンドツーエンドのスケールを実現します。

* 処理可能なデータ量を拡張（8 TB まで）
* セグメント化とターゲティングのためのクエリのパフォーマンスと、データの取り込みと取り出しのパフォーマンスを拡張
* 配信準備を（時間から分まで）拡大/縮小する

## シンプル化とパフォーマンス向上

Campaign v8 では、**完全な Federated Data Access**（FDA）の概念が導入されており、すべてのデータがリモートのクラウドデータベース上にあります。

この新しいアーキテクチャにより、Campaign v8はデータ管理をシンプル化します。クラウドデータベースにインデックスは必要ありません。 テーブルを作成し、データをコピーし、利用を開始するだけです。

[!DNL Snowflake] はCampaign Cloudデータベースで、スピードと耐久性を実現します。システムアクティビティのピーク時に過負荷が発生しない。

クラウドデータベーステクノロジーでは、パフォーマンスレベルを保証するために特別なメンテナンスを行う必要はありません。

## 統合されたエコシステム

Campaign は、Adobe Analytics、Workfront、Journey Orchestration、Real-Time CDP などの一連の強力な Adobe ソリューションと統合できます。

また、ジャーニー AI を使用して、予測送信時間の最適化と予測エンゲージメントスコアを設定し、オープン率、クリック数、売上高を増やすこともできます。

[!DNL :bulb:] [Campaign統合の詳細を説明します](../connect/integration.md)

