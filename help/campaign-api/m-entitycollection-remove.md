---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '43'
ht-degree: 32%
---
# 削除

コレクションからエンティティを削除します。

```text
remove (index|object)
```

## パラメーター

削除するエンティティの&#x200B;**index\|object** インデックスまたはエンティティ自体。

## 戻り値

なし。

## 備考

例：

```javascript
var delivery = NLWS.nmsDelivery.load("12435")
delivery.attachment.remove(1)
delivery.save()
```

```javascript
var delivery = NLWS.nmsDelivery.load("12435")
var attach = delivery.attachment[1]
delivery.attachment.remove(attach)
delivery.save()
```

## 機能

**クラスのメソッド：** [EntityCollection](c-entitycollection.md)

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
