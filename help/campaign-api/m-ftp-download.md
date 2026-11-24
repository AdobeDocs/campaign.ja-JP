---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '106'
ht-degree: 13%
---
# ダウンロード

サーバーからローカルファイルまたはメモリにファイルをダウンロードします。

```text
download (URL [, append ])
```

## パラメーター

ダウンロードするファイルの&#x200B;**URL** URL。

**append** デフォルトでは、ダウンロードしたファイルが既にローカルディスクに存在する場合、受信した新しいファイルによって上書きされます。 ブール値がアクティブになっている場合、Adobe Campaignは、ダウンロードしたコンテンツを既存のコンテンツと同じ名前でファイルに書き込みます。

## 戻り値

なし。

## 備考

ローカルファイル内のファイルを復元するには、まずsetFile メソッドを使用します。 例：

```javascript
var ftp = new FTP
ftp.setFile("c:/rfc.txt")
ftp.download("ftp://ftp.funet.fi/pub/standards/RFC/rfc2068.txt")
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
