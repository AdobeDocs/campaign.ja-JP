---
product: Adobe Campaign
title: Campaign API の概要
description: Campaign API の概要
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 0b71c76b-03d9-4023-84fc-3ecc0df9261b
source-git-commit: 5363950db5092bc7e0a72a0823db1132a17dda33
workflow-type: tm+mt
source-wordcount: '331'
ht-degree: 100%

---

# [!DNL Campaign] API の概要{#gs-ac-api}

[!DNL Adobe Campaign] には、次の方法で使用できる、一連の JavaScript 関数が備わっています。

* スクリプト内 - [!DNL Adobe Campaign] ワークフロー内
* API 経由 - 外部システムから

JavaScript の API を使用すると、Campaign クラウドデータベースに書き込んだり、データベースから読み込んだりすることができます。

* 各オブジェクト（配信、ワークフロー、サブスクリプションなど）を操作できるビジネス固有の API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/business-oriented-apis.html?lang=ja)を参照してください。
* データモデルデータをクエリするための汎用データアクセス API。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/data-oriented-apis.html?lang=ja)を参照してください。

Campaign v8 は、2 つのデータベースで動作します。1 つはリアルタイムメッセージングと単一クエリ、API を介した書き込みをおこなうユーザーインターフェイス用のローカルデータベース。もう 1 つはキャンペーンの実行、レポート、データ取得、バッチクエリ、ワークフローの実行のためのクラウドデータベースです。 

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

## [!DNL Campaign] API のステージングメカニズム

[!DNL Campaign] Cloud データベースでは、パフォーマンス（待ち時間と同時実行性）のため、単一呼び出しのブラストは推奨されません。 バッチ操作は常に推奨されます。 API の最適なパフォーマンスを保証するために、Campaign は API 呼び出しの処理をローカルデータベースレベルで継続します。

[!DNL :bulb:] [API のステージングメカニズム について詳しくは、このページを参照してください。](staging.md)

## 新しい API

[!DNL Campaign] ローカルデータベースと Cloud データベース間のデータ同期を管理する新しい API をご利用いただけます。また、遅延を回避し、全体的なパフォーマンスを向上させるために、ローカルデータベースレベルで API 呼び出しを処理する新しいメカニズムが導入されました。

[!DNL :bulb:] [新しい API について詳しくは、このページを参照してください。](new-apis.md)

**関連トピック**

* [データモデルのベストプラクティス](datamodel-best-practices.md)
