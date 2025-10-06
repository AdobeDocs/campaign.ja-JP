---
title: Campaign のユーザーインターフェイスの確認
description: Campaign のユーザーインターフェイスの参照方法と使用方法について説明します
feature: Overview
role: User
level: Beginner
version: Campaign v8, Campaign Classic v7
exl-id: a7846b95-7570-4dce-b3f4-d3cc23eefcac
source-git-commit: fbde111671fb972f6c96ba45eba4c8a88dbcac64
workflow-type: tm+mt
source-wordcount: '1129'
ht-degree: 74%

---

# ユーザーインターフェイスの確認 {#ui-client-console}

Adobe Campaign には、クライアントコンソールまたは web ユーザーインターフェイスからアクセスできます。また、API を使用してデータを管理し、Campaign プラットフォームでタスクを実行することもできます。

* **クライアントコンソール** - クライアントコンソールは、SOAP や HTTP などの標準のインターネットプロトコルを通じて Adobe Campaign アプリケーションサーバーと通信するネイティブアプリケーションです。Campaign クライアントコンソールは、すべての機能と設定を一元化しています。また、ローカルキャッシュに依存することで、必要な帯域幅は最小限に抑えられます。簡単にデプロイできるように設計された Campaign クライアントコンソールは、インターネットブラウザーからデプロイし、自動的に更新できます。発生するトラフィックは HTTP(S) のみであり、特別なネットワーク設定は不要です。[詳細情報](#ui-access)

  Campaign クライアントコンソールをインストールして設定する方法については、[この節](../start/connect.md)を参照してください。

* **Web アクセス** - Adobe Campaign の web アクセス機能を使用すると、web ブラウザーを使用して、Campaign の機能のサブセットにアクセスできます。HTML ユーザーインターフェイスが使用されます。この web インターフェイスを使用して、レポートへのアクセス、メッセージの制御と検証、監視ダッシュボードへのアクセスなどを行います。Campaign の web アクセスについて詳しくは、[この節](../start/connect.md#web-access)を参照してください。

* **API** - より多くのユースケースに対応するために、SOAP プロトコルで公開されている web サービス API を使用して、外部のアプリケーションからシステムを呼び出すこともできます。Campaign の API について詳しくは、[このページ](../dev/api.md)を参照してください。

* **Web ユーザーインターフェイス** - Campaign v8 ユーザーは、v8.6.1 リリース以降、中央の Adobe Experience Cloud ユーザーインターフェイスを通じて web 環境にアクセスできるようになりました。これで、web ブラウザーから Adobe Campaign に接続できます。この新しいインターフェイスを使用すると、主なマーケティングアクションを作成、管理、実行できます。ただし、Campaign のすべての機能が使用できるわけではありません。[詳細情報](#ac-web-ui)。

  >[!AVAILABILITY]
  >
  >Campaign web ユーザーインターフェイスは、Campaign v8 ユーザーがAdobe IDを使用して Campaign に接続する場合にのみ使用できます。 詳しくは、[Adobe Identity Management System（IMS）](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"}を参照してください。
  >

>[!CAUTION]
>
>このドキュメントでは、Campaign クライアントコンソールの使用に焦点を当てています。Campaign v8 ユーザーとして Campaign web ユーザーインターフェイスを使用する場合は、[&#x200B; このドキュメント &#x200B;](https://experienceleague.adobe.com/docs/campaign-web/v8/campaign-web-home.html?lang=ja){target="_blank"} を参照してください。

## クライアントコンソールの操作 {#ui-access}

Campaign クライアントコンソールは、SOAP や HTTP などの標準のインターネットプロトコルを通じて Adobe Campaign アプリケーションサーバーと通信するネイティブアプリケーションです。Campaign クライアントコンソールは、すべての機能と設定を一元化しています。また、ローカルキャッシュに依存することで、必要な帯域幅は最小限に抑えられます。簡単にデプロイできるように設計された Campaign クライアントコンソールは、インターネットブラウザーからデプロイし、自動的に更新できます。発生するトラフィックは HTTP(S) のみであり、特別なネットワーク設定は不要です。[詳しくは、Campaign クライアントコンソールを参照してください](../start/connect.md)。



>[!BEGINTABS]

>[!TAB Campaign v8]

Campaign に接続したら、Adobe Campaignのホームページにアクセスします。 Campaign v8 では、中央のカードを使用して、新しい Campaign web ユーザーインターフェイスおよび Campaign コントロールパネルを参照します。

![Campaign v8 クライアントコンソールホーム &#x200B;](assets/web-ui.png)

>[!NOTE]
>
>Web ユーザーインターフェイスカードが表示されない場合は、A[Adobe Experience Cloud外部アカウント &#x200B;](../config/external-accounts.md) の **Server**、**Tenant**、**Callback server**、**Association mark** の各フィールドを空のままにしないでください。

ホームページから [Campaign Campaign コントロールパネル](../config/self-service.md) にアクセスすることもできます。

>[!TAB Campaign Classic v7]

Campaign に接続したら、Adobe Campaignのホームページにアクセスします。このホームページには、機能、ドキュメント、サポート web サイトおよび Campaign コミュニティにアクセスするためのリンクとショートカットが含まれています。

![Campaign Classic v7 クライアントコンソールホーム &#x200B;](assets/v7_user_interface_home.png)


>[!ENDTABS]


また、web ブラウザーを使用して Campaign にアクセスすることもできます。このコンテキストでは、Campaign 機能のサブセットのみ使用できます。 [詳細情報](#web-browser)

### インターフェイスの参照 {#ui-browse}

Campaign クライアントコンソールに接続したら、上部セクションのタブを参照して、Campaign の主な機能にアクセスします。

![](assets/overview-home.png)

>[!NOTE]
>
>アクセスできるコア機能のリストは、権限と実装によって異なります。

各機能について、「**[!UICONTROL ブラウジング]**」セクションの一連の主な機能にアクセスできます。**[!UICONTROL その他]**&#x200B;リンクを使用すると、他のすべてのコンポーネントにアクセスできます。

例えば、「**[!UICONTROL プロファイルとターゲット]**」タブを参照すると、受信者リスト、購読サービス、既存のターゲティングワークフローおよびこれらすべてのコンポーネントを作成するためのショートカットにアクセスできます。

![](assets/overview-list.png)

画面で要素を選択すると、その要素は新しいタブに読み込まれるので、コンテンツを簡単に参照できます。

![](assets/new-tab.png)

### 要素の作成 {#create-an-element}

画面の左側にある「**[!UICONTROL 作成]**」セクションのショートカットを使用して、新しい要素を追加します。リストの上にある「**[!UICONTROL 作成]**」ボタンを使用すると、現在のリストに新しい要素を追加できます。

例えば、配信ページでは、「**[!UICONTROL 作成]**」ボタンを使用して新しい配信を作成します。

![](assets/new-recipient.png)

<!--
## Use a web browser {#web-browser}

You can also access a subset of Campaign capabilities through the a web browser.

The web access interface is similar to the console interface. From a browser, you can use the same navigation and display features as in the console, but you can perform only a reduced set of actions on campaigns. For example, you can view and cancel campaigns, but you cannot modify campaigns. 

[Learn more about Campaign web access](../start/connect.md#web-access).-->

### Campaign エクスプローラーへのアクセス {#ac-explorer-ui}

Campaign エクスプローラーを参照して、すべての Adobe Campaign の機能と設定にアクセスします。

![](assets/explorer.png)

このワークスペースでは、エクスプローラーツリーにアクセスして、すべての機能とオプションを参照できます。

* 左側のセクションには Campaign エクスプローラーツリーが表示され、権限に応じて、インスタンスのすべてのコンポーネントと設定を参照できます。フォルダーの追加やカスタマイズについては、[このページ](../audiences/folders-and-views.md)を参照してください。

* 上部のセクションには、現在のフォルダー内のレコードのリストが表示されます。これらのリストは完全にカスタマイズ可能です。 [詳細情報](../config/ui-settings.md)

* 下部のセクションには、選択したレコードの詳細が表示されます。


## Campaign web ユーザーインターフェイス {#ac-web-ui}

Campaign v8 v8 v8 v8 v8.1 リリース以降では、Adobe Experience Cloudの主要なユーザーインターフェイスから使用できる web 環境にアクセスできます。 Experience Cloud は、アドビのデジタルマーケティングアプリケーション、製品、サービスの統合ファミリーです。直感的なインターフェイスから、クラウドアプリケーション、製品機能、サービスにすばやくアクセスできます。

![Adobe Campaign web ユーザーインターフェイスホームページ](assets/ac-web-home.png)

>[!AVAILABILITY]
>
>Campaign web ユーザーインターフェイスは、Campaign v8 ユーザーがAdobe IDを使用して Campaign に接続する場合にのみ使用できます。 詳しくは、[Adobe Identity Management System（IMS）](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"}を参照してください。
>

新しい Campaign web ユーザーインターフェイスについて詳しくは、[このドキュメント](https://experienceleague.adobe.com/docs/campaign-web/v8/campaign-web-home.html?lang=ja){target="_blank"}を参照してください。また、Campaign web ユーザーインターフェイスドキュメントにある、専用の[よくある質問のページ](https://experienceleague.adobe.com/ja/docs/campaign-web/v8/start/faq){target="_blank"}も参照してください。

追加機能および高度な機能、設定は、クライアントコンソールでのみ使用できます。両方のユーザーインターフェイスで使用できる機能について詳しくは、[Campaign web ユーザーインターフェイスドキュメント](https://experienceleague.adobe.com/docs/campaign-web/v8/start/capability-matrix.html?lang=ja){target="_blank"}を参照してください。


## サポートされている言語 {#languages}

サポートされている言語は、ユーザーインターフェイスによって異なります。

* Campaign クライアントコンソールインターフェイスでサポートされる言語は次のとおりです。

   * 英語（英国）
   * 英語（米国）
   * フランス語
   * ドイツ語
   * 日本語


  >[!CAUTION]
  >
  >言語はインストールプロセス中に選択され、その後は **変更できません** します。

* Campaign web ユーザーインターフェイスでサポートされている言語について詳しくは、[このページを参照してください](https://experienceleague.adobe.com/docs/campaign-web/v8/start/connect-to-campaign.html?lang=ja#language-pref){target="_blank"}。

## フォーマット

言語は、日付および時刻の形式に影響します。

米国英語と英国英語の主な違いは次のとおりです。

<table> 
 <thead> 
  <tr> 
   <th> フォーマット<br /> </th> 
   <th> 英語（米国）<br /> </th> 
   <th> 英語（英国）<br /> </th> 
  </tr> 
 </thead> 
 <tbody> 
  <tr> 
   <td> 日付<br /> </td> 
   <td> 日曜日が週始め<br /> </td> 
   <td> 月曜日が週始め<br /> </td> 
  </tr> 
  <tr> 
   <td> 日付の短縮表記<br /> </td> 
   <td> <p>%2M/%2D/%4Y</p><p><strong>例：09/25/2025</strong></p> </td> 
   <td> <p>%2D/%2M/%4Y</p><p><strong>例：25/09/2025</strong></p> </td> 
  </tr> 
  <tr> 
   <td> 日付と時刻の短縮表記<br /> </td> 
   <td> <p>%2M/%2D/%4Y %I:%2N:%2S %P</p><p><strong>例：09/25/2025 10:47:25 PM</strong></p> </td> 
   <td> <p>%2D/%2M/%4Y %2H:%2N:%2S</p><p><strong>例：25/09/2025 22:47:25</strong></p> </td> 
  </tr> 
 </tbody> 
</table>


## その他のリソース

* **[列挙の操作](../dev/enumerations.md)** – 定義済みのドロップダウンリストを使用してフィールド値を標準化し、迅速で一貫性のあるデータ入力を可能にします。
* **[スキーマの列挙](../dev/schema-structure.md#enumerations)** - Campaign 開発者は、スキーマ内の無料、固定またはデータベースベースの列挙を使用して、フィールド値を制御します。