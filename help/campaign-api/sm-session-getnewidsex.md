---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '45'
ht-degree: 35%
---
# GetNewIdsEx

シーケンス名を指定した場合、データベースから一意の識別子のリストを取得します。

```text
String idList = GetNewIdsEx ( Number count, String sequence )
```

## パラメーター

**count**&#x200B;このメソッドが返す識別子の数

**シーケンス**&#x200B;増分するシーケンスの名前

## 戻り値

**idList**&#x200B;識別子のコンマ区切りリスト

## 機能

**スキーマ：** [xtk:session](s-xtk-session.md)

**静的：**

はい
