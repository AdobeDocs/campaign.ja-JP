---
product: campaign
title: インバウンドチャネルのオファー
description: インバウンドチャネルのオファー
feature: Interaction, Offers
version: Campaign v8, Campaign Classic v7
audience: interaction
content-type: reference
topic-tags: case-study
exl-id: 90afced3-465d-4370-8a33-51a7e4356135
TQID: 'https://experienceleague.adobe.com/HkXtRV9hn2hZSZyxx86o2muGafhdhWuLp-uYBe4xTaU'
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
source-wordcount: '3052'
ht-degree: 69%
---
# インバウンドチャネルのオファー{#offers-on-an-inbound-channel}



## 匿名訪問者に対するオファーの提案 {#presenting-an-offer-to-an-anonymous-visitor}

Neobank という会社のサイトで、ページを閲覧した匿名訪問者に対するオファーを Web サイト上に表示するものとします。

このインタラクションを実現するには、次の手順を実行します。

1. [匿名環境の作成](#creating-an-anonymous-environment)
1. [匿名オファースペースの作成](#creating-anonymous-offer-spaces)
1. [オファーカテゴリとテーマの作成](#creating-an-offer-category-and-a-theme)
1. [匿名オファーの作成](#creating-anonymous-offers)
1. [Web サイト上の web オファースペースの設定](#configure-the-web-offer-space-on-the-website)

### 匿名環境の作成 {#creating-an-anonymous-environment}

[オファー環境の作成](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/offers/interaction-settings/interaction-env#create-an-offer-environment){target="_blank"}（Campaign v8 ドキュメント）で説明されている手順に従って、**訪問者**&#x200B;のディメンションに基づく匿名環境を作成します。

新しい環境を格納したツリー構造ができます。

![ デザインツリーと環境を提供します – ビジタープロパティ、着信匿名インタラクションの環境](assets/offer_env_anonymous_003.png)

### 匿名オファースペースの作成 {#creating-anonymous-offer-spaces}

1. 匿名環境（**訪問者**）内で、**[!UICONTROL 管理]**／**[!UICONTROL スペース]**&#x200B;ノードに移動します。
1. 「**[!UICONTROL 新規]**」をクリックして呼び出しチャネルを作成します。

   ![ オファースペースリストの新しいボタンで、「プロパティ」タブを含む「新しいオファースペース」ダイアログを開く](assets/offer_inbound_anonymous_example_010.png)

   >[!NOTE]
   >
   >スペースは、この匿名環境に自動的にリンクされます。

1. ラベルを変更し、「**[!UICONTROL インバウンド Web]**」チャネルを選択します。 また、「**[!UICONTROL 単一モードを有効にする]**」ボックスをオンにします。

   ラベル「匿名Web プレミアムオファー」とインバウンド Web チャネルが選択された![ オファースペースダイアログ ](assets/offer_inbound_anonymous_example_006.png)

1. このスペースで使用するオファーコンテンツフィールドを選択し、必要に応じて関連するボックスをオンにして指定します。

   これにより、次の要素に不足があるオファーは、このスペースの実施要件を満たさないことになります。

   * タイトル
   * HTML コンテンツ
   * 画像 URL
   * 宛先 URL

   ![ オファースペースのオファーコンテンツフィールドとして選択されたタイトルフィールドを含む式ダイアログを選択](assets/offer_inbound_anonymous_example_030.png)

1. 次の例のように、HTML レンダリング関数を編集します。

   ```javascript
   function (imageUrl, targetUrl, shortContent, htmlSource){
         var html = "<p><b>" + shortContent + "</b></p>";
         html += "<p>" + htmlSource + "</p>";
         html += "<a _urlType='11' href='" + targetUrl + "'><img src='" + encodeURI(imageUrl) + "'/></a>";
         return html;
       }   
   ```

   >[!IMPORTANT]
   >
   >オファーを正しく表示するために、レンダリング関数では、事前に選択された順序のとおりにスペース用のフィールドを列挙する必要があります。

   ![関数を編集リンクをクリックすると、オファースペースの「HTML レンダリング」タブが開き、レンダリング関数がオーバーロードされます](assets/offer_inbound_anonymous_example_031.png)

1. オファースペースを保存します。

### オファーカテゴリとテーマの作成 {#creating-an-offer-category-and-a-theme}

1. 先ほど作成した環境の「**[!UICONTROL オファーカタログ]**」ノードに移動します。
1. 「**[!UICONTROL オファーカタログ]**」ノードを右クリックし、「**[!UICONTROL 新しい「オファーカテゴリ」フォルダーを作成]**」を選択します。

   新規カテゴリに、例えば「**Financial products**」（金融商品）という名前を付けます。

1. このカテゴリの「**[!UICONTROL 実施要件]**」タブに移動して、テーマに「**financing**」と入力し、変更を保存します。

   ![ テーマ フィールドがfinancing](assets/offer_inbound_anonymous_example_023.png)に設定された「Offer category Eligibility」タブ

### 匿名オファーの作成 {#creating-anonymous-offers}

1. 作成したカテゴリに移動します。
1. 「**[!UICONTROL 新規]**」をクリックします。

   ![新しいオファーダイアログを開く金融商品カテゴリのオファーリストの新しいボタン ](assets/offer_inbound_anonymous_example_013.png)

1. 標準で用意されている匿名オファーテンプレートか、別の作成済みテンプレートを選択します。

   ![新しい匿名オファー（emptyAnonOffer）と新しいオファー（emptyOfferVisitor）を含むオファーテンプレートリスト ](assets/offer_inbound_anonymous_example_014.png)

1. ラベルを変更し、オファーを保存します。

   ![匿名プレミアムオファーのラベルが付いた新しい匿名オファーダイアログ#1保存する前に](assets/offer_inbound_anonymous_example_015.png)

1. 「**[!UICONTROL 実施要件]**」タブに移動し、アプリケーションのコンテキストに応じてオファーの重み付けを指定します。

   この例では、オファーは、年末まで優先項目としてサイトのホームページに表示されるように設定されています。

   ![ オファーの重み付けと、匿名のオファースペースに制限された重み付けダイアログを含む「オファーの適格性」タブ ](assets/offer_inbound_anonymous_example_016.png)

1. 「**[!UICONTROL コンテンツ]**」タブに移動し、オファーのコンテンツを定義します。

   >[!NOTE]
   >
   >「**[!UICONTROL コンテンツ定義]**」を選択すると、この Web スペースに必要な要素のリストが表示されます。

   ![最初の匿名オファーのタイトル、宛先URL、画像URL、HTML コンテンツを含む「オファーのコンテンツ」タブ ](assets/offer_inbound_anonymous_example_017.png)

1. 2 つ目のオファーを作成します。

   ![ タイトル、宛先URL、HTML コンテンツを含む2番目の匿名オファーの「コンテンツ」タブ ](assets/offer_inbound_anonymous_example_018.png)

1. 「**[!UICONTROL 実施要件]**」タブに移動し、最初のオファーと同じ重み付けを指定します。
1. 各オファーに対して承認サイクルを実行し、オファーおよび承認されたオファースペースを、オンライン環境で利用可能な状態にします。

### Web サイト上の Web オファースペースの設定 {#configure-the-web-offer-space-on-the-website}

設定したばかりのオファーをweb サイトに表示するには、サイトのHTML ページにJavaScript コードを挿入してインタラクションエンジンを呼び出します（詳しくは、[ インバウンドチャネルについて](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/offers/inbound/interaction-present-offers){target="_blank"} （Campaign v8 ドキュメント）を参照）。

1. HTML ページに移動して、@id 属性を挿入し、先ほど作成した匿名オファースペース（[匿名オファースペースの作成](#creating-anonymous-offer-spaces)を参照）の内部名にプレフィックス **i_** を付加した値を指定します。

   ![i_SPC3のdivを持つHTML ページソース。オファースペースの内部名の前にi_](assets/offer_inbound_anonymous_example_019.png)が付きます

1. 呼び出し URL を挿入します。

   env=liveVisitorおよびth=financing パラメーターがハイライト表示されたinteractionProposal.jsへの![HTML スクリプト呼び出し](assets/offer_inbound_anonymous_example_020.png)

   上のコード中の URL について、青色の囲みで示した部分は、インスタンス名、環境の内部名（[匿名環境の作成](#creating-an-anonymous-environment)を参照）、カテゴリにリンクされたテーマ（[オファーカテゴリとテーマの作成](#creating-an-offer-category-and-a-theme)）を表しています。 テーマの指定はオプションです。

この Web サイトの訪問者がホームページにアクセスすると、HTML ページに設定されたとおりに、「**financing**」のテーマに属するオファーが表示されます。

![ サイドバーに匿名オファーを表示する「特別オファー」ブロックを含むNeobank ホームページ ](assets/offer_inbound_anonymous_example_022.png)

同じユーザーが何回もページにアクセスすると、カテゴリの各オファーに適用されている重み付けは等しいので、いずれかのオファーが表示されます。

## 連絡先が識別されていない場合の匿名環境への切り替え {#switching-to-an-anonymous-environment-in-case-of-unidentified-contacts}

Neobank が、異なる 2 つのターゲットに向けたマーケティングオファーを作成するものとします。 匿名の Web サイトブラウザーに対しては、汎用的なオファーを表示します。 ユーザーが Neobank 発行の ID を持った顧客であると判明した場合は、ログイン後すぐに、パーソナライズされたオファーを表示するようにします。

このケーススタディで使用するシナリオは次のとおりです。

1. 訪問者が、ログインすることなく Neobank の Web サイトを閲覧します。

   ![ ログオンしていない訪問者にログインパネルが表示されたNeobank ホームページ ](assets/offer_inbound_fallback_example_050.png)

   3 つの匿名オファーがページに表示されます。そのうち 2 つは Neobank の商品に関するオファー「**Best Offer**」（ベストオファー）で、もう 1 つは Neobank のパートナー企業によるオファーです。

   ![匿名オファーが3件あるNeobank ページ：2件のベストオファーオファーと1件のパートナーオファー](assets/offer_inbound_fallback_example_051.png)

1. このユーザーが、Neobank の顧客として、自分の資格情報でログインします。

   ユーザーがログオンする前に資格情報を入力した![Neobank ログインパネル ](assets/offer_inbound_fallback_example_052.png)

   3 つのパーソナライズされたオファーが表示されます。

   ![特別提供ブロックで3つのパーソナライズされたオファーがハイライト表示されたログイン後のNeobank ページ ](assets/offer_inbound_fallback_example_053.png)

このケーススタディを実装するには、2 つのオファー環境が必要です。1 つは匿名インタラクション用の環境、もう 1 つは識別されたコンタクト向けに設定された特別なオファーを提示する環境です。 識別されたオファー環境については、連絡先がログインせず識別されない場合、自動的に匿名オファー環境へと切り替わるように設定します。

次の手順に従います。

* 匿名のインバウンドインタラクションに特化したオファーカタログの作成手順：

  1. [匿名連絡先向け環境の作成](#creating-an-environment-for-anonymous-contacts)
  1. [匿名環境向けオファースペースの設定](#configuring-offer-spaces-for-the-anonymous-environment)
  1. [匿名環境でのオファーカテゴリの作成](#creating-offer-categories-in-an-anonymous-environment)
  1. [匿名訪問者向けオファーの作成](#creating-offers-for-anonymous-visitors)

* 識別したインバウンドインタラクションに特化したオファーカタログの作成手順：

  1. [識別した環境でのオファースペース設定](#configure-the-offer-spaces-in-the-identified-environment)
  1. [識別した環境でのオファーカテゴリ作成](#creating-offer-categories-in-an-identified-environment)
  1. [パーソナライズされたオファーの作成](#creating-personalized-offers)

* オファーエンジン呼び出しの設定：

  1. [Web ページのオファースペース設定](#configuring-offer-spaces-on-the-web-page)
  1. [識別したオファースペースの詳細設定](#specifying-the-advanced-settings-of-the-identified-offer-spaces)

### 匿名連絡先向け環境の作成 {#creating-an-environment-for-anonymous-contacts}

1. 配信マッピングアシスタントで、匿名インバウンドインタラクション向けのオファー環境を作成します（**訪問者**&#x200B;マッピング）。 詳しくは、[オファー環境の作成](https://experienceleague.adobe.com/ja/docs/campaign/campaign-v8/offers/interaction-settings/interaction-env#create-an-offer-environment){target="_blank"}（Campaign v8 ドキュメント）を参照してください。

   ![ デザインツリーと環境を提供します – ビジタープロパティ、着信匿名インタラクションの環境](assets/offer_env_anonymous_003.png)

### 匿名環境向けオファースペースの設定 {#configuring-offer-spaces-for-the-anonymous-environment}

この Web サイトに提示する必要があるオファーは、「**Best Offer**」（ベストオファー）と「**Partner**」（パートナー）の 2 つの異なるカテゴリに属します。 この例では、各カテゴリに特定のオファースペースを 1 つずつ作成します。

「**Best Offer**」カテゴリに対応するオファースペースを作成するには、次の手順に従います。

1. Adobe Campaign ツリーで、先ほど作成した匿名環境に移動し、オファースペースを 1 つ追加します。

   ![環境 – ビジターデザイン環境のオファースペースリストで、新しいボタンがハイライト表示されている](assets/offer_inbound_fallback_example_023.png)

1. 「**[!UICONTROL インバウンド Web]**」タイプのスペースを新規作成します。

   ![ インバウンド Webを選択した新しいオファースペース チャネル ドロップダウン ](assets/offer_inbound_fallback_example_024.png)

1. ラベルとして、例えば、&quot;**Web Best Anonymous Offer**&quot;（Web ベスト匿名オファー）と入力します。
1. このオファースペースに使用されるオファーコンテンツのフィールドを追加し、レンダリング関数を設定します。

   ![ インバウンド Web チャネル、コンテンツフィールド、HTML レンダリング機能を備えたオファースペース Web ベスト匿名オファー](assets/offer_inbound_fallback_example_025.png)

   >[!IMPORTANT]
   >
   >オファーを正しく表示するために、レンダリング関数では、事前に選択された順序のとおりにスペース用のフィールドを列挙する必要があります。

1. 同じ手順で、「**Partner**」カテゴリに対応するインバウンド Web チャネルのオファースペースを作成します。

   ![ インバウンド Web チャネル、HTML コンテンツおよび画像URL フィールドを使用してスペース Web パートナー匿名を提供する](assets/offer_inbound_fallback_example_026.png)

### 匿名環境でのオファーカテゴリの作成 {#creating-offer-categories-in-an-anonymous-environment}

まず、「**Best Offer**」（ベストオファー）および「**Partner**」（パートナー）という 2 つのオファーカテゴリを作成します。 各カテゴリには、匿名コンタクト向けのオファーを 2 件ずつ用意します。

1. 先ほど作成した匿名環境の「**[!UICONTROL オファーカタログ]**」に移動します。
1. **[!UICONTROL オファーカテゴリ]**&#x200B;フォルダーを追加し、&quot;**Best Offer**&quot; というラベルを付けます。

   ![環境の下の「Best Offer - Visitors」というラベルの付いたオファーカテゴリーフォルダー – デザインツリー](assets/offer_inbound_fallback_example_027.png)

1. 2 つ目のカテゴリを作成し、&quot;**Partner**&quot; というラベルを付けます。

   ![環境の下のベストオファーの横にオファーカテゴリーパートナーが作成されました – 訪問者](assets/offer_inbound_fallback_example_028.png)

### 匿名訪問者向けオファーの作成 {#creating-offers-for-anonymous-visitors}

次は、上で作成した各カテゴリ内に 2 つずつオファーを作成します。

1. 「**Best Offer**」カテゴリに移動し、匿名オファーを作成します。

   ![ ベストオファーカテゴリの新しい匿名オファーダイアログに「ベストオファー」というラベルが付#1](assets/offer_inbound_fallback_example_029.png)

1. 「**[!UICONTROL 実施要件]**」タブに移動し、アプリケーションのコンテキストに応じてオファーの重み付けを指定します。

   ホーム ページと保存ページの重み付けを持つ最高のオファー#1匿名オファーの![実施要件タブ ](assets/offer_inbound_fallback_example_030.png)

1. 「**[!UICONTROL コンテンツ]**」タブに移動し、オファーのコンテンツを定義します。

   タイトルがNeobank Bank AccountとHTML content](assets/offer_inbound_fallback_example_032.png)の匿名のベストオファーの![ コンテンツタブ

1. 「**Best Offer**」カテゴリに 2 つ目のオファーを作成します。

   ![ タイトルがNeobank Home InsuranceとHTMLのコンテンツを含む2番目のベストオファーのコンテンツタブ ](assets/offer_inbound_fallback_example_031.png)

1. 「**Partner**」カテゴリに移動し、匿名オファーを作成します。
1. 「**[!UICONTROL コンテンツ]**」タブに移動し、オファーのコンテンツを定義します。

   ![匿名パートナーオファーの「コンテンツ」タブ。タイトルは「Neoウィークリー」と「HTML コンテンツ」です](assets/offer_inbound_fallback_example_033.png)

1. 「**[!UICONTROL 実施要件]**」タブに移動し、アプリケーションのコンテキストに応じてオファーの重み付けを指定します。

   ![匿名のパートナーメディアオファーの適格性タブ （重み付け3、ホームページ用） ](assets/offer_inbound_fallback_example_034.png)

1. 「**Partner**」カテゴリに 2 つ目のオファーを作成します。

   ![ タイトルがExcursionとHTML コンテンツを含む2番目の匿名パートナーオファーの「コンテンツ」タブ ](assets/offer_inbound_fallback_example_035.png)

1. 「**[!UICONTROL 実施要件]**」タブに移動し、このカテゴリの最初のオファーと同じ値の重み付けを適用して、交互に Web サイトに表示されるようにします。

   最初の](assets/offer_inbound_fallback_example_036.png)と同じ、ホームページの重みが3の2番目のパートナーオファーの「実施要件」タブ![

1. 各オファーに対して承認サイクルを実行し、ライブ環境への反映を開始します。 コンテンツの承認時には、オファーに応じて「**Partner**」または「**Best Offer**」のいずれかのオファースペースを有効化します。

### 識別した環境でのオファースペースの設定 {#configure-the-offer-spaces-in-the-identified-environment}

この Web サイトに提示するオファーは、「**Best Offer**」および「**Partner**」の 2 つの異なるカテゴリから取得されます。 この例では、各カテゴリに特定のオファースペースを 1 つずつ作成します。

匿名オファースペースの場合と同じ手順で、2 つのオファースペースを作成します。 [匿名環境向けオファースペースの設定](#configuring-offer-spaces-for-the-anonymous-environment)を参照してください。

1. Adobe Campaign ツリー内で、先ほど作成した環境に移動し、「**Best Offer**」および「**Partner**」オファースペースを追加します。
1. [匿名環境向けオファースペースの設定](#configuring-offer-spaces-for-the-anonymous-environment)で説明されているプロセスを実行します。

   ![Web パートナー識別スペースが開いている環境 – 受信者デザイン環境のオファースペースリスト ](assets/offer_inbound_fallback_example_005.png)

1. 「**[!UICONTROL 個人が識別されなかった場合、匿名環境にフォールバックします]**」オプションを選択します。

   ![ オファースペースで個人が選択されていない場合、匿名環境にフォールバックする](assets/offer_inbound_fallback_example_006.png)

1. ドロップダウンリストを使用して、先ほど作成した匿名 Web オファースペースを選択します（[匿名環境向けオファースペースの設定](#configuring-offer-spaces-for-the-anonymous-environment)を参照）。

   ![ リンクされた匿名スペースの匿名オファースペースのドロップダウンリスト。Web パートナーの匿名が選択されています](assets/offer_inbound_fallback_example_007.png)

### 識別したオファースペースの詳細設定の指定 {#specifying-the-advanced-settings-of-the-identified-offer-spaces}

この例では、Adobe Campaign データベースのメールアドレス情報を利用してコンタクト先を識別します。 受信者のメールをスペースに追加するには、次の手順に従います。

1. 識別された環境で、オファースペースフォルダーに移動します。
1. 「**Best Offer**」オファースペースを選択し、「**[!UICONTROL 詳細設定パラメーター]**」をクリックします。

   ![ ターゲット識別タブを開く詳細パラメーターリンクを含むWeb Best Offer Identified スペース ](assets/offer_inbound_fallback_example_044.png)

1. 「**[!UICONTROL ターゲット識別情報]**」タブで、「**[!UICONTROL 追加]**」をクリックします。

   ![ キーパスの「追加」ボタンを含む高度なパラメーターターゲット識別タブ ](assets/offer_inbound_fallback_example_046.png)

1. 「**[!UICONTROL 式を編集]**」をクリックし、受信者テーブルに移動して、「**[!UICONTROL メール]**」フィールドを選択します。

   ![電子メールフィールドを選択した状態で、受信者テーブルの式フィールドセレクターを編集](assets/offer_inbound_fallback_example_047.png)

1. 「**[!UICONTROL OK]**」をクリックして&#x200B;**[!UICONTROL 詳細設定パラメーター]**&#x200B;ウィンドウを閉じ、「**Best Offer**」オファースペースの設定を完了します。
1. 「**Partner**」オファースペースについても同じ手順を実行します。

   ![詳細パラメータターゲット識別タブで@email キーパスが設定されたWeb パートナー識別スペース ](assets/offer_inbound_fallback_example_048.png)

### 識別した環境でのオファーカテゴリの作成 {#creating-offer-categories-in-an-identified-environment}

「**Best Offer**」および「**Partner**」という 2 つのカテゴリを作成し、パーソナライズされたオファーを各カテゴリに 2 つずつ用意します。

1. 識別された環境で、「**[!UICONTROL オファーカタログ]**」ノードに移動します。
1. 匿名環境と同様に、**最高オファー**&#x200B;と&#x200B;**パートナー**&#x200B;の2つの&#x200B;**[!UICONTROL オファーカテゴリ]** フォルダーをラベルとして追加します。

   ![環境 – 最高のオファーとパートナーのカテゴリを含む受信者デザインツリー。訪問者環境を反映](assets/offer_inbound_fallback_example_009.png)

### パーソナライズされたオファーの作成 {#creating-personalized-offers}

各カテゴリにパーソナライズされたオファーを 2 つずつ、合計 4 つのオファーを作成します。

1. 「**Best Offer**」カテゴリに移動し、1 つ目のパーソナライズされたオファーを作成します。

   ![新しいオファー（emptyOffer） テンプレートを使用して、特定されたベストオファーカテゴリの新しいオファーダイアログを作成し、「ベストオファー#1](assets/offer_inbound_fallback_example_011.png)」というラベルを付けます

1. 「**[!UICONTROL 実施要件]**」タブに移動し、アプリケーションのコンテキストに応じてオファーの重み付けを指定します。

   ![Neobank ホームページと銀行ページに対する最初に特定されたベストオファーの適格性タブ ](assets/offer_inbound_fallback_example_012.png)

1. 「**[!UICONTROL コンテンツ]**」タブに移動し、オファーのコンテンツを定義します。

   ![ タイトルがNeobank Bank AccountとNeobankのお客様向けのオファーのパーソナライズされたベストオファーの「コンテンツ」タブ ](assets/offer_inbound_fallback_example_013.png)

1. 「**Best Offer**」カテゴリに 2 つ目のオファーを作成します。

   ![2番目にパーソナライズされたベストオファー、Neobank Home Insuranceのコンテンツタブ。既存顧客に対する返金あり](assets/offer_inbound_fallback_example_014.png)

1. 「**Partner**」カテゴリに移動し、パーソナライズされたオファーを作成します。

   ![ パーソナライズされたパートナーオファーの「コンテンツ」タブ。タイトルは「エクスカーション」で、Neobankのお客様は20%割引](assets/offer_inbound_fallback_example_015.png)

1. 「**[!UICONTROL 実施要件]**」タブに移動し、アプリケーションのコンテキストに応じてオファーの重み付けを指定します。

   ![ ネオバンクホームページのパートナー旅行オファーの利用資格タブ。重み付けは5です](assets/offer_inbound_fallback_example_016.png)

1. 「**Partner**」カテゴリに 2 つ目のオファーを作成します。

   ![2つ目のパートナーオファーの「Neoウィークリー」の「コンテンツ」タブ。Neobankのお客様は50%割引](assets/offer_inbound_fallback_example_017.png)

1. 「**[!UICONTROL 実施要件]**」タブに移動し、このカテゴリの最初のオファーと同じ値の重み付けを適用して、交互に Web サイトに表示されるようにします。
1. 各オファーに対して承認サイクルを実行し、更新を開始します。 コンテンツの承認処理では、「**Partner**」または「**Best Offer**」オファースペースを有効化します。

### Web ページのオファースペースの設定 {#configuring-offer-spaces-on-the-web-page}

Neobank の Web サイトにはオファー用のスペースが 3 つあります。そのうち 2 つは、自社の商品やサービスに関する「**Best Offer**」カテゴリのオファー、もう 1 つは、パートナー企業による「**Partner**」カテゴリのオファーです。

![2つのベストオファーフレームと1つのパートナーオファーフレームをスペシャルオファーで使用するログオンユーザー用のNeobank ホームページ ](assets/offer_inbound_fallback_example_038.png)

これらのオファースペースを Web サイトの HTML ページに設定するには、次の手順に従います。

1. HTML ページのコンテンツに、@id 属性を持つ

   要素を 3 つ挿入します。この @id 属性の値によって、Web サイトの様々なオファースペースに含まれるオファーの呼び出しが実行されます。

   ![3つのオファースペースを定義するDivs ContBO1、ContBO2およびContPtnを含むHTML ページソース ](assets/offer_inbound_fallback_example_039.png)

1. 各種の属性値を定義するスクリプトを挿入します。

   ![ContBO1、ContBO2、ContPtnのinteractionDivを、それらのスペースとカテゴリとともに定義するスクリプト ](assets/offer_inbound_fallback_example_040.png)

   この例では、**ContBO1** および **ContBO2** に **OsWebBestOfferIdentified** という値が設定されています。この値は、識別された環境に先ほど作成した「**Best Offer**」オファースペースの内部名です。 **CatBestOffer** および **CatBestOfferAnonym** という値は、匿名環境および識別された環境にある「**Best Offer**」カテゴリの内部名に一致します。

   ![ ベストオファースペース OSWebBestOfferIdentifiedと、識別された環境と匿名の環境のベストオファーカテゴリ ](assets/offer_inbound_fallback_example_041.png)

   同様に、「**ContPtn**」に設定されている値 **OSWebPartnerIdentified** は、識別された環境に作成した「**Partner**」オファースペースの内部名に一致します。 **CatPartner** および **CatPartnerAnonym** という値は、匿名環境および識別された環境にある「**Partner**」カテゴリの内部名に一致します。

   ![ パートナー空間OSWebPartnerIdentified、スクリプト内のCatPartnerおよびCatPartnerAnonym カテゴリの値](assets/offer_inbound_fallback_example_042.png)

1. 変数 **interactionTarget** には、Neobank サイトにログオンするユーザーを識別するための情報を割り当てます。

   ![interactionTarget変数は、ページスクリプト ](assets/offer_inbound_fallback_example_043.png)でログインするユーザーの電子メールに設定されています

   ユーザーの識別手段としては、ブラウザーの Cookie、URL 内の読み取りパラメーター、メール、ユーザー自身の本人確認情報などが使用できます。 受信者テーブルに含まれる情報のうち、プライマリキー以外のフィールドを使用する場合は、スペースの詳細設定パラメーターに定義する必要があります（[識別されたオファースペースの詳細設定](#specifying-the-advanced-settings-of-the-identified-offer-spaces)を参照）。

1. 呼び出し URL を挿入します。

   env=EnvNeobankIdnRecipを含むinteractionProposal.jsへの![Script呼び出し。識別された環境内部名](assets/offer_inbound_fallback_example_049.png)

   URLには、識別された環境の内部名である&#x200B;**EnvNeobankIdnRecip**&#x200B;が含まれています。

Web ページを開くと、スクリプトを使用してインタラクションエンジンを呼び出し、Web ページの関連するスペースにオファーのコンテンツを表示できます。 Adobe Campaign サーバーに対する 1 回の呼び出しのみで、エンジンは、選択する環境、オファースペース、カテゴリを認識します。

この例では、識別された環境（**EnvNeobankIdnRecip**）をエンジンが認識します。 また、Web ページに含まれる第 1、第 2 のオファースペースについては「**OSWebBestOfferIdentified**」オファースペースおよび「**Best Offer**」カテゴリ（**CatBestOffer**）を認識し、第 3 のオファースペースについては「**OSWebPartnerIdentified**」オファースペースおよび「**Partner**」カテゴリ（**CatPartner**）を認識します。

エンジンが受信者を識別できない場合は、識別されたオファースペースから参照されている匿名オファースペースへの切り替えがおこなわれ、スクリプトの指定どおり、匿名カテゴリ（「**CatPartner**」および「**CatPartnerAnonym**」）が使用されます。
