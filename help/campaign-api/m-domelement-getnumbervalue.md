---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '75'
ht-degree: 21%
---
# getNumberValue

指定されたXPathで参照されるデジタルノード値を返します。

```text
getNumberValue (xpath)
```

## パラメーター

**xpath** パス。

## 戻り値

デジタル値は、参照されているノードに対応します。

## 備考

XPathの構文は、XPath言語のサブセットのみを受け入れます。 パスの形式が正しくない場合や、値が有効な数値でない場合は、例外が発生します。

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
