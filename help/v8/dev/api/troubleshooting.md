---
title: API トラブルシューティング
description: Campaign Standard APIに関する一般的な問題について詳しく見る
role: Developer
level: Experienced
source-git-commit: a5436f7e1f1e4ad86157dfd8943d51bf852b747c
workflow-type: tm+mt
source-wordcount: '352'
ht-degree: 0%

---

# API トラブルシューティング {#troubleshooting}

* **Adobe.io コンソールにアクセスすると、次のエラーが表示されます。「Adobe I/O コンソールは、一部のエンタープライズアカウントでのみ使用できます。 アクセス権を持っている必要があると思われる場合は、システム管理者にお問い合わせください。&quot;**

API キーを作成できるのは、管理対象の組織のみです。 このメッセージが表示され、API キーを作成し、組織の管理者の1人に依頼する場合。

* **Adobe.ioにリクエストを行うと、{&quot;error_code&quot;:&quot;403023&quot;,&quot;message&quot;:&quot;Profile is not valid&quot;}**&#x200B;が表示されます

つまり、特定のCampaign製品のIMS プロビジョニングに問題が発生しています。IMS チームはそれを修正する必要があります。

詳細を確認するには、トークンを使用してIMS APIを呼び出し、IMS プロファイルがどのように表示されるかを確認します。リクエストをルーティングするには、organization_idがAdobe.ioのURLに入力したものと同じprodCtxが必要です。
IMS プロビジョニングが見つからない場合は、修正する必要があります。

```
-X GET https://mc.adobe.io/{ORGANIZATION}/campaign/profileAndServices/profile \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

次のエラーが返されます。

```
{"error_code":"403023","message":"Profile is not valid"}
```

このリクエストでIMS プロファイルを確認します。

```
-X GET https://ims-na1.adobelogin.com/ims/profile/v1 \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

応答では、最初のGET リクエストでORGANIZATION_IDの値が同じである必要があります。

```
{
  "countryCode": "FR",
  "mrktPermEmail": null,
  "projectedProductContext": [
    {
    "prodCtx": {
      "statusCode": "ACTIVE",
      "ident": "ZQ9FRQK7BF09YXAESFY9DDQP1G",
      "modDts": 1448307260000,
      "organization_id": "actest",
      "owningEntity": "6096892F54B5819E0A4C98A2@AdobeOrg",
      "serviceCode": "dma_tartan",
      "label": "Adobe Marketing Cloud",
      "serviceLevel": "standard",
      "createDts": 1421181343000,
      "deal_id": " "
      }
    }
  ]
}
```

* **Adobe.ioにリクエストを行うと、{&quot;code&quot;:500, &quot;message&quot;:&quot;Oops&quot;が表示されます。 エラーが発生しました。 URIを確認して、もう一度試してください。&quot;}**

Adobe.ioが無効なURIを宣言します。リクエストしているURIが無効である可能性があります。 Adobe.ioでCampaign サービスを選択すると、使用可能なorganization_idのリストを含むピッカーが表示されます。 選択したものがURLに入れたものであることを確認する必要があります。

* **Adobe.ioにリクエストを行うと、{&quot;error_code&quot;:&quot;401013&quot;,&quot;message&quot;:&quot;Oauth トークンが無効です&quot;}**&#x200B;が表示されます

トークンが無効（トークンの生成に使用される不適切なIMS呼び出し）であるか、トークンの有効期限が切れています。

* **作成後にプロファイルが表示されない**

インスタンス設定に応じて、作成したプロファイルを&#x200B;**orgUnit**&#x200B;に関連付ける必要があります。 このフィールドを作成に追加する方法については、[このセクション ](creating-profiles-api.md)を参照してください。

<!--
 * (error duplicate key : quand tu crées un profile qui existe déjà , il faut faire un patch pour updater le profile plutôt qu'un POST)

With Curl
List all profiles

Create a profile

Update the mobilePhone attribute of a profile

API Calls on Service

GET the list of services
-->

<!--
How to find and use a filter?
Error codes:

* PAtch sur Age = message d'erreur :
500
Cannot update the 'age' property that is read-only
'age' property is not valid for the 'profile' resource.
-->

<!--
How to filter a list of subscribed profiles with available profile filters ? by date (by les filtres dispo sur la ressource) ?

Pattern classique :

recupérer la liste des subscriptions filtrées d'un profile
1) get sur profile
2) recup PKey
3) get sur PKey
4) get sur href des subscriptions

Comment savoir quel filtre appliquer ?

1) get sur metadata de profile
2) retourne description de la collection subscription
3) get sur la valeur du champ resTarget
4) get sur le href dans filters
5) retourne les filtres applicables sur l'url des data.
-->
