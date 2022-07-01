---
title: Campaign と CRM での作業
description: Campaign と CRM での作業方法を学ぶ
feature: Salesforce Integration, Microsoft Integration
role: Data Engineer
level: Beginner
exl-id: c2d34ee9-4427-48e7-a8cf-0ae02a801d50
source-git-commit: 8eb92dd1cacc321fc79ac4480a791690fc18511c
workflow-type: ht
source-wordcount: '0'
ht-degree: 100%

---

# CRM と Campaign の接続 {#gs-crm}

Adobe Campaign では、Adobe Campaign プラットフォームをサードパーティのシステムにリンクするための様々な CRM コネクタが提供されています。これらの CRM コネクタにより、連絡先、アカウント、購入などを同期したり、アプリケーションを様々なサードパーティおよびビジネスアプリケーションと簡単に統合したりすることができます。

これらのコネクタを使用すると、データを迅速かつ容易に統合できます。Adobe Campaign には、CRM にあるテーブルを集めて選択する、専用のサポート機能が備わっています。これにより双方向の同期が確保され、システム全体でデータを常に最新に保つことができます。

主なメリットは次のとおりです。

* セールスとマーケティング間で一貫したメッセージを表示：Adobe Campaign と CRM の統合により、両方のシステムから顧客インサイトと電子メールマーケティング履歴にアクセスできるようになりました。また、顧客に対するすべてのメッセージで同じ一貫性のあるメッセージの共有もできます。

* すべての見込み客と顧客データの総合的なビュー：Adobe Campaign を CRM と統合すると、CRM システム内から各連絡先の電子メールマーケティング履歴を共有し、アクセスできます。

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

Adobe Campaign と CRM は、専用のワークフローアクティビティでデータを同期します。Campaign と CRM の同期を自動化するワークフローを作成します。Microsoft Dynamics 経由で読み込んだ連絡先を、既存の Adobe Campaign データと同期し、重複する連絡先は削除してから、Adobe Campaign のデータベースを更新するワークフローを作成できます。詳しくは、[このページ](crm-data-sync.md)を参照してください。
