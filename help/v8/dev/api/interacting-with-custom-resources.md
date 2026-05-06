---
title: カスタムリソースの操作
description: API/を使用したカスタムリソース管理について詳しく見る
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 19bfeecb-da60-479c-a929-0cfb72ef59e3
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
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

作成、更新または削除を実行するには、GET、POST、PATCH、DELETEが使用されます。

```
POST /customResources/<customResourceName>
```
