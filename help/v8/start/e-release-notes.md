---
title: Campaign v8 早期リリースノート
description: Campaign v8 早期リリース
feature: Release Notes
role: User
level: Beginner
hide: true
hidefromtoc: true
exl-id: a45f7b22-44c7-4dad-af0a-ae8f683ae3d9
source-git-commit: 09b8ced170ff28b24713722e0a82852038053201
workflow-type: tm+mt
source-wordcount: '372'
ht-degree: 58%

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

<!--
### Fixes {#fixes-8-7-2}

The following issues are fixed in this release:

NEO-76592, NEO-75400, NEO-77406, NEO-77674, NEO-77899, NEO-73989, NEO-76064, NEO-76039, NEO-76040, NEO-76845, NEO-76664, NEO-76682, NEO-76663, NEO-73602, NEO-72915, NEO-78134, NEO-77000, NEO-77002, NEO-76955, NEO-76864, NEO-76926, NEO-76495, NEO-77168, NEO-41058, NEO-75581, NEO-74647, NEO-74585, NEO-74586, NEO-74831, NEO-77319, NEO-78607.-->

## リリース 8.6.3 {#release-8-6-3}

_2024年7月30日（PT）_


### 新機能 {#new-8-6-3}

* **リッチプッシュ通知** - リッチプッシュ通知を送信できるようになりました。 リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、iOS アプリとAndroid アプリで、リッチなプッシュ通知用のテンプレートセットが利用できるようになりました。 [詳細情報](../send/rich-push.md)

* このバージョン以降、サービスアカウント（JWT）資格情報はアドビによって廃止され、アドビのソリューションおよびアプリとの Campaign アウトバウンド統合は OAuth サーバー間の資格情報に依存するようになりました。[詳細情報](release-notes.md#change-8-7-1)


### 一般的な改善点 {#improvements-8-6-3}

* アプリケーション間のすべての通信のセキュリティを強化するために、外部 API 呼び出しで mTLS がサポートされるようになりました。

<!--
### Fixes {#fixes-8-7-2}

The following issues are fixed in this release:
-->