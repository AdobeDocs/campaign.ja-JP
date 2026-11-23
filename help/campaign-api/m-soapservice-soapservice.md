---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '49'
ht-degree: 34%
---
# SoapService

Web サービスの関数を呼び出すサービスを作成します。

```text
SoapService (cnx, namespace)
```

## パラメーター

**cnx** （[HttpSoapConnection](c-httpsoapconnection.md)） HTTP接続。

サービスの&#x200B;**名前空間**&#x200B;名前空間。

## 戻り値

なし。

## 備考

例：

```javascript
      var cnx = new HttpSoapConnection("http://localhost/nl/jsp/soaprouter.jsp", "utf-8", 0)
var session = new SoapService(cnx, "xtk:session")
```

## 機能

**クラスのメソッド：** [SoapService](c-soapservice.md)

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
