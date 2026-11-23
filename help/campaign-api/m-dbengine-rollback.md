---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '44'
ht-degree: 29%
---
# ロールバック

接続中のトランザクションをキャンセルします。

```text
rollback ()
```

## パラメーター

なし。

## 戻り値

なし。

## 備考

トランザクションは、[begin](m-dbengine-begin.md) メソッドを使用して事前に開始されている必要があります。

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
