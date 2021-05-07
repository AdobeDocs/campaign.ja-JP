---
solution: Campaign
product: Adobe Campaign
title: キャンペーンスキーマ構造
description: キャンペーンスキーマ構造
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '1402'
ht-degree: 12%

---

# スキーマの構造{#schema-structure}

`<srcschema>`の基本的な構造は次のとおりです。

```
<srcSchema>
    <enumeration>
        ...          //definition of enumerations
    </enumeration>
   
    <element>         //definition of the root <element>    (mandatory)

        <compute-string/>  //definition of a compute-string
        <key>
            ...        //definition of keys
        </key>
        <sysFilter>
            ...           //definition of filters
        </sysFilter>
        <attribute>
            ...             //definition of fields
        </attribute>
    
            <element>           //definition of sub-<element> 
                  <attribute>           //(collection, links or XML)
                  ...                         //and additional fields
                  </attribute>
                ...
            </element>
      
    </element> 

        <methods>                 //definition of SOAP methods
            <method>
                ...
            </method>
            ...
    </methods>  
          
</srcSchema>
```

データスキーマの XML ドキュメントには、**name** 属性と **namespace** 属性が設定された **`<srcschema>`** ルート要素が必要です。これにより、スキーマの名前と名前空間が指定されます。

```
<srcSchema name="schema_name" namespace="namespace">
...
</srcSchema>
```

次のXMLコンテンツを使用して、データスキーマの構造を説明します。

```
<recipient email="John.doe@aol.com" created="AAAA/DD/MM" gender="1"> 
  <location city="London"/>
</recipient>
```

対応するデータスキーマを使用して、次の操作を行います。

```
<srcSchema name="recipient" namespace="cus">
  <element name="recipient">
    <attribute name="email"/>
    <attribute name="created"/>
    <attribute name="gender"/>
    <element name="location">
      <attribute name="city"/>
   </element>
  </element>
</srcSchema>
```

## 説明 {#description}

スキーマのエントリポイントは、スキーマのメイン要素です。メイン要素はスキーマと同じ名前なので、識別は容易です。また、メイン要素はルート要素の子でなければなりません。コンテンツの記述は、この要素から始まります。

この例では、主要な要素は次の行で表されます。

```
<element name="recipient">
```

メイン要素の後に続く要素&#x200B;**`<attribute>`**&#x200B;と&#x200B;**`<element>`**&#x200B;を使用して、XML構造内のデータ項目の場所と名前を定義できます。

サンプルスキーマでは、次のようになります。

```
<attribute name="email"/>
<attribute name="created"/>
<attribute name="gender"/>
<element name="location">
  <attribute name="city"/>
</element>
```

次の規則に従う必要があります。

* 各&#x200B;**`<element>`**&#x200B;と&#x200B;**`<attribute>`**&#x200B;は、**name**&#x200B;属性を介して名前で識別する必要があります。

   >[!CAUTION]
   >
   >要素名は簡潔で、できれば英語で記述し、XML命名規則に従って、許可された文字のみを含める必要があります。

* XML構造には、**`<element>`**&#x200B;要素と&#x200B;**`<element>`**&#x200B;要素のみを含めることができます。**`<attribute>`**
* **`<attribute>`**&#x200B;要素は、**`<element>`**&#x200B;内に一意の名前を持つ必要があります。
* 複数行のデータ文字列では、**`<elements>`**&#x200B;を使用することをお勧めします。

## データタイプ {#data-types}

データ型は、**`<attribute>`**&#x200B;要素と&#x200B;**`<element>`**&#x200B;要素の&#x200B;**type**&#x200B;属性を介して入力されます。

詳細なリストは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/schema-reference/elements-attributes/schema-introduction.html?lang=en#configuring-campaign-classic)に記載されています。

この属性が空の場合、要素に子要素が含まれていない限り、**string**&#x200B;がデフォルトのデータ型になります。 その場合は、要素を階層的に構成する（この例では&#x200B;**`<location>`**&#x200B;要素）ためにのみ使用します。

スキーマでは、次のデータ型がサポートされています。

* **string**:文字列。例：名、町名等

   サイズは、**length**&#x200B;属性（オプション、デフォルト値は「255」）を使用して指定できます。

* **boolean**:ブール値フィールド可能な値の例：true/false、0/1、yes/noなど
* **byte**,  **short**,  **long**:整数（1バイト、2バイト、4バイト）。例：年齢、口座番号、ポイント数等
* **重複**:重複精度浮動小数点数。例：価格、料金等
* **date**,  **datetime**:日付と日付+時間。例：生年月日、購入年月日等
* **datetimenotz**:タイムゾーンデータを含まない日付+時刻。
* **timespan**:継続時間。例：年功序列。
* **メモ**:長いテキストフィールド（複数行）例：説明、コメントなど
* **uuid**:「uniqueidentifier」フィールド

   >[!NOTE]
   >
   >**uuid**&#x200B;フィールドを含めるには、&quot;newuuid()&quot;関数を追加し、デフォルト値で完了する必要があります。

