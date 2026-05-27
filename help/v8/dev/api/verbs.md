---
title: GET / POST / PATCH / DELETE動詞
description: Campaign Standard APIで使用される動詞について詳しく説明します。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: de97a194-d497-4665-906e-53178fd3b119
TQID: https://experienceleague.adobe.com/S8WC9Y9aqkSodleg6QasdSL4XvV8S6BFCZtyPi3l4II
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: b12f6872-9271-4369-85e5-86969a0b99a2
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 130
ht-degree: 0%

---

# GET / POST / PATCH / DELETE動詞 {#verbs}

リソースに対して操作を実行するために使用できる動詞は次のとおりです。

* `GET`: 1つの要素または要素のコレクションを取得します
* `POST`: パラメーターを含むリソースを作成します。
* `PATCH`: パラメーターを使用してリソースを更新します。
* `DELETE`: リソースを削除します。

<!-- ajouter codes retour -->

<br/>

***リクエストのサンプル***

* プロファイルコレクションに対するGET リクエストのサンプル。


  ```
  $curl  
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  プロファイルの配列を返します。


  ```
  {
      "content": [
          {
              "PKey": "<PKEY>",
              "firstName": "Olivia",
              "lastName": "Varney",
              "birthDate": "1977-09-°4",
              "email": "o.varney@mail.com",
          },
          {
              "PKey": "<PKEY>",
              "firstName": "John",
              "lastName": "Doe",
              "birthDate": "1985-08-17",
              "email": "johndoe@mail.com",
          }
      ],
  }
  ```

* 特定のプロファイルに対するGET リクエストのサンプル。


  ```
  $curl  
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/<PKEY> \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  リクエストされたプロファイルが返されます。


  ```
  {
      "PKey": "<PKEY>",
      "firstName": "John",
      "lastName": "Doe",
      "birthDate": "1985-08-17",
      "email": "johndoe@mail.com",
      ...
  }
  ```

* プロファイルを作成するためのPOST リクエストのサンプル。


  ```
  -X POST https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>' \
  -d '{"lastName":"Doe"}'
  ```

  デフォルトのフィールドを持つプロファイルを返します。

  ```
  {
      "PKey": "<PKEY>",
      "firstName": "John",
      "lastName": "Doe",
      "birthDate": "1985-08-17",
      "email": "johndoe@mail.com",
  }
  ```

* プロファイルを更新するためのPATCH リクエストのサンプル。

  ```
  -X PATCH https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/<PKEY> \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>' \
  -d '{"firstName":"Mark"',"lastName":"Smith"}'
  ```

  更新されたプロファイルを取得するためのPKEYとURLを返します。

  ```
  {
      "PKey": "<PKEY>",
      "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/<PKEY>"
  }
  ```

* プロファイルを削除するためのDELETE リクエストのサンプル。

  ```
  -X DELETE https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/<PKEY> \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  リクエストは200件の応答を返し、プロファイルが削除されたことを確認します。
