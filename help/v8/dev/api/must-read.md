---
title: 必読
description: API を使用する前に必ず読み取ってください。
audience: developing
content-type: reference
topic-tags: campaign-standard-apis
role: Developer
level: Experienced
exl-id: 9e2d1b59-55a5-4715-adfb-35191a9df536
source-git-commit: 00d9c3229b7bbabfec3b1750ae84978545fdc218
workflow-type: tm+mt
source-wordcount: '374'
ht-degree: 0%

---

# 必読 {#must-read}

## 技術的要件

* Adobe Campaign API はサーバー間でのみ使用する必要があります。
* 実装するユースケースがAdobe API で許可されているスケールに合致している場合は、常にAdobe Campaignの技術担当者に確認してください。
* AdobeIO アクセスの設定には特定の権限が必要です。問題が発生した場合は、Adobe サポートにお問い合わせください。

## 権限とアクセス

* デフォルトでは、Adobe Campaign API は Administrator コンテキストを使用するので、組織単位とロールは適用されません。
* Adobe Campaign API は、役割のコンテキストから除外されます。
* 1 人または複数の組織単位の役割で API を設定する場合は、最初にAdobeへの技術担当者にお問い合わせください。

## リソース表示域

すべての API リソースは、URL 拡張子を持つ **JSON** 内、または HTTP Accept ヘッダー内で使用できます。

`GET /profileAndServices/<resourceName>.json`

>[!NOTE]
>
>URL に拡張子がない場合、content-type では **json 形式がデフォルト** です。

<br/>

***サンプルを要求***

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServices/profile.json \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

## プライマリキーと URL

* URL は自分で作成しようとしないでください。 すべての URL が API によって返されます。 ただし、最上位リソース名に基づいて URL を作成することは可能です。

* 例を示す自動プライマリキー（PKey）値は、別の特定のデプロイメントで動作することを目的としていません。 Adobe Campaign API によって生成されます。

* Adobe Campaignで生成された自動プライマリキー値は、外部データベースや web サイトに保存しないでください。 データベース定義で特定のキーフィールドを生成し、開発時に使用する必要があります。

## カスタムキー {#custom-keys}

プロファイルリソースがカスタムキーフィールドを使用して拡張されている場合は、Adobe Campaignで生成される自動プライマリキーの代わりに、このフィールドをキーとして使用できます。

`GET /.../profileAndServicesExt/profile/<customKey>`

キー値がオリジンキーと異なる場合や、Adobeから提供されるキーの代わりに独自のビジネスキーを URI として使用している場合、PATCHの操作を使用してカスタムキーを変更することはできません。

カスタムキーは、**最上位のプロファイルリソース** にのみ使用します。 URL は API によって返され、決して自分で作成しないでください。

<br/>

***リクエストのサンプル***

カスタムキーを使用してプロファイルの購読を取得するには、カスタムキーに対してGET操作を実行します。

```
-X GET https://mc.adobe.io/<ORGANIZATION>/campaign/profileAndServicesExt/profile/<customKey> \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer <ACCESS_TOKEN>' \
-H 'Cache-Control: no-cache' \
-H 'X-Api-Key: <API_KEY>'
```

返された購読 URL に対してGET リクエストを実行します。

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
