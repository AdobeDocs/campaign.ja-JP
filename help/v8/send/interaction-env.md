---
solution: Campaign v8
product: Adobe Campaign
title: Campaignインタラクション演算子
description: オファー管理オペレーターの作成
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: a50a6cc28d9312910668205e528888fae5d0b1aa
workflow-type: tm+mt
source-wordcount: '292'
ht-degree: 40%

---

# ライブ環境とデザイン環境{#live-design-environments}

インタラクションは、次の 2 つのオファー環境を使用して運用されます。

* **[!UICONTROL デザイン環境]**：編集の対象となる、変更可能なオファーを含んだオファー環境。これらのオファーは、承認サイクルを経ておらず、コンタクト先には配信されません。
* **[!UICONTROL ライブ環境]**：コンタクト先に提示される承認済みのオファーを含んだオファー環境。この環境のオファーは、読み取り専用です。

![](assets/offer_environments_overview_001.png)

各&#x200B;**[!UICONTROL デザイン]**&#x200B;環境は、**[!UICONTROL ライブ]**&#x200B;環境にリンクされています。オファーの作成が完了すると、そのコンテンツと実施要件ルールは、承認サイクルに進みます。承認サイクルを完了したオファーは、**[!UICONTROL ライブ]**&#x200B;環境に自動的にデプロイされ、その瞬間から、配信できるようになります。

デフォルトでは、Campaignには、**[!UICONTROL デザイン]**&#x200B;環境と、それにリンクされた&#x200B;**[!UICONTROL ライブ]**&#x200B;環境が用意されています。 両方の環境は、[組み込みの受信者テーブル](../dev/datamodel.md#ootb-profiles)をターゲットとするように事前に設定されています。

>[!NOTE]
>
>受信者テーブルをターゲットにするには、ターゲットマッピングアシスタントを使用して環境を作成する必要があります。 [詳細情報](#creating-an-offer-environment)。

![](assets/offer_environments_overview_002.png)

配信責任者は、**[!UICONTROL ライブ]**&#x200B;環境のみを表示し、オファーを活用して配信できます。 オファーマネージャーは、**[!UICONTROL デザイン]**&#x200B;環境を表示および使用し、**[!UICONTROL ライブ]**&#x200B;環境を表示できます。 [詳細情報](interaction-operators.md)。

## オファー環境の作成{#creating-an-offer-environment}

デフォルトでは、Campaignには、受信者テーブルをターゲットにする組み込み環境（識別されたオファー）が用意されています。 別のテーブルをターゲットにするには、次の手順に従います。

1. **[!UICONTROL 管理]** / **[!UICONTROL キャンペーン管理]** / **[!UICONTROL ターゲットマッピング]**&#x200B;を表示し、使用するターゲットマッピングを右クリックして、**[!UICONTROL アクション]** / **[!UICONTROL ターゲティングディメンションのオプションを変更します。]**

   ![](assets/offer_env_anonymous_001.png)

1. 「**[!UICONTROL 次へ]**」をクリックし、「**[!UICONTROL 提案のストレージスキーマを生成]**」オプションを選択して、「**[!UICONTROL 保存]**」をクリックします。

   ![](assets/offer_env_anonymous_002.png)

   >[!NOTE]
   >
   >このオプションが既にオンになっている場合は、オフにしてから再度オンにします。

1. Adobe Campaignは、前に有効にしたターゲットマッピングからのターゲティング情報を使用して、2つの環境（**[!UICONTROL デザイン]**&#x200B;と&#x200B;**[!UICONTROL ライブ]**）を作成します。 この環境には、ターゲティング情報があらかじめ設定されています。
