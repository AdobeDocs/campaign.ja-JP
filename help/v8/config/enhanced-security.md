---
title: Campaign セキュリティ強化アドオン
description: Campaign セキュリティ強化アドオンの基本を学ぶ
feature: Configuration
role: Developer
level: Experienced
exl-id: 7c586836-82e1-45fb-9c28-18361572e1fa
source-git-commit: 3f36d7c425dd5a9a13e1de7a77371b29a462dbea
workflow-type: tm+mt
source-wordcount: '727'
ht-degree: 97%

---


# Campaign セキュリティ強化アドオン {#enhanced-security}

ネットワーク接続とリソースのセキュリティを強化するために、[!DNL Adobe Campaign] では新しい&#x200B;**セキュリティ強化**&#x200B;アドオンが提供されています。

このアドオンには、次の 2 つのエコシステム機能が含まれています。

* [セキュア顧客管理キー（CMK）統合](#secure-cmk-integration)

* [セキュア仮想プライベートネットワーク（VPN）トンネリング](#secure-vpn-tunneling)

これらの詳細は次のとおりです。

このページでは、セキュリティ機能の強化に関するガードレールと制限の一部を示します。また、セキュア CMK 統合／セキュア VPN トンネリングのユースケースがすべて機能していることを確認する必要があります。

これらの機能が実装されると、アドビでは以下を監視します。

* インスタンスの可用性を確認し、キーが使用できない場合はアラートを送信します。

* VPN トンネルを確認し、問題が発生した場合にアラートを送信します。

## セキュア顧客管理キー統合 {#secure-cmk-integration}

**セキュア顧客管理キー（CMK）統合**&#x200B;を使用すると、Amazon Web Services（AWS）アカウントから独自のキーを使用して保存データを暗号化できます。

顧客管理キーは、作成、所有および管理の対象となる AWS アカウントでのキー管理サービス（KMS）キーです。KMS キーを完全に管理でき、それらを使用してデータを暗号化および復号します。この機能では暗号化キーの生成と管理をユーザーに任せることで、キーの失効など、キーの管理を強化できます。

>[!CAUTION]
>
>キーを無効にする場合は、その影響を認識しておく必要があります。[詳細情報](#cmk-callouts)

CMK と Campaign の統合を有効にするには、次の手順に従います。

1. [Amazon Web Services（AWS）](https://aws.amazon.com/jp/){target="_blank"}アカウントに接続します。

1. AWS Key Management Service（KMS）を使用して、自動ローテーションでキーを生成します。[詳細情報](https://docs.aws.amazon.com/ja_jp/kms/latest/developerguide/create-keys.html){target="_blank"}。

1. リソースにアクセス権を付与するには、アドビから提供されたポリシーを AWS アカウントに適用します。[詳細情報](https://docs.aws.amazon.com/ja_jp/kms/latest/developerguide/key-policy-services.html){target="_blank"}。<!--link TBC-->

1. [Amazon リソース名（キー ARN）](https://docs.aws.amazon.com/ja_jp/kms/latest/developerguide/find-cmk-id-arn.html){target="_blank"}を [!DNL Adobe Campaign] と共有します。これを行うには、アドビ担当者に連絡してください。<!--or Adobe transition manager?-->

1. Amazon EventBridge ルールを作成およびテストして、アドビによるキーのモニタリングを有効にします。[詳細情報](https://docs.aws.amazon.com/ja_jp/eventbridge/latest/userguide/eb-rules.html){target="_blank"}。


### ガードレールと制限 {#cmk-callouts}

Adobe Campaign v8 との CMK 統合には、次のガードレールと制限が適用されます。

* アドビでは、[Amazon Web Services（AWS）](https://aws.amazon.com/jp/){target="_blank"}アカウントを提供しません。ユーザーは自身の AWS アカウントを持ち、キーを生成してアドビと共有するように設定する必要があります。

* [AWS Key Management Service](https://docs.aws.amazon.com/ja_jp/kms/latest/developerguide/overview.html){target="_blank"}（KMS）キーのみがサポートされています。KMS 以外でお客様が生成したキーは使用できません。

* 初回設定中にダウンタイムが発生することが予想されます。ダウンタイムの時間は、データベースのサイズによって異なります。

* 顧客がキーを所有および管理します。キーに変更が生じた場合にはアドビに連絡する必要があります。

* [AWS CloudTrail](https://docs.aws.amazon.com/ja_jp/awscloudtrail/latest/userguide/cloudtrail-user-guide.html){target="_blank"} を使用してキーを監査し、必要に応じて失効させることができます。

* キーを失効、無効または削除すると、対応するアクションを元に戻すまで、暗号化されたリソースとインスタンスにアクセスできなくなります。

  >[!CAUTION]
  >
  >キーを無効にして、7 日以内にこのアクションを元に戻さない場合、データベースの復元はバックアップからのみ実行できます。
  >
  >キーを削除し、30 日以内にこのアクションを元に戻さない場合、すべてのデータは完全に削除され、失われます。

## セキュア仮想プライベートネットワークトンネリング {#secure-vpn-tunneling}

**セキュア仮想プライベートネットワーク（VPN）トンネリング**&#x200B;は、プライベートネットワークを介して構内から [!DNL Adobe Campaign] インスタンスに転送されるデータに安全にアクセスできるサイト間 VPN です。

<!--As it connects two networks together, it is a site-to-site VPN.-->

高可用性（HA）を確保するために、2 つのトンネルを使用して、1 つのトンネルで問題が発生した場合の機能停止を回避します。

次の 3 つのユースケースがサポートされています。

* VPN 経由で Campaign インスタンスからオンプレミスデータベースにアクセスするための Federated Data Access（FDA）

* シッククライアントからの VPN 経由のインスタンスログイン

* VPN 経由のインスタンス SFTP アクセス

>[!CAUTION]
>
>オンプレミスおよびクラウドデータベースがサポートされています。 [詳細情報](#vpn-databases)

この機能を適切に使用するには、次のガイドラインに従います。

* アドビ側の VPN 設定に基づいて、ユーザー側の VPN を設定します。

* 高可用性を確保するために、両方のトンネルを維持します。

* ユーザー側のトンネルを監視します。

* トンネルのイニシエーターで、かつトンネルがダウンした場合に接続を再開するように調整されている必要があります。

* 接続エラーが発生した場合に備えて、ユーザー側で再試行メカニズムを設定します。

### サポートされるデータベースとデバイス {#vpn-databases}

次のオンプレミスデータベースがサポートされています。

* MySQL
* Netezza
* Oracle
* SAP HANA
* SQL Server
* Sybase
* Teradata
* HiveSQL による Hadoop
* PostgreSQL

クラウドデータベースがサポートされています。 [ 互換性マトリックス ](../start/compatibility-matrix.md#FederatedDataAccessFDA) を参照してください。

>[!NOTE]
>
>* サードパーティまたは外部ベンダーへの VPN 接続はサポートされていません。
>
>* プライベートクラウドデータベースへのアドビ管理による追加の VPN は含まれません。
