---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '68'
ht-degree: 25%
---
# addHeader

HTTP ヘッダーを追加します

```text
addHeader (headerName, headerValue)
```

## パラメーター

**headerName**&#x200B;文字列。HTTP ヘッダーの名前です。

**headerValue**&#x200B;文字列。HTTP ヘッダーの内容です。

## 戻り値

なし。

## 備考

この方法で指定されたヘッダーは、SOAP呼び出し中にデフォルトのヘッダーよりも優先されます。 例：

```javascript
      var cnx = new HttpSoapConnection("http://localhost/test/Service1.asmx");
var memBuf = new MemoryBuffer();
memBuf.fromString("rico:pass@word1")
cnx.addHeader("Authorization","Basic " + memBuf.toBase64());
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
