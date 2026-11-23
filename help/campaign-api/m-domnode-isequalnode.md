---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '95'
ht-degree: 16%
---
# isEqualNode

2つのノードを比較します。

```text
isEqualNode (arg)
```

## パラメーター

**arg** 2番目のノード。

## 戻り値

2つのノードが等しい場合はtrue、そうでない場合はfalse。

## 備考

次の条件が検証された場合、2つのノードは等しくなります。

* 2つのノードはタイプ タイプ タイプです。
* nodeName、localName、namespaceURI、prefixおよびnodeValue プロパティは同一である必要があります。
* 2つのノードはタイプ タイプ タイプです。
* 属性は同じでなければなりません。
* ノードは等しくなければなりません。

正規化は等式に影響を与える可能性があるため、比較する前に正規化することをお勧めします。

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
