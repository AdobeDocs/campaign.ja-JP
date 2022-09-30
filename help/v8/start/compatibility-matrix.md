---
title: Campaign v8 互換性マトリックス
description: Campaign v8 と互換性のあるシステムとバージョン
feature: Overview
role: Admin
level: Beginner, Intermediate, Experienced
exl-id: 4be3a6dc-0c61-4534-b9dd-6c99c8a037a9,870a336f-94ac-4171-891b-67614feef6ef,bebdd930-c7f6-4629-a489-3c704b33f058,d493e613-eb61-43b1-9c6d-1bd881af0734
source-git-commit: 0fd798fd21d781f7c0bf75ecb1838f891350bff6
workflow-type: tm+mt
source-wordcount: '374'
ht-degree: 98%

---

# Campaign v8 互換性マトリックス

このドキュメントでは、**Adobe Campaign v8** の最新のビルドでサポートしているすべてのシステムとコンポーネントの一覧を示します。特に明記されていない限り、マイナーリリースはすべてサポートされています。このリストに含まれていない製品とバージョンは、Adobe Campaign とは互換性がありません。

サードパーティ製のシステムやツールの特定のバージョンは、サービス終了（EOL）になると Adobe Campaign との互換性がなくなり、この互換性マトリックスから削除されます。問題を回避するため、互換性マトリックスに記載されているサポート対象バージョンのシステムをご使用ください。

>[!NOTE]
>
>Adobe Campaign Server とクライアントコンソールは、同じバージョンである必要があります。[バージョンの確認方法を説明します](#version)。

## クライアントコンソール{#ClientConsoleoperatingsystems}

Campaign クライアントコンソールを使用するには、次のオペレーティングシステムとブラウザーが必要です。[詳細情報](connect.md)。

### オペレーティングシステム

* **Microsoft Windows Server** 2019、2016、2012
* **Microsoft Windows** 11（Campaign v8.3 以降）、10、8

>[!NOTE]
>
>Microsoft Windows 10（日本語インスタンスの場合に推奨）。

### ブラウザー

**Microsoft Edge**

### Microsoft WebView2 ランタイム

<table>
<tbody>
<tr>
<td>
<p>Microsoft Edge WebView2 ランタイム
</p>
</td>
<td>
<p>最新バージョン</p>
</td>
<td>
<p><a href="http://www.adobe.com/go/acc-ms-webview2-runtime-download_jp">Microsoft Developer web サイトからダウンロード</a></p>
</td>
</tr>
</tbody>
</table>

## CRM コネクタ{#CRMconnectors}

Adobe Campaign と互換性のある顧客関係管理（CRM）システムを次に示します。[詳細情報](../connect/crm.md)。

* **Salesforce** コネクタ API バージョン 49
* **Microsoft Dynamics** コネクタ、web API：Dynamics 365 オンプレミスおよびオンライン

## Federated Data Access（FDA）{#FederatedDataAccessFDA}

Adobe Campaign Federated Data Access（FDA）モジュールと互換性のある外部データベースを以下に示します。[詳細情報](../connect/fda.md)。

* **Amazon Redshift**
* **[!DNL Google Big Query]**
* **[!DNL Snowflake]**
* **[!DNL Vertica]**

## Mobile SDK{#MobileSDK}

Campaign では、関連する Mobile SDK を使用して、以下に示すオペレーティングシステムで[プッシュ通知](../send/push.md)を送信できます。

* **Android** 12（Campaign v8.3 以降）、9.0、8.x、7.x（Campaign Android SDK ビルド 1.1.1 を使用）。
* **Apple iOS** 9 ～ 16、Campaign iOS SDK ビルド 1.0.26、32 ビットおよび 64 ビットバージョンiOS 16 は Campaign v8.4 以降でサポートされています.

## Web アクセス

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
