---
product: campaign
title: ユースケース：web フォーム
description: ユースケース：web フォーム
feature: Web Forms
version: Campaign v8, Campaign Classic v7
exl-id: 7aa4646d-1325-47c2-b553-6fe375c48973
TQID: 'https://experienceleague.adobe.com/Zw-cfoQrq1PAe-swZ7gvMNyTb4ciCMF2kdT7fN2zLsg'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
subfeature_v2:
  - id: f391046b-0cf3-4e76-bd3b-97fe06654506
    internal-label: Web Apps
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
  - id: d7be2b01-dc9c-40f7-aace-a151707504ed
    internal-label: Landing pages
  - id: e739ee2b-6228-412e-878f-45de0791417d
    internal-label: Use cases
source-git-commit: 2ac66c0844ec361de9a1658f666c190fcfac8ffa
workflow-type: tm+mt
source-wordcount: '1020'
ht-degree: 98%
---
# ユースケース：web フォーム{#use-cases-web-forms}



## 二重のオプトインを備えた購読フォームの作成 {#create-a-subscription--form-with-double-opt-in}

情報サービスを提供する場合、受信者は、リンクされたすべての通信を受信するために購読する必要があります。 不適切な通信を避け、受信者が意図的に購読したことを確認するために、購読の確認リクエストを送信して、二重のオプトインを作成することをお勧めします。 確認メッセージに含まれるリンクをユーザーがクリックした場合にのみ、購読が有効になります。

この例は、次のシナリオに基づいています。

1. 一時的なサービスを購読するためのチェックボックスが含まれた、Web サイト上のニュースレターの購読フォームの作成。 このサービスにより、購読確認メッセージを配信できます。
1. Web フォームにリンクされた配信テンプレートを使用した、購読確認配信の作成。 これには確認リンクが含まれています。この確認リンクは、ニュースレター購読用のフォームを呼び出して、購読承認メッセージを表示します。

### 手順 1 - 情報サービスの作成 {#step-1---creating-information-services}

1. 受信者に提供されるニュースレター購読サービスを作成します。 ニュースレターの作成方法について詳しくは、[この節](https://experienceleague.adobe.com/en/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/about-services-and-subscriptions){target="_blank"}を参照してください。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_1.png)

1. 2 番目の情報サービスとして、購読確認メッセージを送信するための配信テンプレートにリンクされた一時的なサービスを作成します。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_1c.png)

### 手順 2 - 確認メッセージの作成 {#step-2---creating-confirmation-messages}

確認メッセージは、一時的なサービスレベルで参照される専用の配信テンプレートを使用して送信されます。

1. **[!UICONTROL エクスプローラー]**&#x200B;で、**[!UICONTROL リソース／テンプレート／配信テンプレート]**&#x200B;を選択します。
1. 購読確認メッセージを送信するための配信テンプレートを作成します。
1. 「**[!UICONTROL メールパラメーター]**」の「**[!UICONTROL 宛先]**」ボタンをクリックして、受信者ではなく、購読ターゲットマッピングに配信テンプレートを関連付けます。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_1d.png)

1. この配信の受信者は、承認を確認していないので、まだデータベースでブロックリストに登録されています。 この通信が受信されるには、このテンプレートに基づいて配信を承認して、ブロックリストに登録された受信者をターゲットにする必要があります。

   これを実行するには、「**[!UICONTROL 除外]**」タブをクリックします。

1. 「**[!UICONTROL 編集...]**」リンクをクリックし、「**[!UICONTROL 今後連絡を希望しない受信者を除外]**」オプションのチェックをオフにします。

   <!-- ![](assets/s_ncs_admin_survey_double-opt-in_sample_4d.png)-->

   >[!IMPORTANT]
   >
   >このオプションは、このタイプのコンテキストでのみ無効にできます。

1. 配信をパーソナライズし、確認リンクをメッセージコンテンツに挿入します。 このリンクをクリックすると、購読確認を記録する Web フォームにアクセスできます。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_1b.png)

1. DCE で URL を Web フォームにリンクします。 Web フォームはまだ作成していないので、作成したらすぐに値を置き換えます。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_3.png)

1. 最後に、先ほど作成した一時的なサービスにこのテンプレートをリンクします。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_3c.png)

### 手順 3 - 購読フォームの作成 {#step-3---creating-the-subscription-form}

Web フォームでは、受信者の購読と購読確認の両方が可能です。

Web フォームのワークフローには、次のアクティビティが含まれます。

![](assets/s_ncs_admin_survey_double-opt-in_sample_4c.png)

これをおこなうには、以下の手順に従います。

1. Web フォームを作成し、**[!UICONTROL ニュースレターの購読（subNewsletter）]**&#x200B;テンプレートを選択します。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_5a.png)

1. 購読を希望する受信者宛ての確認メッセージを追加したいので、「**[!UICONTROL 編集]**」タブで、既存のワークフローを設定する必要があります。

   そのためには、「**[!UICONTROL プリロード]**」ボックスをダブルクリックして、次のように設定します。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_5b.png)

   これは、ユーザーが確認メッセージのリンクを使用してこのフォームにアクセスする場合、ユーザーのプロファイル情報が読み込まれることを意味します。 Web サイトのページを使用して Web フォームにアクセスする場合、情報は読み込まれません。

