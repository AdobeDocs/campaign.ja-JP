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
ht-degree: 100%

---

# Adobe Campaign 2023 環境のアップグレード {#ac-system-upgrade}

Campaign インフラストラクチャは、最新のバージョンと修正で定期的に更新する必要があるサードパーティ製システムに依存しています。これらの更新は、サービスの継続性を確保し、Campaign 環境をセキュリティリスクから保護するために必須です。また、サードパーティシステムの変更との互換性を確保するには、Campaign のアップグレードが必要です。

**Managed Cloud Services のお客様**&#x200B;には、これらのアップグレードが必要なときに、アドビからお知らせします。コンプライアンスを確保するために、推奨事項に従って環境をアップグレードする必要があります。

セキュリティ上の理由から、アドビが[最新の Campaign ビルドをインストール](#ac-upgrade)してから、[オペレーティングシステム](#os-upgrade)や[関係データベース管理システム（RDBMS）](#pg-upgrade)をアップグレードする必要があります。

>[!NOTE]
>
>これらの変更点に関するご質問については、[アドビカスタマーケア](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html)にお問い合わせください。

## Campaign ビルドのアップグレード {#ac-upgrade}

**影響の有無**

以下で詳しく説明する[オペレーティングシステムのアップグレード](#os-upgrade)や[データベースシステムのアップグレード](#pg-upgrade)の影響を受ける場合は、アドビが Campaign 環境をこれらのシステムと互換性のある[最新の 8.4.3 バージョン](../../v8/start/release-notes.md)にアップグレードする必要があります。

**更新方法**

Managed Cloud Services のお客様には、アドビから連絡があり、お使いの Campaign のバージョンがアップグレードされます。

## オペレーティングシステムのアップグレード {#os-upgrade}

**影響の有無**

Debian オペレーティングシステムで Campaign を実行している場合、最新の Debian セキュリティアップデートを活用するには、アドビが Campaign インフラストラクチャを **Debian 11** に移行する必要があります。Debian 9 のセキュリティサポートは、2023年6月30日（PT）まで利用可能です。

**更新方法**

Managed Cloud Services のお客様には、アドビから連絡があり、お使いの環境がアップグレードされます。

## データベースシステムのアップグレード {#pg-upgrade}

**影響の有無**

Campaign のデータベースシステムが PostgreSQL である場合、PostgreSQL の最新のイノベーションとセキュリティアップデートを活用するには、アドビが **PostgreSQL 14** にアップグレードする必要があります。なお、PostgreSQL 11 は、2023年11月9日（PT）に提供終了となります。

**更新方法**

* Managed Cloud Services のお客様には、アドビから連絡があり、お使いのデータベースシステムが PostgreSQL 11 から PostgreSQL 14 にアップグレードされます。
