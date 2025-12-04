---
title: メタデータのメカニズム
description: 詳しくは、メタデータメカニズムを参照してください。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 58ec0999-b28a-4198-8d57-729b074c6a6d
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
workflow-type: tm+mt
source-wordcount: '227'
ht-degree: 1%

---

# メタデータのメカニズム {#metadata-mechanism}

GET リクエストで **resourceType** を使用して、リソースのメタデータを取得できます。

`GET /profileAndServices/resourceType/<resourceName>`

応答は、リソースからメインメタデータを返します（他のすべてのフィールドは説明的または内部的です）。

* **コンテンツ** ノードは、リソースのフィールドを返します。 **content** ノードの各フィールドには、次のフィールドがあります。

   * 「apiName」:API で使用される属性の名前。
   * 「type」：これは、高レベルのタイプ定義（文字列、数値、リンク、コレクション、列挙など）です。
   * 「dataPolicy」：フィールドの値は、指定されたポリシールールに従う必要があります。 例えば、dataPolicy ルールが「email」に設定されている場合、値は有効なメールである必要があります。 PATCHまたは POST の実行中に、dataPolicy は値をチェックしたり、変換する値を変更したりできます（smartCase など）。
   * 「カテゴリ」：クエリエディターのフィールドのカテゴリを示します。
   * &quot;resType&quot;：これは技術的なタイプです。

     「type」の値が「link」または「collection」で完了した場合、resTarget の値は、リンクのターゲットとなるリソースの名前になります。
「type」に値「enumeration」が入力されている場合は、「values」フィールドが追加され、各列挙値について **values** ノードに詳しく記載されます。

* **Filters** ノードは、関連するフィルターを取得する URL を返します。 フィルターについて詳しくは、[ この節 ](sorting.md#filtering) を参照してください。

<!-- créer une section au même niveau sur les liens -->
<!-- dans l'exemple: birthdate, email +  mettre 2 liens : un de type 1-1 , 1-N
si on prend l'exemple de l'org unit, on aura un bon exemple lien -->
<!-- plus reparler du node Data -->

<br/>

***リクエストのサンプル***

リソースでGET リクエストを実行します。

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
