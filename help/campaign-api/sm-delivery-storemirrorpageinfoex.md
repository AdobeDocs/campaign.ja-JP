---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '67'
ht-degree: 22%
---
# StoreMirrorPageInfoEx

情報を追加して、一連の配信部分のミラーページを生成します。

```text
[ Number fatalError, String fatalErrorMsg ] = StoreMirrorPageInfoEx ( Number deliveryId, Boolean notification, Number partsCount, Number firstPartId, Number notificationId )
```

## パラメーター

**deliveryId**&#x200B;配信ID

**通知**&#x200B;これは通知ですか？

**partsCount**&#x200B;個のパーツ

**firstPartId**&#x200B;最初のパーツ ID

**notificationId**&#x200B;通知ID

## 戻り値

**fatalError**&#x200B;呼び出し元が引退を実行できないようにエラーコードを返します。 それ以外の場合、エラーは一時的なものになる可能性があります。

**fatalErrorMsg** エラーメッセージが「fatalError」エラーコードに関連付けられています。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
