---
title: Campaign 入力フォーム
description: 入力フォームのカスタマイズ方法を学ぶ
exl-id: 62908bba-9cfa-42b6-b463-b601496d535b
source-git-commit: d2f4e54b0c37cc019061dd3a7b7048cd80876ac0
workflow-type: tm+mt
source-wordcount: '2574'
ht-degree: 100%

---

# 入力フォームの概要{#gs-ac-forms}

スキーマを作成または拡張する場合は、関連する入力フォームを作成または変更して、それらの変更をエンドユーザーに表示する必要があります。

入力フォームを使用すると、データスキーマに関連付けられたインスタンスを Adobe Campaign クライアントコンソールから編集できます。 フォームは名前と名前空間で識別します。

フォームの識別キーは、名前空間と名前をコロンで区切った文字列です（例：cus:contact）。

## 入力フォームの編集

クライアントコンソールの&#x200B;**[!UICONTROL 管理]／[!UICONTROL 設定]／[!UICONTROL 入力フォーム]**&#x200B;フォルダーから入力フォームを作成して設定します。

![](assets/form_arbo.png)

編集ゾーンを使用すると、入力フォームの XML コンテンツを入力できます。

![](assets/form_edit.png)

プレビューで入力フォームを表示できます。

![](assets/form_preview.png)

## フォームの構造

フォームは、構造化された XML 文書として記述され、フォームスキーマ **xtk:form** の文法に従います。

入力フォームの XMLドキュメントには、フォーム名と名前空間を設定するために、**name** 属性と **namespace** 属性を持つ`<form>`ルート要素が含まれている必要があります。

```
<form name="form_name" namespace="name_space">
...
</form>
```

デフォルトでは、フォームは同じ名前と名前空間を持つデータスキーマに関連付けられています。フォームに別の名前を関連付けるには、`<form>` 要素の **entity-schema** 属性をスキーマキーの名前に設定します。 入力フォームの構造を理解するために、「cus:recipient」のサンプルスキーマを使用したインターフェイスを説明します。

```
<srcSchema name="recipient" namespace="cus">
  <enumeration name="gender" basetype="byte">    
    <value name="unknown" label="Not specified" value="0"/>    
    <value name="male" label="Male" value="1"/>   
    <value name="female" label="Female" value="2"/>   
  </enumeration>

  <element name="recipient">
    <attribute name="email" type="string" length="80" label="Email" desc="E-mail address of recipient"/>
    <attribute name="birthDate" type="datetime" label="Date"/>
    <attribute name="gender" type="byte" label="Gender" enum="gender"/>
  </element>
</srcSchema>
```

サンプルスキーマに基づく入力フォーム：

![](assets/do-not-localize/form_exemple1.png)

```
<form name="recipient" namespace="cus">
  <input xpath="@gender"/>
  <input xpath="@birthDate"/>
  <input xpath="@email"/>
</form>
```

編集コントロールの記述は、`<form>` ルート要素から始めます。 編集コントロールが、スキーマ内のフィールドのパスを格納した **xpath** 属性を持つ **`<input>`** 要素に入力されます。

編集コントロールは、対応するデータタイプに自動的に適応し、スキーマで定義されているラベルを使用します。

>[!NOTE]
>
>**label** 属性を `<input>` 要素に追加すると、データスキーマで定義されたラベルを上書きできます。\
>`<input label="E-mail address" xpath="@name" />`

デフォルトでは、各フィールドが 1 行に表示され、データのタイプに応じて、すべての空きスペースを占有します。

![](../assets/do-not-localize/book.png) すべてのフォーム属性については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/developer/campaign-api/api/control-Button.html?lang=ja)を参照してください。

## フォーマット設定 {#formatting}

コントロールのレイアウトは、HTML テーブルで使用するレイアウトに似ています。1 つのコントロールを複数の列に分割したり、複数の要素を組み合わせたり、空きスペースの占有を指定したりできます。ただし、書式設定は領域を縦横比で分割する場合にのみ使用できます。オブジェクトの固定寸法を指定することはできません。

