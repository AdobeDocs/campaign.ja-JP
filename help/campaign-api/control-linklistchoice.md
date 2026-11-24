---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '87'
ht-degree: 2%
---
# LinkListChoice

1つ以上のエンティティの選択。

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**border - string** コントロール アウトライン スタイルを変更します（solid、double、inset、outset、none）。

**dblClickAction - string** ダブルクリックで開くフォームの名前。

**font-size - integer** フォントサイズを変更します。

**label – 文字列**&#x200B;関連ラベル。

**multiSelection - ブール値**&#x200B;複数の選択を許可

**ノーラベル – ブール値**&#x200B;関連するラベルを非表示にします。

**readOnly - ブール値**&#x200B;は、コントロールを強制的に読み取り専用にします。

**serialize - ブール値** ユーザー設定の最後の選択を保存します。wu

**xpath-link - リストの文字列** リンク。

## 備考

例：

```xml
      <input xpath="." type="linkListChoice" xpath-link="operator">
  <input xpath="[/]"  label="Operator or named right "/>
  <input xpath="@type"/>
  <input xpath="comment"/>
  <sysFilter>
    <condition expr="@type <> 1"/>
  </sysFilter>
  <orderBy>
    <node expr="@type"/>
  </orderBy>
</input>
```
