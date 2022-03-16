---
title: Campaign と Twitter の連携
description: Campaign 環境をTwitterと統合する方法を説明します
feature: Overview
role: Data Engineer
level: Beginner
hidefromtoc: true
hide: true
exl-id: 5523217a-b95f-4639-b941-52eb7d5a0203
source-git-commit: 137dba3461a82621af7d2e5f54442bf87422ad47
workflow-type: tm+mt
source-wordcount: '975'
ht-degree: 28%

---

# Campaign と Twitter の連携{#tw-ac-ovv}

この **ソーシャルネットワークの管理（ソーシャルマーケティング）** モジュールを使用すると、Twitterを介して顧客とやり取りできます。 この機能を使用して、次のことができます。

* メッセージの送信 — Adobe Campaign Social Marketing を使用して、Twitterにメッセージを投稿します。 フォロワー全員にダイレクトメッセージを送信することも可能です。

* 新しい連絡先を収集 — Adobe Campaign Social Marketing を使用すると、新しい連絡先を簡単に獲得できます。ユーザーに連絡し、自分のプロファイル情報を共有したいかどうかを尋ねます。 ユーザーが同意すると、Adobe Campaign で情報が自動的に収集されます。これにより、キャンペーンのターゲティングを実行し、可能であればクロスチャネル戦略も導入できます。

