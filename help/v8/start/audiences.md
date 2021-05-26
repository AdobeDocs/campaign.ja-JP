---
solution: Campaign v8
product: Adobe Campaign
title: オーディエンスの概要
description: オーディエンスの概要
feature: Audiences
role: Data Engineer
level: Beginner
exl-id: 07baa759-fb0b-4eba-bf8b-ec6cf21df7f8
source-git-commit: 0dae3431ac1ddc840244d7df4929b0c949f8011f
workflow-type: tm+mt
source-wordcount: '746'
ht-degree: 33%

---

# オーディエンスの概要{#gs-ac-audiences}

## プロファイルの操作{#gs-ac-profiles}

プロファイルは、顧客、購読者、見込み客を含む、Campaignデータベースに格納される連絡先です。 プロファイルを取得してこのデータベースを作成するために使用可能なメカニズムは多数あります。web フォームによるオンライン収集、テキストファイルの手動または自動インポート、会社のデータベースまたは他の情報システムによるレプリケーションなどです。Adobe Campaign を利用すれば、マーケティング履歴、購入情報、嗜好、CRM データおよび関連する PI データを包括的に集約し、分析をおこなって、行動に移すことができます。プロファイルには、個人のターゲティング、選定およびトラッキングに必要な情報がすべて含まれています。

プロファイルは、**nmsRecipient**&#x200B;テーブル内のレコードまたは外部テーブルで、名、姓、電子メールアドレス、Cookie ID、顧客ID、モバイル識別子、特定のチャネルに関連するその他の情報など、すべてのプロファイル属性を保存します。 受信者テーブルにリンクされたその他のテーブルには、受信者に送信されたすべての配信のレコードを含む配信ログテーブルなど、プロファイル関連のデータが含まれます。 組み込みのプロファイルと受信者テーブルについて詳しくは、[この節](../dev/datamodel.md#ootb-profiles)を参照してください。

Adobe Campaignでは、**受信者**&#x200B;は、配信（Eメール、SMSなど）の送信をターゲットとするデフォルトのプロファイルです。 データベースに保存された受信者データを使用すると、特定の配信を受け取るターゲットをフィルタリングしたり、配信コンテンツにパーソナライズデータを追加したりできます。 データベースには、他のタイプのプロファイルも含まれています。それらのプロファイルは用途が異なります。例えば、シードプロファイルは、配信を最終的なターゲットに送信する前のテスト用に作成されます。

プロファイルは、リストにグループ化したり、データベースに対してクエリを実行して収集したりできます。


Campaignにプロファイルデータを入力するには、次の操作を実行します。

* [CRMシステムな](import.md) どの外部データソースからのデータファイルのインポート
* [顧客が独自](../dev/webapps.md) の情報を入力し、独自のプロファイルを作成できるwebフォームの作成
* [プロファイルが格納される外](../connect/fda.md) 部データベースへのマッピング
* 次に示すように、クライアントコンソールを使用してプロファイルを手動で入力します。

![](assets/create-profile.png)


[!DNL :[!DNL :arrow_upper_right:]:] [Adobe Campaign Classic v7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/about-profiles.html)でプロファイルを管理する方法を説明します。


## プライバシーと同意

Adobe Campaignは、個人情報や機密データを含む大量のデータを収集し、処理するための強力なツールです。 Adobe Campaign を使用すると、個人情報や機密情報などのデータを収集できます。したがって、受信者の同意を受け取り、監視する必要があります。

:[!DNL :arrow_upper_right:]:[Adobe Campaign Classic v7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html)でプライバシーと同意を管理する方法を説明します。

## リストの作成

リストは、配信アクションのターゲットにしたり、インポート操作時やワークフロー実行時に更新したりできるプロファイルの静的なセットです。例えば、クエリによってデータベースから抽出した母集団からリストを作成できます。

:[!DNL :arrow_upper_right:]:[Adobe Campaign Classic v7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/creating-and-managing-lists.html)でリストを作成および管理する方法を説明します。

## データベースのクエリ

ワークフローで&#x200B;**クエリ**&#x200B;アクティビティを使用して、データベースに対するクエリ、データのセグメント化、複雑なオーディエンスの構築をおこないます。

:[!DNL :arrow_upper_right:]:Campaignクエリについて詳しくは、[Adobe Campaign Classic v7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/targeting-data.html)を参照してください。

:[!DNL :arrow_upper_right:]:すべてのターゲティングアクティビティは、[Adobe Campaign Classic v7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/about-targeting-activities.html)に記載されています。

## ワークフローでのオーディエンスの作成

ターゲティングは、ワークフロー内のグラフィカルなシーケンスでクエリを組み合わせて作成できます。 要件に応じてターゲット設定されるオーディエンスを作成できます。 ワークフローエディターを表示するには、キャンペーンダッシュボードで「**[!UICONTROL ターゲティングとワークフロー]**」タブをクリックします。

:[!DNL :arrow_upper_right:]:[Adobe Campaign Classic v7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html?lang=en#building-the-main-target-in-a-workflow)のキャンペーンワークフローでオーディエンスを構築する方法を説明します


## アクティブなプロファイル{#active-profiles}

各キャンペーンインスタンスには、契約に従って特定数のアクティブなプロファイルがプロビジョニングされ、課金のためその数がカウントされます。購入したアクティブなプロファイルの数については、最新の契約書を参照してください。

**** プロファイルとは、情報のレコードを意味します(例：エンド顧客、見込み客、リー [ドを表す](../dev/datamodel.md) cookie ID、顧客ID、モバイル識別子、または特定のチャネルに関連するその他の情報を含む、受信者テーブル内のレコードまたは外部テーブル。過去12ヶ月以内にいずれかのチャネルを介してターゲット設定または通信されたプロファイルは、アクティブと見なされます。

<!--
You can monitor the number of active profiles used on your instances directly from Campaign Control Panel. 

:[!DNL :arrow_upper_right:]: For more on this, refer to the [Control Panel documentation](https://docs.adobe.com/content/help/en/control-panel/using/performance-monitoring/active-profiles-monitoring.html).
-->

**関連トピック**

:[!DNL :arrow_upper_right:]:[キャンペーン固有のワークフローの設計と実行](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/building-a-workflow.html)

:[!DNL :arrow_upper_right:]:[キャンペーンのオーディエンスを選択する方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html)

:[!DNL :arrow_upper_right:]: [ワークフローの基本を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html)
