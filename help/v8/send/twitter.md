---
title: Adobe CampaignでのTwitterでのメッセージの投稿
description: Adobe Campaign Social Marketing モジュールを使用して、Twitterにメッセージを投稿し、連絡先データを収集する方法を説明します。
role: Data Engineer
level: Beginner
hidefromtoc: true
hide: true
exl-id: 0783e289-ae8e-4bb7-80f1-f90937a528c1
source-git-commit: da6e585a789749ae0302f048940d104a36e2b477
workflow-type: tm+mt
source-wordcount: '975'
ht-degree: 52%

---


# Adobe CampaignでのTwitterでのメッセージの投稿 {#post-tw-messages}

Adobe Campaignには **ソーシャルマーケティング** twitterを介して顧客や見込み客とやり取りできるモジュール。

統合を設定すると、次の操作を実行できます。

* twitterでのメッセージの送信：Adobe Campaignでは、twitterアカウントに直接メッセージを投稿できます。 フォロワー全員にダイレクトメッセージを送信することも可能です。
* 新しい連絡先を収集：Adobe Campaignは、プロファイルデータを自動的に復元できます。これにより、ターゲティングキャンペーンを実行し、可能であればクロスチャネル戦略を実装できます。 この操作には、ユーザーの同意が必要です。


twitterアカウントをAdobe Campaignに統合するための設定手順については、 [このページ](../connect/ac-tw.md).

## twitter投稿の作成と公開 {#publish-on-tw}

twitterアカウントにメッセージを投稿するには、次の手順に従います。

1. twitter配信の作成

   「**[!UICONTROL ツイート（Twitter）]**」配信テンプレートに基づいて新しい配信を作成します。

1. メインターゲットの選択

   ツイートの送信先アカウントを選択します。

   1. 「**[!UICONTROL 宛先]**」リンクをクリックします。
   1. 「**[!UICONTROL 追加]**」ボタンをクリックします。
   1. 「**[!UICONTROL Twitter アカウント]**」を選択します。
   1. 「**[!UICONTROL フォルダー]**」フィールドで、Twitter アカウントを含むサービスフォルダーを選択します。次に、ツイートを送信する Twitter アカウントを選択します。

