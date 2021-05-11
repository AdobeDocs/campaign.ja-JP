---
solution: Campaign
product: Adobe Campaign
title: オーディエンスを使い始める
description: オーディエンスを使い始める
feature: オーディエンス
role: Data Engineer
level: Beginner
exl-id: 07baa759-fb0b-4eba-bf8b-ec6cf21df7f8
translation-type: tm+mt
source-git-commit: 9bc94c213d65b828444888f553722e42fc029165
workflow-type: tm+mt
source-wordcount: '707'
ht-degree: 40%

---

# オーディエンスの使い始めに{#gs-ac-audiences}

プロファイルは、リストにグループ化することも、データベースに対してクエリーを実行して収集することもできます。

## プロファイルの操作{#gs-ac-profiles}

プロファイルは、クラウドデータベースに集中化されます。 プロファイルを取得してこのデータベースを作成するために使用可能なメカニズムは多数あります。web フォームによるオンライン収集、テキストファイルの手動または自動インポート、会社のデータベースまたは他の情報システムによるレプリケーションなどです。Adobe Campaign を利用すれば、マーケティング履歴、購入情報、嗜好、CRM データおよび関連する PI データを包括的に集約し、分析をおこなって、行動に移すことができます。

「**プロファイル**」は、顧客、見込み客、ニュースレター購読者などを表す情報の記録を意味します。
**nmsRecipient**&#x200B;テーブルまたは外部テーブル内のレコードには、cookie ID、顧客ID、モバイル識別子、または特定のチャネルに関連するその他の情報が含まれています。 組み込みのプロファイルと受信者テーブルについての詳細は、[このセクション](../dev/datamodel.md#ootb-profiles)を参照してください。

Adobe Campaign では、受信者は配信（E メール、SMS など）の送信先となるデフォルトプロファイルです。データベースに保存された受信者データを使用すると、特定の配信を受け取るターゲットをフィルタリングしたり、配信コンテンツにパーソナライズデータを追加したりできます。 データベースには、他のタイプのプロファイルも含まれています。それらのプロファイルは用途が異なります。例えば、シードプロファイルは、配信を最終的なターゲットに送信する前のテスト用に作成されます。

:arrow_forward:[ビデオ](https://video.tv.adobe.com/v/35611?quality=12)のプロファイルを理解する

:arrow_upper_right:[このガイド](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/about-profiles.html/?target=_blank)でプロファイルの管理方法を説明します。

## プライバシーと同意

Adobe Campaign は、個人情報や機密データを含む膨大な量のデータを収集および処理するための強力なツールです。Adobe Campaign を使用すると、個人情報や機密情報などのデータを収集できます。したがって、受信者の同意を受け取り、監視する必要があります。

:arrow_upper_right:[このガイド](https://experienceleague.corp.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html)で、プライバシーと同意の管理方法を説明します。


## リストの作成

リストは、配信アクションのターゲットにしたり、インポート操作時やワークフロー実行時に更新したりできるプロファイルの静的なセットです。例えば、クエリによってデータベースから抽出した母集団からリストを作成できます。

:arrow_upper_right:[このセクション](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/profile-management/creating-and-managing-lists.html)でリストの作成と管理の方法を説明します。

## データベースのクエリ

ワークフローで&#x200B;**クエリ**&#x200B;アクティビティを使用して、データベースのクエリ、データのセグメント化、複雑なオーディエンスの構築を行います。

:arrow_upper_right:キャンペーンクエリの詳細については、[このガイド](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/targeting-data.html)を参照してください。

:arrow_upper_right:すべてのターゲットアクティビティが[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/targeting-activities/about-targeting-activities.html)に一覧表示されます

## ワークフローでのオーディエンスの作成

ターゲット設定は、ワークフロー内のグラフィカルなシーケンスのクエリの組み合わせを介して作成できます。 必要に応じてターゲットを設定するオーディエンスを作成できます。 ワークフローエディターを表示するには、キャンペーンダッシュボードで「**[!UICONTROL ターゲティングとワークフロー]**」タブをクリックします。

:arrow_upper_right:[このページ]https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html?lang=en#building-the-main-target-in-a-workflowのキャンペーンワークフローでオーディエンスを構築する方法を学びます。


## アクティブなプロファイル{#active-profiles}

各キャンペーンインスタンスには、契約に従って特定数のアクティブなプロファイルがプロビジョニングされ、課金のためその数がカウントされます。購入したアクティブなプロファイルの数については、最新の契約書を参照してください。

「プロファイル」とは、情報(例：[受信者テーブル](../dev/datamodel.md)のレコード、またはcookie ID、顧客ID、モバイル識別子、または特定のチャネルに関連するその他の情報を含む外部テーブル(エンド顧客、見込み客、リードなど)。 プロファイルが、過去12か月以内に任意のチャネルを介してターゲット設定または通信された場合、アクティブと見なされます。

インスタンスで使用されるアクティブなプロファイルの数は、キャンペーンCampaign コントロールパネルから直接監視できます。

:arrow_upper_right:詳しくは、[Campaign コントロールパネルドキュメント](https://docs.adobe.com/content/help/ja-JP/control-panel/using/performance-monitoring/active-profiles-monitoring.html)を参照してください。


**関連トピック**

:arrow_upper_right:[キャンペーン固有のワークフロー](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/building-a-workflow.html)を設計して実行する

:arrow_upper_right:[キャンペーンのオーディエンスを選択する方法](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-target.html)

:arrow_upper_right:[ワークフローの使用を開始する](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/introduction/about-workflows.html)
