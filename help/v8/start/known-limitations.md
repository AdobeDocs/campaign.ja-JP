---
product: Adobe Campaign
title: Campaign v8の既知の制限
description: 既知の制限事項
feature: 概要
role: Data Engineer
level: Beginner
hidefromtoc: true
source-git-commit: 5363950db5092bc7e0a72a0823db1132a17dda33
workflow-type: tm+mt
source-wordcount: '158'
ht-degree: 1%

---

# 既知の制限事項

既知の制限により、このリリースの製品でサポートされていない機能、アーキテクチャ、プロセス、または製品との相互運用性が正しくないプロセスが特定されます。 これらの制限事項は慎重に確認してください。

Adobe Campaign v8には、次の制限があります。

* Adobe Campaign v8は、オンプレミス/ハイブリッドデプロイメントには使用できません。Adobe管理Cloud Serviceとしてのみリリースされます。
* 既存のお客様は、既存のAdobe Campaign環境からAdobe Campaign v8に移行できない
* 双方向のデータ・レプリケーションは不要：レプリケーションは、CampaignローカルデータベースからCloudデータベースにのみ発生します
* この節](capability-matrix.md#gs-unavailable-features)で示す機能は、現在のCampaign v8ビルドでは使用できません。[
* 使用できない機能や削除された機能の一部は、ユーザーインターフェイスに表示されます
* 購読（オプトイン）と購読解除（オプトアウト）のメカニズムと、モバイル登録は非同期プロセスです。 リクエストは、特定のテクニカルワークフローを通じて1時間ごとに処理されます。 [詳細情報](../config/replication.md#tech-wf)
* ID管理 — 重複 — 確認+詳細
* LINE — 詳細を確認する
* 遅延 — +詳細の確認
