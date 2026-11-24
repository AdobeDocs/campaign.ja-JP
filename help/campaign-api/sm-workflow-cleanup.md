---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '69'
ht-degree: 5%
---
# クリーンアップ

ワークフロー履歴を消去します。

```text
Cleanup ( String workflowId )
```

## パラメーター

**workflowId** ワークフローの識別子または内部名。

## 戻り値

なし。

## 備考

処理済みのイベント、完了したタスク、失敗したタスク、ログメッセージをすべて削除します。 ワークフローが終了すると、ダイアグラムから進行状況も削除されます。 このメソッドは、ワークフローエンジンのみで使用されなくなったデータを削除し、ワークフローの動作には影響しません。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
