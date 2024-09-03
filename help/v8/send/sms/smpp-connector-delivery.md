---
title: 配信プロパティの SMPP コネクタ
description: 配信での SMPP コネクタの設定について
feature: SMS
role: User
level: Beginner, Intermediate
badge: label="限定提供（LA）" type="Informative"
source-git-commit: 36bb1e2c9e2391065360c3cd2ad97612373ec0c2
workflow-type: tm+mt
source-wordcount: '1326'
ht-degree: 6%

---


# SMPP コネクタの説明 {#smpp-connector-desc}

>[!IMPORTANT]
>
>これは、Adobe Campaign v8.7.2 以降に適用されます。
>
>古いバージョンについては、[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/en/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up/sms-set-up){target="_blank"} を参照してください。

## SMS コネクタのデータフロー {#sms-data-flow}

この節では、SMS プロセスによるデータの処理方法を説明します。

SMS プロセスが環境とどのようにやり取りするかを要約した大まかなブロック図を次に示します。

![](assets/smsv2_highlevel.png){zoomable="yes"}

SMS プロセスは、2 つの重要なコンポーネントをホストします。SMPP プロバイダーとの通信を処理する SMPP コネクタ自体と、SR 紐付けのバックグラウンドタスクです。

### SMPP アカウントのデータフロー {#sms-data-flow-smpp-accounts}

SMS プロセスは、nms:extAccount をポーリングし、SMPP コネクタで新しい接続を生成して、各アカウントの設定を渡します。 ポーリング頻度は、serverConf の *configRefreshMillis* 設定で調整できます。

アクティブな SMPP アカウントごとに、SMPP コネクタは常に接続をアクティブに保とうとします。 接続が失われた場合は、再接続されます。

### メッセージの送信中のデータフロー {#sms-data-flow-sending-msg}

* SMS プロセスは、nms:delivery をスキャンして、アクティブな配信を選択します。 配信は、次の場合にアクティブになります。
   * その状態は、メッセージを送信できることを意味します
   * 有効期限が切れていません
   * 実際には配信です（例：テンプレートではなく、削除もされていません）
   * SMPP コネクタで、配信にリンクされた外部アカウントに対して 1 つ以上の接続を開くことができます
* SMS プロセスは、配信ごとに配信部分を読み込みます。 配信部分が部分的に送信された場合、SMS プロセスは、広範ログを確認することで、既に送信されたメッセージを確認します。
* SMS プロセスが、配信部分からのパーソナライゼーションデータでテンプレートを展開します。
* SMPP コネクタは、コンテンツとその他の設定に一致する MT （SUBMIT_SM PDU）を生成します。
* SMPP コネクタは、トランスミッター（またはトランシーバー）接続を介して MT を送信します。
* プロバイダーは、この MT の ID を返します。 nms:providerMsgId に挿入されます。
* SMS プロセスは、広範ログを送信済みステータスに更新します。
* 最終的なエラーが発生した場合、SMS プロセスは広範ログを適宜更新し、nms:broadLogMsg に新しい種類のエラーを作成することがあります。

### SR の受信中のデータフロー {#sms-data-flow-sr}

* SMPP コネクタは、SR （DELIVER_SM PDU）を受信してデコードします。 外部アカウントで定義された正規表現を使用して、メッセージ ID とステータスを取得します。
* メッセージ ID とステータスが nms:providerMsgStatus に挿入される
* 挿入した後、SMPP コネクタは DELIVER_SM_RESP PDU を返します。
* 処理中に問題が発生した場合、SMPP コネクタは負の DELIVER_SM_RESP PDU を送信し、メッセージをログに記録します。

### MO の受信中のデータフロー {#sms-data-flow-mo}

