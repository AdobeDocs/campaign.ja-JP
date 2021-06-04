---
product: Adobe Campaign
title: Campaign v8 の新機能
description: 主な機能の詳細
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 7771a02c-ebd4-48b6-b25e-6b6e420ad493
source-git-commit: 36e29801bcc95565c32e51742a23d4d74d4e3049
workflow-type: tm+mt
source-wordcount: '453'
ht-degree: 41%

---

# Adobe Campaign v8 の新機能{#ac-gs-what-is-new}

Adobe Campaign v8 では、インフラストラクチャ、セキュリティ、配信品質、監視機能が大幅に強化されました。 Adobe Campaignは、クラウドデータベーステクノロジーである[[!DNL Snowflake]](https://www.snowflake.com/)を活用して、より多くの顧客プロファイルを管理し、1時間あたりの配信率とトランザクション数を大幅に増やし、その規模と速度を大幅に向上させます。

主な機能は次のとおりです。

* **速度と拡張性**。Adobe Campaign v8はCloud Database Managerを活用して、クエリのパフォーマンスを最大200倍高速化し、マルチペタバイト規模で、1時間あたりのメッセージ数を増やし、トランザクションメッセージに最大20M/時または1M/時で、最大200Mのアクティブなプロファイルを1Bに到達できます。

* **Adobe Experience Platform への接続**。Adobe Campaign v8 は、Adobe Experience Platform／RT-CDP との Data Connector、統合カスタマープロファイル、Journey Orchestration とのネイティブ統合をサポートしています。これらの投資により、Adobe Campaign の顧客体験が最適化され、パーソナライズされたリアルタイムのカスタマージャーニーをキャンペーンに追加できるなど、新しいユースケースが可能になります。

* **Managed Cloud Services**. Adobe Campaign v8 使用すると、クラス最高の Managed Cloud Services として利用でき、先を見越した監視、タイムリーな警告、サービスのガバナンスを実現できます。 マーケターの価値は、より機敏で拡張性の高いクロスチャネルキャンペーン管理です。

>[!CAUTION]
>
>現時点では、Campaign v8は管理対象Cloud Serviceとして&#x200B;**のみ**&#x200B;使用でき、オンプレミス環境またはハイブリッド環境にデプロイすることはできません。
>
>既存のCampaign Classicv7環境からの移行は、まだ使用できません。
>
>デプロイメントモデルが不明な場合や、質問がある場合は、アカウントチームにお問い合わせください。


## 規模の拡張と縮小

Campaign v8は、ターゲティングから最終的なレポートまで、プロセスのあらゆる段階でエンドツーエンドのスケールを実現します。

* 処理可能なデータ量を拡張（8 TB まで）
* セグメント化とターゲティングのためのクエリのパフォーマンスと、データの取り込みと取り出しのパフォーマンスを拡張
* 配信準備を（時間から分まで）拡大/縮小する

## シンプル化とパフォーマンス向上

Campaign v8では、**Full Federated Data Access**(FFDA)の概念を実現します。すべてのデータがクラウドデータベース上でリモートになりました。

この新しいアーキテクチャにより、Campaign v8はデータ管理をシンプル化します。クラウドデータベースにインデックスは必要ありません。 テーブルを作成し、データをコピーし、利用を開始するだけです。

[!DNL Snowflake] はCampaign Cloudデータベースで、スピードと耐久性を実現します。システムアクティビティのピーク時に過負荷が発生しない。

クラウドデータベーステクノロジーでは、パフォーマンスレベルを保証するために特別なメンテナンスを行う必要はありません。

## 統合されたエコシステム

Campaignは、次のような強力なAdobeソリューションと統合できます。Adobe Analytics、AdobeJourney Orchestration、リアルタイムCDPなど。

また、ジャーニー AI を使用して、予測送信時間の最適化と予測エンゲージメントスコアを設定し、オープン率、クリック数、売上高を増やすこともできます。

[!DNL :bulb:] [Campaign統合の詳細を説明します](../connect/integration.md)

