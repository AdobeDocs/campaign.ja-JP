---
product: campaign
title: web フォームへのフィールドの追加
description: web フォームへのフィールドの追加
feature: Web Forms, Landing Pages
version: Campaign v8, Campaign Classic v7
exl-id: 827b6575-7206-4dfc-b2c6-b95a6d5730b1
TQID: 'https://experienceleague.adobe.com/uHsP-67EhxMoCun8GEh1CzbeU5FJaDc1cdlsSVyayU4'
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
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
source-git-commit: 2ac66c0844ec361de9a1658f666c190fcfac8ffa
workflow-type: tm+mt
source-wordcount: '2497'
ht-degree: 99%
---
# web フォームへのフィールドの追加{#adding-fields-to-a-web-form}



Web フォームのフィールドは、ユーザーによる情報の入力とオプションの選択を可能にします。 Web フォームにより、入力フィールド、選択フィールド、静的コンテンツおよび高度なコンテンツ（Captcha、購読など）を提供できます。

アシスタントを使用してフィールドを追加する場合、フィールドタイプは、選択したフィールドまたはストレージ変数に基づいて自動的に検出されます。 「**[!UICONTROL 一般]**」タブの&#x200B;**[!UICONTROL タイプ]**&#x200B;ドロップダウンボックスを使用して編集できます。

![](assets/s_ncs_admin_webform_change_type.png)

ツールバーのボタンを使用する場合、追加するフィールドのタイプを選択します。

次のフィールドのタイプを使用できます。

