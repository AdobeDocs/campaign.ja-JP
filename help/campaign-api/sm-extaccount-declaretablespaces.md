---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '63'
ht-degree: 39%
---
# DeclareTableSpaces

外部アカウント経由でアクセス可能なリモートデータベースの特定の表領域を使用するために必要なオプションを Adobe Campaign データベースで宣言します。

```text
DeclareTableSpaces ( String extAccountId, String tableSpace, String tableSpaceIndex )
```

## パラメーター

**extAccountId**&#x200B;外部アカウントの内部名またはプライマリキー

**tableSpace** リモート作業テーブルに使用する表領域の名前

**tableSpaceIndex** インデックスに使用する表領域の名前

## 戻り値

なし。

## 機能

**スキーマ：** [nms:extAccount](s-nms-extaccount.md)

**静的：**

はい
