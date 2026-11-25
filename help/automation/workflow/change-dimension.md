---
product: campaign
title: ワークフローのディメンションの変更
description: ディメンションの変更アクティビティの使用方法を説明します
feature: Workflows, Targeting Activity
role: User
version: Campaign v8, Campaign Classic v7
exl-id: 71f36413-377a-4be6-921c-9e794fe882fd
TQID: 'https://experienceleague.adobe.com/BkGTNKy7N35h3jO5-Ao2x2-nClcv96wqT2AqIsAXlSA'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
  - id: ff84ab2f-a7c2-4ced-a3c8-5113f4348d99
    internal-label: Targeting Activity
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
source-git-commit: e13b3537d149f2bdad7e9dd66768837e5c4b595b
workflow-type: tm+mt
source-wordcount: '625'
ht-degree: 72%
---
# ディメンションを変更{#change-dimension}

「**[!UICONTROL ディメンションを変更]**」アクティビティを使用すると、オーディエンスの作成時にターゲティングディメンションを変更できます。 このアクティビティでは、データテンプレートと入力ディメンションに応じて軸を移動します。 例えば、「契約」ディメンションから「クライアント」ディメンションに切り替えることができます。

さらに、このアクティビティを使用して、新しいターゲットの列を追加して定義したり、データの重複排除条件を定義したりできます。

>[!IMPORTANT]
>
>「**[!UICONTROL ディメンションを変更]**」アクティビティと「**[!UICONTROL データソースを変更]**」アクティビティを 1 つの行に追加しないでください。 両方のアクティビティを連続して使用する必要がある場合は、これらの間に「**[!UICONTROL エンリッチメント]**」アクティビティを含める必要があります。 これにより、適切な実行を確保し、潜在的な競合やエラーを防ぎまます。

「**[!UICONTROL ディメンションを変更]**」アクティビティを設定するには、次の手順に従います。

1. 新しいターゲティングディメンションを「**[!UICONTROL ディメンションを変更]**」フィールド経由で選択します。

   ![ フィールドセレクターを開いてアクティビティのディメンションフィールドを変更し、新しいディメンションとしてサブスクリプションを選択](assets/s_user_change_dimension_param1.png)

1. ディメンションの変更時に、すべての要素を保持することも、出力に含める要素を選択することもできます。 次の例では、重複の最大 数が 2 に設定されています。

   ![ オプション制限フィールドが2](assets/s_user_change_dimension_limit.png)に設定された新しいターゲティングドキュメント内の項目数を制限します

   レコードを 1 つだけ保持する場合は、1 つのコレクションが作業スキーマに表示されます。このコレクションは、最終結果でターゲットにならないすべてのレコードを表します（1 つのレコードのみが保持されるため）。 ほかのすべてのコレクションと同様に、このコレクションを使用して、集計を自動生成したり、列内の情報を取得したりできます。

   例えば、「**[!UICONTROL 顧客]**」ディメンションを「**[!UICONTROL 受信者]**」ディメンションに変更すると、購入数を追加するだけでなく、特定の店舗の顧客のターゲティングが可能になります。

1. この情報の一部のみを保持するように選択する場合、重複管理モードで設定できます。

   ![優先度を設定する矢印が表示されている電子メールおよびアカウント番号フィールドを一覧表示する重複排除ダイアログ ](assets/s_user_change_dimension_param2.png)

   青い矢印を使用して、重複処理の優先度を定義できます。

   上の例では、受信者はまずメールアドレスに基づいて重複排除され、次に必要に応じてアカウント番号に基づいて重複排除されます。

1. 「**[!UICONTROL 結果]**」タブで、追加情報を追加できます。

   例えば、**Substring**&#x200B;タイプ関数を使用して、郵便番号に基づいて国を収集できます。 手順は次のとおりです。

   * 「**[!UICONTROL データを追加...]**」リンクをクリックし、「**[!UICONTROL フィルタリングディメンションにリンクされたデータ]**」を選択します。

     ![結果タブ選択したフィルタリングディメンションにリンクされたデータを含む追加データウィザードを開くデータリンクを追加](assets/wf_change-dimension_sample_01.png)

     >[!NOTE]
     >
     >追加する列の作成と管理について詳しくは、[データの追加](query.md#adding-data)を参照してください。

   * 以前のターゲティングディメンション（軸変更の前）を選択し、受信者の「**[!UICONTROL 場所]**」サブツリーで「**[!UICONTROL 郵便番号]**」を選択して「**[!UICONTROL 式を編集]**」をクリックします。

     ![場所サブツリーのZip/Postcodeを使用した追加データウィザードが、出力列として追加され、式を編集](assets/wf_change-dimension_sample_02.png)します

   * 「**[!UICONTROL 詳細選択]**」をクリックし、「**[!UICONTROL 式を使用して数式を編集]**」を選択します。

     ![選択した式を使用して数式を編集して数式タイプを開く詳細選択ボタン ](assets/wf_change-dimension_sample_03.png)

   * リストで提供される関数を使用して、実行される計算を指定します。

     ![式エディターと、長さ2と関数のリストを含む文字1の郵便番号の数式サブ文字列](assets/wf_change-dimension_sample_04.png)

   * 最後に、作成した列のラベルを入力します。

     ![ ラベル Countyと式Substring （zip/Postcode, 1, 2） ](assets/wf_change-dimension_sample_05.png)を含む出力列

1. ワークフローを実行して、この設定の結果を確認します。 次の図に示すように、ディメンションアクティビティの変更前と変更後のテーブル内のデータを比較し、さらにワークフローテーブルの構造も比較します。

   ![ ディメンションを変更する前のトランジションにターゲット オプションを表示し、そのデータとスキーマをビュー母集団](assets/wf_change-dimension_sample_06.png)に表示します

   ![ ディメンションを変更した後にターゲットオプションを表示し、郡の列と新しいスキーマを含むデータを表示](assets/wf_change-dimension_sample_07.png)
