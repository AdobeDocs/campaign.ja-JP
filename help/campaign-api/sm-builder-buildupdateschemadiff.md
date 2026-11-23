---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '41'
ht-degree: 41%
---
# BuildUpdateSchemaDiff

実際のデータベース構造とその論理的説明の違いを説明するドキュメントを生成します。

```text
XML sqlSchemaDiff = BuildUpdateSchemaDiff ( XML parameters, Boolean useNamingConventions )
```

## パラメーター

**パラメーター** パラメーターの更新

**useNamingConventions** SQL命名規則を使用して、新しいフィールドのパスを計算します。

## 戻り値

**sqlSchemaDiff**&#x200B;生成されたスキーマ

## 機能

**スキーマ：** [xtk:builder](s-xtk-builder.md)

**静的：**

はい
