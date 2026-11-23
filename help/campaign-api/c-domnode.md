---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '296'
ht-degree: 7%
---
# DOMNode （クラス）

DOMNodeは、ドキュメントを構成する様々なコンポーネントの親クラスです。

## メソッド

| メソッド | 説明 |
| --- | --- |
| [insertBefore](m-domnode-insertbefore.md) | 特定の位置の前にノードを挿入します。 |
| [replaceChild](m-domnode-replacechild.md) | ノードを置き換えます。 |
| [removeChild](m-domnode-removechild.md) | ノードを削除します。 |
| [appendChild](m-domnode-appendchild.md) | サブフォルダーのリストの最後にノードを挿入します。 |
| [hasChildNodes](m-domnode-haschildnodes.md) | ノードに少なくとも1つのサブフォルダーがあるかどうかをテストします。 |
| [正規化](m-domnode-normalize.md) | ノードを正規化：隣接するテキストノードが結合され、空のテキストノードが削除されます。 |
| [hasAttributes](m-domnode-hasattributes.md) | ノードに少なくとも1つの属性があるかどうかをテストします。 |
| [isSameNode](m-domnode-issamenode.md) | 指定された参照が同じノードを表しているかどうかをテストします。 |
| [isDefaultNamespace](m-domnode-isdefaultnamespace.md) | 指定された名前空間がデフォルトであるかどうかをテストします。 |
| [lookupNamespaceURI](m-domnode-lookupnamespaceuri.md) | 指定されたプレフィックスにリンクされている名前空間のURIを検索しました。 |
| [isEqualNode](m-domnode-isequalnode.md) | 2つのノードを比較します。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [nodeName](p-domnode-nodename.md) | 選定されたノード名。 名前はノードタイプによって異なります。 |
| [nodeValue](p-domnode-nodevalue.md) | ノード値。 値はノードのタイプによって異なります。 |
| [nodeType](p-domnode-nodetype.md) | ノードタイプ： |
| [parentNode](p-domnode-parentnode.md) | 親ノードまたはnull。 |
| [childNodes](p-domnode-childnodes.md) | テーブルの形式で子ノードのリストを返します。 |
| [firstChild](p-domnode-firstchild.md) | このノードの最初の子ノード。子がない場合はnull。 |
| [lastChild](p-domnode-lastchild.md) | このノードの最後の子ノード。子がない場合はnull。 |
| [nextSibling](p-domnode-nextsibling.md) | このノードまたはnullに続くノード。 |
| [previousSibling](p-domnode-previoussibling.md) | このノードまたはnullを直ちに評価するノード。 |
| [属性](p-domnode-attributes.md) | ノードが要素である場合は属性のリストを含むテーブルを返します。それ以外の場合はnullを返します。 |
| [名前空間URI](p-domnode-namespaceuri.md) | ノード名前空間のURI。 |
| [接頭辞](p-domnode-prefix.md) | このノードの名前空間プレフィックス。指定しない場合は空です。 |
| [localName](p-domnode-localname.md) | ノードの修飾名のローカル部分。 |
| [baseURI](p-domnode-baseuri.md) | このノードのベース URI。 |
| [textContent](p-domnode-textcontent.md) | ノードのテキストコンテンツ。 値はノードのタイプによって異なります。 |
| [ownerDocument](p-domnode-ownerdocument.md) | このノードが属するドキュメント。 |

## 機能

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
