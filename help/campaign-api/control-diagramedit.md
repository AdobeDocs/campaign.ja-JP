---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '88'
ht-degree: 1%
---
# DiagramEdit

このコントロールは、ワークフローやアンケートなどのダイアグラムの編集に使用されます。

![DiagramEdit コントロール ](assets/diagramedit.d750db7e.png)

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**border - string** コントロール アウトライン スタイルを変更します（solid、double、inset、outset、none）。

**label – 文字列**&#x200B;関連ラベル。

**ノーラベル – ブール値** ラベルをヘルプバブルとして表示します。

**readOnly - ブール値**&#x200B;は、コントロールを強制的に読み取り専用にします。

## 備考

ツールバーはパーソナライズできます。このコントロールの各サブ要素は、ツールバーの追加のボタンと一致します。

```xml
<input type="diagramEdit" xpath=".">
  <input type="separator"/>
  <input img="xtk:properties.png" label="Properties" resetForm="true" prebuildSubForm="true">
    <form name="properties" label="Properties">
      <input xpath="/tmp/@test"/>
    </form>
  </input>
  <input type="separator"/>
  <input img="nms:prepare.png" label="Publish" checkModify="true">
    <form name="properties" label="Properties">
      <input xpath="/tmp/@test"/>
    </form>
  </input>
</input>
```

ツールバーのボタンについて詳しくは、SubFormButton コントロールのドキュメントを参照してください。
