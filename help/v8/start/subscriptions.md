---
product: Adobe Campaign
title: Campaign での購読と購読解除の管理
description: Campaign v8 で購読と購読解除を管理する方法を説明します
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: 4cdf1b30584088d1c5de301d89c6d09bf5429ca1
workflow-type: tm+mt
source-wordcount: '532'
ht-degree: 41%

---

# 購読と購読解除の管理{#optin-optout}

Adobe Campaign を使用すると、ニュースレターなどの情報サービスの作成と監視を行い、これらのサービスの購読／購読解除を管理できます。 複数のサービスを並行して定義できます。例えば、Web サイトの特定の商品カテゴリ、テーマまたは分野に関する専門家向けのニュースレター、様々なタイプのアラートメッセージやリアルタイム通知の購読などです。 購読の管理を参照してください。

[!DNL :arrow_upper_right:] 情報サービスの作成、ニュースレターの送信、オプトインとオプトアウトの管理( [Campaign Classicv7ドキュメント)の方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/managing-subscriptions.html?lang=ja)

プロファイルをサービスに購読登録（オプトイン）するには、次のオプションを使用できます。

* 受信者プロファイルにサービスを手動で追加するには：これをおこなうには、プロファイルの「**[!UICONTROL 購読]**」タブで「**[!UICONTROL 追加]**」をクリックし、関連する情報サービスを選択します。

   ![](assets/subscribe-to-a-service.png)

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=en#deliveries-tab)

* 一連の受信者を自動的にサービスに購読登録します。 受信者のリストは、フィルター操作、グループ、フォルダー、インポートまたは直接手動による選択から取得できます。 この受信者を購読登録するには、プロファイルを選択して右クリックします。**[!UICONTROL アクション/サービスの購読選択…を選択します。]**.

   ![](assets/subscribe-selection.png)

   該当するサービスを選択し、操作を開始します。

   ![](assets/subscribe-confirm.png)

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=en#deliveries-tab)


* 受信者をインポートして、情報サービスに自動的に購読登録します。そのためには、インポートウィザードの最後の手順で該当するサービスを選択します。

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/executing-import-jobs.html?lang=en#step-5---additional-step-when-importing-recipients)

* 受信者をサービスに購読登録できる Web フォームを使用します。

   ![](assets/opt-in-webapp.png)

   Campaignには、オプトインを管理するためのデフォルトのWebフォームが用意されています。 これをパーソナライズし、プロファイルデータをマッピングできます。

   ![](assets/web-app.png)

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-forms/use-cases--web-forms.html?lang=en#create-a-subscription--form-with-double-opt-in)


* ターゲティングワークフローを作成し、**[!UICONTROL 購読サービス]**&#x200B;アクティビティを使用します。

   ![](assets/wf-subscription.png)

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/subscription-services.html?lang=en#example--subscribe-a-list-of-recipients-to-a-newsletter)

プロファイルをサービスから購読解除（オプトアウト）するには、次のオプションを使用できます。

**手動購読解除**

* 購読解除リンクまたはWebフォームのパーソナライズ
* 情報サービスの手動削除
* 特定の購読サービスからの受信者の手動削除

**自動購読解除**

* 情報サービスの期間制限を指定します。有効期間が終了すると、受信者は自動的に購読解除されます。 この期間は、サービスプロパティの「編集」タブで指定します。期間は日数で表します。
* 母集団の購読解除ワークフローを設定します。

[!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/managing-subscriptions.html?lang=en#unsubscribing-a-recipient-from-a-service)


>[!CAUTION]
>
>購読と購読解除は、**非同期**&#x200B;プロセスです。 オプトインおよびオプトアウトのリクエストは、1 時間ごとに処理されます。[詳細情報](../dev/new-apis.md#sub-apis)

配信受信者が友人にメッセージを転送できるようにすることもできます。 それには、関連リンクを配信に挿入します。 この共有プロセスと、該当するページへのアクセス数もトラッキングできます。

[!DNL :arrow_upper_right:] この機能について詳しくは、 [Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/viral-and-social-marketing.html?lang=en#viral-marketing--forward-to-a-friend)を参照してください。