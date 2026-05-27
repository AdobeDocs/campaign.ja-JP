---
title: Campaign と CRM での作業
description: Campaign と CRM での作業方法を学ぶ
feature: Salesforce Integration, Microsoft CRM Integration
role: Admin, User
level: Beginner
exl-id: c2d34ee9-4427-48e7-a8cf-0ae02a801d50
version: Campaign v8, Campaign Classic v7
TQID: https://experienceleague.adobe.com/gYGdySWZC1j2VkvAkL9rVBes7iQvRkRjNjm-dvFsHBM
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
  - id: beb7a3c1-66ab-4786-b879-7621375b3c40
  - id: df401a2a-327d-468c-a5e4-b7b7ccd071a0
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 339
ht-degree: 100%

---

# CRM と Campaign の接続 {#gs-crm}

Adobe Campaign では、Adobe Campaign プラットフォームをサードパーティのシステムにリンクするための様々な CRM コネクタが提供されています。 これらの CRM コネクタにより、連絡先、アカウント、購入などを同期したり、アプリケーションを様々なサードパーティおよびビジネスアプリケーションと簡単に統合したりすることができます。

これらのコネクタを使用すると、データを迅速かつ容易に統合できます。Adobe Campaign には、CRM にあるテーブルを集めて選択する、専用のアシスタント機能が備わっています。 これにより双方向の同期が確保され、システム全体でデータを常に最新に保つことができます。

主なメリットは次のとおりです。

* セールスとマーケティング間で一貫したメッセージを表示：Adobe Campaign と CRM の統合により、両方のシステムから顧客インサイトとメールマーケティング履歴にアクセスできるようになりました。また、顧客に対するすべてのメッセージで同じ一貫性のあるメッセージの共有もできます。

* すべての見込み客と顧客データの総合的なビュー：Adobe Campaign を CRM と統合すると、CRM システム内から各連絡先のメールマーケティング履歴を共有し、アクセスできます。

* 任意のチャネルで CRM データをアクティブ化：連絡先データを Adobe Campaign に同期すると、モバイルプッシュ、アプリ内、電子メール、ダイレクトメールなど、Campaign を使用した任意のオンラインまたはオフラインチャネルで通信できます。


>[!NOTE]
>
>この機能は、**CRM コネクタ**&#x200B;専用パッケージを通じて Adobe Campaign で使用できます。

## 互換性のあるシステム {#compatible-crm-systems-and-limitations}

サポートされている CRM とそのバージョンについて詳しくは、Campaign の[互換性マトリックス](../start/compatibility-matrix.md)を参照してください。

>[!CAUTION]
>
> CRM コネクタはセキュア URL（https）でのみ動作します。

## 実装手順 {#crm-implementation-steps}

Campaign と Microsoft Dynamics を接続する手順については、[このページ](ac-ms-dyn.md)を参照してください。

Campaign と Salesforce.com を接続する手順については、[このページ](ac-sfdc.md)を参照してください。

Adobe Campaign と CRM は、専用のワークフローアクティビティでデータを同期します。 Campaign と CRM の同期を自動化するワークフローを作成します。 Microsoft Dynamics 経由で読み込んだ連絡先を、既存の Adobe Campaign データと同期し、重複する連絡先は削除してから、Adobe Campaign のデータベースを更新するワークフローを作成できます。 詳しくは、[このページ](crm-data-sync.md)を参照してください。
