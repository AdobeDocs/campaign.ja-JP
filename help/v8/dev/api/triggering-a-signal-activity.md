---
title: シグナルアクティビティのトリガー
description: APIを使用してシグナルアクティビティをトリガーする方法を説明します。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 9f94e98f-fe04-4369-8946-1380e02cdece
TQID: https://experienceleague.adobe.com/dBlJVUgC7x6qy7aztj9BLEL9aHnPsLlODzIwI0Ao8QE
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
feature_v2:
  - id: b12f6872-9271-4369-85e5-86969a0b99a2
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
source-git-commit: 15d7b12d07f84356fac7bee2a54a0057c5d00d41
workflow-type: tm+mt
source-wordcount: 323
ht-degree: 2%

---

# シグナルアクティビティのトリガー {#triggering-a-signal-activity}

Adobe Campaign Standard ワークフローでは、1つ以上の&#x200B;**外部シグナル** アクティビティを設定できます。 これらのアクティビティは、トリガーされるのを待つ「リスナー」です。

Campaign Standard APIを使用すると、**外部信号** アクティビティをトリガーしてワークフローを呼び出すことができます。 API呼び出しには、ワークフローのイベント変数（ターゲットとなるオーディエンス名、インポートするファイル名、メッセージコンテンツの一部など）に取り込まれるパラメーターを含めることができます。 これにより、Campaignの自動処理機能を外部システムと簡単に統合できます。

>[!NOTE]
>
>外部シグナル アクティビティは、10分ごとにトリガーできる頻度を超えることはできず、宛先ワークフローが既に実行されている必要があります。

ワークフローをトリガーするには、次の手順に従います。

1. ワークフローで&#x200B;**GET** リクエストを実行して、外部シグナルアクティビティのトリガー URLを取得します。

   `GET https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<workflowID>`

1. 返されたURLに対して&#x200B;**POST** リクエストを実行し、ペイロードに&#x200B;**&quot;source&quot;** パラメーターを含むシグナル アクティビティをトリガーします。 この属性は必須です。トリガーリクエストソースを示すことができます。

パラメーターを使用してワークフローを呼び出す場合は、**&quot;parameters&quot;**&#x200B;属性を使用してペイロードに追加します。 構文は、パラメーターの名前とその値で構成されます（次のタイプはサポートされています：**文字列**、**数値**、**ブール値**、**日付/時刻**）。

```
  -X POST <TRIGGER_URL>
  -H 'Authorization: Bearer <ACCESS_TOKEN>' \
  -H 'Cache-Control: no-cache' \
  -H 'X-Api-Key: <API_KEY>' \
  -H 'Content-Type: application/json;charset=utf-8' \
  -H 'Content-Length:79' \
  -i
  -d {
  -d    "source":"<SOURCE>",
  -d    "parameters":{
  -d      "<PARAMETER_NAME":"<PARAMETER_VALUE>",
  -d      "<PARAMETER_NAME":"<PARAMETER_VALUE>",
  -d      "<PARAMETER_NAME":"<PARAMETER_VALUE>",  
  -d      "<PARAMETER_NAME":"<PARAMETER_VALUE>"
  -d    }
  -d }
```

>[!NOTE]
>
>ペイロードにパラメーターを追加する際は、その&#x200B;**name**&#x200B;および&#x200B;**type**&#x200B;の値が、外部シグナル アクティビティで宣言された情報と一致していることを確認してください。 さらに、ペイロードサイズは64Koを超えてはなりません。

<br/>

***サンプルリクエスト***

ワークフローに対してGET リクエストを実行します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<workflowID> \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

ワークフローシグナルのアクティビティと関連するトリガーのURLを返します。

```
{
"PKey": "<PKEY>",
"activities": {
  "activity": {
    "signal1": {
      ...
      "trigger": {
        "href": "https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<PKEY>/activities/activity/<PKEY>/trigger/"
        },
        ...
      }
    }
  }
}
```

シグナル アクティビティをトリガーするには、「source」を指定してトリガー URLに対してPOST リクエストを実行します。 パラメーターを使用してワークフローを呼び出す場合は、「パラメーター」属性を追加します。

```
-X POST https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<PKEY>/activities/activity/<PKEY>/trigger \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>' \
-i
-d '{
-d "source":"API",
-d "parameters":{
-d    "audience":"audience",
-d    "email":"anna.varney@mail.com",
-d    "template":"05",
-d    "contentURL":"http://www.adobe.com",
-d    "test":"true",
-d    "segmentCode":"my segment",
-d    "attribute":"2019-04-03 08:17:19.100Z"}
-d  }'
```

<!-- + réponse -->

外部シグナル アクティビティでパラメーターの1つが宣言されていない場合、POST リクエストは、欠落しているパラメーターを示す以下のエラーを返します。

```
RST-360011 An error has occurred - please contact your administrator.
'contentURL' parameter isn't defined in signal activity.
XTK-170006 Unable to parse expression 'HandleTrigger(@name, $(source), $({parameters}))'.
RST-360000 Error while assessing 'HandleTrigger(@name, $(source), $({parameters}))' expression ('xtk:workflow:execution/activities/signal/trigger' resource)
```
