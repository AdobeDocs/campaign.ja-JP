---
product: campaign
title: カスタム日付フィールドを使用したメールエンリッチメント
description: カスタムの日付フィールドを使用してメールをエンリッチメントする方法を説明します
feature: Workflows
role: User, Developer
version: Campaign v8, Campaign Classic v7
exl-id: 2bb3443c-37d8-4d49-9be1-81217f56823c
TQID: 'https://experienceleague.adobe.com/Mgo8JMtAXLW86GgkEsoVTtMSfUUKPsp-G9lL0p9JBg8'
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
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
source-git-commit: e13b3537d149f2bdad7e9dd66768837e5c4b595b
workflow-type: tm+mt
source-wordcount: '883'
ht-degree: 69%
---
# カスタム日付フィールドを使用したメールエンリッチメント{#email-enrichment-with-custom-date-fields}



この例では、今月の誕生日を祝う受信者にカスタム日付フィールドを含むメールを送信します。 メールには、誕生日の前後 1 週間有効なクーポンが含まれます。

**[!UICONTROL 分割]**&#x200B;アクティビティで、今月の誕生日を祝う受信者をリストから選んでターゲットにする必要があります。 次に、**[!UICONTROL エンリッチメント]**&#x200B;アクティビティを使用すると、カスタム日付フィールドがメール内で顧客向け特別オファーの有効期限日として機能します。

