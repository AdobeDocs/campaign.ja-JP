---
title: 追加操作
description: さらに詳しく
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 7db25b8d-a6f1-4151-bf37-c47e9991ae48
source-git-commit: a5436f7e1f1e4ad86157dfd8943d51bf852b747c
workflow-type: tm+mt
source-wordcount: '762'
ht-degree: 1%

---

# 追加操作 {#additional-operations}

## 並べ替え {#sorting}

並べ替えは、デフォルトで昇順で使用できます。 降順で並べ替えるには、**%20desc**&#x200B;を&#x200B;**_order** パラメーターの値に追加します。

フィールドを並べ替えることができるかどうかを確認するには、「sortable」パラメーターをリソースメタデータに確認します。 詳しくは、[この節](metadata-mechanism.md)を参照してください。

<br/>

***リクエストのサンプル***

* データベース内の電子メールをアルファベット順に取得するためのGET リクエストのサンプル。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/email?_order=email \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  リクエストへの応答。

  ```
  {
  "content": [
      "adam@email.com",
      "allison.durance@example.com",
      "amy.dakota@mail.com",
      "andrea.johnson@mail.com",
      ...
  ]
  ...
  }
  ```

* GET リクエストをサンプルして、データベース内のメールを降順アルファ順で取得します。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/email?_order=email%20desc \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  リクエストへの応答。

  ```
  {
  "content": [
      "tombinder@example.com",
      "tombinder@example.com",
      "timross@example.com",
      "john.smith@example.com",
      ...
  ]
  }
  ```

## フィルタリング {#filtering}

### フィルターのメタデータの取得

各リソースにフィルターを使用できます。 リソースに関連付けられているフィルターを特定するには、リソースメタデータに対してGET リクエストを実行する必要があります。 このリクエストは、特定のリソースに対してすべてのフィルターが定義されているURLを返します。 メタデータについて詳しくは、[この節](metadata-mechanism.md)を参照してください。

フィルターのメタデータを特定し、その使用方法を決定するには、以前に返されたURLに対してGET リクエストを実行する必要があります。

<br/>

***サンプルリクエスト***

以下のペイロードのサンプルは、「profile」リソースの「byText」フィルターメタデータを取得する方法を示しています。 最初に、「profile」リソースメタデータに対してGET リクエストを実行します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/resourceType/profile \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

フィルターが記述されているURLを返します。

```
{
"filters": {
        "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/resourceType/<PKEY>/filters/"
    }
  }
```

URLに対してGET リクエストを実行します。 プロファイルリソースのフィルターのリストと、各フィルターに関連付けられたメタデータを返します。

```
{
"birthday": {
        "PKey": "@FL-CbDFXbnHbXcVpeCGWL46VXJLn1LqxLMPagt2vz8sCxQ52lvB15KiUaxXkxJYQw-tZXYrgUWG6K8QcB4gxVY9RKoba5bRFY3294YFshDmorRr8",
        "category": "0150_profile",
        "condition": ...,
        "data": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/birthday?type=$value&precision=$value&operator=$value&day=$value&month=$value&includeStart=$value&endDay=$value&endMonth=$value&includeEnd=$value&relativeValue=$value&nextUnitsValue=$value&previousUnitsValue=$value",
        "formType": "webPage",
        "fragmentName": "",
        "label": "Birthday",
}
```

### フィルターのメタデータ構造

各フィルターで同じメタデータ構造を使用できます。

* **@formType**&#x200B;および&#x200B;**@webPage** フィールドは技術フィールドです。
* **data** フィールドには、フィルターの使用方法に関するサンプルが表示されます。
* **メタデータ** ノードは、フィルターパラメーターを記述します。
* **条件** ノードは、フィルターが何を行うかを記述します。 メタデータノードで説明されているフィルターパラメーターを使用して、フィルター条件を作成します。 各フィルター条件について、**enabledIf**&#x200B;がtrueの場合、**expr**&#x200B;が適用されます。

