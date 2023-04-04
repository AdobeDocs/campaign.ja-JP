---
title: Adobe Campaign を使用したメール送信
description: Adobe Campaign でのメールの基本を学びます。パーソナライズされたメールをターゲット母集団に送信します。
feature: Email
role: User
level: Beginner
exl-id: 97dcd0e0-db5b-45a4-96af-817e49f6cb64
source-git-commit: 1baeb8827a0eab4f9487bb5e5afe4d779e00efe4
workflow-type: tm+mt
source-wordcount: '479'
ht-degree: 100%

---

# メールのデザインと送信

メール配信によって、パーソナライズされたメールをターゲット母集団に送信できます。[詳細情報](../send/send.md)。

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

      パーソナライゼーションのオプションについて詳しくは、[この節](personalize.md)を参照してください。

   * トラッキングリンクの挿入

      画像やテキストを使用して配信の受信者を外部アドレスに誘導するには、画像やテキストを選択し、ツールバーの「**[!UICONTROL リンクを追加]**」アイコンをクリックします。

      **https://www.myURL.com** の形式で「**URL**」フィールドにリンクの URL を入力し、確認します。

      ![](assets/add-a-link.png)

   * ミラーページの追加

      受信者が web ブラウザーで配信コンテンツを表示できるようにするには、メッセージの[ミラーページ](../send/mirror-page.md)へのリンクを追加します。

      リンクを挿入したい位置にカーソルを置き、ツールバーの最後のアイコンをクリックして、「**[!UICONTROL 含める]**」をクリックし「**[!UICONTROL ミラーページへのリンク]**」を選択します。
   コンテンツの準備が整ったら「**保存**」をクリックします。すると、配信のリストの&#x200B;**[!UICONTROL キャンペーン／「配信」]**&#x200B;タブにコンテンツが表示されます。最初のメール配信の準備が整いました。 次に、オーディエンスを定義し、配信を検証して送信する必要があります。


メールコンテンツをインポートする方法については、この[ユースケース](https://experienceleague.adobe.com/docs/campaign/automation/workflows/use-cases/deliveries/load-delivery-content.html?lang=ja)を参照してください。

詳しくは、次の節を参照してください。

* [Campaign でのメールのデザイン](../send/email.md)
* [メールテンプレートの作成と使用](../send/create-templates.md)
* [メールのオーディエンスの選択](../audiences/gs-audiences.md)
* [配信の検証と配達確認の送信](../send/preview-and-proof.md)

## メールのテストと検証

Campaign では、メールをオーディエンスに送信する前にテストと検証を実施できる方法がいくつかあります。メールコンテンツをプレビューしてテストする方法については、[このページ](../send/preview-and-proof.md)を参照してください。

次の操作をおこなうことができます。

* 配信分析ログの確認
* 配達確認の送信
* シードアドレスの追加

[詳細情報](../send/delivery-analysis.md)
