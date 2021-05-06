---
solution: Campaign Classic
product: campaign
title: キャンペーンとCRMの連携
description: 'キャンペーンとCRMの使い方 '
feature: 概要
role: Data Engineer
level: Beginner
translation-type: tm+mt
source-git-commit: 8c9f59067cd0e5a39e84315e5836a32bdf7a0864
workflow-type: tm+mt
source-wordcount: '274'
ht-degree: 31%

---

# CRMとキャンペーン{#gs-crm}の接続

Adobe Campaign では、Adobe Campaign プラットフォームをサードパーティのシステムにリンクするための様々な CRM コネクタが提供されています。これらの CRM コネクタにより、連絡先、アカウント、購入などを同期したり、アプリケーションを様々なサードパーティおよびビジネスアプリケーションと簡単に統合したりすることができます。

これらのコネクターを使用すると、データをすばやく簡単に統合できます。Adobe Campaignには、CRMで使用できる表を収集して選択するための専用のアシスタントが用意されています。 これにより、システム全体でデータを常に最新にするための双方向の同期が保証されます。

>[!NOTE]
>
>この機能は、**CRM コネクタ**&#x200B;専用パッケージを通じて Adobe Campaign で使用できます。

## 対応するシステム {#compatible-crm-systems-and-limitations}

サポートされている CRM とそのバージョンについて詳しくは、Campaign の[互換性マトリックス](../start/compatibility-matrix.md)を参照してください。

**注意** - CRMコネクタは、セキュリティで保護されたURL(https)でのみ機能します。

## 実装手順 {#crm-implementation-steps}

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-ms-dynamics.html?lang=en#microsoft-dynamics-implementation-steps)でキャンペーンとMicrosoft Dynamicsを接続する手順を順を追って説明します

:arrow_upper_right:[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-sfdc.html?lang=en#getting-started)で、キャンペーンとSalesforceを接続する手順を順を追って説明します。


Adobe CampaignとCRMとの間のデータ同期は、専用のワークフローアクティビティを介して行われる。 ワークフローを構築して、キャンペーンとCRM間の同期を自動化します。 Microsoft Dynamicsを介して連絡先をインポートし、既存のAdobe Campaignデータと同期し、重複の連絡先を削除して、Adobe Campaignデータベースを更新するワークフローを作成できます。

:arrow_upper_right:詳細については、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-data-sync.html?lang=en#getting-started)を参照してください

