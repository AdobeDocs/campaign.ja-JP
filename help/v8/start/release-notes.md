---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 07e0bfdade0356eedb24641259aa754fdb1c6155
workflow-type: tm+mt
source-wordcount: '532'
ht-degree: 92%

---

# 最新リリース {#latest-release}

Adobe Campaign は定期的にアップデートされています。この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。アドビでは、すべてのお客様に最新バージョンにアップグレードすることを強くお勧めします。このページには、Campaign v8（コンソール）最新リリースの新機能、改善点およびバグ修正が記載されています。Campaign のバージョンと推奨事項について詳しくは、[このページ](upgrades.md)を参照してください。

Managed Cloud Services ユーザーの場合は、新しいバージョンが出るたびにアドビがインスタンスをアップグレードします。アドビがお客様にご連絡し、環境をアップグレードします。Campaign クライアントコンソールは、Campaign サーバーと&#x200B;**同じバージョンにアップグレードする必要があります**。クライアントコンソールのアップグレード方法について詳しくは、[このページ](../start/connect.md#upgrade-ac-console)を参照してください。

また、[互換性マトリックス](compatibility-matrix.md)にリストされているシステムのサポートされている最新バージョンを使用していることも確認してください。


## リリース 8.7.2 {#release-8-7-2}

_2024 年 9 月 3 日_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/release-notes/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#new-8-7-2}

* **新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバモードの SMPP 接続と永続的な SMPP 接続が有効になり、Adobe Campaign Standard から移行する環境との互換性が向上しました。すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。既存の実装は引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。 [詳細情報](../send/sms/sms.md)

* **リッチプッシュ通知（GA）** - リッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、リッチプッシュ通知用のテンプレートセットが iOS および Android アプリで利用できるようになりました。[詳細情報](../send/rich-push-android.md)

* **ブランディング** - ブランディングオプションは、SMS やダイレクトメールを含むすべてのチャネルで利用できるようになりました。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/branding/branding-gs.html?lang=ja){target="_blank"}


### 修正点 {#fixes-8-7-2}

このリリースでは、次の問題が修正されています。

NEO-48232、NEO-56832、NEO-72504、NEO-74855、NEO-75898、NEO-76097、NEO-76958、NEO-77014、NEO-77795、NEO-78843、NEO-79328。


## リリース 8.6.3 {#release-8-6-3}

_2024年7月30日（PT）_

### 新機能 {#new-8-6-3}

* **リッチプッシュ通知** - リッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、リッチプッシュ通知用のテンプレートセットが iOS および Android アプリで利用できるようになりました。[詳細情報](../send/rich-push-android.md)

* このバージョン以降、サービスアカウント（JWT）資格情報はアドビによって廃止され、アドビのソリューションおよびアプリとの Campaign アウトバウンド統合は OAuth サーバー間の資格情報に依存するようになりました。[詳細情報](release-notes-2024.md#change-8-7-1)

### 一般的な改善点 {#improvements-8-6-3}

* アプリケーション間のすべての通信のセキュリティを強化するために、外部 API 呼び出しで mTLS がサポートされるようになりました。

### 修正点 {#fixes-8-6-3}

このリリースでは、次の問題が修正されています。

NEO-79328、NEO-78843、NEO-77795、NEO-77014、NEO-76958、NEO-76097、NEO-75898、NEO-72504、NEO-70263、NEO-67620、NEO-63197、NEO-58596、NEO-56832。

<!--
https://jira.corp.adobe.com/issues/?filter=585288&jql=fixVersion%20%3D%208.6.3%20AND%20type%20not%20in%20(epic%2C%20test%2C%20sub-task%2C%20Roadmap)%20AND%20resolution%20!%3D%20unresolved%20AND%20%22Fixed%20in%20Build%22%20is%20not%20EMPTY%20and%20type%20in%20(%22customer%20request%22)
-->
