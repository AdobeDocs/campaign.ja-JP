---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '37'
ht-degree: 37%
---
# フィールド

キーのフィールド （[SchemaNode](c-schemanode.md)）のフィールドを含むテーブルを返します。

```text
fields
```

## 備考

例：

```javascript
var schema = application.getSchema("nms:delivery")
for each(var key in schema.root.keys)
{
  logInfo("Key: " + key.name)
  for each(var field in key.fields)
    logInfo("\t" + field.name + "\t" + field.type)
}
    
```

## 機能

**クラスのプロパティ：** [SchemaKey](c-schemakey.md)

**読み取り専用：**

はい

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
