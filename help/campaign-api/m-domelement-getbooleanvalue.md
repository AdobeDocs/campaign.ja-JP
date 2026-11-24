---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '96'
ht-degree: 16%
---
# getBooleanValue

指定されたXPathで参照されるボーリアンノード値を返します。

```text
getBooleanValue (xpath)
```

## パラメーター

**xpath** パス。

## 戻り値

true参照ノードのテキスト値が「true」または「1」の場合、falseは「false」または「0」です。

## 備考

XPathの構文は、XPath言語のサブセットのみを受け入れます。 値テストでは、大文字と小文字は区別されません。 パスの形式が正しくない場合や、値が有効なブール値でない場合は、例外が発生します。

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
