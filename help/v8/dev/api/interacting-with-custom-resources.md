---
title: カスタムリソースとのやり取り
description: API を使用したカスタムリソース管理の詳細情報/
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Data Engineer
level: Experienced
exl-id: 19bfeecb-da60-479c-a929-0cfb72ef59e3
source-git-commit: 4ed5799c77c647c9f1aeabba7645fbb475d03c09
workflow-type: tm+mt
source-wordcount: '146'
ht-degree: 0%

---

# カスタムリソースとのやり取り {#interacting-with-custom-resources}

**/customResources** エンドポイントを使用すると、Campaign のカスタムリソースを REST で公開できます。 この API に基づいて、カスタムエンティティと外部エンドポイントの統合を使用できます。

/customResources エンドポイントの動作は、/profileAndServices エンドポイントとまったく同じです。

この API 内で公開されるカスタムリソースは次のとおりです。

* /profileAndServicesExt で公開されないすべてのエンティティ
* プロファイルにリンクされていないすべてのエンティティ。これらのエンティティについては、その子と孫。
* デフォルトでは、何にもリンクされていないすべてのエンティティ、およびその子と孫です。

>[!NOTE]
>/profileAndServicesExt 以下で使用可能なカスタムリソースは、/customResources API では公開されません。


次に、カスタムリソースからメタデータを取得する例を示します。

```
GET /customResources/resourceType/<customResourceName>
```

作成、更新または削除を実行するには、GET、POST、PATCH、DELETEを使用します。

```
POST /customResources/<customResourceName>
```
