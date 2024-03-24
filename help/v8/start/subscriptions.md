---
title: Campaign での購読と購読解除の管理
description: Campaign v8 でサブスクリプションとサブスクリプション解除を管理する方法を説明します.
feature: Subscriptions
role: User
level: Beginner
exl-id: d5933b12-8664-49b8-953c-ea98eb428cc2
source-git-commit: 5ab598d904bf900bcb4c01680e1b4730881ff8a5
workflow-type: tm+mt
source-wordcount: '401'
ht-degree: 92%

---

# 購読と購読解除の管理{#optin-optout}

Adobe Campaign を使用すると、ニュースレターなどの情報サービスの作成と監視を行い、これらのサービスの購読／購読解除を管理できます。複数のサービスを並行して定義できます。例えば、web サイトの特定の商品カテゴリ、テーマまたは分野に関する専門家向けのニュースレター、様々なタイプのアラートメッセージやリアルタイム通知の購読などです。

情報サービスの作成、ニュースレターの送信、オプトインとオプトアウトの管理の方法について説明します [Campaign Classicv7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/managing-subscriptions.html?lang=ja){target="_blank"}

プロファイルをサービスに購読（オプトイン）するには、次のオプションを使用できます。

* 受信者のプロファイルにサービスを手動で追加するには、プロファイルの「**[!UICONTROL 購読]**」タブから「 **[!UICONTROL 追加]**」をクリックし、該当する情報サービスを選択します。

  ![](assets/subscribe-to-a-service.png)

  詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=ja#deliveries-tab)を参照してください{target="_blank"}

* 受信者のセットを、このサービスに自動的に購読登録します。受信者のリストは、フィルタリング操作、グループ、フォルダー、読み込み、手動での直接選択などの方法で取得できます。これらの受信者を購読登録するには、プロファイルを選択して右クリックします。**[!UICONTROL アクション／サービスの購読選択...]**&#x200B;を選択します。

  ![](assets/subscribe-selection.png)

  該当するサービスを選択し、操作を開始します。

  ![](assets/subscribe-confirm.png)

  詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/editing-a-profile.html?lang=ja#deliveries-tab)を参照してください{target="_blank"}


* 受信者をインポートして、情報サービスに自動的に購読登録します。そのためには、インポートウィザードの最後の手順で該当するサービスを選択します。

  詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/executing-import-jobs.html?lang=ja#step-5---additional-step-when-importing-recipients){target="_blank"}を参照してください。

* 受信者がサービスの購読を登録できる Web フォームを使用します。

  ![](assets/opt-in-webapp.png)

  Campaign には、オプトインを管理するためのデフォルトの Web フォームが用意されています。これをパーソナライズし、プロファイルデータをマッピングできます。

  ![](assets/web-app.png)

  詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-forms/use-cases--web-forms.html?lang=ja#create-a-subscription--form-with-double-opt-in){target="_blank"}を参照してください。


* ターゲティングワークフローを作成し、**[!UICONTROL 購読サービス]**&#x200B;アクティビティを使用します。

  ![](assets/wf-subscription.png)

  詳しくは、 [このページ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/targeting-activities/subscription-services.html?lang=ja){target="_blank"}.

プロファイルをサービスから購読解除（オプトアウト）するには、次のオプションを使用できます。

**手動での購読解除**

* パーソナライズされた購読解除のリンクまたは web フォーム
* 手動による情報サービスの削除
* 特定の購読サービスからの手動による受信者の削除

**自動での購読解除**

* 情報サービスの期限を指定します。有効期間が終了すると、受信者は自動的に購読解除されます。この期間は、サービスプロパティの「編集」タブで指定します。期間は日数で表します。
* 母集団の購読解除ワークフローを設定します。

詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/managing-subscriptions.html?lang=ja#unsubscribing-a-recipient-from-a-service){target="_blank"}を参照してください。


>[!CAUTION]
>
>[エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、購読と購読解除は&#x200B;**非同期**&#x200B;プロセスです。オプトインとオプトアウトのリクエストは、1 時間ごとに処理されます。[詳細情報](../architecture/new-apis.md#sub-apis)

<!--
You can also enable your delivery recipients to forward messages to a friend. To do this, insert the relevant links into your delivery. You may then track this sharing process as well as the number of visits to the concerned pages. 

For more on this capability, refer to [Campaign Classic v7 documentation](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/viral-and-social-marketing.html#viral-marketing--forward-to-a-friend){target="_blank"}
-->
