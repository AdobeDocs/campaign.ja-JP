---
title: Campaign 外部アカウント
description: Campaign 外部アカウント
feature: Application Settings, External Account
role: Admin
level: Beginner, Intermediate, Experienced
exl-id: 9634b576-2854-4ea9-ba0d-8efaab2c4aee
source-git-commit: f463c5747b844544ba561a63e4cb0359c0c258c8
workflow-type: ht
source-wordcount: '1175'
ht-degree: 100%

---


# 外部アカウントの設定 {#config-external-accounts}

Adobe Campaign には、事前に定義された一連の外部アカウントが付属しています。外部システムとの接続を設定する場合は、新しい外部アカウントを作成します。

外部アカウントは、テクニカルワークフローやキャンペーンワークフローなどの技術プロセスで使用されます。例えば、ワークフローにおけるファイル転送や、他のアプリケーション（Adobe Target、Experience Manager など）とのデータ交換などをセットアップする場合、外部アカウントを選択する必要がありす。

Adobe Campaign **[!UICONTROL エクスプローラー]**&#x200B;から外部アカウントにアクセスできます。**[!UICONTROL 管理]** `>` **[!UICONTROL Platform]** `>` **[!UICONTROL 外部アカウント]**&#x200B;を参照します。

![](assets/external-accounts.png)


>[!CAUTION]
>
>* Managed Cloud Services ユーザーの場合、外部アカウントは、お使いのインスタンス用にアドビが設定するので、変更してはなりません。
>
>* [エンタープライズ（FFDA）デプロイメント](../architecture/enterprise-deployment.md)のコンテキストでは、特定の&#x200B;**[!UICONTROL フル FDA]**（ffda）外部アカウントは、Campaign ローカルデータベースと Cloud データベース（[!DNL Snowflake]）との接続を管理します。
>

## Campaign 固有の外部アカウント {#ac-external-accounts}

次の技術アカウントは、Adobe Campaign で特定のプロセスを有効にして実行するために使用されます。

### バウンスメール {#bounce-mails-external-account}

>[!NOTE]
>
>POP3 機能の Microsoft Exchange Online OAuth 2.0 認証は、Campaign v8.3 以降で使用できます。お使いのバージョンを確認するには、[この節](../start/compatibility-matrix.md#how-to-check-your-campaign-version-and-buildversion)を参照してください。。
>

**バウンスメール**&#x200B;外部アカウントで、メールサービスの接続に使用する外部 POP3 アカウントを指定します。POP3 アクセス用に設定されたすべてのサーバーは、返信メールの受信に使用できます。

インバウンドメールについて詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/event-activities/inbound-emails.html?lang=ja)を参照してください。

![](assets/bounce_external_1.png)

**[!UICONTROL バウンスメール（defaultPopAccount）]**&#x200B;外部アカウントを設定するには、次の手順を実行します。

* **[!UICONTROL サーバー]**- POP3 サーバーの URL。

* **[!UICONTROL ポート]** - POP3 接続のポート番号。デフォルトのポート番号は 110 です。

* **[!UICONTROL アカウント]**- ユーザーの名前。

* **[!UICONTROL パスワード]**：ユーザーアカウントのパスワード。

* **[!UICONTROL 暗号化]** - **[!UICONTROL デフォルト]**、**[!UICONTROL POP3 + STARTTLS]**、**[!UICONTROL POP3]** または **[!UICONTROL POP3S]** から選択した暗号化のタイプ。

  **バウンスメール**&#x200B;外部アカウントで、メールサービスの接続に使用する外部 POP3 アカウントを指定します。POP3 アクセス用に設定されたすべてのサーバーは、返信メールの受信に使用できます。

* **[!UICONTROL 関数]** - インバウンドメールまたは SOAP ルーター

![](assets/bounce_external_2.png)

