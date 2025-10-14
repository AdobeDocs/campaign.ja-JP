---
title: Campaign でのオーディエンスの使用
description: Campaign でのオーディエンスの使用
feature: Audiences
role: User
level: Beginner
exl-id: 07baa759-fb0b-4eba-bf8b-ec6cf21df7f8
version: Campaign v8, Campaign Classic v7
source-git-commit: b24e05f152bc299ea7953856bfa71950b5cc9837
workflow-type: tm+mt
source-wordcount: '497'
ht-degree: 77%

---


# Campaign でのオーディエンスの使用{#gs-ac-audiences}

プロファイルは、Adobe Campaign データベースに保存されている連絡先を表します。 デフォルトでは、**受信者** は、メール、SMS、ダイレクトメールなどの配信を送信する際に使用されるプライマリプロファイルです。 データベースに保存された受信者データを使用すると、ターゲットオーディエンスの定義およびフィルタリングや、配信コンテンツのパーソナライズが可能です。 受信者に加えて、特定の目的に対して他のプロファイルタイプも存在します。 例えば、シードプロファイルを使用すると、実際のオーディエンスに送信する前に配信をテストできます。

プロファイルとオーディエンスをインポート、更新、管理する方法については、[この節](../audiences/gs-audiences.md)を参照してください。

## リストの作成{#create-lists}

リストは、配信アクションのターゲットにしたり、インポート操作時や別のワークフロー実行時に更新したりできる、連絡先の静的なセットです。例えば、クエリによってデータベースから抽出した母集団からリストを作成できます。

リストの作成と管理の方法については、[こちらのページ](../audiences/create-audiences.md)を参照してください。

## データベースのフィルター{#filter-the-database}

フィルター設定を使用すると、リストからデータを&#x200B;**[!UICONTROL 動的に]**&#x200B;選択できます。データが変更されると、フィルターされたデータが更新されます。独自のフィルターを作成することも、ビルトインのフィルターを使用してターゲットオーディエンスを定義することもできます。

フィルターの作成と管理の方法について詳しくは、[こちらのページ](../audiences/create-filters.md)を参照してください。

## ワークフローでのオーディエンスの作成

ターゲティングは、ワークフロー内のグラフィカルシーケンスでクエリを組み合わせて作成できます。 要件に応じてターゲットとなるオーディエンスを作成できます。 ワークフローエディターを表示するには、Campaign ダッシュボードで「**[!UICONTROL ターゲティングとワークフロー]**」タブをクリックします。

キャンペーンワークフローでのオーディエンスの作成方法については、[&#x200B; このページ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja){target="_blank"} を参照してください。


## アクティブなプロファイル {#active-profiles}

アクティブなプロファイルは、お客様が過去 12 か月の間に、任意のチャネル経由で通信を試みたプロファイルです。

契約に従い、各キャンペーンインスタンスには、特定数のアクティブなプロファイルがプロビジョニングされ、請求目的でカウントされます。購入したアクティブなプロファイルの数については、最新の契約書を参照してください。詳しくは、[Adobe Campaignの製品説明 &#x200B;](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target="_blank"} を参照してください。

インスタンスで使用されているアクティブなプロファイル数は、Campaign コントロールパネルから直接監視できます。詳しくは、[コントロールパネルのドキュメント](https://experienceleague.adobe.com/docs/control-panel/using/performance-monitoring/active-profiles-monitoring.html?lang=ja){target="_blank"}を参照してください。


次のガードレールと制限が適用されます。

* 複数の配信のターゲットになっているプロファイルは 1 回だけカウントされます。
* X（Twitter）のソーシャルマーケティングのコンテキストでのターゲットプロファイルは、アクティブなプロファイルとして考慮されません。
* カウントは、受信者のプライマリキーに基づきます。その結果、1 つのプロファイルが 2 つの異なる受信者テーブルに存在する場合、アクティブなプロファイルとして 2 回カウントされる可能性があります。

## プライバシーと同意{#privacy-and-consent}

Adobe Campaign は大量のデータを収集して処理できる強力なツールですが、データの中には個人情報や機密情報も含まれます。 Adobe Campaign を使用すると、個人情報や機密情報などのデータを収集できます。したがって、受信者の同意を得てこれを監視することが重要になります。

プライバシーと同意の管理方法については、[Adobe Campaign Classic v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=ja){target="_blank"} を参照してください。

