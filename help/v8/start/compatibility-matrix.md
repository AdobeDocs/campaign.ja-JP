---
title: Campaign v8 互換性マトリックス
description: Campaign v8 と互換性のあるシステムとバージョンの確認
feature: Release Notes
role: Admin
level: Beginner
exl-id: 4be3a6dc-0c61-4534-b9dd-6c99c8a037a9
source-git-commit: 5ab598d904bf900bcb4c01680e1b4730881ff8a5
workflow-type: tm+mt
source-wordcount: '406'
ht-degree: 77%

---

# Campaign v8 互換性マトリックス {#compat-matrix}

このドキュメントでは、**Adobe Campaign v8** クライアントコンソールの最新のビルドでサポートしているすべてのシステムとコンポーネントの一覧を示します。特に明記されていない限り、マイナーリリースはすべてサポートされています。このリストに含まれていない製品とバージョンは、Adobe Campaign とは互換性がありません。

サードパーティ製のシステムやツールの特定のバージョンは、サービス終了（EOL）になると Adobe Campaign との互換性がなくなり、この互換性マトリックスから削除されます。問題を回避するため、互換性マトリックスに記載されているサポート対象バージョンのシステムをご使用ください。

>[!NOTE]
>
>Adobe Campaign Server と Campaign クライアントコンソールは、同じバージョンである必要があります。[バージョンの確認方法を説明します](upgrades.md#version)。

## クライアントコンソール {#ClientConsoleoperatingsystems}

Campaign クライアントコンソールを使用するには、次のオペレーティングシステムとブラウザーが必要です。[詳細情報](connect.md)。

### オペレーティングシステム {#op-systems}

* **Microsoft Windows Server** 2019、2016
* **Microsoft Windows** 11、10

>[!NOTE]
>クライアントコンソールの 32 ビットバージョンは、8.5 リリース以降は非推奨となりました。 8.6 以降、クライアントコンソールは 64 ビットでのみ使用できます。システムのアップグレード方法について詳しくは、この[テクニカルノート](../../technotes/upgrades/console.md)を参照してください。

### Web ブラウザー {#web-browsers}

* **Microsoft Edge**

* **Microsoft Edge WebView2**、最新バージョン。 [Microsoft Developer サイト](http://www.adobe.com/go/acc-ms-webview2-runtime-download_jp){target="_blank"}からダウンロードします。

## CRM コネクタ {#CRMconnectors}

Adobe Campaign と互換性のある顧客関係管理（CRM）システムを次に示します。CRM コネクタの詳細を説明します [このページの](../connect/crm.md).

* **Salesforce** コネクタ API バージョン 49
* **Microsoft Dynamics** コネクタ、web API：Dynamics 365 オンプレミスおよびオンライン

## Federated Data Access（FDA）{#FederatedDataAccessFDA}

Adobe Campaign Federated Data Access（FDA）モジュールと互換性のある外部データベースを以下に示します。FDA の詳細を表示 [このページの](../connect/fda.md).

* **[!DNL Amazon Redshift]**
* **[!DNL Azure Synapse]**、Campaign v8.5 以降
* **[!DNL Google Big Query]**
* **[!DNL Snowflake]**
* **[!DNL Vertica]**

## Mobile SDK {#MobileSDK}

Campaign で[プッシュ通知](../send/push.md)を送信するには、データ収集 UI で Adobe Campaign Classic 拡張機能を設定して、Adobe Experience Platform Mobile SDK を使用します。

iOSと Android の互換性のあるバージョンについて詳しくは、 [Adobe Developerドキュメント](https://developer.adobe.com/client-sdks/home/){target="_blank"}.

## Web ユーザーインターフェイス {#web-ui}

次のブラウザーは、Campaign の Web ユーザーインターフェイスと互換性があります。 Campaign Web UI の詳細を説明します [このページの](campaign-ui.md#ac-web-ui).

* **Microsoft Edge**, **Google Chrome**, **Safari** （最新バージョン）

## Web アクセス {#web-access}

次のブラウザーは、Web アクセス用に Campaign と互換性があります。 Campaign Web アクセスの詳細を説明します [このページの](connect.md#web-access).

* **Microsoft Edge**、**Mozilla Firefox**、**Google Chrome**、**Safari**（最新バージョン）

## その他のリソース {#support}

* [Campaign リリースの更新](upgrades.md)
* [Campaign のバージョンの確認](upgrades.md#version)
* [Campaign クライアントコンソールのインストール](connect.md)
* [Campaign コントロールパネルリリース](https://experienceleague.adobe.com/docs/control-panel/using/release-notes.html?lang=ja){target="_blank"}

新しい Experience Cloud ソリューションリリースについての情報を得るには、[Adobe Priority Product Update](https://www.adobe.com/jp/subscription/priority-product-update.html){target="_blank"} を購読してください。