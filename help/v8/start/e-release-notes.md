---
title: Campaign v8 早期リリースノート
description: Campaign v8 早期リリース
feature: Release Notes
role: User
level: Beginner
hide: true
hidefromtoc: true
exl-id: a45f7b22-44c7-4dad-af0a-ae8f683ae3d9
source-git-commit: 65efda7469c5ad35e8d03703951c3d1480b015f4
workflow-type: tm+mt
source-wordcount: '472'
ht-degree: 49%

---

# 早期リリースノート {#e-new-release}

このページでは、次回の Campaign v8 リリースに含まれる改善点および修正点について説明します。**以下の早期リリースノートの内容は、リリースの公開日まで予告なく変更される場合があります**。リンク、画面、更新済みのドキュメントは、リリース日に[リリースノート](release-notes.md)に公開されます。

## リリース 8.7.2 {#release-8-7-2}

_2024年7月30日（PT）_


>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/release-notes/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#new-8-7-2}

* **新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバーモードの SMPP 接続の有効化、永続的な SMPP 接続の有効化およびAdobe Campaign Standardから移行する環境の互換性の向上が図られています。 すべての新しい SMS 実装で新しい SMS 外部アカウントを使用できるようになりました。 既存の実装は引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。

* **リッチプッシュ通知（GA）** - リッチプッシュ通知を送信できるようになりました。 リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、iOS アプリとAndroid アプリで、リッチなプッシュ通知用のテンプレートセットが利用できるようになりました。 [詳細情報](../send/rich-push.md)

* **ブランディング** - ブランディングオプションは、SMS やダイレクトメールを含むすべてのチャネルで使用できるようになりました。 [詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/branding/branding-gs.html?lang=ja){target="_blank"}


### 修正点 {#fixes-8-7-2}

このリリースでは、次の問題が修正されています。

NEO-76592、NEO-75400、NEO-77406、NEO-77674、NEO-77899、NEO-73989、NEO-76064、NEO-76039、NEO-76040 76845、NEO-76664 76682、NEO-76663、NEO-73602、NEO-72915、NEO-78134、NEO-77000、NEO-77002、NEO-76955、NEO-76864 76926 76495 77168 41058 75581 74647 74585 74586 74831 77319 78607、NEO-NEO-3、NEO-3、NEO-6、NEO-5 NEO-、NEO-k、NEO-k、NEO-k

## リリース 8.6.3 {#release-8-6-3}

_2024年7月30日（PT）_

### 新機能 {#new-8-6-3}

* **リッチプッシュ通知** - リッチプッシュ通知を送信できるようになりました。 リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、iOS アプリとAndroid アプリで、リッチなプッシュ通知用のテンプレートセットが利用できるようになりました。 [詳細情報](../send/rich-push.md)

* このバージョン以降、サービスアカウント（JWT）資格情報はアドビによって廃止され、アドビのソリューションおよびアプリとの Campaign アウトバウンド統合は OAuth サーバー間の資格情報に依存するようになりました。[詳細情報](release-notes.md#change-8-7-1)

### 一般的な改善点 {#improvements-8-6-3}

* アプリケーション間のすべての通信のセキュリティを強化するために、外部 API 呼び出しで mTLS がサポートされるようになりました。

### 修正点 {#fixes-8-6-3}

このリリースでは、次の問題が修正されています。

NEO-77014、NEO-76958、NEO-76097、NEO-75898、NEO-72504、NEO-70263、NEO-67620、NEO-63197、NEO-58596、NEO-56832。

<!--
https://jira.corp.adobe.com/issues/?filter=585288&jql=fixVersion%20%3D%208.6.3%20AND%20type%20not%20in%20(epic%2C%20test%2C%20sub-task%2C%20Roadmap)%20AND%20resolution%20!%3D%20unresolved%20AND%20%22Fixed%20in%20Build%22%20is%20not%20EMPTY%20and%20type%20in%20(%22customer%20request%22)
-->