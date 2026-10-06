---
product: campaign
title: インバウンド SMS
description: インバウンド SMS ワークフローアクティビティの詳細を説明します
feature: Workflows, Channels Activity
role: User
version: Campaign v8, Campaign Classic v7
exl-id: 2c12c45b-4429-4e60-bc96-ff70a95d4c9e
TQID: 'https://experienceleague.adobe.com/ZZcWkqyokq5qWLAHGLW7TNJimNc5a9MUEQkSr0fgKgc'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
  - id: bce277d1-7efa-48d8-9a1b-b588bb45ba1c
    internal-label: Channels Activity
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '120'
ht-degree: 100%
---
# インバウンド SMS{#inbound-sms}



「**インバウンド SMS**」アクティビティでは、外部アカウントからテキストメッセージをダウンロードして処理できます。

## プロパティ {#properties}

![](assets/sms_rec_edit.png)

「**インバウンド SMS**」アクティビティの最初のタブで SMS メッセージのルーティングのパラメーターを入力し、メッセージの受信時に実行するスクリプトを入力します。 2 番目のタブではアクティビティのスケジュールを設定でき、3 番目のタブではアクティビティの有効期限を設定できます。

1. **[!UICONTROL SMS ルーティング]**：SMS メッセージの取得に使用する外部アカウントを選択します。 外部アカウントは、Adobe Campaign ツリーの&#x200B;**[!UICONTROL 管理者／プラットフォーム／外部アカウント]**&#x200B;ノードで設定できます。 [詳細情報](../../v8/config/external-accounts.md)
1. **[!UICONTROL スクリプト]**
1. **[!UICONTROL スケジュール]**

   ![](assets/sms_rec_edit_2.png)

1. **[!UICONTROL 有効期限]**

「**[!UICONTROL スクリプト]**」、「**[!UICONTROL スケジュール]**」および「**[!UICONTROL 有効期限]**」の各タブについて詳しくは、[インバウンドメール](inbound-emails.md)を参照してください。
