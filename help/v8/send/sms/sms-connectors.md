---
title: SMS コネクタ
description: Adobe CampaignのSMS コネクタについて説明します
feature: SMS
role: User, Admin
level: Intermediate
exl-id: 5ec3f172-22dc-458b-8688-9974009c985e
source-git-commit: 0278c5161b4b32cd2158c7694d3c7a9996a401cb
workflow-type: tm+mt
source-wordcount: '472'
ht-degree: 5%

---

# SMS コネクタタイプについて {#sms-connectors}

Adobe Campaignでは、お客様にSMS メッセージを送信するために使用される2つのSMS コネクタをサポートしています。

* **従来のSMS コネクタ**: Campaign v7およびそれ以前のバージョンのCampaign v8で使用されているコネクタの最初のバージョン。 [詳細情報](#legacy-sms-connector)
* **SMS コネクタ v2**: Campaign v8.9.1以降のGAで使用できるようになったこのv2専用SMS コネクタは、パフォーマンスと信頼性を向上させるために近代化されました。 [詳細情報](#sms-connector-v2)

## レガシーSMS コネクタ {#legacy-sms-connector}

従来のSMS コネクタは、以前のバージョンのAdobe Campaignで使用されていたMTA ベースのSMS コネクタです。 このコネクタは、既存の実装では引き続きサポートされますが、v2 コネクタのパフォーマンスと信頼性を向上させるために、Adobeではv8.9.1以降にアップグレードすることを強くお勧めします。

v2 コネクタのメリットについて詳しくは、「[ アクティベーション ](#activation)」の節を参照してください。

従来のSMS コネクタの設定と使用方法について詳しくは、[Campaign Classic ドキュメント ](https://experienceleague.adobe.com/ja/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up/sms-set-up){target="_blank"}を参照してください。

## SMS コネクタ v2 {#sms-connector-v2}

v8.9.1以降のGAで使用可能なv2 コネクタは、トランシーバモード SMPP接続、永続的SMPP接続を有効にし、より優れた互換性を確保します。 専用のSMS外部アカウントは、v2 コネクタを使用するすべてのSMS実装で使用できます。

新しいインストールでは、v2 コネクタはデフォルトで有効になっています。 従来のコネクタを使用して以前のバージョンからアップグレードした場合は、Adobe担当者に連絡してv2 コネクタに切り替える必要があります。 「[ アクティベーション ](#activation)」セクションを参照してください。

Campaign v8でSMS コネクタ v2を使用する方法については、[SMS ドキュメント ](sms.md)を参照してください。

>[!NOTE]
>
>v2 コネクタは、次のビルドでも使用できますが、いくつかの制限があります。
>* 8.8.1：すべてのCampaign FDA環境のリリース。 Campaign FFDA デプロイメントでは使用できません。
>* 8.8.2: FFDAを含むすべてのデプロイメントタイプのリリース。 Limited Availability （LA）でリリースされました。

## アクティブ化 {#activation}

### v2 コネクタに切り替える理由 {#why-switch-v2}

専用のSMS プロセスでは、SMPP トランシーバモードのサポートが導入され、接続数が削減され、リソース効率が向上しますが、必要に応じて送信機/受信機の設定もサポートします。 エラーからの迅速な回復、永続的な接続、ローカルファイルやプロセス間通信への依存がなくなるため、安定性が大幅に向上します。 また、遅延が少なく、スループットが向上し、インテリジェントなマイクロバッチ処理によってスピードと信頼性のバランスが取れます。 さらに、SMS プロセスを分離することで、トラブルシューティングが簡素化され、クロスチャネルへの影響が最小限に抑えられます。 これらの機能強化により、専用コネクタは、SMS配信のためのより堅牢でスケーラブルなソリューションになります。

### 設定 {#configuration}

Adobe Campaign Managed Cloud Servicesでは、サーバー設定とSMS コネクタの移行はAdobeで管理されます。 この技術的な手順では、サーバー設定ファイルとデータベース操作に直接アクセスする必要があります。

SMS コネクタ v2をアクティブ化して使用を開始するには、まずv8.9.1以降にアップグレードする必要があります。 Adobe担当者またはAdobe カスタマーケアにお問い合わせください。 インスタンスに必要な更新をスケジュールし、実行します。
