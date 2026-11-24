---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '234'
ht-degree: 6%
---
# クエリ

SELECT タイプ SQL クエリを実行します。

```text
query (command [, value1, ... ])
```

## パラメーター

**command** SQL コマンド。

**value1, ...** コマンドの変数。

## 戻り値

クエリの結果を繰り返し表示できるカーソル。

## 備考

警告：「機能」セクションに記載されている内容に反して、クエリ関数はWebAppでは使用できません。 変数は、コマンドのパラメーターを置き換えます。 変数タイプは、コマンドで宣言されたパラメーターと一致する必要があります。 次のタイプを使用できます。

* $（sz）文字列
* $（m） メモ
* $（l） long
* $（s）短い
* $（b） バイト
* $（d） double
* $（f）浮動小数
* $（ts） タイムスタンプ
* $（dt）日付
* $（tm）時間
* $（dur） タイムスパン

次の置換パラメーターは、値に自動的に置き換えられ、リンクされた変数は必要ありません。

* $（id）識別子を生成します
* $（id:NmsTrackingLogId）特定のシーケンスのおかげで識別子を生成します
* $（curdate）現在の日時

カーソルの反復は「for each」を介して行われ、回復された各行のテーブルを返します。 テーブルの各要素はクエリのフィールドと一致し、要素のタイプはフィールドのタイプによって異なります。 例：

```javascript
var cnx = application.getConnection()

var stmt = cnx.query("SELECT iOperatorId, sName, tsLastModified " +
                     "FROM xtkOperator " +
                     "WHERE iOperatorId > $(l)", 1000)
for each(var row in stmt)
  logInfo(row[0] + " : " + row[1] + " " + row[2])

cnx.dispose()
```

この例では、row\[0\]はiOperatorIdと一致する数値であり、row\[1\]はsNameと一致する文字列であり、row\[2\]はtsLastModifiedと一致する日付です。 この関数を使用するには、演算子に「sql」権限が必要です。そうでない場合は例外が発生します。

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
