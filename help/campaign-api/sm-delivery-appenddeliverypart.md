---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '82'
ht-degree: 13%
---
# AppendDeliveryPart

作成中の配信にパートを追加します。

```text
[ Number deliveryPartId, Number fatalError, String fatalErrorMsg ] = AppendDeliveryPart ( XML deliveryPart, Boolean retry )
```

## パラメーター

**deliveryPart**&#x200B;配信部分（または配信部分のコレクション）を表すドキュメント。

**再試行**&#x200B;この配信部分を送信するための新しい試行であるかどうかを指定します。

## 戻り値

**deliveryPartId** データベース内の配信部分の識別子（コレクションではない場合）。

**fatalError**&#x200B;呼び出し元が引退を実行できないようにエラーコードを返します。 それ以外の場合、エラーは一時的なものになる可能性があります。

**fatalErrorMsg** エラーメッセージが「fatalError」エラーコードに関連付けられています。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
