---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '53'
ht-degree: 22%
---
# LoadChildrenWithPath

指定されたノードの子のリストを読み込む

```text
XML result = LoadChildrenWithPath ( String parentKey, String folderFilter, Boolean writeAccess, String fullName, String path, Boolean sort )
```

## パラメーター

**parentKey**&#x200B;親キー

フォルダーの&#x200B;**folderFilter** フィルター

**writeAccess**&#x200B;返されるフォルダーは書き込み可能である必要があります

**fullName**&#x200B;選択したノードのフルネーム

**パス**&#x200B;選択したノードのフルネーム

**並べ替え** アルファベット順で並べ替え

## 戻り値

**result**&#x200B;結果ドキュメント

## 機能

**スキーマ：** [xtk:folder](s-xtk-folder.md)

**静的：**

はい
