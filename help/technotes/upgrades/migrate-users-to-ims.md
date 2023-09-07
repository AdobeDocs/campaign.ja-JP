---
title: Campaign オペレーターをAdobeIdentity Managementシステム (IMS) に移行する
description: Campaign オペレーターをAdobeIdentity Managementシステム (IMS) に移行する方法を説明します
hide: true
hidefromtoc: true
source-git-commit: 11128dcb26119383b86aa62561ec0ce1a3c138ad
workflow-type: tm+mt
source-wordcount: '792'
ht-degree: 10%

---

# Campaign オペレーターをAdobeIdentity Managementシステム (IMS) に移行する {#migrate-users-to-ims}

Campaign v8.6 以降、Campaign v8 への認証プロセスが改善されています。すべての演算子が [AdobeIdentity Managementシステム (IMS)](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"} Campaign に接続する場合のみ。 ユーザー/パスワードとの接続は、許可されなくなります。 Adobeは、Campaign v8.6 にスムーズに移行できるよう、Campaign v8.5.2 でこの移行を実行することをお勧めします。

この記事では、Adobe Developer Console でテクニカルオペレーターをテクニカルアカウントに移行するために必要な手順について詳しく説明します。

## 変更点{#move-to-ims-changes}

Campaign の正規Adobeは、すべて既に、Campaign Identity Management System(IMS) を通じて、Adobe IDを使用してAdobe Campaignクライアントコンソールに接続している必要があります。 ただし、一部の古い設定では、ユーザー/パスワード接続は引き続き使用できました。 Campaign v8.6 以降では、この機能は使用できなくなります。

さらに、セキュリティと認証プロセスを強化する取り組みの一環として、Adobe Campaignクライアントアプリケーションは、IMS テクニカルアカウントトークンを使用して Campaign API を直接呼び出すようになりました。 技術オペレーターの移行について詳しくは、 [このページ](ims-migration.md).

この変更は、Campaign v8.5.2 以降に適用され、Campaign v8.6 以降は&#x200B;**必須**&#x200B;となります。


## 影響の有無{#migrate-ims-impacts}

組織内のオペレーターが、ログイン/パスワード ( ネイティブ認証など ) の権限を持つ場合は影響が生じ、以下に示すように、これらのオペレーターをAdobe IMSに移行する必要があります。

他のAdobeDX アプリのほとんどが既に IMS 上にあるので、IMS の移行は、環境の安全性と標準化を図るためのセキュリティ上の必須事項です。

## 移行方法{#ims-migration-procedure}

### 前提条件{#ims-migration-prerequisites}

Adobeの技術チームが既存のオペレーターグループとネームド権限をAdobeIdentity Management System(IMS) に移行できるように、移行プロセスを開始する前に、Adobe担当者（移行マネージャー）に問い合わせる必要があります。

### 主な手順 {#ims-migration-steps}

この移行の主な手順を次に示します。

1. Adobeは、環境を Campaign v8.5.2 にアップグレードします。
1. アップグレード後も、ネイティブユーザーとして、または IMS を使用して、両方の方法で新しいユーザーを作成できます。
1. Campaign の内部キャンペーン管理者は、Campaign クライアントコンソールですべてのネイティブユーザーに一意の E メールを追加し、追加が完了したらAdobe移行マネージャーに確認する必要があります。 この手順について詳しくは、 [この節](#ims-migration-id).
1. Adobeと協力して、Adobeが自動化された非技術ユーザー（オペレーター）および製品プロファイル移行を実行する日付を保護します。 この手順では、1 時間の時間枠を必要とします。どのインスタンスに対してもダウンタイムは発生しません。
1. 内部キャンペーン管理者がこれらの変更を検証し、サインオフを行います。 この移行後は、ログインとパスワードによる認証を行うオペレーターを作成しなくなります。

以下に従って、IMS への技術ユーザーの移行を計画できるようになりました。 [このテクニカルノート](ims-migration.md)をクリックし、完了したら、Adobe移行マネージャに確定します。
Adobeは、移行が完了したとマークし、フラグをオンにして、新しいネイティブユーザーの作成とネイティブユーザーのログインをブロックします。

## よくある質問? {#ims-migration-faq}

### 移行はいつ開始できますか？ {#ims-migration-start}

AdobeIdentity Managementシステム (IMS) への移行の前提条件は、環境を Campaign v8.5.2 にアップグレードすることです。

Campaign v8.5.2 にアップグレードした後は、ステージ環境で IMS の移行を開始し、実稼動環境に合わせて計画できます。

### 8.5.2 ビルドのアップグレード後はどうなりますか？ {#ims-migration-after-upgrade}

環境を Campaign v8.5.2 にアップグレードした後、Identity Management System(IMS) のAdobeを実行できます。

IMS の移行が完了するまで、新しいネイティブユーザーを作成できます。

### 移行はいつ完了しますか？ {#ims-migration-end}

AdobeIdentity Management System(IMS) へのエンドユーザーの移行と技術的なユーザーの移行が完了したら、Adobeが移行完了とマークし、クライアントコンソールからのユーザー作成とネイティブユーザーログインをブロックできるよう、Adobe移行マネージャーに連絡する必要があります。


### 移行後にユーザーを作成する方法は？ {#ims-migration-native}

完全な IMS の移行が完了すると、Adobeは制限を適用し、新しいネイティブユーザーの作成をブロックします。 これらの制限は、IMS の移行が完了するまで適用されません。

新規ユーザーの場合：新規ネイティブユーザーの作成は、最初から許可されていません。

Campaign 管理者は、Adobe Admin Consoleと Campaign クライアントコンソールを使用して、組織のユーザーに権限を付与できます。 ユーザーは、Adobe ID を使用して Adobe Campaign にログオンします。 詳しくは、 [このドキュメント](../../v8/start/gs-permissions.md).

### 現在のネイティブユーザー向けに E メールを追加する方法は？ {#ims-migration-id}

Campaign 管理者は、クライアントコンソールからすべてのネイティブユーザーに電子メール ID を追加する必要があります。 手順は次のとおりです。

1. クライアントコンソールに接続し、を参照します。 **管理/アクセス管理/オペレーター**
1. 更新する演算子をオペレーターリストで選択します。
1. オペレーターの E メールアドレスを **連絡先** のセクションに含める必要があります。
1. 変更内容を保存します。


### IMS を使用して Campaign にログインする方法は？ {#ims-migration-log}

Campaign とAdobe IDの連携方法については、 [この節](../../v8/start/connect.md).