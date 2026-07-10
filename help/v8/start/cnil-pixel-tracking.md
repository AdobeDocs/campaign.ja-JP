---
title: メールトラッキングピクセルと CNIL ガイダンス
description: メール追跡ピクセルに関するCNILの最新のガイダンスと、コンプライアンスの取り組みをサポートできるAdobe Campaign機能について理解する。
version: Campaign v8, Campaign Classic v7
hide: true
source-git-commit: 6466434e6d91445dd12a81effde68d8ab6ba8960
workflow-type: tm+mt
source-wordcount: '849'
ht-degree: 3%

---


# メール追跡ピクセルに関するCNILの最新のガイダンスについて

この記事は、情報提供のみを目的としています。 法的アドバイスではなく、適用法の遵守を保証するものではありません。 以下に説明するAdobe Campaign製品の機能は、適切に設定および操作されたビルディングブロックであり、コンプライアンスの実装をサポートする場合があります。 各顧客は、適用法に基づく義務を決定し、遵守する責任があります。

## 概要

2026年4月14日、フランスのデータ保護機関である&#x200B;_Commission nationale de l&#39;informatique et des libertés_ （CNIL）は、メール内でのトラッキングピクセルの使用に関する[の推奨事項](https://www.cnil.fr/sites/default/files/2026-04/recommandation-pixels_de_suivi.pdf)を公開しました。 このガイダンスでは、同意が必要なタイミングを明確にし、メールのピクセル追跡における適切な同意管理の重要性を強調しています。 このポリシーは、フランスに拠点を置く購読者にメールを配信するエンティティの送信方法に影響を与える可能性があります。

CNILは、企業がトラッキングピクセルの存在、目的、およびユーザーのオプトアウト権をメール受信者（「ユーザー」）に通知するための推奨日から3か月間を提供しました。 この移行期間中、顧客はユーザーにピクセルトラッキングについて通知し、必要に応じてオプトアウトを提供することが期待されます。 CNILは、2026年7月14日以降に強制執行活動を開始する予定です。

CNILや他の規制当局がピクセルのトラッキングや関連する問題に関するガイダンスを明確にするため、Adobeは引き続きアップデートをモニターし、Adobe Campaignを含むメールマーケティングをサポートするAdobe製品の技術的能力をお客様に通知します。

Adobe Journey Optimizer、Journey Optimizer B2B、Adobe Campaign、Marketo EngageなどのAdobeの電子メールマーケティング実行アプリケーションには、配信レベルや電子メールレベルでオープントラッキングを管理するためのコントロールが備わっています。 顧客は、適用されるCNIL ガイダンスやその他の法律に基づいて独自のコンプライアンス義務を決定する責任を負いますが、これらの機能は顧客コンプライアンスの取り組みをサポートする可能性があります。

## メールトラッキングピクセルとは

電子メールトラッキングピクセルは、電子メールのHTMLに埋め込まれた1x1の透明画像です。 受信者のメールクライアントがその画像を読み込むと、ピクセルはタイムスタンプ、デバイスの種類、メールクライアント、場合によってはIP アドレスなどのデータを記録するサーバーにping送信し、おおよその場所を確認します。 その後、そのログは受信者のレコードに関連付けられ、マーケターはメールが開封されたかどうかを確認できます。

## カスタマーサポート

上記の変更の導入についてサポートを求めるお客様は、既存のAdobe エコシステムを利用できます。 参照されているAdobe機能に関する技術的な質問については、カスタマーサクセスマネージャーまたはテクニカルアカウントマネージャーにお問い合わせください。

## メールトラッキングに関連するAdobe Campaign機能

お客様は、Adobe Campaignのネイティブ トラッキング、スキーマ、パーソナライゼーションの仕組みを使用して、CNIL ガイダンスに対応するアーキテクチャを設定する際に特定の要素に対処できます。

* **配信の分類。** `nms:delivery`を`emailType`属性（認証、配信品質のみ、トランザクション、マーケティング、パブリックサービス、B2B見込み顧客）で拡張します。 この分類により、同意なしに許可されるピクセルが決まります。

* **同意キャプチャ。** ワーディングのバージョン、タイムスタンプ、キャプチャソース、および有効期限を含む、目的ごとの同意構造で`nms:recipient`を拡張します。 サインアップフォームとプリファレンスセンターを拡張して、メールオプトインとは別にピクセル同意を収集します。

* **ピクセルの放出。** ピクセルごとに1つの`NmsTracking_OpenFormula`を定義します（認証、配信品質、パフォーマンス、プロファイリング、不正検出）。 配信タイポロジルールは、emailTypeと受信者の目的ごとの同意に基づいて、出力する数式を選択します。 パーソナライゼーションブロックはロジックをカプセル化し、個々のクリエイターには存在しないようにします。

* **引き出し。** 登録解除リンクとは異なり、すべてのメールフッターに&#x200B;**トラッカー設定の管理** リンクを追加します。 このリンクは、`idTracking`を通じて認証された`nms:webApp`のランディングページを示しています。受信者は、電子メールアドレスを再入力することなく、ワンクリックで同意を取り消します。 標準の&#x200B;**トラッキング** ワークフローに追加されたフィルターステップにより、以前に配信されたメールの再開封が離脱後に悪用されるのを防ぐことができます。

* **同意確認。** 追加専用ログ（例えば、`pix:consentLog`拡張機能の名前空間）内の各同意イベントをキャプチャし、文言の変更後の検索可能性のために文言バージョンを別々に保存します。 Adobe Campaign エクスプローラーを介して、定期的な書き出しとしてログを表示します。
* **再勧誘ガバナンス。** `lastPixelRefusalDate` フィールドとフィルタリングタイポロジルールは、拒否後の少なくとも6か月間の再勧誘を防ぎます。 定期的なワークフローは、同意の有効期限の管理に役立ちます。

* **レポート。** 既存のAdobe Campaign レポートは、コードを変更することなく、新しいフィールド（urlCategory、emailType、同意フラグ）に対して引き続き動作します。

Adobeのメールマーケティング実行アプリケーションでの電子メールトラッキングについて詳しくは、こちらのドキュメントを参照してください。

| 製品 | ドキュメント参照 |
|---|---|
| Campaign v8 | [&#x200B; メッセージトラッキング &#x200B;](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/analytics/tracking/url-tracking){target="_blank"} |
| Campaign Classic | [&#x200B; メッセージの追跡を開始する](https://experienceleague.adobe.com/en/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-message-tracking){target="_blank"} |
| Campaign Standard | [電子メール チャネルの設定](https://experienceleague.adobe.com/en/docs/campaign-standard/using/administrating/configuring-channels/configuring-email-channel){target="_blank"} |
| Journey Optimizer | [&#x200B; メッセージ追跡ドキュメント &#x200B;](https://experienceleague.adobe.com/en/docs/journey-optimizer/using/channels/email/design-email/add-content/message-tracking){target="_blank"} |
| Marketo Engage | [電子メールリンクのトラッキングを無効にする](https://experienceleague.adobe.com/en/docs/marketo/using/product-docs/email-marketing/general/functions-in-the-editor/disable-tracking-for-an-email-link){target="_blank"} |
| Journey Optimizer B2B | [&#x200B; メール設定ドキュメント &#x200B;](https://experienceleague.adobe.com/en/docs/journey-optimizer-b2b/user/journey-content/email-channel/add-email){target="_blank"} |


