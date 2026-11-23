---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '96'
ht-degree: 18%
---
# EntityCollection （クラス）

エンティティのコレクションを表します。

このようなオブジェクトは直接インスタンス化できません。 メソッド create （）、get （）またはload （）を使用する必要があります。

コレクションの要素は、`for`または`for each`で列挙できます。 次の例は、配信アクションにリンクされたファイルの列挙を示しています。

```text
var delivery = NLWS.nmsDelivery.load("12345") for each(var attach in delivery.attachment) logInfo(attach.label)
```

## メソッド

| メソッド | 説明 |
| --- | --- |
| [add](m-entitycollection-add.md) | コレクションに新しいエンティティを追加します。 |
| [削除](m-entitycollection-remove.md) | コレクションからエンティティを削除します。 |
| [removeAll](m-entitycollection-removeall.md) | コレクションからすべてのエンティティを削除します。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [length](p-entitycollection-length.md) | コレクションのエンティティ番号を返します。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
