---
solution: Campaign v8
product: Adobe Campaign
title: キャンペーントランザクションメッセージの設定
description: キャンペーントランザクションメッセージの設定
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: ab7e458db5ad5696d144c17f6e89e4437a476d11
workflow-type: tm+mt
source-wordcount: '331'
ht-degree: 21%

---

# トランザクションメッセージの設定

:speech_balloon:管理対象Cloud Servicesのユーザーは、[Adobe](../start/campaign-faq.md#support)に連絡して、お使いの環境にCampaignトランザクションメッセージをインストールして設定します。

[!DNL :bulb:] トランザクションメッセージ機能について詳しく [は、この節](../send/transactional.md)を参照してください。

[!DNL :bulb:] トランザクションメッセージのアーキテクチャにつ [いては、このページ](../dev/architecture.md)を参照してください。

## 権限の定義

Adobe Cloud でホストされる Message Center 実行インスタンスの新しいユーザーを作成するには、アドビカスタマーケアに連絡する必要があります。Message Centerユーザーは、「リアルタイムイベント」(nmsRtEvent)フォルダーにアクセスするための専用の権限を必要とする特定のオペレーターです。

## スキーマ拡張

コントロールインスタンスまたは実行インスタンスで&#x200B;**Message Centerテクニカルワークフロー**&#x200B;で使用されるスキーマに対しておこなわれるすべてのスキーマ拡張は、Adobe Campaignトランザクションメッセージモジュールで使用される他のインスタンスで複製する必要があります。

[!DNL :arrow_upper_right:] Message Centerのテクニカルワークフローについて詳しくは、 [Campaign Classicv7のドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/instance-configuration/technical-workflows.html?lang=en#control-instance-workflows)

## トランザクションプッシュ通知の送信

トランザクションメッセージでは、モバイルアプリチャネルモジュールと組み合わせることで、通知を通じてモバイルデバイスにトランザクションメッセージをプッシュできます。

[!DNL :arrow_upper_right:] モバイルアプリチャネルについて詳しくは、 [Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/about-mobile-app-channel.html?lang=en#sending-messages)を参照してください。

トランザクションプッシュ通知を送信するには、次の設定を実行する必要があります。

1. **モバイルアプリチャネル**&#x200B;パッケージをコントロールインスタンスと実行インスタンス上にインストールします。

   >[!CAUTION]
   >
   >新しいCampaign組み込みパッケージをインストールする前に、使用許諾契約を確認してください。

1. **モバイルアプリケーション**&#x200B;サービスおよび関連するモバイルアプリケーションを実行インスタンスにレプリケートします。

Campaignがトランザクションプッシュ通知を送信するには、イベントに次の要素を含める必要があります。

* モバイルデバイスID:Androidの場合は&#x200B;**registrationId**、iOSの場合は&#x200B;**deviceToken**&#x200B;です。 この ID が、通知を送信する宛先の「アドレス」を表します。
* モバイルアプリケーションへのリンクまたは統合キー(**uuid**)。アプリケーション固有の接続情報を取得できます。
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

