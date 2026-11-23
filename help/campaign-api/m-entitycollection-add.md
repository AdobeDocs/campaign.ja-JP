---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '141'
ht-degree: 9%
---
# 追加

コレクションに新しいエンティティを追加します。

```text
add ( [index ], xml)
```

## パラメーター

**index** エンティティはこのインデックスポイントに追加されます。 この引数を指定しない場合、エンティティはリストの最後に追加されます。

**xml** XML フォームに挿入するエンティティ。

## 戻り値

作成された要素。

## 備考

次の例は、コレクションに新しい要素を追加する2つの異なる方法を示しています。 最初のソリューションは要素の完全な定義をadd （） メソッドに渡しますが、2番目のソリューションは&lt;attachment/>要素を渡し、空のエレメントは通常の方法で属性を割り当てます。

```javascript
var delivery = NLWS.nmsDelivery.load("12435")

delivery.attachment.add(
  {attachment: {
    compressMode: "print", filterActive: "false", label: "First File", 
    nameScriptActive: "false", type: "normal", upload: "false", 
    name: { $: "file1.txt" }
  }})

var attach = delivery.attachment.add()
attach.label            = "Second File"
attach.name             = "file2.txt"
attach.compressMode     = "print"
attach.type             = "normal"
attach.filterActive     = false
attach.nameScriptActive = false
attach.upload           = false

delivery.save()
```

2つのソリューションは同等ですが、2つ目のソリューションでは、属性型に対応するJavaScript型を使用できますが、最初のソリューションでは文字列のみをサポートします。

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
