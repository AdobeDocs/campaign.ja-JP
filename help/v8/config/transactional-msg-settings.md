---
title: Campaign トランザクションメッセージの設定
description: Campaign トランザクションメッセージの設定
feature: Transactional Messaging
role: Admin, Developer
level: Intermediate, Experienced
exl-id: 2899f627-696d-422c-ae49-c1e293b283af
source-git-commit: c61f03252c7cae72ba0426d6edcb839950267c0a
workflow-type: tm+mt
source-wordcount: '720'
ht-degree: 77%

---

# トランザクションメッセージの設定

![](../assets/do-not-localize/speech.png)Managed Cloud Services のユーザーとして Campaign トランザクションメッセージをお使いの環境にインストールして構成する場合は、[アドビにお問い合わせ](../start/campaign-faq.md#support)ください。

![](../assets/do-not-localize/glass.png) トランザクションメッセージ機能の詳細については、[この節](../send/transactional.md)を参照してください。

![](../assets/do-not-localize/glass.png) トランザクションメッセージのアーキテクチャについては、[このページ](../architecture/architecture.md#transac-msg-archi)を参照してください。

## 権限の定義

Adobe Cloud でホストされる Message Center 実行インスタンスの新しいユーザーを作成するには、アドビカスタマーケアに連絡する必要があります。 Message Center ユーザーは、「リアルタイムイベント」（nmsRtEvent）フォルダーにアクセスするための専用の権限を必要とする特定のオペレーターです。

## スキーマ拡張

コントロールインスタンスまたは実行インスタンスのいずれかで **Message Center テクニカルワークフロー**&#x200B;が使用するスキーマで作成されたすべてのスキーマ拡張は、Adobe Campaign トランザクションメッセージモジュールが使用する別のインスタンスに複製する必要があります。

![](../assets/do-not-localize/book.png) Message Center のテクニカルワークフローに関する詳細は、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/configure-transactional-messaging/additional-configurations.html?lang=ja#technical-workflows)を参照してください

## トランザクションプッシュ通知の送信

トランザクションメッセージでは、モバイルアプリチャネルモジュールと組み合わせることで、モバイルデバイスの通知を介してトランザクションメッセージをプッシュすることができます。

![](../assets/do-not-localize/book.png) モバイルアプリチャネルについて詳しくは、 [この節](../send/push.md).

トランザクションプッシュ通知を送信するには、次の設定をおこなう必要があります。

1. **モバイルアプリチャネル**&#x200B;パッケージをコントロールインスタンスと実行インスタンス上にインストールします。

   >[!CAUTION]
   >
   >新しい Campaign ビルトインパッケージをインストールする前に、ライセンス契約を確認してください。

1. **モバイルアプリケーション**&#x200B;サービスと、関連するモバイルアプリケーションを実行インスタンスに複製します。

Campaign がトランザクションプッシュ通知を送信するには、イベントに次の要素が含まれている必要があります。

* モバイルデバイス ID：Android では **registrationId**、iOS では **deviceToken**。 この ID が、通知を送信する宛先の「アドレス」を表します。
* アプリケーションに固有の接続情報を取得できるモバイルアプリケーションまたは統合キー（**uuid**）へのリンク。
* 通知が送信されるチャネル（**wishedChannel**）：iOS は 41、Android は 42 です。
* パーソナライゼーションに活用するその他のデータ。

この情報を含むイベントの例を次に示します。

```
<SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
     <urn:PushEvent>
         <urn:sessiontoken>mc/</urn:sessiontoken>
         <urn:domEvent>

              <rtEvent wishedChannel="41" type="DELIVERY" registrationToken="2cefnefzef758398493srefzefkzq483974">
                <mobileApp _operation=”none” uuid="com.adobe.NeoMiles"/>
                <ctx>
                    <deliveryTime>1:30 PM</deliveryTime>
                    <url>http://www.adobe.com</url>
                </ctx>
              </rtEvent>

         </urn:domEvent>
     </urn:PushEvent>           
   </SOAP-ENV:Body>
</SOAP-ENV:Envelope>
```

## しきい値の監視 {#monitor-thresholds}

次に示す指標の警告しきい値（オレンジ）とアラートしきい値（赤）を設定できます。 **Message Center サービスレベル** および **Message Center の処理時間** レポート。

これを行うには、次の手順に従います。

1. でデプロイウィザードを開きます。 **実行インスタンス**&#x200B;をクリックし、 **[!UICONTROL Message Center]** ページ。
1. 矢印でしきい値を変更します。


## イベントのパージ {#purge-events}

デプロイウィザードの設定を調整して、データをデータベースに保存する期間を設定できます。

イベントのパージは、 **データベースのクリーンアップ** テクニカルワークフロー。 このワークフローは、実行インスタンスが受信し保存したイベントおよびコントロールインスタンスがアーカイブしたイベントをパージします。

矢印を使用して、必要に応じて **イベント** （実行インスタンス上）および **アーカイブしたイベント** （コントロールインスタンス上）。


## テクニカルワークフロー {#technical-workflows}

トランザクションメッセージテンプレートをデプロイする前に、コントロールインスタンスと実行インスタンス上のテクニカルワークフローが開始されていることを確認する必要があります。

これらのワークフローは、**管理／プロダクション／Message Center** フォルダーからアクセスできます。

### コントロールインスタンスのワークフロー {#control-instance-workflows}

コントロールインスタンス上で、それぞれに対して 1 つのアーカイブワークフローを作成する必要があります **[!UICONTROL Message Center 実行インスタンス]** 外部アカウント。 「**[!UICONTROL アーカイブワークフローを作成]**」ボタンをクリックし、ワークフローを作成して開始します。

### 実行インスタンスのワークフロー {#execution-instance-workflows}

実行インスタンスで、次のテクニカルワークフローを開始する必要があります。

* **[!UICONTROL バッチイベントの処理]**（内部名：**[!UICONTROL batchEventsProcessing]**）：このワークフローは、メッセージテンプレートにリンクされる前にキュー内のバッチイベントを分類することができます。
* **[!UICONTROL リアルタイムイベントの処理]**（内部名：**[!UICONTROL rtEventsProcessing]**）：このワークフローは、メッセージテンプレートにリンクされる前にキュー内のリアルタイムイベントを分類することができます。
* **[!UICONTROL イベントステータスを更新]**（内部名：**[!UICONTROL updateEventStatus]**）：このワークフローは、ステータスをイベントに関連付けることができます。

   可能なイベントのステータスは次のとおりです。

   * **[!UICONTROL 保留中]**：イベントはキューの中です。イベントにはまだメッセージテンプレートが割り当てられていません。
   * **[!UICONTROL 配信待ち]**：イベントはキューの中で、メッセージテンプレートが割り当てられ、配信による処理中です。
   * **[!UICONTROL 送信済み]**：このステータスは配信ログからコピーされます。配信が送信されたことを示します。
   * **[!UICONTROL 配信で無視]**：このステータスは配信ログからコピーされます。これは配信が無視されたことを意味しています。
   * **[!UICONTROL 配信に失敗]**：このステータスは配信ログからコピーされます。これは配信が失敗したことを意味しています。
   * **[!UICONTROL 処理不可なイベント]**：イベントをメッセージテンプレートにリンクすることができませんでした。イベントの処理はおこなわれません。