上記の例のコントロールを 2 つの列に表示するには、次の設定を行います。

![](assets/do-not-localize/form_exemple2.png)

```
<form name="recipient" namespace="cus">
  <container colcount="2">
    <input xpath="@gender"/>
    <input xpath="@birthDate"/>
    <input xpath="@email"/>
  </container>
</form>
```

**`<container>`** 要素と **colcount** 属性を使用すると、2 つの列に子コントロールを強制的に表示できます。

コントロールの **colspan** 属性は、値に入力された列数だけコントロールを拡張します。

![](assets/do-not-localize/form_exemple3.png)

```
<form name="recipient" namespace="cus">
  <container colcount="2">
    <input xpath="@gender"/>
    <input xpath="@birthDate"/>
    <input xpath="@email" colspan="2"/>
  </container>
</form> 
```

**type=&quot;frame&quot;** 属性を設定すると、コンテナは、**label** 属性に含まれるラベルを持つ子コントロールの周囲にフレームを追加します。

![](assets/do-not-localize/form_exemple4.png)

```
<form name="recipient" namespace="cus">
  <container colcount="2" type="frame" label="General">
    <input xpath="@gender"/>
    <input xpath="@birthDate"/>
    <input xpath="@email" colspan="2"/>
  </container>
</form>
```

**`<static>`** 要素を使用して、入力フォームの形式を設定できます。

![](assets/do-not-localize/form_exemple5.png)

```
<form name="recipient" namespace="cus">
  <static type="separator" colspan="2" label="General"/>
  <input xpath="@gender"/>
  <input xpath="@birthDate"/>
  <input xpath="@email" colspan="2"/>
  <static type="help" label="General information about recipient with date of birth, gender, and e-mail address." colspan="2"/>
</form>
```

**区切り文字**&#x200B;タイプを含む **`<static>`** タグを使用すると、**label** 属性に含まれるラベルを含む区切りバーを追加できます。

ヘルプタイプの `<static>` タグを使用してヘルプテキストが追加されました。 テキストの内容が **label** 属性に入力されます。

## コンテナの使用 {#containers}

**コンテナ**&#x200B;を使用して、一連のコントロールをグループ化します。 これらは **`<container>`** 要素で表されます。コンテナは、複数の列のコントロールを書式設定する際に使用します。

`<container>` の **xpath** 属性を使用すると、子コントロールを簡単に参照できます。 コントロールの参照は、親 `<container>` の親に対する相対パスになります。

「xpath」を使用しないコンテナの例：

```
<container colcount="2">
  <input xpath="location/@zipCode"/>
  <input xpath="location/@city"/>
</container>
```

「location」という要素に「xpath」を追加した例を次に示します。

```
<container colcount="2" xpath="location">
  <input xpath="@zipCode"/>
  <input xpath="@city"/>
</container>
```

コンテナを使用して、ページ形式の一連のフィールドを使用した複雑なコントロールを作成します。

### タブの追加（notebook） {#tab-container}

**notebook** コンテナを使用して、タブからアクセス可能なページのデータの形式を設定します。

![](assets/do-not-localize/form_exemple6.png)

```
<container type="notebook">
  <container colcount="2" label="General">
    <input xpath="@gender"/>
    <input xpath="@birthDate"/>
    <input xpath="@email" colspan="2"/>
  </container>
  <container colcount="2" label="Location">
    ...
  </container>
</container>
```

メインコンテナは、**type=&quot;notebook&quot;** 属性で定義します。タブは子コンテナで宣言され、タブのラベルは **label** 属性から投入されます。

**style=&quot;down&quot;** 属性を追加して、タブラベルをコントロールの真下に配置します。この属性はオプションです。デフォルト値は、**&quot;up&quot;** です。

![](assets/do-not-localize/form_exemple7.png)

`<container style="down" type="notebook">  ... </container>`

### アイコンの追加（iconbox）  {#icon-list}

このコンテナを使用すると、表示するページを選択できる垂直アイコンバーを表示できます。

![](assets/do-not-localize/form_exemple8.png)

