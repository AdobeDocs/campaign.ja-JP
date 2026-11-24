---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '85'
ht-degree: 18%
---
# toBase64

ベース 64でエンコードされた文字列のバッファまたは一部を変換します。

```text
toBase64 ( [start ] [, length ])
```

## パラメーター

**start** バッファーの開始時に無視するバイト数。 最初のバイトは、値0 （デフォルト値）に対応します。

**length**&#x200B;変換するバイト数。 デフォルトでは、残りのすべてのバイトが考慮されます。

## 戻り値

ベース 64でエンコードされたバッファーの内容。

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
