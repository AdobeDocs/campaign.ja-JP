---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '53'
ht-degree: 5%
---
# EvaluateTarget

注文にリンクされたキャンペーン配信ごとにキャンペーンターゲティングを評価します。 この評価は、オペレーター権限を使用して注文する場合と、ローカルキャンペーンが作成される前に実行されます。

```text
XML result = EvaluateTarget ( XML order )
```

## パラメーター

注文情報を含む&#x200B;**order**&#x200B;要素。

## 戻り値

**result** キャンペーン配信のそれぞれのカウントの結果。

## 機能

**スキーマ：** [nms:localOrder](s-nms-localorder.md)

**静的：**

はい
