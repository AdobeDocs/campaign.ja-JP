---
title: Campaign と Twitter の連携
description: Campaign 環境を Twitter と統合する方法を学ぶ
feature: Overview
role: Data Engineer
level: Beginner
hide: true
hidefromtoc: true
exl-id: 5523217a-b95f-4639-b941-52eb7d5a0203
source-git-commit: 6de5c93453ffa7761cf185dcbb9f1210abd26a0c
workflow-type: tm+mt
source-wordcount: '975'
ht-degree: 100%

---

# Campaign と Twitter の連携{#tw-ac-ovv}

この&#x200B;**ソーシャルネットワーク管理（ソーシャルマーケティング）**&#x200B;モジュールを使用すると、Twitter を介して顧客とやり取りできます。この機能を使用すると、次のことができます。

* メッセージの送信 - Adobe Campaign のソーシャルマーケティングを使用して、Twitter でメッセージを投稿します。フォロワー全員にダイレクトメッセージを送信することも可能です。

* 新しい連絡先の収集 - Adobe Campaign ソーシャルマーケティングを使用すると、新しい連絡先を簡単に取得できます。ユーザーに連絡して、プロファイル情報を共有してよいか尋ねます。ユーザーが同意すると、Adobe Campaign で情報が自動的に収集されます。これにより、キャンペーンのターゲティングを実行し、可能であればクロスチャネル戦略も導入できます。

