---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '155'
ht-degree: 7%
---
# SubmitNotification

シナリオから通知を作成して送信します。

```text
Number notificationId = SubmitNotification ( String scenarioName, XML target )
```

## パラメーター

**scenarioName** テンプレートの内部名

**target**&#x200B;配信ターゲット母集団が、シナリオ内の母集団に置き換わりました

## 戻り値

**notificationId**&#x200B;通知ID

## 備考

警告：このAPIは、大量のデータを管理したり、リアルタイムで作業したりするようには構築されていません。 これは、1分間に最大数回の呼び出しを処理するように開発されています。 SubmitNotificationは、配信分析中にスレッドをブロックします。 これには数秒かかる場合があります。 「target」パラメーターは、配信ターゲットを指定します。 テンプレートで指定されたターゲットが上書きされます。 データベース内のターゲットに配信するには、ターゲット要素で次の構文を使用します。

```xml
<delivery>
  <targets>
    <deliveryTarget>
      <targetPart type='query' exclusion='false' ignoreDeleteStatus='false'>
        <where>
          <condition expr='[@folder-id] = 1050'/>
        </where>
      </targetPart>
    </deliveryTarget>
  </targets>
</delivery>
```

ファイル内のターゲットに配信するには：

```xml
<delivery>
  <targets>
    <deliveryFile upload='false'>
      <name>c:/tmp/myFile.csv</name>
    </deliveryFile>
  </targets>
</delivery>
```

ターゲット（実際にはターゲットとして使用されるファイルの内容）を明確に定義できます。

```xml
<delivery>
  <targets fromExternalSource='true'>
    <externalSource>MsgId|ClientId|Title|Name|FirstName|Mobile|Email|Market_segment|Product_propensity1|Product_propensity2|Product_propensity3|Product_propensity4|Support_Number|Amount|Threshold1|
                    000001234|M.|Martin|Peter|0650201020|pmartin@neolane.com|1|A1|A2|A3|A4|E12|120000|100000
    </externalSource>
  </targets>
</delivery>
```

テンプレートで定義されたターゲットを属性「\_keepTemplateTarget」で維持することもできます

```xml
<delivery>
  <targets _keepScenarioTarget='true'/>
</delivery>
```

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
