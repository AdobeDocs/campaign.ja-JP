---
title: Campaign v8 への権限の付与
description: Campaign v8 に権限を付与する方法を学ぶ
feature: Permissions
role: User, Admin
level: Beginner
exl-id: 3d61abac-03df-42d3-a950-37e41a5a7756
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
source-git-commit: 7fd43a8d3d6afe9f4d3fb000d925cc6185ba9f40
workflow-type: tm+mt
source-wordcount: '322'
ht-degree: 83%
---
# 権限の基本を学ぶ

Adobe Campaign では、ユーザーは&#x200B;**オペレーター**&#x200B;であり、**オペレーターグループ**&#x200B;はユーザーの役割を表します。

オペレーターは、ログインしてアクションを実行する権限を持つ Adobe Campaign ユーザーです。 デフォルトでは、オペレーターは&#x200B;**[!UICONTROL 管理／アクセス管理／オペレーター]**&#x200B;ノードに格納されています。

Adobe Campaign には、キャンペーンマネージャーやワークフロースーパーバイザーなどのビルトインのオペレーターグループが用意されています。 権限について詳しくは、[この節](../start/gs-permissions.md)を参照してください。

オペレーターグループのメンバーが実行できるユーザー権限は「ネームド権限」と呼ばれ、**エクスプローラー**&#x200B;ビューのフォルダー内にあるデータにアクセスできます。 1 人のオペレーターは複数のオペレーターグループに所属でき、アクセス権限は追加的に付与されます。

ネームド権限では、次の権限を付与します。

* 操作の実行
例えば、配信エディターの&#x200B;**分析** ボタンは、**配信を準備**&#x200B;という名前付き権限を持つ&#x200B;**配信オペレーター** グループのメンバーに対してアクティブ化されます

* フォルダーへのアクセス
オペレーターグループのメンバーシップは、フォルダーのセキュリティ設定を変更することで、フォルダーへのアクセス権を付与または制限できます。 詳しくは、[このページ](../start/folder-permissions.md)を参照してください。 例えば、新しいエンティティ（配信、プロファイルなど）を作成するための&#x200B;**書き込みアクセス**、エンティティを使用するための&#x200B;**読み取りアクセス**、エンティティを削除するための&#x200B;**削除アクセス**&#x200B;などに影響を与える可能性があります。

## セキュリティゾーン

インスタンスにログオンするには、各オペレーターがゾーンにリンクされている必要があります。また、セキュリティゾーンで定義されたアドレスまたはアドレスセットにオペレーターの IP が含まれている必要があります。 セキュリティゾーンの設定は、Adobe Campaign サーバーの設定ファイルで実行されます。

オペレーターは、クライアントコンソールでオペレーターのプロファイルからセキュリティゾーンにリンクされます。オペレーターのプロファイルは、**[!UICONTROL 管理／アクセス管理／オペレーター]**&#x200B;ノードでアクセスできます。

>[!NOTE]
>
>Managed Cloud Services ユーザーの場合は、ユーザーに代わってアドビがセキュリティゾーンを設定します。 詳細については、[Adobe](https://helpx.adobe.com/jp/enterprise/admin-guide.html/enterprise/using/support-for-experience-cloud.ug.html){target="_blank"}にお問い合わせください。

**詳細情報**

* [ビルトインのネームド権限](../start/gs-permissions.md)

* [権限の設定手順](../start/manage-permissions.md)
