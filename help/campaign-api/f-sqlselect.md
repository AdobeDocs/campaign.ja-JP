---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '74'
ht-degree: 18%
---
# sqlSelect

SQL クエリを実行し、結果をXML ドキュメントとして返します。

```text
sqlSelect (format, query [, dataSource ])
```

## パラメーター

**format**&#x200B;期待されるデータの形式を名前:type\[:length\]型リスト docName, \[fieldXPath:type,\]\*として記述するコンマで区切られた文字列

**query** SQL クエリ。

**dataSource** データソース。

## 戻り値

クエリ結果の各行の要素のリストを含むXML オブジェクト。

## 備考

例：

```javascript
var res = sqlSelect("publicUrl,@sstringValue:string",
        "select sstringValue from XtkOption where sname='XtkFileRes_PublicUrl'")
logInfo(res.publicUrl.@sstringValue.toString())
```

```javascript
var xmlRes = sqlSelect("name:string,file:string:64","select relname, relfilenode from  pg_class WHERE relkind='r' AND pg_get_userbyid(relowner)<>'postgres';");
```

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
