---
title: Campaign v8 への接続
description: Campaign v8 への接続方法を学ぶ
feature: Audiences
role: Data Engineer
level: Beginner
exl-id: 176cc4f0-8827-4127-9f03-7d75ac8cf917
source-git-commit: f071fc227dac6d72873744ba56eb0b4b676de5dd
workflow-type: tm+mt
source-wordcount: '702'
ht-degree: 100%

---

# Adobe Campaign v8 への接続{#gs-ac-connect}

Campaign クライアントコンソールは、Campaign アプリケーションサーバーに接続できるリッチクライアントです。

始める前に、次の手順を実行する必要があります。

* お使いのシステムとツールについて、Adobe Campaign クライアントコンソールとの互換性を[互換性マトリックス](compatibility-matrix.md)で確認してください。
* Campaign サーバーの URL を取得する
* Adobe IDを作成するか、会社からユーザー資格情報を取得する

## クライアントコンソールのダウンロードとインストール

初めて Campaign を使用する場合、または新しいバージョンにアップグレードする必要がある場合は、クライアントコンソールをダウンロードしてインストールする必要があります。

次の 2 つのオプションを使用できます。

1. Campaign 管理者として、アドビの[ソフトウェア配布](https://experience.adobe.com/#/downloads/content/software-distribution/ja/campaign.html)に接続し、クライアントコンソールのインストールプログラムをダウンロードします。 その後、ローカルマシンにインストールできます。

1. アドビは、エンドユーザーとしてコンソールをデプロイできます。コンソールが更新されると、ポップアップウィンドウに最新のクライアントコンソールのバージョンをダウンロードするように求められます。

>[!CAUTION]
>
>アドビは、コンソールの新しいバージョンが利用可能になったときにすべてのユーザーにアラートが送信されるようにするために、「**[!UICONTROL 今後この質問をしない]**」オプションを選択しないままにすることをお勧めします。このオプションを選択すると、新しく利用可能になったバージョンは通知されません。

## 接続の作成

クライアントコンソールを新たにインストールしたら、次の手順に従ってアプリケーションサーバーへの接続を作成します。

1. Windows の&#x200B;**[!UICONTROL スタート]**&#x200B;メニューから、**Adobe Campaign** プログラムグループのコンソールを起動します。

1. 資格情報フィールドの右上隅にあるリンクをクリックして、接続設定ウィンドウにアクセスします。

1. **[!UICONTROL 追加／接続]**&#x200B;をクリックし、Adobe Campaign アプリケーションサーバーのラベルと URL を入力します。

1. URL 経由で Adobe Campaign アプリケーションサーバーへの接続を指定します。 DNS、マシンのエイリアス、または IP アドレスを使用します。

   例えば、[`https://<machine>.<domain>.com`](https://myserver.adobe.com) タイプの URL を使用できます。

1. 「**[!UICONTROL Adobe ID を使用して接続]**」オプションをオンにします。

1. 「**[!UICONTROL OK]**」をクリックして設定を保存します。

例えば、テスト、ステージ、実稼動環境に接続するために必要な数の接続を追加できます。

>[!NOTE]
>
>「**[!UICONTROL 追加]**」ボタンを使用すると、すべての接続を整理する&#x200B;**[!UICONTROL フォルダー]**&#x200B;を作成できます。各接続をフォルダーにドラッグ＆ドロップします。

## Adobe Campaign へのログオン

既存のインスタンスにログオンするには、以下の手順に従います。

1. Windows の&#x200B;**[!UICONTROL スタート]**&#x200B;メニューで、**Adobe Campaign** プログラムグループのコンソールを起動します。

1. 資格情報フィールドの右上隅にあるリンクをクリックして、接続設定ウィンドウにアクセスします。

   ![](assets/connectToCampaign.png)

1. ログインする必要がある Campaign インスタンスを選択します。

1. 「**[!UICONTROL OK]**」をクリックします。

1. これにより、[Adobe ID](#connect-ims) を使用して Campaign にログインできるようになります。

   ![](assets/adobeID.png)

## ユーザーへのアクセスの許可

Adobe Campaign は、様々なオペレーターに割り当てる一連の権利を定義したり、管理したりするのに役立ちます。以下の操作は、それらの権利に基づいて承認または拒否されます。

* 特定種類の機能に対するアクセス（ネームド権限など）
* 特定の要素へのアクセス、
* 要素（配信、連絡先、キャンペーン、グループなど）を作成、変更、削除します。

ユーザーの詳細と、ユーザーの権限の定義方法については、[この節](permissions.md)を参照してください。

Campaign 管理者は、オペレーターを作成し、ユーザーと資格情報を共有する責任があります。

## Adobe ID で Campaign に接続{#connect-ims}

Campaign ユーザーは、Adobe Identity Management System（IMS）により、Adobe ID を使用して Adobe Campaign コンソールに接続できます。 すべてのアドビソリューションで同じ ID を使用できます。Adobe Campaign を他のソリューションと共に使用する場合、接続は保存されます。

Adobe IMS について詳しくは、[このページ](https://helpx.adobe.com/jp/enterprise/using/identity.html)を参照してください。

## Web アクセス{#web-access}

アプリケーションの特定の機能（レポート、配信の承認、インスタンスの監視など）へは、HTML ユーザーインターフェイスを使用して、web ブラウザーからアクセスできます。

Web アクセスでは、コンソールと同様のインターフェースを提供しますが、機能は限定されています。

例えば、特定のオペレーターの場合、あるキャンペーンをコンソールで確認すると、次のようなオプションが表示されます。 

![](assets/campaign-from-console.png)

一方、Web アクセスで確認すると、次のようなオプションが表示されます。

![](assets/campaign-from-web.png)

Web アクセスは、検証プロセスでも使用します。オペレーターは、承認依頼のメールをクリックし、web ブラウザーで Campaign に接続して、配信コンテンツまたは予算の検証または却下を行うことができます。

Web から Campaign インスタンスにアクセスするための URL は `https://<your adobe campaign server>:<port number>/view/home` です。
