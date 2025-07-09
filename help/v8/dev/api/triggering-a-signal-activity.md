---
title: シグナルアクティビティのトリガー
description: API を使用してシグナルアクティビティをトリガーにする方法を説明します。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Data Engineer
level: Experienced
exl-id: 9f94e98f-fe04-4369-8946-1380e02cdece
source-git-commit: 4ed5799c77c647c9f1aeabba7645fbb475d03c09
workflow-type: tm+mt
source-wordcount: '323'
ht-degree: 2%

---

# シグナルアクティビティのトリガー {#triggering-a-signal-activity}

Adobe Campaign Standardのワークフローには、1 つ以上の **外部シグナル** アクティビティが存在する場合があります。 これらのアクティビティは、トリガーされるのを待つ「リスナー」です。

Campaign Standard API を使用すると、**外部シグナル** アクティビティをトリガーして、ワークフローを呼び出すことができます。 API 呼び出しには、ワークフローのイベント変数に取り込まれるパラメーター（ターゲットにするオーディエンス名、読み込むファイル名、メッセージコンテンツの一部など）を含めることができます。 これにより、Campaign の自動化を外部システムと簡単に統合できます。

>[!NOTE]
>
>外部シグナルアクティビティは、10 分以上の頻度でトリガーすることはできず、宛先ワークフローが既に実行されている必要があります。

ワークフローをトリガーするには、次の手順に従います。

1. ワークフローで **GET** リクエストを実行して、外部シグナルアクティビティのトリガー URL を取得します。

   `GET https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<workflowID>`

1. 返された URL で **POST** リクエストを実行して、ペイロードに **&quot;source&quot;** パラメーターを含むシグナルアクティビティをトリガーします。 この属性は必須で、トリガーするリクエストソースを指定できます。

パラメーターを使用してワークフローを呼び出す場合は、**&quot;parameters&quot;** 属性を指定してペイロードに追加します。 構文は、パラメーターの名前の後にその値が続くことで構成されます（次のタイプがサポートされています。**string**、**number**、**boolean** および **date/time**）。

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
>パラメーターをペイロードに追加する場合は、その **name** と **type** の値が、外部シグナル アクティビティで宣言された情報と一致していることを確認します。 さらに、ペイロードサイズは 64Ko を超えないようにする必要があります。

<br/>

***リクエストのサンプル***

ワークフローでGET リクエストを実行します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/workflow/execution/<workflowID> \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

ワークフローシグナル アクティビティと、関連するトリガー URL を返します。

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

シグナルアクティビティをトリガーするには、「source」を持つトリガー URL で POST リクエストを実行します。 パラメーターを使用してワークフローを呼び出す場合は、「parameters」属性を追加します。

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

パラメーターの 1 つが外部シグナル アクティビティで宣言されていない場合、POST リクエストは以下のエラーを返し、どのパラメーターが欠落しているかを示します。

```
RST-360011 An error has occurred - please contact your administrator.
'contentURL' parameter isn't defined in signal activity.
XTK-170006 Unable to parse expression 'HandleTrigger(@name, $(source), $({parameters}))'.
RST-360000 Error while assessing 'HandleTrigger(@name, $(source), $({parameters}))' expression ('xtk:workflow:execution/activities/signal/trigger' resource)
```
