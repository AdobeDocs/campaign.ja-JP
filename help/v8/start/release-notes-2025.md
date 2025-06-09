---
title: Campaign v8（コンソール）2025 リリースノート
description: Campaign v8 2025 リリースで記載される機能と改善点のリスト
feature: Release Notes
exl-id: 3f91d83e-594e-49ee-a898-606e3de00bf3
source-git-commit: 66e4b59915eae595b28076622f7bcfb5b5a0ffa4
workflow-type: tm+mt
source-wordcount: '428'
ht-degree: 66%

---

# 2025 リリースノート {#2025-rn}

このページには、**2025 Campaign v8 リリース** の新機能、改善点およびバグ修正が記載されています。 最新のリリースは [ このページ ](release-notes.md) に記載されています。

>[!BEGINSHADEBOX]

**このページ内**

* Campaign v8.7 - [ リリース 8.7.2](#release-8-7-2) | [ リリース 8.7.3](#release-8-7-3)


>[!ENDSHADEBOX]


## リリース 8.7.3 {#release-8-7-3}

_2025 年 2 月 14 日_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行するCampaign Standard ユーザーとして、この移行について詳しくは [Campaign v8 web ユーザーインターフェイスのドキュメント ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"} を参照してください。

### 新機能 {#features-8-7-3}

* **トランザクションメッセージの動的レポート** – 動的レポートのユーザーインターフェイスでトランザクションメッセージを監視できるようになりました。 これらのレポートにより、マーケターは、トランザクションメッセージのすべてのレポート指標とディメンション、テンプレートを介して送信された配信の分類をリアルタイムで表示できます。 [詳細情報](https://experienceleague.adobe.com/ja/docs/experience-cloud/campaign/reporting/get-started-reporting){target="_blank"}

* **トランザクションメッセージ REST API** - メールでイベントベースのトランザクション API が使用できるようになりました。 [詳細情報](https://experienceleague.adobe.com/ja/docs/experience-cloud/campaign/apis/managing-transactional-messages){target="_blank"}

### 修正点 {#fixes-8-7-3}

このリリースでは、次の問題が修正されています。

NEO83081NEO81908NEO79373

## リリース 8.7.2 {#release-8-7-2}

_2024年9月3日（PT）_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。**Adobe Campaign Standard から Adobe Campaign v8** に移行するお客様に限定されており、他の環境にデプロイすることはできません。
>
>Campaign v8 に移行するCampaign Standard ユーザーとして、この移行について詳しくは [Campaign v8 web ユーザーインターフェイスのドキュメント ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/acs-migration){target="_blank"} を参照してください。

### 新機能 {#new-8-7-2}

* **新しい SMS 送信コネクタ** - SMS 送信コネクタが最新化および改善され、トランシーバモードの SMPP 接続と永続的な SMPP 接続が有効になり、Adobe Campaign Standard から移行する環境との互換性が向上しました。すべての新しい SMS 実装で、新しい SMS 外部アカウントが利用できるようになりました。既存の実装も引き続きサポートされますが、この新しい最新の拡張コネクタに移行することをお勧めします。[詳細情報](../send/sms/sms.md)

* **リッチプッシュ通知（GA）** - リッチプッシュ通知を送信できるようになりました。リッチプッシュ通知は、画像、インタラクティブボタン、その他のリッチメディアコンテンツなどのマルチメディア要素を組み込むことで、単純なテキストメッセージ以上の機能を持つモバイル通知の拡張形式です。このバージョンでは、リッチプッシュ通知用のテンプレートセットが iOS および Android アプリで利用できるようになりました。[詳細情報](../send/rich-push-android.md)

* **ブランディング** - ブランディングオプションは、SMS やダイレクトメールを含むすべてのチャネルで利用できるようになりました。[詳細情報](https://experienceleague.adobe.com/docs/experience-cloud/campaign/branding/branding-gs.html?lang=ja){target="_blank"}

### 修正点 {#fixes-8-7-2}

このリリースでは、次の問題が修正されています。

NEO-48232、NEO-56832、NEO-72504、NEO-74855、NEO-75898、NEO-76097、NEO-76958、NEO-77014、NEO-77795、NEO-78843、NEO-79328。
