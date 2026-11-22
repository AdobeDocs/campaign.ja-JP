---
title: 組み込みパッケージ
description: Campaign v8のビルトインパッケージの概要、カスタムデータパッケージとの違い、使用可能なビルトインパッケージについて説明します
feature: Architecture
role: Admin, Developer
level: Beginner
hide: true
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: bae31391-3416-5fbd-bc4b-2cdcae2922db
    internal-label: Architecture
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
subfeature_v2:
  - id: e656c701-3899-4db3-989c-de0980ddfffa
    internal-label: Installation
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
source-git-commit: 9f70a309a882347a0df658d00c47127f31d28eb9
workflow-type: tm+mt
source-wordcount: '826'
ht-degree: 16%
---
# 組み込みパッケージ {#built-in-packages}

ビルトインパッケージ（標準パッケージとも呼ばれます）には、Adobe Campaignの機能が含まれています。 Campaign v8では、Adobeがこれらのパッケージをインストールおよび管理します。 それらをインストールする必要はありません。

## ビルトインパッケージとカスタムパッケージ {#built-in-vs-custom}

Adobe Campaignでは、2種類のパッケージを使用しています。 適切な基盤を導入する必要があります。

| | 組み込みパッケージ | カスタムパッケージ |
|---|---|---|
| 目的 | チャネル、統合、アドオンなど、キャンペーン機能を提供します。 | ステージング環境から実稼動環境への独自の設定やデータの書き出しと読み込みをおこないます。 |
| 管理者が管理します | Adobeがインストールし、管理します。 Managed Cloud Servicesでは、インストール済みの組み込みパッケージを変更することはできません。 | 作成、書き出し、読み込むことができます。 |
| 詳細な情報 | このページ。 | [&#x200B; データパッケージの操作](../dev/packages.md) |

## インストール済みパッケージの確認 {#check-installed-packages}

インスタンスにインストールされているビルトインパッケージを確認するには、**[!UICONTROL 管理/設定/パッケージ管理/インストール済みパッケージ]**&#x200B;を参照します。 Campaign コントロールパネルのインスタンスのモニタリングで表示することもできます。 詳しくは、[&#x200B; キャンペーンモニタリングの概要](../start/monitor.md#monitor-instance)を参照してください。

プロビジョニングされていないパッケージやアドオンが必要な場合は、Adobe カスタマーケアまたはAdobe Transition Managerにお問い合わせください。

## ビルトインパッケージのリスト {#list-of-built-in-packages}

次の表に、ビルトインパッケージの一覧を示します。 各パッケージの可用性は、ライセンス契約とデプロイメントモデルによって異なります。

| パッケージ | 説明 |
|---|---|
| 配信 | 配信と、メッセージの送信時に発生する問題を監視します。 [詳細情報](../start/monitor.md) |
| マーケティングキャンペーン（キャンペーン） | コミュニケーションおよびマーケティングキャンペーンを定義、最適化、実行、分析します。 [詳細情報](../start/campaigns.md) |
| マーケティングリソース（MRM） | タスク、予算、マーケティングリソースの管理と追跡を利用して、マーケティング活動を共同作業モードで制御できます。 [詳細情報](../../automation/mrm/about-marketing-resource-management.md) |
| オファーエンジン（インタラクション） | 顧客とのやり取り中に、1つまたは複数の調整されたオファーを提供して、リアルタイムで対応します。 [詳細情報](../interaction/interaction.md) |
| ソーシャルネットワーク (ソーシャルマーケティング) | Adobe CampaignをX （旧Twitter）と同期します。 [詳細情報](../connect/ac-tw.md) |
| トランザクションメッセージの制御と実行（Message Center） | 情報システム内のイベントから生成されるトリガーメッセージを、可用性を高め、より優れたロード管理で管理します。 [詳細情報](../send/transactional.md) |
| LINE チャネル | LINE チャネルを介して配信を送信します。 [詳細情報](../send/line/line.md) |
| ダイレクトメールチャネル | ダイレクトメールチャネルを介して配信を送信します。 [詳細情報](../send/direct-mail.md) |
| モバイルチャネル (SMS) | SMS コネクタ v2を含むモバイルチャネル（SMS）を介して配信を送信します（8.9.1以降で一般に利用可能）。 [詳細情報](../send/sms/sms.md) |
| モバイルアプリチャネル | アプリを通じて、iOSおよびAndroidのデバイスにパーソナライズされた通知を送信します。 [詳細情報](../send/push.md) |
| コンテンツマネージャー | 定期的なニュースレターまたはweb サイトを作成してから、メッセージを検証して公開します。 [詳細情報](../../automation/workflow/content-management.md) |
| オンライン調査 (調査マネージャー) | オンラインフォームを作成、管理し、プロファイル情報の追加や変更、購読、登録解除、競合他社への参加を行います。 [詳細情報](../dev/surveys/about-surveys.md) |
| マーケティング分析 | データの分析および測定、統計の計算、レポート作成の簡素化を行います。 [詳細情報](../reporting/gs-reporting.md) |
| Response Manager | チャネル全体でマーケティング施策やオファーの成功と収益性を測定。 [詳細情報](../../automation/response/about-response-manager.md) |
| 外部データへのアクセス (Federated Data Access) | Adobe Campaign データの構造を変更することなく、外部データベースに保存された情報を処理します。 [詳細情報](../connect/fda.md) |
| キャンペーンの最適化 | メッセージが顧客のニーズと企業のコミュニケーションポリシーを満たすように、配信を制御、フィルター、監視します。 [詳細情報](../../automation/campaign-opt/campaign-typologies.md) |
| 配信品質の監視 (メールの配信品質) | メッセージがバウンスすることなく受信トレイに届くか、迷惑メールとして判定されるかを測定します。 [詳細情報](../send/monitoring-deliverability.md) |
| クーポン管理 | マーケティングオファーに追加するクーポンのセットを作成します。 [詳細情報](../send/personalized-coupons.md) |
| 受信ボックスレンダリング (IR) | 受信できるコンテキストでメッセージをプレビューし、主要なデスクトップおよびweb メールクライアントとの互換性を確認します。 [詳細情報](../send/inbox-rendering.md) |
| セントラル／ローカルマーケティング（分散型マーケティング） | 本社などの中央エンティティと、販売ポイントなどのローカルエンティティとの間のコラボレーション施策を実施します。 [詳細情報](../../automation/distributed-marketing/about-distributed-marketing.md) |
| CRM コネクタ | Adobe Adobe CampaignとサードパーティのCRM システムを連携。 [詳細情報](../connect/crm.md) |
| Web 分析コネクタ | Adobe CampaignとAdobe Analyticsのインタラクションを許可します。 [詳細情報](../connect/ac-aa.md) |
| AEM 統合 | Adobe Experience Managerで、メールとフォームのコンテンツを管理します。 [詳細情報](../connect/ac-aem.md) |
| Adobe Experience Cloud 共有オーディエンス統合 | [!DNL Adobe CX Enterprise] （旧Adobe Experience Cloud）ソリューションおよびアプリとのオーディエンスの交換と共有。 [詳細情報](../start/shared-audiences.md) |
| Adobe Experience Cloud との統合 | [!DNL Adobe CX Enterprise] （旧Adobe Experience Cloud）ソリューションからAdobe Campaignにオーディエンスを読み込み、書き出します。 [詳細情報](../connect/integration.md) |
| プライバシーデータ保護規則 | プライバシーコンプライアンスに役立つ機能を追加します。 [詳細情報](../start/privacy.md) |
| AMP サポート | メール形式のインタラクティブなAMPを使用して、動的なメールを送信します。 [詳細情報](../send/defining-interactive-content.md) |


>[!NOTE]
>
>マーケティングリソース（MRM）、クーポン管理、およびオンライン調査パッケージは、Campaignのエンタープライズ（FFDA）展開のコンテキストでは使用できません。 詳しくは、[機能の利用状況](../architecture/enterprise-deployment.md#feature-availability)を参照してください。

## 関連トピック {#related-topics}

* [&#x200B; データパッケージの操作](../dev/packages.md)：独自のカスタムパッケージを作成、書き出し、読み込みます。
* [&#x200B; テクニカルワークフロー](../../automation/workflow/technical-workflows.md)：組み込みのテクニカルワークフローとそれらをインストールするパッケージ。
* [FFDA デプロイメントでの機能の可用性](enterprise-deployment.md#feature-availability): Enterprise （FFDA）デプロイメントでは使用できない機能。
* [&#x200B; サポートされていない機能](../start/v7-to-v8.md#gs-removed):v8でサポートされなくなったCampaign Classic v7機能。
* [&#x200B; グローバル原則](general-architecture.md):Managed Cloud Services環境で変更できる内容と変更できない内容。
* [Campaign v8](../start/get-started.md)の基本を学ぶ：コア機能とアドオンの概要。
