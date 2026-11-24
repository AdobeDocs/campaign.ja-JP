---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '52'
ht-degree: 30%
---
# toDocument

このバッファーのテキストコンテンツからXML ドキュメントを返します。

```text
toDocument ( [codePage ])
```

## パラメーター

**codePage**&#x200B;使用済みの文字ページをコーディングする整数。 デフォルトでは、MemoryBuffer.CODEPAGE\_UTF8。

## 戻り値

[DOMDocument](c-domdocument.md)型オブジェクト。

## 機能

**クラスのメソッド：** [MemoryBuffer](c-memorybuffer.md)

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
