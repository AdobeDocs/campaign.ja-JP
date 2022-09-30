---
title: Campaign と Twitter の連携
description: Campaign 環境を Twitter と統合する方法を学ぶ
role: User, Admin
level: Beginner, Intermediate
exl-id: 5523217a-b95f-4639-b941-52eb7d5a0203
source-git-commit: 2ce1ef1e935080a66452c31442f745891b9ab9b3
workflow-type: tm+mt
source-wordcount: '1137'
ht-degree: 61%

---

# Campaign と Twitter の連携{#tw-ac-ovv}

この&#x200B;**ソーシャルネットワーク管理（ソーシャルマーケティング）**&#x200B;モジュールを使用すると、Twitter を介して顧客とやり取りできます。この機能を使用すると、次のことができます。

* メッセージを投稿して DM を送信する — Adobe Campaign Social Marketing を使用して、Twitterにメッセージを投稿します。 フォロワー全員にダイレクトメッセージを送信することも可能です。

* 新しい連絡先の収集 - Adobe Campaign ソーシャルマーケティングを使用すると、新しい連絡先を簡単に取得できます。ユーザーに連絡して、プロファイル情報を共有してよいか尋ねます。ユーザーが同意すると、Adobe Campaign で情報が自動的に収集されます。これにより、キャンペーンのターゲティングを実行し、可能であればクロスチャネル戦略も導入できます。

