---
solution: Campaign v8
product: Adobe Campaign
title: Campaign外部アカウント
description: Campaign外部アカウント
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: 69d69c909e6b17ca3f5fb18d6680aa51d0d701cf
workflow-type: tm+mt
source-wordcount: '1132'
ht-degree: 24%

---


# 外部アカウントの設定

Adobe Campaign には、事前定義済みの外部アカウントのセットが付属します。外部システムとの接続を設定するには、新しい外部アカウントを作成できます。

外部アカウントは、テクニカルワークフローやキャンペーンワークフロー等の技術プロセスで使用されます。例えば、ワークフロー内のファイル転送や、他のアプリケーション(Adobe Target、Experience Managerなど)とのデータ交換を設定する場合は、外部アカウントを選択する必要があります。

Adobe Campaign **[!UICONTROL エクスプローラー]**&#x200B;から外部アカウントにアクセスできます。**[!UICONTROL 管理]** `>` **[!UICONTROL プラットフォーム]** `>` **[!UICONTROL 外部アカウント]**&#x200B;を参照します。

![](assets/external-accounts.png)


>[!CAUTION]
>
>特定の&#x200B;**[!UICONTROL 完全なFDA]**(ffda)外部アカウントは、CampaignローカルデータベースとCloudデータベース([!DNL Snowflake])間の接続を管理します。
>
>管理対象Cloud Servicesユーザーは、この外部アカウントをAdobeでインスタンスに設定します。 この値は変更できません。


## キャンペーン固有の外部アカウント

次のテクニカルアカウントは、Adobe Campaignで特定のプロセスを有効にして実行するために使用されます。

:speech_balloon:管理対象Cloud Servicesユーザーとして、Adobeは、Campaign固有のすべての外部アカウントを設定します。

* **バウンスメール (POP3)**

   **バウンスメール**&#x200B;外部アカウントで、電子メールサービスの接続に使用する外部 POP3 アカウントを指定します。POP3 アクセス用に設定されたすべてのサーバーは、返信メールの受信に使用できます。

   :[!DNL :arrow_upper_right:]:インバウンドEメールの詳細については、[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/event-activities/inbound-emails.html)を参照してください。

* **Routing**

   **[!UICONTROL ルーティング]**&#x200B;外部アカウントを使用すると、インストールしているパッケージに応じて、Adobe Campaign で利用可能な各チャネルを設定できます。

   >[!CAUTION]
   >
   >Adobe Campaign v8で&#x200B;**[!UICONTROL 内部Eメール配信ルーティング]**(defaultEmailBulk)外部アカウント&#x200B;**を有効にしてはいけません**。

