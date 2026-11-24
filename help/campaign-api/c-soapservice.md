---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '279'
ht-degree: 8%
---
# SoapService （クラス）

Web サービスでSOAP呼び出しを実行できます。

## 通話をブロック中

以下は典型的な使用例です。最初にコネクションを作成し、次にこのコネクションを使用するサービスを作成してから、最後にこのサービスのSOAP メソッドを宣言する必要があります。 SOAP メソッドは、サービスオブジェクトのJavaScript メソッドの形式で公開されます。

```text
var cnx = new HttpSoapConnection("http://localhost/nl/jsp/soaprouter.jsp", "utf-8", 0) var session = new SoapService(cnx, "xtk:session") session.addMethod("GetOption", "xtk:session#GetOption", ["token", "string", "name", "string"], ["value", "string", "type", "byte"]) var result = session.GetOption("admin/", "NmsBroadcast_DefaultProvider") var value = result[0] var type = result[1] logInfo("Value = " + value) logInfo("Type = " + type)
```

## 非ブロッキング呼び出し

非ブロッキング（非同期）呼び出し、つまりSOAP クエリをサーバに対して実行し、結果を待たずにスクリプトを実行し続けることができます。 ブロッキングモードとの主な違いは次のとおりです。

* 接続は非同期モードで作成する必要があります

* &#x200B;

  [開始](m-soapservice-start.md)

  部門：

* 定義a

  [完了](p-soapservice-complete.md)

  応答が受信されたときに呼び出されるサービス上の関数。

* null

  [SoapService.wait](m-soapservice-wait.md)

  関数は、一連のクエリの処理が終了するのを待つために使用されます。

次のスクリプトの例では、3つの接続を同時に開くことで、SOAPがAdobe Campaign サーバーに対して一連の「GetOption」呼び出しを行います。

```text
var list = [ "XtkDatabaseId", "XtkKey", "WdbcTimeZone", "NmsServer_URL", "NmsBroadcast_DefaultProvider"] var requests = [] function complete(service, result, context, status) { if( status == "success" ) logInfo("option " + context + ": value = " + result[0]) else if( status == "fault" ) logInfo("option " + context + ": fault = " + result.message) else logInfo("option " + context + ": " + status) sendNext(service) } function createService() { // Create the connection var cnx = new HttpSoapConnection("http://localhost/nl/jsp/soaprouter.jsp", "utf-8", 0, true) // Create the service var service = new SoapService(cnx, "xtk:session") service.addMethod("GetOption", "xtk:session#GetOption", ["token", "string", "name", "string"], ["value", "string", "type", "byte"]) // Change the timeout to 5 seconds service.timeout = 5000 // Setup the callback function service.complete = complete return service } function sendNext(service) { if( list.length == 0) return // Pick an item from the list var name = list.shift() // Use the name as context var context = name // Send the request var req = service.start(context, "GetOption", "admin/", name) // Add the request to the wait queue requests.push(req) } // Open 3 connections and start a request on each one sendNext(createService()) sendNext(createService()) sendNext(createService()) SoapService.wait(requests) logInfo("Done.")
```

## メソッド

| メソッド | 説明 |
| --- | --- |
| [SoapService](m-soapservice-soapservice.md) | Web サービスの関数を呼び出すサービスを作成します。 |
| [addMethod](m-soapservice-addmethod.md) | サービス上の関数を宣言します。 |
| [破棄](m-soapservice-dispose.md) | オブジェクトで使用されるリソースを解放します。 |
| [開始](m-soapservice-start.md) | 非同期モードでクエリを起動します。 |
| [待機](m-soapservice-wait.md) | 非同期SOAP クエリのリストの終了を待ちます。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [完了](p-soapservice-complete.md) | 非同期クエリが終了したときに呼び出す関数。 |
| [&#x200B; ヘッダー](p-soapservice-header.md) | SOAP ヘッダーにコピーされた文字列の略語。 |
| [&#x200B; タイムアウト &#x200B;](p-soapservice-timeout.md) | 非同期クエリの場合の最大待機時間（ミリ秒単位）。 このパラメーターが定義されていない場合、待機時間は5分です。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* 配信メッセージ
* タイポロジルール
* 読み込み
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
