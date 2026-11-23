---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '117'
ht-degree: 15%
---
# GetTrackingLogs

リダイレクトおよび web トラッキングサービスにより生成されるトラッキングログを収集できます。

```text
[ String pointer, Number logCount, String logs, Date srvDate ] = GetTrackingLogs ( String instance, String dbId, Number version, String pointer, Number logCount )
```

## パラメーター

**インスタンス**&#x200B;短いID

配信を実行する顧客の&#x200B;**dbId** データベース ID

**バージョン** トラッキングログのバージョン

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
