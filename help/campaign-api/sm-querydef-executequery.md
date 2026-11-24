---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '38'
ht-degree: 36%
---
# ExecuteQuery

クエリからデータを取得

```text
XML output = queryDef.ExecuteQuery () const
```

## パラメーター

なし。

## 戻り値

**output**&#x200B;出力XML ドキュメント

## 備考

このクエリでは、次の4種類の操作をサポートしています。

* 選択
* get
* getIfExists
* カウント

## 例

```javascript
var query = NLWS.xtkQueryDef.create(
  {queryDef: {schema: "xtk:workflow", operation: "select", 
    select: {
        node: [{expr: "@id"},
               {expr: "@label"},
               {expr: "@internalName"}] 
    }, 
    where: {
      condition: [{expr: "[folder/@name]='nmsTechnicalWorkflow'"},
                  {expr: "@production = 1"}]
    }, 
    orderBy: {
      node: {expr: "@internalName", sortDesc: "false"}
    }
  }})

var res = query.ExecuteQuery()

var workflows = res.getElementsByTagName("workflow")
for each (var w in workflows)
  logInfo(w.getAttribute("internalName"))
        
```

## 機能

**スキーマ：** [xtk:queryDef](s-xtk-querydef.md)

**静的：**

いいえ

**定数：**

はい

**キーのみ：**

いいえ
