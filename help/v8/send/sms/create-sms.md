---
title: SMS 配信の作成
description: SMS 配信の作成方法について説明します。
feature: SMS
role: User
level: Beginner, Intermediate
version: Campaign v8, Campaign Classic v7
exl-id: 3b15eb3e-8625-4049-bf0d-327407ae5ea6
TQID: 'https://experienceleague.adobe.com/9hRirStfl9Rb2piTS3xY7C4Gb7zsUGeuoTxFFKgjf-8'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
subfeature_v2:
  - id: b1bd1421-1927-4c59-9bc6-ce292360e43b
    internal-label: SMS Messaging
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '177'
ht-degree: 100%
---
# 最初の SMS 配信の作成 {#sms-delivery}

新しい SMS 配信を作成するには、次の手順に従います。

1. 新しい配信を作成し、SMS 送信用に作成した [SMS 配信テンプレート](sms-mid-sourcing.md#sms-delivery-template)を選択します。

   ![](assets/sms_create.png){zoomable="yes"}

   配信の作成手順について詳しくは、[このページ](../../start/create-message.md)を参照してください。

<!--
 * For standalone instance,  [learn more here](sms-standalone-instance.md#sms-delivery-template).
* For mid-sourcing infrastructure,
-->

1. トラッキングに必要な場合は、「**[!UICONTROL ラベル]**」フィールドで配信の名前を変更し、「**[!UICONTROL 配信コード]**」フィールドと&#x200B;**[!UICONTROL 特性]**&#x200B;リストに情報を追加します。 また、配信に&#x200B;**[!UICONTROL 説明]**&#x200B;を追加することもできます。

1. 「**[!UICONTROL 続行]**」ボタンをクリックします。 これで、配信でのテンプレートのすべての設定が完了しました。

1. 「**[!UICONTROL プロパティ]**」ボタンで、すべてが必要に応じて設定されていることを確認できます。 [詳しくは、「SMS」タブを参照してください](sms-delivery-settings.md#sms-tab)

   ![](assets/sms_settings.png){zoomable="yes"}

1. 配信の[コンテンツを定義します](sms-content.md)。

1. [オーディエンスを選択します](sms-audience.md)。

オーディエンスを定義する手順について詳しくは、[こちらのページ](../../audiences/create-audiences.md)を参照してください。

## SMS の検証と送信 {#sms-validate}

配信を作成したら、次の手順に従います。

1. レンダリングとコンテンツを検証するための[配達確認を送信します](sms-proofs.md)。

1. 次に、[最終的なオーディエンスに送信します](sms-send.md)。

## SMS の監視と追跡 {#sms-monitor}

送信後、[SMS の監視および追跡方法について詳しくは、こちらを参照してください](sms-monitor.md)。
