---
product: campaign
title: プレゼンテーションルール
description: プレゼンテーションルール
feature: Interaction, Offers
version: Campaign v8, Campaign Classic v7
audience: interaction
content-type: reference
topic-tags: case-study
exl-id: f9dd9ad6-48da-4a80-9405-109a433a1ed5
TQID: 'https://experienceleague.adobe.com/s2QV1BGLtUfyWg1BfYuryciF9STRK3HpIXNc6oQ0ATY'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: b6fcaf36-3bc4-4604-94f3-81b5d3f41ecf
    internal-label: Offer Management
  - id: 65702805-0026-5ca1-843a-144fa79f0883
    internal-label: Interaction
  - id: ea08db70-4682-59a2-9408-9aedd9548e07
    internal-label: Offers
topic_v2:
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
source-git-commit: 8bfb312d62f56f19899a83de6b0dd58c56e04ab2
workflow-type: tm+mt
source-wordcount: '730'
ht-degree: 63%
---
# プレゼンテーションルール{#presentation-rules}



## プレゼンテーションルールの作成 {#creating-a-presentation-rule}

欧州、アフリカ、米国、カナダ向けの旅行オファーがデータベースに数件格納されている事例があるとします。 「私たちはカナダへの旅行にオファーを送りたいのですが、受信者がこのタイプのオファーを拒否した場合、私たちはそれを再び送りたくありません。

そこで、カナダ旅行のオファーを受信者 1 人につき 1 回のみ送信し、拒否された場合は二度と送信しないようにルールを設定します。