<br/>

フィルターのメタデータ構造のサンプル：

```
"byText": {
        "PKey": "...",
        "category": "99_none",
        "condition": ...,
        "data": "/profileAndServices/profile/byText?text=$value",
        "formType": "none",
        "fragmentName": "",
        "label": "By name or email",
    }
```

### フィルターの使用

フィルタリングは、次のリクエストで実行されます。

`GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/<resourceName>/by<filterName>?<filterParam>=<filterValue>`

1つのリクエストで複数のフィルターを組み合わせることができます。

`GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/<resourceName>/<filter1name>/<filter2name>?<filter1param>=<filter1value>&<filter2param>=<filter2value>`

<br/>

***リクエストのサンプル***

* GET リクエストをサンプルして、「email」タイプの「service」リソースを取得します。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/byChannel?channel=email \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  リクエストへの応答。

  ```
  {
      "content": [
          {
              "PKey": "<PKEY>",
              "created": "2019-09-25 23:20:35.000Z",
              "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/@I_FIiDush4OQPc0mbOVR9USoh36Tt5CsD35lATvQjdWlXrYc0lFkvle2XIwZUbD8GqTVvSp8AfWFUvjkGMe1fPe5nok",
              "label": "Marketing Newsletter",
              "lastModified": "2019-09-25 23:20:35.000Z",
              "limitedDuration": false,
              "messageType": "email",
              "mode": "newsletter",
              ...
          },
          ...
      ],
      ...
  }
  ```

* で「Doe」を含む「profile」リソースを取得するためのGET リクエストのサンプル
電子メールまたは姓のフィールド（byText フィルターは、電子メールと姓の両方のフィールドを検索します）。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/byText?text=Doe \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  リクエストへの応答。

  ```
  {
      "content": [
          {
              "PKey": "<PKEY>",
              "firstName": "John",
              "lastName":"Doe",
              "birthDate": "1980-10-24",
              ...
          }
          ...
      ],
      ...
  }
  ```

* GET リクエストをサンプルして、「email」と「sport」というラベルが付いたサービスリソースを取得します。

  ```
  -X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/byChannel/byText?channel=email&text=sport \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>'
  ```

  リクエストへの応答。

  ```
  {
      "content": [
          {
              "PKey": "<PKEY>",
              "created": "2019-09-26 09:36:01.014Z",
              "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/<PKEY>",
              "label": "sport",
              "lastModified": "2019-09-26 09:36:01.014Z",
              "limitedDuration": false,
              "messageType": "email",
              "mode": "newsletter",
              "name": "SVC13",
              ...
          }
      ],
      ...
  }
  ```

### カスタムフィルター

カスタムフィルターを使用する場合は、Adobe Campaign Standard インターフェイスでカスタムフィルターを作成してカスタマイズする必要があります。 カスタムフィルターは、標準搭載のフィルターと同じ動作になります。

`GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServicesExt/<resourceName>/by<customFilterName>?<customFilterparam>=<customFilterValue>`

詳しくは、Campaign Standardのドキュメントを参照してください。

