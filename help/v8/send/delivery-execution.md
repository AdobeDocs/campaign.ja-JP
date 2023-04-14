---
title: トランザクションメッセージ配信の実行
description: トランザクションメッセージ配信の実行と監視の詳細を説明します
feature: Transactional Messaging
role: User
level: Beginner, Intermediate
source-git-commit: c61f03252c7cae72ba0426d6edcb839950267c0a
workflow-type: tm+mt
source-wordcount: '178'
ht-degree: 69%

---


# 配信の実行 {#delivery-execution}

エンリッチメントが完了し、配信テンプレートをイベントにリンクすると、配信は実行インスタンスから送信されます。

>[!NOTE]
>
>トランザクションメッセージは、他の配信よりも優先されます。

すべての配信は、**[!UICONTROL 管理／プロダクション／Message Center／デフォルト／配信]**&#x200B;フォルダーにまとめられます。

デフォルトでは、配信は配信月ごとにサブフォルダーに並べ替えられます。この並べ替えは、メッセージテンプレートのプロパティで変更できます。

## トランザクションメッセージの監視 {#transactional-message-monitoring}

トランザクションメッセージを監視するには、[配信ログ](send.md)を確認します。

実行インスタンスから送信されるトランザクション配信は、1 時間ごとに実行されるテクニカルワークフロー（**[!UICONTROL Message Center 実行インスタンス]**）を通じてコントロールインスタンスに同期されます。

>[!NOTE]
>
>配信は、イベント作成日ではなく、最新のイベント更新に基づいて、毎週イベントを累積します。したがって、コントロールインスタンスからトランザクションメッセージング配信ログを抽出する場合、各配信ログ ID に関連付けられている配信 ID は、ログが更新されると、時間の経過と共に変わる場合があります（例えば、イベントに対して受信したバウンス）。

<!--
To monitor the activity and running of the execution instance(s), see [Transactional messaging reports](transactional-messaging-reports.md).-->
