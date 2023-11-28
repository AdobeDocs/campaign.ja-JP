---
title: Adobe Campaignを使用して X(Twitter) にメッセージを投稿する
description: Adobe Campaign Social Marketing モジュールを使用して、X( 旧称：Twitter) にメッセージを投稿し、フォロワーにダイレクトメッセージを送信する方法を説明します
role: User
level: Beginner, Intermediate
exl-id: 0783e289-ae8e-4bb7-80f1-f90937a528c1
source-git-commit: f463c5747b844544ba561a63e4cb0359c0c258c8
workflow-type: tm+mt
source-wordcount: '875'
ht-degree: 54%

---


# Adobe Campaignを使用して X(Twitter) にメッセージを投稿する {#post-tw-messages}

Adobe Campaignには **ソーシャルマーケティング** X( 旧称：Twitter) を介して顧客や見込み客とやり取りできるモジュール。

統合を設定すると、次の操作を実行できます。

* フォロワーへのダイレクトメッセージの送信
* X アカウントに投稿
* プロファイルデータを回収して新しい連絡先を収集します。これにより、キャンペーンのターゲティングを実行し、可能であればクロスチャネル戦略を導入できます。この操作には、ユーザーの同意が必要です。


X アカウントをAdobe Campaignに統合するための設定手順については、 [このページ](../connect/ac-tw.md).

## X 投稿の作成と公開 {#publish-on-tw}

以下の手順に従って、X アカウントにメッセージを投稿します。

1. X 件の配信を作成

   「**[!UICONTROL ツイート（Twitter）]**」配信テンプレートに基づいて新しい配信を作成します。

   ![](assets/tw-new-delivery.png)

1. メインターゲットの選択

   投稿を送信するアカウントを選択します。

   ![](assets/tw-define-target.png)

   1. 「**[!UICONTROL 宛先]**」リンクをクリックします。
   1. 「**[!UICONTROL 追加]**」ボタンをクリックします。
   1. 「**[!UICONTROL Twitter アカウント]**」を選択します。
   1. Adobe Analytics の **[!UICONTROL フォルダー]** 「 」フィールドで、X アカウントを含むサービスフォルダーを選択します。 次に、ツイートを送信する X アカウントを選択します。

