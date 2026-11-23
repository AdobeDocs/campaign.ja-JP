---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '47'
ht-degree: 48%
---
# BuildUpdateOneSchemaDiff

物理データベースのテーブルとこのテーブルの論理記述の違いを示すドキュメントを生成します。

```text
XML sqlSchemaDiff = BuildUpdateOneSchemaDiff ( String schemaId, Boolean useNamingConventions )
```

## パラメーター

**schemaId** スキーマ ID

**useNamingConventions** SQL命名規則を使用して、新しいフィールドのパスを計算します。

## 戻り値

**sqlSchemaDiff**&#x200B;生成されたスキーマ

## 機能

**スキーマ：** [xtk:builder](s-xtk-builder.md)

**静的：**

はい
