---
title: 新しいSMS コネクタ v2への移行
description: 新しいSMS コネクタ v2に移動する方法を説明します
feature: Technote
role: Admin
exl-id: 61a5a3e8-59f8-47ea-afc9-66ec243b8265
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
source-wordcount: '225'
ht-degree: 0%
---
# 新しいSMS コネクタ v2への移行

Adobe Campaign v8では、新しい&#x200B;**専用SMS プロセスコネクタ** （v2）が導入されました。これにより、従来のMTA ベースのSMS コネクタと比較してパフォーマンスと信頼性が向上しました。

## v2 コネクタに切り替える理由

専用のSMS プロセスでは、SMPP トランシーバモードのサポートが導入され、接続数が削減され、リソース効率が向上しますが、必要に応じて送信機/受信機の設定もサポートします。 エラーからの迅速な回復、永続的な接続、ローカルファイルやプロセス間通信への依存がなくなるため、安定性が大幅に向上します。 また、遅延が少なく、スループットが向上し、インテリジェントなマイクロバッチ処理によってスピードと信頼性のバランスが取れます。 さらに、SMS プロセスを分離することで、トラブルシューティングが簡素化され、クロスチャネルへの影響が最小限に抑えられます。 これらの機能強化により、専用コネクタは、SMS配信のためのより堅牢でスケーラブルなソリューションになります。

## 設定

Adobe Campaign Managed Cloud Servicesでは、サーバー設定とSMS コネクタの移行はAdobeで管理されます。 この技術的な手順では、サーバー設定ファイルとデータベース操作に直接アクセスする必要があります。

新しいSMS コネクタ v2に移行する必要がある場合は、Adobe担当者またはAdobe カスタマーケアにお問い合わせください。 インスタンスに必要な更新をスケジュールし、実行します。

Campaign v8のSMS チャネルについて詳しくは、[SMS ドキュメント ](../../v8/send/sms/sms.md)を参照してください。
