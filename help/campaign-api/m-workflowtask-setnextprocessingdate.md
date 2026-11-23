---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '58'
ht-degree: 5%
---
# setNextProcessingDate

タスクによる処理の次の日付を強制的に設定します。

```text
setNextProcessingDate (timestamp)
```

## パラメーター

**タイムスタンプ**&#x200B;次の処理日。 空の場合、次の処理はすぐに行われます。

## 戻り値

なし。

## 備考

* この方法を使用すると、スケジューラーによって指定された場合、次の処理日が上書きされます。
* 次の処理は常に\*\_recall （）関数によって行われる。

## 機能

**クラスのメソッド：** [WorkflowTask](c-workflowtask.md)

**次の場所で利用できます：**

* ワークフロー
