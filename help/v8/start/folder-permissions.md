---
title: Campaign フォルダーに対する権限の付与と制限
description: フォルダーに対する権限を付与または制限する方法を説明します
feature: Permissions
role: User, Admin
level: Beginner
exl-id: 5bd8dbba-7a06-4737-bc5a-60354f91c709
version: Campaign v8, Campaign Classic v7
TQID: 'https://experienceleague.adobe.com/lQQioEkhkrrJpqv6uMCsktMdQhwZT9iUkU2xfRtXaz0'
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
topic_v2:
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '324'
ht-degree: 100%
---
# フォルダー権限の管理{#manage-folder-permissions}

## フォルダーへのアクセスを制限する{#restrict-access-to-a-folder}

フォルダーに対する権限を使用して、Campaign データへのアクセスを整理および制御します。

フォルダー管理について詳しくは、[このページ](../audiences/folders-and-views.md)を参照してください。

特定の Campaign フォルダーに対する権限を編集するには、次の手順に従います。

1. フォルダーを右クリックし、「**[!UICONTROL プロパティ]**」を選択します。
1. 「**[!UICONTROL セキュリティ]**」タブを参照すると、そのフォルダーに設定されている権限が表示されます。

   ![](assets/folder-permissions.png)

* **グループまたはオペレーターのアクセスを許可する**&#x200B;には、「**[!UICONTROL 追加]**」ボタンをクリックし、このフォルダーに対する権限を割り当てるグループまたはオペレーターを選択します。
* **グループまたはオペレーターのアクセスを禁止する**&#x200B;には、「**[!UICONTROL 削除]**」をクリックし、このフォルダーの認証を削除するグループまたはオペレーターを選択します。
* **グループまたはオペレーターに付与する権利を選択する**&#x200B;には、グループまたはオペレーターを選択し、付与するアクセス権を選択し、その他のアクセス権の選択を解除します。

>[!NOTE]
>
>オブジェクトに書き込み権限のあるフォルダーが 1 つもなければ、オブジェクトを作成することはできません。
>
>フラグメントを作成するには管理者である必要はありませんが、少なくとも 1 つの「コンテンツビジュアルフラグメント」フォルダーに対する書き込み権限が必要です。 権限がない場合は、ビジュアルフラグメントを作成することはできません。

## 権限の反映 {#propagate-permissions}

権限およびアクセス権を反映させるには、フォルダープロパティの「**[!UICONTROL サブフォルダーにも反映]**」オプションを選択します。

このウィンドウで定義された権限が、現在のノードに属するすべてのサブフォルダーに反映されます。 したがって、個々のサブフォルダーに設定された権限は常に無視できます。

>[!NOTE]
>
>フォルダーの「**[!UICONTROL サブフォルダーにも反映]**」オプションのチェックを外しても、サブフォルダーではクリアされません。個々のサブフォルダーに対して明示的にクリアする必要があります。

## すべてのオペレーターへのアクセス権の付与 {#grant-access-to-all-operators}

「**[!UICONTROL セキュリティ]**」タブで、「**[!UICONTROL システムフォルダー]**」を選択すると、権限に関係なく、すべてのオペレーターに対するアクセスが許可されます。

このオプションが選択されていない場合、オペレーターにデータへのアクセスを許可するには、該当するオペレーターまたはグループを認証リストに明示的に追加し直す必要があります。
