---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '41'
ht-degree: 31%
---
# RecipientSubscribe

選択した受信者を情報サービスに登録または登録解除。

```text
XML confirmationIds = RecipientSubscribe ( XML recipientList, XML serviceList, Boolean subscribe, XML sendConfirmation )
```

## パラメーター

**recipientList**&#x200B;受信者リスト

**serviceList** サービスのリスト

**購読**&#x200B;受信者の購読/購読解除

**sendConfirmation**&#x200B;確認メッセージを送信する

## 戻り値

**confirmationIds**&#x200B;確認IDのリスト

## 機能

**スキーマ：** [nms:subscription](s-nms-subscription.md)

**静的：**

はい
