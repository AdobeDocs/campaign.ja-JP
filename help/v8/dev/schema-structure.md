---
solution: Campaign v8
product: Adobe Campaign
title: キャンペーンスキーマの構造
description: キャンペーンスキーマの構造
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '1403'
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

対応するデータスキーマを使用する場合：

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

この例では、メイン要素は次の行で表されます。

```
<element name="recipient">
```

メイン要素に続く要素&#x200B;**`<attribute>`**&#x200B;と&#x200B;**`<element>`**&#x200B;を使用して、XML構造内のデータ項目の位置と名前を定義できます。

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

* 各&#x200B;**`<element>`**&#x200B;と&#x200B;**`<attribute>`**&#x200B;は、**name**&#x200B;属性を使用して名前で識別する必要があります。

   >[!CAUTION]
   >
   >要素の名前は簡潔で、できれば英語で記述し、XML命名規則に従って許可された文字のみを含める必要があります。

* XML構造に&#x200B;**`<attribute>`**&#x200B;要素と&#x200B;**`<element>`**&#x200B;要素を含めることができるのは、**`<element>`**&#x200B;要素だけです。
* **`<attribute>`**&#x200B;要素は、**`<element>`**&#x200B;内で一意の名前を持つ必要があります。
* 複数行のデータ文字列では&#x200B;**`<elements>`**&#x200B;を使用することをお勧めします。

## データタイプ {#data-types}

データ型は、**`<attribute>`**&#x200B;要素と&#x200B;**`<element>`**&#x200B;要素の&#x200B;**type**&#x200B;属性を使用して入力します。

詳細なリストは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/configuring-campaign-classic/schema-reference/elements-attributes/schema-introduction.html?lang=en#configuring-campaign-classic)に記載されています。

この属性が設定されていない場合、要素に子要素が含まれていない限り、 **string**&#x200B;がデフォルトのデータ型になります。 その場合は、要素を階層的に構造化する（この例では&#x200B;**`<location>`**&#x200B;要素）ためにのみ使用します。

スキーマでは、次のデータタイプがサポートされています。

* **文字列**:文字列。例：名、町など

   サイズは、**length**&#x200B;属性で指定できます（オプション、デフォルト値は「255」）。

* **boolean**:ブール値フィールド。可能な値の例：true/false、0/1、yes/noなど
* **byte**、 **short**、 **long**:整数（1バイト、2バイト、4バイト）。例：年齢、口座番号、ポイント数など
* **double**:倍精度浮動小数点数。例：価格、価格等
* **date**、 **datetime**:日付と日付+時刻。例：生年月日、購入日等
* **datetimenotz**:タイムゾーンデータのない日付+時刻。
* **期間**:期間例：年功序列
* **メモ**:長いテキストフィールド（複数行）例：説明、コメントなど
* **uuid**:&quot;uniqueidentifier&quot;フィールド

   >[!NOTE]
   >
   >**uuid**&#x200B;フィールドを含めるには、「newuuid()」関数を追加し、デフォルト値で完了する必要があります。

タイプが入力されたスキーマの例を次に示します。

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

## 「PROPERTIES」タブ {#properties}

データスキーマの&#x200B;**`<elements>`**&#x200B;要素と&#x200B;**`<attributes>`**&#x200B;要素は、様々なプロパティを使用してエンリッチメントできます。 現在の要素を説明するために、ラベルを入力できます。

### ラベルと説明{#labels-and-descriptions}

* **label**&#x200B;プロパティを使用して、簡単な説明を入力できます。

   >[!NOTE]
   >
   >ラベルは、インスタンスの現在の言語に関連付けられます。

   **例**：

   ```
   <attribute name="email" type="string" length="80" label="Email"/>
   ```

   ラベルは、Adobe Campaignクライアントコンソールの入力フォームから確認できます。

   ![](assets/schema_label.png)

* **desc**&#x200B;プロパティを使用して、詳細な説明を入力できます。

   この説明は、Adobe Campaignクライアントコンソールのメインウィンドウのステータスバーにある入力フォームから確認できます。

   >[!NOTE]
   >
   >説明は、インスタンスの現在の言語に関連付けられます。

   **例**：

   ```
   <attribute name="email" type="string" length="80" label="Email" desc="Email of recipient"/>
   ```

### デフォルト値 {#default-values}

**default**&#x200B;プロパティを使用して、コンテンツ作成のデフォルト値を返す式を定義できます。