* [&#x200B; フィルター定義の設定](https://helpx.adobe.com/jp/campaign/standard/developing/using/configuring-filter-definition.html)。
* [使用例：複合識別キーを使用してリソースを呼び出す](https://experienceleague.adobe.com/docs/campaign-standard/using/developing/adding-or-extending-a-resource/uc-calling-resource-id-key.html?lang=ja)。

<br/>

***サンプルリクエスト***

トランザクション金額が100$以上の「profile」リソースを取得するためのGET リクエストのサンプル。 「byAmount」フィルターは、最初にAdobe Campaign Standard インターフェイスで定義され、「Transaction」カスタムテーブルにリンクされています。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServicesExt/profile/byAmount?amount_parameter=100 \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

<!--
Response to the request.

```

{
    "content": [
        {
            "PKey": "<PKEY>",
            "builtIn": false,
            "created": "2019-09-26 09:36:01.014Z",
            "desc": "",
            "end": "",
            "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/<PKEY>",
            ...
        }
    ],
}

```

-->

<!-- exemple à vérifier de bout en bout-->

<!--
+category = query editor
privacy ?
displayFOrmat ?
pour faire un POST sur une enum, il faut lui passer le @name décrit dans le noeud values, chaque @name a une correspondance en format = au format définit par le resType
-->





<!--
 if link ou collection.* resName +
* resTarget tout ca, ca va ensemble : le système de lien, resTarget va donner la ressource targetée par le lien. type
resType = type technique (long..) resType = link alors unbound='false' ou 'true'
If type = enumeration alors champ "values" rajouté et les valeurs sont dans values
pour faire un POST sur une enum, il faut lui passer le @name décrit dans le noeud values, chaque @name a une correspondance en format = au format définit par le resType
ail faut que la valeur poster soit conforme ,elle doit valider la dataPolicy . La dataPolicy peut soit controler la valeur (email invalide), soit transformé (cas du smartCase par exemple)
type dans les metadata = type de haut-niveau (nombre, text)
-->

## カウント {#counting}

Adobe Campaign REST APIは、リクエスト内のレコード数をカウントできます。 これを行うには、**count** ノードで返されるURLを使用します。

<br/>

***サンプルリクエスト***

**messageType**&#x200B;値が「sms」に等しいすべてのサービスをカウントするには、**byChannel** フィルターを使用してGET リクエストを実行します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/byChannel?channel=sms \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

フィルターに対応するサービスが返されます。

```
{
    "content": [
        {
            ...
            "messageType": "sms",
            "mode": "newsletter",
            "name": "SVC6",
            ...
        },
        ...
    ],
    "count": {
        "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/byChannel/_count?channel=sms&_lineStart=@iKTZ2q3IiSEDqZ5Nw1vdoGnQCqF-8DAUJRaVwR9obqqTxhMy"
    },
    "serverSidePagination": true
}
```

**count** ノードのURLに対してGET リクエストを実行し、結果の数を取得します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/byChannel/_count?channel=sms&_lineStart=@iKTZ2q3IiSEDqZ5Nw1vdoGnQCqF-8DAUJRaVwR9obqqTxhMy \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

レコード数を返します。

```
{
    "count": 26
}
```

## ページネーション {#pagination}

デフォルトでは、25個のリソースがリストに読み込まれます。

**_lineCount** パラメーターを使用すると、応答にリストされるリソースの数を制限できます。  次に、**next** ノードを使用して、次の結果を表示できます。

>[!NOTE]
>
>ページネーション要求を実行するには、常に&#x200B;**next** ノードで返されるURL値を使用してください。
>
>**_lineStart** リクエストは計算され、**next** ノードで返されるURL内で常に使用する必要があります。

<br/>

***サンプルリクエスト***

プロファイルリソースの1つのレコードを表示するためのGET リクエストのサンプル。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile?_lineCount=1 \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

リクエストに応答し、**next** ノードを使用してページネーションを実行します。

```
{
    "content": [
        {
            "PKey": "<PKEY>",
            "firstName": "John",
            "lastName":"Doe",
            "birthDate": "1980-10-24",
            ...
        }
    ],
    "next": {
        "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/email?_lineCount=10&_
        lineStart=@Qy2MRJCS67PFf8soTf4BzF7BXsq1Gbkp_e5lLj1TbE7HJKqc"
    }
    ...
}
```

デフォルトでは、大量のデータを含むテーブルを操作する場合、**next** ノードは使用できません。 ページネーションを実行するには、呼び出しURLに&#x200B;**_forcePagination=true** パラメーターを追加する必要があります。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile?_forcePagination=true \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

>[!NOTE]
>
>テーブルが大きいと見なされるレコードの数は、Campaign Standard **XtkBigTableThreshold** オプションで定義されています。 デフォルト値は100,000 レコードです。
