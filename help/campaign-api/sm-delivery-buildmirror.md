---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '37'
ht-degree: 21%
---
# BuildMirror

HTML ミラーページを作成します。

```text
[ String content, Number responseCode ] = BuildMirror ( String crypted )
```

## パラメーター

**crypted** メッセージと配信部分の識別子に対する可逆暗号化

## 戻り値

**content** ミラーページのコンテンツ

エラーが発生した場合の&#x200B;**responseCode** HTTP応答

## 機能

**スキーマ：** [nms:delivery](s-nms-delivery.md)

**静的：**

はい
