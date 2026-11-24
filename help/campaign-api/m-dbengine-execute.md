---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '152'
ht-degree: 8%
---
# 実行

SQL コマンドを実行します。

```text
execute (command [, value1, ... ])
```

## パラメーター

**command** SQL コマンド。

**value1, ...** コマンドの変数。

## 戻り値

実行されたコマンドに該当する場合、更新または挿入されたレコードの数。それ以外の場合は0です。

## 備考

変数は、コマンドのパラメーターの代用に使用されます。 変数タイプは、コマンドで宣言されたタイプと一致する必要があります。 種類は次のとおりです。

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
* $（dur） timespan en millisecondes （ms）

次の代入パラメーターは、値に自動的に置き換えられ、関連付けられた変数は必要ありません。

* $（id）識別子を生成します
* $（id:NmsTrackingLogId）特定のシーケンスのおかげで識別子を生成します
* $（curdate）現在の日時

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
