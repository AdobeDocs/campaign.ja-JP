---
title: Campaign とAdobe Experience Platformの使用
description: Campaign とAdobe Experience Platformの使用方法を説明します
feature: Platform Integration
role: Data Engineer
level: Beginner
source-git-commit: 2ce1ef1e935080a66452c31442f745891b9ab9b3
workflow-type: tm+mt
source-wordcount: '218'
ht-degree: 0%

---

# Campaign とAdobe Experience Platformの使用

Adobe Campaign Managed Managed Managed Managed Moder の宛先とソースコネクタを使用すると、Adobe CampaignとAdobe Experience Platformをシームレスに統合できます。

* 用途 **Adobe Campaign Managed Cloud Sources コネクタ** Adobe Campaignにアクティベーション用のExperience Platformセグメントを送信するには、以下を実行します。

   ![](assets/aep-destination.png)

* 用途 **Adobe Campaign Managed Cloud Destination Connector** Adobe Campaignの配信およびトラッキングログをAdobe Experience Platformに送信する場合。

   ![](assets/aep-logs.png)

Adobe Experience Platformでこの統合を設定する手順は次のとおりです。

1. 新しいAdobe Campaign Managed Cloud Servicesの宛先接続を設定して、セグメント/オーディエンスをアクティブ化し、そのデータをAdobe Campaignに送信します。

   使用する Campaign インスタンスの詳細を指定し、宛先に対してアクティブ化するセグメントを選択してから、Campaign にエクスポートする属性を設定します。

   [Adobe Campaign Managed Cloud Servicesの宛先接続を作成する方法を説明します](https://www.adobe.com/go/destinations-adobe-campaign-managed-cloud-services-en)

1. 新しいAdobe Campaign Managed Cloud Servicesソース接続を設定して、Campaign イベントを Experience Platform に取り込みます。

   Campaign インスタンスと使用するスキーマの詳細を指定し、データを取り込むデータセットを選択し、取得するフィールドを設定します。

   [Adobe Campaign Managed Cloud Servicesソース接続の作成方法を説明します](https://www.adobe.com/go/sources-campaign-ui-en)
