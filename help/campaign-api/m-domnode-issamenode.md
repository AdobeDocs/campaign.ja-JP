---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '62'
ht-degree: 25%
---
# isSameNode

指定された参照が同じノードを表しているかどうかをテストします。

```text
isSameNode ()
```

## パラメーター

なし。

## 戻り値

両方の参照が同じノードを表す場合はtrue、それ以外の場合はfalse。

## 備考

このメソッドは、2つの参照を比較するために使用する必要があります。JavaScript演算子==と===は使用できません。

## 機能

**クラスのメソッド：** [DOMNode](c-domnode.md)

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
