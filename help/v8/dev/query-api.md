---
title: queryDefを使用したデータベースのクエリ
description: queryDef メソッドとNLWS メソッドを使用してCampaign データベースをクエリする方法を説明します
feature: API
role: Developer
level: Intermediate, Experienced
hide: true
exl-id: c2862f94-7d15-4a49-a74e-df90d0ea7bc9
source-git-commit: e3a234c7a29795c2a09fba9063ce17f0a573ab46
workflow-type: tm+mt
source-wordcount: '1281'
ht-degree: 2%

---

# queryDefを使用したデータベースのクエリ {#query-database-api}

[!DNL Adobe Campaign]は、`queryDef`と`NLWS` オブジェクトを使用してデータベースと対話するための強力なJavaScript メソッドを提供します。 これらのSOAP ベースのメソッドを使用すると、JSON、XML、またはSQLを使用してデータを読み込み、作成、更新およびクエリできます。

>[!NOTE]
>
>このドキュメントでは、データベースをプログラムでクエリするためのデータ指向APIについて説明します。 REST APIについては、[REST APIの基本を学ぶ](api/get-started-apis.md)を参照してください。 視覚的なクエリの作成については、[ クエリエディターの操作](../start/query-editor.md)を参照してください。

## NLWSとは？ {#what-is-nlws}

`NLWS` （Neolane Web Services）は、[!DNL Adobe Campaign]のSOAP ベースのAPI メソッドにアクセスするために使用されるグローバル JavaScript オブジェクトです。 スキーマは`NLWS` オブジェクトのプロパティで、プログラムでCampaign エンティティと対話できます。

