---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '79'
ht-degree: 3%
---
# キル

ワークフローを無条件で停止します。

```text
Kill ( String workflowId )
```

## パラメーター

**workflowId** ワークフローの識別子または内部名。

## 戻り値

なし。

## 備考

この方法は、ワークフローを正常に停止できない場合に便利です。 これは、ワークフローまたはタスクが特に親和性を持っている場合、またはこの親和性を処理するwfserver モジュールが実行しなくなった場合に発生する可能性があります。 この場合、ワークフローは「要求された停止」のフラグが付いたままになり、Kill コマンドによってのみ停止できます。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
