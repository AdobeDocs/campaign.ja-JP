---
solution: Campaign
product: Adobe Campaign
title: キャンペーンインタラクション演算子
description: オファー管理演算子の作成
feature: 概要
role: Data Engineer
level: Beginner
translation-type: tm+mt
source-git-commit: b9de052de5aaeee4b089feb70bf20723be5c9cfa
workflow-type: tm+mt
source-wordcount: '292'
ht-degree: 40%

---

# ライブおよびデザインの環境{#live-design-environments}

インタラクションは、次の 2 つのオファー環境を使用して運用されます。

* **[!UICONTROL デザイン環境]**：編集の対象となる、変更可能なオファーを含んだオファー環境。これらのオファーは、承認サイクルを経ておらず、コンタクト先には配信されません。
* **[!UICONTROL ライブ環境]**：コンタクト先に提示される承認済みのオファーを含んだオファー環境。この環境のオファーは、読み取り専用です。

![](assets/offer_environments_overview_001.png)

各&#x200B;**[!UICONTROL デザイン]**&#x200B;環境は、**[!UICONTROL ライブ]**&#x200B;環境にリンクされています。オファーの作成が完了すると、そのコンテンツと実施要件ルールは、承認サイクルに進みます。承認サイクルを完了したオファーは、**[!UICONTROL ライブ]**&#x200B;環境に自動的にデプロイされ、その瞬間から、配信できるようになります。

デフォルトでは、キャンペーンには&#x200B;**[!UICONTROL デザイン]**&#x200B;環境と&#x200B;**[!UICONTROL ライブ]**&#x200B;環境がリンクされています。 両方の環境は、[組み込みの受信者テーブル](../dev/datamodel.md#ootb-profiles)をターゲットするように事前に設定されています。

>[!NOTE]
>
>ターゲット受信者テーブルを作成するには、ターゲットマッピングアシスタントを使用して環境を作成する必要があります。 [詳細情報](#creating-an-offer-environment)。

![](assets/offer_environments_overview_002.png)

配信管理者は、**[!UICONTROL ライブ]**&#x200B;環境の表示のみを行い、オファーを利用して配信できます。 オファーマネージャーは、**[!UICONTROL デザイン]**&#x200B;環境を表示して使用し、**[!UICONTROL ライブ]**&#x200B;環境を表示できます。 [詳細情報](interaction-operators.md)。

## オファー環境の作成{#creating-an-offer-environment}

デフォルトでは、キャンペーンには、受信者テーブル(識別されたオファー)のターゲットに対する環境が組み込まれています。 別の表をターゲットするには、次の手順に従います。

1. **[!UICONTROL 管理]**/**[!UICONTROL キャンペーン管理]**/**[!UICONTROL 配信マッピング]**&#x200B;を参照し、使用する配信マッピングを右クリックして、**[!UICONTROL アクション]**/**[!UICONTROL ターゲティングディメンション]**&#x200B;のオプションを変更します。

   ![](assets/offer_env_anonymous_001.png)

1. 「**[!UICONTROL 次へ]**」をクリックし、「**[!UICONTROL ストレージスキーマを作成して配置]**」オプションを選択して、「**[!UICONTROL 保存]**」をクリックします。

   ![](assets/offer_env_anonymous_002.png)

   >[!NOTE]
   >
   >このオプションが既にチェックされている場合は、チェックを外してから再度チェックを行います。

1. Adobe Campaignは、以前に有効にしたターゲットマッピングのターゲット情報を使用して、**[!UICONTROL デザイン]**&#x200B;と&#x200B;**[!UICONTROL ライブ]**&#x200B;の2つの環境を作成します。 この環境には、ターゲティング情報があらかじめ設定されています。
