---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '84'
ht-degree: 16%
---
# リスト

ディレクトリのコンテンツを一覧表示します。

```text
list ( [mask ] [, sort ] [, noCase ])
```

## パラメーター

**マスク**&#x200B;検索マスク（\*デフォルト）。

**sort** trueを実行して結果を並べ替えます（デフォルトではfalse）。

**noCase**&#x200B;は、並べ替え時にクラスを無視するtrueです（デフォルトではfalse）。

## 戻り値

指定されたパスとマスクに一致するファイル （[File](c-file.md)）のリストを含むテーブル。

## 備考

ディレクトリ名は、Linuxでは/で、Windowsでは\\で終わる必要があります。 例：

```javascript
var dir = new File("c:\\temp\\")
var files = dir.list("*.*")
for each (var file in files)
  logInfo(file.name)
```

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
