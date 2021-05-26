---
solution: Campaign v8
product: Adobe Campaign
title: Campaignでの購読と購読解除の管理
description: Campaign v8での購読と購読解除の管理方法を説明します。
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: 167730cc3e81ee47f02bcdbc2c39fe793a99c534
workflow-type: tm+mt
source-wordcount: '513'
ht-degree: 25%

---

# 購読と購読解除の管理{#optin-optout}

Adobe Campaignを使用して、ニュースレターなどの情報サービスを作成および監視し、これらのサービスの購読/購読解除を管理します。 複数のサービスを並行して定義できます。例えば、Web サイトの特定の商品カテゴリ、テーマまたは分野に関する専門家向けのニュースレター、様々なタイプのアラートメッセージやリアルタイム通知の購読などです。購読の管理を参照してください。

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/managing-subscriptions.html)での情報サービスの作成、ニュースレターの送信、オプトインとオプトアウトの管理の方法について説明します。

プロファイルをサービスに購読登録（オプトイン）するには、次のオプションを使用できます。

* 受信者プロファイルにサービスを手動で追加するには：これをおこなうには、プロファイルの「**[!UICONTROL 購読]**」タブで「**[!UICONTROL 追加]**」をクリックし、関連する情報サービスを選択します。

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=en#deliveries-tab)

* 一連の受信者を自動的にサービスに購読登録します。 受信者のリストは、フィルター操作、グループ、フォルダー、インポートまたは直接手動による選択から取得できます。 この受信者を購読登録するには、プロファイルを選択して右クリックします。**[!UICONTROL アクション/サービスの購読選択…を選択します。]**、該当するサービスを選択し、操作を開始します。

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=en#deliveries-tab)


* 受信者をインポートして、情報サービスに自動的に購読登録します。そのためには、インポートウィザードの最後の手順で該当するサービスを選択します。

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/executing-import-jobs.html?lang=en#step-5---additional-step-when-importing-recipients)

* 受信者をサービスに購読登録できる Web フォームを使用します。

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-forms/use-cases--web-forms.html?lang=en#create-a-subscription--form-with-double-opt-in)


* ターゲティングワークフローを作成し、**[!UICONTROL 購読サービス]**&#x200B;アクティビティを使用します。

   [!DNL :arrow_upper_right:] 詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/subscription-services.html?lang=en#example--subscribe-a-list-of-recipients-to-a-newsletter)


プロファイルをサービスから購読解除（オプトアウト）するには、次のオプションを使用できます。

**手動購読解除**

* 購読解除リンクまたはWebフォームのパーソナライズ
* 情報サービスの手動削除
* 特定の購読サービスからの受信者の手動削除

**自動購読解除**

* 情報サービスの期間制限を指定します。有効期間が終了すると、受信者は自動的に購読解除されます。 この期間は、サービスプロパティの「編集」タブで指定します。期間は日数で表します。
* 母集団の購読解除ワークフローの設定

:[!DNL :arrow_upper_right:]:詳しくは、[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/managing-subscriptions.html?lang=en#unsubscribing-a-recipient-from-a-service)を参照してください。


>[!CAUTION]
>
>購読と購読解除は、**非同期**&#x200B;プロセスです。 オプトインおよびオプトアウトのリクエストは、1時間ごとに処理されます。 [詳細情報](../dev/new-apis.md#sub-apis)

配信の受信者が友達にメッセージを転送できるようにすることもできます。 そのためには、関連リンクを配信に挿入します。この共有プロセスだけでなく、関連するページへの訪問数もトラッキングできます。

:[!DNL :arrow_upper_right:]:この機能について詳しくは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/viral-and-social-marketing.html?lang=en#viral-marketing--forward-to-a-friend)を参照してください。