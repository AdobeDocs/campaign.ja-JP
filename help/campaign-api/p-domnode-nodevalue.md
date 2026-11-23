---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '79'
ht-degree: 20%
---
# nodeValue

ノード値。 値はノードのタイプによって異なります。

```text
nodeValue
```

## 備考

このプロパティには、読み取り権限と書き込み権限でアクセスできます。 ワークフローのクエリアクティビティから件名を取得し、追加データに追加する例：

```javascript
      Substring(NodeValue('/delivery/mailParameters/subject/text()',data), 1, 255)
```

ワークフローのエンリッチメントアクティビティから件名を取得する例：

```javascript
      Substring(NodeValue('/delivery/mailParameters/subject/text()',[target/data]), 1, 255)
```

## 機能

**クラスのプロパティ：** [DOMNode](c-domnode.md)

**読み取り専用：**

はい

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
