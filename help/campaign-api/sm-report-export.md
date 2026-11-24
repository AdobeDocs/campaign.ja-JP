---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '69'
ht-degree: 13%
---
# エクスポート

レポートの生成とエクスポート

```text
Export ( String reportName, XML context, String exportFormat, String fileName, Boolean isAdHoc )
```

## パラメーター

**reportName** レポートの内部名

**context**&#x200B;実行コンテキスト。

**exportFormat**&#x200B;使用可能な値は、XLS、OOXML\_SS、ODF\_SS、PDFです

XLSはExcel 94-2003 ドキュメントを生成します\
 OOXML\_SSはExcel 2007文書を生成します\
 ODF\_SSはオープン文書を生成します

**fileName**&#x200B;出力ファイル名

**isAdHoc**&#x200B;書き出しがアドホックレポートに関係するかどうかを指定します

## 戻り値

なし。

## 機能

**スキーマ：** [xtk:report](s-xtk-report.md)

**静的：**

はい
