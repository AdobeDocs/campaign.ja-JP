---
product: campaign
title: 受信者テーブルのクエリ
description: 受信者テーブルに対するクエリ方法を説明します。
feature: Query Editor
role: User, Developer
version: Campaign v8, Campaign Classic v7
exl-id: 7f859ce9-7ab8-46e1-8bd6-43aaffe30da2
TQID: 'https://experienceleague.adobe.com/puAVnnwm21KiCWWCR5ZaexXnqysPINAkWAlcnR-gr1g'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: f5293531-9312-4099-bfa3-9e67df6a8750
    internal-label: Query Editor
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
source-git-commit: e13b3537d149f2bdad7e9dd66768837e5c4b595b
workflow-type: tm+mt
source-wordcount: '588'
ht-degree: 76%
---
# 受信者テーブルのクエリ {#querying-recipient-table}



この例では、メールドメインが「orange.co.jp」で、横浜市に住んでいない受信者の名前とメールを収集します。

* どのテーブルを選択する必要がありますか。

  受信者テーブル (nms:recipient)

* 出力列として選択するフィールドは何ですか。

  メール、名前、市区町村およびアカウント番号

* 受信者のフィルター条件は何ですか。

  市区町村とメールドメイン

* 並べ替えを設定しますか。

  はい。「**[!UICONTROL アカウント番号]**」および「**[!UICONTROL 姓]**」に基づいて設定します

この例を作成するには、次の手順に従います。

1. **[!UICONTROL ツール／汎用クエリエディター...]** をクリックし、**受信者**（**nms:recipient**）テーブルを選択します。 「**[!UICONTROL 次へ]**」をクリックします。
1. 「**[!UICONTROL 姓]**」、「**[!UICONTROL 名]**」、「**[!UICONTROL メール]**」、「**[!UICONTROL 市区町村]**」および「**[!UICONTROL アカウント番号]**」を選択します。 これらのフィールドは、「**[!UICONTROL 出力列]**」に追加されます。 「**[!UICONTROL 次へ]**」をクリックします。

   ![出力列の「電子メール」、「姓」、「名」、「市区町村」および「アカウント#」フィールドで手順を抽出するデータ ](assets/query_editor_03.png)

1. 列を並べ替えて適切な順序で表示します。 ここでは、アカウント番号を降順、名前をアルファベット順に並べ替えます。 「**[!UICONTROL 次へ]**」をクリックします。

   ![ アカウント番号を降順に並べ替え、姓を昇順に並べ替えた並べ替え手順](assets/query_editor_04.png)

1. **[!UICONTROL データのフィルター]**&#x200B;ウィンドウで検索を絞り込みます。「**[!UICONTROL フィルター条件]**」を選択し、「**[!UICONTROL 次へ]**」をクリックします。
1. **[!UICONTROL ターゲット要素]**&#x200B;ウィンドウで、フィルター設定を入力できます。

   メールドメインが「orange.co.jp」と等しい受信者というフィルター条件を定義します。 そのためには、「**式**」列で「**[!UICONTROL メールドメイン（@domain）]**」を選択し、「**オペレーター**」列で「**[!UICONTROL 次と等しい]**」を選択して「**[!UICONTROL 値]**」列に &quot;orange.co.jp&quot; と入力します。

   ![ フィルター電子メールドメイン （@domain）がorange.co.ukに等しく、クエリの概要](assets/query_editor_05.png)を含むターゲット要素ステップ

1. 必要に応じて、「**[!UICONTROL 値の配分]**」ボタンをクリックして、見込み客のメールドメインに基づいて配分を表示します。 データベースでのメールドメインごとの割合が表示されます。 「orange.co.jp」以外のドメインは、フィルターが適用されるまで表示されます。

   ウィンドウの下部に、**メールドメインが「orange.co.uk」に等しい**&#x200B;というクエリの概要が表示されます。

1. 「**[!UICONTROL プレビュー]**」をクリックしてクエリ結果を確認します。メールドメインが「orange.co.jp」のデータのみが表示されます。

   ![orange.co.ukの電子メールアドレスを持つ受信者のみを一覧表示するターゲット要素のプレビュータブ ](assets/query_editor_nveau_17.png)

1. クエリを変更して、横浜市に住んでいない連絡先を検索します。

   「**[!UICONTROL 式]**」列で「**[!UICONTROL 市区町村 (location/@city)]**」を選択し、演算子として「**[!UICONTROL 次と等しくない]**」を選択し、「**[!UICONTROL 値]**」列に 「**[!UICONTROL 横浜市]**」と入力します。

   ![条件がCity （location/@city）とLondonでないTarget要素ステップがフィルターに追加されました](assets/query_editor_08.png)

1. これにより、**[!UICONTROL データフォーマット]**&#x200B;ウィンドウが表示されます。 列の順序を確認します。 「市区町村」列を「アカウント番号」列の下に移動します。

   「名」列をオフにしてリストから削除します。

   ![列の順序と名の列がオフのデータ書式設定手順](assets/query_editor_nveau_15.png)

1. **[!UICONTROL データのプレビュー]**&#x200B;ウィンドウで、「**[!UICONTROL データのプレビューを開始]**」をクリックします。 この機能により、クエリの結果が計算されます。

   「**[!UICONTROL 列の結果]**」タブに、クエリ結果が列で表示されます。

   結果には、メールドメインが「orange.co.jp」で、横浜市に住んでいないすべての受信者が表示されます。 前のステージでオフにしたので、「名」列は表示されません。 アカウント番号は降順で並べ替えられます。

   ![ クエリ結果のアカウント番号、市区町村、電子メール、姓を表示する「列の結果」タブを使用したデータのプレビュー](assets/query_editor_nveau_12.png)

   「**[!UICONTROL XML の結果]**」タブでは、結果が XML フォーマットで表示されます。

   ![ クエリ結果を受信者のXML要素として表示するXML結果タブを使用したデータのプレビュー](assets/query_editor_nveau_13.png)

   「**[!UICONTROL 生成された SQL クエリ]**」タブでは、クエリ結果が SQL フォーマットで表示されます。

   ![ クエリのSELECT ステートメントを表示する「生成されたSQL クエリ」タブを使用したデータのプレビュー](assets/query_editor_nveau_14.png)
