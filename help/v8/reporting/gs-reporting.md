---
title: Adobe Campaign レポートツールの概要
description: キャンペーンの成功を測定し、ユーザーの行動を分析
feature: Reporting
role: Data Engineer
level: Beginner
exl-id: f931fc0d-12c1-4bff-a4f2-153e8d91c339
source-git-commit: 3ca0b96c9235008148067dc9a309f420bd9a92f8
workflow-type: tm+mt
source-wordcount: '372'
ht-degree: 85%

---

# レポートの概要{#gs-ac-reports}

Adobe Campaign では、このページにリストされている一連のレポートツールを提供しています。

* **動的レポート**

  Campaign web UI で使用できる動的レポートは、マーケティングアクティビティの影響を測定するために、完全にカスタマイズ可能なリアルタイムのレポートを提供します。 プロファイルデータへのアクセスが追加され、開封数やクリック数などの機能的なメールキャンペーンデータに加えて、性別、市区町村、年齢などのプロファイルディメンション別のデモグラフィック分析を可能にします。[Web UI v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-web/v8/reports/dynamic-reporting/get-started-reporting.html?lang=ja){target="_blank"} を参照してください。

* **キューブ**

  Adobe Campaign には、動的レポートを作成するための直感的なデータ調査ツールが付属しています。

  マーケティング分析機能を使用すると、データの分析と測定、統計の計算、レポートの作成と計算の簡素化および最適化を行うことができます。レポートを作成し、ターゲット母集団を作成して、リストに保存できます。このリストは、Adobe Campaign でターゲティングやセグメント化のタスクに使用できます。

  ![](assets/create-a-report.png)

  これらのレポートで分析するデータは、クエリ、計算、量などの複雑さに応じて、クエリで収集したり、リスト（データ管理タイプのワークフロー）やキューブ（Marketing Analytics を使用）で事前に集計したりすることができます。データは、ピボットテーブルやグループリストの形式で表示されます。

  詳しくは、[この節](gs-cubes.md)を参照してください。

* **ビルトインレポート**

  Adobe Campaign には、配信、キャンペーン、プラットフォームアクティビティ、オプション機能などに関するレポートが付属しています。これらのレポートは、関連する様々な機能を通じて使用できます。具体的なニーズに合わせてレポートをカスタマイズすることもできます。

  これらのレポートにアクセスするには、「**レポート**」タブを使用します。

  ![](assets/built-in-reports.png)

  詳しくは、[この節](built-in-reports.md)を参照してください。

* **記述的データ分析**

  Adobe Campaign では、データベース内のデータに関する統計情報を生成できる視覚的なツールを提供しています。専用のアシスタントを使用して記述的な分析レポートを作成し、ニーズに応じてコンテンツやレイアウトをカスタマイズできます。

  **[!UICONTROL ツール／記述的分析...]**&#x200B;メニューを使用して、新しいレポートを作成します。

  ![](assets/desc-analysis-report.png)

  Campaign の記述的分析レポートは、[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/analyzing-populations/about-descriptive-analysis.html?lang=ja){target="_blank"} に記載されています。

* **カスタムレポート**

  Adobe Campaign を使用すると、データベース内のデータに関するレポートを作成できます。作成したレポートは、適切なコンテキストで参照できるようになります。

  レポートの作成手順について詳しくは、[Campaign Classic v7 ドキュメント ](https://experienceleague.adobe.com/docs/campaign-classic/using/reporting/creating-new-reports/about-reports-creation-in-campaign.html?lang=ja){target="_blank"} を参照してください。 パーソナライズされたレポートの作成は、上級ユーザーが行います。
