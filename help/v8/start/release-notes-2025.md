---
title: Campaign v8（コンソール）2025 リリースノート
description: Campaign v8 2025 リリースで記載される機能と改善点のリスト
feature: Release Notes
exl-id: 3f91d83e-594e-49ee-a898-606e3de00bf3
source-git-commit: 66e4b59915eae595b28076622f7bcfb5b5a0ffa4
workflow-type: ht
source-wordcount: '428'
ht-degree: 100%

---

# 2025 リリースノート {#2025-rn}

このページには、**Campaign v8 2025 リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。最新のリリースについて詳しくは、[このページ](release-notes.md)を参照してください。

>[!BEGINSHADEBOX]

**このページの内容**

* Campaign v8.7 - [ リリース 8.7.2](#release-8-7-2) | [リリース 8.7.3](#release-8-7-3)


>[!ENDSHADEBOX]


## リリース 8.7.3 {#release-8-7-3}

_2025年2月14日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#features-8-7-3}

* **トランザクションメッセージの動的レポート** - 動的レポートのユーザーインターフェイスでトランザクションメッセージを監視できるようになりました。これらのレポートにより、マーケターはトランザクションメッセージのすべてのレポート指標とディメンション、テンプレート経由で送信された配信の分類をリアルタイムで確認できます。[詳細情報](https://experienceleague.adobe.com/ja/docs/experience-cloud/campaign/reporting/get-started-reporting){target="_blank"}

* **トランザクションメッセージ REST API** - イベントベースのトランザクション API がメールで使用できるようになりました。[詳細情報](https://experienceleague.adobe.com/ja/docs/experience-cloud/campaign/apis/managing-transactional-messages){target="_blank"}

### 修正点 {#fixes-8-7-3}

このリリースでは、次の問題が修正されています。

NEO-79373、NEO-81908、NEO-83081

## リリース 8.7.2 {#release-8-7-2}

_2024年9月3日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行する Campaign Standard ユーザーについては、[Campaign v8 web ユーザーインターフェイスのドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"}でこの移行の詳細を確認してください。

### 新機能 {#new-8-7-2}

* **新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバモードの SMPP 接続と永続的な SMPP 接続が有効になり、Adobe Campaign Standard から移行する環境との互換性が向上しました。すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。既存の実装も引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。[詳細情報](../send/sms/sms.md)

* **リッチプッシュ通知（GA）** - リッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、リッチプッシュ通知用のテンプレートセットが iOS および Android アプリで利用できるようになりました。[詳細情報](../send/rich-push-android.md)

* **ブランディング** - ブランディングオプションは、SMS やダイレクトメールを含むすべてのチャネルで利用できるようになりました。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/branding/branding-gs.html?lang=ja){target="_blank"}

### 修正点 {#fixes-8-7-2}

このリリースでは、次の問題が修正されています。

NEO-48232、NEO-56832、NEO-72504、NEO-74855、NEO-75898、NEO-76097、NEO-76958、NEO-77014、NEO-77795、NEO-78843、NEO-79328。
