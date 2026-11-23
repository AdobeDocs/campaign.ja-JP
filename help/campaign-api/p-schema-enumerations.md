---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '37'
ht-degree: 37%
---
# 列挙

このスキーマで定義された[列挙](c-enumeration.md)のリストを含むテーブルを返します。

```text
enumerations
```

## 備考

例：

```javascript
var schema = application.getSchema("nms:delivery")
for each(var e in schema.enumerations)
{
  logInfo(e.name)
}
```

## 機能

**クラスのプロパティ：** [ スキーマ ](c-schema.md)

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
