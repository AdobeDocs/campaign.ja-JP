---
title: Campaign でのプライバシーリクエストの管理
description: Campaign でプライバシーリクエストを管理する方法を説明します
feature: Audiences
role: Data Engineer
level: Beginner
exl-id: 0f81d318-dbfd-45c8-b391-b1d14d23e9c8
source-git-commit: 41a213eea434b3fc6ee8b3ea3c29d4364f9c9761
workflow-type: tm+mt
source-wordcount: '1118'
ht-degree: 74%

---

# Campaign でのプライバシーリクエストの管理 {#privacy}

ビジネスの性質と管轄区域に応じて、データ操作は法的プライバシー規制の対象となる場合があります。 多くの場合、これらの規制により、顧客は自分が収集したデータへのアクセスを要求する権利と、保存されたデータの削除を要求する権利を得ることができます。 個人データに対するこれらのお客様のリクエストは、ドキュメント全体で「プライバシーリクエスト」と呼ばれます。

アドビは、Campaign に保存されているデータに対するプライバシーリクエストの作成と処理を行うためのデータコントローラー用ツールを用意しています。しかし、要求者であるデータ主体の識別、および要求者に返されるデータがデータ主体に関するものであることの確認は、データコントローラーの責任です。個人データおよびデータを管理する様々なエンティティについて詳しくは、[Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=ja#personal-data){target=&quot;_blank&quot;}を参照してください。


Campaign でプライバシーリクエストを管理するには、まず [名前空間を定義する](#namespaces). その後、プライバシーリクエストを作成および管理できます。 プライバシーリクエストを実行するには、 **AdobePrivacy Service** 統合とも呼ばれます。 Privacy ServiceからすべてのAdobe Experience Cloudソリューションにプッシュされたプライバシーリクエストは、専用のワークフローを介して Campaign によって自動的に処理されます。 [詳細情報](#create-privacy-request)

![](../assets/do-not-localize/speech.png) **アクセス権**&#x200B;および&#x200B;**忘れられる権利**（削除リクエスト）[について詳しくは、Adobe Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-management.html?lang=ja#right-access-forgotten){target=&quot;_blank&quot;}を参照してください。


>[!NOTE]
>
>この機能は、Campaign v8.3 以降で使用できます。お使いのバージョンを確認するには、[この節](compatibility-matrix.md#how-to-check-your-campaign-version-and-buildversion)を参照してください。

## 名前空間を定義 {#namespaces}

プライバシーリクエストを作成する前に、次の操作を行う必要があります **名前空間を定義する** を使用します。 名前空間は、データベース内のデータ主体の識別に使用されるキーです。

>[!NOTE]
>
>ID 名前空間の詳細については、 [Adobe Experience Platformドキュメント](https://experienceleague.adobe.com/docs/experience-platform/identity/namespaces.html?lang=ja){target=&quot;_blank&quot;}。

現在、Adobe Campaign は、Experience Platform ID 名前空間サービスからの名前空間のインポートをサポートしていません。したがって、ID 名前空間サービスで名前空間を作成したら、対応する名前空間を Adobe Campaign インターフェイスで手動で作成する必要があります。それには、次の手順に従います。

<!--v7?
Three namespaces are available out-of-the-box: email, phone and mobile phone. If you need a different namespace (a recipient custom field, for example), you can create a new one from **[!UICONTROL Administration]** > **[!UICONTROL Platform]** > **[!UICONTROL Namespaces]**.

>[!NOTE]
>
>For optimal performance, it is recommended to use out-of-the-box namespaces.
-->

1. [ID 名前空間サービス](https://developer.adobe.com/experience-platform-apis/references/identity-service/#tag/Identity-Namespace){target=&quot;_blank&quot;}で名前空間を作成します。

1. 条件 [id 名前空間のリスト](https://developer.adobe.com/experience-platform-apis/references/identity-service/#operation/getIdNamespaces)組織で使用可能な {target=&quot;_blank&quot;}。例えば、次の詳細の名前空間が取得されます。

   ```
   {
           "updateTime": 1632903236731,
           "code": "lumanamespace",
           "status": "ACTIVE",
           "description": "new namespace for Luma privacy requests",
           "id": 10998717,
           "createTime": 1632903236731,
           "idType": "Email",
           "namespaceType": "Custom",
           "name": "Luma Namespace",
           "custom": true
   }
   ```

1. Adobe Campaignで、 **[!UICONTROL 管理]** > **[!UICONTROL Platform]** > **[!UICONTROL 名前空間]** を選択し、 **[!UICONTROL 新規]**.

   ![](assets/privacy-namespaces-new.png)

1. **[!UICONTROL ラベル]**&#x200B;を入力します。

1. ID 名前空間サービスで作成した名前空間に一致するように、新しい名前空間の詳細を入力します。

   * の **[!UICONTROL AEC 名前空間 ID]** は、「id」属性に一致する必要があります
   * の **[!UICONTROL 内部名]** は、「code」属性に一致する必要があります
   * の **[!UICONTROL 紐付けキー]** は、「idType」属性に一致する必要があります

   ![](assets/privacy-namespaces-details.png)

   **[!UICONTROL 紐付けキー]**&#x200B;フィールドは、Adobe Campaign データベースでデータ主体を識別するために使用します。

1. ターゲットマッピング <!--(**[!UICONTROL Recipients]**, **[!UICONTROL Real time event]** or **[!UICONTROL Subscriptions]**)--> を選択し、Adobe Campaign での名前空間の紐付け方法を指定します。

   >[!NOTE]
   >
   >複数のターゲットマッピングを使用する必要がある場合は、ターゲットマッピングごとに 1 つの名前空間を作成します。

1. 変更内容を保存します。

これで、新しい名前空間に基づいてプライバシーリクエストを作成できます。複数の名前空間を使用する場合、同じ紐付け値に対して、名前空間ごとに 1 つのプライバシーリクエストを作成します。

## プライバシーリクエストの作成 {#create-privacy-request}

**[!DNL Adobe Experience Platform Privacy Service]** 統合を使用すると、単一の JSON API の呼び出しで、複数のソリューションのコンテキストでプライバシーリクエストを自動化できます。Adobe Campaign は、専用のワークフローを通じて Privacy Service からプッシュされたリクエストを自動的に処理します。

Privacy Core Service からプライバシーリクエストを作成する方法については、[Experience Platform Privacy Service](https://experienceleague.adobe.com/docs/experience-platform/privacy/home.html?lang=ja){target=&quot;_blank&quot;} のドキュメントを参照してください。

各 **[!DNL Privacy Service]**  ジョブは、使用されている名前空間の数に基づいて、Adobe Campaignで複数のプライバシーリクエストに分割されます。1 つのリクエストが 1 つの名前空間に対応します。

また、1 つのジョブを複数のインスタンスで実行できます。したがって、1 つのジョブに対して複数のファイルが作成されます。例えば、リクエストに 2 つの名前空間があり、3 つのインスタンスで実行されている場合、合計 6 つのファイルが送信されます。名前空間およびインスタンスごとに 1 つのファイル。

ファイル名のパターンは次のとおりです。`<InstanceName>-<NamespaceId>-<ReconciliationKey>.xml`

* **InstanceName**：Campaign インスタンス名
* **NamespaceId**：使用する名前空間の ID サービス名前空間 ID
* **紐付けキー**：エンコードされた紐付けキー

>[!CAUTION]
>
>カスタムの名前空間タイプを使用してリクエストを送信するには、[JSON メソッド](https://experienceleague.adobe.com/docs/experience-platform/privacy/ui/user-guide.html?lang=ja#json){target=&quot;_blank&quot;} を実行してリクエストに namespaceId を追加するか、[API 呼び出し](https://experienceleague.adobe.com/docs/experience-platform/privacy/api/privacy-jobs.html?lang=ja#access-delete){target=&quot;_blank&quot;} を使用してリクエストを行います。
>
>標準の名前空間タイプを使用して、[プライバシーユーザーインターフェイス](https://experienceleague.adobe.com/docs/experience-platform/privacy/ui/user-guide.html?lang=ja#request-builder){target=&quot;_blank&quot;} のみを使用してリクエストを送信します。

### リクエストの処理時に検索されるテーブル {#list-of-tables}

プライバシーに関連する削除またはアクセスリクエストの実行時に、受信者テーブル（独自タイプ）にリンクされたすべてのテーブルの&#x200B;**[!UICONTROL 紐付け値]**&#x200B;に基づいて、データ主体のすべてのデータを検索します。

プライバシーリクエストの実行時に考慮される組み込みテーブルのリストは、次のとおりです。

* 受信者（recipient）
* 受信者配信ログ（broadLogRcp）
* 受信者トラッキングログ（trackingLogRcp）
* アーカイブしたイベント配信ログ（broadLogEventHisto）
* 受信者リストのコンテンツ（rcpGrpRel）
* 訪問者オファー提案（propositionVisitor）
* 訪問者（visitor）
* 購読履歴（subHisto）
* 購読（subscription）
* 受信者のオファーの提案（propositionRcp）

受信者テーブル（独自タイプ）にリンクされるカスタムテーブルを作成した場合は、そのテーブルも考慮されます。例えば、受信者テーブルにリンクしているトランザクションテーブルと、そのトランザクションテーブルにリンクしているトランザクション詳細テーブルがある場合、両方のテーブルが考慮されます。
<!--
>[!CAUTION]
>
>If you perform Privacy batch requests using profile deletion workflows, please take into consideration the following remarks:
>* Profile deletion via workflows do not process children tables.
>* You need to handle the deletion for all the children tables.
>* Adobe recommends that you create an ETL workflow that add the lines to delete in the Privacy Access table and let the **[!UICONTROL Delete privacy requests data]** workflow perform the deletion. We suggest to limit to 200 profiles per day to delete for performance reasons.-->

### プライバシーリクエストのステータス {#privacy-request-statuses}

Adobe Campaignのプライバシーリクエストの様々なステータスと、その解釈方法を次に示します。

* **[!UICONTROL 新規]**／**[!UICONTROL 再試行待ち]**：ワークフローは進行中で、リクエストの処理は完了していません。
* **[!UICONTROL 処理中]**／**[!UICONTROL 再試行中]**：ワークフローはリクエストを処理しています。
* **[!UICONTROL 削除待ち]**：ワークフローにおいて、削除対象のすべての受信者データが特定済みです。
* **[!UICONTROL 削除中]**：ワークフローは削除を処理しています。
* **[!UICONTROL 完了]**：リクエストの処理が終了しました。エラーは発生していません。
* **[!UICONTROL エラー]**：ワークフローにおいて、エラーが発生しました。理由は、プライバシーリクエストのリストの「**[!UICONTROL リクエストのステータス]**」列に表示されます。例えば、「**[!UICONTROL エラー : データが見つかりません]**」は、データ主体の&#x200B;**[!UICONTROL 紐付け値]**&#x200B;と一致する受信者データがデータベースに見つからなかったことを示します。

**Campaign Classic v7 ドキュメントの関連トピック：**

* [プライバシーと同意](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-and-recommendations.html?lang=ja){target=&quot;_blank&quot;}

* [プライバシー管理の概要](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-management.html?lang=ja){target=&quot;_blank&quot;}

* [プライバシー管理に関する規制](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-management.html?lang=ja#privacy-management-regulations){target=&quot;_blank&quot;}（GDPR、CCPA、PDPA、LGPD）

* [個人情報の販売のオプトアウト](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/privacy/privacy-requests/privacy-requests-ccpa.html?lang=ja){target=&quot;_blank&quot;}（CCPA に固有）
