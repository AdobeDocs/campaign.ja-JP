---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '103'
ht-degree: 26%
---
# loadFile

> 警告 :
>
> ファイル API経由のアクセスは、Adobe Campaignの&#x200B;**var**、**sftp**&#x200B;および一時フォルダーに制限されています。

テキストファイルの内容を返します

```text
loadFile (filename [, codePage ])
```

## パラメーター

**filename**&#x200B;読み込むファイルのフルネーム。

**codePage**&#x200B;このオプションのパラメーターを使用すると、文字エンコーディングを指定できます。 例：

* iso-8859-1
* utf-8
* utf-16
* us-ascii
* shift-jis
* euc-kr

## 戻り値

テキストファイルの内容に対応する文字列。

## 備考

文字エンコーディングが指定されていない場合は、サーバーのデフォルトが使用されます。

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* 配信メッセージ
* タイポロジルール
* 読み込み
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
