---
product: Adobe Campaign
title: Campaign トランザクションメッセージの設定
description: Campaign トランザクションメッセージの設定
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: c61d8aa8e0a68ccc81a6141782f860daf061bc61
workflow-type: ht
source-wordcount: '327'
ht-degree: 100%

---

# トランザクションメッセージの設定

Managed Cloud Services ユーザーの場合、お使いの環境に Campaign トランザクションメッセージをインストールして設定するには、[アドビにお問い合わせ](../start/campaign-faq.md#support)ください。

トランザクションメッセージ機能の詳細については、[この節](../send/transactional.md)を参照してください。

トランザクションメッセージのアーキテクチャについては、[このページ](../dev/architecture.md)を参照してください。

## 権限の定義

Adobe Cloud でホストされる Message Center 実行インスタンスの新しいユーザーを作成するには、アドビカスタマーケアに連絡する必要があります。 Message Center ユーザーは、「リアルタイムイベント」（nmsRtEvent）フォルダーにアクセスするための専用の権限を必要とする特定のオペレーターです。

## スキーマ拡張

コントロールインスタンスまたは実行インスタンスのいずれかで **Message Center テクニカルワークフロー**&#x200B;が使用するスキーマで作成されたすべてのスキーマ拡張は、Adobe Campaign トランザクションメッセージモジュールが使用する別のインスタンスに複製する必要があります。

↗️ Message Center テクニカルワークフローの詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/configure-transactional-messaging/additional-configurations.html?lang=ja#technical-workflows)を参照してください

## トランザクションプッシュ通知の送信

トランザクションメッセージでは、モバイルアプリチャネルモジュールと組み合わせることで、モバイルデバイスの通知を介してトランザクションメッセージをプッシュすることができます。

↗️ モバイルアプリチャネルの詳細については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/about-mobile-app-channel.html?lang=ja#sending-messages)を参照してください。

トランザクションプッシュ通知を送信するには、次の設定をおこなう必要があります。

1. **モバイルアプリチャネル**&#x200B;パッケージをコントロールインスタンスと実行インスタンス上にインストールします。

   >[!CAUTION]
   >
   >新しい Campaign 組み込みパッケージをインストールする前に、使用許諾契約書を確認してください。

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