* **実行インスタンス**

   トランザクションメッセージのコンテキストでは、実行インスタンスはコントロールインスタンスにリンクされ、接続されます。 トランザクションメッセージテンプレートは実行インスタンスにデプロイされます。

   [!DNL :bulb:] Message Centerのアーキテクチャについて詳しくは、このペ [ージを参照してください](../dev/architecture.md#transac-msg-archi)。

## 外部システム外部アカウントへのアクセス

* **外部データベース(FDA)**

   **外部データベース**&#x200B;タイプの外部アカウントを使用して、FDAを介して外部データベースに接続します。

   Adobe Campaign v8と互換性のある外部データベースは、互換性マトリックス[](../start/compatibility-matrix.md)に記載されています。

   [!DNL :bulb:] Federated Data Access(FDA)オプションについて詳しくは、この節 [を参照してください](../connect/fda.md)。

## Adobeソリューション統合の外部アカウント

* **Adobe Experience Cloud**

   Adobe IDを使用してAdobe Campaignコンソールに接続するには、**[!UICONTROL Adobe Experience Cloud]**&#x200B;外部アカウントを設定する必要があります。

   [!DNL :bulb:] AdobeIdentity Managementサービス(IMS)について詳しくは、この節を参 [照してください](../start/connect.md#connect-ims)。

   :speech_balloon:管理対象Cloud Servicesユーザーの場合は、[Adobe](../start/campaign-faq.md#support)に連絡して、CampaignでAdobeIMSを実装します。

* **Web 分析**

   Adobe AnalyticsからAdobe Campaignへのデータ転送を設定するには、**[!UICONTROL Web Analytics(Adobe Analytics)]**&#x200B;外部アカウントを使用します。

   [!DNL :bulb:] Adobe CampaignとAdobe Analyticsの統合について詳しくは、このペ [ージを参照してください](../connect/ac-aa.md)。

   :speech_balloon:管理対象Cloud Servicesユーザーの場合は、[Adobe](../start/campaign-faq.md#support)に連絡して、Adobe AnalyticsをCampaignと統合します。

   * **Adobe Experience Manager**
   **[!UICONTROL AEM]**&#x200B;外部アカウントを使用すると、Eメール配信とフォームのコンテンツをAdobe Experience Managerで直接管理できます。

   [!DNL :bulb:] Adobe CampaignとAdobe Analyticsの統合について詳しくは、このペ [ージを参照してください](../connect/ac-aem.md)。

   :speech_balloon:管理対象Cloud Servicesのユーザーとして、[Adobe](../start/campaign-faq.md#support)に連絡し、Adobe Experience ManagerとAdobe Campaignを統合します。


## CRMコネクタの外部アカウント

* **Microsoft Dynamics CRM**

   **[!UICONTROL Microsoft Dynamics CRM]** 外部アカウントがあれば、Microsoft Dynamics データを Adobe Campaign にインポートおよびエクスポートできます。

   [!DNL :bulb:] Adobe CampaignとMicrosoft Dynamics CRMの統合について詳しくは、このページ [を参照してください](../connect/crm.md)。

   **[!UICONTROL Web API]** デプロイメントタイプと&#x200B;**[!UICONTROL パスワード資格情報]**&#x200B;認証を使用する場合、以下の詳細を指定する必要があります。

   * **[!UICONTROL アカウント]**:Microsoft CRMへのログインに使用するアカウント。

   * **[!UICONTROL サーバー]**:Microsoft CRMサーバーのURL。

   * **[!UICONTROL クライアント識別子]**:Microsoft Azure管理ポータルの「コーデックを更新」フィールドにあ **[!UICONTROL るクラ]** イアント **[!UICONTROL ID]** です。

   * **[!UICONTROL CRMバージョン]**: **[!UICONTROL Dynamics CRM 2007]**、 **[!UICONTROL Dynamics CRM 2015]** 、または **[!UICONTROL Dynamics CRM 2016]**&#x200B;のCRMのバージョン。
   **[!UICONTROL Web API]** デプロイメントタイプと&#x200B;**[!UICONTROL 証明書]**&#x200B;認証を使用する場合、以下の詳細を指定する必要があります。

   * **[!UICONTROL サーバー]**:Microsoft CRMサーバーのURL。

   * **[!UICONTROL 秘密鍵（Base64エンコード）]**:Base64にエンコードされた秘密鍵

   * **[!UICONTROL カスタムキー識別子]**

   * **[!UICONTROL キー ID]**

   * **[!UICONTROL クライアント識別子]**:**[!UICONTROL コード]**&#x200B;を更新カテゴリ、**[!UICONTROL クライアントID]**&#x200B;フィールドのMicrosoft Azure管理ポータルにあるクライアントID。

   * **[!UICONTROL CRMバージョン]**: **[!UICONTROL Dynamics CRM 2007]**、 **[!UICONTROL Dynamics CRM 2015]** 、または **[!UICONTROL Dynamics CRM 2016]**&#x200B;のCRMのバージョン。


* **Salesforce.com**

   **[!UICONTROL Salesforce CRM]** 外部アカウントを使用すれば、Adobe Campaign から Salesforce データをインポートおよびエクスポートできます。

   Salesforce CRM 外部アカウントを Adobe Campaign で使用できるように設定するには、次の情報を提供する必要があります。

   * **[!UICONTROL アカウント]**:Salesforce CRMへのログインに使用するアカウント。

   * **[!UICONTROL パスワード]**:Salesforce CRMへのログインに使用するパスワード。

   * **[!UICONTROL クライアント識別子]**:クライアント識別子の見つけ方については、このペ [ージを参照してください](https://help.salesforce.com/articleView?id=000205876&amp;type=1)。

   * **[!UICONTROL セキュリティトークン]**:セキュリティトークンの見つけ方については、このペ [ージを参照してください](https://help.salesforce.com/articleView?id=000205876&amp;type=1)。

   * **[!UICONTROL APIバージョン]**:APIのバージョンを選択します。この外部アカウントの場合、設定ウィザードで Salesforce CRM を設定する必要があります。

## データ転送外部アカウント

これらの外部アカウントは、**[!UICONTROL ファイル]**&#x200B;転送ワークフローアクティビティを使用して、Adobe Campaignにデータをインポートまたはエクスポートするために使用できます。

:[!DNL :arrow_upper_right:]:ワークフローでのファイル転送について詳しくは、[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/event-activities/file-transfer.html)を参照してください。

* **FTPとSFTP**

   **FTP**外部アカウントを使用して、Adobe Campaign外のサーバーへのアクセスを設定およびテストできます。 外部システム（SFTPやFTPサーバー898など、ファイル転送に使用される）との接続をセットアップするには、独自の外部アカウントを作成できます。
これをおこなうには、この外部アカウントで、SFTPまたはFTPサーバーへの接続を確立するために使用するアドレスと資格情報を指定します。

* **Amazon Simple Storage Service(S3)**

   **AWS S3**&#x200B;コネクタを使用して、**[!UICONTROL ファイル転送]**&#x200B;ワークフローアクティビティを使用して、Adobe Campaignにデータをインポートまたはエクスポートできます。 この新規外部アカウントを設定する際には、次の情報を提供する必要があります。

   * **[!UICONTROL AWS S3 アカウントサーバー]**:サーバーのURL。次のように入力します。   ```<S3bucket name>.s3.amazonaws.com/<s3object path>```

   * **[!UICONTROL AWSアクセスキーID]**:AWSアクセスキーIDを見つける方法については、 [Amazonのドキュメント](https://docs.aws.amazon.com/ja_jp/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys) を参照してください。

   * **[!UICONTROL AWSへの秘密アクセスキー]**:AWSへの秘密アクセスキーを見つける方法については、 [Amazonのドキュメント](https://aws.amazon.com/jp/blogs/security/wheres-my-secret-access-key/)を参照してください。

   * **[!UICONTROL AWSリージョン]**:AWSリージョンについて詳しくは、 [Amazonのドキュメント](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)を参照してください。

   * **[!UICONTROL サーバー側の暗号化を使用]**&#x200B;チェックボックスをオンにすると、ファイルを S3 暗号モードで保存できます。アクセスキーIDと秘密アクセスキーを見つける方法については、[Amazonのドキュメント](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html#access-keys-and-secret-access-keys)を参照してください。

* **Azure Blob ストレージ**

   **Azure**&#x200B;外部アカウントを使用して、**[!UICONTROL ファイル転送]**&#x200B;ワークフローアクティビティを使用して、Adobe Campaignにデータをインポートまたはエクスポートできます。 Adobe Campaignと連携するように&#x200B;**Azure**&#x200B;外部アカウントを設定するには、次の情報を提供する必要があります。

   * **[!UICONTROL サーバー]**:Azure BLOBストレージサーバーのURL。

   * **[!UICONTROL 暗号化]**:非SSL間の暗号化 **** のタ **[!UICONTROL イプ]**。

   * **[!UICONTROL アクセスキー]**:MicrosoftドキュメントでAccessキーを **[!UICONTROL 検索す]** る方 [法を説明します](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-keys-manage?tabs=azure-portal)。

