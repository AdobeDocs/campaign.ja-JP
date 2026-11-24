---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '34'
ht-degree: 44%
---
# GenCreateOrUpdateSchemaSequenceDDL

autoPk スキーマシーケンスを作成または更新するために使用する SQL スクリプトを生成します

```text
String sqlDDL = GenCreateOrUpdateSchemaSequenceDDL ( String schemaId, String newSequence, String oldSequence )
```

## パラメーター

**schemaId** スキーマ ID

**newSequence**&#x200B;新しいシーケンス

**oldSequence**&#x200B;古いシーケンス

## 戻り値

**sqlDDL** SQL スクリプト

## 機能

**スキーマ：** [xtk:builder](s-xtk-builder.md)

**静的：**

はい
