---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '110'
ht-degree: 2%
---
# GetLogin

実行アカウントから情報を返します。

```text
[ Number id, String login, String cs ] = GetLogin ( String workflowId )
```

## パラメーター

**workflowId** ワークフローの識別子または内部名。

## 戻り値

**id**&#x200B;演算子の識別子。このワークフローに演算子が関連付けられていない場合は0です。

**login**&#x200B;このワークフローにオペレーターが関連付けられていない場合は、オペレーターまたは空の文字列のログイン。

**cs**&#x200B;このワークフローにオペレーターが関連付けられていない場合は、オペレーターの説明文字列または空の文字列。

## 備考

ワークフローに関連付けられた実行アカウントにより、ワークフローを開始したオペレーターではなく、特定のオペレーターに実行権限を強制することができます。 ワークフローが複製された場合、実行アカウントは反映されません。

## 機能

**スキーマ：** [xtk:workflow](s-xtk-workflow.md)

**静的：**

はい
