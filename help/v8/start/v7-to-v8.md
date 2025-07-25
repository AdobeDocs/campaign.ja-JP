---
title: Campaign Classic v7 から Campaign v8 への移行
description: Campaign Classic v7 と Campaign v8 の違いについて説明します。
feature: Overview
role: User
level: Beginner
exl-id: 00ba1c43-9558-4adb-83a1-6597c2bbca62
source-git-commit: 061197048885a30249bd18af7f8b24cb71def742
workflow-type: tm+mt
source-wordcount: '714'
ht-degree: 98%

---

# [!DNL Campaign Classic] v7 から [!DNL Campaign] v8 への移行{#gs-matrix}

以前の [!DNL Campaign Classic] v7 ユーザーであれば、普段 [!DNL Adobe Campaign] を操作する際と大きな違いはありません。UI と構成手順には小規模の変更がありますが、v8 での変更の大部分は目には見えません。

>[!AVAILABILITY]
>
>* 現時点では、Campaign v8 は Managed Cloud Service として&#x200B;**のみ**&#x200B;使用でき、オンプレミス環境またはハイブリッド環境にデプロイすることはできません。[詳細情報](#cloud-services)
>
>* 既存の Campaign Classic v7 環境からの自動移行はまだ利用できません。


## Managed Cloud Services{#cloud-services}

Adobe Campaign v8 は、**Managed Cloud Service** として利用可能です。

Adobe Campaign Managed Cloud Services は、クロスチャネルのカスタマーエクスペリエンスを設計するための Managed Cloud Services プラットフォームとして、視覚的なキャンペーンオーケストレーション、リアルタイムインタラクション管理、クロスチャネル実行のための環境を提供します。Campaign Managed Cloud Services について詳しくは、[ 製品説明ページ ](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target="_blank"} を参照してください。

この新しい製品は、クラス最高のサービスと、先を見越した監視とタイムリーな警告を組み合わせており、次の 3 つの領域に焦点を当てています。

* **クラウドの俊敏性** - アドビにより自動化されており、最適化および標準化されたクラウドのデプロイメントを備えています。また、パフォーマンスの予測能力、俊敏性の改善、セルフサービスの生産性の向上を実現します。
* **サービスエクスペリエンス** - プロアクティブな可用性と処理能力、およびパフォーマンスの監視と対応により、中断を防ぎ、インシデントを迅速に解決し、継続的な改善に向けて定期的にサービスを確認します。
* **キャンペーンに対する深い専門知識** - 機能、技術、配信品質のニーズに対応し、デプロイメントのリスクを軽減し、変更管理を改善するために、エキスパートである顧客エンジニアリングチームが提供する親和性の高いサービスです。

以前の [!DNL Campaign Classic] ユーザーの場合、[!DNL Campaign Classic] v7 のほとんどの機能は [!DNL Campaign] v8 で利用できます。ただし、[この節](#gs-removed)に記載されている機能を除きます。

>新しいクラウドアーキテクチャにより、Campaign ではプロセスの効率化、コストの削減、リスクの管理およびデータセキュリティの向上が可能になります。Campaign v8 環境には、事前設定済みの専用の仮想プライベートクラウド（VPC）が付属しています。


## ハイブリッドアーキテクチャ {#hybrid-archi}

Campaign v8 は&#x200B;**ハイブリッドアーキテクチャ**&#x200B;に基づいています。Campaign Classic v7 から移行する場合は、すべての配信がミッドソーシングサーバーを経由することに注意してください。

その結果：

* Campaign v8 では内部ルーティングは&#x200B;**不可能**&#x200B;で、外部アカウントはそれに応じて無効になっています。
* 配信のステータスは即座に更新されません - マーケティングインスタンスでテクニカルプロセスが実行され、配信ステータスがタイムリーに更新されます。


v7 からの移行時にトランザクションメッセージの配達確認の送信について詳しくは、[こちらのページ](../send/transactional-template.md#transition-from-v7)を参照してください。


## [!DNL Campaign] と [!DNL Snowflake] {#ac-gs-snowflake}

[Enterprise（FFDA）デプロイメント](../architecture/enterprise-deployment.md)では、[!DNL Adobe Campaign] v8 は 2 つのデータベースと連携します。1 つは、ユーザーインターフェイスのリアルタイムメッセージング、単一クエリ、 API 経由での書き込みに使用するローカル [!DNL Campaign] データベース、もう 1 つは、キャンペーン実行、バッチクエリ、ワークフロー実行に使用するクラウド [!DNL Snowflake] データベースです。

Campaign v8 Enterprise では、**Full Federated Data Access**（FFDA）の概念が導入されており、すべてのデータがリモートのクラウドデータベース上にあります。この新しいアーキテクチャにより、Campaign v8 Enterprise（FFDA）デプロイメントではデータ管理を簡素化できます。クラウドデータベースではインデックスは必要ありません。テーブルを作成してデータをコピーするだけで、利用を開始できます。クラウドデータベーステクノロジーでは、パフォーマンスレベルを保証するために特別なメンテナンスを行う必要はありません。

[!DNL Campaign] v8 アーキテクチャについて詳しくは、[こちらのページ](../architecture/architecture.md)を参照してください。


## Adobe ID を使用して Campaign に接続{#adobe-id}

Campaign ユーザーは、Adobe ID でのみ接続します。同じ Adobe ID を使用して、Adobe Experience Cloud ソリューション用に、すべてのアドビプランおよび製品を 1 つのアカウントに関連付けます。

[!DNL Campaign] に接続する方法について詳しくは、[こちらのページ](connect.md)を参照してください。

## キューブを使用したデータの分析{#adobe-reporting}

マーケティング分析モジュールを使用して、データの分析と測定、統計の計算、レポートの作成と計算の簡素化および最適化を行います。さらに、レポートを作成してターゲット母集団を作成します。特定されると、Adobe Campaign で使用できるリスト（ターゲティング、セグメント化など）に保存されます。

Adobe Campaign キューブレポートは最適化されており、Campaign Classic v8 よりも優れた拡張可能性を提供します。 この特定のデプロイメントモデルでは、キューブに対する以前の制限は Campaign v8 には適用されません。キューブについて詳しくは、[この節](../../v8/reporting/gs-cubes.md)を参照してください。

## 使用できない機能{#gs-unavailable-features}

Campaign の [Enterprise（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、次のような一部の機能は利用できません。

* マーケティングリソース管理
* クーポン
* Web トラッキング
* 調査

## サポートされていない機能{#gs-removed}

次に示すような従来の Campaign Classic v7 機能の一部は、Campaign v8 ではサポートされなくなりました。

* Facebook でのソーシャルマーケティング
* ACS コネクタ（プライムオファー）
* LDAP との統合
* ユーザー名／パスワードによるログイン
* ハイブリッドまたはオンプレミスのデプロイメントモデル


>[!NOTE]
>
>使用できない機能やサポートされていない機能の中には、ユーザーインターフェイスに表示されたままのものがある場合があります。
