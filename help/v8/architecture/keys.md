---
title: Campaign における鍵の管理
description: 鍵の管理の概要
feature: Configuration, FFDA
role: Developer
level: Intermediate
exl-id: ef06cb6b-1b25-4dbe-8fd0-f880ec9d645b
TQID: https://experienceleague.adobe.com/DfuZXr3sXnip35yNPRvZBDZ1BVb6dJFWYA2j90vc7RE
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: a658c786-869b-4194-a780-2594d663addaid: b12f6872-9271-4369-85e5-86969a0b99a2id: b82389f8-9b5e-4083-8e3b-3cef299fb8b9id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
subfeature_v2: id: cfc95e9b-b035-4403-a6a9-b27a8a053a37id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
level_v2: id: b5a62a22-46f7-4f0d-b151-3fc640bef588
topic_v2: id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 595
ht-degree: 97%

---

# 鍵の管理と単一性 {#key-management}

[エンタープライズ（FFDA）デプロイメント](enterprise-deployment.md)のコンテキストでは、プライマリキーは文字列であるユニバーサル固有識別子（UUID）です。 UUID を作成するには、スキーマのメイン要素に **autouuid** 属性と **autopk** 属性を含め、**true** に設定する必要があります。

Adobe Campaign v8 は [!DNL Snowflake] をコアデータベースとして使用します。 [!DNL Snowflake] データベースの分散アーキテクチャには、テーブル内のキーの単一性を管理するメカニズムはありません。Adobe Campaign データベース内のキーの一貫性は、エンドユーザーが確保する必要があります。

リレーショナルデータベースの一貫性を維持するには、キー（特にプライマリキー）の重複を避けることが必須です。 プライマリキーが重複すると、**クエリ**、**紐付け**、**データの更新**&#x200B;などのデータ管理ワークフローのアクティビティに問題を引き起こします。 [!DNL Snowflake] テーブルの更新時に適切な紐付け条件を定義する際に重要です。


>[!CAUTION]
>
>キーの重複は、UUID に限って発生するわけではありません。 カスタムテーブルで作成されたカスタムキーを含む ID で発生する可能性があります。


## Unicity Service{#unicity-service}

Unicity Service は、Cloud Database テーブル内の一意のキー制約の整合性を保持および監視するのに役立つ Cloud Database Manager コンポーネントです。 これにより、重複したキーを挿入するリスクを軽減できます。

Cloud Database は単一性の制約を実施しないので、Unicity Service は Adobe Campaign でデータを管理する際に重複が挿入されるリスクを軽減します。

### 単一性ワークフロー{#unicity-wf}

Unicity Service は専用の&#x200B;**[!UICONTROL 単一性アラート]**&#x200B;ビルトインワークフローを備えており、単一性の制約を監視し、重複が検出された際にアラートします。

これらのテクニカルワークフローは、Campaign エクスプローラー の&#x200B;**[!UICONTROL 管理／本番環境／テクニカルワークフロー／フル FFDA 単一性]**&#x200B;ノードから利用できます。 **これは変更できません**。

このワークフローは、すべてのカスタムおよびビルトインスキーマをチェックし、重複した行を検出します。

![](assets/unicity-alerting-wf.png)

**[!UICONTROL 単一性アラート]**（ffdaUnicity）ワークフローが重複キーを検出した場合、スキーマ名、キーのタイプ、影響を受ける行数、日付を含む特定の&#x200B;**単一性監査**&#x200B;テーブルに追加されます。 **[!UICONTROL 管理／監査／キー単一性]**&#x200B;ノードの重複したキーにアクセスすることができます。

![](assets/unicity-table.png)

データベース管理者は SQL アクティビティを使用して重複を削除するか、アドビカスタマーケアに詳細をお問い合わせください。

### アラート{#unicity-wf-alerting}

重複したキーが検出された場合、特定の通知が&#x200B;**[!UICONTROL ワークフロースーパーバイザー]**&#x200B;オペレーターグループに送信されます。 このアラートのコンテンツとオーディエンスは、**[!UICONTROL 単一性アラート]**&#x200B;ワークフローの&#x200B;**アラート**&#x200B;アクティビティで変更できます。

![](assets/wf-alert-activity.png)


## 追加のガードレール {#duplicates-guardrails}

キャンペーンは、[!DNL Snowflake] データベースで重複したキーが挿入されるのを防ぐための一連の新しいガードレールを備えています。

>[!NOTE]
>
>これらのガードレールは、Campaign v8.3以降で使用できます。 バージョンを確認するには、[このセクション ](../start/compatibility-matrix.md#how-to-check-your-campaign-version-and-buildversion)を参照してください

### 配信準備 {#remove-duplicates-delivery-preparation}

Adobe Campaign は、配信の準備中に重複した UUID をオーディエンスから自動的に削除します。 このメカニズムは、配信の準備中にエラーが発生するのを防ぎます。 エンドユーザーは、配信ログの「キーが重複しているため、一部の受信者はメインターゲットから除外されます」という情報を確認できます。 その際、次の警告が表示されます。`Exclusion of duplicates (based on the primary key or targeted records)`

![](assets/exclusion-duplicates-log.png)

### ワークフロー内のデータ更新 {#duplicates-update-data}

[エンタープライズ（FFDA）デプロイメント](enterprise-deployment.md)のコンテキストでは、内部キー（UUID）をフィールドとして選択して、ワークフロー内のデータを更新することはできません。

![](assets/update-data-no-internal-key.png)

### 重複を含むスキーマのクエリ {#query-with-duplicates}

ワークフローがスキーマに対するクエリの実行を開始すると、Adobe Campaign は重複したレコードが[監査単一性テーブル](#unicity-wf)で報告されているかを確認します。 その場合、ワークフローは、重複したデータに対する後続の操作がワークフローの結果に影響を与える可能性があるという警告をログに記録します。

![](assets/query-with-duplicates.png)

このチェックは、次のワークフローアクティビティで実行されます。

* クエリ
* 増分クエリ
* リスト読み込み


>[!NOTE]
>
>別の Campaign バージョンから移行する場合は、移行への影響を避けるために、重複の削除、トラブルシューティング、データのサニタイズを行うことが不可欠です。
