---
title: SMS コネクタ
description: Adobe Campaignの SMS コネクタについて学ぶ
feature: SMS
role: User, Admin
level: Intermediate
source-git-commit: e349e9f236c3eeb28ffe96bcc5ec72ab64c4c127
workflow-type: tm+mt
source-wordcount: '453'
ht-degree: 1%

---

# SMS コネクタタイプについて {#sms-connectors}

Adobe Campaignは、顧客に SMS メッセージを送信するために使用される 2 つの SMS コネクタをサポートしています。

* **従来の SMS コネクタ**:Campaign v7 および以前のバージョンの Campaign v8 で使用されているコネクタの最初のバージョン。 [詳細情報](#legacy-sms-connector)
* **SMS コネクタ v2**: Campaign v8.9.1 以降の GA で使用できるこの v2 専用 SMS コネクタは、パフォーマンスと信頼性を向上させるために最新化されました。 [詳細情報](#sms-connector-v2)

## 従来の SMS コネクタ {#legacy-sms-connector}

従来の SMS コネクタは、以前のバージョンのAdobe Campaignで使用されていた MTA ベースの SMS コネクタです。 このコネクタは、既存の実装では引き続きサポートされますが、v2 コネクタのパフォーマンスと信頼性を向上させるには、Adobeが v8.9.1 以降にアップグレードすることを強くお勧めします。

v2 コネクタのメリットを享受する方法については、[ アクティベーション ](#activation) の節を参照してください。

従来の SMS コネクタ設定および使用方法について詳しくは、[Campaign Classic ドキュメント ](https://experienceleague.adobe.com/ja/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up/sms-set-up){target="_blank"} を参照してください。

## SMS コネクタ v2 {#sms-connector-v2}

v2 コネクタは v8.9.1 以降の GA で使用でき、トランシーバーモードの SMPP 接続、永続的な SMPP 接続を有効にし、互換性の向上を保証します。 専用の SMS 外部アカウントは、v2 コネクタを使用するすべての SMS 実装で使用できます。

v2 コネクタは、新規インストールに対してデフォルトで有効になっています。 従来のコネクタを使用して以前のバージョンからアップグレードした場合は、Adobe担当者に連絡して v2 コネクタに切り替える必要があります。 [ アクティベーション ](#activation) の節を参照してください。

Campaign v8 での SMS コネクタ v2 の使用方法については、[SMS のドキュメント ](sms.md) を参照してください。

>[!NOTE]
>
>v2 コネクタは、次のビルドでも使用できますが、いくつかの制限があります。
>* 8.8.1：すべての Campaign FDA 環境のリリース。 Campaign FFDA デプロイメントでは使用できません。
>* 8.8.2: FFDA を含むすべてのデプロイメントタイプのリリース。 限定提供（LA）でリリースされました。

## アクティブ化 {#activation}

### v2 コネクタに切り替える理由 {#why-switch-v2}

専用の SMS プロセスは、SMPP トランシーバーモードのサポートを導入し、接続数の削減とリソース効率の向上を実現し、必要に応じてトランスミッター/レシーバーの設定もサポートします。 エラーからの迅速な回復、永続的な接続、ローカルファイルやプロセス間の通信に依存することなく、安定性が大幅に向上します。 また、低遅延、高スループット、インテリジェントなマイクロバッチ処理により、速度と信頼性のバランスを取りながら、パフォーマンスも向上しています。 さらに、SMS プロセスの分離により、トラブルシューティングが簡略化され、クロスチャネルへの影響が最小限に抑えられます。 これらの機能強化により、専用コネクタが SMS 配信用のより堅牢でスケーラブルなソリューションになります。

### 設定 {#configuration}

Adobe Campaign Managed Cloud Servicesでは、サーバー設定と SMS コネクタの移行はAdobeで管理されます。 この技術的な手順では、サーバー設定ファイルおよびデータベース操作に直接アクセスする必要があります。

SMS コネクタ v2 をアクティブにして使用を開始するには、まず v8.9.1 以降にアップグレードする必要があります。 Adobe担当者またはAdobe カスタマーケアにお問い合わせください。 お使いのインスタンスに必要な更新をスケジュールして実行します。