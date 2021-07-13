---
product: Adobe Campaign
title: Campaign v8 への権限の付与
description: Campaign v8 に権限を付与する方法を学ぶ
feature: Audiences
role: Data Engineer
level: Beginner
exl-id: 176cc4f0-8827-4127-9f03-7d75ac8cf917
source-git-commit: c61d8aa8e0a68ccc81a6141782f860daf061bc61
workflow-type: tm+mt
source-wordcount: '280'
ht-degree: 98%

---

# 権限の概要

Adobe Campaign では、ユーザーは&#x200B;**オペレーター**&#x200B;または&#x200B;**オペレーターグループ**&#x200B;です。

Adobe Campaign には、Campaign マネージャーや Workflow スーパーバイザーなどの組み込みのオペレーターグループが用意されています。 すべての組み込みグループの一覧については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-groups.html?lang=ja#default-groups)を参照してください。

オペレーターグループのメンバーが実行できるユーザー権限は「ネームド権限」と呼ばれ、**エクスプローラー**&#x200B;ビューのフォルダー内にあるデータにアクセスできます。 1 人のオペレーターは複数のオペレーターグループに所属でき、アクセス権限は追加的に付与されます。

ネームド権限では、次の権限を付与します。

* 操作の実行
たとえば、配信エディターの「**分析**」ボタンは、**配信準備**&#x200B;ネームド権限を持つ&#x200B;**配信オペレーター**&#x200B;グループのメンバーに対して有効になります。

* フォルダーへのアクセス
オペレーターグループのメンバーであれば、フォルダーのセキュリティ設定を変更することにより、フォルダーへのアクセス権を付与したり制約したりすることができます。[詳しくは、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-folders.html?lang=ja#permissions-on-a-folder){target=&quot;_blank&quot;}。たとえば、新しいエンティティ（配信、プロファイルなど）を作成するための&#x200B;**書き込みアクセス**、エンティティを使用するための&#x200B;**読み取りアクセス**、エンティティを削除するための&#x200B;**削除アクセス**&#x200B;などの権限を変更できます。

**詳細情報** Campaign Classic v7 ドキュメント：

↗️ [組み込みのネームド権限](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-named-rights.html?lang=ja){target=&quot;_blank&quot;}

↗️ [組み込みオペレーターグループ](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-groups.html?lang=en#default-groups){target=&quot;_blank&quot;}

↗️ [権限の設定手順](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management.html?lang=ja){target=&quot;_blank&quot;}

↗️ [フォルダーのセキュリティ設定](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-folders.html?lang=en#permissions-on-a-folder){target=&quot;_blank&quot;}