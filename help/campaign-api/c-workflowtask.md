---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '104'
ht-degree: 4%
---
# WorkflowTask （クラス）

ワークフロータスクのステータス。

⌐`WorkflowTask`は、インスタンス化できないクラスで、ワークフローアクティビティ `task`でアクセスできるインスタンスは1つだけです。

## メソッド

| メソッド | 説明 |
| --- | --- |
| [setCompleted](m-workflowtask-setcompleted.md) | タスクが完了したことを示すフラグを付けます。 |
| [postEvent](m-workflowtask-postevent.md) | トランジションをアクティブ化します。 |
| [setNextProcessingDate](m-workflowtask-setnextprocessingdate.md) | タスクによる処理の次の日付を強制的に設定します。 |
| [doneTransition](m-workflowtask-donetransition.md) | アクティビティの「完了」トランジションを返します。 |
| [errorTransition](m-workflowtask-errortransition.md) | アクティビティの「エラー」トランジションを返します。 |
| [transitionByType](m-workflowtask-transitionbytype.md) | 指定された型に対応する遷移を返します。 |
| [transitionByName](m-workflowtask-transitionbyname.md) | 指定された名前に対応するトランジションを返します。 |
| [ トランジション ](m-workflowtask-transitions.md) | アクティビティのトランジションのリストを返します。 |
| [待機](m-workflowtask-wait.md) | シグナルを待つ。 |

## 機能

**次の場所で利用できます：**

* ワークフロー
