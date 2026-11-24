---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '50'
ht-degree: 8%
---
# 実行

ワークフローをすぐに実行し、完了するのを待ちます。

```text
XML workflow = Execute ( String workflowId, Boolean simulationMode, Boolean keepResult, Boolean logSQL )
```

## パラメーター

**workflowId** ワークフローの識別子または内部名。

**simulationMode**&#x200B;実行シミュレーション。

**keepResult**&#x200B;中間結果を保持します。

**logSQL** SQL注文のトレースを保存する必要がありますか？

## 戻り値

**ワークフロー**&#x200B;実行結果。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
