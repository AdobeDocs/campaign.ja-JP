---
source-git-commit: ffa29306eb4402ed20c7d04bdbbaffd4dde5bfe4
workflow-type: tm+mt
source-wordcount: '53'
ht-degree: 37%
---
# RegisterExternalInstance

(データベース識別子を設定することで) リダイレクションサーバー用のリレーサーバーのトラッキングインスタンスを承認します。

```text
RegisterExternalInstance ( String login, String instanceName, String dbId, Boolean saveParams )
```

## パラメーター

**login** リレーサーバーアクセス ログイン

**instanceName**&#x200B;承認するインスタンスの名前

配信を実行する顧客の&#x200B;**dbId** データベース ID

**saveParams**&#x200B;成功した場合の保存オプション

## 戻り値

なし。

## 機能

**スキーマ：** [nms:trackingUrl](s-nms-trackingurl.md)

**静的：**

はい
