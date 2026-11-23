---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '70'
ht-degree: 20%
---
# joinParts

各要素が結合の条件を表すSchemaNode インスタンスのテーブルを返します。

```text
joinParts
```

## 備考

テーブルの各要素には、次の2つのプロパティがあります。

* source - ソーステーブルのフィールドを表す要素。
* destination – 宛先テーブルのフィールドを表す要素。

例：

```javascript
var schema = application.getSchema("nms:recipient")
var root = schema.root

var link = root.children.country
for each(var join in link.joinParts)
{
  logInfo("src = " + join.source.name)
  logInfo("dst = " + join.destination.name)
}
```

## 機能

**クラスのプロパティ：** [SchemaNode](c-schemanode.md)

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
