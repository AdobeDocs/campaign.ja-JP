---
title: Campaign v8 互換性マトリックス
description: Campaign v8 と互換性のあるシステムとバージョン
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 4be3a6dc-0c61-4534-b9dd-6c99c8a037a9,870a336f-94ac-4171-891b-67614feef6ef,bebdd930-c7f6-4629-a489-3c704b33f058,d493e613-eb61-43b1-9c6d-1bd881af0734
source-git-commit: f071fc227dac6d72873744ba56eb0b4b676de5dd
workflow-type: tm+mt
source-wordcount: '274'
ht-degree: 100%

---

# Campaign v8 互換性マトリックス

このドキュメントでは、**Adobe Campaign v8** の最新のビルドでサポートしているすべてのシステムとコンポーネントの一覧を示します。特に明記されていない限り、マイナーリリースはすべてサポートされています。このリストに含まれていない製品とバージョンは、Adobe Campaign とは互換性がありません。

サードパーティ製のシステムやツールの特定のバージョンは、サービス終了（EOL）になると Adobe Campaign との互換性がなくなり、この互換性マトリックスから削除されます。問題を回避するため、互換性マトリックスに記載されているサポート対象バージョンのシステムをご使用ください。

## クライアントコンソール{#ClientConsoleoperatingsystems}

>[!CAUTION]
>
> Campaign クライアントコンソールを使用するには、次のオペレーティングシステムとブラウザーが必要です。

### オペレーティングシステム

* **Microsoft Windows Server** 2016、2012
* **Microsoft Windows** 8、10 (日本語インスタンスの場合に推奨))

### ブラウザー

**Microsoft Internet Explorer** 11

## CRM コネクタ{#CRMconnectors}

* **Salesforce** コネクタ API バージョン 49
* **Microsoft Dynamics** コネクタ、Web API：Dynamics 365 オンプレミスおよびオンライン

## Federated Data Access（FDA）{#FederatedDataAccessFDA}

* **Amazon Redshift**
* **[!DNL Google Big Query]**
* **[!DNL Snowflake]**
* **[!DNL Vertica]**

## Mobile SDK{#MobileSDK}

* **Android** 7.x、8.x、9.0、Campaign Android SDK ビルド 1.1.1
* **Apple iOS** 9 ～ 14、Campaign iOS SDK ビルド 1.0.26、32 ビットおよび 64 ビットバージョン

## Web アクセス

次のブラウザーは Campaign for Web Access と互換性があります。

* **Microsoft Edge**、**Mozilla Firefox**、**Google Chrome**、**Safari** (最新バージョン)

* **Internet Explorer** 11

## Campaign のバージョン確認方法とビルド

バージョンを確認するには、**ヘルプ／バージョン情報**&#x200B;メニューにアクセスします。

![](assets/ac-version.png)

次の情報にアクセスします。

* クライアントコンソールとアプリケーションサーバーの&#x200B;**バージョン**&#x200B;番号上記の例では、クライアントコンソールとアプリケーションサーバーのバージョンはどちらも 8.1.5 です。
* 括弧の中は SHA 番号です。
* アドビカスタマーサポートに連絡するためのリンク。
* アドビのプライバシーポリシー、利用条件、Cookie ポリシーへのリンク。
