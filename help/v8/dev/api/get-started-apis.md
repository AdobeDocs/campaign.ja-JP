---
title: Campaign REST APIの基本を学ぶ
description: Campaign にテクノロジーのパネルを搭載することで、統合を作成し、独自のエコシステムを構築します。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: c6968252-a012-4029-bbb8-66f4f693e99b
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
workflow-type: tm+mt
source-wordcount: '240'
ht-degree: 58%

---

# Campaign REST APIの基本を学ぶ {#get-started-apis}

Campaign REST APIは、Adobe Campaignと使用するテクノロジーパネルとのインターフェイスによって、**Adobe Campaignの統合**&#x200B;を作成し、**独自のエコシステム**&#x200B;を構築できるようにすることを目的としています。

>[!AVAILABILITY]
>
>* この機能は、すべての[Campaign FDA環境](../../architecture/fda-deployment.md)に対して、オンデマンドでのみ使用できます。 [ エンタープライズ （FFDA） デプロイメント ](../../architecture/enterprise-deployment.md)では&#x200B;**not**&#x200B;を使用できます。 アクセスするには、アドビ担当者にお問い合わせください。
>
>* API 呼び出しを実行する前に、使用許諾契約に対応する拡張制限を確認してください。 詳しくは、[Adobe Campaign v8 Product Description](https://helpx.adobe.com/jp/legal/product-descriptions/adobe-campaign-managed-cloud-services.html){target="_blank"}を参照してください。


Adobe Campaign REST APIを使用すると、次の機能にアクセスできます。

<table><tr>
 <td valign="top"><a href="retrieving-profiles.md"><img width="60px" alt="conditions" src="assets/icon_profile.svg"/></a><p><a href="retrieving-profiles.md">プロファイル</a></p></td>
<td valign="top"><a href="creating-a-service.md"><img width="60px" alt="conditions" src="assets/icon_services.svg"/></a><p><a href="creating-a-service.md">サービスと購読</a></p></td>
<td valign="top"><a href="interacting-with-custom-resources.md"><img width="60px" alt="conditions" src="assets/icon_customresources.svg"/></a><p><a href="interacting-with-custom-resources.md">カスタムリソース</a></p></td>
<td valign="top"><a href="controlling-a-workflow.md"><img width="60px" alt="conditions" src="assets/icon_workflows.svg"/></a><p><a href="controlling-a-workflow.md">ワークフロー</a></p></td>
<td valign="top"><a href="managing-transactional-messages.md"><img width="60px" alt="conditions" src="assets/icon_transactionalmessage.svg"/></a><p><a href="managing-transactional-messages.md">トランザクションメッセージ</a></p></td>
</tr></table>

Campaign REST APIを使用するには、Adobe I/O アカウントが必要です。 これは、適切な API 機能を探し、利用するために必須となる最初の手順です。
詳しくは、[この節](setting-up-api-access.md)を参照してください。

アドビが提供する API は、REST インターフェイスと JSON ペイロードを備えた&#x200B;**標準的な概念**&#x200B;を使用します 。

このドキュメントでは、すべてのエンドポイントについて詳述するほか、API の操作に関する一般的な基本事項、完全な API リファレンス、コード例、クイックスタートガイドを紹介します。 これらの例はすべて Postman で使用できますが、任意の REST クライアントをご利用いただけます。

