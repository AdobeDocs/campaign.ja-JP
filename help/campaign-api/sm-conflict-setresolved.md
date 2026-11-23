---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '55'
ht-degree: 5%
---
# SetResolved

エンティティに競合がないことを宣言します。

```text
SetResolved ( String conflictId )
```

## パラメーター

**conflictId**&#x200B;競合ID。

## 戻り値

なし。

## 備考

すべての競合が解決されると、この方法を使用すると、エンティティを通常の場所に戻すことができます。 このメソッドを呼び出す前に、競合するすべての属性と要素を解決する必要があります。

## 機能

**スキーマ：** [xtk:conflict](s-xtk-conflict.md)

**静的：**

はい
