---
title: Campaign v8 リリースノート
description: Campaign v8 最新リリース
feature: Overview
role: Admin, Developer, User
level: Beginner, Intermediate, Experienced
hidefromtoc: false
exl-id: 7cf8111d-9f3a-46a4-813a-d4e43a1d1471
source-git-commit: 814f7c81aa4f154fdf289effc82b8d02bdd9b4c6
workflow-type: tm+mt
source-wordcount: '521'
ht-degree: 91%

---

# 最新リリース{#latest-release}

このページには、**Campaign v8 最新リリース**&#x200B;の新機能、改善点およびバグ修正が記載されています。

## リリース 8.4.4 {#release-8-4-4}

_2023 年 3 月 9 日_

**セキュリティの強化**

* Tomcat は、セキュリティを強化するために、バージョン 8.5.81 から 8.5.85 に更新されました。 （NEO-50530）

**パッチ**

* をスクロールできない場合がある問題を修正しました。 **編集** 」タブをクリックします。 （NEO-54474）
* Web サーバーがクラッシュする可能性があるレプリケーション中の問題を修正しました。 （NEO-53670）


>[!CAUTION]
>
> コンソールのアップグレードは必須です。クライアントコンソールのアップグレード方法について詳しくは、こちらの[ページ](../start/connect.md#upgrade-ac-console)を参照してください。


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


>[!CAUTION]
>
> コンソールのアップグレードは必須です。クライアントコンソールのアップグレード方法について詳しくは、こちらの[ページ](../start/connect.md#upgrade-ac-console)を参照してください。
