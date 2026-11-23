---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '123'
ht-degree: 11%
---
# sqlExecOnDataSource

データソースに対してSQL スクリプトを実行します。

```text
sqlExecOnDataSource (query, dataSource [, value1, ... ])
```

## パラメーター

**query** SQL クエリ。

**dataSource** データソース。

SQL クエリの&#x200B;**value1, ...**&#x200B;変数。

## 戻り値

UPDATEまたはINSERT SQL コマンドで更新または挿入されたレコードの数。

## 備考

データソースの承認済み値は次のとおりです。

* 「」または「デフォルト」はAdobe Campaign データベースを指します

* 「nms:extAccount:InternalName」は、Adobe Campaign外部アカウント（FDA）で定義されたデータソースを指します

* 「name」（データソースの名前）は、インスタンス設定ファイル（config-instance.xml）で定義されたデータソースを次の形式で指します。

  ```xml
                   <dataStore hosts="*" lang="">
        <dataSource name="datasourcename">
          <dbcnx encrypted="" login="" password=""
                 provider="" server=""/>
        </dataSource>
      </dataStore>
  ```

例：

```javascript
sqlExecOnDataSource("UPDATE XtkOption SET sStringValue = $(sz) WHERE sName = $(sz)", oracleExternalDB, 'WdbcOptions_TableSpaceWork_nms:extAccount:' + sExtAccount)
```

この関数のパラメーターとして設定されたオプション変数は、[sqlGetString （query, value1, ...） ](f-sqlgetstring.md)で定義されています

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
