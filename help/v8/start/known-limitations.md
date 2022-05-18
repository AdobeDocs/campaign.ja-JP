---
title: Campaign v8 の既知の制限
description: 既知の制限事項
feature: Overview
role: Data Engineer
level: Beginner
hidefromtoc: true
exl-id: 50c254ba-cc33-49b2-b7d5-12aa69883c07
source-git-commit: 6de5c93453ffa7761cf185dcbb9f1210abd26a0c
workflow-type: tm+mt
source-wordcount: '228'
ht-degree: 72%

---

# 既知の制限事項

既知の制限では、このリリースの製品ではサポートしていない機能、アーキテクチャ、プロセス、またはこのリリースの製品とは正しく相互運用できないプロセスを特定します。 これらの制限事項は慎重に確認してください。

Adobe Campaign v8 には、次の制限があります。

* Adobe Campaign v8 は、オンプレミスやハイブリッドの環境では使用できません。アドビの Managed Cloud Service としてのみリリースされています。
* 既存のお客様は、既存の Adobe Campaign 環境から Adobe Campaign v8 に移行することはできません。
* のコンテキストでは、 [エンタープライズ (FFDA) デプロイメント](../architecture/enterprise-deployment.md)に値を指定する場合、双方向のデータレプリケーションは提供されません。レプリケーションは、Campaign ローカルデータベースから Cloud データベースにのみ発生します
* [この節](capability-matrix.md#gs-unavailable-features)で示す機能は、現在の Campaign v8 のビルドでは使用できません。
* 使用できない機能や削除された機能の中には、ユーザーインターフェイスに表示されたままになっているものもあります。
* のコンテキストでは、 [エンタープライズ (FFDA) デプロイメント](../architecture/enterprise-deployment.md)、購読（オプトイン）および購読解除（オプトアウト）のメカニズムと、モバイル登録は非同期プロセスです。 リクエストは、特定のテクニカルワークフローを通じて 1 時間ごとに処理されます。 [詳細情報](../architecture/replication.md#tech-wf)
* 重複は、エンドユーザーが手動で処理する必要があります。 [詳細情報](../architecture/keys.md)
* Adobe Campaign v8 は、API および Web アプリケーションでの拡張スループットをサポートしていません。 具体的なニーズがある場合は、Adobe にお問い合わせください。
* Adobe Campaign Campaign Optimization モジュールでは、頻度タイポロジルールでスケジュールされた配信は考慮されません。 詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/campaign-optimization/pressure-rules.html?lang=ja#setting-the-period)を参照してください。