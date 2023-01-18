---
title: Adobe Campaign を使用したメール送信
description: Adobe Campaign でのメールの基本を学びます。パーソナライズされたメールをターゲット母集団に送信します。
feature: Email
role: User
level: Beginner
exl-id: 97dcd0e0-db5b-45a4-96af-817e49f6cb64
source-git-commit: 507f30d16eecf5400ee88a4d29913e4cdaca9cba
workflow-type: tm+mt
source-wordcount: '581'
ht-degree: 100%

---

# メールのデザインと送信

メール配信によって、パーソナライズされたメールをターゲット母集団に送信できます。

![](../assets/do-not-localize/book.png) 詳細については、[Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/about-email-channel.html?lang=ja){target="_blank"}

## 最初のメール配信の作成

その後の顧客体験と一貫する、パーソナライズされた関連性の高いメールを作成します。

![](assets/new-email-content.png)


次の例では、パーソナライズされたデータ、外部 URL へのリンク、ミラーページへのリンクを含むメール配信を Adobe Campaign でデザインする手順を説明します。

1. **配信の作成**

   新しい配信を作成するには、「**キャンペーン**」タブで「**配信**」をクリックし、既存の配信一覧の上部の「**作成**」ボタンをクリックします。

   ![](assets/delivery_step_1.png)

1. **テンプレートの選択**

   配信テンプレートを選択して、配信に名前を付けます。この名前は、Adobe Campaign コンソールのユーザーにのみ表示され、受信者には表示されません。ただし、この見出しは、配信のリストに表示されます。「**[!UICONTROL 続行]**」をクリックします。

   ![](assets/dce_delivery_model.png)

1. **コンテンツの読み込み**

   「**ソース**」タブをクリックして、HTML コンテンツを貼り付けます。

   ![](assets/paste-content.png)


1. **メッセージのパーソナライズ**


   * 受信者の氏名の追加

      メッセージの内容に対象のプロファイルの姓名を挿入するには、挿入したい場所にカーソルを置き、ツールバーの最後のアイコンをクリックしてから、「**[!UICONTROL 含める]**」をクリックし「**[!UICONTROL 挨拶]**」を選択します。

      ![](assets/include-greetings.png)

      「プレビュー」タブで受信者を選択し、パーソナライゼーションを確認します。

      ![](assets/perso-check.png)

   * トラッキングリンクの挿入

      画像やテキストを使用して配信の受信者を外部アドレスに誘導するには、画像やテキストを選択し、ツールバーの「**[!UICONTROL リンクを追加]**」アイコンをクリックします。

      **https://www.myURL.com** の形式で「**URL**」フィールドにリンクの URL を入力し、確認します。

      ![](assets/add-a-link.png)

   * ミラーページの追加

      受信者が web ブラウザーで配信コンテンツを表示できるようにするには、ミラーページへのリンクをメッセージに追加します。

      リンクを挿入したい位置にカーソルを置き、ツールバーの最後のアイコンをクリックして、「**[!UICONTROL 含める]**」をクリックし「**[!UICONTROL ミラーページへのリンク]**」を選択します。
   コンテンツの準備が整ったら「**保存**」をクリックします。すると、配信のリストの&#x200B;**[!UICONTROL キャンペーン／「配信」]**&#x200B;タブにコンテンツが表示されます。最初のメール配信の準備が整いました。 次に、オーディエンスを定義し、配信を検証して送信する必要があります。


メールコンテンツをインポートする方法については、この[ユースケース](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/load-delivery-content.html?lang=ja)を参照してください。

詳しくは、**Campaign Classic v7 ドキュメント**&#x200B;の以下の節を参照してください。

* Campaign でのメールのデザイン
   ![](../assets/do-not-localize/book.png) [メールのデザイン方法](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-emails/defining-the-email-content.html?lang=ja){target="_blank"}
* メールテンプレートの作成と使用
   ![](../assets/do-not-localize/book.png) [メールテンプレートの詳細情報](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-delivery-templates/about-templates.html?lang=ja){target="_blank"}
* メールのオーディエンスを選択
   ![](../assets/do-not-localize/book.png) [ターゲット母集団の定義方法を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-defining-the-target-population.html?lang=ja){target="_blank"}
* 配信の検証と配達確認の送信
   ![](../assets/do-not-localize/book.png) [配信を検証するための主な手順を学ぶ](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-validating-the-delivery.html?lang=ja){target="_blank"}
* [シードアドレス](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/using-seed-addresses/about-seed-addresses.html?lang=ja)の追加{target="_blank"}

## メールのテストと検証

Campaign では、メールをオーディエンスに送信する前にテストと検証を実施できる方法がいくつかあります。

![](../assets/do-not-localize/book.png) 適用できるベストプラクティスについては、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/delivery-bestpractices/check-before-sending.html?lang=ja)を参照してください{target="_blank"}

次の操作をおこなうことができます。

* 配信分析ログの確認
* 配達確認の送信
* シードアドレスの追加
* コントロールグループの使用
* メールのレンダリングの確認

![](../assets/do-not-localize/book.png) [詳細については、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/key-steps-when-creating-a-delivery/steps-validating-the-delivery.html?lang=ja){target="_blank"}
