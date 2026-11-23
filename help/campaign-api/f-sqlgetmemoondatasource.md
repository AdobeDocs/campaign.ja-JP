---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '81'
ht-degree: 16%
---
# sqlGetMemoOnDataSource

データソース上のSQL クエリの結果であるメモフィールドを返します。

```text
sqlGetMemoOnDataSource (query, dataSource [, value1, ... ])
```

## パラメーター

**query** SQL クエリ。

**dataSource** データソース。

SQL クエリの&#x200B;**value1, ...**&#x200B;変数。

## 戻り値

クエリに一致するメモフィールド。

## 備考

「データソース」パラメーターは、[sqlExecOnDataSource （query, dataSource, value1, ...） ](f-sqlexecondatasource.md)で定義されています 関数この関数のパラメーターとして設定されたオプション変数は、[sqlGetString （query, value1, ...） ](f-sqlgetstring.md)で定義されています

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
