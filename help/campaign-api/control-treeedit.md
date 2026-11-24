---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '151'
ht-degree: 1%
---
# TreeEdit

様々なカテゴリにグループ化された様々な値を表示および編集するための制御。

![TreeEdit コントロール &#x200B;](assets/treeedit.253f1374.png)

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**border - string** コントロール アウトライン スタイルを変更します（solid、double、inset、outset、none）。

**編集可能 – 文字列**&#x200B;は、変更を自動処理します（デフォルトではtrue）。

**font-size - integer** フォントサイズを変更します。

**label – 文字列**&#x200B;関連ラベル。

**noImage - string** リスト内の要素の画像を非表示にします。

**ノーラベル – ブール値**&#x200B;関連するラベルを非表示にします。

**readOnly - ブール値**&#x200B;は、コントロールを強制的に読み取り専用にします。

## 備考

サブエレメントのプロパティ

* visibleIf：要素を表示または非表示にするXTK条件。
* label：要素のラベル。
* exprLabel：式の形式の要素のラベル。
* xpath：要素のXPath。
* img：要素の画像。

入力サブエレメントのプロパティ

* editable：編集可能な値。 デフォルト値はルート要素から継承されます。

コンテナサブエレメントのプロパティ

* collapsed: true\|false サブエレメントを表示または非表示にします。

例：

```xml
<input nolabel="true" type="treeEdit">
  <container label="Text fields">
    <input xpath="@text1"/>
    <input xpath="@text2"/>
    <input xpath="@text3"/>
    <input xpath="@text4"/>
    <input xpath="@text5"/>
  </container>
  <container label="Boolean fields">
    <input xpath="@boolean1"/>
    <input xpath="@boolean2"/>
    <input xpath="@boolean3"/>
  </container>
</input>
    
```
