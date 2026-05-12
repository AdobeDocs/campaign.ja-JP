---
title: SMS コンテンツの定義とパーソナライズ
description: SMS 配信のコンテンツを定義してパーソナライズする方法について説明します。
feature: SMS
role: User
level: Beginner, Intermediate
version: Campaign v8, Campaign Classic v7
exl-id: 71d9376c-86e8-41ec-92dc-863455d40c7a
TQID: https://experienceleague.adobe.com/N4C8Rkg-Kl-82FCZAvJ12KofuRObW170ySJaCHgW5wM
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
topic_v2:
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 262
ht-degree: 100%

---

# SMS コンテンツの定義 {#sms-content}

SMS 配信のコンテンツを設定するには：

1. 「**[!UICONTROL テキストコンテンツ]**」タブにメッセージのコンテンツを入力します。

   ![](assets/sms_content.png){zoomable="yes"}

1. パーソナライゼーションフィールド（名の追加など）を挿入することや、定義済みのパーソナライゼーションブロック（挨拶の追加など）を挿入することで、メッセージをパーソナライズできます。 パーソナライゼーションボタンをクリックして、次の項目を追加します。

   ![](assets/sms_perso.png){zoomable="yes"}

   例えば、**[!UICONTROL 受信者]**／**[!UICONTROL 名]**&#x200B;をクリックすると、SMS コンテンツが次のようにパーソナライゼーションフィールドで更新されます。

   ![](assets/sms_perso_recipient.png){zoomable="yes"}

   Adobe Campaign のパーソナライゼーションについて詳しくは、[この節](../personalize.md)を参照してください。

1. 「**[!UICONTROL プレビュー]**」タブから配信コンテンツをプレビューできます。 パーソナライゼーション設定を確認するには、**[!UICONTROL パーソナライゼーションをテスト]**&#x200B;ドロップダウンリストをクリックし、受信者を選択します。

   ![](assets/sms_preview.png){zoomable="yes"}

   パーソナライゼーションを行った SMS の次のプレビューを確認できます。

   ![](assets/sms_preview_phone.png){zoomable="yes"}

>[!NOTE]
>
>* SMS メッセージの文字数には制限があり、Latin-1（ISO-8859-1）コードページを使用する場合は 160 字以内です。 メッセージが Unicode で作成されている場合、上限は 70 文字です。 また、使用する文字によってメッセージの長さ制限が変化することがあります。 メッセージの長さについて詳しくは、[SMS 文字の表記変更について](smpp-external-account.md#smpp-channel-settings)の節を参照してください。
>
>* パーソナライゼーションフィールドまたは条件付きコンテンツが含まれる場合、メッセージのサイズは受信者によって異なります。 メッセージの長さはパーソナライゼーションを適用した後の状態で評価する必要があります。
>
>*分析を開始すると、メッセージの長さがチェックされ、制限を超える場合は警告が表示されます。

配信のコンテンツを作成したら、[オーディエンスを選択](sms-audience.md)できます。
