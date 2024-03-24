---
title: Campaign トランザクションメッセージの設定
description: Campaign トランザクションメッセージの設定
feature: Transactional Messaging
role: Admin, Developer
level: Experienced
exl-id: 2899f627-696d-422c-ae49-c1e293b283af
source-git-commit: 5ab598d904bf900bcb4c01680e1b4730881ff8a5
workflow-type: tm+mt
source-wordcount: '636'
ht-degree: 97%

---

# トランザクションメッセージの設定 {#mc-settings}

トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計されたキャンペーンモジュールです。トランザクションメッセージについて詳しくは、[この節](../send/transactional.md)を参照してください。

 トランザクションメッセージのアーキテクチャについては、[このページ](../architecture/architecture.md#transac-msg-archi)を参照してください。


>[!NOTE]
>
>管理対象Cloud Serviceユーザーとして、 [連絡先Adobe](../start/campaign-faq.md#support) :Campaign トランザクションメッセージをお使いの環境にインストールして設定します。

## 権限の定義 {#mc-permissions}

Adobe Cloud でホストされる Message Center 実行インスタンスの新しいユーザーを作成するには、アドビトランジションマネージャーにお問い合わせください。Message Center ユーザーは、「リアルタイムイベント」（nmsRtEvent）フォルダーにアクセスするための専用の権限を必要とする特定のオペレーターです。

## スキーマ拡張  {#mc-schema-ext}

コントロールインスタンスまたは実行インスタンスのいずれかで [Message Center テクニカルワークフロー](#technical-workflows)が使用するスキーマで作成されたすべてのスキーマ拡張は、Adobe Campaign トランザクションメッセージモジュールが使用する別のインスタンスに複製する必要があります。

## トランザクションプッシュ通知の送信 {#mc-transactional-push}

トランザクションメッセージでは、[モバイルアプリチャネルモジュール](../send/push.md)と組み合わせることで、通知を介してモバイルデバイスにトランザクションメッセージをプッシュすることができます。

トランザクションプッシュ通知を送信するには、次の設定をおこなう必要があります。

1. **モバイルアプリチャネル**&#x200B;パッケージをコントロールインスタンスと実行インスタンス上にインストールします。

   >[!CAUTION]
   >
   >新しい Campaign ビルトインパッケージをインストールする前に、ライセンス契約を確認してください。

1. **モバイルアプリケーション**&#x200B;サービスと、関連するモバイルアプリケーションを実行インスタンスに複製します。

さらに、イベントには次の要素が含まれる必要があります。

* モバイルデバイス ID：Android では **registrationId**、iOS では **deviceToken**。この ID が、通知を送信する宛先の「アドレス」を表します。
* アプリケーションに固有の接続情報を取得できるモバイルアプリケーションまたは統合キー（**uuid**）へのリンク。
* 通知が送信されるチャネル（**wishedChannel**）：iOS は 41、Android は 42 です。
* その他のパーソナライゼーションデータ。

トランザクションプッシュ通知を送信するイベント設定の例を以下に示します。

```xml
<SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
     <urn:PushEvent>
         <urn:sessiontoken>mc/</urn:sessiontoken>
         <urn:domEvent>

              <rtEvent wishedChannel="41" type="DELIVERY" registrationToken="2cefnefzef758398493srefzefkzq483974">
                <mobileApp _operation="none" uuid="com.adobe.NeoMiles"/>
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

## イベントのパージ {#purge-events}

デプロイメントウィザード設定を調整し、データをデータベース上に保存する期間を設定できます。

イベントのパージは、**データベースクリーンアップ**&#x200B;テクニカルワークフローによって自動的に実行されます。このワークフローは、実行インスタンスが受信し保存したイベントおよびコントロールインスタンスがアーカイブしたイベントをパージします。

必要に応じて矢印を使用して、**イベント**（実行インスタンス上）および&#x200B;**アーカイブしたイベント**（コントロールインスタンス上）のパージ設定を変更します。


## テクニカルワークフロー {#technical-workflows}

トランザクションメッセージテンプレートをデプロイする前に、コントロールおよび実行インスタンス上にてテクニカルワークフローが開始されていることを確認する必要があります。

これらのワークフローは、**管理／プロダクション／Message Center** フォルダーからアクセスできます。

### コントロールインスタンスのワークフロー {#control-instance-workflows}

コントロールインスタンス上で、**[!UICONTROL Message Center の実行インスタンス]**&#x200B;外部アカウントごとに 1 つのアーカイブワークフローを作成する必要があります。「**[!UICONTROL アーカイブワークフローを作成]**」ボタンをクリックし、ワークフローを作成して開始します。

### 実行インスタンスのワークフロー {#execution-instance-workflows}

実行インスタンス上で、次のテクニカルワークフローを開始する必要があります。

* **[!UICONTROL バッチイベントの処理]**（内部名：**[!UICONTROL batchEventsProcessing]**）：このワークフローは、メッセージテンプレートにリンクされる前にキュー内のバッチイベントを分類することができます。
* **[!UICONTROL リアルタイムイベントの処理]**（内部名：**[!UICONTROL rtEventsProcessing]**）：このワークフローは、メッセージテンプレートにリンクされる前にキュー内のリアルタイムイベントを分類することができます。
* **[!UICONTROL イベントステータスを更新]**（内部名：**[!UICONTROL updateEventStatus]**）：このワークフローは、ステータスをイベントに関連付けることができます。

  可能なイベントのステータスは次のとおりです。

   * **[!UICONTROL 保留中]**：イベントはキュー内にあります。イベントにはまだメッセージテンプレートが割り当てられていません。
   * **[!UICONTROL 配信保留]**：イベントはキュー内にあり、メッセージテンプレートが割り当てられ、配信による処理中です。
   * **[!UICONTROL 送信済み]**：このステータスは配信ログからコピーされます。配信が送信されたことを示します。
   * **[!UICONTROL 配信で無視]**：このステータスは配信ログからコピーされます。配信が無視されたことを意味します。
   * **[!UICONTROL 配信失敗]**：このステータスは配信ログからコピーされます。配信が失敗したことを意味します。
   * **[!UICONTROL 考慮されないイベント]**：イベントをメッセージテンプレートにリンクすることができませんでした。イベントの処理はおこなわれません。