```
<container type="iconbox">
  <container colcount="2" label="General" img="xtk:properties.png">
    <input xpath="@gender"/>
    <input xpath="@birthDate"/>
    <input xpath="@email" colspan="2"/>
  </container>
  <container colcount="2" label="Location" img="nms:msgfolder.png">
    ...
  </container>
</container>
```

メインコンテナは、**type=&quot;iconbox&quot;** 属性で定義します。アイコンに関連付けるページは、子コンテナで宣言します。アイコンのラベルは、**label** 属性から投入されます。

ページのアイコンは、`img="<image>"` 属性から投入されます。`<image>` は、名前と名前空間で構成されるキーに対応する画像の名前です（例：&quot;xtk:properties.png&quot;）。

画像は、**[!UICONTROL 管理／設定／画像]**&#x200B;ノードから入手できます。

### コンテナを非表示（visibleGroup） {#visibility-container}

動的条件を使用して、一連のコントロールを非表示にできます。

次の例は、「性別」フィールドの値に対するコントロールの表示を示しています。

```
<container type="visibleGroup" visibleIf="@gender=1">
  ...
</container>
<container type="visibleGroup" visibleIf="@gender=2">
  ...
</container>
```

表示コンテナは、属性 **type=&quot;visibleGroup&quot;** で定義します。表示条件は、**visibleIf** 属性に含まれます。

条件の構文の例：

* **visibleIf=&quot;@email=&#39;peter.martinezATneeolane.net&#39;&quot;**：文字列型のデータに対して同等であるかテストします。比較する値は引用符で囲む必要があります。
* **visibleIf=&quot;@gender >= 1 and @gender != 2&quot;**：数値の条件です。
* **visibleIf=&quot;@boolean1=true or @boolean2=false&quot;**：ブール値フィールドをテストします。

### 条件付き表示（enabledGroup） {#enabling-container}

このコンテナを使用すると、動的条件に基づく一連のデータを有効または無効にできます。 コントロールを無効にすると、コントロールを編集できなくなります。 次の例は、「性別」フィールドの値からコントロールを有効にする方法を示しています。

```
<container type="enabledGroup" enabledIf="@gender=1">
  ...
</container>
<container type="enabledGroup" enabledIf="@gender=2">
  ...
</container>
```

有効化コンテナは、**type=&quot;enabledGroup&quot;** 属性で定義します。**enabledIf** 属性にアクティブ化の条件が含まれています。

## リンクの編集 {#editing-a-link}

リンクは、データスキーマ内で次のように宣言します。

```
<element label="Company" name="company" target="cus:company" type="link"/>
```

入力フォーム内のリンクの編集コントロールは次のとおりです。

![](assets/do-not-localize/form_exemple9.png)

```
<input xpath="company"/>
```

ターゲットの選択は、編集フィールドからアクセスできます。 入力するターゲット要素は、先行入力機能により、最初の数文字を入力することで簡単に見つけることができます。次に、対象のスキーマで定義されている&#x200B;**文字列計算**&#x200B;に基づいて検索がおこなわれます。 検証後、コントロールにスキーマが存在しない場合は、その場でターゲットを作成する確認メッセージが表示されます。 確認すると、ターゲットテーブルに新しいレコードが作成され、リンクが関連付けられます。

ドロップダウンリストを使用して、作成済みのレコードのリストからターゲット要素を選択します。

「**[!UICONTROL リンクの編集]**（フォルダー）」アイコンをクリックすると、ターゲット要素とフィルターゾーンのリストを含む選択フォームが起動します。

「**[!UICONTROL リンクの編集]**（虫めがね）」アイコンをクリックすると、リンクされた要素の編集フォームが起動します。使用するフォームは、対象スキーマのキーに基づいてデフォルトで推定されます。**form** 属性を使用すると、編集フォームの名前を強制できます（例：&quot;cus:company2&quot;）。

入力フォームのリンク定義を使用して **`<sysfilter>`** 要素を追加することによって、ターゲット要素の選択肢を制限できます。

```
<input xpath="company">
  <sysFilter>
    <condition expr="[location/@city] =  'Newton"/>
  </sysFilter>
</input>
```