![](../assets/do-not-localize/speech.png)  管理対象Cloud Servicesユーザーとして、 [連絡先Adobe](../start/campaign-faq.md#support) Campaign をTwitterに接続するには： この  **ソーシャルネットワークの管理（ソーシャルマーケティング）** モジュールは、専用パッケージを通じてお使いの環境にインストールする必要があります。


twitterアカウントにツイートを投稿するようにAdobe Campaignを設定するには、これらのアカウント用のAdobe Campaignへの書き込みアクセス権をデリゲートします。 手順は次のとおりです。

1. twitterアカウントの作成
1. 配達確認を送信するためのテスト用Twitterアカウントの作成
1. twitterアプリケーションの作成 (Twitterアカウントごとに 1 つのアプリ )
1. の新しいサービスを作成 **[!UICONTROL Twitter]** (Twitterアカウントごとに 1 つのサービス )

## Twitter でのテストアカウントの作成 {#tw-test-account}

twitterアカウントに加えて、送信に使用できるプライベートTwitterアカウントを作成します [配達確認をツイート](../send/twitter.md#send-tw-proofs). これは、次の手順に従って行います。

1. 新しい Twitter アカウントを作成します。
1. そのアカウントの&#x200B;**設定**&#x200B;にアクセスします。
1. 「**プライバシーと安全性**」および「**オーディエンスとタグ付け**」を参照し、「**ツイートの保護**」オプションをオンにします。ツイートやその他のアカウント情報は、フォロワーにのみ表示されます。

![](assets/social_tw_test_page.png)

## Twitter でのアプリケーションの作成 {#create-an-app-on-twitter}

twitterアプリを作成し、Adobe CampaignがTwitterアカウントにツイートを投稿できるようにします。  これは、次の手順に従って行います。

1. Twitter アカウントにログオンします。
1. 接続先 [Twitter developer portal](https://developer.twitter.com/en/apps).
1. 選択 **アプリの作成**.
1. twitterのアシスタントがプロセスをガイドします。

   Adobe Campaignが自分のアカウントにツイートを投稿できるようにするには、 **権限** 」タブをクリックし、 **読み取りと書き込み** の **アクセス** 」セクションに入力します。 また、「**Settings**」タブで、「**Callback URL**」フィールドを空のままにしておく必要があります。

   ![](assets/social_tw_app.png)

>[!NOTE]
>
>twitterアカウントごとに 1 つのアプリケーションが必要です。 その結果、別のテストアプリケーションを作成して、配達確認をテストアカウントに送信する必要があります。

## Campaign でのTwitterサービスの作成 {#create-tw-service}

Campaign インスタンスをTwitterアカウントにリンクするには、 **Twitter** サービスを使用し、書き込みアクセスを Campaign に委任します。

設定を入力するには、Adobe CampaignコンソールとTwitterアカウントの両方にアクセスする必要があります。

1. 開く **Twitter**、および [プロジェクトとアプリページ](https://developer.twitter.com/en/portal/projects-and-apps)、前に作成したアプリを選択します。 次にアクセス： **アプリの権限**.

   ![](assets/social_tw_service.png)

   「**キーとトークン**」タブを編集し、アプリの詳細にアクセスします。

1. In **Adobe Campaign**、 **[!UICONTROL プロファイルとターゲット]** 」タブで、 **[!UICONTROL サービスと購読]** リンク
1. 新しいサービスを作成します。
1. **[!UICONTROL Twitter]** タイプを選択します。

   >[!NOTE]
   >
   >この **[!UICONTROL 購読を同期]** オプションはデフォルトで有効です。このオプションは、Twitterのフォロワーのリストを自動的に復元し、 [ダイレクトメッセージを送信](../send/twitter.md#direct-tw-messages). 同期は [専用のテクニカルワークフロー](#synchro-tw-accounts).

1. サービスのラベルおよび内部名を入力します。

   >[!CAUTION]
   >
   >この **[!UICONTROL 内部名]** のサービスは、Twitterアカウントと完全に同じ名前にする必要があります。 設定を確認するには、次の操作を実行します。

   * 「**[!UICONTROL 保存]**」ボタンをクリックします。
   * サービスの概要で、 **Twitter** 作成したサービス。
   * 次を参照： **[!UICONTROL Twitterページ]** タブ：twitterアカウントが表示されます。

1. デフォルトでは、フォロワーは&#x200B;**[!UICONTROL 訪問者]**&#x200B;フォルダーに保存されます。別の場所を **[!UICONTROL 訪問者フォルダー]** フィールドに入力します。 [詳細情報](../send/twitter.md#direct-tw-messages)

1. twitterアプリから、 **[!UICONTROL 消費者キー（API キー）]** および **[!UICONTROL 消費者の秘密鍵（API の秘密鍵）]** フィールドに貼り付け、 **[!UICONTROL 消費者キー]** および **[!UICONTROL 消費者秘密鍵]** キャンペーンのフィールド **Twitter** サービス。

1. twitterアプリから、 **[!UICONTROL アクセストークン]** および **[!UICONTROL アクセストークン秘密鍵]** フィールドに貼り付け、 **[!UICONTROL アクセストークン]** および **[!UICONTROL アクセストークン秘密鍵]** キャンペーンのフィールド **Twitter** サービス。

1. Campaign クライアントコンソールで、「**[!UICONTROL 保存]**」をクリックします。これで、書き込みアクセス権が Adobe Campaign にデリゲートされました。


>[!NOTE]
>
>作成 **Twitter** twitterアカウントごとのサービス。 その結果、別のテストサービスを作成して、配達確認をテストアカウントに送信する必要があります。

## twitterアカウントを同期 {#synchro-tw-accounts}

Campaign とTwitter間の同期は、専用のテクニカルワークフローで管理されます。 これらのワークフローは、 **[!UICONTROL 管理/プロダクション/テクニカルワークフロー/ソーシャルネットワーク管理]** フォルダー。

これらはデフォルトで停止されます。を使用し始めるときは、手動で開始する必要があります **ソーシャルマーケティング** モジュール。

この **[!UICONTROL Twitterアカウントの同期]** テクニカルワークフローは、Adobe CampaignでTwitterアカウントを同期します。 twitterのフォロワーのリストを復元して、ダイレクトメッセージを送信できるようにします。 [詳細情報](../send/twitter.md#direct-tw-messages)

デフォルトでは、このワークフローは毎週木曜日の午前 7 時 30 分にトリガーされます。以下を使用して、 **[!UICONTROL 保留中のタスクを今すぐ実行]** オプションを使用して、この統合の実装時にいつでもワークフローを開始できます。  スケジューラーを編集して、ワークフローのトリガー頻度を変更することもできます。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/flow-control-activities/scheduler.html){target=&quot;_blank&quot;}を参照してください。

>[!CAUTION]
>
>twitter購読者のリストを復元するには、 **[!UICONTROL Twitterアカウントの同期]** アカウントにリンクされたサービスに対して、「 」オプションをオンにする必要があります。 [詳細情報](#create-tw-service)

フォロワーは、特定のテーブルに格納されます。「訪問者」テーブル。 twitterのフォロワーのリストを表示するには、 **[!UICONTROL プロファイルとターゲット/訪問者]**.

Adobe Campaignでは、各フォロワーに対して次の情報が保存されます。

* **[!UICONTROL 起源]**:ソーシャルネットワークの名前 (Twitter)
* **[!UICONTROL 外部 ID]**：ユーザー識別子
* **[!UICONTROL ユーザー名]**：ユーザーのアカウント名
* **[!UICONTROL フルネーム]**：ユーザーの名前
* **[!UICONTROL 言語]**：ユーザーの言語
* **[!UICONTROL 友達の数]**：フォロワー数
* **[!UICONTROL タイムゾーン]**：ユーザーのタイムゾーン
* **[!UICONTROL 検証済み]**：ユーザーが検証済みの Twitter アカウントを持っているかを示すフィールド

設定が完了したら、Twitterアカウントにツイートを投稿し、フォロワーにダイレクトメッセージを送信できます。 [詳細情報](../send/twitter.md)
