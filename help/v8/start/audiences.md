---
title: Campaign でのオーディエンスの使用
description: Campaign でのオーディエンスの使用
feature: Audiences
role: Data Engineer
level: Beginner
exl-id: 07baa759-fb0b-4eba-bf8b-ec6cf21df7f8
source-git-commit: 6de5c93453ffa7761cf185dcbb9f1210abd26a0c
workflow-type: tm+mt
source-wordcount: '513'
ht-degree: 100%

---

# Campaign でのオーディエンスの使用{#gs-ac-audiences}

プロファイルは、Campaign データベースに格納される連絡先です。

Adobe Campaign では、**受信者**&#x200B;とは、配信（メール、SMS など）の送信対象となるデフォルトのプロファイルのことです。データベースに保存された受信者データを使用すると、特定の配信を受け取るターゲットをフィルタリングしたり、配信コンテンツにパーソナライズデータを追加したりできます。 データベースには、他のタイプのプロファイルも含まれています。それらのプロファイルは用途が異なります。例えば、シードプロファイルは、配信を最終的なターゲットに送信する前のテスト用に作成されます。

プロファイルとオーディエンスをインポート、更新、管理する方法については、[この節](../audiences/gs-audiences.md)を参照してください。

## リストの作成{#create-lists}

リストは、配信アクションのターゲットにしたり、インポート操作時や別のワークフロー実行時に更新したりできる、連絡先の静的なセットです。例えば、クエリによってデータベースから抽出した母集団からリストを作成できます。

![](../assets/do-not-localize/glass.png)リストの作成と管理の方法は[このページ](../audiences/create-audiences.md)を参照してください。

## データベースのフィルター{#filter-the-database}

フィルター設定を使用すると、リストからデータを&#x200B;**[!UICONTROL 動的に]**&#x200B;選択できます。データが変更されると、フィルターされたデータが更新されます。独自のフィルターを作成することも、組み込みのフィルターを使用してターゲットオーディエンスを定義することもできます。

![](../assets/do-not-localize/glass.png)フィルターの作成と管理の方法については[このページ](../audiences/create-filters.md)をご覧ください。

## ワークフローでのオーディエンスの作成

ターゲティングは、ワークフロー内のグラフィカルシーケンスでクエリを組み合わせて作成できます。 要件に応じてターゲットとなるオーディエンスを作成できます。 ワークフローエディターを表示するには、Campaign ダッシュボードで「**[!UICONTROL ターゲティングとワークフロー]**」タブをクリックします。

![](../assets/do-not-localize/book.png) Campaign ワークフローでのオーディエンスの作成方法については、[Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html?lang=ja#building-the-main-target-in-a-workflow)を参照してください。{target=&quot;_blank&quot;}。


## アクティブなプロファイル{#active-profiles}

各 Campaign インスタンスには、契約に従って特定数のアクティブなプロファイルがプロビジョニングされ、課金用にその数がカウントされます。購入したアクティブなプロファイルの数については、最新の契約書を参照してください。

**プロファイル**&#x200B;とは、エンドカスタマー、見込み客、リードなどを表す情報のレコードです。例えば、Cookie ID、カスタマー ID、モバイル ID、特定のチャネルに関連するその他の情報などを含む[受信者テーブル](../dev/datamodel.md)や外部テーブルなどのレコードです。アクティブであると見なすプロファイルは、過去 12 か月以内に、いずれかのチャネルを介してターゲットに設定された、またはやり取りしたプロファイルです。

<!--
You can monitor the number of active profiles used on your instances directly from Campaign Control Panel. 

![](../assets/do-not-localize/book.png) For more on this, refer to the [Control Panel documentation](https://docs.adobe.com/content/help/en/control-panel/using/performance-monitoring/active-profiles-monitoring.html).
-->

## プライバシーと同意{#privacy-and-consent}

Adobe Campaign は大量のデータを収集して処理できる強力なツールですが、データの中には個人情報や機密情報も含まれます。 Adobe Campaign を使用すると、個人情報や機密情報などのデータを収集できます。したがって、受信者の同意を得てこれを監視することが重要になります。

![](../assets/do-not-localize/book.png) プライバシーと同意の管理方法については、[Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=ja){target=&quot;_blank&quot;}を参照してください。

Campaign Classic v7 ドキュメントの&#x200B;**関連トピック**：

* [キャンペーン固有のワークフローの設計と実行](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/building-a-workflow.html?lang=ja){target=&quot;_blank&quot;}

* [キャンペーンのオーディエンスの選択](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html?lang=ja){target=&quot;_blank&quot;}

* [ワークフローの概要](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html?lang=ja){target=&quot;_blank&quot;}
