---
source-git-commit: 548b4be24e26a6970f953f92af1f89d829689592
workflow-type: tm+mt
source-wordcount: '1522'
ht-degree: 0%

---
# AC-UI-26-01 ドキュメント分析

## 次期リリースコンテンツ

このドキュメントでは、AC-UI-26-01 および AC-UI-25-11 の月次リリースの製品 JIRA を分析して、ドキュメントのアクションを計画します。

### JIRA フィルター

1. **[AC-UI-26-01-Monthly Stories](https://jira.corp.adobe.com/issues/?jql=project%20%3D%20NEO%20AND%20fixVersion%20%3D%20AC-UI-26-01-Monthly%20and%20type%20%3D%20story%20order%20by%20status)** - メインリリースストーリー
2. **[NEOと 92400 の機能強化 &#x200B;](https://jira.corp.adobe.com/issues/?jql=issueFunction%20in%20linkedIssuesOf(%27key%3DNEO-92400%27%2C%20%27is%20implemented%20by%27))** - リリースの機能強化に関連する問題
3. **[AC-UI-25-11-Monthly Stories](https://jira.corp.adobe.com/issues/?jql=project%20%3D%20NEO%20AND%20fixVersion%20%3D%20AC-UI-25-11-Monthly%20and%20type%20%3D%20story%20order%20by%20status)** – 以前のリリースの繰り越し
4. **[AC-UI-25-11 （8.8.2 を除く） &#x200B;](https://jira.corp.adobe.com/issues/?jql=project%20%3D%20NEO%20AND%20fixVersion%20%3D%20AC-UI-25-11-Monthly%20and%20fixVersion%20!%3D%208.8.2%20 および %20type%20%3D%20story%20order%20by%20status)** – 以前のリリースでフィルタリング

&#x200B;---

## 🟢 DOCAC の作成

### [NEO-91565](https://jira.corp.adobe.com/browse/NEO-91565) - パーソナライゼーションフィールドのサポートを追加（高度なAEM統合）**状態：** 解決済み\**文書必須：** はい\**既存の DOCAC:** なし\**アクション：** DOCAC の作成

**範囲：**
- 高度なAEM統合におけるパーソナライゼーションフィールドのドキュメントサポート
- UI ワークフローと設定手順
- AEMの多言語統合機能

**機能の説明：**
高度なAEM統合を使用して配信にパーソナライゼーションフィールドを追加する機能のサポート。これにより、Campaign データからAEMが作成したメールテンプレートに動的コンテンツを挿入できます。

**コンテキスト：** ACS から ACC へのパリティ、MSFT 固有の要件

**参照：** [AEMの多言語 Wiki](https://wiki.corp.adobe.com/pages/viewpage.action?pageId=2988189953)

&#x200B;---

### [NEO-93487](https://jira.corp.adobe.com/browse/NEO-93487) – 配信スケジュール計算プロセス （ACS パリティ）**ステータス：** 新規\**文書必須：** はい\**既存の DOCAC:** なし\**アクション：** DOCAC の作成

**範囲：**
- プッシュ通知のドキュメント配信スケジュール計算プロセス
- タイムゾーンベースのスケジュール式
- マルチタイムゾーンターゲティングのためのファイルのアップロード

**機能の説明：**
受信者のタイムゾーンに基づいて送信時間を計算した OOTB ファイルベースの配信スケジュールを有効にすると、地域ごとの送信時間が最適化された、複数のタイムゾーンをまたいだ単一の配信ターゲティングが可能になります。

**コンテキスト：** 顧客主導（H&amp;M）、ACS から ACC へのパリティ要件

**参照：**&#x200B;[ACS ドキュメント &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-standard/using/testing-and-sending/scheduling-messages/computing-the-sending-date)

&#x200B;---

## 🔄 Update DOCAC

### [NEO-80973](https://jira.corp.adobe.com/browse/NEO-80973) – すべての Web UI ユーザーが動的レポートを利用できる&#x200B;**状態：** 進行中\**文書必須：** はい\**既存の DOCAC:** [DOCAC-11070](https://jira.corp.adobe.com/browse/DOCAC-11070) （クローズド）、[DOCAC-13432](https://jira.corp.adobe.com/browse/DOCAC-13432) （解決済み）\**アクション：** DOCAC のレビュー

**範囲：**
- 可用性情報を更新します（現在は、8.7 だけでなく、すべての web UI ユーザー用）。
- ドキュメント言語の制限
- 従来のレポートで表示される競合指標の明確さ

**機能の説明：**
すべての Campaign Web UI ユーザーが動的レポートを使用できるようになりました（以前は、ACS を ACC のお客様は 8.7 に制限）。ACS スタイルのインターフェイスを備えた高度な分析とカスタムレポート機能を提供します。

**コンテキスト：** 機能の拡張、バックエンドビルドの依存関係（8.8.1）

**参照：** [Wiki - レポートの比較 &#x200B;](https://wiki.corp.adobe.com/display/~kumarvishal/Reports+-+Client+console+vs+WebUI)

&#x200B;---

### [NEO-86754](https://jira.corp.adobe.com/browse/NEO-86754) - A/B テスト&#x200B;**状態：** 進行中\**文書必須：** はい\**既存の DOCAC:** [DOCAC-13104](https://jira.corp.adobe.com/browse/DOCAC-13104) （新規）\**アクション：** DOCAC の更新

**範囲：**
- A/B テストの完全なワークフロードキュメント
- コンテンツ実験のセットアップとバリアント設定
- サンプルの比率の定義と勝者選択条件
- 統計の収集と評価

**機能の説明：**
メール配信のコンテンツ実験と A/B テスト。マーケターは様々なコンテンツのバリエーションをテストし、サンプルサイズを定義して、パフォーマンス統計を収集し、勝者バリアントを残りの受信者に自動的に送信できます。

**コンテキスト：** Europa プロジェクト、Microsoft要件、機能フラグ有効

**参考文献：** [Wiki](https://wiki.corp.adobe.com/pages/viewpage.action?pageId=3017705719), [Figma mocks](https://www.figma.com/design/4EfXEaA6OIV0D8rauuXSWX/A-B-Testing)

&#x200B;---

### [NEO-76126](https://jira.corp.adobe.com/browse/NEO-76126) - スキーマオーサリング（新しいテーブルの作成、スキーマの拡張、外部 DB へのアクセス）**状態：** 進行中\**文書必須：** はい\**既存の DOCAC:** [DOCAC-13826](https://jira.corp.adobe.com/browse/DOCAC-13826) （新規）\**アクション：** DOCAC の更新

**範囲：**
- ドキュメントスキーマオーサリングワークフロー（3 つのオプションのみ：テーブルの作成、スキーマの拡張、外部 DB へのアクセス）
- カスタムエンティティのフォーム定義
- カスタムスキーマでのナビゲーションおよび CRUD 操作
- フェーズ 2 およびフェーズ 3 の機能

**機能の説明：**
Web UI のスキーマオーサリング機能により、管理者は、新しいデータベーステーブルの作成、カスタムフィールドを使用した既存のスキーマの拡張、外部データベースへの接続をおこなうことができます。これらはデータモデルのカスタマイズに不可欠です。

**コンテキスト：** Microsoft要件、Europa プロジェクト、段階的な配信（フェーズ 2 がアクティブ、フェーズ 3 は 2 月の終わり）

**参考資料：**&#x200B;[PRD](https://wiki.corp.adobe.com/pages/viewpage.action?spaceKey=neolane&title=AC+Web+UI+-+Schemas+PRD)、[Figma](https://www.figma.com/design/lZkJso2HvXPbNjG0TmQTrC/Schemas)

&#x200B;---

### [NEO-92668](https://jira.corp.adobe.com/browse/NEO-92668) - Web 分析&#x200B;**ステータス：** 新規\**文書必須：** はい\**既存の DOCAC:** なし\**アクション：** DOCAC の作成

**範囲：**
- Web 分析外部アカウントの設定
- 統合の設定と認証
- キャンペーンでの Analytics データ使用

**機能の説明：**
Web 分析の統合により、web 分析プラットフォームに接続して、キャンペーンのパフォーマンスと web サイトの訪問者行動に関するトラッキングとレポートを実行できます。

**コンテキスト：** 顧客リクエスト（P2E-RSC）、環境の可用性を保留中

**参照：** 指定なし

&#x200B;---

### [NEO-86753](https://jira.corp.adobe.com/browse/NEO-86753) - ライブコピー/言語コピー用のAEM統合&#x200B;**ステータス：** 新規\**文書必須：** はい\**既存の DOCAC:** [DOCAC-13829](https://jira.corp.adobe.com/browse/DOCAC-13829) （解決済み）\**アクション：** DOCAC のレビュー

**範囲：**
- AEM配信テンプレートの参照
- 1 回のクリックでライブコピーと言語コピーを作成
- 多言語コンテンツバリアント作成ワークフロー

**機能の説明：**
合理化されたAEM統合により、AEM配信テンプレートからライブコピーと言語コピーをワンクリックで作成できるので、AEM ユーザーは多言語キャンペーンを簡単に作成できます。

**背景：** Microsoft要件、ヒマンシュのチームに移管された作業

**参照：**&#x200B;[ACS ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-standard/using/integrating-with-adobe-cloud/working-with-campaign-and-experience-manager/creating-multilingual-email-aem.html)

&#x200B;---

### [NEO-88838](https://jira.corp.adobe.com/browse/NEO-88838) - コンテンツエディター：フラグメントでテーマ変数を使用します&#x200B;**ステータス：** 新規\**文書必須：** はい\**既存の DOCAC:** [DOCAC-12941](https://jira.corp.adobe.com/browse/DOCAC-12941) （新規）\**アクション：** DOCAC の更新

**範囲：**
- E メールデザイナー（Beta）のテーマ変数
- フラグメントでのテーマの使用
- Acrite 機能の有効化

**機能の説明：**
コンテンツフラグメント内でのテーマ変数の使用をサポートし、一元化されたテーマ管理でメールコンポーネント間で一貫したブランディングとデザインシステムアプリケーションを可能にします。

**コンテキスト：** 保留中、再度訪問する Acrite 機能

**参考資料：**&#x200B;[ATU-5460](https://jira.corp.adobe.com/browse/ATU-5460)

&#x200B;---

## ➕ DOCAC の作成（改善点）

### [NEO-92942](https://jira.corp.adobe.com/browse/NEO-92942) – 定義済みフィルター – 共有オプション&#x200B;**状態：** 解決済み\**文書必須：** はい\**既存の DOCAC:** [DOCAC-13697](https://jira.corp.adobe.com/browse/DOCAC-13697) （コードレビュー）、[DOCAC-13522](https://jira.corp.adobe.com/browse/DOCAC-13522) （クローズド – ヘルパー）\**アクション：** DOCAC のレビュー

**範囲：**
- 定義済みフィルターの共有オプション
- 他のオペレーターとの表示のフィルタリング（ACC vs ブランドジャーニー行動）
- 共有フィルターのユーザー管理

**機能の説明：**
定義済みフィルターを「共有」としてマークして、他のオペレーターに表示できるようになりました。ACC （デフォルト）とブランドジャーニー（ユーザー固有のフィルタリング）では動作が異なります。

**コンテキスト：** ルールビルダーの機能強化、機能フラグ：enable-query-filter-shared

**参考資料：**&#x200B;[NEO-88441](https://jira.corp.adobe.com/browse/NEO-88441) に関連

&#x200B;---

### [NEO-91299](https://jira.corp.adobe.com/browse/NEO-91299) – 連続配信アクティビティ&#x200B;**ステータス：** 終了\**文書必須：** はい\**既存の DOCAC:** [DOCAC-13586](https://jira.corp.adobe.com/browse/DOCAC-13586) （新規）、[DOCAC-13808](https://jira.corp.adobe.com/browse/DOCAC-13808) （クローズド – コンテキストヘルプ）\**アクション：** DOCAC の更新

**範囲：**
- 連続配信ワークフローアクティビティ
- 配信テンプレートピッカー設定
- 自動アウトバウンドトランジション生成
- ターゲティングオプション （コンテンツアクセスなし）

**機能の説明：**
ワークフローの連続配信アクティビティを使用すると、テンプレートから繰り返し配信を実行でき、コンテンツを変更せずにワークフローオーケストレーションのアウトバウンドトランジションを自動的に生成できます。

**コンテキスト：** 機能フラグ：連続配信の有効化

**参考資料：** 関連叙事詩 [NEO-67972](https://jira.corp.adobe.com/browse/NEO-67972)

&#x200B;---

### [NEO-90130](https://jira.corp.adobe.com/browse/NEO-90130) – 多言語プッシュ通知用の OOTB ファイルのアップロードを有効にします&#x200B;**ステータス：** 終了\**文書必須：** はい\**既存の DOCAC:** [DOCAC-13606](https://jira.corp.adobe.com/browse/DOCAC-13606) （新規）\**アクション：** DOCAC の更新

**範囲：**
- 多言語プッシュ通知用のファイルのアップロード（iOSおよびAndroid）
- CSV 形式とフィールドマッピング
- 多言語機能を備えたリッチなプッシュサポート

**機能の説明：**
CSV 読み込みによる多言語プッシュ通知配信を作成するための OOTB ファイルアップロード機能。ACS 機能と照合され、効率的な多言語キャンペーン設定が可能になります。

**コンテキスト：** 顧客主導（H&amp;M）、ACS から ACC へのパリティ、移行にとって重要

**参照：**&#x200B;[ACS ドキュメント &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-standard/using/communication-channels/push-notifications/generating-csv-multilingual-push)

&#x200B;---

## ❌ 取り消し/適用停止

### [NEO-91566](https://jira.corp.adobe.com/browse/NEO-91566) - webui でのCTA トラッキングのサポート&#x200B;**ステータス：** クローズ済み（適用されなくなりました）\**ドキュメントが必要：** いいえ\**既存の DOCAC:** [DOCAC-13821](https://jira.corp.adobe.com/browse/DOCAC-13821) （新規）\**アクション：** DOCAC を閉じる

**理由：** MSFT をサポートする新しい ACS 機能 – 開始されていません。MSFT からの情報は保留中です。UI は動作しません。

**コンテキスト：** Microsoft固有の、CTA トラッキング要件

&#x200B;---

### [NEO-91564](https://jira.corp.adobe.com/browse/NEO-91564) - AEM多言語 UI のサポート&#x200B;**ステータス：** クローズ済み（適用されなくなりました）\**ドキュメントが必要：** いいえ\**既存の DOCAC:** [DOCAC-13822](https://jira.corp.adobe.com/browse/DOCAC-13822) （新規）\**アクション：** DOCAC を閉じる

**理由：ヒマンシュのチームが運営する UI 作品（異説）**

**コンテキスト：** Microsoft要件、転送された作業

&#x200B;---

### [NEO-91567](https://jira.corp.adobe.com/browse/NEO-91567) - NRT 機能のサポートを追加&#x200B;**ステータス：** 解決済み（適用されなくなりました）\**ドキュメントが必要：** いいえ\**既存の DOCAC:** [DOCAC-13824](https://jira.corp.adobe.com/browse/DOCAC-13824) （新規）\**アクション：** DOCAC を閉じる

**理由：** MSFT の新しい ACS 固有の機能 – 仕様は使用できますが、web UI には影響しません

**コンテキスト：** Microsoft要件、トランザクションメッセージ

&#x200B;---

### [NEO-91563](https://jira.corp.adobe.com/browse/NEO-91563) - プロファイルベースのエンリッチメントのためのトランザクション Rest API&#x200B;**ステータス：** 解決済み（適用されなくなりました）\**ドキュメントが必要：** いいえ\**既存の DOCAC:** [DOCAC-13825](https://jira.corp.adobe.com/browse/DOCAC-13825) （新規）\**アクション：** DOCAC を閉じる

**理由：** Web UI が機能しません。アップグレードされたインスタンスが保留中です。リリースにはビルドのアップグレードが必須です

**コンテキスト：** REST API エンドポイント機能

&#x200B;---

### [NEO-92151](https://jira.corp.adobe.com/browse/NEO-92151) - プロファイルベースのエンリッチメントトランザクションメッセージフェーズ 2&#x200B;**ステータス：** 解決済み（適用されなくなりました）\**ドキュメントが必要：** いいえ\**既存の DOCAC:** [DOCAC-13823](https://jira.corp.adobe.com/browse/DOCAC-13823) （新規）\**アクション：** DOCAC を閉じる

**理由：** ストーリーにタスクがなく、「適用されません」とマークされています

**コンテキスト：** Microsoft要件、Europa プロジェクト

&#x200B;---

## 🟢 ドキュメントの準備完了（AC-UI-25-11 から）

### [NEO-90183](https://jira.corp.adobe.com/browse/NEO-90183) – 多言語リッチプッシュ - UI&#x200B;**ステータス：** 終了\**文書必須：** はい\**既存の DOCAC:** [DOCAC-13565](https://jira.corp.adobe.com/browse/DOCAC-13565) （新規）\**アクション：** DOCAC のレビュー

**範囲：**
- 多言語配信用のリッチなプッシュフィールド
- iOSとAndroidのプラットフォームサポート
- テンプレートとコンテンツの設定

**機能の説明：**
多言語機能を備えた高度なプッシュ通知のサポートにより、マーケターは、iOSとAndroidの両方に対して、画像、ボタン、リッチメディアを使用した多言語の強化されたプッシュ通知を作成できます。

**コンテキスト：** お客様主導（H&amp;M）、25 ～ 11 で提供、バックエンド作業を完了

**参考：** [Wiki](https://wiki.corp.adobe.com/pages/viewpage.action?spaceKey=neolane&title=Rich+push+fields+in+multilingual)

&#x200B;---

### [NEO-84916](https://jira.corp.adobe.com/browse/NEO-84916) – 承認プロセスの設定と管理&#x200B;**状態：** 解決済み\**文書必須：** はい\**既存の DOCAC:** [DOCAC-13827](https://jira.corp.adobe.com/browse/DOCAC-13827) （新規）\**アクション：** DOCAC の更新

**範囲：**
- 配信/キャンペーンでの検証オペレーターの設定
- 承認ワークフローの設定
- コンテンツとターゲットの承認プロセス
- マルチチャネルサポート（メール、SMS、プッシュ、ダイレクトメール、コールセンター、カスタム）

**機能の説明：**
承認プロセス管理：すべての配信チャネルにわたるオペレーターの割り当ておよび承認の追跡を使用した、配信コンテンツおよびターゲティングの検証ワークフローの有効化。

**コンテキスト：** お客様指向（Pierre Fabre）、Microsoft要件、開発完了、テスト中

**参考資料：**&#x200B;[Classic ドキュメント &#x200B;](https://experienceleague.adobe.com/en/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-approval)、[Figma mocks](https://www.figma.com/design/r2vpqXoVyI3aucKgkt8TLN/Approvals)

&#x200B;---

## アクショ 📊 別の概要

| アクション | カウント |
|--------|-------|
| 🟢 DOCAC の作成 | 3 |
| 🔄 Update DOCAC | 6 |
| ✅ レビュー DOCAC | 3 |
| ❌ DOCAC を閉じる | 5 |
| **合計** | **17** |

&#x200B;---

## ⚠️ 未解決の質問

1. NEO-93487 - H&amp;M エスカレーション – コンピューティングプロセスのスケジュールを設定する際に緊急の注意が必要
2. NEO-92668 - Web 分析 – ドキュメントを完成させる前に環境の可用性を待機
3. NEO-76126 - スキーマフェーズ 3 - ETA 2 月末、個別のドキュメントストーリーが必要
4. NEO-88838 - テーマ変数 – 保留中（アクライト機能のリビジョンが保留中）
5. 動的レポート – 従来のレポートで競合指標の表示ガイダンスを明確にします。

&#x200B;---

## 🔗 関連叙事詩

- NEO-85263 - ACS から ACC （EUROPA）の親エピック
- NEO-67972 - ワークフローの改善
- NEO-87980 - AEMの高度な統合
- NEO-90199 – 動的レポートリリースの対応
- NEO-63067 - コンテンツ実験 UX/UI
- NEO-67726 - A/B テストとコンテンツ実験
- NEO-85274 - スキーマとフォーム（フェーズ 2）
- NEO-87993 - スキーマとフォーム（フェーズ 3）
