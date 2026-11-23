---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '50'
ht-degree: 28%
---
# HttpClientRequest

HTTP クライアントクエリを実行する新しいオブジェクトを作成します。

```text
HttpClientRequest ( [URL ])
```

## パラメーター

クエリの受信者の&#x200B;**URL** URL。

## 戻り値

なし。

## 備考

FTP コマンドが失敗した場合は、例外が発生します。 例：

```javascript
var http = new HttpClientRequest("http://www.somewhere.com/login")

var buffer = new MemoryBuffer()
buffer.fromString("MyLogin" + ':' + "MyPassword", "iso-8859-1")

http.header["Authorization"] = "Basic " + buffer.toBase64()
http.header["Content-Type"] = "text/xml; charset=utf-8"

http.method = "SEARCH"
http.body = "<xml>any content</xml>"

http.execute()
       
```

## 機能

**クラスのメソッド：** [HttpClientRequest](c-httpclientrequest.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
