---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '85'
ht-degree: 27%
---
# saveString

このコマンドは非推奨です。[saveFile （） &#x200B;](f-savefile.md)を使用してください。 文字列をファイルに保存します。

```text
saveString (text, filename [, codePage ])
```

## パラメーター

**text**&#x200B;保存するテキスト文字列。

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

文字エンコーディングが指定されていない場合は、サーバーのデフォルトが使用されます。

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
