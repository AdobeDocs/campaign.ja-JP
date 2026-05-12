---
title: APIを使用したサービスの作成
description: APIを使用したサービスの作成方法を説明します
role: Developer
level: Experienced
exl-id: 91bbce9e-a618-4be2-840b-c7d021271f4e
TQID: https://experienceleague.adobe.com/H7TkqYaLkB-3SZeYW4vNif352UNd6EBCP5rFmtq2Hjs
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: b12f6872-9271-4369-85e5-86969a0b99a2
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 77
ht-degree: 0%

---

# APIを使用したサービスの作成{#creating-a-service-api}

サービスの作成は、サービスリソースに対する&#x200B;**POST**&#x200B;要求を使用して実行されます。

特定の属性を持つサービスを作成する場合は、それらをペイロードに追加します。 それ以外の場合、新しいサービスはデフォルトのサービスで作成されます。

<br/>

***サンプルリクエスト***

特定の属性を持つサービスを作成するためのPOST リクエストのサンプル。

```
-X POST https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/ \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
-i
-d {
-d "label": "My newsletter",
-d "messageType": "email",
-d "name": "email_newsletter",
-d "start": "2019-10-06"
-d }
```

新しく作成したサービスを、更新された属性とともに返します。

```
{
    "PKey": "<PKEY>",
    "builtIn": false,
    "created": "2019-09-26 12:00:37.005Z",
    "href": "https://mc.adobe.io/<ORGANIZATION>/profileAndServices/service/@NLscZuVHxdVu9rPftvrMWFfR1zRIxQGswSOmGLrK09JTF_iWhB0JCUHEndA_vvy__k9mzOYa5NVkcWDcrK8qGh0wygahX9kRcD44kiWWSEceShn3",
    "label": "My newsletter",
    ...
}
```
