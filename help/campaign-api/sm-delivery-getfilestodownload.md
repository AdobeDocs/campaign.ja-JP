---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '54'
ht-degree: 29%
---
# GetFilesToDownload

配信に関連付けられているサーバーで見つかったファイルのリストを返します。

```text
[ XML filesToDownload, XML filesNotToDownload ] = GetFilesToDownload ( Number deliveryId )
```

## パラメーター

**deliveryId**&#x200B;配信ID

## 戻り値

**filesToDownload**&#x200B;要素\[properties/filesToDownload\]としてダウンロードできるファイルのリストを返します

**filesNotToDownload**&#x200B;要素\[properties/filesNotToDownload\]としてダウンロードできないファイルのリストを返します

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