**`<orderby>`** 要素を使用してリストを並べ替えることもできます。

```
<input xpath="company">
  <orderBy>
    <node expr="[location/@zipCode]"/>
  </orderBy>
</input>
```

## コントロールプロパティ {#control-properties}

* **noAutoComplete**：先行入力機能を無効にします（値が「true」の場合）。
* **createMode**：リンクが存在しない場合、その場でリンクを作成します。次のような値を選択できます。

   * **none**：作成を無効にします。リンクが存在しない場合、エラーメッセージが表示されます
   * **inline**：編集フィールドにコンテンツを含むリンクを作成します
   * **edition**：リンク上に編集フォームを表示します。フォームを検証する際にデータが保存されます（デフォルトモード）。

* **noZoom**：リンク上に編集フォームがない（値が「true」の場合）
* **form**：ターゲット要素の編集フォームをオーバーロードします

## リンクのリストの追加（非連結）  {#list-of-links}

コレクション要素（unbound = &quot;true&quot;）としてデータスキーマに入力されたリンクは、そのリンクに関連付けられたすべての要素を表示するためにリストを経由する必要があります。

原則として、最適化されたデータを読み込んで（データバッチによるダウンロード、リストが表示されている場合のみの実行）リンクされた要素のリストを表示します。

スキーマ内のコレクションリンクの例：

```
<element label="Events" name="rcpEvent" target="cus:event" type="link" unbound="true">
...
</element>
```

入力フォームのリスト：

```
 <input xpath="rcpEvent" type="linklist">
  <input xpath="@label"/>
  <input xpath="@date"/>
</input>
```

リスト制御は、**type=&quot;linklist&quot;** 属性で定義されます。 リストパスは、コレクションリンクを参照する必要があります。

列は、リストの **`<input>`** 要素を介して宣言されます。 **xpath** 属性は、ターゲットスキーマ内のフィールドのパスを参照します。

（スキーマ内のリンク上に定義された）ラベル付きのツールバーは、自動的にリストの上に配置されます。

リストは、「**[!UICONTROL フィルター]**」ボタンでフィルタリングでき、列の追加と並べ替えするよう設定できます。

「**[!UICONTROL 追加]**」および「**[!UICONTROL 削除]**」ボタンを使用すると、リンク上のコレクション要素を追加および削除できます。 デフォルトでは、要素を追加すると、ターゲットスキーマの編集フォームが起動します。

リストの **`<input>`** タグで **zoom=&quot;true&quot;** 属性が完了すると、**[!UICONTROL 詳細]**&#x200B;ボタンが自動的に追加されます。これにより、選択した行の編集フォームを開始できます。

フィルタリングと並べ替えは、リストの読み込み時に適用できます。

```
 <input xpath="rcpEvent" type="linklist">
  <input xpath="@label"/>
  <input xpath="@date"/>
  <sysFilter>
    <condition expr="@type = 1"/>
  </sysFilter>
  <orderBy>
    <node expr="@date" sortDesc="true"/>
  </orderBy>
</input>
```

## 関係テーブルの定義 {#relationship-table}

関連テーブルを使用すると、2 つのテーブルをN-N カーディナリティでリンクできます。関係テーブルには、2 つのテーブルへのリンクのみが含まれます。

したがって、リストに要素を追加すると、関係テーブルの 2 つのリンクのいずれかからリストを完成させることができます。

スキーマ内の関係テーブルの例：

```
<srcSchema name="subscription" namespace="cus">
  <element name="recipient" type="link" target="cus:recipient" label="Recipient"/>
  <element name="service" type="link" target="cus:service" label="Subscription service"/>
</srcSchema>
```

この例では、「cus:recipient」スキーマの入力フォームから始めます。 リストは、サービスに対する購読との関連付けを表示し、既存のサービスを選択して購読を追加できるようにする必要があります。

![](assets/do-not-localize/form_exemple12.png)

