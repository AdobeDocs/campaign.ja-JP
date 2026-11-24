---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '83'
ht-degree: 19%
---
# getDateValue

指定されたXPathによるノード参照のdate+hour タイプ値を返します。

```text
getDateValue (xpath)
```

## パラメーター

**xpath** パス。

## 戻り値

参照されるノードの値に一致する日付タイプオブジェクト。

## 備考

XPathの構文は、XPath言語のサブセットのみを受け入れます。 パスの形式が正しくない場合、または値が有効な日付でない場合は、例外が発生します。

## 機能

**クラスのメソッド：** [DOMElement](c-domelement.md)

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
