---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '108'
ht-degree: 12%
---
# つながる

HTTP接続を開き、オブジェクトを「keep-alive」モードに渡します

```text
connect ( [hasProxy ] [, async ])
```

## パラメーター

**hasProxy** プロキシ HTTPを使用する必要がある場合は、ブール値をtrueに設定します。 デフォルトではfalseに設定されています。

接続が非同期クエリを実行する宛先である場合、**async**&#x200B;のブール値はtrueに設定されます。 デフォルトではfalseに設定します。

## 戻り値

なし。

## 備考

HTTP接続が失敗した場合は、例外が発生します。 応答プロパティは、実行関数の呼び出しが成功した後にのみ有効になります。 接続の使用が終わったら、disconnect （）を呼び出すことを忘れないでください。 例：

```javascript
// Mistake with the hostname gogle instead of google
var badHttp = new HttpClientRequest("www.gogle.fr");
try {
  badHttp.connect();
} catch (e) {
  // Here an exception has been raised
}

var goodHttp = new HttpClientRequest("www.google.fr");
try {
  goodHttp.connect();
} catch (e) {
  // No exeception raised
}
...
goodHttp.disconnect();
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
