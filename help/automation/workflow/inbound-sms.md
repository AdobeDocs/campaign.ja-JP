---
product: campaign
title: インバウンド SMS
description: インバウンド SMS ワークフローアクティビティの詳細を説明します
feature: Workflows, Channels Activity
role: User
version: Campaign v8, Campaign Classic v7
exl-id: 2c12c45b-4429-4e60-bc96-ff70a95d4c9e
source-git-commit: 4cbccf1ad02af9133d51933e3e0d010b5c8c43bd
workflow-type: tm+mt
source-wordcount: '120'
ht-degree: 88%

---

# インバウンド SMS{#inbound-sms}



「**インバウンド SMS**」アクティビティでは、外部アカウントからテキストメッセージをダウンロードして処理できます。

## プロパティ {#properties}

![](assets/sms_rec_edit.png)

「**インバウンド SMS**」アクティビティの最初のタブで SMS メッセージのルーティングのパラメーターを入力し、メッセージの受信時に実行するスクリプトを入力します。2 番目のタブではアクティビティのスケジュールを設定でき、3 番目のタブではアクティビティの有効期限を設定できます。

1. **[!UICONTROL SMS ルーティング]**：SMS メッセージの取得に使用する外部アカウントを選択します。外部アカウントは、ツリーの **[!UICONTROL 管理/プラットフォーム/外部アカウント]** ノードを使用して設定します。 [詳細情報](../../v8/config/external-accounts.md)
1. **[!UICONTROL スクリプト]**
1. **[!UICONTROL スケジュール]**

   ![](assets/sms_rec_edit_2.png)

1. **[!UICONTROL 有効期限]**

「**[!UICONTROL スクリプト]**」、「**[!UICONTROL スケジュール]**」および「**[!UICONTROL 有効期限]**」の各タブについて詳しくは、[インバウンドメール](inbound-emails.md)を参照してください。
