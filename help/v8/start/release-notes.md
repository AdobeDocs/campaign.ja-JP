---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Overview
role: Data Engineer
level: Beginner
hidefromtoc: false
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 39edd6c60c220118f34cd476b887194e1e7763e4
workflow-type: tm+mt
source-wordcount: '2168'
ht-degree: 99%

---

# 最新リリース{#latest-release}

このページには、**Campaign v8 最新リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。

## リリース 8.3.8 {#release-8-3-8}

_2022年5月18日（PT）_

**新機能**


<table> 
<thead>
<tr> 
<th> <strong>時間依存の通知</strong><br /> </th> 
</tr> 
</thead> 
<tbody> 
<tr> 
<td> <p>Apple は iOS 15 で、機密と見なされた通知をリアルタイムでユーザーに連絡する必要がある場合に、フォーカスモードを回避する制御をアプリ開発者に提供する、即時通知の概念を追加しました。</p>
<p>詳しくは、<a href="../send/push.md#send-notifications-on-ios">詳細ドキュメント</a>を参照してください。</p>
</td> 
</tr> 
</tbody> 
</table>

<table> 
<thead>
<tr> 
<th> <strong>Core Privacy Service の統合</strong><br /> </th> 
</tr> 
</thead> 
<tbody> 
<tr> 
<td> <p>Campaign v8 は、Adobe Privacy Core Service と統合されました。Privacy Core Service からすべての Experience Cloud ソリューションにプッシュされたプライバシーリクエストは、専用のワークフローで Campaign によって自動的に処理されます。</p>
<p>詳しくは、<a href="privacy.md">詳細ドキュメント</a>を参照してください。</p>
</td> 
</tr> 
</tbody> 
</table>


<table>
<thead>
<tr>
<th><strong>Response Manager</strong><br/></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>キャンペーン応答管理を使用すると、マーケティングキャンペーンの成功と ROI、またはすべてのチャネル（電子メール、モバイル、ダイレクトメールなど）にわたるオファーの提案を測定できます。</p>
<p>詳しくは、<a href="../start/campaigns.md#response-manager-add-on">詳細ドキュメント</a>を参照してください。</p>
</td>
</tr>
</tbody>
</table>

<table> 
<thead>
<tr> 
<th> <strong>分散型マーケティング</strong><br /> </th> 
</tr> 
</thead> 
<tbody> 
<tr> 
<td> <p>Campaign 分散型マーケティングでは、セントラルエンティティ（本社、マーケティング部門など）とローカルエンティティ（販売店、地域代理店など）との共同作業によるキャンペーンを実装できます。共有ワークスペース（キャンペーンパッケージ）を使用して、キャンペーンテンプレートを作成し、ローカルエンティティに提案できます。</p>
<p>詳しくは、<a href="../start/campaigns.md#distributed-marketing-add-on">詳細ドキュメント</a>を参照してください。</p>
</td> 
</tr> 
</tbody> 
</table>

**互換性の更新**

* Campaign v8 SDK で、プッシュ通知用に Android 12 および iOS 15 がサポートされるようになりました。
* Campaign v8 は、Windows 11 と互換性を備えるようになりました。

[Campaign 互換性マトリックス](compatibility-matrix.md)を参照してください。

**改善点**

