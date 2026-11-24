---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '58'
ht-degree: 15%
---
# CreateInstance

> 警告：この関数は、オンプレミス環境で使用できます。

トラッキングインスタンスを作成するために使用されました

```text
CreateInstance ( String instanceName, String hosts, String dbId, String cryptedPwd, String lang )
```

## パラメーター

作成するインスタンスの&#x200B;**instanceName**&#x200B;名

インスタンスに関連付けられている&#x200B;**ホスト** DNS マスク

配信を実行する顧客の&#x200B;**dbId** データベース ID

トラッキングに使用される&#x200B;**cryptedPwd**&#x200B;暗号化パスワード

**lang** インスタンス言語

## 戻り値

なし。

## 機能

**スキーマ：** [nms:remoteTracking](s-nms-remotetracking.md)

**静的：**

はい
