---
title: Campaign v8 の新機能
description: Campaign v8 の主な機能の確認
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 7771a02c-ebd4-48b6-b25e-6b6e420ad493
source-git-commit: def9714448ef5fdde39cee070088615e8f50e522
workflow-type: tm+mt
source-wordcount: '568'
ht-degree: 100%

---

# Adobe Campaign v8 の新機能 {#ac-gs-what-is-new}

Adobe Campaign v8 では、インフラストラクチャ、セキュリティ、配信品質、監視機能が大幅に強化されました。クラウドデータベース技術である [[!DNL Snowflake]](https://www.snowflake.com/) を活用することで、Adobe Campaign はその速度と拡張性を劇的に改善、管理できる顧客プロファイルの数を大幅に増加、1 時間あたりの配信数やトランザクション数を大幅に向上させます。

## 主な機能{#key-capabilities}

主な機能は次のとおりです。

* **速度と拡張性**。Adobe Campaign v8 は、Cloud Database Manager を活用して、クエリの実行速度を最大 200 倍、数ペタバイト規模に向上し、1 時間あたりの配信メッセージ数を最大 2,000 万、トランザクションメッセージを最大 100 万に増やし、最大 2 億人のアクティブなプロファイルを管理できます（10 億人まで増やせる余裕があります）。

* **Adobe Experience Platform への接続**。Adobe Campaign v8 は、Adobe Experience Platform／RT-CDP との Data Connector、統合カスタマープロファイル、Journey Orchestration とのネイティブ統合をサポートしています。これらの投資により、Adobe Campaign の顧客体験が最適化され、パーソナライズされたリアルタイムのカスタマージャーニーをキャンペーンに追加できるなど、新しいユースケースが可能になります。

* **Managed Cloud Services**. Adobe Campaign v8 使用すると、クラス最高の Managed Cloud Services として利用でき、先を見越した監視、タイムリーな警告、サービスのガバナンスを実現できます。 マーケターにとっての価値は、クロスチャネルキャンペーン管理が機敏性と拡張性に優れていることです。

>[!CAUTION]
>
>現時点では、Campaign v8 は Managed Cloud Serviceとして&#x200B;**のみ**&#x200B;提供しており、オンプレミス環境またはハイブリッド環境にデプロイすることはできません。
>
>既存の Campaign Classic v7 環境からは移行できません。
>
>デプロイメントモデルが不明な場合や、質問がある場合は、アカウントチームにお問い合わせください。

![](assets/home-page.png)

## 規模の拡張と縮小{#scale}

Campaign v8 では、ターゲティングから最終的なレポートまで、プロセスのあらゆる段階において規模の拡大・縮小をエンドツーエンドでおこなえます。

* 処理可能なデータ量を拡張（8 TB まで）
* セグメント化とターゲティングのためのクエリのパフォーマンスと、データの取り込みと取り出しのパフォーマンスを拡張
* 配信準備の拡大・縮小（数時間から数分まで）

## セルフサービス管理インターフェイス{#self-service-admin}

製品管理者は、**Campaign コントロールパネル**&#x200B;で各 Campaign v8 インスタンスの設定を管理し使用状況を追跡することができます。

管理者は、直感的なユーザーインターフェイスを使用して、主要なアセットの使用状況を監視し、IP アドレスの許可リストへの登録、SFTP ストレージのモニタリング、キーの管理などの高度なタスクを実行できます。このセルフサービスインターフェイスにより管理の柔軟性が高まるほか、これを使用すると以下の利点があります。

* アドビサポートに依頼せずに自分で設定をすばやく変更できます
* 様々なタイミングで多様なビジネスニーズに応じて設定できます
* ニーズに応じて個別にアクセス設定を制御することでセキュリティを強化できます

![](assets/subdomain1.png)

![](../assets/do-not-localize/glass.png) [Campaign コントロールパネルの詳細について](https://experienceleague.adobe.com/docs/control-panel/using/discover-control-panel/key-features.html?lang=ja){target=&quot;_blank&quot;}



## 簡素化とパフォーマンスの向上{#simplification-and-perf-increase}

Campaign v8 では、**完全な Federated Data Access**（FDA）の概念が導入されており、すべてのデータがリモートのクラウドデータベース上にあります。

この新しいアーキテクチャにより、Campaign v8 ではデータ管理を簡素化できます。クラウドデータベースではインデックスは必要ありません。 テーブルを作成して、データをコピーし、利用を開始するだけです。

[!DNL Snowflake] は Campaign のクラウドデータベースです。スピードと耐久性を実現し、システムアクティビティのピーク時にも過負荷が発生しません。

クラウドデータベーステクノロジーでは、パフォーマンスレベルを保証するために特別なメンテナンスを行う必要はありません。

## 統合されたエコシステム

Campaign は、Adobe Analytics、Adobe Journey Orchestration、Real-Time CDP などの一連の強力な Adobe ソリューションと統合できます。

また、ジャーニー AI を使用して、予測送信時間の最適化と予測エンゲージメントスコアを設定し、オープン率、クリック数、売上高を増やすこともできます。

![](../assets/do-not-localize/glass.png) Campaign 統合の詳細については、[こちら](../connect/integration.md)を参照してください。

