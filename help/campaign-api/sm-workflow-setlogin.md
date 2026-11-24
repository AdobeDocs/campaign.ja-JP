---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '77'
ht-degree: 3%
---
# SetLogin

実行アカウントを変更します。

```text
SetLogin ( String workflowId, String login )
```

## パラメーター

**workflowId** ワークフローの識別子または内部名。

**login**&#x200B;このワークフローにオペレーターが関連付けられていない場合は、オペレーターまたは空の文字列のログイン。

## 戻り値

なし。

## 備考

ワークフローに関連付けられた実行アカウントにより、ワークフローを開始したオペレーターではなく、特定のオペレーターに実行権限を強制することができます。 ワークフローが複製された場合、実行アカウントは反映されません。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
