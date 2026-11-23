---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '72'
ht-degree: 22%
---
# setHeader

HTTP ヘッダーを指定します。

```text
setHeader (headerName, headerValue)
```

## パラメーター

**headerName**&#x200B;文字列。HTTP ヘッダーの名前です。

**headerValue**&#x200B;文字列。HTTP ヘッダーの内容です。

## 戻り値

なし。

## 備考

SOAPの言語構造は、あらゆる面において重要です。 例：

```javascript
      var cnx = new HttpSoapConnection("http://localhost/test/Service1.asmx");
var memBuf = new MemoryBuffer();
memBuf.fromString("rico:pass@word1")
cnx.setHeader("Authorization","Basic " + memBuf.toBase64());
```

## 機能

**クラスのメソッド：** [HttpSoapConnection](c-httpsoapconnection.md)

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
