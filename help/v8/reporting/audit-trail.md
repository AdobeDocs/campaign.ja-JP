---
product: campaign
title: 監査記録
description: Campaign 監査記録を使用してインスタンスを監視する方法について説明します
feature: Audit Trail, Monitoring, Workflows
source-git-commit: bb74393f0b24fa5b9781eee15c4527daba527192
workflow-type: tm+mt
source-wordcount: '650'
ht-degree: 2%

---

# 監査記録{#audit-trail}

この **[!UICONTROL 監査記録]** Adobe Campaign内の機能では、インスタンス内の重要なエンティティ（通常、インスタンスのスムーズな操作に大きな影響を与えるエンティティ）に加えられたすべての変更の詳細な記録が提供されます。 リアルタイムログとして機能し、発生したアクションとイベントの詳細なリストを取得します。

>[!NOTE]
>
>Adobe Campaignは、ユーザー権限、テンプレート、パーソナライゼーションまたはキャンペーン内で行われた変更を監査しません。\
>監査記録は、インスタンスの管理者のみが管理できます。

+++ 使用可能なエンティティの監査記録について説明します

* **スキーマ監査証跡**：を使用すると、スキーマに加えられた変更を確認し、これらの変更を加えたユーザーと変更が発生したタイミングを特定できます。

  スキーマについて詳しくは、次を参照してください： [ページ](../dev/schemas.md).

* **ワークフロー監査記録** は、ワークフローに関連するすべてのアクションを追跡します。これには、次のものが含まれます。

   * 開始
   * 一時停止
   * 停止
   * 再度開始
   * クリーンアップ：履歴をパージと同じ
   * アクション「シミュレーションモードで開始」と等しいシミュレーション
   * [ 保留中のタスクを今すぐ実行 ] アクションと同じウェイクアップ
   * 無条件停止

  ワークフローについて詳しくは、こちらを参照してください [ページ](../../automation/workflow/about-workflows.md).

  ワークフローの監視方法について詳しくは、 [専用セクション](../../automation/workflow/monitor-workflow-execution.md).

* **オプション監査証跡** では、アクティビティと、オプションに最後に加えられた変更を確認できます。

  オプションについて詳しくは、こちらを参照してください [ページ](https://experienceleague.adobe.com/en/docs/campaign-classic/using/installing-campaign-classic/appendices/configuring-campaign-options).

* **配信監査記録** では、アクティビティと、配信に最後に加えられた変更を確認できます。

  配信について詳しくは、こちらを参照してください [ページ](../start/create-message.md).

* **外部アカウント** を使用すると、テクニカルワークフローやキャンペーンワークフローなどの技術プロセスで使用される、外部アカウントに加えられた変更を確認できます。

  外部アカウントについて詳しくは、こちらを参照してください。 [ページ](../config/external-accounts.md).

* **配信マッピング** を使用すると、配信マッピングに対するアクティビティと最近の変更を監視できます。

  配信マッピングについて詳しくは、こちらを参照してください。 [ページ](../audiences/target-mappings.md).

* **Web アプリケーション** 入力フィールドと選択フィールドを含むページの作成に使用される Campaign V8 の web フォームに加えられた変更を確認できます。これにはデータベースのデータが含まれている場合があります。

  Web アプリケーションについて詳しくは、こちらを参照してください [ページ](../dev/webapps.md).

* **オファー** では、アクティビティと、オファーに最後に加えられた変更を確認できます。

  オファーについて詳しくは、こちらを参照してください。 [ページ](../interaction/interaction.md).

* **演算子** を使用すると、アクティビティと、オペレーターに加えられた最近の変更を監視できます。

  演算子の詳細については、こちらを参照してください [ページ](../interaction/interaction-operators.md).

+++

## 監査記録へのアクセス {#accessing-audit-trail}

インスタンスにアクセスするには **[!UICONTROL 監査記録]**:

1. へのアクセス **[!UICONTROL エクスプローラー]** お使いのインスタンスのメニュー。

1. の下 **[!UICONTROL 管理]** メニュー、選択 **[!UICONTROL 監査]** その後 **[!UICONTROL 監査記録]**.

   ![](assets/audit-trail-1.png)

1. この **[!UICONTROL 監査記録]** ウィンドウが開き、エンティティのリストが表示されます。 Adobe Campaignは、異なるエンティティに対する作成、編集、および削除アクションを監査します。

   最後の変更の詳細を確認するには、いずれかのエンティティを選択します。

1. この **[!UICONTROL エンティティを監査]** ウィンドウには、選択したエンティティに関する次のような詳細情報が表示されます。

   * **[!UICONTROL タイプ]**：ワークフロー、オプション、配信、スキーマ。
   * **[!UICONTROL Entity]**：アクティビティの内部名。
   * **[!UICONTROL 変更者]**：このエンティティを最後に変更したユーザー名。
   * **[!UICONTROL アクション]**：このエンティティで最後に実行されたアクション（作成済み、変更済み、削除済み）。
   * **[!UICONTROL 変更日]**：このエンティティで最後に実行されたアクションの日付。

   ![](assets/audit-trail-2.png)

>[!NOTE]
>
>デフォルトでは、保存期間は 180 日に設定されています。 **[!UICONTROL 監査ログ]**. この値は、デプロイメントウィザードで変更できます。

## 監査記録を有効/無効にする {#enable-disable-audit-trail}

例えば、データベースの容量を節約する場合など、監査記録を特定のアクティビティに対して簡単にアクティブ化または非アクティブ化できます。

それには、次の手順に従います。

1. へのアクセス **[!UICONTROL エクスプローラー]** お使いのインスタンスのメニュー。

1. の下 **[!UICONTROL 管理]** メニュー、選択 **[!UICONTROL Platform]** その後 **[!UICONTROL オプション]**.

1. アクティブ化/非アクティブ化するエンティティに応じて、次のいずれかのオプションを選択します。

   * ワークフロー： **[!UICONTROL XtkAudit_Workflows]**
   * スキーマ： **[!UICONTROL XtkAudit_DataSchema]**
   * オプション： **[!UICONTROL XtkAudit_Option]**
   * 配信： **[!UICONTROL XtkAudit_Delivery]**
   * 外部アカウントの場合： **[!UICONTROL XtkAudit_ExtAccount]**
   * 配信マッピング： **[!UICONTROL XtkAudit_DeliveryMapping]**
   * Web アプリケーション： **[!UICONTROL XtkAudit_WebApp]**
   * オファーの場合 **[!UICONTROL XtkAudit_Offer]**
   * 演算子： **[!UICONTROL XtkAudit_Operator]**
   * エンティティごとに、次の操作を行います。 **[!UICONTROL XtkAudit_Enable_All]**

   ![](assets/audit-trail-3.png)

1. 変更： **[!UICONTROL 値]** エンティティを有効にする場合は 1 に、無効にする場合は 0 に設定します。

   ![](assets/audit-trail-4.png)

1. 「**[!UICONTROL 保存]**」をクリックします。