```
<input type="linklist" xpath="subscription" xpathChoiceTarget="service" xpathEditTarget="service" zoom="true">
  <input xpath="recipient"/>
  <input xpath="service"/>
</input>
```

**xpathChoiceTarget** 属性を使用すると、入力したリンクから選択フォームを起動できます。 関連テーブルレコードを作成すると、現在の受信者と選択したサービスへのリンクが自動的に更新されます。

>[!NOTE]
>
>**xpathEditTarget** 属性を使用すると、入力したリンク上で選択した行を強制的に編集できます。

### リストのプロパティ {#list-properties}

* **noToolbar**：ツールバーを非表示にする（値「true」）
* **toolbarCaption**：ツールバーのラベルをオーバーロードする
* **toolbarAlign**：ツールバーの垂直または水平ジオメトリを修正する（使用可能な値：&quot;vertical&quot;|&quot;horizontal&quot;）
* **img**：リストに関連付けられた画像を表示する
* **form**：ターゲット要素の編集フォームをオーバーロードする
* **zoom**：ターゲットの要素を編集するための&#x200B;**[!UICONTROL ズーム]**&#x200B;ボタンを追加します。
* **xpathEditTarget**：入力されたリンクの編集を設定します
* **xpathChoiceTarget**：さらに、入力したリンクの選択フォームを起動します

## メモリリストコントロールの追加 {#memory-list-controls}

メモリリストを使用すると、リストデータのプリロードを使用してコレクション要素を編集できます。 このリストはフィルタリングまたは設定できません。

これらのリストは、XML でマッピングされたコレクション要素またはボリュームの少ないリンクで使用されます。

## 列リストの追加 {#column-list}

このコントロールは、「追加」ボタンと「削除」ボタンを含むツールバー付きの編集可能な列リストを表示しています。

```
<input xpath="rcpEvent" type="list">
  <input xpath="@label"/>
  <input xpath="@date"/>
</input>
```

リストコントロールは、**type=&quot;list&quot;** 属性を使用して設定する必要があります。リストのパスは、コレクション要素を参照する必要があります。

列は、リストの子 **`<input>`** タグで宣言されます。 列のラベルとサイズは、**label** 属性と **colSize** 属性を使用して強制できます。

>[!NOTE]
>
>並べ替え順の矢印は、**ordered=&quot;true&quot;** 属性がデータスキーマのコレクション要素に追加されたときに自動的に追加されます。

ツールバーのボタンは、水平方向に並べることができます。

```
<input nolabel="true" toolbarCaption="List of events" type="list" xpath="rcpEvent" zoom="true">
  <input xpath="@label"/>
  <input xpath="@date"/>
</input>
```

**toolbarCaption** 属性は、ツールバーの水平方向の配置を強制し、リスト上にタイトルを入力します。

### リストのズームの有効化 {#zoom-in-a-list}

リスト内のデータの挿入と編集は、別の編集フォームに入力できます。

```
<input nolabel="true" toolbarCaption="List of events" type="list" xpath="rcpEvent" zoom="true" zoomOnAdd="true">
  <input xpath="@label"/>
  <input xpath="@date"/>

  <form colcount="2" label="Event">
    <input xpath="@label"/>
    <input xpath="@date"/>
  </form>
</input>
```

編集フォームは、リスト定義の `<form>` 要素から入力します。 編集フォームの構造は、入力フォームの構造と同じです。 リストの **`<input>`** タグで **zoom=&quot;true&quot;** 属性が完了すると、「**[!UICONTROL 詳細]**」ボタンが自動的に追加されます。 この属性を使用すると、選択した行の編集フォームを起動できます。

>[!NOTE]
>
>**zoomOnAdd=&quot;true&quot;** 属性を追加すると、リスト要素の挿入時に編集フォームが強制的に呼び出されます。

### リストのプロパティ {#list-properties-1}

