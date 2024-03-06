---
title: Campaign v8 互換性マトリックス
description: Campaign v8 と互換性のあるシステムとバージョンの確認
feature: Release Notes
role: Admin
level: Beginner
exl-id: 4be3a6dc-0c61-4534-b9dd-6c99c8a037a9
source-git-commit: 374c0df2cd95e656cfbaa1fb355bf1f48828dfee
workflow-type: tm+mt
source-wordcount: '360'
ht-degree: 100%

---

# Campaign v8 互換性マトリックス {#compat-matrix}

このドキュメントでは、**Adobe Campaign v8** クライアントコンソールの最新のビルドでサポートしているすべてのシステムとコンポーネントの一覧を示します。特に明記されていない限り、マイナーリリースはすべてサポートされています。このリストに含まれていない製品とバージョンは、Adobe Campaign とは互換性がありません。

サードパーティ製のシステムやツールの特定のバージョンは、サービス終了（EOL）になると Adobe Campaign との互換性がなくなり、この互換性マトリックスから削除されます。問題を回避するため、互換性マトリックスに記載されているサポート対象バージョンのシステムをご使用ください。

>[!NOTE]
>
>Adobe Campaign Server と Campaign クライアントコンソールは、同じバージョンである必要があります。[バージョンの確認方法を説明します](upgrades.md#version)。

## クライアントコンソール {#ClientConsoleoperatingsystems}

Campaign クライアントコンソールを使用するには、次のオペレーティングシステムとブラウザーが必要です。[詳細情報](connect.md)。

### オペレーティングシステム{#op-systems}

* **Microsoft Windows Server** 2019、2016
* **Microsoft Windows** 11、10

>[!NOTE]
>
>クライアントコンソールの 32 ビットバージョンは、8.5 リリース以降非推奨（廃止予定）となることに注意してください。8.6 以降、クライアントコンソールは 64 ビットでのみ使用できます。システムのアップグレード方法について詳しくは、この[テクニカルノート](../../technotes/upgrades/console.md)を参照してください。

### Web ブラウザー {#web-browsers}

* **Microsoft Edge**

* **Microsoft Edge WebView2**、最新バージョン。 [Microsoft Developer サイト](http://www.adobe.com/go/acc-ms-webview2-runtime-download_jp){target="_blank"}からダウンロードします。

## CRM コネクタ {#CRMconnectors}

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

## Mobile SDK {#MobileSDK}

Campaign で[プッシュ通知](../send/push.md)を送信するには、データ収集 UI で Adobe Campaign Classic 拡張機能を設定して、Adobe Experience Platform Mobile SDK を使用します。

iOS と Android の互換性のあるバージョンについては、[Adobe Developer ドキュメント](https://developer.adobe.com/client-sdks/home/)を参照してください

## Web アクセス {#web-access}

次のブラウザーは Campaign for [Web Access](connect.md#web-access) と互換性があります。

* **Microsoft Edge**、**Mozilla Firefox**、**Google Chrome**、**Safari**（最新バージョン）


## その他のリソース {#support}

* [Campaign リリースの更新](upgrades.md)
* [Campaign のバージョンの確認](upgrades.md#version)
* [Campaign クライアントコンソールのインストール](connect.md)
* [コントロールパネルのリリース](https://experienceleague.adobe.com/docs/control-panel/using/release-notes.html?lang=ja){target="_blank"}。

新しい Experience Cloud ソリューションリリースについての情報を得るには、[Adobe Priority Product Update](https://www.adobe.com/jp/subscription/priority-product-update.html){target="_blank"} を購読してください。