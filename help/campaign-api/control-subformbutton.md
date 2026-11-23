---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '101'
ht-degree: 1%
---
# SubFormButton

サブフォームを開くボタン。

![SubFormButton コントロール &#x200B;](assets/button.f0aea09a.png)

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**border - string** コントロール アウトライン スタイルを変更します（solid、double、inset、outset、none）。

**discardReadOnly - string** サブフォームに「読み取り専用」プロパティを反映しません。

**font-size - integer** フォントサイズを変更します。

**img – 文字列**&#x200B;関連する画像。

**label - ボタンの文字列** ラベル。

**ノーラベル – 文字列** ラベル列のコントロールを整列させることができます。

**prebuildSubForm – 文字列**&#x200B;は、コントロールの作成時にサブフォームを初期化します。 このオプションはデフォルトで有効になっていますが、最初の表示を高速化するために無効にすることができます。

**必須 – ブール値** フィールドは必須です。

## 備考

例：

```xml
      <input type="subformbutton" label="Advanced parameters...">
  <form label=" Advanced parameters">
    <input xpath="@stopIfTooManyRejects"/>
    <input xpath="@traceMode"/>
  </form>
</input>
```
