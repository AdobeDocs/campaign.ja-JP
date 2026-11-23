---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '119'
ht-degree: 3%
---
# CodeEdit

ソースコードの編集を制御します。

![CodeEdit コントロール ](assets/codeedit.8a744c8b.png)

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**border - string** コントロール アウトライン スタイルを変更します（solid、double、inset、outset、none）。

**contentType – 文字列** ソースコードの言語。構文の色付けや言語にリンクされたその他のオプションに使用されます。 次の言語がサポートされています。

* デフォルト
* xml
* dtd
* xsl
* html
* txt
* JavaScript
* sql

他の言語も、nlclient.exeと同じディレクトリにあるeditor.cfg ファイルを編集することによって追加できます。

**font-size - integer** フォントサイズを変更します。

**label – 文字列**&#x200B;関連ラベル。

**ノーラベル – ブール値**&#x200B;関連するラベルを非表示にします。

**readOnly - ブール値**&#x200B;は、コントロールを強制的に読み取り専用にします。

**ツールバー – ブール値** ツールバーの表示と非表示を切り替えます。

**toolbarAlign – 文字列** ツールバーの位置：水平または垂直

## 備考

例：

```xml
<input xpath="code" nolabel="true" type="CodeEdit"
       contentType="JavaScript" toolbar="true" toolbarAlign="horizontal"/>
```
