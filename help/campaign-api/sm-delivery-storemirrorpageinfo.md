---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '63'
ht-degree: 23%
---
# StoreMirrorPageInfo

情報を追加して、一連の配信部分のミラーページを生成します。

```text
[ Number fatalError, String fatalErrorMsg ] = StoreMirrorPageInfo ( Number deliveryId, Number partsCount, Number firstPartId, Number lastPartId )
```

## パラメーター

**deliveryId**&#x200B;配信ID

**partsCount**&#x200B;個のパーツ

**firstPartId**&#x200B;最初のパーツ ID

**lastPartId**&#x200B;最後のパーツ ID

## 戻り値

**fatalError**&#x200B;呼び出し元が引退を実行できないようにエラーコードを返します。 それ以外の場合、エラーは一時的なものになる可能性があります。

**fatalErrorMsg** エラーメッセージが「fatalError」エラーコードに関連付けられています。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
