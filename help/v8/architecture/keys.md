---
title: Campaign における鍵の管理
description: 鍵の管理の概要
exl-id: ef06cb6b-1b25-4dbe-8fd0-f880ec9d645b
source-git-commit: d3137e75bfc4986e1d6badf32f21fda4c4353c8b
workflow-type: tm+mt
source-wordcount: '609'
ht-degree: 18%

---

# 鍵の管理と単一性 {#key-management}

のコンテキストでは、 [エンタープライズ (FFDA) デプロイメント](enterprise-deployment.md)の場合、プライマリキーは UUID(Universally Unique IDentifier) です。UUID は文字に関する文字列です。 UUID を作成するには、スキーマのメイン要素に **autouuid** 属性と **autopk** 属性を含め、**true** に設定する必要があります。

Adobe Campaign v8 はを使用します [!DNL Snowflake] をコアデータベースとして使用します。 の分散アーキテクチャ [!DNL Snowflake] データベースには、テーブル内でのキーの単一性を確保するメカニズムは用意されていません。エンドユーザーは、Adobe Campaignデータベース内の鍵の一貫性を保つ責任を負います。

リレーショナルデータベースの一貫性を維持するには、キー（特にプライマリキー）の重複を避けることが必須です。 プライマリキーが重複すると、**クエリ**、**紐付け**、**データの更新**&#x200B;などのデータ管理ワークフローのアクティビティに問題を引き起こします。更新時に適切な紐付け条件を定義するのに重要 [!DNL Snowflake] テーブル。


>[!CAUTION]
>
>キーの重複は、UUID に限って発生するわけではありません。カスタムテーブルで作成されたカスタムキーを含む ID で発生する可能性があります。


## Unicity Service{#unicity-service}

Unicity Service は、Cloud Database Manager コンポーネントで、Cloud Database テーブル内の一意のキー制約の整合性を保持および監視するのに役立ちます。 これにより、重複したキーを挿入するリスクを軽減できます。

Cloud Database は単一性の制約を実施しないので、Unicity Service はAdobe Campaignでデータを管理する際に重複を挿入するリスクを軽減します。

### 単一ワークフロー{#unicity-wf}

ユニシティサービスには専用サービスが付属 **[!UICONTROL 非アラート]** 重複が検出された際の単一性の制約とアラートを監視する組み込みのワークフロー。

このテクニカルワークフローは、 **[!UICONTROL 管理/プロダクション/テクニカルワークフロー/フル FFDA 単一性]** Campaign エクスプローラーのノード。 **変更しないでください**.

このワークフローは、すべてのカスタムおよび組み込みスキーマをチェックし、重複行を検出します。

![](assets/unicity-alerting-wf.png)

この **[!UICONTROL 非アラート]** (ffdaUnicity) ワークフローが重複キーを検出し、特定の **単一性を監査** テーブル。スキーマ名、キーのタイプ、影響を受ける行の数、日付が含まれます。 重複したキーには、 **[!UICONTROL 管理/監査/キーの単一性]** ノード。

![](assets/unicity-table.png)

データベース管理者は、SQL アクティビティを使用して重複を削除できます。詳しくは、Adobeカスタマーケアにお問い合わせください。

### 警告{#unicity-wf-alerting}

特定の通知が **[!UICONTROL ワークフロースーパーバイザー]** 重複したキーが検出された場合のオペレーターグループ。 このアラートのコンテンツとオーディエンスは、 **アラート** の活動 **[!UICONTROL 非アラート]** ワークフロー。

![](assets/wf-alert-activity.png)


## 追加のガードレール{#duplicates-guardrails}

キャンペーンには、で重複したキーが挿入されるのを防ぐための一連の新しいガードレールが付属しています [!DNL Snowflake] データベース。

>[!NOTE]
>
>これらのガードレールは、Campaign v8.3 以降で使用できます。バージョンを確認するには、 [この節](../start/compatibility-matrix.md#how-to-check-your-campaign-version-and-buildversion)

### 配信準備{#remove-duplicates-delivery-preparation}

Adobe Campaignは、配信の準備中に、重複した UUID をオーディエンスから自動的に削除します。 このメカニズムは、配信の準備中にエラーが発生するのを防ぎます。 エンドユーザーは、次の情報を配信ログで確認できます。キーが重複しているので、一部の受信者をメインターゲットから除外することができます。 その際、次の警告が表示されます。`Exclusion of duplicates (based on the primary key or targeted records)`

![](assets/exclusion-duplicates-log.png)

### ワークフロー内のデータを更新{#duplicates-update-data}

のコンテキストでは、 [エンタープライズ (FFDA) デプロイメント](enterprise-deployment.md)の場合、内部キー (UUID) をフィールドとして選択して、ワークフロー内のデータを更新することはできません。

![](assets/update-data-no-internal-key.png)

明示的な紐付けキーを使用する場合、 **データを更新** アクティビティは、次の方法で、このキーに基づいて宛先スキーマの単一性を自動的に保証します。

1. （トランジションから）受信データの重複排除
1. 宛先テーブルでのデータの重複排除（結合）


![](assets/update-data-deduplicate.png)

>[!CAUTION]
>
>このガードレールはオプションでのみ適用されます **[!UICONTROL 紐付けキーの使用]**.


### 重複を含むスキーマのクエリ{#query-with-duplicates}

ワークフローがスキーマに対するクエリの実行を開始すると、Adobe Campaignは、重複したレコードが [監査の単一性テーブル](#unicity-wf). その場合、ワークフローは、重複したデータに対する後続の操作がワークフローの結果に影響を与える可能性があるとして警告をログに記録します。

![](assets/query-with-duplicates.png)

このチェックは、次のワークフローアクティビティで実行されます。

* クエリ
* 増分処理クエリ
* リスト読み込み