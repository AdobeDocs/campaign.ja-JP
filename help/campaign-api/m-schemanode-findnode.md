---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '135'
ht-degree: 10%
---
# findNode

ノードが存在せず、mustExist パラメーターがfalseに設定されている場合、[SchemaNode](c-schemanode.md)のインスタンスを返します。または、nullを返します。

```text
findNode (name [, strict ] [, mustExist ])
```

## パラメーター

**name** XPathは、検索するノードの名前を表します

**strict** パスの最後の項目の名前がそのまま存在しない場合に、属性または要素として検索する必要があるかどうかを示すブール値（strictからfalseまで）。 デフォルトではtrueです。

ノードが存在しない場合に例外を発生させる必要があるかどうかを示す&#x200B;**mustExist** ブール値。 デフォルトではtrue。

## 戻り値

ノードが見つかった場合は[SchemaNode](c-schemanode.md) インスタンスを返し、mustExist パラメーターがfalseに設定されている場合はnullを返します。

## 備考

例：

```javascript
var schema = application.getSchema("nms:recipient");

logInfo("netSales: " + schema.root.findNode("@netSales"));
logInfo("merchandise/@lastPurchaseDate: " + schema.root.findNode("merchandise/@lastPurchaseDate", true, false));
```

施策：

```javascript
netSales: [object NodeDef]
merchandise/@lastPurchaseDate: [object NodeDef]
```

## 機能

**クラスのメソッド：** [SchemaNode](c-schemanode.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
