---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '270'
ht-degree: 7%
---
# ファイル（クラス）

ファイルクラス

> 警告 :
>
> ファイル API経由のアクセスは、Adobe Campaignの&#x200B;**var**、**sftp**&#x200B;および一時フォルダーに制限されています。

次に、クラスを使用してファイルのすべての行を順番に読み取り、処理する方法の例を示します。

```javascript
var file = new File("/tmp/test.txt")
file.open()
for each(var line in file)
  logInfo(line)
file.close()
 
```

## メソッド

| メソッド | 説明 |
| --- | --- |
| [&#x200B; ファイル &#x200B;](m-file-file.md) | ファイルに関連付けられた新しいオブジェクトを作成します。 |
| [閉じる](m-file-close.md) | ファイルを閉じます。 |
| [copyTo](m-file-copyto.md) | ファイルをコピーします。 |
| [破棄](m-file-dispose.md) | オブジェクトで使用されるリソースを解放します。 |
| [&#x200B; フラッシュ &#x200B;](m-file-flush.md) | ディスクへの書き込みを強制 |
| [&#x200B; リスト &#x200B;](m-file-list.md) | ディレクトリのコンテンツを一覧表示します。 |
| [mkdir](m-file-mkdir.md) | 現在の[File](c-file.md) オブジェクトのパスを持つディレクトリを作成します。 |
| [開く](m-file-open.md) | ファイルを読み取りまたは書き込みモードで開きます。 |
| [削除](m-file-remove.md) | ファイルを削除します。 |
| [renameTo](m-file-renameto.md) | ファイル名を変更します。 |
| [読み取り](m-file-readln.md) | テキストファイルの1行を読み込みます。 |
| [rmdir](m-file-rmdir.md) | ディレクトリを削除します（カスケードではありません）。 |
| [書き込み](m-file-writeln.md) | ファイルにテキスト行を書き込みます。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [canRead](p-file-canread.md) | ファイルが読み取り可能な場合はtrueを返します。 |
| [canWrite](p-file-canwrite.md) | ファイルを変更できる場合はtrueを返します。 |
| [存在](p-file-exists.md) | この名前を持つファイルまたはフォルダーがある場合は、trueを返します。 |
| [fullName](p-file-fullname.md) | ファイルの名前を絶対値で返します。 |
| [isDirectory](p-file-isdirectory.md) | ファイルがディレクトリの場合はtrueを返します。 |
| [isFile](p-file-isfile.md) | ファイルが存在し、ファイルである場合はtrueを返します。 |
| [isOpen](p-file-isopen.md) | ファイルが開いている場合はtrueを返します。 |
| [lastModified](p-file-lastmodified.md) | Date オブジェクトの形式で最終変更日を返します。 |
| [name](p-file-name.md) | 拡張子が付いているがパスが付いていないファイルの名前を返します。 |
| [&#x200B; パス &#x200B;](p-file-path.md) | 区切り記号で終わるファイルの完全パスを返します。 |
| [&#x200B; サイズ &#x200B;](p-file-size.md) | ファイルのサイズをバイト単位で返します。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
