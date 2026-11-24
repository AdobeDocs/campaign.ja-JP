---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '39'
ht-degree: 20%
---
# GetSource

フォーム管理のソースコード。

```text
[ String source, XML logs ] = GetSource ( String formId, String target, Boolean compiled, String version )
```

## パラメーター

**formId** フォーム ID。

生成するドキュメントの種類：**target**

**コンパイル済み**&#x200B;完全なバージョンを復元

**バージョン** ドキュメントのバージョンを生成します。

## 戻り値

**source** Source コード。

**logs**&#x200B;生成ログ。

## 機能

**スキーマ：** [xtk:abstractForm](s-xtk-abstractform.md)

**静的：**

はい
