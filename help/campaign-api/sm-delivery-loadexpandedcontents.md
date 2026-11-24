---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '55'
ht-degree: 38%
---
# LoadExpandedContents

依存関係で前処理するコンポーネントのリストを読み込みます (パーソナライゼーションブロック、オプション、追加スクリプトオブジェクトなど)。

```text
XML material = delivery.LoadExpandedContents ( String ids ) const
```

## パラメーター

**ids** コンマで区切られたコンポーネント識別子のリスト （例：&#39;option\|NmsServer\_URL\|text,includeView\|UnsubscriptionLink\|html&#39;）。

## 戻り値

**material** コンテンツを「material」要素として返します。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

いいえ

**定数：**

はい

**キーのみ：**

いいえ
