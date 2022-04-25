---
title: Campaign とMicrosoft Dynamics の使用
description: Campaign とMicrosoft Dynamics の使用方法を説明します
feature: Overview
role: Data Engineer
level: Beginner
exl-id: 4f9e8f74-27dc-482c-a83c-25623b53560f
source-git-commit: 495eff0f3b5926c8f91939bcb296bc36086cb8cd
workflow-type: tm+mt
source-wordcount: '1399'
ht-degree: 39%

---

# Campaign とMicrosoft Dynamics 365 の連携{#crm-ms-dynamics}

クロスチャネル通信で CRM データをアクティブ化します。連絡先を渡す方法を学ぶ **Microsoft Dynamics 365** Adobe Campaignに移動し、Adobe CampaignからMicrosoft Dynamics 365 に戻ったキャンペーンパフォーマンスデータ（送信、開封、クリックおよびバウンス）を共有します。

設定が完了したら、専用のワークフローアクティビティでシステム間のデータ同期を実行します。 [詳細情報](crm-data-sync.md)。

>[!NOTE]
>
>サポートされるMicrosoft Dynamics バージョンについて詳しくは、 Campaign を参照してください。 [互換性マトリックス](../start/compatibility-matrix.md).

次の手順に従って、Microsoft Dynamics 365 データをAdobe Campaignにインポートおよびエクスポートするための専用の外部アカウントを設定します。

システムごとに、管理者がこれらの手順を実行する必要があります。

>[!CAUTION]
> このドキュメントの手順では、権限の割り当てや管理者アクセスに関連する統合/登録の作成手順を説明します。 これらの手順を実行する前に会社のポリシーに従い、慎重に実行する必要があるのは、お客様の責任です。

## Microsoft Dynamics 365 の設定 {#config-crm-microsoft}

