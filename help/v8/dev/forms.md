---
solution: Campaign Classic
product: campaign
title: キャンペーン入力フォーム
description: 入力フォームのカスタマイズ方法
translation-type: tm+mt
source-git-commit: 8e90eb762a6e08077270d4f5852bfc37ac783122
workflow-type: tm+mt
source-wordcount: '2579'
ht-degree: 3%

---

# 入力フォームの概要{#gs-ac-forms}

スキーマを作成または拡張する場合は、関連する入力フォームを作成または変更して、それらの変更をエンドユーザーに表示させる必要があります。

入力フォームを使用すると、Adobe Campaignクライアントコンソールから、データスキーマに関連付けられたインスタンスを編集できます。 フォームは名前と名前空間で識別されます。

フォームのIDキーは、名前空間と名前をコロンで区切った文字列です。次に例を示します。「cus:contact」

## 入力フォームの編集

クライアントコンソールの&#x200B;**[!UICONTROL 管理]/[!UICONTROL 設定]/[!UICONTROL 入力フォーム]**&#x200B;フォルダーから、入力フォームを作成して設定します。

![](assets/form_arbo.png)

編集領域を使用して、入力フォームの XML コンテンツを入力できます。

![](assets/form_edit.png)

プレビューは、入力フォームの表示を生成します。

![](assets/form_preview.png)

## フォームの構造

フォームの説明は、フォームスキーマ&#x200B;**xtk:form**&#x200B;の文法を守る構造化XMLドキュメントです。

入力フォームのXMLドキュメントには、`<form>`ルート要素が含まれており、そのルート要素には&#x200B;**name**&#x200B;および&#x200B;**名前空間**&#x200B;属性が含まれていて、フォーム名と名前空間が入力されます。

```
<form name="form_name" namespace="name_space">
...
</form>
```

デフォルトでは、フォームはデータスキーマに同じ名前と名前空間で関連付けられます。 フォームに別の名前を関連付けるには、`<form>`要素の&#x200B;**entity-entity**&#x200B;属性をスキーマキーの名前に設定します。 入力フォームの構造を理解するために、「cus:受信者」のサンプルスキーマを使用したインターフェイスを説明します。

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

編集の説明は、`<form>`ルート要素の開始を制御します。 編集コントロールが、スキーマ内のフィールドのパスを格納した **xpath** 属性を持つ **`<input>`** 要素に入力されます。

編集コントロールは、対応するデータタイプに自動的に適応し、スキーマで定義されているラベルを使用します。

>[!NOTE]
>
>**label**&#x200B;属性を`<input>`要素に追加すると、データスキーマで定義されたラベルを上書きできます。\
>`<input label="E-mail address" xpath="@name" />`

デフォルトでは、各フィールドは1行に表示され、データの種類に応じて使用可能なすべてのスペースを占有します。

