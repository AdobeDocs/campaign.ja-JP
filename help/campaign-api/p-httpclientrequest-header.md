---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '74'
ht-degree: 20%
---
# ヘッダー

ヘッダーのHTTP ヘッダーを含むJavaScript オブジェクト。

```text
header
```

## 備考

ヘッダーオブジェクトのすべてのプロパティは、読み取り/書き込みモードでアクセスでき、列挙可能です。 ヘッダーオブジェクトの各所有者は、クエリのHTTP ヘッダーのエントリです。 プロパティ名では大文字と小文字は区別されません（HTTP ヘッダーの場合など）。 例：

```javascript
var http = new HttpClientRequest(url)

var buffer = new MemoryBuffer()
buffer.fromString(userName + ':' + password, "iso-8859-1")

http.header["Authorization"] = "Basic " + buffer.toBase64()
http.header["Content-Type"] = "text/xml; charset=utf-8"
http.header["Date"] = (new Date()).toGMTString()
//Note: http.header.Date == http.header.date

for( var i in http.header )
logInfo("header[" + i + "] => " + http.header[i])
```

## 機能

**クラスのプロパティ：** [HttpClientRequest](c-httpclientrequest.md)

**読み取り専用：**

はい

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
