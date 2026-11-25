---
title: Campaign における鍵の管理
description: 鍵の管理の概要
feature: Configuration, FFDA
role: Developer
level: Intermediate
exl-id: ef06cb6b-1b25-4dbe-8fd0-f880ec9d645b
TQID: 'https://experienceleague.adobe.com/DfuZXr3sXnip35yNPRvZBDZ1BVb6dJFWYA2j90vc7RE'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
  - id: b12f6872-9271-4369-85e5-86969a0b99a2
    internal-label: APIs
  - id: b82389f8-9b5e-4083-8e3b-3cef299fb8b9
    internal-label: Schemas
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
  - id: 702a1f63-4da5-5981-83b3-4d5b14e90420
    internal-label: FFDA
subfeature_v2:
  - id: cfc95e9b-b035-4403-a6a9-b27a8a053a37
    internal-label: PI
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
  - id: a14877cc-63b1-41d9-bf0b-5f97cadd0417
    internal-label: Configuration guidelines
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
source-git-commit: 9d4ec9f8454acd6a939221075251c265a1ffd672
workflow-type: tm+mt
source-wordcount: '701'
ht-degree: 55%
---
# 鍵の管理と単一性 {#key-management}

[エンタープライズ（FFDA）デプロイメント](enterprise-deployment.md)のコンテキストでは、プライマリキーは文字列であるユニバーサル固有識別子（UUID）です。 UUID を作成するには、スキーマのメイン要素に **autouuid** 属性と **autopk** 属性を含め、**true** に設定する必要があります。

Adobe Campaign v8 は [!DNL Snowflake] をコアデータベースとして使用します。 [!DNL Snowflake] データベースの分散アーキテクチャでは、テーブル内のキーの単一性を確保する仕組みがありません。エンドユーザーは、Adobe Campaign データベース内のキーの一貫性に責任を持ちます。

リレーショナルデータベースの一貫性を維持するには、キー（特にプライマリキー）の重複を避けることが必須です。 プライマリキーが重複すると、**クエリ**、**紐付け**、**データの更新**&#x200B;などのデータ管理ワークフローのアクティビティに問題を引き起こします。 これは、[!DNL Snowflake] テーブルを更新する際に適切な紐付け条件を定義するために重要です。


>[!CAUTION]
>
>重複したキーは、UUIDに制限されません。 カスタムテーブルで作成されたカスタムキーを含むIDで発生する可能性があります。


## Unicity Service{#unicity-service}

Unicity Service は、Cloud Database テーブル内の一意のキー制約の整合性を保持および監視するのに役立つ Cloud Database Manager コンポーネントです。 これにより、重複したキーを挿入するリスクを軽減できます。

Cloud Database は単一性の制約を実施しないので、Unicity Service は Adobe Campaign でデータを管理する際に重複が挿入されるリスクを軽減します。

### 単一性ワークフロー{#unicity-wf}

Unicity Service は専用の&#x200B;**[!UICONTROL 単一性アラート]**&#x200B;ビルトインワークフローを備えており、単一性の制約を監視し、重複が検出された際にアラートします。

これらのテクニカルワークフローは、Campaign エクスプローラー の&#x200B;**[!UICONTROL 管理／本番環境／テクニカルワークフロー／フル FFDA 単一性]**&#x200B;ノードから利用できます。 **これは変更できません**。

このワークフローは、すべてのカスタムおよびビルトインスキーマをチェックし、重複した行を検出します。

![単一性アラート （ffdaUnicity） ワークフロー：スキーマ チェック、重複行の検出、テスト、アラート、終了、およびクリーンアップ アクティビティ &#x200B;](assets/unicity-alerting-wf.png)

**[!UICONTROL 単一性アラート]**（ffdaUnicity）ワークフローが重複キーを検出した場合、スキーマ名、キーのタイプ、影響を受ける行数、日付を含む特定の&#x200B;**単一性監査**&#x200B;テーブルに追加されます。 **[!UICONTROL 管理／監査／キー単一性]**&#x200B;ノードの重複したキーにアクセスすることができます。

スキーマ ID、キー定義、キーの種類、重複した値、重複した数、作成日![&#128279;](assets/unicity-table.png)の キー単一性リスト

データベース管理者は SQL アクティビティを使用して重複を削除するか、アドビカスタマーケアに詳細をお問い合わせください。

### アラート{#unicity-wf-alerting}

重複したキーが検出された場合、特定の通知が&#x200B;**[!UICONTROL ワークフロースーパーバイザー]**&#x200B;オペレーターグループに送信されます。 このアラートのコンテンツとオーディエンスは、**[!UICONTROL 単一性アラート]**&#x200B;ワークフローの&#x200B;**アラート**&#x200B;アクティビティで変更できます。

![単一性アラートのアラートアクティビティ。重複したキーメッセージを含むワークフロースーパーバイザーグループに割り当てられている](assets/wf-alert-activity.png)


## 追加のガードレール {#duplicates-guardrails}

Campaignには、[!DNL Snowflake] データベースに重複するキーを挿入しないようにする、一連の新しいガードレールが付属しています。

>[!NOTE]
>
>これらのガードレールは、Campaign v8.3以降で使用できます。 バージョンを確認するには、[Campaign v8互換性マトリックス &#x200B;](../start/compatibility-matrix.md)を参照してください

### 配信準備 {#remove-duplicates-delivery-preparation}

Adobe Campaign は、配信の準備中に重複した UUID をオーディエンスから自動的に削除します。 このメカニズムは、配信の準備中にエラーが発生するのを防ぎます。 エンドユーザーは、配信ログでこの情報を確認できます。一部の受信者は、キーが重複しているため、メインターゲットから除外できます。 その際、次の警告が表示されます。`Exclusion of duplicates (based on the primary key or targeted records)`

![矢印でハイライト表示された重複の除外（ターゲットレコードのプライマリキーに基づく）を含む配信ログ &#x200B;](assets/exclusion-duplicates-log.png)

### ワークフロー内のデータ更新 {#duplicates-update-data}

[Enterprise （FFDA） デプロイメント &#x200B;](enterprise-deployment.md)のコンテキストでは、ワークフロー内のデータを更新するフィールドとして内部キー（UUID）を選択することはできません。

![受信者（nms:recipient）のフィールドセレクターでデータアクティビティを更新します。内部キーフィールドは選択できません](assets/update-data-no-internal-key.png)

### 重複を含むスキーマのクエリ {#query-with-duplicates}

ワークフローがスキーマ上でクエリの実行を開始すると、Adobe Campaignは、[監査単一性テーブル &#x200B;](#unicity-wf)に重複したレコードが報告されているかどうかを確認します。 その場合、重複したデータに対するその後の操作がワークフローの結果に影響を与える可能性があるため、ワークフローは警告をログに記録します。

警告の単一性制約を含む![&#x200B; ワークフローログに違反しました。 スキーマ nms:recipient](assets/query-with-duplicates.png)で重複データが見つかりました

このチェックは、次のワークフローアクティビティで実行されます。

* クエリ
* 増分クエリ
* リスト読み込み


>[!NOTE]
>
>別のCampaign バージョンから移行する場合は、移行に影響を与えないように、重複を削除し、トラブルシューティングを行い、データを整理することが不可欠です。
