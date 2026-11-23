---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '43'
ht-degree: 32%
---
# hasRight

演算子に特定の名前付き権限があるかどうかをテストします。

```text
hasRight (name)
```

## パラメーター

**name**&#x200B;正しい名前です。

## 戻り値

演算子にこの権限がある場合はTrueです。

## 備考

例：

```javascript
      var hasAdminRight = application.operator.hasRight("admin")
```

## 機能

**クラスのメソッド：** [CurrentOperator](c-currentoperator.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
