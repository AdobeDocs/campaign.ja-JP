---
title: Campaign API の概要
description: Campaign API の概要
feature: API
role: Data Engineer
level: Beginner
exl-id: 50e21acd-d23d-4fdd-a8aa-23c3f209bda3
source-git-commit: c44fb2de4ed0e1661801313ae0430ba9d19542f0
workflow-type: ht
source-wordcount: '245'
ht-degree: 100%

---

# [!DNL Campaign] API の概要{#gs-ac-api}

[!DNL Adobe Campaign] には、次の方法で使用できる、一連の JavaScript 関数が備わっています。

* スクリプト内 - [!DNL Adobe Campaign] ワークフロー内
* API 経由 - 外部システムから

JavaScript の API を使用すると、Campaign クラウドデータベースに書き込んだり、データベースから読み込んだりすることができます。

* 各オブジェクト（配信、ワークフロー、サブスクリプションなど）を操作できるビジネス固有の API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/business-oriented-apis.html?lang=ja){target=&quot;_blank&quot;}を参照してください。
* データモデルデータに対するクエリ用の汎用データアクセス API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/data-oriented-apis.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

[Enterprise（FFDA）デプロイメント](../architecture/enterprise-deployment.md)で、Campaign は 2 つのデータベースと連携することに注意してください。1 つ目はユーザーインターフェイスのリアルタイムメッセージングや単一クエリ、API 経由での書き込みを行うローカルデータベース、もう 1 つはキャンペーンの実行や、レポート、データ取得、バッチクエリ、ワークフローの実行を行う Cloud データベースです。

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
