---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '39'
ht-degree: 43%
---
# DOMDocument

新しいドキュメントを作成します。

```text
DOMDocument (name [, namespaceURI ])
```

## パラメーター

**name** ドキュメント名。

**名前空間URI** ドキュメント名前空間URI。

## 戻り値

なし。

## 備考

例：

```javascript
var doc = new DOMDocument("test")
var doc2 = new DOMDocument("html", "http://www.w3.org/1999/xhtml")
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
