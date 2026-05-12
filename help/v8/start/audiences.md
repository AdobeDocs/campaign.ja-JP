---
title: Campaign でのオーディエンスの使用
description: Campaign でのオーディエンスの使用
feature: Audiences
role: User
level: Beginner
exl-id: 07baa759-fb0b-4eba-bf8b-ec6cf21df7f8
version: Campaign v8, Campaign Classic v7
TQID: https://experienceleague.adobe.com/7yA7UY-YeKjSgy6jUpDWdHpCHRuT-FFi4xTfhj3awu8
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2:
  - id: afa4204e-6d08-4e29-bc35-26aafb656d48
subfeature_v2:
  - id: d6330382-c886-4f7a-a4f7-74e3f36c0d9c
  - id: f529d0bd-1401-4c88-9833-43228cc1d40f
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2:
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 537
ht-degree: 79%

---

# Campaign でのオーディエンスの使用{#gs-ac-audiences}

プロファイルは、Adobe Campaign データベースに保存されている連絡先を表します。 デフォルトでは、**受信者**&#x200B;は、電子メール、SMS、ダイレクトメールなどの配信を送信する際に使用されるプライマリプロファイルです。 データベースに保存された受信者データを使用すると、ターゲットオーディエンスを定義およびフィルタリングしたり、配信コンテンツをパーソナライズしたりできます。 受信者に加えて、特定の目的のために他のプロファイルタイプが存在します。 たとえば、シードプロファイルを利用すれば、実際のオーディエンスに配信する前に、配信をテストできます。

プロファイルとオーディエンスをインポート、更新、管理する方法については、[この節](../audiences/gs-audiences.md)を参照してください。

## リストの作成{#create-lists}

リストは、配信アクションのターゲットにしたり、インポート操作時や別のワークフロー実行時に更新したりできる、連絡先の静的なセットです。 例えば、クエリによってデータベースから抽出した母集団からリストを作成できます。

リストの作成と管理の方法については、[こちらのページ](../audiences/create-audiences.md)を参照してください。

## データベースのフィルター{#filter-the-database}

フィルター設定を使用すると、リストからデータを&#x200B;**[!UICONTROL 動的に]**&#x200B;選択できます。データが変更されると、フィルターされたデータが更新されます。 独自のフィルターを作成することも、ビルトインのフィルターを使用してターゲットオーディエンスを定義することもできます。

フィルターの作成と管理の方法について詳しくは、[こちらのページ](../audiences/create-filters.md)を参照してください。

## ワークフローでのオーディエンスの作成

ターゲティングは、ワークフロー内のグラフィカルシーケンスでクエリを組み合わせて作成できます。 要件に応じてターゲットとなるオーディエンスを作成できます。 ワークフローエディターを表示するには、Campaign ダッシュボードで「**[!UICONTROL ターゲティングとワークフロー]**」タブをクリックします。

[このページ &#x200B;](https://experienceleague.adobe.com/docs/campaign/automation/campaign-orchestration/marketing-campaign-target.html?lang=ja){target="_blank"}のキャンペーンワークフローでオーディエンスを構築する方法について説明します。


## アクティブなプロファイル {#active-profiles}

アクティブなプロファイルは、お客様が過去 12 か月の間に、任意のチャネル経由で通信を試みたプロファイルです。

各キャンペーンインスタンスには、契約に従って特定数のアクティブなプロファイルがプロビジョニングされ、課金のためその数がカウントされます。 購入したアクティブなプロファイルの数については、最新の契約書を参照してください。 詳しくは、[Adobe Campaign製品の説明](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target="_blank"}を参照してください。

インスタンスで使用されているアクティブなプロファイル数は、Campaign コントロールパネルから直接監視できます。 詳しくは、[コントロールパネルのドキュメント](https://experienceleague.adobe.com/docs/control-panel/using/performance-monitoring/active-profiles-monitoring.html?lang=ja){target="_blank"}を参照してください。


次のガードレールと制限が適用されます。

* 複数の配信のターゲットになっているプロファイルは 1 回だけカウントされます。
* X（Twitter）のソーシャルマーケティングのコンテキストでのターゲットプロファイルは、アクティブなプロファイルとして考慮されません。
* カウントは、受信者のプライマリキーに基づきます。 その結果、1 つのプロファイルが 2 つの異なる受信者テーブルに存在する場合、アクティブなプロファイルとして 2 回カウントされる可能性があります。

## プライバシーと同意{#privacy-and-consent}

Adobe Campaign は大量のデータを収集して処理できる強力なツールですが、データの中には個人情報や機密情報も含まれます。 Adobe Campaign を使用すると、個人情報や機密情報などのデータを収集できます。 したがって、受信者の同意を得てこれを監視することが重要になります。

プライバシーと同意の管理方法については、[Adobe Campaign Classic v7 ドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=ja){target="_blank"}を参照してください。

