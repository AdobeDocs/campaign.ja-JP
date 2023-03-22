---
title: プロファイルの基本を学ぶ
description: プロファイルの基本を学ぶ
feature: Profiles
role: User
level: Beginner
exl-id: b0f8c057-dd4e-4284-b5a4-157986a1d95a
source-git-commit: 1baeb8827a0eab4f9487bb5e5afe4d779e00efe4
workflow-type: tm+mt
source-wordcount: '228'
ht-degree: 88%

---

# Campaign へのデータの読み込み {#ootb-profiles}

Campaign を使用すると、クラウドデータベースに連絡先を追加できます。ファイルを読み込んだり、複数の連絡先の更新をスケジュールして自動化したり、web でデータを収集したり、プロファイル情報を受信者テーブルに直接入力したりできます。

![](../assets/do-not-localize/glass.png) [オーディエンス](audiences.md)の概要

![](../assets/do-not-localize/glass.png) Campaign [データモデル](../dev/datamodel.md)について

## ワークフローへのプロファイルのインポート

プロファイルのインポートは、**インポート**&#x200B;アクティビティを使用したワークフローを通じて実行される専用テンプレートで設定します。 例えば、複数の情報システム間のデータ交換を自動化するために、スケジュールに従って自動的に繰り返すことができます。 詳しくは、[こちら](../../automation/workflow/recurring-import-workflow.md)を参照してください。

![](assets/import-wf.png)


## 単一インポートの実行

汎用データインポートジョブを作成して実行し、クラウドデータベースに連絡先を読み込みます。

![](assets/new-import.png)

![](../assets/do-not-localize/book.png) データベースにフィードする単一インポートジョブを実行する方法を説明します。 [Campaign Classicv7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/about-generic-imports-exports.html?lang=ja){target="_blank"}.

## Web アプリでのプロファイルの収集

Campaign を使用して web フォームを作成し、プロファイルの情報を簡単かつ効率的に収集および管理します。 これらのフォームは web サイトで共有できるので、連絡先にとっても情報を提供しやすくなります。ユーザーの情報が Campaign に送信され、ユーザーのプロファイルを作成したり、既にデータベースに存在する場合は情報を更新したりします。

![](assets/web-form-page.png)

![](../assets/do-not-localize/book.png) で Web フォームを作成する方法を説明します。 [Campaign Classicv7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-forms/about-web-forms.html?lang=ja){target="_blank"}.

**関連トピック**

* [オーディエンスの作成](audiences.md)
* [プロファイルの重複排除](../../automation/workflow/deduplication-merge.md)
* [プロファイルデータのエンリッチメント](../../automation/workflow/enrich-data.md)
