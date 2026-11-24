---
source-git-commit: 3319b56a62aa8a8364c7f2f85bc81708a66a5978
workflow-type: tm+mt
source-wordcount: '103'
ht-degree: 16%
---
# ログオン

スクリプト実行コンテキストを現在のログインに変更します。

```text
logon (sessionToken)
```

```text
logon (login, password)
```

```text
logon (context)
```

## パラメーター

**sessionToken**&#x200B;使用するセッショントークン。

**login**&#x200B;使用するオペレーターのログイン。

**password** オペレーターのパスワード。 現在のログインに「管理者」権限がある場合、パスワードは空の文字列にすることができます。

**context**&#x200B;前回のログオン呼び出しによって返された、ログインを表すオブジェクト。

## 戻り値

前のログインに一致するオブジェクトを返します。 これにより、このパラメーターをログオン関数に渡すことにより、以前のログインを復元できます。

## 備考

例：

```javascript
var oldContext = logon("jdoe", "")

// ...

logon(oldContext)
```

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* 配信メッセージ
* タイポロジルール
* 読み込み
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
