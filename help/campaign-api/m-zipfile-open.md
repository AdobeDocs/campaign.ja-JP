---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '75'
ht-degree: 17%
---
# オープン

既存のアーカイブを読み込みます。

```text
open ()
```

## パラメーター

なし。

## 戻り値

なし。

## 備考

既存のアーカイブの場合、最初に⌐[fileCount](p-zipfile-filecount.md) メソッドを呼び出してファイル数を回復するか、[getEntry （） &#x200B;](m-zipfile-getentry.md)してファイルを抽出する必要があります。 このメソッドは、ファイルが存在しない場合、またはファイルが有効なアーカイブでない場合に例外を発生させます。

## 機能

**クラスのメソッド：** [ZipFile](c-zipfile.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
