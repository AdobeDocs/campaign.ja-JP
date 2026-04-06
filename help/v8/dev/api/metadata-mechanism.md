---
title: メタデータのメカニズム
description: メタデータメカニズムについて詳しく見る。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 58ec0999-b28a-4198-8d57-729b074c6a6d
source-git-commit: a5436f7e1f1e4ad86157dfd8943d51bf852b747c
workflow-type: tm+mt
source-wordcount: '227'
ht-degree: 1%

---

# メタデータのメカニズム {#metadata-mechanism}

GET リクエストで&#x200B;**resourceType**&#x200B;を使用して、リソースメタデータを取得できます。

`GET /profileAndServices/resourceType/<resourceName>`

応答は、リソースからメインメタデータを返します（他のすべてのフィールドは記述的または内部的です）。

* **Content** ノードは、リソースのフィールドを返します。 **content** ノードの各フィールドには、次のフィールドがあります。

   * &quot;apiName&quot;: APIで使用される属性の名前。
   * &quot;type&quot;：これは上位レベルの型定義（文字列、数値、リンク、コレクション、列挙…）です。
   * &quot;dataPolicy&quot;: フィールドの値は、指定されたポリシールールに従う必要があります。 例えば、dataPolicy ルールが「email」に設定されている場合、値は有効な電子メールである必要があります。 PATCHまたはPOST中に、dataPolicyは値を確認したり、値を変換したりできます（smartCaseなど）。
   * &quot;category&quot;: クエリエディターのフィールドのカテゴリを指定します。
   * &quot;resType&quot;：これはテクニカルタイプです。

     値「link」または「collection」で「type」が完了した場合、resTarget値はリンクの対象となるリソースの名前です。
値「列挙」で「type」が完了すると、「values」フィールドが追加され、各列挙値が&#x200B;**values** ノードに詳細に表示されます。

* **Filters** ノードは、関連付けられたフィルターを取得するためのURLを返します。 フィルターについて詳しくは、[このセクション &#x200B;](sorting.md#filtering)の節を参照してください。

<!-- créer une section au même niveau sur les liens -->
<!--
dans l'exemple: birthdate, email +  mettre 2 liens : un de type 1-1 , 1-N
si on prend l'exemple de l'org unit, on aura un bon exemple lien
-->
<!-- plus reparler du node Data -->

<br/>

***サンプルリクエスト***

リソースに対してGET リクエストを実行します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/resourceType/profile \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

プロファイルリソースの完全な説明を返します。

```
{
...
"content": {
  "email": {...},
    ...
    },
"data": "/profileAndServices/profile/",
"filters": {
        "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/resourceType/<PKEY>"
    },
"help": "Identified profiles",
"href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile/metadata",
"label": "Profiles",
"mandatory": false,
"name": "profile",
"pkgStatus": "never",
"readOnly": false,
"schema": "nms:recipient",
"type": "item"
}
```