* **noToolbar**：ツールバーを非表示にする（値「true」）
* **toolbarCaption**：ツールバーのラベルをオーバーロードする
* **toolbarAlign**：ツールバーの位置を変更する（使用可能な値：&quot;vertical&quot;|&quot;horizontal&quot;）
* **img**：リストに関連付けられた画像を表示する
* **form**：ターゲット要素の編集フォームをオーバーロードする
* **zoom**：ターゲット要素を編集するための「**[!UICONTROL ズーム]**」ボタンを追加する
* **zoomOnAdd**：追加時に編集フォームを起動する
* **xpathChoiceTarget**：さらに、入力したリンクの選択フォームを起動します

## 編集不可フィールドの追加 {#non-editable-fields}

フィールドを表示し、編集されないようにするには、**`<value>`** タグを使用するか、**`<input>`** タグの **readOnly=&quot;true&quot;** 属性に入力します。

「性別」フィールドの例：

![](assets/do-not-localize/form_exemple16.png)

```
<value value="@gender"/>
<input xpath="@gender" readOnly="true"/>
```

## ラジオボタンの追加 {#radio-button}

ラジオボタンを使用すると、複数のオプションから選択できます。 **`<input>`** タグは、可能なオプションを一覧表示するために使用され、**checkedValue** 属性は選択肢に関連付けられた値を指定します。

「性別」フィールドの例：

```
<input type="RadioButton" xpath="@gender" checkedValue="0" label="Choice 1"/>
<input type="RadioButton" xpath="@gender" checkedValue="1" label="Choice 2"/>
<input type="RadioButton" xpath="@gender" checkedValue="2" label="Choice 3"/>
```

![](assets/do-not-localize/form_exemple17.png)

## チェックボックスの追加 {#checkbox}

チェックボックスはブール状態（選択されているかどうか）を反映します。 デフォルトでは、このコントロールは「ブール」（true／false）フィールドで使用されます。 デフォルト値が 0 または 1 の変数は、このボタンに関連付けることができます。 この値は、**checkValue** 属性を介してオーバーロードできます。

```
<input xpath="@boolean1"/>
<input xpath="@field1" type="checkbox" checkedValue="Y"/>
```

![](assets/do-not-localize/form_exemple20.png)

## ナビゲーション階層の編集 {#navigation-hierarchy-edit}

このコントロールは、編集する一連のフィールドにツリーを構築します。

編集するコントロールは、ツリーコントロールの **`<input>`** タグの下に入力された **`<container>`** にグループ化されます。

```
<input nolabel="true" type="treeEdit">
  <container label="Text fields">
    <input xpath="@text1"/>
    <input xpath="@text2"/>
  </container>
  <container label="Boolean fields">
    <input xpath="@boolean1"/>
    <input xpath="@boolean2"/>
  </container>
</input>
```

![](assets/do-not-localize/form_exemple18.png)

## 式フィールドの追加 {#expression-field}

式フィールドは、式からフィールドを動的に更新します。**`<input>`** タグは、更新するフィールドのパスを入力するための **xpath** 属性と、更新式を含む **expr** 属性とともに使用されます。

```
<!-- Example: updating the boolean1 field from the value contained in the field with path /tmp/@flag -->
<input expr="Iif([/tmp/@flag]=='On', true, false)" type="expr" xpath="@boolean1"/>
<input expr="[/ignored/@action] == 'FCP'" type="expr" xpath="@launchFCP"/>
```

## フォームのコンテキスト {#context-of-forms}

入力フォームを実行すると、編集するエンティティのデータを含む XML ドキュメントが初期化されます。 このドキュメントはフォームのコンテキストを表し、ワークスペースとして使用できます。

### コンテキストの更新 {#updating-the-context}

フォームのコンテキストを変更するには、`<set expr="<value>" xpath="<field>"/>` タグを使用します。`<field>` は出力先フィールド、`<value>` は更新式または値です。

`<set>` タグの使用例：

* **`<set expr="'Test'" xpath="/tmp/@test" />`**：「Test」値を一時的な場所 /tmp/@test1 に配置する
* **`<set expr="'Test'" xpath="@lastName" />`**：「lastName」属性のエンティティを「Test」値で更新する
* **`<set expr="true" xpath="@boolean1" />`**：「boolean1」フィールドの値を「true」に設定する
* **`<set expr="@lastName" xpath="/tmp/@test" />`**：「lastName」属性の内容に合わせて更新