:arrow_upper_right:すべてのフォーム属性は、[Campaign Classicドキュメント](https://docs.adobe.com/content/help/en/campaign-classic/technicalresources/api/control-Button.html)に一覧表示されます。

## 書式設定 {#formatting}

コントロールのレイアウトは、HTMLテーブルで使用されているレイアウトと同じように見えます。コントロールを複数の列に分割したり、要素をインターレースしたり、使用可能な領域の占有を指定したりできます。 ただし、書式設定は領域を縦横比で分割する場合にのみ使用できます。オブジェクトに固定寸法を指定することはできません。

上記の例のコントロールを2つの列に表示するには：

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

**`<container>`**&#x200B;要素と&#x200B;**colcount**&#x200B;属性を使用すると、2つの列に子コントロールを強制的に表示できます。

コントロールの&#x200B;**colspan**&#x200B;属性は、値に入力された列数だけコントロールを拡張します。

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

**type=&quot;frame&quot;**&#x200B;属性を設定すると、コンテナは、**label**&#x200B;属性に含まれるラベルを持つ子コントロールの周囲にフレームを追加します。

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

**`<static>`**&#x200B;要素を使用して、入力フォームの形式を設定できます。

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

**区切り文字**&#x200B;タイプを含む&#x200B;**`<static>`**&#x200B;タグを使用すると、**label**&#x200B;属性に含まれるラベルを含む区切りバーを追加できます。

ヘルプタイプの`<static>`タグを使用してヘルプテキストが追加されました。 テキストの内容が&#x200B;**label**&#x200B;属性に入力されます。

## コンテナ{#containers}を使用

**コンテナ**&#x200B;を使用して、一連のコントロールをグループ化します。 これらは&#x200B;**`<container>`**&#x200B;要素で表されます。 上記の例は、複数の列のコントロールを書式設定する際に使用されています。

`<container>`の&#x200B;**xpath**&#x200B;属性を使用すると、子コントロールを簡単に参照できます。 次に、コントロールの参照は親`<container>`の親に対する相対パスになります。

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

コンテナは、ページ形式の一連のフィールドを使用して複雑なコントロールを作成する場合に使用します。

### 追加タブ（ノートブック） {#tab-container}

**ノートブック**&#x200B;コンテナを使用して、タブからアクセス可能なページのデータの書式を設定します。

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

メインコンテナは、**type=&quot;notebook&quot;**&#x200B;属性で定義します。 タブは子コンテナで宣言され、タブのラベルは&#x200B;**label**&#x200B;属性から入力されます。

&lt;追加a0/>style=&quot;down&quot;**属性を使用して、タブラベルをコントロールの下に垂直に配置します。**&#x200B;この属性はオプションです。 デフォルト値は&#x200B;**&quot;up&quot;**&#x200B;です。

![](assets/do-not-localize/form_exemple7.png)

`<container style="down" type="notebook">  ... </container>`

### 追加アイコン(iconbox) {#icon-list}

このコンテナを使用すると、表示するページを選択できる垂直アイコンバーが表示されます。

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

メインコンテナは、**type=&quot;iconbox&quot;**&#x200B;属性で定義します。 アイコンに関連付けられたページは、子コンテナで宣言されます。 アイコンのラベルは、**label**&#x200B;属性から入力されます。

ページのアイコンは`img="<image>"`属性から入力されます。`<image>`は、名前と名前空間で構成されるキーに対応する画像の名前です（例：&quot;xtk:properties.png&quot;）。

画像は、**[!UICONTROL 管理/設定/画像]**&#x200B;ノードから入手できます。

### コンテナを非表示(visibleGroup) {#visibility-container}

動的条件を使用して、一連のコントロールを非表示にできます。

次の例は、「性別」フィールドの値に対するコントロールの表示/非表示を示しています。

```
<container type="visibleGroup" visibleIf="@gender=1">
  ...
</container>
<container type="visibleGroup" visibleIf="@gender=2">
  ...
</container>
```

表示コンテナは、属性&#x200B;**type=&quot;visibleGroup&quot;**&#x200B;で定義します。 **visibleIf**&#x200B;属性に表示条件が含まれます。

条件の構文の例：

* **visibleIf=&quot;@email=&#39;peter.martinezATneolane.net&#39;&quot;**:文字列型のデータに対して等しい値をテストします。比較値は引用符で囲む必要があります。
* **visibleIf=&quot;@gender >= 1 and @gender != 2&quot;**:条件を数値に設定します。
* **visibleIf=&quot;@boolean1=trueまたは@boolean2=false&quot;**:ブール値フィールドをテストします。

### 条件付き表示(enabledGroup) {#enabling-container}

このコンテナを使用すると、動的条件に基づく一連のデータを有効または無効にできます。 コントロールを無効にすると、コントロールを編集できなくなります。 次の例は、「性別」フィールドの値からコントロールを有効にする方法を示しています。

```
<container type="enabledGroup" enabledIf="@gender=1">
  ...
</container>
<container type="enabledGroup" enabledIf="@gender=2">
  ...
</container>
```

有効化コンテナは、**type=&quot;enabledGroup&quot;**&#x200B;属性で定義します。 **enabledIf**&#x200B;属性にアクティベーション条件が含まれています。

## リンクの編集{#editing-a-link}

データスキーマでは、次のようにリンクが宣言されていることに注意してください。

```
<element label="Company" name="company" target="cus:company" type="link"/>
```

入力フォーム内のリンクの編集コントロールは次のとおりです。

![](assets/do-not-localize/form_exemple9.png)

```
<input xpath="company"/>
```

ターゲットの選択には、編集フィールドからアクセスできます。 入力は、入力した最初の数文字からターゲット要素を簡単に見つけられるように、タイプアヘッドによって支援されます。 次に、対象のスキーマで定義されている&#x200B;**計算文字列**&#x200B;に基づいて検索が行われます。 コントロールに検証後にスキーマが存在しない場合は、オンザフライターゲット作成の確認メッセージが表示されます。 確認は、ターゲットテーブルに新しいレコードを作成し、それをリンクに関連付けます。

ドロップダウンリストを使用して、既に作成されたレコードのリストからターゲット要素を選択します。

**[!UICONTROL リンク]**&#x200B;を変更（フォルダー）アイコンをクリックすると、ターゲット要素とフィルターゾーンのリストを含む選択フォームが起動します。

**[!UICONTROL リンクを編集]** （虫めがね）アイコンをクリックすると、リンクされた要素の編集フォームが起動します。 デフォルトでは、対象スキーマのキーに基づいて使用されるフォームが推定されます。 **form**&#x200B;属性を使用すると、編集フォームの名前(&quot;cus:会社2&quot;)。

入力フォームのリンク定義から&#x200B;**`<sysfilter>`**&#x200B;要素を追加して、ターゲット要素の選択を制限できます。

```
<input xpath="company">
  <sysFilter>
    <condition expr="[location/@city] =  'Newton"/>
  </sysFilter>
</input>
```

**`<orderby>`**&#x200B;要素を使用してリストを並べ替えることもできます。

```
<input xpath="company">
  <orderBy>
    <node expr="[location/@zipCode]"/>
  </orderBy>
</input>
```

## 制御プロパティ{#control-properties}

* **noAutoComplete**:type-ahead（値が「true」の場合）を無効にします。
* **createMode**:リンクが存在しない場合は、その場でリンクが作成されます。次のような値を選択できます。

   * **none**:を無効にします。リンクが存在しない場合は、エラーメッセージが表示されます
   * **inline**:編集フィールドにコンテンツを含むリンクを作成します
   * **edition**:リンク上に編集フォームを表示します。フォームの検証時に、データが保存されます（デフォルトモード）。

* **noZoom**:リンク上に編集フォームがない（値が「true」の場合）
* **form**:ターゲット要素の編集フォームをオーバーロードします。

## リンク追加のリスト（連結されていない） {#list-of-links}

データスキーマにコレクション要素として入力されたリンク(unbound=&quot;true&quot;)は、そのリンクに関連付けられたすべての要素を表示するためにリストを経由する必要があります。

この原則は、データの読み込みが最適化された、リンクされた要素のリストの表示(データバッチによるダウンロード、リストが表示されている場合のみの実行)から構成されます。

スキーマ内のコレクションリンクの例：

```
<element label="Events" name="rcpEvent" target="cus:event" type="link" unbound="true">
...
</element>
```

入力フォームのリスト:

![](assets/do-not-localize/form_exemple11.png)

```
 <input xpath="rcpEvent" type="linklist">
  <input xpath="@label"/>
  <input xpath="@date"/>
</input>
```

リスト制御は、**type=&quot;linklist&quot;**&#x200B;属性で定義されます。 リストパスは、コレクションリンクを参照する必要があります。

列はリストの&#x200B;**`<input>`**&#x200B;要素を介して宣言されます。 **xpath**&#x200B;属性は、ターゲットスキーマ内のフィールドのパスを参照します。

(スキーマ内のリンク上に定義された)ラベル付きのツールバーは、自動的にリストの上に配置されます。

リストは、「**[!UICONTROL フィルター]**」ボタンでフィルタリングでき、列の追加と並べ替えを行うように設定できます。

**[!UICONTROL 追加]**&#x200B;および&#x200B;**[!UICONTROL 削除]**&#x200B;ボタンを使用すると、リンク上のコレクション要素を追加および削除できます。 デフォルトでは、要素を追加すると、ターゲットスキーマの編集フォームが起動します。

リストの&#x200B;**`<input>`**&#x200B;タグで&#x200B;**zoom=&quot;true&quot;**&#x200B;属性が完了すると、**[!UICONTROL 詳細]**&#x200B;ボタンが自動的に追加されます。選択した行の編集フォームを開始できます。

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

## 関係テーブル{#relationship-table}を定義

関連テーブルを使用すると、2つのテーブルをN-N基数とリンクできます。 関係テーブルには、2つのテーブルへのリンクのみが含まれます。

したがって、リストに要素を追加すると、関連テーブルの2つのリンクの1つからリストを完了できる必要があります。

スキーマ内の関係テーブルの例：

```
<srcSchema name="subscription" namespace="cus">
  <element name="recipient" type="link" target="cus:recipient" label="Recipient"/>
  <element name="service" type="link" target="cus:service" label="Subscription service"/>
</srcSchema>
```

この例では、「cus:受信者」スキーマの入力形式と開始しています。 リストは、サービスに対する購読との関連付けを表示し、既存のサービスを選択して購読を追加できる必要があります。

![](assets/do-not-localize/form_exemple12.png)

```
<input type="linklist" xpath="subscription" xpathChoiceTarget="service" xpathEditTarget="service" zoom="true">
  <input xpath="recipient"/>
  <input xpath="service"/>
</input>
```

**xpathChoiceTarget**&#x200B;属性を使用すると、入力したリンクから選択フォームを起動できます。 関連テーブルレコードを作成すると、現在の受信者と選択したサービスへのリンクが自動的に更新されます。

>[!NOTE]
>
>**xpathEditTarget**&#x200B;属性を使用すると、入力したリンク上で選択した行を強制的に編集できます。

### リストのプロパティ{#list-properties}

* **noToolbar**:ツールバーを非表示（値「true」）
* **toolbarCaption**:ツールバーのラベルをオーバーロードします
* **toolbarAlign**:ツールバーの垂直または水平ジオメトリを修正します(可能な値：&quot;垂直&quot;|&quot;水平&quot;
* **img**:リストに関連付けられた画像を表示します
* **form**:ターゲット要素の編集フォームをオーバーロードします。
* **zoom**:ターゲットの要素を編集するた **** めのズームボタンを追加します。
* **xpathEditTarget**:入力されたリンクの編集を設定
* **xpathChoiceTarget**:さらに、入力したリンクの選択フォームを起動します。

## 追加メモリリストが{#memory-list-controls}を制御する

メモリリストを使用すると、リストデータのプリロードを使用してコレクション要素を編集できます。 このリストはフィルターまたは構成できません。

これらのリストは、XMLでマッピングされたコレクション要素またはボリュームの少ないリンクで使用されます。

## 追加列リスト{#column-list}

このコントロールは、「追加」ボタンと「削除」ボタンを含むツールバー付きの編集可能な列リストを表示しています。

```
<input xpath="rcpEvent" type="list">
  <input xpath="@label"/>
  <input xpath="@date"/>
</input>
```

リストコントロールは、**type=&quot;list&quot;** 属性を使用して設定する必要があります。リストのパスは、コレクション要素を参照する必要があります。

列は、リストの子&#x200B;**`<input>`**&#x200B;タグで宣言されます。 列のラベルとサイズは、**label**&#x200B;属性と&#x200B;**colSize**&#x200B;属性を使用して強制的に指定できます。

>[!NOTE]
>
>並べ替え順の矢印は、**ordered=&quot;true&quot;**&#x200B;属性がデータスキーマのコレクション要素に追加されたときに自動的に追加されます。

ツールバーのボタンは、水平方向に並べることができます。

```
<input nolabel="true" toolbarCaption="List of events" type="list" xpath="rcpEvent" zoom="true">
  <input xpath="@label"/>
  <input xpath="@date"/>
</input>
```

**toolbarCaption**&#x200B;属性は、強制的にツールバーの水平方向の配置を行い、リストの上にタイトルを入力します。

### リストのズームインを有効にする{#zoom-in-a-list}

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

編集フォームは、リスト定義の`<form>`要素から入力します。 この構造は、入力フォームと同じです。 リストの&#x200B;**`<input>`**&#x200B;タグで&#x200B;**zoom=&quot;true&quot;**&#x200B;属性が完了すると、**[!UICONTROL 詳細]**&#x200B;ボタンが自動的に追加されます。 この属性を使用すると、選択した行の編集フォームを起動できます。

>[!NOTE]
>
>**zoomOnAdd=&quot;true&quot;**&#x200B;属性を追加すると、リスト要素の挿入時に編集フォームが強制的に呼び出されます。

### リストのプロパティ{#list-properties-1}

* **noToolbar**:ツールバーを非表示（値「true」）
* **toolbarCaption**:ツールバーのラベルをオーバーロードします
* **toolbarAlign**:ツールバーの位置を変更します(可能な値：&quot;垂直&quot;|&quot;水平&quot;
* **img**:リストに関連付けられた画像を表示します
* **form**:ターゲット要素の編集フォームをオーバーロードします。
* **zoom**:ターゲットの要素を編集するた **** めのズームボタンを追加します。
* **zoomOnAdd**:追加時に編集フォームを起動
* **xpathChoiceTarget**:さらに、入力したリンクの選択フォームを起動します。

## 編集追加不可のフィールド{#non-editable-fields}

フィールドを表示し、編集されないようにするには、**`<value>`**&#x200B;タグを使用するか、**`<input>`**&#x200B;タグの&#x200B;**readOnly=&quot;true&quot;**&#x200B;属性に入力します。

「性別」フィールドの例：

![](assets/do-not-localize/form_exemple16.png)

```
<value value="@gender"/>
<input xpath="@gender" readOnly="true"/>
```

## 追加ラジオボタン{#radio-button}

ラジオボタンを使用すると、複数のオプションから選択できます。 **`<input>`**&#x200B;タグは、選択肢のリストに使用され、**checkedValue**&#x200B;属性は選択肢に関連付けられた値を指定します。

「性別」フィールドの例：

```
<input type="RadioButton" xpath="@gender" checkedValue="0" label="Choice 1"/>
<input type="RadioButton" xpath="@gender" checkedValue="1" label="Choice 2"/>
<input type="RadioButton" xpath="@gender" checkedValue="2" label="Choice 3"/>
```

![](assets/do-not-localize/form_exemple17.png)

## チェック追加ボックス{#checkbox}

チェックボックスはブール値の状態を反映します（選択されているかどうか）。 デフォルトでは、このコントロールは「ブール値」(true/false)フィールドで使用されます。 デフォルト値の0または1を持つ変数をこのボタンに関連付けることができます。 この値は、**checkValue**&#x200B;属性を使用してオーバーロードできます。

```
<input xpath="@boolean1"/>
<input xpath="@field1" type="checkbox" checkedValue="Y"/>
```

![](assets/do-not-localize/form_exemple20.png)

## ナビゲーション階層の編集{#navigation-hierarchy-edit}

このコントロールは、編集する一連のフィールドにツリーを構築します。

編集するコントロールは、ツリーコントロールの&#x200B;**`<input>`**&#x200B;タグの下に入力された&#x200B;**`<container>`**&#x200B;にグループ化されます。

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

## 追加式フィールド{#expression-field}

式フィールドは、式から動的にフィールドを更新します。**`<input>`**&#x200B;タグを&#x200B;**xpath**&#x200B;属性と共に使用して、更新するフィールドのパスと、更新式を含む&#x200B;**expr**&#x200B;属性を入力します。

```
<!-- Example: updating the boolean1 field from the value contained in the field with path /tmp/@flag -->
<input expr="Iif([/tmp/@flag]=='On', true, false)" type="expr" xpath="@boolean1"/>
<input expr="[/ignored/@action] == 'FCP'" type="expr" xpath="@launchFCP"/>
```

## フォームのコンテキスト{#context-of-forms}

入力フォームを実行すると、編集するエンティティのデータを含むXMLドキュメントが初期化されます。 このドキュメントはフォームのコンテキストを表し、ワークスペースとして使用できます。

### コンテキスト{#updating-the-context}を更新

フォームのコンテキストを変更するには、`<set expr="<value>" xpath="<field>"/>`タグを使用します。`<field>`は出力先フィールド、`<value>`は更新式または値です。

`<set>`タグの使用例：

* **`<set expr="'Test'" xpath="/tmp/@test" />`**:を指定すると、一時的な場所/tmp/@test1に「Test」値が配置されます。
* **`<set expr="'Test'" xpath="@lastName" />`**:「lastName」属性のエンティティを「Test」値で更新します
* **`<set expr="true" xpath="@boolean1" />`**:「boolean1」フィールドの値を「true」に設定します。
* **`<set expr="@lastName" xpath="/tmp/@test" />`**:「lastName」属性の内容に合わせて更新

**`<enter>`**&#x200B;タグと&#x200B;**`<leave>`**&#x200B;タグを使用してフォームを初期化したり閉じたりする場合、フォームのコンテキストを更新できます。

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
>`<enter>`と`<leave>`   タグは、ページの`<container>`（「notebook」タイプと「iconbox」タイプ）で使用できます。

### 式言語{#expression-language-}

マクロ言語をフォーム定義で使用して、条件付きテストを実行できます。

**`<if expr="<expression>" />`**&#x200B;タグは、式が検証された場合に、タグの下に指定された命令を実行します。

```
<if expr="([/tmp/@test] == 'Test' or @lastName != 'Doe') and @boolean2 == true">
  <set xpath="@boolean1" expr="true"/>
</if>
```

**`<check expr="<condition>" />`**&#x200B;タグと&#x200B;**`<error>`**&#x200B;タグを組み合わせると、フォームの検証が行われなくなり、条件が満たされない場合はエラーメッセージが表示されます。

```
<leave>
  <check expr="/tmp/@test != ''">
    <error>You must populate the 'Test' field!</error> 
  </check>
</leave>
```

## アシスタント（ウィザード） {#wizards}

アシスタントは、一連のデータ入力手順をページ形式で順を追って案内します。 入力したデータは、フォームを検証するときに保存されます。

アシスタントを追加するには、次の種類の構造を使用します。

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

`<form>`要素に&#x200B;**type=&quot;wizard&quot;**&#x200B;属性が存在する場合は、フォームの構築時にウィザードモードを定義できます。 ページは`<container>`要素（`<form>`要素の子）から完成します。 ページの`<container>`要素には、titleとdescのタイトル属性が設定され、ページタイトルの下に説明が表示されます。 **[!UICONTROL 前へ]**&#x200B;ボタンと&#x200B;**[!UICONTROL 次へ]**&#x200B;ボタンが自動的に追加され、ページ間を移動できます。

「**[!UICONTROL 完了]**」ボタンを押すと、入力したデータが保存され、フォームが閉じます。

### SOAP メソッド {#soap-methods}

SOAPメソッドの実行は、ページの最後に入力された&#x200B;**`<leave>`**&#x200B;タグから開始できます。

**`<soapcall>`**&#x200B;タグには、次の入力パラメーターを持つメソッドの呼び出しが含まれます。

```
<soapCall name="<name>" service="<schema>">
  <param type="<type>" exprIn="<xpath>"/>  
  ...
</soapCall>
```

サービスの名前とその実装スキーマは、**`<soapcall>`**&#x200B;タグの&#x200B;**name**&#x200B;および&#x200B;**service**&#x200B;属性を介して入力されます。

入力パラメーターは、**`<soapcall>`**&#x200B;タグの下の&#x200B;**`<param>`**&#x200B;要素で説明されます。

パラメーターの型は、**type**&#x200B;属性を使用して指定する必要があります。 使用できるタイプは次のとおりです。

* **string**:文字列
* **boolean**:ブール値
* **byte**:8ビット整数
* **short**:16ビット整数
* **long**:32ビット整数
* **short**:16ビット整数
* **重複**:重複精度浮動小数点数
* **DOMElement**:要素型ノード

**exprIn**&#x200B;属性には、パラメーターとして渡すデータの場所が含まれます。

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

