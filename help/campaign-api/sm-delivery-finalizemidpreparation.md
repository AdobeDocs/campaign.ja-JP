---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '85'
ht-degree: 15%
---
# FinalizeMidPreparation

配信の分析をミッドソーシングモードで最終処理します。

```text
[ Number fatalError, String fatalErrorMsg ] = FinalizeMidPreparation ( Number deliveryId, Number errorCode, XML properties, Boolean retry )
```

## パラメーター

**deliveryId**&#x200B;配信ID

**errorCode** マーケティングデータベースの分析によって返されたエラーコード （メソッドレベルのエラーコードは使用されません）

更新する&#x200B;**プロパティ**&#x200B;配信プロパティ

**retry** メソッド呼び出しの再試行かどうかを指定します。

## 戻り値

**fatalError**&#x200B;呼び出し元が引退を実行できないようにエラーコードを返します。 それ以外の場合、エラーは一時的なものになる可能性があります。

**fatalErrorMsg** エラーメッセージが「fatalError」エラーコードに関連付けられています。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
