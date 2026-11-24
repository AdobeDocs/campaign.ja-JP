---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '59'
ht-degree: 28%
---
# GetFilesToDownload

この転送で使用されるファイルのうち、サーバーに存在するファイルのリストを返す

```text
[ XML filesToDownload, XML filesNotToDownload ] = GetFilesToDownload ( Number jobId )
```

## パラメーター

**jobId**&#x200B;転送識別子

## 戻り値

**filesToDownload**&#x200B;要素\[dataTransfer/properties/filesToDownload\]としてダウンロードできるファイルのリストを返します

**filesNotToDownload**&#x200B;要素としてダウンロードできないファイルのリストを返します\[dataTransfer/properties/filesNotToDownload\]

## 機能

**スキーマ：** [xtk:dataTransfer](s-xtk-datatransfer.md)

**静的：**

はい
