---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '42'
ht-degree: 19%
---
# DumpInstanceStateEx

サーバープロセスのステータスを返します

```text
XML monitoring = DumpInstanceStateEx ( String mask, Boolean includeDead, Boolean noDatabaseCheck, Number criticalLevel )
```

## パラメーター

**マスク**&#x200B;考慮するインスタンスのマスク

**includeDead**&#x200B;停止したプロセスのリストを追加

**noDatabaseCheck** データベースオブジェクトからのアラートをチェックしません

**criticalLevel**&#x200B;返されるアラートの重大度をフィルターします

## 戻り値

**監視**

## 機能

**スキーマ：** [nl:monitoring](s-nl-monitoring.md)

**静的：**

はい
