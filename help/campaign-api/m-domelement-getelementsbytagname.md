---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '75'
ht-degree: 21%
---
# getElementsByTagName

指定した名前を持つすべての子要素のリストを返します。

```text
getElementsByTagName (tagName)
```

## パラメーター

**tagName**&#x200B;検索された要素の名前。

## 戻り値

要素のリストを含むテーブル。

## 備考

このメソッドは、呼び出しごとに新しいテーブルを作成します。 したがって、複数の呼び出しを行うのではなく、テーブルをローカル変数に保持することをお勧めします。

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
