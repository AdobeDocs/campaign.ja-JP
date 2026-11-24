---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '74'
ht-degree: 5%
---
# 返信

進行中の検証タイプのタスクに応答します。

```text
Reply ( String workflowId, String taskIdentifier, String response, String choice )
```

## パラメーター

**workflowId** ワークフローの識別子または内部名。

**taskIdentifier**&#x200B;承認タイプのタスク （@taskIdentifier フィールド）の識別子。

**response**&#x200B;応答に関連付けられたコメント。

**choice**&#x200B;応答の選択。 この選択は、アクティブ化するトランジションの名前と一致する必要があります。

## 戻り値

なし。

## 備考

現在のオペレーターは、タスクに割り当てられたグループに属している必要があります。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
