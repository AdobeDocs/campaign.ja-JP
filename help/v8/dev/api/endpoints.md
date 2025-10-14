---
title: エンドポイント
description: API エンドポイントの詳細情報。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Data Engineer
level: Experienced
exl-id: 9f6d3da6-374d-47f5-bc8f-b31b19cbb5ca
source-git-commit: 4ed5799c77c647c9f1aeabba7645fbb475d03c09
workflow-type: tm+mt
source-wordcount: '182'
ht-degree: 9%

---

# エンドポイント {#endpoints}

Adobe Campaign REST API で使用可能なエンドポイントは次のとおりです。

* **/profileAndServices**：標準提供フィールドとやり取りする。 このエンドポイントでは、拡張フィールドにアクセスできません。
* **/profileAndServicesExt**：プロファイルまたはサービスのカスタムリソース拡張時に追加されたカスタムフィールドを操作します。 カスタムリソースについて詳しくは、[&#x200B; この節 &#x200B;](custom-resources.md) を参照してください。
* **/&lt;transactionAPI>**：トランザクションメッセージ API を操作します（トランザクションメッセージ API エンドポイントの名前は、インスタンスの設定によって異なります）。 詳しくは、[この節](managing-transactional-messages.md)を参照してください。
* **/workflow/execution**：ワークフローを操作します。 詳しくは、[この節](controlling-a-workflow.md)を参照してください。

デフォルトでは、**profileAndServices** および **profileAndServicesExt** API で使用できる主なリソースは次のとおりです。

* **/profile**:Campaign データベース内のプロファイルを操作します。 サービスにプロファイルを追加するには、**/service** エンドポイントを使用します。 Campaign のプロファイルについて詳しくは、[Campaign ドキュメント &#x200B;](https://helpx.adobe.com/jp/campaign/standard/audiences/using/about-profiles.html) を参照してください。
* **/service**：購読サービスを管理します。 Campaign のサービスについて詳しくは、[Campaign ドキュメント &#x200B;](https://helpx.adobe.com/jp/campaign/standard/audiences/using/creating-a-service.html) を参照してください。

>[!NOTE]
>
>拡張または作成されたその他すべてのリソースは、**ProfileAndServicesExt** API からのみ使用できます。 アクセスするには、これらのプロファイルが **プロファイル** リソースにリンクされている必要があります。
