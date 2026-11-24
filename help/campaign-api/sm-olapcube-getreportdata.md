---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '46'
ht-degree: 6%
---
# GetReportData

```text
XML result = GetReportData ( Number cubeId, String queryDef, Boolean selectAll, Boolean useAggregates, XML cube )
```

## パラメーター

**cubeId** キューブ ID。 キューブをパラメーターとして渡す場合は、0に設定できます。

レポートで&#x200B;**queryDef** QueryDefが定義されました

**selectAll**&#x200B;すべてを選択

**useAggregates**&#x200B;集計の使用を有効にする

**キューブ** キューブを表すXML。

## 戻り値

**result**&#x200B;結果

## 機能

**スキーマ：** [xtk:olapCube](s-xtk-olapcube.md)

**静的：**

はい
