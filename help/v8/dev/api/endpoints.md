---
title: エンドポイント
description: API エンドポイントについて詳しく説明します。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 9f6d3da6-374d-47f5-bc8f-b31b19cbb5ca
TQID: https://experienceleague.adobe.com/1ajh28ZpUsuyTh-qHnto3GsH4J25WSsyK7TqTjlhHfg
product_v2: id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2: id: b12f6872-9271-4369-85e5-86969a0b99a2
subfeature_v2: id: bf97c196-a4d1-4fa3-a151-e68a114c8ac0
role_v2: id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
topic_v2: id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 197
ht-degree: 9%

---

# エンドポイント {#endpoints}

Adobe Campaign REST APIで使用できるエンドポイント：

* **/profileAndServices**：標準搭載のフィールドを操作します。 このエンドポイントでは拡張フィールドにアクセスできません。
* **/profileAndServicesExt**: プロファイルまたはサービスのカスタム リソースの拡張中に追加されたカスタム フィールドを操作します。 カスタムリソースについて詳しくは、[この節](custom-resources.md)を参照してください。
* **/&lt;transactionalAPI>**: トランザクションメッセージ APIを操作します（トランザクションメッセージ API エンドポイントの名前は、インスタンス設定によって異なります）。 詳しくは、[この節](managing-transactional-messages.md)を参照してください。
* **/ワークフロー/実行**: ワークフローを操作します。 詳しくは、[この節](controlling-a-workflow.md)を参照してください。

デフォルトでは、**profileAndServices**&#x200B;および&#x200B;**profileAndServicesExt** APIで使用できる主なリソースは次のとおりです。

* **/プロファイル**: Campaign データベースのプロファイルを操作します。 プロファイルをサービスに追加するには、**/service** エンドポイントを使用します。 Campaignのプロファイルについて詳しくは、[Campaign ドキュメント ](https://helpx.adobe.com/campaign/standard/audiences/using/about-profiles.html)を参照してください。
* **/サービス**：購読サービスを管理します。 Campaignのサービスについて詳しくは、[Campaign ドキュメント ](https://helpx.adobe.com/campaign/standard/audiences/using/creating-a-service.html)を参照してください。

>[!NOTE]
>
>拡張または作成された他のすべてのリソースは、**ProfileAndServicesExt** API経由でのみ使用できます。 アクセスするには、これらのユーザーを&#x200B;**プロファイル** リソースにリンクする必要があります。
