---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '47'
ht-degree: 25%
---
# LoadChildren

指定されたノードの子のリストを読み込む

```text
XML result = LoadChildren ( String parentKey, String folderFilter, Boolean writeAccess, String fullName, Boolean sort )
```

## パラメーター

**parentKey**&#x200B;親キー

フォルダーの&#x200B;**folderFilter** フィルター

**writeAccess**&#x200B;返されるフォルダーは書き込み可能である必要があります

**fullName**&#x200B;選択したノードのフルネーム

**並べ替え** アルファベット順で並べ替え

## 戻り値

**result**&#x200B;結果ドキュメント

## 機能

**スキーマ：** [xtk:folder](s-xtk-folder.md)

**静的：**

はい