値は、XPath言語に準拠した式である必要があります。 詳しくは、[この節](#reference-with-xpath)を参照してください。

**例**：

* 現在の日付：**default=&quot;GetDate()&quot;**
* カウンタ：**default=&quot;&#39;FRM&#39;+CounterValue(&#39;myCounter&#39;)&quot;**

   この例では、デフォルト値は、文字列を連結し、**CounterValue**&#x200B;関数を自由なカウンタ名で呼び出すことによって構築されます。 返される数値は、挿入ごとに1ずつ増分されます。

   >[!NOTE]
   >
   >Adobe Campaignクライアントコンソールでは、**[!UICONTROL 管理>カウンター]**&#x200B;ノードを使用してカウンターを管理します。

デフォルト値をフィールドにリンクするには、`<default>  or  <sqldefault>   field.  </sqldefault> </default>`

`<default>` :では、エンティティの作成時に、フィールドにデフォルト値を事前入力できます。この値はデフォルトのSQL値ではありません。

`<sqldefault>` :では、フィールドを作成する際に付加価値を付けることができます。この値はSQL結果として表示されます。 スキーマの更新中、この値の影響を受けるのは新しいレコードのみです。

### 列挙 {#enumerations}

#### 自由列挙{#free-enumeration}

**userEnum**&#x200B;プロパティを使用すると、このフィールドに入力された値を記憶および表示するための無料の列挙を定義できます。 構文は以下のようになります。

**userEnum=&quot;列挙の名前&quot;**

列挙に与えられた名前は、自由に選択し、他のフィールドと共有できます。

これらの値は、入力フォームのドロップダウンリストに表示されます。

![](assets/schema_user_enum.png)

>[!NOTE]
>
>Adobe Campaignクライアントコンソールでは、**[!UICONTROL 管理/列挙]**&#x200B;ノードを使用して列挙を管理します。

#### 列挙{#set-enumeration}を設定

**enum**&#x200B;プロパティを使用すると、可能な値のリストがあらかじめわかっている場合に使用する固定列挙を定義できます。

**enum**&#x200B;属性は、メイン要素の外部にあるスキーマに入力される列挙クラスの定義を指します。

列挙を使用すると、ユーザーは通常の入力フィールドに値を入力する代わりに、ドロップダウンリストから値を選択できます。

![](assets/schema_enum.png)

データスキーマ内の列挙宣言の例：

```
<enumeration name="gender" basetype="byte" default="0">    
  <value name="unknown" label="Not specified" value="0"/>    
  <value name="male" label="male" value="1"/>   
  <value name="female" label="female" value="2"/>   
</enumeration>
```

列挙は、**`<enumeration>`**&#x200B;要素を使用してメイン要素の外側に宣言します。

列挙のプロパティは次のとおりです。

* **baseType**:値に関連付けられているデータのタイプ
* **ラベル**:列挙の説明
* **名前**:列挙の名前
* **デフォルト**:列挙のデフォルト値。

列挙の値は、次の属性を持つ&#x200B;**`<value>`**&#x200B;要素で宣言されます。

* **名前**:内部に保存されている値の名前
* **ラベル**:グラフィカルインターフェイスで表示されるラベル。

#### dbenum列挙{#dbenum-enumeration}

* **dbenum**&#x200B;プロパティを使用すると、**enum**&#x200B;プロパティと類似したプロパティを持つ列挙を定義できます。

   ただし、**name**&#x200B;属性は値を内部で格納するのではなく、スキーマを変更せずに関係するテーブルを拡張できるコードを格納します。

   値は、**[!UICONTROL 管理>列挙]**&#x200B;ノードを使用して定義します。

   この列挙は、例えば、キャンペーンの特性を指定するために使用されます。

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

値「true」を持つ&#x200B;**unbound**&#x200B;属性を使用すると、コレクション要素を設定できます。

**例**:スキーマ内 **`<group>`** のコレクション要素の定義。

```
<element name="group" unbound="true" label="List of groups">
  <attribute name="label" type="string" label="Label"/>
</element>
```

XMLコンテンツの投影を使用：

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
* **location/@city**:要素の下の「市区町村」属性を選択し **`<location>`** ます
* **../@email**:現在の要素の親要素から電子メールアドレスを選択します
* **グループ`[1]/@label`**:最初のコレクション要素の子である「label」属性を選 **`<group>`** 択します
* **グループ`[@label='test1']`**:要素の子であり、値「test1」を含む「 **`<group>`** label」属性を選択します。

>[!NOTE]
>
>パスがサブ要素と交差すると、追加の制約が追加されます。 この場合、次の式を角括弧で囲む必要があります。
>
>* **location/@city** が無効です。使用する  **`[location/@city]`**
>* **`[@email]`** と@email **は同** 等です。

>



次の演算などの複雑な式を定義することもできます。

* **@gender+1**:genderattributeの内容に1が追加さ **** れます。
* **@email + &#39;(&#39;+@created+&#39;)&#39;**:（文字列タイプの場合は、定数を引用符で囲み、）丸括弧内の作成日に追加される電子メールアドレスの値を使用して文字列を作成します。

この言語の可能性を高めるために、式に高レベルの関数が追加されました。

使用可能な関数のリストには、Adobe Campaignクライアントコンソールの任意の式エディターからアクセスできます。

![](assets/schema_function.png)

**例**：

* **GetDate()**:現在の日付を返します
* **Year(@created)**:「created」属性に含まれる日付の年を返します。
* **GetEmailDomain(@email)**:電子メールアドレスのドメインを返します。

## 計算文字列{#building-a-string-via-the-compute-string}を使用した文字列の作成

**計算文字列**&#x200B;は、スキーマに関連付けられたテーブル内のレコードを表す文字列を構築するために使用するXPath式です。 **計算** 文字列は、主にグラフィカルインターフェイスで使用され、選択したレコードのラベルを表示します。

**計算文字列**&#x200B;は、データスキーマのメイン要素の下の&#x200B;**`<compute-string>`**&#x200B;要素で定義します。 **expr**&#x200B;属性には、表示を計算するXPath式が含まれます。

**例**:受信者テーブルの計算文字列。

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
>スキーマに計算文字列が含まれていない場合、計算文字列には、デフォルトでスキーマのプライマリキーの値が設定されます。