[Campaign JSAPI ドキュメント ](https://experienceleague.adobe.com/developer/campaign-api/api/p-14.html?lang=ja){target="_blank"}によると、「スキーマは&#39;NLWS&#39; グローバル オブジェクトです。」 スキーマメソッドにアクセスするための構文は、次のパターンに従います。

```javascript
NLWS.<namespace><SchemaName>.<method>()
```

**例：**

* `NLWS.nmsRecipient` – 受信者スキーマのアクセス方法（`nms:recipient`）
* `NLWS.nmsDelivery` – 配信スキーマのアクセス方法（`nms:delivery`）
* `NLWS.xtkQueryDef` - データベースをクエリするためのqueryDef メソッドにアクセスします

一般的なAPI メソッドには、次のものがあります。

* `load(id)` - IDでエンティティを読み込みます。 [詳細情報](https://experienceleague.adobe.com/developer/campaign-api/api/f-load.html){target="_blank"}
* `create(data)` – 新しいエンティティを作成します
* `save()` - エンティティへの変更を保存

**公式ドキュメントの例：**

```javascript
var delivery = NLWS.nmsDelivery.load("12435")
```

>[!NOTE]
>
>**代替構文：**&#x200B;後方互換性のために、一部のドキュメントで小文字の名前空間構文が表示されることもあります（例：`nms.recipient.create()`、`xtk.queryDef.create()`）。 両方の構文は機能しますが、`NLWS`は公式のCampaign JSAPI リファレンスに記載されている標準です。

## 前提条件 {#prerequisites}

queryDef メソッドとNLWS メソッドを使用する前に、次のことについて理解しておく必要があります。

* JavaScript
* [!DNL Adobe Campaign]個のデータモデルとスキーマ
* スキーマ要素を移動するためのXPath式

**Campaign データモデルについて：**

Adobe Campaignには、Cloud データベース内でリンクされたテーブルで構成される定義済みのデータモデルが付属しています。 基本構造には、次のものが含まれます。

* **受信者テーブル** （`nmsRecipient`） – マーケティングプロファイルを保存するメインテーブル
* **配信テーブル** （`nmsDelivery`） – 配信を実行するためのパラメーターを含む配信アクションとテンプレートを保存します
* **テーブルを記録** – 実行ログを保存：
   * `nmsBroadLogRcp` – 受信者に送信されたすべてのメッセージの配信ログ
   * `nmsTrackingLogRcp` – 受信者の反応（開封数、クリック数）のトラッキングログ
* **テクニカルテーブル** – 演算子（`xtkGroup`）、セッション（`xtkSessionInfo`）、ワークフロー（`xtkWorkflow`）などのシステムデータを保存します

Campaign インターフェイスでスキーマの説明にアクセスするには、**管理/設定/データスキーマ**&#x200B;を参照し、リソースを選択して「**ドキュメント**」タブをクリックします。

## エンティティスキーマメソッド {#entity-schema-methods}

[!DNL Adobe Campaign]の各スキーマ （例：`nms:recipient`、`nms:delivery`）には、`NLWS` オブジェクトを通じてアクセスできるメソッドが付属しています。 これらの方法は、データベースエンティティと対話する便利な方法を提供します。

### 静的メソッド {#static-methods}

静的SOAP メソッドにアクセスするには、スキーマを表すオブジェクトでメソッドを呼び出します。 例えば、`NLWS.xtkWorkflow.PostEvent()`は静的メソッドを呼び出します。

### 非静的メソッド {#non-static-methods}

静的でないSOAP メソッドを使用するには、まず、対応するスキーマの`load`または`create` メソッドを使用してエンティティを取得する必要があります。 詳しくは、[Campaign JSAPI ドキュメント ](https://experienceleague.adobe.com/developer/campaign-api/api/p-14.html?lang=ja){target="_blank"}を参照してください。

### エンティティの読み込み、保存、作成 {#load-save-create}

**IDでエンティティを読み込み、更新します：**

```javascript
// Load a delivery by @id and save
var delivery = NLWS.nmsDelivery.load("12435");
delivery.label = "New label";
delivery.save();
```

**JSONを使用して受信者を作成：**

```javascript
// Create via JSON, edit via JS and save
var recipient = NLWS.nmsRecipient.create({
  x: { // the key 'x' doesn't matter
    email: 'john.doe@example.com',
  }
});
recipient.folder_id = 1183;
recipient.firstName = 'John';
recipient.lastName = 'Doe';
recipient.save();
```

**XMLを使用した受信者の作成：**

```javascript
// Create via XML and save
var recipient = NLWS.nmsRecipient.create(
  <recipient
    email="support@adobe.com"
    lastName="Adobe"
    firstName="Support"
  />
);
recipient.save();
```

## QueryDefの概要 {#querydef-overview}

`xtk:queryDef` スキーマは、データベース クエリを作成および実行するメソッドを提供します。 `NLWS.xtkQueryDef.create()`を使用して、JSONまたはXML構文でクエリを作成できます。

**使用可能な操作：**

* `select` – 複数のレコードを取得
* `get` - 1つのレコードを取得します（SQL `LIMIT 1`）
* `getIfExists` – 単一のレコードを取得します。見つからない場合はnullを返します
* `count` – 条件に一致するレコードをカウント

queryDef メソッドについて詳しくは、[Campaign JSAPI ドキュメント ](https://experienceleague.adobe.com/developer/campaign-api/api/s-xtk-queryDef.html){target="_blank"}を参照してください。

## JSONを使用したクエリ {#query-json}

`NLWS.xtkQueryDef.create()`を使用してJSON構文でクエリを構築します。 `get`操作は1つのレコード （SQL `LIMIT 1`）を取得し、`select`は複数のレコードを取得します。

**1人の受信者を取得：**

```javascript
var email = "contact@example.com";
var query = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: "nms:recipient", 
    operation: "get", // "get" does a SQL "LIMIT 1"
    select: { 
      node: [{expr: "@id"}, {expr: "@email"}, {expr: "@firstName"}] 
    },
    where: { 
      condition: [
        {expr: "@email = '" + email + "'"}, // filter by email
      ],
    }
  }
});

var res = query.ExecuteQuery(); 
// res is an XML object such as <recipient id="1234" email="contact@example.com" firstName="John"/>
var recipient = NLWS.nmsRecipient.load(res.$id); // conversion to a JavaScript object
recipient.email = "newemail@example.com";
recipient.save();
```

**例外を回避するには、`getIfExists`を使用してください：**

レコードが存在しない可能性がある場合は、`operation: "getIfExists"`ではなく`get`を使用して例外を回避します。

```javascript
var query = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: "nms:recipient", 
    operation: "getIfExists",
    select: { node: [{expr: "@id"}] },
    where: { 
      condition: [{expr: "@email = 'nonexistent@example.com'"}]
    }
  }
});

var res = query.ExecuteQuery();
if (res) {
  logInfo("Recipient found: " + res.$id);
} else {
  logInfo("Recipient not found");
}
```

## 複数のレコードを選択 {#select-multiple}

`select`操作を使用して、複数のレコードを取得します。 条件、順序、制限を追加できます。

**フィルターと順序を含むワークフローのクエリ：**

```javascript
var query = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: "xtk:workflow", 
    operation: "select", 
    select: {
      node: [
        {expr: "@id"},
        {expr: "@label"},
        {expr: "@internalName"}
      ] 
    }, 
    where: {
      condition: [
        {expr: "[folder/@name]='nmsTechnicalWorkflow'"},
        {expr: "@production = 1"}
      ]
    }, 
    orderBy: {
      node: {expr: "@internalName", sortDesc: "false"}
    }
  }
});

var res = query.ExecuteQuery();

var workflows = res.getElementsByTagName("workflow");
for each (var w in workflows) {
  logInfo(w.getAttribute("internalName"));
}
```

**XML構文を使用したクエリ配信：**

```javascript
var q = NLWS.xtkQueryDef.create(
  <queryDef schema="nms:delivery" operation="select" lineCount="3">
    <select>
      <node expr="@id"/>
      <node expr="@label"/>
      <node expr="@created"/>
    </select>
    <where>
      <condition expr="@label NOT LIKE '%Proof%'" bool-operator="AND"/>
      <condition expr="@created &lt;= '2024-12-01'" bool-operator="AND"/>
    </where>
    <orderBy>
      <node expr="@lastModified" sortDesc="true"/>
    </orderBy>    
  </queryDef>
);

var deliveries = q.ExecuteQuery();
for each(var delivery in deliveries.delivery) {
  logInfo(delivery.@id + ": " + delivery.@label);
}
```

>[!NOTE]
>
>**結果制限：** Campaignは、メモリの問題を防ぐために、クエリ結果を自動的に制限します。
>* デフォルトの制限はコンテキストによって異なります（通常は200～10,000 レコード）
>* `lineCount`を使用して、結果の最大数を明示的に設定します
>* 大規模なデータセット（1,000 レコード以上）の場合は、queryDefの代わりにワークフローを使用します。 ワークフローは、数百万行のデータを効率的に処理するように設計されています。

[ExecuteQuery](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-ExecuteQuery.html?lang=ja){target="_blank"}と[ クエリのベストプラクティス ](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html){target="_blank"}の詳細をご覧ください。

## ワークフロー移行データのクエリ {#workflow-transition-data}

ワークフローでJavaScript アクティビティを操作する場合、`vars.targetSchema`と`vars.tableName`を使用して、受信トランジションからのデータをクエリできます。

**ワークフローの移行からの受信者データのクエリ：**

```javascript
// Query data from the incoming transition
var query = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: vars.targetSchema, // The schema from the previous activity
    operation: 'select', 
    lineCount: 999999999, // Override default 10,000 limit
    select: { 
      node: [
        {expr: '@id'},
        {expr: '@email'},
        {expr: '@firstName'},
        {expr: '@lastName'}
      ]
    },
  }
});

var records = query.ExecuteQuery(); // Returns a DOMElement

for each(var record in records.getElements()) {
  logInfo("Processing: " + record.$id + " - " + record.$email);
  
  // Clean email address
  var cleanedEmail = record.$email.replace(/\s+/g, '').toLowerCase();
  
  // Update using parameterized query to prevent SQL injection
  sqlExec(
    "UPDATE " + vars.tableName + " SET sEmail=$(sz) WHERE iId=$(l)", 
    cleanedEmail, 
    record.$id
  );
}
```

>[!CAUTION]
>
>SQL インジェクションの脆弱性を防ぐため、文字列には`$(sz)`、整数には`$(l)`を含むパラメーター化されたクエリを常に使用してください。 詳しくは、[Campaign JSAPI ドキュメント ](https://experienceleague.adobe.com/developer/campaign-api/api/f-sqlExec.html){target="_blank"}を参照してください。

## レコードのカウント {#count-records}

`Count(@id)`をエイリアスと共に使用してレコードをカウントします。

**実行中の仮説の数：**

```javascript
var jobCount = NLWS.xtkQueryDef.create(
  <queryDef schema="nms:remaHypothesis" operation="get">
    <select>
      <node expr="Count(@id)" alias="@count"/>
    </select>
    <where>
      <condition expr={"@status=" + HYPOTHESIS_STATUS_RUNNING}/>
    </where>
  </queryDef>
);

var iJobCount = parseInt(jobCount.ExecuteQuery().@count);
logInfo("Running jobs: " + iJobCount);
```

**複数の条件を持つカウント：**

```javascript
var xmlQuery = <queryDef schema="nms:trackingLogRcp" operation="select">
  <select>
    <node expr="DateOnly(@logDate)" groupBy="1"/>
    <node expr="count(@id)" alias="@count"/>
    <node expr="countDistinct([@broadLog-id])" alias="@distinctCount"/>
  </select>
  <where>
    <condition expr={"@logDate IS NOT NULL AND @logDate &lt; #" + today + "# AND [@url-id] &lt;&gt; 1"}/>
  </where>
</queryDef>;

var result = NLWS.xtkQueryDef.create(xmlQuery).ExecuteQuery();
```

## 値の配分 {#distribution-values}

データパターンの分析に役立つ、特定のフィールドの値の分布を取得します。

**国コードの配布：**

```javascript
/**
 * @class DistributionOfValues
 * @param {string} schema - The schema name (e.g., 'nms:recipient')
 * @param {string} field - The field to analyze (e.g., '@country')
 */
function DistributionOfValues(schema, field) {
  this.queryDef = {
    operation: 'select', 
    lineCount: 200, 
    schema: schema,
    select: {
      node: [
        {alias: '@expr', expr: field, groupBy: 'true', noSqlBind: 'true'},
        {alias: '@count', expr: 'COUNT()', label: 'Count'},
      ]
    },
    orderBy: {
      node: [{expr: 'COUNT()', sortDesc: 'true'}]
    },
  };
  
  /**
   * Execute the query and return results
   * @return {Array} XML list of results
   */
  this.get = function() {
    this.results = NLWS.xtkQueryDef.create({queryDef: this.queryDef}).ExecuteQuery();
    return this.results.getElements();
  };
}

// Usage example
var d = new DistributionOfValues('nms:recipient', '@country');

// Optional: Add additional filters
d.queryDef.where = {
  condition: [{expr: 'DateOnly(@created) = #2024-12-01#'}]
};

// Execute and display results
for each(var result in d.get()) {
  logInfo(result.$expr + ': ' + result.$count);
}
```

## Analyticsを使用したクエリ列挙 {#analyze-enumerations}

`analyze` オプションは、列挙値のユーザーに適した名前を返します。 数値だけでなく、Campaignは「名前」と「ラベル」のサフィックスを使用して文字列値とラベルも返します。

**列挙分析を使用したクエリ配信マッピング：**

```javascript
var query = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: "nms:deliveryMapping",
    operation: "get",
    select: {
      node: [
        {expr: "@id"},
        {expr: "@name"},
        {expr: "[storage/@exclusionType]", analyze: true}  // Analyze enumeration
      ]
    },
    where: {
      condition: [{expr: "@name='mapRecipient'"}]
    }
  }
});

var mapping = query.ExecuteQuery();

// Result includes:
// - exclusionType: 2 (numeric value)
// - exclusionTypeName: "excludeRecipient" (string value)
// - exclusionTypeLabel: "Exclude recipient" (display label)
logInfo("Type: " + mapping.$exclusionType);
logInfo("Name: " + mapping.$exclusionTypeName);
logInfo("Label: " + mapping.$exclusionTypeLabel);
```

[分析オプション ](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html#the-analyze-option){target="_blank"}について詳しく説明します。

## ページネーション {#pagination}

`lineCount`と`startLine`を使用して、大きな結果セットをページネーションします。

**ページ内のレコードを取得：**

```javascript
// Get records 3 and 4 (skip first 2)
var query = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: "nms:recipient",
    operation: "select",
    lineCount: 2,     // Number of records per page
    startLine: 2,     // Starting position (0-indexed)
    select: {
      node: [
        {expr: "@id"},
        {expr: "@email"}
      ]
    },
    orderBy: {
      node: [{expr: "@id"}]  // Critical: Always use orderBy for pagination
    }
  }
});

var recipients = query.ExecuteQuery();
```

>[!CAUTION]
>
>**ページネーションにはorderBy:**&#x200B;が必要です`orderBy`句がなければ、クエリ結果は一貫した順序で表示される保証はありません。 後続の呼び出しは、異なるページを返したり、レコードを重複したりします。 ページネーションを使用する場合は、必ず`orderBy`を含めてください。

[ ページネーション ](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html#pagination){target="_blank"}の詳細をご覧ください。

## 動的クエリ構築 {#dynamic-queries}

プログラムで条件を追加することで、クエリを動的に構築できます。

**既存のクエリに条件を追加：**

```javascript
var xmlQuery = <queryDef schema="nms:delivery" operation="select">
  <select>
    <node expr="@id"/>
    <node expr="@label"/>
  </select>
  <where/>
</queryDef>;

// Dynamically add conditions
if (includeProofs) {
  xmlQuery.where.appendChild(
    <condition expr="@label LIKE '%Proof%'"/>
  );
}

if (startDate) {
  xmlQuery.where.appendChild(
    <condition expr={"@created >= #" + Format.toISO8601(startDate) + "#"}/>
  );
}

var result = NLWS.xtkQueryDef.create(xmlQuery).ExecuteQuery();
```

**ループ内のselectおよびwhere句を作成：**

```javascript
// Build select dynamically
var select = <select/>;
var fields = ["@id", "@label", "@created"];
for each(var field in fields) {
  select.appendChild(<node expr={field}/>);
}

// Build where dynamically
var where = <where/>;
var conditions = [
  "@status = 1",
  "@type = 'email'"
];
for each(var condition in conditions) {
  where.appendChild(<condition expr={condition}/>);
}

// Create complete query
var xmlQuery = <queryDef operation="select" schema="nms:delivery"/>;
xmlQuery.appendChild(select);
xmlQuery.appendChild(where);

var result = NLWS.xtkQueryDef.create(xmlQuery).ExecuteQuery();
```

## 高度なqueryDef メソッド {#advanced-methods}

`ExecuteQuery()`を超えて、queryDefは高度なユースケースに特化した複数のメソッドを提供します。

### BuildQuery – 実行せずにSQLを生成 {#build-query}

実行せずにSQL ステートメントを生成するには、`BuildQuery()`を使用します。 これは、デバッグ、ログ記録、またはクエリを外部システムに渡す場合に便利です。

```javascript
var query = NLWS.xtkQueryDef.create(
  <queryDef schema="nms:recipient" operation="select">
    <select>
      <node expr="@id"/>
      <node expr="@email"/>
    </select>
    <where>
      <condition expr="@email IS NOT NULL"/>
    </where>
  </queryDef>
);

// Get the generated SQL
var sql = query.BuildQuery();
logInfo("Generated SQL: " + sql);
// Output: "SELECT iRecipientId, sEmail FROM NmsRecipient WHERE sEmail IS NOT NULL"
```

[BuildQuery](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-BuildQuery.html){target="_blank"}の詳細をご覧ください。

### BuildQueryEx – 形式文字列を使用したSQLの取得 {#build-query-ex}

`BuildQueryEx()`は、`sqlSelect()`関数と互換性のあるSQL クエリと形式文字列の両方を返します。

```javascript
var query = NLWS.xtkQueryDef.create(
  <queryDef schema="nms:recipient" operation="select">
    <select>
      <node expr="@id"/>
      <node expr="@email"/>
      <node expr="@firstName"/>
    </select>
  </queryDef>
);

var [sql, format] = query.BuildQueryEx();
logInfo("SQL: " + sql);
logInfo("Format: " + format);

// Use with sqlSelect
var results = sqlSelect(format, sql);
```

[BuildQueryEx](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-BuildQueryEx.html){target="_blank"}の詳細をご覧ください。

### すべてを選択 – すべてのフィールドを追加して選択します {#select-all}

`SelectAll()` メソッドは、スキーマのすべてのフィールドをselect句に自動的に追加し、各フィールドを手動で一覧表示しないようにします。

```javascript
var query = NLWS.xtkQueryDef.create(
  <queryDef schema="nms:recipient" operation="select">
    <select/>
    <where>
      <condition expr="@id = 12345"/>
    </where>
  </queryDef>
);

// Add all fields to the select
query.SelectAll(false);

var result = query.ExecuteQuery();
// Result contains all recipient fields
```

[SelectAll](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-SelectAll.html){target="_blank"}の詳細をご覧ください。

### 更新 – 一括更新レコード {#mass-update}

`Update()` メソッドを使用すると、各レコードを個別に読み込まずに、クエリ条件に一致するレコードに対して一括更新を実行できます。

```javascript
// Mass update example: set a field value for all matching records
var updateQuery = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: "nms:recipient",
    operation: "update",
    where: {
      condition: [{expr: "@country = 'US'"}]
    },
    set: {
      node: [{expr: "@blackList", value: "0"}]
    }
  }
});

// Execute mass update
updateQuery.Update();
logInfo("Mass update completed");
```

>[!CAUTION]
>
>一括更新は、WHERE句に一致するすべてのレコードに影響します。 最初にselect クエリを使用してwhere条件を常にテストし、影響を受けるレコードを確認します。

[ アップデート ](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-Update.html){target="_blank"}の詳細をご覧ください。

### GetInstanceFromModel - テンプレートインスタンスのクエリ {#get-instance-from-model}

テンプレートから作成されたインスタンスからデータを取得するには、`GetInstanceFromModel()`を使用します。

```javascript
var query = NLWS.xtkQueryDef.create(
  <queryDef schema="nms:delivery" operation="select">
    <select>
      <node expr="@id"/>
      <node expr="@label"/>
    </select>
    <where>
      <condition expr="@isModel = 1"/>
    </where>
  </queryDef>
);

// Get instance data from template
var instance = query.GetInstanceFromModel("nms:delivery");
```

[GetInstanceFromModel](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-GetInstanceFromModel.html){target="_blank"}の詳細をご覧ください。

## バッチ操作 {#batch-operations}

複数のレコードを一括処理して、パフォーマンスを向上できます。

**バッチ更新の配信ラベル：**

```javascript
// Query all deliveries to update
var query = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: vars.targetSchema,
    operation: 'select', 
    lineCount: 999999999,
    select: { 
      node: [{expr: '@id'}]
    },
    where: {
      condition: [{expr: "@label LIKE '%OLD%'"}]
    }
  }
});

var records = query.ExecuteQuery();

// Process each record
for each(var record in records.getElements()) {
  var delivery = NLWS.nmsDelivery.load(record.$id);
  var oldLabel = delivery.label.toString();
  var newLabel = oldLabel.replace(/OLD/g, 'NEW');
  
  logInfo("Updating: " + oldLabel + " => " + newLabel);
  
  delivery.label = newLabel;
  delivery.save();
}

logInfo("Updated " + records.getElements().length + " deliveries");
```

## 生のSQL実行 {#raw-sql}

複雑な操作の場合は、生のSQLを直接実行できます。

**パラメーター化されたSQLを実行：**

```javascript
var dbEngine = instance.engine;

// Using parameterized query (recommended)
dbEngine.exec(
  "UPDATE NmsUserAgentStats SET iVisitorsOfTheDay=$(l) WHERE tsDate=$(dt)", 
  visitorCount,
  Format.parseDateTimeInter(dateString)
);
```

**sqlSelectを使用したクエリ：**

```javascript
// Execute SELECT query and parse results
var xml = sqlSelect(
  "collection,@id,@email", 
  "SELECT iId as id, sEmail as email FROM " + vars.tableName + " WHERE iStatus = 1"
);

logInfo(xml.toXMLString()); // "<select><collection id="1" email="..."/></select>"

for each(var record in xml.collection) {
  logInfo('ID: ' + record.@id + ', Email: ' + record.@email);
  
  // Load full object if needed
  if (vars.targetSchema == "nms:recipient") {
    var recipient = NLWS.nmsRecipient.load(record.@id);
    recipient.lastName = recipient.lastName.toUpperCase();
    recipient.save();
  }
}
```

>[!CAUTION]
>
>生のSQLを使用する場合：
>
>* ユーザー入力を常に検証し、整理する
>* `$(sz)`、`$(l)`、`$(dt)`などのパラメーター化されたクエリを使用します。
>* [FFDA デプロイメント ](../architecture/enterprise-deployment.md)におけるローカル データベースとクラウド データベースの違いに注意してください

## ベストプラクティス {#best-practices}

queryDef メソッドとNLWS メソッドを使用する場合：

* **大規模なデータセットにワークフローを使用** - QueryDefは大量データ処理用に設計されていません。 1,000以上のレコードを持つデータセットには、数百万行を効率的に処理できるワークフローを使用します。 詳しくは、[Campaign SDK ドキュメント ](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html){target="_blank"}を参照してください
* **パラメーター化されたクエリを使用** - SQL インジェクションを防ぐには、常に`$(sz)`で連結パラメーター（`$(l)`、`sqlExec`）を使用します
* **明示的な制限を設定** - `lineCount`を使用して結果サイズを制御します。 Campaignのデフォルトの制限はコンテキストによって異なります（200 ～ 10,000 レコード）
* **ページネーションでorderByを使用** – 一貫したページネーションを確保するために`orderBy`と`startLine`を使用する場合は、常に`lineCount`句を含めます
* **getIfExists**&#x200B;を使用 – レコードが存在しない場合は`operation: "getIfExists"`を使用して例外を回避します
* **列挙にAnalyticsを使用** - ノードを選択する`analyze: true`を追加して、使いやすい列挙名とラベルを取得します
* **クエリを最適化** – 結果セットを制限するために適切な`where`条件を追加します
* **バッチ処理** – 複数のレコードを一括処理して、メモリの問題とタイムアウトを回避します
* **FFDA認識** - [ エンタープライズ （FFDA）のデプロイメント ](../architecture/enterprise-deployment.md)では、[!DNL Campaign]が2つのデータベースで動作することに注意してください



## 実践的なユースケース {#use-cases}

### クエリのデバッグとログ {#debug-queries}

`BuildQuery()`を使用して、生成されたSQLを実行前に調べます。

```javascript
var query = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: "nms:recipient",
    operation: "select",
    select: { node: [{expr: "@id"}, {expr: "@email"}] },
    where: { condition: [{expr: "@blackList = 0"}] }
  }
});

// Log the SQL for debugging
var sql = query.BuildQuery();
logInfo("About to execute: " + sql);

// Now execute
var results = query.ExecuteQuery();
```

### SelectAllを使用したレコードの複製 {#duplicate-record}

レコードを複製する際にすべてのフィールドをコピーするには、`SelectAll()`を使用します。

```javascript
// Query the original record
var query = NLWS.xtkQueryDef.create(
  <queryDef schema="nms:delivery" operation="get">
    <select/>
    <where>
      <condition expr="@id = 12345"/>
    </where>
  </queryDef>
);

// Select all fields for duplication
query.SelectAll(true); // true indicates duplication mode

var original = query.ExecuteQuery();

// Create a new delivery from the original
var newDelivery = NLWS.nmsDelivery.create(original);
newDelivery.label = original.@label + " (Copy)";
newDelivery.save();
```

### 一括更新前に検証 {#validate-mass-update}

一括更新を実行する前に、影響を受けるレコードを常にプレビューします。

```javascript
// Step 1: Preview what will be updated
var previewQuery = NLWS.xtkQueryDef.create({
  queryDef: {
    schema: "nms:recipient",
    operation: "select",
    select: { node: [{expr: "@id"}, {expr: "@email"}] },
    where: { condition: [{expr: "@country = 'US' AND @blackList = 1"}] }
  }
});

var preview = previewQuery.ExecuteQuery();
var count = preview.getElementsByTagName("recipient").length;
logInfo("About to update " + count + " recipients");

// Step 2: If count looks correct, proceed with mass update
if (count > 0 && count < 10000) {
  sqlExec("UPDATE NmsRecipient SET iBlackList = 0 WHERE sCountryCode = 'US' AND iBlackList = 1");
  logInfo("Mass update completed for " + count + " recipients");
} else {
  logWarning("Update cancelled: count is " + count);
}
```

## クエリ定義の構文リファレンス {#querydef-reference}

`queryDef` オブジェクトの完全な構造：

```javascript
{
  queryDef: {
    schema: 'nms:recipient',           // Required: target schema
    operation: 'select',                // select|get|getIfExists|count
    lineCount: 100,                    // Maximum records to return
    startLine: 0,                      // Offset for pagination
    select: {
      node: [
        {
          expr: '@id',                 // XPath expression
          alias: '@myAlias',           // Optional alias
          label: 'ID',                 // Optional label
          groupBy: 'true',             // Group by this field
          noSqlBind: 'true'            // No SQL binding on constants
        }
      ]
    },
    where: {
      condition: [
        {
          expr: '@email IS NOT NULL',  // Condition expression
          boolOperator: 'AND',         // AND|OR
          setOperator: 'EXISTS',       // EXISTS|NOT EXISTS|IN|NOT IN
          enabledIf: '',               // Enabling condition
          ignore: false,               // Ignore this condition
          sql: '',                     // Native SQL expression
          'filter-name': ''            // Predefined filter name
        }
      ]
    },
    orderBy: {
      node: [
        {
          expr: '@lastModified',       // Field to sort by
          sortDesc: 'true'             // true for DESC, false for ASC
        }
      ]
    },
    groupBy: {
      node: [
        {expr: '@country'}             // Group by field
      ]
    }
  }
}
```

## 関連トピック {#related-topics}

* [Campaign API の概要](api.md)
* [Campaign JavaScript SDK - クエリ API](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html){target="_blank"}
* [queryDef API リファレンス ](https://experienceleague.adobe.com/developer/campaign-api/api/s-xtk-queryDef.html){target="_blank"}
* [Campaign JSAPI ドキュメント ](https://experienceleague.adobe.com/developer/campaign-api/api/p-1.html?lang=ja){target="_blank"}
* [スキーマの操作](schemas.md)
* [クエリエディターの操作](../start/query-editor.md)
