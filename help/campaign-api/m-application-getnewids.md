---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '71'
ht-degree: 18%
---
# getNewIds

内部データベースキーのIDのリストを返します。

```text
getNewIds (count [, sequence ])
```

## パラメーター

**count** メソッドが返す必要があるIDの数。

**シーケンス**&#x200B;使用するシーケンスの名前。

## 戻り値

IDのリストを含むテーブル：

## 備考

このメソッドは、NLWS.xtkSession.GetNewIds （）およびNLWS.xtkSession.GetNewIdsEx （） SOAP メソッドと同等ですが、より効率的です。

## 機能

**クラスのメソッド：** [ アプリケーション ](c-application.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
