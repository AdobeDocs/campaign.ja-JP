---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '67'
ht-degree: 19%
---
# CreateTrackingInstanceEx

リダイレクトサーバーでトラッキングインスタンスを作成または設定

```text
CreateTrackingInstanceEx ( String internalPwd, String serverUrl, String secureServerUrl, String serverUrlList, String instanceName, String cryptedPassword, String host, String imsOrgId )
```

## パラメーター

**internalPwd**&#x200B;内部パスワード

**serverUrl** トラッキングサーバーの外部URL

**secureServerUrl** トラッキングサーバーの外部セキュア URL

**serverUrlList** トラッキングサーバーの内部URL

作成するインスタンスの&#x200B;**instanceName**&#x200B;名

**cryptedPassword**&#x200B;暗号化されたパスワード

インスタンスに関連付けられている&#x200B;**ホスト** DNS マスク

**imsOrgId** IMS組織ID

## 戻り値

なし。

## 機能

**スキーマ：** [nms:trackingUrl](s-nms-trackingurl.md)

**静的：**

はい
