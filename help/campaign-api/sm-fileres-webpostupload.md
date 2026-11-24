---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '72'
ht-degree: 6%
---
# WebPostUpload

使用するストレージのタイプに応じて、（web ページから）サーバーにアップロードした後のリソースのストレージを確定します。 コードページとコンテンツタイプを復元します。

```text
fileRes.WebPostUpload ( XML params )
```

## パラメーター

**params** For &#39;workspace&#39; type storage: @formerFileNameには、ワークスペース内の以前の名前が含まれています。 エンティティを直ちに保存する場合：@immediateSaveを「true」に設定する必要があります

## 戻り値

なし。

## 機能

**スキーマ：** [xtk:fileRes](s-xtk-fileres.md)

**静的：**

いいえ

**定数：**

いいえ

**キーのみ：**

いいえ
