---
title: イベントの説明について
description: SOAP メソッドを使用して、Adobe Campaign Classic でトランザクションメッセージのイベントを管理する方法を学ぶ
feature: Transactional Messaging
role: User
level: Beginner, Intermediate
exl-id: 2f679d1c-4eb6-4b3c-bdc5-02d3dea6b7d3
source-git-commit: c044b391c900e8ff82147f2682e2e4f91845780c
workflow-type: tm+mt
source-wordcount: '754'
ht-degree: 100%

---

# イベントの説明について {#about-event-desc}

## トランザクションメッセージのデータモデル {#about-mc-datamodel}

トランザクションメッセージは Adobe Campaign のデータモデルに依存し、独立したテーブルを 2 つ追加で使用します。これらのテーブル（**NmsRtEvent** および **NmsBatchEvent**）には同じフィールドが含まれており、一方でリアルタイムイベントを管理し、もう一方でバッチイベントを管理します。

## SOAP メソッド {#soap-methods}

本節では、トランザクションメッセージモジュールのスキーマに関連する SOAP メソッドの詳細を説明します。

2 つの **PushEvent** または **PushEvents** SOAP メソッドは、2 つの **nms:rtEvent** と **nms:BatchEvent** データスキーマに関連付けられています。イベントのタイプが「バッチ」なのか「リアルタイム」なのかの判断は、情報システムがおこないます。

* **PushEvent** では、メッセージに 1 つのイベントを挿入することができ、
* **PushEvents** では、メッセージに一連の複数のイベントを挿入することができます。

両方のメソッドにアクセスする WSDL パスは：

* **http://hostname/nl/jsp/schemawsdl.jsp?schema=nms:rtEvent** で、リアルタイムタイプのスキーマにアクセスできます。
* **http://hostname/nl/jsp/schemawsdl.jsp?schema=nms:batchEvent** で、バッチタイプのスキーマにアクセスできます。

どちらのメソッドにも、トランザクションメッセージモジュールにログオンするための **`<urn:sessiontoken>`** 要素が含まれています。信頼済み IP アドレス経由の識別方法を使用することをお勧めします。セッショントークンを取得するには、ログオン SOAP 呼び出しを実行してから、トークンを取得した後でログオフします。同じトークンを 複数の RT 呼び出しに使用します。この節に含まれる例では、推奨されるセッショントークン方式を使用しています。

ロードバランササーバーを使用している場合は、（RT メッセージのレベルで）ユーザー／パスワード認証を使用できます。例：

```
<PushEvent xmlns="urn:nms:rtEvent">
<sessiontoken>mc/PASSWORD</sessiontoken>
<domEvent>
<rtEvent wishedChannel="41" type="rt_MobileJourney_iOS_Push" registrationToken="c3ddc8aaecc24822df25d0f49865cca61ea3f86c61bfa53ae4d37294e37f4a1c" hashlpId="27EE7571EC14DBA23B9B5CC0EF79BB782DAECF4C03C88E5D92CC9B9DAC4E5DDA" correlationId="415b7593-4f6f-e911-811f-00505691247c" xmlns="">
<mobileApp uuid="236B24DC-C073-412F-8BCB-AC7207096258" _operation="none"/>
<ctx>...</ctx>
</rtEvent>
</domEvent>
</PushEvent>
```

**PushEvent** メソッドは、イベントを格納する **`<urn:domevent>`** パラメーターで構成されています。

**PushEvents** メソッドは、複数イベントを格納する **`<urn:domeventcollection>`** パラメーターで構成されています。

PushEvent の使用例：

```
<urn:PushEvent>

 <sessiontoken>___921f9b38-72ac-49ad-b481-ab32973efc50</sessiontoken>
 
 <urn:domEvent>
 
   <rtEvent>
   
   ...
   
   </rtEvent>
 
 </urn:domEvent>

</urn:PushEvent>
```

>[!NOTE]
>
>**PushEvents** メソッドを呼び出す場合、標準 XML に準拠するには親 XML 要素を追加する必要があります。この XML 要素が、イベント内に含まれる様々な **`<rtevent>`** 要素の外枠となります。

PushEvents の使用例：

```
<urn:PushEvents>

 <sessiontoken>___921f9b38-72ac-49ad-b481-ab32973efc50</sessiontoken>
 
 <urn:domEventCollection>
 
   <Events>
   
     <rtEvent>... </rtEvent>
     
     <rtEvent>... </rtEvent>
     
     ...
   
   </Events>
 
 </urn:domEventCollection>

</urn:PushEvents>
```

**`<rtevent>`** 要素と **`<batchevent>`** 要素には、一連の属性に加え、必須の子要素として、メッセージデータ統合用の要素 **`<ctx>`** があります。

>[!NOTE]
>
>**`<batchevent>`** 要素を使用すると、「バッチ」キューにイベントを追加できます。「リアルタイム」キューにイベントを追加するには、**`<rtevent>`** 要素を使用します。

