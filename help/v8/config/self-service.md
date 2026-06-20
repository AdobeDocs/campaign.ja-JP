---
title: Campaign コントロールパネル
description: Campaign コントロールパネルの基本を学ぶ
feature: Control Panel, Monitoring
role: Admin
level: Beginner
exl-id: b8aa89ac-19f4-4df3-9f36-860aca61bea3
TQID: https://experienceleague.adobe.com/cAHOzLoUPZ4sRNzKa1MYQg8E5zaBB3XuBdTxrSTBlPU
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2:
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
source-git-commit: 382f297c4763e56f65b6f1acb7ff209cf59b71c2
workflow-type: tm+mt
source-wordcount: 519
ht-degree: 92%

---

# Campaign コントロールパネル {#ac-control-panel}

Campaign コントロールパネルを使用すると、各インスタンスの設定を管理したり使用状況をトラッキングしたりできるので、Adobe Campaign の製品管理者としての作業を効率化できます。 直感的なインターフェイスにより、主要なアセットの使用状況を簡単に監視できるうえ、IP アドレスの許可リスト登録、SFTP ストレージの監視、鍵の管理などの管理タスクを実行できます。

主な利点：

* アドビに依頼せずに自分で設定をすばやく変更できます。
* 様々なタイミングで様々なビジネスニーズに基づいて設定できます。
* ニーズごとにアクセス設定を制御することでセキュリティを強化できます。

また、Campaign コントロールパネルを使用して、IP 許可リスト、URL 権限などのインスタンスを設定し、インスタンスに関する情報を取得することもできます。

詳しくは、[&#x200B; キャンペーンCampaign コントロールパネルドキュメント &#x200B;](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=ja){target="_blank"}を参照してください。

## コントロールパネルにアクセスするには？ {#ac-control-panel-access}

コントロールパネルは、Adobe Experience Cloud から直接利用できます。 アクセスできるのは、管理者ユーザーのみです。

>[!IMPORTANT]
>
>デフォルトでは、コントロールパネルは、「Administrators」製品プロファイルに属する管理者ユーザーがアクセスできます。 組織の設定に応じて、製品プロファイルに異なる名前を付けることができます（「admin」、「admins」、「approval admin」など）。 **名前に「admin」という単語が含まれる製品プロファイルには、コントロールパネルへのアクセス権が自動的に付与されます。**
>
>製品プロファイルの命名を慎重に確認し、認証されたユーザーのみがコントロールパネルにアクセスできるようにします。

詳しくは、[ここをクリック](https://experienceleague.adobe.com/docs/control-panel/using/discover-control-panel/accessing-control-panel.html?lang=ja){target="_blank"}してください。

## コントロールパネルのよくある質問 {#ac-control-faq}

Campaign コントロールパネルの FAQ にアクセスするには、[ここをクリック](https://experienceleague.adobe.com/docs/control-panel/using/faq.html?lang=ja#control-panel){target="_blank"}します。

## SFTP 管理 {#ac-control-sftp}

コントロールパネルでは、アクセス権のある Campaign インスタンスに接続されているすべての SFTP サーバーを操作できます。 ストレージ容量を監視したり、許可リストの IP アドレスや SSH 公開鍵を管理できます。 詳しくは、[ここをクリック](https://experienceleague.adobe.com/docs/control-panel/using/sftp-management/about-sftp-management.html?lang=ja#sftp-management){target="_blank"}してください。

## サブドメインおよび証明書 {#ac-control-subdomain}

サブドメインとその証明書の監視方法を説明します。

* [サブドメインの監視](https://experienceleague.adobe.com/docs/control-panel/using/subdomains-and-certificates/monitoring-subdomains.html?lang=ja){target="_blank"}
* [新しいサブドメインの設定](https://experienceleague.adobe.com/docs/control-panel/using/subdomains-and-certificates/setting-up-new-subdomain.html?lang=ja){target="_blank"}
* [サブドメインのSSL証明書の監視](https://experienceleague.adobe.com/docs/control-panel/using/subdomains-and-certificates/monitoring-ssl-certificates.html?lang=ja){target="_blank"}

## パフォーマンス監視

コントロールパネルには、インスタンスを監視し、最適なパフォーマンスを確保するのに役立つ機能がいくつか用意されています。 [ここをクリック](https://experienceleague.adobe.com/docs/control-panel/using/performance-monitoring/about-performance-monitoring.html?lang=ja){target="_blank"}

Campaign v8 Managed Cloud Servicesの場合、Adobeはインフラストラクチャ、プラットフォーム、ソフトウェアプロセスもユーザーに代わって監視します。 [Adobeが管理する監視](../start/monitor.md#adobe-cloud-monitoring)の詳細をご覧ください。


## インスタンス設定

コントロールパネルでの Campaign インスタンス設定の管理方法を説明します。
* [許可リスト上のIP](https://experienceleague.adobe.com/docs/control-panel/using/instances-settings/ip-allow-listing-instance-access.html?lang=ja){target="_blank"}
* [URL 権限](https://experienceleague.adobe.com/docs/control-panel/using/instances-settings/url-permissions.html?lang=ja){target="_blank"}
* [インスタンスの詳細](https://experienceleague.adobe.com/docs/control-panel/using/instances-settings/instance-details.html?lang=ja){target="_blank"}
* [GPG キーの管理](https://experienceleague.adobe.com/docs/control-panel/using/instances-settings/gpg-keys-management.html?lang=ja){target="_blank"}
