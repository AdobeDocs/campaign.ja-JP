---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '52'
ht-degree: 17%
---
# CreateInstanceEx

トラッキングインスタンスを作成するために使用されました

```text
CreateInstanceEx ( String instanceName, String hosts, String dbId, String cryptedPwd, String lang, String imsOrgId )
```

## パラメーター

作成するインスタンスの&#x200B;**instanceName**&#x200B;名

インスタンスに関連付けられている&#x200B;**ホスト** DNS マスク

配信を実行する顧客の&#x200B;**dbId** データベース ID

トラッキングに使用される&#x200B;**cryptedPwd**&#x200B;暗号化パスワード

**lang** インスタンス言語

**imsOrgId** IMS組織ID

## 戻り値

なし。

## 機能

**スキーマ：** [nms:remoteTracking](s-nms-remotetracking.md)

**静的：**

はい
