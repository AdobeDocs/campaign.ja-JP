---
title: Campaign と Adobe Experience Platform の連携
description: Campaign と Adobe Experience Platform の連携方法を説明します
feature: Platform Integration
role: Data Engineer
level: Beginner
exl-id: 21cf5611-ccaa-4e83-8891-a1a2353515aa
source-git-commit: d9a91fddbdcfae0f59fe780f8b6962238b89c886
workflow-type: tm+mt
source-wordcount: '558'
ht-degree: 24%

---

# Campaign と Adobe Experience Platform の連携

Adobe Campaign Managed Cloud Service の宛先とソースコネクタを使用すると、Adobe Campaign と Adobe Experience Platform をシームレスに統合できます。この統合を使用すると、次のことが可能になります。

* Adobe Experience PlatformオーディエンスをAdobe Campaignに送信し、分析目的で配信ログとトラッキングログをAdobe Experience Platformに送り返します。
* Adobe Experience Platformプロファイル属性をAdobe Campaignに取り込み、同期プロセスをおこない、定期的に更新できるようにします。

## Adobe Experience Platform Audiences を Campaign に送信 {#audiences}

Adobe Experience PlatformオーディエンスをAdobe Campaignに送信し、配信ログとトラッキングログを返す主な手順は次のとおりです。

* Adobe Campaign Managed Cloud Services **宛先接続** Adobe CampaignにExperience Platformセグメントを送信するには：

   1. Adobe Experience Platform Destinations カタログにアクセスし、新しい **[!UICONTROL Adobe Campaign Managed Cloud Services]** 接続。
   1. 使用する Campaign インスタンスの詳細を指定し、選択します **[!UICONTROL オーディエンスの同期]** を同期タイプとして使用します。

      ![](assets/aep-audience-sync.png){width="800" align="center"}

   1. Adobe Campaignに送信するセグメントを選択します。
   1. オーディエンスにエクスポートする属性を設定します。
   1. フローが設定されると、選択したオーディエンスをAdobe Campaignでのアクティベーションに使用できるようになります。

      ![](assets/aep-destination.png){width="800" align="center"}

  宛先の設定方法に関する詳細は、 [Adobe Campaign Managed Cloud Services connection のドキュメント](https://www.adobe.com/go/destinations-adobe-campaign-managed-cloud-services-en){target="_blank"}

* Adobe Campaign Managed Cloud Services **ソース接続**&#x200B;を使用すると、Adobe Campaign の配信ログとトラッキングログを Adobe Experience Platform に送信できます。

  これを行うには、新しい Adobe Campaign Managed Cloud Services **ソース接続**&#x200B;を設定して、Campaign イベントを Adobe Experience Platform に取り込みます。Campaign インスタンスと使用するスキーマの詳細を指定し、データを取り込むデータセットを選択してから、取得するフィールドを設定します。[Adobe Campaign Managed Cloud Services ソース接続の作成方法についてはこちらから](https://www.adobe.com/go/sources-campaign-ui-en)

  ![](assets/aep-logs.png){width="800" align="center"}

## Adobe Experience PlatformとAdobe Campaignの間でプロファイル属性を同期 {#profile}

Adobe CampaignとAdobe Experience Platformを接続すると、Adobe Experience Platform上のプロファイルに関連付けられ、同期プロセスが設定されている追加のプロファイル属性を取り込んで、Adobe Campaignデータベース内で更新することができます。

例えば、Adobe Experience Platformでオプトインとオプトアウトの値を取り込んでいるとします。 この接続を使用すると、これらの値をAdobe Campaignに取り込み、同期プロセスを実行して、定期的に更新することができます。

>[!NOTE]
>
>プロファイル属性の同期は、Adobe Campaignデータベースに既に存在するプロファイルで使用できます。

Adobe Experience Platformプロファイル属性をAdobe Campaignと同期する主な手順は次のとおりです。

1. Adobe Experience Platform Destinations カタログにアクセスし、新しい **[!UICONTROL Adobe Campaign Managed Cloud Services]** 接続。
1. 使用する Campaign インスタンスの詳細を指定し、選択します **[!UICONTROL プロファイル同期（更新のみ）]** を同期タイプとして使用します。

   ![](assets/aep-profile-sync.png){width="800" align="center"}

1. Adobe Campaignデータベースに更新するプロファイルをターゲットとするセグメントを選択します。
1. Adobe Campaignに更新するプロファイル属性を設定します。
1. フローが設定されると、選択したプロファイル属性がAdobe Campaignと同期され、宛先で設定されたセグメントでターゲットとされるすべてのプロファイルのプロファイルが更新されます。

宛先の設定方法に関する詳細は、 [Adobe Campaign Managed Cloud Services connection のドキュメント](https://www.adobe.com/go/destinations-adobe-campaign-managed-cloud-services-en){target="_blank"}