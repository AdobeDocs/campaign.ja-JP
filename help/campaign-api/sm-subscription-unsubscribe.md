---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '29'
ht-degree: 41%
---
# 登録解除

情報サービスから受信者を購読解除

```text
Unsubscribe ( String serviceName, XML recipient )
```

## パラメーター

**serviceName**&#x200B;情報サービス名のリスト （コンマ区切り）

**受信者**&#x200B;受信者

## 戻り値

なし。

## 例

```javascript
      var recipient = {recipient: {_key: "email", email: "john.smith@example.com"}}
nms.subscription.Unsubscribe("SVC1", recipient)
        
```

## 機能

**スキーマ：** [nms:subscription](s-nms-subscription.md)

**静的：**

はい
