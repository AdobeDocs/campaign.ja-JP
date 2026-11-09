---
product: campaign
title: Web アプリケーションの基礎知識
description: 動的な Web アプリケーション、ランディングページ、調査を作成および共有します
feature: Landing Pages, Web Apps
version: Campaign v8, Campaign Classic v7
exl-id: df58221f-f71b-49d5-a6a1-c81ddff27fdb
TQID: 'https://experienceleague.adobe.com/GP-1vCAYzcgjaOyUs-Zkx6rXOLSNbpF7962OEMsw5YM'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: a7760dfc-5c44-4d77-bb68-c50b1e265c93
    internal-label: Security and privacy
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
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
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
source-git-commit: 6db6c9152f6060b40596bd65a2ce705f916401be
workflow-type: tm+mt
source-wordcount: '877'
ht-degree: 79%
---
# web アプリケーションの基本を学ぶ{#about-web-applications}

>[!NOTE]
>
>最も一般的なユースケースでは、Campaign Web ユーザーインターフェイスでランディングページを作成し、簡単にデザインして公開できます。 この節の説明に従って、クライアントコンソールで作成されたランディングページでは、より多くの設定を提供し、より高度なユースケースをカバーします。
>
>[Campaign Web ユーザーインターフェイスのランディングページについて詳しく見る](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/landing-pages/get-started-lp){target="_blank"}



Adobe Campaign では、データベースのデータを使用して動的でインタラクティブな Web アプリケーションの作成とパブリッシュをおこなったり、接続ユーザーの権限に応じたコンテンツを作成したりできます。

エクストラネット上の編集フォームのほか、データベースからのデータを含み、テーブル、グラフ、入力フォームなどを備えた通知フォームなど、ページの作成が可能です。この機能を使用すると、ユーザーが情報を調べたり入力したりできる Web ページをデザインおよび投稿できます。

例えば、以下に示されているような、Adobe Campaign データベース内の情報をあらかじめ読み込んだ状態の購読フォームなどを作成できます。

![](assets/webapp_form_sample.png)

この章では、Web アプリケーションの管理方法の概要について説明します。

