---
title: Campaign インタラクションオファーカタログ
description: オファーカタログの作成方法を学ぶ
feature: Overview
role: Data Engineer
level: Beginner
exl-id: d39b1768-4c39-4d64-b9b6-d9c9424a2b0d
source-git-commit: 7234ca65f785b005b11851a5cd88add8cddeff4f
workflow-type: tm+mt
source-wordcount: '1350'
ht-degree: 100%

---

# オファーの送信

オファーをオファーエンジンで選択できるようにするには、オファーが承認され、**ライブ**&#x200B;環境で利用できる必要があります。[詳細情報](interaction-offer.md#approve-offers)

アウトバウンドの通信チャネルを使用したオファーの提示は、ダイレクトメール、メールまたはモバイル配信を使用しておこなわれます。 トランザクションメッセージ（Message Center）で単一モードを使用することもできます。

## 配信へのオファーの挿入 {#offer-into-a-delivery}

オファーの提案を配信に挿入するには、次の手順に従います。

1. 配信ウィンドウで、**オファー**&#x200B;アイコンをクリックします。

   ![](assets/offer_delivery_001.png)

1. オファー環境に合致するスペースを選択します。

   ![](assets/offer_delivery_002.png)

1. エンジンによるオファー選択を調整するには、提示するオファーが含まれるカテゴリを選択するか、1 つまたは複数のテーマを選択します。制限のオーバーロードを避けるために、これらのフィールドは一度に 1 つのみ使用することをお勧めします。

   ![](assets/offer_delivery_003.png)

   ![](assets/offer_delivery_004.png)

1. 配信の本文に挿入するオファーの数を指定します。

   ![](assets/offer_delivery_005.png)

