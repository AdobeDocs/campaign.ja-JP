---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '35'
ht-degree: 54%
---
# GetEntityIfMoreRecent

エンティティの MD5 キーがパラメーターとして指定された MD5 キーと異なる場合に、そのエンティティを読み込みます

```text
XML doc = GetEntityIfMoreRecent ( String pk, String md5, Boolean mustExist )
```

## パラメーター

**pk** プライマリキー

**md5** MD5 キー

**mustExist**

## 戻り値

**doc**&#x200B;結果

## 機能

**スキーマ：** [xtk:session](s-xtk-session.md)

**静的：**

はい
