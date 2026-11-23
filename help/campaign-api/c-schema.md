---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '173'
ht-degree: 10%
---
# スキーマ （クラス）

スキーマ定義を表します。

スキーマは、`application` グローバル変数のメソッドを呼び出すことによって取得されます。 このオブジェクトのインスタンスにはプロトタイプとしてオブジェクトがあり、そのメソッドを継承します。

## メソッド

| メソッド | 説明 |
| --- | --- |
| [toDocument](m-schema-todocument.md) | スキーマをXML ドキュメントフォームに変換します。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [列挙](p-schema-enumerations.md) | このスキーマで定義された[列挙](c-enumeration.md)のリストを含むテーブルを返します。 |
| [id](p-schema-id.md) | 文字列の形式のスキーマ識別子。 |
| [isLibrary](p-schema-islibrary.md) | スキーマがコンポーネントライブラリであるかどうかを指定したブール値を返します。 |
| [labelSingular](p-schema-labelsingular.md) | 文字列の形式のスキーマの単一名。 |
| [mappingType](p-schema-mappingtype.md) | 文字列の形式でのスキーママッピングの性質 |
| [md5](p-schema-md5.md) | スキーマのMD5 コードを16進数文字列の形式で指定します。 |
| [名前空間](p-schema-namespace.md) | 文字列の形式のスキーマの名前空間。 |
| [root](p-schema-root.md) | スキーマのメイン要素。定義されていない場合はnull。 |
| [userDescription](p-schema-userdescription.md) | 文字列の形式でのスキーマの説明。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
