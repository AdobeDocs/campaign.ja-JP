---
title: Campaign REST API の概要
description: Campaign にテクノロジーのパネルを搭載することで、統合を作成し、独自のエコシステムを構築します。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Data Engineer
level: Experienced
exl-id: c6968252-a012-4029-bbb8-66f4f693e99b
source-git-commit: c74669a0ccdabe735eb905b7e8c1634140a7ea0b
workflow-type: tm+mt
source-wordcount: '239'
ht-degree: 47%

---

# Campaign REST API の概要 {#get-started-apis}

>[!AVAILABILITY]
>
>この機能は、すべての Campaign FDA 環境で、オンデマンドでのみ使用できます。 Campaign FFDA デプロイメントでは使用できませ **&#x200B;**。 アクセス権を取得するには、Adobe担当者にお問い合わせください。

>[!CAUTION]
>
>API 呼び出しを実行する前に、使用許諾契約に対応する拡張制限を確認してください。詳しくは、[このページ](https://helpx.adobe.com/jp/legal/product-descriptions/campaign-standard.html#ITInfrastructureResourcesbyActiveProfilesTiers)を参照してください。

Campaign REST API は、Adobe Campaignに使用するテクノロジーのパネルをインターフェイスで接続することで、Adobe Campaign向けの **統合を作成** したり、独自のエコシステムを構築 **したりできる** ことを目的としています。

Adobe Campaign REST API を使用すると、次の機能にアクセスできます。

<table><tr>
 <td valign="top"><a href="retrieving-profiles.md"><img width="60px" alt="conditions" src="assets/icon_profile.svg"/></a><p><a href="retrieving-profiles.md">プロファイル</a></p></td>
<td valign="top"><a href="creating-a-service.md"><img width="60px" alt="conditions" src="assets/icon_services.svg"/></a><p><a href="creating-a-service.md">サービスと購読</a></p></td>
<td valign="top"><a href="interacting-with-custom-resources.md"><img width="60px" alt="conditions" src="assets/icon_customresources.svg"/></a><p><a href="interacting-with-custom-resources.md">カスタムリソース</a></p></td>
<td valign="top"><a href="controlling-a-workflow.md"><img width="60px" alt="conditions" src="assets/icon_workflows.svg"/></a><p><a href="controlling-a-workflow.md">ワークフロー</a></p></td>
<td valign="top"><a href="managing-transactional-messages.md"><img width="60px" alt="conditions" src="assets/icon_transactionalmessage.svg"/></a><p><a href="managing-transactional-messages.md">トランザクションメッセージ</a></p></td>
</tr></table>

Campaign REST API を使用するには、Adobe I/O アカウントが必要です。 これは、適切な API 機能を探し、利用するために必須となる最初の手順です。
詳しくは、[この節](setting-up-api-access.md)を参照してください。

アドビが提供する API は、REST インターフェイスと JSON ペイロードを備えた&#x200B;**標準的な概念**&#x200B;を使用します 。

すべてのエンドポイントについて、このドキュメントで大幅に説明し、API の操作に関して知っておくべき一般的な概念、完全な API リファレンス、コード例、クイックスタートガイドを示します。 これらの例はすべて Postman で使用できますが、任意の REST クライアントをご利用いただけます。

API について不明な点や問題がある場合は、[アドビコミュニティ](https://experienceleaguecommunities.adobe.com/t5/adobe-campaign-standard/ct-p/adobe-campaign-standard-community)で質問してください。
