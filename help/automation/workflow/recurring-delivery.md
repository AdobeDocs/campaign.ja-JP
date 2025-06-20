---
product: campaign
title: 繰り返し配信
description: 繰り返し配信ワークフローアクティビティの詳細を説明します
feature: Workflows
role: User, Data Engineer
version: Campaign v8, Campaign Classic v7
exl-id: 27308b0d-cbfc-4bc6-9061-d771ceac95fd
source-git-commit: 4cbccf1ad02af9133d51933e3e0d010b5c8c43bd
workflow-type: ht
source-wordcount: '266'
ht-degree: 100%

---

# 繰り返し配信{#recurring-delivery}



「**[!UICONTROL 繰り返し配信]**」アクティビティでは、キャンペーン固有の配信テンプレートの発生件数を設定できます。

![](assets/do-not-localize/how-to-video.png) [ビデオでこの機能を確認する](#recurring-delivery-video)

このアクティビティは、キャンペーン内の「**[!UICONTROL ターゲティングとワークフロー]**」タブでのみ使用できます。

手順は次のとおりです。

1. アクティビティのベースにする配信テンプレートを選択します。

   ![](assets/recurring_delivery_001.png)

1. 配信テンプレートを設定します。

このアクティビティの設定プロセスで使用できるオプションは、配信テンプレートの作成プロセスで使用できるオプションとほぼ同じです。

このアクティビティの使用例については、この[節](send-a-birthday-email.md#creating-a-recurring-delivery-in-a-targeting-workflow)を参照してください。

## 繰り返し配信の設定方法

**繰り返し配信**&#x200B;では、実行のたびに新しい配信インスタンスを作成します。例えば、ワークフローが週に 1 回実行されるようにスケジュールされている場合、1 年後には 52 件の配信が存在することになります。また、broadLog とトラッキングログは、各配信インスタンスで区切られます。

![繰り返し配信](assets/delivery_recurring.jpg)

繰り返し配信の実行を停止する場合は、キャンペーンを完全にキャンセルするか、キャンペーンの実行ワークフローを停止する必要があります。Campaign ダッシュボードから配信を停止すると、配信の発生のみが停止されます。繰り返し配信の次のインスタンスは、ワークフローの実行のたびに作成され続けます。

>[!NOTE]
>
>「**[!UICONTROL 繰り返し配信]**」タイプアクティビティから配達確認を送信することはできません。
> 
>キャンペーンワークフロー経由で配信を直接作成するには、事前設定されたチャネル固有のアクティビティを使用します（「**[!UICONTROL メール配信]**」など）。

## チュートリアルビデオ（#recurring-delivery-video）

このビデオでは、繰り返し配信とスケジューラーアクティビティを設定する方法を説明します。

>[!VIDEO](https://video.tv.adobe.com/v/27508?quality=12&captions=jpn)

Campaign に関するその他のハウツービデオは[こちら](https://experienceleague.adobe.com/docs/campaign-learn/tutorials/getting-started/introduction-to-adobe-campaign.html?lang=ja){target="_blank"}で参照できます。