1. Adobe Campaign のツリーで、**[!UICONTROL 管理]**／**[!UICONTROL キャンペーン管理]**／**[!UICONTROL タイポロジ管理]**／**[!UICONTROL タイポロジルール]**&#x200B;ノードに移動します。
1. 「**[!UICONTROL オファーのプレゼンテーション]**」タイプのルールを新規作成します。

   ルール タイプ リストを開き、オファーのプレゼンテーションを選択した![&#x200B; タイポロジ ルール作成フォーム &#x200B;](assets/offer_typology_example_001.png)

1. 必要に応じて、ラベルと説明を変更します。

   ![&#x200B; ラベル、オファープレゼンテーションの種類、電子メールチャネル、説明が入力されたタイポロジルールの「一般」タブ &#x200B;](assets/offer_typology_example_002.png)

1. 「**[!UICONTROL すべてのチャネル]**」オプションを選択して、ルールをすべてのチャネルに拡大します。

   ![すべてのチャネルが選択されたタイポロジルールのチャンネルリスト &#x200B;](assets/offer_typology_example_003.png)

1. 「**[!UICONTROL 式を編集]**」リンクをクリックし、式として「**[!UICONTROL カテゴリ]**」ノードを選択します。

   ![式を選択ダイアログが開いたクエリ ウィンドウで、カテゴリ フィールドを選択する](assets/offer_typology_example_004.png)

1. カナダ行き旅行のオファーに該当するカテゴリを選択し、「**[!UICONTROL OK]**」をクリックしてクエリウィンドウを閉じます。

   ![&#x200B; カテゴリに対するクエリがカナダと同じで、トラベルのオファーカテゴリーツリーでカナダ フォルダーが選択されています](assets/offer_typology_example_005.png)

1. 「**[!UICONTROL オファーのプレゼンテーション]**」タブで、環境内に設定されているのと同じディメンションを選択します。

   環境に一致するターゲティングディメンションとストレージディメンションを表示する![&#x200B; オファーのプレゼンテーションタブ &#x200B;](assets/offer_typology_example_006.png)

1. ルールを適用する期間を指定します。

   ![&#x200B; スライド期間、期間と見なされるフィールドが10d](assets/offer_typology_example_007.png)に設定されたオファーのプレゼンテーション タブ

1. 提案数を 1 つに制限して、既にカナダ旅行のオファーを拒否した受信者に同様のオファーが送られるのを防ぎます。

   ![提案の最大数フィールドが1](assets/offer_typology_example_008.png)に設定されたオファーのプレゼンテーション タブ

1. 「**[!UICONTROL 同じカテゴリのオファー]**」を選択して、「**Canada**」（カナダ）カテゴリに属するすべてのオファーを除外します。

   ![選択した同じカテゴリのオファーでカウントする提案のオファードロップダウン &#x200B;](assets/offer_typology_example_020.png)

1. 「**[!UICONTROL 却下された提案]**」フィルターを選択して、受信者に拒否された提案のみが考慮されるようにします。

   ![拒否された提案を選択した状態でカウントする提案の提案ステータス ドロップダウン &#x200B;](assets/offer_typology_example_021.png)

1. ルールを適用する受信者を指定します。

   この例では、受信者として「**Frequent travelers**」（よく旅行する人）を選択します。

   ![&#x200B; フィルターのクエリウィザードを編集して、ルールのターゲットとして頻繁に旅行者の受信者フォルダーを選択](assets/offer_typology_example_009.png)

1. オファーのタイポロジ内で、ルールを参照します。

   ルールの「![&#x200B; タイポロジ」タブに、オファータイポロジが選択されたタイポロジのリストが表示されているタイポロジを追加](assets/offer_typology_example_013.png)

1. オファー環境に移動し（この例では「**環境 - 受信者**」）、「**[!UICONTROL 実施要件]**」タブのドロップダウンリストで、先ほど作成した新しいタイポロジを参照します。

   オファーを表示するオファープレゼンテーションのタイポロジリストを含むオファー環境の![実施要件タブ &#x200B;](assets/offer_typology_example_014.png)

## プレゼンテーションルールの適用 {#applying-the-presentation-rule}

ここでは、先ほど作成したタイポロジルールを適用する手順の例を示します。

これから、カナダのカテゴリに属する最初のオファー提案を送信しようとしています。 ただし、このオファーを既に拒否したことがある受信者には再送しません。

1. 受信者フォルダー「**Frequent travelers**」からプロファイルを 1 つ選択します。実施要件を満たすオファーをチェックするために、「**[!UICONTROL 提案]**」タブをクリックし、「**[!UICONTROL プレビュー]**」タブをクリックします。

   この例の場合、**Tim Ramsey** というプロファイルは、「**Americas**」（南北アメリカ）カテゴリに属するオファーの実施要件を満たしています。

   ![受信者の提案タブ、プレビューのサブタブ、アメリカ大陸カテゴリの対象オファーのリスト &#x200B;](assets/offer_typology_example_015.png)

1. 最初に、**よく旅行する人**&#x200B;をターゲットにしたオファーのメール配信を作成します。
1. オファーエンジン呼び出しパラメーターを選択します。

   この例では、「**Travel in America**」（アメリカ旅行）カテゴリを選択します。このカテゴリには、サブカテゴリの「**Canada**」（カナダ）および「**United States**」（米国）が含まれています。

   ![南北アメリカ地域のカテゴリとメッセージごとに2つの提案を含むメール配信のオファー管理ダイアログ &#x200B;](assets/offer_typology_example_016.png)

1. メッセージの本文にオファーを挿入し、配信を送信します。 詳しくは、[アウトバウンドチャネルについて](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/offers/interaction-send-offers){target="_blank"}（Campaign v8 ドキュメント）を参照してください。

   受信者に、実施要件を満たすオファーが届きます。

1. 提案履歴を見ると、この受信者はカナダのオファーを拒否しています。

   ![&#x200B; カナダのスノーモバイルオファーを拒否ステータスにした受信者の提案履歴](assets/offer_typology_example_018.png)

1. この受信者の現在の実施要件に合ったオファーをチェックします。

   カナダ行きのオファーは選択されなくなりました。

   ![受信者プレビューのタブに、カナダのオファーがない状態で、対象となるオファーがニューヨークとグランドキャニオンに表示されている](assets/offer_typology_example_019.png)