![&#x200B; ワークフロー：リストを読み取り、サブセットをエンリッチメントに分割してからメール配信を行い、最後に補集合を行います。](assets/uc_enrichment.png)

この例を作成するには、次の手順に従います。

1. キャンペーンの「**[!UICONTROL ターゲティングとワークフロー]**」タブで、**[!UICONTROL リスト読み込み]**&#x200B;アクティビティをドラッグ＆ドロップして、受信者のリストをターゲットにします。
1. 処理されるリストは、選択したオプションおよびここで定義したパラメーターに応じて、明示的に指定されるか、スクリプトで処理されるか、動的にローカライズされます。

   ![&#x200B; リストを明示的に指定したリストおよびSource フィルタリングセクションを含むリストの読み取りアクティビティ。](assets/uc_enrichment_1.png)

1. **[!UICONTROL 分割]**&#x200B;アクティビティを追加して、今月の誕生日を祝う受信者を他の受信者と区別します。
1. リストを分割するには、「**[!UICONTROL 選択したレコードのフィルター]**」カテゴリで、「**[!UICONTROL インバウンド母集団に対するフィルター条件を追加]**」を選択します。 次に、「**[!UICONTROL 編集]**」をクリックします。

   ![&#x200B; インバウンド母集団にフィルター条件を追加し、編集リンクを強調表示した「サブセットを分割」タブ。](assets/uc_enrichment_2.png)

1. **[!UICONTROL フィルター条件]**&#x200B;を選択してから、「**[!UICONTROL 式を編集]**」ボタンをクリックして、受信者の誕生日の月をフィルターします。

   ![式フィールドの横に「式を編集」ボタンがハイライト表示されたターゲット要素ウィンドウ。](assets/uc_enrichment_3.png)

1. 「**[!UICONTROL 高度な選択]**」をクリックしてから「**[!UICONTROL 式を使用して数式を編集]**」をクリックし、式 Month(@birthDate) を追加します。
1. **[!UICONTROL オペレーター]**&#x200B;列で、「**[!UICONTROL 次と等しい]**」を選択します。
1. 「**[!UICONTROL 値]**」に現在の日付の月 Month(GetDate()) を追加することで、さらに条件をフィルターします。

   これは、誕生日の月が今月に対応する受信者をクエリします。

   ![&#x200B; ターゲット要素の条件：生年月日が現在の日付の月に14日を加えた値に等しい。](assets/uc_enrichment_4.png)

1. 「**[!UICONTROL 終了]**」をクリックします。 次に、**[!UICONTROL 分割]**&#x200B;アクティビティの「**[!UICONTROL 一般]**」タブで、「**[!UICONTROL 結果]**」カテゴリの「**[!UICONTROL 補集合を生成]**」をクリックします。

   **[!UICONTROL 補集合]**&#x200B;の結果がある場合、配信アクティビティを追加するか、リストを更新できます。 ここで、**[!UICONTROL 終了]**&#x200B;アクティビティを追加しました。

   ![結果セクションで「補集合を生成」オプションをオンにして、「一般」タブを分割します。](assets/uc_enrichment_6.png)

次に&#x200B;**[!UICONTROL エンリッチメント]**&#x200B;アクティビティを設定する必要があります。

1. サブセットの後に&#x200B;**[!UICONTROL エンリッチメント]**&#x200B;アクティビティを追加して、カスタム日付フィールドを追加します。

   ![&#x200B; エンリッチメントアクティビティを含むワークフローが、分割アクティビティのサブセットトランジションに追加されました。](assets/uc_enrichment_7.png)

1. **[!UICONTROL エンリッチメント]**&#x200B;アクティビティを開きます。 「**[!UICONTROL 補足情報]**」カテゴリで、「**[!UICONTROL データを追加]**」をクリックします。

   ![補足情報セクションで「データを追加」リンクが強調表示されたエンリッチメントアクティビティ。](assets/uc_enrichment_8.png)

1. 「**[!UICONTROL フィルタリングディメンションにリンクされたデータ]**」を選択してから、「**[!UICONTROL フィルタリングディメンションのデータ]**」を選択します。
1. 「**[!UICONTROL 追加]**」ボタンをクリックします。

   ![出力列リストの横にある「追加」ボタンがハイライト表示されたウィンドウを追加するデータ。](assets/uc_enrichment_9.png)

1. **[!UICONTROL ラベル]**&#x200B;を追加します。 **[!UICONTROL 式]**&#x200B;列で、「**[!UICONTROL 式を編集]**」をクリックします。

   ![生年月日ラベルと「式を編集」ボタンがエクスプレッション列でハイライト表示された出力列。](assets/uc_enrichment_10.png)

1. 最初に、誕生日の前の週を「**有効期間の開始日**」としてターゲットにし、続く「**[!UICONTROL 式]**」に `SubDays([target/@birthDate], 7)` を指定する必要があります。

   ![生年月日ラベルと式「生年月日」（ターゲット/@birthDate）を含む出力列。](assets/uc_enrichment_11.png)

1. 次に、誕生日の後の週をターゲットにするカスタム日付フィールド「**有効期間の終了日**」を作成するために、「**[!UICONTROL 式]**」に `AddDays([target/@birthDate], 7)` を追加する必要があります。

   式にラベルを追加できます。

   ![生年月日と有効開始日の列を表示する出力列とその式とエイリアス &#x200B;](assets/uc_enrichment_12.png)

1. 「**[!UICONTROL OK]**」をクリックします。 エンリッチメントの準備ができました。

**[!UICONTROL エンリッチメント]**&#x200B;アクティビティの後に、配信を追加できます。 ここでは、今月の誕生日を祝う顧客への有効期限付きの特別オファーを受信者に送信するメール配信を追加しました。

1. **[!UICONTROL エンリッチメント]**&#x200B;アクティビティの後に、**[!UICONTROL メール配信]**&#x200B;アクティビティをドラッグ＆ドロップします。

   ![&#x200B; エンリッチメントアクティビティの後にメール配信アクティビティを追加したワークフロー。](assets/uc_enrichment_15.png)

1. **[!UICONTROL メール配信]**&#x200B;アクティビティをダブルクリックして、配信のパーソナライズを開始します。
1. 配信に&#x200B;**[!UICONTROL ラベル]**&#x200B;を追加し、「**[!UICONTROL 続行]**」をクリックします。
1. 「**[!UICONTROL 保存]**」をクリックしてメール配信を作成します。
1. メール配信&#x200B;**[!UICONTROL プロパティ]**&#x200B;の「**[!UICONTROL 承認]**」タブで、「**[!UICONTROL 送信前に配信を確定する]**」オプションがオンになっていることを確認します。

   次に、ワークフローを開始して、アウトバウンドトランジションをターゲット情報でエンリッチメントします。

   ![配信プロパティの「承認」タブで、「送信前に配信を確認」をオンにします。](assets/uc_enrichment_18.png)

これで、**[!UICONTROL エンリッチメント]**&#x200B;アクティビティで作成したカスタム日付フィールドを含むメール配信のデザインを開始できます。

1. **[!UICONTROL メール配信]**&#x200B;アクティビティをダブルクリックします。
1. ターゲット式をメールに追加します。 有効期限日のフォーマットを設定するために、次の式の内部にある必要があります。

   ```
   <%=
           formatDate(targetData.alias of your expression,"%2D.%2M")  %>
   ```

1. ドロップダウン矢印の付いた![Personalization ツールバーボタンをクリックします。](assets/uc_enrichment_16.png)。「**[!UICONTROL ターゲット拡張機能]**」を選択し、以前に作成したカスタム有効期限を&#x200B;**[!UICONTROL エンリッチメント]** アクティビティで選択して、拡張機能をformatDate式に追加します。

   ![Personalization menu Target拡張機能サブメニューリストの有効開始日と有効終了日](assets/uc_enrichment_19.png)

1. 必要に応じて、メールコンテンツを設定します。

   ![有効期限にtargetData フィールドを使用して、formatDate式を含むHTML コンテンツを電子メールで送信します。](assets/uc_enrichment_17.png)

1. メールをプレビューして、カスタム日付フィールドが正しく設定されているかどうかを確認します。

   ![有効期限が12/20 ～ 01/03の誕生日メッセージが入力された電子メールプレビュータブ。](assets/uc_enrichment_20.png)

メールの準備ができました。 配達確認の送信を開始し配信を確定して、誕生日メールを送信できます。
