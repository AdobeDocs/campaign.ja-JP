---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '34'
ht-degree: 35%
---
# RecomputeStats

配信アクションに関する配信およびトラッキングの統計を再計算します。

```text
RecomputeStats ( Number deliveryId, Number dirtyFlags )
```

## パラメーター

**deliveryId**&#x200B;配信ID

再計算する内容を説明する&#x200B;**dirtyFlags** Bit フィールド（「nms:delivery:dirtyFlags」列挙を参照）。

## 戻り値

なし。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
