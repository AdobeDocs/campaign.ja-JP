---
title: Campaign v8 の権限の基本を学ぶ
description: Campaign v8 で権限を定義する手順を説明します
feature: Permissions
role: User, Admin
level: Beginner
exl-id: 3d61abac-03df-42d3-a950-37e41a5a7756
source-git-commit: b63dc1616bc7ce1387a7bd0590c289b59f11b33f
workflow-type: ht
source-wordcount: '511'
ht-degree: 100%

---

# 権限の基本を学ぶ{#gs-permissions}

Adobe Campaign では、ユーザーに割り当てる権限を定義し管理することができます。以下の操作は、それらの権限に基づいて承認または拒否されます。

* 特定の機能へのアクセス
* 特定のデータへのアクセス
* 特定のアクション（作成、変更、削除）へのアクセス

これらの権限は、オペレーターグループの権限、ネームド権限およびフォルダーに対する権限を組み合わせることで定義されます。

Adobe Campaign では、**オペレーター**&#x200B;および&#x200B;**オペレーターグループ**&#x200B;はユーザーの役割を表します。オペレーターは、ログインしてアクションを実行する権限を持つ Adobe Campaign ユーザーです。ユーザーは Admin Console で作成されます。権限は、ユーザープロファイルまたはユーザーグループに適用されます。付与できる権限には次の 2 種類があります。

* グループを使用する場合は、権利の付与対象とするオペレーターのグループを定義し、オペレーターを 1 つまたは複数のグループに関連付けます。これにより、権利を再利用することや、複数のオペレーターに一貫性の高いプロファイルを設定することができます。また、ユーザープロファイルの管理やメンテナンスも楽になります。
* ネームド権限をユーザーに直接割り当てて、場合によっては、グループを通じて割り当てられた権限をオーバーロードすることができます。

## 権限を付与するための主な手順{#key-steps-permissions}

製品管理者は、組織のユーザーに権限を付与できます。権限は、Adobe Admin Console と Campaign クライアントコンソールを通じて付与されます。ユーザーは、Adobe ID を使用して Adobe Campaign にログオンします。 Adobe Campaign に接続する方法については、[このページ](connect.md)を参照してください。

主な手順は次のとおりです。

* **手順 1**：Campaign クライアントコンソールで、オペレーターグループを定義して権限を割り当てます。[詳細情報](manage-permissions.md#create-product-profile)。
なお、手始めに、組み込みのオペレーターグループを使用することもできます。これらのデフォルトグループとその権限については、[この節](manage-permissions.md#ootb-productprofiles)を参照してください。
* **手順 2**：Admin Console で、これらのグループと一致する製品プロファイルを作成します。[詳細情報](manage-permissions.md#create-product-profile)。
手始めに、組み込みの製品プロファイルを使用することができます。[詳細情報](manage-permissions.md#ootb-productprofiles)。
* **手順 3**：Admin Console でユーザーを作成して、製品プロファイルに割り当てます。[詳細情報](manage-permissions.md#add-users)。
* **手順 4**（オプション）：フォルダーに対する権限を割り当てます。[詳細情報](manage-permissions.md#ootb-productprofiles)。

## Admin Console について{#gs-admin-console}

Adobe Admin Console は、組織全体のアドビ製品エンタイトルメントを一元的に管理する場所です。 これにアクセスできるのは、製品管理者のみです。

Admin Console を使用して、ユーザーの追加と製品プロファイル（オペレーターの役割のグループ）の作成および割り当てを行います。

ユーザーを追加する方法については、[このページ](manage-permissions.md#add-users)を参照してください。

## 製品プロファイルについて{#ootb-product-profiles}

製品プロファイルは、ユーザーに割り当てることができる製品とサービスのグループです。Adobe Experience Cloud では、権限は、ユーザーではなく製品のプロファイルに基づいています。ただし、特定のユーザーに管理者権限をデリゲートできます。

Admin Console では、Campaign の各 Adobe Experience Cloud **製品プロファイル**&#x200B;は、Campaign クライアントコンソールの&#x200B;**オペレータグループ**&#x200B;に関連付けられています。

製品プロファイルを作成して割り当てる方法については、[このページ](manage-permissions.md#create-a-product-profile)を参照してください。

## Campaign ネームド権限{#named-rights}

ユーザーは製品プロファイル（オペレーターグループ）のメンバーとして「ネームド権限」と呼ばれる操作を実行する権限を持ち、データに対する読み取り／書き込みアクセス権を持ちます。1 人のオペレーターは複数のオペレーターグループに所属でき、アクセス権限は追加的に付与されます。

ネームド権限について詳しくは、[この節](manage-permissions.md#use-named-rights)を参照してください。
