---
title: Campaign オペレーターをAdobeIdentity Managementシステム (IMS) に移行する
description: Campaign オペレーターをAdobeIdentity Managementシステム (IMS) に移行する方法を説明します
hide: true
hidefromtoc: true
source-git-commit: 53412ab167721c8a8f9d84e07112b0f410d4785d
workflow-type: tm+mt
source-wordcount: '1094'
ht-degree: 10%

---

# Campaign オペレーターをAdobeIdentity Managementシステム (IMS) に移行する {#migrate-users-to-ims}

Campaign v8.6 以降、Campaign v8 への認証プロセスが改善されています。すべての演算子が [AdobeIdentity Managementシステム (IMS)](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"} **のみ** をクリックして、Campaign に接続します。 ユーザー/パスワード（ネイティブ認証）との接続は許可されなくなります。 Adobeは、Campaign v8.6 にスムーズに移行できるよう、Campaign v8.5.2 でこの移行を実行することをお勧めします。

Campaign Classicv7 Managed Services のお客様は、Campaign v8 に移行する場合も、この手順が適用されます。

この記事では、Adobe Developer Console でテクニカルオペレーターをテクニカルアカウントに移行するために必要な手順について詳しく説明します。

## 変更点{#move-to-ims-changes}

Campaign v8 では、すべての通常のユーザーは、既にAdobe IDを使用してAdobeIdentity Management System(IMS) を通じてAdobe Campaignクライアントコンソールに接続している必要があります。 ただし、一部の古い設定では、ユーザー/パスワード接続は引き続き使用できました。 **Campaign v8.6 以降では、この機能は使用できなくなります。**

さらに、セキュリティと認証プロセスを強化する取り組みの一環として、Adobe Campaignクライアントアプリケーションは、IMS テクニカルアカウントトークンを使用して Campaign API を直接呼び出すようになりました。 技術オペレーターの移行について詳しくは、 [このページ](ims-migration.md).

この変更は、Campaign v8.5.2 以降に適用され、Campaign v8.6 以降は&#x200B;**必須**&#x200B;となります。

## 影響の有無{#migrate-ims-impacts}

組織内のオペレーターが、ログイン/パスワード ( ネイティブ認証など ) の権限を持つ場合は影響が生じ、以下に示すように、これらのオペレーターをAdobe IMSに移行する必要があります。

への移行 [AdobeIdentity Managementシステム (IMS)](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"} は、他のAdobe Experience Cloudソリューションやアプリのほとんどが既に IMS 上にあるので、環境のセキュリティと標準化を確実におこなうためのセキュリティ上の不可欠な要素です。

## 移行方法{#ims-migration-procedure}

### 前提条件{#ims-migration-prerequisites}

Adobeの技術チームが既存のオペレーターグループとネームド権限をAdobeIdentity Management System(IMS) に移行できるように、移行プロセスを開始する前に、Adobe担当者（移行マネージャー）に問い合わせる必要があります。

### 主な手順 {#ims-migration-steps}

この移行の主な手順を次に示します。

1. Adobeは、環境を Campaign v8.5.2 にアップグレードします。
1. アップグレード後も、ネイティブユーザーとして、または IMS を使用して、両方の方法で新しいユーザーを作成できます。
1. Campaign の内部キャンペーン管理者は、Campaign クライアントコンソールですべてのネイティブユーザーに一意の E メールを追加し、追加が完了したらAdobe移行マネージャーに確認する必要があります。 この手順について詳しくは、 [この節](#ims-migration-id).
1. Adobeと連携して、Adobeが技術以外のユーザー（オペレーター）や製品プロファイルに対して自動移行を実行する日付を保護します。 この手順では、1 時間の時間枠を必要とします。どのインスタンスに対してもダウンタイムは発生しません。
1. 内部キャンペーン管理者が変更を検証し、承認を提供します。 この移行後は、ログインとパスワードによる認証を行うオペレーターを作成しなくなります。

技術オペレーターをAdobe Developer Console に移行できるようになりました。詳しくは、 [このテクニカルノート](ims-migration.md). この手順は、Campaign API を使用する場合は必須です。

この移行が完了したら、Adobe移行マネージャに確認します。Adobeが移行を完了とマークし、新しいネイティブユーザーの作成とネイティブユーザーログインをブロックします。 その後、環境を保護し、標準化します。

## よくある質問 {#ims-migration-faq}

### 移行はいつ開始できますか？ {#ims-migration-start}

への移行の前提条件 [AdobeIdentity Managementシステム (IMS)](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"} は、環境を Campaign v8.5.2 にアップグレードするためのものです。

Campaign v8.5.2 にアップグレードした後は、ステージ環境で IMS の移行を開始し、実稼動環境に合わせて計画できます。

### Campaign v8.5.2 にビルドをアップグレードすると、どうなりますか？ {#ims-migration-after-upgrade}

環境を Campaign v8.5.2 にアップグレードした後、 [AdobeIdentity Managementシステム (IMS)](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"}.

IMS の移行が完了するまで、新しいネイティブユーザーを作成できます。

### 移行はいつ完了しますか？ {#ims-migration-end}

AdobeIdentity Management System(IMS) へのエンドユーザーの移行と技術的なユーザーの移行が完了したら、Adobeが移行を完了とマークし、クライアントコンソールからのユーザー作成をブロックし、ネイティブユーザーログインを無効にできるよう、Adobe移行マネージャーに連絡する必要があります。


### 移行後にユーザーを作成する方法は？ {#ims-migration-native}

完全な IMS の移行が完了すると、Adobeは制限を適用し、新しいネイティブユーザーの作成をブロックします。 これらの制限は、IMS の移行が完了するまで適用されません。

新規ユーザーの場合：新規ネイティブユーザーの作成は、最初から許可されていません。

Campaign 管理者は、Adobe Admin Consoleと Campaign クライアントコンソールを使用して、組織のユーザーに権限を付与できます。 ユーザーは、Adobe ID を使用して Adobe Campaign にログオンします。 詳しくは、 [このドキュメント](../../v8/start/gs-permissions.md).

### 現在のネイティブユーザー向けに E メールを追加する方法は？ {#ims-migration-id}

Campaign 管理者は、クライアントコンソールからすべてのネイティブユーザーに電子メール ID を追加する必要があります。 手順は次のとおりです。

1. クライアントコンソールに接続し、を参照します。 **管理/アクセス管理/オペレーター**.
1. 更新する演算子をオペレーターリストで選択します。
1. オペレーターの E メールアドレスを **連絡先** のセクションに含める必要があります。
1. 変更内容を保存します。

また、CSV ファイルをインポートして、すべてのオペレーターのプロファイルを E メールで更新することもできます。


### IMS を使用して Campaign にログインする方法は？ {#ims-migration-log}

Campaign とAdobe IDの連携方法については、 [この節](../../v8/start/connect.md).

### この移行中にダウンタイムは発生しますか？ {#ims-migration-downtime}

Adobeを完了するには（ユーザーと製品プロファイルを移行する）、移行に 1 時間の時間が必要です。どのインスタンス（ワークフローなど）にもダウンタイムは発生しません。

この期間には、すべての Campaign ユーザーがログオフし、IMS への移行が完了したら、Adobe IDに再度ログオフする必要があります。

### IMS ユーザーの移行中にログインしたユーザーはどうなりますか？ {#ims-migration-log-off}

Adobeでは、移行期間中にすべてのユーザーをログオフすることを強くお勧めします。

### 組織内のユーザーは既に IMS を使用していますが、IMS の移行を実行する必要がありますか？{#ims-migration-needed}

この移行には、エンドユーザーの移行と、技術ユーザーの移行（カスタムコードの API で使用）の 2 つの側面があります。

すべてのユーザー（Campaign オペレーター）が IMS を使用している場合、この移行を実行する必要はありません。 ただし、カスタムコードで使用していた技術ユーザーを移行する必要があります。 詳しくは、[このページ](ims-migration.md)を参照してください。

この移行が完了したら、Adobeが移行を最終処理できるよう、Adobe移行マネージャに問い合わせる必要があります。

## 参考になるリンク {#ims-useful-links}

* [Adobe Developer Console へのテクニカルユーザーの移行](ims-migration.md)
* [Adobe Campaign v8 への接続方法](../../v8/start/connect.md)
* [Adobe Campaign v8 でのアクセスと権限](../../v8/start/gs-permissions.md)
* [Adobe Campaign v8 リリースノート](../../v8/start/release-notes.md)
* [AdobeIdentity Managementシステム (IMS) とは](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"}

