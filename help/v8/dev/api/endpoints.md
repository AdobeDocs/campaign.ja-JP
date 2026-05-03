---
title: エンドポイント
description: API エンドポイントについて詳しく説明します。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 9f6d3da6-374d-47f5-bc8f-b31b19cbb5ca
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
workflow-type: tm+mt
source-wordcount: '197'
ht-degree: 9%

---

# エンドポイント {#endpoints}

Adobe Campaign REST APIで使用できるエンドポイント：

* **/profileAndServices**：標準搭載のフィールドを操作します。 このエンドポイントでは拡張フィールドにアクセスできません。
* **/profileAndServicesExt**: プロファイルまたはサービスのカスタム リソースの拡張中に追加されたカスタム フィールドを操作します。 カスタムリソースについて詳しくは、[この節](custom-resources.md)を参照してください。
* **/&lt;transactionalAPI>**: トランザクションメッセージ APIと対話します（トランザクションメッセージ API エンドポイントの名前は、インスタンス設定によって異なります）。 詳しくは、[この節](managing-transactional-messages.md)を参照してください。
* **/ワークフロー/実行**: ワークフローを操作します。 詳しくは、[この節](controlling-a-workflow.md)を参照してください。

デフォルトでは、**profileAndServices**&#x200B;および&#x200B;**profileAndServicesExt** APIで使用できる主なリソースは次のとおりです。

* **/プロファイル**: Campaign データベースのプロファイルを操作します。 プロファイルをサービスに追加するには、**/service** エンドポイントを使用します。 Campaignのプロファイルについて詳しくは、[Campaign ドキュメント ](https://helpx.adobe.com/campaign/standard/audiences/using/about-profiles.html)を参照してください。
* **/サービス**：購読サービスを管理します。 Campaignのサービスについて詳しくは、[Campaign ドキュメント ](https://helpx.adobe.com/campaign/standard/audiences/using/creating-a-service.html)を参照してください。

>[!NOTE]
>
>拡張または作成された他のすべてのリソースは、**ProfileAndServicesExt** API経由でのみ使用できます。 アクセスするには、これらのユーザーを&#x200B;**プロファイル** リソースにリンクする必要があります。
