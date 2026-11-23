---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '51'
ht-degree: 33%
---
# FilesExist

ファイルがサーバー上に (ファイルとしてまたはリソーステーブル内に) 既に存在するかどうか確認します。

```text
XML exist = FilesExist ( XML files )
```

## パラメーター

**files** ファイルのリスト （@name）とそのMD5 キー（@md5）およびリソース （@checkResource）を示すブール値。

## 戻り値

**exist**&#x200B;結果のリスト （@md5および@exists）

## 機能

**スキーマ：** [xtk:job](s-xtk-job.md)

**静的：**

はい