1. 「**[!UICONTROL テスト]**」アクティビティをワークフローに追加します。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_6e.png)

   「**[!UICONTROL テスト]**」アクティビティは、受信者のメールに関連付けることができます。 ここでは、次のように設定します。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_6d.png)

1. 2 つの「**[!UICONTROL スクリプト]**」アクティビティをワークフローに追加します。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_6f.png)

   1 つ目の「**[!UICONTROL スクリプト]**」アクティビティでは、ニュースレターの購読を確認していない受信者をブロックリストに登録します。 このアクティビティの内容は、次のようにする必要があります。

   ```
   ctx.recipient.@blackList=1
   ```

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_6bbis.png)

   2 つ目の「**[!UICONTROL スクリプト]**」アクティビティでは、ユーザーに送信される配信を承認し、ユーザーによるニュースレターの購読の登録をおこないます。 スクリプトの最後の 2 行を使用して、受信者を一時フォルダーから別のフォルダーに転送できます。また、これらの行は、受信者が購読を確認するとすぐに既存のプロファイルと紐付けられます。

   ```
   ctx.recipient.@blackList=0
   nms.subscription.Subscribe("INTERNAL_NAME_OF_THE_NEWSLETTER", ctx.recipient, false)
   ctx.recipient.folder = <folder name="nmsRootRecipient"/>
   nms.subscription.Unsubscribe("TEMP", ctx.recipient)
   ```

   >[!NOTE]
   >
   >**[!UICONTROL Temp]** パーティションは、ワークフローを使用して定期的にパージすることもできます。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_6b.png)

1. 「**[!UICONTROL 購読]**」アクティビティをダブルクリックし、購読フォームをパーソナライズして、先ほど作成した一時的なサービスにチェックボックスをリンクします。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_5c.png)

1. フォームページで入力された情報を保存するために、「**[!UICONTROL ストレージ]**」アクティビティを設定します。

   このアクティビティでは、受信者プロファイルを専用の一時フォルダーに作成して、コミュニケーションの送信先となるデータベース内のプロファイルと切り離すことができます。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_5g.png)

   >[!NOTE]
   >
   >紐付けオプションを定義しないようにする必要があります。

1. ユーザーにメッセージを表示する 2 つの「**[!UICONTROL 終了]**」アクティビティを追加します。

   2 つ目の「**[!UICONTROL 終了]**」ボックスは、購読手続きが完了したときに確認メッセージを表示します。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_5h.png)

1. Web フォームを作成し、設定すると、確認メッセージを送信するための配信テンプレートで参照できるようになります。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_7b.png)

### 手順 4 - フォームの公開とテスト {#step-4---publishing-and-testing-the-form}

これで、ユーザーがアクセスできるようにフォームをパブリッシュできます。

![](assets/s_ncs_admin_survey_double-opt-in_sample_8b.png)

ニュースレターの購読には、次の手順が含まれます。

1. Web サイトのユーザーは、購読ページにログオンし、フォームを承認します。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_8c.png)

   ブラウザーのメッセージで、リクエストを受け付けたことが通知されます。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_8d.png)

   ユーザーは、Adobe Campaign データベースの **[!UICONTROL Temp]** フォルダーに追加され、プロファイルがブロックリストに登録されます。この登録は、ユーザーがメールによる購読確認を完了するまで続きます。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_8f.png)

1. 購読を承認するためのリンクに含まれる確認メッセージがユーザーに送信されます。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_8e.png)

1. ユーザーがこのリンクをクリックすると、承認ページがブラウザーに表示されます。

   ![](assets/s_ncs_admin_survey_double-opt-in_sample_8.png)

   Adobe Campaign では、ユーザープロファイルが更新されます。

   * ブロックリストへの登録が解除されます。
   * 情報サービスを購読しています。

     ![](assets/s_ncs_admin_survey_double-opt-in_sample_9.png)

## 選択した値に応じた異なるオプションの表示 {#displaying-different-options-depending-on-the-selected-values}

次の例では、ユーザーは自動車のタイプを選択するよう求められます。 選択したタイプに応じて、利用可能な自動車のカテゴリを表示できます。 つまり、ユーザーの選択によって、右側に表示される項目が変わることを意味します。

![](assets/s_ncs_admin_survey_condition_sample0.png)

* ユーザーが「自家用車」を選択すると、「コンパクト」から「ミニバン」の選択肢が提供されます。

  ![](assets/s_ncs_admin_survey_condition_sample2.png)

* ユーザーが「商用車」を選択すると、選択肢がドロップダウンリストで表示されます。

  ![](assets/s_ncs_admin_survey_condition_sample1.png)

この例では、車両のタイプはデータベースに格納されていません。 ドロップダウンリストは次のように設定されます。

![](assets/s_ncs_admin_survey_condition_config1.png)

この情報は、ローカル変数に格納されます。

右側の列の条件付き表示は、コンテナで設定されます。

![](assets/s_ncs_admin_survey_condition_config1bis.png)

* 自家用車用のフィールドの条件付き表示：

  ![](assets/s_ncs_admin_survey_condition_config2.png)

* 商用車用のフィールドの条件付き表示：

  ![](assets/s_ncs_admin_survey_condition_config3.png)
