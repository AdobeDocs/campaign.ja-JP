---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '80'
ht-degree: 17%
---
# 本文

MemoryBuffer オブジェクトの形式のHTTP応答の本文。

```text
body
```

## 備考

応答本文のエンコーディングには、[codePage](p-httpclientresponse-codepage.md) プロパティからアクセスできます。 HTTP応答の本文は、[MemoryBuffer](c-memorybuffer.md) オブジェクトの形式で指定されます。 したがって、[MemoryBuffer](c-memorybuffer.md)に適用できるすべてのメソッドは、HTTP応答の本文に適用されます。 例：

```javascript
      var http = new HttpClientRequest("http://www.google.com/")
http.execute()
var response = http.response
if( response.code != 200 )
  throw "HTTP request failed with " + response.message
var content = response.body.toString(response.codePage)
```

## 機能

**クラスのプロパティ：** [HttpClientResponse](c-httpclientresponse.md)

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
