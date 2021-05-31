---
solution: Campaign v8
product: Adobe Campaign
title: Campaign API の概要
description: Campaign API の概要
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 0b71c76b-03d9-4023-84fc-3ecc0df9261b
source-git-commit: 93ab81f60c96a44ca702cfc278b87903a977763c
workflow-type: tm+mt
source-wordcount: '331'
ht-degree: 18%

---

# [!DNL Campaign] APIの概要{#gs-ac-api}

[!DNL Adobe Campaign] には、次の機能を使用できる一連の JavaScript 関数が備わっています。

* スクリプト内 — [!DNL Adobe Campaign]ワークフロー内
* API 経由 - 外部システムから

JavaScript APIを使用して、Campaignクラウドデータベースに書き込んだり、データベースから読み取ったりできます。

* 各オブジェクトに対して操作できる、ビジネス固有のAPI:配信、ワークフロー、購読など。 詳しくは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/business-oriented-apis.html?lang=ja)を参照してください。
* データモデルデータに対するクエリ用の汎用データアクセスAPI。 詳しくは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/api/data-oriented-apis.html?lang=ja)を参照してください。

Campaign v8は、2つのデータベースで動作します。リアルタイムメッセージングと単一クエリ、APIを介した書き込みを行うユーザーインターフェイス用のローカルデータベースと、キャンペーンの実行、レポート、データ取得、バッチクエリ、ワークフローの実行のためのCloudデータベース。

>[!CAUTION]
>
>[!DNL Adobe Campaign] v8には、APIレイヤーのスループット(TPS)に制限があります。この制限を超えると、標準HTTPエラー(429)が発生します。 管理対象Cloud Servicesのユーザーは、Adobeに連絡して、各APIのスロットリングを調整できます。


## 前提条件

[!DNL Adobe Campaign] APIを使用する前に、次のトピックに精通しておく必要があります。

* JavaScript
* SOAP プロトコル
* [!DNL Adobe Campaign] データモデル

APIを使用して[!DNL Adobe Campaign]とやり取りするには、データモデルに関する知識も必要です。

>[!NOTE]
>データモデルの完全な説明を生成できます。 詳しくは、[このページ](datamodel.md)を参照してください。

## [!DNL Campaign] APIのステージングメカニズム

[!DNL Campaign] Cloudデータベースでは、パフォーマンス（待ち時間と同時実行性）のため、単一呼び出しのブラストは推奨されません。 バッチ操作は常に推奨されます。 APIの最適なパフォーマンスを保証するために、CampaignはAPI呼び出しの処理をローカルデータベースレベルで継続します。

[!DNL :bulb:] [APIステージングメカニズムについて詳しくは、このページを参照してください。](staging.md)

## 新しい API

[!DNL Campaign]ローカルデータベースとCloudデータベース間のデータ同期を管理する新しいAPIが追加されました。 また、遅延を回避し、全体的なパフォーマンスを向上させるために、ローカルデータベースレベルでAPI呼び出しを処理する新しいメカニズムが導入されました。

[!DNL :bulb:] [新しいAPIについて詳しくは、このページを参照してください。](new-apis.md)

**関連トピック**

* [データモデルのベストプラクティス](datamodel-best-practices.md)
