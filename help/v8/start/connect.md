---
solution: Campaign v8
product: Adobe Campaign
title: Campaign v8への接続方法を説明します
description: Campaign v8への接続
feature: Audiences
role: Data Engineer
level: Beginner
exl-id: 176cc4f0-8827-4127-9f03-7d75ac8cf917
source-git-commit: ab7e458db5ad5696d144c17f6e89e4437a476d11
workflow-type: tm+mt
source-wordcount: '776'
ht-degree: 11%

---

# Adobe Campaign v8{#gs-ac-connect}に接続

Campaignクライアントコンソールは、Campaignアプリケーションサーバーに接続できるリッチクライアントです。

開始する前に、次の操作が必要です。

* [互換性マトリックス](compatibility-matrix.md)のAdobe Campaignとのシステムおよびツールの互換性を確認してください
* CampaignサーバーURLの取得
* ユーザー資格情報の取得

## クライアントコンソールをダウンロードしてインストールする

Campaignを初めて使用する場合、または新しいバージョンにアップグレードする必要がある場合は、クライアントコンソールをダウンロードしてインストールする必要があります。

次の 2 つのオプションを使用できます。

1. Campaign管理者として、Adobe[ソフトウェア配布](https://experience.adobe.com/#/downloads/content/software-distribution/encampaign.html)に接続し、クライアントコンソールのインストールプログラムをダウンロードします。 その後、ローカルマシンにインストールできます。

1. エンドユーザーは、Adobeを使用して次の操作を実行できます。コンソールを更新すると、最新のクライアント・コンソール・バージョンをポップアップ・ウィンドウでダウンロードするよう求めるプロンプトが表示されます。

>[!CAUTION]
>
>Adobeは、「**[!UICONTROL この質問]**&#x200B;は選択しないでください」オプションを選択し、新しいバージョンのコンソールが利用可能になったときにすべてのユーザーに警告が表示されるようにすることをお勧めします。  このオプションを選択した場合、新しい利用可能なバージョンは通知されません。

## 接続の作成

クライアントコンソールを新しくインストールしたら、次の手順に従ってアプリケーションサーバーへの接続を作成します。

1. **Adobe Campaign**&#x200B;プログラムグループのWindowsの&#x200B;**[!UICONTROL 開始]**&#x200B;メニューからコンソールを起動します。

1. 資格情報フィールドの右上隅にあるリンクをクリックして、接続設定ウィンドウにアクセスします。

1. **[!UICONTROL 追加/接続]**&#x200B;をクリックし、Adobe CampaignアプリケーションサーバーのラベルとURLを入力します。

1. URLを使用して、Adobe Campaignアプリケーションサーバーへの接続を指定します。 マシンのDNS、エイリアス、またはIPアドレスを使用します。

   例えば、[`https://<machine>.<domain>.com`](https://myserver.adobe.com)タイプURLを使用できます。

1. AdobeIdentity Managementシステム(IMS)が組織に対して設定されている場合は、「 **[!UICONTROL Adobe IDと接続]** 」オプションをオンにします。

1. 「**[!UICONTROL OK]**」をクリックして設定を保存します。

例えば、テスト、ステージ、実稼動環境に接続するために必要な数の接続を追加できます。

>[!NOTE]
>
>「**[!UICONTROL 追加]**」ボタンを使用すると、すべての接続を整理する&#x200B;**[!UICONTROL フォルダー]**&#x200B;を作成できます。各接続をフォルダーにドラッグ＆ドロップします。

## Adobe Campaignにログオンします。

既存のインスタンスにログオンするには、次の手順に従います。

1. **Adobe Campaign**&#x200B;プログラムグループのWindowsの&#x200B;**[!UICONTROL 開始]**&#x200B;メニューからコンソールを起動します。

1. 資格情報フィールドの右上隅にあるリンクをクリックして、接続設定ウィンドウにアクセスします。

1. ログインする必要のあるCampaignインスタンスを選択します。

1. 「**[!UICONTROL OK]**」をクリックします。

1. ユーザーログイン資格情報を入力し、「**[!UICONTROL ログイン]**」をクリックします。

   ![](assets/sign-in-v8.png)

設定に応じて、資格情報は次のようになります。

* アクセス権を付与されたCampaign管理者から提供される
* Adobe ID

## ユーザーへのアクセス権の付与

Adobe Campaign は、様々なオペレーターに割り当てる一連の権利を定義したり、管理したりするのに役立ちます。以下の操作は、それらの権利に基づいて承認または拒否されます。

* 特定種類の機能に対するアクセス（ネームド権限など）
* 特定の要素に対するアクセス
* 要素（配信、連絡先、キャンペーン、グループなど）を作成、変更または削除します。

ユーザーとその権限の定義方法について詳しくは、[この節](permissions.md)を参照してください。

Campaign管理者は、オペレーターを作成し、その資格情報をユーザーと共有する責任を負います。

## Adobe ID{#connect-ims}でCampaignに接続

Campaignユーザーは、AdobeIdentity Managementシステム(IMS)を使用して、Adobe IDを使用してAdobe Campaignコンソールに接続できます。 この実装には次の利点があります。

* Experience Cloud のすべてのソリューションに同じ ID を使用できます。
* Adobe Campaign で異なる統合を使用する場合にも、接続が記憶されます。
* パスワード管理ポリシーの強化。
* Federated ID アカウント（外部の ID プロバイダー）を使用します。

:speech_balloon:管理対象Cloud Servicesユーザーの場合は、[Adobe](campaign-faq.md#support)に連絡して、CampaignでAdobeIMSを実装します。

## LDAPログインを使用したCampaignへの接続

Adobe Campaignは、ユーザーがLDAP認証を使用してプラットフォームにアクセスするように設定できます。

:speech_balloon:管理対象Cloud Servicesのユーザーとして、[Adobe](campaign-faq.md#support)に連絡し、CampaignとのLDAP統合を設定します。


## Webアクセス{#web-access}

HTMLユーザーインターフェイスを使用して、シンプルなWebブラウザーでアプリケーションの特定の部分にアクセスできます。キャンペーンダッシュボード、キューブレポート、インスタンス監視など。

[!DNL :arrow_upper_right:] Webアクセスについて詳しくは、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/starting-with-adobe-campaign/campaign-workspace/adobe-campaign-workspace.html?lang=en#console-and-web-access)

Webアクセスは、検証プロセスでも使用されます。オペレーターは、承認リクエストのEメールをクリックし、Webブラウザーを通じてCampaignに接続して、配信コンテンツや予算を検証または却下できます。

[!DNL :arrow_upper_right:]  [Campaign Classicv7ドキュメントで承認を設定および管理する方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/orchestrating-campaigns/orchestrate-campaigns/marketing-campaign-approval.html?lang=en#orchestrating-campaigns)
