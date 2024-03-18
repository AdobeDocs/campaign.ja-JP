---
title: Campaign でのオーディエンスの使用
description: Campaign でのオーディエンスの使用
feature: Audiences
role: User
level: Beginner
exl-id: 07baa759-fb0b-4eba-bf8b-ec6cf21df7f8
source-git-commit: 59d33983db930b3a7dc022693d72704bda99e3a1
workflow-type: ht
source-wordcount: '457'
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

キャンペーンワークフローでのオーディエンスの作成方法については、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja)を参照してください。


## アクティブなプロファイル {#active-profiles}

アクティブなプロファイルは、お客様が過去 12 か月間、任意のチャネル経由で通信を試みたプロファイルです。ライセンス指標は、アクティブなプロファイルに基づいています。詳しくは、[Adobe Campaign 製品説明](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target="_blank"}を参照してください。

インスタンスで使用されているアクティブなプロファイル数は、Campaign コントロールパネルから直接監視できます。詳しくは、[コントロールパネルのドキュメント](https://experienceleague.adobe.com/docs/control-panel/using/performance-monitoring/active-profiles-monitoring.html?lang=ja){target="_blank"}を参照してください。

>[!CAUTION]
>
>* 複数の配信のターゲットになっているプロファイルは 1 回だけカウントされます。
>
>* X（Twitter）のソーシャルマーケティングのコンテキストでのターゲットプロファイルは、アクティブなプロファイルとして考慮されません。

## プライバシーと同意{#privacy-and-consent}

Adobe Campaign は大量のデータを収集して処理できる強力なツールですが、データの中には個人情報や機密情報も含まれます。 Adobe Campaign を使用すると、個人情報や機密情報などのデータを収集できます。したがって、受信者の同意を得てこれを監視することが重要になります。

![](../assets/do-not-localize/book.png) プライバシーと同意を管理する方法については、[Adobe Campaign Classic v7 のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=ja){target="_blank"}を参照してください。

**関連トピック**

* [キャンペーン固有のワークフローのデザインと実行](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/wf-type/campaign-workflows.html?lang=ja)

* [キャンペーンのオーディエンスを選択する方法を学ぶ](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja)

* [ワークフローの基本を学ぶ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/introduction/about-workflows.html?lang=ja)
