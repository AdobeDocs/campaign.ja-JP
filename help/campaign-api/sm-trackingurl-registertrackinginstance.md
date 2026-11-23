---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '56'
ht-degree: 28%
---
# RegisterTrackingInstance

(データベース識別子を設定することで) リダイレクションサーバーのトラッキングインスタンスを承認します。

```text
RegisterTrackingInstance ( String serverUrl, String secureServerUrl, String serverUrlList, String instanceName, String cryptedPassword )
```

## パラメーター

**serverUrl** トラッキングサーバーの外部URL

**secureServerUrl** トラッキングサーバーの外部セキュア URL

**serverUrlList** トラッキングサーバーの内部URL

**instanceName**&#x200B;承認するインスタンスの名前

**cryptedPassword**&#x200B;暗号化されたパスワード

## 戻り値

なし。

## 機能

**スキーマ：** [nms:trackingUrl](s-nms-trackingurl.md)

**静的：**

はい
