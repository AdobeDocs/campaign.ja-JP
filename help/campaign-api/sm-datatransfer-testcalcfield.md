---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '55'
ht-degree: 27%
---
# TestCalcField

スクリプトに保存されたサンプルラインを使用して計算済みのフィールドをテストします。

```text
XML calcFieldValues = TestCalcField ( XML dataTransferStep, String calcFieldName )
```

## パラメーター

**dataTransferStep**&#x200B;計算フィールドが定義されているデータ転送ステップ

テストする&#x200B;**calcFieldName**&#x200B;計算フィールド

## 戻り値

**calcFieldValues**&#x200B;各サンプル行（calcFieldValues/line）とフィールド名（calcFieldValues/@name）の値のリストを返します

## 機能

**スキーマ：** [xtk:dataTransfer](s-xtk-datatransfer.md)

**静的：**

はい
