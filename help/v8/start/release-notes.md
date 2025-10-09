---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Release Notes
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 3bc247ba81de3de56c26bdf8fa9b8aa5ea91fb2a
workflow-type: tm+mt
source-wordcount: '390'
ht-degree: 24%

---

# 最新リリース {#latest-release}

このページには、Campaign v8（コンソール）**最新リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。Campaign のリリース、バージョン、アップグレードについて詳しくは、[このページ](upgrades.md)を参照してください。その他のリリースは、このドキュメントの以前のリリースの節に記載されています。

## リリース 8.8.2 {#release-8-8-2}

_2025 年 10 月 9 日_

>[!AVAILABILITY]
>
>このリリースは&#x200B;**限定提供**（LA）中です。

### 新機能 {#features-8-8-2}

**Campaign FFDA デプロイメント** で [ 新規 SMS 送信コネクタ ](../architecture/enterprise-deployment.md) を使用できるようになりました。 [詳細ドキュメント](../send/sms/sms.md)を参照してください。

このリリースには、Campaign web ユーザーインターフェイスで使用できる一連の機能も付属しています。

* [ トランザクションメッセージでのプロファイルエンリッチメント ](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/transactional-messages/profile-enrichment.html){target="_blank"}
* [ トランザクションメッセージ、プッシュ通知、SMS の多言語機能 ](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/multilingual.html){target="_blank"}

Campaign web UI[ リリースノート ](https://experienceleague.adobe.com/docs/campaign-web/v8/release-notes/release-notes.html?lang=ja){target="_blank"} を参照してください。

### 修正点 {#fixes-8-8-2}

<!--
* Fixed an issue which prevented dynamic reporting from being available for transactional messages.
-->
* データベースクリーンアップワークフローが失敗する可能性がある問題を修正しました。 （NEO-87949）
* 分散型マーケティングにおいて、共同キャンペーン配信のトラッキングデータが記録されない問題を修正しました。 （NEO-86836）
<!--
* Issue SMS2.0 with FFDA Continuous Deliveries (NEO-88785)
-->
* フラグメント内のパーソナライゼーションが正しく機能しない可能性がある問題を修正しました。 （NEO-88161）
* 新しい Redshift ODBC コネクタに移行した後、分割ワークフローアクティビティが SQL エラーで失敗する可能性がある問題を修正しました。 （NEO-87466）
* ワークフローで不正確な除外数が発生する可能性がある問題を修正しました。 （NEO-89207）
* プッシュ通知のクリック指標が不正確になる可能性がある問題を修正しました。 （NEO-89503）
* SMS 配信ログが正しく更新されず、Adobe Campaignで正確なステータスレポートを実行できない問題を修正しました。 （NEO-88479）
* 配信コンテンツでフランス語の引用符が誤って英語の引用符に変換される問題を修正しました。 （NEO-89631）
* 代わりに、リアルタイムサーバーが無効な IMS トークンに対して誤った応答コードを返した問題を修正しました。 （NEO-87428）
* メールと SMS の配信統計が完全に再計算されなかったので、成功インジケーターが不正確になる問題を修正しました。 （NEO-88106）
* 新しい SMS 送信コネクタで、配信ログがメッセージの小さなサブセットに対して配信ステータスを誤って割り当てていた問題を修正しました。 （NEO-89581）
* 新しい SMS 送信コネクタで、T モバイル配信の成功指標がマーケティング サーバーとミッドサーバーの両方で正しく更新されなかった問題を修正しました。 （NEO-89850）
* リアルタイムインスタンスとマーケティングインスタンス間の同期の問題を修正しました。トラッキングログが見つからず、レポートが正しく作成されませんでした。 （NEO-90247）
* カスタムスキーマの連続した 1 対 N リンクのフィールドを選択する際にエラーが発生する可能性があるワークフローエンリッチメントの問題を修正しました。 （NEO-87682）

