---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '42'
ht-degree: 28%
---
# FillStepsWithFilter

同数の bin にカットオフを自動的に作成。

```text
XML samplingSteps = FillStepsWithFilter ( String schema, String expr, Number classCount, XML filter )
```

## パラメーター

分析の&#x200B;**スキーマ** ルート スキーマ

**expr** Source式

**classCount**&#x200B;生成するビン数

スキーマの&#x200B;**filter** フィルター

## 戻り値

**samplingSteps** ステップのリスト

## 機能

**スキーマ：** [xtk:abstractForm](s-xtk-abstractform.md)

**静的：**

はい