* テキスト／数値入力： [入力フィールドの追加](#adding-input-fields)を参照してください。
* ドロップダウンリストの選択： [ドロップダウンリストの追加](#adding-drop-down-lists)を参照してください。
* チェックボックスを使用した複数選択： [チェックボックスの追加](#adding-checkboxes)を参照してください。
* ラジオボタンを使用した排他的な選択： [ラジオボタンの追加](#adding-radio-buttons)を参照してください。
* オプショングリッドでの投票： [グリッドの追加](#adding-grids)を参照してください。
* 数値と日付： [日付と数値の追加](#adding-dates-and-numbers)を参照してください。
* 情報サービスの購読／購読解除： [購読チェックボックス](#subscription-checkboxes)を参照してください。
* キャプチャの検証： [キャプチャの挿入](#inserting-a-captcha)を参照してください。
* ダウンロードボタン： [ファイルのアップロード](#uploading-a-file)を参照してください。
* 非表示の定数： [非表示の定数の挿入](#inserting-a-hidden-constant)を参照してください。

回答ストレージモード（データベースのフィールドを更新する（最後に保存した値のみ格納）か、変数に格納する（回答は格納されない））を指定してください。 詳しくは、[回答ストレージフィールド](web-forms-answers.md#response-storage-fields)を参照してください。

>[!NOTE]
>
>デフォルトでは、フィールドは、現在のツリーの下部に挿入されます。 ツールバーの矢印を使用して上下に移動します。

## フィールド作成アシスタント {#field-creation-assistant}

フォームの各ページで、ツールバーの最初のボタンを使用してフィールドを追加できます。 これを行うには、**[!UICONTROL アシスタントを使用して追加]**&#x200B;メニューに移動します。

![](assets/s_ncs_admin_survey_add_field_menu.png)

作成するフィールドのタイプを選択します。データベースのフィールドを追加する方法、変数を追加する方法、または別のフォームで作成してコンテナに収集されたフィールドグループをインポートする方法から選択できます。

「**[!UICONTROL 次へ]**」をクリックし、ストレージフィールド、変数、またはインポートするコンテナを選択します。

![](assets/s_ncs_admin_webform_wz_confirm_db.png)

「**[!UICONTROL 完了]**」をクリックして、選択したフィールドをページに挿入します。

![](assets/s_ncs_admin_webform_wz_insert_field.png)

## 入力フィールドの追加 {#adding-input-fields}

入力フィールドを追加するには、「**[!UICONTROL 入力コントロール]**」ボタンをクリックし、追加するフィールドのタイプを選択します。

![](assets/s_ncs_admin_webform_select_field.png)

### 入力フィールドのタイプ {#types-of-input-fields}

5 種類のテキストフィールドをフォームページに挿入できます。

* **テキスト**：ユーザーは 1 行にテキストを入力できます。

  ![](assets/s_ncs_admin_survey_txt_ex.png)

* **数値**：ユーザーは 1 行に数値を入力できます。 詳しくは、[数値の追加](#adding-numbers)を参照してください。

  ページが承認されると、入力された値がフィールドに適合することを確認するために、フィールドコンテンツがチェックされます。 詳しくは、[コントロール設定の定義](form-rendering.md#defining-control-settings)を参照してください。

* **パスワード**：ユーザーは 1 行にテキストを入力できます。 テキスト入力中、文字はピリオドで置き換えられます。

  ![](assets/s_ncs_admin_survey_passwd_ex.png)

  >[!CAUTION]
  >
  >パスワードは、データベースに暗号化されずに格納されます。

* **複数ラインテキスト**：ユーザーは複数行にテキストを入力できます。

  ![](assets/s_ncs_admin_survey_txtmulti_ex.png)

  >[!CAUTION]
  >
  >複数ラインフィールドは、改行を含むことができる特殊なフィールドです。 そのストレージスペースは、XML 属性ではなく、XML 要素にマッピングされたフィールドに関連付けられている必要があります。
  >   

* **エンリッチメントされた複数ラインテキスト**：ユーザーは HTML 形式で格納されるレイアウトを使用してテキストを入力できます。

  ![](assets/s_ncs_admin_survey_txthtmli_ex.png)

  ユーザーに提供されるエディターのタイプを選択できます。 これをおこなうには、「**[!UICONTROL 詳細設定]**」タブにある「**[!UICONTROL HTML エディター]**」フィールドのドロップダウンボックスを使用します。

  ![](assets/webapp_enrich_text_type.png)

  表示されるアイコンの数は、エディターのタイプによって異なります。 **[!UICONTROL 詳細設定]**&#x200B;エディターの場合のレンダリングを次に示します。

  ![](assets/webapp_enrich_text_max.png)

### 入力フィールドの設定 {#configure-input-fields}

入力フィールドは、次のオプションを使用して、すべて同じモードに基づいて設定されます。

![](assets/s_ncs_admin_survey_txt_param.png)

「**[!UICONTROL 一般]**」タブを使用すると、フィールドの名前を入力でき、必要に応じてデフォルト値にすることができます。

回答ストレージモードは、「**[!UICONTROL ストレージを編集]**」リンクを使用して変更できます。 値は、データベースの既存のフィールドに格納されます。または、情報をデータベースに保存しないように選択することもできます（ローカル変数を使用）。

>[!NOTE]
>
>ストレージモードについて詳しくは、[回答ストレージフィールド](web-forms-answers.md#response-storage-fields)を参照してください。

「**[!UICONTROL 詳細設定]**」タブを使用すると、フィールドの表示パラメーターを定義できます（ラベルの位置、整列など）。 [Web フォームレイアウトの定義](defining-web-forms-layout.md)を参照してください。

## ドロップダウンリストの追加 {#adding-drop-down-lists}

調査ページにドロップダウンリストを挿入できます。 これにより、ユーザーは、ドロップダウンメニューで提供される値を選択できます。

![](assets/s_ncs_admin_survey_dropdown_sample.png)

ドロップダウンボックスをフォームページに追加するには、ページエディターのツールバーで、**[!UICONTROL 選択コントロール／ドロップダウンリスト]**&#x200B;ボタンをクリックします。

![](assets/s_ncs_admin_survey_create_dropdown.png)

回答ストレージモードを選択して、選択内容を確認します。

「**[!UICONTROL 一般]**」タブの下のセクションで、リストのラベルおよび値を定義します。 情報がデータベースの既存のフィールドに格納されており、列挙フィールドである場合、次に示すように、「**[!UICONTROL データベースから取得した値のリストを初期化]**」をクリックすることで、値を自動的に入力できます。

![](assets/s_ncs_admin_survey_database_values.png)

>[!NOTE]
>
>値のリストの右側の矢印を使用して、順序を変更します。

リンクされたテーブルにデータが格納されている場合、リストに候補として提示される値が保存されたフィールドを選択できます。 例えば、国のテーブルを選択する場合、「**[!UICONTROL データベースから取得した値のリストを初期化]**」をクリックして、目的のフィールドを選択します。

![](assets/s_ncs_admin_survey_preload_values.png)

次に、「**[!UICONTROL 読み込み]**」リンクをクリックして値を取得します。

![](assets/s_ncs_admin_survey_load_button.png)

>[!CAUTION]
>
>リストが更新されたら、この操作を繰り返して、オファーの値を更新します。

## チェックボックスの追加 {#adding-checkboxes}

ユーザーがオプションを選択するには、チェックボックスを使用する必要があります。

![](assets/s_ncs_admin_survey_check_box.png)

チェックボックスをフォームに追加するには、ページエディターのツールバーで、**[!UICONTROL 選択コントロール／チェックボックス]**&#x200B;アイコンをクリックします。

回答ストレージモードを選択して、選択内容を確認します。

「**[!UICONTROL 一般]**」タブの「**[!UICONTROL ラベル]**」フィールドにボックスのラベルを入力します。

![](assets/s_ncs_admin_survey_check_box_edit.png)

チェックボックスを使用すると、ボックスがチェックされているかどうかに応じて、ストレージフィールド（または値）に値を割り当てることができます。 「**[!UICONTROL 値]**」セクションを使用すると、ボックスがチェックされている場合に割り当てる値（「**[!UICONTROL 値]**」フィールド）と、チェックされていない場合に割り当てる値（「**[!UICONTROL 空の値]**」フィールド）を入力できます。 これらの値は、データストレージ形式によって異なります。

ストレージフィールド（または変数）がブール値の場合、ボックスがチェックされていない場合に割り当てる値は、自動的に推測されます。 この場合、次に示すように、「**[!UICONTROL チェックされている場合の値]**」フィールドのみが提供されます。

![](assets/s_ncs_admin_survey_check_box_enum.png)

## 例：ボックスがチェックされている場合のフィールドへの値の割り当て {#example--assign-a-value-to-a-field-if-a-box-is-checked}

次に示すように、メンテナンスリクエストを送信するために、フォームにチェックボックスを挿入します。

![](assets/s_ncs_admin_survey_check_box_ex.png)

データベースおよび既存のフィールドに対して、情報が更新されます（この場合、「**[!UICONTROL コメント]**」フィールド）。

![](assets/s_ncs_admin_survey_check_box_ex_list.png)

「メンテナンスが必要」ボックスがチェックされている場合、「**[!UICONTROL コメント]**」列に「メンテナンスが必要」が格納されます ボックスがチェックされていない場合、この列には「メンテナンスは不要」と表示されます。 この結果を得るには、フォームページ上のチェックボックスに対して、次の設定を適用します。

![](assets/s_ncs_admin_survey_check_box_ex_edit.png)

## ラジオボタンの追加 {#adding-radio-buttons}

ラジオボタンを使用すると、一連の排他的な選択オプションをユーザーに提供できます。 同じフィールドに異なる値があります。

![](assets/s_ncs_admin_survey_radio_button.png)

ラジオボタンを個別に作成することも（単一ボタン）、複数選択リストを使用して作成することもできますが、ラジオボタンで重要なのはいずれか 1 つのオプションを選択することなので、単一ボタンのみではなく、常に少なくとも 1 組のラジオボタンを作成します。

>[!CAUTION]
>
>選択を必須にするには、複数選択リストを作成する必要があります。

### 単一のボタンの追加 {#add-single-buttons}

ラジオボタンをフォームページに追加するには、ページエディターのツールバーで、**[!UICONTROL 選択コントロール／ラジオボタン]**&#x200B;メニューに移動し、ストレージモードを選択します。

![](assets/s_ncs_admin_survey_radio_button_sample.png)

ラジオボタンは、チェックボックスと同じ方法で設定されます（[チェックボックスの追加](#adding-checkboxes)を参照）。 ただし、オプションが選択されていない場合、値は割り当てられません。 いくつかのボタンを相互依存させるには、つまり、1 つを選択することでその他を自動的に選択解除するには、同じフィールドに格納する必要があります。 データベースに格納されていない場合、一時的なストレージとして同じローカル変数が使用される必要があります。 [回答ストレージフィールド](web-forms-answers.md#response-storage-fields)を参照してください。

### ボタンのリストの追加 {#add-a-list-of-buttons}

リストを使用してラジオボタンを追加するには、ページエディターのツールバーで、**[!UICONTROL 選択コントロール／複数選択]**&#x200B;メニューに移動します。

![](assets/s_ncs_admin_survey_radio_button_sample2.png)

ラベルと同じ数のラジオボタンを追加します。 この機能の利点は、既存のフィールドから値をインポートできる（項目別フィールドの場合）ことと、ユーザーに 1 つのオプションを選択させることができることです。 ただし、ボタンのレイアウトにはあまり柔軟性がありません。

>[!NOTE]
>
>Web アプリケーションで複数選択を有効にすることはできません。
>ただし、web アプリケーションに&#x200B;**[!UICONTROL 複数選択]**&#x200B;タイプのフィールドを挿入することは可能ですが、この場合、ユーザーは複数の値を選択できません

## グリッドの追加 {#adding-grids}

グリッドは、Web アプリケーションの投票ページをデザインするために使用されます。 これにより、次に示すように、調査または評価タイプの Web フォームに回答するためのラジオボタンのリストを提供できます。

![](assets/s_ncs_admin_survey_vote_param.png)

このタイプの要素をフォームで使用するには、シンプルグリッドを作成して、評価される各要素のための線を追加します。

![](assets/s_ncs_admin_survey_vote_sample.png)

グリッドの各線のラジオボタンの数は、シンプルグリッドで定義された値に一致します。

![](assets/s_ncs_admin_survey_vote_ex.png)

グリッド線あたり 1 つのオプションのみ選択できます。

>[!NOTE]
>
>この例では、グリッドのラベルは非表示です。 これをおこなうには、「**[!UICONTROL 詳細設定]**」タブに移動して、「**[!UICONTROL ラベル位置]**」表示を「**[!UICONTROL 非表示]**」として定義します。 [ラベルの位置の定義](defining-web-forms-layout.md#defining-the-position-of-labels)を参照してください。

## 日付と数値の追加 {#adding-dates-and-numbers}

フォームフィールドのコンテンツは、データベースに格納されたデータに一致するように書式設定したり、特定の要件を満たすように書式設定したりできます。 数値および日付の入力に適したフィールドを作成できます。

### 日付の追加 {#adding-dates}

![](assets/s_ncs_admin_survey_date_calendar.png)

ユーザーがフォームページに日付を入力できるようにするには、入力フィールドを追加し、「**[!UICONTROL 日付]**」タイプを選択します。

フィールドのラベルを入力し、データストレージモードを設定します。

![](assets/s_ncs_admin_survey_date_edit.png)

ウィンドウの下部のセクションでは、このフィールドに格納される値の日付および時間の形式を選択できます。

![](assets/s_ncs_admin_survey_date_edit_values.png)

また、日付（または時間）を表示しないように選択することもできます。

日付は、カレンダーまたはドロップダウンボックスを使用して選択できます。 また、フィールドに直接入力することもできますが、上の画面で指定した形式に一致させる必要があります。

>[!NOTE]
>
>デフォルトでは、フォームで使用される日付は、カレンダーを使用して入力されます。 多言語のフォームの場合、使用するすべての言語でカレンダーが使用できることを確認してください。 [Web フォームの翻訳](translating-a-web-form.md)を参照してください。

ただし、（例えば誕生日の入力など）場合によっては、ドロップダウンリストを使用するほうが簡単なことがあります。

![](assets/s_ncs_admin_survey_date_list_select.png)

これをおこなうには、「**[!UICONTROL 詳細設定]**」タブをクリックして、**[!UICONTROL ドロップダウンリスト]**&#x200B;を使用する入力モードを選択します。

![](assets/s_ncs_admin_survey_date_selection.png)

次に、リストに提供される値に対する制限を設定できます。

![](assets/s_ncs_admin_survey_date_first_last_y.png)

### 数値の追加 {#adding-numbers}

数値の入力に適したフィールドを作成できます。

![](assets/s_ncs_admin_survey_number.png)

数値フィールドでは、ユーザーは数値のみ入力できます。 ページが承認されると、入力コントロールが自動的に適用されます。

データがデータベースに格納されているフィールドに応じて、特別な書式設定または特定の制限が適用されることがあります。 また、最大値および最小値を指定することもできます。 このタイプのフィールドは、次のように設定されます。

![](assets/s_ncs_admin_survey_number_edit.png)

デフォルト値は、フォームがパブリッシュされる際にフィールドに表示される値です。 ユーザーはデフォルト値を変更できます。

次に示すように、「**[!UICONTROL 詳細設定]**」タブを使用して、数値フィールドに接頭辞およびサフィックスを追加できます。

![](assets/s_ncs_admin_survey_number_ex_conf.png)

フォームでは、レンダリングは次のようになります。

![](assets/s_ncs_admin_survey_number_ex.png)

## 購読チェックボックス {#subscription-checkboxes}

ユーザーが 1 つまたは複数の情報サービス（ニュースレター、警告、リアルタイム通知など）を購読または購読解除するためのコントロールを追加できます。 購読するには、ユーザーは、対応するサービスをチェックします。

購読チェックボックスを作成するには、**[!UICONTROL 高度なコントロール／購読]**&#x200B;をクリックします。

![](assets/s_ncs_admin_survey_subscription_edit.png)

チェックボックスラベルを示し、**[!UICONTROL サービス]**&#x200B;ドロップダウンボックスを使用して関連する情報サービスを選択します。

>[!NOTE]
>
>情報サービスについて詳しくは、[このページ](https://experienceleague.adobe.com/en/docs/campaign-classic/using/sending-messages/subscriptions-and-referrals/managing-subscriptions){target="_blank"}を参照してください。

ユーザーは、関連するオプションをチェックして、サービスを購読します。

![](assets/s_ncs_admin_survey_subscribe.png)

>[!CAUTION]
>
>フォーム承認の際に、ユーザーが既に情報サービスを購読済みで、このサービスにリンクされたボックスがチェックされていない場合、ユーザーは購読解除されます。

## Captcha の挿入 {#inserting-a-captcha}

**Captcha** テストの目的は、Web フォームの不正使用を防ぐことにあります。

>[!CAUTION]
>
>フォームにいくつかのページが含まれている場合、セキュリティ対策の回避を防ぐために、Captcha は、常に最後のページの、ストレージボックスの直前に配置されている必要があります。

Captcha をフォームに挿入するには、ツールバーの最初のボタンをクリックし、**[!UICONTROL 高度なコントロール／Captcha]** を選択します。

![](assets/s_ncs_admin_survey_add_captcha.png)

フィールドのラベルを入力します。 このラベルは、Captcha 表示領域の前に表示されます。 「**[!UICONTROL 詳細設定]**」タブで、このラベルの位置を変更できます。

![](assets/s_ncs_admin_survey_captcha_adv.png)

>[!NOTE]
>
>**[!UICONTROL Captcha]** タイプのコントロールの場合、ストレージフィールドまたは変数を示す必要はありません。

Captcha は、ビジュアルの下に配置された入力フィールドでページに挿入されます。 これらの 2 つの要素は、分離できず、ページレイアウトのための単一の項目とみなされます（これらは単一のセルを占有します）。

![](assets/s_ncs_admin_survey_captcha_sample.png)

ページが確認される際に、Captcha のコンテンツが適切に入力されなかった場合、入力フィールドが赤で表示されます。

![](assets/s_ncs_admin_survey_captcha_error.png)

表示するエラーメッセージを作成できます。 これをおこなうには、「**[!UICONTROL 一般]**」タブの「**[!UICONTROL メッセージをパーソナライズ]**」リンクを使用します。

![](assets/s_ncs_admin_survey_captcha_error_msg.png)

>[!NOTE]
>
>Captcha の長さは常に 8 文字です。 この値は修正できません。

## ファイルのアップロード {#uploading-a-file}

アップロードフィールドをページに追加できます。 この機能は、イントラネットのファイル共有などに便利です。

![](assets/s_ncs_admin_survey_download_file.png)

アップロードフィールドをフォームページに挿入するには、ページエディターのツールバーで、**[!UICONTROL 高度なコントロール／ファイル]**&#x200B;メニューを選択します。

デフォルトでは、更新されたファイルは、**[!UICONTROL リソース／オンライン／パブリックリソース]**&#x200B;メニューでアクセスできるリソースファイルに格納されます。 この動作は、スクリプトを使用して変更できます。 このスクリプトは、[Campaign JSAPI ドキュメント](https://experienceleague.adobe.com/ja/tools/campaign-api)で定義された関数を使用できます。これには、ファイル操作に関連する関数が含まれます。

ローカル変数またはデータベースフィールドで、これらのファイルにリンクを格納できます。 例えば、受信者スキーマを拡張して、ファイルベースのリソースにリンクを追加できます。

>[!CAUTION]
>
>* このタイプのファイルは、（資格情報を使用した）フォームへの安全なアクセス専用です。
>* Adobe Campaign は、アップロードされたリソースのサイズまたはタイプを制御しません。そのため、安全なタイプのイントラネットサイトのみのアップロードフィールドを使用することを強くお勧めします。
>* いくつかのサーバーがインスタンス（ロードバランシングアーキテクチャ）にリンクされている場合、同じサーバーに到達する Web フォームに対する呼び出しを確認する必要があります。
>* これらの実装には、Adobe Campaign コンサルティングチームの支援が必要です。
>

## 非表示定数の挿入 {#inserting-a-hidden-constant}

ユーザーがフォームのページの 1 つを検証する場合、ユーザーのプロファイルのフィールドまたは変数に特定の値を設定できます。

このフィールドは、ユーザーには表示されませんが、ユーザープロファイルのデータエンリッチメントに使用できます。

それには、ページに&#x200B;**定数**&#x200B;を配置し、その値と保存場所を指定します。

次の例では、ユーザーがこのページを承認するたびに、受信者プロファイルの「**起源**」フィールドに自動的に値が入力されます。 定数は、このページには表示されません。

![](assets/s_ncs_admin_survey_constante.png)
