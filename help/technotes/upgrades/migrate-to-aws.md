---
title: Campaign 送信インフラストラクチャのAmazon Web Services(AWS) への移行
description: Campaign 送信インフラストラクチャのAmazon Web Services(AWS) への移行
hide: true
hidefromtoc: true
source-git-commit: 53080e3641e0070b0b6e47d1ec8b55b4c7aa2b1a
workflow-type: tm+mt
source-wordcount: '244'
ht-degree: 6%

---


# Amazon Web Services(AWS) へのインフラストラクチャの移行を Campaign で送信する {#migrate-infra-to-aws}

## 変更点{#aws-changes}

最高品質の E メール配信サービスを提供するための継続的な取り組みの一環として、Campaign の E メール送信インフラストラクチャが、AdobeがホストするデータセンターからAmazon Web Services(AWS) に移行されます。

この移行により、高可用性、最適なスループット、およびお客様のニーズに合わせた拡張性が確保されます。

## 影響の有無{#aws-impact}

v8 のお客様、または v7 がホストする、ハイブリッドまたはManaged Services Campaign のお客様は、影響を受けます。

## この移行はいつおこなわれますか？{#aws-timeline}

開発環境とステージング環境の移行は、 **2023 年 10 月**.

実稼動環境の移行は、 **2024 年 1 月**. 日付が近づくと詳細が提供されます。

Campaign をご利用のお客様には、移行ウェーブがスケジュールされると追加の通知が届きます。 移行の 7 日以上前に通知が送信されます。

## どのような影響がありますか？{#impact}

この移行は、お客様に対して透過的に行われます。

* IP の送信と Campaign のビルドバージョンは、移行前と同じままです。

* 移行ウィンドウ中、Campaign インスタンスはメールを送信できません。 他のキャンペーン機能は影響を受けません。

* メンテナンスウィンドウの前に配信用にキューに登録されたメールを再送信する必要があります。

>[!NOTE]
>
>この移行に関するご質問は、Adobe担当者にお問い合わせいただくか、 [Adobeカスタマーケア](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html).
>


