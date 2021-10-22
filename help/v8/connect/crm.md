---
title: Campaign と CRM での作業
description: Campaign と CRM での作業方法を学ぶ
feature: Overview
role: Data Engineer
level: Beginner
exl-id: c2d34ee9-4427-48e7-a8cf-0ae02a801d50
source-git-commit: 63b53fb6a7c6ecbfc981c93a723b6758b5736acf
workflow-type: ht
source-wordcount: '266'
ht-degree: 100%

---

# CRM と Campaign の接続 {#gs-crm}

Adobe Campaign では、Adobe Campaign プラットフォームをサードパーティのシステムにリンクするための様々な CRM コネクタが提供されています。これらの CRM コネクタにより、連絡先、アカウント、購入などを同期したり、アプリケーションを様々なサードパーティおよびビジネスアプリケーションと簡単に統合したりすることができます。

これらのコネクタを使用すると、データを迅速かつ容易に統合できます。Adobe Campaign には、CRM にあるテーブルを集めて選択する、専用のサポート機能が備わっています。これにより、システム全体でデータを常に最新にするための双方向の同期が保証されます。

>[!NOTE]
>
>この機能は、**CRM コネクタ**&#x200B;専用パッケージを通じて Adobe Campaign で使用できます。

## 互換性のあるシステム {#compatible-crm-systems-and-limitations}

サポートされている CRM とそのバージョンについて詳しくは、Campaign の[互換性マトリックス](../start/compatibility-matrix.md)を参照してください。

![](../assets/do-not-localize/speech.png)CRM コネクタはセキュア URL（https）でのみ動作します。

## 実装手順 {#crm-implementation-steps}

![](../assets/do-not-localize/book.png) Campaign と Microsoft Dynamics を接続する詳細な手順については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-ms-dynamics.html?lang=ja#microsoft-dynamics-implementation-steps)を参照してください。

![](../assets/do-not-localize/book.png) Campaign と Salesforce を接続する詳細な手順については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-sfdc.html?lang=ja#getting-started)を参照してください。


Adobe Campaign と CRM は、専用のワークフローアクティビティでデータを同期します。Campaign と CRM の同期を自動化するワークフローを作成します。 Microsoft Dynamics 経由で読み込んだ連絡先を、既存の Adobe Campaign データと同期し、重複する連絡先は削除してから、Adobe Campaign のデータベースを更新するワークフローを作成できます。

![](../assets/do-not-localize/book.png) 詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-data-sync.html?lang=ja#getting-started)を参照してください。
