---
product: Adobe Campaign
title: Campaign v8 の既知の制限
description: 既知の制限事項
feature: 概要
role: Data Engineer
level: Beginner
hidefromtoc: true
source-git-commit: cf00895f988514fc029d0060d7404bdef0c8b30e
workflow-type: ht
source-wordcount: '177'
ht-degree: 100%

---

# 既知の制限事項

既知の制限では、このリリースの製品ではサポートしていない機能、アーキテクチャ、プロセス、またはこのリリースの製品とは正しく相互運用できないプロセスを特定します。 これらの制限事項は慎重に確認してください。

Adobe Campaign v8 には、次の制限があります。

* Adobe Campaign v8 は、オンプレミスやハイブリッドの環境では使用できません。アドビの Managed Cloud Service としてのみリリースされています。
* 既存のお客様は、既存の Adobe Campaign 環境から Adobe Campaign v8 に移行することはできません。
* 双方向のデータレプリケーションはおこなわれません。レプリケーションは、Campaign ローカルデータベースからクラウドデータベースに対してのみ発生します。
* [この節](capability-matrix.md#gs-unavailable-features)で示す機能は、現在の Campaign v8 のビルドでは使用できません。
* 使用できない機能や削除された機能の中には、ユーザーインターフェイスに表示されたままになっているものもあります。
* 購読（オプトイン）と購読解除（オプトアウト）のメカニズム、およびモバイル登録は非同期のプロセスです。 リクエストは、特定のテクニカルワークフローを通じて 1 時間ごとに処理されます。 [詳細情報](../config/replication.md#tech-wf)
* 重複は、エンドユーザーが手動で処理する必要があります。 [詳細情報](../dev/keys.md)
* Adobe Campaign v8 は、API および Web アプリケーションでの拡張スループットをサポートしていません。 具体的なニーズがある場合は、Adobe にお問い合わせください。


