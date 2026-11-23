---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '117'
ht-degree: 18%
---
# GetTrackingLogs4

投稿 4.00 フォーマットを使用して、リモートリダイレクトおよび web トラッキングサーバーによって生成されたトラッキングログを取得することを許可します。

```text
[ String pointer, Number logCount, String logs, Date srvDate ] = GetTrackingLogs4 ( String instance, String dbId, String pointer, Number logCount )
```

## パラメーター

**インスタンス**&#x200B;短いID

配信を実行する顧客の&#x200B;**dbId** データベース ID

ログを取得するログの&#x200B;**pointer**&#x200B;識別子（シリアル化されたint64）。

**logCount**&#x200B;要求のために取得するログの数（0はデフォルト値を意味します）、応答によって返されるログの数。

## 戻り値

ログを取得するログの&#x200B;**pointer**&#x200B;識別子（シリアル化されたint64）。

**logCount**&#x200B;要求のために取得するログの数（0はデフォルト値を意味します）、応答によって返されるログの数。

**logs** ログを取得しました

ログ取得リクエストの時点でのサーバーの&#x200B;**srvDate** GMT時間

## 機能

**スキーマ：** [nms:remoteTracking](s-nms-remotetracking.md)

**静的：**

はい