>[!CAUTION]
>
>Microsoft OAuth 2.0 を使用して POP3 外部アカウントを設定する前に、まず Azure portal にアプリケーションを登録する必要があります。詳しくは、こちらの[ページ](https://docs.microsoft.com/ja-jp/azure/active-directory/develop/quickstart-register-app){target="_blank"}を参照してください。
>

Microsoft OAuth 2.0 を使用して POP3 外部を設定するには、「**[!UICONTROL Microsoft OAuth 2.0]**」オプションをチェックし、次のフィールドに入力します。

* **[!UICONTROL Azure テナント]** Azure ID（またはディレクトリ（テナント）ID）は、Azure portal のアプリケーションの概要の&#x200B;**初期設定**&#x200B;ドロップダウンで確認できます。

* **[!UICONTROL Azure クライアント ID]** - クライアント ID（またはアプリケーション（クライアント）ID）は、Azure portal のアプリケーションの概要の&#x200B;**初期設定**&#x200B;ドロップダウンで確認できます。

* **[!UICONTROL Azure クライアントシークレット]** - クライアントシークレット ID は、Azure portal のアプリケーションの&#x200B;**証明書と秘密鍵**&#x200B;メニューから、「**クライアントシークレット**」列で確認できます。

* **[!UICONTROL Azure リダイレクト URL]** - リダイレクト URL は Azure portal のアプリケーションの&#x200B;**認証**&#x200B;メニューで確認できます。次の構文で `nl/jsp/oauth.jsp` 終わる必要があります。例：`https://redirect.adobe.net/nl/jsp/oauth.jsp`。

  別の資格情報を入力した後、**[!UICONTROL 接続の設定]**&#x200B;をクリックして、外部アカウントの設定を完了できます。

### ルーティング {#routing}

**[!UICONTROL ルーティング]**&#x200B;外部アカウントを使用すると、インストールしているパッケージに応じて、Adobe Campaign で利用可能な各チャネルを設定できます。

### 実行インスタンス {#execution-instance}

トランザクションメッセージのコンテキストでは、実行インスタンスはコントロールインスタンスにリンクされ、接続されます。トランザクションメッセージテンプレートは、実行インスタンスにデプロイされます。 Message Center のアーキテクチャについて詳しくは、[このページ](../architecture/architecture.md#transac-msg-archi)を参照してください。

## 外部システムの外部アカウントへのアクセス {#external-syst-external-accounts}

* **外部データベース（FDA）**- **外部データベース**&#x200B;タイプの外部アカウントは、Federated Data Access（FDA）経由で外部データベースに接続するために使用します。Federated Data Access（FDA）オプションについて詳しくは、[この節](../connect/fda.md)を参照してください。

  Adobe Campaign v8 と互換性のある外部データベースは、[互換性マトリックス](../start/compatibility-matrix.md)に記載されています。

* **X（旧 Twitter）** - **Twitter** タイプの外部アカウントは、Campaign を X アカウントに接続して、ユーザーに代わってメッセージを投稿するために使用します。X 統合について詳しくは、[このセクション](../connect/ac-tw.md)を参照してください。

## Adobe ソリューション統合外部アカウント {#adobe-integration-external-accounts}

* **Adobe Experience Cloud**- **[!UICONTROL Adobe Experience Cloud]** 外部アカウントは、Adobe Identity Management サービス（IMS）を実装してAdobe Campaign に接続するために使用します。Adobe Identity Management Service（IMS）について詳しくは、[この節](../start/connect.md#logon-to-ac)を参照してください。

* **Web 分析** - **[!UICONTROL Web 分析（Adobe Analytics）]**&#x200B;外部アカウントは、Adobe Analytics から Adobe Campaign へのデータ転送を設定するために使用します。Adobe Campaign と Adobe Analytics の統合について詳しくは、[このページ](../connect/ac-aa.md)を参照してください。

* **Adobe Experience Manager** - **[!UICONTROL AEM]** 外部アカウントを使用すれば、メール配信とフォームのコンテンツを Adobe Experience Manager で直接管理できます。Adobe Campaign と Adobe Analytics の統合について詳しくは、[このページ](../connect/ac-aem.md)を参照してください。


## CRM コネクタの外部アカウント {#crm-external-accounts}

* **Microsoft Dynamics CRM** - **[!UICONTROL Microsoft Dynamics CRM]** 外部アカウントを使用すれば、Adobe Campaign との間で Microsoft Dynamics データをインポートおよびエクスポートできます。Adobe Campaign と Microsoft Dynamics CRM の統合について詳しくは、[このページ](../connect/ac-ms-dyn.md)を参照してください。

* **Salesforce.com** - **[!UICONTROL Salesforce CRM]** 外部アカウントを使用すれば、Adobe Campaign との間で Salesforce データをインポートおよびエクスポートできます。Adobe Campaign と Salesforce.com CRM の統合について詳しくは、[このページ](../connect/ac-sfdc.md)を参照してください。

## データ転送外部アカウント {#transfer-data-external-accounts}

これらの外部アカウントは、**[!UICONTROL ファイル転送]**&#x200B;ワークフローアクティビティを使用した、Adobe Campaign へのデータの読み込みまたは書き出しに使用できます。ワークフローでの&#x200B;**ファイル転送**&#x200B;について詳しくは、[このページ](https://experienceleague.adobe.com/docs/campaign/automation/workflows/wf-activities/event-activities/file-transfer.html?lang=ja)を参照してください。

* **FTP および SFTP** - **FTP** 外部アカウントを使用すれば、Adobe Campaign 外でサーバーへのアクセスを設定およびテストできます。外部システム（ファイル転送に使用される SFTP サーバーや FTP サーバー 898 など）との接続をセットアップするために、独自の外部アカウントを作成できます。

  これを行うには、SFTP サーバーまたは FTP サーバーへの接続を確立するために使用するアドレスと資格情報を、この外部アカウントで指定します。

  >[!NOTE]
  >
  >リリース 8.5 以降、SFTP 外部アカウントを設定する際に、秘密鍵を使用して安全に認証できるようになりました。[詳しくは、鍵の管理を参照してください](https://experienceleague.adobe.com/docs/control-panel/using/sftp-management/key-management.html?lang=ja)

* **Amazon Simple Storage Service（S3）** - **AWS S3** コネクタは、**[!UICONTROL ファイル転送]**&#x200B;ワークフローアクティビティを使用して、Adobe Campaign へのデータの読み込みまたは書き出しに使用できます。この新規外部アカウントを設定する際には、次の情報を提供する必要があります。

   * **[!UICONTROL AWS S3 アカウントサーバー]**：サーバーの URL は、次のように入力する必要があります。   `<S3bucket name>.s3.amazonaws.com/<s3object path>`

   * **[!UICONTROL AWS アクセスキー ID]**：AWS アクセスキー ID を見つける方法については、[Amazon ドキュメント](https://docs.aws.amazon.com/ja_jp/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys){target="_blank"}を参照してください。

   * **[!UICONTROL AWS への秘密アクセスキー]**：AWS への秘密アクセスキーを見つける方法については、[Amazon ドキュメント](https://aws.amazon.com/jp/blogs/security/wheres-my-secret-access-key/){target="_blank"}を参照してください。

   * **[!UICONTROL AWS リージョン]**：AWS リージョンについて詳しくは、[Amazon ドキュメント](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/){target="_blank"}を参照してください。

   * 「**[!UICONTROL サーバー側の暗号化を使用]**」チェックボックスをオンにすると、ファイルを S3 暗号モードで保存できます。アクセスキー ID と秘密アクセスキーを見つける方法については、[Amazon ドキュメント](https://docs.aws.amazon.com/ja_jp/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys){target="_blank"}を参照してください。

* **Azure BLOB ストレージ** - **Azure** 外部アカウントを使用すると、**[!UICONTROL ファイル転送]**&#x200B;ワークフローアクティビティで Adobe Campaign との間でデータをインポートまたはエクスポートできます。**Azure** 外部アカウントを Adobe Campaign で使用できるように設定するには、次の情報が必要です。

   * **[!UICONTROL サーバー]**：Azure BLOB ストレージサーバーの URL。

   * **[!UICONTROL 暗号化]**：暗号化のタイプ。**[!UICONTROL なし]** または **[!UICONTROL SSL]**。

   * **[!UICONTROL アクセスキー]**：ご利用の&#x200B;**[!UICONTROL アクセスキー]**&#x200B;を確認する方法については、[Microsoft ドキュメント](https://docs.microsoft.com/ja-JP/azure/storage/common/storage-account-keys-manage?tabs=azure-portal){target="_blank"}を参照してください。