![](../assets/do-not-localize/speech.png) Managed Cloud Services ユーザーとして Campaign を Twitter に接続する場合は、[アドビにお問い合わせ](../start/campaign-faq.md#support)ください。この  **ソーシャルネットワークの管理（ソーシャルマーケティング）** アドオンは、専用パッケージを使用してお使いの環境にインストールする必要があります。また、Twitter外部アカウントを設定する必要があります。


Twitter アカウントにツイートを投稿するように Adobe Campaign を設定するには、これらのアカウントの Adobe Campaign への書き込みアクセス権をデリゲートします。これをおこなうには、次の操作が必要です。

1. twitterアカウントを作成し、開発者アカウントに新規登録します。 [詳細情報](#dev-account)
1. （オプション）配達確認を送信するためのテスト用Twitterアカウントを作成します。 [詳細情報](#tw-test-account)
1. twitterアプリケーションを作成します (Twitterアカウントごとに 1 つのアプリ )。 [詳細情報](#create-an-app-on-twitter)
1. の新しいサービスを作成 **[!UICONTROL Twitter]** (Twitterアカウントごとに 1 つのサービス ) [詳細情報](#create-tw-service)
1. twitterアカウントを Campaign と同期します。 [詳細情報](#synchro-tw-accounts)

## Twitter開発者アカウント {#dev-account}

この統合を開始するには、 [Twitter開発者アカウント](https://developer.twitter.com){target=&quot;_blank&quot;}。

Campaign はTwitter API の 1.1 バージョンを使用します。 これを使用するには、開発者ポータルから管理者特権でのアクセスを申請する必要があります。 twitter Elevated Access の詳細 [このページ](https://developer.twitter.com/en/portal/products/elevated){target=&quot;_blank&quot;}。

## Twitter でのアプリケーションの作成 {#create-an-app-on-twitter}

Elevated アクセス権が付与されたら、Twitterアプリケーションを作成して、Adobe CampaignがTwitterアカウントにツイートを投稿できるようにします。 これを行うには、次の手順に従います。

1. Twitter アカウントにログオンします。
1. [Twitter 開発者ポータル](https://developer.twitter.com/en/apps)に接続します。
1. 「**アプリの作成**」を選択します。
1. Twitter アシスタントの指示に従ってプロセスを進めます。
1. Adobe Campaignが自分のアカウントにツイートを投稿できるようにするには、 **アプリの権限** アプリの「ユーザー認証の設定」セクションから。 選択 **読み取り、書き込み、ダイレクトメッセージ**.

   ![](assets/tw-permissions.png)

1. 内 **アプリのタイプ** セクション、選択 **Web アプリ、自動アプリ、ボット**. この **コールバック URL** フィールドが空の状態で、設定を保存します。

   ![](assets/tw-app-type.png)

1. アプリダッシュボードに戻り、アプリを選択して、 **キーとトークン** タブをクリックします。 の下 **アクセストークンとシークレット**( **読み取り、書き込み、ダイレクトメッセージ** 権限については、アプリのトークンと暗号鍵を再生成する必要があります。 すべてのキーとトークンは、作成時に保存する必要があります。 ユーザーが Campaign Twitterサービスを設定する必要があります。

   ![](assets/tw-permissions-check.png)


>[!NOTE]
>
>Twitter アカウントごとに 1 つのアプリケーションが必要です。その結果、別のテストアプリケーションを作成し、配達確認をテストアカウントに送信する必要があります。

## Campaign での Twitter サービスの作成 {#create-tw-service}

Campaign インスタンスを Twitter アカウントにリンクするには、 **Twitter** サービスを作成し、Campaign への書き込みアクセス権をデリゲートします。

>[!CAUTION]
>
>Twitter アカウントごとに 1 つの **Twitter** サービスを作成します。その結果、別のテストサービスを作成して、配達確認を [テストアカウント](#tw-test-account).
>
>各 **Twitter** サービスは、MID インスタンス上でAdobeによっても作成される必要があります。 環境の設定については、Adobe担当者にお問い合わせください。

設定を入力するには、Adobe CampaignコンソールとTwitterアプリケーションの権限の両方にアクセスする必要があります。

1.  **Adobe Campaign** で、「**[!UICONTROL プロファイルとターゲット]**」タブを参照し、「**[!UICONTROL サービスと購読]**」リンクを選択します。
1. 新しいサービスを作成します。
1. **[!UICONTROL Twitter]** タイプを選択します。
1. サービスのラベルおよび内部名を入力します。

   >[!CAUTION]
   >
   >サービスの&#x200B;**[!UICONTROL 内部名]**&#x200B;は、Twitter アカウントとまったく同じ名前である必要があります。

1. デフォルトでは、フォロワーは&#x200B;**[!UICONTROL 訪問者]**&#x200B;フォルダーに保存されます。「**[!UICONTROL 訪問者フォルダー]**」フィールドから別の場所を選択します。[詳細情報](../send/twitter.md#direct-tw-messages)

   ![](assets/tw-service-in-ac.png)

   >[!NOTE]
   >
   >この「**[!UICONTROL 購読を同期]**」オプションはデフォルトで有効になっています。このオプションは、Twitter のフォロワーのリストを自動的に復元し、[ダイレクトメッセージを送信](../send/twitter.md#direct-tw-messages)できるようにします。同期は[専用のテクニカルワークフロー](#synchro-tw-accounts)によって実行されます。

1. twitterアプリから、 **API キー** および **[API キー秘密鍵]** フィールドに貼り付け、 **[!UICONTROL 消費者キー]** および **[!UICONTROL 消費者秘密鍵]** キャンペーンのフィールド **Twitter** サービス。

1. Twitter アプリから、「**Access Token**」フィールドと「**Access Token Secret**」フィールドの内容をコピーし、Campaign **Twitter** サービスの「**[!UICONTROL アクセストークン]**」フィールドと「**[!UICONTROL アクセストークン秘密鍵]**」フィールドに貼り付けます。

1. Campaign クライアントコンソールで、「**[!UICONTROL 保存]**」をクリックします。これで、書き込みアクセス権が Adobe Campaign にデリゲートされました。

設定を確認するには、次の操作を実行します。

* を編集します。 **Twitter** 作成したサービス。
* 「**[!UICONTROL Twitter ページ]**」タブを参照します。Twitter アカウントが表示されます。
   ![](assets/tw-page.png)


## Twitter アカウントの同期 {#synchro-tw-accounts}

Campaign と Twitter 間の同期は、専用のテクニカルワークフローで管理されます。これらのワークフローは、**[!UICONTROL 管理／プロダクション／テクニカルワークフロー／ソーシャルネットワーク管理]**&#x200B;フォルダーに格納されます。

これらはデフォルトで停止されます。**ソーシャルマーケティング**&#x200B;モジュールを使用し始めるときは、手動で開始する必要があります。

この **[!UICONTROL twitterアカウントの同期]** テクニカルワークフローは、Adobe CampaignでTwitterアカウントを同期します。 このワークフローは、Twitter のフォロワーのリストを復元して、ダイレクトメッセージを送信できるようにします。[詳細情報](../send/twitter.md#direct-tw-messages)

デフォルトでは、このワークフローは毎週木曜日の午前 7:30 にトリガーされます。「**[!UICONTROL 保留中のタスクを今すぐ実行]**」オプションを使用して、この統合の実装時にいつでもワークフローを開始できます。スケジューラーを編集して、ワークフローのトリガー頻度を変更することもできます。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/flow-control-activities/approval.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

>[!CAUTION]
>
>Twitter サブスクライバーのリストを復元するには、アカウントにリンクされたサービスに対して、「**[!UICONTROL Twitter アカウントの同期]**」オプションをオンにする必要があります。[詳細情報](#create-tw-service)

フォロワーは、「訪問者」という特定のテーブルに格納されます。Twitter フォロワーのリストを表示するには、**[!UICONTROL プロファイルとターゲット／訪問者]**&#x200B;を参照します。

Adobe Campaign は、各フォロワーについて以下の情報を格納します。

* **[!UICONTROL 起源]**:Twitter
* **[!UICONTROL 外部 ID]**：ユーザー識別子
* **[!UICONTROL ユーザー名]**:ユーザーのアカウント名
* **[!UICONTROL フルネーム]**：ユーザーの名前
* **[!UICONTROL 友達の数]**：フォロワー数
* **[!UICONTROL 確認済み]**:このフィールドは、ユーザーが検証済みのTwitterアカウントを持っているかどうかを示します

設定が完了したら、Twitter アカウントにツイートを投稿し、フォロワーにダイレクトメッセージを送信できます。[詳細情報](../send/twitter.md)

## Twitter でのテストアカウントの作成 {#tw-test-account}

Twitter アカウントに加えて、[ツイートの配達確認](../send/twitter.md#send-tw-proofs)の送信に使用できる非公開 Twitter アカウントを作成します。これを行うには、次の手順に従います。

1. 新しい Twitter アカウントを作成します。
1. そのアカウントの&#x200B;**設定**&#x200B;にアクセスします。
1. 「**プライバシーと安全性**」および「**オーディエンスとタグ付け**」を参照し、「**ツイートの保護**」オプションをオンにします。ツイートやその他のアカウント情報は、フォロワーにのみ表示されます。

![](assets/social_tw_test_page.png)

上記のように、Twitterアプリと Campaign サービスを設定して、このテストアカウントと連携するようにします。
