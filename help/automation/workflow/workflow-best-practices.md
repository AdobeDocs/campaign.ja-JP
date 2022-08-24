---
product: campaign
title: ワークフローのベストプラクティス
description: キャンペーンワークフローのベストプラクティスを説明します
feature: Workflows
source-git-commit: 2b1dec4b9c456df4dfcebfe10d18e0ab01599275
workflow-type: tm+mt
source-wordcount: '1709'
ht-degree: 84%

---

# ワークフローのベストプラクティス{#workflow-best-practices}

以下に、Campaign ワークフローのパフォーマンスを最適化し、ワークフローのデザインを改善し、正しい設定を選択するための一般的なガイドラインを示します。

## ワークフローフォルダー {#workflow-folders}

専用フォルダーでワークフローを作成することをお勧めします。

プラットフォーム全体に影響するワークフローの場合には（例えばクレンジングの処理など）、ビルトインの&#x200B;**[!UICONTROL テクニカルワークフロー]**フォルダーにサブフォルダーを追加することを検討できます。


## ワークフローの命名 {#workflow-naming}

ワークフローには、適切な名前とラベルを付けることをお勧めします。そうすると、正常に機能していないワークフローを簡単に見つけてトラブルシューティングできるようになります。また、オペレーターが理解しやすいように、実行される処理の概要をワークフローの説明フィールドに記述してください。

そのワークフローが、複数のワークフローが関与する処理の一部となっている場合、ラベルの入力は手動でおこないます。ワークフローを（ラベルによって）順序付けるには数字の利用が適しています。

次に例を示します。

* 001 - インポート - 受信者のインポート
* 002 - インポート - 売上のインポート
* 003 - インポート - 売上詳細のインポート
* 010 – エクスポート - 配信ログのエクスポート
* 011 – エクスポート - トラッキングログのエクスポート

## ワークフローの重大度 {#workflow-severity}

ワークフローの重大度は、ワークフローのプロパティの「**[!UICONTROL 実行]**」タブで設定することができます。

* Normal（標準）
* Production（本番）
* Critical（重要）

ワークフローを作成する際にこの情報を入力しておくと、設定されている処理の重大度を理解するのに役立ちます。

このオプションでは、キャンペーンワークフロー以外のワークフローに対する機能上の影響はありません。

重要度の高いキャンペーンワークフロー（キャンペーン／操作の一部として作成されたワークフロー）は、同時に実行されるべきプロセスがキャンペーンに多数ある場合に、優先して実行されます。デフォルトでは、1 つのキャンペーンで同時に実行できるプロセスは最大 10 個です。この数は、NmsOperation_LimitConcurrency オプションによって決まります。例えば、キャンペーンに 25 個のワークフローが含まれている場合、重要度の高いワークフローが最初の 10 個のプロセスで実行されることになります。

## ワークフローの監視 {#workflow-monitoring}

エラーが発生した場合に通知を受けられるよう、本番環境で動作するすべてのスケジュール設定されたワークフローを監視する必要があります。

ワークフロープロパティにて、デフォルトの「**[!UICONTROL ワークフロースーパーバイザー]**」あるいはカスタムグループを「スーパーバイザー」グループとして選択します。少なくとも 1 人のオペレーターがこのグループに属し、E メールも設定されていることを確認します。

