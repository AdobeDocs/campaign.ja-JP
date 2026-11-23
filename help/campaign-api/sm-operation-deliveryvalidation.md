---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '36'
ht-degree: 27%
---
# DeliveryValidation

キャンペーンでの配信の承認。

```text
DeliveryValidation ( Number deliveryId, Number type, Boolean refused, String comment )
```

## パラメーター

**deliveryId**&#x200B;配信ID

**type**&#x200B;承認タイプ （targeting=0, content=1, budget=2, extraction=3）

**拒否**&#x200B;却下

**comment** コメント

## 戻り値

なし。

## 機能

**スキーマ：** [nms:operation](s-nms-operation.md)

**静的：**

はい
