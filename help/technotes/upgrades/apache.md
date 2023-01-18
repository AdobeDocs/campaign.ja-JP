---
product: campaign
title: テクニカルノート - Adobe Campaign - Apache バージョンのセキュリティアップデート
description: Adobe Campaign - Apache バージョンのセキュリティアップデート
exl-id: 68e42fe4-7fb6-4b53-9f39-e77374e3753d
source-git-commit: 77ec01aaba1e50676bed57f503a9e4e8bb1fe54c
workflow-type: tm+mt
source-wordcount: '476'
ht-degree: 98%

---

# Adobe Campaign - Apache バージョンのセキュリティアップデート {#apache-update}

>[!CAUTION]
>この記事は、Campaign Classic v7 Managed Cloud Services のお客様、 Campaign v8 のお客様および Campaign Standard のお客様を対象としています。

Adobe Campaign はサードパーティ製ツールと連携でき、サポート対象バージョンのみを実装し最新の修正および機能改善を活かせるように、定期的に互換性が更新されています。

Adobe Campaign には、HTTP を介してアプリケーションサーバーへのエントリポイントとして機能し、Apache web サーバーと統合される Apache Tomcat が含まれています。Apache Software Foundation は、Apache HTTP Server 2.4.53 をリリースしました。このバージョンは、影響を受けたシステムをリモート攻撃者が制御できてしまう脆弱性に対処しています。詳しくは、 [Apache 2.4.53 のリリース](https://downloads.apache.org/httpd/Announcement2.4.html){target="_blank"}.

Adobe Campaign チームは、**2022年6月15日**（PT）までに、Apache バージョンのセキュリティアップグレード作業を実施して、Apache の脆弱性を軽減しインスタンス環境のセキュリティを強化します。このアップグレードの対象となるのは、脆弱なバージョンの Apache HTTP Server 上で動作する Campaign Classic v7 Managed Cloud Services、Campaign v8 および Campaign Standard のすべてのお客様です。対象の顧客には、アドビから既にこのアップグレードに関する通知を送っています。

このアップグレードは、業務を中断することなく Campaign サービスの使用を継続できるよう、通常の営業時間外に自動的に実行されると想定されています。

まず、アドビのチームは、お客様の実稼動以外のインスタンスをアップグレードしてから、実稼動インスタンスをアップグレードします。これはアドビ側で処理する自動アップグレードプロセスなので、顧客側に必要なアクションはありません。ただし、問題が発生した場合は、[アドビカスタマーケア](https://experienceleague.adobe.com/?support-solution=Campaign&amp;lang=ja#support)にお問い合わせください。


>[!NOTE]
>このアップグレードを行うには、Apache web サーバーを再起動する必要があります。ダウンタイムは、以下に示す時間枠内で 10 分を超えることはありません。

## よくある質問 {#apache-faq}

* **このアップグレードが必須である理由を教えてください。**

   現在の Apache バージョンには脆弱性があり、セキュリティが脅威に晒される危険性があります。セキュリティ上のリスクに対処するために、Campaign インスタンスを適用可能な最新の Apache バージョンにアップグレードすることが重要です。


* **セキュリティアップグレード対象となる顧客を教えてください。**

   古い Apache バージョン上に実装された Campaign 環境を使用しているすべての顧客が対象であり、適用可能な最新の Apache バージョンにアップグレードされます。

* **予想されるダウンタイムを教えてください。**

   予想されるダウンタイムは 10 分未満です。

* **このセキュリティアップグレードに関して、顧客側に必要なアクションはありますか？**

   このセキュリティアップグレードは自動的に実行されるので、アクションは必要ありません。

* **顧客側ではどのような検証を行う必要がありますか？**

   このセキュリティアップグレードでは、特に必要なテストはありません。問題が発生した場合は、[アドビカスタマーケア](https://experienceleague.adobe.com/?support-solution=Campaign&amp;lang=ja#support)にお問い合わせください。


* **セキュリティアップグレードの時間枠をスケジュールした後に日時の変更をリクエストできますか？**

   これはセキュリティの修正なので、既存のスケジュールに合わせることを強くお勧めします。


その他の質問については、[アドビカスタマーケア](https://experienceleague.adobe.com/?support-solution=Campaign&amp;lang=ja#support)にお問い合わせください。
