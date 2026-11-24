---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '70'
ht-degree: 4%
---
# GetStatus

ジョブ処理の進捗情報を取得します。 警告：このAPIは、一意のログエントリのリストを返すことを保証しません（呼び出し元はIDを使用して重複を排除する必要があります）。

```text
[ Number status, XML returnLogs, XML properties ] = GetStatus ( String id, Number lastLogId, Number maxLogCount )
```

## パラメーター

**id** ジョブ ID

前回の呼び出しで返された最後のログエントリの&#x200B;**lastLogId**&#x200B;識別子

**maxLogCount**&#x200B;送信するログエントリの最大数

## 戻り値

**status** ジョブの状態

**returnLogs** ログメッセージ

**プロパティ** プロパティ （進行状況…）

## 機能

**スキーマ：** [xtk:job](s-xtk-job.md)

**静的：**

はい