経由でMicrosoft Dynamics 365 をAdobe Campaignと連携させるには **Web API**、にログオンします。 [Microsoft Azure Directory](https://portal.azure.com) の使用 **グローバル管理者** 資格情報を取得し、次の手順に従います。

1. Dynamics 365 アプリケーション（クライアント） ID を取得します。 [詳細情報](#get-client-id-microsoft)
1. Microsoft Dynamics 証明書キー識別子およびキー ID の生成. [詳細情報](#config-certificate-key-id)
1. 権限の設定. [詳細情報](#config-permissions-microsoft)
1. アプリユーザーの作成. [詳細情報](#create-app-user-microsoft)
1. 秘密鍵のエンコード. [詳細情報](#configure-acc-for-microsoftt)


### Dynamics 365 クライアント ID の取得 {#get-client-id-microsoft}

アプリケーション（クライアント） ID を取得するには、Azure Active Directory にアプリを登録する必要があります。

1. 参照先 **Azure Active Directory > アプリ登録**&#x200B;を選択し、 **新規登録**.
1. インスタンスの識別に役立つ一意の名前（例： ）を入力します。 **adobecampaign`<instance identifier>`**.

保存すると、Microsoft Azure Directory は一意の **アプリケーション（クライアント） ID** をアプリに追加します。 この ID は、後でAdobe Campaignで Dynamics 365 を設定する際に必要になります。

詳しくは、 [Microsoft Dynamics 365 ドキュメント](https://docs.microsoft.com/powerapps/developer/common-data-service/walkthrough-register-app-azure-active-directory).

### Microsoft Dynamics 証明書キー識別子およびキー ID の生成 {#config-certificate-key-id}

次の手順で **証明書キー識別子 (customKeyIdentifier)** そして **キー ID (keyId)**&#x200B;に設定する場合は、証明書をアップロードする必要があります。 証明書は、トークンのリクエスト時にアプリケーションの ID を証明するための秘密として使用できます。 公開鍵とも呼ばれます。

以下の手順に従います。

1. 参照先 **Azure Active Directory > アプリ登録** をクリックし、前に作成したアプリケーションを選択します。
1. 選択： **証明書と秘密鍵**.
1. 次の **証明書** 「 」タブで、「 」をクリックします。 **証明書をアップロード**
1. 公開証明書をアップロードします。
1. 次を参照： **マニフェスト** リンクをクリックして **証明書キー識別子 (customKeyIdentifier)** そして **キー ID (keyId)**.

この **証明書キー識別子 (customKeyIdentifier)** そして **キー ID (keyId)** 証明書を使用してMicrosoft Dynamics 365 CRM 外部アカウントを設定するには、Campaign でが必要です **[!UICONTROL CRM O-Auth タイプ]**.

+++ 公開証明書の生成方法

証明書を生成するには、OpenSSL を使用できます。

例：

```
- openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout '<'private key name'>' -out '<'public certificate name'>
```

>[!NOTE]
>
>コードサンプルの `-days 365` で日数を変更することで、証明書の有効期間を延長することができます。

次に、Base64 で証明書をエンコードする必要があります。 それには、Base64 エンコーダーを利用するか、Linux の場合はコマンドライン `base64 -w0 private.key` を使用します。

+++

### 権限の設定 {#config-permissions-microsoft}

**手順 1**：作成したアプリに&#x200B;**必要な権限**&#x200B;を設定する

1. **Azure Active Directory／アプリ登録**&#x200B;に移動し、以前に作成されたアプリケーションを選択します。
1. 左上の「**設定**」をクリックします。
1. 「**必要な権限**」で、「**追加**」と **API／Dynamics CRM オンライン**&#x200B;をクリックします。
1. 「 **選択**」をクリックし、「**組織ユーザーとして Dynamics 365 にアクセス**」チェックボックスを有効にして、「**選択**」をクリックします。
1. 次に、アプリから&#x200B;**管理**&#x200B;メニューの下の&#x200B;**マニフェスト**&#x200B;を選択します。
1. **マニフェスト**&#x200B;エディターで、`allowPublicClient` プロパティを `null` から `true` に設定し、「**保存**」をクリックします。

**手順 2**：管理者の同意を付与する

1. **Azure Active Directory／エンタープライズアプリケーション**&#x200B;に移動します。
1. テナント全体での管理者の同意を付与するアプリケーションを選択します。
1. 左側のペインメニューから、「**セキュリティ**」の下の「**権限**」を選択します。
1. 「**管理者の同意の付与**」をクリックします。

詳しくは、[Azure のドキュメント](https://docs.microsoft.com/azure/active-directory/manage-apps/grant-admin-consent#grant-admin-consent-from-the-azure-portal)を参照してください。

### アプリユーザーの作成 {#create-app-user-microsoft}

>[!NOTE]
>
> この手順は、**[!UICONTROL パスワード資格情報]**&#x200B;認証ではオプションです。

アプリユーザーとは、上で登録したアプリケーションで使用するユーザーです。 上記の登録済みのアプリを使用して Microsoft Dynamics に対しておこなった変更は、このユーザーを通じておこなわれます。

**手順 1**：Azure Active Directory に非インタラクティブユーザーを作成する

1. **Azure Active Directory／ユーザー**&#x200B;をクリックし、「**新しいユーザー**」をクリックします。
1. 使用する適切な名前を指定し、ユーザー名は E メールフォーマットにする必要があります。
1. **ディレクトリロール**&#x200B;の **Dynamics 365 管理者**&#x200B;を選択します。

**手順 2**：作成したユーザーに適切なライセンスを割り当てる

1. [Microsoft Azure](https://portal.azure.com) から、「**管理者アプリ**」をクリックします。
1. **ユーザー／アクティブなユーザー**&#x200B;に移動し、新しく作成したユーザーをクリックします。
1. 「**製品ライセンスを編集**」をクリックし、**Dynamics 365 顧客エンゲージメントプラン**&#x200B;を選択します。
1. 「**閉じる**」をクリックします。

**手順 3**：Dynamics CRM でアプリケーションユーザーを作成する

1. [Microsoft Azure](https://portal.azure.com) から、**設定／セキュリティ／ユーザー**&#x200B;に移動します。
1. ドロップダウンをクリックし、「 」を選択します。 **アプリユーザー**&#x200B;をクリックし、 **新規**.
1. 上の Active Directory に作成されたユーザーと同じユーザー名を使用します.
1. **アプリケーション ID** を[以前に作成したアプリケーション](#get-client-id-microsoft)に割り当てます。
1. 「**ロールの管理**」をクリックし、ユーザーに対して&#x200B;**システム管理者**&#x200B;ロールを選択します。

## Campaign の設定 {#configure-acc-for-microsoft}

### 接続の作成{#new-ms-dyn-external-account}

まず、Microsoft Dynamics 365 外部アカウントを作成する必要があります。

1. 次を参照： **[!UICONTROL 管理/プラットフォーム/外部アカウント]** Campaign エクスプローラーのノードに追加し、外部アカウントを作成します。
1. 選択 **[!UICONTROL Microsoft Dynamics CRM]** 外部アカウント **タイプ** 」セクションに入力します。
1. 認証方法を **[!UICONTROL CRM O-Auth タイプ]** 」ドロップダウンリストから選択できます。

   ![](assets/ms-dyn-external-account.png)

   1. Adobe Campaignと接続するためのMicrosoft Dynamics CRM 外部アカウントを設定するには **パスワード資格情報**、次の詳細を入力します。

      * **サーバー**：Microsoft CRM サーバーの URL。Microsoft CRM Server URL を見つけるには、Microsoft Dynamics CRM アカウントにアクセスし、 Dynamics 365 をクリックしてアプリを選択します。 次に、ブラウザーのアドレスバーにサーバー URL が表示されます ( 例： https://myserver.crm.dynamics.com/)。
      * **アカウント**:Microsoft CRM へのログインに使用するアカウント。
      * **パスワード**:Microsoft CRM へのログインに使用するアカウント。
      * **クライアント識別子**:コードを更新カテゴリ、クライアント ID フィールドのMicrosoft Azure 管理ポータルにあるアプリケーション（クライアント） ID。
      * **CRM バージョン**:Dynamics CRM 365 CRM バージョンを選択します。
   1. Microsoft Dynamics CRM 外部アカウントを、 **証明書**、次の詳細を入力します。

      * **サーバー**：Microsoft CRM サーバーの URL。Microsoft CRM Server URL を見つけるには、Microsoft Dynamics CRM アカウントにアクセスし、 Dynamics 365 をクリックしてアプリを選択します。 次に、ブラウザーのアドレスバーにサーバー URL が表示されます ( 例： https://myserver.crm.dynamics.com/)。
      * **秘密鍵**:エンコードされた base64 で秘密鍵をコピーして貼り付けます。詳しくは、 [この節](#config-certificate-key-id).
      * **キー ID**:キーは **マニフェスト** 」タブに表示されます。詳しくは、 [この節](#config-certificate-key-id).
      * **カスタムキー識別子**:で使用できる識別子 **マニフェスト** 」タブに表示されます。詳しくは、 [この節](#config-certificate-key-id).
      * **クライアント識別子**:Microsoft Azure 管理ポータルから見つかるアプリケーション（クライアント）ID( [この節](#get-client-id-microsoft).
      * **CRM バージョン**:Dynamics CRM 365 CRM バージョンを選択します。


1. を選択します。 **有効にする** 「 」オプションを使用して Campaign でアカウントを有効化します。

>[!NOTE]
>
>設定を承認するには、ログオフし、Adobe Campaignコンソールに戻ります。

### 同期するテーブルを選択{#ms-dyn-create-tables}

同期するテーブルを設定できるようになりました。

1. 次をクリック： **[!UICONTROL Microsoft CRM 設定ウィザード…]**.
1. 同期するテーブルを選択し、プロセスを開始します。
1. **[!UICONTROL 管理／設定／データスキーマ]**&#x200B;ノードで、Adobe Campaign で生成されたスキーマを確認します。

>[!NOTE]
>
>必ず、次の 2 つの URL をに追許可リスト加してください。サーバー URL および `login.microsoftonline.com`. これを実行するには、Adobe担当者にお問い合わせください。

## 列挙の同期{#sfdc-enum-sync}

スキーマを作成したら、Dynamics 365 からAdobe Campaignに列挙を自動的に同期できます。

1. 次からアシスタントを開く：  **[!UICONTROL 列挙を同期しています…]** リンク。
1. Dynamics 365 列挙に一致するAdobe Campaign列挙を選択します。
Adobe Campaign の列挙のすべての値を CRM の値に置き換えることができます。そのためには、**[!UICONTROL 置換]**&#x200B;列の「**[!UICONTROL はい]**」を選択します。
1. クリック **[!UICONTROL 次へ]** その後 **[!UICONTROL 開始]** ：列挙のインポートを開始します。
1. 次を参照： **[!UICONTROL 管理/プラットフォーム/列挙]** 読み込まれた値を確認するノード。

Adobe CampaignとMicrosoft Dynamics 365 が接続されました。 2 つのシステム間にデータの同期を設定できます。 

Adobe CampaignデータとMicrosoft CRM の間でデータを同期するには、ワークフローを作成し、 **[!UICONTROL CRM コネクタ]** アクティビティ。

データの同期について詳しくは、[このページ](crm-data-sync.md)を参照してください。

### サポートされているフィールドデータタイプ {#ms-dyn-supported-types}

Microsoft Dynamics 365 でサポートされる／サポートされない属性タイプは、次のとおりです。


| 属性タイプ | サポート対象 |
| --------------------------------------------------------------------------------- | --------- |
| 基本型：ブール、日時、小数、浮動小数点数、倍精度浮動小数点数、整数、bigint、文字列 | はい |
| 金額（倍精度浮動小数点数） | はい |
| memo、entityname、primarykey、uniqueidentifier（文字列） | はい |
| ステータス、ピックリスト（使用可能な値を列挙型に格納）、ステート（文字列） | はい |
| 所有者（文字列） | はい |
| ルックアップ（単一のエンティティ参照ルックアップのみ） | はい |
| 顧客 | いいえ |
| 関連 | いいえ |
| PartyList | いいえ |
| ManagedProperty | いいえ |
