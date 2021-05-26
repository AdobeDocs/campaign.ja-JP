---
solution: Campaign v8
product: Adobe Campaign
title: CampaignとAdobe Targetの使用
description: CampaignとAdobe Targetの使用方法を説明します
feature: 概要
role: Data Engineer
level: Beginner
exl-id: d1d57aa8-b811-470f-a8a6-18da3a700f1a
source-git-commit: 4ae0c968bd68d76d7ceffb91023d5426d6a810ea
workflow-type: tm+mt
source-wordcount: '1045'
ht-degree: 54%

---

# CampaignとAdobe Targetの使用

CampaignとTargetを接続して、Adobe TargetのオファーをAdobe CampaignのEメール配信に含めます。

この統合により、次のような使用例を実装できます。Adobe Campaign経由で送信されたEメールを受信者が開くと、Adobe Targetを呼び出すことで、コンテンツの動的バージョンを表示できます。 この動的バージョンは、E メールを作成したときに事前に指定したルールに応じて自動生成されます。

>[!NOTE]
>この統合が対応するのは、静的画像だけです。その他のタイプのコンテンツはパーソナライズできません。

[!DNL :speech_balloon:] 管理対象Cloud Servicesのユーザーは、アドビに連絡 [し](../start/campaign-faq.md#support) て、CampaignのExperience Cloudトリガーを実装します。

Adobe Targetでは、次のタイプのデータを使用できます。

* Adobe Campaignデータベースからのデータ
* Adobe Targetで訪問者IDにリンクされたセグメント（使用するデータが法的制限の対象でない場合のみ）
* Adobe Target データ：ユーザーエージェント、IP アドレス、位置情報データ

## 動的コンテンツの挿入

以下の例では、Adobe Targetの&#x200B;**動的なオファー**&#x200B;をAdobe CampaignのEメールに統合する方法を学びます。

受信者の国に応じて動的に変化する画像を含むメッセージを作成したいと考えています。 データは、各 mbox リクエストごとに、訪問者の IP アドレスに基づいて送信されます。

この E メールでは、画像の 1 つが次のユーザーエクスペリエンスに従って動的に変化します。

* E メールがフランスで開かれている。
* E メールが米国で開かれている。
* どちらの条件にも該当しない場合、デフォルトの画像が表示される。

![](assets/target_4.png)

次の手順は、Adobe CampaignとAdobe Targetで実行する必要があります。

1. [ダイナミックオファーのEメールへの挿入](#inserting-dynamic-offer)
1. [リダイレクトオファーの作成](#create-redirect-offers)
1. [オーディエンスの作成](#audiences-target)
1. [エクスペリエンスのターゲット設定アクティビティの作成](#creating-targeting-activity)
1. [プレビューとメッセージの送信](#preview-send-email)

### ダイナミックオファーをEメールに挿入します。{#inserting-dynamic-offer}

Adobe Campaignで、Eメールのターゲットとコンテンツを定義します。 Adobe Targetから動的画像を挿入できます。

これをおこなうには、デフォルトの画像のURL、場所名、Adobe Targetに転送するフィールドを指定します。

Adobe Campaign では、2 通りの方法で Target から E メールに動的イメージを挿入できます。

* デジタルコンテンツエディターを使用している場合は、既存の画像を選択して、ツールバーで&#x200B;**[!UICONTROL 挿入]**／**[!UICONTROL Adobe Target からの動的画像]**&#x200B;を選択します。

   ![](assets/target_5.png)

* 標準のエディターを使用している場合は、画像を挿入する場所にカーソルを移動し、パーソナライゼーションドロップダウンメニューから&#x200B;**[!UICONTROL 含める]**／**[!UICONTROL Adobe Target からの動的画像]**&#x200B;を選択します。

   ![](assets/target_12.png)

次に、画像パラメーターを定義します。

* **[!UICONTROL デフォルトの画像]**&#x200B;のURLは、どの条件も満たされない場合に表示される画像です。 アセットライブラリから画像を選択することもできます。
* **[!UICONTROL ターゲットの場所]**&#x200B;は、ダイナミックオファーの場所の名前です。 Adobe Targetアクティビティでこの場所を選択する必要があります。
* **[!UICONTROL ランディングページ]**&#x200B;を使用すると、デフォルトの画像をデフォルトのランディングページにリダイレクトできます。 このURLは、デフォルト画像が最終的なEメールに表示される場合にのみ適用されます。 これはオプションです。
* **[!UICONTROL 追加の判定パラメーター]**&#x200B;は、Adobe Targetセグメントで定義されたフィールドとAdobe Campaignフィールドの間のマッピングを定義します。 使用する Adobe Campaign フィールドは、rawbox で指定されている必要があります。この例では、「国」フィールドを追加しています。

Adobe Target の設定で Enterprise 権限を使用している場合は、対応するプロパティをこのフィールドに追加します。Target の Enterprise 権限について詳しくは、[このページ](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/enterprise/properties-overview.html?lang=en#administer)を参照してください。

![](assets/target_13.png)

### リダイレクトオファーの作成{#create-redirect-offers}

Adobe Targetでは、様々なバージョンのオファーを作成できます。 各ユーザーエクスペリエンスに応じて、リダイレクトオファーを作成し、表示される画像を指定できます。

ここでは、2 つのリダイレクトオファーが必要です。3 番目（デフォルト）のものは、Adobe Campaign で定義します。

1. Target Standard で新しいリダイレクトオファーを作成するには、「**[!UICONTROL コンテンツ]**」タブで「**[!UICONTROL コードオファー]**」をクリックします。

1. 「**[!UICONTROL 作成]**」、「**[!UICONTROL リダイレクトオファー]**」の順にクリックします。

   ![](assets/target_9.png)

1. オファーの名前と画像の URL を入力します。

   ![](assets/target_6.png)

1. 残りのリダイレクトオファーについても同じ手順を繰り返します。詳しくは、この[ページ](https://experienceleague.adobe.com/docs/target/using/experiences/offers/offer-redirect.html?lang=en#experiences)を参照してください。

### オーディエンスの作成{#audiences-target}

Adobe Targetでは、2つのオーディエンスを作成し、オファーを訪問する人を分類して、異なるコンテンツを配信する必要があります。 オーディエンスごとに、オファーを表示できる人を定義するルールを追加します。

1. Target で新しいオーディエンスを作成するには、「**[!UICONTROL オーディエンス]**」タブで「**[!UICONTROL オーディエンスを作成]**」をクリックします。

   ![](assets/audiences_1.png)

1. オーディエンスに名前を追加します。

   ![](assets/audiences_2.png)

1. 「**[!UICONTROL ルールを追加]**」をクリックして、カテゴリを選択します。このルールでは、特定の条件を使用して訪問者をターゲティングしています。条件を追加したり、他のカテゴリに新しいルールを作成したりしてルールを調整できます。

1. 残りのオーディエンスについても同じ手順を繰り返します。

### エクスペリエンスのターゲット設定アクティビティ{#creating-targeting-activity}の作成

Adobe Targetで、エクスペリエンスのターゲット設定アクティビティを作成し、様々なエクスペリエンスを定義して、対応するオファーに関連付ける必要があります。

最初に、オーディエンスを定義する必要があります。

1. エクスペリエンスターゲット設定アクティビティを作成するには、「**[!UICONTROL アクティビティ]**」タブで、「**[!UICONTROL アクティビティを作成]**」をクリックし、「**[!UICONTROL エクスペリエンスターゲット設定]**」をクリックします。

   ![](assets/target_10.png)

1. **[!UICONTROL Experience Composer]** として「**[!UICONTROL フォーム]**」を選択します。

1. 「**[!UICONTROL オーディエンスを変更]**」ボタンをクリックして、オーディエンスを選択します。

   ![](assets/target_10_2.png)

1. 前の手順で作成したオーディエンスを選択します。

   ![](assets/target_10_3.png)

1. 「**[!UICONTROL エクスペリエンスのターゲットを追加]**」をクリックして、別のエクスペリエンスを作成します。

次に、各オーディエンスのコンテンツを追加します。

1. Adobe Campaign でダイナミックオファーを挿入する際に選択した場所名を選択します。

   ![](assets/target_15.png)

1. ドロップダウンボタンをクリックして、「**[!UICONTROL リダイレクトオファーを変更]**」を選択します。

   ![](assets/target_content.png)

1. 前の手順で作成したリダイレクトオファーを選択します。

   ![](assets/target_content_2.png)

1. 2 番目のエクスペリエンスについても同じ手順を繰り返します。

**[!UICONTROL ターゲット]**&#x200B;ウィンドウに、アクティビティの概要が表示されます。必要に応じて、他のエクスペリエンスを追加できます。

![](assets/target_experience.png)

**[!UICONTROL 目標と設定]**&#x200B;ウィンドウでは、優先度、目標、期間を設定して、アクティビティをパーソナライズできます。

「**[!UICONTROL レポート設定]**」セクションでは、アクションを選択し、目標達成を判別するためのパラメーターを編集できます。

![](assets/target_experience_2.png)

## メッセージ{#preview-send-email}をプレビューして送信します。

Adobe Campaign では、E メールをプレビューして、様々な受信者に対するレンダリングをテストできます。

作成されたエクスペリエンスごとに画像が変化することがわかります。

これで、Target からのダイナミックオファーを含む E メールを送信する準備ができました。

![](assets/target_20.png)
