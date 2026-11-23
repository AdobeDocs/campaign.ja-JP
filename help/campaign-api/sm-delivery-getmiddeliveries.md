---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '76'
ht-degree: 19%
---
# GetMidDeliveries

ミッドソーシングモードで前回変更された配信のステータスを取得します。

```text
[ XML result, Date nextDate ] = GetMidDeliveries ( Date startDate, Number maxCount, Date emitterDate )
```

## パラメーター

**startDate**&#x200B;この日付以降の変更を取得します（ミッドソーシングサーバー上）。

**maxCount**&#x200B;同じ秒間に更新されなかった場合、取得する配信の最大数。

**emitterDate**&#x200B;発行サーバーの参照日。 配信の日付を調整するために使用します。

## 戻り値

**result**&#x200B;出力ドキュメント、配信リストが更新されました。

**nextDate**&#x200B;次の呼び出しの開始日。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
