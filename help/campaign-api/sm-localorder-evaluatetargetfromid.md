---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '51'
ht-degree: 5%
---
# EvaluateTargetFromId

注文にリンクされたキャンペーン配信ごとにキャンペーンターゲティングを評価します。 この評価は、オペレーター権限を使用して注文する場合と、ローカルキャンペーンが作成される前に実行されます。

```text
XML result = EvaluateTargetFromId ( Number orderId )
```

## パラメーター

**orderId**&#x200B;注文ID。

## 戻り値

**result** キャンペーン配信のそれぞれのカウントの結果。

## 機能

**スキーマ：** [nms:localOrder](s-nms-localorder.md)

**静的：**

はい
