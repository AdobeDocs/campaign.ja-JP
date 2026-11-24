---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '60'
ht-degree: 21%
---
# setEntry

アーカイブ内のファイルを追加または更新します。

```text
setEntry (filename, buffer)
```

## パラメーター

**filename** ソースファイルの名前。

ファイルを含む&#x200B;**buffer** MemoryBuffer。

## 戻り値

なし。

## 備考

[save （） &#x200B;](m-zipfile-save.md) メソッドが呼び出されるまで、アーカイブはディスク上で効果的に変更されません。

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