![](../assets/do-not-localize/speech.png) Managed Cloud Services ユーザーとして Campaign を Twitter に接続する場合は、[アドビにお問い合わせ](../start/campaign-faq.md#support)ください。この&#x200B;**ソーシャルネットワーク管理（ソーシャルマーケティング）**&#x200B;モジュールは、専用パッケージを通じてお使いの環境にインストールする必要があります。


Twitter アカウントにツイートを投稿するように Adobe Campaign を設定するには、これらのアカウントの Adobe Campaign への書き込みアクセス権をデリゲートします。手順は次のとおりです。

1. Twitter アカウントを作成します
1. 配達確認を送信するためのテスト用 Twitter アカウントを作成します
1. Twitter アプリケーション（Twitter アカウントごとに 1 つのアプリ）を作成します
1. **[!UICONTROL Twitter]** の新しいサービス（Twitter アカウントごとに 1 つのサービス）を作成します

## Twitter でのテストアカウントの作成 {#tw-test-account}

Twitter アカウントに加えて、[ツイートの配達確認](../send/twitter.md#send-tw-proofs)の送信に使用できる非公開 Twitter アカウントを作成します。これを行うには、次の手順に従います。

1. 新しい Twitter アカウントを作成します。
1. そのアカウントの&#x200B;**設定**&#x200B;にアクセスします。
1. 「**プライバシーと安全性**」および「**オーディエンスとタグ付け**」を参照し、「**ツイートの保護**」オプションをオンにします。ツイートやその他のアカウント情報は、フォロワーにのみ表示されます。

![](assets/social_tw_test_page.png)

## Twitter でのアプリケーションの作成 {#create-an-app-on-twitter}

Twitter アプリケーションを作成し、Adobe Campaign が Twitter アカウントにツイートを投稿できるようにします。これを行うには、次の手順に従います。

1. Twitter アカウントにログオンします。
1. [Twitter 開発者ポータル](https://developer.twitter.com/en/apps)に接続します。
1. 「**アプリの作成**」を選択します。
1. Twitter アシスタントの指示に従ってプロセスを進めます。

   Adobe Campaign が自分のアカウントにツイートを投稿できるようにするには、アプリケーションの「**権限**」タブを編集し、「**アクセス**」セクションで「**読み取りおよび書き込み**」を選択します。また、「**設定**」タブで、「**コールバック URL**」フィールドを空のままにしておく必要があります。

   ![](assets/social_tw_app.png)

>[!NOTE]
>
>Twitter アカウントごとに 1 つのアプリケーションが必要です。その結果、別のテストアプリケーションを作成し、配達確認をテストアカウントに送信する必要があります。

## Campaign での Twitter サービスの作成 {#create-tw-service}

Campaign インスタンスを Twitter アカウントにリンクするには、 **Twitter** サービスを作成し、Campaign への書き込みアクセス権をデリゲートします。

設定を入力するには、Adobe Campaign コンソールと Twitter アカウントの両方にアクセスする必要があります。

1. **Twitter** を開き、[プロジェクトとアプリページ](https://developer.twitter.com/en/portal/projects-and-apps)から、前に作成したアプリを選択します。「**アプリの権限**」にアクセスします。

   ![](assets/social_tw_service.png)

   「**キーとトークン**」タブを編集し、アプリの詳細にアクセスします。

1.  **Adobe Campaign** で、「**[!UICONTROL プロファイルとターゲット]**」タブを参照し、「**[!UICONTROL サービスと購読]**」リンクを選択します。
1. 新しいサービスを作成します。
1. **[!UICONTROL Twitter]** タイプを選択します。

   >[!NOTE]
   >
   >この「**[!UICONTROL 購読を同期]**」オプションはデフォルトで有効になっています。このオプションは、Twitter のフォロワーのリストを自動的に復元し、[ダイレクトメッセージを送信](../send/twitter.md#direct-tw-messages)できるようにします。同期は[専用のテクニカルワークフロー](#synchro-tw-accounts)によって実行されます。

1. サービスのラベルおよび内部名を入力します。

   >[!CAUTION]
   >
   >サービスの&#x200B;**[!UICONTROL 内部名]**&#x200B;は、Twitter アカウントとまったく同じ名前である必要があります。

   設定を確認するには、次の操作を実行します。

   * 「**[!UICONTROL 保存]**」ボタンをクリックします。
   * サービスの概要で、作成したばかりの **Twitter** サービスを選択します。
   * 「**[!UICONTROL Twitter ページ]**」タブを参照します。Twitter アカウントが表示されます。

1. デフォルトでは、フォロワーは&#x200B;**[!UICONTROL 訪問者]**&#x200B;フォルダーに保存されます。「**[!UICONTROL 訪問者フォルダー]**」フィールドから別の場所を選択します。[詳細情報](../send/twitter.md#direct-tw-messages)

1. Twitter アプリから、「**[!UICONTROL Consumer Key (API Key)]**」フィールドと「**[!UICONTROL Consumer Secret (API Secret)]**」フィールドの内容をコピーして、Campaign **Twitter** サービスの「**[!UICONTROL Consumer key]**」フィールドと「**[!UICONTROL Consumer secret]**」フィールドに貼り付けます。

1. Twitter アプリから、「**[!UICONTROL Access Token]**」フィールドと「**[!UICONTROL Access Token Secret]**」フィールドの内容をコピーし、Campaign **Twitter** サービスの「**[!UICONTROL アクセストークン]**」フィールドと「**[!UICONTROL アクセストークン秘密鍵]**」フィールドに貼り付けます。

1. Campaign クライアントコンソールで、「**[!UICONTROL 保存]**」をクリックします。これで、書き込みアクセス権が Adobe Campaign にデリゲートされました。


>[!NOTE]
>
>Twitter アカウントごとに 1 つの **Twitter** サービスを作成します。その際、別のテストサービスを作成し、配達確認をテストアカウントに送信する必要があります。

## Twitter アカウントの同期 {#synchro-tw-accounts}

Campaign と Twitter 間の同期は、専用のテクニカルワークフローで管理されます。これらのワークフローは、**[!UICONTROL 管理／プロダクション／テクニカルワークフロー／ソーシャルネットワーク管理]**&#x200B;フォルダーに格納されます。

これらはデフォルトで停止されます。**ソーシャルマーケティング**&#x200B;モジュールを使用し始めるときは、手動で開始する必要があります。

**[!UICONTROL Twitter アカウントの同期]**&#x200B;テクニカルワークフローは、Adobe Campaign で Twitter アカウントを同期させます。このワークフローは、Twitter のフォロワーのリストを復元して、ダイレクトメッセージを送信できるようにします。[詳細情報](../send/twitter.md#direct-tw-messages)

デフォルトでは、このワークフローは毎週木曜日の午前 7:30 にトリガーされます。「**[!UICONTROL 保留中のタスクを今すぐ実行]**」オプションを使用して、この統合の実装時にいつでもワークフローを開始できます。スケジューラーを編集して、ワークフローのトリガー頻度を変更することもできます。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/flow-control-activities/approval.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

>[!CAUTION]
>
>Twitter サブスクライバーのリストを復元するには、アカウントにリンクされたサービスに対して、「**[!UICONTROL Twitter アカウントの同期]**」オプションをオンにする必要があります。[詳細情報](#create-tw-service)

フォロワーは、「訪問者」という特定のテーブルに格納されます。Twitter フォロワーのリストを表示するには、**[!UICONTROL プロファイルとターゲット／訪問者]**&#x200B;を参照します。

Adobe Campaign は、各フォロワーについて以下の情報を格納します。

* **[!UICONTROL 接触チャネル]**：ソーシャルネットワークの名前（Twitter）
* **[!UICONTROL 外部 ID]**：ユーザー識別子
* **[!UICONTROL ユーザー名]**：ユーザーのアカウント名
* **[!UICONTROL フルネーム]**：ユーザーの名前
* **[!UICONTROL 言語]**：ユーザーの言語
* **[!UICONTROL 友達の数]**：フォロワー数
* **[!UICONTROL タイムゾーン]**：ユーザーのタイムゾーン
* **[!UICONTROL 検証済み]**：ユーザーが検証済みの Twitter アカウントを持っているかを示すフィールド

設定が完了したら、Twitter アカウントにツイートを投稿し、フォロワーにダイレクトメッセージを送信できます。[詳細情報](../send/twitter.md)
