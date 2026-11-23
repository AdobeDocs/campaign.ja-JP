---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '79'
ht-degree: 25%
---
# GetAvailableReportsEx

レポートのリストを履歴なしで復元します。データの並べ替え条件とページ番号が考慮されます

```text
XML reports = GetAvailableReportsEx ( String activeContext, String schema, String selection, XML where, XML orderBy, Number editionMode, Number lineCount, Number startLine, String locationName )
```

## パラメーター

**activeContext** アクティブなコンテキスト （選択範囲、グローバル）

**スキーマ** スキーマが含まれています

選択したエンティティの&#x200B;**selection** ID （&#39;,&#39;で区切る）

**where** &#39;where&#39; ノードのフィルタリング

**orderBy** ソート &#39;orderBy&#39; ノード

**editionMode**&#x200B;編集中、非公開レポートも表示されます

**lineCount**&#x200B;収集するレポートの数

**startLine** ページ番号を適用するためのオフセット

**locationName**

## 戻り値

**レポート**&#x200B;対象となるレポートのリスト

## 機能

**スキーマ：** [xtk:report](s-xtk-report.md)

**静的：**

はい
