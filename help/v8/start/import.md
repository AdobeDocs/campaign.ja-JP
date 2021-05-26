---
solution: Campaign v8
product: Adobe Campaign
title: プロファイルの基本を学ぶ
description: プロファイルの基本を学ぶ
feature: プロファイル
role: Data Engineer
level: Beginner
exl-id: b0f8c057-dd4e-4284-b5a4-157986a1d95a
source-git-commit: ab7e458db5ad5696d144c17f6e89e4437a476d11
workflow-type: tm+mt
source-wordcount: '306'
ht-degree: 59%

---

# Campaign へのデータのインポート {#ootb-profiles}

Campaign を使用すると、クラウドデータベースに連絡先を追加できます。 ファイルを読み込んだり、複数の連絡先の更新をスケジュールして自動化したり、web でデータを収集したり、プロファイル情報を受信者テーブルに直接入力したりできます。

[!DNL :bulb:] オーディエンスの概 [](audiences.md)
[!DNL :bulb:] 要Campaignデータモデ [ル](../dev/datamodel.md)

## ワークフローへのプロファイルのインポート

プロファイルのインポートは、**インポート**&#x200B;アクティビティを使用したワークフローを通じて実行される専用テンプレートで設定します。 例えば、複数の情報システム間のデータ交換を自動化するために、スケジュールに従って自動的に繰り返すことができます。 詳しくは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/import-export-workflows.html?lang=ja)を参照してください。

![](assets/import-wf.png)

詳しくは、Campaign Classicv7のドキュメントを参照してください。

[!DNL :arrow_upper_right:] [インポートおよびエクスポートの概要](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/get-started-data-import-export.html?lang=ja)

[!DNL :arrow_upper_right:] [インポートとエクスポートのベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/best-practices/import-export-best-practices.html?lang=ja)

[!DNL :arrow_upper_right:] [インポートの設定と実行](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/executing-import-jobs.html?lang=ja)

## 単一インポートの実行

汎用データインポートジョブを作成して実行し、クラウドデータベースに連絡先を読み込みます。

![](assets/new-import.png)

[!DNL :arrow_upper_right:] 単一インポートジョブを実行して、 [Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/about-generic-imports-exports.html?lang=ja)でデータベースにフィードする方法を説明します。

## web アプリを通じたプロファイルの収集

Campaignを使用してWebフォームを作成し、プロファイル情報を簡単かつ効率的に収集および管理します。 これらのフォームをWebサイトで共有できるので、連絡先が簡単に情報を提供できます。 ユーザーの情報がCampaignに送信され、ユーザーのプロファイルを作成したり、既にデータベースに存在する場合は情報を更新したりします。

![](assets/web-form-page.png)

[!DNL :arrow_upper_right:] Webフォームの作成方法については、 [Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-forms/about-web-forms.html)を参照してください。

**関連トピック**

* [オーディエンスの作成](audiences.md)
* [プロファイルの重複排除](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/deduplication-merge.html?lang=ja)
* [プロファイルデータのエンリッチメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/enriching-data.html?lang=ja)
