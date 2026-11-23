---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '171'
ht-degree: 58%
---
# ジョブ

アプリケーションサーバーで実行されるバッチジョブ

## メソッド

| メソッド | 説明 |
| --- | --- |
| [キャンセル済み](sm-job-cancel.md) | ジョブをキャンセル |
| [CheckIfJobInProcess](sm-job-checkifjobinprocess.md) | ジョブがまだ実行中かどうかを確認 |
| [実行](sm-job-execute.md) | ジョブを同期的に実行します (このモードでは、進捗状況情報とキャンセルは利用できません)。 |
| [FilesExist](sm-job-filesexist.md) | ファイルがサーバー上に (ファイルとしてまたはリソーステーブル内に) 既に存在するかどうか確認します。 |
| [GetJobsInProcess](sm-job-getjobsinprocess.md) | 現在実行中の外部以外のジョブを返します |
| [GetStatus](sm-job-getstatus.md) | ジョブ処理の進捗情報を取得します。 警告：このAPIは、一意のログエントリのリストを返すことを保証しません（呼び出し元はIDを使用して重複を排除する必要があります）。 |
| [HasWarning](sm-job-haswarning.md) | このジョブで警告またはエラーが生成された場合のクエリ |
| [一時停止](sm-job-pause.md) | ジョブを一時停止 |
| [送信](sm-job-submit.md) | 非同期処理用のジョブを送信します |
| [SubmitFromModel](sm-job-submitfrommodel.md) | テンプレートからジョブを送信 |
| [SubmitSoapCall](sm-job-submitsoapcall.md) | 非同期処理用のジョブを送信します |
| [WaitJobCanceled](sm-job-waitjobcancelled.md) | ジョブのキャンセルを待機中 |

## 汎用メソッド

| メソッド | 説明 |
| --- | --- |
| [作成](f-create.md) | 特定のスキーマに対応する新しいエンティティを作成します。 |
| [load](f-load.md) | 特定のスキーマとキーに対応するエンティティを読み込んで返します。 |
| [保存](m-entity-save.md) | データベースにエンティティを保存します。 |
