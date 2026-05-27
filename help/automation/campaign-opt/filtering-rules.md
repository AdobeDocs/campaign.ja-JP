---
product: campaign
title: フィルタールールの設定
description: フィルタールールの設定方法を説明します
feature: Typology Rules
exl-id: 17507cdf-211f-4fa2-abb9-33d4f6dc47bb
TQID: https://experienceleague.adobe.com/4dOJKJq9bGT93592ugAfrbQU27OBBpUp25QRpzDqtW0
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
topic_v2: id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 550
ht-degree: 93%

---

# フィルタリングルール{#filtering-rules}

フィルタールールを使用して、クエリで定義された条件に基づいて除外するメッセージを選択します。 これらのルールは、ターゲティングディメンションにリンクされます。

フィルタリングルールは、他のタイプのルール（コントロール、プレッシャーなど）とリンクできます。 タイポロジで、または専用の&#x200B;**フィルタリング** タイポロジでグループ化されます。 [詳細情報](#create-and-use-a-filtering-typology)。

## フィルタールールの作成 {#create-a-filtering-rule}

例えば、ニュースレターの購読者をフィルタリングして、未成年の受信者にメッセージを送信しないようにすることができます。

このフィルターを定義するには、次の手順に従います。

1. Campaign エクスポーラーの&#x200B;**[!UICONTROL 管理／キャンペーン管理／タイポロジ管理／タイポロジルール]**&#x200B;フォルダーを参照し、「**新規**」アイコンをクリックして、タイポロジルールを作成します。
1. すべてのチャネルに適用できる&#x200B;**[!UICONTROL フィルター]**&#x200B;タイポロジルールを作成します。

   ![](assets/campaign_opt_create_filter_01.png)

1. 「**フィルター**」タブから、デフォルトのターゲティングディメンションを&#x200B;**サブスクリプション** （**nms:subscription**）に変更します。

   ![](assets/campaign_opt_create_filter_02.png)

1. **[!UICONTROL ターゲティングディメンションからクエリを編集...]** リンクを使用して、フィルターを作成します。

   ![](assets/campaign_opt_create_filter_03.png)

1. 受信者の年齢に対してフィルターを適用し、フィルター条件を保存します。

   ![](assets/campaign_opt_create_filter_03b.png)

1. 「**タイポロジ**」タブで、このルールをキャンペーンタイポロジにリンクし、保存します。

   ![](assets/campaign_opt_create_filter_04.png)

配信でこのルールを使用すると、未成年の購読者は自動的に除外されます。 ルールが適用されるタイミングを示すメッセージが表示されます。

![](assets/campaign_opt_create_filter_05.png)

## フィルタールールの決定 {#condition-a-filtering-rule}

リンクされている配信や配信の概要に基づいて、フィルタールールを適用する範囲を制限することができます。

まず、タイポロジルールの「**[!UICONTROL 一般]**」タブに移動し、適用条件のタイプを選択して、フィルターを作成します。
<!--
![](assets/campaign_opt_create_filter_06.png)
-->


これにより、ルールがすべての配信にリンクされている場合でも、ルールが適用されるのは定義されたフィルターの条件に一致する配信のみに制限されます。

>[!NOTE]
>
>タイポロジおよびフィルタールールは、「**[!UICONTROL 配信の概要]**」アクティビティのワークフローで使用できます。 [詳細情報](../workflow/delivery-outline.md)。

## フィルタータイポロジの作成と使用 {#create-and-use-a-filtering-typology}

フィルタールールのみを含む&#x200B;**[!UICONTROL フィルター]**&#x200B;タイポロジを作成できます。

![](assets/campaign_opt_create_typo_filtering.png)

作成したタイポロジは、ターゲットを選択して、配信にリンクできます。配信ウィザードで、「**[!UICONTROL 宛先]**」リンクをクリックし、「**[!UICONTROL 除外]**」タブをクリックします。

![](assets/campaign_opt_apply_typo_filtering.png)

次に、配信に適用するフィルタータイポロジを選択します。 「**[!UICONTROL 追加]**」ボタンをクリックして、適用するタイポロジを選択してください。

タイポロジでグループ化せず、このタブから直接フィルタールールをリンクすることもできます。 その場合は、このウィンドウの下部のセクションを使用します。

![](assets/campaign_opt_select_typo_filtering.png)

>[!NOTE]
>
>このウィンドウで選択できるのは、タイポロジとフィルタールールのみです。
>
>フィルターの設定を配信テンプレートで定義すると、そのテンプレートを使用して作成されるすべての新しい配信に、自動的にこの設定が適用されます。
>

## デフォルトの配信除外ルール {#default-deliverability-exclusion-rules}

デフォルトで利用できるフィルタールールには「**[!UICONTROL アドレスを除外]**」（**[!UICONTROL addressExclusions]**）および「**[!UICONTROL ドメインを除外]**」（**[!UICONTROL domainExclusions]**）の 2 つがあります。 電子メールの分析時には、配信性能インスタンスで管理された暗号化グローバル抑止リストに含まれている禁止アドレスや禁止ドメイン名がこれらのルールによって照合され、受信者の電子メールアドレスが該当していないかどうかの確認処理が実行されます。 該当した場合、その受信者宛てにはメッセージが送信されません。

これは、Spamtrap などの悪意あるアクティビティによってブロックリストに登録されることを防ぐためです。 例えば、会社の web フォーム経由で Spamtrap を使用して購読処理が実行されると、Spamtrap 宛てに確認メールが自動送信され、お使いのアドレスが自動的にブロックリスト登録される結果になります。

>[!NOTE]
>
>グローバル抑止リストに含まれているアドレスやドメイン名は非公開です。 除外された受信者の数に関する情報だけが配信分析ログに記録されます。
