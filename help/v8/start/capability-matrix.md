---
title: Campaign Classic v7 - Campaign v8 機能マトリックス
description: Campaign Classic v7 と Campaign v8 の違いを理解する
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 00ba1c43-9558-4adb-83a1-6597c2bbca62
source-git-commit: 0c01b0a597e54ae93dd581ccba6f19b2ff13f956
workflow-type: tm+mt
source-wordcount: '561'
ht-degree: 100%

---

# [!DNL Campaign Classic] v7 ～ [!DNL Campaign] v8 の機能{#gs-matrix}

以前の [!DNL Campaign Classic] v7 ユーザーであれば、普段 [!DNL Adobe Campaign] を操作する際と大きな違いはありません。UI と構成手順には小規模の変更がありますが、v8 での変更の大部分は目には見えません。

Adobe Campaign v8 は、**Managed Cloud Service** として利用可能です。この新しい製品は、クラス最高のサービスと、先を見越した監視とタイムリーな警告を組み合わせており、次の 3 つの領域に焦点を当てています。

* **クラウドの俊敏性** - アドビにより自動化されており、最適化および標準化されたクラウドのデプロイメントを備えています。また、パフォーマンスの予測能力、俊敏性の改善、セルフサービスの生産性の向上を実現します。
* **サービスエクスペリエンス** - プロアクティブな可用性と処理能力、およびパフォーマンスの監視と対応により、中断を防ぎ、インシデントを迅速に解決し、継続的な改善に向けて定期的にサービスを確認します。
* **キャンペーンに対する深い専門知識** - 機能、技術、配信品質のニーズに対応し、デプロイメントのリスクを軽減し、変更管理を改善するために、エキスパートである顧客エンジニアリングチームが提供する親和性の高いサービスです。

以前の [!DNL Campaign Classic] ユーザーの場合、[!DNL Campaign Classic] v7 のほとんどの機能は [!DNL Campaign] v8 で利用できます。ただし、[この節](#gs-removed)に記載されている機能を除きます。その他は、将来のリリースで提供される予定です。[詳しくは、この節を参照してください。](#gs-unavailable-features)

>[!NOTE]
>
> Campaign v8 はハイブリッドアーキテクチャに基づいています。Campaign Classic v7 から移行する場合は、すべての配信がミッドソーシングサーバーを経由することに注意してください。[詳細情報](../architecture/architecture.md)
>
> その結果、Campaign v8 では内部ルーティングは&#x200B;**不可能**&#x200B;で、外部アカウントはそれに応じて無効になっています。


## [!DNL Campaign] および [!DNL Snowflake] {#ac-gs-snowflake}

Campaign v8 は [!DNL Snowflake] で動作します。2 つのデプロイメントモデルを使用できます。

![](../assets/do-not-localize/glass.png) [!DNL Campaign] v8 アーキテクチャの詳細については、[このページ](../architecture/architecture.md)を参照してください。


## Adobe ID を使用して Campaign に接続{#adobe-id}

Campaign ユーザーは、Adobe ID で接続します。同じ Adobe ID を使用して、Adobe Experience Cloud ソリューション用に、すべてのアドビプランおよび製品を 1 つのアカウントに関連付けます。

![](../assets/do-not-localize/glass.png) [!DNL Campaign] に接続する方法については、[このページ](connect.md)を参照してください。

## キューブを使用したデータの分析{#adobe-reporting}

マーケティング分析モジュールを使用して、データの分析と測定、統計の計算、レポートの作成と計算の簡素化および最適化を行います。さらに、レポートを作成してターゲット母集団を作成します。特定されると、Adobe Campaign で使用できるリスト（ターゲティング、セグメント化など）に保存されます。

Adobe Campaign キューブレポートは最適化されており、Campaign Classic v7 よりも優れた拡張可能性を提供します。キューブに関する以前の制限は、Campaign v8 では適用されません。

## データソースを変更 {#change-data-source}

Campaign v8 では、「**[!UICONTROL データソースを変更]**」というターゲティングワークフローアクティビティが追加されました。

「**[!UICONTROL データソースを変更]**」アクティビティを使用すると、ワークフローの&#x200B;**[!UICONTROL 作業用テーブル]**&#x200B;のデータソースを変更して、FDA、FFDA、ローカルデータベースなどの様々なデータソースにわたってデータを管理できます。

![](../assets/do-not-localize/glass.png)「**[!UICONTROL データソースを変更]**」アクティビティの詳細については、[このページ](../config/workflows.md#change-data-source-activity)を参照してください。

## 使用できない機能{#gs-unavailable-features}

このバージョンの Campaign では、以下の機能は利用できません。

* マーケティングリソース管理
* ハイブリッドまたはオンプレミスのデプロイメントモデル

>[!CAUTION]
>
>* 現時点では、Campaign v8 は Managed Cloud Service として&#x200B;**のみ**&#x200B;使用でき、オンプレミス環境またはハイブリッド環境にデプロイすることはできません。
>
>* 既存の Campaign Classic v7 環境からは移行できません。
>
>* デプロイメントモデルが不明な場合や、質問がある場合は、アドビアカウントエグゼクティブにお問い合わせください。


## サポートされていない機能{#gs-removed}

Campaign v8 の新しいアーキテクチャとデプロイメントモデルに合わせるために、過去の Campaign Classic v7 の一部の機能は Campaign v8 では使用できなくなりました。

* クーポン
* Web トラッキング
* 調査
* ソーシャルマーケティング
* ACS コネクタ（プライムオファー）
* LDAP との統合
* ユーザー名／パスワードによるログイン

>[!NOTE]
>
>使用できない機能やサポートされていない機能の中には、ユーザーインターフェイスに表示されたままのものがある場合があります。
