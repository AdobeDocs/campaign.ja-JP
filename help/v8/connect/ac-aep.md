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
ht-degree: 58%

---

# Campaign と Adobe Experience Platform の連携

Adobe Campaign Managed Cloud Service の宛先とソースコネクタを使用すると、Adobe Campaign と Adobe Experience Platform をシームレスに統合できます。

* Adobe Campaign Managed Cloud Services **宛先接続** アクティベーションのためにAdobe CampaignにExperience Platformセグメントを送信するには：

  これをおこなうには、新しいAdobe Campaign Managed Cloud Servicesを設定します **宛先接続** ：セグメント/オーディエンスをアクティブ化し、そのデータをAdobe Campaignに送信する場合。 使用する Campaign インスタンスの詳細を指定し、宛先に対してアクティブ化するセグメントを選択してから、Campaign にエクスポートする属性を設定します。[Adobe Campaign Managed Cloud Services 宛先接続の作成方法についてはこちらから](https://www.adobe.com/go/destinations-adobe-campaign-managed-cloud-services-en)

  ![](assets/aep-destination.png){width="800" align="center"}

* Adobe Campaign Managed Cloud Services **ソース接続** Adobe Campaignの配信およびトラッキングログをAdobe Experience Platformに送信するには：

  これをおこなうには、新しいAdobe Campaign Managed Cloud Servicesを設定します **ソース接続** を使用して、Campaign イベントを Experience Platform にAdobeします。 Campaign インスタンスと使用するスキーマの詳細を指定し、データを取り込むデータセットを選択してから、取得するフィールドを設定します。[Adobe Campaign Managed Cloud Services ソース接続の作成方法についてはこちらから](https://www.adobe.com/go/sources-campaign-ui-en)

  ![](assets/aep-logs.png){width="800" align="center"}
