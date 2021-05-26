---
solution: Campaign v8
product: Adobe Campaign
title: プロファイルの基本を学ぶ
description: プロファイルの基本を学ぶ
feature: プロファイル
role: Data Engineer
level: Beginner
exl-id: b0f8c057-dd4e-4284-b5a4-157986a1d95a
source-git-commit: 69d69c909e6b17ca3f5fb18d6680aa51d0d701cf
workflow-type: tm+mt
source-wordcount: '306'
ht-degree: 11%

---

# Campaignへのデータのインポート{#ootb-profiles}

Campaignは、連絡先をCloudデータベースに追加する際に役立ちます。 ファイルの読み込み、複数の連絡先の更新のスケジュール設定と自動化、Webでのデータの収集、受信者テーブルへのプロファイル情報の直接入力を行うことができます。

[!DNL :bulb:] オーディエンスの概 [](audiences.md)
[!DNL :bulb:] 要Campaignデータモデ [ル](../dev/datamodel.md)

## ワークフローでのプロファイルのインポート

プロファイルのインポートは、ワークフローで「**インポート**」アクティビティ経由で実行される専用のテンプレートで設定します。 例えば、複数の情報システム間のデータ交換を自動化するために、スケジュールに従って自動的に繰り返すことができます。詳しくは、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/import-export-workflows.html)を参照してください。

![](assets/import-wf.png)

詳しくは、Campaign Classicv7のドキュメントを参照してください。

:[!DNL :arrow_upper_right:]:[インポートおよびエクスポートの概要](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/get-started-data-import-export.html)

:[!DNL :arrow_upper_right:]: [インポートとエクスポートのベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/best-practices/import-export-best-practices.html)

:[!DNL :arrow_upper_right:]:[インポートの設定と実行](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/executing-import-jobs.html)

## 単一インポートの実行

一般的なデータインポートジョブを作成して実行し、Cloudデータベースに連絡先を読み込みます。

![](assets/new-import.png)

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/about-generic-imports-exports.html)でデータベースにフィードする単一インポートジョブを実行する方法を説明します。

## Webアプリを通じたプロファイルの収集

Campaignを使用してWebフォームを作成し、プロファイル情報を簡単かつ効率的に収集および管理します。 これらのフォームをWebサイトで共有できるので、連絡先が簡単に情報を提供できます。 ユーザーの情報がCampaignに送信され、ユーザーのプロファイルを作成したり、既にデータベースに存在する場合は情報を更新したりします。

![](assets/web-form-page.png)

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-forms/about-web-forms.html)でWebフォームを作成する方法を説明します。

**関連トピック**

* [オーディエンスの作成](audiences.md)
* [プロファイルの重複排除](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/deduplication-merge.html)
* [プロファイルデータのエンリッチメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/enriching-data.html)
