---
product: campaign
title: フィルターの作成
description: クエリを実行する際のフィルターの作成方法を学ぶ
feature: Query Editor, Workflows
exl-id: 8e6fd9b4-77c4-4af8-921b-c3fe104fa5bc
source-git-commit: 6464e1121b907f44db9c0c3add28b54486ecf834
workflow-type: tm+mt
source-wordcount: '219'
ht-degree: 100%

---

# フィルターの作成 {#creating-a-filter}

Adobe Campaign で使用可能なフィルターは、クエリと同じ操作モードで作成されるフィルター条件を使用して定義します。

**[!UICONTROL 管理／設定／定義済みフィルター]**&#x200B;ノードには、リストおよび概要で使用するすべてのフィルターが含まれています。

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

「**[!UICONTROL 次の場合に考慮]**」列では、これらのフィルター条件の適用基準を定義できます。ここでは、文字 **$(/tmp/@text)** は、フィルターにリンクされた入力フィールドの内容を表します。

![](assets/query_editor_filter_sample_5.png)

ここでは、**$(/tmp/@text)=&#39;代理店&#39;** となっています。

**$(/tmp/@text)!=&#39;&#39;** 式は、入力フィールドが空でない場合に各条件を適用します。
