---
title: Campaign と Adobe Experience Manager の使用
description: Campaign と Adobe Experience Manager の使い方を学ぶ
feature: Experience Manager Integration
role: Admin, User
level: Beginner
exl-id: e83893f7-a8be-48a3-a7a6-aced7b4d4f69
source-git-commit: b267cb37a94bd389232ccfb9b8df69c9c2caa990
workflow-type: tm+mt
source-wordcount: '496'
ht-degree: 23%

---

# Campaign と Adobe Experience Manager の使用 {#ac-aem}

Adobe CampaignとAdobe Experience Managerの統合により、E メール配信とフォームのコンテンツをAdobe Experience Managerで直接管理できます。 次のいずれかの方法で **Adobe Experience Manager** コンテンツを Campaign に取り込むか、 **Adobe Experience Manager as a Cloud Service** アカウントを使用して、Web インターフェイス内で直接コンテンツを編集できます。

![](../assets/do-not-localize/book.png) [Campaign Web インターフェイス内でAdobe Experience ManagerをCloud Serviceコンテンツとして編集する方法を理解する](https://experienceleague.adobe.com/docs/campaign-web/v8/msg/email/content/integrations/aem-content.html?lang=en)

![](../assets/do-not-localize/book.png) [Adobe Experience Managerの詳細については、このドキュメントを参照してください](https://experienceleague.adobe.com/docs/experience-manager-65/administering/integration/campaignonpremise.html?lang=ja#aem-and-adobe-campaign-integration-workflow)

## Adobe Experience Managerを使用したオーサリング {#integrating-with-aem}

![](../assets/do-not-localize/speech.png) Managed Cloud Services ユーザーとして Adobe Experience Manager を Campaign と統合する場合は、[アドビにお問い合わせ](../start/campaign-faq.md#support)ください。

この統合を利用して、例えば、Adobe Experience Manager で作成したニュースレターを Adobe Campaign でメールキャンペーンの一部として使用できます。

**Adobe Experience Manager から：**

1. 次の場所に移動： [!DNL Adobe Experience Manager] オーサーインスタンスを作成し、ページの左上隅にある「Adobeエクスペリエンス」をクリックします。 選択 **[!UICONTROL Sites]** を選択します。

   ![](assets/aem_authoring_1.png)

1. アクセス **[!UICONTROL キャンペーン/ブランド名（ここでは we.Shopping）/メイン領域/電子メール]**.

1. クリック **[!UICONTROL 作成]** を選択し、 **[!UICONTROL ページ]** をドロップダウンメニューから選択します。

   ![](assets/aem_authoring_2.png)

1. を選択します。 **[!UICONTROL Adobe Campaign Email]** ニュースレターをテンプレート化し、名前を付けます。

1. ページを作成したら、 **[!UICONTROL ページ情報]** メニューとクリック **[!UICONTROL プロパティを開く]**.

   ![](assets/aem_authoring_3.png)

1. Adobe Campaignのパーソナライゼーションフィールドなどのコンポーネントを追加して、E メールコンテンツをカスタマイズします。 [詳細情報](https://experienceleague.adobe.com/docs/experience-manager-65/content/sites/authoring/aem-adobe-campaign/campaign.html?lang=en#editing-email-content)

1. E メールの準備が整ったら、 **[!UICONTROL ページ情報]** メニューとクリック **[!UICONTROL ワークフローを開始]**.

   ![](assets/aem_authoring_4.png)

1. 最初のドロップダウンで、「 」を選択します。 **[!UICONTROL Adobe Campaignを承認]** ワークフローモデルとして、をクリックします。 **[!UICONTROL ワークフローを開始]**.

   ![](assets/aem_authoring_5.png)

1. ページの上部に、次の内容の免責事項が表示されます。 `This page is subject to the workflow Approve for Adobe Campaign`. クリック **[!UICONTROL 完了]** 免責事項の横にあるレビューを確認し、をクリックします。 **[!UICONTROL OK]**.

1. クリック **[!UICONTROL 完了]** 再び選択し、 **[!UICONTROL ニュースレターの承認]** （内） **[!UICONTROL 次のステップ]** 」ドロップダウンリストから選択できます。

   ![](assets/aem_authoring_6.png)

これでニュースレターが準備でき、Adobe Campaign で同期されました。

**Adobe Campaign から：**

1. 「**[!UICONTROL キャンペーン]**」タブで、「**[!UICONTROL 配信]**」、「**[!UICONTROL 作成]**」の順にクリックします。

1. を選択します。 **[!UICONTROL AEMコンテンツを含む E メール配信 (mailAEMContent)]** テンプレート **[!UICONTROL 配信テンプレート]** ドロップダウンメニュー。

   ![](assets/aem_authoring_7.png)

1. 配信に&#x200B;**[!UICONTROL ラベル]**&#x200B;を追加し、「**[!UICONTROL 続行]**」をクリックします。

1. クリック **[!UICONTROL 同期]** をクリックしてAEM配信にアクセスします。

   インターフェイスにボタンが表示されていない場合は、に移動します。 **[!UICONTROL プロパティ]** ボタンをクリックし、 **[!UICONTROL 詳細]** タブをクリックします。 次の点を確認します。 **[!UICONTROL コンテンツ編集モード]** フィールドを **[!UICONTROL AEM]**&#x200B;をクリックし、AEMインスタンスの詳細を **[!UICONTROL AEMアカウント]** フィールドに入力します。

   ![](assets/aem_authoring_8.png)

1. 以前に作成したAEM配信を選択 [!DNL Adobe Experience Manager] をクリックして確定 **[!UICONTROL OK]**.

1. 次の場所からアセットを直接挿入できます： [!DNL Adobe Experience Manager Assets] または [!DNL Adobe Experience Manager Assets Library] Adobe Campaignで e メールを編集中に [詳細情報](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/assets/overview.html?lang=ja)。

   次の手順で、 **Adobe Experience Manager Assets Library**、 **[!UICONTROL プロパティ]** AEM配信の「 」と「 」を選択します。 **[!UICONTROL 詳細]** タブをクリックします。 を有効にします。 **[!UICONTROL 上記のAEMインスタンスを共有アセットライブラリとして使用]** オプション。

   ![](assets/aem_authoring_9.png)

1. 必ず **[!UICONTROL コンテンツを更新]** 」ボタンをクリックします。

これでメールをオーディエンスに送信する準備が整いました。
