---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '258'
ht-degree: 5%
---
# ワークフロー

ワークフロー定義

## メソッド

| メソッド | 説明 |
| --- | --- |
| [&#x200B; クリーンアップ &#x200B;](sm-workflow-cleanup.md) | ワークフロー履歴を消去します。 |
| [DeleteResult](sm-workflow-deleteresult.md) | 1つ以上のアクティビティの結果を消去します。 |
| [実行](sm-workflow-execute.md) | ワークフローをすぐに実行し、完了するのを待ちます。 |
| [ExecuteInstance](sm-workflow-executeinstance.md) | ワークフローをすぐに実行し、完了するのを待ちます。 |
| [GetLogin](sm-workflow-getlogin.md) | 実行アカウントから情報を返します。 |
| [GetValidationParameters](sm-workflow-getvalidationparameters.md) | 進行中のワークフロータスクのパラメーターを返します。 |
| [殺す](sm-workflow-kill.md) | ワークフローを無条件で停止します。 |
| [一時停止](sm-workflow-pause.md) | 進行中のワークフローの実行を一時停止します。 |
| [PostEvent](sm-workflow-postevent.md) | 任意の種類のアクティビティからイベントを生成します。 |
| [返信](sm-workflow-reply.md) | 進行中の検証タイプのタスクに応答します。 |
| [再起動](sm-workflow-restart.md) | ワークフローの停止と開始をリンクします。 |
| [RestartTask](sm-workflow-restarttask.md) | 完了した1つ以上のタスクを強制的に再開します。 |
| [SetLogin](sm-workflow-setlogin.md) | 実行アカウントを変更します。 |
| [&#x200B; シミュレート &#x200B;](sm-workflow-simulate.md) | シミュレーションモードでワークフローを開始します。 |
| [SimulateWithParameters](sm-workflow-simulatewithparameters.md) | シミュレーションモードでワークフローを開始し、パラメーターを指定します。 |
| [&#x200B; スポーン &#x200B;](sm-workflow-spawn.md) | テンプレートからワークフローインスタンスを作成し、パッチを適用してから、このワークフローを開始します。 |
| [SpawnWithParameters](sm-workflow-spawnwithparameters.md) | テンプレートからワークフローインスタンスを作成し、このインスタンスで[StartWithParameters](sm-workflow-startwithparameters.md) メソッドを呼び出します。 |
| [SpawnWithParametersEx](sm-workflow-spawnwithparametersex.md) | モデルからワークフローインスタンスを作成し、このインスタンスでメソッド [StartWithParameters](sm-workflow-startwithparameters.md)または[SimulateWithParameters](sm-workflow-simulatewithparameters.md)を呼び出します。 |
| [開始](sm-workflow-start.md) | ワークフローの実行を開始または再開します。 |
| [StartWithParameters](sm-workflow-startwithparameters.md) | ワークフローを開始し、パラメーターを指定します。 |
| [停止](sm-workflow-stop.md) | 進行中のワークフローを停止します。 |
| [Wakeup](sm-workflow-wakeup.md) | すべての保留中のタスクの事前処理を強制します。 |
| [WakeupTask](sm-workflow-wakeuptask.md) | 1つ以上の保留中のタスクの事前処理を強制します。 |

## 汎用メソッド

| メソッド | 説明 |
| --- | --- |
| [作成](f-create.md) | 特定のスキーマに対応する新しいエンティティを作成します。 |
| [load](f-load.md) | 特定のスキーマとキーに対応するエンティティを読み込んで返します。 |
| [保存](m-entity-save.md) | データベースにエンティティを保存します。 |
