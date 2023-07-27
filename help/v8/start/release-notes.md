---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Overview
role: Admin, Developer, User
level: Beginner, Intermediate, Experienced
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 32d0264c03eb4ec6ab1959d0a66be78c06a0dccb
workflow-type: tm+mt
source-wordcount: '1455'
ht-degree: 90%

---

# 最新リリース{#latest-release}

Adobe Campaign は定期的にアップデートされています。この定期的なアップデートは、環境の安全性を維持し、アドビの製品に対するエクスペリエンスを向上させ、最新かつ最大限の情報を手に入れることを目的としています。アドビでは、すべてのお客様に最新バージョンにアップグレードすることを強くお勧めします。

 Managed Cloud Services ユーザーの場合は、新しいリリースが出るたびにアドビがインスタンスをアップグレードします。アドビがお客様にご連絡し、環境をアップグレードします。Campaign クライアントコンソールは、Campaign サーバーと&#x200B;**同じバージョンにアップグレードする必要があります**。クライアントコンソールのアップグレード方法について詳しくは、こちらの[ページ](../start/connect.md#upgrade-ac-console)を参照してください。

また、[互換性マトリックス](compatibility-matrix.md)にリストされているシステムのサポートされている最新バージョンを使用していることも確認してください。

## リリース 8.5.1 {#release-8-5}

_2023年6月30日（PT）_


**プッシュ通知サービスの強化**

Campaign v8.5.1 では、最新の最先端テクノロジーに基づいて作成された堅牢なフレームワークを活用した、最新のプッシュ通知サービスが導入されています。このサービスは、新しいレベルのスケーラビリティを実現するように設計されており、シームレスな効率でより多くのオーディエンスに通知を届けることができます。インフラストラクチャの強化とプロセスの最適化により、より高いスケールと信頼性が期待でき、これまでにない方法でモバイルアプリユーザーと関わり、つながりを持てるようになります。 この機能は、選択されたお客様のグループのみが使用できます（限定提供）。

詳しくは、[詳細なドキュメント](../send/push-data-collection.md)を参照してください。


**モバイルチャネルのスループット数の増加**

<!--
The newly introduced Push notification service showcases significant improvements in throughput for both Push Android and Push iOS compared to our previous version (v8.4). Users will experience notably enhanced performance with the upgraded service in the latest version (v8.5).

* Push Notifications (Android): up to **5x** faster
* Push Notifications (iOS): up to **2.2x** faster

SMS throughput has undergone substantial enhancements through a series of optimizations, resulting in notable improvements in speed and efficiency for SMS communication. These upgrades have led to increased throughput from the previous version (v8.4) to the latest version (v8.5), encompassing both sending and feedback updates. Users can now experience the benefits of this enhanced SMS service.</p>

* SMS throughput: up to **5x** faster

These max throughput performances have been measured by Adobe testing teams, in lab conditions.
-->

<table style="table-layout:fixed" text-align="bottom"><tr style="border: 0;">
<td>
<img alt="スループットの向上" src="../start/assets/do-not-localize/improvements.jpeg">
<p>
</td>
<td>
<div>

<p>新しく導入されたプッシュ通知サービスは、以前のバージョン (v8.4) と比較して、プッシュ Android とプッシュiOSの両方のスループットが大幅に改善されました。 最新バージョン (v8.5) のアップグレードされたサービスでは、パフォーマンスが大幅に向上します。 </p>
<ul>
<li>プッシュ通知 (Android)：最大 <strong>5 倍</strong> より速い </li>
<li>プッシュ通知 (iOS)：最大 <strong>2.2 倍</strong> より速い</li>
</ul>
<p>SMS スループットは、一連の最適化によって大幅に強化され、SMS 通信の速度と効率が大幅に向上しました。 これらのアップグレードにより、送信とフィードバックの更新の両方を含め、以前のバージョン (v8.4) から最新バージョン (v8.5) へのスループットが向上しました。 これで、この拡張 SMS サービスの利点を体験できます。</p>
<ul>
<li>SMS スループット：最大 <strong>5 倍</strong> より速い</li>
</ul>
<p><em>これらの最大スループットパフォーマンスは、Adobeテストチームがラボ条件で測定しました。</em></p>
</div>
<p></p>
</td>
</tr></table>


**一般的な機能強化**

* Adobe Experience Platform 宛先接続を活用して、Adobe Experience Platform と Campaign v8 データベースの間でオプトアウトデータなどのプロファイル属性を同期できるようになりました。
* 配信の準備が、すべてのチャネルにわたって最適化されました。
* 既存のユーザー／パスワード認証方法と共に、新しいキーベースの認証オプションを SFTP 外部アカウントに追加しました。ユーザーは秘密鍵を使用して安全に認証できるようになりました。これにより、セキュリティが強化され、SFTP アクセス用の代替認証メカニズムが提供されます。詳しくは、[こちら](../config/external-accounts.md)を参照してください。

