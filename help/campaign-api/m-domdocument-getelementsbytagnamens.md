---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '81'
ht-degree: 19%
---
# getElementsByTagNameNS

指定された名前と名前空間を持つすべてのドキュメント要素のリストを返します。

```text
getElementsByTagNameNS (namespaceURI, localName)
```

## パラメーター

**名前空間URI**&#x200B;名前空間URI。

**localName**&#x200B;検索した要素の名前。

## 戻り値

要素のリストを含むテーブル。

## 備考

このメソッドは、呼び出しごとに新しいテーブルを作成します。 したがって、複数の呼び出しを行うのではなく、テーブルをローカル変数に保持することをお勧めします。

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
