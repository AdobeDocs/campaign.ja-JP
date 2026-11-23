---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '34'
ht-degree: 26%
---
# ExecCommand

配信に対してコマンドを実行します。

```text
Number newState = ExecCommand ( String deliveryId, String command )
```

## パラメーター

**deliveryId**&#x200B;配信ID

**command** コマンド名（&#39;play&#39;、&#39;pause&#39;または&#39;stop&#39;）

## 戻り値

コマンド実行後の&#x200B;**newState**&#x200B;配信ステータス

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
