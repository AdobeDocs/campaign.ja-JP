---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '58'
ht-degree: 5%
---
# getAsModel

```text
XML parentOut = getAsModel ( String refIdName, Number refIdValue, XML selection, XML parentIn )
```

## パラメーター

関連付けるエンティティの識別子を含む&#x200B;**refIdName**&#x200B;属性（「delivery-id」など）

**refIdValue**&#x200B;関連付けるエンティティの識別子（&#39;refIdName&#39;の値）

選択したテンプレート IDを含む&#x200B;**selection**&#x200B;要素

**parentIn**&#x200B;既存のシードアドレスを含む要素

## 戻り値

**parentOut**&#x200B;新しいテンプレートが追加された要素を返します

## 機能

**スキーマ：** [nms:seedMember](s-nms-seedmember.md)

**静的：**

はい
