---
product: campaign
title: フィルターの作成
description: クエリを実行する際のフィルターの作成方法を学ぶ
feature: Query Editor, Workflows
role: User
version: Campaign v8, Campaign Classic v7
exl-id: 8e6fd9b4-77c4-4af8-921b-c3fe104fa5bc
TQID: 'https://experienceleague.adobe.com/3EkEMTJs1-sdM9wSTYorHWO-emO3Nz5nugrWDU4h5pM'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: c5474392-5419-4296-9e41-f6f4ce4f6e9b
    internal-label: Administration
  - id: a658c786-869b-4194-a780-2594d663adda
    internal-label: Data management
subfeature_v2:
  - id: f5293531-9312-4099-bfa3-9e67df6a8750
    internal-label: Query Editor
  - id: fcb46c0f-76e1-48bc-9dd0-fcf9d97526cf
    internal-label: Workflows
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: eddd9b14-83bd-4ff4-9072-54a4a484abb7
    internal-label: Administration
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '237'
ht-degree: 77%
---
# フィルターの作成 {#creating-a-filter}

Adobe Campaignで使用可能なフィルターは、[&#x200B; クエリエディター](../../v8/start/query-editor.md)でクエリを作成する場合と同じ操作モードを使用して作成されるフィルター条件を使用して定義されます。

**[!UICONTROL 管理/設定/定義済みフィルター]** ノードには、すべてのデフォルトフィルターが含まれています。 そのうちのいくつかはリストや概要で使用されます。 [組み込みの定義済みフィルター](../../v8/audiences/create-filters.md)について詳しく説明します。

例えば、オペレーターのリストを「**[!UICONTROL アクティブなアカウント]**」でフィルターできます。

![](assets/query_editor_filter_sample_1.png)

対応するフィルターには、「**[!UICONTROL オペレーター]**」スキーマの「**[!UICONTROL 無効なアカウント]**」の値に対するクエリが含まれています。

![](assets/query_editor_filter_sample_2.png)

同じリストで、「**[!UICONTROL ログインまたはラベル別]**」フィルターを使用して、フィルターフィールドに入力した値に基づいてリストのデータをフィルターできます。

![](assets/query_editor_filter_sample_3.png)

このフィルターは次のように設計されています。

![](assets/query_editor_filter_sample_4.png)

フィルター条件に一致するには、オペレーターアカウントは次のいずれかの条件を満たしている必要があります。

* ラベルに、入力フィールドに入力された文字が含まれている
* オペレーター名に、入力フィールドに入力された文字が含まれている
* 説明領域の内容に、入力フィールドに入力された文字が含まれている

>[!NOTE]
>
>**[!UICONTROL Upper]** 関数を使用すると、大文字と小文字を区別する機能を無効にすることができます。

「**[!UICONTROL 次の場合に考慮]**」列では、これらのフィルター条件の適用基準を定義できます。 ここでは、文字 **$(/tmp/@text)** は、フィルターにリンクされた入力フィールドの内容を表します。

![](assets/query_editor_filter_sample_5.png)

ここでは、**$(/tmp/@text)=&#39;代理店&#39;** となっています。

**$(/tmp/@text)!=&#39;&#39;** 式は、入力フィールドが空でない場合に各条件を適用します。
