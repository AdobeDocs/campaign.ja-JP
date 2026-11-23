---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '290'
ht-degree: 73%
---
# ビルダー

アプリケーションサーバーの生成サービス

## メソッド

| メソッド | 説明 |
| --- | --- |
| [BuildOutputNavTree](sm-builder-buildoutputnavtree.md) | データベースにあるナビゲーションツリーの定義とパラメーターで指定した定義とを結合します。 |
| [BuildOutputSchema](sm-builder-buildoutputschema.md) | ソーススキーマからスキーマを生成します。 |
| [BuildSchema](sm-builder-buildschema.md) | ソーススキーマからスキーマを生成します。 |
| [BuildSchemaFromId](sm-builder-buildschemafromid.md) | ソーススキーマ識別子からスキーマを生成します。 |
| [BuildSqlSchemaDiff](sm-builder-buildsqlschemadiff.md) | 実際のデータベース構造とその論理的説明の違いを説明するドキュメントを生成します。 |
| [BuildUpdateOneSchemaDiff](sm-builder-buildupdateoneschemadiff.md) | 物理データベースのテーブルとこのテーブルの論理記述の違いを示すドキュメントを生成します。 |
| [BuildUpdateSchemaDiff](sm-builder-buildupdateschemadiff.md) | 実際のデータベース構造とその論理的説明の違いを説明するドキュメントを生成します。 |
| [CheckTableExists](sm-builder-checktableexists.md) | データベースにテーブルが存在するかどうかを確認します |
| [CreateDb](sm-builder-createdb.md) | データベースを作成 |
| [EvaluateJavaScript](sm-builder-evaluatejavascript.md) | JavaScript コードの評価。 |
| [EvaluateJavaScriptTemplate](sm-builder-evaluatejavascripttemplate.md) | JavaScript テンプレート (JST) の評価。 |
| [ExecSql](sm-builder-execsql.md) | SQL ステートメントを実行 |
| [ExecSqlScript](sm-builder-execsqlscript.md) | SQL スクリプトを実行 |
| [GenCreateDbDDL](sm-builder-gencreatedbddl.md) | データベース構造を作成するために使用する SQL スクリプトを生成します。 |
| [GenCreateOrUpdateSchemaSequenceDDL](sm-builder-gencreateorupdateschemasequenceddl.md) | autoPk スキーマシーケンスを作成または更新するために使用する SQL スクリプトを生成します |
| [GenerateNavTree](sm-builder-generatenavtree.md) | すべてのナビゲーションツリー定義を結合し、結果を「xtk:merged」として保存します。 |
| [GenerateSchema](sm-builder-generateschema.md) | 高度なパラメーターを使用してスキーマコードを生成します。 |
| [GetDbParams](sm-builder-getdbparams.md) | データソースの現在のパラメーターを取得します。 |
| [GetDefaultNamespace](sm-builder-getdefaultnamespace.md) | デフォルトの名前空間を取得します。 |
| [InstallPackage](sm-builder-installpackage.md) | パッケージをインストールします。 |
| [InstallPackageImpl](sm-builder-installpackageimpl.md) | パッケージをインストール中 (内部メソッド、使用しない)。 |
| [InstallVendorPackages](sm-builder-installvendorpackages.md) | 1 つ以上の標準パッケージをインストールします。 |
| [RemoveSchemaLinkRef](sm-builder-removeschemalinkref.md) | スキーマとそのスキーマを参照している逆リンクを削除します。 |
| [ResolvePackageReferences](sm-builder-resolvepackagereferences.md) | パッケージ内の依存関係を解決します |
| [UpdateDb](sm-builder-updatedb.md) | データベース構造を更新。 |
| [UpdateSchemaFromDatabase](sm-builder-updateschemafromdatabase.md) | データベースのスキーマをその物理表現に基づいて更新します。 |
| [UpdateTempSchemasFromDatabase](sm-builder-updatetempschemasfromdatabase.md) | スキーマのコレクションをデータベース内の物理的表現に基づいて更新します。 |

## 汎用メソッド

| メソッド | 説明 |
| --- | --- |
| [作成](f-create.md) | 特定のスキーマに対応する新しいエンティティを作成します。 |
| [load](f-load.md) | 特定のスキーマとキーに対応するエンティティを読み込んで返します。 |
| [保存](m-entity-save.md) | データベースにエンティティを保存します。 |
