---
product: Adobe Campaign
title: Adobe Campaign を使用したプッシュ通知の送信
description: Campaign におけるプッシュ通知の概要
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: c6f1cfdec3d05a81f8885cc73b370723024f858f
workflow-type: tm+mt
source-wordcount: '649'
ht-degree: 67%

---

# プッシュ通知の作成と送信

モバイルアプリ配信を使用すると、iOS システムや Android システムに通知を送信できます。

Adobe Campaign でプッシュ通知を送信するには、次の操作を実行します。

1. Campaign の環境設定
1. 利用するモバイルアプリケーション用に、モバイルアプリタイプの情報サービスを作成します。
1. このサービスに、iOS バージョンと Android バージョンのアプリケーションを追加します。
1. iOS と Android の両方用に配信を作成します。

[!DNL :arrow_upper_right:]  [Campaign Classicv7のドキュメントでモバイルアプリの使用を開始する方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/about-mobile-app-channel.html?lang=ja)

## Adobe SDK との統合

### Campaign SDK の統合

Campaign SDK を使用すると、ご利用のモバイルアプリケーションを Adobe Campaign プラットフォームへと容易に統合できます。

[!DNL :arrow_upper_right:]  [Campaign Classicv7のドキュメントで、Campaign SDKをアプリと統合する方法を説明します](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/integrating-campaign-sdk-into-the-mobile-application.html?lang=ja#loading-campaign-sdk)

### Launch での Campaign 拡張機能の設定

Campaign Classic の拡張機能を利用すると、Adobe Experience Platform Launch SDK と Campaign を統合できます。

[!DNL :arrow_upper_right:] 詳しくは、 [AdobeMobile SDKのドキュメントを参照してください](https://aep-sdks.gitbook.io/docs/using-mobile-extensions/adobe-campaignclassic)

## Campaign でのアプリ設定

iOS アプリと Android アプリの設定は、Adobe Campaign で定義する必要があります。

[!DNL :arrow_upper_right:] iOSの設定ガイドラインについて詳しくは、 [Campaign Classicv7ドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application.html?lang=ja#sending-messages)

[!DNL :arrow_upper_right:] Androidの設定のガイドラインについて詳しくは、 [Campaign Classicv7ドキュメントを参照してください。](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application-android.html?lang=ja#sending-messages)

## 初めてのプッシュ通知の作成

ここでは、iOS および Android の通知の配信に固有な設定について説明します。

[!DNL :arrow_upper_right:] プッシュ通知を作成するすべての手順について詳しくは、 [Campaign Classicv7ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/creating-notifications.html?lang=ja#sending-notifications-on-ios)

>[!CAUTION]
>
>Campaign v8では、モバイル登録は&#x200B;**非同期**&#x200B;になりました。 [詳細情報](../dev/staging.md)

新しい配信を作成するには、「**[!UICONTROL キャンペーン]**」タブを参照し、「**[!UICONTROL 配信]**」をクリックして、既存の配信のリストの上にある「**[!UICONTROL 作成]**」ボタンをクリックします。

![](assets/delivery_step_1.png)

### iOS で通知を送信する {#sending-notifications-on-ios}

1. 「**[!UICONTROL iOS配信]**」配信テンプレートを選択し、「**[!UICONTROL 続行]**」をクリックします。

   ![](assets/push-template-ios.png)

1. 通知のターゲットを定義するには、**[!UICONTROL 宛先]**&#x200B;リンク／**[!UICONTROL 追加]**&#x200B;をクリックします。

   ![](assets/push-ios-select-target.png)

1. 「iOSモバイルアプリケーション(iPhone、iPad)]**の購読者」を選択し、モバイルアプリケーションに関連するサービスを選択してから、アプリケーションのiOSバージョンを選択します。**[!UICONTROL 

   ![](assets/push-ios-subscribers.png)

1. 通知タイプを選択します。**[!UICONTROL アラート]**、**[!UICONTROL バッジ]**、**[!UICONTROL アラートとバッジ]**&#x200B;または&#x200B;**[!UICONTROL サイレントプッシュ]**。

   ![](assets/push-ios-alert.png)

1. 「**[!UICONTROL タイトル]**」フィールドで、通知に表示するタイトルのラベルを入力します。

1. 選択した通知タイプに基づいて、**[!UICONTROL メッセージ]**&#x200B;と&#x200B;**[!UICONTROL バッジの値]**&#x200B;を入力します。

1. 「**[!UICONTROL アクションボタン]**」を使用すると、アラート通知に表示されるアクションボタンのラベルを定義できます（ペイロードの **action_loc_key** フィールド）。

1. 「**[!UICONTROL サウンドを再生]**」フィールドで、通知を受信したときにモバイル端末で再生されるサウンドを選択します。

1. 「**[!UICONTROL アプリケーション変数]**」フィールドで、それぞれの変数の値を入力します。例えば、ユーザーが通知を有効化したときに表示される特定のアプリケーション画面を設定できます。

1. 通知を設定したら、「**[!UICONTROL プレビュー]**」タブをクリックして通知をプレビューします。

   ![](assets/push-ios-preview.png)

### Android で通知を送信する {#sending-notifications-on-android}

1. 「**[!UICONTROL Android配信(android)]**」配信テンプレートを選択します。

   ![](assets/push-template-android.png)

1. 通知のターゲットを定義するには、**[!UICONTROL 宛先]**&#x200B;リンク／**[!UICONTROL 追加]**&#x200B;をクリックします。

   ![](assets/nmac_delivery_android_2.png)

1. 「**[!UICONTROL Android モバイルアプリケーションの購読者]**」を選択してモバイルアプリケーション（この場合は Neotrips）に関連するサービスを選択し、アプリケーションの Android バージョンを選択します。

   ![](assets/push-android-select-target.png)

1. 次に通知の内容を入力します。

   ![](assets/push-android-content.png)

1. **[!UICONTROL 顔文字を挿入]**&#x200B;アイコンをクリックして、プッシュ通知に顔文字を挿入します。

1. 「**[!UICONTROL アプリケーション変数]**」フィールドで、それぞれの変数の値を入力します。例えば、ユーザーが通知を有効化したときに表示される特定のアプリケーション画面を設定できます。

1. 通知を設定したら、「**[!UICONTROL プレビュー]**」タブをクリックして通知をプレビューします。

   ![](assets/push-android-preview.png)

## プッシュ通知のテスト、送信、監視

配達確認や最終配信を送信するには、E メール配信と同じプロセスを使用します。

メッセージを送信した後は、配信を監視およびトラッキングできます。