---
product: campaign
title: 重複した受信者のフィルタリング
description: 重複した受信者をフィルターする方法を説明します。
feature: Workflows
role: User
version: Campaign v8, Campaign Classic v7
exl-id: cfa1f45c-e1ac-4055-996c-6e8d041889bb
source-git-commit: 4cbccf1ad02af9133d51933e3e0d010b5c8c43bd
workflow-type: tm+mt
source-wordcount: '156'
ht-degree: 100%

---

# 重複した受信者のフィルタリング {#filtering-duplicated-recipients}



この例では、配信に複数回出現する受信者をフィルターし、重複したプロファイルを取得します。

この例を作成するには、次の手順に従います。

1. ワークフローに「**[!UICONTROL クエリ]**」アクティビティをドラッグ＆ドロップし、アクティビティを開きます。
1. 「**[!UICONTROL クエリを編集]**」をクリックし、ターゲットディメンションとフィルタリングディメンションを「**[!UICONTROL 受信者]**」に設定します。

   ![](assets/query_recipients_1.png)

1. 次のようにフィルター条件を定義して配信ログ内に存在する受信者をターゲットにします。「**式**」列で「**受信者配信ログ（broadlog）**」を選択し、「**オペレーター**」列で「**既存の例**」を選択します。

   ![](assets/query_recipients_2.png)

1. 次のようにフィルター条件を定義して配信をターゲットにします。「式」列で「**[!UICONTROL 内部名]**」を選択し、「オペレーター」列で「**[!UICONTROL 等しい]**」を選択します。
1. 「値」列にターゲットにした配信の内部名を追加します。

   ![](assets/query_recipients_3.png)

1. 演算子 **[!UICONTROL AND]** を使用して、別の配信をターゲットにして同じ操作を繰り返します。

   ![](assets/query_recipients_4.png)

アウトバウンドトランジションで配信のターゲットにした受信者が重複しています。
