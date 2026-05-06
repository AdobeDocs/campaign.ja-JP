---
title: 必読
description: APIを使用する前に読む必要があります。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 9e2d1b59-55a5-4715-adfb-35191a9df536
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
workflow-type: tm+mt
source-wordcount: '380'
ht-degree: 1%

---

# 必読 {#must-read}

## 技術要件

* Adobe Campaign APIは、サーバー間でのみ使用する必要があります。
* 実装するユースケースがAdobe Campaign APIで許可されている規模と一致している場合は、必ずAdobeの技術担当者にお問い合わせください。
* AdobeIO アクセスを設定するには、特定の権限が必要です。問題が発生した場合は、Adobe サポートにお問い合わせください。

## 権限とアクセス

* デフォルトでは、Adobe Campaign APIは管理者コンテキストを使用するため、組織のユニットとロールは適用されません。
* Adobe Campaign APIは、ロールコンテキストから除外されます。
* 組織単位または役割を使用してAPIを設定する場合は、最初にAdobeの技術担当者にお問い合わせください。

## リソース表示域

すべてのAPI リソースは、**JSON**&#x200B;でURL拡張機能を使用するか、HTTP Accept ヘッダー内で使用できます。

`GET /profileAndServices/<resourceName>.json`

>[!NOTE]
>
>URLに拡張子がない場合、**json形式がcontent-typeのデフォルトの**&#x200B;になります。

<br/>

***サンプルをリクエスト***

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile.json \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

## プライマリキーとURL

* 自分でURLを作成しようとしない。 すべてのURLはAPIによって返されます。 ただし、トップレベルのリソース名に基づいてURLを作成することは可能です。

* 例を示す自動プライマリキー（PKey）値は、別の特定のデプロイメントで機能することを意図していません。 Adobe Campaign APIによって作成されます。

* Adobe Campaignによって生成された自動プライマリキー値は、外部のデータベースやweb サイトに保存しないでください。 データベース定義で特定のキーフィールドを生成し、開発中に使用する必要があります。

## カスタムキー {#custom-keys}

プロファイルリソースがカスタムキーフィールドで拡張されている場合は、Adobe Campaignによって生成された自動プライマリキーの代わりに、このフィールドをキーとして使用できます。

`GET /.../profileAndServicesExt/profile/<customKey>`

キーの値がオリジンのキーと異なる場合、またはAdobeが提供するキーの代わりに独自のビジネスキーをURIとして使用している場合、PATCH操作を使用してカスタムキーを変更することはできません。

**トップレベルのプロファイルリソース**&#x200B;にのみカスタムキーを使用してください。 URLはAPIによって返され、自分で作成することはできません。

<br/>

***サンプルリクエスト***

カスタムキーを使用してプロファイルのサブスクリプションを取得するには、カスタムキーに対してGET操作を実行します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServicesExt/profile/<customKey> \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

返された購読URLに対してGET リクエストを実行します。

```
-X GET <SUBSCRIPTION_URL> \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

プロファイルの購読のリストを返します。

```
"service": {
"PKey": "<PKEY>",
"href": "https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/service/<PKEY>",
"label": "Sport Newsletter",
"name": "SVC1",
"title": "Sport Newsletter (SVC1)"
}
```
