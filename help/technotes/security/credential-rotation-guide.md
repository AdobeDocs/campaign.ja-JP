---
product: campaign
title: テクニカルノート - Credential Rotation ガイド
description: Adobe Campaign テクニカルノート - Credential Rotation ガイド
hide: true
hidefromtoc: true
source-git-commit: 9d280a5c9d428a2795f2c893aad2d31ae2f122b9
workflow-type: tm+mt
source-wordcount: '324'
ht-degree: 1%

---

# テクニカルノート：Credential Rotation ガイド {#ac-customer-credentials}

セキュリティ侵害のリスクを軽減するために、資格情報を新しいセットに定期的に置き換える責任を負います。

## Adobe Campaign オプションの資格情報 {#ac-options-credentials}

Adobe Campaign エクスプローラーの **管理/プラットフォーム/オプション** ノードで、Adobe Campaign オプションを修正できます。 ここに資格情報を保存している場合は、必ずローテーションしてください。

![](assets/technote-2.png)

## 外部アカウントの資格情報 {#ac-accounts-credentials}

**管理/プラットフォーム/外部アカウント** ノードを使用すると、Adobe Campaignの外部アカウントを変更できます。

外部アカウントに保存されているすべての資格情報をローテーションしてください。

>[!CAUTION]
>
>Adobeが管理する資格情報を **変更しない**。 関連するサーバー `adobe` 持つ外部アカウントは変更しないでください。

![](assets/technote-1.png)

特定の技術 `mc*` （例：mc1、mc2 など）および `Interaction*` （例：interaction1、interaction2 など）演算子の場合、次の 2 つのアプローチのいずれかを使用できます。

1. Adobeは、このようなオペレーターの資格情報を変更して、あなたと共有できます。 これらのオペレーターの資格情報が更新されるまで、これらのオペレーターを使用するすべての統合は機能を停止します。

1. Adobeは、既存の各演算子に対応する **新規** 演算子を作成して、ユーザーと共有できます。 これらの新しい演算子に切り替えると、Adobeによって古い演算子がすべて削除されます。


## Mobile Services 秘密鍵/証明書  {#ac-key-credentials}

Mobile Services 関連の秘密鍵と証明書のローテーションについては、以下のリンクを参照してください。

* Androidについては、[ このドキュメント ](https://experienceleague.adobe.com/en/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application-android){target="_blank"} を参照してください。
**Android モバイルアプリケーションを作成する/API バージョンを設定する** セクションを参照します。

* iOSについては、[ このドキュメント ](https://experienceleague.adobe.com/en/docs/campaign-classic/using/sending-messages/sending-push-notifications/configure-the-mobile-app/configuring-the-mobile-application){target="_blank"} を参照してください。
**iOS モバイルアプリを作成/認証モード** セクションを参照します。

## GPG キー {#ac-gpg-credentials}

GPG キーを回転させるには、次の手順に従う必要があります。

1. 既存のキーを使用して既存のデータを復号化します。 [詳細情報](https://experienceleague.adobe.com/en/docs/control-panel/using/instances-settings/gpg-keys-management#decrypting-data){target="_blank"}

1. 新規 GPG キーペアを作成します。 GPG キー管理について詳しくは、[ このドキュメント ](https://experienceleague.adobe.com/en/docs/control-panel/using/instances-settings/gpg-keys-management#decrypting-data){target="_blank"} を参照してください。

1. すべてのワークフローで使用されている既存の GPG キーを、新しく作成したキーに置き換えます。

1. 既存の GPG キーを削除します。