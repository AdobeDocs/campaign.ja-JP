---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '63'
ht-degree: 26%
---
# fromXMLString

XML文字の文字列から新しい文書を作成します。

```text
fromXMLString (string)
```

## パラメーター

**文字列** XML文字の文字列。

## 戻り値

なし。

## 備考

引数が有効なXML ドキュメントでない場合、例外が発生します。 この関数は、DOMDocument クラスに適用されます。 例：

```javascript
var doc = DOMDocument.fromXMLString(
    '<?xml version="1.0" encoding="ISO-8859-1"?>' +
    '<form name="address" namespace="nms" colcount="2"/>')
```

## 機能

**クラスのメソッド：** [DOMDocument](c-domdocument.md)

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
