---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '59'
ht-degree: 22%
---
# exec

execute コマンドのエイリアス。 この関数は廃止されました。[execute （） &#x200B;](m-dbengine-execute.md)を使用してください

```text
exec (command [, value1, ... ])
```

## パラメーター

**command** SQL コマンド。

**value1, ...** コマンドの変数。

## 戻り値

実行されたコマンドに適用される場合に更新または挿入される録音数（ゼロでない場合）。

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