フォームのコンテキストは、**`<enter>`** タグと **`<leave>`** タグを使用してフォームを初期化するときおよび閉じるときに更新できます。

```
<form name="recipient" namespace="cus">
  <enter>
    <set...
  </enter>
  ...
  <leave>
    <set...
  </leave>
</form>
```

>[!NOTE]
>
>`<enter>` と `<leave>` タグは、ページの `<container>`（「notebook」タイプと「iconbox」タイプ）で使用できます。

### 式の言語 {#expression-language-}

条件付きテストを実行するために、フォーム定義でマクロ言語を使用できます。

**`<if expr="<expression>" />`** タグは、式が検証された場合に、タグで指定された命令を実行します。

```
<if expr="([/tmp/@test] == 'Test' or @lastName != 'Doe') and @boolean2 == true">
  <set xpath="@boolean1" expr="true"/>
</if>
```

**`<check expr="<condition>" />`** タグと **`<error>`** タグを組み合わせると、フォームの検証がおこなわれなくなり、条件が満たされない場合はエラーメッセージが表示されます。

```
<leave>
  <check expr="/tmp/@test != ''">
    <error>You must populate the 'Test' field!</error> 
  </check>
</leave>
```

## アシスタント（ウィザード） {#wizards}

アシスタントが、ページ形式の一連のデータ入力手順をガイドします。 入力したデータは、フォームを検証するときに保存されます。

ウィザードを追加するには、次のタイプの構造を使用します。

```
<form type="wizard" name="example" namespace="cus" img="nms:rcpgroup32.png" label="Wizard example" entity-schema="nms:recipient">
  <container title="Title of page 1" desc="Long description of page 1">
    <input xpath="@lastName"/>
    <input xpath="comment"/>
  </container>
  <container title="Title of page 2" desc="Long description of page 2">
    ...
  </container>
  ...
</form>
```

`<form>` 要素に **type=&quot;wizard&quot;** 属性が存在する場合は、フォームの構築時にウィザードモードを定義できます。 各ページは、`<container>` 要素で完成させます。これらの各要素は、`<form>` 要素の子要素です。ページの `<container>` 要素には、title と desc のタイトル属性を設定します。これにより、ページタイトルの下に説明が表示されます。**[!UICONTROL 前へ]**&#x200B;ボタンと&#x200B;**[!UICONTROL 次へ]**&#x200B;ボタンが自動的に追加され、ページ間を移動できるようになります。

「**[!UICONTROL 完了]**」ボタンを押すと、入力したデータが保存され、フォームが閉じます。

### SOAP メソッド {#soap-methods}

SOAP メソッドを実行するには、ページの最後に追加した **`<leave>`** タグから開始します。

**`<soapcall>`** タグには、次の入力パラメーターを持つメソッドの呼び出しが含まれます。

```
<soapCall name="<name>" service="<schema>">
  <param type="<type>" exprIn="<xpath>"/>  
  ...
</soapCall>
```

サービスの名前とその実装スキーマは、**`<soapcall>`** タグの **name** 属性と **service** 属性を介して入力します。

入力パラメーターは、**`<soapcall>`** タグの **`<param>`** 要素で記述します。

**type** 属性を使用して、パラメータータイプを指定する必要があります。使用できるタイプは次のとおりです。

* **string**：文字列
* **boolean**：ブール値
* **byte**：8 ビットの整数
* **short**：16 ビットの整数
* **long**：32 ビットの整数
* **short**：16 ビットの整数
* **double**：倍精度浮動小数点数
* **DOMElement**：要素タイプのノード

**exprIn** 属性には、パラメーターとして渡すデータの場所が含まれます。

**例**：

```
<leave>
  <soapCall name="RegisterGroup" service="nms:recipient">         
    <param type="DOMElement" exprIn="/tmp/entityList"/>         
    <param type="DOMElement" exprIn="/tmp/choiceList"/>         
    <param type="boolean"    exprIn="true"/>       
  </soapCall>
</leave>
```
