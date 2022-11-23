---
title: Campaign v8 の権限の概要
description: Campaign v8 で権限を定義する手順を説明します。
feature: Permissions
role: User, Admin
level: Beginner
exl-id: 3d61abac-03df-42d3-a950-37e41a5a7756
source-git-commit: b63dc1616bc7ce1387a7bd0590c289b59f11b33f
workflow-type: tm+mt
source-wordcount: '511'
ht-degree: 20%

---

# 権限の基本を学ぶ{#gs-permissions}

Adobe Campaignでは、ユーザーに割り当てる権限を定義および管理できます。 以下の操作は、それらの権利に基づいて承認または拒否されます。

* 特定の機能へのアクセス
* 特定のデータへのアクセス
* 特定のアクションへのアクセス（作成、変更、削除）

これらの権限は、オペレーターグループの権限、ネームド権限、フォルダーに対する権限を組み合わせることで定義されます。

Adobe Campaign では、ユーザーは&#x200B;**オペレーター**&#x200B;または&#x200B;**オペレーターグループ**&#x200B;です。オペレーターは、ログインしてアクションを実行する権限を持つ Adobe Campaign ユーザーです。ユーザーはAdmin Consoleで作成されます。 権限は、ユーザープロファイルまたはユーザーのグループに適用されます。 付与できる権限には次の 2 種類があります。

* グループを使用する場合は、権利の付与対象とするオペレーターのグループを定義し、オペレーターを 1 つまたは複数のグループに関連付けます。これにより、権利を再利用することや、複数のオペレーターに一貫性の高いプロファイルを設定することができます。また、ユーザープロファイルの管理やメンテナンスを容易におこなえます。
* ネームド権限は、ユーザーに直接割り当てることができます。場合によっては、グループ経由で割り当てられた権限を上書きする目的で割り当てることができます。

## 権限を付与するための主な手順{#key-steps-permissions}

製品管理者は、組織のユーザーに権限を付与できます。 権限は、Adobe Admin Consoleおよび Campaign クライアントコンソールを通じて付与されます。 ユーザーは、Adobe IDを使用してAdobe Campaignにログオンします。 でAdobe Campaignに接続する方法を説明します。 [このページ](connect.md).

主な手順は次のとおりです。

* **手順 1**:オペレーターグループを定義し、Campaign クライアントコンソールで権限を割り当てます。 [詳細情報](manage-permissions.md#create-product-profile)。
組み込みのオペレーターグループを使用して開始することもできます。 これらのデフォルトのグループとその権限は、 [この節](manage-permissions.md#ootb-productprofiles).
* **手順 2**:これらのグループと一致するAdmin Consoleで製品プロファイルを作成します。 [詳細情報](manage-permissions.md#create-product-profile)。
組み込みの製品プロファイルを使用して、まずを使用できます。 [詳細情報](manage-permissions.md#ootb-productprofiles)。
* **手順 3**:ユーザーを製品で作成し、Admin Consoleプロファイルに割り当てます。 [詳細情報](manage-permissions.md#add-users)。
* **手順 4** （オプション）:フォルダーに対する権限を割り当てます。 [詳細情報](manage-permissions.md#ootb-productprofiles)。

## Admin Console{#gs-admin-console}

Adobe Admin Consoleは、組織全体のAdobe使用権限を一元的に管理する場所です。 アクセスできるのは、製品管理者のみです。

「 」Admin Consoleを使用して、ユーザーの追加、製品プロファイルの作成および割り当てをおこないます（製品プロファイルはオペレーターの役割のグループです）。

でユーザーを追加する方法を説明します。 [このページ](manage-permissions.md#add-users).

## 製品プロファイルについて{#ootb-product-profiles}

製品プロファイルは、ユーザーに割り当てることができる製品およびサービスのグループです。 Adobe Experience Cloudでは、権限はユーザーではなく、製品のプロファイルに基づきます。 ただし、特定のユーザーに管理者権限を委任できます。

Admin Consoleで、各Adobe Experience Cloud **製品プロファイル** ( キャンペーンが **オペレーターグループ** Campaign クライアントコンソールの

で製品プロファイルを作成して割り当てる方法を説明します。 [このページ](manage-permissions.md#create-a-product-profile).

## キャンペーンネームド権限{#named-rights}

製品プロファイル（オペレーターグループ）のメンバーとして、ユーザーは「ネームド権限」と呼ばれる操作を実行する権限を持ち、データに対する読み取り/書き込みアクセス権を持ちます。 1 人のオペレーターは複数のオペレーターグループに所属でき、アクセス権限は追加的に付与されます。

ネームド権限の詳細については、 [この節](manage-permissions.md#use-named-rights).
