---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '47'
ht-degree: 21%
---
# SubmitMidSourcing

ミッドソーシングモードで配信を送信。

```text
[ Number remoteId, Number remoteMatchId ] = SubmitMidSourcing ( XML delivery, XML routingMatch, String folderName )
```

## パラメーター

配信を表す&#x200B;**配信** ドキュメント。

**routingMatch**&#x200B;は使用されていません

**folderName**&#x200B;完全なフォルダー名（送信者データベース内）。

## 戻り値

**remoteId**&#x200B;受信者データベース内の配信の識別子。

**remoteMatchId**&#x200B;は使用されていません

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
