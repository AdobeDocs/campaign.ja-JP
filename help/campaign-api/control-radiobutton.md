---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '76'
ht-degree: 14%
---
# RadioButton

ラジオボタンを使用すると、複数のオプションから選択できます。 &lt;input> タグは、可能なオプションを列挙するために使用されます。

![RadioButton コントロール &#x200B;](assets/radio.11bc90a8.png)

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**border - string** コントロールの境界線スタイルを変更します（solid、double、inset、outset、none）。

**checkedValue – 文字列**&#x200B;選択にリンクされた値。

**font-size - integer** フォントサイズを変更します。

**label – 文字列**&#x200B;関連ラベル。

**ノーラベル – ブール値**&#x200B;関連するラベルを非表示にします。

**readOnly - ブール値**&#x200B;は、コントロールを強制的に読み取り専用にします。

## 備考

例：

```xml
      <input type="RadioButton" xpath="@gender" checkedValue="0" label="Choice 1"/>
<input type="RadioButton" xpath="@gender" checkedValue="1" label="Choice 2"/>
<input type="RadioButton" xpath="@gender" checkedValue="2" label="Choice 3"/>
```
