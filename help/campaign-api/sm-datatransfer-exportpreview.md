---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '89'
ht-degree: 16%
---
# ExportPreview

クエリの最初の数行に対する出力ファイル列のプレビューを計算

```text
[ XML resultColumns, XML resultXML, String resultSQLRequest ] = ExportPreview ( XML dataTransferStep, Number lineCount, Boolean countMode, String calcFieldName )
```

## パラメーター

**dataTransferStep**&#x200B;計算フィールドが定義されている転送ステップ。

**lineCount**&#x200B;返される行数

**countMode**&#x200B;行数モード

**calcFieldName**&#x200B;監視された計算フィールドの名前。 空の場合は、出力ファイルのグローバルプレビューになります。

## 戻り値

**resultColumns**&#x200B;書き出しファイル列（line/col/val、line/col/errors）の値を返します。

**resultXML** クエリの出力XML ドキュメントを返します。

**resultSQLRequest**&#x200B;実行されたSQL クエリを返します。

## 機能

**スキーマ：** [xtk:dataTransfer](s-xtk-datatransfer.md)

**静的：**

はい
