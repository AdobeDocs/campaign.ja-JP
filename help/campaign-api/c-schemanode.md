---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '944'
ht-degree: 2%
---
# SchemaNode （クラス）

スキーマの要素を表します

## メソッド

| メソッド | 説明 |
| --- | --- |
| [findNode](m-schemanode-findnode.md) | ノードが存在せず、mustExist パラメーターがfalseに設定されている場合、[SchemaNode](c-schemanode.md)のインスタンスを返します。または、nullを返します。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [子](p-schemanode-children.md) | 各プロパティが名前でインデックス付けされた子ノードであるオブジェクトを返します。 |
| [computeString](p-schemanode-computestring.md) | 現在のノードで計算された文字列を返します。 |
| [&#x200B; データポリシー](p-schemanode-datapolicy.md) | 現在のノードのデータポリシーを提供する文字列を返します。 |
| [説明](p-schemanode-description.md) | 現在のノードを表す文字列を返します。 |
| [defaultValue](p-schemanode-defaultvalue.md) | 現在のノードのデフォルト値を提供する文字列を返します。 |
| [editType](p-schemanode-edittype.md) | 現在のノードの編集タイプを指定する文字列を返します。 |
| [列挙](p-schemanode-enumeration.md) | 現在のノードにリンクされている列挙である[列挙](c-enumeration.md) オブジェクトを返します。列挙がない場合はnullを返します。 |
| [enumerationImage](p-schemanode-enumerationimage.md) | 現在のノードの画像の名前を文字列形式で返します。 |
| [folderModel](p-schemanode-foldermodel.md) | ルートノードでのみ、フォルダーテンプレートを含む文字列を返します。 他のノードでは、未定義を返します。 |
| [画像](p-schemanode-image.md) | 画像の名前を文字列の形式で返します。 |
| [整合性](p-schemanode-integrity.md) | リンクの整合性タイプを返します。 |
| [&#x200B; キー](p-schemanode-keys.md) | 現在のノードの[SchemaKey](c-schemakey.md) キーの定義を含むテーブルを返します。 |
| [hasEnumeration](p-schemanode-hasenumeration.md) | 現在のノードの値が列挙にリンクされているかどうかを示すブール値を返します。 |
| [childrenCount](p-schemanode-childrencount.md) | 子ノードの数を指定する数値を返します。 |
| [hasSQLTable](p-schemanode-hassqltable.md) | 現在のノードがSQL テーブルにリンクされているかどうかを示すブール値を返します。 |
| [hasUserEnumeration](p-schemanode-hasuserenumeration.md) | 現在のノードの値がユーザー列挙にリンクされているかどうかを示すブール値を返します。 |
| [&#x200B; ヘルプ &#x200B;](p-schemanode-help.md) | ヘルプ文字列を返します。 |
| [&#x200B; スキーマ &#x200B;](p-schemanode-schema.md) | このノードの親[&#x200B; スキーマ &#x200B;](c-schema.md) オブジェクトのインスタンスを返します。 |
| [isAdvanced](p-schemanode-isadvanced.md) | 現在のノードが高度かどうかを示すブール値を返します。 |
| [isAnyType](p-schemanode-isanytype.md) | 現在のノードが通常かどうかを示すブール値を返します。 |
| [isAttribute](p-schemanode-isattribute.md) | 現在のノードが属性かどうかを示すブール値を返します。 |
| [isAutoIncrement](p-schemanode-isautoincrement.md) | 現在のノードの値が自動的に増分されるかどうかを示すブール値を返します。 |
| [isAutoPK](p-schemanode-isautopk.md) | 現在のノードがプライマリキーであるかどうかを示すブール値を返します。 |
| [isBlob](p-schemanode-isblob.md) | 現在のノードがBLOBかどうかを示すブール値を返します。 |
| [isCalculated](p-schemanode-iscalculated.md) | 現在のノードの値が計算の結果であるかどうかを示すブール値を返します。 |
| [isCDATA](p-schemanode-iscdata.md) | 現在のノードがCDATA タイプ XMLからマッピングされているかどうかを示すブール値を返します。 |
| [isCollection](p-schemanode-iscollection.md) | 現在のノードがサブ要素や属性のコレクションであるかどうかを示すブール値を返します。 |
| [isDefaultOnDuplicate](p-schemanode-isdefaultonduplicate.md) | ブール値を返します。 追加された値がvraiの場合、レコードの重複排除の際に、デフォルト値（defaultValueで定義）が記録中に自動的に再適用されます。 |
| [isElementOnly](p-schemanode-iselementonly.md) | 現在のノードがスキーマの論理的なサブ分割であるかどうかを示すブール値を返します。 |
| [isExternalJoin](p-schemanode-isexternaljoin.md) | ノードがリンクで、結合が外部の場合はTrueです。 |
| [isFeature](p-schemanode-isfeature.md) | ノードが機能かどうかを示すブール値を返します。 |
| [isLink](p-schemanode-islink.md) | ノードがリンクであるかどうかを示すブール値を返します。 |
| [isMappedAsXML](p-schemanode-ismappedasxml.md) | ノードがXML マッピングであるかどうかを示すブール値を返します。 |
| [isMemo](p-schemanode-ismemo.md) | 現在のノードがメモによってマッピングされているかどうかを示すブール値を返します。 |
| [isMemoData](p-schemanode-ismemodata.md) | 現在のノードがMemoDataによってマッピングされているかどうかを示すブール値を返します。 |
| [isNotNull](p-schemanode-isnotnull.md) | 現在のノードがnull値を考慮できるかどうかを示すブール値を返します。 |
| [isRequired](p-schemanode-isrequired.md) | 現在のノードの値が必須かどうかを示すブール値を返します。 |
| [isRoot](p-schemanode-isroot.md) | ノードがスキーマのルートであるかどうかを示すブール値を返します。 |
| [isSQL](p-schemanode-issql.md) | 現在のノードがSQLでマッピングされているかどうかを示すブール値を返します。 |
| [isTemporaryTable](p-schemanode-istemporarytable.md) | テーブルが一時テーブルかどうかを示すブール値を返します。 データベースの作成中にテーブルは作成されません。 |
| [isUnbound](p-schemanode-isunbound.md) | 現在のノードに同じタイプの子が無制限に存在するかどうかを示すブール値を返します。 |
| [isUser](p-schemanode-isuser.md) | ノードがユーザータイプであるかどうかを示すブール値を返します。 |
| [joinParts](p-schemanode-joinparts.md) | 各要素が結合の条件を表すSchemaNode インスタンスのテーブルを返します。 |
| [&#x200B; ラベル &#x200B;](p-schemanode-label.md) | 現在のノードの説明である文字列を返します。 |
| [name](p-schemanode-name.md) | 現在のノードの名前である文字列を返します。 |
| [nodePath](p-schemanode-nodepath.md) | 現在のノードの絶対パスである文字列を返します。 |
| [親](p-schemanode-parent.md) | 親オブジェクトである[SchemaNode](c-schemanode.md) オブジェクトを返します。親オブジェクトがない場合はnullになります。 |
| [PKSequence](p-schemanode-pksequence.md) | プライマリキーに使用するシーケンスの名前を提供する文字列を返します。 |
| [packageStatus](p-schemanode-packagestatus.md) | パッケージのステータスを示す数値を返します。 |
| [reverseLink](p-schemanode-reverselink.md) | 要素がリンクの場合、（ターゲットスキーマを介して）逆リンクを表す[SchemaNode](c-schemanode.md) オブジェクトを返します。 そうでない場合、プロパティは定義されません。 |
| [SQLName](p-schemanode-sqlname.md) | フィールドのSQL名。 オブジェクトがSQL型フィールドでない場合、プロパティは空の文字列です。 |
| [SQLTable](p-schemanode-sqltable.md) | テーブルのSQL名。 オブジェクトがメイン要素でない場合や、スキーママッピングがSQL タイプでない場合、プロパティは空の文字列です。 |
| [&#x200B; サイズ &#x200B;](p-schemanode-size.md) | 文字列型のサイズです。 |
| [tableDefinition](p-schemanode-tabledefinition.md) | 現在のノードを含むテーブルの説明である[SchemaNode](c-schemanode.md)のインスタンス。存在しない場合はnull。 |
| [&#x200B; ターゲット &#x200B;](p-schemanode-target.md) | リンクターゲットのスキーマのメイン要素。 オブジェクトがリンクでない場合、プロパティは定義されません。 |
| [type](p-schemanode-type.md) | 現在のノードの値タイプを提供する文字列を返します。 |
| [userEnumeration](p-schemanode-userenumeration.md) | 現在のノードで使用されるユーザー列挙の名前である文字列を返します。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
