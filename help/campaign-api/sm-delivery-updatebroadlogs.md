---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '57'
ht-degree: 31%
---
# UpdateBroadLogs

配信ログのステータスを更新し、エラー処理を実行し、配信カウンターを更新します。

```text
UpdateBroadLogs ( Number deliveryId, XML logs, Boolean deliveryMustExist )
```

## パラメーター

**deliveryId**&#x200B;配信ID

更新するnms:broadLog レコードを含む&#x200B;**logs** コレクション （@id、@status、@eventDateおよび@lastModifiedを指定する必要があります）

**deliveryMustExist**&#x200B;無効な配信識別子に対してエラーを発生させるかどうかを指定します。

## 戻り値

なし。

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
