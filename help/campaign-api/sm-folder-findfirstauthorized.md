---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '57'
ht-degree: 28%
---
# FindFirstAuthorized

folderFilter 条件を満たす、現在のユーザーの最初の適格フォルダーを検索します。

```text
XML folderEntity = FindFirstAuthorized ( String folderFilter, Boolean writeAccess, Number orgUnit )
```

## パラメーター

フォルダーの&#x200B;**folderFilter** フィルター

**writeAccess**&#x200B;返されるフォルダーは書き込み可能である必要があります

**orgUnit**&#x200B;返されるフォルダーは、指定された組織エンティティと互換性がある必要があります

## 戻り値

**folderEntity**&#x200B;関連するフォルダーエンティティを返します（nullが見つかりません）

## 機能

**スキーマ：** [xtk:folder](s-xtk-folder.md)

**静的：**

はい
