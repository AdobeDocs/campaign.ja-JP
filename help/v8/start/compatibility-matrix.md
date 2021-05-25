---
solution: Campaign v8
product: Adobe Campaign
title: Campaign v8互換表
description: Campaign v8と互換性のあるシステムとバージョンについて説明します。
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 4be3a6dc-0c61-4534-b9dd-6c99c8a037a9,870a336f-94ac-4171-891b-67614feef6ef,bebdd930-c7f6-4629-a489-3c704b33f058,d493e613-eb61-43b1-9c6d-1bd881af0734
source-git-commit: ffdfc9a2e1bec191b5a3cc7f7b40683b2456bf3e
workflow-type: tm+mt
source-wordcount: '274'
ht-degree: 31%

---

# Campaign v8互換表

このドキュメントでは、**Adobe Campaign v8**&#x200B;の最新ビルドでサポートされているすべてのシステムとコンポーネントを示します。 このリストに含まれていない製品とバージョンは、Adobe Campaign とは互換性がありません。

>[!CAUTION]
>
>* 特に断りのない限り、すべてのマイナーリリースがサポートされます。
>* これらのサードパーティ製システムおよびツールの特定のバージョンが提供終了(EOL)に達すると、Adobe Campaignはこれらのバージョンとの互換性を失い、この互換性マトリックスから削除されます。 問題を回避するため、互換性マトリックスに記載されているシステムのサポート対象バージョンを使用していることを確認してください。


## 対応するシステム

### クライアントコンソール{#ClientConsoleoperatingsystems}

:warning: Campaign クライアントコンソールを使用するには、次のオペレーティングシステムとブラウザーが必要です。

**オペレーティングシステム**

* **Microsoft Windows Server**  2016、2012
* **Microsoft Windows**  8、10（日本語インスタンスの場合に推奨）

**ブラウザー**

**Microsoft Internet Explorer** 11

### CRM コネクタ{#CRMconnectors}

* **** Salesforceconnector APIバージョン49
* **Microsoft** Dynamicsconnector、Web API:Dynamics 365オンプレミスおよびオンライン

### Federated Data Access（FDA）{#FederatedDataAccessFDA}

* **Amazon Redshift**
* **[!DNL Snowflake]**

### モバイル SDK{#MobileSDK}

* **Android**  7.x、8.x、9.0（モバイルSDKビルド1.0.27を使用）。
* **Apple iOS**  9 ～ 14（モバイルSDKビルド1.0.26を使用）。32および64ビットバージョンと互換性。

### サポートされているブラウザー {#Browsers}

次のブラウザーは Campaign for Web Access と互換性があります。

* **Microsoft Edge**、 **Mozilla Firefox**、 **Google Chrome**、 **Safari** （最新バージョン）

* **Internet Explorer** 11

## Campaignのバージョンの確認方法

**ヘルプ/バージョン情報…**&#x200B;メニューを使用して、バージョンを確認します。

![](assets/ac-version.png)

次の情報にアクセスします。

* クライアントコンソールとアプリケーションサーバーの&#x200B;**バージョン**&#x200B;番号。 上記のサンプルでは、クライアントコンソールとアプリケーションサーバーの両方でバージョンが8.1.5です。
* 括弧の間のSHA番号。
* カスタマーケアに問い合わせるAdobeへのリンク。
* Adobeのプライバシーポリシー、利用条件、Cookieポリシーへのリンクです。
