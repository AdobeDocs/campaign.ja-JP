---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '50'
ht-degree: 32%
---
# SubmitDelivery

シナリオからの配信の作成と送信 (内部名より)。

```text
Number deliveryId = SubmitDelivery ( String scenarioName, XML content )
```

## パラメーター

**scenarioName**&#x200B;配信テンプレートの内部名

テンプレートに追加する&#x200B;**content** XML コンテンツ

## 戻り値

**deliveryId**&#x200B;新しい配信の識別子（分析が失敗した場合でも返されます）

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
