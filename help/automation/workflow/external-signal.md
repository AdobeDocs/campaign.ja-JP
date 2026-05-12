---
product: campaign
title: 外部シグナル
description: 外部シグナルワークフローアクティビティの詳細を説明します
feature: Workflows
role: User
version: Campaign v8, Campaign Classic v7
exl-id: 45cb95ec-77bf-4bab-895f-b94f6ce660fd
TQID: https://experienceleague.adobe.com/w1Sip-iisntO8WLiUhYCqr-9DeiGY1F2eiU2CUSDF7c
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 171
ht-degree: 81%

---

# 外部シグナル{#external-signal}



「**外部シグナル**」アクティビティを使用して、スケジュールに対して、ワークフロー内のタスクセットの実行をトリガーできます。

「外部シグナル」タスクが有効化されたら、このタスクは無期限に、または指定された期間の終わりまで停止されます。 このトランジションは、SOAP呼び出し&#x200B;**PostEvent （sessionToken, workflowId, activity, transition, parameters, complete）によってアクティブ化されます。** **[!UICONTROL complete]** パラメーターを使用すると、タスクを完了できるため、後続の呼び出しに反応しません。

PostEvent 関数について詳しくは、SOAP 呼び出しに関するオンラインドキュメントを参照してください。

このアクティビティを設定して、信号を受信しなかった場合のイベントを定義することができます。 それには、アクティビティを編集し、「**[!UICONTROL 期限]**」タブをクリックします。 「**[!UICONTROL 挿入]**」ボタンをクリックして、イベントを作成して設定します。

![](assets/edit_signal.png)

期限の設定について詳しくは、[有効期限](define-approvals.md)を参照してください。

「**遅延**」フィールドでは、選択した単位で期限を指定できます。 [待機](wait.md)を参照してください。

各行は、期限のタイプとトランジションとの紐付けを表します。

![](assets/external_sign_diag.png)
