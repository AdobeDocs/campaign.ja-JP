---
title: Campaign API の概要
description: Campaign API の概要
feature: API
role: Data Engineer
level: Beginner
exl-id: 50e21acd-d23d-4fdd-a8aa-23c3f209bda3
source-git-commit: c44fb2de4ed0e1661801313ae0430ba9d19542f0
workflow-type: tm+mt
source-wordcount: '245'
ht-degree: 82%

---

# [!DNL Campaign] API の概要{#gs-ac-api}

[!DNL Adobe Campaign] には、次の方法で使用できる、一連の JavaScript 関数が備わっています。

* スクリプト内 - [!DNL Adobe Campaign] ワークフロー内
* API 経由 - 外部システムから

JavaScript の API を使用すると、Campaign クラウドデータベースに書き込んだり、データベースから読み込んだりすることができます。

* 各オブジェクト（配信、ワークフロー、サブスクリプションなど）を操作できるビジネス固有の API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/business-oriented-apis.html?lang=ja){target=&quot;_blank&quot;}を参照してください。
* データモデルデータをクエリするための汎用データアクセス API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/data-oriented-apis.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

なお、 [エンタープライズ (FFDA) デプロイメント](../architecture/enterprise-deployment.md)、Campaign は次の 2 つのデータベースで動作します。API を介したリアルタイムメッセージおよび単一クエリと書き込みを行うユーザーインターフェイス用のローカルデータベースと、キャンペーン実行、レポート、データ取り込み、バッチクエリ、ワークフロー実行用の Cloud データベース。

>[!CAUTION]
>
>[!DNL Adobe Campaign] v8 には、API レイヤーのスループット（TPS）に制限があります。この制限を超えると、標準 HTTP エラー（429）が発生します。 Managed Cloud Services のユーザーは、アドビに連絡して、各 API の調整を適応してもらうことができます。

## 前提条件

[!DNL Adobe Campaign] API を使用するには、次のトピックに関する知識が必要です。

* JavaScript
* SOAP プロトコル
* [!DNL Adobe Campaign] データモデル

API を使用して [!DNL Adobe Campaign] とやり取りするには、データモデルに関する知識も必要です。

>[!NOTE]
>データモデルを完全に記述できます。詳しくは、[このページ](datamodel.md)を参照してください。


**関連トピック**

* [データモデルのベストプラクティス](datamodel-best-practices.md)
