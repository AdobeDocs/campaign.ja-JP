---
solution: Campaign
product: Adobe Campaign
title: キャンペーンv8への権限の付与
description: キャンペーンv8に権限を付与する方法を学びます。
feature: オーディエンス
role: Data Engineer
level: Beginner
exl-id: 176cc4f0-8827-4127-9f03-7d75ac8cf917
translation-type: tm+mt
source-git-commit: 8dd7b5a99a0cda0e0c4850d14a6cb95253715803
workflow-type: tm+mt
source-wordcount: '241'
ht-degree: 2%

---

# 権限の基本を学ぶ

Adobe Campaignでは、ユーザーは&#x200B;**演算子**&#x200B;で、**演算子グループ**&#x200B;はユーザーの役割を表します。

Adobe Campaignには、キャンペーンマネージャーやワークフローの管理者など、組み込みのオペレーターグループが用意されています。 すべての組み込みグループは、[このページ](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-groups.html?lang=en#default-groups)に一覧表示されます

演算子グループのメンバーとして、ユーザーは「ネームド権限」と呼ばれる操作を実行する権限を持ち、**エクスプローラー**&#x200B;表示ー内のフォルダーに含まれるデータにアクセスできます。 演算子は、複数の演算子グループのメンバーにすることができます。権限とアクセス権限は追加されます。

ネームド権限は次の権限を付与します。

* 操作の実行
例えば、配信エディターの「**Analyze**」ボタンは、**Prepare配信** Named Rightを持つ&#x200B;**配信演算子**&#x200B;グループのメンバーに対してアクティブになります。

* フォルダへのアクセス
オペレーターグループのメンバーシップは、フォルダー](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-folders.html?lang=en#permissions-on-a-folder)の[セキュリティ設定を変更することで、フォルダーにアクセス権を付与または制限できます。 例えば、次のような影響を与える可能性があります。**新しいエンティティ(配信、プロファイルなど)を作成するための書き込みアクセス**、エンティティを使用するための&#x200B;**読み取りアクセス**、**アクセスを削除**。

**詳細情報**

* [組み込みネームド権限](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-named-rights.html)

* [組み込み演算子グループ](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-groups.html?lang=en#default-groups)

* [権限を設定する手順](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management.html)
