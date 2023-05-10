---
title: AEP SDK と Campaign の統合
description: Adobe Experience Platform Mobile SDK をアプリと統合する方法について説明します
version: v8
feature: Push
role: Admin, Developer
level: Intermediate, Experienced
hide: true
hidefromtoc: true
source-git-commit: 251ce05310f158b0f9ebccc94b42686f892338b1
workflow-type: tm+mt
source-wordcount: '1090'
ht-degree: 1%

---


# AEP SDK +キャンペーン：プッシュ通知チャネルの設定 {#push-notification-configuration}

Adobe Campaignでプッシュ通知の送信を開始する前に、モバイルアプリおよびAdobe Experience Platformのタグに設定と統合がおこなわれていることを確認する必要があります。

Adobe Experience Platform Mobile SDK は、Android およびiOS互換の SDK を介して、モバイル用のクライアント側統合 API を提供します。

アプリをAdobe Experience Platform Mobile SDK で設定するには、次の手順に従います。

1. チェック [前提条件](#before-starting)
1. の設定 [モバイルタグプロパティ](#launch-property) (Adobe Experience Platform Data Collection)
1. Adobe Experience Platform Mobile SDK の取得 [このページ](https://developer.adobe.com/client-sdks/documentation/getting-started/get-the-sdk/){target="_blank"}
1. （オプション）詳細に従って、ログとライフサイクル指標を有効にします。 [このページ](https://developer.adobe.com/client-sdks/documentation/getting-started/enable-debug-logging/){target="_blank"}
1. （オプション） [Adobe Experience Platform Assurance をアプリに適用](https://developer.adobe.com/client-sdks/documentation/getting-started/validate/){target="_blank"} 実装を検証するには、以下を実行します。
1. フォロー [Adobe Experience Platform Mobile SDK ドキュメント](https://developer.adobe.com/client-sdks/documentation/getting-started/){target="_blank"} をクリックして、アプリでAdobe Experience Platform Mobile SDK を設定します。
1. インストールと設定 [Adobe Campaign Extension](#configure-extension) モバイルプロパティ内
1. Adobe CampaignでのiOSおよび Android Mobile Services の設定の詳細 [このページ](../send/push.md#push-config).

この作業が終わるまでに、でモバイルプロパティも作成および設定されているはずです。 [!DNL Adobe Experience Platform Data Collection]. 通常、管理するモバイルアプリケーションごとにモバイルプロパティを作成します。 でモバイルプロパティを作成および設定する方法を説明します。 [Adobe Experience Platform Mobile SDK ドキュメント](https://developer.adobe.com/client-sdks/documentation/getting-started/create-a-mobile-property/){target="_blank"}.

## 前提条件 {#before-starting}

### 権限の設定 {#setup-permissions}

モバイルアプリケーションを作成する前に、まず、Adobe Experience Platformでタグに対する正しいユーザー権限があるか、割り当てられていることを確認する必要があります。 Adobe Experience Platformのタグに対するユーザー権限は、Adobe Admin Consoleを通じてユーザーに割り当てられます。 詳しくは、 [タグドキュメント](https://experienceleague.adobe.com/docs/experience-platform/tags/admin/user-permissions.html){target="_blank"}.

>[!CAUTION]
>
>プッシュ設定は、エキスパートユーザーが実行する必要があります。 実装モデルとこの実装に関わるペルソナに応じて、完全な権限を単一の製品プロファイルに割り当てるか、アプリ開発者と **Adobe Campaign** 管理者。

割り当てるには **プロパティ** および **会社** 権限には、次の手順に従います。

1. 次にアクセス： **[!DNL Admin Console]**.
1. 次の **[!UICONTROL 製品]** タブで、 **[!UICONTROL Adobe Experience Platform Data Collection]** カード。
1. 既存の **[!UICONTROL 製品プロファイル]** または、 **[!UICONTROL 新しいプロファイル]** 」ボタンをクリックします。 新しい **[!UICONTROL 新しいプロファイル]** 内 [Admin Console ドキュメント](https://experienceleague.adobe.com/docs/experience-platform/access-control/ui/create-profile.html#ui){target="_blank"}.
1. 次の **[!UICONTROL 権限]** タブ、選択 **[!UICONTROL プロパティ権限]**.
1. クリック **[!UICONTROL すべて追加]**. これにより、次の権限が製品プロファイルに追加されます。
   * **[!UICONTROL 承認]**
   * **[!UICONTROL 開発]**
   * **[!UICONTROL プロパティを編集]**
   * **[!UICONTROL 環境の管理]**
   * **[!UICONTROL 拡張機能の管理]**
   * **[!UICONTROL 公開]**

   これらの権限は、 Adobe Campaign拡張機能をインストールして公開し、でアプリのプロパティを公開するために必要です。 **Adobe Experience Platform Mobile SDK**.

1. 次に、 **[!UICONTROL 会社権限]** をクリックします。
1. 次の権限を追加します。

   * **[!UICONTROL アプリ設定を管理]**
   * **[!UICONTROL プロパティを管理]**

   モバイルアプリ開発者がでプッシュ資格情報を設定するには、これらの権限が必要です **Adobe Experience Platform Data Collection**.

1. 「**[!UICONTROL 保存]**」をクリックします。

これを割り当てるには **[!UICONTROL 製品プロファイル]** ユーザーに対して、次の手順に従います。

1. 次にアクセス： **[!DNL Admin Console]**.
1. 次の **[!UICONTROL 製品]** タブで、 **[!UICONTROL Adobe Experience Platform Data Collection]** カード。
1. 以前に設定したを選択 **[!UICONTROL 製品プロファイル]**.
1. 次の **[!UICONTROL ユーザー]** タブ、クリック **[!UICONTROL ユーザーを追加]**.
1. ユーザー名または電子メールアドレスを入力し、ユーザーを選択します。 次に、「 **[!UICONTROL 保存]**.

   >[!NOTE]
   >
   >ユーザーが以前に Admin Console で作成されていない場合は、 [ユーザードキュメントの追加](https://helpx.adobe.com/enterprise/using/manage-users-individually.html#add-users){target="_blank"}.

### アプリの設定 {#configure-app}

技術的な設定では、アプリ開発者とビジネス管理者の緊密な共同作業が必要です。 でプッシュ通知の送信を開始する前に [!DNL Adobe Campaign]の設定を定義する必要があります。 [!DNL Adobe Experience Platform Data Collection] モバイルアプリをAdobe Experience Platform Mobile SDK と統合します。

以下のリンクに記載されている実装手順に従います。

* の場合 **Apple iOS**:アプリをで APNs に登録する方法を説明します。 [Apple Documentation](https://developer.apple.com/documentation/usernotifications/registering_your_app_with_apns){target="_blank"}
* の場合 **Google Android**:Android で Firebase Cloud Messaging クライアントアプリを設定する方法については、 [Google Documentation](https://firebase.google.com/docs/cloud-messaging/android/client){target="_blank"}

<!--
## Add your app push credentials in Adobe Experience Platform Data Collection {#push-credentials}

After granting the correct user permissions, you now need to add your mobile application push credentials in Adobe Experience Platform Data Collection. 

The mobile app push credential registration is required to authorize Adobe to send push notifications on your behalf. Refer to the steps detailed below:

1. From [!DNL Adobe Experience Platform Data Collection], browse to **[!UICONTROL App Surfaces]** in the left rail.

1. Click **[!UICONTROL Create App Surface]** to create a new configuration.

1. Enter a **[!UICONTROL Name]** for the configuration.

1. From **[!UICONTROL Mobile Application Configuration]**, select the system and enter settings.

    * **For iOS**

        1. Enter the mobile app **Bundle Id** in the **[!UICONTROL App ID (iOS Bundle ID)]** field. The app Bundle ID can be found in the **General** tab of the primary target in **XCode**.
        
        1. Switched on the **[!UICONTROL Push Credentials]** button to add your credentials.
        
        1. Drag and drop your .p8 Apple Push Notification Authentication Key file. This key can be acquired from the **Certificates**, **Identifiers** and **Profiles** page.

        1. Provide the **Key ID**. This is a 10 character string assigned during the creation of p8 auth key. It can be found under **Keys** tab in **Certificates**, **Identifiers** and **Profiles** page.
        
        1. Provide the **Team ID**. This is a string value which can be found under the Membership tab.

    * **For Android**

        1. Provide the **[!UICONTROL App ID (Android package name)]**: usually the package name is the app id in your `build.gradle` file.

        1. Switched on the **[!UICONTROL Push Credentials]** button to add your credentials.

        1. Drag and drop the FCM push credentials. For more details on how to get the push credentials refer to [Google Documentation](https://firebase.google.com/docs/admin/setup#initialize-sdk){target="_blank"}.
    

1. Click **[!UICONTROL Save]** to create your app configuration.
-->

## Adobe Experience Platform Data Collection でモバイルタグプロパティを設定する {#launch-property}

モバイルプロパティを設定すると、モバイルアプリ開発者またはマーケターは、セッションタイムアウトや [!DNL Adobe Experience Platform] ターゲットにするサンドボックスと **[!UICONTROL Adobe Experience Platform Datasets]** を使用して、データの送信先のモバイル SDK を設定します。

の設定方法の詳細と手順については、 **モバイルプロパティ** 詳しくは、 [Adobe Experience Platform Mobile SDK ドキュメント](https://developer.adobe.com/client-sdks/documentation/getting-started/create-a-mobile-property/){target="_blank"}.

プッシュ通知を機能させるために必要な SDK を取得するには、Android とiOSの両方に対して、次の SDK 拡張が必要です。

* **[!UICONTROL Mobile Core]** （自動的にインストール）
* **[!UICONTROL プロファイル]** （自動的にインストール）
* **[!UICONTROL Adobe Experience Platform Edge]**
* **[!UICONTROL Adobe Experience Platform Assurance]**（オプション）ただし、モバイル実装のデバッグに推奨されます。

詳細情報： [!DNL Adobe Experience Platform Data Collection] タグ [Adobe Experience Platformドキュメント](https://experienceleague.adobe.com/docs/platform-learn/implement-mobile-sdk/initial-configuration/configure-tags.html){target="_blank"}.

作成したら、新しいタグプロパティを開き、ライブラリを作成します。 手順は次のとおりです。

1. 参照先 **公開フロー** 左側のナビゲーションで「 」を選択し、 **ライブラリを追加**.
1. ライブラリの名前を入力し、環境を選択します。
1. 選択 **変更されたリソースをすべて追加**、および **開発用に保存およびビルド**.
1. 最後に、このライブラリを **作業ライブラリを選択** 」ボタンをクリックします。


## モバイルプロパティでのAdobe Campaign拡張機能の設定 {#configure-extension}

この **Adobe Campaign Classic拡張機能** Adobe Experience Platform Mobile SDK の場合は、モバイルアプリに対するプッシュ通知を強化し、ユーザープッシュトークンを収集し、Adobe Experience Platform Services とのインタラクション測定を管理できます。

この拡張機能は、お使いの環境に事前にインストールされており、設定する必要があります。 モバイルタグプロパティの拡張機能を設定するには、次の手順に従います。

1. 前に作成したタグプロパティを開きます。
1. 左側のナビゲーションから、 **拡張機能**&#x200B;をクリックし、 **カタログ** タブをクリックします。 検索フィールドを使用して、 **Adobe Campaign Classic** 拡張子。
1. Campaign Classicカードで、 **インストール** 」ボタンをクリックします。
1. 設定を入力します。 [Adobe Experience Platform Mobile SDK ドキュメント](https://developer.adobe.com/client-sdks/documentation/adobe-campaign-classic/){target="_blank"}.

これで、アプリに Campaign を追加できます。詳しくは、  [Adobe Experience Platform Mobile SDK ドキュメント](https://developer.adobe.com/client-sdks/documentation/adobe-campaign-classic/#add-campaign-classic-to-your-app){target="_blank"}.

## Campaign でのモバイルサービスの設定{#push-service}

モバイルアプリがで設定されたら、 [!DNL Adobe Experience Platform Data Collection]からプッシュ通知を送信するには、2 つのサービス (iOSデバイス用、Android デバイス用 ) を作成する必要があります。 **[!DNL Adobe Campaign]**.

でiOSおよび Android のプッシュ通知用のサービスを作成および設定する方法について説明します。 [この節](../send/push.md#push-config).
