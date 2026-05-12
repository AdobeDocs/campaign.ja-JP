---
title: カスタムリソース
description: API/を使用したカスタムリソース管理について詳しく見る
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: d7b2231d-46ff-4966-9ea7-27a775e5236b
TQID: https://experienceleague.adobe.com/T-CLyTlNyyuckhraPX-rAU7TOrMfMbcZdrDcneiflg0
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: b12f6872-9271-4369-85e5-86969a0b99a2
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 177
ht-degree: 2%

---

# カスタムリソース {#custom-resources}

Adobe Campaignには事前定義済みのデータモデルが用意されており、データはさまざまなリソースを通じて定義されます。 リソースを拡張して、独自のカスタムフィールドやカスタムテーブル（購入テーブルや製品テーブルなど）を追加することで、提供されるデータモデルを強化できます。

カスタムリソースには、**/profileAndServicesExt** エンドポイントとカスタムリソース名を使用してAPIからアクセスできます。

`https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServicesExt/<resourceName>/`

>[!NOTE]
>
>すぐに使用できるリソースではないリソースの場合は、リソース名の前に必ず<b>&quot;cus&quot;</b>接頭辞を付けます。

カスタムリソースがプロファイルテーブルにリンクされている限り、任意の操作を実行できます。 例えば、次の表の構造を考えてみましょう。

![alt text](assets/cusresources.png)

この場合、**Transaction**、**TransactionDetails**&#x200B;および&#x200B;**Product** テーブルのすべてのリソースは、**Profile** テーブルにリンクされている限り利用できます。

<br/>

***サンプルリクエスト***

拡張profileAndServicesExt リソースにアクセスするためのGET リクエストのサンプル。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServicesExt/\
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>' \
```

リンクされたすべてのカスタムリソースのリストが返されます。 その後、リソース URLを使用して、このドキュメントに記載されている任意のAPI タスクを実行できます。

```
{
"apiName": "resourceType",
"cusProduct": {
        "content": ...,
        "data": "/profileAndServicesExt/cusProduct/",
        "help": "Product",
        "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServicesExt/cusProduct/metadata",
        "name": "cusProduct",
        "type": "collection"
    },
"cusTransaction": {
        "content": ...,
        "data": "/profileAndServicesExt/cusTransaction/",
        "help": "Product",
        "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServicesExt/cusTransaction/metadata",
        "name": "cusProduct",
        "type": "collection"
    },
    ...
}
```
