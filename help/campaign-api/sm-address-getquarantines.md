---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '96'
ht-degree: 10%
---
# GetQuarantines

最新の強制隔離を取得し、強制隔離を終了させます。

```text
[ XML result, Date nextDate, Boolean hasMore ] = GetQuarantines ( Date startDate, String pointerName, Number quarantineCount, Date callerDate )
```

## パラメーター

**startDate**&#x200B;この日付以降に変更された強制隔離を取得します。 空の場合は、ポインタ値が使用されます。

**pointerName**&#x200B;このポインター以降に変更された強制隔離を取得します（オプション）。

**quarantineCount**&#x200B;同じ秒間に更新されなかった場合に取得する強制隔離の最大数。

**callerDate**&#x200B;発信者の参照日。 強制隔離の日付参照を変更できます（オプション）。

## 戻り値

**result**&#x200B;出力ドキュメント、強制隔離のリスト。

**nextDate**&#x200B;最初の未取得の強制隔離の日付（startDateより厳密に高い）。

**hasMore**&#x200B;その場合、まだ取得する強制隔離が残っています。

## 機能

**スキーマ：** [nms:address](s-nms-address.md)

**静的：**

はい
