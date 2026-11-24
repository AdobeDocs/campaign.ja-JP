---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '45'
ht-degree: 6%
---
# DeployTriggerMessageSingle

実行インスタンスでトランザクションメッセージを公開します。 公開が成功した場合はtrueを返し、成功しなかった場合はfalseを返します。

```text
Boolean isSuccess = DeployTriggerMessageSingle ( Number deliveryId, Boolean localPublish )
```

## パラメーター

デプロイする配信の&#x200B;**deliveryId** ID

**localPublish** コントロールインスタンスでのみ公開しますか？

## 戻り値

**isSuccess**&#x200B;の公開が完了しました

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
