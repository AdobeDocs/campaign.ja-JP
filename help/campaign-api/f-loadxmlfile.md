---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '100'
ht-degree: 17%
---
# loadXmlFile

> 警告 :
>
> ファイル API経由のアクセスは、Adobe Campaignの&#x200B;**var**、**sftp**&#x200B;および一時フォルダーに制限されています。

この関数は廃止されました。[DOMDocument.load （） ](m-domdocument-load.md)を使用してください。 XML ドキュメントオブジェクトの形式でファイルを読み込みます

```text
loadXmlFile (filename [, noErr ])
```

## パラメーター

**filename**&#x200B;読み込むファイルのフルネーム。

**noErr** trueの場合、ファイルが空の場合はエラーはありません（default=false）。

## 戻り値

XML ドキュメント。

## 備考

この関数は、BOMとXML プロログの検出により、ファイルのコードページの検出をサポートします。

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
