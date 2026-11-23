---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '32'
ht-degree: 43%
---
# 保存

データベースにエンティティを保存します。

```text
save ()
```

## パラメーター

なし。

## 戻り値

なし。

## 備考

例：

```javascript
var delivery = NLWS.nmsDelivery.load("12435")
delivery.label = "Diffusion 12345"
delivery.save()
```

## 機能

**クラスのメソッド：** [ エンティティ ](c-entity.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
