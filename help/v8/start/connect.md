---
solution: Campaign
product: Adobe Campaign
title: キャンペーンv8に接続する方法
description: キャンペーンv8に接続
feature: オーディエンス
role: Data Engineer
level: Beginner
exl-id: 176cc4f0-8827-4127-9f03-7d75ac8cf917
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '684'
ht-degree: 13%

---

# Adobe Campaignv8{#gs-ac-connect}に接続

キャンペーンクライアントコンソールは、キャンペーンアプリケーションサーバーに接続できるリッチクライアントです。

>[!CAUTION]
>
>起動する前に、キャンペーン[互換表](compatibility-matrix.md)を確認し、キャンペーンサーバーのURLとユーザーの資格情報を取得する必要があります。

## クライアントコンソールのダウンロードとインストール

初めてキャンペーンを使用する場合、または新しいバージョンにアップグレードする必要がある場合は、クライアントコンソールをダウンロードしてインストールする必要があります。

次の 2 つのオプションを使用できます。

1. キャンペーン管理者として、Adobe[ソフトウェア配布](https://experience.adobe.com/#/downloads/content/software-distribution/encampaign.html)に接続し、クライアントコンソールのインストールプログラムをダウンロードします。 その後、ローカルマシンにインストールできます。

1. Adobeは、エンド・ユーザーとして次の操作を行うことができます。コンソールが更新されると、ポップアップ・ウィンドウで最新のクライアント・コンソールのバージョンをダウンロードするように求められます。

>[!CAUTION]
>
>Adobeでは、**[!UICONTROL 「]**&#x200B;この質問を選択しないでください。」を選択すると、コンソールの新しいバージョンが利用できる場合にすべてのユーザーに警告が表示されます。  このオプションを選択すると、新しい利用可能なバージョンは通知されません。

## 接続の作成

Client Consoleを新たにインストールしたら、次の手順に従ってアプリケーションサーバーへの接続を作成します。

1. Windowsの&#x200B;**[!UICONTROL 開始]**&#x200B;メニュー(**Adobe Campaign**&#x200B;プログラムグループ)からコンソールを開始します。

1. 秘密鍵証明書フィールドの右上隅にあるリンクをクリックして、接続設定ウィンドウにアクセスします。

1. **[!UICONTROL 追加/Connection]**&#x200B;をクリックし、Adobe CampaignアプリケーションサーバーのラベルとURLを入力します。

1. URLを介したAdobe Campaignアプリケーションサーバーへの接続を指定します。 DNS、マシンのエイリアス、またはIPアドレスを使用します。

   例えば、[`https://<machine>.<domain>.com`](https://myserver.adobe.com)タイプURLを使用できます。

1. AdobeIdentity Managementシステム(IMS)が組織に対して設定されている場合は、「**[!UICONTROL Adobe IDと接続]**」オプションを確認します。

1. 「**[!UICONTROL OK]**」をクリックして設定を保存します。

例えば、テスト、ステージ、実稼働環境に接続するために必要な数の接続を追加できます。

>[!NOTE]
>
>「**[!UICONTROL 追加]**」ボタンを使用すると、すべての接続を整理する&#x200B;**[!UICONTROL フォルダー]**&#x200B;を作成できます。各接続をフォルダーにドラッグ＆ドロップします。

## Adobe Campaignへのログオン

既存のインスタンスにログオンするには、次の手順に従います。

1. Windowsの&#x200B;**[!UICONTROL 開始]**&#x200B;メニュー(**Adobe Campaign**&#x200B;プログラムグループ)からコンソールを開始します。

1. 秘密鍵証明書フィールドの右上隅にあるリンクをクリックして、接続設定ウィンドウにアクセスします。

1. ログインする必要があるキャンペーンインスタンスを選択します。

1. 「**[!UICONTROL OK]**」をクリックします。

1. ユーザーログイン資格情報を入力し、「**[!UICONTROL ログイン]**」をクリックします。

   ![](assets/sign-in-v8.png)

設定に応じて、資格情報は次のようになります。

* アクセスを許可したキャンペーン管理者が提供
* あなたのAdobe ID

## ユーザーへのアクセスの許可

Adobe Campaign は、様々なオペレーターに割り当てる一連の権利を定義したり、管理したりするのに役立ちます。以下の操作は、それらの権利に基づいて承認または拒否されます。

* 特定種類の機能に対するアクセス（ネームド権限など）
* 特定の要素へのアクセス、
* 要素(配信、連絡先、キャンペーン、グループなど)を作成、変更、削除します。

ユーザーの詳細と、ユーザーの権限の定義方法については、[このセクション](permissions.md)を参照してください。

キャンペーン管理者は、オペレーターを作成し、ユーザーと資格情報を共有する必要があります。


## Adobe IDとキャンペーンに接続{#connect-ims}

キャンペーンユーザーは、AdobeIdentity Managementシステム(IMS)を介して、Adobe IDを使用してAdobe Campaignコンソールに接続できます。 この実装には、次の利点があります。

* Experience Cloud のすべてのソリューションに同じ ID を使用できます。
* Adobe Campaign で異なる統合を使用する場合にも、接続が記憶されます。
* パスワード管理ポリシーの強化。
* Federated ID アカウント（外部の ID プロバイダー）を使用します。

:speech_balloon:管理対象Cloud Servicesのユーザーとして、[Adobe](support.md#support)に連絡して、AdobeIMSをキャンペーンで実装します。

## LDAPログインを使用したキャンペーンへの接続

Adobe Campaignは、ユーザーがLDAP認証を介してプラットフォームにアクセスするように設定できます。

:speech_balloon:管理対象Cloud Servicesユーザーとして、[Adobe](support.md#support)に連絡して、キャンペーンとのLDAP統合を設定します。


## Webアクセス

HTMLユーザーインターフェイスを使用して、単純なWebブラウザーを使用してアプリケーションの特定の部分にアクセスできます。レポート、配信の承認、インスタンスの監視など。
