---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '99'
ht-degree: 14%
---
# リスト

指定したディレクトリ内のサーバー上のファイルのリストを返します。

```text
list (URL, pattern [, max ])
```

## パラメーター

**URL** URLとしてのFTP サーバーのアドレス。

**pattern**&#x200B;取得するファイルのリストのファイルとマスク。

**max**&#x200B;返されるファイルの最大数。 このパラメーターがない場合、メソッドはファイルの完全なリストを返します。

## 戻り値

指定されたパスとマスクに対応するファイル名を含むテーブル。

## 備考

FTP コマンドが失敗し、例外が発生した場合。 例：

```javascript
var ftp = new FTP
var files = ftp.list("ftp://ftp.funet.fi/", "pub/standards/RFC/rfc*.txt", 10)
for(var i in files)
  logInfo(files[i])
ftp.dispose()
```

## 機能

**クラスのメソッド：** [FTP](c-ftp.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
