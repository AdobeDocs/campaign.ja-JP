---
product: campaign
title: ワークフロー権限の管理
description: ワークフロー権限の管理方法を説明します
feature: Workflows, Permissions
role: Admin
version: Campaign v8, Campaign Classic v7
exl-id: 3cb8aeec-e758-4b71-adef-67942cf9ded7
TQID: 'https://experienceleague.adobe.com/xZwqhzyDbDM309Q-WNpYoD-BvWiJmaTVHsmf50ywAJk'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
  - id: e3988c18-3cfa-4f16-b812-ac2d2b1056fa
    internal-label: Permissions
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '339'
ht-degree: 100%
---
# ワークフロー権限の管理{#managing-rights}



管理者でない Adobe Campaign オペレーターは、ワークフローの作成や実行、変更でアクセス権が必要になります。

一般的には、ワークフローを操作するオペレーターは、各種アクティビティ（受信者、受信者リスト、購読、配信など）の実行時に、使用するデータが含まれているファイルと、通常はそのサブファイルにもアクセスする必要があります。

また、影響するワークフロー（受信者インポート、ファイルアクセス、統合、SQL スクリプト実行など）によって実行されるアクションと一致するネームド権限にマッピングされている必要があります。

オペレーターの管理と権限について詳しくは、[この節](../../v8/start/gs-permissions.md)を参照してください。

## オペレーターグループ {#operator-groups-wf}

次のオペレーターグループは、ワークフローに関連付けられています。

* **[!UICONTROL ワークフローの実行]**&#x200B;グループにより、ターゲティングワークフローの実行と承認を制御できます。WORKFLOW ネームド権限は、このグループのオペレーターにマッピングされます。 データファイルへのアクセス権に加えて、これは、ワークフローのすべてのアクションに必要です。 デフォルトでは、**[!UICONTROL ワークフローの実行]**&#x200B;グループには、標準のターゲティングワークフローファイルとワークフローテンプレートに対する読み取り専用アクセス権があります。 このグループのオペレーターは、保留中の承認ファイルに対して読み取りと書き込みのアクセスができます。
* 「**[!UICONTROL ワークフロースーパーバイザー]**」グループでは、オペレーターは、ワークフローの承認を管理できます。
* 「**[!UICONTROL 操作マネージャー]**」グループでは、キャンペーンワークフローにアクセスできます。

## ネームド権限 {#named-rights}

ワークフローに固有のネームド権限は、WORKFLOW ネームド権限だけです。この権限により、ワークフローを作成、開始、および停止できます。 ネームド権限が適用するには、ワークフローの読み取り権限が必要です。 ターゲティングワークフローについては、**[!UICONTROL プロファイルとターゲット]**&#x200B;ファイルの読み取り権が必要です。

## ワークフロー実行アカウント {#workflow-execution-account}

ワークフローのテンプレートレベルで使用される実行アカウントを設定できます。 ワークフロー実行アカウントでは、Adobe Campaign オペレーターが処理の実行を開始しているかどうかに関係なく、ワークフローに直接、認証をマッピングすることができます。 デフォルトでは、ワークフローはすべて、ワークフローを起動したオペレーターの権限で実行されます。

実行アカウントをワークフローにマッピングするには、ワークフローテンプレートのリストに移動し、ワークフローにリンクしたテンプレートを右クリックします。 **[!UICONTROL アクション／実行アカウントを変更...]**&#x200B;を選択し、使用するアカウントを選択します。
