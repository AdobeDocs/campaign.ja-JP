---
title: キャンペーンオプション
description: Campaign オプションの概要、保存場所、Campaign v8用に文書化されたオプションの使用方法について説明します
feature: Architecture
role: Admin, Developer
level: Intermediate
hide: true
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: bae31391-3416-5fbd-bc4b-2cdcae2922db
    internal-label: Architecture
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
source-git-commit: 36111995a9a550d5089107bbc1f734c204db8aff
workflow-type: tm+mt
source-wordcount: '2836'
ht-degree: 3%
---
# キャンペーンオプション {#campaign-options}

オプションは、Campaign インスタンスの動作を制御するパラメーターです。例えば、メール内の画像のデフォルトのサイズ制限、同時に実行されるワークフローの数、配信テンプレートのデフォルトのルーティングプロバイダーなどです。 いくつかのオプションが組み込まれており、必要に応じて他のオプションが作成されます。 使用可能なオプションは、インスタンスにインストールされているパッケージによって異なります。 詳しくは、[組み込みパッケージ &#x200B;](built-in-packages.md)を参照してください。

>[!CAUTION]
>
>Campaign ドキュメントに記載されているオプションのみを変更し、説明どおりに変更します。 文書化されていないオプションは内部であり、変更しないでください。 オプションの変更は、エキスパートユーザー向けに予約されています。

## オプションの保存場所 {#where-options-are-stored}

オプションは、**xtkOption** テーブル （スキーマ **xtk:option**）のCampaign データベースに保存されます。 Campaign エクスプローラーでは、**[!UICONTROL 管理]** > **[!UICONTROL プラットフォーム]** > **[!UICONTROL オプション]**&#x200B;で使用できます。 Campaign Web ユーザーインターフェイスでは、**[!UICONTROL 管理]** > **[!UICONTROL オプション]**&#x200B;で使用できます。 両方のリストは同じです。 詳しくは、[&#x200B; キャンペーンオプションの設定](https://experienceleague.adobe.com/en/docs/campaign-web/v8/administration/options){target="_blank"}を参照してください。

## オプションを使用 {#use-options}

1. Campaign エクスプローラーで、**[!UICONTROL 管理]** > **[!UICONTROL プラットフォーム]** > **[!UICONTROL オプション]**&#x200B;を参照します。
1. オプションを選択してから、その値を更新します。 このオプションが存在しない場合は、ドキュメントに記載されている正確な名前で作成します。
1. ドキュメントが想定するタイプの値を設定します。 例えば、CRM同期日のテキストオプション、ワークフローの再起動遅延の整数オプションなどです。

ワークフローの中間データを保存する場合など、独自のオプションを作成することもできます。 名前を入力し、データタイプを選択して、値を設定します。 詳しくは、[&#x200B; キャンペーンオプションの設定](https://experienceleague.adobe.com/en/docs/campaign-web/v8/administration/options#create){target="_blank"}を参照してください。

一部のオプションには資格情報が保持されます。 [CampaignおよびAdobe Experience Platform ランディングページの操作](../connect/ac-aep-landing-pages.md)の説明に従って、`cryptString`関数でシークレットを暗号化します。 認証情報を回転する場合は、オプションに格納されている認証情報も回転します。 詳しくは、[資格情報のローテーション ガイド &#x200B;](../../technotes/security/credential-rotation-guide.md#ac-options-credentials)を参照してください。

## ワークフローとパーソナライゼーションでのオプションの使用 {#use-options-in-processes}

JavaScript コード、パーソナライゼーション、クエリからオプション値を読み取り、書き込むことができます。

* JavaScript code workflow activity: `getOption('OptionName')`などの&#x200B;**JavaScript code**&#x200B;は、オプションの値を返し、`setOption('OptionName', value, 'description')`はそれを設定します。 例：`getOption('IMS_ORG_ID')`。 詳しくは、[getOption](../../campaign-api/f-getoption.md)および[setOption](../../campaign-api/f-setoption.md)を参照してください。
* **配信パーソナライゼーション**: `<%@ include option='OptionName' %>`は、オプションの値を挿入します。 例えば、`<%@ include option='NmsServer_URL' %>`は、LINE メッセージのweb アプリへのリンクにサーバーのURLを含めます。 詳しくは、[Adobe Campaignを使用したダイレクト LINE メッセージの送信](../send/line/line.md)を参照してください。
* **クエリエディター**: **値** フィールドに`$(options:OPTION_NAME)`と入力して、オプションの値を使用します。 詳しくは、[&#x200B; デザインクエリ &#x200B;](../start/design-queries.md)を参照してください。

## 利用可能なオプション {#available-options}

次の表は、Campaign v8で使用可能なオプションをエリア別にグループ化したものです。 ドキュメントの別のページでオプションが説明されている場合、テーブルはそのオプションにリンクされます。

### 配信 {#delivery-options}

これらのオプションは、配信の準備と送信方法を制御します。 画像と添付ファイルの制限、デフォルトのルーティングプロバイダー、ミッドソーシングの分割しきい値、オープントラッキングスクリプト、公開サーバーのURL、配信の有効性、重複や遅延した配信の処理、バーコードなどについて説明します。 詳しくは、[&#x200B; ファイルの添付](../send/attaching-files.md)、[電子メールパラメーター](../send/email-parameters.md)、[配信のベストプラクティス &#x200B;](../start/delivery-best-practices.md)、[&#x200B; キャンペーンアーキテクチャの基本](architecture.md#split)、[電子メールトラッキングピクセルに関するガイダンス &#x200B;](../start/cnil-pixel-tracking.md)、[&#x200B; ダイレクトラインメッセージの送信](../send/line/line.md)を参照してください。

| オプション | 説明 |
|---|---|
| NmsDelivery_MaxDownloadedImageSize | パーソナライズされたURLからダウンロードされ、メールに添付される画像の最大サイズ（バイト単位）。 デフォルト値は100,000 バイト（100 KB）です。 [詳細情報](../send/attaching-files.md) |
| NmsDelivery_MaxRecommendedAttachments | 警告が表示される前に、電子メールまたはトランザクションメールテンプレート内の添付ファイルの最大数。 デフォルト値は1です。 [詳細情報](../send/attaching-files.md) |
| NmsEmail_DefaultErrorAddr | インスタンスのデフォルトのエラーメールアドレス。配信でエラーアドレスが空のままになっている場合に使用します。 [詳細情報](../send/email-parameters.md) |
| XtkEmail_Characters | 電子メールアドレスの有効な文字。 [詳細情報](../start/delivery-best-practices.md) |
| NmsBroadcast_DefaultProvider | 新しい配信テンプレートのデフォルトのルーティングプロバイダー。 デフォルトで分割配信を使用するには、分割された外部アカウントの名前に設定します。 [詳細情報](architecture.md#split) |
| NmsDelivery_MultiMidSplitThreshold | 複数のミッドソーシングインスタンス間で配信を分割するサイズ。 デフォルト値は100Kです。 [詳細情報](architecture.md#split) |
| NmsTracking_OpenFormula | 開いているトラッキング URLを計算するスクリプト。 ピクセルの目的ごとに1つのオプションを定義します。 [詳細情報](../start/cnil-pixel-tracking.md) |
| NmsServer_URL | パブリック Web アプリケーションサーバーのベース URL。 例えば、LINE メッセージにweb アプリリンクを含めるときに使用します。 [詳細情報](../send/line/line.md) |
| NmsBroadcast_MsgValidityDuration | 配信のデフォルトの有効期間（秒単位）。 |
| NmsBroadcast_RemoveDuplicatesRecipients | 1に設定すると、重複する受信者が自動的に無視されます。 |
| NmsDelivery_ImageServerTimeout | パーソナライズされたURLからダウンロードされ、メールに添付された画像を取得する際に、サーバーから応答を取得するためのタイムアウト（秒単位）。 タイムアウトを超えると、メッセージを送信できません。 デフォルト値は60秒です。 |
| NmsDeliveryWizard_ShowDeliveryWeight | 配信アシスタントにメッセージの重み付けを表示します。 |
| NmsMTA_Alert_Delay | 遅延時間（分単位）：配信が遅延と見なされます。 デフォルト値は30分です。 |
| NmsServer_MirrorPageUrl | ミラーページサーバーのURL。 ルーティング定義でURLが指定されていない場合、これはメール配信のデフォルト値です。 デフォルトでは、トラッキングサーバーのURLと同じです。 |
| XtkBarcode_SpecialChar | Code128 バーコードの特殊文字のサポートを有効または無効にします。 |
| XtkSecurity_Restrict_EditXML | 値0を付けて追加すると、配信のXML コードの編集が無効になります（XML ソースを編集またはCtrl+F4）。 |
| NMS_ActivateOwnerConfirmation | 配信を開始する特定のオペレーターまたはグループが指定されている場合に、配信を担当するオペレーターが送信を確認できるように、1に設定します。 無効にするには0に設定します。指定されたオペレーターまたはグループ、または管理者のみが、送信を確認できます。 |
| NmsDelivery_senderAddressMask | メール配信の「送信元メール」フィールドで許可される送信者アドレスのコンマ区切りリスト。 オプションに値がある場合、フィールドはドロップダウンリストになります。 この制限はグローバルです。すべてのブランドと配信テンプレートに適用され、静的なアドレスのみをサポートします。 [詳細情報](https://experienceleague.adobe.com/en/docs/campaign-web/v8/administration/options#restrict-sender-address){target="_blank"} |

### キャンペーンとワークフロー {#campaign-workflow-options}

これらのオプションは、キャンペーンとワークフローの実行方法を制御します。 送信の所有者の確認、同時に処理されるジョブ数、ワークフローのチェックと自動再起動が含まれます。 また、SQL アクティビティの保護、デフォルトのキャンペーンの有効性、エクスポートされたレポートのロゴについても説明します。 詳しくは、[&#x200B; マーケティングキャンペーン配信](../../automation/campaigns/marketing-campaign-deliveries.md)、[&#x200B; ワークフローのベストプラクティス &#x200B;](../../automation/workflow/workflow-best-practices.md)、[&#x200B; ワークフロー実行の監視](../../automation/workflow/monitor-workflow-execution.md)、[&#x200B; ワークフローのプロパティ &#x200B;](../../automation/workflow/workflow-properties.md)、および[SQL コードとJavaScript コード &#x200B;](../../automation/workflow/sql-code-and-javascript-code.md#important-notes)を参照してください。

| オプション | 説明 |
|---|---|
| NmsCampaign_Activate_OwnerConfirmation | レビューアーが定義されている場合でも、キャンペーン所有者が送信を確認できるように、作成して1に設定します。 0に設定してディアクティベートします。 [詳細情報](../../automation/campaigns/marketing-campaign-deliveries.md) |
| NmsOperation_LimitConcurrency | キャンペーンが同時に処理する配信、ワークフロー、仮説、およびシミュレーションジョブの最大数。 デフォルト値は10です。 [詳細情報](../../automation/workflow/workflow-best-practices.md) |
| NmsServer_PausedWorkflowPeriod | 一時停止したワークフローの2つのチェック間の日数。 [詳細情報](../../automation/workflow/monitor-workflow-execution.md) |
| XtkWorkflow_WatchdogRestartTimerTimeout | 整数オプションとして作成して、ワークフローが自動的にチェックおよび再起動される30秒の間隔を変更します。 [詳細情報](../../automation/workflow/workflow-properties.md) |
| XtkSecurity_FeatureFlag_SqlSensitive | ブロックされたSQL メソッドに対するSQL コードアクティビティの保護を無効にするには、0に設定します。 [詳細情報](../../automation/workflow/sql-code-and-javascript-code.md#important-notes) |
| XtkSecurity_SqlSensitive_Methods | SQL アクティビティがブロックまたは警告するSQL メソッドのリスト。 [詳細情報](../../automation/workflow/sql-code-and-javascript-code.md#important-notes) |
| NmsOperation_Duration | キャンペーンのデフォルトの有効期間（秒単位）。 |
| NmsOperation_TimeRange | スケジュール モードでのターゲティング条件と抽出条件の期間。 |
| NmsOperation_OperationMgtDebug | これを1に設定して、operationMgt テクニカルワークフローの実行情報をワークフロー監査ログに記録します。 |
| NmsOperation_DeliveryPreparationWindow | operationMgt テクニカルワークフローによって、ステータスが一貫しない配信が実行中の配信の数から除外される日数。 デフォルト値は7です。 |
| Workflow_AnalysisThreshold | テーブルの統計の自動再計算により影響を受けるレコードの数。 |
| XtkReport_Logo | 書き出されたレポートの右上隅に表示されるロゴ。 |

### 電子メールの既定値 {#email-default-options}

これらのオプションは、デフォルトの送信者と返信のアドレスおよびメールのラベルを定義します。 配信が対応するフィールドを空のままにすると、Campaignはそれらを使用します。 詳しくは、[電子メールパラメーター](../send/email-parameters.md)および[配信テンプレートの操作](../send/create-templates.md)を参照してください。

| オプション | 説明 |
|---|---|
| NmsEmail_DefaultFromAddr | デフォルトの差出人インスタンスのアドレス。配信が空のままにした場合に使用します。 |
| NmsEmail_FromName | デフォルト：インスタンスの「開始」ラベル。配信が空のままにした場合に使用します。 |
| NmsEmail_DefaultReplyToAddr | インスタンスのデフォルトの返信先アドレス。配信が空のままにした場合に使用されます。 |
| NmsEmail_ReplyToName | インスタンスのデフォルトの返信先ラベル。配信が空のままにした場合に使用されます。 |
| NmsEmail_DefaultErrorAddr | 配信が空のままにした場合に使用される、インスタンスのデフォルトのエラーアドレス。 [詳細情報](../send/email-parameters.md) |
| NmsDelivery_FromAddressMasks | メッセージの送信時に使用される送信元アドレスの構文。 |
| NmsDelivery_ErrorAddressMasks | メッセージへの返信時に使用されるエラーアドレスの構文。 |
| NmsEmail_ExpOrganization | 組織の共通の名前。受信者に表示される警告メッセージで使用されます。 |

### ソフトエラーと強制隔離 {#error-options}

これらのオプションは、一時的な配信エラーであるソフトエラーの後、受信者が強制隔離されるタイミングを定義します。 詳しくは、Campaign[&#128279;](../send/quarantines.md#soft-error-management)の[強制隔離の管理と、Campaign](../send/delivery-failures.md#retries)の配信エラーを参照してください。

| オプション | 説明 |
|---|---|
| NmsNPAI_EmailMaxError | 受信者を強制隔離する前に、メールチャネルで受け入れられるソフトエラーの最大数。 |
| NmsNPAI_EmailSignificantErrorDelay | 新しいソフトエラーを考慮に入れるまでに、メールチャネルで前回のソフトエラーの後に通過する必要がある最小時間。 |
| NmsNPAI_MobileMaxError | 受信者を強制隔離する前に、モバイルチャネルで受け入れられるソフトエラーの最大数。 |
| NmsNPAI_MobileSignificantErrorDelay | 新しいソフトエラーを考慮に入れるまでに、モバイルチャネルで前回のソフトエラーの後に通過する必要がある最小時間。 |

### チャネル {#channel-options}

これらのオプションは、ダイレクトメールの送信者アドレス、LINEおよびSMS チャネルの設定、インバウンドメールの許可された転送アドレスを定義します。 詳しくは、[Adobe Campaignでダイレクトメールを送信する](../send/direct-mail.md)、[Adobe Campaignでダイレクトラインメッセージを送信する](../send/line/line.md)、[Adobe CampaignでSMSを送信する](../send/sms/sms.md)を参照してください。

| オプション | 説明 |
|---|---|
| NmsPaper_SenderLine1、NmsPaper_SenderLine3、NmsPaper_SenderLine4、NmsPaper_SenderLine6、NmsPaper_SenderLine7 | ダイレクトメール配信の送信者アドレスの1、3、4、6、および7行目。 |
| NmsLine_AESKey | lineImage サーブレットがLINE チャネルでURLをエンコードするために使用するAES キー。 |
| NmsLine_MessageCenterURL | Message Center サーバーのURLは、LINE チャネルでウェルカムメッセージを送信するために使用されます。 |
| NmsSMS_Priority | SMS ゲートウェイに送信されるSMS メッセージの優先度。 |
| NmsInmail_AllowlistEmails | インバウンドメール処理モジュールの承認済み転送メールアドレス（カンマで区切る）。 すべてのアドレスを許可するには、*を使用します。 |

### メッセージセンターのしきい値 {#message-center-options}

これらのオプションは、トランザクションメッセージをトリガーするリアルタイムイベントの処理が低下したときに警告またはアラートを発生させるしきい値を定義します。 各指標には、警告しきい値と警告しきい値があります。 オプション名は警告またはアラートで終わります（例：MC_RtEventErrorWarningおよびMC_RtEventErrorAlert）。 詳しくは、[Campaign トランザクションメッセージ &#x200B;](../send/transactional.md)および[Campaign トランザクションメッセージ設定](../config/transactional-msg-settings.md)を参照してください。

| オプション名の接頭辞 | 指標 |
|---|---|
| MC_RtEventAvgDeliveryTime | リアルタイムイベントの平均送信時間。 |
| MC_RtEventAvgProcessTime | リアルタイムイベントの平均処理時間。 |
| MC_RtEventAvgQueueTime | リアルタイムイベントの平均キュー時間： |
| MC_RtEventAvgQueue | キューに入れられたリアルタイムイベントの平均数。 |
| MC_RtEventMaxQueue | キューに入れられたリアルタイムイベントの最大数。 |
| MC_RtEventMinQueue | キューに入れたリアルタイムイベントの最小数。 |
| MC_RtEventQueue | 保留になっているリアルタイムイベントのキュー。 アラートしきい値はクリティカルコンディションです。 |
| MC_RtEventError | リアルタイムイベントの処理エラー。 |
| MC_RtEventThroughput | リアルタイムイベントのスループット： |

### データの保持とデータベース {#database-options}

クリーンアップワークフローは、データベースの成長を防ぐために、古いレコードをパージします。 これらのオプションは、Campaignが各タイプのデータを保持する期間を定義します。 パージ遅延オプションは、インターフェイスの遅延を変更すると自動的に作成されます。 オプションリストから編集する場合は、値を秒単位で表現します。 詳しくは、[一般的なアーキテクチャ &#x200B;](general-architecture.md)および[&#x200B; セキュリティガイドライン &#x200B;](../config/security.md#consent)を参照してください。

| オプション | 説明 |
|---|---|
| NmsCleanup_BroadLogPurgeDelay | 配信ログ（ブロードログ）が消去されるまでの遅延時間。 |
| NmsCleanup_TrackingLogPurgeDelay | トラッキングログが消去されるまでの遅延時間。 |
| NmsCleanup_TrackingStatPurgeDelay | トラッキング統計が消去されるまでの遅延時間。 |
| NmsCleanup_EventPurgeDelay | イベントが消去されるまでの遅延時間。 |
| NmsCleanup_EventHistoPurgeDelay | イベント履歴が消去されるまでの遅延時間。 |
| NmsCleanup_EventStatPurgeDelay | イベント統計が消去されるまでの遅延時間。 |
| NmsCleanup_PropositionPurgeDelay | 提案が消去されるまでの遅延時間。 |
| NmsCleanup_QuarantineMailboxFull | 強制隔離が消去されるまでの遅延時間。 |
| NmsCleanup_RecycledDeliveryPurgeDelay | リサイクルされた配信が消去されるまでの遅延時間。 |
| NmsCleanup_RejectsPurgeDelay | 拒否が消去されるまでの遅延時間。 |
| NmsCleanup_VisitorPurgeDelay | 訪問者が消去されるまでの遅延時間。 |
| NmsCleanup_WorkflowResultPurgeDelay | ワークフローの結果が消去されるまでの遅延時間。 |
| XtkCleanup_NoStats | クリーンアップワークフローがデータベース統計を更新しないように、1に設定します。 |
| WdbcKillSessionPolicy | PostgreSQLでのワークフローの無条件停止の動作。 0 （デフォルト）：データベースに影響を与えずにワークフロープロセスを停止します。 1: プロセスを停止し、クエリをキャンセルします（pg_cancel_backend）。 2: プロセスを停止し、クエリを終了します（pg_terminate_backend）。 |
| XtkSequence_AutoGeneration | このオプションを設定した後に作成されたカスタムスキーマに適用されます。autopk=&quot;true&quot;およびpkSequence属性はありません。Campaignはシーケンスを自動的に生成します。 |

### Message Centerのカスタマイズ {#message-center-customization}

これらのオプションを使用すると、リアルタイムおよびバッチイベントをCampaignがどのようにエンリッチメントおよびルーティングするかをカスタマイズできます。 詳しくは、[Campaign トランザクションメッセージ &#x200B;](../send/transactional.md)および[Campaign トランザクションメッセージ設定](../config/transactional-msg-settings.md)を参照してください。

| オプション | 説明 |
|---|---|
| MC_EnrichmentCustomJs | イベントを充実させるJavaScriptライブラリ。 リアルタイムイベントにはenrichRtEvents （aiEventId）を、バッチイベントにはenrichBatchEvents （aiEventId）を実装する必要があります。 両方の関数は、イベントをエンリッチメントし、データベースに保存します。 |
| MC_RoutingCustomJs | イベントをルーティングするJavaScript ライブラリ。 これは、リアルタイムまたはバッチイベント用に選択されたトランザクションメッセージの内部名を返すdispatchRtEvent （iEventId）およびdispatchBatchEvent （iEventId）を実装する必要があります。 |
| NmsMessageCenter_RoutingBatchSize | イベントのルーティングに使用されるグループのサイズ。 |
| NmsTracking_RT_ClickFormula、NmsTracking_RT_OpenFormula | ブランディングがアクティブ化されたときに、リアルタイム（RT）配信のクリックとオープン追跡に使用される数式。 これらはRT コントロールインスタンスで設定されます。 [詳細情報](https://experienceleague.adobe.com/en/docs/campaign-web/v8/administration/branding/branding-configure){target="_blank"} |
| Branding_RT_ListXtkOptions_toPublish | RT配信で適用できるように、カスタムのトラッキング式を含むオプションのリストをコンマで区切って表示します。 [詳細情報](https://experienceleague.adobe.com/en/docs/campaign-web/v8/administration/branding/branding-configure){target="_blank"} |

### インタラクション（オファー管理） {#interaction-options}

これらのオプションは、オファー管理モジュールであるCampaign インタラクションに適用されます。 プロポジションの書き込み方法と、コントロールインスタンスと実行インスタンスの同期方法を制御します。 詳しくは、[Campaign インタラクション – オファー管理](../interaction/interaction.md)およびインタラクション アーキテクチャの[&#x200B; メンテナンスオプション &#x200B;](../interaction/interaction-architecture.md#maintenance-options)を参照してください。

| オプション | 説明 |
|---|---|
| NmsInteraction_UseDaemon | 提案の非同期書き込みを有効にするには1に、無効にするには0に設定します。 |
| NmsInteraction_MapWorkflowId | 生成されたすべての同期ワークフローのリスト。 コントロールインスタンスのメンテナンスオプション。 |
| NmsExecutionInstanceId | 実行インスタンスの識別子。 実行インスタンスで使用できます。 |

コントロールインスタンスのメンテナンスオプションは、次のとおりです。

* **`NmsInteraction_LastOfferEnvSynch_<offerEnvId>_<executionInstanceId>`**：環境が特定のインスタンスで同期された最後の日付。
* **`NmsInteraction_LastPropositionSynch_<propositionSchema>_<executionInstanceIdSource>_<executionInstanceIdTarget>`**: スキーマの提案があるインスタンスから別のインスタンスに同期された最終日。

>[!CAUTION]
>
>メンテナンスオプションは、特定のメンテナンスケースにのみ使用します。

以下のオプションは、Enterprise （FFDA）のデプロイメントでは使用できないクーポンに適用されます。 詳しくは、[&#x200B; パーソナライズされたクーポン &#x200B;](../send/personalized-coupons.md)を参照してください。

| オプション | 説明 |
|---|---|
| NmsModule_CouponsEnabled | クーポンを有効にします。 |
| NmsCoupons_MaxPerTransac | SQL トランザクションごとに更新されたクーポンの数。 |

### プライバシーリクエスト {#privacy-options}

これらのオプションは、削除の確認、許可されるエラー数、リクエストデータの保存期間など、Campaignによるプライバシーリクエストの処理方法を制御します。 詳しくは、[Campaignでのプライバシーリクエストの管理](../start/privacy.md)を参照してください。

| オプション | 説明 |
|---|---|
| Privacy_Request_ConfirmDeletePending | 1に設定して、2番目の手順でインターフェイスで各削除を手動で確認します。 それ以外の場合は、確認せずにデータが削除されます。 |
| Privacy_Request_ConfirmDeletePendingDelay | 削除確認を待つリクエストがキャンセルされるまでの遅延時間。 |
| Privacy_Request_MaxErrorAllowed | プライバシーリクエストの処理または削除時に許可されるエラーの最大数。 |
| Privacy_Request_PurgeDelay | キュー内のリクエストの作成とそのデータの削除の間の遅延。 |
| realtimeReporting_collectPII | 動的なレポートのための個人情報（PII）契約の選択。 値1は、「後で確認」、「辞退」、「承諾」の3に対応します。 [詳細情報](https://experienceleague.adobe.com/en/docs/campaign-web/v8/reporting/dynamic-reporting/pii-agreement){target="_blank"} |

### 監査記録 {#audit-trail-options}

監査証跡には、Campaign エンティティに対して行われた変更が記録されます。 これらのオプションを使用して、エンティティに対して有効または無効にします。例えば、データベースのスペースを節約します。 値を1に設定して監査証跡を有効にし、0に設定して無効にします。 詳しくは、[監査記録](../reporting/audit-trail.md#enable-disable-audit-trail)を参照してください。

| オプション | 監査済みエンティティ |
|---|---|
| XtkAudit_Workflows | ワークフロー |
| XtkAudit_DataSchema | スキーマ |
| XtkAudit_Option | オプション |
| XtkAudit_Delivery | 配信 |
| XtkAudit_ExtAccount | 外部アカウント |
| XtkAudit_DeliveryMapping | 配信マッピング |
| XtkAudit_WebApp | Web アプリケーション |
| XtkAudit_Offer | オファー |
| XtkAudit_Operator | オペレーター |
| XtkAudit_Enable_All | すべてのエンティティ |

### 統合とアンケート {#integration-options}

これらのオプションには、ランディングページのAdobe Developer Console資格情報、CRM Connector アクティビティの最終同期日、およびアンケート回答のデフォルトのバックアップの統合とアンケートの設定が保存されます。 詳しくは、[Adobe Campaign ランディングページからAdobe Experience Platform プロファイルを更新](../connect/ac-aep-landing-pages.md)、[CRM Connectors データ同期](../connect/crm-data-sync.md)、[回答を管理](../dev/surveys/managing-answers.md)をご覧ください。

| オプション | 説明 |
|---|---|
| IMS_CLIENT_ID、IMS_CLIENT_SECRET、IMS_ORG_ID、IMS_CLIENT_API_KEY | Adobe Experience Platformでランディングページに使用するAdobe Developer Console資格情報。 [詳細情報](../connect/ac-aep-landing-pages.md) |
| LASTIMPORT_の後に、インスタンスの内部名とアクティビティ名が続きます | 汎用CRM コネクタ アクティビティの最後の同期日。 形式`yyyy/MM/dd hh:mm:ss`で、テキストオプションとして手動で作成します。 [詳細情報](../connect/crm-data-sync.md) |
| NmsWebApp_XmlBackup | 作成して1に設定し、すべての調査に対してデフォルトで生の回答のコピーを保存します。 [詳細情報](../dev/surveys/managing-answers.md) |
| AEMResourceTypeFilter | Campaignで使用できるAdobe Experience Manager リソースの種類（カンマで区切る）。 [詳細情報](../connect/ac-aem.md) |
| nmsPipeline_config | JSON形式でのAdobe Experience Cloud トリガーの設定。 長いテキストオプションとして作成します。 [詳細情報](../connect/ac-triggers.md) |
| TNT_EdgeServer | 統合に使用されるAdobe Target サーバー（デフォルトで設定）。 これは、Adobe Target ドメインサーバーの後に/m2が続きます（例：tt.omtrdc.net/m2）。 [詳細情報](../connect/ac-at.md) |
| TNT_TenantName | Adobe Target組織（クライアント）の名前。 [詳細情報](../connect/ac-at.md) |
| AAM_DataSourceId、AAM_DestinationId | Adobe Audience Managerとの統合で使用される識別子。 [詳細情報](../start/shared-audiences.md) |
| WdbcCapabilities_AzureDw | Azure Synapse（Azure SQL Data Warehouse）コネクタのオプション。 [詳細情報](../connect/fda.md) |

## 関連トピック {#related-topics}

* [組み込みパッケージ](built-in-packages.md)
* [グローバル原則](general-architecture.md)
* [資格情報のローテーションガイド](../../technotes/security/credential-rotation-guide.md)