1. 配達確認のターゲットの選択

   The **[!UICONTROL 配達確認のターゲット]** 「 」タブでは、最終配信の前に、テスト配信に使用する X アカウントを定義できます。

   詳しくは、 [設定手順](../connect/ac-tw.md#tw-test-account)に値を入力する場合は、配達確認の送信専用のプライベートテスト X アカウントを作成する必要があります。

   >[!NOTE]
   >
   >すべての配信で同じ X テストアカウントを使用している場合、配達確認のターゲットを **[!UICONTROL ツイート]** 配信テンプレート（経由でアクセス） **[!UICONTROL リソース/テンプレート/配信テンプレート]** ノード。 これにより、新規の各配信で、配達確認のターゲットがデフォルトで入力されるようになります。

1. 投稿のコンテンツを定義

   「**[!UICONTROL コンテンツ]**」タブに投稿の内容を入力します。

   ![](assets/tw-delivery-content.png)

   >[!CAUTION]
   >
   >X に投稿する場合、次の制限が適用されます。
   >
   >* メッセージの長さは 140 文字以下にする必要があります。
   >* HTML はサポートされていません。
   >

1. 投稿をプレビュー

   「**[!UICONTROL プレビュー]**」タブを参照して、投稿のレンダリングを確認します。

   ![](assets/tw-delivery-preview.png)

   1. 「**[!UICONTROL プレビュー]**」タブをクリックします。
   1. 「**[!UICONTROL パーソナライゼーションをテスト]**」ドロップダウンメニューをクリックし、「**[!UICONTROL サービス]**」を選択します。
   1. Adobe Analytics の **[!UICONTROL フォルダー]** 「 」フィールドで、X アカウントを含むサービスフォルダーを選択します。

1. 配達確認の送信

   ツイートを投稿する前に、パブリケーションの配達確認を送信して検証する必要があります。その後、X のテスト用非公開ページでパブリケーションの正確なレンダリングを取得できます。

1. メッセージを投稿

   1. コンテンツが承認されたら、「**[!UICONTROL 送信]**」ボタンをクリックします。
   1. 「**[!UICONTROL 可能な限り早く配信]**」を選択し、「**[!UICONTROL 分析]**」ボタンをクリックします。
   1. 分析が完了したら、結果を確認します。
   1. 「**[!UICONTROL 配信を確定]**」をクリックし、「**[!UICONTROL はい]**」をクリックします。

## フォロワーへのダイレクトメッセージの送信 {#direct-tw-messages}

The **[!UICONTROL twitterアカウントの同期]** テクニカルワークフローは、X フォロワーのリストを復元するので、ダイレクトメッセージを送信できます。 [詳細情報](../connect/ac-tw.md#synchro-tw-accounts)

フォロワーにダイレクトメッセージを送信するには、次の手順に従います。

1. に基づいて X 件の配信を作成 **[!UICONTROL ツイート（ダイレクトメッセージ）]** 組み込み配信テンプレート。

1. メインターゲットの選択

   ![](assets/tw-dm-define-target.png)

   1. **[!UICONTROL 宛先]**&#x200B;リンクと「**[!UICONTROL 追加]** 」ボタンを選択します。

   1. ターゲティングのタイプを選択します

      * 「**[!UICONTROL Twitter 購読者]**」を選択し、フォロワー全員にダイレクトメッセージを送信します。

      * 「**[!UICONTROL フィルター条件]**」を選択し、クエリを定義して結果を表示します。フィルターを作成する方法については、[こちらの節](../audiences/create-filters.md#advanced-filters)を参照してください。

1. 「**[!UICONTROL 配達確認のターゲット]**」タブから配達確認のターゲットを選択する：このアカウントは、ダイレクトメッセージの配達確認を受信します。

   詳しくは、 [設定手順](../connect/ac-tw.md#tw-test-account)に値を入力する場合は、配達確認の送信専用のプライベートテスト X アカウントを作成する必要があります。


   >[!NOTE]
   >
   >すべてのダイレクトメッセージの配達確認を同じ X アカウントに送信する場合は、配達確認のターゲットを **[!UICONTROL ツイート（ダイレクトメッセージ）]** 配信テンプレート（経由でアクセス） **[!UICONTROL リソース/テンプレート/配信テンプレート]** ノード。

1. 「**[!UICONTROL コンテンツ]**」タブにメッセージの内容を入力します。

   ![](assets/tw-dm-content.png)

   パーソナライゼーションフィールドは、メール配信と同じ手順で使用可能です。例えば、メッセージの本文にフォロワーの名前を追加できます。詳しくは、[この節](../send/personalize.md)を参照してください。

1. メッセージのプレビュー

   「**[!UICONTROL プレビュー]**」タブを参照して、投稿のレンダリングを確認します。

   ![](assets/tw-dm-preview.png)

   1. 「**[!UICONTROL プレビュー]**」タブをクリックします。
   1. 「**[!UICONTROL パーソナライゼーションをテスト]**」ドロップダウンメニューをクリックし、「**[!UICONTROL 訪問者の購読]**」を選択します。
   1. プレビューをテストする X アカウントを選択します。

1. 配達確認の送信

   メッセージを送信する前に、次の方法で検証してください： [テストアカウントへの配達確認の送信](../send/preview-and-proof.md)：その後、非公開 X アカウントでメッセージの正確なレンダリングを取得し、コンテンツとパーソナライゼーションを確認できます。

1. ダイレクトメッセージの送信

   1. コンテンツが承認されたら、「**[!UICONTROL 送信]**」ボタンをクリックします。
   1. 「**[!UICONTROL 可能な限り早く配信]**」を選択し、「**[!UICONTROL 分析]**」ボタンをクリックします。
   1. 分析が完了したら、結果を確認します。
   1. 「**[!UICONTROL 配信を確定]**」をクリックし、「**[!UICONTROL はい]**」をクリックします。

>[!CAUTION]
>
>1 日に 250 件を超えるダイレクトメッセージを送信することはできません。このしきい値を超えないようにするには、ウェーブで配信します。 詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-sending-the-delivery.html?lang=ja#sending-using-multiple-waves){target="_blank"}を参照してください。


## トラッキングデータへのアクセス {#tw-tracking}

組み込みの「**[!UICONTROL ツイート]**」配信テンプレートでは、トラッキングがデフォルトで有効になっています。

トラッキングデータは、配信レポート、さらに配信とサービスの&#x200B;**[!UICONTROL 編集／トラッキング]**&#x200B;タブで表示できます。

トラッキング設定は、メール配信の場合と同じです。詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/monitoring-deliveries/about-delivery-monitoring.html?lang=ja){target="_blank"}を参照してください。

