---
product: campaign
title: テクニカルノート - Adobe Campaign システムのアップグレード
description: Adobe Campaign システムのアップグレード
hide: true
hidefromtoc: true
exl-id: 78949d94-60b3-44f1-8e5a-d61b5b723e87
source-git-commit: 3535e1e4fcd326412b6378253e5dde1249bce1f2
workflow-type: tm+mt
source-wordcount: '310'
ht-degree: 40%

---

# Adobe Campaign 2023 環境のアップグレード {#ac-system-upgrade}

Campaign インフラストラクチャは、最新のバージョンと修正で定期的に更新する必要があるサードパーティ製システムに依存しています。これらの更新は、サービスの継続性を確保し、Campaign 環境をセキュリティリスクから保護するために必須です。また、サードパーティシステムの変更との互換性を確保するには、Campaign のアップグレードが必要です。

As a **管理Cloud Services顧客**&#x200B;のAdobeに、必要に応じて、これらのアップグレードに関する情報が表示されます。 コンプライアンスを確保するために、推奨事項に従って環境をアップグレードする必要があります。

セキュリティ上の理由から、Adobeは [最新の Campaign ビルドのインストール](#ac-upgrade)を選択し、 [オペレーティングシステム](#os-upgrade) および/または [関係データベース管理システム (RDBMS)](#pg-upgrade).

>[!NOTE]
>
>これらの変更点に関するご質問については、[アドビカスタマーケア](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html)にお問い合わせください。

## Campaign ビルドのアップグレード {#ac-upgrade}

**影響の有無**

次の影響を受ける場合： [オペレーティングシステムのアップグレード](#os-upgrade) および/または [データベースシステムのアップグレード](#pg-upgrade) 以下に説明するように、Adobeは Campaign 環境を [最新 8.4.3 バージョン](../../v8/start/release-notes.md)：これらのシステムと互換性があります。

**更新方法**

管理対象Cloud Servicesのお客様は、Adobeから連絡を受け、Campaign のバージョンをアップグレードします。

## オペレーティングシステムのアップグレード {#os-upgrade}

**影響の有無**

Debian オペレーティングシステムで Campaign を実行している場合、最新の Debian セキュリティアップデートを活用するには、Adobeが Campaign インフラストラクチャを **Debian 11**. Debian 9 のセキュリティサポートは、2023年6月30日（PT）まで利用可能です。

**更新方法**

管理対象Cloud Servicesのお客様は、Adobeから連絡を受け、環境をアップグレードします。

## データベースシステムのアップグレード {#pg-upgrade}

**影響の有無**

Campaign のデータベースシステムが PostgreSQL の場合、最新の PostgreSQL の革新とセキュリティ更新を活用するには、Adobeが **PostgreSQL 14**. なお、PostgreSQL 11 は、2023年11月9日（PT）に提供終了となります。

**更新方法**

* 管理Cloud Servicesのお客様は、Adobeから連絡を受け、データベースシステムを PostgreSQL 11 から PostgreSQL 14 にアップグレードします。
