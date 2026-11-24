---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '71'
ht-degree: 4%
---
# NormalizeField

```text
NormalizeField ( XML selectedWebApp, XML archivedField, String newSQLName, String tableName, String schemaId, Boolean rename )
```

## パラメーター

**selectedWebApp**&#x200B;正規化するフィールドを含めることができる調査のリスト。

**archivedField**&#x200B;正規化するフィールドに関する情報。

**newSQLName**&#x200B;このフィールドの新規SQL名。

**tableName**&#x200B;新しいSQL フィールドを含むテーブルの名前。

**schemaId** スキーマ ID （ビュー）新しいフィールドに属する参照を追加する場所（オプション）。

**名前を変更**&#x200B;以前に標準化されたフィールドの名前も変更します。

## 戻り値

なし。

## 機能

**スキーマ：** [nms:webApp](s-nms-webapp.md)

**静的：**

はい
