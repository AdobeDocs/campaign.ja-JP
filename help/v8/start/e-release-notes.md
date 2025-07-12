---
title: Campaign v8 早期リリースノート
description: Campaign v8 早期リリース
feature: Release Notes
role: User
level: Beginner
hide: true
hidefromtoc: true
exl-id: a45f7b22-44c7-4dad-af0a-ae8f683ae3d9
source-git-commit: 4ed5799c77c647c9f1aeabba7645fbb475d03c09
workflow-type: tm+mt
source-wordcount: '290'
ht-degree: 99%

---

# 早期リリースノート {#e-new-release}

このページでは、次回の Campaign v8 リリースに含まれる改善点および修正点について説明します。**以下の早期リリースノートの内容は、リリースの公開日まで予告なく変更される場合があります**。リンク、画面、更新済みのドキュメントは、リリース日に[リリースノート](release-notes.md)に公開されます。


## リリース 8.7.2 {#release-8-7-2}

_2024年9月3日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/docs/campaign-web/v8/start/acs-migration.html?lang=ja){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#new-8-7-2}

* **新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバモードの SMPP 接続と永続的な SMPP 接続が有効になり、Adobe Campaign Standard から移行する環境との互換性が向上しました。すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。既存の実装も引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。

* **リッチプッシュ通知（GA）** - リッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、リッチプッシュ通知用のテンプレートセットが iOS および Android アプリで利用できるようになりました。[詳細情報](../send/rich-push-android.md)

* **ブランディング** - ブランディングオプションは、SMS やダイレクトメールを含むすべてのチャネルで利用できるようになりました。[詳細情報](https://experienceleague.adobe.com/docs/campaign-web/v8/conf/branding/branding-gs.html?lang=ja){target="_blank"}


### 修正点 {#fixes-8-7-2}

このリリースでは、次の問題が修正されています。

NEO-48232、NEO-56832、NEO-72504、NEO-74855、NEO-75898、NEO-76097、NEO-76958、NEO-77014、NEO-77795、NEO-78843、NEO-79328。
