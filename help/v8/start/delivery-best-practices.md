---
title: 配信のベストプラクティス
description: Adobe Campaign で配信をデザインおよび送信する際のベストプラクティスについて説明します。
feature: Email, Push, SMS, Direct Mail
role: User
level: Beginner
version: Campaign v8, Campaign Classic v7
exl-id: cb6094eb-0010-4c62-9589-3b52fd60c2c2
source-git-commit: a2efad26232cd380eea850a589b22b23928253e8
workflow-type: tm+mt
source-wordcount: '2970'
ht-degree: 97%

---

# 配信のベストプラクティス {#delivery-best-practices}

詳しくは、Campaign 配信機能に関する次のベストプラクティスを参照してください。

## 配信の最適化 {#optimize-delivery}

配信の作成に入る前に、アップストリームでの送信プロセスを保証し、最適化するいくつかのアクションを行うことができます。次の節では、Adobe Campaign を最適に設定するベストプラクティスと推奨手順について説明します。

### プラットフォームのパフォーマンス

いくつかの要因がサーバーのパフォーマンスに直接影響し、Campaign プラットフォームの速度が低下することがあります。

* [パーソナライゼーション](../send/personalize.md)要素の数とタイプ：メールのパーソナライゼーションでは、各受信者のデータベースからデータを取り出します。パーソナライゼーション要素が多数ある場合は、配信の準備に必要なデータ量が多くなります。これにより、プラットフォームの速度が低下する場合があります。パーソナライゼーションのガードレールについて詳しくは、[この節](../send/personalize.md#perso-guardrails)を参照してください。

* サーバーの負荷：マーケティングサーバーが様々なタスクをいくつも同時に処理していると、パフォーマンスが低下することがあります。マーケティングサーバーは、すべての配信で最新の正しいデータを使用できるようにあらゆる受信および送信データを統合して調整する必要があります。
パフォーマンスの低下を避けるには、他のチームメンバーと話し合い、最適なパフォーマンスが得られるように配信スケジュールを調整します。

* ワークフローの実行：ワークフローの監視は、プラットフォームのパフォーマンスの問題を回避するために不可欠です。[このドキュメント](../../automation/workflow/workflow-best-practices.md#execution-and-performance)に示すガイドラインに従います。

* [ パフォーマンス監視 ](https://experienceleague.adobe.com/ja/docs/control-panel/using/discover-control-panel/key-features){target="_blank"} 機能を使用して、プラットフォームを監視するには、[Campaign Campaign コントロールパネル機能 ](https://experienceleague.adobe.com/ja/docs/control-panel/using/performance-monitoring/about-performance-monitoring){target="_blank"} に接続します。

#### 強制隔離の管理 {#quarantine-management}

強制隔離の管理プロセスを適切に維持することをお勧めします。

新しいプラットフォームでメールの送信を開始するときは、まだ選定が十分でないアドレスのリストを使用することがあります。無効なアドレスやハニーポットアドレス（スパム送信者を誘き寄せるために作成されたメールボックス）に送信すると、プラットフォームのレピュテーションの低下につながります。適切な強制隔離の管理プロセスがあれば、アドレスの品質の維持、インターネットアクセスプロバイダーによるブロックリストへの登録の回避、エラー率の低減、配信とスループットの向上を期待できます。


新しいプラットフォームを開始する方法について詳しくは、[Adobe配信品質のベストプラクティスガイド ](https://experienceleague.adobe.com/ja/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/campaign/ac-starting-new-platform){target="_blank"} を参照してください。

技術的な推奨事項の一覧については、[ この節 ](https://experienceleague.adobe.com/ja/docs/deliverability-learn/deliverability-best-practice-guide/additional-resources/campaign/acc-technical-recommendations){target="_blank"} を参照してください。


+++ **詳しくは、いくつかのベストプラクティスを参照してください。**

* 無効なアドレスのリストがある場合は、それを強制隔離テーブル（**[!UICONTROL 管理]**／**[!UICONTROL キャンペーン管理]**／**[!UICONTROL 配信不能件数の管理]**／**[!UICONTROL 配信不能件数およびアドレス]**）にインポートすることをお勧めします。

* アドレスが強制隔離されている受信者は、配信分析時にデフォルトで除外され、ターゲティングされません。これによって配信が迅速になります。エラー率は配信の速度に大きく影響するからです。例えば、インボックスの容量が超過している場合やアドレスが存在しない場合などに、メールアドレスを強制隔離できます。
Adobe Campaign では、返されるエラーのタイプに応じて不正なアドレスを管理します。[詳しくは、強制隔離を参照してください](../send/quarantines.md)。

* 一部のインターネットアクセスプロバイダーは、無効なアドレスの割合が高すぎる場合、メールを自動的にスパムと見なします。したがって、強制隔離を使用すると、これらのプロバイダーによってブロックリストに追加されるのを回避できます。

+++



### ダブルオプトインのメカニズム {#double-opt-in}

無効なアドレスにメッセージが送信されるのを回避し、不適切な通信を規制し、送信者のレピュテーションを向上させるには、購読後の確認をおこなう二重のオプトインのメカニズムを実装することをお勧めします。これにより、受信者が意図的に購読したことを確認できます。

## テンプレートの使用 {#use-templates}

配信テンプレートは、一般的なアクティビティについての既製のシナリオを提供し、作業の効率化に役立ちます。テンプレートを使用すれば、最小限のカスタマイズを行うだけで、より迅速に新しいキャンペーンをデプロイできます。[詳しくは、配信テンプレートを参照してください](../send/create-templates.md)。

### サブドメインとブランディング {#subdomains-and-branding}

Adobe Campaign で複数のブランドを管理する場合は、ブランドごとに 1 つのサブドメインを使用することをお勧めします。例えば銀行ならば、個々の支店に対応する複数のサブドメインを所有できます。銀行のドメインが bluebank.com の場合、サブドメインは、@ny.bluebank.com、@ma.bluebank.com、@ca.bluebank.com などになります。サブドメインごとに 1 つの配信テンプレートを用意すれば、それぞれのブランドに合わせて事前に設定されたパラメーターをいつでも使用でき、エラーの回避や時間の節約につながります。サブドメインのブランディングについて詳しくは、[Campaign Campaign コントロールパネルドキュメント ](https://experienceleague.adobe.com/ja/docs/control-panel/using/subdomains-and-certificates/subdomains-branding){target="_blank"} を参照してください。

### アドレスの設定 {#configure-addresses}

必ず次のガイドラインを適用してください。

* 送信者のアドレスは、メールを送信する必須情報です。ISP（インターネットサービスプロバイダー）によっては、メッセージを許可する前に、送信者アドレスの有効性をチェックする場合があります。
* 正しくない形式のアドレスは、受信サーバーによって拒否される可能性があります。正しいアドレスが指定されていることを確認する必要があります。
* アドレスは、送信者を明示的に識別する必要があります。ドメインは、送信者によって所有され、登録されている必要があります。
* 配信アドレスと返信アドレスのメールアカウントを作成することをお勧めします。詳しくは、自社のシステム管理者にご相談ください。

+++ **Campaign UI でアドレスを設定する手順**

Campaign インターフェイスでアドレスを設定するには、次の手順に従います。

1. [](../send/create-templates.md)配信テンプレートで「**[!UICONTROL 送信者]**」リンクをクリックします。**[!UICONTROL メールヘッダーのパラメーター]**&#x200B;ウィンドウで、設定を入力します。

1. 「**[!UICONTROL 送信者のアドレス]**」フィールドで、アドレスドメインがアドビにデリゲートしたサブドメインと同じであることを確認します。「@」より前の部分は変更できますが、ドメインアドレスは変更できません。

1. 「**[!UICONTROL 送信者]**」フィールドで、ブランド名など、受信者が容易に識別できる名前を使用して、配信の開封率を高めます。受信者のエクスペリエンスの質を高めるために、「Megastore（担当：田中）」のように個人名を追加する方法もあります。

1. 「**[!UICONTROL 返信アドレスのテキスト]**」フィールドでは、送信者のアドレスがデフォルトで返信に使用されます。カスタマーサポートの代表アドレスなど、実際にある既存のアドレスを使用することをお勧めします。そうすれば、受信者から返信が来た場合に、カスタマーサポートが対応することができます。

### コントロール母集団の設定 {#set-up-control-group}

配信が送信されたら、除外された受信者の行動と、配信を受信した受信者の行動を比較します。その後、キャンペーンの効率性を測定できます。コントロール母集団について詳しくは、[この節](../../automation/campaigns/marketing-campaign-target.md#add-a-control-group)を参照してください。

### フィルターまたは制御ルールを適用するためのタイポロジの使用 {#create-typologies}

タイポロジには、メッセージを送信する前の分析フェーズで適用されるチェックルールが含まれています。

テンプレートのプロパティの「**[!UICONTROL タイポロジ]**」タブで、必要に応じて、カスタムのタイポロジを選択できます。

例えば、アウトバウンドトラフィックの制御を強化するために、使用可能な IP アドレスを定義するには、サブドメインごとに 1 つのアフィニティを定義し、アフィニティごとに 1 つのタイポロジを作成します。アフィニティはインスタンスの設定ファイルで定義されます。Adobe Campaign 管理者にお問い合わせください。

タイポロジについて詳しくは、[この節](../../automation/campaign-opt/campaign-typologies.md)を参照してください。

## コンテンツの最適化 {#optimize-content}

### パーソナライズされたコンテンツの作成 {#perso-content}

メッセージをパーソナライズするには、データベースに保存されている受信者データや、トラッキング、ランディングページ、購読などを通じて収集した受信者データを使用できます。パーソナライゼーションの基本について詳しくは、[この節](../send/personalize.md)を参照してください。

+++ **いくつかのベストプラクティスを参照してください**。

* パーソナライゼーション設定を確認 - エラーを避けるには、メッセージコンテンツが適切に設計されていることを確認します。多くのエラーはパーソナライゼーションに関係する可能性があります。Adobe Campaign のパーソナライゼーションタグは、常に `<%=table.field%>` の形式を取ります。パーソナライゼーションブロック内でのパラメーターの使い方が間違っていると、問題になる場合があります。例えば、JavaScript の変数は次のように使用する必要があります。

  ``
  <%
  var brand = "xxx"
  %>
  ``

  パーソナライゼーションブロックについて詳しくは、[この節](../send/personalization-blocks.md)を参照してください。

* パーソナライゼーションデータを準備 - 配信準備の分析を向上させるには、ワークフローでパーソナライゼーションデータを準備できます。このオプションは、パーソナライゼーションデータが外部テーブルから Federated Data Access（FDA）を介して送られる場合に特に使用します。このオプションについては、[この節](../send/personalization-data.md#optimize-personalization)を参照してください。
+++

### 最適化されたコンテンツの作成 {#build-optimized-content}

メールを作成する際は、メールのコンテンツに関する一般的なベストプラクティスを適用します。

+++ **詳しくは、いくつかのベストプラクティスを参照してください**。

* デザインをシンプルにします

* モバイルユーザーを考慮します

* 画像のみのメールは避けます

* メールセーフフォントを使用します

* 特殊文字をエンコードします

+++


### 件名  {#subject-line-check}

メールの開封率を向上させるような[件名](../send/personalization-fields.md#personalization-fields-uc)を考えます。


+++ **詳しくは、いくつかのベストプラクティスを参照してください**


* 長すぎる件名は避けます。最大 50 文字にします

* 「無償」や「オファー」など、スパムと見なされる可能性がある単語を繰り返し使用することは避けます

* 大文字は避けます。

* 「!」、「£」、「€」、「$」などの特殊文字は使用しないでください。

+++

### ミラーページ {#mirror-page-check}

ミラーページリンクを必ず含めます。メールの先頭がお勧めです。ミラーページについて詳しくは、[この節](../send/mirror-page.md)を参照してください。

### 購読解除リンク {#unsub-link-check}

購読解除リンクは不可欠です。購読解除リンクが表示され、有効である必要があり、フォームが機能する必要があります。デフォルトでは、メッセージが分析されると、オプトアウトリンクが含まれているかどうかが組み込みの&#x200B;**[!UICONTROL 購読解除リンクの承認]**[タイポロジルール](../../automation/campaign-opt/control-rules.md)によってチェックされ、含まれていない場合は警告が表示されます。

オプトアウトリンクを挿入する方法について詳しくは、[この節](../send/personalization-blocks.md)を参照してください。

+++ **このベストプラクティスを適用します**。

ヒューマンエラーが発生する可能性は常にあるので、毎回、送信前に、オプトアウトリンクが適切に機能することを確認する必要があります。例えば、配達確認を送信するときは、リンクが有効であること、フォームがオンラインであること、`No longer contact this recipient ` フィールドが `Yes` に変更されていることを確認します。

+++

### メールのサイズ {#email-size-check}

パフォーマンスや配信品質の問題を回避するため、メールの最大サイズは約 **35** KB です。メッセージのサイズを確認するには、「**[!UICONTROL プレビュー]**」タブに移動し、テストプロファイルを選択します。メッセージが生成されると、サイズが右上隅に表示されます。


+++ **詳しくは、いくつかのベストプラクティスを参照してください**。

* 冗長なスタイル、または使用されていないスタイルの削除

* メールコンテンツの一部をランディングページに移動

* コードの縮小

最終送信の前に、必ず変更をテストしてください。

+++


### SMS の長さ {#sms-length-check}

デフォルトでは、SMS の文字数は GSM（Global System for Mobile Communications）標準に準じています。GSM エンコードを使用する SMS メッセージは 160 文字以内に制限されています。複数の部分に分けて送信されるメッセージの場合は、SMS 1 件につき 153 文字以内です。


+++ **詳しくは、いくつかのベストプラクティスを参照してください**。

* SMS メッセージのすべての文字をそのまま維持するには（例えば、固有名詞が改変されないようにするには）、表記変換を有効にしないでください。

* ただし、SMS メッセージに GSM 標準に準じていない文字が多数含まれる場合は、表記変換を有効にしてメッセージ送信のコストを抑えることができます。詳しくは、[この節](../send/sms/smpp-external-account.md#smpp-transliteration)を参照してください。

* SMS の表記変換を適用できます。表記変換では、SMS の特定の文字が GSM 標準に準じていない場合に、別の文字に置き換えられます。パーソナライゼーションフィールドを SMS メッセージのコンテンツに入れると、GSM エンコードに対応していない文字が含まれる場合があります。Campaign 管理者が文字の表記変換を許可するには、対応する&#x200B;**[!UICONTROL 外部アカウント]**&#x200B;の「SMPP チャネル設定」タブにあるチェックボックスをオンにします。[詳細情報](../send/sms/smpp-external-account.md#smpp-transliteration)

+++

### 添付ファイルを付けない

現在も添付ファイルを媒介としたマルウェアの拡散は後を絶ちません。一括送信の場合は特に注意が必要です。ドキュメントを添付するのではなく、ドキュメントへのセキュアなリンクを渡します。これにより、セキュリティレベルを引き上げて意図しない再配布を防ぐことができます。また、受信側のメールゲートウェイでサイズ超過やセキュリティ上の理由によりメッセージが拒否される可能性を大幅に減らすこともできます。

<!--
## Work on formatting {#formatting}

To avoid common formatting errors, check the following elements:

* Correct **date formatting**: Adobe Campaign provides date formatting functions for the JavaScript templates and XSL stylesheets. [Learn more](formatting.md#date-display)

* Usage of **authorized characters** in emails: the list of valid characters for email addresses is defined in the "XtkEmail_Characters" option. Learn how to access Campaign options [in this section](../../installation/using/configuring-campaign-options.md). To correctly handle special characters, Adobe Campaign needs to be installed in Unicode. 

* Configuration of **Email Authentication**: make sure that the email headers contain the DKIM signature. DKIM (Domain Keys Identified Mail) authentication allows the receiving email server to verify that a message was indeed sent by the person or entity it claims it was sent by, and whether the message content was altered in between the time it was originally sent (and DKIM "signed") and the time it was received. This standard typically uses the domain in the From or Sender header. For more on this, refer to the [Adobe Deliverability Best Practice Guide](https://experienceleague.adobe.com/docs/deliverability-learn/deliverability-best-practice-guide/transition-process/infrastructure.html#authentication).-->

## 画像の管理 {#manage-images}

メールマーケティングキャンペーン用の画像を最適化する具体的なガイドラインは、次のとおりです。

### 画像のブロックの回避 {#image-blocking}

一部のメールクライアントはデフォルトで画像をブロックし、ユーザーはデータ使用時に保存する画像をブロックするように設定を変更できます。したがって、画像がダウンロードされなければ、メッセージ全体が失われる可能性があります。

+++ これを回避するには、これらのベストプラクティスを適用できます。

* 画像のみのメールは避けます。画像とテキストでコンテンツのバランスを取ります。

* 画像にテキストを含める必要がある場合は、代替テキストやタイトルテキストを使用して、必ずメッセージが伝わるようにします。代替テキストやタイトルテキストのスタイルを設定して、外観を改善します。

* 背景画像は一部の E メールクライアントでサポートされていないので、使用しないようにします。
+++

### 画像をレスポンシブにする {#responsive-images}

すべてのコンテキストとデバイスで表示できるように、画像をレスポンシブかつサイズ変更可能にしてみてください。これは作成に時間がかかるので、コストに影響する可能性があります。

### 絶対画像参照を使用する {#absolute-images}

キャンペーンに関連するメールやパブリックリソースで使用される画像を外部からアクセスできるようにするには、その画像を外部からアクセスできるサーバー上に置く必要があります。

* 配信アシスタントから、画像を含んだ HTML ページをインポートするか、HTML エディターの&#x200B;**[!UICONTROL 画像]**&#x200B;アイコンを使用して直接画像を挿入できます。

* 画像が表示されない場合は、その画像がサーバー上で使用できることを確認します。これを行うには、配信の「**ソース**」タブに移動します。使用する画像を探し、各画像の URL をコピーして web ブラウザーに貼り付けます。画像が表示されない場合は、IT 管理者か、配信コンテンツを提供しているサードパーティベンダーに問い合わせてください。

### メッセージのプレビューとテスト {#preview-msg}

メッセージをプレビューして、パーソナライゼーションおよび受信者に対してどのように配信が表示されるかを確認することをお勧めします。

配信アシスタントの「**[!UICONTROL プレビュー]**」サブタブでは、特定の受信者向けに各コンテンツをレンダリングした結果を確認できます。コンテンツのパーソナライゼーションフィールドや条件付き要素は、選択したプロファイル内の対応する情報で置き換えられます。[詳細情報](../send/preview-and-proof.md)。


<!--
*  An automatic anti-spam checking is performed during each preview. In the **[!UICONTROL Preview]** sub-tab, check [SpamAssassin](spamassassin.md) spam scoring.  Click **[!UICONTROL More...]** to find out more about the warning.  Before doing so, make sure SpamAssassin is correctly installed and configured on the Adobe Campaign application server. [Learn more](../../installation/using/configuring-spamassassin.md)
-->

## 適切なオーディエンスの定義 {#define-the-right-audience}

ターゲット母集団が鍵です。リストを慎重に作成し、一般的なメールクライアントやモバイルデバイスでメールをテストし、メールリストが最新のものであるか（不明なアドレスや古いアドレスが含まれていないこと）を確認します。また、完全な検証サイクルを確立するには、配達確認を送信することもできます。オーディエンスについて詳しくは、[この節](../audiences/gs-audiences.md)を参照してください。

### 適切なオーディエンスのターゲティング {#target-the-right-audience}

コンテンツを用意できたら、メッセージの受信者を慎重に定義する必要があります。

配信を適切におこなうには、適切な受信者に最も関連性の高いパーソナライズされたコンテンツを送信する必要があります。Adobe Campaign では、精度の高いターゲットを作成できます。つまり、年齢、場所、購入履歴、以前の配信でリンクをクリックしたかどうかなどの条件に基づいて、受信者を選択できます。また、ターゲットの的確性を確認するために、テストプロファイル、コントロール母集団、シードアドレスを定義することもできます。

### ターゲットマッピング {#target-mappings}

Campaign では、配信テンプレートはデフォルトで&#x200B;**受信者**&#x200B;をターゲットに設定します。Adobe Campaign では、必要に応じて変更できるターゲットマッピングも配信に使用できます。例えば、ソーシャルネットワークからプロファイルを収集された訪問者や、情報サービスを購読している訪問者に配信できます。

これらのマッピングについては、[この節](../audiences/target-mappings.md)を参照してください。

### 外部受信者 {#external-recipients}

データベースに保存されている受信者ではなく、外部ファイルに保存されている受信者に配信できます。詳しくは、[この節](create-message.md#select-external-recipients-selecting-external-recipients)を参照してください。

<!--
### Send to your subscribers {#send-to-subscribers}

To send messages to the subscribers of a newsletter, you can directly target the subscribers to the corresponding information service. Learn more [in this section](../audiences/).-->

### テスト受信者 {#test-recipients-seed-addresses}

配信をテストするには、メインターゲットに送信する前に配達確認を使用します。

配達確認の受信者には適切な人を選択してください。配達確認の受信者は、メッセージのフォームとコンテンツを検証する必要があります。配達確認受信者を定義する手順については、[この節](create-message.md#select-the-recipients-of-proof-messages-select-the-proof-target)を参照してください。


### アドレスの重複排除 {#deduplicate-addresses}

重複したメールアドレスがあると、ターゲットに影響する可能性があるので、メールアドレスの重複を回避することが重要です。

* ターゲットが分割されている場合は、同じメッセージを複数回送信できます。

* 受信者がメッセージを受信後に購読解除しても、重複したプロファイルはその後もメッセージを受信します。

アドレスの重複は、送信レピュテーションを保護し、適切な強制隔離管理をおこなうためのものです。

**関連トピック：**

* [重複排除 - 重複アクティビティ](../../automation/workflow/deduplication.md)。
* [ユースケース：重複排除 - 重複アクティビティの結合機能の使用](../../automation/workflow/deduplication-merge.md)。


## 送信前の全チェックの実行 {#perform-all-checks}

メッセージを用意できたら、そのコンテンツがすべてのデバイス上で正しく表示されることを確認します。また、パーソナライゼーションの誤りや壊れたリンクなどのエラーがないことも確認します。メッセージを送信する前に、パラメーターと設定が配信に対して矛盾がないことも確認します。

配信を検証する手順について詳しくは、[この節](../send/preview-and-proof.md)を参照してください。

<!--
### Inbox rendering {#inbox-and-email-rendering}

Inbox rendering enables you to preview your messages on major email clients, scan content and reputation, discover how recipients are reading messages.

**Tips**:

* You can view the sent message in the different contexts in which it may be received: webmail, message service, mobile, etc.

* Inbox rendering capabilities are crucial to identifying whether your email campaigns successfully make it past the filters of major ISPs (Internet Service Providers) and webmail services. Such tools send a pre-flight copy of an email to a network of test inboxes, so you can see how the message will display, or render, across these services. They may also include reports and code correction options that help you quickly identify and make fixes that improve deliverability.

Learn more [in this section](inbox-rendering.md).-->

### 配達確認メッセージ {#proof-messages}

配達確認を送信すると、オプトアウトリンクやミラーページ、その他のリンクの確認、メッセージの検証、画像の表示の確認、エラーの検出などを行うことができます。また、様々なデバイス上でデザインとレンダリングを確認することもできます。

<!--
### Set up A/B testing deliveries {#a-b-testing-deliveries}

If you have several contents for an email delivery, you can use A/B testing to find out which version will have the biggest impact on the targeted population.

**Tips**:

* Send the different versions to some of your recipients

* Select the one with the highest success rate and send it to the rest of your target

Learn more [in this section](get-started-a-b-testing.md).-->

### メッセージの確実な配信 {#make-sure-your-message-is-delivered}

最後の手順です。メッセージが実際に関連性の高い受信者に配信されるように Adobe Campaign の機能を最大限に活用します。

#### 検証プロセスの実行

Adobe Campaign のオペレーターやグループが関与する包括的な検証プロセスを定義して、ターゲットとメッセージコンテンツの両方を検証できます。キャンペーンの各種プロセス（ターゲット設定、コンテンツ、予算、抽出、配達確認の送信）の監視と制御をもれなく確実に実施します。ユーザーは、それぞれの権限に応じた通知を受け取ります。また、配達確認を受信したり、メッセージを検証または却下することもできます。詳しくは、[この節](../../automation/campaigns/marketing-campaign-approval.md)を参照してください。

#### ウェーブの使用

ウェーブを使用すると、送信するボリュームを徐々に増やせます。これにより、メッセージがスパムとしてマークされず、また 1 日あたりのメッセージ数を制限できます。ウェーブを使用すると、一度に大量のメッセージを送信するのではなく、配信をいくつかのバッチに分割できます。詳しくは、[この節](../send/configure-and-send.md#sending-using-multiple-waves)を参照してください。

#### メッセージの優先順位

配信の優先度レベルを設定すると、配信の送信順を指定できます。
それには、次の手順に従います。

1. 配信プロパティを編集し、「**[!UICONTROL 配信]**」タブを選択します。

1. 「**[!UICONTROL 非常に低い]**」から「**[!UICONTROL 非常に高い]**」までのスケール上で、この配信の優先順位レベルを定義します。

>[!NOTE]
>
>配信内からメッセージの送信順序を定義することはできません。

<!--
#### Setup IP Affinities

To better control the outbound SMTP traffic, you can manage affinities by defining which specific IP addresses can be used for each affinity. This lets you restrict the number of emails for specific deliveries towards machines or output addresses. For example, you can use one affinity per country or sub-domain. You can then create one typology per country and link each affinity to the corresponding typology.

You can:

* Define the IP affinities in the serverConf.xml configuration file. [Learn more](../../installation/using/configuring-campaign-server.md#managing-outbound-smtp-traffic-with-affinities)

* For each IPAffinity element, declare the IP addresses that can be used. [Learn more](../../installation/using/email-deliverability.md#list-of-ip-addresses-to-use)

* In the [typology](../../campaign-opt/using/about-campaign-typologies.md) of your choice, use the **[!UICONTROL Managing affinities with IP addresses]** field to link deliveries to the delivery server (MTA) which manages the said affinity. [Learn more](../../campaign-opt/using/applying-rules.md#control-outgoing-smtp-traffic).

* Once the email is sent, check the header to verify which IP address the delivery was sent from. Your email administrator should help you obtain the header information.

* For SMS deliveries, make sure that the SMS channel has a dedicated affinity limited to **one** application server container. [Learn more](../../installation/using/configure-delivery-settings.md#managing-outbound-smtp-traffic-with-affinities)

>[!NOTE]
>
>Most of these steps can only be performed by an expert user.-->

#### タイポロジの使用

タイポロジルールを使用すると、特定の条件に基づいてターゲットの一部を除外できます。このテストにより、企業のコミュニケーションポリシーに準拠しつつ、顧客のニーズと期待に応える最適なメッセージを送信できます。例えば、ニュースレターの対象から未成年の受信者を除外できます。詳しくは、[この例](../../automation/campaign-opt/filtering-rules.md)を参照してください。


## トラッキングと監視 {#track-and-monitor}

「**送信**」ボタンをクリックしましたか。何が起こるかを見てみましょう。配信の送信後、Adobe Campaign では、送信済みメッセージをトラッキングして、配信に対する受信者の反応を確認できます。これは、今後の送信を改善し、次のキャンペーンを最適化するのに役立ちます。

## 配信の監視 {#monitoring-deliveries}

キャンペーンを制御するには、メッセージが実際に受信者に配信されたことを確認する必要があります。

Campaign 配信ダッシュボードから、処理済みメッセージと配信監査ログを確認できます。配信ログのメッセージのステータスも制御できます。

[ 配信の監視について詳しくは、Campaign Classic v7 ドキュメントを参照してください ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/track-and-monitor.html?lang=ja){target="_blank"}


## 行動の追跡 {#track-behaviour}

受信者の行動を十分に把握するには、受信、開封、リンクのクリック、購読解除など、受信者が配信にどのように反応するかを追跡できます。Campaign では、この情報は、配信がターゲットとする受信者の「**トラッキング**」タブと配信の「トラッキング」タブに表示されます。

メッセージトラッキングは、デフォルトで有効になっています。URL を設定するには、配信アシスタントの下部のセクションで「URL を表示」オプションを選択します。メッセージの URL ごとに、トラッキングを有効化するかどうかを選択できます。


[ トラッキング機能について詳しくは、Campaign Classic v7 ドキュメントを参照してください ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/tracking-messages/how-to-configure-tracked-links.html?lang=ja#sending-messages){target="_blank"}
