---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '103'
ht-degree: 17%
---
# ロード

> 警告 :
>
> ファイル API経由のアクセスは、Adobe Campaignの&#x200B;**var**、**sftp**&#x200B;および一時フォルダーに制限されています。

XML ファイルから新しいドキュメントを作成します。

```text
load (filename [, allowEmpty ])
```

## パラメーター

**filename**&#x200B;読み込むファイルの名前。

**allowEmpty** trueの場合、ファイルが空の場合は例外は発生しません（default=false）。

## 戻り値

なし。

## 備考

ファイルを読み込めない場合、またはファイルの内容が有効なXML ドキュメントでない場合は、例外が発生します。 この関数は、DOMDocument クラスに適用されます。 例：

```javascript
var doc = DOMDocument.load("data/test.xml")
```

## 機能

**クラスのメソッド：** [DOMDocument](c-domdocument.md)

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
