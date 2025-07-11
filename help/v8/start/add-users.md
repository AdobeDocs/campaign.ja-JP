---
title: Campaign v8 への権限の付与
description: Campaign v8 に権限を付与する方法を学ぶ
feature: Permissions
role: User, Admin
level: Beginner
exl-id: 3d61abac-03df-42d3-a950-37e41a5a7756
source-git-commit: 5ab598d904bf900bcb4c01680e1b4730881ff8a5
workflow-type: tm+mt
source-wordcount: '310'
ht-degree: 98%

---

# 権限の基本を学ぶ

Adobe Campaign では、ユーザーは&#x200B;**オペレーター**&#x200B;または&#x200B;**オペレーターグループ**&#x200B;です。

オペレーターは、ログインしてアクションを実行する権限を持つ Adobe Campaign ユーザーです。デフォルトでは、オペレーターは&#x200B;**[!UICONTROL 管理／アクセス管理／オペレーター]**&#x200B;ノードに格納されています。

Adobe Campaign には、キャンペーンマネージャーやワークフロースーパーバイザーなどのビルトインのオペレーターグループが用意されています。権限について詳しくは、[この節](../start/gs-permissions.md)を参照してください。

オペレーターグループのメンバーが実行できるユーザー権限は「ネームド権限」と呼ばれ、**エクスプローラー**&#x200B;ビューのフォルダー内にあるデータにアクセスできます。 1 人のオペレーターは複数のオペレーターグループに所属でき、アクセス権限は追加的に付与されます。

ネームド権限では、次の権限を付与します。

* 操作の実行
たとえば、配信エディターの「**分析**」ボタンは、**配信準備**&#x200B;ネームド権限を持つ&#x200B;**配信オペレーター**&#x200B;グループのメンバーに対して有効になります。

* フォルダーへのアクセス
オペレーターグループのメンバーであれば、フォルダーのセキュリティ設定を変更することにより、フォルダーへのアクセス権を付与したり制約したりすることができます。詳しくは、[このページ](../start/folder-permissions.md)を参照してください。例えば、新しいエンティティ（配信、プロファイルなど）を作成するための&#x200B;**書き込みアクセス**、エンティティを使用するための&#x200B;**読み取りアクセス**、エンティティを削除するための&#x200B;**削除アクセス**&#x200B;などに影響を与える可能性があります。

## セキュリティゾーン

インスタンスにログオンするには、各オペレーターがゾーンにリンクされている必要があります。また、セキュリティゾーンで定義されたアドレスまたはアドレスセットにオペレーターの IP が含まれている必要があります。セキュリティゾーンの設定は、Adobe Campaign サーバーの設定ファイルで実行されます。

オペレーターは、クライアントコンソールでオペレーターのプロファイルからセキュリティゾーンにリンクされます。オペレーターのプロファイルは、**[!UICONTROL 管理／アクセス管理／オペレーター]**&#x200B;ノードでアクセスできます。

>[!NOTE]
>
>Managed Cloud Services ユーザーの場合は、ユーザーに代わってアドビがセキュリティゾーンを設定します。詳しくは、[Adobeにお問い合わせ ](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html){target="_blank"} ください。

**詳細情報**

* [ビルトインのネームド権限](../start/gs-permissions.md)

* [権限の設定手順](../start/manage-permissions.md)
