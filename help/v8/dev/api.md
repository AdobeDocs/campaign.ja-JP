---
title: Campaign API の概要
description: Campaign API の概要
feature: API
role: Developer
level: Intermediate, Experienced
exl-id: 50e21acd-d23d-4fdd-a8aa-23c3f209bda3
source-git-commit: 115b7b6824f3736e03f9fb87898f1264f9bab636
workflow-type: tm+mt
source-wordcount: '286'
ht-degree: 88%

---

# [!DNL Campaign] API の概要 {#gs-ac-api}

[!DNL Adobe Campaign] には、次の方法で使用できる、一連の JavaScript 関数が備わっています。

* スクリプト内 - [!DNL Adobe Campaign] ワークフロー内
* API 経由 - 外部システムから

>[!NOTE]
>
>デプロイメントモデルによっては、Campaign v8 で REST API を使用することもできます。 [詳細情報](../dev/api/get-started-apis.md)。

[Campaign JavaScript API](https://experienceleague.adobe.com/developer/campaign-api/api/p-1.html?lang=ja){target="_blank"} を使用すると、Campaign クラウドデータベースへの書き込みや読み取りを行うことができます。

* 各オブジェクト（配信、ワークフロー、サブスクリプションなど）を操作できるビジネス固有の API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/business-oriented-apis.html?lang=ja){target="_blank"}を参照してください。
* データモデルデータをクエリするための汎用データアクセス API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/data-oriented-apis.html?lang=ja){target="_blank"}を参照してください。

[Enterprise（FFDA）デプロイメント](../architecture/enterprise-deployment.md)では、Campaign は 2 つのデータベースと連携することに注意してください。1 つは、ユーザーインターフェイスのリアルタイムメッセージングや単一クエリおよび API 経由での書き込みに使用するローカルデータベース、もう 1 つは、キャンペーン実行や、レポート、データ取り込み、バッチクエリおよびワークフロー実行に使用するクラウドデータベースです。

>[!CAUTION]
>
>* Campaign v8.5.1 以降、Campaign v8 への認証プロセスが変更されました。テクニカルオペレーターは、Adobe Identity Management System（IMS）を使用して Campaign に接続する必要があります。既存のテクニカルアカウントを移行する方法については、[このテクニカルノート](../../technotes/upgrades/ims-migration.md)を参照してください。
>
>* [!DNL Adobe Campaign] v8 には、API レイヤーのスループット（TPS）に制限があります。この制限を超えると、標準 HTTP エラー（429）が発生します。 Managed Cloud Services のユーザーは、アドビに連絡して、各 API の調整を適応してもらうことができます。
> 

## 前提条件 {#ac-api-prerequisites}

[!DNL Adobe Campaign] API を使用するには、次のトピックに関する知識が必要です。

* JavaScript
* SOAP プロトコル
* [!DNL Adobe Campaign] データモデル

API を使用して [!DNL Adobe Campaign] とやり取りするには、データモデルに関する知識も必要です。

>[!NOTE]
>データモデルを完全に記述できます。詳しくは、[このページ](datamodel.md)を参照してください。


**関連トピック**

* [データモデルのベストプラクティス](datamodel-best-practices.md)
* [Campaign JSAPI ドキュメント &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/p-1.html?lang=ja){target="_blank"}
