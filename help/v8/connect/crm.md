---
solution: Campaign v8
product: Adobe Campaign
title: CampaignとCRMの使用
description: 'CampaignとCRMの使用方法を説明します。 '
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '278'
ht-degree: 30%

---

# CRMをCampaignに接続します{#gs-crm}

Adobe Campaign では、Adobe Campaign プラットフォームをサードパーティのシステムにリンクするための様々な CRM コネクタが提供されています。これらの CRM コネクタにより、連絡先、アカウント、購入などを同期したり、アプリケーションを様々なサードパーティおよびビジネスアプリケーションと簡単に統合したりすることができます。

これらのコネクタを使用すると、データをすばやく簡単に統合できます。Adobe Campaignは、CRMで使用できるテーブルを収集および選択するための専用のアシスタントを提供します。 これにより、システム全体でデータを常に最新にするための双方向の同期が保証されます。

>[!NOTE]
>
>この機能は、**CRM コネクタ**&#x200B;専用パッケージを通じて Adobe Campaign で使用できます。

## 対応するシステム {#compatible-crm-systems-and-limitations}

サポートされている CRM とそのバージョンについて詳しくは、Campaign の[互換性マトリックス](../start/compatibility-matrix.md)を参照してください。

:speech_balloon:CRMコネクタは、セキュリティで保護されたURL(https)でのみ機能します。

## 実装手順 {#crm-implementation-steps}

:arrow_upper_right:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-ms-dynamics.html?lang=en#microsoft-dynamics-implementation-steps)でCampaignとMicrosoft Dynamicsを接続する手順を説明します。

:arrow_upper_right:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-sfdc.html?lang=en#getting-started)でCampaignとSalesforceを接続する手順を説明します。


Adobe CampaignとCRM間のデータ同期は、専用のワークフローアクティビティで実行されます。 ワークフローを構築して、CampaignとCRM間の同期を自動化します。 Microsoft Dynamicsを介して連絡先をインポートし、それらを既存のAdobe Campaignデータと同期し、重複する連絡先を削除してAdobe Campaignデータベースを更新するワークフローを作成できます。

:arrow_upper_right:詳しくは、[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-data-sync.html?lang=en#getting-started)を参照してください。

