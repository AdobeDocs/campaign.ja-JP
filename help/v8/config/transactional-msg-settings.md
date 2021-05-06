---
solution: Campaign Classic
product: campaign
title: キャンペーントランザクションメッセージ設定
description: キャンペーントランザクションメッセージ設定
feature: 概要
role: Data Engineer
level: Beginner
translation-type: tm+mt
source-git-commit: c2d066ca2f935455861c3d6747c9805c847f2e0d
workflow-type: tm+mt
source-wordcount: '337'
ht-degree: 21%

---

# トランザクションメッセージ設定

:speech_balloon:管理対象Cloud Servicesのユーザーとして、[Adobe](../start/support.md#support)に連絡して、キャンペーントランザクションメッセージを環境にインストールして設定します。

:bulb:トランザクションメッセージング機能の詳細については、[このセクション](../send/transactional.md)を参照してください。

:bulb:[このページ](../dev/architecture.md)のトランザクションメッセージングのアーキテクチャを理解します。

## 権限の定義

Adobe Cloud でホストされる Message Center 実行インスタンスの新しいユーザーを作成するには、アドビカスタマーケアに連絡する必要があります。Message Centerのユーザーは、「リアルタイムイベント」(nmsRtEvent)フォルダにアクセスするための専用の権限を必要とする特定の演算子です。

## スキーマ拡張

**Message Centerテクニカルワークフロー**&#x200B;が使用するスキーマで行うスキーマ拡張は、いずれかの制御モジュールまたは実行インスタンスで行う拡張を、Adobe Campaignトランザクションメッセージングモジュールが使用する他のインスタンスに複製する必要があります。

:arrow_upper_right:Message Centerのテクニカルワークフローに関する詳細は、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/instance-configuration/technical-workflows.html?lang=en#control-instance-workflows)を参照してください

## トランザクションプッシュ通知の送信

モバイルアプリチャネルモジュールと組み合わせると、トランザクションメッセージを使用して、モバイルデバイスでの通知を通じてトランザクションメッセージをプッシュできます。

:arrow_upper_right:モバイルアプリのチャネルについて詳しくは、[Campaign Classicドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/about-mobile-app-channel.html?lang=en#sending-messages)を参照してください。

トランザクションプッシュ通知を送信するには、次の設定を行う必要があります。

1. **モバイルアプリチャネル**&#x200B;パッケージをコントロールインスタンスと実行インスタンス上にインストールします。

   >[!CAUTION]
   >
   >新しいキャンペーン組み込みパッケージをインストールする前に、使用許諾契約書を確認してください。

1. **Mobile application**&#x200B;サービスと、関連するモバイルアプリケーションを実行インスタンスに複製します。

キャンペーンがトランザクションプッシュ通知を送信するには、イベントに次の要素が含まれている必要があります。

* モバイルデバイスID:Androidの場合は&#x200B;**registrationId**、iOSの場合は&#x200B;**deviceToken**&#x200B;です。 この ID が、通知を送信する宛先の「アドレス」を表します。
* モバイルアプリケーションまたは統合キー(**uuid**)へのリンク。このリンクを使用すると、アプリケーションに固有の接続情報を取得できます。
* 通知が送信されるチャネル（**wishedChannel**）：iOS は 41、Android は 42 です.
* パーソナライゼーションに活用するその他のデータ。

以下は、この情報を含むイベントの例です。

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

