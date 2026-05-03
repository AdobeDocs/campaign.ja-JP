---
title: APIを使用したプロファイルの作成
description: APIを使用してプロファイルを作成する方法について詳しくは、こちらをご覧ください。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 69e8d034-6bdd-4b82-bcd7-1ef4be0a59b3
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
workflow-type: tm+mt
source-wordcount: '112'
ht-degree: 0%

---

# APIを使用したプロファイルの作成 {#creating-profiles-api}

プロファイルの作成は、プロファイルリソースに対して&#x200B;**POST** リクエストを使用して実行されます。

>[!CAUTION]
>
>作成したプロファイルに<b>orgUnit</b>を関連付ける場合は、このフィールドでプロファイルリソースを拡張し、拡張機能の公開後、<b>ProfileAndServicesExt</b> エンドポイントでPOST リクエストを実行する必要があります。
>
>プロファイルのリソース拡張機能について詳しくは、<a href="https://helpx.adobe.com/campaign/standard/administration/using/organizational-units.html#partitioning-profiles">Campaign ドキュメント </a>を参照してください。

<br/>

***サンプルリクエスト***

「john.doe@mail.com」という電子メールを使用してプロファイルを作成するPOST リクエストのサンプル。

```
-X POST https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>' \
-i
-d '{"email":"john.doe@mail.com"}'
```

新しく作成したプロファイルを「john.doe@mail.com」電子メールアドレスで返します。

```
{
    "PKey": "<PKEY>",
    "firstName": "John",
    "lastName":"Doe",
    "birthDate": "1980-10-24",
    "email": "john.doe@mail.com",
    ...
}
```
