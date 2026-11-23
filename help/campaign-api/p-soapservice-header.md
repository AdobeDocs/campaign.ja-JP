---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '50'
ht-degree: 36%
---
# ヘッダー

SOAP ヘッダーにコピーされた文字列の略語。

```text
header
```

## 備考

SOAP・サン・ヴェリフィケーションの拡張性を尊重する人々 例：

```javascript
      var cnx = new HttpSoapConnection(result.serverURL, "utf-8", HttpSoapConnection.SOAP_11)
var service = new SoapService(cnx, "urn:partner.soap.sforce.com")
service.header = "<ns1:SessionHeader xmlns:ns1='urn:partner.soap.sforce.com'><ns1:sessionId>123456</ns1:sessionId></ns1:SessionHeader>"
```

## 機能

**クラスのプロパティ：** [SoapService](c-soapservice.md)

**読み取り専用：**

いいえ

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
