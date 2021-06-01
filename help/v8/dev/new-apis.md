---
product: Adobe Campaign
title: Campaign v8 の新しい API
description: Campaign v8 の新しい API
feature: 概要
role: Data Engineer
level: Beginner
source-git-commit: 5363950db5092bc7e0a72a0823db1132a17dda33
workflow-type: tm+mt
source-wordcount: '432'
ht-degree: 7%

---

# Campaign の新しい API{#gs-new-api}

Campaign v8には、CampaignローカルデータベースとCloudデータベースの間のデータを管理する2つの新しいAPIが付属しています。 これらを使用するための前提条件は、スキーマ上でステージングメカニズムを有効にすることです。 [詳細情報](staging.md)。

* 取得API:**xtk.session.ingest**

   このAPIは、データ挿入専用です。 [詳細情報](#data-insert-api)

* データ更新/削除API:**xtk.session.ingestExt**

   このAPIは、データを更新または削除するために使用されます。 [詳細情報](#data-update-api)

専用の組み込みワークフローが、クラウドデータベースのデータを同期します。

## データの挿入{#data-insert-api}

**xtk.session.ingest** APIは、データ挿入専用です。 更新/削除はありません。

### 紐付けなしで挿入

**ワークフロー内**

**Javascriptコード**&#x200B;アクティビティで次のコードを使用して、紐付けなしでCloudデータベースにデータを挿入します。

```
var xmlStagingSampleTable = <sampleTableStg
                                testcol1="testValue1"
                                testcol2="testValue2"
                                xtkschema="dem:sampleTableStg">
                            </sampleTableStg>;
strUuid = xtk.session.Ingest(xmlStagingSampleTable);
logInfo(strUuid);
```

ワークフローが実行されると、ステージングテーブルが期待どおりにフィードされます。

**SOAP呼び出しから**

1. 認証トークンを取得します。
1. APIのトリガー。 ペイロードは次のとおりです。

   ```
   <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:xtk:session">
   <soapenv:Header/>
   <soapenv:Body>
       <urn:Ingest>
           <urn:sessiontoken>___xxxxxxx-xxxx-xxx-xxx-xxxxxxxxxxx</urn:sessiontoken>
           <urn:domDoc>
               <sampleTableStg
                   testcol1="Test Value 1 (from SOAP)"
                   testcol2="Test Value 2 (from SOAP)"
                   xtkschema="dem:sampleTableStg">
               </sampleTableStg>
           </urn:domDoc>
       </urn:Ingest>
   </soapenv:Body>
   </soapenv:Envelope>
   ```

1. UUIDがSOAP応答に返されます。

   ```
   <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns="urn:wpp:default" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
       <IngestResponse SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns="urn:wpp:default">
           <pstrSUuids xsi:type="xsd:string">e1e7c8b3-6f79-44da-a72d-49ed0f73db2c</pstrSUuids>
       </IngestResponse>
   </SOAP-ENV:Body>
   </SOAP-ENV:Envelope>
   ```

その結果、ステージングテーブルが期待どおりにフィードされます。

![](assets/no-reconciliation.png)

### 紐付けと共に挿入

**ワークフロー内**

**Javascriptコード**&#x200B;アクティビティで次のコードを使用し、紐付けを使用してCloudデータベースにデータを挿入します。

```
var xmlStagingSampleTable = <sampleTableStg  _key="@id" id="ABC12345"
                              testcol1="testValue1"
                              testcol2="testValue2"
                              xtkschema="dem:sampleTableStg">
                            </sampleTableStg>;         
strUuid = xtk.session.Ingest(xmlStagingSampleTable);
logInfo(strUuid);
```

ワークフローが実行されると、ステージングテーブルが期待どおりにフィードされます。

![](assets/with-reconciliation.png)


**SOAP呼び出しから**

1. 認証トークンを取得します。
1. APIのトリガー。 ペイロードは次のとおりです。

   ```
   <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:xtk:session">
   <soapenv:Header/>
   <soapenv:Body>
     <urn:Ingest>
        <urn:sessiontoken>___5e71f4bf-d38a-4ba8-ac15-35a958f7f138</urn:sessiontoken>
        <urn:domDoc>
           <sampleTableStg  _key="@id" id="ABDCD321"
                testcol1="Test Value 1 (from SOAP)"
                testcol2="Test Value 2 (from SOAP)"
                xtkschema="dem:sampleTableStg">
            </sampleTableStg>
        </urn:domDoc>
     </urn:Ingest>
    </soapenv:Body>
   </soapenv:Envelope>
   ```

1. この場合、UUIDはペイロードで指定されているので、応答に返されません。 応答は次のとおりです。

   ```
   <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns="urn:wpp:default" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
       <IngestResponse SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns="urn:wpp:default">
           <pstrSUuids xsi:type="xsd:string"/>
       </IngestResponse>
   </SOAP-ENV:Body>
   </SOAP-ENV:Envelope>
   ```

その結果、ステージングテーブルが期待どおりにフィードされます。

## データの更新または削除{#data-update-api}

**xtk.session.IngestExt** APIは、データの更新/削除用に最適化されます。 挿入のみを行う場合は、**xtk.session.ingest**&#x200B;を選択します。 レコードキーがステージングテーブルにないかどうかを示す挿入が機能します。

### 挿入/更新

**ワークフロー内**

**JavaScriptコード**&#x200B;アクティビティで次のコードを使用して、Cloudデータベース内のデータを更新します。

```
var xmlStagingRecipient = <sampleTableStg  _key="@id" id="ABC12345"
                              testcol1="testValue A (updated)"
                              testcol2="testValue B (updated)"
                              xtkschema="dem:sampleTableStg">
                            </sampleTableStg>;
xtk.session.IngestExt(xmlStagingRecipient);
```

ワークフローが実行されると、ステージングテーブルが期待どおりに更新されます。

![](assets/updated-data.png)

**SOAP呼び出しから**


1. 認証トークンを取得します。
1. APIのトリガー。 ペイロードは次のとおりです。

   ```
   <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:xtk:session">
   <soapenv:Header/>
   <soapenv:Body>
       <urn:IngestExt>
           <urn:sessiontoken>___444cd168-a1e2-4fb6-a2a8-73be9f133489</urn:sessiontoken>
           <urn:domDoc>
           <sampleTableStg  _key="@id" id="ABDCD321"
                   testcol1="Test Value E (from SOAP)"
                   testcol2="Test Value F (from SOAP)"
                   xtkschema="dem:sampleTableStg">
               </sampleTableStg>
           </urn:domDoc>
       </urn:IngestExt>
   </soapenv:Body>
   </soapenv:Envelope>
   ```

1. SOAP応答は次のとおりです。

   ```
   <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns="urn:wpp:default" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
       <IngestExtResponse SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns="urn:wpp:default"/>
   </SOAP-ENV:Body>
   </SOAP-ENV:Envelope>
   ```

その結果、ステージングテーブルは期待どおりに更新されます。

## 購読管理 {#sub-apis}

Campaignの購読管理については、[このページ](../start/subscriptions.md)で説明しています。

購読および購読解除データを挿入するには、Campaignローカルデータベースの[ステージングメカニズム](staging.md)が必要です。 購読者情報は、ローカルデータベースのステージングテーブルに一時的に格納され、同期ワークフローは、このデータをローカルデータベースからCloudデータベースに送信します。 その結果、購読プロセスと購読解除プロセスは&#x200B;**非同期**&#x200B;になります。 オプトインおよびオプトアウトのリクエストは、特定のテクニカルワークフローを通じて1時間ごとに処理されます。 [詳細情報](../config/replication.md#tech-wf)


**関連トピック**

* [Campaign Classicv7 JSAPI](https://docs.adobe.com/content/help/en/campaign-classic/technicalresources/api/p-1.html)