ワークフローを作成する前に、ワークフロースーパーバイザーを必ず定義します。エラーが発生した場合、スーパーバイザーに通知されます。詳しくは、[エラーの管理](monitor-workflow-execution.md#managing-errors)を参照してください。

「**[!UICONTROL 監視]**」タブを定期的にチェックして、有効なワークフローの全体的なステータスを確認します。 詳しくは、[インスタンスの監視](monitor-workflow-execution.md#instance-supervision)を参照してください。

ワークフローヒートマップを使用すれば、Adobe Campaign 管理者はインスタンス上の負荷を監視し、それに従ってワークフローを計画することができます。詳しくは、[ワークフローの監視](heatmap.md)を参照してください。

## アクティビティ {#using-activities}

>[!CAUTION]
>
>同じワークフロー内でアクティビティをコピーして貼り付けることができます。ただし、異なるワークフロー間でアクティビティをコピーして貼り付けることはお勧めしません。アクティビティに関連付けられた配信やスケジューラーなどの設定が、貼り付け先ワークフローの実行中に競合やエラーの原因となる可能性があります。代わりに、ワークフローを&#x200B;**複製**&#x200B;することをお勧めします。詳しくは、[ワークフローの複製](build-a-workflow.md#duplicate-workflows)を参照してください。

### アクテビティの名前 {#name-of-the-activity}

ワークフローを開発する際、アクティビティには他の Adobe Campaign オブジェクト同様に名前が付けられます。名前はツールが生成しますが、アクティビティを設定する際にわかりやすい名前に変更することをお勧めします。後から名前変更をおこなうと、それより前の他のアクティビティの名前を使用するアクティビティを含むワークフローが中断する恐れがあります。このため、後から名前を変更するのは困難な作業になります。

アクティビティの名前は、「**[!UICONTROL 詳細設定]**」タブにあります。**[!UICONTROL query]**、**[!UICONTROL query1]**、**[!UICONTROL query11]** といった名前のままにせず、**[!UICONTROL querySubscribedRecipients]** などのわかりやすい名前を付けてください。この名前は、ジャーナルおよび場合によっては SQL ログに表示され、ワークフロー設定の際、デバッグするのに役立ちます。

### 最初と最後のアクティビティ {#first-and-last-activities}

* 常に「**[!UICONTROL 開始]**」アクティビティまたは「**[!UICONTROL スケジューラー]**」アクティビティでワークフローを開始します。適宜、「**[!UICONTROL 外部シグナル]**」アクティビティも使用できます。
* ワークフローを作成する場合、分岐ごとに「**[!UICONTROL スケジューラー]**」アクティビティを 1 つだけ使用します。ワークフローの同じ分岐に、相互にリンクされた複数のスケジューラーがある場合、実行タスクの数が指数関数的に増大するので、データベースに膨大な負荷がかかりかねません。このルールは、「**[!UICONTROL スケジュール設定と履歴]**」タブで、すべてのアクティビティに適用されます。詳しくは、[スケジュール設定](scheduler.md)を参照してください。

   ![](assets/wf-scheduler.png)

* すべてのワークフローで、「**[!UICONTROL 終了]**」アクティビティを使用します。これにより、ワークフロー内で計算に使用される一時スペースが解放されます。詳しくは、[開始および終了](start-and-end.md)を参照してください。

### アクティビティ内の JavaScript {#javascript-within-an-activity}

ワークフローアクティビティを初期化する際、JavaScript を追加する必要がある場合があります。アクティビティの「**[!UICONTROL 詳細設定]**」タブで追加できます。

ワークフローを見つけやすくするため、アクティビティのラベルの最初と最後にダッシュを 2 つ使用して、「--ラベル名--」のようにすることをお勧めします。

### シグナル {#signal}

大抵の場合、シグナルがどこから呼び出されたのかは判断できません。この問題を避けるには、シグナルアクティビティの「**[!UICONTROL 詳細設定]**」タブの「**[!UICONTROL コメント]**」フィールドを使用し、このアクティビティのシグナルの予測される出どころを記録します。

## ワークフローの更新 {#workflow-update}

本番ワークフローは直接更新しないでください。テンプレートワークフローを使用してキャンペーンを作成する以外の作業は、まず開発環境でテストしてください。この検証が終了したら、本番環境にワークフローをデプロイし、開始することができます。

すべてのテストは、実稼働環境ではなく、開発環境またはステージング環境で実行します。この場合、パフォーマンスの保証はできません。

開発あるいはテストプラットフォーム上で、アーカイブ済みフォルダー内にアーカイブ済みのワークフローを保存しておくことはできますが、本番環境では可能な限り削除してください。アクティブでない古いワークフローは、本番環境から削除してください。

## 実行とパフォーマンス {#execution-and-performance}

### ログ {#logs}

JavaScript メソッド **[!UICONTROL logInfo()]** は、ワークフローのデバッグのためのソリューションです。 ただし、特に頻繁に実行するアクティビティでは、慎重に使用する必要があります。過負荷となり、ログテーブルのサイズが大幅に増える可能性があります。

### 中間母集団を保持

この **2 つの実行間の中間母集団の結果を保持** オプションは、ワークフローの 2 つの実行の間に一時テーブルを保持します。

これはワークフロープロパティの「**[!UICONTROL 一般]**」タブにあり、データを監視し結果を確認できるよう、開発とテストの目的で利用可能です。このオプションは開発環境では使用できますが、本番環境では絶対に使用しないでください。一時テーブルを保持していると、データベースのサイズが大幅に増大し、サイズの制限に達してしまうかもしれません。更に、バックアップも遅くなります。

最後に実行したワークフローのワークテーブルのみ保持されます。
それ以前に実行した分のワークテーブルは、毎日実行される**[!UICONTROL クリーンアップ]**ワークフローによりパージされます。


>[!CAUTION]
>
>このオプションは、 **なし** チェックインされる **実稼動** ワークフロー。 このオプションは、結果の分析に利用され、テスト目的でのみ設計されたものですので、開発環境またはステージング環境のみに限定して使用する必要があります。


### SQL クエリをログに記録

この **SQL クエリをジャーナルに記録** オプションは **[!UICONTROL 実行]** 」タブをクリックします。 このオプションは、様々なアクティビティからのすべての SQL クエリを記録し、プラットフォームが実際に何を実行したかを確認する方法を提供します。 ただし、このオプションは **一時的に** 開発中に **実稼動環境では有効化されていません**.

不要になったログはパージすることをお勧めします。 ワークフローの履歴は自動でパージされません。すべてのメッセージは、デフォルトで保持されます。履歴は、**[!UICONTROL ファイル／アクション]**&#x200B;メニューを選択するか、リストの上にあるツールバー内の「アクション」ボタンをクリックすることでパージできます。「履歴をパージ」を選択します。ログをパージする方法について詳しくは、この[ドキュメント](start-a-workflow.md)を参照してください。

### ワークフローの計画 {#workflow-planning}

問題を回避するには、ワークフローの実行計画に追加のベストプラクティスを適用する必要があります。

* インスタンスの過負荷を防ぐために、1 日を通じて安定したレベルのアクティビティを維持し、ピークを回避します。 このためには、ワークフローの開始時間を 1 日を通じて均等に分散させる必要があります。
* リソースの競合を削減するため、データ負荷を夜間にスケジュールします。
* 時間がかかるワークフローは、サーバーおよびデータベースリソースに影響を与える可能性があります。処理時間を短縮するため、一番時間のかかるワークフローを分割します。
* 全体的なランタイムを短縮するには、時間のかかるアクティビティを、シンプルで迅速なアクティビティに置き換えます。
* 20 を超えるワークフローを同時に実行しないでください。同時に実行されるワークフローが多すぎると、プラットフォームが過負荷になり、不安定になる可能性があります。

### ワークフローの実行 {#workflow-execution}

以下のベストプラクティスを実装することで、インスタンスの安定性を向上させます。

* システム全体のパフォーマンスが落ちたり、データベースにブロックが作成されたりする可能性があるので、**ワークフローの実行スケジュールは 15 分以上の間隔を空けてください**。

* **ワークフローが一時停止の状態のままにならないようにします**&#x200B;一時ワークフローを作成する際には、**[!UICONTROL 一時停止]**&#x200B;の状態に留まることなく、正常に終了できるかを確認します。一時停止となった場合、一時テーブルを保持する必要があることを意味し、データベースのサイズが増大します。ワークフローが失敗した場合やシステムによって一時停止された場合にアラートを送信するには、ワークフローのプロパティで「ワークフロースーパーバイザー」を割り当てます。

   ワークフローが一時停止の状態にならないようにするには：

   * ワークフローを定期的に調べ、予期しないエラーが発生していないことを確認します。
   * 可能な限りワークフローをシンプルにします。例えば、大きなワークフローは複数のワークフローに分割します。**[!UICONTROL 外部シグナル]**&#x200B;アクティビティを使用すれば、これらのワークフローの実行を他のワークフローの実行に基づいてトリガーできます。
   * ワークフローでは、フローがある無効化されたアクティビティを回避します。スレッドが開いたままとなり、多数の一時テーブルが作成されて大量の領域を消費する可能性があるためです。ワークフロー内のアクティビティを「**[!UICONTROL 有効にしない]**」または「**[!UICONTROL 有効にするが実行しない]**」のステータスのままにしないでください。

* **未使用のワークフローを停止します**。実行中のワークフローは、データベースへの接続を維持します。

* **無条件停止は、非常に例外的な場合にのみ利用してください**。通常は、このアクションを使用しないでください。ワークフローが生成したデータベースへの接続を切断しない場合、パフォーマンスに影響が出ます。

* **同じワークフローで複数の停止リクエストを実行しません**。ワークフローの停止は、非同期プロセスです。リクエストが登録されると、ワークフローサーバーは進行中の操作をキャンセルします。このため、ワークフローインスタンスの停止には時間がかかります。特に、ワークフローが複数のサーバーで実行されている場合は、各サーバーがそれぞれ進行中のタスクのキャンセルを処理する必要があるので、時間がかかります。問題を回避するには、停止操作が完了するのを待ち、ワークフローを複数回停止しないようにします。

### 「エンジン内で実行」オプション {#execute-in-the-engine-option}

実稼動環境では、エンジン内でワークフローを実行しないでください。 次の場合に **[!UICONTROL エンジン内で実行]** オプションが **[!UICONTROL ワークフローのプロパティ]**&#x200B;を指定した場合、ワークフローが優先され、その他すべてのワークフローは、ワークフローが完了するまでワークフローエンジンによって停止されます。

![](assets/wf-execute-in-engine.png)