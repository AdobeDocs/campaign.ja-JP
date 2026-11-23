---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '90'
ht-degree: 18%
---
# fromJXON

JXON オブジェクトから新しいドキュメントを作成します。

```text
fromJXON (obj)
```

## パラメーター

**obj**&#x200B;作成するXML ドキュメントを表すJXON オブジェクト。

## 戻り値

なし。

## 備考

DOMDocumentまたはDOMElementをパラメーターとして渡す関数も、JXON オブジェクトを直接受け入れます。 この関数を使用して中間オブジェクトを作成する必要はありません。 オブジェクトが有効なJXON オブジェクトでない場合、例外が発生します。 この関数は、DOMDocument クラスに適用されます。 例：

```javascript
var doc = DOMDocument.fromJXON(
    {form : {name: "address", "namespace": "nms", colcount: 2}})
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
