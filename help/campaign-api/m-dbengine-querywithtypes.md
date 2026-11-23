---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '166'
ht-degree: 17%
---
# queryWithTypes

列タイプを指定したSELECT タイプ SQL クエリを実行します。

```text
queryWithTypes (command, types [, value1, ... ])
```

## パラメーター

**command** SQL コマンド。

**types**&#x200B;列タイプを含むテーブル。

**value1, ...** コマンド変数。

## 戻り値

クエリの結果を繰り返し表示できるカーソル。

## 備考

警告：「機能」セクションに記載されている内容とは異なり、queryWithTypes関数はWebAppでは使用できません。 関数は[query](m-dbengine-query.md)と同じで、列タイプが追加されています。 ほとんどの場合、列タイプは自動的に推測されるため、使用されません。 そのため、[ クエリ ](m-dbengine-query.md)が推奨されます。 ただし、場合によっては、特にOracleと日付型の列では、型を明示的に指定する必要がある場合があります。 列タイプは、次のリストの文字列です。

* 文字列
* 日時
* 日付
* 時間
* 期間
* 倍精度浮動小数点数
* 浮動小数点数
* ブール値
* バイト
* 短い
* 長整数
* int64
* メモ
* blob
* リンク
* bin

例：

```javascript
var cnx = application.getConnection()

var stmt = cnx.query("SELECT iOperatorId, sName, tsLastModified " +
                     "FROM xtkOperator " +
                     "WHERE iOperatorId > $(l)",
                     ["long", "string", "datetime"],
                     1000)
for each(var row in stmt)
  logInfo(row[0] + " : " + row[1] + " " + row[2])

cnx.dispose()
```

この関数を使用するには、演算子に「sql」権限が必要です。そうでない場合は例外が発生します。

## 機能

**クラスのメソッド：** [DBEngine](c-dbengine.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
