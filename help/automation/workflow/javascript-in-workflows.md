---
product: campaign
title: ワークフローでの JavaScript コードの例
description: これらの例は、ワークフローで JavaScript コードを使用する方法を示しています
feature: Workflows
exl-id: 3412e3de-1c88-496e-8fda-ca9fc9b18e69
source-git-commit: 190707b8b1ea5f90dc6385c13832fbb01378ca1d
workflow-type: ht
source-wordcount: '0'
ht-degree: 100%

---

# ワークフローでの JavaScript コードの例{#javascript-in-workflows}



これらの例は、ワークフローで JavaScript コードを使用する方法を示しています。

* [データベースへの書き込み](#write-example)
* [データベースのクエリ](#read-example)
* [静的 SOAP メソッドを使用したワークフローのトリガー](#trigger-example)
* [非静的 SOAP メソッドを使用したデータベースとのインタラクション](#interact-example)

静的および非静的 SOAP メソッドについての[詳細情報](https://experienceleague.adobe.com/developer/campaign-api/api/p-14.html?lang=ja)

これらの例では、ECMAScript for XML（E4X）拡張機能を使用しています。この拡張機能を使用すると、JavaScript 呼び出しと XML プリミティブを同じスクリプトに組み合わせることができます。

これらの例を試すには、次の手順に従います。

1. ワークフローを作成し、これらのアクティビティをワークフローに追加します。
   1. アクティビティの開始
   1. JavaScript コードアクティビティ
   1. 終了アクティビティ

   ワークフローの構築についての[詳細情報](build-a-workflow.md)

1. アクティビティに JavaScript コードを追加します。 [詳細情報](advanced-parameters.md)。
1. ワークフローを保存します。
1. 例をテストします。
   1. ワークフローを開始します。[詳細情報](start-a-workflow.md)。
   1. ジャーナルを開きます。 [詳細情報](monitor-workflow-execution.md#displaying-logs)。

## 例 1：データベースに書き込む{#write-example}

データベースに書き込むには、`xtk:session` スキーマの静的 `Write` メソッドを使用します。 

1. XML で書き込みリクエストを作成します。

1. レコードを書き込みます。

   1. `xtk:session` スキーマの `Write` メソッドを呼び出します。

      >[!IMPORTANT]
      > Adobe Campaign v8 を使用する場合は、Snowflake テーブルの `Write` メソッドの&#x200B;**取得**&#x200B;および&#x200B;**データの更新／削除** API でステージングメカニズムを使用することをお勧めします。[詳細情報](https://experienceleague.adobe.com/docs/campaign/campaign-v8/architecture/api/new-apis.html?lang=ja){target=&quot;_blank&quot;}。

   1. XML コードを書き込みリクエストの引数として渡します。

### 手順 1：書き込みリクエストを作成する

レコードの追加、更新、削除を行うことができます。

#### レコードの挿入

`insert` の操作はデフォルトの操作なので、指定する必要はありません。

この情報を XML 属性として指定します。

* 変更するテーブルのスキーマ
* 入力するテーブルフィールド

例：

```javascript
var myXML = <recipient xtkschema="nms:recipient"
    firstName="Isabel"
    lastName="Garcia"
    email="isabel.garcia@mycompany.com"/>
```

#### レコードの更新

`_update` 操作を使用します。  .

この情報を XML 属性として指定します。

* 変更するテーブルのスキーマ
* 更新するテーブルフィールド
* 更新するレコードを識別するために必要なキー引数

例：

```javascript
var myXML = <recipient xtkschema="nms:recipient"
    status="Client"
    email="isabel.garcia@mycompany.com"
    operation="_update"
    _key="@email"/>
```

#### レコードの削除

`DeleteCollection` メソッドを使用します。 [詳細情報](https://experienceleague.adobe.com/developer/campaign-api/api/sm-session-DeleteCollection.html?lang=ja)。

次の情報を指定します。

* 変更するテーブルのスキーマ
* XML 要素の形式で更新するレコードを識別するために必要な `where` 句

例：

```javascript
xtk.session.DeleteCollection(
    "nms:recipient",
    <where>
        <condition expr="[@email] = 'isabel.garcia@mycompany.com'"/>
    </where>,
    false
    )
```

### 手順 2：レコードを記述する

`xtk:session` スキーマの非静的 `Write` メソッドを呼び出します。

```javascript
xtk.session.Write(myXML)
```

このメソッドでは値は返されません。

完全なコードをワークフローの「 JavaScript コード」アクティビティに追加します。

```javascript
var myXML = <recipient xtkschema="nms:recipient"
    firstName="Isabel"
    lastName="Garcia"
    email="isabel.garcia@mycompany.com"/>

xtk.session.Write(myXML)
```

このビデオでは、データベースに書き込む方法を説明します。
>[!VIDEO](https://video.tv.adobe.com/v/18472/?learn=on)

## 例 2：データベースにクエリを実行する{#read-example}

データベースにクエリを実行する場合は、非静的 `xtk:queryDef` インスタンスメソッドを使用します。

1. XML でクエリを作成します。
1. クエリオブジェクトを作成します。
1. クエリを実行します。

### 手順 1：クエリを作成する

`queryDef` エンティティの XML コードを指定します。

構文：

```xml
<queryDef schema="nms:recipient" operation="">
    <!-- select, where, and orderBy clauses as XML elements -->
</queryDef>
```

次の情報を指定します。

* 読み取るテーブルのスキーマ
* 操作
*  `select` 句で返される列
* `where` 句の条件
* `orderBy` 句のフィルタリング条件

これらの操作を使用できます。

| 操作 | 結果 |
| --- | --- |
| `select` | 0 個以上の要素がコレクションとして返されます。 |
| `getIfExists` | 1 つの要素が返されます。一致する要素が存在しない場合は、空の要素が返されます。 |
| `get` | 1 つの要素が返されます。一致する要素が存在しない場合は、エラーが返されます。 |
| `count` | 一致するレコードの数は、 `count` 属性を持つ要素の形式で返されます。 |

XML 要素として `select`、`where` および `orderBy` 句を記述します。

* `select` 句

   返す列を指定します。 例えば、ユーザーの名と姓を選択するには、次のコードを記述します。

   ```xml
   <select>
       <node expr="@firstName"/>
       <node expr="@lastName"/>
   </select>
   ```

   `nms:recipient` スキーマでは、要素は次の形式で返されます。

   ```xml
   <recipient firstName="Bo" lastName="Didley"/>
   ```

* `where` 句

   条件を指定するには、`where` 句を使用します。 例えば、**トレーニング**&#x200B;フォルダーにあるレコードを選択するには、次のコードを記述します。

   ```xml
   <where>
       <condition expr="[folder/@label]='Training'"/>
   </where>
   ```

   複数の式を組み合わせる場合は、最初の式でブール演算子を使用します。例えば、Isabel Garcia という名前の人をすべて選択するには、次のコードを記述します。

   ```xml
   <condition boolOperator="AND" expr="@firstName='Isabel'"/>
   <condition expr="@lastName='Garcia'"/>
   ```

* `orderBy` 句

   結果セットを並べ替えるには、`orderBy` 句を `sortDesc` 属性を持つ XML 要素として指定します。例えば、姓を昇順に並べ替えるには、次のコードを記述します。

   ```xml
   <orderBy>
       <node expr="@lastName> sortDesc="false"/>
   </orderBy>
   ```

### 手順 2：クエリオブジェクトの作成

XML コードからエンティティを作成するには、`create(`*`content`*`)` メソッドを使用します。

```javascript
var query = xtk.queryDef.create(
    <queryDef schema="nms:recipient" operation="select">
    …
    </queryDef>)
```

`create(`*`content`*`)` メソッドの前に、作成するエンティティのスキーマを付けます。

この *`content`* 引数は文字列引数で、オプションです。 この引数には、エンティティを記述する XML コードが含まれています。

### 手順 3：クエリを実行

次の手順に従います。

1.  `queryDef` エンティティで `ExecuteQuery` メソッドを呼び出します。

   ```javascript
   var res = query.ExecuteQuery()
   ```

1. 結果を処理します。
   1. ループ構造を使用して、`select` 操作の結果を繰り返し処理します。
   1. `getIfExists` 操作を使用して、結果をテストします。
   1. `count` 操作を使用して、結果をカウントします。

#### `select` 操作の結果

すべての一致がコレクションとして返されます。

```xml
<recipient-collection>
    <recipient email="jane.smith@mycompany.com">
    <recipient email="john.harris@mycompany.com">
</recipient-collection>
```

結果を繰り返し処理するには、`for each` ループを使用します。

```javascript
for each (var rcp in res:recipient)
    logInfo(rcp.@email)
```

ループにはローカルの受信者変数が含まれます。 受信者のコレクションに返された受信者ごとに、受信者の電子メールが印刷されます。`logInfo` 関数についての[詳細情報](https://experienceleague.adobe.com/developer/campaign-api/api/f-logInfo.html?lang=ja)。

#### `getIfExists` 操作の結果

それぞれの一致が要素として返されます。

```xml
<recipient id="52,378,079">
```

一致する要素がない場合は、空の要素が返されます。

```xml
<recipient/>
```

プライマリキーノードを参照できます。例えば、`@id` 属性は次のとおりです。

```javascript
if (res.@id !=undefined)
    { // match was found
    …
    }
```

#### `get` 操作の結果

1 つの一致が要素として返されます。

```xml
<recipient id="52,378,079">
```

一致するものがない場合は、エラーが返されます。

>[!TIP]
>
>一致があることがわかっている場合は、`get` 操作を使用します。 それ以外の場合は、`getIfExists` 操作を使用します。 このベストプラクティスを使用すると、エラーによって予期しない問題が明らかになります。`get` 操作を使用する場合、`try…catch` ステートメントは使用しません。問題は、ワークフローのエラー処理プロセスによって処理されます。

#### `count` 操作の結果

`count` 属性を持つ要素が返されます。

```xml
<recipient count="200">
```

結果を使用するには、`@count` 属性を参照します。

```javascript
if (res.@count > 0)
    { // matches were found
    …
    }
```

`select` 操作では、次のコードをワークフローの「JavaScript コード」アクティビティに追加します。

```javascript
var myXML =
<queryDef schema="nms:recipient" operation="select">
    <select>
        <node expr="@firstName"/>
        <node expr="@lastName"/>
    </select>
</queryDef>

var query = xtk.queryDef.create(myXML)

var res = query.ExecuteQuery()

for each (var rcp in res.recipient)
    logInfo(rcp.@firstName + " " + rcp.@lastName)
```

`select` 操作はデフォルトの操作なので、指定する必要はありません。

このビデオでは、データベースからの読み取り方法を示しています。
>[!VIDEO](https://video.tv.adobe.com/v/18475/?learn=on)

## ワークフローのトリガー {#trigger-example}

例えば、テクニカルワークフローで、またはユーザーが web アプリケーションページに入力した情報を処理するために、プログラムでワークフローをトリガーすることができます。

ワークフロートリガーは、イベントを使用して機能します。イベントには、次の機能を使用できます。

* イベントを投稿するには、静的 `PostEvent` メソッドを使用します。 [詳細情報](https://experienceleague.adobe.com/developer/campaign-api/api/sm-workflow-PostEvent.html?lang=ja)。
* イベントを受け取るには、**[!UICONTROL 外部シグナル]**&#x200B;アクティビティを使用します。 [詳細情報](external-signal.md)。

ワークフローは様々な方法でトリガーできます。

* ワークフローをインラインで、つまり **[!UICONTROL JavaScript コード]**&#x200B;アクティビティのメインスクリプトからトリガーできます。
* 別のワークフローの完了時にワークフローをトリガーできます。
   * 最初のワークフローの「**[!UICONTROL 終了]**」アクティビティに初期化スクリプトを追加します。
   * ターゲットワークフローの開始時に「**[!UICONTROL 外部シグナル]**」アクティビティを追加します。

      最初のワークフローが完了すると、イベントが投稿されます。送信トランジションが有効化され、イベント変数が入力されます。次に、ターゲットワークフローがイベントを受け取ります。

      >[!TIP]
      >
      >ベストプラクティスとして、スクリプトをアクティビティに追加するときは、アクティビティ名を二重ハイフンで囲みます（例：`-- end --`）。ワークフローのベストプラクティスについての[詳細情報](workflow-best-practices.md)

`PostEvent` メソッドの構文：

```javascript
PostEvent(
    String     //ID of the target workflow
    String     //Name of the target activity
    String     //Name of the transition to be activated in case of multiple transitions
    XML        //Event parameters, in the <variables/> element
    Boolean    //To trigger the target workflow only once, set this parameter to true.
)
```

この例では、ワークフローが完了すると、短いテキストが **wkfExampleReceiver** ワークフローの&#x200B;**シグナル**&#x200B;アクティビティに渡されます。

```javascript
var strLabel = "Adobe Campaign, Marketing that delivers"
xtk.workflow.PostEvent(
    "wkfExampleReceiver",
    "signal",
    "",
    <variables strLine={strLabel}/>,
    false)
```

最後のパラメーターが `false` に設定されているため、最初のワークフローが完了するたびに **wkfExampleReceiver** ワークフローがトリガーされます。

ワークフローをトリガーする際は、次の原則に留意してください。

* `PostEvent` コマンドは非同期で実行されます。コマンドはサーバーキューに配置されます。イベントが投稿されると、メソッドが返されます。
* ターゲットワークフローを開始する必要があります。そうしないと、エラーがログファイルに書き込まれます。
* ターゲットワークフローが一時停止されている場合、ワークフローが再開されるまで `PostEvent` コマンドはキューに入れられます。
* トリガーされたアクティビティでは、タスクが進行中である必要はありません。

このビデオでは、静的 API メソッドの使用方法を説明します。
>[!VIDEO](https://video.tv.adobe.com/v/18481/?learn=on)

このビデオでは、ワークフローのトリガー方法を説明します。
>[!VIDEO](https://video.tv.adobe.com/v/18485/?learn=on)

## データベースとのインタラクション {#interact-example}

以下の例は、これらのアクションを実行する方法を示しています。

* 非静的 SOAP メソッドを使用するスキーマの `get` および `create` メソッドを使用します。
* SQL クエリを実行するメソッドの作成
* レコードの挿入、更新、削除を行う `write` メソッドを使用します。

次の手順に従います。

1. クエリを定義します。

   * 対応するスキーマ（例えば `xtk:workflow` スキーマ）で `create` メソッドを使用してエンティティを取得します。[詳細情報](https://experienceleague.adobe.com/developer/campaign-api/api/f-create.html?lang=ja)。
   * `queryDef` メソッドを使用して SQL クエリを発行します。

1. `ExecuteQuery` メソッドを使用してクエリを実行します。 [詳細情報](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-ExecuteQuery.html?lang=ja)。

   `for each` ループを使用して結果を取得します。

### `select` 句を使用した `queryDef` メソッドの構文

```xml
<queryDef schema="schema_key" operation="operation_type">
    <select>
        <node expr="expression1">
        <node sql="expression2">
    </select>
    <where> 
        <condition expr="expression1"/> 
        <condition sql="expression2"/>
    </where>
    <orderBy>
        <node expr="expression1">
        <node sql="expression2">
    </orderBy>
    <groupBy>
        <node expr="expression1">
        <node sql="expression2">
    </groupBy>
    <having>
        <condition expr="expression1"/> 
        <condition sql="expression2"/>
    </having>
</queryDef>
```

### `Create` メソッド

#### 例 1：レコードを選択してジャーナルに書き込む

**wfExamples** フォルダーにあるワークフローの内部名が選択されます。結果は内部名で昇順に並べ替えられ、ジャーナルに書き込まれます。

```javascript
var query = xtk.queryDef.create(
    <queryDef schema="xtk:workflow" operation="select">
        <select>
            <node expr="@internalName"/>
        </select>
        <where>
            <condition expr="[folder/@name]='wfExamples'"/>
        </where>
        <orderBy>
            <node expr="@internalName" sortDesc="false"/>
        </orderBy>
    </queryDef>
    )

var res = query.ExecuteQuery()
for each (var w in res.workflow)
    logInfo(w.@internalName)
```

#### 例 2：レコードを削除する

Chris Smith という名前のすべての受信者の名、姓、電子メールおよび ID が選択されます。結果は電子メールで昇順に並べ替えられ、ジャーナルに書き込まれます。`delete` 操作を使用して、選択したレコードを削除します。

```javascript
// Build the query, create a query object and hold the object in a variable
var query = xtk.queryDef.create(
        <queryDef schema="nms:recipient" operation="select">
            <select>
                <node expr="@firstName"/>
                <node expr="@lastName"/>
                <node expr="@email"/>
                <node expr="@id"/>
            </select>
            <where>
                <condition expr="[folder/@label]='Recipients'"/>
                <condition expr="[@lastName]='Smith'"/>
                <condition expr="[@firstName]='Chris'"/>
            </where>
            <orderBy>
                <node expr="@email" sortDesc="false"/>
            </orderBy>
        </queryDef>
)

//Run the query using the ExecuteQuery method against the created object
var res = query.ExecuteQuery()

//Loop through the results, print out the person's name and email, then delete the records
for each (var rec in res.recipient)
    {
     logInfo("Delete record = Email: " + rec.@email + ', ' + rec.@firstName + ' ' + rec.@lastName)
     xtk.session.Write(<recipient xtkschema="nms:recipient" _operation="delete" id={rec.@id}/>)
    }
```

#### 例 3：レコードを選択してジャーナルに書き込む

この例では、非静的メソッドが使用されます。情報が **1234** フォルダーに保存され、電子メールドメイン名が「adobe」で始まるすべての受信者の電子メールと生年月日が選択されます。結果は生年月日の降順で並べ替えられます。受信者の電子メールがジャーナルに書き込まれます。

```javascript
var query = xtk.queryDef.create(
<queryDef schema="nms:recipient" operation="select">
    <select>
        <node expr="@email"/>
        <node sql="sEmail"/>
        <node expr="Year(@birthDate)"/>
    </select>
    <where>
        <condition expr="[@folder-id] = 1234 and @domain like 'adobe%'"/>
        <condition sql="iFolderId = 1234 and sDomain like 'adobe%'"/>
    </where>
    <orderBy>
        <node expr="@birthDate" sortDesc="true"/>
    </orderBy>
</queryDef>
)

var res = query.ExecuteQuery()
for each (var w in res.recipient)
    logInfo(w.@email)
```

### `Write` メソッド

レコードの挿入、更新、削除を行うことができます。Adobe Campaign のどのスキーマでも `Write` メソッドを使用できます。このメソッドは静的なので、オブジェクトを作成する必要はありません。これらの操作を使用できます。

* `update` 操作
* 更新するレコードを識別するための `_key` 引数を使用した `insertOrUpdate` 操作

   **受信者**&#x200B;フォルダーを指定しない場合は、一致するものがあれば、レコードは任意のサブフォルダーで更新されます。それ以外の場合、レコードはルート&#x200B;**受信者**&#x200B;フォルダーに作成されます。

* `delete` 操作

>[!IMPORTANT]
> Adobe Campaign v8 を使用する場合は、Snowflake テーブルの `Write` メソッドの&#x200B;**取得**&#x200B;および&#x200B;**データの更新／削除** API でステージングメカニズムを使用することをお勧めします。[詳細情報](https://experienceleague.adobe.com/docs/campaign/campaign-v8/architecture/api/new-apis.html?lang=ja){target=&quot;_blank&quot;}。

#### 例 1：レコードを挿入または更新する

```javascript
xtk.session.Write(
<recipient
    xtkschema="nms:recipient"
    _operation="insertOrUpdate" _key="@email"
    lastName="Lennon"
    firstName="John"
    email="johnlennon@thebeatles.com"
/>
)
```

#### 例 2：レコードを削除する

この例では、静的メソッドと非静的メソッドを組み合わせています。

```javascript
var query=xtk.queryDef.create(
<queryDef schema="nms:recipient" operation="select">
    <select>
        <node expr="@Id"/>
    </select>
    <where>
        <condition expr="[@email]='johnlennon@thebeatles.com'"/>
    </where>
</queryDef>
);

var res = query.ExecuteQuery()
for each (var w in res.recipient) {
xtk.session.Write(
    <recipient xtkschema="nms:recipient" _operation="delete" id={w.@id}/>
);
}
```

このビデオでは、非静的 API メソッドの使用方法を説明します。
>[!VIDEO](https://video.tv.adobe.com/v/18477/?learn=on)

このビデオでは、ワークフローでの非静的 API メソッドの使用例を説明します。
>[!VIDEO](https://video.tv.adobe.com/v/18476/?learn=on)

## 関連トピック

### API ドキュメント

* [SOAP 呼び出しのサンプル](https://experienceleague.adobe.com/developer/campaign-api/api/p-14.html?lang=ja)
* メソッド：
   * [作成](https://experienceleague.adobe.com/developer/campaign-api/api/f-create.html?lang=ja)
   * [DeleteCollection](https://experienceleague.adobe.com/developer/campaign-api/api/sm-session-DeleteCollection.html?lang=ja)
   * [ExecuteQuery](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-ExecuteQuery.html?lang=ja)
   * [PostEvent](https://experienceleague.adobe.com/developer/campaign-api/api/sm-workflow-PostEvent.html?lang=ja)
   * [Write](https://experienceleague.adobe.com/developer/campaign-api/api/sm-session-Write.html?lang=ja)
* [logInfo 関数](https://experienceleague.adobe.com/developer/campaign-api/api/f-logInfo.html?lang=ja)
