---
title: カスタムリソースの操作
description: API/を使用したカスタムリソース管理について詳しく見る
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 19bfeecb-da60-479c-a929-0cfb72ef59e3
TQID: 'https://experienceleague.adobe.com/w8FCKOzUXzquVrDL2R6BJkkKWN-S1BaXZ4-sKl93iRI'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: b12f6872-9271-4369-85e5-86969a0b99a2
    internal-label: APIs
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '146'
ht-degree: 0%
---
# カスタムリソースの操作 {#interacting-with-custom-resources}

**/customResources** エンドポイントを使用すると、RESTでCampaign カスタムリソースを公開できます。 このAPIに基づいて、カスタムエンティティと外部エンドポイントの統合を利用できます。

/customResources エンドポイントは、/profileAndServices エンドポイントとまったく同じ動作をします。

このAPI内で公開されるカスタムリソースは次のとおりです。

* /profileAndServicesExtの下に公開されていないすべてのエンティティ
* プロファイルにリンクされていないすべてのエンティティ、およびこれらのエンティティの場合は、その子と孫。
* デフォルトでは、何にもリンクされていないすべてのエンティティ、およびその子と孫。

>[!NOTE]
>/profileAndServicesExtで使用できるカスタムリソースは、/customResources APIでは公開されません。


カスタムリソースからメタデータを取得する例を次に示します。

```
GET /customResources/resourceType/<customResourceName>
```

作成、更新、削除を実行するには、GET、POST、PATCH、DELETEを使用します。

```
POST /customResources/<customResourceName>
```
