---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '143'
ht-degree: 1%
---
# リスト

メモリーリスト。

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**border - string** コントロール アウトライン スタイルを変更します（solid、double、inset、outset、none）。

**編集可能 – ブール値**&#x200B;は、リストの編集を許可します。

**font-size - integer** フォントサイズを変更します。

**form - string**&#x200B;編集フォーム。

**img – 各行の文字列**&#x200B;画像。

**label – 文字列**&#x200B;関連ラベル。

**ノーラベル – ブール値** ラベルがありません。

**通知 – ブール値**&#x200B;列タイトルが表示されません。

**noToolbar - ブール値** ツールバーを非表示にします。

**ordered - ブール値**&#x200B;は、リストのスケジュールを許可します。

**readOnly - ブール値**&#x200B;は、コントロールを強制的に読み取り専用にします。

**toobarAlign - string**&#x200B;横組み\|縦組み。

**toobarCaption - ツールバーに表示される文字列** ラベル。

**zoom - ブール値**&#x200B;編集フォームを表示します。

**zoomOnAdd - ブール値**&#x200B;行が追加されるとフォームを開きます。

**xpathIndex - xpath**&#x200B;選択範囲のインデックスは、このパスで指定された場所に保存されます。

**xpathSelection - xpath**&#x200B;選択した要素に到達するためにXPATH パスが格納されるノード。

## 備考

例1:

```xml
      <input type="list" xpath="dataTransferStep" nolabel="true" editable="false"
       zoom="true" form="xtk:exportSource" zoomOnAdd="true" img="xtk:script.bmp">
  <input xpath="@name" colSize="15"/>
  <input xpath="@active" editable="true" colSize="15"/>
</input>
```

例2:

```xml
<input type="list" xpath="operator" zoom="true">
  <input xpath="@name" colSize="15"/>
  <form>
    <input xpath="@name"/>
  </form>
</input>
```
