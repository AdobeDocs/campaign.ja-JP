---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '46'
ht-degree: 32%
---
# 登録

情報サービスの受信者サブスクリプションを作成または更新

```text
Subscribe ( String serviceName, XML recipient, Boolean create )
```

## パラメーター

**serviceName**&#x200B;情報サービス名のリスト （コンマ区切り）

**受信者**&#x200B;受信者が登録し、オプションで作成します

**create**&#x200B;受信者が存在しない場合は作成します

## 戻り値

なし。

## 例

```javascript
      var recipient = {recipient: {_key: "email", email: "john.smith@example.com"}}
nms.subscription.Subscribe("SVC1", recipient, false)
        
```

## 機能

**スキーマ：** [nms:subscription](s-nms-subscription.md)

**静的：**

はい
