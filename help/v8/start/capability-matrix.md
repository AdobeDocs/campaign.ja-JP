---
title: Campaign Classic v7 - Campaign v8 機能マトリックス
description: Campaign Classic v7 と Campaign v8 の違いを理解する
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 00ba1c43-9558-4adb-83a1-6597c2bbca62
source-git-commit: 6de5c93453ffa7761cf185dcbb9f1210abd26a0c
workflow-type: tm+mt
source-wordcount: '567'
ht-degree: 49%

---

# [!DNL Campaign Classic] v7 ～ [!DNL Campaign] v8 の機能{#gs-matrix}

前者として [!DNL Campaign Classic] v7 ユーザーは、通常のやり取りの方法に大きな混乱を招くことを期待しないでください [!DNL Adobe Campaign]. UI と構成手順には小規模の変更がありますが、v8 での変更の大部分は目には見せません。

Adobe Campaign v8 は、 **管理Cloud Service**. この新しい製品は、クラス最高のサービスと、次の 3 つの領域に焦点を当てたプロアクティブな監視とタイムリーな警告を組み合わせたものです。

* **クラウドの俊敏性** —Adobeによる自動化。最適化され、標準化されたクラウドのデプロイメントを備え、パフォーマンスの予測性、俊敏性の向上、セルフサービスの生産性の向上を実現します。
* **サービスエクスペリエンス**  — プロアクティブな可用性、容量、パフォーマンスの監視と対応により、中断を防ぎ、インシデントを迅速に解決し、継続的な改善に向けて定期的にサービスを確認
* **深いキャンペーンの専門知識**  — 機能、技術、配信品質のニーズに対応し、導入のリスクを軽減し、変更管理を改善するために、エキスパートのカスタマーエンジニアリングチームが提供する高親和性のサービス。

前者として [!DNL Campaign Classic] ユーザーが、 [!DNL Campaign Classic] v7 機能は、 [!DNL Campaign] v8（一部を除く）で、 [この節](#gs-removed). その他は、将来のリリースで提供される予定です。[詳しくは、この節を参照してください。](#gs-unavailable-features)

>[!NOTE]
>
> Campaign v8 はハイブリッドアーキテクチャに基づいています。 Campaign Classic v7 から移行する場合は、すべての配信がミッドソーシングサーバーを経由することに注意してください。[詳細情報](../architecture/architecture.md)
>
> その結果、Campaign v8 では内部ルーティングは&#x200B;**不可能**&#x200B;で、外部アカウントはそれに応じて無効になっています。


## [!DNL Campaign] および [!DNL Snowflake] {#ac-gs-snowflake}

Campaign v8 はで動作します。 [!DNL Snowflake]. 2 つのデプロイメントモデルを使用できます。

![](../assets/do-not-localize/glass.png)[!DNL Campaign] v8アーキテクチャの詳細については、[このページ](../architecture/architecture.md)を参照してください。


## Adobe IDを使用して Campaign に接続{#adobe-id}

Campaign ユーザーは、Adobe ID で接続します。すべてのAdobe Experience Cloudソリューションで、1 つのアカウントに関連付けられたすべてのAdobeプランと製品を維持するために、同じAdobe IDが使用されます。

![](../assets/do-not-localize/glass.png) [!DNL Campaign] に接続する方法については、[このページ](connect.md)を参照してください。

## キューブを使用したデータの分析{#adobe-reporting}

マーケティング分析モジュールを使用して、データの分析と測定、統計の計算、レポートの作成と計算のシンプル化と最適化をおこないます。 さらに、レポートを作成してターゲット母集団を作成します。特定されると、Adobe Campaignで使用できるリスト（ターゲティング、セグメント化など）に保存されます。

Adobe Campaignキューブレポートが最適化され、Campaign Classicv7 よりも優れた拡張機能を提供します。 キューブに関する以前の制限は、Campaign v8 では適用されません。

## データソースを変更 {#change-data-source}

Campaign v8 では、「**[!UICONTROL データソースを変更]**」というターゲティングワークフローアクティビティが追加されました。

「**[!UICONTROL データソースを変更]**」アクティビティを使用すると、ワークフローの&#x200B;**[!UICONTROL 作業用テーブル]**&#x200B;のデータソースを変更して、FDA、FFDA、ローカルデータベースなどの様々なデータソースにわたってデータを管理できます。

![](../assets/do-not-localize/glass.png)「**[!UICONTROL データソースを変更]**」アクティビティの詳細については、[このページ](../config/workflows.md#change-data-source-activity)を参照してください。

## 使用できない機能{#gs-unavailable-features}

このバージョンの Campaign では、以下の機能は利用できません。

* マーケティングリソース管理
* 分散型マーケティング
* Response Manager
* ハイブリッドまたはオンプレミスのデプロイメントモデル

>[!CAUTION]
>
>* 現時点では、Campaign v8 は Managed Cloud Service として&#x200B;**のみ**&#x200B;使用でき、オンプレミス環境またはハイブリッド環境にデプロイすることはできません。
>
>* 既存の Campaign Classic v7 環境からは移行できません。
>
>* デプロイメントモデルが不明な場合や、質問がある場合は、担当のAdobeアカウント担当者にお問い合わせください。


## サポートされていない機能{#gs-removed}

Campaign v8 の新しいアーキテクチャとデプロイメントモデルに合わせるために、過去の Campaign Classic v7 の一部の機能は Campaign v8 では使用できなくなりました。

* クーポン
* Web トラッキング
* 調査
* ソーシャルマーケティングFacebook で
* ACS コネクタ（プライムオファー）
* LDAP との統合
* ユーザー名／パスワードによるログイン

>[!NOTE]
>
>使用できない機能やサポートされていない機能の一部は、ユーザーインターフェイスに引き続き表示される場合があります。
