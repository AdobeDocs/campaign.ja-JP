---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '52'
ht-degree: 32%
---
# importNode

別のドキュメントからノードコピーを作成します。

```text
importNode (importedNode, deep)
```

## パラメーター

**importedNode** Source ノード。

**deep**&#x200B;完全なノードをコピーする必要がある場合はtrue、それ以外の場合はfalse。

## 戻り値

ノードのコピー。

## 備考

例：

```javascript
var result = doc.importNode(rcpResult, true);
doc.root.appendChild(result);
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
