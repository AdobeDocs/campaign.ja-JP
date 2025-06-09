---
title: Campaign 送信インフラストラクチャの Amazon Web Services（AWS）への移行
description: Campaign 送信インフラストラクチャの Amazon Web Services（AWS）への移行
hide: true
hidefromtoc: true
exl-id: 50279a2f-0296-43f5-8967-16cc6a0c88f6
source-git-commit: 3e95a56825a143a4457ab7ee242208d7daaeb414
workflow-type: tm+mt
source-wordcount: '474'
ht-degree: 98%

---

# Campaign 送信インフラストラクチャの Amazon Web Services（AWS）への移行 {#migrate-infra-to-aws}

## 変更点{#aws-changes}

最高品質のメール配信サービスを提供するための継続的な取り組みの一部として、Campaign メール送信インフラストラクチャは、アドビがホストするデータセンターから Amazon Web Services（AWS）に移行されます。

この移行により、高可用性、最適なスループットおよびお客様のニーズに合わせて拡張できる機能が確保されます。

## 影響の有無{#aws-impact}

この変更の影響を受けるのは次のお客様です。

* Campaign Classic v7 ホスト環境およびハイブリッド環境のお客様
* Campaign Managed Services のお客様
* Campaign v8 のすべてのお客様
* Campaign Standard のお客様

## この移行が行われるのはいつですか？{#aws-timeline}

開発環境とステージング環境の移行は、**2023年10月**&#x200B;に行われます。

実稼動環境の移行は、**2024年1月**&#x200B;に開始される予定です。詳しくは、日程が近づきましたらお知らせいたします。

Campaign のお客様には、移行ウェーブのスケジュールが決定した時点で追加の通知が届きます。通知は、ステージング環境の場合は移行の少なくとも 7 日前に、実稼動環境の場合は移行の少なくとも 30 日前に送信されます。

## どのような影響がありますか？{#impact}

この移行は、お客様にとって透過的です。

* 各移行ウェーブの長さは、影響を受ける Campaign インスタンスの数によって異なる場合があります。移行ウェーブがスケジュールされると、通知には予想される期間が含まれます。

* Campaign インスタンスは、移行期間中はメールを送信できません。他の Campaign 機能は影響を受けません。


## よくある質問 {#aws-faq}

* **このアップグレードが必須である理由を教えてください。**

  アドビでは、従来のデータセンターを廃止する予定です。そこで実行している Adobe Campaign インスタンスは、新しい基準データセンターである Amazon Web Services（AWS）に転送する必要があります。

  Adobe Managed Services クラウドは、安全で最適化された最新の環境である AWS でホストされています。[Amazon Web Servicesの詳細情報 ](https://aws.amazon.com/application-hosting/benefits/){target="_blank"}。

* **この移行の対象となるお客様は、どちらになりますか？**

  Campaign v8 のすべてのお客様が対象になります。Campaign Classic v7 のハイブリッド環境、ホスト環境および Campaign Managed Services 環境のお客様も環境が移行されます。Campaign Standard のお客様も影響を受けます。

* **予想されるダウンタイムを教えてください。**

  移行には 30 分から 60 分かかることが予想されますが、各移行ウェーブの長さは、影響を受ける Campaign インスタンスの数によって異なる場合があります。移行ウェーブがスケジュールされると、通知には予想される期間が含まれます。

* **移行のに関して、お客様に必要なアクションはありますか？**

  移行はアドビにより自動的に実行されるので、アクションは必要ありません。

* **顧客側ではどのような検証を行う必要がありますか？**

  この移行では、特に必要なテストはありません。問題が発生した場合は、[アドビカスタマーケア](https://experienceleague.adobe.com/?support-solution=Campaign&amp;lang=ja#support){target="_blank"}にお問い合わせください。


* **セキュリティアップグレードの時間枠をスケジュールした後に日時の変更をリクエストできますか？**

  これは必須の移行なので、既存のスケジュールの変更には対応できません。

その他の質問については、[アドビカスタマーケア](https://experienceleague.adobe.com/?support-solution=Campaign&amp;lang=ja#support){target="_blank"}にお問い合わせください。
