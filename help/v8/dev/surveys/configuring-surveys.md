---
product: campaign
title: オンライン調査の設定
description: オンライン調査の設定方法を説明します
feature: Surveys
version: Campaign v8, Campaign Classic v7
exl-id: 387bc362-4064-4181-9385-8e0c3423ba3e
TQID: 'https://experienceleague.adobe.com/1BTkZ--FyHkp7u0eya-lmuELDu8AMmeC96eGsonYcVM'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
  - id: 71b1c383-45b9-57e0-b8cd-ea2e98a01a26
    internal-label: Surveys
subfeature_v2:
  - id: ed29abcd-b6a8-4d4b-ab8b-b7e746973281
    internal-label: Web Forms
source-git-commit: aa436bfd174075f7ed3e144ea0b16832b6b811ff
workflow-type: tm+mt
source-wordcount: '145'
ht-degree: 84%
---
# オンライン調査の設定{#configuring-surveys}

>[!AVAILABILITY]
>
>調査は、[Campaign FFDA デプロイメント &#x200B;](../../architecture/enterprise-deployment.md)では利用できません。



## 調査のプロパティ {#survey-properties}

オンライン調査では、独自の要件を満たすため、自由に設定やカスタマイズをおこなうことができます。 パラメーターは、プロパティウィンドウで入力する必要があります。

使用可能なパラメーターについて詳しくは、[このドキュメント](https://experienceleague.adobe.com/en/docs/campaign-classic/using/designing-content/web-forms/defining-web-forms-properties){target="_blank"}を参照してください。

![](assets/s_ncs_admin_survey_properties_general.png)

## 調査のデータストレージ {#survey-data-storage}

デフォルトでは、Web フォームフィールドは、受信者テーブルに格納されます。 別のテーブルを使用するには、「**[!UICONTROL ドキュメントタイプ]**」フィールドで選択します。 **[!UICONTROL ズーム]**&#x200B;アイコンを使用すると、選択したテーブルの内容を表示できます。

フィールドに格納されていない（ただしローカル変数に格納されている）ユーザーによって提供された調査の回答は、「**調査への回答**」テーブルに格納されます。 「**[!UICONTROL ライブラリ]**」フィールドに基づいて、使用するスキーマを変更できます。 このフィールドは、**調査**&#x200B;でのみ使用できます。