次に、入力したタイプのスキーマ例を示します。

```
<srcSchema name="recipient" namespace="cus">
  <element name="recipient">
    <attribute name="email" type="string" length="80"/>
    <attribute name="created" type="datetime"/>
    <attribute name="gender" type="byte"/>
    <element name="location">
      <attribute name="city" type="string" length="50"/>
   </element>
  </element>
</srcSchema>
```

## プロパティ {#properties}

データスキーマの&#x200B;**`<elements>`**&#x200B;要素と&#x200B;**`<attributes>`**&#x200B;要素は、様々なプロパティを使用して強化できます。 現在の要素を説明するためにラベルを入力できます。

### ラベルと説明{#labels-and-descriptions}

* **label**&#x200B;プロパティを使用すると、簡単な説明を入力できます。

   >[!NOTE]
   >
   >ラベルは、インスタンスの現在の言語に関連付けられます。

   **例**：

   ```
   <attribute name="email" type="string" length="80" label="Email"/>
   ```

   ラベルは、Adobe Campaignクライアントコンソールの入力フォームから確認できます。

   ![](assets/schema_label.png)

* **desc**&#x200B;プロパティを使用すると、詳細な説明を入力できます。

   説明は、Adobe Campaignクライアントコンソールのメインウィンドウのステータスバーにある入力フォームから確認できます。

   >[!NOTE]
   >
   >説明は、インスタンスの現在の言語に関連付けられます。

   **例**：

   ```
   <attribute name="email" type="string" length="80" label="Email" desc="Email of recipient"/>
   ```

### デフォルト値 {#default-values}

**デフォルト**&#x200B;プロパティを使用すると、コンテンツ作成時にデフォルト値を返す式を定義できます。

