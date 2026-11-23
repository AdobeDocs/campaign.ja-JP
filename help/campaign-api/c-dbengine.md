---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '283'
ht-degree: 6%
---
# DBEngine （クラス）

データベース接続を表します。

このオブジェクトを使用すると、データベースのクエリと関連する操作を実行できます。

このクラスのほとんどのメソッドには「sql」権限が必要です。 オペレーターがメソッドを呼び出し、適切な権限を持っていない場合、例外が発生します。 一般的に、データベースを変更するすべてのメソッドには「sql」権限が必要ですが、単に情報を表示するメソッドにはありません。 権限が必要かどうかを確認するには、各方法に関するドキュメントを参照してください。

## メソッド

| メソッド | 説明 |
| --- | --- |
| [batchDelete](m-dbengine-batchdelete.md) | テーブルのレコードをパケットごとに削除します。 |
| [破棄](m-dbengine-dispose.md) | その接続にリンクされているすべてのリソースから接続を解放します。 |
| [実行](m-dbengine-execute.md) | SQL コマンドを実行します。 |
| [exec](m-dbengine-exec.md) | execute コマンドのエイリアス。 この関数は廃止されました。[execute （） ](m-dbengine-execute.md)を使用してください |
| [ クエリ ](m-dbengine-query.md) | SELECT タイプ SQL クエリを実行します。 |
| [queryWithTypes](m-dbengine-querywithtypes.md) | 列タイプを指定したSELECT タイプ SQL クエリを実行します。 |
| [begin](m-dbengine-begin.md) | 接続で新しいトランザクションを開始します。 |
| [ コミット ](m-dbengine-commit.md) | 接続中のトランザクションを承認します。 |
| [ ロールバック ](m-dbengine-rollback.md) | 接続中のトランザクションをキャンセルします。 |

## プロパティ

| プロパティ | 説明 |
| --- | --- |
| [isOracle](p-dbengine-isoracle.md) | データベースがOracleの場合はtrueを返します。 |
| [isDB2](p-dbengine-isdb2.md) | データベースがDB2 タイプの場合はtrueを返します。 |
| [isMySQL](p-dbengine-ismysql.md) | データベースがMySQL タイプの場合はtrueを返します。 |
| [isMSSQL](p-dbengine-ismssql.md) | データベースがSQL Serverの場合はtrueを返します。 |
| [isPostgreSQL](p-dbengine-ispostgresql.md) | データベースがPostgreSQLの場合はtrueを返します。 |
| [isSybase](p-dbengine-issybase.md) | データベースがSybaseの場合はtrueを返します。 |
| [isSybaseIQ](p-dbengine-issybaseiq.md) | データベースがSybase IQの場合はtrueを返します。 |
| [isFDA](p-dbengine-isfda.md) | データベースにFDA経由でアクセスする場合はtrueを返します。 |
| [isBroken](p-dbengine-isbroken.md) | 接続が使用できなくなった場合は、trueを返します。 |
| [useUnicodeData](p-dbengine-useunicodedata.md) | データベースにUnicode データが含まれている場合はtrueを返します。 |
| [useNChar](p-dbengine-usenchar.md) | Adobe CampaignでNCHAR、NVARCHAR、NCLOB、NTEXT型フィールドを使用する場合はtrueを返します。 |

## 機能

**次の場所で利用できます：**

* コンテンツ管理
* 配信プロパティ
* タイポロジルール
* JSSP
* SOAP メソッド
* Web アプリ
* ワークフロー
