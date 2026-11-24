---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '56'
ht-degree: 21%
---
# QueueNotification

配信テンプレートを参照している通知をキューに格納するリクエスト。

```text
QueueNotification ( String scenarioName, XML target )
```

## パラメーター

**scenarioName** テンプレートの内部名

**ターゲット**&#x200B;配信ターゲット母集団

## 戻り値

なし。

## 備考

このAPIは、Web アプリケーション/オンライン調査のコンテキストでのみ使用できます。 SubmitNotificationとは異なり、QueueNotificationはキューに入った通知に専用スレッドを使用します。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
