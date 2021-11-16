---
title: Campaign v8 への権限の付与
description: Campaign v8 に権限を付与する方法を学ぶ
feature: Audiences
role: Data Engineer
level: Beginner
exl-id: 3d61abac-03df-42d3-a950-37e41a5a7756
source-git-commit: 63b53fb6a7c6ecbfc981c93a723b6758b5736acf
workflow-type: tm+mt
source-wordcount: '390'
ht-degree: 100%

---

# 権限の概要

Adobe Campaign では、ユーザーは&#x200B;**オペレーター**&#x200B;または&#x200B;**オペレーターグループ**&#x200B;です。

オペレーターは、ログインしてアクションを実行する権限を持つ Adobe Campaign ユーザーです。デフォルトでは、オペレーターは&#x200B;**[!UICONTROL 管理／アクセス管理／オペレーター]**&#x200B;ノードに格納されています。

Adobe Campaign には、キャンペーンマネージャーやワークフロースーパーバイザーなどの組み込みのオペレーターグループが用意されています。すべての組み込みグループの一覧については、[Campaign Classic v7 ドキュメント](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-groups.html?lang=ja#default-groups)を参照してください。{target=&quot;_blank&quot;}。

オペレーターグループのメンバーが実行できるユーザー権限は「ネームド権限」と呼ばれ、**エクスプローラー**&#x200B;ビューのフォルダー内にあるデータにアクセスできます。 1 人のオペレーターは複数のオペレーターグループに所属でき、アクセス権限は追加的に付与されます。

ネームド権限では、次の権限を付与します。

* 操作の実行
たとえば、配信エディターの「**分析**」ボタンは、**配信準備**&#x200B;ネームド権限を持つ&#x200B;**配信オペレーター**&#x200B;グループのメンバーに対して有効になります。

* フォルダーへのアクセス
オペレーターグループのメンバーであれば、フォルダーのセキュリティ設定を変更することにより、フォルダーへのアクセス権を付与したり制約したりすることができます。[詳しくは、Campaign Classic v7 ドキュメントを参照してください](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-folders.html?lang=ja#permissions-on-a-folder){target=&quot;_blank&quot;}。例えば、新しいエンティティ（配信、プロファイルなど）を作成するための&#x200B;**書き込みアクセス**、エンティティを使用するための&#x200B;**読み取りアクセス**、エンティティを削除するための&#x200B;**削除アクセス**&#x200B;などに影響を与える可能性があります。

## セキュリティゾーン

インスタンスにログオンするには、各オペレーターがゾーンにリンクされている必要があります。また、セキュリティゾーンで定義されたアドレスまたはアドレスセットにオペレーターの IP が含まれている必要があります。セキュリティゾーンの設定は、Adobe Campaign サーバーの設定ファイルで実行されます。

オペレーターは、クライアントコンソールでオペレーターのプロファイルからセキュリティゾーンにリンクされます。オペレーターのプロファイルは、**[!UICONTROL 管理／アクセス管理／オペレーター]**&#x200B;ノードでアクセスできます。

![](../assets/do-not-localize/speech.png) Managed Cloud Services ユーザーの場合は、ユーザーに代わってアドビがセキュリティゾーンを設定します。詳しくは、[アドビにお問い合わせ](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html){target=&quot;_blank&quot;}ください。

詳しくは、**Campaign Classic v7 ドキュメント**&#x200B;を参照してください

* [組み込みのネームド権限](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-named-rights.html?lang=ja){target=&quot;_blank&quot;}

* [組み込みのオペレーターグループ](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management-groups.html?lang=en#default-groups){target=&quot;_blank&quot;}

* [権限の設定手順](https://experienceleague.adobe.com/docs/campaign-classic/using/getting-started/permissions/access-management.html?lang=ja){target=&quot;_blank&quot;}