1. 必要に応じて、「**[!UICONTROL 不適格な受信者を除外]**」オプションを選択します。[詳細](#parameters-for-calling-offer-engine)

   ![](assets/offer_delivery_006.png)

1. 必要に応じて「**[!UICONTROL 選択されているオファーがない場合は表示しない]**」オプションを選択します。[詳細](#parameters-for-calling-offer-engine)

   ![](assets/offer_delivery_007.png)

1. 結合フィールドを使用して、プロパティを配信コンテンツに挿入します。利用できる提案の数は、エンジンの呼び出しがどのように設定されているかによって異なり、提案の順序はオファーの優先度によって異なります。

   ![](assets/offer_delivery_008.png)

1. コンテンツを完成させ、配信をテストして送信します。

   ![](assets/offer_delivery_010.png)


### オファーエンジンのパラメーター {#parameters-for-calling-offer-engine}

* **[!UICONTROL スペース]**：オファーエンジンを有効化するために選択する必要があるオファー環境のスペース。
* **[!UICONTROL カテゴリ]**：オファーが分類される特定のフォルダー。カテゴリが指定されてない場合、テーマが選択されていない限り、その環境に含まれるすべてのオファーがオファーエンジンで考慮されます。
* **[!UICONTROL テーマ]**：カテゴリの上流で定義されたキーワード。これらはフィルターとして機能し、カテゴリのセットで選択することで、提示されるオファーの数を調整できます。
* **[!UICONTROL 提案数]**：エンジンによって返される、配信の本文に挿入可能なオファーの数。メッセージに挿入されなくても、オファーは生成されますが、提示はされません。
* **[!UICONTROL 不適格な受信者を除外]**：このオプションを使用すると、オファーの実施要件を満たさない受信者の除外を有効または無効にすることができます。実施要件を満たす提案の数は、リクエストされた提案数よりも少ないことがあります。このボックスをオンにすると、十分な提案が揃わない受信者が配信から除外されます。オフにすると、そのような受信者は、除外はされませんが、リクエストされた数の提案を受け取ることはできません。
* **[!UICONTROL オファーが選択されていない場合は表示しない]**：このオプションを使用すると、提案の 1 つが存在しない場合に、どのようにメッセージを処理するかを選択できます。このボックスをオンにすると、見つからない提案の表示域が表示されず、その提案に関するコンテンツは、メッセージに表示されません。このボックスをオフにすると、送信中にメッセージ自体がキャンセルされ、受信者は、すべてのメッセージを受信しなくなります。

## ワークフローでのオファーの送信{#offer-via-wf}

いくつかのワークフローアクティビティで、オファーの表示方法を定義できます。

* エンリッチメント
* オファーエンジン
* オファー（セル別）

### エンリッチメント {#enrichment}

**エンリッチメント**&#x200B;アクティビティを使用すると、配信の受信者へのオファーに、オファーやリンクを追加できます。

![](../assets/do-not-localize/book.png) エンリッチメントアクティビティの詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/enrichment.html?lang=ja)を参照してください

例えば、配信の前に受信者クエリ用のデータをエンリッチメントできます。

![](assets/int_enrichment_offer1.png)

オファー提案を指定するには、2 つの方法があります。

* オファーまたはオファーエンジン呼び出しを指定します。
* オファーへのリンクを参照します。

#### オファーまたはオファーエンジン呼び出しの指定 {#specifying-an-offer-or-a-call-to-the-offer-engine}

**クエリ**&#x200B;アクティビティを設定した後：

1. **エンリッチメント**&#x200B;アクティビティを追加して開きます。
1. 「**[!UICONTROL エンリッチメント]**」タブで、「**[!UICONTROL データを追加]**」を選択します。
1. 追加するデータタイプで「**[!UICONTROL オファーの提案]**」を選択します。

   ![](assets/int_enrichment_offer2.png)

1. 追加される提案の識別子とラベルを指定します。
1. オファーの選択を指定します。これには、次の 2 つのオプションを使用できます。

   * **[!UICONTROL カテゴリー内で最適なオファーを検索]**：このオプションをオンにする場合は、オファーエンジン呼び出しのパラメーター（オファースペース、カテゴリまたはテーマ、コンタクト日、保持するオファーの数）を指定します。エンジンは、これらのパラメーターに基づいて、追加するオファーを自動的に計算します。「**[!UICONTROL カテゴリ]**」フィールドと「**[!UICONTROL テーマ]**」フィールドは、両方同時には使用せず、どちらか一方のみ入力することをお勧めします。

      ![](assets/int_enrichment_offer3.png)

   * **[!UICONTROL 事前定義済みオファー]**：このオプションをオンにする場合は、オファースペース、特定のオファーおよびコンタクト日を指定して、オファーエンジンを呼び出さずに、追加するオファーを直接設定します。

      ![](assets/int_enrichment_offer4.png)

1. 次に、選択したチャネルに対応する配信アクティビティを設定します。[詳細](#offer-into-a-delivery)

   >[!NOTE]
   >
   >プレビューできる提案の数は、配信で直接実行される設定ではなく、エンリッチメントアクティビティで実行される設定で決まります。

#### オファーへのリンクの参照 {#referencing-a-link-to-an-offer}

**エンリッチメント**&#x200B;アクティビティでは、オファーへのリンクを参照することもできます。

そのためには、次の手順に従います。

1. アクティビティの「**[!UICONTROL エンリッチメント]**」タブで「**[!UICONTROL データを追加]**」を選択します。
1. 追加するデータのタイプを選択するウィンドウで、「**[!UICONTROL リンク]**」を選択します。
1. 設定するリンクのタイプとターゲットを選択します。この場合、ターゲットはオファースキーマです。

   ![](assets/int_enrichment_link1.png)

1. エンリッチメントアクティビティのインバウンドテーブルデータ（ここでは受信者テーブル）とオファーテーブルとの結合を指定します。例えば、オファーコードを受信者にリンクできます。

   ![](assets/int_enrichment_link2.png)

1. 次に、選択したチャネルに対応する配信アクティビティを設定します。[詳細](#offer-into-a-delivery)

   >[!NOTE]
   >
   >プレビューできる提案の数は、配信で実行した設定で決まります。

#### オファーのランク付けと重み付けの保存 {#storing-offer-rankings-and-weights}

デフォルトでは、オファーの配信に&#x200B;**エンリッチメント**&#x200B;アクティビティを使用しても、オファーのランク付けと重み付けが提案テーブルに格納されません。

>[!NOTE]
>
>「**[!UICONTROL オファーエンジン]**」アクティビティは、デフォルトではこの情報を格納しませんが、

次の方法でこの情報を保存することができます。

1. 「クエリ」アクティビティの後、配信アクティビティの前に配置された「エンリッチメント」アクティビティで、オファーエンジンの呼び出しを作成します。[詳細](#specifying-an-offer-or-a-call-to-the-offer-engine)
1. アクティビティのメインウィンドウで「**[!UICONTROL 追加データを編集...]**」を選択します。

   ![](assets/ita_enrichment_rankweight_1.png)

1. ランキング用に「**[!UICONTROL @rank]**」列を追加し、オファーの重み付け用に「**[!UICONTROL @weight]**」列を追加します。

   ![](assets/ita_enrichment_rankweight_2.png)

1. 追加を確認し、ワークフローを保存します。

これで、オファーのランキングと重み付けが自動的に格納されるようになります。この情報は、配信の「**[!UICONTROL オファー]**」タブに表示されます。

### オファーエンジン {#offer-engine}

「**[!UICONTROL オファーエンジン]**」アクティビティでも、配信の前にオファーエンジンの呼び出しを指定できます。

![](../assets/do-not-localize/book.png) **オファーエンジン**&#x200B;アクティビティの詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/offer-engine.html?lang=ja)を参照してください。

このアクティビティは、**エンリッチメント**&#x200B;アクティビティと同じ原則でエンジン呼び出しによって作動します。つまり、配信前にエンジンで計算したオファーでインバウンド母集団のデータを強化します。

![](assets/int_offerengine_activity2.png)

**クエリ**&#x200B;アクティビティを設定した後：

1. 「**[!UICONTROL オファーエンジン]**」アクティビティを追加し、開きます。
1. 使用可能な各種フィールドに入力して、オファーエンジン呼び出しのパラメーター（オファースペース、カテゴリまたはテーマ、コンタクト日、保持するオファーの数）を指定します。エンジンは、これらのパラメーターに基づいて、追加するオファーを自動的に計算します。

   >[!CAUTION]
   >
   >このアクティビティを使用する場合、配信に使用されたオファーの提案のみが格納されます。

   ![](assets/int_offerengine_activity1.png)

1. 次に、選択したチャネルに対応する配信アクティビティを設定します。[詳細](#inserting-an-offer-proposition-into-a-delivery)

### オファー（セル別） {#offers-by-cell}

「**[!UICONTROL オファー（セル別）]**」アクティビティでは、インバウンド母集団（例：クエリから）を複数のセグメントに分散させ、それらの各セグメントに提示するオファーを指定できます。

![](../assets/do-not-localize/book.png) **セル別オファー**&#x200B;アクティビティの詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/offers-by-cell.html?lang=ja)を参照してください。

それには、次の手順に従います。

1. ターゲットの母集団を指定したら、「**[!UICONTROL オファー（セル別）]**」アクティビティを追加して、それを開きます。
1. 「**[!UICONTROL 一般]**」タブで、オファーを提示するオファースペースを選択します。
1. 「**[!UICONTROL セル]**」タブで「**[!UICONTROL 追加]**」ボタンをクリックして、別のサブセットを指定します。

   * 適用可能なフィルタリングおよび制限ルールを使用して、サブセットの母集団を指定します。
   * サブセットに提示するオファーを選択します。利用できるオファーは、前の手順で選択したオファー環境で実施要件を満たすオファーです。

      ![](assets/int_offer_per_cell1.png)

1. 次に、選択したチャネルに対応する配信アクティビティを設定します。

<!--

## Delivering with delivery outlines {#delivering-with-delivery-outlines}

You can also present offers in a delivery using delivery outlines.

For more information on delivery outlines, refer to the Campaign - MRM guide.

1. Create a new campaign or access an existing campaign.
1. Access the delivery outlines via the campaign's **[!UICONTROL Edit]** > **[!UICONTROL Documents]** tab.
1. Add an outline then insert as many offers as you like into it by right-clicking on the outline and selecting **[!UICONTROL New]** > **[!UICONTROL Offer]**, then save the campaign.


1. Create a delivery whose delivery outlines you have access to (for example, a direct mail delivery).
1. When editing the delivery, click **[!UICONTROL Select a delivery outline]**.

   >[!NOTE]
   >
   >Depending on the type of delivery, this option can be found in the **[!UICONTROL Properties]** > **[!UICONTROL Advanced]** menu (for email deliveries for example).


1. Using the **[!UICONTROL Offers]** button, you can then configure the offer space as well as the number of offers to present in the delivery.


1. Add the propositions into the delivery body using the personalization fields (for more on this, refer to the [Inserting an offer proposition into a delivery](#inserting-an-offer-proposition-into-a-delivery) section), or in the case of a direct mail delivery, by editing the extraction file format.

   Propositions will be selected from the offers referenced in the delivery outline.

   >[!NOTE]
   >
   >Information regarding the offer rankings and weights is only saved in the proposition table if the offers are generated directly in the delivery.
-->
