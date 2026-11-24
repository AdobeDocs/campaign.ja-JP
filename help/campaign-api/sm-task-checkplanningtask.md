---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '50'
ht-degree: 6%
---
# CheckPlanningTask

タスク演算子のスケジュール内でオーバーロードをチェックするために使用される内部関数（オーバーロードの場合は「true」を返します）。 また、関連するタスクスケジュールの一貫性を確認し、必要に応じて更新します。

```text
Boolean workloadAlert = CheckPlanningTask ( Number taskId )
```

## パラメーター

**taskId** タスク ID。

## 戻り値

**workloadAlert** リソース過負荷警告

## 機能

**スキーマ：** [nms:task](s-nms-task.md)

**静的：**

はい
