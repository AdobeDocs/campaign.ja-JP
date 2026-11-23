---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '219'
ht-degree: 0%
---
# LinkEdit

リンクの編集を制御します。

![LinkEdit コントロール ](assets/linkedit.7cb7bf14.png)

## プロパティ

**backColor – 文字列**&#x200B;背景色（btnshadow、白）。

**border - string** コントロール アウトライン スタイルを変更します（solid、double、inset、outset、none）。

**choiceButton - ブール値**&#x200B;選択ボタンを非表示または表示します（デフォルトでは非表示）。

**computeStringExpr – 文字列**&#x200B;計算フィールド式。

**computestringKey - string**&#x200B;外部キーではなく、計算された文字列を更新します。

**computeStringAlias - string**&#x200B;計算された文字列エイリアス。

**createMode – 文字列**&#x200B;が存在しない（なし、インライン）場合は、デフォルトの編集モードでリンクを作成します。

**externalKey - ブール値**&#x200B;外部キーを使用します。

**font-size - integer** フォントサイズを変更します。

**form - string**&#x200B;は、リンク編集フォームを強制的に使用します。

**label – 文字列**&#x200B;関連ラベル。

**loadEntityOnChange - boolean** リンクが変更されたときにエンティティを再ロードします。

**mandatory - ブール値**&#x200B;は空の値を拒否します。

**noAutoComplete - ブール値**&#x200B;自動補完モードを無効にします。

**noEdition - ブール値** リンクを変更できません。

**ノーラベル – ブール値**&#x200B;関連するラベルを非表示にします。

**notifyPathList – 文字列** コンテキストに読み込むために、リンクされた要素からコンマで区切られたXPathのリスト。

**noTransaction - ブール値** トランザクションモードを無効にします。

**noZoom - ブール値** リンク編集フォームがありません。

**orderBy – 要素**&#x200B;の選択のスケジュール設定。

**readOnly - ブール値**&#x200B;は、コントロールを強制的に読み取り専用にします。

**必須 – ブール値** フィールドは必須です。

**スキーマ – リンクの文字列** スキーマ。

**serialize - ブール値** ユーザー設定の最後の選択を保存します。

**sysFilter - element**&#x200B;選択肢の制限。

**xpathMandatory - string** リンクを空にできるかどうかを示すブール型プロパティへのパス。

## 備考

例：

```xml
<input xpath="operator">
  <sysFilter>
    <condition expr="@type= 1/>
  </sysFilter>
  <orderBy>
    <node expr="@name"/>
  </orderBy>
</input>

<input xpath="/tmp/recipient" type="linkEdit" label="Recipient"
       schema="nms:recipient">
```
