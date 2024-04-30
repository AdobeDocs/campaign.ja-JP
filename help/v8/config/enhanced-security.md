---
title: セキュリティ強化アドオン
description: Campaign セキュリティ強化アドオンの基本を学ぶ
feature: Configuration
role: Developer
level: Experienced
hide: true
hidefromtoc: true
exl-id: 7c586836-82e1-45fb-9c28-18361572e1fa
source-git-commit: f9b064dffa0f8792e8653760cb2ac44cfdf43848
workflow-type: tm+mt
source-wordcount: '696'
ht-degree: 1%

---

# セキュリティ強化アドオン {#enhanced-security}

ネットワーク接続のセキュリティを強化し、リソースのセキュリティを強化するには、 [!DNL Adobe Campaign] が新しいを提供 **セキュリティの強化** アドオン。

このアドオンには、次の 2 つのエコシステム機能が含まれています。

* [セキュアな CMK 統合](#secure-cmk-integration)

* [安全な VPN トンネリング](#secure-vpn-tunneling)

これらの機能について以下で詳しく説明します。

## セキュアな CMK 統合 {#secure-cmk-integration}

この **顧客管理キー（CMK）のセキュア統合** を使用すると、Amazon Web Services（AWS）アカウントを通じて独自のキーを使用してインスタンスとデータを暗号化できます。

顧客管理キーは、作成、所有および管理するAWS アカウントのキー管理サービス（KMS）キーです。 これらの KMS キーを完全に制御し、それらを使用してデータを暗号化および復号化します。 暗号化キーの生成と管理をユーザーに任せることで、この機能を使用すると、キーの失効など、キーをより詳細に制御できます。

>[!CAUTION]
>
>キーを取り消す場合は、影響を認識しておく必要があります。 [詳細情報](#cmk-callouts)

Campaign との CMK 統合を有効にするには、次の手順に従います。

1. に接続 [Amazon Web Services（AWS）](https://aws.amazon.com/){target="_blank"} アカウント。

1. AWS Key Management Service （KMS）を使用して、の自動ローテーションでキーを生成します。 [方法](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html){target="_blank"}.

1. リソースへのアクセスを許可するには、Adobeから提供されたポリシーをAWS アカウントに適用します。 [詳細情報](https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-services.html){target="_blank"}. <!--link TBC-->

1. を共有 [Amazon リソース名（キー ARN）](https://docs.aws.amazon.com/kms/latest/developerguide/find-cmk-id-arn.html){target="_blank"} （を使用） [!DNL Adobe Campaign]. これについては、Adobe担当者にお問い合わせください。 <!--or Adobe transition manager?-->

1. Amazon EventBridge ルールを作成およびテストして、Adobeによるキーのモニタリングを有効にします&#x200B; [詳細情報](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rules.html){target="_blank"}。

## 安全な VPN トンネリング {#secure-vpn-tunneling}

この **セキュア仮想プライベートネットワーク（VPN）トンネリング** は、プライベートネットワークを介して構内から次の場所に転送されるデータに安全にアクセスできる、サイト間 VPN です [!DNL Adobe Campaign] インスタンス。

<!--As it connects two networks together, it is a site-to-site VPN.-->

高可用性（HA）を確保するために、1 つのトンネルで問題が発生した場合に停止しないように、2 つのトンネルを使用します。

次の 3 つのユースケースがサポートされています。

* Federated Data Access （FDA） over VPN<!--to access your on-premise database from the Campaign instance over VPN-->

* シック クライアントからの VPN 経由のインスタンス ログイン

* VPN 経由のインスタンス SFTP アクセス

>[!CAUTION]
>
>オンプレミスデータベースとAWS準拠の VPN デバイスのみがサポートされています。 [詳細情報](#vpn-callouts)

この機能を適切に使用するには、次のガイドラインに従います。

* Adobe側 VPN 設定に基づいてサイド VPN を設定します。

* 高可用性を確保するために、両方のトンネルを維持します。

* サイドトンネルを監視します。

* トンネルのイニシエータであり、トンネルがダウンした場合に接続を再開するように調整されている必要があります。

* 接続エラーが発生した場合に備えて、最後に再試行メカニズムを設定します。

## ガードレール {#callouts}

セキュリティの強化機能に関するガードレールと制限の一部を以下に示します。

* セキュア CMK 統合/セキュア VPN トンネリングのユースケースがすべて機能していることを確認します。

<!--* Adobe shall reach out to you or your technical team if any issue is found on your side.

* Currently, when using Enhanced security features, any communication with Adobe must be performed manually via email.-->

* Adobeは以下を監視します。

   * インスタンスが使用可能です。キーが使用できない場合はアラートで続行します。

   * VPN はトンネルし、問題が発生した場合にアラートを送信します。

### セキュアな CMK 統合ガードレール {#cmk-callouts}

* AdobeはAWS アカウントを提供しません。 独自のAWS アカウントを持ち、鍵を生成してAdobeと共有するように設定する必要があります。

* のみ [AWS Key Management サービス](https://docs.aws.amazon.com/kms/latest/developerguide/overview.html){target="_blank"} （KMS）キーがサポートされています。 KMS の外部では、お客様が生成したキーは使用できません&#x200B;

* 初回のセットアップには多少のダウンタイムが発生します。&#x200B;ダウンタイム時間は、データベースのサイズによって異なります。

* 鍵を所有および管理する場合は、鍵に変更が生じた場合に備えてAdobeに問い合わせる必要があります&#x200B;

* 次を使用してキーを監査できます [AWS CloudTrail](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html){target="_blank"} 必要に応じて失効させます&#x200B;。

* キーを失効、無効または削除すると、対応するアクションを元に戻すまで、暗号化されたリソースとインスタンスにアクセスできなくなります。

  >[!CAUTION]
  >
  >キーを無効にして、7 日以内にこのアクションを元に戻さない場合、データベースはバックアップからのみ復元できます。
  >
  >キーを削除し、30 日以内にこのアクションを元に戻さない場合、すべてのデータは完全に削除され、失われます。&#x200B;

### 安全な VPN トンネリングガードレール {#vpn-callouts}

* 現在、次のようなオンプレミスデータベースのみがサポートされています<!--Richa to check the list with PM-->:

   * MySQL
   * Netezza 
   * Oracle 
   * SAP HANA 
   * SQL Server 
   * Sybase 
   * Teradata 
   * HiveSQL による Hadoop

* AWS準拠の VPN デバイスのみがサポートされています。 互換性のあるデバイスのリストは、で入手できます。 [このページ](https://docs.aws.amazon.com/vpn/latest/s2svpn/your-cgw.html#example-configuration-files){target="_blank"}<!--check which list should be communicated-->.

* サードパーティまたは外部ベンダーへの VPN 接続はサポートされていません。

* プライベートクラウドデータベースへのAdobe管理による追加の VPN は含まれません。
