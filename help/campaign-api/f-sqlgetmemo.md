---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '182'
ht-degree: 7%
---
# sqlGetMemo

SQL クエリの結果であるメモ フィールドを返します。

```text
sqlGetMemo (query [, value1, ... ])
```

## パラメーター

**query** SQL クエリ。

SQL クエリの&#x200B;**value1, ...**&#x200B;変数。

## 戻り値

クエリに一致するメモフィールド。

## 備考

変数は、コマンド内のパラメーターを置き換えます。 変数タイプは、コマンドで宣言されたパラメーターと一致する必要があります。 これらの変数は、「select」または「update」型宣言で使用できます。 次のタイプがあります。

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
* $（dur） タイムスパン （ミリ秒）

次の置換パラメーター（「更新」にのみ有効）は、値に自動的に置き換えられ、リンクされた変数は必要ありません。

* $（id）識別子を生成します
* $（id:NmsTrackingLogId）特定のシーケンスを使用して識別子を生成します
* $（curdate）現在の日時

変数を使用しても、Adobe Campaignのパフォーマンスには影響しません。 SQL クエリでは、1行と1つのテキストタイプフィールドを選択する必要があります。 この関数を使用するには、演算子に「sql」権限が必要です。それ以外の場合は例外が発生します。 例：

```javascript
      var logData = sqlGetMemo('select log from IncomingLog where sEmail =$(sz) order by tsCreated DESC LIMIT 1', email)
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
