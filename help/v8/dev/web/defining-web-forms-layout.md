---
product: campaign
title: web フォームレイアウトの定義
description: web フォームレイアウトの定義
feature: Web Forms
version: Campaign v8, Campaign Classic v7
exl-id: 23ca17f8-de1a-4f9c-8357-3965dc3329b1
TQID: 'https://experienceleague.adobe.com/-0PZWl-79Q-MXZ-jHjp-VF12IUPeMcq27aGSgWl5Ans'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
subfeature_v2:
  - id: f391046b-0cf3-4e76-bd3b-97fe06654506
    internal-label: Web Apps
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
  - id: d7be2b01-dc9c-40f7-aace-a151707504ed
    internal-label: Landing pages
source-git-commit: d3b34546c1b08190772154efe6f818b98cc1094c
workflow-type: tm+mt
source-wordcount: '708'
ht-degree: 72%
---
# web フォームレイアウトの定義{#defining-web-forms-layout}



## コンテナの作成 {#creating-containers}

コンテナを使用すると、ページのフィールドを結合してレイアウトを設定し、ページ内の要素を整理できます。

フォームの各ページで、ツールバーの&#x200B;**[!UICONTROL コンテナ]**&#x200B;ボタンを使用してコンテナを作成します。

![&#x200B; コンテナーツールバーボタンを開いたWeb フォームページエディター。標準コンテナーオプションを提供](assets/s_ncs_admin_survey_containers_add.png)

コンテナを使用して、最終レンダリングにラベルを追加せずに、ページの要素をグループ化します。 要素は、コンテナサブツリーにグループ化されます。 標準コンテナを使用すると、レイアウトを管理できます。

次に例を示します。

![2つのコンテナ、一般情報と契約書、およびそれらのフォームフィールドのツリーを含むページプロパティ &#x200B;](assets/s_ncs_admin_survey_containers_std_arbo.png)

ラベルの位置は、階層のコンテナの下に配置された要素に適用されます。 必要に応じて、各要素についてオーバーロードできます。 列を追加または削除して、レイアウトを変更します。 [ページへのフィールドの配置](#positioning-the-fields-on-the-page)を参照してください。

上記の例では、レンダリングは次のようになります。

![2つのコンテナを含むレンダリングされたフォームページ：個人情報フィールドと契約チェックボックスリスト、および検証ボタン &#x200B;](assets/s_ncs_admin_survey_containers_std_ex.png)

## ページへのフィールドの配置 {#positioning-the-fields-on-the-page}

Web フォームのレイアウトは、各コンテナでページごとに定義され、必要に応じてオーバーロードできます。

ページは列に分類されます。各ページには、一定数の列が含まれます。 ページの各フィールドは、**n** 個のセルを占有します。 また、コンテナは一定数の列を占有し、それに含まれるフィールドは一定数のセルを占有します。

デフォルトでは、ページは単一の列で構築され、各要素が 1 つのセルを占有します。 これは、次に示すように、フィールドが別のフィールドの下に表示され、各フィールドが行全体を占めることを意味します。

![性別、名前、名、電子メールのフィールドが別々の行に積み重ねられた1列のフォームページをレンダリングしました](assets/s_ncs_admin_survey_container_ex.png)

次の例では、デフォルトの設定が維持されています。 ページは、4 つのコンテナを含む単一の列を占有します。

![4つのコンテナと列数が1つのハイライト表示されたページのプロパティ &#x200B;](assets/s_ncs_admin_survey_container_ex0.png)

各コンテナは 1 列を占有し、各要素は 1 つのセルを占有します。

![表示設定でセル数が1に設定された情報要素のプロパティ &#x200B;](assets/s_ncs_admin_survey_container_ex0a.png)

レンダリングは次のようになります。

![4つのコンテナを持つ1列のページレンダリング。各1列は垂直方向に積み重ねられます](assets/s_ncs_admin_survey_container_ex0_rend.png)

表示パラメーターを適応させて、次のようなレンダリングを取得できます。

![&#x200B; コンテナ 1と3が左側の列に配置され、コンテナ 2と4が右側に配置される2列のページレンダリング &#x200B;](assets/s_ncs_admin_survey_container_ex1_rend.png)

このレンダリングの例では、各入力フィールド、タイトルおよび画像は、コンテナの列の 1 つのセルを占有します。

各コンテナの書式設定を修正できます。 この例では、コンテナ 4 のコンテンツを 2 列に広げて、要素を分配します。

![2列のコンテナ 4: タイトルとコンボボックスはそれぞれ1つのセルを取り、チェックボックスは2つのセルにまたがっています](assets/s_ncs_admin_survey_container_ex2_rend.png)

タイトルとリストは、それぞれ 1 つのセル（つまりコンテナの行全体）を占有し、チェックボックスは 2 つのセルをまたがっています。 入力フィールドに属するセルの数は、フィールドのタイプに従って、「**[!UICONTROL 一般]**」タブまたは「**[!UICONTROL 詳細設定]**」タブで定義されます。

![表示設定](assets/s_ncs_admin_survey_container_ex2.png)でセル数が2に設定されたチェックボックス要素の「詳細」タブ

## ラベルの位置の定義 {#defining-the-position-of-labels}

フォームのフィールドおよびラベルの整列を定義できます。

デフォルトでは、ページのフィールドおよびその他のコンテンツの表示パラメーターは、フォームの全般設定、ページの設定、または存在する場合は親コンテナの設定から継承されます。

フォーム全体のグローバルな表示パラメーターは、フォームプロパティボックスで指定されます。 「**[!UICONTROL レンダリング]**」タブを使用すると、ラベルの位置を選択できます。

![Web フォームのプロパティ ダイアログ、「レンダリング」タブ、「ラベルの位置」リストが継承、左、右、上、下、非表示](assets/s_ncs_admin_survey_label_position.png)

この位置は、「**[!UICONTROL 詳細設定]**」タブで、各ページ、各コンテナおよび各フィールドに対してオーバーロードできます。

次の整列がサポートされます。

* 継承：整列は、親要素（デフォルト値）つまり親コンテナ（ある場合）、またはページのその他から継承されます。
* 左／右：ラベルはフィールドの右または左に配置されます。
* 上／下：ラベルはフィールドの上または下に配置されます。
* 非表示：ラベルは表示されません。
