---
product: campaign
title: コンテンツ管理
description: コンテンツ管理
feature: Workflows, Data Management
role: User
version: Campaign v8, Campaign Classic v7
exl-id: 9b225f78-1959-4e4f-aa4e-ff8a63051154
TQID: https://experienceleague.adobe.com/7owt-TM494cZq-Knz55qMpCAAtGhlpaKOlf2iXXeqo4
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 518
ht-degree: 100%

---

# コンテンツ管理{#content-management}

「**コンテンツ管理**」アクティビティでは、コンテンツの作成と操作、およびこのコンテンツに基づくファイルの生成をおこなうことができます。 その後、このコンテンツを「配信」アクティビティ経由で配信できます。

>[!CAUTION]
>
>コンテンツ管理は、オプションの Adobe Campaign モジュールです。 使用許諾契約書を確認してください。

>[!NOTE]
>
>Adobe Campaign web ユーザーインターフェイスを使用すると、コンテンツにコンテンツフラグメントを使用できます。 マーケティングユーザーは、1 つ以上のメッセージで参照できる再利用可能なコンポーネントを使用することで、複数のカスタムコンテンツブロックを事前に作成できます。これにより、改善されたデザインプロセスでメッセージコンテンツを迅速に組み立てることができます。 コンテンツフラグメントについて詳しくは、[Adobe Campaign web UI ドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/content/manage-reusable-content/fragments/fragments){target=_blank}を参照してください。

アクティビティのプロパティは、3 つの手順に分かれています。

* **コンテンツの選択**：以前に作成されたコンテンツから選ぶか、アクティビティ経由でコンテンツを作成します。
* **コンテンツの更新**：コンテンツの件名を変更するか、すべての XML コンテンツをインポートします。
* **アクション**：生成されるコンテンツを保存または生成できます。

  ![](assets/content_mgmt_edit.png)

1. **コンテンツ**

   * **[!UICONTROL トランジションで指定]**

     このオプションでは、トランジションで指定されたコンテンツを使用できます。つまり、コンテンツ管理を有効化するイベントは、変数 **[!UICONTROL contentId]** を含む必要があります。 この変数は、先行するコンテンツ管理または任意のスクリプトによって設定できます。

   * **[!UICONTROL 明示]**

     「**[!UICONTROL コンテンツ]**」フィールドで、作成済みのコンテンツを選択できます。 このフィールドは「**[!UICONTROL 明示]**」オプションを選択した場合にのみ表示されます。

     ![](assets/content_mgmt_explicit.png)

   * **[!UICONTROL スクリプトで計算]**

     コンテンツ ID がスクリプトによって自動生成されます。 「**[!UICONTROL 分割]**」フィールドに、コンテンツの ID（プライマリキー）を評価する JavaScript テンプレートを定義できます。 このフィールドは「**[!UICONTROL スクリプトで計算]**」オプションを選択した場合にのみ表示されます。

     ![](assets/content_mgmt_script.png)

   * **[!UICONTROL 新規（パブリッシュテンプレートから作成）]**

     パブリッシュテンプレートを使用して、新しいコンテンツを作成します。 「**[!UICONTROL 文字列]**」フィールドで指定されたファイルに新しいコンテンツが格納されます。 「**[!UICONTROL テンプレート]**」フィールドで、コンテンツの作成に使用されるパブリッシュテンプレートを指定します。

     ![](assets/content_mgmt_new.png)

1. **コンテンツを更新**

   * **[!UICONTROL 件名]**

     コンテンツの件名を変更できます。

   * **[!UICONTROL XML フィードからのデータにアクセス]**

     XSL スタイルシート経由でダウンロードした XML ドキュメントからコンテンツを構築できます。 このオプションが選択されている場合、「**[!UICONTROL URL]**」フィールドは XML コンテンツのダウンロード URL を指定します。 「**[!UICONTROL XSL スタイルシート]**」では、ダウンロードした XML ドキュメントの変換に使用されるスタイルシートを指定できます。 このプロパティはオプションです。

     ![](assets/content_mgmt_xmlcontent.png)

1. **実行するアクション**

   * **[!UICONTROL 保存]**

     作成または変更したコンテンツを保存します。

     アウトバウンドトランジションは 1 回のみ有効化され、コンテンツはパラメーターとして変数 **[!UICONTROL contentId]** に保存されます。

   * **[!UICONTROL 生成]**

     「ファイル」タイプのパブリッシュによって、コンテンツを保存し、変換テンプレートごとに出力ファイルを生成します。

     ![](assets/content_mgmt_generate.png)

     生成されたファイルごとにアウトバウンドトランジションが有効化され、コンテンツ ID がパラメーターとして変数 **[!UICONTROL contentId]** に、ファイル名は変数 **[!UICONTROL filename]** に保存されます。

## 入力パラメーター {#input-parameters}

* contentId

「**[!UICONTROL トランジションで指定]**」オプションが有効化されている場合に使用されるコンテンツ ID。

## 出力パラメーター {#output-parameters}

* contentId

  コンテンツ識別子

* filename

  選択したアクションが「**[!UICONTROL 生成]**」の場合、生成されたファイルの完全なファイル名。
