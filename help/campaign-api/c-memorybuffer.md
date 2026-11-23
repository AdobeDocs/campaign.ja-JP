---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '270'
ht-degree: 7%
---
# MemoryBuffer （クラス）

メモリに保存されているバイナリコンテンツを表します。

Aは、ファイルとの間でデータを操作するための中間オブジェクトです。

## メソッド

| メソッド | 説明 |
| --- | --- |
| [破棄](m-memorybuffer-dispose.md) | オブジェクトで使用されるリソースを解放します。 |
| [load](m-memorybuffer-load.md) | ファイルの内容をバッファに読み込みます。 |
| [保存](m-memorybuffer-save.md) | バッファの内容をファイルに保存します。 |
| [toXML](m-memorybuffer-toxml.md) | [MemoryBuffer](c-memorybuffer.md)の内容から取得したXML JavaScript オブジェクトを返します。 この関数は廃止されました。[toDocument （） &#x200B;](m-memorybuffer-todocument.md)を使用してください |
| [toDocument](m-memorybuffer-todocument.md) | このバッファーのテキストコンテンツからXML ドキュメントを返します。 |
| [toString](m-memorybuffer-tostring.md) | [MemoryBuffer](c-memorybuffer.md)の内容を文字列の形式で返します。 |
| [fromString](m-memorybuffer-fromstring.md) | バッファに文字列の内容を読み込みます。 |
| [toBase64](m-memorybuffer-tobase64.md) | ベース 64でエンコードされた文字列のバッファまたは一部を変換します。 |
| [appendBase64](m-memorybuffer-appendbase64.md) | ベース 64でエンコードされた文字列のデータをバッファの末尾に追加します。 |
| [removeAll](m-memorybuffer-removeall.md) | バッファをフラッシュします。 |
| [sha1](m-memorybuffer-sha1.md) | MemoryBuffer コンテンツのSHA-1署名を計算します。 |
| [sha224](m-memorybuffer-sha224.md) | MemoryBuffer コンテンツのSHA-2 224 ビット署名を計算します。 |
| [sha256](m-memorybuffer-sha256.md) | MemoryBuffer コンテンツのSHA-2 256 ビット署名を計算します。 |
| [sha384](m-memorybuffer-sha384.md) | MemoryBuffer コンテンツのSHA-2 384 ビット署名を計算します。 |
| [sha512](m-memorybuffer-sha512.md) | MemoryBuffer コンテンツのSHA-2 512 ビット署名を計算します。 |
| [fromHexString](m-memorybuffer-fromhexstring.md) | バッファーに16進数文字列の内容を読み込みます。 |
| [toHexString](m-memorybuffer-tohexstring.md) | バッファを16進数の文字列に変換します。 |
| [hmac](m-memorybuffer-hmac.md) | バッファのMD5、SHA-1またはSHA-256 ハッシュを計算します。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [&#x200B; サイズ &#x200B;](p-memorybuffer-size.md) | バッファのサイズをバイト単位で返します。 |
| [isEmpty](p-memorybuffer-isempty.md) | バッファが空の場合はtrueを返します。 |

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
