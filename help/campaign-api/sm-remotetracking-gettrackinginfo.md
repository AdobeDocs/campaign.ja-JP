---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '45'
ht-degree: 33%
---
# GetTrackingInfo

リモートリダイレクションサーバーに対して、配信アクションに関する情報をダウンロードすることを許可します。

```text
XML document = GetTrackingInfo ( String instance, String dbId, String deliveryId )
```

## パラメーター

**インスタンス** インスタンス名

配信を実行する顧客の&#x200B;**dbId** データベース ID

**deliveryId**&#x200B;配信ID。

## 戻り値

この配信のトラッキング情報を含む&#x200B;**ドキュメント** ドキュメント

## 機能

**スキーマ：** [nms:remoteTracking](s-nms-remotetracking.md)

**静的：**

はい
