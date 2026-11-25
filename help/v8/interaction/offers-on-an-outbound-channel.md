---
product: campaign
title: アウトバウンドチャネルのオファー
description: アウトバウンドチャネルのオファー
feature: Interaction, Offers
version: Campaign v8, Campaign Classic v7
audience: interaction
content-type: reference
topic-tags: case-study
exl-id: 77fee343-09d1-4d60-be43-efe02953a70c
TQID: 'https://experienceleague.adobe.com/WGoYaHNR13J47UVmKpHRSm9aw0T8ZrvHUl9zGXezQBU'
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
source-git-commit: 8bfb312d62f56f19899a83de6b0dd58c56e04ab2
workflow-type: tm+mt
source-wordcount: '851'
ht-degree: 55%
---
# アウトバウンドチャネルのオファー{#offers-on-an-outbound-channel}



## メールによるオファー配信 {#email-offer-delivery}

データベースにアフリカ旅行のカテゴリがあり、 各オファーの実施要件、コンテキスト、表示域は既に設定されているとします。 これから、メール経由でオファーを提示するためのキャンペーンを作成します。

1. マーケティングキャンペーンとターゲティングワークフローを作成します。

   ![Trips to Africa キャンペーンのターゲティングワークフロー：フォルダー、配信、重複排除、および2つのリスト更新アクティビティ &#x200B;](assets/offer_delivery_example_001.png)

1. メール配信を編集し、**[!UICONTROL オファー]**&#x200B;アイコンをクリックします。

   ![&#x200B; オファー管理ウィンドウ、オファー選択オプション、オファースペースフィールドを開くオファーアイコンを含むメール配信](assets/offer_delivery_example_002.png)

1. 休暇シーズンに合ったオファー環境用のメールスペースを選択します。

   購読者ジャーニーを含む、利用可能な電子メールスペースが表示されたオファースペースリストを含む![&#x200B; オファー管理ウィンドウ &#x200B;](assets/offer_delivery_example_003.png)

1. アフリカ旅行のオファーを含んだカテゴリを選択します。

   ![&#x200B; オファーカタログとジャーニーの下にカテゴリーツリーが展開されたオファー管理ウィンドウ、アフリカのカテゴリが強調表示されている](assets/offer_delivery_example_004.png)

1. 配信するオファーの数を 2 に設定します。

   ![&#x200B; カテゴリーがアフリカで、メッセージあたりの提案数が2](assets/offer_delivery_example_005.png)に設定されたオファー管理ウィンドウ

1. オファー管理ウィンドウを閉じ、配信のコンテンツを作成します。

   ![&#x200B; デフォルトのインクルード ビューを備えたメール配信HTML コンテンツエディター。オファー提案の準備が整っています](assets/offer_delivery_example_006.png)

1. メニューを使用して、最初のオファー提案を挿入し、HTML レンダリング関数を選択します。

   ![HTML コンテンツツールバーメニュー：提案、その後、提案1、レンダリング関数およびHTML レンダリング &#x200B;](assets/offer_delivery_example_007.png)

1. 2 番目のオファー提案を挿入します。

   ![両方の提案を含むメール HTML コンテンツには、購読解除リンクの前に、レンダリング/html ビューを使用した行が含まれます](assets/offer_delivery_example_008.png)

1. 配信に含まれるオファーを確認するために、「**[!UICONTROL プレビュー]**」をクリックします。受信者を選択して、そのユーザーが受け取るオファーのプレビューを表示します。

   ![選択した受信者の「サハラを越える」オファーのタイトル、テキスト、画像を含むメールを表示する「配信プレビュー」タブ &#x200B;](assets/offer_delivery_example_009.png)

1. 配信を保存し、ターゲティングワークフローを開始します。
1. 配信を開き、配信の「**[!UICONTROL 監査]**」タブをクリックします。カタログに格納されている様々なオファーの中からオファーエンジンによって選択された提案を確認できます。

   ![配信監査タブ ピラミッドやサハラのオファーなど、オファーごとに生成された提案を一覧表示するログ &#x200B;](assets/offer_delivery_example_010.png)

## オファーシミュレーションの実行 {#perform-an-offer-simulation}

1. 「**[!UICONTROL プロファイルとターゲット]**」タブで、「**[!UICONTROL シミュレーション]**」リンクをクリックしたあと、「**[!UICONTROL 作成]**」ボタンをクリックします。

   ![&#x200B; テンプレート、ラベル、フォルダーを含む新しいオファーシミュレーションダイアログを開く「作成」ボタンを含むシミュレーションリスト &#x200B;](assets/offer_simulation_001.png)

1. ラベルを選択し、必要に応じて実行設定を指定します。

   ![1年購読者、シミュレーション フォルダー、実行設定のラベルが付いた新しいオファーのシミュレーション ダイアログ &#x200B;](assets/offer_simulation_example_002.png)

1. シミュレーションを保存します。 新しいタブが表示されます。

   「編集」タブと「シミュレーションを開始」ボタンを持つ1年間の購読者の![&#x200B; シミュレーションダッシュボード &#x200B;](assets/offer_simulation_example_003.png)

1. 「**[!UICONTROL 編集]**」タブをクリックし、「**[!UICONTROL スコープ]**」をクリックします。

   ![&#x200B; シミュレーション編集タブ、スコープ セクション、環境またはカテゴリ、オファースペース、テーマ、連絡日および提案](assets/offer_simulation_example_004.png)

1. オファーをシミュレートするカテゴリを選択します。

   ![&#x200B; オファー – デザインおよびオファーカタログの下に拡張された環境またはカテゴリーリスト。旅行カテゴリが選択されています](assets/offer_simulation_example_005.png)

1. シミュレーションに使用するオファースペースを選択します。

   ![&#x200B; ダイレクトメールと電子メールを提供する旅行カテゴリの下のオファースペースリスト （環境 – 受信者） &#x200B;](assets/offer_simulation_example_006.png)

1. 有効制限日を入力します。 ここでは、少なくとも開始日を指定する必要があります。 この情報は、特定の日において有効なオファーを絞り込むためにオファーエンジンで使用されます。
1. 必要な場合は、1 つまたは複数のテーマを選択し、このキーワードが設定に含まれているオファーのみを提案の対象としてオファー数を限定します。

   この例では、「**Travel**」（旅行）カテゴリの下に、2 つのテーマを持つ 2 つのサブカテゴリがあります。 「**Customers>1 year**」（1 年を超える顧客）のテーマに属するオファーに関するシミュレーションを実行することにします。

   ![旅行カテゴリのテーマ フィールドに、1年を超える顧客テーマが入力された範囲セクション &#x200B;](assets/offer_simulation_example_007.png)

1. ターゲットにする受信者を選択します。

   ![&#x200B; ターゲット選択フィルターウィザードで受信者のリストを選択し、その後、頻繁に旅行するユーザーのリスト &#x200B;](assets/offer_simulation_example_008.png)

1. 各受信者に送信されるオファーの数を設定します。

   この例では、オファーエンジンにより、各受信者に対して重み付けが最も大きい 3 つのオファーが選択されます。

   ![提案の数が3に設定され、特別オファー配信リストのターゲットクエリが設定された範囲セクション &#x200B;](assets/offer_simulation_example_009.png)

1. 設定を保存し、「**[!UICONTROL ダッシュボード]**」タブの「**[!UICONTROL 開始]**」をクリックしてシミュレーションを実行します。

   ![&#x200B; ダッシュボード開始シミュレーションダイアログで確認を求め、OK ボタンが強調表示されている](assets/offer_simulation_example_010.png)

1. シミュレーションが完了したら、「**[!UICONTROL 結果]**」タブで、提案の詳しい分類をオファーごとに確認します。

   この例では、オファーエンジンによって 3 件の提案を基にした分類が表示されています。

   オファー別の提案の内訳が表示された![&#x200B; シミュレーション結果タブ：母集団サイズ 30、提案数30](assets/offer_simulation_example_011.png)

1. 「**[!UICONTROL オファーの分類（ランキング別）]**」を表示し、オファーエンジンによって選択されたオファーのリストを確認します。

   ![米国への旅行とフランスの発見に関するオファーランキング表と円グラフを含むオファーのランク別の内訳レポート &#x200B;](assets/offer_simulation_example_012.png)

1. 必要な場合は、スコープ設定を変更し、「**[!UICONTROL シミュレーションを開始]**」をクリックしてシミュレーションを再実行できます。

   ![&#x200B; ダッシュボード開始シミュレーションダイアログで確認を求め、OK ボタンが強調表示されている](assets/offer_simulation_example_010.png)

1. シミュレーションデータの保存が必要な場合は、レポートの履歴機能またはエクスポート機能を使用して保存できます。

   ![書き出しメニューと保存アイコンがハイライト表示されたランク別オファーの内訳レポート &#x200B;](assets/offer_simulation_example_013.png)
