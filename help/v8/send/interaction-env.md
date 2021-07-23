---
product: Adobe Campaign
title: Campaign インタラクションオペレーター
description: オファー管理オペレーターの作成
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: b11b42220dae7d0a878ba102523ee2825d6fb2e2
workflow-type: ht
source-wordcount: '292'
ht-degree: 100%

---

# ライブ／デザイン環境{#live-design-environments}

インタラクションは、次の 2 つのオファー環境を使用して運用されます。

* **[!UICONTROL デザイン環境]**：編集の対象となる、変更可能なオファーを含んだオファー環境。これらのオファーは、承認サイクルを経ておらず、コンタクト先には配信されません。
* **[!UICONTROL ライブ環境]**：コンタクト先に提示される承認済みのオファーを含んだオファー環境。この環境のオファーは、読み取り専用です。

![](assets/offer_environments_overview_001.png)

各&#x200B;**[!UICONTROL デザイン]**&#x200B;環境は、**[!UICONTROL ライブ]**&#x200B;環境にリンクされています。オファーの作成が完了すると、そのコンテンツと実施要件ルールは、承認サイクルに進みます。承認サイクルを完了したオファーは、**[!UICONTROL ライブ]**&#x200B;環境に自動的にデプロイされ、その瞬間から、配信できるようになります。

デフォルトでは、Campaign には、1 つの&#x200B;**[!UICONTROL デザイン]**&#x200B;環境とそれにリンクされた 1 つの&#x200B;**[!UICONTROL ライブ]**&#x200B;環境が付属しています。これらの環境は、[標準の受信者テーブル](../dev/datamodel.md#ootb-profiles)をターゲットとするように事前に設定されています。

>[!NOTE]
>
>受信者テーブルをターゲットにするには、ターゲットマッピングアシスタントを使用して環境を作成する必要があります。 [詳細情報](#creating-an-offer-environment)。

![](assets/offer_environments_overview_002.png)

配信責任者は、**[!UICONTROL ライブ]**&#x200B;環境のみを表示可能で、オファーを活用して配信できます。オファーマネージャーは、**[!UICONTROL デザイン]**&#x200B;環境を表示および使用したり、**[!UICONTROL ライブ]**&#x200B;環境を表示したりできます。[詳細](interaction-operators.md)

## オファー環境の作成 {#creating-an-offer-environment}

デフォルトでは、Campaign には、受信者テーブル（識別されたオファー）をターゲットとする組み込みの環境が 1 つ用意されています。別のテーブルをターゲットにするには、次の手順に従います。

1. **[!UICONTROL 管理]**／**[!UICONTROL Campaign 管理]**／**[!UICONTROL ターゲットマッピング]**&#x200B;を表示し、使用するターゲットマッピングを右クリックして、**[!UICONTROL アクション]**／**[!UICONTROL ターゲティングディメンションのオプションを変更]**&#x200B;を選択します。

   ![](assets/offer_env_anonymous_001.png)

1. 「**[!UICONTROL 次へ]**」をクリックし、「**[!UICONTROL 提案のストレージスキーマを生成]**」オプションを選択して、「**[!UICONTROL 保存]**」をクリックします。

   ![](assets/offer_env_anonymous_002.png)

   >[!NOTE]
   >
   >オプションがが既にオンになっている場合は、一度オフにしてからもう一度オンにしてください。

1. Adobe Campaign は、以前に有効化したターゲットマッピングのターゲティング情報を使用して、**[!UICONTROL デザイン]**&#x200B;と&#x200B;**[!UICONTROL ライブ]**&#x200B;の 2 つの環境を作成します。この環境には、ターゲティング情報があらかじめ設定されています。
