---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '114'
ht-degree: 2%
---
# GetValidationParameters

進行中のワークフロータスクのパラメーターを返します。

```text
XML content = GetValidationParameters ( String workflowId, String taskIdentifier )
```

## パラメーター

**workflowId** ワークフローの識別子または内部名。

**taskIdentifier**&#x200B;承認タイプのタスク （@taskIdentifier フィールド）の識別子。

## 戻り値

**content** パラメーターを含むXML ドキュメント。

## 備考

返される文書には、検証に関するすべての情報、応答した人、まだ応答できる人が含まれています。

* title、creationDate、processingDate、timeout、status、abortReasonおよびcompletionDate属性は、検証タスクの属性に対応します。
* isAssignee：現在のオペレーターは、このタスクに割り当てられたグループ内にあります。
* hasResponded：現在のオペレーターは既に応答しています。
* canReply：現在のオペレーターは応答できます（まだ誰も応答していないか、複数の応答が許可されています。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
