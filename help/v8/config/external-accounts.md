---
solution: Campaign
product: Adobe Campaign
title: キャンペーン外部アカウント
description: キャンペーン外部アカウント
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: 3f63fa1f599252311e2539aa35d4917c03e079b4
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 16%

---

# 外部アカウントの設定

Adobe Campaign には、事前定義済みの外部アカウントのセットが付属します。外部システムとの接続を設定するために、新しい外部アカウントを作成できます。

外部アカウントは、テクニカルワークフローやキャンペーンワークフロー等の技術プロセスで使用されます。例えば、ワークフローでのファイル転送、または他のアプリケーション(Adobe Target、Experience Managerなど)とのデータ交換を設定する場合は、外部アカウントを選択する必要があります。


>[!CAUTION]
>
>内部電子メール配信ルーティング外部アカウントは、キャンペーンv8で有効にできません。


:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/installing-campaign-classic/accessing-external-database/external-accounts.html)で外部アカウントの作成と設定の方法を説明します。

特定の外部アカウントは、キャンペーンのローカルデータベースとクラウドデータベース([!DNL Snowflake])の間の接続を管理します。

:speech_balloon:管理対象Cloud Servicesユーザーとして、[!DNL Snowflake]外部アカウントはAdobeによってインスタンス用に設定されます。
