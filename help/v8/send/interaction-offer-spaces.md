---
solution: Campaign
product: Adobe Campaign
title: キャンペーンインタラクションオファースペース
description: オファースペースの作成方法
feature: 概要
role: Data Engineer
level: Beginner
translation-type: tm+mt
source-git-commit: b9de052de5aaeee4b089feb70bf20723be5c9cfa
workflow-type: tm+mt
source-wordcount: '704'
ht-degree: 45%

---

# オファースペースの作成{#creating-offer-spaces}

オファーカタログのコンテンツはオファースペースで設定します。 デフォルトでは、コンテンツに含めることができるフィールドは、**[!UICONTROL タイトル]**、**[!UICONTROL 宛先 URL]**、**[!UICONTROL 画像 URL]**、**[!UICONTROL HTML コンテンツ]**&#x200B;および&#x200B;**[!UICONTROL テキストコンテンツ]**&#x200B;です。フィールドの順序は、オファースペースで設定します。

**技術管理者**&#x200B;として、Design環境でオファースペースを作成できます。 オファースペースのサブフォルダにアクセスできる必要があります。 作成したオファースペースは、オファーの承認時に自動的にライブ環境に複製されます。

詳細設定パラメーターでは、コンタクト先の識別キーを指定できます（識別キーは、名前や E メールフィールドなど、様々な要素を同時に使用して作成できます）。詳しくは、[識別されたオファーの提示](../../interaction/using/integration-via-javascript--client-side-.md#presenting-an-identified-offer)の節を参照してください。

HTMLレンダリングはレンダリング関数を介して作成されます。 レンダリング関数で定義するフィールドの順序は、コンテンツに設定した順序と同じである必要があります。

![](assets/offer_space_create_009.png)

新しいオファースペースを作成するには、次の手順に従います。

1. オファースペースのリストで[**[!UICONTROL 新規]**]をクリックします。

   ![](assets/offer_space_create_001.png)

1. 使用するチャネルを選択して、オファースペースのラベルを変更します。

   ![](assets/offer_space_create_002.png)

1. **[!UICONTROL 単一モードを有効にする]**&#x200B;オプションをオンにします

1. **[!UICONTROL コンテンツフィールド]**&#x200B;ウィンドウに移動して、「**[!UICONTROL 追加]**」をクリックします。

   ![](assets/offer_space_create_003.png)

1. **[!UICONTROL コンテンツ]**&#x200B;ノードに移動して、フィールドを「**[!UICONTROL タイトル]**」、「**[!UICONTROL 画像 URL]**」、「**[!UICONTROL HTML コンテンツ]**」、「**[!UICONTROL 宛先 URL]**」の順に選択します。

   ![](assets/offer_space_create_004.png)

1. **[!UICONTROL 必須]**&#x200B;オプションを選択し、各フィールドを必須にします。

   >[!NOTE]
   >
   >このオプションはプレビューで使用され、必須フィールドの1つがオファーにない場合、オファースペースを公開するときに無効になります。 ただし、既にオファースペース上でオファーがライブになっている場合は、これらの条件は考慮されません。

   ![](assets/offer_space_create_005.png)

1. 「**[!UICONTROL 関数を編集]**」をクリックし、レンダリング関数を作成します。

   これは、オファースペース上にオファー表示域を生成するために使用される関数です。使用できる形式はいくつかあります。HTMLまたはテキスト。

   **注意** - XML形式は、一時的に使用できない受信インタラクションに制限されます。[詳細情報](../start/capability-matrix.md#gs-unavailable-features)

   ![](assets/offer_spacecreate_006.png)_

1. 「**[!UICONTROL HTML レンダリング]**」タブに移動して、「**[!UICONTROL HTML レンダリング関数をオーバーロード]**」を選択します。
1. レンダリング関数を挿入します。

   ![](assets/offer_space_create_007.png)

必要に応じて、HTMLおよびテキストレンダリング関数をオーバーロードできます。 [詳細情報](../../interaction/using/about-inbound-channels.md)。

## オファーの提案ステータス {#offer-proposition-statuses}

オファーの提案のステータスは、ターゲット母集団とのインタラクションによって異なります。 キャンペーンインタラクションモジュールには、ライフサイクル全体を通じてオファーの提案に適用できる値のセットが付属しています。 オファーの提案を作成し受け入れるときにステータスが変わるように、プラットフォームを設定する必要があります。

>[!NOTE]
>
>ステータス更新は、非同期プロセスです。 更新処理は、1 時間ごとにトリガーされるトラッキングワークフローによって実行されます。

### オファーステータスリスト{#status-list}

次に、オファーのステータスを示します。

* **[!UICONTROL 許可済み]**
* **[!UICONTROL スケジュール済み]**
* **[!UICONTROL 生成済み]**
* **[!UICONTROL 関心あり]**
* **[!UICONTROL 提示済み]**
* **[!UICONTROL 却下]**

これらの値はデフォルトでは適用されません。設定する必要があります。

>[!NOTE]
>
>「送信済み」ステータスの配信にオファーがリンクされると、そのオファーの提案のステータスは自動的に「提示済み」に変更されます。

### 提案が作成されたときのオファーステータス{#configuring-the-status-when-the-proposition-is-created}

オファーの提案が&#x200B;**created**&#x200B;の場合、そのステータスが更新されます。

**[!UICONTROL デザイン]**&#x200B;環境で、各オファースペースに対して、オファーレポートに表示する情報に応じて、提案が作成されたときに適用されるステータスを設定します。

それには、次の手順に従います。

1. 目的のスペースの「**[!UICONTROL ストレージ]**」タブに移動します。
1. 提案の作成時にその提案に適用するステータスを選択します。

   ![](assets/offer_update_status_001.png)

### 提案が受け入れられたときのオファーステータス{#configuring-the-status-when-the-proposition-is-accepted}

オファーの提案が&#x200B;**受け入れられた**&#x200B;の場合は、デフォルトで提供される値の1つを使用して、提案の新しいステータスを設定します。 この更新は、受信者がオファー内のリンクをクリックしたときに適用されます。

それには、次の手順に従います。

1. 目的のスペースの「**[!UICONTROL ストレージ]**」タブに移動します。
1. 提案が承認されたときに提案に適用するステータスを選択します。

   ![](assets/offer_update_status_002.png)

<!--
**Inbound interaction**

The **[!UICONTROL Storage]** tab lets you define statuses for **proposed** and **accepted** offer propositions only. For inbound interaction, the status of offer propositions should be specified directly in the URL for calling the offer engine, rather than through the interface. This way, you will be able to specify which status to apply in other cases, for example if an offer proposition is rejected.

```
<BASE_URL>?a=UpdateStatus&p=<PRIMARY_KEY_OF_THE_PROPOSITION>&st=<NEW_STATUS_OF_THE_PROPOSITION>&r=<REDIRECT_URL>
```

For instance, the proposition (identifier **40004**) that matches the **Home insurance** offer displayed on the **Neobank** site contains the following URL:

```
<BASE_URL>?a=UpdateStatus&p=<40004>&st=<3>&r=<"http://www.neobank.com/insurance/subscribe.html">
```

As soon as a visitor clicks the offer, and therefore the URL, the **[!UICONTROL Accepted]** status (value **3**) is applied to the proposition and the visitor is redirected to a new page of the **Neobank** site to take out the insurance contract.

>[!NOTE]
>
>If you want to specify another status in the url (for example if an offer proposition is rejected), use the value corresponding to the desired status. Example: **[!UICONTROL Rejected]** = "5", **[!UICONTROL Presented]** = "1" and so on.
>
>Statuses and their values can be retrieved in the **[!UICONTROL Offer propositions (nms)]** data schema. For more on this, refer to [this page](../../configuration/using/data-schemas.md).

**Outbound interaction**
-->

配信にリンクが含まれている場合は、オファーの提案に&#x200B;**[!UICONTROL 興味のある]**&#x200B;ステータスを自動的に適用できます。 単に **_urlType=&quot;11&quot;** という値をリンクに付加します。

```
<a _urlType="11" href="<DEST_URL>">Link inserted into the delivery</a>
```

## スペースごとのオファーのプレビュー {#offer-preview-per-space}

「**[!UICONTROL プレビュー]**」タブでは、選択したメソッドを使用して、受信者が有効なオファーを表示できます。 次の例では、受信者は、郵便経由のオファー提案 3 件の実施要件を満たしています。

![](assets/offer_space_overview_002.png)

受信者がどのオファーにも適格でない場合は、プレビューに表示されます。

![](assets/offer_space_overview_001.png)

<!--
The preview can ignore contexts when they are restricted to a space. This is the case when the interaction schema has been extended to add fields referenced in a space using an inbound channel (for more on this, refer to [Extension example](../../interaction/using/extension-example.md)).
-->
