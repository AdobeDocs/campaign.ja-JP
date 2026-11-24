---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '141'
ht-degree: 16%
---
# HttpSoapConnection

SOAP サーバーへのHTTP接続を作成します。

```text
HttpSoapConnection (url [, codepage ] [, protocol ] [, async ])
```

## パラメーター

パスを含むサーバーの&#x200B;**url** URL。

**codepage** SOAP呼び出しのシリアル化のためのエンコーディング。 このオプションのパラメーターを使用すると、文字エンコーディングを指定できます。 デフォルトでは、エンコーディングはUTF-8です。 例：

* iso-8859-1
* utf-8
* utf-16

**protocol**&#x200B;使用されているSOAP プロトコルの種類。 このオプションのパラメーターを使用すると、使用するSOAP プロトコルを指定できます。デフォルトではSOAP\_11です。使用可能な値は次のとおりです。

* SOAP\_11: SOAP プロトコル 1.1.
* SOAP\_12: SOAP プロトコル 1.2.
* 0: Adobe Campaignの内部のSOAP プロトコル。

接続が非同期クエリを実行する宛先である場合、**async**&#x200B;のブール値はtrueに設定されます。 デフォルトではfalseに設定します。

## 戻り値

なし。

## 備考

例：

```javascript
      var cnx = new HttpSoapConnection("http://localhost/nl/jsp/soaprouter.jsp")
```

```javascript
      var cnx = new HttpSoapConnection("http://localhost/nl/jsp/soaprouter.jsp", "UTF-16", HttpSoapConnection.SOAP_11)
```

```javascript
      var cnx = new HttpSoapConnection("http://localhost/nl/jsp/soaprouter.jsp", "UTF-8", 0)
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
