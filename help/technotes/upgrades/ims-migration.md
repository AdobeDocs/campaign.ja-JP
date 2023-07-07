---
title: Adobe Developer Console へのテクニカルユーザーの移行
description: Campaign テクニカルオペレーターを Adobe Developer Console のテクニカルアカウントに移行する方法を学ぶ
source-git-commit: b71197027d9521fd648a0c2657b6b76a1aa7fc9a
workflow-type: ht
source-wordcount: '779'
ht-degree: 100%

---

# Adobe Developer Console への Campaign テクニカルオペレーターの移行 {#migrate-tech-users-to-ims}

Campaign v8.5 以降、Campaign v8 への認証プロセスが改善されています。テクニカルオペレーターは、[Adobe Identity Management System（IMS）](https://helpx.adobe.com/jp/enterprise/using/identity.html){target="_blank"}を使用して Campaign に接続する必要があります。テクニカルオペレーターは、API 統合用に明示的に作成された Campaign ユーザープロファイルです。この記事では、Adobe Developer Console でテクニカルオペレーターをテクニカルアカウントに移行するために必要な手順について詳しく説明します。

## 変更点{#ims-changes}

Campaign の標準ユーザーは、Adobe Identity Management System（IMS）により、Adobe ID を使用して Adobe Campaign コンソールに既に接続しています。セキュリティと認証プロセスを強化する取り組みの一環として、Adobe Campaign クライアントアプリケーションは、IMS テクニカルアカウントトークンを使用して Campaign API を直接呼び出すようになりました。

新しいサーバー間の認証プロセスについて詳しくは、[Adobe Developer Console ドキュメント](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/){target="_blank"}を参照してください。

この変更は、Campaign v8.5 以降に適用され、Campaign v8.6 以降は&#x200B;**必須**&#x200B;となります。


## 影響の有無{#ims-impacts}

Campaign API を使用している場合は、以下に説明するように、テクニカルオペレーターを Adobe Developer Console に移行する必要があります。

## 移行方法{#ims-migration-procedure}

### 前提条件{#ims-migration-prerequisites}

移行プロセスを開始する前に、アドビのテクニカルチームが既存のオペレーターグループとネームド権限を Adobe Identity Management System（IMS）に移行できるように、アドビ担当者にお問い合わせする必要があります。

### 手順 1 - Adobe Developer Console で Campaign プロジェクトを作成／更新{#ims-migration-step-1}

統合は、Adobe Developer Console 内の&#x200B;**プロジェクト**&#x200B;の一部として作成されます。プロジェクトについて詳しくは、[Adobe Developer Console ドキュメント](https://developer.adobe.com/developer-console/docs/guides/projects/){target="_blank"}を参照してください。

Campaign v8 ユーザーは、Adobe Developer Console にプロジェクトが既にあるはずです。そうでない場合は、プロジェクトを作成する必要があります。プロジェクトを作成する手順について詳しくは、[Adobe Developer Console ドキュメント](https://developer.adobe.com/developer-console/docs/guides/getting-started/){target="_blank"}を参照してください。

Campaign プロジェクトへのアクセス権があると、API、Adobe Campaign、I/O Management API などのサービスを追加できます。この移行では、**I/O Management API** と **Adobe Campaign** の API をプロジェクトに追加する必要があります。

![](assets/do-not-localize/ims-products-and-services.png)


### 手順 2 - サーバー間認証を使用してプロジェクトに API を追加{#ims-migration-step-2}

Adobe Developer Console でプロジェクトを作成したら、サーバー間認証を使用する API を追加します。OAuth サーバー間の資格情報の設定方法については、[Adobe Developer Console ドキュメント](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/implementation/){target="_blank"}を参照してください。

API が正常に接続されると、クライアント ID とクライアント秘密鍵を含む新しく生成された資格情報にアクセスしたり、アクセストークンを生成したりできます。

### 手順 3 - 製品プロファイルをプロジェクトに追加{#ims-migration-step-3}

以下に説明するように、Campaign 製品プロファイルをプロジェクトに追加できるようになりました。

1. Adobe Campaign API を開きます。
1. 「**製品プロファイルを編集**」ボタンをクリックします

   ![](assets/do-not-localize/ims-edit-api.png)

1. 関連するすべての製品プロファイルを API（「messagecenter」など）に割り当て、変更内容を保存します。
1. プロジェクトの「**資格情報の詳細**」タブに移動し、**テクニカルアカウントのメールアドレス**&#x200B;の値をコピーします。

### 手順 4 - クライアントコンソールでテクニカルオペレーターを更新 {#ims-migration-step-4}


この手順は、特定のフォルダー権限またはネームド権限がこのオペレーターに対して（オペレーターのグループ経由ではなく）定義されている場合にのみ必要です。

ここでは、Adobe Campaign クライアントコンソールで新しく作成したテクニカルオペレーターを更新する必要があります。既存のテクニカルオペレーターフォルダーの権限を新しいテクニカルオペレーターに適用する必要があります。
このオペレーターを更新するには、次の手順に従います。

1. Campaign クライアントコンソールのエクスプローラーから、**管理／アクセス管理／オペレーター**&#x200B;を参照します。
1. API に使用される既存のテクニカルオペレーターにアクセスします。
1. フォルダー権限を参照し、権限を確認します。
1. 新しく作成したテクニカルオペレーターに同じ権限を適用します。このオペレーターのメールアドレスは、以前にコピーした&#x200B;**テクニカルアカウントメールアドレス**&#x200B;の値です。
1. 変更内容を保存します。


>[!CAUTION]
>
>新しいテクニカルオペレーターは、Campaign クライアントコンソールに追加される API 呼び出しを 1 回以上実行する必要があります。
>

<!--

>[!CAUTION]
>
>After updating the authentication type for the technical operator, all API integrations with this technical operator will stop working. You must [update your API integrations](#ims-migration-step-6). 

To update the technical operator authentication mode to IMS, follow these steps:

1. From Campaign Client Console explorer, browse to the **Administration > Access Management > Operators**.
1. Edit the existing technical operator used for APIs.
1. Replace the **Name (login)** of this technical operator by the technical account email retrieved earlier.
1. Browse to the **Edit** button on the top left beside **File**, and select **Edit the XML source**.
1. Update the authentication mode to `ims`, as follows:

    ```javascript
    <operator 
    ...
        <access authenticationType="ims" ...
        ...
        </access>
    ...
    </operator>
    ```

1. Save your changes.

You can also update the technical operator programmatically, using SQL scripts or Campaign APIs. These modes help you automate the steps which update operator's name with associated Technical account email address and/or authentication type. 

* Use the following **SQL Script** to replace operator's name with associated email:

    ```sql
    UPDATE xtkoperator
    SET sauthenticationtype = 'ims',
            sname = '{email}'
    WHERE sname = '{name}' AND itype = 0;
    ```

* Use the following `queryDef.ExecuteQuery` **Campaign API** to fetch id of an operator for given technical operator:

    ```javascript
    <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <ExecuteQuery xmlns="urn:xtk:queryDef">
                <sessiontoken>{session_token}</sessiontoken>
                <entity>
                    <queryDef schema="xtk:operator" operation="select">
                        <select>
                            <node expr="@id"/>
                        </select>
                        <where>
                            <condition expr="@name='{name}'"/>
                            <condition expr="@type=0"/>
                        </where>
                    </queryDef>
                </entity>
            </ExecuteQuery>
        </soap:Body>
    </soap:Envelope>
    ```

* Use the following `session.Write` **Campaign API** to update name with given technical account email address:

    ```javascript
    <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <Write xmlns="urn:xtk:session">
                <sessiontoken>{session_token}</sessiontoken>
                <domDoc xsi:type='ns:Element' SOAP-ENV:encodingStyle='http://xml.apache.org/xml-soap/literalxml'>
                    <operator _operation="update" id="{id}" name="{email}" xtkschema="xtk:operator">
                        <access authenticationType="ims" />
                    </operator>
                </domDoc>
            </Write>
        </soap:Body>
    </soap:Envelope>
    ```
-->

### 手順 5 - 設定を検証 {#ims-migration-step-5}

接続を試すには、[Adobe Developer Console 資格情報ガイド](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/implementation/#generate-access-tokens){target="_blank"}で説明しているアクセストークンの生成手順に従って、提供されているサンプル cURL コマンドをコピーします。


### 手順 6 - サードパーティ API 統合を更新 {#ims-migration-step-6}

サードパーティシステムとの API 統合を更新する必要があります。

スムーズな統合のためのサンプルコードなど、API 統合手順について詳しくは、[Adobe Developer Console 認証ドキュメント](https://developer.adobe.com/developer-console/docs/guides/authentication/ServerToServerAuthentication/){target="_blank"}を参照してください。


### 手順 7 - 古いテクニカルオペレーターを削除 {#ims-migration-step-7}


すべての API／カスタムコードの移行後、テクニカルアカウントユーザーと統合します。古いテクニカルオペレーターは、Campaign クライアントコンソールから削除できます。

### SOAP 呼び出しのサンプル{#ims-migration-samples}

移行プロセスを完了して検証すると、SOAP 呼び出しは次のように更新されます。

* 移行前

  ```sql
  POST /nl/jsp/soaprouter.jsp HTTP/1.1
  Host: localhost:8080
  Content-Type: application/soap+xml;
  SOAPAction: "nms:rtEvent#PushEvent"
  charset=utf-8
  
  <?xml version="1.0" encoding="utf-8"?>  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:nms:rtEvent">
  <soapenv:Header/>
  <soapenv:Body>
      <urn:PushEvent>
          <urn:sessiontoken>SESSION_TOKEN</urn:sessiontoken>
          <urn:domEvent>
              <!--You may enter ANY elements at this point-->
              <rtEvent type="type" email="name@domain.com"/>
          </urn:domEvent>
      </urn:PushEvent>
  </soapenv:Body>
  </soapenv:Envelope>
  ```

* 移行後

  ```sql
  POST /nl/jsp/soaprouter.jsp HTTP/1.1
  Host: localhost:8080
  Content-Type: application/soap+xml;
  SOAPAction: "nms:rtEvent#PushEvent"
  charset=utf-8
  Authorization: Bearer <IMS_Technical_Token_Token>
  
  <?xml version="1.0" encoding="utf-8"?>  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:nms:rtEvent">
  <soapenv:Header/>
  <soapenv:Body>
      <urn:PushEvent>
          <urn:sessiontoken></urn:sessiontoken>
          <urn:domEvent>
              <!--You may enter ANY elements at this point-->
              <rtEvent type="type" email="name@domain.com"/>
          </urn:domEvent>
      </urn:PushEvent>
  </soapenv:Body>
  </soapenv:Envelope>
  ```
