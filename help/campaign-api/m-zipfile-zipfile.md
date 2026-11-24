---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '62'
ht-degree: 24%
---
# ZipFile

> 警告 :
>
> ファイル API経由のアクセスは、Adobe Campaignの&#x200B;**var**、**sftp**&#x200B;および一時フォルダーに制限されています。

ファイルに関連付けられた新しいZip オブジェクトを作成します。

```text
ZipFile (filename)
```

## パラメーター

**filename** ロードまたは作成するアーカイブの名前。

## 戻り値

なし。

## 備考

例：

```javascript
var zip = new ZipFile("/tmp/archive.zip")
```

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
