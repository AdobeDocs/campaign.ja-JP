---
title: ワークフローの制御
description: API を使用してワークフローを制御する方法を説明します。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Data Engineer
level: Experienced
exl-id: 79eacc31-d5a2-4e13-aa0b-744d7ab7004f
source-git-commit: 4ed5799c77c647c9f1aeabba7645fbb475d03c09
workflow-type: tm+mt
source-wordcount: '87'
ht-degree: 11%

---

# ワークフローの制御 {#controlling-a-workflow}

ワークフロー ID と必要な実行コマンドを含む POST リクエストを使用して、REST API から直接ワークフローを制御できます。

`POST https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<workflowID>/commands`

>[!CAUTION]
>
>Adobe Campaignでワークフロー ID が変更されると、API リクエストは機能しなくなります。

ワークフローの制御には、次の 4 つの実行コマンドを使用できます。

* 開始
* 一時停止
* 再開
* 停止

実行コマンドについて詳しくは、[Campaign ドキュメント ](https://experienceleague.adobe.com/docs/campaign-standard/using/managing-processes-and-data/executing-a-workflow/about-workflow-execution.html?lang=ja) を参照してください。

<br/>

***サンプルリクエスト***

* ワークフローを開始します。

  ```
  -X POST https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<workflowID>/commands \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>' \
  -i
  -d '{"method":"start"}'
  ```

  <!-- + réponse -->

* ワークフローを停止します。

  ```
  -X POST https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<workflowID>/commands \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>' \
  -i
  -d '{"method":"stop"}'
  ```

  <!-- + réponse -->
