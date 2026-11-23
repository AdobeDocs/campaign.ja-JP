---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '153'
ht-degree: 12%
---
# CurrentOperator （クラス）

現在の演算子に関する情報（名前、識別子、権限など）を含むオブジェクト。

このクラスには、アプリケーションサーバーの特定のプロパティへのアクセスを提供する単一のインスタンスがあります。 このシングルトンには、`application` グローバル変数のプロパティからアクセスできます。

例：

```text
var operator = application.operator logInfo("login: " + operator.login) logInfo("id: " + operator.id) logInfo("description: " + operator.computeString) logInfo("=== Groups ===") for each(var id in operator.groups) logInfo(id) logInfo("=== Rights ===") for each(var right in operator.rights) logInfo(right)
```

## メソッド

| メソッド | 説明 |
| --- | --- |
| [hasRight](m-currentoperator-hasright.md) | 演算子に特定の名前付き権限があるかどうかをテストします。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [ ログイン ](p-currentoperator-login.md) | 現在の演算子のログインを返します。 |
| [id](p-currentoperator-id.md) | 現在の演算子の内部識別子を返します。 |
| [computeString](p-currentoperator-computestring.md) | 現在の演算子の説明文字列を返します。 デフォルトでは、これはオペレーターの名前の後にログインが続きます。 |
| [ グループ ](p-currentoperator-groups.md) | 現在のオペレーターグループ内の識別子のリストを返します。 |
| [権限](p-currentoperator-rights.md) | 現在のオペレーターの権限のリストを返します。 |
| [ タイムゾーン ](p-currentoperator-timezone.md) | 現在の演算子で使用されているタイムゾーンの名前を返します。 |
| [ ホーム ](p-currentoperator-home.md) | 現在のオペレーターのルートフォルダーの名前を返します。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
