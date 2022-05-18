---
title: プロファイルの基本を学ぶ
description: プロファイルの基本を学ぶ
feature: Profiles
role: Data Engineer
level: Beginner
exl-id: b0f8c057-dd4e-4284-b5a4-157986a1d95a
source-git-commit: 6de5c93453ffa7761cf185dcbb9f1210abd26a0c
workflow-type: tm+mt
source-wordcount: '321'
ht-degree: 100%

---

# Campaign へのデータの読み込み {#ootb-profiles}

Campaign を使用すると、クラウドデータベースに連絡先を追加できます。 ファイルを読み込んだり、複数の連絡先の更新をスケジュールして自動化したり、web でデータを収集したり、プロファイル情報を受信者テーブルに直接入力したりできます。

![](../assets/do-not-localize/glass.png) [オーディエンス](audiences.md)の概要

![](../assets/do-not-localize/glass.png) Campaign [データモデル](../dev/datamodel.md)について

## ワークフローへのプロファイルのインポート

プロファイルのインポートは、**インポート**&#x200B;アクティビティを使用したワークフローを通じて実行される専用テンプレートで設定します。 例えば、複数の情報システム間のデータ交換を自動化するために、スケジュールに従って自動的に繰り返すことができます。 詳しくは、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/import-export-workflows.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

![](assets/import-wf.png)

詳しくは、次の Campaign Classic v7 ドキュメントを参照してください。

* [読み込みと書き出しの概要](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/get-started-data-import-export.html?lang=ja){target=&quot;_blank&quot;}

* [読み込みと書き出しのベストプラクティス](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/best-practices/import-export-best-practices.html?lang=ja){target=&quot;_blank&quot;}

* [読み込みの設定と実行](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/executing-import-jobs.html?lang=ja){target=&quot;_blank&quot;}

## 単一インポートの実行

汎用データインポートジョブを作成して実行し、クラウドデータベースに連絡先を読み込みます。

![](assets/new-import.png)

![](../assets/do-not-localize/book.png) 単一の読み込みジョブを実行してデータベースにフィードする方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/importing-and-exporting-data/generic-imports-exports/about-generic-imports-exports.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

## Web アプリでのプロファイルの収集

Campaign を使用して web フォームを作成し、プロファイルの情報を簡単かつ効率的に収集および管理します。 これらのフォームは web サイトで共有できるので、連絡先にとっても情報を提供しやすくなります。ユーザーの情報が Campaign に送信され、ユーザーのプロファイルを作成したり、既にデータベースに存在する場合は情報を更新したりします。

![](assets/web-form-page.png)

![](../assets/do-not-localize/book.png) Web フォームの作成方法については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/designing-content/web-forms/about-web-forms.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

**関連トピック**

* [オーディエンスの作成](audiences.md)
* [プロファイルの重複を排除](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/deduplication-merge.html?lang=ja){target=&quot;_blank&quot;}
* [プロファイルデータのエンリッチメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/use-cases/data-management/enriching-data.html?lang=ja){target=&quot;_blank&quot;}
