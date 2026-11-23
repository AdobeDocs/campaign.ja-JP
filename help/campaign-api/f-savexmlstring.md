---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '113'
ht-degree: 20%
---
# saveXmlString

このコマンドは非推奨です。[saveXmlFile （） ](f-savexmlfile.md)を使用してください。 XML ドキュメントに対応する文字列をファイルに保存します。

```text
saveXmlString (text, filename [, codePage ])
```

## パラメーター

**text**&#x200B;保存する文字列の形式のXML ドキュメント。

**filename**&#x200B;保存するファイルのフルネーム。

**codePage**&#x200B;このオプションのパラメーターを使用すると、文字エンコーディングを指定できます。 例：

* iso-8859-1
* utf-8
* utf-16
* us-ascii
* shift-jis
* euc-kr

## 戻り値

なし。

## 備考

この関数は、必要に応じてファイルにXML プロログを挿入し、文書のコーディングを指定します。 文字エンコーディングが指定されていない場合は、サーバーのデフォルトが使用されます。

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
