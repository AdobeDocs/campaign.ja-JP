---
title: 64 ビットスキーマ
description: Campaign Standard移行済みのお客様向けAdobe Campaign v8の64 ビットスキーマについて説明します
feature: Technote
role: Admin
exl-id: ab5f01fd-4ad5-46e9-b132-011fe0f7bbd2
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: ab81f6c3-9317-564f-af92-6670a8784294
    internal-label: Technote
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '176'
ht-degree: 18%
---
# 64 ビットスキーマ {#sixty-four-bit-tables}

Campaign StandardからCampaign v8への移行を容易にするために、いくつかのテーブルが32 ビットから64 ビットに変更されました。 実際、Campaign Standardでは、64 ビット PKを複数の標準スキーマでサポートしていますが、Campaign v8ではほとんどのスキーマで32 ビット PKをサポートしています。

## 制限事項

* この技術的な変更は、Campaign Standardから移行するお客様にのみ適用されます。
* スキーマおよびブロードログ拡張機能は、64 ビットではサポートされていません。 それは32 ビットのままになります。
* テクニカルユーザーに送信された配信に関連するログは、Campaign v8では使用できません。
* PostgreSQLのみがサポートされます。

## 変更されたスキーマ

以下は、64 ビットに変更されたスキーマとその変更された属性のリストです。

| スキーマ名 | 属性名 |
|--- |--- |
| nms:broadLogRcp | id |
| nms:trackingLogRcp | id |
| nms:excludeLogRcp | id |
| nms:broadLogVisitor | id |
| nms:trackingLogVisitor | id |
| nms:propositionRcp | interactionId |
| nms:propositionVisitor | interactionId |
| nms:webTrackingLog | id |
| nms:tmpBroadcast | message-id |
| nms:tmpMarketingPressure | message-id |
| nms:tmpBroadcastExclusion | message-id |
| nms:tmpBroadcastPaper | message-id |
| nms:broadLogAppSubRcp | id |
| nms:trackingLogAppSubRcp | id |
| nms:excludeLogAppSubRcp | id |
| nms:webEvent | broadLogSrc-id, broadLogRemkt-id |
| nms:broadLogMid | mktBroadLogId |
| nms:mirrorPageSearch | remoteMessageId |
