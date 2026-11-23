---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '76'
ht-degree: 3%
---
# EvaluateContent

注文にリンクされた配信のコンテンツを評価します。 この評価は、オペレーター権限を使用して注文する場合と、ローカルキャンペーンが作成される前に実行されます。

```text
XML result = EvaluateContent ( XML order, Number deliveryId, String contentType, Number seedMemberId )
```

## パラメーター

注文情報を含む&#x200B;**order**&#x200B;要素。

評価する配信の&#x200B;**deliveryId** ID。

**contentType**&#x200B;返すコンテンツのタイプ（電子メールの場合はHTMLまたはテキスト、他のチャネルの場合は空の文字列）。

コンテンツのパーソナライゼーションに使用される&#x200B;**seedMemberId** シードアドレス ID。

## 戻り値

**result**&#x200B;はコンテンツを評価しました。

## 機能

**スキーマ：** [nms:localOrder](s-nms-localorder.md)

**静的：**

はい
