---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '82'
ht-degree: 15%
---
# GetMidBroadLogs

ミッドソーシングモードで最後に変更された配信ログを取得します。

```text
[ XML result, Date nextDate ] = GetMidBroadLogs ( Date startDate, Number logCount, Date emitterDate )
```

## パラメーター

**startDate**&#x200B;この日付以降に変更されたログを取得します（ミッドソーシングサーバー上）。

**logCount**&#x200B;取得するログの最大数（同じ秒以内に更新されない場合）。

**emitterDate**&#x200B;発行サーバーからの参照日。 配信ログの日付を調整するために使用されます。

## 戻り値

**result**&#x200B;出力ドキュメント、配信ログのリスト。

**nextDate**&#x200B;最初に取得したログの日付（startDateより大きい）。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
