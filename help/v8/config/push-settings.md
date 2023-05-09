---
title: AEP SDK と Campaign の統合
description: Adobe Experience Platform Mobile SDK をアプリと統合する方法について説明します
version: v8
feature: Push
role: Admin, Developer
level: Intermediate, Experienced
hide: true
hidefromtoc: true
source-git-commit: e3ea361cc486096fe6c19ac469e8a71b636371ac
workflow-type: tm+mt
source-wordcount: '1263'
ht-degree: 2%

---


# AEP SDK +キャンペーン：プッシュ通知チャネルの設定 {#push-notification-configuration}

Adobe Campaignでプッシュ通知の送信を開始する前に、モバイルアプリおよびAdobe Experience Platformのタグに対して設定と統合がおこなわれていることを確認する必要があります。...........


## 開始する前に {#before-starting}

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

### モバイルアプリをAdobe Experience Platform SDK と統合する {#integrate-mobile-app}

Adobe Experience Platform Mobile SDK は、Android およびiOS互換の SDK を介して、モバイル用のクライアント側統合 API を提供します。 フォロー [Adobe Experience Platform Mobile SDK ドキュメント](https://developer.adobe.com/client-sdks/documentation/getting-started/){target="_blank"} をクリックして、アプリでAdobe Experience Platform Mobile SDK を設定します。

この作業が終わるまでに、でモバイルプロパティも作成および設定されているはずです。 [!DNL Adobe Experience Platform Data Collection]. 通常、管理するモバイルアプリケーションごとにモバイルプロパティを作成します。 でモバイルプロパティを作成および設定する方法を説明します。 [Adobe Experience Platform Mobile SDK ドキュメント](https://developer.adobe.com/client-sdks/documentation/getting-started/create-a-mobile-property/){target="_blank"}.


## 手順 1:Adobe Experience Platform Data Collection にアプリのプッシュ資格情報を追加する {#push-credentials}

適切なユーザー権限を付与した後、次に、Adobe Experience Platformデータ収集にモバイルアプリケーションプッシュ資格情報を追加する必要があります。

モバイルアプリのプッシュ証明書の登録は、Adobeが自分に代わってプッシュ通知を送信することを許可するために必要です。 以下に説明する手順を参照してください。

1. 送信者 [!DNL Adobe Experience Platform Data Collection]を参照し、 **[!UICONTROL アプリのサーフェス]** をクリックします。

1. クリック **[!UICONTROL アプリサーフェスを作成]** 新しい設定を作成します。

1. を入力します。 **[!UICONTROL 名前]** を設定します。

1. 送信者 **[!UICONTROL モバイルアプリケーション設定]**、「オペレーショナルシステム」を選択します。

   * **iOS の場合**

      1. モバイルアプリを入力 **バンドル ID** 内 **[!UICONTROL アプリ ID (iOS Bundle ID)]** フィールドに入力します。 アプリバンドル ID は、 **一般** のプライマリターゲットのタブ **XCode**.

      1. 電源を入れた **[!UICONTROL プッシュ認証情報]** ボタンをクリックして、資格情報を追加します。

      1. .p8 Apple Push Notification Authentication Key ファイルをドラッグ&amp;ドロップします。 このキーは、 **証明書**, **識別子** および **プロファイル** ページ。

      1. 次を提供： **キー ID**. これは、p8 認証キーの作成時に割り当てられた 10 文字の文字列です。 これはの下にあります。 **キー** タブ **証明書**, **識別子** および **プロファイル** ページ。

      1. 次を提供： **チーム ID**. これは、「メンバーシップ」タブにある文字列値です。
   * **Android の場合**

      1. 次を提供： **[!UICONTROL アプリ ID （Android パッケージ名）]**:通常、パッケージ名は `build.gradle` ファイル。

      1. 電源を入れた **[!UICONTROL プッシュ認証情報]** ボタンをクリックして、資格情報を追加します。

      1. FCM プッシュ資格情報をドラッグ&amp;ドロップします。 プッシュ資格情報の取得方法の詳細については、を参照してください。 [Google Documentation](https://firebase.google.com/docs/admin/setup#initialize-sdk){target="_blank"}.



1. クリック **[!UICONTROL 保存]** をクリックして、アプリ設定を作成します。


## 手順 2:Adobe Experience Platform Data Collection でモバイルタグプロパティを設定する {#launch-property}

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


## 手順 3:モバイルプロパティでのAdobe Campaign拡張機能の設定 {#configure-extension}

この **Adobe Campaign Classic拡張機能** Adobe Experience Platform Mobile SDK の場合は、モバイルアプリに対するプッシュ通知を強化し、ユーザープッシュトークンを収集し、Adobe Experience Platform Services とのインタラクション測定を管理できます。

この拡張機能は、お使いの環境に事前にインストールされており、設定する必要があります。 モバイルタグプロパティの拡張機能を設定するには、次の手順に従います。

1. 前に作成したタグプロパティを開きます。
1. 左側のナビゲーションから、 **拡張機能**&#x200B;をクリックし、 **カタログ** タブをクリックします。 検索フィールドを使用して、 **Adobe Campaign Classic** 拡張子。
1. Campaign Classicカードで、 **インストール** 」ボタンをクリックします。
1. 設定を入力します。 [Adobe Experience Platform Mobile SDK ドキュメント](https://developer.adobe.com/client-sdks/documentation/adobe-campaign-classic/){target="_blank"}.

これで、アプリに Campaign を追加できます。詳しくは、  [Adobe Experience Platform Mobile SDK ドキュメント](https://developer.adobe.com/client-sdks/documentation/adobe-campaign-classic/#add-campaign-classic-to-your-app){target="_blank"}.

## 手順 4:Campaign でのモバイルサービスの設定{#push-service}

モバイルアプリがで設定されたら、 [!DNL Adobe Experience Platform Data Collection]からプッシュ通知を送信するには、2 つのサービス (iOSデバイス用、Android デバイス用 ) を作成する必要があります。 **[!DNL Adobe Campaign]**.

でiOSおよび Android のプッシュ通知用のサービスを作成および設定する方法について説明します。 [この節](../send/push.md#push-config).
