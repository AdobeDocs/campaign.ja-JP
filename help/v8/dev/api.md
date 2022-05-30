---
title: Campaign API の概要
description: Campaign API の概要
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 50e21acd-d23d-4fdd-a8aa-23c3f209bda3
source-git-commit: 6de5c93453ffa7761cf185dcbb9f1210abd26a0c
workflow-type: tm+mt
source-wordcount: '235'
ht-degree: 100%

---

# [!DNL Campaign] API の概要{#gs-ac-api}

[!DNL Adobe Campaign] には、次の方法で使用できる、一連の JavaScript 関数が備わっています。

* スクリプト内 - [!DNL Adobe Campaign] ワークフロー内
* API 経由 - 外部システムから

JavaScript の API を使用すると、Campaign クラウドデータベースに書き込んだり、データベースから読み込んだりすることができます。

* 各オブジェクト（配信、ワークフロー、サブスクリプションなど）を操作できるビジネス固有の API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/business-oriented-apis.html?lang=ja)を参照してください。
* データモデルデータをクエリするための汎用データアクセス API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/data-oriented-apis.html?lang=ja)を参照してください。

Campaign v8 は、2 つのデータベースで動作します。1 つはリアルタイムメッセージングと単一クエリ、API を介した書き込みを行うユーザーインターフェイス用のローカルデータベース。もう 1 つはキャンペーンの実行、レポート、データ取り込み、バッチクエリ、ワークフローの実行のためのクラウドデータベースです。 

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