>[!NOTE]
>
>Web アプリケーションのセキュリティを最適化する方法については、[セキュリティおよびプライバシーチェックリスト](https://helpx.adobe.com/jp/campaign/kb/acc-security.html)を参照してください。

>[!CAUTION]
>
>プライバシー保護のために、すべての外部リソースに対して HTTPS を使用することをお勧めします。

## Web アプリケーションのスコープ {#web-application-scope}

Adobe Campaign の Web アプリケーションでは、次の機能を利用できます。

* 複数ページのフォームの作成。 詳しくは、この[ページ](about-web-forms.md)を参照してください。
* 統合された翻訳ツールによる多言語の調査の管理。 詳しくは、この[ページ](translating-a-web-application.md)を参照してください。
* グラフィカルなページ管理インターフェイス、複数列のページレイアウト。 詳しくは、この[ページ](designing-a-web-application.md)を参照してください。
* パーソナライゼーションとフィールドの位置のレンダリング。 詳しくは、この[ページ](editing-content.md#adding-personalization-content)を参照してください。
* 回答に応じた調査フィールドの条件付き表示。 詳しくは、この[ページ](form-rendering.md#defining-fields-conditional-display)を参照してください。
* 質問のランダム表示。 詳しくは、この[&#x200B; ページ &#x200B;](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/content/surveys/building-a-survey#adding-questions){target="_blank"} （Campaign v8 ドキュメント）を参照してください。
* 条件付きページ表示。 詳しくは、この[ページ](defining-web-forms-page-sequencing.md#conditional-page-display)を参照してください。
* 期待されるデータタイプ（数値、メールアドレス、日付など） および必須フィールドに応じた、検証前の情報確認。 詳しくは、この[ページ](form-rendering.md#defining-control-settings)を参照してください。
* 電子メールの招待状または通知。 詳しくは、この[ページ](publishing-a-web-form.md#delivering-a-form-via-email)を参照してください。
* エラーおよび終了メッセージのパーソナライゼーション。 詳しくは、この[ページ](defining-web-forms-properties.md#setting-up-an-error-page)を参照してください。
* 画像、ビデオ、ハイパーテキストリンク、Captcha などの使用について詳しくは、この[ページ](editing-content.md)を参照してください。
* リアルタイムの応答の監視。 詳しくは、この[&#x200B; ページ &#x200B;](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/content/surveys/publish-track-and-use-collected-data#response-tracking){target="_blank"} （Campaign v8 ドキュメント）を参照してください。

オプションの&#x200B;**調査**&#x200B;作成モジュールは、次の追加機能を提供します。

* データベースの動的な拡張（最初のデータテンプレートに含まれない応答の作成）。 詳しくは、この[&#x200B; ページ &#x200B;](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/content/surveys/managing-answers#storing-collected-answers){target="_blank"} （Campaign v8 ドキュメント）を参照してください。
* 専用レポートの生成。 詳しくは、この[&#x200B; ページ &#x200B;](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/content/surveys/publish-track-and-use-collected-data#reports-on-surveys){target="_blank"} （Campaign v8 ドキュメント）を参照してください。

Web アプリケーションと比較すると、調査は、シンプルなグラフィカルインターフェイスを備え、編集コントロールが少なくなっています。

>[!NOTE]
>
>調査の詳細については、[このセクション &#x200B;](https://experienceleague.adobe.com/en/docs/campaign/campaign-v8/content/surveys/about-surveys){target="_blank"} （Campaign v8 ドキュメント）を参照してください。
>
>Adobe Campaign の Web フォームの全体的な機能について詳しくは、[この節](about-web-forms.md)を参照してください。

## Web アプリケーションの実装 {#web-application-implementation}

Web アプリケーションを作成および投稿するには、次を実行する必要があります。

1. コンテンツを作成します（フィールド、リスト、テーブル、グラフなど）。

   また、フォームの利用可能なフィールドの詳細を説明するセクションを表示できます。これらすべてのフィールドは、Web アプリケーションでも利用できます。 詳しくは、[このページ](adding-fields-to-a-web-form.md)を参照してください。

1. 必要に応じて、プリロード、テストおよび保存手順を追加したり、アクセス制御システムを設定したりすることができます（主にエクストラネットに公開するフレームワーク内で）。
1. Web アプリケーションをパブリッシュして、エクストラネットまたは Adobe Campaign で利用できるようにします。

## Web アプリケーションの初期設定 {#web-application-initial-configuration}

Web アプリケーションは、「**[!UICONTROL キャンペーン]**」および「**[!UICONTROL プロファイルとターゲット]**」タブの「**[!UICONTROL Web アプリケーション]**」リンクを使用して作成されます。

Web アプリケーションは、Adobe Campaign ツリーの&#x200B;**[!UICONTROL リソース／オンライン／Web アプリケーション]**&#x200B;ノードに格納されます。 設定は、次のフォルダーに分類されます。

* **[!UICONTROL 管理／設定／フォームのレンダリング]**：Web フォームプレゼンテーションのレンダリングテンプレートが含まれます（アプリケーションおよび調査）。 テンプレートを使用すると、フォームを生成できます。 また、CSS スタイルシートを使用します。 このスタイルシートは、テンプレートレベルでオーバーロードできます。 詳しくは、[このページ](form-rendering.md#selecting-the-form-rendering-template)を参照してください。
* **[!UICONTROL リソース／テンプレート／Web アプリケーションテンプレート]**：フォームテンプレートが含まれます。 フォームまたは Web アプリケーションを作成するには、テンプレートから開始する必要があります。

## Web アプリケーションテンプレート {#web-application-templates}

デフォルトでは、Adobe Campaign は、利用可能な Web アプリケーションごとに 1 つのテンプレートを提供します。

>[!NOTE]
>
>既存の Web アプリケーションをテンプレートに変換できます。 そのためには、フォームを選択して右クリックし、 **[!UICONTROL アクション／テンプレートとして保存]**&#x200B;を選択します。

Adobe Campaign ツリーの&#x200B;**[!UICONTROL リソース／テンプレート／Web アプリケーションテンプレート]**&#x200B;ノードで、新しいテンプレートを作成できます。

以下に示すように、作成アシスタントを使用して、有効にするオプションを選択できます。

![](assets/webapp_create_template.png)

>[!CAUTION]
>
>利用可能なアプリケーションは、オプションおよびモジュールによって異なります。 使用許諾契約書を確認してください。
