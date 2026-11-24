---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '47'
ht-degree: 51%
---
# GetServerFileName

必要に応じてアップロードフォルダーにコピーした後で、サーバー上のファイルの名前を返します。

```text
String serverFileName = fileRes.GetServerFileName ()
```

## パラメーター

なし。

## 戻り値

**serverFileName** サーバー上のファイルのフルネーム （ファイルが見つからない場合は空）。

## 例

```javascript
var query = xtk.queryDef.create(
  {queryDef: {schema: "xtk:fileRes", operation: "get", 
    select: {
      node: [
      {expr: "@label"}, 
      {expr: "@originalName"}, 
      {expr: "@storageType"}, 
      {expr: "@fileName"}, 
      {expr: "@md5"}]
    }, 
    where: {
      condition: {expr: "@id = 4216"}
    }
  }})

var fileRes = xtk.fileRes.create(query.ExecuteQuery())
var sFileName = fileRes.GetServerFileName();
        
```

## 機能

**スキーマ：** [xtk:fileRes](s-xtk-fileres.md)

**静的：**

いいえ

**定数：**

いいえ

**キーのみ：**

いいえ
