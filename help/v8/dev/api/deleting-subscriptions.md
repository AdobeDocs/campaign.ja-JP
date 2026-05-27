---
title: 購読の削除
description: APIを使用してサブスクリプションを削除する方法について説明します
role: Developer
level: Experienced
exl-id: 76e2d102-c877-41a6-af87-2f407201a572
TQID: https://experienceleague.adobe.com/tn-B0YAO0bD1dtW3-ovb-xWtupiRaqFD1TMW8Rzu5aY
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: b12f6872-9271-4369-85e5-86969a0b99a2
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 239
ht-degree: 0%

---

# APIを使用したサブスクリプションの削除 {#mdeleting-subscriptions-api}

<!--NOTE TO WRITER: There are two duplicate headings that seem to have the same content. Delete one? Rename if different?-->

## 特定のプロファイルのサービス購読の削除 {#deleting-service-subscription}

これは3 ステップの手順です。

1. 目的のプロファイルの購読URLを取得します。
1. サブスクリプション URLに対してGET リクエストを実行します。
1. 必要なサービス URLに対してDELETE リクエストを実行します。

削除リクエストが成功した場合、応答ステータスは204 No Contentです。

<br/>

***サンプルリクエスト***

以下のペイロードの例は、サービスからプロファイルを登録解除する方法を示しています。 まず、GET リクエストを実行してプロファイルを取得します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/<PKEY> \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

プロファイルの購読URLを返します。

```
  {
    ...
    "postalAddress":...,
    "preferredLanguage": "none",
    "subscriptions": {
      "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/<PKEY>/subscriptions/"
    },
  }
```

サブスクリプション URLに対してGET リクエストを実行します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/<PKEY>/subscriptions \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

選択したプロファイルの購読リストと、購読した各サービスのURLを返します。

```
...
"service": {
  "PKey": "<PKEY>",
  "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/<PKEY>",
  "label": "Sport Newsletter",
  "name": "SVC1",
  "title": "Sport Newsletter (SVC1)"
},
...
```

必要なサービス URLに対してDELETE リクエストを実行します。

```
-X DELETE https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/<PKEY> \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

<!-- + réponse -->

## 特定のプロファイルのサービス購読の削除

これは3 ステップの手順です。

1. 目的のサービスとそのサブスクリプション URLを取得します。
1. サブスクリプション URLに対してGET リクエストを実行し、すべてのプロファイルサブスクリプションを取得します。
1. 目的のプロファイルサブスクリプション URLに対してDELETE リクエストを実行します。

削除リクエストが成功した場合、応答ステータスは204 No Contentです。

<br/>

***サンプルリクエスト***

サービスレコードを取得します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/<PKEY> \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

サービスの購読URLを返します。

```
{
  ...
  "messageType": "email",
  "mode": "newsletter",
  "name": "SVC3",
  "subScenarioEventType": "subscriptionEvent",
  "subscriptions": {
    "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/<PKEY>/subscriptions/"
  },
  "targetResource": "profile",
  ...
},
```

サブスクリプション URLに対してGET リクエストを実行します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/<PKEY>/subscriptions \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

選択したサービスのサブスクリプションのリストと、各プロファイルサブスクリプションのURL （href）を返します。

```
{
  "PKey": "<PKEY>",
  "created": "2019-03-26 08:58:04.764Z",
  "email": "",
  "expirationDate": "",
  "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/<PKEY>/subscriptions/<PKEY>",
  "metadata": "subscriptionRcp",
  "service": ...,
  "serviceName": "SVC3",
  "subscriber": ...,
  ...
}
```

目的のプロファイルサブスクリプション URLに対してDELETE リクエストを実行します。

```
-X DELETE https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/<PKEY>/subscriptions/<PKEY> \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

<!-- + réponse -->