**`<rtevent>`** 要素と **`<batchevent>`** 要素に必須の属性は、@type と @email です。@type の値は、実行インスタンスを設定した際に定義した項目別リストの値と同じである必要があります。この値で、配信の間、イベントの内容にリンクされるテンプレートを定義できます。

`<rtevent> configuration example:`

```
<rtEvent type="order_confirmation" email="john.doe@domain.com" origin="eCommerce" wishedChannel="0" externalId="1242" mobilePhone="+33620202020"> 
```

この例では、2 つのチャネルが指定されています。メールアドレスと携帯電話番号です。**wishedChannel** では、イベントをメッセージに変換する際に使用するチャネルを選択できます。値「0」はメールチャネルに、「1」はモバイルチャネルに対応します。

イベントの配信を遅らせる場合には、**[!UICONTROL scheduled]** フィールドに続いて希望する日付を追加します。イベントは、指定した日付にメッセージに変換されます。

@wishedChannel と @emailFormat 属性には、数値を入力することをお勧めします。データスキーマの説明に、数値とラベルを関連付ける関数表が記載されています。

>[!NOTE]
>
>許可されているすべての属性とその値についての詳細は、**nms:rtEvent** および **nms:BatchEvent** データスキーマの説明に記載されています。

**`<ctx>`** 要素には、メッセージデータを格納します。この XML コンテンツはオープンなので、配信するコンテンツに合わせて設定できます。

>[!NOTE]
>
>配信中にサーバーに過大な負荷をかけないようにするには、メッセージに含まれる XML ノードの数とサイズを最適化することが重要です。

データ例：

```
   <ctx>
               <client>
                        <firstname>John</firstname>
                        <lastname>Doe</lastname>
               </client>
               <action>
                         <type>Order confirmation</type>
                          <number>CN23453</number>
               </action>
               <orderdetails>
                          <article num="1">
                                   <name>Generic USB key</name>
                                   <price>20</price>
                           </article>
               </orderdetails>
    </ctx>
```

## SOAP 呼び出しから返される情報 {#information-returned-by-the-soap-call}

イベントを受け取ると、Adobe Campaign は一意の戻り識別子を生成します。これが、アーカイブバージョンのイベントの識別子になります。

>[!IMPORTANT]
>
>SOAP 呼び出しを受け取ると、Adobe Campaign はメールアドレスの形式を検証します。メールアドレスの形式が正しくない場合、エラーを返します。

* イベント処理が成功した場合にメソッドが返す識別子の例：

  ```
  <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns="http://xml.apache.org/xml-soap" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
     <SOAP-ENV:Body>
        <urn:PushEventResponse SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:urn="urn:nms:rtEvent">
           <plId xsi:type="xsd:long">72057594037935966</plId>
        </urn:PushEventResponse>
     </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>
  ```

戻り識別子の値が 0 より大きい数値の場合、Adobe Campaign 内でイベントのアーカイブが成功したことを意味します。

しかし、イベントの処理に失敗すると、このメソッドはエラーメッセージまたは 0 の値を返します。

* クエリにログインが含まれていない、または指定したオペレーターに必要な権限がなく、失敗したイベントの処理例：

  ```
  <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
     <SOAP-ENV:Body>
        <SOAP-ENV:Fault>
           <faultcode>SOAP-ENV:Client</faultcode>
           <faultstring xsi:type="xsd:string">Error while reading parameters of method 'PushEvent' of service 'nms:rtEvent'.</faultstring>
           <detail xsi:type="xsd:string">Invalid login or password. Connection denied.</detail>
        </SOAP-ENV:Fault>
     </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>
  ```

* クエリのエラー（XML 分類に従っていない）により失敗したイベントの例：

  ```
  <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
     <SOAP-ENV:Body>
        <SOAP-ENV:Fault>
           <faultcode>SOAP-ENV:Client</faultcode>
           <faultstring xsi:type="xsd:string">The XML SOAP message is invalid (service 'PushEvent', method 'nms:rtEvent').</faultstring>
           <detail xsi:type="xsd:string"><![CDATA[(16:8) : Expected end of tag 'rtevent'
  Error while parsing XML string '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:nms:rtEvent">
     <soapenv:Header/>
     <soapenv:Body>
        <urn:PushEvent>
           <urn:sessiontoken>mc/</urn:sessiontoken>
           <urn:domEvent>
  <rtevent type="create_account" email="esther.hall@adobe.com" origin="eCommerce" wishedChannel="email" 
        externalId="1596" language="english" country="EN" emailFormat="2"
        mobilePhone="+447700123123">
    <ctx>
     <website name="eCommerce" url="http://www.eCo']]></detail>
        </SOAP-ENV:Fault>
     </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>
  ```

* 失敗し、0 の識別子を返したイベントの例（誤ったメソッド名）：

  ```
  <SOAP-ENV:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:ns="http://xml.apache.org/xml-soap" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
     <SOAP-ENV:Body>
        <urn:PushEventResponse SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:urn="urn:nms:rtEvent">
           <plId xsi:type="xsd:long">0</plId>
        </urn:PushEventResponse>
     </SOAP-ENV:Body>
  </SOAP-ENV:Envelope>
  ```
