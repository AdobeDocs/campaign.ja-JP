---
title: Adobe Campaign レポートツールの概要
description: キャンペーンの成功を測定し、ユーザーの行動を分析
feature: Reporting
role: Developer
level: Beginner
exl-id: f931fc0d-12c1-4bff-a4f2-153e8d91c339
TQID: 'https://experienceleague.adobe.com/L1SrrPUujP-EVeDrnPNZgRoWZhVPe8aUVt5fR-r-318'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
  - id: c309ee4e-82e4-4f7e-b608-ef345678c34e
    internal-label: Dynamic reporting
subfeature_v2:
  - id: b3a4149f-2b3a-44d1-894e-e3ac4c77fb47
    internal-label: Reporting interface
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
source-git-commit: 63e73a31c5c46cb7544917557c3a0670d7ac91c9
workflow-type: tm+mt
source-wordcount: '463'
ht-degree: 61%
---
# レポートの概要{#gs-ac-reports}

Adobe Campaign では、このページにリストされている一連のレポートツールを提供しています。

* **動的レポート**

  Adobe Dynamic Reportingは、Campaign Web UIで利用でき、マーケティング活動の影響を測定するための、完全にカスタマイズ可能なリアルタイムのレポートを提供します。 プロファイルデータへのアクセスが追加され、開封数やクリック数などの機能的なメールキャンペーンデータに加えて、性別、市区町村、年齢などのプロファイルディメンション別のデモグラフィック分析が可能になります。 [Web UI v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/reports/dynamic-reporting/get-started-reporting.html?lang=ja){target="_blank"}を参照してください。

* **キューブ**

  Adobe Campaign には、動的レポートを作成するための直感的なデータ調査ツールが付属しています。

  マーケティング分析機能を使用して、データの分析と測定、統計の計算、レポートの作成と計算の簡素化と最適化を実現できます。 レポートを作成し、ターゲット母集団を作成して、リストに保存できます。このリストは、Adobe Campaign でターゲティングやセグメント化のタスクに使用できます。

  ![利用可能なキューブテンプレートと受信者テンプレートを選択した新しいレポートページを作成しています](assets/create-a-report.png)

  これらのレポートで分析するデータは、クエリ、計算、量などの複雑さに応じて、クエリで収集したり、リスト（データ管理タイプのワークフロー）やキューブ（Marketing Analytics を使用）で事前に集計したりすることができます。 データはピボットテーブルまたはグループリストの形式で表示されます。

  詳しくは、[Adobe Campaign Analytics レポートの概要](gs-cubes.md)を参照してください。

* **ビルトインレポート**

  Adobe Campaignには、配信、キャンペーン、プラットフォームアクティビティ、オプション機能などに関するレポートが付属しています。これらのレポートは、関連するさまざまな機能を通じて利用できます。 具体的なニーズに合わせてレポートをカスタマイズすることもできます。

  これらのレポートにアクセスするには、「**レポート**」タブを使用します。

  ブロードキャスト統計やブラウザーなどの組み込みレポートのグローバルレポートリストを表示する![&#x200B; レポート タブ &#x200B;](assets/built-in-reports.png)

  詳しくは、[Adobe Campaignの組み込みレポート &#x200B;](built-in-reports.md)を参照してください。

* **記述的データ分析**

  Adobe Campaign では、データベース内のデータに関する統計情報を生成できる視覚的なツールを提供しています。 専用のアシスタントを使用して記述的な分析レポートを作成し、ニーズに応じてコンテンツやレイアウトをカスタマイズできます。

  **[!UICONTROL ツール／記述的分析...]**&#x200B;メニューを使用して、新しいレポートを作成します。

  ![追加後に開いた変数定義ダイアログを使用した記述分析ウィザード テーブルの設定](assets/desc-analysis-report.png)

  キャンペーン記述分析レポートは、[Campaign Classic v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/analyzing-populations/about-descriptive-analysis.html?lang=ja){target="_blank"}に記載されています。

* **カスタムレポート**

  Adobe Campaign を使用すると、データベース内のデータに関するレポートを作成できます。 作成したレポートは、適切なコンテキストで参照できるようになります。

  レポートを作成する手順については、[Campaign Classic v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/creating-new-reports/about-reports-creation-in-campaign.html?lang=ja){target="_blank"}を参照してください。 パーソナライズされたレポートの作成は、上級ユーザーが行います。
