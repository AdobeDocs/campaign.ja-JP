---
title: Campaign と Adobe Experience Platform の連携
description: Campaign と Adobe Experience Platform の連携方法を説明します
feature: Platform Integration
role: Data Engineer
level: Beginner
exl-id: 21cf5611-ccaa-4e83-8891-a1a2353515aa
source-git-commit: f8c4e05ba2fc97d981fb31f9b11c5de1dcc1ff6e
workflow-type: tm+mt
source-wordcount: '215'
ht-degree: 100%

---

# Campaign と Adobe Experience Platform の連携

Adobe Campaign Managed Cloud Service の宛先とソースコネクタを使用すると、Adobe Campaign と Adobe Experience Platform をシームレスに統合できます。

* Adobe Campaign Managed Cloud Services **宛先接続**&#x200B;を使用すると、Experience Platform セグメントを Adobe Campaign に送信してアクティブ化することができます。

  これを行うには、新しい Adobe Campaign Managed Cloud Services **宛先接続**&#x200B;を設定して、セグメント／オーディエンスをアクティブ化し、そのデータを Adobe Campaign に送信します。使用する Campaign インスタンスの詳細を指定し、宛先に対してアクティブ化するセグメントを選択してから、Campaign にエクスポートする属性を設定します。[Adobe Campaign Managed Cloud Services 宛先接続の作成方法を学ぶ](https://www.adobe.com/go/destinations-adobe-campaign-managed-cloud-services-en)

  ![](assets/aep-destination.png){width="800" align="center"}

* Adobe Campaign Managed Cloud Services **ソース接続**&#x200B;を使用すると、Adobe Campaign の配信ログとトラッキングログを Adobe Experience Platform に送信できます。

  これを行うには、新しい Adobe Campaign Managed Cloud Services **ソース接続**&#x200B;を設定して、Campaign イベントを Adobe Experience Platform に取り込みます。Campaign インスタンスと使用するスキーマの詳細を指定し、データを取り込むデータセットを選択してから、取得するフィールドを設定します。[Adobe Campaign Managed Cloud Services ソース接続の作成方法についてはこちらから](https://www.adobe.com/go/sources-campaign-ui-en)

  ![](assets/aep-logs.png){width="800" align="center"}
