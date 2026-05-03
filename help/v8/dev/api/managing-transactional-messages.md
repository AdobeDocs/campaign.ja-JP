---
title: トランザクションメッセージの管理
description: APIを使用してトランザクションメッセージを管理する方法について説明します。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 00d39438-a232-49f1-ae5e-1e98c73397e3
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
workflow-type: tm+mt
source-wordcount: '744'
ht-degree: 1%

---

# トランザクションメッセージの管理 {#managing-transactional-messages}

>[!AVAILABILITY]
>
>現時点では、メールとSMS チャネルでREST APIを使用したトランザクションメッセージを利用できます。 トランザクションイベントでのみ使用できます（エンリッチメントデータは、Adobe Campaign V8の動作と同様に、ペイロード経由でのみ使用できます）。

トランザクションイベントを作成して公開したら、このイベントのトリガーをweb サイトに統合する必要があります。

例えば、顧客のひとりがカート内の商品を購入する前にweb サイトを離れるたびに、「カート放棄」イベントがトリガーされるようにします。 これを行うには、Web開発者として、REST トランザクションメッセージ APIを使用する必要があります。

1. POST メソッドに従ってリクエストを送信します。これにより、トランザクションイベント [&#128279;](#sending-a-transactional-event)の送信がトリガーされます。
1. POST リクエストへのレスポンスにはプライマリキーが含まれており、GET リクエストを通じて1つまたは複数のリクエストを送信できます。 次に、[&#x200B; イベントステータス &#x200B;](#transactional-event-status)を取得できます。

## トランザクションイベントの送信 {#sending-a-transactional-event}

トランザクションイベントは、次のURL構造を持つPOST リクエストを通じて送信されます。

```
POST https://mc.adobe.io/<ORGANIZATION>/campaign/<transactionalAPI>/<eventID>
```

* **&lt;組織>**：個人組織ID。 [この節](must-read.md)を参照してください。

* **&lt;transactionalAPI>**: トランザクションメッセージ API エンドポイント。

  トランザクションメッセージ API エンドポイントの名前は、インスタンス設定によって異なります。 「mc」の後に個人組織IDが続く値に対応します。 「geometrixx」を組織IDとするGeometrixxの会社の例を見てみましょう。 この場合、POST リクエストは次のようになります。

  `POST https://mc.adobe.io/geometrixx/campaign/mcgeometrixx/<eventID>`

* **&lt;eventID>**：送信するイベントのタイプ。 このIDは、イベント設定の作成時に生成されます

### POST リクエストヘッダー

リクエストには、「Content-Type: application/json」ヘッダーを含める必要があります。

文字セット （例：**utf-8**）を追加する必要があります。 この値は、使用しているREST アプリケーションによって異なります。

```
-X POST \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>' \
-H 'Content-Type: application/json;charset=utf-8' \
-H 'Content-Length:79' \
```

### POST リクエスト本文

イベントデータはJSON POST本文に含まれます。 イベント構造は、その定義によって異なります。

イベントにリンクされたトランザクションメッセージの送信を管理するために、次のオプションパラメーターをイベントコンテンツに追加できます。

* **有効期限** （オプション）：この日付以降、トランザクションイベントの送信はキャンセルされます。
* **scheduled** （オプション）：この日付から、トランザクションイベントが処理され、トランザクションメッセージが送信されます。

>[!NOTE]
>
>「有効期限」パラメーターと「スケジュール済み」パラメーターの値は、ISO 8601形式に従います。 ISO 8601は、日付と時刻を区切るために大文字の「T」を使用することを指定します。 ただし、読みやすくするために、入力または出力から削除できます。

### 通信チャネルのパラメーター

使用するチャネルに応じて、ペイロードには次のパラメーターを含める必要があります。

* メールチャネル：「mobilePhone」
* SMS チャネル：「メール」

ペイロードに「mobilePhone」のみが含まれている場合、SMS通信チャネルがトリガーされます。 ペイロードに「電子メール」のみが含まれている場合、電子メールコミュニケーションチャネルがトリガーされます。

次の例は、SMS通信がトリガーされるペイロードを示しています。

```
curl --location 'https://mc.adobe.io/<ORGANIZATION>/campaign/mcAdobe/EVTcartAbandonment' \
--header 'Authorization: Bearer <ACCESS_TOKEN>' \
--header 'Cache-Control: no-cache' \
--header 'X-Api-Key: <API_KEY>' \
--header 'Content-Type: application/json;charset=utf-8' \
--header 'Content-Length: 79' \
--data '
{
  "mobilePhone":"+9999999999",
  "scheduled":"2017-12-01 08:00:00.768Z",
  "expiration":"2017-12-31 08:00:00.768Z",
  "ctx":
  {
    "cartAmount": "$ 125",
    "lastProduct": "Leather motorbike jacket",
    "firstName": "Jack"
  }
}'
```

ペイロードに「電子メール」と「携帯電話」の両方が含まれている場合、デフォルトの通信方法は電子メールになります。 両方のフィールドが存在する場合にSMSを送信するには、「wishedChannel」パラメーターを使用して、ペイロードでSMSを明示的に指定する必要があります。

### POST リクエストへの応答

POST応答は、作成時のトランザクションイベントステータスを返します。 現在のステータス（イベントデータ、イベントステータスなど）を取得するには、GET リクエストでPOST プライマリから返されるレスポンス キーを使用します。

`GET https://mc.adobe.io/<ORGANIZATION>/campaign/<transactionalAPI>/<eventID>/`

<br/>

***サンプルリクエスト***

POST リクエストを使用してイベントを送信します。

```
-X POST https://mc.adobe.io/<ORGANIZATION>/campaign/mcAdobe/EVTcartAbandonment \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>' \
-H 'Content-Type: application/json;charset=utf-8' \
-H 'Content-Length:79'

{
  "
  
  
  ":"test@example.com",
  "scheduled":"2017-12-01 08:00:00.768Z",
  "expiration":"2017-12-31 08:00:00.768Z",
  "ctx":
  {
    "cartAmount": "$ 125",
    "lastProduct": "Leather motorbike jacket",
    "firstName": "Jack"
  }
}
```

POST リクエストへの応答。

```
{
  "PKey":"<PKEY>",
  "ctx":
  {
    "cartAmount": "",
    "lastProduct": "",
    "firstName": ""
  }
  "email":"",
  "scheduled":"2017-12-01 08:00:00.768Z",
  "expiration":"2017-12-31 08:00:00.768Z",
  "href": "mcAdobe/EVTcartAbandonment/<PKEY>",
  "serverUrl":" https://myserver.com ",
  "status":"pending",
  "type":""
}
```

### トランザクションイベントステータス {#transactional-event-status}

応答の「ステータス」フィールドでは、イベントが処理されたかどうかを確認できます。

* **保留中**: イベントは保留中です。イベントは、トリガーされたばかりのときにこのステータスになります。
* **処理**: イベントは保留中の配信です。メッセージに変換され、メッセージを送信しています。
* **一時停止**: イベントプロセスを一時停止しています。 このデータは処理されなくなりましたが、Adobe Campaign データベースのキューに保持されます。
* **処理済み**: イベントは処理され、メッセージは正常に送信されました。
* **ignored**：通常、アドレスが強制隔離されている場合、配信によってイベントが無視されました。
* **deliveryFailed**: イベントの処理中に配信エラーが発生しました。
* **routingFailed**：ルーティング フェーズが失敗しました。これは、例えば、指定されたイベントのタイプが見つからないときに発生する可能性があります。
* **tooOld**: イベントを処理する前に有効期限が切れました。これは、送信が複数回失敗した場合（この結果、イベントが最新ではなくなった場合）や、サーバーが過負荷になった後にイベントを処理できなくなった場合など、様々な理由で発生する可能性があります。