* SMPP コネクタは、MO （DELIVER_SM PDU）を受信およびデコードします。
* キーワードがメッセージから抽出されます。 宣言されたキーワードと一致する場合、対応するアクションが実行されます。 強制隔離を更新するために、nms:address に書き込む場合があります。
* カスタム TLV が宣言されている場合、それぞれの設定に従ってデコードされます。
* 完全にデコードおよび処理された MO が nms:inSms テーブルに挿入されます。
* SMPP コネクタから、DELIVER_SM_RESP PDU が返されます。 エラーが検出された場合、エラーコードがプロバイダーに返されます。

### MT と SR を紐付ける際のデータフロー {#sms-reconciling-mt-sr}

* SR 調整コンポーネントは、nms:providerMsgId および nms:providerMsgStatus を定期的に読み取ります。 両方のテーブルのデータが結合されます。
* 両方のテーブルにエントリがあるすべてのメッセージについて、一致する nms:broadLog エントリが更新されます。
* nms:broadLogMsg テーブルは、新しい種類のエラーが検出された場合にプロセスで更新されるか、手動で選定されなかったエラーのカウンターを更新します。

## MT、SR、broadLog エントリの照合 {#sms-matching-entries}

次の図にプロセス全体を示します。

![](assets/message_processing.png){zoomable="yes"}

**フェーズ 1**

* メッセージがスキャンされ、フォーマットされてから、SMPP コネクタに送信されます。
* SMPP コネクタは、SUBMIT_SM MT PDU として書式設定します。
* MT が SMPP プロバイダーに送信されます。
* プロバイダから SUBMIT_SM_RESP が返されます。 SUBMIT_SM と SUBMIT_SM_RESP は、sequence_number によって照合されます。
* SUBMIT_SM_RESP は、プロバイダからの ID を提供します。 この ID は、広範ログ ID と共に nms:providerMsgId テーブルに挿入されます。

**フェーズ 2**

* プロバイダーは DELIVER_SM SR PDU を送信します。
* SR が解析されて、プロバイダー ID、ステータスおよびエラーコードが抽出されます。 この手順では、抽出の正規表現を使用します。
* プロバイダー ID とそれに対応するステータスが nms:providerMsgStatus に挿入されます。
* すべてのデータがデータベースに安全に挿入されると、SMPP コネクタは DELIVER_SM_RESP を返します。 DELIVER_SM および DELIVER_SM_RESP は、それぞれの sequence_number によって照合されます。

**フェーズ 3**

* SMS プロセスの SR 調整コンポーネントは、nms:providerMsgId テーブルと nms:providerMsgStatus テーブルの両方を定期的にスキャンします。
* 両方のテーブルのいずれかの行に一致するプロバイダ ID がある場合、2 つのエントリは結合されます。 これにより、広範ログ ID （providerMsgId に格納）をステータス（providerMsgStatus に格納）と照合できます。
* 広範ログは、対応するステータスで更新されます。

## アフィニティと専用プロセスコネクタ {#sms-affinities}

アフィニティは、専用のプロセスコネクタでは無視され、SMS プロセス内で実行されます。

## serverConf オプション {#sms-serverconf-options}

一部の設定は serverConf.xml で調整できます。 このファイルの他の設定と同様に、config-instance.xml ファイルで指定する必要があります。 すべての設定は、&lt; mta2 > 要素にあります。

この表は、すべての設定をまとめたものです。 最小/最大許容値は、ほとんどの場合に考慮する必要がある範囲の大まかなアイデアを提供します。 デバッグ値は、パフォーマンスに関係のない問題を見つけようとした場合に選択する値です。