**セキュリティ機能の強化**

* Campaign v8.5.1 以降、Campaign v8 への認証プロセスが改善されました。テクニカルオペレーターは、Adobe Identity Management System（IMS）を使用して Campaign に接続する必要があります。既存のテクニカルアカウントを移行する方法については、[このテクニカルノート](../../technotes/upgrades/ims-migration.md)を参照してください。
* Campaign クライアントコンソールからオペレーターを作成できなくなりました。それに応じてユーザーインターフェイスが更新されました。現在は、Adobe Admin Console を使用する必要があります。[詳細情報](../start/gs-permissions.md)
* セキュリティを最適化するために、複数のサードパーティツールを更新しています。

**互換性の更新**

* クライアントコンソールの 32 ビットバージョンは、非推奨（廃止予定）となりました。8.6 以降、クライアントコンソールは 64 ビットでのみ使用できます。クライアントコンソールの 64 ビットバージョンへのアップグレードはシームレスです。オペレーティングシステムのアップグレード方法について詳しくは、この[テクニカルノート](../../technotes/upgrades/console.md)を参照してください。
* Campaign v8 インスタンスを Azure Synapse 外部データベースに接続できるようになりました。この接続は、新しい外部アカウントで管理します。詳しくは、[Campaign 互換性マトリックス](../start/compatibility-matrix.md#federated-data-access-fdafederateddataaccessfda)を参照してください。


**パッチ**

* 複数のブラウザーで配信の HTML コンテンツ内の特殊文字が誤ってエンコードされる可能性がある問題を修正しました。（NEO-60081）
* Campaign v8 Enterprise（FFDA）デプロイメントでレポートを保存できない可能性がある問題を修正しました。（NEO-56836）
* データ更新ワークフローアクティビティを通じてカスタム FFDA スキーマにデータを挿入または更新する際の問題を修正しました。（NEO-54708）
* データベースクリーンアップワークフローで、FFDA の nms:address テーブル内のアドレスを削除できない問題を修正しました。（NEO-54460）
* 「コンパイルメモリが使い果たされました」というエラーで失敗する可能性がある請求ワークフローの問題を修正しました。（NEO-51137）
* データ読み込み（ファイル）ワークフローアクティビティで、GPG 復号化が正しく動作しない可能性がある問題を修正しました。（NEO-50257）
* `JSPContext.sqlExecWithOneParam` 関数が機能しない問題を修正しました。（NEO-50066）
* パーソナライゼーションフィールドで印刷不可能な文字を使用すると、配信エラーが発生する問題を修正しました。（NEO-48588）
* Adobe Target の動的画像を挿入する際に、配信エラーが発生する可能性がある問題を修正しました。（NEO-62689）
* 配信で条件付きコンテンツを使用する際に、ブラウザーで余分なスペースを追加できない問題を修正しました。（NEO-62132）
* メールコンテンツエディターで画像をクリックすると、ポップアップウィンドウが開く問題を修正しました。（NEO-60752）
* 配信のコンテンツを編集する際にエラーが発生し、スクロールできなくなる可能性がある問題を修正しました。（NEO-61364）
* Adobe Analytics コネクタで、正しいチャネルタイプを使用して指標を書き出すようになりました。以前は、常に「メール」チャネルとして設定されていました。（NEO-26340）
* 日時フィールドで Big Query コネクタを使用する際にエラーが発生する可能性がある問題を修正しました。（NEO-49768）


## リリース 8.4.5 {#release-8-4-5}

_2023年4月3日（PT）_

**パッチ**

* 複数の承認ワークフローが同じスケジュールに設定されている場合に、キー制約が重複するエラーが発生する可能性がある問題を修正しました。（NEO-48968）
* デジタルコンテンツエディター（DCE）で画像をアップロードする際に、本文タグのスタイル属性が変更される NEO-54474（8.4.4）で導入されたリグレッションの問題を修正しました。（NEO-57697）
* 一時テーブルに uuid ではなく long として定義されたプライマリキーがある場合、CRM コネクタを使用してデータをエクスポートする際にエラーが発生する可能性がある問題を修正しました。（NEO-54153）
* パッケージのエクスポート、FDA over HTTP およびレポートでエラーが発生する可能性がある、 8.4.1 で導入されたリグレッションの問題を修正しました。（NEO-57731）
* 負の ID を持つ配信のステータスが正しく更新されない可能性がある、8.3.8 で導入されたリグレッションの問題を修正しました。（NEO-54675）
* Big Query コネクタを使用してデータをインポートする際のブール値フィールドの問題を修正しました（NEO-49181）


## リリース 8.4.4 {#release-8-4-4}

_2023年3月8日（PT）_

**セキュリティの強化**

* Tomcat は、セキュリティを強化するために、バージョン 8.5.81 から 8.5.85 に更新されました。 （NEO-50530）

**パッチ**

* デジタルコンテンツエディター（DCE）の「**編集**」タブでスクロールできない問題を修正しました。（NEO-54474）
* Web サーバーのクラッシュを引き起こす可能性があるレプリケーション中の問題を修正しました。（NEO-53670）


## リリース 8.4.3 {#release-8-4-3}


_2023年1月27日（PT）_

**改善点**

* マーケティングサーバーとミッドソーシングサーバーの間の配信達成度の同期の問題を修正しました。（NEO-50724）<!--OKKKK-->
* ワークフローのエクスポート時にエラーが発生する可能性がある問題を修正しました。 （NEO-50555）<!--OKKKK-->
* 以前に拡張されたスキーマを拡張する際の問題を修正しました。（NEO-49118）<!--OKKKK-->
* リンク定義で同じ識別子を持つ 2 つのエンリッチメントアクティビティを使用した際の問題を修正しました。（NEO-48851）
* 配信準備の失敗に関する 2 つの問題を修正しました。 操作される潜在的なオファーの数が多すぎる場合、配信の準備に失敗する可能性があります。2 つ目の問題は、画像 URL がテキスト形式の配信で追跡する URL として定義されている場合に発生していました。（NEO-48807）<!--OKKKK-->
* ワークフローが、FFDA 以外のアカウントの外部アカウントで定義されたウェアハウス名を上書きする場合に、ワークフローエラーが発生する可能性がある問題を修正しました。（NEO-43209）<!--OKKKK-->
* DDoS 攻撃を防ぐため、web アプリケーションのセキュリティを改善しました。 （NEO-50757）<!--OKKKK-->
* **[!UICONTROL 統合されたトラッキング]**（nms:trackingStats）FFDA テーブルで統合されたトラッキングデータの管理を改善し、重複を回避しました。 （NEO-46409）
* 論理演算子条件で `enableIf` を使用する場合の、ワークフロークエリの論理演算子の問題を修正しました。以前の論理条件を上書きしました。（NEO-45815）<!--OKKKK-->
* パフォーマンスを向上させるために、請求ワークフローでのアクティブなプロファイルの生成を最適化しました。（NEO-47658）<!--OKKKK-->
* 画像ノード（img）にパーソナライゼーションフィールドを含む URL が含まれている場合の HTML ファイルの読み込みに関する問題を修正しました。 （NEO-48396）
* **分割**&#x200B;ワークフローアクティビティで並べ替えパラメーターを使用する場合の、Snowflake（すべてのデプロイメント）の問題を修正しました。 （NEO-45899）<!--OKKKK-->
* nmsDeliveryMapping フォルダーの読み取りアクセス権を持つユーザーがキャンペーンまたはワークフローを実行しようとするとエラーが発生する問題を修正しました。 （NEO-48230）
* 配信の「HTML」タブで、大きな HTML コードで発生する可能性があるパフォーマンスの問題を修正しました。 （NEO-47440）
<!-- * Fixed an issue which could lead to a "Character set mismatch" error when using certain functions such as `to_nclob` with an Oracle unicode database where NChar was not enabled. (NEO-49361)
* Fixed an issue which prevented users from inserting a Time datatype in a **Data Update** workflow activity on MSSQL. (NEO-47763)-->
* ユーザーが&#x200B;**選択した行を結合**&#x200B;ワークフローオプションを使用できない問題を修正しました。（NEO-48488）
* Snowflake FDA コネクタの問題を修正しました。エンリッチメント中に「0 または 1 の基数単純結合」を使用すると、レコードが削除されていました。（NEO-48737）
* log4j ライブラリへの残りの参照は、Windows での Campaign インストールから削除されました。 （NEO-44851）
* **クエリ**&#x200B;ワークフローアクティビティの追加データに&#x200B;**開封した受信者**（estimatedRecipientOpen）インジケーターを追加すると、エラーが発生する場合がある問題を修正しました。（NEO-46665）
* パフォーマンスを向上させるために、複数の配信を含むワークフローでのトラッキング URL の管理を改善しました。（NEO-50894）<!--OKKKK-->
* Xtkfolder を使用するスキーマのレプリケーションが失敗する可能性がある問題を修正しました。 （NEO-46787）<!--OKKKK-->
* 「lastModified」カスタム列が NmsSubscription テーブルにドロップされる問題を修正しました。（NEO-48402）


