---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '57'
ht-degree: 26%
---
# ヘッダー

すべてのHTTP ヘッダーを含むオブジェクト。

```text
header
```

## 備考

プロパティの名前では、大文字と小文字は区別されません。 例：

```javascript
      var http = new HttpClientRequest("http://www.google.com/")
http.execute()
var response = http.response
for(var i in response.header)
  logInfo("header[" + i + "] => " + response.header[i])
    
```

同じ名前の複数のヘッダーを復元するには、ヘッダープロパティではなく[headers](p-httpclientresponse-headers.md) プロパティを使用します。

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
