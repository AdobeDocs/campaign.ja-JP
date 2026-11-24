---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '89'
ht-degree: 3%
---
# WakeupTask

1つ以上の保留中のタスクの事前処理を強制します。

```text
WakeupTask ( String workflowId, String taskIdentifier, String activityName )
```

## パラメーター

**workflowId** ワークフローの識別子または内部名。

**taskIdentifier** タスク （@taskIdentifier フィールド）の識別子または空の文字列を使用して、特定のアクティビティに関連付けられたすべての保留中のタスクを強制的に早期処理します。

**activityName**&#x200B;関連するすべてのタスクまたは空の文字列の早期処理を強制するアクティビティの名前。

## 戻り値

なし。

## 備考

taskIdentifierもactivityNameも指定しない場合、保留中のすべてのタスクが考慮されます。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
