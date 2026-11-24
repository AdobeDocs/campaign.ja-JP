---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '86'
ht-degree: 15%
---
# getEntry

アーカイブからファイルを抽出します。

```text
getEntry (filename)
```

## パラメーター

**filename** アーカイブ内のファイルの名前。

## 戻り値

ファイルの内容を含む⌐ [MemoryBuffer](c-memorybuffer.md)です。

## 備考

このメソッドを使用するには、アーカイブを⌐[open （） &#x200B;](m-zipfile-open.md) メソッドで開いている必要があります。 それ以外の場合は例外が発生します。 例：次の例では、アーカイブからdir/content.xml ファイルを抽出し、/tmp/ フォルダーに保存します。

```javascript
var zip = new ZipFile("/tmp/archive.zip")
zip.open()

var content = zip.getEntry("dir/content.xml")
content.save("/tmp/content.xml")

zip.dispose()
content.dispose()
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
