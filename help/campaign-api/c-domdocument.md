---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '205'
ht-degree: 10%
---
# DOMDocument （クラス）

XML ドキュメント。

## メソッド

| メソッド | 説明 |
| --- | --- |
| [DOMDocument](m-domdocument-domdocument.md) | 新しいドキュメントを作成します。 |
| [fromXMLString](m-domdocument-fromxmlstring.md) | XML文字の文字列から新しい文書を作成します。 |
| [fromJXON](m-domdocument-fromjxon.md) | JXON オブジェクトから新しいドキュメントを作成します。 |
| [load](m-domdocument-load.md) | XML ファイルから新しいドキュメントを作成します。 |
| [toXMLString](m-domdocument-toxmlstring.md) | XML ドキュメントを文字列に変換します。 |
| [createElement](m-domdocument-createelement.md) | 新しいエレメントを作成します。 |
| [createElementNS](m-domdocument-createelementns.md) | 指定された名前と名前空間を持つ新しい要素を作成します。 |
| [createTextNode](m-domdocument-createtextnode.md) | 新しいテキストタイプノードを作成します。 |
| [createComment](m-domdocument-createcomment.md) | 新しいコメントタイプノードを作成します。 |
| [createCDATASection](m-domdocument-createcdatasection.md) | 新しいCDATA タイプノードを作成します。 |
| [createProcessingInstruction](m-domdocument-createprocessinginstruction.md) | 新しい処理命令を作成します。 |
| [createEntityReference](m-domdocument-createentityreference.md) | 新しいエンティティ参照を作成します。 |
| [getElementsByTagName](m-domdocument-getelementsbytagname.md) | 指定された名前を持つすべての要素のリストを返します。 |
| [getElementsByTagNameNS](m-domdocument-getelementsbytagnamens.md) | 指定された名前と名前空間を持つすべてのドキュメント要素のリストを返します。 |
| [getElementById](m-domdocument-getelementbyid.md) | 指定されたIDを持つ要素を返します。 |
| [importNode](m-domdocument-importnode.md) | 別のドキュメントからノードコピーを作成します。 |
| [normalizeDocument](m-domdocument-normalizedocument.md) | ドキュメントを正規化します。エンティティ参照は置き換えられ、隣接するテキストノードはフュージョン化されます。 |
| [renameNode](m-domdocument-renamenode.md) | エレメントまたは属性の名前を変更します。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [root](p-domdocument-root.md) | ドキュメントのルート要素。 このプロパティは、[documentElement](p-domdocument-documentelement.md)と同義です。 |
| [documentElement](p-domdocument-documentelement.md) | ドキュメントのルート要素。 |
| [documentURI](p-domdocument-documenturi.md) | ドキュメント名前空間URI。 |

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
