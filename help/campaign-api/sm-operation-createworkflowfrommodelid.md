---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '34'
ht-degree: 41%
---
# CreateWorkflowFromModelId

ワークフローテンプレートに基づいて、キャンペーンにワークフローを作成します。

```text
Number workflowId = CreateWorkflowFromModelId ( Number modelId, XML operationPlanning )
```

## パラメーター

**modelId** ワークフローのテンプレート ID

**operationPlanning** キャンペーンスケジュール

## 戻り値

作成されたインスタンスの&#x200B;**workflowId**&#x200B;識別子

## 機能

**スキーマ：** [nms:operation](s-nms-operation.md)

**静的：**

はい
