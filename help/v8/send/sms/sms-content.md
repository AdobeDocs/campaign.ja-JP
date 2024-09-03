---
title: SMS によるコンテンツの定義
description: SMS 配信のコンテンツを設定する方法を学ぶ
feature: SMS
role: User
level: Beginner, Intermediate
source-git-commit: 36bb1e2c9e2391065360c3cd2ad97612373ec0c2
workflow-type: tm+mt
source-wordcount: '243'
ht-degree: 32%

---


# SMS コンテンツ {#sms-content}

SMS 配信のコンテンツを設定するには、次の手順を実行します。

1. **[!UICONTROL テキストコンテンツ]** ウィザードにメッセージの内容を入力します

   ![](assets/sms_content.png){zoomable="yes"}

1. メッセージをパーソナライズするには、パーソナライゼーションフィールドを挿入したり（名の追加など）、事前定義済みパーソナライゼーションブロックを挿入したり（挨拶の追加など）します。 「パーソナライゼーション」ボタンをクリックして、以下を追加できます。

   ![](assets/sms_perso.png){zoomable="yes"}

   **[!UICONTROL 受信者]**/**[!UICONTROL 名]** をクリックすると、次のようなパーソナライゼーションが表示されます。

   ![](assets/sms_perso_recipient.png){zoomable="yes"}

1. 「**[!UICONTROL プレビュー]**」タブに移動して「**[!UICONTROL パーソナライゼーションをテスト]**」ドロップダウンリストをクリックし、「**[!UICONTROL 受信者]**」テーブルで受信者を選択すると、配信をプレビューできます。

   ![](assets/sms_preview.png){zoomable="yes"}

   パーソナライゼーションを使用して SMS のプレビューを確認できます。

   ![](assets/sms_preview_phone.png){zoomable="yes"}

>[!NOTE]
>
>* SMS メッセージの文字数には制限があり、Latin-1（ISO-8859-1）コードページを使用する場合は 160 字以内です。メッセージが Unicode で作成されている場合、上限は 70 文字です。また、使用する文字によってメッセージの長さ制限が変化することがあります。メッセージの長さについて詳しくは、「[SMS 文字の表記変換 ](smpp-external-account.md#smpp-channel-settings)」の節を参照してください。
>
>* パーソナライゼーションフィールドまたは条件付きコンテンツが含まれる場合、メッセージのサイズは受信者によって異なります。メッセージの長さはパーソナライゼーションを適用した後の状態で評価する必要があります。
>
>※分析開始時にメッセージの長さが確認され、オーバーフロー時に警告が表示されます。

配信のコンテンツを作成したら、[ オーディエンスを選択 ](sms-audience.md) できます。