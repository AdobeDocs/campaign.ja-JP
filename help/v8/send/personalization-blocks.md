---
title: パーソナライゼーションブロックを使用
description: メッセージコンテンツで組み込みのパーソナライゼーションブロックを使用する方法を説明します
feature: Personalization
role: User
level: Beginner
source-git-commit: badcbb83c4bd0cf509c156557f5ea6f7cf7ae771
workflow-type: tm+mt
source-wordcount: '638'
ht-degree: 44%

---


# パーソナライゼーションブロックを使用{#personalization-blocks}

パーソナライゼーションブロックは、配信に挿入できる特定のレンダリングを含む動的コンテンツです。 例えば、ロゴ、挨拶メッセージまたはミラーページへのリンクを追加できます。

パーソナライズされたコンテンツブロックにアクセスするには、 **[!UICONTROL リソース/Campaign Management/パーソナライゼーションブロック]** エクスプローラーのノード。 組み込みのパーソナライゼーションブロックのリストは、 [この節](#ootb-personalization-blocks).

また、新しいブロックを定義して、配信のパーソナライゼーションを最適化することもできます。 [詳細情報](#create-custom-personalization-blocks)。

## パーソナライゼーションブロックの挿入 {#insert-personalization-blocks}

パーソナライゼーションブロックをメッセージに挿入するには、以下の手順に従います。

1. 配信ウィザードのコンテンツエディターで、パーソナライゼーションアイコンをクリックし、 **[!UICONTROL 次を含む]** メニュー
1. リストからパーソナライゼーションブロックを選択するか、 **[!UICONTROL その他…]** メニューを使用して完全なリストにアクセスします。

   ![](assets/perso-content-block.png)

1. パーソナライゼーションブロックがスクリプトとして挿入されます。パーソナライゼーションが生成されると、受信者プロファイルに自動的に適応されます。
1. 次を参照： **[!UICONTROL プレビュー]** タブをクリックし、特定の受信者に関するこのブロックのコンテンツを表示する受信者を選択します。

配信コンテンツには、パーソナライゼーションブロックのソースコードを含めることができます。そのためには、ブロックの選択時に「**[!UICONTROL ブロックの HTML ソースコードを含める]**」を選択します。

## 組み込みのパーソナライゼーションブロック {#ootb-personalization-blocks}

組み込みのパーソナライゼーションブロックは次のとおりです。

* **[!UICONTROL Adobe Campaign によって有効にされています]**：「Adobe Campaign によって有効にされています」ロゴを挿入します。
* **[!UICONTROL 固有名詞のフォーマット設定関数]**：JavaScript の **[!UICONTROL toSmartCase]** 関数を生成します。この関数は各単語の最初の文字を大文字に変更します。
* **[!UICONTROL 挨拶]**:受信者の姓名と共に挨拶文を挿入し、その後にコンマを付けます。 例：「こんにちは、John Doe。」
* **[!UICONTROL ロゴを挿入]**：インスタンス設定で定義されているロゴを挿入します。
* **[!UICONTROL ミラーページへのリンク]**:リンクを [ミラーページ](mirror-page.md). デフォルトの形式：「このメッセージが正しく表示されない場合は、ここをクリックしてください。」
* **[!UICONTROL ミラーページの URL]**：ミラーページの URL を挿入し、配信デザイナーがリンクを確認できるようにします。
* **[!UICONTROL 単一モードのオファー許可 URL]**：オファーを&#x200B;**[!UICONTROL 許可済み]**&#x200B;に設定できる URL を挿入します。（このブロックは、インタラクションモジュールが有効な場合に使用できます）
* **[!UICONTROL 登録の確認]**：購読を確認できるリンクを挿入します。
* **[!UICONTROL 登録リンク]**：購読リンクを挿入します。このリンクは、インスタンス設定で定義されています。デフォルトの内容は「登録するには、ここをクリックしてください。」です。
* **[!UICONTROL 登録リンク (リファラーを含む)]**：購読リンクを挿入し、訪問者と配信を識別できるようにします。このリンクは、インスタンス設定で定義されています。
* **[!UICONTROL 登録ページの URL]**:購読 URL を挿入します
* **[!UICONTROL コンテンツ E メールのスタイル]** および **[!UICONTROL 通知スタイル]**:事前に定義されたHTMLスタイルで E メールを書式設定するコードを生成します。
* **[!UICONTROL 購読解除リンク]**：すべての配信を購読解除（ブロックリスト登録）できるリンクを挿入します。関連付けられているデフォルトのコンテンツは、「このメッセージが届いたのは、お客様が&#x200B;***組織名***&#x200B;または関連会社と連絡を取ったことがあるからです。***組織名***&#x200B;からメッセージを受け取らないようにするには、ここをクリックしてください。」です。

## カスタムパーソナライゼーションブロックの作成 {#create-custom-personalization-blocks}

パーソナライゼーションアイコンから挿入する、新しくパーソナライズされたコンテンツブロックを定義できます。

パーソナライゼーションブロックを作成するには、次の手順に従います。

1. 次を参照： **[!UICONTROL リソース/Campaign Management/パーソナライゼーションブロック]** Campaign エクスプローラーのフォルダー。
1. 組み込みブロックのリストの上にある **[!UICONTROL 新規]**.

   ![](assets/perso-new-block.png)

1. 次のように、パーソナライゼーションブロックの設定に入力します。

   ![](assets/perso-custom-block.png)

   * ブロックのラベルを入力します。このラベルは、パーソナライゼーションフィールドの挿入ウィンドウに表示されます。
   * を選択します。 **配信** コンテンツタイプ。
   * を有効にします。 **[!UICONTROL カスタマイズメニューに表示]** オプションを使用して、このブロックにパーソナライゼーションフィールドの挿入アイコンからアクセスできるようにします。
   * 必要に応じて、 **[!UICONTROL パーソナライゼーションブロックの内容は、フォーマットによって異なります]** 「 」オプションを使用して、HTMLE メールとテキスト E メールの 2 つの異なるブロックを定義します。
   * コンテンツ (HTML、テキスト、JavaScript など ) を パーソナライゼーションブロックの **[!UICONTROL 保存]**.

保存すると、新しいパーソナライゼーションブロックが配信エディターで使用できるようになります。

## チュートリアルビデオ {#personalization-blocks-video}

動的コンテンツブロックを作成する方法、および動的コンテンツブロックを使用して E メール配信のコンテンツをパーソナライズする方法については、次のビデオを参照してください。

>[!VIDEO](https://video.tv.adobe.com/v/342088?quality=12)