値は、XPath言語に準拠した式である必要があります。 詳しくは、[この節](#reference-with-xpath)を参照してください。

**例**：

* 現在の日付：**default=&quot;GetDate()&quot;**
* カウンタ：**default=&quot;&#39;FRM&#39;+CounterValue(&#39;myCounter&#39;)&quot;**

   この例では、デフォルト値は文字列を連結して構築され、**CounterValue**&#x200B;関数を空きカウンタ名で呼び出しています。 返される数字は、挿入のたびに1ずつ増分されます。

   >[!NOTE]
   >
   >Adobe Campaignクライアントコンソールでは、**[!UICONTROL Administration>Counters]**&#x200B;ノードを使用してカウンターを管理します。

フィールドにデフォルト値をリンクするには、`<default>  or  <sqldefault>   field.  </sqldefault> </default>`

`<default>` :エンティティを作成する際に、フィールドにデフォルト値を事前入力できます。値はデフォルトのSQL値ではありません。

`<sqldefault>` :フィールドの作成時に値を追加できます。この値はSQL結果として表示されます。 スキーマの更新中、新しいレコードのみがこの値の影響を受けます。

### 列挙 {#enumerations}

#### 無料定義済みリスト{#free-enumeration}

**userEnum**&#x200B;プロパティを使用すると、このフィールドに入力した値を記憶し、表示するための空き定義済みリストを定義できます。 構文は以下のようになります。

**userEnum=&quot;定義済みリスト名&quot;**

定義済みリストに与えられた名前は自由に選択し、他のフィールドと共有できます。

次の値は、入力フォームのドロップダウンリストに表示されます。

![](assets/schema_user_enum.png)

>[!NOTE]
>
>Adobe Campaignクライアントコンソールでは、定義済みリストの管理に&#x200B;**[!UICONTROL 管理/定義済みリスト]**&#x200B;ノードが使用されます。

#### 定義済みリスト{#set-enumeration}を設定

**enum**&#x200B;プロパティを使用すると、可能な値のリストが事前にわかっている場合に使用する固定定義済みリストを定義できます。

**enum**&#x200B;属性は、メイン要素の外側のスキーマに入力される定義済みリストクラスの定義を参照します。

定義済みリストを使用すると、ユーザーは、通常の入力フィールドに値を入力する代わりに、ドロップダウンリストから値を選択できます。

![](assets/schema_enum.png)

データスキーマの定義済みリスト宣言の例：

```
<enumeration name="gender" basetype="byte" default="0">    
  <value name="unknown" label="Not specified" value="0"/>    
  <value name="male" label="male" value="1"/>   
  <value name="female" label="female" value="2"/>   
</enumeration>
```

定義済みリストは、メイン要素の外側で&#x200B;**`<enumeration>`**&#x200B;要素を介して宣言されます。

定義済みリストのプロパティは次のとおりです。

* **baseType**:値に関連付けられているデータのタイプ、
* **label**:定義済みリストの説明
* **name**:定義済みリストの名前
* **default**:定義済みリストのデフォルト値。

定義済みリスト値は、次の属性を持つ&#x200B;**`<value>`**&#x200B;要素で宣言されます。

* **name**:内部的に保存された値の名前、
* **label**:グラフィカルインターフェースを介して表示されるラベル。

#### dbenum定義済みリスト{#dbenum-enumeration}

* **dbenum**&#x200B;プロパティを使用すると、**enum**&#x200B;プロパティと類似したプロパティを持つ定義済みリストを定義できます。

   ただし、**name**&#x200B;属性は値を内部的に格納するのではなく、関連するテーブルのスキーマを変更せずに拡張できるコードを格納します。

   値は、**[!UICONTROL 管理>定義済みリスト]**&#x200B;ノードを介して定義されます。

   この定義済みリストは、キャンペーンの特性を指定する場合などに使用します。

   ![](assets/schema_dbenum.png)

### 例 {#example}

プロパティが設定されたスキーマの例を次に示します。

```
<srcSchema name="recipient" namespace="cus">
  <enumeration name="gender" basetype="byte">    
    <value name="unknown" label="Not specified" value="0"/>    
    <value name="male" label="male" value="1"/>   
    <value name="female" label="female" value="2"/>   
  </enumeration>

  <element name="recipient">
    <attribute name="email" type="string" length="80" label="Email" desc="Email of recipient"/>
    <attribute name="created" type="datetime" label="Date of creation" default="GetDate()"/>
    <attribute name="gender" type="byte" label="gender" enum="gender"/>
    <element name="location" label="Location">
      <attribute name="city" type="string" length="50" label="City" userEnum="city"/>
   </element>
  </element>
</srcSchema>
```

## コレクション {#collections}

コレクションは、同じ名前と同じ階層レベルを持つ要素のリストです。

**unbound**&#x200B;属性の値が「true」の場合は、コレクション要素にデータを埋め込むことができます。

**例**:スキーマ内の **`<group>`** コレクション要素の定義。

```
<element name="group" unbound="true" label="List of groups">
  <attribute name="label" type="string" label="Label"/>
</element>
```

XMLコンテンツの投影を使用する場合：

```
<group label="Group1"/>
<group label="Group2"/>
```

## XPath {#reference-with-xpath}を使用した参照

Adobe Campaign では、XPath 言語を使用して、データスキーマに属する要素または属性を参照します。

XPath は、XML ドキュメントのツリー内にノードを配置するための構文です。

要素は名前で指定し、属性は名前の前に「@」文字を付けて指定します。

**例**：

* **@email**:電子メールを選択し、
* **location/@city**:要 **`<location>`** 素の下の「市区町村」属性を選択
* **../@email**:現在の要素の親要素から電子メールアドレスを選択します
* **group`[1]/@label`**:最初の **`<group>`** コレクション要素の子である「label」属性を選択します
* **group`[@label='test1']`**: **`<group>`** 要素の子で、値「test1」を含む「label」属性を選択します

>[!NOTE]
>
>パスがサブ要素を越えると、追加の制約が追加されます。 この場合、次の式を角括弧で囲む必要があります。
>
>* **location/@** cityis not valid;使用する  **`[location/@city]`**
>* **`[@email]`** と **@** emailare equivalent

>



次の算術演算など、複雑な式を定義することもできます。

* **@gender+1**:genderattributeの内容に1を追加し **** ます。
* **@email + &#39;(&#39;+@created+&#39;&#39;**:作成日の丸括弧内に追加された電子メールアドレスの値を受け取って文字列を作成します（文字列型の場合は、定数を引用符で囲みます）。

この言語の潜在能力を高めるため、式に高レベルの関数が追加されました。

使用可能な機能のリストは、Adobe Campaignクライアントコンソールの任意の式エディターからアクセスできます。

![](assets/schema_function.png)

**例**：

* **GetDate()**:現在の日付を返します。
* **Year(@created)**:「created」属性に含まれる日付の年を返します。
* **GetEmailDomain(@email)**:電子メールアドレスのドメインを返します。

## 計算文字列{#building-a-string-via-the-compute-string}を使用した文字列の作成

**計算文字列**&#x200B;は、スキーマに関連付けられたテーブルのレコードを表す文字列の構築に使用されるXPath式です。 **計算** 文字列は主にグラフィカルインターフェイスで使用され、選択したレコードのラベルを表示します。

**計算文字列**&#x200B;は、データスキーマのメイン要素の下の&#x200B;**`<compute-string>`**&#x200B;要素を介して定義されます。 **expr**&#x200B;属性には、表示を計算するXPath式が含まれます。

**例**:受信者テーブルの文字列を計算します。

```
<srcSchema name="recipient" namespace="nms">  
  <element name="recipient">
    <compute-string expr="@lastName + ' ' + @firstName +' (' + @email + ')' "/>
    ...
  </element>
</srcSchema>
```

受信者の計算済み文字列の結果：**Doe John (john.doe@aol.com)**

>[!NOTE]
>
>スキーマにCompute文字列が含まれていない場合、デフォルトでは、スキーマの主キーの値がCompute文字列に入力されます。
