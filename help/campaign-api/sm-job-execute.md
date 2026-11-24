---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '56'
ht-degree: 35%
---
# 実行

ジョブを同期的に実行します (このモードでは、進捗状況情報とキャンセルは利用できません)。

```text
String id = job.Execute ( String methodName ) const
```

## パラメーター

**methodName** エンティティを呼び出すメソッドの名前

## 戻り値

**id**&#x200B;作成されたジョブの識別子（データベースで作成された場合、ジョブのいずれでも失敗した場合に返されます）

## 機能

**スキーマ：** [xtk:job](s-xtk-job.md)

**静的：**

いいえ

**定数：**

はい

**キーのみ：**

いいえ