1. 配達確認のターゲットの選択

   「**[!UICONTROL 配達確認のターゲット]**」タブでは、最終的な配信の前に、テスト目的で使用する Twitter アカウントを定義できます。

   詳しくは、 [設定手順](../connect/ac-tw.md#tw-test-account)に値を入力する場合は、配達確認の送信専用の非公開Twitterアカウントを作成する必要があります。

   >[!NOTE]
   >
   >すべての配信に同じ Twitter テストアカウントを使用する場合、「**[!UICONTROL ツイート]**」配信テンプレートに配達確認のターゲットを保存できます。このテンプレートには、**[!UICONTROL リソース／テンプレート／配信テンプレート]**&#x200B;ノードからアクセスできます。これにより、新規の各配信で、配達確認のターゲットがデフォルトで入力されるようになります。

1. 投稿のコンテンツを定義する

   投稿のコンテンツを **[!UICONTROL コンテンツ]** タブをクリックします。

   >[!CAUTION]
   >
   >twitterに投稿する場合、次の制限が適用されます。
   >
   >* メッセージの長さは 140 文字以下にする必要があります。
   >* HTMLの形式はサポートされていません。


1. 投稿をプレビュー

   次を参照： **[!UICONTROL プレビュー]** タブをクリックして、投稿のレンダリングを確認します。

   1. 「**[!UICONTROL プレビュー]**」タブをクリックします。
   1. 「**[!UICONTROL パーソナライゼーションをテスト]**」ドロップダウンメニューをクリックし、「**[!UICONTROL サービス]**」を選択します。
   1. 「**[!UICONTROL フォルダー]**」フィールドで、Twitter アカウントを含むサービスフォルダーを選択します。
   1. プレビューをテストする Twitter アカウントを選択します。

1. 配達確認の送信

   ツイートを投稿する前に、投稿の配達確認を送信して検証する必要があります。その後、非公開のTwitterテストページでパブリケーションの正確なレンダリングを取得できます。

   非公開 Twitter アカウントの作成について詳しくは、[この節](../connect/ac-tw.md#tw-test-account)を参照してください。

   ![](../assets/do-not-localize/book.png) [配信を検証するための主な手順を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-validating-the-delivery.html?lang=ja){target=&quot;_blank&quot;}

1. メッセージを投稿

   1. コンテンツが承認されたら、「**[!UICONTROL 送信]**」ボタンをクリックします。
   1. 「**[!UICONTROL 可能な限り早く配信]**」を選択し、「**[!UICONTROL 分析]**」ボタンをクリックします。
   1. 分析が完了したら、結果を確認します。
   1. 「**[!UICONTROL 配信を確定]**」をクリックし、「**[!UICONTROL はい]**」をクリックします。


## フォロワーにダイレクトメッセージを送信 {#direct-tw-messages}

この **[!UICONTROL twitterアカウントの同期]** テクニカルワークフローは、Twitterのフォロワーのリストを復元するので、ダイレクトメッセージを送信できます。 [詳細情報](../connect/ac-tw.md#synchro-tw-accounts)

フォロワーにダイレクトメッセージを送信するには、次の手順に従います。

1. 次に基づいてTwitter配信を作成 **[!UICONTROL ツイート（ダイレクトメッセージ）]** 組み込み配信テンプレート。

1. メインターゲットの選択

1. を選択します。 **[!UICONTROL 宛先]** リンクと **[!UICONTROL 追加]** 」ボタンをクリックします。

1. ターゲティングのタイプを選択

   * 選択 **[!UICONTROL Twitter Subscribers]** ：すべてのフォロワーにダイレクトメッセージを送信します。

   * 「**[!UICONTROL フィルター条件]**」を選択し、クエリを定義して結果を表示します。このオプションは、E メール配信の場合と同じです。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/creating-queries/defining-filter-conditions.html){target=&quot;_blank&quot;}を参照してください。

1. 次の **[!UICONTROL 配達確認のターゲット]** 「 」タブで、ダイレクトメッセージの配達確認を受け取るフォロワーを選択します。

   >[!NOTE]
   >
   >すべてのダイレクトメッセージの配達確認を同じ Twitter フォロワーに送信する場合、「**[!UICONTROL ツイート（ダイレクトメッセージ）]**」配信テンプレートに配達確認のターゲットを保存できます。このテンプレートには、**[!UICONTROL リソース／テンプレート／配信テンプレート]**&#x200B;ノードからアクセスできます。

1. メッセージの内容を **[!UICONTROL コンテンツ]** タブをクリックします。

   パーソナライゼーションフィールドは、E メール配信と同じ手順で使用可能です。例えば、メッセージの本文にフォロワーの名前を追加できます。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/personalizing-deliveries/conditional-content.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

1. メッセージのプレビュー

   次を参照： **[!UICONTROL プレビュー]** タブをクリックして、投稿のレンダリングを確認します。

   1. 「**[!UICONTROL プレビュー]**」タブをクリックします。
   1. 「**[!UICONTROL パーソナライゼーションをテスト]**」ドロップダウンメニューをクリックし、「**[!UICONTROL サービス]**」を選択します。
   1. 「**[!UICONTROL フォルダー]**」フィールドで、Twitter アカウントを含むサービスフォルダーを選択します。
   1. プレビューをテストする Twitter アカウントを選択します。

1. 配達確認の送信

   メッセージを送信する前に、テストアカウントに配達確認を送信して検証する必要があります。その後、非公開のTwitterアカウントでメッセージの正確なレンダリングを取得し、コンテンツとパーソナライゼーションを確認できます。

   非公開 Twitter アカウントの作成について詳しくは、[この節](../connect/ac-tw.md#tw-test-account)を参照してください。

   ![](../assets/do-not-localize/book.png) [配信を検証するための主な手順を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-validating-the-delivery.html){target=&quot;_blank&quot;}

1. ダイレクトメッセージを送信

   1. コンテンツが承認されたら、「**[!UICONTROL 送信]**」ボタンをクリックします。
   1. 「**[!UICONTROL 可能な限り早く配信]**」を選択し、「**[!UICONTROL 分析]**」ボタンをクリックします。
   1. 分析が完了したら、結果を確認します。
   1. 「**[!UICONTROL 配信を確定]**」をクリックし、「**[!UICONTROL はい]**」をクリックします。

>[!CAUTION]
>
>1 日に 250 件を超えるダイレクトメッセージを送信することはできません。このしきい値を超えないようにするには、ウェーブで配信します。 詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-sending-the-delivery.html?lang=ja#sending-using-multiple-waves){target=&quot;_blank&quot;}を参照してください。


## トラッキングデータへのアクセス {#tw-tracking}

組み込み **[!UICONTROL ツイート]** 配信テンプレート。トラッキングはデフォルトで有効になっています。

トラッキングデータは、配信レポートおよび **[!UICONTROL 編集/トラッキング]** 」タブをクリックします。

トラッキング設定は、E メール配信の場合と同じです。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

