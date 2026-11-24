---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '42'
ht-degree: 33%
---
# GetDlStatusAndLogs

ジャーナルと配信ステータスから最新ログを取得します。

```text
[ Number deliveryState, XML returnLogs ] = GetDlStatusAndLogs ( Number deliveryId, Number lastLogId )
```

## パラメーター

**deliveryId**&#x200B;配信ID

前回の呼び出しで返された最後のジャーナルエントリの&#x200B;**lastLogId**&#x200B;識別子

## 戻り値

**deliveryState**&#x200B;配信ステータス

**returnLogs** ログメッセージ

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
