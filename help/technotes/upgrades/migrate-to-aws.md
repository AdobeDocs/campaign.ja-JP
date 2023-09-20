---
title: Campaign 送信インフラストラクチャのAmazon Web Services(AWS) への移行
description: Campaign 送信インフラストラクチャのAmazon Web Services(AWS) への移行
hide: true
hidefromtoc: true
source-git-commit: 15beb6e4aae7a00b245277bcb4c6c60c13b22884
workflow-type: tm+mt
source-wordcount: '430'
ht-degree: 18%

---


# Amazon Web Services(AWS) へのインフラストラクチャの移行を Campaign で送信する {#migrate-infra-to-aws}

## 変更点{#aws-changes}

最高品質の E メール配信サービスを提供するための継続的な取り組みの一環として、Campaign の E メール送信インフラストラクチャが、AdobeがホストするデータセンターからAmazon Web Services(AWS) に移行されます。

この移行により、高可用性、最適なスループット、およびお客様のニーズに合わせた拡張性が確保されます。

## 影響の有無{#aws-impact}

この変更の対象：

* Campaign Classicv7 ホスト型およびハイブリッド型の顧客
* Campaign Managed Servicesのお客様
* Campaign v8 のすべてのお客様
* Campaign Standardの顧客

## この移行はいつおこなわれますか？{#aws-timeline}

開発環境とステージング環境の移行は、 **2023 年 10 月**.

実稼動環境の移行は、 **2024 年 1 月**. 日付が近づくと詳細が提供されます。

Campaign をご利用のお客様には、移行ウェーブがスケジュールされると追加の通知が届きます。 ステージ環境の場合は移行の 7 日以上前に、実稼動環境の場合は移行の 30 日以上前に通知が送信されます。

## どのような影響がありますか？{#impact}

この移行は、お客様に対して透過的に行われます。

* 移行には 30 分～ 60 分かかる予定です

* 移行ウィンドウ中、Campaign インスタンスはメールを送信できなくなります。 他のキャンペーン機能は影響を受けません。


## よくある質問 {#aws-faq}

* **このアップグレードが必須である理由を教えてください。**

  Adobeでは、従来のデータセンターを廃止する予定です。そこで実行するAdobe Campaignインスタンスは、新しい参照用データセンター、Amazon Web Services(AWS) に転送する必要があります。

  Adobe Managed Services クラウドは、安全で最適化された最新の環境である AWS でホストされています。[Amazon Web Servicesの詳細](https://aws.amazon.com/application-hosting/benefits/){target="_blank"}.

* **この移行の対象となるのは、どのお客様ですか？**

  Campaign v8 のすべての顧客とCampaign Classicv7 ハイブリッド、ホストおよび Campaign Managed Servicesは、環境を移行します。 Campaign Standardのお客様も影響を受けます。

* **予想されるダウンタイムを教えてください。**

  予想されるダウンタイムは 30 ～ 60 分です。

* **移行に必要なアクションはありますか？**

  移行はAdobeごとに自動的に実行されるので、アクションは必要ありません。

* **顧客側ではどのような検証を行う必要がありますか？**

  この移行に対して、特定のテストは必要ありません。 問題が見つかった場合は、 [Adobeカスタマーケア](https://experienceleague.adobe.com/?support-solution=Campaign&amp;lang=ja#support){target="_blank"}.


* **セキュリティアップグレードの時間枠をスケジュールした後に日時の変更をリクエストできますか？**

  これは必須の移行なので、既存のスケジュールに合わせることを強くお勧めします。


その他の質問については、 [Adobeカスタマーケア](https://experienceleague.adobe.com/?support-solution=Campaign&amp;lang=ja#support){target="_blank"}.
