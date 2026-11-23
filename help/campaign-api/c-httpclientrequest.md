---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '309'
ht-degree: 6%
---
# HttpClientRequest （クラス）

HttpClientRequest オブジェクトを使用すると、特定の操作をHTTP クライアントとして実行できます。

例：

```text
var req = new HttpClientRequest("http://www.somewhere.com/login") var buffer = new MemoryBuffer() buffer.fromString("MyLogin" + ':' + "MyPassword", "iso-8859-1") req.header["Authorization"] = "Basic " + buffer.toBase64() req.header["Content-Type"] = "text/xml; charset=utf-8" req.method = "SEARCH" req.body = "<xml>any content</xml>" req.execute()
```

## 「キープ・アライブ」

オブジェクトは、標準モードとキープモードの2種類のモードで使用できます。 標準モードでは、1つのクエリを送信できます。接続をオープン状態に保ちながら、複数のクエリを送信できます。 オブジェクトのステータスは、メソッドの使用順序によって異なります。 connect （） メソッドが呼び出されると、オブジェクトは「keep alive」モードに切り替わります。 例

```text
var req = new HttpClientRequest("http://evc-cit.info/cgi-bin/cit042/timeofday.cgi") req.connect() // Now the object is in keep-alive mode, we can sand many requests using // the same connection // Request ten times the time of the cgi var i = 0 while ( i < 10 ) { req.execute() var response = req.reponse i++ } req.disconnect()
```

## 非同期クエリ

デフォルトでは、クエリはブロッキングモードで実行されます。つまり、

[実行](m-httpclientrequest-execute.md)

関数は、クエリが送信され、応答が受信された場合にのみ制御を返します。 非同期モードでクエリを実行することもできます。 この場合、

[実行](m-httpclientrequest-execute.md)

関数はすぐに制御を返し、応答が受信されると関数が呼び出されます。 これにより、複数のクエリを同時に実行できます。 次のプログラムは、同時に3つの接続を開く一連のHTTP アップロードを実行する方法を示す完全な例です。各アップロードは、最後のアップロードが終了すると開始されます。

```text
var list = [ "http://www.adobe.com/jp/", "http://www.google.com/", "http://www.mozilla.org/", "http://www.linux.org/", "http://www.postgresql.org/"] var requests = [] var complete = function(req, context, status) { if( status == "success" ) logInfo("Receiving " + context + ": " + req.url + ": code = " + req.response.code) else logWarning("Error " + context + ": " + req.url + ": " + status) sendNext(context) } function sendNext(context) { // Repeat until the first execute() passes while( list.length != 0 ) { // Pick one URL from the list var url = list.shift() var req = new HttpClientRequest(url) req.complete = complete try { req.execute(false, true, context, 5000) logInfo("Sending " + url) requests.push(req) return } catch(e) { // Log a message and pick up next item from list logWarning("Failed to send " + url) } } } // Start 3 requests sendNext(1) sendNext(2) sendNext(3) // Wait until all requests are completed HttpClientRequest.wait(requests) logInfo("Finished.")
```

## メソッド

| メソッド | 説明 |
| --- | --- |
| [HttpClientRequest](m-httpclientrequest-httpclientrequest.md) | HTTP クライアントクエリを実行する新しいオブジェクトを作成します。 |
| [connect](m-httpclientrequest-connect.md) | HTTP接続を開き、オブジェクトを「keep-alive」モードに渡します |
| [切断](m-httpclientrequest-disconnect.md) | オブジェクトのHTTP接続を「キープアライブ」モードで閉じます。 |
| [実行](m-httpclientrequest-execute.md) | HTTP クエリを実行します。 |
| [待機](m-httpclientrequest-wait.md) | 非同期クエリのリストが終了するまで待ちます。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [body](p-httpclientrequest-body.md) | HTTP クエリの本文。 |
| [完了](p-httpclientrequest-complete.md) | 非同期クエリが終了したときに呼び出す関数。 |
| [&#x200B; ヘッダー](p-httpclientrequest-header.md) | ヘッダーのHTTP ヘッダーを含むJavaScript オブジェクト。 |
| [&#x200B; メソッド &#x200B;](p-httpclientrequest-method.md) | 文字列の形式のHTTP メソッド |
| [回答](p-httpclientrequest-response.md) | HTTP クエリの応答。 これはHttpClientResponse タイプのオブジェクトです |
| [url](p-httpclientrequest-url.md) | リモートサーバーのアドレス。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
