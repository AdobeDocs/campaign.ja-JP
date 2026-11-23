---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '45'
ht-degree: 28%
---
# アップロード

ローカルファイルからFTP サーバーにファイルをダウンロードします。

```text
upload (URL)
```

## パラメーター

**URL** サーバーURL。

## 戻り値

なし。

## 備考

URLは「ftp:&#39;例：

```javascript
var ftp = new FTP
ftp.setFile("c:/rfc.txt")
ftp.upload("ftp://ftp.funet.fi/pub/standards/RFC")
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
