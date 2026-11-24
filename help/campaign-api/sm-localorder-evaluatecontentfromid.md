---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '74'
ht-degree: 4%
---
# EvaluateContentFromId

注文にリンクされた配信のコンテンツを評価します。 この評価は、オペレーター権限を使用して注文する場合と、ローカルキャンペーンが作成される前に実行されます。

```text
XML result = EvaluateContentFromId ( Number orderId, Number deliveryId, String contentType, Number seedMemberId )
```

## パラメーター

**orderId**&#x200B;注文ID。

評価する配信の&#x200B;**deliveryId** ID。

**contentType**&#x200B;返すコンテンツのタイプ（電子メールの場合はHTMLまたはテキスト、他のチャネルの場合は空の文字列）。

コンテンツのパーソナライゼーションに使用される&#x200B;**seedMemberId** シードアドレス ID。

## 戻り値

**result**&#x200B;はコンテンツを評価しました。

## 機能

**スキーマ：** [nms:localOrder](s-nms-localorder.md)

**静的：**

はい
