---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '698'
ht-degree: 77%
---
# 配信

このスキーマは、配信アクションまたはテンプレートを表します。

テンプレートとは、必要なパラメーターを含む配信テンプレートです。 配信テンプレートは、クライアントコンソールから手動で実行することも、イベントが発生した場合（スケジューラーから開始するか、SOAP呼び出しからプログラムで実行することもできます）に実行することもできます。

## メソッド

| メソッド | 説明 |
| --- | --- |
| [AppendDeliveryPart](sm-delivery-appenddeliverypart.md) | 作成中の配信にパートを追加します。 |
| [BuildForward](sm-delivery-buildforward.md) | HTML ページを作成します。 |
| [BuildMirror](sm-delivery-buildmirror.md) | HTML ミラーページを作成します。 |
| [BuildMirrorEx](sm-delivery-buildmirrorex.md) | HTML ミラーページを作成します。 |
| [BuildPreview](sm-delivery-buildpreview.md) | 配信するコンテンツまたは出力ファイルのラインのプレビューを作成しました (外部モード)。 |
| [BuildPreviewFromId](sm-delivery-buildpreviewfromid.md) | 配信するコンテンツまたは出力ファイルのラインのプレビューを作成しました (外部モード)。 |
| [BuildTargetDataSchema](sm-delivery-buildtargetdataschema.md) |  |
| [CleanupDeliveries](sm-delivery-cleanupdeliveries.md) | ミッドソーシングサーバーが特定の配信を削除することを指定します。 |
| [CollectLogs](sm-delivery-collectlogs.md) | 配信のリスト用にすべての配信ログメッセージを含むテーブルを作成します |
| [CreateFromModel](sm-delivery-createfrommodel.md) | テンプレートから (その内部名から) 配信を作成。 |
| [DeployTriggerMessageSingle](sm-delivery-deploytriggermessagesingle.md) | 実行インスタンスでトランザクションメッセージを公開します。 公開が成功した場合はtrueを返し、成功しなかった場合はfalseを返します。 |
| [DeployTriggerMessages](sm-delivery-deploytriggermessages.md) | 選択したトランザクションメッセージを実行インスタンスで公開 |
| [診断HTML](sm-delivery-diagnosehtml.md) | HTML コンテンツの診断を開始します |
| [DispatchImages](sm-delivery-dispatchimages.md) | ミッドソーシングサーバーに画像を送信するようアプリケーションサーバーに指示します。 |
| [ExecCommand](sm-delivery-execcommand.md) | 配信に対してコマンドを実行します。 |
| [ExecuteJob](sm-delivery-executejob.md) | 配信の同期処理を実行します。 |
| [FinalizeMidPreparation](sm-delivery-finalizemidpreparation.md) | 配信の分析をミッドソーシングモードで最終処理します。 |
| [GetDeviceList](sm-delivery-getdevicelist.md) |  |
| [GetDlStatusAndLogs](sm-delivery-getdlstatusandlogs.md) | ジャーナルと配信ステータスから最新ログを取得します。 |
| [GetFilesToDownload](sm-delivery-getfilestodownload.md) | 配信に関連付けられているサーバーで見つかったファイルのリストを返します。 |
| [GetMidBroadLogs](sm-delivery-getmidbroadlogs.md) | ミッドソーシングモードで最後に変更された配信ログを取得します。 |
| [GetMidDeliveries](sm-delivery-getmiddeliveries.md) | ミッドソーシングモードで前回変更された配信のステータスを取得します。 |
| [GetMidXtkKey](sm-delivery-getmidxtkkey.md) | ミッドソーシングサーバーの Xtk キーを返します |
| [GetMirrorURL](sm-delivery-getmirrorurl.md) | HTML ミラーページの URL を取得します。 |
| [GetSeedList](sm-delivery-getseedlist.md) |  |
| [HtmlToText](sm-delivery-htmltotext.md) | HTML コンテンツをプレーンテキストに変換 |
| [ImagePublishing](sm-delivery-imagepublishing.md) | 次の後処理を実行 : 画像を指定のフォルダーに移動して、オンラインで使用可能にします |
| [InstallTransactionalMessage](sm-delivery-installtransactionalmessage.md) | トランザクションメッセージテンプレートを実行インスタンスにインストールします。 |
| [InvalidateDeliveryCache](sm-delivery-invalidatedeliverycache.md) | ミッドソーシングの場合を除き、メッセージの準備の最後に呼び出す必要があります (プライベートメソッド)。 |
| [LaunchFCP](sm-delivery-launchfcp.md) | 配信の配達確認のコピーを開始 |
| [LoadExpandedContents](sm-delivery-loadexpandedcontents.md) | 依存関係で前処理するコンポーネントのリストを読み込みます (パーソナライゼーションブロック、オプション、追加スクリプトオブジェクトなど)。 |
| [一時停止](sm-delivery-pause.md) | 配信を休止します。 |
| [&#x200B; プレイ &#x200B;](sm-delivery-play.md) | 配信を開始します。 |
| [準備](sm-delivery-prepare.md) | 配信分析 : ターゲティングとパーソナライゼーション |
| [PrepareAndStart](sm-delivery-prepareandstart.md) | 配信を分析し、エラーがない場合は直ちに実行 |
| [PrepareFromId](sm-delivery-preparefromid.md) | 配信を分析します。 |
| [PrepareMessage](sm-delivery-preparemessage.md) | メッセージのパーソナライゼーション |
| [PrepareMessageImpl](sm-delivery-preparemessageimpl.md) | メッセージのパーソナライゼーション |
| [PrepareMultipartRelated](sm-delivery-preparemultipartrelated.md) | メールに含める画像をデータベースに保存します |
| [PrepareNotification](sm-delivery-preparenotification.md) | 既存の配信アクションに追加される通知を分析 |
| [PrepareProof](sm-delivery-prepareproof.md) | 配達確認の生成を考慮した配信分析 |
| [PrepareTarget](sm-delivery-preparetarget.md) | 配信ターゲットのカウントと判別 |
| [PrepareTargetImpl](sm-delivery-preparetargetimpl.md) | 配信ターゲットのカウントと判別 |
| [PreviewExtraction](sm-delivery-previewextraction.md) | 抽出ファイルのプレビュー |
| [PrioritizeLogs](sm-delivery-prioritizelogs.md) | 配信リストの配信ログを優先順位付け |
| [PrioritizeTarget](sm-delivery-prioritizetarget.md) | 配信ターゲットの判別 |
| [QueueNotification](sm-delivery-queuenotification.md) | 配信テンプレートを参照している通知をキューに格納するリクエスト。 |
| [RecomputeStats](sm-delivery-recomputestats.md) | 配信アクションに関する配信およびトラッキングの統計を再計算します。 |
| [SaveUrlInfo](sm-delivery-saveurlinfo.md) | この配信の URL を URL テンプレートとして保存します。 |
| [停止](sm-delivery-stop.md) | 実行中の配信を停止します。 |
| [StoreMirrorPageInfo](sm-delivery-storemirrorpageinfo.md) | 情報を追加して、一連の配信部分のミラーページを生成します。 |
| [StoreMirrorPageInfoEx](sm-delivery-storemirrorpageinfoex.md) | 情報を追加して、一連の配信部分のミラーページを生成します。 |
| [SubmitDelivery](sm-delivery-submitdelivery.md) | シナリオからの配信の作成と送信 (内部名より)。 |
| [SubmitDeliveryById](sm-delivery-submitdeliverybyid.md) | (内部名で識別される) シナリオから配信を作成して送信します。 |
| [SubmitJob](sm-delivery-submitjob.md) | 非同期処理用の配信ジョブを送信します |
| [SubmitMidSourcing](sm-delivery-submitmidsourcing.md) | ミッドソーシングモードで配信を送信。 |
| [SubmitNotification](sm-delivery-submitnotification.md) | シナリオから通知を作成して送信します。 |
| [UpdateBroadLogs](sm-delivery-updatebroadlogs.md) | 配信ログのステータスを更新し、エラー処理を実行し、配信カウンターを更新します。 |
| [UpdateCachedDelivery](sm-delivery-updatecacheddelivery.md) | メモリで配信が変更されるたびに呼び出す必要があります。これにより、他のスレッドが最新バージョンにアクセスできるようになります (プライベートメソッド)。 |
| [UpdateImageConfig](sm-delivery-updateimageconfig.md) | 既にサーバー上にある画像を考慮するために imageConfig ノードを変更します。 |
| [ValidateWavesDefinition](sm-delivery-validatewavesdefinition.md) | ウェーブの定義で使用される情報の一貫性を確認します。 |

## 汎用メソッド

| メソッド | 説明 |
| --- | --- |
| [作成](f-create.md) | 特定のスキーマに対応する新しいエンティティを作成します。 |
| [load](f-load.md) | 特定のスキーマとキーに対応するエンティティを読み込んで返します。 |
| [保存](m-entity-save.md) | データベースにエンティティを保存します。 |
