---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '48'
ht-degree: 6%
---
# CreateRequestByName

名前空間内部名を使用して新しいプライバシーリクエストを作成する

```text
Number id = CreateRequestByName ( String namespaceName, String reconciliationValue, Number type, Boolean confirmDeletePending Number regulation )
```

## パラメーター

**namespaceName**&#x200B;名前空間の内部名

**reconciliationValue**&#x200B;紐付け値

**type**&#x200B;紐付け値

データを削除する前に&#x200B;**confirmDeletePending**&#x200B;要求を確認する

次の値を持つ&#x200B;**regulation** Regulation タイプ：

```xml
           
               <value label="GDPR" name="gdpr" value="1"/>
            <value label="CCPA" name="ccpa" value="2"/>
            <value label="PDPA" name="pdpa" value="3"/>
            <value label="LGPD" name="lgpd" value="4"/>
           
           
```

## 戻り値

新しく作成されたリクエストの&#x200B;**id** ID

## 機能

**スキーマ：** [nms:privacyRequest](s-nms-privacyrequest.md)

**静的：**

はい
