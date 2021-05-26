---
solution: Campaign v8
product: Adobe Campaign
title: Campaignのアーキテクチャの概要
description: Campaignのアーキテクチャの概要
feature: 概要
role: Data Engineer
level: Beginner
exl-id: 562b24c3-6bea-447f-b74c-187ab77ae78f
source-git-commit: 0dae3431ac1ddc840244d7df4929b0c949f8011f
workflow-type: tm+mt
source-wordcount: '631'
ht-degree: 6%

---

# Campaignアーキテクチャの概要{#gs-ac-archi}

## 環境

Campaignは、個々のインスタンスとして使用でき、各インスタンスは完全なCampaign環境を表します。

Campaign環境では、次の3種類の環境をCloud Serviceできます。

* **実稼動環境**:実務担当者向けのアプリケーションをホストします。

* **ステージ環境**:アプリケーションに対する変更が実稼動環境にプッシュされる前に、様々なパフォーマンステストと品質テストに使用されます。

* **開発環境**:を使用すると、開発者は、ステージ環境と実稼動環境と同じランタイム条件でCampaignを実装できます。

ある環境から別の環境にパッケージをエクスポートおよびインポートできます。

:[!DNL :arrow_upper_right:]:[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/administration-basics/working-with-data-packages.html)のパッケージの詳細

## ミッドソーシングへのデプロイメント{#mid-sourcing-deployment}

サーバーとプロセス間の一般的な通信は、次のスキーマに従って実行されます。

![](assets/architecture.png)

* 実行およびバウンス管理モジュールは、インスタンスでは無効になっています。

* アプリケーションは、SOAP呼び出し（HTTPまたはHTTPS経由）を使用して駆動されるリモートの「ミッドソース」サーバーでメッセージ実行を実行するように設定されます。

>[!NOTE]
>
> Campaign v8はハイブリッドアーキテクチャに依存しています。 Campaign Classicv7から移行する場合は、すべての配信がミッドソーシングサーバーを経由することに注意してください。
> その結果、Campaign v8では内部ルーティングが&#x200B;**不可能**&#x200B;で、それに応じて外部アカウントが無効になります。

## Message Centerのアーキテクチャ{#transac-msg-archi}

トランザクションメッセージ(Message Center)は、トリガーメッセージを管理するために設計されたCampaignモジュールです。

[!DNL :bulb:] トランザクションメッセージの送信方法について [は、この節](../send/transactional.md)を参照してください。

Webサイトでの顧客のアクションに応じて、イベントがREST APIを介してCampaignに送信され、メッセージテンプレートにAPI呼び出しを介して提供される情報やデータが入力され、トランザクションメッセージがリアルタイムで顧客に送信されます。 これらのメッセージは、個々に、またはまとめて、E メール、SMS またはプッシュ通知経由で送信することができます。

この特定のアーキテクチャでは、高可用性と負荷管理を確保するために、実行セルがコントロールインスタンスから分離されます。

* **コントロールインスタンス**（またはマーケティングインスタンス）は、メッセージテンプレートの作成、設定、パブリッシュをおこなうために、マーケターやITチームが使用します。 また、このインスタンスは、イベントの監視と履歴を一元化します。

   [!DNL :bulb:] メッセージテンプレートの作成と公開の方法については、 [この節](../send/transactional.md)を参照してください。

* **実行インスタンス**&#x200B;は、受信イベント（例えば、パスワードのリセットやWebサイトからの注文）を取得し、パーソナライズされたメッセージを送信します。 ロードバランサーを介してメッセージを処理する実行インスタンスが複数あり、処理されるイベント数をスケールして最大限の可用性を実現できます。

>[!CAUTION]
>
>コントロールインスタンスおよび実行インスタンスは、異なるマシンにインストールする必要があります。同じ Campaign インスタンスを共有できなくなります。

![](assets/messagecenter_diagram.png)

:[!DNL :arrow_upper_right:]:Message Centerのアーキテクチャについては、[Campaign Classicv7のドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/introduction/transactional-messaging-architecture.html?lang=en#transactional-messaging)を参照してください。

### 認証

これらの機能を使用するには、Adobe Campaignユーザーはコントロールインスタンスにログオンして、トランザクションメッセージテンプレートを作成し、シードリストを使用してメッセージのプレビューを生成し、レポートを表示し、実行インスタンスを監視します。

* 単一実行インスタンス
AdobeがホストするMessage Center実行インスタンスとやり取りする際、外部システムは、提供されたアカウントのログインとパスワードを使用してセッションログオンメソッドに対するapi呼び出しをおこなうことで、最初にセッショントークン（デフォルトでは24時間で期限切れ）を取得できます。
次に、上記の呼び出しに応答して実行インスタンスが提供するsessionTokenを使用すると、外部アプリケーションはSOAP api呼び出し（rtEventsまたはbatchEvents）を実行して通信を送信できます。各SOAP呼び出しにアカウントのログインとパスワードを含める必要はありません。

* 複数の実行インスタンス
ロードバランサーの背後に複数の実行インスタンスがあるマルチセル実行アーキテクチャでは、外部アプリケーションによって呼び出されるログオンメソッドは、ロードバランサーを経由します。そのため、トークンベースの認証は使用できません。 ユーザー/パスワードベースの認証が必要です。

:[!DNL :arrow_upper_right:]:トランザクションメッセージイベントについて詳しくは、[Campaign Classicv7ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/transactional-messaging/introduction/event-description.html?lang=en#about-transactional-messaging-datamodel)を参照してください。