---
title: プロファイルの取得
description: API を使用してプロファイルを取得する方法の詳細を説明します
role: Data Engineer
level: Experienced
exl-id: 19679804-f728-49fa-b26e-8f31b67c29bf
source-git-commit: 4ed5799c77c647c9f1aeabba7645fbb475d03c09
workflow-type: tm+mt
source-wordcount: '234'
ht-degree: 4%

---

# API を使用したプロファイルの取得 {#retrieving-profiles}

プロファイルの取得は、**GET** リクエストで実行されます。

その後、フィルター、順序、ページネーションを使用して、検索を絞り込むことができます。 詳しくは、[ その他の操作 ](sorting.md) の節を参照してください。

さらに、Campaign Standard API では、「メール」、「名」、「姓」または任意のカスタムフィールドのいずれか 1 つに基づいてプロファイルを検索できます。 詳しくは、[この節](#searching-field)を参照してください。

<br/>

***サンプルリクエスト***

* すべてのプロファイルを取得するサンプル GET リクエスト。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  リクエストに対する応答。

  ```
  {
      "content": [
          {
              "PKey": "<PKEY>",
              "firstName": "John",
              "lastName":"Doe",
              "birthDate": "1980-10-24",
              ...
          },
          ...
  }
  ```

* 最初の 10 個のメール値を取得するサンプル GET リクエスト。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/email?_lineCount=10 \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  リクエストに対する応答。 「next」ノードは、次の 10 件のメール値へのアクセスを許可する URL を返します。

  ```
  {
  "content": [
      "amy.dakota@mail.com",
      "kristen.smith@mail.com",
      "omalley@mail.com",
      "xander.harrys@mail.com",
      "jane.summer@mail.com",
      "gloria.boston@mail.com",
      "edward.snow@mail.com",
      "dorian.simons@mail.com",
      "peter.paolini@mail.com",
      "mingam+test08@adobe.com"
  ],
  "next": {
      "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/email?_lineCount=10&_
      lineStart=@Qy2MRJCS67PFf8soTf4BzF7BXsq1Gbkp_e5lLj1TbE7HJKqc"
  }
  }
  ```

## フィールドに基づくプロファイルの検索 {#searching-field}

**[!UICONTROL filterType]** パラメーターを使用すると、次のいずれかのフィールドに基づいてプロファイルを取得できます。メール、名、姓、またはプロファイルリソースを拡張する際の詳細フィルタリングで追加されたカスタムフィールド。

>[!NOTE]
>
>検索では大文字と小文字が区別され、プレフィックスに対してのみ実行されます。 例えば、姓の最後の文字を使用してプロファイルを検索することはできません。

***サンプルリクエスト***

* 名に基づいてプロファイルをフィルタリングするリクエストのサンプル。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/byText?text=John&filterType=firstName \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

* 姓に基づいてプロファイルをフィルタリングするサンプルリクエスト。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/byText?text=Miller&filterType=lastName \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

* メールに基づいてプロファイルをフィルタリングするリクエストのサンプル。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/byText?text=John%40gmail.com&filterType=email \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

* 「Hobby」カスタムフィールドに基づいてプロファイルをフィルタリングするリクエストのサンプル。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServicesExt/profile/byText?cusHobby=Dancing&filterType=Hobby \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```