| 設定 | 説明 | デフォルト | 最小許容値 | 最大有効値 | デバッグ値 |
|:-:|:-:|:-:|:-:|:-:|:-:|
| batchUpdateSize | 更新マイクロバッチのサイズ | 5000 | 100：低遅延 | maxWaitingMessages/updateThreads：この値を超えると、maxWaitingMessages によってバッファーが制限されるので、意味がありません | 1: マイクロバッチ処理を無効にし、メッセージを 1 つずつ更新します |
| configRefreshMillis | 設定の再読み込み期間 (ミリ秒) | 10000 | pollPeriodMillis：低遅延 | 600000：再読み込みに時間がかかりすぎてリソースを節約できない | 500：待ち時間が短いため、新しい設定をより速く試すことができます |
| deliveryPartRetryCount | deliveryPart が再試行または延期された最大回数。 注意：送信プロセスの再起動は再試行としてカウントされます。クラッシュも再試行としてカウントされる場合があります。 | 20 | 1：再試行を無効にする | 50：不安定なプロバイダーを回避するために、メッセージを永続的にする | 1：再試行を無効にします。 1000：失敗したメッセージのフラッシュを避けます。 |
| deliveryPartRetryDelaySeconds | 配信部分を再試行するまでの最小遅延 (クロスプロセスおよびクロスコンテナ)。遅延は秒単位です。 | 60 | 0：直ちに再試行 | 3600：再試行が非常に遅い（各再試行の間に 1 時間） | 1：ビジー状態のログで再試行を簡単に実行できるようにします。 |
| logOutput | メインログ出力の監視およびプロファイルデータを送信します。 | true | false：スループットが少し向上する場合があります。 お勧めしません。 | true：ログを有効にします。 | true |
| maxWaitingMessages | 一度に処理できるメッセージの最大数 | 50000 | 256:1 つの deliveryPart に十分 | 200000: SQL クエリの長さ（64k）によって制限されています | 1：メッセージを 1 つずつ処理する |
| pollPeriodMillis | 新規メッセージをチェックするためのデータベースポーリング頻度（ミリ秒単位）。 | 2000 | 500：低遅延 | 10000：大きいバッチ | 500：待ち時間が短いとデバッグが容易になります。 |
| prepareThread | メッセージ準備のスレッド数 | 3 | 1: シングル スレッド | CPU の数。 RAM の使用状況に注意します。 6 を超える値を増やすには、maxSMSMemoryMb、maxProcessMemoryAlertMb および maxProcessMemoryWarningMb を増やす必要があります | 1: シングルスレッドの場合は、よりクリーンなログが生成されます。 |
| profDeliveryStat | SMS プロセスの内部に関する様々な集計統計のログ | true | false：スループットが少し向上する場合があります。 お勧めしません。 | true：低い冗長ログ | true |
| profLogPerMessage | 各メッセージの各処理ステップを記録します。 | いいえ | false：ログの冗長さを減らします。 | true：非常に高い冗長ログ。 **絶対に必要な場合にのみ使用**。 パフォーマンスへの大きな影響。 **十分なデータが収集され次第、この設定を無効にしてください**。 | true |
| providerIdScanPeriod | 調整する新しいプロバイダー ID のスキャン間の期間（秒） | 10 | 1：低遅延 | 60：より多くのスループットを得るために大きなバッチ | 1：低遅延は、メッセージ処理のデバッグに役立ちます。 |
| providerIdThreads | プロバイダー ID を紐付けるスレッド数。インスタンスごとに 1 スレッドで十分です。このコンテナで無効にするには、0 に設定します。 | 1 | 0：このコンテナを無効にする | 1 | 1 |
| 送信スレッド | 送信スレッド数 | 1 | 1: シングル スレッド | CPU の数。 スレッドが多すぎると、通常、パフォーマンスが低下します。 | 1: シングルスレッドの場合は、よりクリーンなログが生成されます。 |
| updateThread | データベースを更新するためのスレッドの数 | 1 | 1: シングル スレッド | CPU の数。 各スレッドは、独自の DB 接続を作成します。 | 1: シングルスレッドの場合は、よりクリーンなログが生成されます。 |
| verifyMode | メッセージ送信をシミュレートします。 メッセージは実際には送信されません。 デバッグに役立つ | いいえ | いいえ | true | false：システムを通常どおり実行します。 true: DB アクセスおよびメッセージ準備のみをテストします。 |
