---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '151'
ht-degree: 8%
---
# オープン

ファイルを読み取りまたは書き込みモードで開きます。

```text
open ( [mode ] [, codepage ])
```

## パラメーター

**mode** ファイルを開くモード。 モードは、次のいずれかの値にすることができます。

* &quot;r&quot; - ファイルを読み取り専用モードで開きます。 このモードはデフォルトのモードです。
* &quot;w&quot; - ファイルを書き込みモードで開きます。
* 「a」 – ファイルを「追加」モードで開くと、ファイルに書き込まれたデータが最後に追加されます。

**codepage** ファイルエンコーディング。 エンコーディングは、次のいずれかの値にすることができます。

* File.CODEPAGE\_CURRENT – これはデフォルトのコードページです。
* File.CODEPAGE\_OEM
* File.CODEPAGE\_MAC
* File.CODEPAGE\_THREAD
* File.CODEPAGE\_LATIN1
* File.CODEPAGE\_LATIN2
* File.CODEPAGE\_ISOLATIN1
* File.CODEPAGE\_ISOLATIN2
* File.CODEPAGE\_OEMLATIN1
* File.CODEPAGE\_OEMLATIN2
* File.CODEPAGE\_UTF7
* File.CODEPAGE\_UTF8
* File.CODEPAGE\_ISOLATIN9
* File.CODEPAGE\_OEMUS
* File.CODEPAGE\_SHIFTJIS
* File.CODEPAGE\_BIG5
* File.CODEPAGE\_CHINESE
* File.CODEPAGE\_EUCKOREAN
* File.CODEPAGE\_UTF16LE
* File.CODEPAGE\_UTF16BE

## 戻り値

なし。

## 備考

ファイルを開くことができない場合は、例外が発生します。

## 機能

**クラスのメソッド：** [ ファイル ](c-file.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