* Campaign で、POP3 の Microsoft Exchange Online OAuth 2.0 認証がサポートされるようになりました。[詳細情報](../config/external-accounts.md#bounce-mails-external-account)
* Microsoft Dynamics Connector web API に関する重要な修正が適用されました。
* 新しいオペレーターおよびグループスキーマの書き込み（operatorWrite）ネームド権限が追加され、ユーザーがオペレーター（xtk:operator）およびオペレーターグループ（xtk:group）スキーマを挿入、更新、削除できるようになりました。

<!--* You can now enable the Email BCC (blind carbon copy) capability to store emails sent by Campaign at the delivery level, through the dedicated option in the delivery properties. [Read more](../config/email-settings.md#email-bcc)-->
<!--* To ensure better performances, a new "Split" option is now activated by default in the Routing external account. This option allows messages to be automatically split across your mid-sourcing instances in order to be delivered faster to the recipients.-->
* 1 つのミッドソーシングで複数のアクティブな LINE アカウントを設定できるようになりました。
* Web プロセスのデフォルト接続数が 50 から 150 に増えました。
* Campaign は、重複したキーが Snowflake データベースに挿入されるのを防ぐための、一連の新しいガードレールを備えています。[詳細を表示](../architecture/keys.md)

**パッチ**

* 同じ繰り返し配信でシードとコントロール母集団を使用する際に発生していた問題を修正しました。（NEO-41197）
* パーソナライゼーションブロックに次の文字 `' & < > "` のいずれかが含まれている場合に、送信プロセス中に同じ deliveryPart に属するすべての受信者（最大 256）の電子メール送信がブロックされる、FFDA の問題を修正しました。パーソナライゼーションブロックでこれらの文字がサポートされるようになりました（例：firstname=&quot;Brian O&#39;Neil&quot;）。（NEO-43184）
* カスタムスキーマをターゲットマッピングとして使用すると、トラッキングワークフローが失敗することがある問題を修正しました。ターゲットマッピングウィザードで broadLog スキーマを生成する際に、カスタムターゲティングスキーマへの外部リンクのタイプが正しいことを確認できるようになりました。（NEO-43506）
* 英語以外の言語で FFDA デプロイメントワークフローが失敗することがある問題を修正しました。（NEO-44561）

## リリース 8.2.10 {#release-8-2-10}

_2022年2月2日（PT）_

**パッチ**

* タイポロジルールで定義されているメッセージの最大数に到達した場合に、配信の準備が失敗する問題を修正しました。
* メールアドレスに「s」の文字が含まれている場合に、Adobe Analytics コネクタの設定中に発生していた問題を修正しました。
* アップグレード後に、deliveryMapping テーブルがカスタム配信マッピングからのデータが失われる場合がある問題を修正しました。
* 電子メールアドレスに一重引用符（ &#39;）が含まれている場合に、受信者が同じ配信で同じメッセージを複数回受信する場合がある問題を修正しました。この文字はエスケープされるようになりました。（NEO-41198）
* シードまたは代用アドレスを使用した配達確認を送信する際の ID 生成の問題を修正しました。（NEO-42637）
* アドレスの代用方式を使用して配達確認を送信できない場合がある問題を修正しました。（NEO-40417）
* LINE パッケージをインストールできない問題を修正しました。（NEO-42503）

## リリース 8.2.8 {#release-8-2-8}

_2021年10月28日（PT）_

<table>
<thead>
<tr>
<th><strong>インバウンドインタラクション</strong><br/></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>インバウンドチャネルで Real-time Interaction Management を利用できるようになりました。Campaign インバウンドインタラクションモジュールを使用して、web サイトを訪問したり、コールセンターに連絡したりする際に、顧客に最適なオファーを提示します。この機能は Campaign v8 にオプションとして付属しており、インスタンスで特定の設定が必要です。インバウンドインタラクションモジュールへのアクセスについては、アドビ担当者にお問い合わせください。</p>
<p>詳しくは、<a href="../interaction/interaction-architecture.md">詳細ドキュメント</a>を参照してください。</p>
</td>
</tr>
</tbody>
</table>

<table> 
<thead>
<tr> 
<th> <strong>キャンペーンの最適化</strong><br /> </th> 
</tr> 
</thead> 
<tbody> 
<tr> 
<td> <p>キャンペーンの最適化モジュールが利用できるようになりました。このモジュールでは、配信の送信を制御、フィルタリングおよび監視できます。キャンペーン間の競合を回避するために、Adobe Campaign では特定の制限ルールを適用して、様々な組み合わせをテストできます。このテストにより、企業のコミュニケーションポリシーに準拠し、顧客のニーズと期待に応える最適なメッセージを送信できます。</p>
<p>詳しくは、関連する <a href="https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/campaign-optimization/about-campaign-typologies.html?lang=ja">Campaign Classic v7 ドキュメント</a>を参照してください。</p>
</td> 
</tr> 
</tbody> 
</table>

<table> 
<thead>
<tr> 
<th> <strong>Unicity Service</strong><br /> </th> 
</tr> 
</thead> 
<tbody> 
<tr> 
<td> <p>Unicity Service は、新しい Cloud Database Manager コンポーネントです。これにより、ユーザーは Cloud Database テーブル内の一意のキー制約の整合性を保持し、監視できます。これにより、重複したキーを挿入するリスクを軽減できます。
<p>Cloud Database は単一性制約を強制しないため、Unicity Service はアプリケーションレベルで<b>一連の新しいガードレール</b>を導入し、Adobe Campaign でデータを管理する際に重複が挿入されるリスクを軽減します。</p> 
<p>Unicity Service は、<b>ffdaUnicity</b> と呼ばれる新しい組み込みワークフローを開始して、単一性の制約を監視し、重複が検出されたときにアラートを出します。</p>
<p>詳しくは、<a href="../architecture/keys.md">詳細ドキュメント</a>を参照してください。</p>
</td> </tr> 
</tbody> 
</table>

<!--
<table> 
<thead>
<tr> 
<th> <strong>Twitter channel availability</strong><br /> </th> 
</tr> 
</thead> 
<tbody> 
<tr> 
<td> <p>The <a href="../send/twitter.md">Twitter social channel</a> is now available with Campaign v8. You can:</p>
<ul> 
<li><p>Send messages on Twitter: Adobe Campaign lets you post messages directly to your twitter account. You can also send direct messages to all your followers.
</p></li>
<li><p>Collect new contacts: Adobe Campaign can automatically recovers the profile data, which enables you to carry out targeting campaigns and implement cross-channel strategies.
</p></li>
</ul>
<p>Learn how to connect Campaign and Twitter in the <a href="../connect/ac-tw.md">detailed documentation</a>.</p>
<p>Learn how to post tweets and send direct messages with Campaign in <a href="../connect/ac-tw.md">this page</a>.</p>
</td> 
</tr> 
</tbody> 
</table>
-->

**改善点**

* Snowflake コネクタのパフォーマンスが向上しました。
* 監視およびテストの目的で、**[!UICONTROL ステージングデータのレプリケート]**&#x200B;ワークフローの監査ログに、FFDA（Full Federated Data Access）データベースに送信されたレコード数が含まれるようになりました。
* SQL コードアクティビティで、SQL スクリプトを格納するデータベースを、デフォルトのデータソースまたは選択したアクティブな FDA 外部アカウントから選択できるようになりました。
* 事前定義済みの一連のウェアハウスが使用可能になり、セグメント化、ETL、ピークなどの様々なクエリを並行して実行するために使用できるようになりました。[詳細を表示](../config/workflows.md)

**その他の変更**

* **[!UICONTROL 暗号化された識別子]**&#x200B;フィールドが訪問者スキーマに追加されました（`nms:visitor`）。このフィールドは計算され、web アプリケーションに使用されます。
* 一部のミッドソーシングコンテナに IP アフィニティが存在するが、すべてのコンテナには存在しない場合、配信分析が失敗する問題を修正しました。IP アフィニティはすべてデータベースに保存されるようになり、どのコンテナもその他すべてのコンテナに存在するアフィニティにアクセスできるようになりました。（NEO-37564）
* 複数のスキーマとナビゲーションツリーノードを含むパッケージをインポートできるようになりました。

**パッチ**

* ユーザーがデータスキーマ内でテーブル定義要素から `<autoStg>` 属性を削除した後、またはその値を `true` から `false` に変更した後、関連するステージングテーブルが削除されませんでした。この問題は修正されました。
* FFDA データソースを使用した ID 管理が原因で、専用フォームでレコードを作成する際にエラーが発生する問題を修正しました。
* オファーがワークフローのエンリッチメントアクティビティによって管理されている場合に、オファーが配信に挿入されない可能性がある問題を修正しました。
* パッケージのインポートが遅くなる可能性がある問題を修正しました。
* シードアドレスを含む電子メール配信が送信されない可能性がある問題を修正しました。
* オファーの提案テーブルに提案が保存されない可能性がある問題を修正しました。
* ネットワークタイムアウトの問題が、ネットワークエラーではなく、スクリプトの中断の問題として誤って記録される問題を修正しました。この問題は、JavaScript アクティビティに含まれる HTTP リクエストの場合に発生しました。
* オファーが Snowflake 上のライブオファー環境にレプリケートされない問題を修正しました。
* 非拡張ビルトインスキーマの「autoStg」属性を無視する問題を修正しました。
* プロファイルをプレビューするときに、ユーザーが&#x200B;**[!UICONTROL 国／地域]**&#x200B;のリンクを選択できない問題を修正しました。
* カスタムレポートの日付ピッカーでスクリプトエラーが発生する問題を修正しました。（NEO-36345）
* 設定ファイルに不具合がある場合、設定を再生成する際にシステムがクラッシュする問題を修正しました。
* マーケティングインスタンスとコントロールインスタンスが正常にアップグレードされない問題を修正しました。
* マーケティングインスタンスで請求ワークフローがクラッシュする可能性がある問題を修正しました。
* FFDA Snowflake の標準テーブルでキーが重複する可能性がある問題を修正しました。（NEO-38583）
* 2 つの重複排除アクティビティを順番に編集すると、ワークフローの一時スキーマが失われる可能性がある問題を修正しました。（NEO-34063）
* 時間コンポーネントの抽出中に Amazon Redshift の HoursDiff 関数と MinutesDiff 関数を実行すると、誤った結果が返される問題を修正しました。（NEO-31673）
* プロキシ設定の問題が原因で、ユーザーがコンソールにログインできない可能性がある問題を修正しました。（NEO-38388）
* **パージフォルダー**&#x200B;機能が正しく動作しないリグレッションの問題を修正しました。（NEO-37459）
* ワークフローに添付されたモバイル配信をプレビューできない可能性がある問題を修正しました。
* リストがデータベースで負の ID で識別された場合に、**リスト読み込み**&#x200B;ワークフローアクティビティが動作しない可能性がある問題を修正しました。（NEO-39607）

## リリース 8.1.20 {#release-8-1-20}

_2021年9月7日_

**セキュリティ機能の強化**

* セキュリティ上の問題を修正し、ディレクトリトラバーサル攻撃に対する保護を強化しました。（NEO-28547）

**改善点**

* Flash は、提供終了後、関連するすべての Campaign 機能およびコンポーネントから削除され、HTML5 に置き換えられました。**ゲージ**&#x200B;タイプのグラフが削除されました。（NEO-30330）[詳細情報](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/creating-new-reports/creating-a-chart.html?lang=ja)
* Windows にクライアントコンソールをインストールする際、インストーラーは親レジストリノードがあるかどうかを確認し、ない場合は作成するようになりました。これにより、コンソールの起動時に発生する可能性のある問題を防止できます。（NEO-34854）
* 署名トラッキング機能が改善され、サードパーティツール（メールクライアント、インターネットブラウザーなど）による特殊文字の処理方法に関連するエラーを防げるようになりました。URL パラメーターがエンコードされるようになりました。

**その他の変更**

* 以前は非推奨（廃止予定）のMicrosoft CRM コネクタ（Office 365 およびオンプレミスデプロイメント）がインターフェイスから削除されました。 [詳細情報](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/connectors/crm-connectors/crm-ms-dynamics.html?lang=ja#configure-acc-for-microsoft)
* Tomcat 8 への移行後に、IIS セットアップスクリプトが更新されて、IIS 統合の問題が修正されました。（NEO-31019）
* ガードレールが追加されて、マーケティングインスタンス上で[請求テクニカルワークフロー](https://experienceleague.adobe.com/docs/campaign-classic/using/monitoring-campaign-classic/production-procedures/monitoring-processes.html?lang=ja#billing-report)を実行できるようになりました。
* ワークフロートランジションの&#x200B;**母集団を表示**&#x200B;ウィンドウのデータタブとスキーマタブで、データソースの識別が改善されました。
* データベースの更新の問題を防ぐために、欠落していたデータベースインデックスが、xtk:rights、nms:dlvExclusion、nms:seedMember、nms:trackingUrl の各スキーマに追加されました。

**パッチ**

* オファーが配信にリンクされている場合に、**ホットクリック**&#x200B;レポートが機能しなかった問題を修正しました。（NEO-26295）
* **サブワークフロー**&#x200B;アクティビティを実行しても出力テーブルが生成されなかった問題を修正しました。（NEO-36242）
* **記述的分析**&#x200B;レポートを PDF にエクスポートする際の様々な問題を修正しました。（NEO-25847）
* 外部メール配信を使用すると配信が失敗する可能性がある問題を修正しました。（NEO-37435）
* Web API を使用して Microsoft CRM に接続する際のエラーを修正しました。機能に影響がなかったので、エラーメッセージは削除されました。
* ミッドサーバーがトラッキングサーバーとマーケティングサーバーの間のリレーとして設定された場合のトラッキングログ重複排除の問題を修正しました。（NEO-36285）
* Vault を特定のコードストアとして使用できなかったリグレッションを修正しました。
* 受信トランジションが FDA データソースからのものである場合に、**エンリッチメント**&#x200B;ワークフローアクティビティで変数を使用できなかった問題を修正しました。
* FFDA でオペレーターグループと権限が適切にレプリケーションされなかった問題を修正しました。
* 配信を通じて誤った購読解除リンクが送信される可能性がある問題を修正しました。
* レプリケーション管理でアップグレード後の期間に影響を与える問題を修正しました。
* **ホットクリック**&#x200B;が表示されない可能性がある問題を修正しました。
* メールメッセージの URL が壊れる可能性がある問題を修正しました。

## リリース 8.1.14 {#release-8-1-14}

_2021 年 7 月 23 日（PT）_

**新機能**

<table>
<thead>
<tr>
<th><strong>新しいワークフローアクティビティ：データソースを変更</strong><br/></th>
</tr>
</thead>
<tbody>
<tr>
<td>
<p>新しい「<b>データソースを変更</b>」ワークフローアクティビティを使用すると、ワークフローのワークテーブルのデータソースを変更できます。これにより、様々なデータソース（FDA、FFDA およびローカルデータベース）にわたるデータ管理の柔軟性が向上します。</p>
<p>Adobe Campaign ワークフローでは、データは作業用（または一時）テーブルを使用して管理されます。ワークフローの実行時に、ワークテーブルはワークフローアクティビティ間でデータを共有します。デフォルトでは、ワークテーブルは、クエリ対象となるデータのソースと同じデータベースに作成されます。
</p>
<p>Campaign v8 では、メインプロファイルテーブルはクラウドデータベースに直接保存されます。したがって、プロファイルテーブルに対してクエリを実行すると、クラウドデータベースにワークテーブルも作成されます。
特定の操作を実行するために、ワークテーブルを別のデータソースに移動すると効果的な場合があります。
</p>
<p>詳しくは、<a href="../config/workflows.md#change-data-source-activity">詳細なドキュメント</a>を参照してください。</p>
</td>
</tr>
</tbody>
</table>

<table> 
<thead>
<tr> 
<th> <strong>LINE チャネルが使用可能</strong><br /> </th> 
</tr> 
</thead> 
<tbody> 
<tr> 
<td> <p>Campaign v8 では、<a href="../send/transactional.md">トランザクションメッセージ</a>モジュールと組み合わせることで、以下のような機能強化を含め、<a href="../send/line.md">LINE チャネル</a>が利用可能になりました。
<ul> 
<li><p>訪問者が LINE 配信でターゲットにされない可能性がある問題を修正しました。 
</p></li>
<li><p>実行インスタンスからマーケティングインスタンスに訪問者を取得する際にエラーが発生する可能性がある問題を修正しました。
</p></li>
<li><p>リアルタイムイベントの処理中に発生する問題を修正しました。</p></li>
</ul>
</td> 
</tr> 
</tbody> 
</table>


**その他の機能強化**

* 特定の配信に対して&#x200B;**ホットクリック**&#x200B;レポートが表示されない可能性がある問題を修正しました。
* 「**重複排除**」ワークフローアクティビティで重複カウントが不正確になる場合がある問題を修正しました。
* 「ID が空でない」フィルターを伴うワークフロークエリを使用すると、トランジションの母集団に空の項目が表示される場合がある問題を修正しました。
* 新しいターゲットマッピングで追加フィールドが作成されない問題を修正しました。
