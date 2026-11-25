---
title: Campaign v8 の権限の基本を学ぶ
description: Campaign v8 で権限を定義する手順を説明します
feature: Permissions
role: User, Admin
level: Beginner
exl-id: 3d61abac-03df-42d3-a950-37e41a5a7756
version: Campaign v8, Campaign Classic v7
TQID: 'https://experienceleague.adobe.com/0rN0mC1re8VV-oUscl9KqgnuEAxQ4wAnV5ubotmyZ3g'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
subfeature_v2:
  - id: e3988c18-3cfa-4f16-b812-ac2d2b1056fa
    internal-label: Permissions
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
source-git-commit: 6a24d7e3aeb7dad381478821a50835b985e34b62
workflow-type: tm+mt
source-wordcount: '517'
ht-degree: 83%
---
# 権限の基本を学ぶ{#gs-permissions}

Adobe Campaign では、ユーザーに割り当てる権限を定義し管理することができます。 以下の操作は、それらの権限に基づいて承認または拒否されます。

* 特定の機能へのアクセス
* 特定のデータへのアクセス
* 特定のアクション（作成、変更、削除）へのアクセス

これらの権限は、オペレーターグループの権限、ネームド権限およびフォルダーに対する権限を組み合わせることで定義されます。

Adobe Campaign では、**オペレーター**&#x200B;および&#x200B;**オペレーターグループ**&#x200B;はユーザーの役割を表します。 オペレーターは、ログインしてアクションを実行する権限を持つ Adobe Campaign ユーザーです。 ユーザーは Admin Console で作成されます。 権限は、ユーザープロファイルまたはユーザーグループに適用されます。 付与できる権限には次の 2 種類があります。

* グループを使用する場合は、権利の付与対象とするオペレーターのグループを定義し、オペレーターを 1 つまたは複数のグループに関連付けます。 これにより、権利を再利用することや、複数のオペレーターに一貫性の高いプロファイルを設定することができます。 また、ユーザープロファイルの管理やメンテナンスも楽になります。
* ネームド権限をユーザーに直接割り当てて、場合によっては、グループを通じて割り当てられた権限をオーバーロードすることができます。

## 権限を付与するための主な手順{#key-steps-permissions}

製品管理者は、組織のユーザーに権限を付与できます。 権限は、Adobe Admin Console と Campaign クライアントコンソールを通じて付与されます。 ユーザーは、Adobe ID を使用して Adobe Campaign にログオンします。 [Campaign v8](connect.md)へのAdobe Campaignへの接続方法について説明します。

主な手順は次のとおりです。

* **手順 1**：Campaign クライアントコンソールで、オペレーターグループを定義して権限を割り当てます。 [詳細情報](manage-permissions.md#create-product-profile)。
なお、手始めに、ビルトインのオペレーターグループを使用することもできます。 これらのデフォルトグループとその権限は、[ デフォルトの製品プロファイルとオペレーターグループ ](manage-permissions.md#ootb-productprofiles)に一覧表示されます。
* **手順 2**：Adobe Admin Console で、これらのグループと一致する製品プロファイルを作成します。 [詳細情報](manage-permissions.md#create-product-profile)。
手始めに、ビルトインの製品プロファイルを使用することができます。 [詳細情報](manage-permissions.md#ootb-productprofiles)。
* **手順 3**：Adobe Admin Console でユーザーを作成して、製品プロファイルに割り当てます。 [詳細情報](manage-permissions.md#add-users)。
* **手順 4**（オプション）：フォルダーに対する権限を割り当てます。 [詳細情報](manage-permissions.md#ootb-productprofiles)。

## Admin Console について{#gs-admin-console}

Adobe Admin Console は、組織全体のアドビ製品エンタイトルメントを一元的に管理する場所です。 これにアクセスできるのは、製品管理者のみです。

Admin Console を使用して、ユーザーの追加と製品プロファイル（オペレーターの役割のグループ）の作成および割り当てを行います。

[ ユーザーを追加](manage-permissions.md#add-users)でユーザーを追加する方法について説明します。

## 製品プロファイルについて{#ootb-product-profiles}

製品プロファイルは、ユーザーに割り当てることができる製品とサービスのグループです。 [!DNL Adobe CX Enterprise]では、権限はユーザーではなく、製品のプロファイルに基づいています。 ただし、特定のユーザーに管理者権限をデリゲートできます。

Admin Consoleでは、Campaignの各[!DNL CX Enterprise] **製品プロファイル**&#x200B;は、Campaign クライアントコンソールの&#x200B;**オペレーターグループ**&#x200B;に関連付けられています。

[製品プロファイルを作成して割り当てる方法について説明します。](manage-permissions.md#create-product-profile)製品プロファイルを作成します。

## Campaign ネームド権限{#named-rights}

ユーザーは製品プロファイル（オペレーターグループ）のメンバーとして「ネームド権限」と呼ばれる操作を実行する権限を持ち、データに対する読み取り／書き込みアクセス権を持ちます。 1 人のオペレーターは複数のオペレーターグループに所属でき、アクセス権限は追加的に付与されます。

[ ネームド権限](manage-permissions.md#use-named-rights)のネームド権限について詳しく説明します。
