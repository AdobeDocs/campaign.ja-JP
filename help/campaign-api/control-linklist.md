---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '199'
ht-degree: 1%
---
# LinkList

コレクションの編集を制御します。

![LinkList コントロール &#x200B;](assets/linklist.8b71bb0e.png)

## プロパティ

**addButton - ブール値**&#x200B;追加ボタンを表示します。 このオプションは、hideEditButtons オプションが有効になっている場合にのみ有効です。

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**border - string** コントロール アウトライン スタイルを変更します（solid、double、inset、outset、none）。

**dblClickAction - string** ダブルクリックで開くフォームの名前。

**delButton - ブール値**&#x200B;削除ボタンを表示します。 このオプションは、hideEditButtons ボタンが有効になっている場合にのみ有効です。

**enumImage - string**&#x200B;各行の画像を表示するために使用されるシステム列挙の名前。

**font-size - integer** フォントサイズを変更します。

**フォーム – リンク編集用の文字列** フォーム。

**hideEditButtons - ブール値**&#x200B;追加、削除、編集ボタンを非表示にします。

**img – 文字列**&#x200B;画像。

**label – 文字列**&#x200B;関連ラベル。

**ノーラベル – ブール値** コントロールの前にラベルがありません。

**noToolbar - ブール値** ツールバーを非表示にします。

**orderBy – 要素** リストのスケジュール設定。

**readOnly - ブール値**&#x200B;は、コントロールを強制的に読み取り専用にします。

**sysFilter - element** リスト フィルタリング。

**toobarAlign - string**&#x200B;横組み\|縦組み。

**toobarCaption - ツールバーに表示される文字列** ラベル。

**xpath-link - リストの文字列** リンク （グループの例を参照）。

**xpathIndex – 文字列**&#x200B;選択インデックスは、このパスで指定された場所に保存されます。

**xpathLinkEdit – 編集用の文字列** リンク（グループの例を参照）。

**zoom - ブール値**&#x200B;はリンク編集を許可します。

## 備考

例：

```xml
      <input type="linkList" xpath="operator" enumImage="@type" nolabel="true">
  <input xpath="@name" label="Name" colSize="30"/>
  <input xpath="@login"/>
  <sysFilter>
    <condition expr="@type=1"/>
  </sysFilter>
</input>

<input type="linkList" xpath="operator" enumImage="@type" nolabel="true">
  <input xpath="@name" label="Name" colSize="30"/>
  <input xpath="@login"/>
  <form label="Add operators">
  <input xpath="." type="linkListChoice" xpath-link="recipient" img="nms:group.bmp">
  <input xpath="@lastName"/>
  <input xpath="@firstName"/>
  </input>
  </form>
</input>

<input type="linklist" xpath="rcpGrpRel" zoom="true" label="Recipients" form="nms:recipient"
       xpath-link="rcpGroup"
       xpathLinkEdit="recipient">
  <input xpath="recipient/@lastName"/>
  <input xpath="recipient/@firstName"/>
  <input xpath="recipient/@email"/>
  <input xpath="recipient/@phone"/>
</input>
```
