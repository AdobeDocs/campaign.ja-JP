---
title: Campaign E メール送信インフラストラクチャのアップグレード
description: Campaign E メール送信インフラストラクチャのアップグレード
hide: true
hidefromtoc: true
source-git-commit: 45ef2b46f2612bdb814270d8ef9e257fcaf98e5b
workflow-type: tm+mt
source-wordcount: '372'
ht-degree: 16%

---


# Campaign E メール送信インフラストラクチャのアップグレード {#migrate-infra-to-aws}

## アップグレードの対象{#aws-changes}

クラス最高のユーザーエクスペリエンスを提供するための継続的な取り組みの一環として、E メール配信サービスをアップグレードしています。

## 影響の有無{#aws-impact}

この変更の影響を受けるのは次のお客様です。

* Adobe Campaign Classic Managed Servicesの顧客
* Adobe Campaign Managed Cloud Servicesの顧客
* Adobe Campaign Standard On-Demand のお客様
* Adobe Campaign Cloud Messaging のオンデマンドの顧客

## この移行が行われるのはいつですか？{#aws-timeline}

開発環境とステージング環境の移行は、 **2023 年 10 月**.

本番環境のアップグレードスケジュールは、次の場所から始まる予定です： **2024 年 1 月**.

Campaign をご利用のお客様には、実稼動アップグレードに関する追加の通知が、少なくとも 30 日前に届きます。

## 今後について{#impact}

* 各アップグレードウェーブの長さは、影響を受けた Campaign インスタンスの数によって異なります。 実稼動アップグレードウェーブがスケジュールされると、通知には推定期間が含まれます。

* ステージ環境と実稼動環境の両方で、キャンペーンインスタンスは、アップグレード期間中にメールを送信できなくなります。 その他のキャンペーン機能に影響はありません。

## よくある質問 {#aws-faq}

* **このアップグレードは必須ですか？**

  はい。Campaign をご利用のお客様は、E メール送信機能で E メール送信インフラストラクチャを使用する必要があります。

* **この移行の対象となるお客様は、どちらになりますか？**

  上記を参照する Campaign のすべてのお客様の環境がアップグレードされます。

* **予想されるダウンタイムを教えてください。**

  各アップグレードウェーブの長さは、影響を受けた Campaign インスタンスの数によって異なる場合があります。 実稼動アップグレードウェーブがスケジュールされると、通知には推定期間が含まれます。

* **移行のに関して、お客様に必要なアクションはありますか？**

  アクションは必要ありません。 Adobeは、自動的に実行されるアップグレードプロセスを管理します。

* **お客様にはどのようなテストが必要ですか？**

  このアップグレードイベントに関連するお客様によるテストは、一切期待されません。 問題が見つかった場合は、 [Adobeカスタマーケア](https://experienceleague.adobe.com/?support-solution=Campaign&amp;lang=ja#support){target="_blank"}.


* **セキュリティアップグレードの時間枠をスケジュールした後に日時の変更をリクエストできますか？**

  いいえ。既存のスケジュールに対してリクエストされた変更に対応できません。これは、別のお客様に割り当てられたアップグレードイベントに影響を与える可能性があるためです。

その他の質問については、 [Adobeカスタマーケア](https://experienceleague.adobe.com/?support-solution=Campaign&amp;lang=ja#support){target="_blank"}.
