---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '33'
ht-degree: 9%
---
# WorkflowTransition （クラス）

ワークフローの移行を表します。

トランジションとは、タスクのトランジションを有効にするために使用される、またはなどのメソッドを使用して回復される不透明なオブジェクトです。

例：

```text
var done = task.doneTransition() task.postEvent(done) task.setCompleted() return 0
```

## 機能

**次の場所で利用できます：**

* ワークフロー
