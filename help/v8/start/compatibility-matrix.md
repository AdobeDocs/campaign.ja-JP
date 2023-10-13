---
title: Campaign v8 互換性マトリックス
description: Campaign v8 と互換性のあるシステムとバージョンの確認
feature: Release Notes
role: Admin
level: Beginner, Intermediate, Experienced
exl-id: 4be3a6dc-0c61-4534-b9dd-6c99c8a037a9
source-git-commit: e0ec2940db3120dc8fbfd17dd2f5083bbf31232c
workflow-type: tm+mt
source-wordcount: '378'
ht-degree: 100%

---

# Campaign v8 互換性マトリックス

このドキュメントでは、**Adobe Campaign v8** の最新のビルドでサポートしているすべてのシステムとコンポーネントの一覧を示します。特に明記されていない限り、マイナーリリースはすべてサポートされています。このリストに含まれていない製品とバージョンは、Adobe Campaign とは互換性がありません。

サードパーティ製のシステムやツールの特定のバージョンは、サービス終了（EOL）になると Adobe Campaign との互換性がなくなり、この互換性マトリックスから削除されます。問題を回避するため、互換性マトリックスに記載されているサポート対象バージョンのシステムをご使用ください。

>[!NOTE]
>
>Adobe Campaign Server とクライアントコンソールは、同じバージョンである必要があります。[バージョンの確認方法を説明します](#version)。

## クライアントコンソール{#ClientConsoleoperatingsystems}

Campaign クライアントコンソールを使用するには、次のオペレーティングシステムとブラウザーが必要です。[詳細情報](connect.md)。

### オペレーティングシステム{#op-systems}

* **Microsoft Windows Server** 2019、2016
* **Microsoft Windows** 11、10

>[!NOTE]
>
>クライアントコンソールの 32 ビットバージョンは、8.5 リリース以降非推奨（廃止予定）となることに注意してください。8.6 以降、クライアントコンソールは 64 ビットでのみ使用できます。オペレーティングシステムのアップグレード方法について詳しくは、この[テクニカルノート](../../technotes/upgrades/console.md)を参照してください。

### Web ブラウザー{#web-browsers}

* **Microsoft Edge**

* **Microsoft Edge WebView2**、最新バージョン。 [Microsoft Developer サイト](http://www.adobe.com/go/acc-ms-webview2-runtime-download_jp){target="_blank"}からダウンロードします。

## CRM コネクタ{#CRMconnectors}

Adobe Campaign と互換性のある顧客関係管理（CRM）システムを次に示します。[詳細情報](../connect/crm.md)。

* **Salesforce** コネクタ API バージョン 49
* **Microsoft Dynamics** コネクタ、web API：Dynamics 365 オンプレミスおよびオンライン

## Federated Data Access（FDA）{#FederatedDataAccessFDA}

Adobe Campaign Federated Data Access（FDA）モジュールと互換性のある外部データベースを以下に示します。[詳細情報](../connect/fda.md)。

* **[!DNL Amazon Redshift]**
* **[!DNL Azure Synapse]**、Campaign v8.5 以降
* **[!DNL Google Big Query]**
* **[!DNL Snowflake]**
* **[!DNL Vertica]**

## Mobile SDK{#MobileSDK}

Campaign で[プッシュ通知](../send/push.md)を送信するには、データ収集 UI で Adobe Campaign Classic 拡張機能を設定して、Adobe Experience Platform Mobile SDK を使用します。


## Web アクセス{#web-access}

次のブラウザーは Campaign for [Web Access](connect.md#web-access) と互換性があります。

* **Microsoft Edge**、**Mozilla Firefox**、**Google Chrome**、**Safari**（最新バージョン）

## Campaign のバージョン確認方法およびビルド方法{#version}

バージョンを確認するには、**ヘルプ／バージョン情報**&#x200B;メニューにアクセスします。

![](assets/ac-version.png)

次の情報にアクセスします。

* クライアントコンソールとアプリケーションサーバーの&#x200B;**バージョン**&#x200B;番号上記の例では、クライアントコンソールとアプリケーションサーバーのバージョンはどちらも 8.1.5 です。
* 括弧の中は SHA 番号です。
* アドビカスタマーサポートに連絡するためのリンク。
* アドビのプライバシーポリシー、利用条件、Cookie ポリシーへのリンク。
