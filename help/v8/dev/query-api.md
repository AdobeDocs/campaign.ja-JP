---
title: queryDef を使用したデータベースのクエリ
description: queryDef メソッドと NLWS メソッドを使用して Campaign データベースに対してクエリを実行する方法を説明します
feature: API
role: Developer
level: Intermediate, Experienced
hide: true
hidefromtoc: true
exl-id: 0fd39d6c-9e87-4b0f-a960-2aef76c9c8eb
source-git-commit: ceab90331fab0725962a2a98f338ac3dc31a2588
workflow-type: tm+mt
source-wordcount: '1281'
ht-degree: 2%

---

# queryDef を使用したデータベースのクエリ {#query-database-api}

[!DNL Adobe Campaign] には、`queryDef` および `NLWS` オブジェクトを使用してデータベースとやり取りするための強力なJavaScript メソッドが用意されています。 これらのSOAP ベースの手法を使用すると、JSON、XML、SQL を使用して、データの読み込み、作成、更新およびクエリを行うことができます。

>[!NOTE]
>
>このドキュメントでは、プログラムでデータベースにクエリを実行するためのデータ指向 API について説明します。 REST API については、[REST API の基本を学ぶ &#x200B;](api/get-started-apis.md) を参照してください。 視覚的なクエリ作成については、[&#x200B; クエリエディターの操作 &#x200B;](../start/query-editor.md) を参照してください。

## NLWS とは {#what-is-nlws}

`NLWS` （Neolane Web Services）は、[!DNL Adobe Campaign] のJavaScript ベースの API メソッドへのアクセスに使用されるグローバル SOAP オブジェクトです。 スキーマは、`NLWS` オブジェクトのプロパティで、これを使用すると、Campaign エンティティをプログラムでやり取りできます。

[Campaign JSAPI ドキュメント &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/p-14.html?lang=ja){target="_blank"} によると、「スキーマは「NLWS」グローバルオブジェクトです。 スキーマメソッドにアクセスする構文は、次のようなパターンになります。

```javascript
NLWS.<namespace><SchemaName>.<method>()
```

**例：**

* `NLWS.nmsRecipient` – 受信者スキーマのアクセス方法（`nms:recipient`）
* `NLWS.nmsDelivery` – 配信スキーマのアクセス方法（`nms:delivery`）
* `NLWS.xtkQueryDef` - データベースをクエリするための queryDef メソッドにアクセスします

一般的な API メソッドを次に示します。

* `load(id)` - ID でエンティティを読み込みます。 [詳細情報](https://experienceleague.adobe.com/developer/campaign-api/api/f-load.html){target="_blank"}
* `create(data)` – 新しいエンティティを作成します
* `save()` - エンティティへの変更を保存

**公式ドキュメントからの例：**

```javascript
var delivery = NLWS.nmsDelivery.load("12435")
```

>[!NOTE]
>
>**代替構文：** 後方互換性のために、一部のドキュメントでは小文字の名前空間構文も表示される場合があります（例：`nms.recipient.create()`、`xtk.queryDef.create()`）。 両方の構文が機能しますが、`NLWS` れは Campaign JSAPI の公式リファレンスに記載されている標準です。

## 前提条件 {#prerequisites}

queryDef メソッドと NLWS メソッドを使用する前に、次の点を理解しておく必要があります。

* JavaScript
* [!DNL Adobe Campaign] データモデルとスキーマ
* スキーマ要素を移動するための XPath 式

**Campaign データモデルについて：**

Adobe Campaignには、Cloud データベース内でリンクされたテーブルで構成される、事前定義済みのデータモデルが付属しています。 基本構造は次のとおりです。

* **受信者テーブル** （`nmsRecipient`） – マーケティングプロファイルを格納したメインテーブル
* **配信テーブル** （`nmsDelivery`） – 配信を実行するためのパラメーターを含む配信アクションおよびテンプレートを保存します。
* **ログテーブル** – 実行ログを保存します。
   * `nmsBroadLogRcp` – 受信者に送信されたすべてのメッセージの配信ログ
   * `nmsTrackingLogRcp` – 受信者の反応（開封数、クリック数）のトラッキングログ
* **テクニカルテーブル** - オペレーター（`xtkGroup`）、セッション（`xtkSessionInfo`）、ワークフロー（`xtkWorkflow`）などのシステムデータを格納します。

Campaign インターフェイスのスキーマの説明にアクセスするには、**管理/設定/データスキーマ** を参照し、リソースを選択して **ドキュメント** タブをクリックします。

## エンティティスキーマメソッド {#entity-schema-methods}

[!DNL Adobe Campaign] の各スキーマ（`nms:recipient`、`nms:delivery` など）には、`NLWS` オブジェクトを通じてアクセス可能なメソッドが付属しています。 これらのメソッドは、データベースエンティティを操作する便利な方法を提供します。

### 静的メソッド {#static-methods}

静的SOAP メソッドにアクセスするには、スキーマを表すオブジェクトでメソッドを呼び出します。 例：`NLWS.xtkWorkflow.PostEvent()` は静的メソッドを呼び出します。

### 非静的メソッド {#non-static-methods}

非静的SOAP メソッドを使用するには、対応するスキーマで `load` または `create` メソッドを使用して、まずエンティティを取得する必要があります。 詳しくは、[Campaign JSAPI ドキュメント &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/p-14.html?lang=ja){target="_blank"} を参照してください。

### エンティティの読み込み、保存、作成 {#load-save-create}

**ID でエンティティを読み込んで更新する：**

```javascript
// Load a delivery by @id and save
var delivery = NLWS.nmsDelivery.load("12435");
delivery.label = "New label";
delivery.save();
```

**JSON を使用した受信者の作成：**

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

**XML を使用した受信者の作成：**

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

## QueryDef の概要 {#querydef-overview}

`xtk:queryDef` スキーマは、データベースクエリを作成および実行するメソッドを提供します。 `NLWS.xtkQueryDef.create()` を使用して、JSON または XML 構文でクエリを作成できます。

**使用可能な操作：**

* `select` – 複数のレコードの取得
* `get` - 1 つのレコードを取得（SQL `LIMIT 1`）
* `getIfExists` - 1 つのレコードを取得し、見つからない場合は null を返します
* `count` – 一致条件を満たすレコードをカウント

queryDef メソッドについて詳しくは、[Campaign JSAPI ドキュメント &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/s-xtk-queryDef.html){target="_blank"} を参照してください。

## JSON を使用したクエリ {#query-json}

`NLWS.xtkQueryDef.create()` を使用して、JSON 構文でクエリを作成します。 `get` 操作は 1 つのレコード （SQL `LIMIT 1`）を取得し、`select` は複数のレコードを取得します。

**1 人の受信者を取得：**

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

**例外を避けるために `getIfExists` を使用します：**

レコードが存在しない可能性がある場合は、例外を避けるために、`operation: "getIfExists"` の代わりに `get` を使用します。

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

複数のレコードを取得するには、`select` 操作を使用します。 条件、順序、制限を追加できます。

**フィルターと順序を使用したクエリワークフロー：**

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

**XML 構文を使用した配信のクエリ：**

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
>**結果の制限：** Campaign では、メモリの問題を防ぐために、クエリ結果を自動的に制限します。
>* デフォルトの制限はコンテキストによって異なります（通常は 200～10,000 件のレコード）
>* `lineCount` を使用して、結果の最大数を明示的に設定します
>* 大規模なデータセット（1,000 件を超えるレコード）の場合は、queryDef の代わりにワークフローを使用します。 ワークフローは、数百万行を効率的に処理するように設計されています。

[ExecuteQuery](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-ExecuteQuery.html?lang=ja){target="_blank"} および [&#x200B; クエリのベストプラクティス &#x200B;](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html){target="_blank"} の詳細をご覧ください。

## ワークフロートランジションデータのクエリ {#workflow-transition-data}

ワークフローでJavaScript アクティビティを使用する場合、`vars.targetSchema` と `vars.tableName` を使用して、受信トランジションのデータをクエリできます。

**ワークフロートランジションから受信者データをクエリする：**

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
>SQL インジェクションの脆弱性を防ぐには、文字列には `$(sz)`、整数には `$(l)` を持つパラメーター化クエリを常に使用します。 詳しくは、[Campaign JSAPI ドキュメント &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/f-sqlExec.html){target="_blank"} を参照してください。

## レコードのカウント {#count-records}

レコードをカウントするには、`Count(@id)` をエイリアスで使用します。

**実行中の仮説をカウント：**

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

特定のフィールドの値の分布を取得します。これは、データパターンの分析に役立ちます。

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

## 分析を使用した列挙のクエリ {#analyze-enumerations}

`analyze` オプションは、列挙値のわかりやすい名前を返します。 Campaign では、数値だけでなく、「名前」や「ラベル」のサフィックスを使用して文字列値とラベルも返します。

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

詳しくは、[&#x200B; 分析オプション &#x200B;](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html#the-analyze-option){target="_blank"} を参照してください。

## ページネーション {#pagination}

大きな結果セットごとにページ番号を付けるには、`lineCount` と `startLine` を使用します。

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
>**ページネーションには orderBy が必要です：** `orderBy` 句を使用しない場合、クエリ結果の順序が一貫していることが保証されません。 後続の呼び出しでは、異なるページが返されたり、重複したレコードが返されたりする場合があります。 ページネーションを使用する場合は、必ず `orderBy` を含めます。

詳しくは、[&#x200B; ページネーション &#x200B;](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html#pagination){target="_blank"} を参照してください。

## 動的クエリの構成 {#dynamic-queries}

プログラムによって条件を追加して、動的にクエリを作成します。

**既存のクエリに条件を追加する：**

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

**ループ内の select 句と where 句の構築：**

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

## 高度な queryDef メソッド {#advanced-methods}

`ExecuteQuery()` に加えて、queryDef には、高度なユースケース向けの専用メソッドがいくつか用意されています。

### BuildQuery – 実行せずに SQL を生成する {#build-query}

`BuildQuery()` を使用して、実行せずに SQL 文を生成します。 これは、デバッグ、ログ、外部システムへのクエリの受け渡しに役立ちます。

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

[BuildQuery](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-BuildQuery.html){target="_blank"} の詳細情報。

### BuildQueryEx – 書式文字列を使用して SQL を取得する {#build-query-ex}

`BuildQueryEx()` は、SQL クエリと、`sqlSelect()` 関数と互換性のある書式文字列の両方を返します。

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

[BuildQueryEx](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-BuildQueryEx.html){target="_blank"} の詳細情報。

### SelectAll – 選択するすべてのフィールドを追加 {#select-all}

`SelectAll()` メソッドでは、スキーマのすべてのフィールドを select 句に自動的に追加するので、各フィールドを手動でリストする必要がなくなります。

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

[SelectAll](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-SelectAll.html){target="_blank"} の詳細情報。

### 更新 – 一括更新レコード {#mass-update}

`Update()` メソッドを使用すると、各レコードを個別に読み込まなくても、クエリ条件に一致するレコードを一括更新できます。

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
>一括更新は、where 句に一致するすべてのレコードに影響します。 最初に選択クエリを使用して where 条件を常にテストし、影響を受けるレコードを確認します。

詳細情報：[&#x200B; 更新 &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-Update.html){target="_blank"}。

### GetInstanceFromModel - テンプレート インスタンスのクエリ {#get-instance-from-model}

テンプレートから作成されたインスタンスからデータを取得するには、`GetInstanceFromModel()` を使用します。

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

[GetInstanceFromModel](https://experienceleague.adobe.com/developer/campaign-api/api/sm-queryDef-GetInstanceFromModel.html){target="_blank"} の詳細を表示します。

## バッチ操作 {#batch-operations}

パフォーマンスを向上させるために、複数のレコードをバッチで処理します。

**配信ラベルのバッチ更新：**

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

## 生の SQL 実行 {#raw-sql}

複雑な操作の場合は、生の SQL を直接実行できます。

**パラメーター化 SQL の実行：**

```javascript
var dbEngine = instance.engine;

// Using parameterized query (recommended)
dbEngine.exec(
  "UPDATE NmsUserAgentStats SET iVisitorsOfTheDay=$(l) WHERE tsDate=$(dt)", 
  visitorCount,
  Format.parseDateTimeInter(dateString)
);
```

**sqlSelect を使用したクエリ：**

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
>生の SQL を使用する場合：
>
>* ユーザーの入力を常に検証し、不要部分を削除する
>* `$(sz)`、`$(l)` な `$(dt)` のパラメーター化クエリの使用
>* [FFDA デプロイメントでのローカルデータベースとクラウドデータベースの違いに注意してください &#x200B;](../architecture/enterprise-deployment.md)

## ベストプラクティス {#best-practices}

queryDef メソッドと NLWS メソッドを使用する場合：

* **大規模なデータセットにはワークフローを使用** - QueryDef は大量のデータ処理用には設計されていません。 1,000 件を超えるレコードを持つデータセットの場合は、数百万行を効率的に処理できるワークフローを使用します。 詳しくは、[Campaign SDK ドキュメント &#x200B;](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html){target="_blank"} を参照してください。
* **パラメーター化クエリの使用** - SQL インジェクションを防ぐために、常に `$(sz)` で連結パラメーター（`$(l)`、`sqlExec`）を使用します
* **明示的な制限を設定** – 結果のサイズを制御するには、`lineCount` を使用します。 Campaign のデフォルトの上限は、コンテキスト（200 ～ 10,000 件のレコード）によって異なります
* **ページネーションで orderBy を使用** - `orderBy` および `startLine` を使用する際に、一貫したページネーションを確保するために、常に `lineCount` 句を含めます
* **Use getIfExists** - レコードが存在しない可能性がある場合に、例外を避けるために `operation: "getIfExists"` を使用します
* **列挙に分析を使用** - `analyze: true` を追加して、ノードを選択し、わかりやすい列挙名とラベルを取得します
* **クエリの最適化** – 結果セットを制限する適切な `where` 条件を追加します
* **バッチ処理** – 複数のレコードをバッチで処理して、メモリの問題とタイムアウトを回避します
* **FFDA の認識** - [&#x200B; エンタープライズ（FFDA）デプロイメント &#x200B;](../architecture/enterprise-deployment.md) では、[!DNL Campaign] が 2 つのデータベースで動作することに注意してください



## 実用的なユースケース {#use-cases}

### クエリのデバッグとログ {#debug-queries}

`BuildQuery()` を使用して、実行前に生成された SQL を検査します。

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

### SelectAll でレコードを複製 {#duplicate-record}

レコードを複製する際に、`SelectAll()` を使用してすべてのフィールドをコピーします。

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

## クエリ定義構文リファレンス {#querydef-reference}

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
* [Campaign JavaScript SDK - Query API](https://opensource.adobe.com/acc-js-sdk/xtkQueryDef.html){target="_blank"}
* [queryDef API リファレンス &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/s-xtk-queryDef.html){target="_blank"}
* [Campaign JSAPI ドキュメント &#x200B;](https://experienceleague.adobe.com/developer/campaign-api/api/p-1.html?lang=ja){target="_blank"}
* [スキーマの操作](schemas.md)
* [クエリエディターの操作](../start/query-editor.md)

