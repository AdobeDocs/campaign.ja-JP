---
title: Campaign トランザクションメッセージ
description: トランザクションメッセージの概要
feature: Transactional Messaging
role: User
level: Beginner, Intermediate
exl-id: 06fdb279-3776-433f-8d27-33d016473dee
source-git-commit: 253f3be945cbfa304fa7342c68f0c73b079e2870
workflow-type: ht
source-wordcount: '458'
ht-degree: 100%

---

# トランザクションメッセージの概要{#send-transactional-messages}

トランザクションメッセージ（Message Center）は、トリガーメッセージを管理するために設計されたキャンペーンモジュールです。これらの通知は、情報システムからトリガーされたイベントから生成されます。例えば、請求書、注文確認、出荷確認、パスワード変更、製品入手不可通知、アカウントステートメント、web サイトアカウント作成などがあります。

>[!NOTE]
>
>Managed Cloud Services のユーザーとして Campaign トランザクションメッセージをお使いの環境に設定する場合は、[アドビにお問い合わせ](../start/campaign-faq.md#support){target="_blank"}ください。

トランザクションメッセージは、次の送信に使用します。

* 通知（注文確認やパスワードのリセットなど）
* 個々の顧客のアクションに対するリアルタイムでの応答
* 宣伝以外のコンテンツ

トランザクションメッセージの設定について詳しくは、[この節](../config/transactional-msg-settings.md)を参照してください。

トランザクションメッセージのアーキテクチャについては、[このページ](../architecture/architecture.md#transac-msg-archi)を参照してください。

## トランザクションメッセージの動作原理 {#transactional-messaging-operating-principle}

Adobe Campaign のトランザクションメッセージモジュールは情報システムに組み込まれ、システムはパーソナライズされたトランザクションメッセージに変換するイベントを返します。これらのメッセージはメール、SMS、プッシュ通知などを介して、個別に送信することも、まとめて送信することもできます。

例えば、顧客が製品を購入できる ｗeb サイトを持つ会社の例で考えてみます。

Adobe Campaign を使用すると、買い物かごに製品を追加した顧客に通知メールを送信できます。Web サイトを訪れた人が購入せずにサイトを離れると（キャンペーンイベントをトリガーする外部イベント）、買い物かごの放棄に伴うメールを自動的に送信できます（トランザクションメッセージ配信）。

これを実現する主な手順は、以下で説明します。

1. [イベントタイプの作成](#create-event-types)。
1. [メッセージテンプレートの作成とデザイン](transactional-template.md#create-message-template)。この手順で、イベントをメッセージにリンクします。
1. [メッセージのテスト](transactional-template.md#test-message-template)。
1. [メッセージテンプレートのパブリッシュ](transactional-template.md#publish-message-template)。

トランザクションメッセージテンプレートを設計して公開すると、対応するイベントがトリガーされた場合、関連するデータは PushEvent および PushEvents [SOAP メソッド](../send/event-description.md)を介して Campaign に送信され、ターゲットの受信者に配信が送られます。

## イベントタイプの作成 {#create-event-types}

各イベントをパーソナライズされたメッセージに変更するには、まず&#x200B;**イベントタイプ**&#x200B;を作成します。

[メッセージテンプレートを作成](#create-message-template)する際、送信するメッセージに一致するイベントのタイプを選択します。

>[!CAUTION]
>
>イベントタイプをメッセージテンプレートで使用するには、事前に作成しておく必要があります。

Adobe Campaign で処理されるイベントタイプを作成するには、次の手順に従います。

1. Campaign エクスプローラーの&#x200B;**[!UICONTROL 管理／プラットフォーム／列挙]**&#x200B;フォルダーを参照します。
1. リストから&#x200B;**[!UICONTROL イベントタイプ]**&#x200B;列挙を選択します。
1. 「**[!UICONTROL 追加]**」をクリックして、列挙の値を作成します。注文の確認、パスワードの変更、注文の配送変更などがイベントタイプとして考えられます。

   ![](assets/messagecenter_eventtype_enum_001.png)

   >[!CAUTION]
   >
   >各イベントタイプは、**[!UICONTROL イベントタイプ]**&#x200B;の列挙の値と一致する必要があります。

1. 項目別リストの値を作成した後、作成事項を反映させるためには、一旦インスタンスからログオフし再度ログオンします。

>[!NOTE]
>
>列挙について詳しくは、[このページ](../../v8/config/ui-settings.md#enumerations)を参照してください。

次の手順では、[トランザクションメッセージ用のテンプレートを作成して公開](transactional-template.md)する方法について説明します。
