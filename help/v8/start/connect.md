---
title: クライアントコンソールを使用した Campaign への接続
description: Campaign クライアントコンソールをマシンにインストールし、Adobe Campaign に接続する方法を学ぶ
feature: Client Console
role: User
level: Beginner
exl-id: 176cc4f0-8827-4127-9f03-7d75ac8cf917
source-git-commit: a9f26a033d63ab1dece9ef9780392823ee130047
workflow-type: tm+mt
source-wordcount: '978'
ht-degree: 97%

---

# クライアントコンソールを使用した Campaign への接続{#gs-ac-connect}

クライアントコンソールを使用して Campaign に接続するには、まずインストールして設定する必要があります。

始める前に、次の手順を実行する必要があります。

* お使いのシステムとツールについて、Adobe Campaign クライアントコンソールとの互換性を[互換性マトリックス](compatibility-matrix.md)で確認してください。
* Campaign サーバーの URL を取得する
* Adobe ID を作成するか、会社からユーザー資格情報を取得する
* Microsoft Edge Webview2 ランタイムをシステムにインストールします。 [詳細情報](#webview)


>[!NOTE]
>
>また、web ブラウザーを使用して Campaign web ユーザーインターフェイスに接続することもできます。新しい Campaign web ユーザーインターフェイスについて詳しくは、[このドキュメント](https://experienceleague.adobe.com/docs/campaign-web/v8/campaign-web-home.html?lang=ja){target="_blank"}を参照してください。


## クライアントコンソールのインストール{#download-ac-console}

### Microsoft Edge WebView2 ランタイム {#webview}

Campaign Classic 8.4 ビルドバージョン以降、クライアントコンソールのインストールには Microsoft Edge WebView2 ランタイムのインストールが必要です。

WebView は、Windows 11 オペレーティングシステムの一部としてデフォルトでインストールされます。システムにまだインストールされていない場合、Campaign クライアントコンソールインストールプログラムにより、[Microsoft Developer web サイト](http://www.adobe.com/go/acc-ms-webview2-runtime-download_jp){target="_blank"}からダウンロードするように求められます。Microsoft により Internet Explorer 11 ブラウザーのサポートが非推奨（廃止予定）となったので、Internet Explorer 11 ブラウザーではダウンロードリンクは機能しません。別のブラウザーを使用してリンクにアクセスしてください。

### コンソールのダウンロード{#install-ac-console}

Campaign を初めて使用する場合は、クライアントコンソールをダウンロードしてインストールする必要があります。

クライアントコンソールをダウンロードするには、次の 2 つのオプションがあります。

1. Campaign 管理者として、アドビの[ソフトウェア配布](https://experience.adobe.com/#/downloads/content/software-distribution/jp/campaign.html){target="_blank"}に接続します。

1. エンドユーザーとして、Campaign 管理者がクライアントコンソールをデプロイし、専用の URL から使用できるようにします。

クライアントコンソールのインストールプログラムがダウンロードされたら、ローカルマシンにインストールします。

インストール後は、クライアントコンソールの言語を変更できません。

## 接続の作成{#create-your-connection}

クライアントコンソールをインストールしたら、次の手順に従ってアプリケーションサーバーへの接続を作成します。

1. コンソールを起動し、右隅のリンクを参照して、接続設定画面にアクセスします。

1. **[!UICONTROL 追加／接続]**&#x200B;をクリックし、Adobe Campaign アプリケーションサーバーのラベルと URL を入力します。

1. URL 経由で Adobe Campaign アプリケーションサーバーへの接続を指定します。 DNS、マシンのエイリアス、または IP アドレスを使用します。

   例えば、`https://<machine>.<domain>.com` タイプの URL を使用できます。

1. 「**[!UICONTROL Adobe ID を使用して接続]**」オプションをオンにします。

1. 「**[!UICONTROL OK]**」をクリックして設定を保存します。

例えば、テスト、ステージ、実稼動環境に接続するために必要な数の接続を追加できます。

>[!NOTE]
>
>「**[!UICONTROL 追加]**」ボタンを使用すると、すべての接続を整理する&#x200B;**[!UICONTROL フォルダー]**&#x200B;を作成できます。各接続をフォルダーにドラッグ＆ドロップします。

## Adobe Campaign へのログオン {#logon-to-ac}

Campaign ユーザーは、Adobe Identity Management System（IMS）により、Adobe ID を使用して Adobe Campaign コンソールに接続できます。 すべてのアドビソリューションで同じ ID を使用できます。Adobe Campaign を他のソリューションと併用する場合、接続は保存されます。Adobe IMS について詳しくは、[このページ](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"}を参照してください。

インスタンスにログオンするには、以下の手順に従います。

1. コンソールを起動し、右隅のリンクを参照して、接続設定画面にアクセスします。

   ![](assets/connectToCampaign.png)

1. ログインする必要がある Campaign インスタンスを選択します。

1. 「**[!UICONTROL OK]**」をクリックします。

これにより、Adobe ID を使用して Campaign にログインできるようになります。

![](assets/adobeID.png)

>[!NOTE]
>
>Microsoft Edge WebView2 はプロキシ資格情報を保存しないので、初回接続時にコンソールから 2 回認証を求められることがあります。

## クライアントコンソールのアップグレード{#upgrade-ac-console}

システムを新しいリリースにアップグレードする場合は、クライアントコンソールを同じバージョンに更新する必要があります。これはベストプラクティスであり、一部のリリースにはこのアップグレードが必須です。 その場合は、[リリースノート](release-notes.md)に記載されています。

Managed Cloud Services ユーザーの場合は、ユーザーに代わってアドビがクライアントコンソールをデプロイします。アップグレードした環境に接続すると、ポップアップウィンドウで最新のクライアントコンソールバージョンをダウンロードするよう求められます。このアップグレードに同意し、リクエストに応じてクライアントコンソールを更新する必要があります。

>[!CAUTION]
>
>アドビは、コンソールの新しいバージョンが利用可能になったときにアラートが送信されるようにするために、「**[!UICONTROL 今後この質問をしない]**」オプションを選択しないままにすることをお勧めします。 このオプションを選択すると、コンソールのアップグレードが必要であることはユーザーに通知されません。
>



## ユーザーへのアクセスの許可{#grant-access}

Adobe Campaign は、様々なオペレーターに割り当てる一連の権利を定義したり、管理したりするのに役立ちます。

Campaign 管理者は、オペレーターを作成し、ユーザーと資格情報を共有する責任があります。

ユーザーの詳細と、ユーザーの権限の定義方法については、[この節](gs-permissions.md)を参照してください。


## Web ブラウザーで Campaign にアクセス {#connect-web-ac}

### Web ユーザーインターフェイス {#connect-web-ui}

Campaign v8.6 リリース以降、中央の Adobe Experience Cloud 環境を通じて、新しい **Campaign web ユーザーインターフェイス**&#x200B;にアクセスできるようになります。Experience Cloud は、アドビのデジタルマーケティングアプリケーション、製品、サービスの統合ファミリーです。直感的なインターフェイスから、クラウドアプリケーション、製品機能、サービスにすばやくアクセスできます。

>[!AVAILABILITY]
>
>Campaign web ユーザーインターフェイスは、Adobe IDを使用してAdobe Campaignに接続するユーザーのみが使用できます。 [Identity Management System （IMS） ](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"} のAdobeの詳細を表示します。
>

Adobe Experience Cloud に接続し、Adobe Campaign web インターフェイスにアクセスする方法については、[このページ](campaign-ui.md#ac-web-ui)を参照してください。

詳しくは、[Adobe Campaign web ユーザーインターフェイスドキュメント](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/campaign-web-home){target="_blank"}を参照してください。

### Web アクセス {#web-access}

アプリケーションの特定の機能（レポート、配信の承認、インスタンスの監視など）へは、HTML ユーザーインターフェイスを使用して、web ブラウザーからアクセスできます。

Web アクセスでは、コンソールと同様のインターフェースを提供しますが、機能は限定されています。

例えば、特定のオペレーターの場合、あるキャンペーンをコンソールで確認すると、次のようなオプションが表示されます。 

![](assets/campaign-from-console.png)

一方、Web アクセスで確認すると、次のようなオプションが表示されます。

![](assets/campaign-from-web.png)

Web アクセスは、検証プロセスでも使用します。オペレーターは、承認依頼のメールをクリックし、web ブラウザーで Campaign に接続して、配信コンテンツまたは予算の検証または却下を行うことができます。

Web から Campaign インスタンスにアクセスするための URL は `https://<your adobe campaign server>:<port number>/view/home` です。
