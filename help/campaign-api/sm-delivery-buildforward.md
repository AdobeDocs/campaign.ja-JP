---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '36'
ht-degree: 19%
---
# BuildForward

HTML ページを作成します。

```text
[ String content, Number responseCode ] = BuildForward ( String crypted, XML parameters )
```

## パラメーター

**crypted** メッセージと配信部分の識別子に対する可逆暗号化

**パラメーター** URL パラメーター

## 戻り値

**content** ページコンテンツ

エラーが発生した場合の&#x200B;**responseCode** HTTP応答

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
