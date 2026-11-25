---
title: Campaign v8 の新しい API
description: Campaign v8 の新しい API
feature: Architecture, API, FFDA
role: Developer
level: Intermediate
exl-id: dd822f88-b27d-4944-879c-087f68e79825
TQID: 'https://experienceleague.adobe.com/QH0Vnh9hi9bHuaY16UTn26NkuIIsb04dyNMhzkrpVdQ'
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: b12f6872-9271-4369-85e5-86969a0b99a2
    internal-label: APIs
  - id: bae31391-3416-5fbd-bc4b-2cdcae2922db
    internal-label: Architecture
  - id: 702a1f63-4da5-5981-83b3-4d5b14e90420
    internal-label: FFDA
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
source-git-commit: 9d4ec9f8454acd6a939221075251c265a1ffd672
workflow-type: tm+mt
source-wordcount: '492'
ht-degree: 63%
---
# 特定の FFDA Campaign API{#gs-new-api}

[エンタープライズ（FFDA）デプロイメント](enterprise-deployment.md)のコンテキストでは、Campaign v8 には、Campaign のローカルデータベースと Cloud データベースの間のデータを管理するための 2 つの特定の API が付属しています。 それらを使用するための前提条件は、スキーマ上でステージングメカニズムを有効にすることです。 [詳細情報](staging.md)

* Ingestion  API：**xtk.session.ingest**

  この API は、データ挿入専用です。 [詳細情報](#data-insert-api)

* データ更新／削除 API：**xtk.session.ingestExt**

  この API は、データを更新または削除するために使用されます。 [詳細情報](#data-update-api)

専用のビルトインワークフローが、Cloud データベースのデータを同期します。

## データの挿入{#data-insert-api}

**xtk.session.ingest** API は、データ挿入専用です。 更新／削除はありません。

### 紐付けなしで挿入{#insert-no-reconciliation}

**ワークフロー内**

**Javascript コード**&#x200B;アクティビティで次のコードを使用して、紐付けなしで Cloud データベースにデータを挿入します。

```javascript
var xmlStagingSampleTable = <sampleTableStg
                                testcol1="testValue1"
                                testcol2="testValue2"
                                xtkschema="dem:sampleTableStg">
                            </sampleTableStg>;
strUuid = xtk.session.Ingest(xmlStagingSampleTable);
logInfo(strUuid);
```

ワークフローが実行されると、ステージングテーブルが期待どおりにフィードされます。

**SOAP 呼び出しから**

1. 認証トークンを取得します。
1. API のトリガー。 ペイロードは次のとおりです。

   ```xml
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

1. UUIDは、SOAPのレスポンスで返されます。

   ```xml
   <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns="urn:wpp:default" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
       <IngestResponse SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns="urn:wpp:default">
           <pstrSUuids xsi:type="xsd:string">e1e7c8b3-6f79-44da-a72d-49ed0f73db2c</pstrSUuids>
       </IngestResponse>
   </SOAP-ENV:Body>
   </SOAP-ENV:Envelope>
   ```

その結果、ステージングテーブルが期待どおりに供給されます。

![ ステージング スキーマのサンプル テーブル （ステージング） コンテンツに、テスト列1とテスト列2の値を含む4つのレコードが一覧表示されています](assets/no-reconciliation.png)

### 紐付けして挿入

**ワークフロー内**

**Javascript コード**&#x200B;アクティビティで次のコードを使用し、紐付けを使用して Cloud データベースにデータを挿入します。

```javascript
var xmlStagingSampleTable = <sampleTableStg  _key="@id" id="ABC12345"
                              testcol1="testValue1"
                              testcol2="testValue2"
                              xtkschema="dem:sampleTableStg">
                            </sampleTableStg>;         
strUuid = xtk.session.Ingest(xmlStagingSampleTable);
logInfo(strUuid);
```

ワークフローが実行されると、ステージングテーブルが期待どおりにフィードされます。

![ ステージング スキーマのサンプル テーブル （ステージング） コンテンツに、ABC12345およびABDCD321](assets/with-reconciliation.png)を含む6つのレコードが一覧表示されるようになりました


**SOAP 呼び出しから**

1. 認証トークンを取得します。
1. API のトリガー。 ペイロードは次のとおりです。

   ```xml
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

1. この場合、UUIDはペイロードで指定されているため、応答に返されません。 応答は次のとおりです。

   ```xml
   <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns="urn:wpp:default" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
       <IngestResponse SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns="urn:wpp:default">
           <pstrSUuids xsi:type="xsd:string"/>
       </IngestResponse>
   </SOAP-ENV:Body>
   </SOAP-ENV:Envelope>
   ```

その結果、ステージングテーブルが期待どおりに供給されます。

## データの更新または削除{#data-update-api}

**xtk.session.IngestExt** APIは、データの更新/削除に最適化されています。 挿入のみをおこなう場合は、**xtk.session.ingest** を選択します。 レコードキーがステージングテーブルにない場合は、挿入が機能します。

### 挿入／更新

**ワークフロー内**

**JavaScript コード**&#x200B;アクティビティで次のコードを使用して、Cloud データベース内のデータを更新します。

```javascript
var xmlStagingRecipient = <sampleTableStg  _key="@id" id="ABC12345"
                              testcol1="testValue A (updated)"
                              testcol2="testValue B (updated)"
                              xtkschema="dem:sampleTableStg">
                            </sampleTableStg>;
xtk.session.IngestExt(xmlStagingRecipient);
```

ワークフローが実行されると、ステージングテーブルが期待どおりに更新されます。

![ レコード ABC12345にtestValue A （更新）とtestValue B （更新）が表示されるステージング テーブル コンテンツ ](assets/updated-data.png)

**SOAP 呼び出しから**

1. 認証トークンを取得します。
1. API のトリガー。 ペイロードは次のとおりです。

   ```xml
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

1. SOAP 応答は次のとおりです。

   ```xml
   <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns="urn:wpp:default" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
   <SOAP-ENV:Body>
       <IngestExtResponse SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns="urn:wpp:default"/>
   </SOAP-ENV:Body>
   </SOAP-ENV:Envelope>
   ```

その結果、ステージングテーブルが期待どおりに更新されます。

## 購読管理 {#sub-apis}

Campaignでのサブスクリプション管理については、[Campaignでのサブスクリプションとサブスクリプション解除の管理](../start/subscriptions.md)を参照してください。

購読や購読解除のデータは、Campaign ローカルデータベースの[ステージングメカニズム](staging.md)を使用して挿入されます。 サブスクライバー情報は、一時的にローカルデータベースのステージングテーブルに保存され、同期ワークフローは、このデータをローカルデータベースからクラウドデータベースに送信します。 そのため、購読や購読解除のプロセスは&#x200B;**非同期**&#x200B;でおこなわれます。 オプトインやオプトアウトのリクエストは、特定のテクニカルワークフローによって 1 時間ごとに処理されます。 [詳細情報](replication.md#workflows)


**関連トピック**

* [Campaign JSAPI](https://experienceleague.adobe.com/ja/tools/campaign-api){target="_blank"}
