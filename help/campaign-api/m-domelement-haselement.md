---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '72'
ht-degree: 22%
---
# hasElement

指定された条件を検証して、要素に子要素があるかどうかをテストします。

```text
hasElement (tagName [, attrName ] [, attrValue ])
```

## パラメーター

**tagName**&#x200B;検索された要素の名前。

**attrName**&#x200B;特定の値を検証する必要がある属性の名前。

**attrValue**&#x200B;属性値。

## 戻り値

指定されたデータを検証して要素に子がある場合はtrue、それ以外の場合はfalse。

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
